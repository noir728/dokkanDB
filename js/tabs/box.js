// BOX Tab Logic - Collection Checklist with Settings Modal

// BOX State
let boxFilter = 'all'; // 'all', 'owned', 'unowned'
let boxSort = 'releaseDesc';
let statsCarouselIndex = 0;

// i18n Labels (basic support)
const i18n = {
    ja: {
        boxTitle: 'BOX',
        owned: '所持',
        unowned: '未所持',
        all: '全て',
        settings: '設定',
        appearance: '表示設定',
        theme: 'テーマ',
        dark: 'ダーク',
        light: 'ライト',
        language: '言語',
        dataManagement: 'データ管理',
        clearCache: 'キャッシュクリア',
        factoryReset: '初期化',
        exportData: 'データ出力',
        importData: 'データ読込',
        about: 'アプリについて',
        disclaimer: '本アプリは非公式ファンアプリです。\n©BANDAI NAMCO Entertainment Inc.\n運営会社とは一切関係ありません。',
        confirmReset: '全てのユーザーデータを削除しますか？\nこの操作は取り消せません。',
        exportSuccess: 'クリップボードにコピーしました',
        importSuccess: 'データを復元しました',
        importError: 'データ形式が不正です',
        cacheCleared: 'キャッシュをクリアしました',
        lrOwned: 'LR所持',
        urOwned: 'UR所持',
        totalOwned: '総所持'
    },
    en: {
        boxTitle: 'BOX',
        owned: 'Owned',
        unowned: 'Not Owned',
        all: 'All',
        settings: 'Settings',
        appearance: 'Appearance',
        theme: 'Theme',
        dark: 'Dark',
        light: 'Light',
        language: 'Language',
        dataManagement: 'Data Management',
        clearCache: 'Clear Cache',
        factoryReset: 'Factory Reset',
        exportData: 'Export Data',
        importData: 'Import Data',
        about: 'About',
        disclaimer: 'This is an unofficial fan app.\n©BANDAI NAMCO Entertainment Inc.\nNot affiliated with the official developers.',
        confirmReset: 'Delete all user data?\nThis cannot be undone.',
        exportSuccess: 'Copied to clipboard',
        importSuccess: 'Data restored',
        importError: 'Invalid data format',
        cacheCleared: 'Cache cleared',
        lrOwned: 'LR Owned',
        urOwned: 'UR Owned',
        totalOwned: 'Total Owned'
    }
};

function getLang() {
    return (state.settings && state.settings.language) || 'ja';
}

function t(key) {
    return i18n[getLang()][key] || i18n['ja'][key] || key;
}

// Initialize settings if not present
function initSettings() {
    if (!state.settings) {
        const saved = localStorage.getItem('dokkan_settings');
        if (saved) {
            state.settings = JSON.parse(saved);
        } else {
            state.settings = {
                theme: 'dark',
                language: 'ja'
            };
        }
        applyTheme(state.settings.theme);
    }
}

function saveSettings() {
    localStorage.setItem('dokkan_settings', JSON.stringify(state.settings));
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.settings.theme = theme;
    saveSettings();
}

// --- Main Render ---
function renderBoxLayout() {
    initSettings();

    const contentDiv = document.getElementById('main-content');
    if (!contentDiv) return;

    const stats = calculateBoxStats();
    const ownershipPercent = DB.length > 0 ? Math.round((stats.total / DB.length) * 100) : 0;

    contentDiv.innerHTML = `
        <div class="box-container">
            <!-- Header -->
            <div class="box-header">
                <div class="box-header-top">
                    <h2 class="box-title">${t('boxTitle')}</h2>
                    <button class="settings-btn" onclick="openSettingsModal()">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Ownership Bar -->
                <div class="ownership-section">
                    <div class="ownership-label">
                        <span>${t('owned')}: ${stats.total} / ${DB.length}</span>
                        <span class="ownership-percent">${ownershipPercent}%</span>
                    </div>
                    <div class="ownership-bar">
                        <div class="ownership-fill" style="width: ${ownershipPercent}%"></div>
                    </div>
                </div>

                <!-- Stats Carousel -->
                <div class="stats-carousel" id="stats-carousel">
                    <div class="stats-track">
                        <div class="stat-card">
                            <div class="stat-value">${stats.lr}</div>
                            <div class="stat-label">${t('lrOwned')}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${stats.ur}</div>
                            <div class="stat-label">${t('urOwned')}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${stats.total}</div>
                            <div class="stat-label">${t('totalOwned')}</div>
                        </div>
                    </div>
                </div>

                <!-- Filter Tabs -->
                <div class="box-filter-tabs">
                    <button class="box-filter-btn ${boxFilter === 'all' ? 'active' : ''}" onclick="setBoxFilter('all')">${t('all')}</button>
                    <button class="box-filter-btn ${boxFilter === 'owned' ? 'active' : ''}" onclick="setBoxFilter('owned')">${t('owned')}</button>
                    <button class="box-filter-btn ${boxFilter === 'unowned' ? 'active' : ''}" onclick="setBoxFilter('unowned')">${t('unowned')}</button>
                </div>
            </div>

            <!-- Character Grid -->
            <div class="box-grid" id="box-grid"></div>
        </div>
    `;

    renderBoxGrid();
    setupBoxTouchHandlers();
}

function calculateBoxStats() {
    let lr = 0, ur = 0, total = 0;

    state.owned.forEach(id => {
        const char = DB.find(c => c.id === id);
        if (char) {
            total++;
            if (char.rarity === 'LR') lr++;
            else if (char.rarity === 'UR') ur++;
        }
    });

    return { lr, ur, total };
}

function setBoxFilter(filter) {
    boxFilter = filter;
    document.querySelectorAll('.box-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === t(filter));
    });
    renderBoxGrid();
}

function renderBoxGrid() {
    const grid = document.getElementById('box-grid');
    if (!grid) return;

    let chars = [...DB];

    // Apply filter
    if (boxFilter === 'owned') {
        chars = chars.filter(c => state.owned.includes(c.id));
    } else if (boxFilter === 'unowned') {
        chars = chars.filter(c => !state.owned.includes(c.id));
    }

    // Apply sort (release date desc by default)
    chars.sort((a, b) => {
        const getDate = (c) => [c.release, c.eza, c.seza].filter(d => d).sort().pop() || "";
        return getDate(b).localeCompare(getDate(a));
    });

    let html = '';
    chars.forEach(char => {
        const isOwned = state.owned.includes(char.id);
        const ownedClass = isOwned ? 'owned' : 'unowned';
        const iconHtml = typeof getCharIconHtml === 'function' ? getCharIconHtml(char) : `<div class="icon-fallback">${char.name[0]}</div>`;

        html += `
            <div class="box-char-icon ${ownedClass}" 
                 data-char-id="${char.id}"
                 onclick="toggleBoxOwned(${char.id}, this)">
                ${iconHtml}
                ${isOwned ? '<div class="owned-check">✓</div>' : ''}
            </div>
        `;
    });

    grid.innerHTML = html;
}

function toggleBoxOwned(id, element) {
    if (state.owned.includes(id)) {
        state.owned = state.owned.filter(oid => oid !== id);
        element.classList.remove('owned');
        element.classList.add('unowned');
        element.querySelector('.owned-check')?.remove();
    } else {
        state.owned.push(id);
        element.classList.remove('unowned');
        element.classList.add('owned');
        if (!element.querySelector('.owned-check')) {
            element.innerHTML += '<div class="owned-check">✓</div>';
        }
    }
    saveState();
    updateOwnershipBar();
}

function updateOwnershipBar() {
    const stats = calculateBoxStats();
    const ownershipPercent = DB.length > 0 ? Math.round((stats.total / DB.length) * 100) : 0;

    const label = document.querySelector('.ownership-label span:first-child');
    const percent = document.querySelector('.ownership-percent');
    const fill = document.querySelector('.ownership-fill');

    if (label) label.textContent = `${t('owned')}: ${stats.total} / ${DB.length}`;
    if (percent) percent.textContent = `${ownershipPercent}%`;
    if (fill) fill.style.width = `${ownershipPercent}%`;
}

// Long press for detail view
let boxLongPressTimer = null;
let boxIsLongPress = false;

function setupBoxTouchHandlers() {
    const grid = document.getElementById('box-grid');
    if (!grid) return;

    grid.addEventListener('touchstart', (e) => {
        const icon = e.target.closest('.box-char-icon');
        if (!icon) return;

        boxIsLongPress = false;
        boxLongPressTimer = setTimeout(() => {
            boxIsLongPress = true;
            if (navigator.vibrate) navigator.vibrate(50);
            const charId = parseInt(icon.dataset.charId);
            if (charId && typeof openDetail === 'function') {
                openDetail(charId);
            }
        }, 500);
    }, { passive: true });

    grid.addEventListener('touchend', () => {
        if (boxLongPressTimer) {
            clearTimeout(boxLongPressTimer);
            boxLongPressTimer = null;
        }
    });

    grid.addEventListener('touchmove', () => {
        if (boxLongPressTimer) {
            clearTimeout(boxLongPressTimer);
            boxLongPressTimer = null;
        }
    });
}

// --- Settings Modal ---
function openSettingsModal() {
    const overlay = document.createElement('div');
    overlay.className = 'settings-overlay';
    overlay.id = 'settings-overlay';
    overlay.onclick = (e) => { if (e.target === overlay) closeSettingsModal(); };

    const currentTheme = state.settings?.theme || 'dark';
    const currentLang = state.settings?.language || 'ja';

    overlay.innerHTML = `
        <div class="settings-modal">
            <div class="settings-header">
                <h3>${t('settings')}</h3>
                <button class="settings-close" onclick="closeSettingsModal()">×</button>
            </div>
            <div class="settings-content">
                <!-- Appearance -->
                <div class="settings-section">
                    <h4 class="settings-section-title">${t('appearance')}</h4>
                    <div class="settings-row">
                        <span>${t('theme')}</span>
                        <div class="theme-toggle">
                            <button class="theme-btn ${currentTheme === 'dark' ? 'active' : ''}" onclick="setTheme('dark')">${t('dark')}</button>
                            <button class="theme-btn ${currentTheme === 'light' ? 'active' : ''}" onclick="setTheme('light')">${t('light')}</button>
                        </div>
                    </div>
                    <div class="settings-row">
                        <span>${t('language')}</span>
                        <div class="lang-toggle">
                            <button class="lang-btn ${currentLang === 'ja' ? 'active' : ''}" onclick="setLanguage('ja')">日本語</button>
                            <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" onclick="setLanguage('en')">English</button>
                        </div>
                    </div>
                </div>

                <!-- Data Management -->
                <div class="settings-section">
                    <h4 class="settings-section-title">${t('dataManagement')}</h4>
                    <div class="settings-buttons">
                        <button class="settings-action-btn" onclick="exportUserData()">${t('exportData')}</button>
                        <button class="settings-action-btn" onclick="showImportDialog()">${t('importData')}</button>
                        <button class="settings-action-btn" onclick="clearAppCache()">${t('clearCache')}</button>
                        <button class="settings-action-btn danger" onclick="factoryReset()">${t('factoryReset')}</button>
                    </div>
                </div>

                <!-- About -->
                <div class="settings-section about">
                    <h4 class="settings-section-title">${t('about')}</h4>
                    <p class="disclaimer">${t('disclaimer').replace(/\n/g, '<br>')}</p>
                    <p class="version">Version 1.0.0</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('visible'));
}

function closeSettingsModal() {
    const overlay = document.getElementById('settings-overlay');
    if (overlay) {
        overlay.classList.remove('visible');
        setTimeout(() => overlay.remove(), 200);
    }
}

function setTheme(theme) {
    applyTheme(theme);
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === t(theme));
    });
}

function setLanguage(lang) {
    state.settings.language = lang;
    saveSettings();
    closeSettingsModal();
    renderBoxLayout(); // Re-render with new language
}

function exportUserData() {
    const data = {
        owned: state.owned,
        favorites: state.favorites,
        teams: state.teams,
        settings: state.settings
    };
    const json = JSON.stringify(data, null, 2);

    navigator.clipboard.writeText(json).then(() => {
        showToast(t('exportSuccess'));
    }).catch(() => {
        // Fallback for clipboard API not available
        const textarea = document.createElement('textarea');
        textarea.value = json;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        showToast(t('exportSuccess'));
    });
}

function showImportDialog() {
    const dialog = document.createElement('div');
    dialog.className = 'import-dialog-overlay';
    dialog.id = 'import-dialog';
    dialog.onclick = (e) => { if (e.target === dialog) dialog.remove(); };

    dialog.innerHTML = `
        <div class="import-dialog">
            <h4>${t('importData')}</h4>
            <textarea id="import-textarea" placeholder="JSONデータを貼り付けてください..."></textarea>
            <div class="import-actions">
                <button onclick="document.getElementById('import-dialog').remove()">キャンセル</button>
                <button class="primary" onclick="importUserData()">インポート</button>
            </div>
        </div>
    `;

    document.body.appendChild(dialog);
}

function importUserData() {
    const textarea = document.getElementById('import-textarea');
    if (!textarea) return;

    try {
        const data = JSON.parse(textarea.value);

        if (data.owned) state.owned = data.owned;
        if (data.favorites) state.favorites = data.favorites;
        if (data.teams) state.teams = data.teams;
        if (data.settings) {
            state.settings = data.settings;
            applyTheme(state.settings.theme);
        }

        saveState();
        saveTeamState();
        saveSettings();

        document.getElementById('import-dialog')?.remove();
        closeSettingsModal();
        renderBoxLayout();
        showToast(t('importSuccess'));
    } catch (e) {
        showToast(t('importError'));
    }
}

function clearAppCache() {
    if ('caches' in window) {
        caches.keys().then(names => {
            names.forEach(name => caches.delete(name));
        });
    }
    showToast(t('cacheCleared'));
}

function factoryReset() {
    if (confirm(t('confirmReset'))) {
        localStorage.clear();
        window.location.reload();
    }
}

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Expose globally
window.renderBoxLayout = renderBoxLayout;
window.setBoxFilter = setBoxFilter;
window.toggleBoxOwned = toggleBoxOwned;
window.openSettingsModal = openSettingsModal;
window.closeSettingsModal = closeSettingsModal;
window.setTheme = setTheme;
window.setLanguage = setLanguage;
window.exportUserData = exportUserData;
window.showImportDialog = showImportDialog;
window.importUserData = importUserData;
window.clearAppCache = clearAppCache;
window.factoryReset = factoryReset;
