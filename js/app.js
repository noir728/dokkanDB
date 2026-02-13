// Ensure DB and other constants are available
// Google Apps Script Web App URL
const GAS_API_URL = "https://script.google.com/macros/s/AKfycby_qQCqh8sLYmIFyPEUWGLHByYOLewqa8CAweFN7xRGmYkZUNKOwGVQ2BTlKMiUzNksRA/exec";

// Ensure DB and other constants are available
let DB = (typeof CHARACTER_DATA !== 'undefined') ? CHARACTER_DATA : [];
const LINKS = (typeof LINK_SKILLS !== 'undefined') ? LINK_SKILLS : [];
const CATEGORY_LIST = (typeof MASTER_CATEGORIES !== 'undefined') ? MASTER_CATEGORIES : [];

const state = {
    currentTab: 'zukan',
    detailCharId: null,
    detailFormIndex: 0,
    detailEzaMode: 'normal',
    listMode: 'icon', // 'icon', 'detail', 'teamSelect'

    // Team State
    teams: [], // Array of team objects
    currentTeamIndex: 0,
    selectingSlot: null, // Index of slot being filled (0-6)

    owned: [],
    favorites: [],

    searchQuery: '',
    filter: {
        sort: 'releaseDesc',
        maxAwakening: false,
        rarities: [], rarityLogic: 'OR',
        types: [], typeLogic: 'OR',
        classes: [], classLogic: 'OR',
        status: [],
        eza: [], ezaLogic: 'OR',
        saTypes: [], saTypeLogic: 'OR',
        categories: [], categoryLogic: 'AND',
        links: [], linkLogic: 'AND',
        leaderSearch: false
    },
    scrollPositions: { zukan: 0, detail: 0, party: 0 },
    returnTab: null // 詳細画面からの戻り先タブ（編成タブから開いた場合は'party'）
};

const contentDiv = document.getElementById('main-content');
const tabs = document.querySelectorAll('.tab-btn');
const scrollTopBtn = document.getElementById('scroll-top-btn');

async function init() {
    // Show Loading
    showUpdateOverlay("データ読み込み中...");

    // Load Data from GAS
    await loadData();

    hideUpdateOverlay();

    // Load Owned/Fav
    const savedOwned = localStorage.getItem('dokkan_owned');
    if (savedOwned) state.owned = JSON.parse(savedOwned);
    const savedFav = localStorage.getItem('dokkan_fav');
    if (savedFav) state.favorites = JSON.parse(savedFav);

    // Load Filter State (for persistent settings like maxAwakening)
    const savedFilter = localStorage.getItem('dokkan_filter');
    if (savedFilter) {
        const parsed = JSON.parse(savedFilter);
        // Only restore persistent settings (maxAwakening), not transient filters
        if (parsed.maxAwakening !== undefined) {
            state.filter.maxAwakening = parsed.maxAwakening;
        }
    }

    // Load Teams
    initTeams();

    // Initialize Settings (i18n etc.)
    if (typeof initSettings === 'function') initSettings();
    updateTabLabels();

    if (typeof populateFilterOptions === 'function') populateFilterOptions();

    // URL Check
    const urlParams = new URLSearchParams(window.location.search);
    const charId = urlParams.get('id');
    if (charId && DB.some(c => c.id == charId)) {
        if (typeof openDetail === 'function') {
            openDetail(Number(charId), true);
        }
    } else {
        render();
    }

    // 初回ロード時の状態を履歴に刻む（戻った際のevent.state null対策）
    window.history.replaceState({
        filter: JSON.parse(JSON.stringify(state.filter)),
        searchQuery: state.searchQuery
    }, '', window.location.href);

    // Scroll Event - キャラ詳細画面のみでトップボタンを表示
    contentDiv.addEventListener('scroll', () => {
        if (state.detailCharId && contentDiv.scrollTop > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Pull-to-Refresh Setup
    setupPullToRefresh();

    // Popstate Event (Handle browser back/forward navigation)
    window.addEventListener('popstate', (event) => {
        const urlParams = new URLSearchParams(window.location.search);
        const charId = urlParams.get('id');

        if (charId && DB.some(c => c.id == charId)) {
            // Navigate to detail view
            state.detailCharId = Number(charId);
            state.detailFormIndex = 0;
            state.detailEzaMode = 'normal';
            state.animDirection = 'left'; // Coming from history, animate left

            // 履歴にフィルタ情報があれば復元
            if (event.state && event.state.filter) {
                state.filter = event.state.filter;
            }
            if (event.state && event.state.searchQuery !== undefined) {
                state.searchQuery = event.state.searchQuery;
            }
            if (typeof updateFilterUI === 'function') updateFilterUI();
            render();
        } else {
            // Navigate back to list view
            state.detailCharId = null;
            state.animDirection = 'left';

            // 履歴からフィルタ状態を復元
            if (event.state && event.state.filter) {
                state.filter = event.state.filter;
            } else if (!event.state) {
                // 初回ステートがない場合はデフォルト（initで刻んだはずだが念のため）
                if (typeof resetFilters === 'function') resetFilters();
            }

            if (event.state && event.state.searchQuery !== undefined) {
                state.searchQuery = event.state.searchQuery;
            }

            // Re-apply persistent maxAwakening setting from localStorage
            const savedFilter = localStorage.getItem('dokkan_filter');
            if (savedFilter) {
                const parsed = JSON.parse(savedFilter);
                if (parsed.maxAwakening !== undefined) {
                    state.filter.maxAwakening = parsed.maxAwakening;
                }
            }

            if (typeof updateFilterUI === 'function') updateFilterUI();
            render();
        }
    });

    // PWA & Service Worker Logic with Update Detection
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then((registration) => {
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (newWorker) {
                        showUpdateOverlay();
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'activated') {
                                // New service worker activated - reload to get fresh content
                                hideUpdateOverlay();
                                window.location.reload();
                            }
                        });
                    }
                });
            })
            .catch(console.error);

        // Detect controller change (SW update applied)
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            // Reload triggered by new SW
        });
    }
}


async function loadData() {
    const CACHE_KEY = 'dokkan_db_cache';
    const CACHE_TIMESTAMP_KEY = 'dokkan_db_cache_timestamp';

    // 1. まずキャッシュを読み込んで即座に表示
    try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
            const parsed = JSON.parse(cachedData);
            if (Array.isArray(parsed) && parsed.length > 0) {
                DB = parsed;
                window.DB = DB;
                const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
                console.log("Data loaded from cache:", DB.length, "records", timestamp ? `(cached: ${timestamp})` : '');
            }
        }
    } catch (cacheError) {
        console.warn("Cache read failed:", cacheError);
    }

    // 2. バックグラウンドでGASから最新データを取得
    try {
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 15000));
        const fetchPromise = fetch(GAS_API_URL);
        const response = await Promise.race([fetchPromise, timeout]);

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        if (Array.isArray(data)) {
            const oldCount = DB.length;
            DB = data;
            window.DB = DB;

            // キャッシュを更新
            try {
                localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                localStorage.setItem(CACHE_TIMESTAMP_KEY, new Date().toLocaleString('ja-JP'));
            } catch (saveError) {
                console.warn("Cache save failed (storage full?):", saveError);
            }

            console.log("Data loaded from GAS:", DB.length, "records");

            // データに変更があった場合、UIを再描画
            if (oldCount > 0 && oldCount !== DB.length) {
                console.log(`Data updated: ${oldCount} -> ${DB.length} records`);
                if (typeof render === 'function') render();
            }
        } else {
            console.warn("GAS returned empty or invalid data");
        }
    } catch (error) {
        console.warn("GAS Fetch failed, using cached/local data.", error);
        // キャッシュまたはCHARACTER_DATAを使用（既に読み込み済み）
    }
}

// --- Pull-to-Refresh ---
function setupPullToRefresh() {
    const indicator = document.getElementById('pull-refresh-indicator');
    if (!indicator) return;

    let touchStartY = 0;
    let isPulling = false;
    const PULL_THRESHOLD = 150; // px needed to trigger refresh（80→150に拡大）

    contentDiv.addEventListener('touchstart', (e) => {
        // Only trigger if at top of scroll
        if (contentDiv.scrollTop <= 0) {
            touchStartY = e.touches[0].clientY;
            isPulling = true;
        }
    }, { passive: true });

    contentDiv.addEventListener('touchmove', (e) => {
        if (!isPulling) return;

        const touchY = e.touches[0].clientY;
        const pullDistance = touchY - touchStartY;

        // Only show indicator when pulling down at top
        if (pullDistance > 0 && contentDiv.scrollTop <= 0) {
            const progress = Math.min(pullDistance / PULL_THRESHOLD, 1);
            indicator.style.opacity = progress;
            indicator.style.transform = `translateY(${Math.min(pullDistance * 0.5, 75)}px)`;

            if (progress >= 1) {
                indicator.classList.add('visible');
            } else {
                indicator.classList.remove('visible');
            }
        }
    }, { passive: true });

    contentDiv.addEventListener('touchend', () => {
        if (!isPulling) return;

        const isTriggered = indicator.classList.contains('visible');

        // Reset indicator
        indicator.style.opacity = '0';
        indicator.style.transform = 'translateY(-100%)';
        indicator.classList.remove('visible');
        isPulling = false;

        if (isTriggered) {
            // 確認ポップアップを表示
            showRefreshConfirmModal();
        }
    }, { passive: true });
}

// --- Refresh Confirm Modal ---
function showRefreshConfirmModal() {
    // 既存のモーダルがあれば削除
    const existing = document.getElementById('refresh-confirm-modal');
    if (existing) existing.remove();

    const modalHtml = `
        <div id="refresh-confirm-modal" class="modal-overlay open" style="z-index: 2000;">
            <div class="filter-modal scale-in" style="height: auto; max-width: 300px; padding: 20px;">
                <div style="text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 15px; color: #4cd964;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block; margin: 0 auto;"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
                    </div>
                    <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 15px;">データを更新しますか？</h3>
                    <p style="font-size: 12px; color: #aaa; margin-bottom: 20px;">最新のキャラクターデータをサーバーから取得します。</p>
                    <div style="display: flex; gap: 10px; justify-content: center;">
                        <button onclick="closeRefreshModal()" style="flex: 1; padding: 10px; background: #333; color: #fff; border: none; border-radius: 6px; font-size: 14px;">キャンセル</button>
                        <button onclick="confirmRefresh()" style="flex: 1; padding: 10px; background: #4cd964; color: #fff; border: none; border-radius: 6px; font-size: 14px; font-weight: bold;">更新する</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeRefreshModal() {
    const modal = document.getElementById('refresh-confirm-modal');
    if (modal) modal.remove();
}

function confirmRefresh() {
    closeRefreshModal();
    showUpdateOverlay('データ更新中...');
    setTimeout(() => {
        window.location.reload();
    }, 300);
}

// --- Update Overlay ---
function showUpdateOverlay(message) {
    const overlay = document.getElementById('update-overlay');
    if (overlay) {
        if (message) {
            const textEl = overlay.querySelector('.loading-text');
            if (textEl) textEl.textContent = message;
        }
        overlay.classList.remove('hidden');
    }
}

function hideUpdateOverlay() {
    const overlay = document.getElementById('update-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

function initTeams() {
    const savedTeams = localStorage.getItem('dokkan_teams');
    if (savedTeams) {
        state.teams = JSON.parse(savedTeams);
        // Migrate old data: ensure all teams have memo field
        state.teams.forEach(team => {
            if (team.memo === undefined) team.memo = '';
            if (!team.id) team.id = Date.now() + Math.random();
        });
    } else {
        // Initialize with 1 empty team (unlimited teams now)
        state.teams = [{
            id: Date.now(),
            name: 'チーム 1',
            label: '汎用',
            slots: [null, null, null, null, null, null, null],
            memo: ''
        }];
    }
    // Validate Current Index
    const savedIdx = localStorage.getItem('dokkan_current_team_idx');
    if (savedIdx !== null) state.currentTeamIndex = parseInt(savedIdx, 10);
    if (state.currentTeamIndex >= state.teams.length) state.currentTeamIndex = 0;

    // Load slot potentials
    const savedPotentials = localStorage.getItem('dokkan_slot_potentials');
    if (savedPotentials) {
        state.slotPotentials = JSON.parse(savedPotentials);
    } else {
        state.slotPotentials = {};
    }
}

function saveState() {
    localStorage.setItem('dokkan_owned', JSON.stringify(state.owned));
    localStorage.setItem('dokkan_fav', JSON.stringify(state.favorites));
}

function saveTeamState() {
    localStorage.setItem('dokkan_teams', JSON.stringify(state.teams));
    localStorage.setItem('dokkan_current_team_idx', state.currentTeamIndex);
    if (state.slotPotentials) {
        localStorage.setItem('dokkan_slot_potentials', JSON.stringify(state.slotPotentials));
    }
}

function saveFilterState() {
    // Save only persistent filter settings
    const persistentFilter = {
        maxAwakening: state.filter.maxAwakening
    };
    localStorage.setItem('dokkan_filter', JSON.stringify(persistentFilter));
}

function switchTab(tabName) {
    if (state.currentTab !== tabName) {
        if (contentDiv) state.scrollPositions[state.currentTab] = contentDiv.scrollTop;
    }

    state.currentTab = tabName;

    // Reset Detail
    if (state.detailCharId) {
        state.detailCharId = null;
        const url = new URL(window.location);
        url.searchParams.delete('id');
        window.history.pushState({ filter: state.filter }, '', url);
    }

    // Reset Selection Mode when switching tabs (including when switching to zukan)
    if (state.listMode === 'teamSelect') {
        state.listMode = 'icon';
        state.selectingSlot = null;
    }

    updateTabUI();
    render();

    if (contentDiv) {
        contentDiv.scrollTop = state.scrollPositions[tabName] || 0;
    }
}

// Update tab bar labels based on current language
function updateTabLabels() {
    if (typeof t !== 'function') return;
    const tabLabels = {
        'zukan': 'tabZukan',
        'events': 'tabEvents',
        'party': 'tabParty',
        'box': 'tabBox'
    };
    document.querySelectorAll('.tab-btn').forEach(btn => {
        const match = btn.getAttribute('onclick')?.match(/switchTab\('(\w+)'\)/);
        if (match && tabLabels[match[1]]) {
            const span = btn.querySelector('span');
            if (span) span.textContent = t(tabLabels[match[1]]);
        }
    });
}

function updateTabUI() {
    tabs.forEach(t => t.classList.remove('active'));
    // teamSelectモード中は見た目上「編成」タブをアクティブにする
    let displayTab = state.currentTab;
    if (state.listMode === 'teamSelect' && state.currentTab === 'zukan') {
        displayTab = 'party';
    }
    const activeBtn = document.querySelector(`button[onclick="switchTab('${displayTab}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function render() {
    contentDiv.innerHTML = '';

    // Detail View
    if (state.detailCharId) {
        if (typeof renderCharacterDetail === 'function') renderCharacterDetail(state.detailCharId);
        return;
    }

    // Tabs
    if (state.currentTab === 'zukan') {
        if (typeof renderZukanLayout === 'function') renderZukanLayout();
    } else if (state.currentTab === 'party') {
        // Defined in team.js
        if (typeof renderTeamLayout === 'function') renderTeamLayout();
        else contentDiv.innerHTML = '<div style="padding:20px; text-align:center;">Team Module Loading...</div>';
    } else if (state.currentTab === 'box') {
        // Defined in box.js
        if (typeof renderBoxLayout === 'function') renderBoxLayout();
        else contentDiv.innerHTML = '<div style="padding:20px; text-align:center;">Box Module Loading...</div>';
    } else {
        contentDiv.innerHTML = `<div style="padding:20px;text-align:center;color:#888;">${state.currentTab} (開発中)</div>`;
    }
}

// Common Actions
function toggleFav(btn, id) {
    if (event) event.stopPropagation();
    if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(fid => fid !== id);
        if (btn) btn.classList.remove('active');
    } else {
        state.favorites.push(id);
        if (btn) btn.classList.add('active');
    }
    saveState();
}

function toggleOwned(btn, id) {
    if (event) event.stopPropagation();
    if (state.owned.includes(id)) {
        state.owned = state.owned.filter(oid => oid !== id);
        if (btn) btn.classList.remove('active');
    } else {
        state.owned.push(id);
        if (btn) btn.classList.add('active');
    }
    saveState();
}

// Expose globals
window.init = init;
window.switchTab = switchTab;
window.toggleFav = toggleFav;
window.toggleOwned = toggleOwned;
window.state = state;
window.DB = DB;
window.LINKS = LINKS;
window.CATEGORY_LIST = CATEGORY_LIST;
window.saveTeamState = saveTeamState;
window.saveFilterState = saveFilterState;
window.updateTabLabels = updateTabLabels;