// Ensure DB and other constants are available
const DB = (typeof CHARACTER_DATA !== 'undefined') ? CHARACTER_DATA : [];
const LINKS = (typeof LINK_SKILLS !== 'undefined') ? LINK_SKILLS : {};
const CATEGORY_LIST = (typeof MASTER_CATEGORIES !== 'undefined') ? MASTER_CATEGORIES : [];

const state = {
    currentTab: 'zukan',
    detailCharId: null,
    detailFormIndex: 0,
    detailEzaMode: 'normal', // normal, eza, seza
    listMode: 'icon',
    owned: [],
    favorites: [],
    
    searchQuery: '',
    filter: { 
        sort: 'releaseDesc',
        rarities: [], rarityLogic: 'OR',
        types: [], typeLogic: 'OR',
        classes: [], classLogic: 'OR',
        status: [], 
        eza: [], ezaLogic: 'OR',
        saTypes: [], saTypeLogic: 'OR',
        categories: [], categoryLogic: 'AND',
        links: [], linkLogic: 'AND'
    },
    scrollPositions: { zukan: 0, detail: 0 }
};

const contentDiv = document.getElementById('main-content');
const tabs = document.querySelectorAll('.tab-btn');
const scrollTopBtn = document.getElementById('scroll-top-btn');
const filterModal = document.getElementById('filter-modal');
const RARITY_RANK = { 'LR': 5, 'UR': 4, 'SSR': 3, 'SR': 2, 'R': 1, 'N': 0 };

function init() {
    const savedOwned = localStorage.getItem('dokkan_owned');
    if(savedOwned) state.owned = JSON.parse(savedOwned);
    const savedFav = localStorage.getItem('dokkan_fav');
    if(savedFav) state.favorites = JSON.parse(savedFav);
    
    if(typeof populateFilterOptions === 'function') populateFilterOptions();
    
    // ▼▼▼ 初期ロード: URLパラメータのチェック ▼▼▼
    const urlParams = new URLSearchParams(window.location.search);
    const charId = urlParams.get('id');
    if (charId && DB.some(c => c.id == charId)) {
        if(typeof openDetail === 'function') {
            openDetail(Number(charId), true); 
        }
    } else {
        render(); 
    }
    
    contentDiv.addEventListener('scroll', () => {
        if (contentDiv.scrollTop > 300) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
    });

    // --- Task 2: Pull to Refresh ---
    const pullIndicator = document.getElementById('pull-refresh-indicator');
    let pullStartY = 0;
    let isPulling = false;

    if (pullIndicator) {
        contentDiv.addEventListener('touchstart', (e) => {
            if (contentDiv.scrollTop === 0) {
                pullStartY = e.touches[0].clientY;
                isPulling = true;
            } else {
                isPulling = false;
            }
        }, { passive: true });

        contentDiv.addEventListener('touchmove', (e) => {
            if (!isPulling) return;
            const y = e.touches[0].clientY;
            const diff = y - pullStartY;

            if (diff > 0 && contentDiv.scrollTop <= 0) {
                // Threshold to show indicator (e.g. 80px)
                if (diff > 80) {
                    pullIndicator.classList.add('visible');
                } else {
                    pullIndicator.classList.remove('visible');
                }
            }
        }, { passive: true });

        contentDiv.addEventListener('touchend', (e) => {
            if (!isPulling) return;
            isPulling = false;
            if (pullIndicator.classList.contains('visible')) {
                // Keep visible and reload
                window.location.reload();
            }
        });
    }
    
    // --- Task 1: Service Worker Logic ---
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').then(reg => {
            
            // 1. Waiting Handling
            if (reg.waiting) {
                showUpdateLoading();
                reg.waiting.postMessage({ type: 'SKIP_WAITING' });
                return;
            }

            // 2. Update Found Handling
            reg.onupdatefound = () => {
                const installingWorker = reg.installing;
                if (!installingWorker) return;

                // Wait for installed state
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // Update available
                            showUpdateLoading();
                            installingWorker.postMessage({ type: 'SKIP_WAITING' });
                        } else {
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            };
        }).catch(err => {
            console.error('Service Worker registration failed:', err);
        });

        // 3. Controller Change Reload
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            refreshing = true;
            window.location.reload();
        });
    }

    // --- Task 3: PWA Install Banner ---
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    const banner = document.getElementById('pwa-install-banner');

    if (!isStandalone && banner) {
        // Android/Chrome
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            banner.classList.remove('hidden');

            const installBtn = document.getElementById('pwa-install-btn');
            if(installBtn) {
                installBtn.onclick = () => {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                        }
                        deferredPrompt = null;
                        banner.classList.add('hidden');
                    });
                };
            }
        });

        // iOS Detection
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
             // Show iOS instructions
             banner.classList.remove('hidden');
             const title = banner.querySelector('.pwa-title');
             const desc = banner.querySelector('.pwa-desc');
             const installBtn = document.getElementById('pwa-install-btn');

             if(title) title.innerText = "ホーム画面に追加";
             if(desc) desc.innerText = "「共有」ボタン → 「ホーム画面に追加」";
             if(installBtn) installBtn.style.display = 'none';
        }

        const closeBtn = document.getElementById('pwa-close-btn');
        if(closeBtn) {
            closeBtn.onclick = () => {
                banner.classList.add('hidden');
            };
        }
    }
}

// ロード画面を表示する関数
function showUpdateLoading() {
    const overlay = document.getElementById('update-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

// ▼▼▼ Popstate Handler (Improved) ▼▼▼
window.addEventListener('popstate', (event) => {
    // 1. Restore Filters
    if (event.state) {
        if (event.state.filter) state.filter = event.state.filter;
        if (event.state.searchQuery !== undefined) state.searchQuery = event.state.searchQuery;
    } else {
        // Reset if no state (e.g. back to initial)
        if (typeof resetFilters === 'function') resetFilters(); 
    }

    // 2. Navigation Logic
    // Compare new desired ID (event.state.id) with current (state.detailCharId)
    const newId = (event.state && event.state.id) ? event.state.id : null;
    const currentId = state.detailCharId;

    if (newId) {
        // Moving to Detail (from List or another Detail)
        state.detailCharId = newId;
        state.detailFormIndex = 0;
        state.detailEzaMode = 'normal';
        state.animDirection = 'right'; // Entering detail
    } else {
        // Moving to List
        state.detailCharId = null;
        state.animDirection = 'left'; // Returning to list
    }

    // Force Render
    // Task 3: Defer render to unblock UI thread during swipe transition
    setTimeout(() => {
        render();
    }, 50);
});

function saveState() {
    localStorage.setItem('dokkan_owned', JSON.stringify(state.owned));
    localStorage.setItem('dokkan_fav', JSON.stringify(state.favorites));
}

function switchTab(tabName) { 
    if (state.currentTab !== tabName) {
        // Save current scroll position
        if (contentDiv) state.scrollPositions[state.currentTab] = contentDiv.scrollTop;
    }

    state.currentTab = tabName; 
    
    // Animate transition
    if (contentDiv) {
        contentDiv.classList.remove('fade-in');
        void contentDiv.offsetWidth; // Trigger reflow
        contentDiv.classList.add('fade-in');
    }

    // Clear Detail State when switching tabs
    if (state.detailCharId) {
        state.detailCharId = null;
        const url = new URL(window.location);
        url.searchParams.delete('id');
        // Push a clean state for the new tab
        window.history.pushState({ filter: state.filter, searchQuery: state.searchQuery }, '', url);
    }
    updateTabUI(); 
    render(); 

    // Restore scroll position
    if (contentDiv) {
        contentDiv.scrollTop = state.scrollPositions[tabName] || 0;
    }
}

function updateTabUI() {
    tabs.forEach(t => t.classList.remove('active'));
    const activeBtn = document.querySelector(`button[onclick="switchTab('${state.currentTab}')"]`);
    if(activeBtn) activeBtn.classList.add('active');
}

function render() {
    contentDiv.innerHTML = '';
    // Detail View Check
    if (state.detailCharId) { 
        // Defined in zukan.js
        if(typeof renderCharacterDetail === 'function') renderCharacterDetail(state.detailCharId); 
        return; 
    }
    
    if (state.currentTab === 'zukan') {
        if(typeof renderZukanLayout === 'function') renderZukanLayout();
    } else {
        contentDiv.innerHTML = `<div style="padding:20px;text-align:center;color:#888;">${state.currentTab} (開発中)</div>`;
    }
}

// Common Actions
function toggleFav(btn, id) {
    if(event) event.stopPropagation();
    if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(fid => fid !== id);
        if(btn) btn.classList.remove('active');
    } else {
        state.favorites.push(id);
        if(btn) btn.classList.add('active');
    }
    saveState();
}

function toggleOwned(btn, id) {
    if(event) event.stopPropagation();
    if (state.owned.includes(id)) {
        state.owned = state.owned.filter(oid => oid !== id);
        if(btn) btn.classList.remove('active');
    } else {
        state.owned.push(id);
        if(btn) btn.classList.add('active');
    }
    saveState();
}

// Expose to window for HTML onclick attributes
window.init = init;
window.switchTab = switchTab;
window.toggleFav = toggleFav;
window.toggleOwned = toggleOwned;
window.state = state; // Shared state
window.DB = DB;
window.LINKS = LINKS;
window.CATEGORY_LIST = CATEGORY_LIST;