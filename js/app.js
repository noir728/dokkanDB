// Ensure DB and other constants are available
const DB = (typeof CHARACTER_DATA !== 'undefined') ? CHARACTER_DATA : [];
const LINKS = (typeof LINK_SKILLS !== 'undefined') ? LINK_SKILLS : {};
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
        rarities: [], rarityLogic: 'OR',
        types: [], typeLogic: 'OR',
        classes: [], classLogic: 'OR',
        status: [],
        eza: [], ezaLogic: 'OR',
        saTypes: [], saTypeLogic: 'OR',
        categories: [], categoryLogic: 'AND',
        links: [], linkLogic: 'AND'
    },
    scrollPositions: { zukan: 0, detail: 0, party: 0 }
};

const contentDiv = document.getElementById('main-content');
const tabs = document.querySelectorAll('.tab-btn');
const scrollTopBtn = document.getElementById('scroll-top-btn');

function init() {
    // Load Owned/Fav
    const savedOwned = localStorage.getItem('dokkan_owned');
    if (savedOwned) state.owned = JSON.parse(savedOwned);
    const savedFav = localStorage.getItem('dokkan_fav');
    if (savedFav) state.favorites = JSON.parse(savedFav);

    // Load Teams
    initTeams();

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

    // Scroll Event
    contentDiv.addEventListener('scroll', () => {
        if (contentDiv.scrollTop > 300) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
    });

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
            render();
        } else {
            // Navigate back to list view
            state.detailCharId = null;
            state.animDirection = 'left';
            // Restore filter state from history if available
            if (event.state && event.state.filter) {
                state.filter = event.state.filter;
            }
            if (event.state && event.state.searchQuery !== undefined) {
                state.searchQuery = event.state.searchQuery;
            }
            render();
        }
    });

    // PWA & Service Worker Logic (Simplified for brevity, keep your existing code)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').catch(console.error);
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
}

function saveState() {
    localStorage.setItem('dokkan_owned', JSON.stringify(state.owned));
    localStorage.setItem('dokkan_fav', JSON.stringify(state.favorites));
}

function saveTeamState() {
    localStorage.setItem('dokkan_teams', JSON.stringify(state.teams));
    localStorage.setItem('dokkan_current_team_idx', state.currentTeamIndex);
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

    // Reset Selection Mode if leaving zukan without selecting
    if (tabName !== 'zukan' && state.listMode === 'teamSelect') {
        state.listMode = 'icon';
        state.selectingSlot = null;
    }

    updateTabUI();
    render();

    if (contentDiv) {
        contentDiv.scrollTop = state.scrollPositions[tabName] || 0;
    }
}

function updateTabUI() {
    tabs.forEach(t => t.classList.remove('active'));
    const activeBtn = document.querySelector(`button[onclick="switchTab('${state.currentTab}')"]`);
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