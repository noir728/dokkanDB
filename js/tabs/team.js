// Team Builder Logic

function renderTeamLayout() {
    const contentDiv = document.getElementById('main-content');
    if (!contentDiv) return;

    contentDiv.innerHTML = '';

    // Calculate Stats & Prepare Data
    let totalHp = 0;
    let totalCost = 0;
    const teamData = state.team.map(id => {
        if (!id) return null;
        return DB.find(c => c.id === id);
    });

    teamData.forEach(char => {
        if (char) {
            totalCost += (char.cost || 0);

            // Stats Calculation
            let stats = { hp: 0 };
            if (char.forms && char.forms[0] && char.forms[0].stats) {
                stats = char.forms[0].stats.rainbow || char.forms[0].stats;
            } else if (char.stats) {
                stats = char.stats.rainbow || char.stats;
            }

            let hp = String(stats.hp || 0).replace(/,/g, '');
            totalHp += parseInt(hp, 10);
        }
    });

    // 1. Stats Header
    const statsHeader = document.createElement('div');
    statsHeader.className = 'team-stats-header';
    statsHeader.innerHTML = `
        <div class="team-stat-item"><span class="label">Total HP</span><span class="value">${totalHp.toLocaleString()}</span></div>
        <div class="team-stat-item"><span class="label">Total Cost</span><span class="value">${totalCost}</span></div>
    `;
    contentDiv.appendChild(statsHeader);

    // 2. Team Grid
    const grid = document.createElement('div');
    grid.className = 'team-grid';

    // Leader (Slot 0) & Friend (Slot 6)
    const leaderChar = teamData[0];
    const friendChar = teamData[6];

    for (let i = 0; i < 7; i++) {
        const char = teamData[i];
        const slotEl = document.createElement('div');
        slotEl.className = 'team-slot';

        let roleLabel = "";
        if (i === 0) { slotEl.classList.add('slot-leader'); roleLabel = "LEADER"; }
        else if (i === 6) { slotEl.classList.add('slot-friend'); roleLabel = "FRIEND"; }
        else { slotEl.classList.add('slot-sub'); roleLabel = `Sub ${i}`; }

        if (char) {
            // Char Icon
            const iconHtml = (typeof getCharIconHtml === 'function') ? getCharIconHtml(char) : '<img src="assets/placeholder.png">';

            // Phase 2: Leader Skill Analysis
            let lsBoost = 0;
            if (typeof calcLeaderBoost === 'function') {
                if (leaderChar) {
                    let mode = 'normal';
                    if (leaderChar.seza || leaderChar.leader_skill_seza) mode = 'seza';
                    else if (leaderChar.eza || leaderChar.leader_skill_eza || leaderChar.leaderSkill_eza) mode = 'eza';
                    lsBoost += calcLeaderBoost(leaderChar, char, mode);
                }
                if (friendChar) {
                    let mode = 'normal';
                    if (friendChar.seza || friendChar.leader_skill_seza) mode = 'seza';
                    else if (friendChar.eza || friendChar.leader_skill_eza || friendChar.leaderSkill_eza) mode = 'eza';
                    lsBoost += calcLeaderBoost(friendChar, char, mode);
                }
            }

            let badgeColor = "#555";
            if (lsBoost >= 400) badgeColor = "#ff4d4d";
            else if (lsBoost >= 340) badgeColor = "#ffaa00";
            else if (lsBoost >= 200) badgeColor = "#a7c51eff";
            else if (lsBoost > 0) badgeColor = "#5f5100ff";

            const lsBadge = `<div class="team-ls-badge" style="background:${badgeColor}">${lsBoost}%</div>`;

            slotEl.innerHTML = `
                <div class="slot-label">${roleLabel}</div>
                <div class="slot-content">
                    <div class="team-icon-wrapper">${iconHtml}</div>
                    ${lsBadge}
                </div>
            `;
            slotEl.onclick = () => openTeamSlotMenu(i, char.id);
        } else {
            // Empty
            slotEl.innerHTML = `
                <div class="slot-label">${roleLabel}</div>
                <div class="slot-empty">+</div>
            `;
            slotEl.onclick = () => startTeamSelection(i);
        }
        grid.appendChild(slotEl);
    }

    contentDiv.appendChild(grid);

    // 3. Actions
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'team-actions';
    actionsDiv.innerHTML = `
        <button class="btn-reset" onclick="clearTeam()">チームをクリア</button>
    `;
    contentDiv.appendChild(actionsDiv);
}

function startTeamSelection(index) {
    state.selectingSlot = index;
    // Set list mode for zukan
    state.listMode = 'select';

    // Switch to Zukan tab
    switchTab('zukan');

    // Update Zukan UI mode buttons if needed (handled in zukan.js via renderZukanList but switchTab calls render)
    // We need to ensure setListMode updates the UI
    if (typeof setListMode === 'function') setListMode('select');
}

function selectCharForTeam(charId) {
    state.team[state.selectingSlot] = charId;
    localStorage.setItem('dokkan_team', JSON.stringify(state.team));
    state.selectingSlot = null;

    // Reset list mode
    state.listMode = 'icon';
    if (typeof setListMode === 'function') setListMode('icon');

    switchTab('team');
}

function clearTeam() {
    if(confirm('チームをリセットしますか？')) {
        state.team = [null, null, null, null, null, null, null];
        localStorage.removeItem('dokkan_team');
        renderTeamLayout();
    }
}

function openTeamSlotMenu(index, charId) {
    const modalHtml = `
    <div id="team-slot-modal" class="modal-overlay open" onclick="closeTeamSlotMenu(event)">
        <div class="filter-modal slide-up-bottom" style="height:auto; padding:20px; bottom:0; top:auto; transform:none; width:100%; border-radius:16px 16px 0 0;">
            <div style="font-weight:bold; margin-bottom:15px; text-align:center;">スロット操作</div>
            <button class="btn-action" onclick="closeTeamSlotMenu(); openDetail(${charId});" style="width:100%; padding:12px; margin-bottom:8px; background:#444; color:#fff; border-radius:8px;">詳細を見る</button>
            <button class="btn-action" onclick="closeTeamSlotMenu(); startTeamSelection(${index});" style="width:100%; padding:12px; margin-bottom:8px; background:#444; color:#fff; border-radius:8px;">変更する</button>
            <button class="btn-action btn-danger" onclick="closeTeamSlotMenu(); removeFromTeam(${index});" style="width:100%; padding:12px; margin-bottom:15px; background:#d9534f; color:#fff; border-radius:8px;">外す</button>
            <button class="btn-cancel" onclick="closeTeamSlotMenu()" style="width:100%; padding:12px; background:#222; color:#aaa; border:1px solid #444; border-radius:8px;">キャンセル</button>
        </div>
    </div>`;

    // Remove existing if any
    const existing = document.getElementById('team-slot-modal');
    if (existing) existing.remove();

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeTeamSlotMenu(e) {
    if (e && e.target.id !== 'team-slot-modal' && !e.target.closest('button')) return;
    const el = document.getElementById('team-slot-modal');
    if(el) el.remove();
}

function removeFromTeam(index) {
    state.team[index] = null;
    localStorage.setItem('dokkan_team', JSON.stringify(state.team));
    renderTeamLayout();
}

// Expose
window.renderTeamLayout = renderTeamLayout;
window.startTeamSelection = startTeamSelection;
window.selectCharForTeam = selectCharForTeam;
window.clearTeam = clearTeam;
window.openTeamSlotMenu = openTeamSlotMenu;
window.closeTeamSlotMenu = closeTeamSlotMenu;
window.removeFromTeam = removeFromTeam;
