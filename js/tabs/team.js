// Team Builder Logic - Refactored for Dynamic Teams with Labels and Memos

// Default labels for team categorization
const TEAM_LABELS = ['全て', '汎用', '高難易度', '周回', '極限', 'バトロ', 'カテゴリ'];

// State for team tab
let expandedTeamId = null;
let currentLabelFilter = '全て';
let linkSectionExpanded = false;
let selectedLinkCharIndex = null;

function renderTeamLayout() {
    const contentDiv = document.getElementById('main-content');
    if (!contentDiv) return;

    // Save scroll position before re-render
    const savedScrollY = window.scrollY;

    // --- Label Filter Tabs ---
    let labelTabsHtml = '<div class="team-label-tabs">';
    TEAM_LABELS.forEach(label => {
        const activeClass = currentLabelFilter === label ? 'active' : '';
        labelTabsHtml += `<div class="team-label-tab ${activeClass}" onclick="filterTeamsByLabel('${label}')">${label}</div>`;
    });
    labelTabsHtml += '</div>';

    // --- Filter Teams by Label ---
    let filteredTeams = state.teams;
    if (currentLabelFilter !== '全て') {
        filteredTeams = state.teams.filter(t => t.label === currentLabelFilter);
    }

    // --- Team List ---
    let teamsListHtml = '<div class="team-list">';
    filteredTeams.forEach((team, idx) => {
        const realIndex = state.teams.indexOf(team);
        teamsListHtml += renderTeamCard(team, realIndex);
    });

    // Empty State
    if (filteredTeams.length === 0) {
        teamsListHtml += `<div class="team-empty-state">このラベルのチームはありません</div>`;
    }

    teamsListHtml += '</div>';

    // --- Add Team FAB ---
    const fabHtml = `
        <div class="team-add-fab" onclick="addNewTeam()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </div>
    `;

    contentDiv.innerHTML = `<div class="team-container-new">${labelTabsHtml}${teamsListHtml}${fabHtml}</div>`;

    // Restore scroll position after re-render
    requestAnimationFrame(() => {
        window.scrollTo(0, savedScrollY);
    });
}

function renderTeamCard(team, teamIndex) {
    const isExpanded = expandedTeamId === team.id;

    // --- Icon Row with Labels and LS Badges ---
    let iconsHtml = '<div class="team-icons-row">';
    for (let i = 0; i < 7; i++) {
        const charId = team.slots[i];
        const roleLabel = i === 0 ? 'リーダー' : (i === 6 ? 'フレンド' : '');
        const roleClass = i === 0 ? 'leader' : (i === 6 ? 'friend' : 'sub');

        let iconContent = '';
        let lsBadge = '';
        let hasChar = false;

        if (charId) {
            const char = DB.find(c => c.id === charId);
            if (char) {
                hasChar = true;
                iconContent = getCharIconHtml(char);
                lsBadge = calculateLsBadgeForSlot(char, teamIndex, i);
            } else {
                iconContent = '<div class="slot-placeholder">?</div>';
            }
        } else {
            iconContent = '<div class="slot-placeholder">+</div>';
        }

        iconsHtml += `
            <div class="team-icon-slot ${roleClass}" 
                 data-team-index="${teamIndex}" 
                 data-slot-index="${i}"
                 data-char-id="${charId || ''}"
                 onmousedown="handleSlotMouseDown(event, ${teamIndex}, ${i}, ${charId || 'null'})"
                 onmouseup="handleSlotMouseUp(event, ${teamIndex}, ${i})"
                 onmouseleave="handleSlotMouseLeave(event)"
                 ontouchstart="handleSlotTouchStart(event, ${teamIndex}, ${i}, ${charId || 'null'})"
                 ontouchend="handleSlotTouchEnd(event, ${teamIndex}, ${i})"
                 ontouchcancel="handleSlotTouchEnd(event, ${teamIndex}, ${i})">
                ${roleLabel ? `<div class="slot-role-label ${roleClass}">${roleLabel}</div>` : '<div class="slot-role-spacer"></div>'}
                <div class="team-icon-mini ${hasChar ? 'filled' : 'empty'}">
                    ${iconContent}
                </div>
                <div class="slot-ls-badge-container">${lsBadge}</div>
            </div>
        `;
    }
    iconsHtml += '</div>';

    // --- Compact Card ---
    let cardHtml = `
        <div class="team-card ${isExpanded ? 'expanded' : ''}" data-team-id="${team.id}">
            <div class="team-card-header" onclick="toggleTeamExpand(${team.id})">
                <div class="team-card-title">
                    <span class="team-card-name">${team.name || 'チーム'}</span>
                    <span class="team-card-label-badge">${team.label || '汎用'}</span>
                </div>
                <span class="team-card-arrow">${isExpanded ? '▲' : '▼'}</span>
            </div>
            ${iconsHtml}
    `;

    // --- Expanded Details (no editable slots, just stats/memo/actions) ---
    if (isExpanded) {
        const stats = calculateTeamStats(team);

        cardHtml += `
            <div class="team-expanded-content">
                <div class="team-stats-row">
                    <div class="team-stat-item">
                        <span class="team-stat-label">TOTAL HP</span>
                        <span class="team-stat-value">${stats.hp.toLocaleString()}</span>
                    </div>
                    <div class="team-stat-item">
                        <span class="team-stat-label">COST</span>
                        <span class="team-stat-value">${stats.cost}</span>
                    </div>
                </div>

                ${renderLinkCompatibilitySection(team, teamIndex)}

                <div class="team-memo-section">
                    <label class="team-memo-label">メモ</label>
                    <textarea class="team-memo-input" placeholder="メモを入力..." onchange="updateTeamMemo(${teamIndex}, this.value)">${team.memo || ''}</textarea>
                </div>

                <div class="team-actions-row">
                    <input type="text" class="team-name-edit" value="${team.name}" onchange="updateTeamName(${teamIndex}, this.value)" placeholder="チーム名">
                    <select class="team-label-edit" onchange="updateTeamLabel(${teamIndex}, this.value)">
                        ${TEAM_LABELS.filter(l => l !== '全て').map(l => `<option value="${l}" ${team.label === l ? 'selected' : ''}>${l}</option>`).join('')}
                    </select>
                </div>

                <div class="team-actions-row">
                    <button class="team-btn-clear" onclick="clearTeamSlots(${teamIndex})">スロットクリア</button>
                    <button class="team-btn-delete" onclick="deleteTeam(${teamIndex})">チーム削除</button>
                </div>
            </div>
        `;
    }

    cardHtml += '</div>';
    return cardHtml;
}

function renderEditableSlot(charId, teamIndex, slotIndex, label) {
    let content = '';
    let lsBadge = '';

    if (charId) {
        const char = DB.find(c => c.id === charId);
        if (char) {
            lsBadge = calculateLsBadgeForSlot(char, teamIndex, slotIndex);
            content = `
                ${getCharIconHtml(char)}
                <div class="slot-remove-btn" onclick="removeSlotChar(event, ${teamIndex}, ${slotIndex})">×</div>
                ${lsBadge}
            `;
        }
    } else {
        content = `<div class="slot-placeholder">+</div>`;
    }

    let labelColor = '#888';
    if (label === 'リーダー') labelColor = '#ffd700';
    if (label === 'フレンド') labelColor = '#00ccff';

    return `
        <div class="team-slot-wrapper">
            <div class="team-role-label" style="border-color:${labelColor}; color:${labelColor};">${label}</div>
            <div class="team-slot ${charId ? 'filled' : ''}" onclick="openTeamSelectNew(${teamIndex}, ${slotIndex})">
                ${content}
            </div>
        </div>
    `;
}

function calculateTeamStats(team) {
    let totalHp = 0;
    let totalCost = 0;

    team.slots.forEach(charId => {
        if (charId) {
            const char = DB.find(c => c.id === charId);
            if (char) {
                const stats = (char.forms && char.forms[0] && char.forms[0].stats) ? char.forms[0].stats : char.stats;
                if (stats) {
                    let hp = 0;
                    if (stats.rainbow) hp = parseInt(stats.rainbow.hp) || 0;
                    else if (stats.hp) hp = (parseInt(stats.hp) || 0) + 5000;
                    totalHp += hp;
                }
                if (char.cost) totalCost += char.cost;
            }
        }
    });

    return { hp: totalHp, cost: totalCost };
}

function calculateLsBadgeForSlot(char, teamIndex, slotIndex) {
    const team = state.teams[teamIndex];
    const leaderId = team.slots[0];
    const friendId = team.slots[6];

    if (!leaderId && !friendId) return '';

    let totalBoost = 0;

    if (leaderId) {
        const leader = DB.find(c => c.id === leaderId);
        if (leader && typeof calcLeaderBoost === 'function') {
            totalBoost += calcLeaderBoost(leader, char);
        }
    }

    if (friendId) {
        const friend = DB.find(c => c.id === friendId);
        if (friend && typeof calcLeaderBoost === 'function') {
            totalBoost += calcLeaderBoost(friend, char);
        }
    }

    let cssClass = 'ls-ok';
    if (totalBoost === 0) cssClass = 'ls-ng';

    return `<div class="ls-check-badge ${cssClass}">LS ${totalBoost}%</div>`;
}

// --- Actions ---

function filterTeamsByLabel(label) {
    currentLabelFilter = label;
    expandedTeamId = null;
    renderTeamLayout();
}

function toggleTeamExpand(teamId) {
    if (expandedTeamId === teamId) {
        expandedTeamId = null;
    } else {
        expandedTeamId = teamId;
    }
    renderTeamLayout();
}

function addNewTeam() {
    const newTeam = {
        id: Date.now(),
        name: `チーム ${state.teams.length + 1}`,
        label: currentLabelFilter !== '全て' ? currentLabelFilter : '汎用',
        slots: [null, null, null, null, null, null, null],
        memo: ''
    };
    state.teams.push(newTeam);
    expandedTeamId = newTeam.id;
    saveTeamState();
    renderTeamLayout();
}

function deleteTeam(teamIndex) {
    if (!confirm('このチームを削除しますか？')) return;
    state.teams.splice(teamIndex, 1);
    expandedTeamId = null;
    if (state.currentTeamIndex >= state.teams.length) {
        state.currentTeamIndex = Math.max(0, state.teams.length - 1);
    }
    saveTeamState();
    renderTeamLayout();
}

function clearTeamSlots(teamIndex) {
    if (!confirm('スロットをクリアしますか？')) return;
    state.teams[teamIndex].slots = [null, null, null, null, null, null, null];
    saveTeamState();
    renderTeamLayout();
}

function updateTeamName(teamIndex, value) {
    state.teams[teamIndex].name = value;
    saveTeamState();
}

function updateTeamLabel(teamIndex, value) {
    state.teams[teamIndex].label = value;
    saveTeamState();
}

function updateTeamMemo(teamIndex, value) {
    state.teams[teamIndex].memo = value;
    saveTeamState();
}

function removeSlotChar(e, teamIndex, slotIndex) {
    e.stopPropagation();
    state.teams[teamIndex].slots[slotIndex] = null;
    saveTeamState();
    renderTeamLayout();
}

function openTeamSelectNew(teamIndex, slotIndex) {
    state.currentTeamIndex = teamIndex;
    state.selectingSlot = slotIndex;
    state.listMode = 'teamSelect';

    state.currentTab = 'zukan';
    updateTabUI();
    renderZukanLayout();
}

function selectCharForTeam(charId) {
    const team = state.teams[state.currentTeamIndex];
    const slot = state.selectingSlot;

    if (slot !== null) {
        team.slots[slot] = charId;
        expandedTeamId = team.id;
        saveTeamState();

        state.selectingSlot = null;
        state.listMode = 'icon';

        switchTab('party');
    }
}

// Legacy compatibility
function changeTeam(delta) {
    let newIndex = state.currentTeamIndex + delta;
    if (newIndex < 0) newIndex = state.teams.length - 1;
    if (newIndex >= state.teams.length) newIndex = 0;
    state.currentTeamIndex = newIndex;
    saveTeamState();
    renderTeamLayout();
}

function updateTeamMeta(key, value) {
    state.teams[state.currentTeamIndex][key] = value;
    saveTeamState();
}

function clearTeam() {
    clearTeamSlots(state.currentTeamIndex);
}

function removeTeamChar(e, index) {
    removeSlotChar(e, state.currentTeamIndex, index);
}

function openTeamSelect(slotIndex) {
    openTeamSelectNew(state.currentTeamIndex, slotIndex);
}

// --- Long-Press Handler ---
let longPressTimer = null;
let isLongPress = false;
const LONG_PRESS_DURATION = 500; // ms

function handleSlotMouseDown(e, teamIndex, slotIndex, charId) {
    // Ignore if click originated from remove button
    if (e.target.classList.contains('slot-remove-btn')) return;

    isLongPress = false;
    longPressTimer = setTimeout(() => {
        isLongPress = true;
        if (charId) {
            openCharDetailFromTeam(charId);
        }
    }, LONG_PRESS_DURATION);
}

function handleSlotMouseUp(e, teamIndex, slotIndex) {
    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }
    if (!isLongPress) {
        // Short tap - open character select
        openTeamSelectNew(teamIndex, slotIndex);
    }
    isLongPress = false;
}

function handleSlotMouseLeave(e) {
    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }
    isLongPress = false;
}

function handleSlotTouchStart(e, teamIndex, slotIndex, charId) {
    // Ignore if touch originated from remove button
    if (e.target.classList.contains('slot-remove-btn')) return;

    e.preventDefault(); // Prevent scrolling during long press
    isLongPress = false;
    longPressTimer = setTimeout(() => {
        isLongPress = true;
        if (charId) {
            openCharDetailFromTeam(charId);
        }
    }, LONG_PRESS_DURATION);
}

function handleSlotTouchEnd(e, teamIndex, slotIndex) {
    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }
    if (!isLongPress) {
        // Short tap - open character select
        openTeamSelectNew(teamIndex, slotIndex);
    }
    isLongPress = false;
}

function handleRemoveClick(e, teamIndex, slotIndex) {
    e.stopPropagation();
    e.preventDefault();
    removeSlotChar(e, teamIndex, slotIndex);
}

function openCharDetailFromTeam(charId) {
    // Clear search and filter state to prevent restoration on back
    state.searchQuery = '';
    state.filter = {
        type: [], class: [], rarity: [], categories: [], links: [],
        owned: false, favorite: false, ezaOnly: false,
        saTypeLogic: 'AND', categoryLogic: 'AND', linkLogic: 'AND',
        sort: 'releaseDesc', saTypes: []
    };

    // Switch to Zukan tab and open detail
    state.currentTab = 'zukan';
    state.detailCharId = charId;
    state.detailFormIndex = 0;
    state.detailEzaMode = 'normal';
    state.animDirection = 'right';

    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('id', charId);
    window.history.pushState({ charId: charId }, '', url);

    updateTabUI();
    render();
}

// --- Link Compatibility Section ---
function calculateLinkMatches(char1, char2) {
    if (!char1 || !char2) return { count: 0, links: [] };

    // Get links from first form if available
    const links1 = (char1.forms && char1.forms[0] && char1.forms[0].links) ? char1.forms[0].links : (char1.links || []);
    const links2 = (char2.forms && char2.forms[0] && char2.forms[0].links) ? char2.forms[0].links : (char2.links || []);

    const set1 = new Set(links1);
    const matchingLinks = links2.filter(link => set1.has(link));

    return { count: matchingLinks.length, links: matchingLinks };
}

function renderLinkCompatibilitySection(team, teamIndex) {
    const sectionExpanded = linkSectionExpanded && expandedTeamId === team.id;

    let html = `
        <div id="link-section-${teamIndex}" class="team-link-section">
            <div class="team-link-header" onclick="toggleLinkSection(${team.id}, ${teamIndex})">
                <span>${sectionExpanded ? '▲' : '▼'} リンク相性</span>
            </div>
    `;

    if (sectionExpanded) {
        // Character selection row
        html += '<div class="link-char-select-row">';
        for (let i = 0; i < 7; i++) {
            const charId = team.slots[i];
            const isSelected = selectedLinkCharIndex === i;

            if (charId) {
                const char = DB.find(c => c.id === charId);
                if (char) {
                    html += `
                        <div class="link-char-item ${isSelected ? 'selected' : ''}" onclick="selectLinkChar(${team.id}, ${teamIndex}, ${i})">
                            <div class="link-char-icon">${getCharIconHtml(char)}</div>
                        </div>
                    `;
                } else {
                    html += `<div class="link-char-item empty"></div>`;
                }
            } else {
                html += `<div class="link-char-item empty"></div>`;
            }
        }
        html += '</div>';

        // Match results
        if (selectedLinkCharIndex !== null && team.slots[selectedLinkCharIndex]) {
            const selectedChar = DB.find(c => c.id === team.slots[selectedLinkCharIndex]);
            if (selectedChar) {
                html += '<div class="link-match-results">';

                const results = [];
                for (let i = 0; i < 7; i++) {
                    if (i === selectedLinkCharIndex) continue;
                    const otherCharId = team.slots[i];
                    if (!otherCharId) continue;

                    const otherChar = DB.find(c => c.id === otherCharId);
                    if (!otherChar) continue;

                    // Exclude same-name characters
                    if (selectedChar.name === otherChar.name) continue;

                    const match = calculateLinkMatches(selectedChar, otherChar);
                    const roleLabel = i === 0 ? 'リーダー' : (i === 6 ? 'フレンド' : `SUB${i}`);
                    results.push({ char: otherChar, roleLabel, match, slotIndex: i });
                }

                // Sort by match count descending
                results.sort((a, b) => b.match.count - a.match.count);

                results.forEach(r => {
                    const matchClass = r.match.count >= 5 ? 'excellent' : (r.match.count >= 3 ? 'good' : 'low');
                    html += `
                        <div class="link-match-row ${matchClass}">
                            <div class="link-match-icon">${getCharIconHtml(r.char)}</div>
                            <div class="link-match-info">
                                <div class="link-match-role">${r.roleLabel}</div>
                                <div class="link-match-count">${r.match.count}リンク</div>
                            </div>
                            <div class="link-match-names">${r.match.links.slice(0, 3).join(', ')}${r.match.links.length > 3 ? '...' : ''}</div>
                        </div>
                    `;
                });

                if (results.length === 0) {
                    html += '<div class="link-no-results">比較対象がありません</div>';
                }

                html += '</div>';
            }
        } else {
            html += '<div class="link-no-selection">キャラをタップして相性を確認</div>';
        }
    }

    html += '</div>';
    return html;
}

function toggleLinkSection(teamId, teamIndex) {
    if (expandedTeamId === teamId) {
        linkSectionExpanded = !linkSectionExpanded;
        if (!linkSectionExpanded) {
            selectedLinkCharIndex = null;
        }
    }
    updateLinkSectionUI(teamIndex);
}

function selectLinkChar(teamId, teamIndex, slotIndex) {
    if (expandedTeamId === teamId) {
        selectedLinkCharIndex = (selectedLinkCharIndex === slotIndex) ? null : slotIndex;
    }
    updateLinkSectionUI(teamIndex);
}

function updateLinkSectionUI(teamIndex) {
    const team = state.teams[teamIndex];
    if (!team) return;

    const container = document.getElementById(`link-section-${teamIndex}`);
    if (container) {
        // Partial update - just replace the section content
        const newHtml = renderLinkCompatibilitySection(team, teamIndex);
        // Create temp element to extract inner content
        const temp = document.createElement('div');
        temp.innerHTML = newHtml;
        const newContent = temp.firstElementChild;
        if (newContent) {
            container.innerHTML = newContent.innerHTML;
        }
    } else {
        // Fallback to full render if container not found
        renderTeamLayout();
    }
}

// Expose
window.renderTeamLayout = renderTeamLayout;
window.changeTeam = changeTeam;
window.updateTeamMeta = updateTeamMeta;
window.clearTeam = clearTeam;
window.removeTeamChar = removeTeamChar;
window.openTeamSelect = openTeamSelect;
window.selectCharForTeam = selectCharForTeam;
window.filterTeamsByLabel = filterTeamsByLabel;
window.toggleTeamExpand = toggleTeamExpand;
window.addNewTeam = addNewTeam;
window.deleteTeam = deleteTeam;
window.clearTeamSlots = clearTeamSlots;
window.updateTeamName = updateTeamName;
window.updateTeamLabel = updateTeamLabel;
window.updateTeamMemo = updateTeamMemo;
window.removeSlotChar = removeSlotChar;
window.openTeamSelectNew = openTeamSelectNew;
window.handleSlotMouseDown = handleSlotMouseDown;
window.handleSlotMouseUp = handleSlotMouseUp;
window.handleSlotMouseLeave = handleSlotMouseLeave;
window.handleSlotTouchStart = handleSlotTouchStart;
window.handleSlotTouchEnd = handleSlotTouchEnd;
window.handleRemoveClick = handleRemoveClick;
window.openCharDetailFromTeam = openCharDetailFromTeam;
window.toggleLinkSection = toggleLinkSection;
window.selectLinkChar = selectLinkChar;