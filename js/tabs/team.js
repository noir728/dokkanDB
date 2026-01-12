// Team Builder Logic - Refactored for Dynamic Teams with Labels and Memos

// Default labels for team categorization
const TEAM_LABELS = ['全て', '汎用', '高難易度', '周回', '極限', 'バトロ', 'カテゴリ'];

// State for team tab
let expandedTeamId = null;
let currentLabelFilter = '全て';
let linkSectionExpanded = false;
let selectedLinkCharIndex = null;
let linkCharFormIndices = {}; // リンク相性セクションで選択中の形態インデックス

// 解放率モーダル状態
let potentialModalState = null; // { teamId, slotIndex, potentials: [bool, bool, bool, bool] }

function renderTeamLayout() {
    const contentDiv = document.getElementById('main-content');
    if (!contentDiv) return;

    // Save scroll position before re-render
    const savedScrollY = contentDiv.scrollTop;

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
        contentDiv.scrollTop = savedScrollY;
    });
}

function renderTeamCard(team, teamIndex) {
    const isExpanded = expandedTeamId === team.id;

    // --- Helper function to generate slot HTML ---
    const generateSlotHtml = (slotIndex) => {
        const charId = team.slots[slotIndex];
        const roleLabel = slotIndex === 0 ? 'リーダー' : (slotIndex === 6 ? 'フレンド' : '');
        const roleClass = slotIndex === 0 ? 'leader' : (slotIndex === 6 ? 'friend' : 'sub');

        let iconContent = '';
        let lsBadge = '';
        let hasChar = false;

        if (charId) {
            const char = DB.find(c => c.id === charId);
            if (char) {
                hasChar = true;
                iconContent = getCharIconHtml(char);
                lsBadge = calculateLsBadgeForSlot(char, teamIndex, slotIndex);
            } else {
                iconContent = '<div class="slot-placeholder">?</div>';
            }
        } else {
            iconContent = '<div class="slot-placeholder">+</div>';
        }

        const potentialHtml = hasChar ? renderPotentialIcons(team.id, slotIndex) : '';

        return `
            <div class="team-icon-slot ${roleClass}" 
                 data-team-index="${teamIndex}" 
                 data-slot-index="${slotIndex}"
                 data-char-id="${charId || ''}"
                 onmousedown="handleSlotMouseDown(event, ${teamIndex}, ${slotIndex}, ${charId || 'null'})"
                 onmouseup="handleSlotMouseUp(event, ${teamIndex}, ${slotIndex})"
                 onmouseleave="handleSlotMouseLeave(event)"
                 ontouchstart="handleSlotTouchStart(event, ${teamIndex}, ${slotIndex}, ${charId || 'null'})"
                 ontouchmove="handleSlotTouchMove(event, ${teamIndex}, ${slotIndex})"
                 ontouchend="handleSlotTouchEnd(event, ${teamIndex}, ${slotIndex})"
                 ontouchcancel="handleSlotTouchEnd(event, ${teamIndex}, ${slotIndex})">
                ${roleLabel ? `<div class="slot-role-label ${roleClass}">${roleLabel}</div>` : '<div class="slot-role-spacer"></div>'}
                <div class="team-icon-mini ${hasChar ? 'filled' : 'empty'}">
                    ${iconContent}
                </div>
                <div class="slot-ls-badge-container">${lsBadge}</div>
                ${potentialHtml}
            </div>
        `;
    };

    // --- 上段: リーダー(0) + フレンド(6) ---
    let topRowHtml = '<div class="team-icons-row team-icons-top">';
    topRowHtml += generateSlotHtml(0);
    topRowHtml += generateSlotHtml(6);
    topRowHtml += '</div>';

    // --- 下段: サブ(1-5) ---
    let bottomRowHtml = '<div class="team-icons-row team-icons-bottom">';
    for (let i = 1; i <= 5; i++) {
        bottomRowHtml += generateSlotHtml(i);
    }
    bottomRowHtml += '</div>';

    const iconsHtml = topRowHtml + bottomRowHtml;

    // --- Compact Card ---
    let cardHtml = `
        <div class="team-card ${isExpanded ? 'expanded' : ''}" data-team-id="${team.id}">
            <div class="team-card-header" onclick="toggleTeamExpand(${team.id})">
                <div class="team-card-title">
                    <span class="team-card-name">${team.name || 'チーム'}</span>
                    <span class="team-card-label-badge">${team.label || '汎用'}</span>
                    <span class="team-card-edit-btn" onclick="event.stopPropagation(); openTeamEditModal(${teamIndex})">✏️</span>
                </div>
                <span class="team-card-arrow">${isExpanded ? '▲' : '▼'}</span>
            </div>
            ${iconsHtml}
    `;

    // --- Expanded Details ---
    if (isExpanded) {
        const stats = calculateTeamStats(team);

        cardHtml += `
            <div class="team-expanded-content">
                <div class="team-stats-qr-row">
                    <div class="team-stats-section">
                        <div class="team-stat-item">
                            <span class="team-stat-label">TOTAL HP</span>
                            <span class="team-stat-value">${stats.hp.toLocaleString()}</span>
                        </div>
                        <div class="team-stat-item">
                            <span class="team-stat-label">COST</span>
                            <span class="team-stat-value">${stats.cost}</span>
                        </div>
                    </div>
                    <div class="team-qr-section">
                        <div id="qr-container-${teamIndex}" class="team-qr-container"></div>
                        <div class="team-qr-btns">
                            <button class="qr-btn qr-btn-save" onclick="saveTeamQR(${teamIndex})" title="QR保存">💾</button>
                            <button class="qr-btn qr-btn-load" onclick="openQRLoadModal(${teamIndex})" title="QR読込">📷</button>
                        </div>
                    </div>
                </div>

                ${renderLinkCompatibilitySection(team, teamIndex)}

                <div class="team-memo-section">
                    <label class="team-memo-label">メモ</label>
                    <textarea class="team-memo-input" placeholder="メモを入力..." onchange="updateTeamMemo(${teamIndex}, this.value)">${team.memo || ''}</textarea>
                </div>

                <div class="team-actions-row">
                    <button class="team-btn-clear" onclick="clearTeamSlots(${teamIndex})">スロットクリア</button>
                    <button class="team-btn-delete" onclick="deleteTeam(${teamIndex})">チーム削除</button>
                </div>
            </div>
        `;

        // QRコード生成はレンダリング後に実行
        requestAnimationFrame(() => generateTeamQR(teamIndex));
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
    state.scrollPositions['zukan'] = 0; // スクロール位置をトップにリセット

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
let touchStartX = 0;
let touchStartY = 0;
let hasTouchMoved = false;
const LONG_PRESS_DURATION = 500; // ms
const MOVE_THRESHOLD = 10; // px

function handleSlotMouseDown(e, teamIndex, slotIndex, charId) {
    // Ignore if click originated from remove button or potential container
    if (e.target.classList.contains('slot-remove-btn')) return;
    if (e.target.closest('.slot-potential-container')) return;

    isLongPress = false;
    longPressTimer = setTimeout(() => {
        isLongPress = true;
        if (charId) {
            openCharDetailFromTeam(charId);
        }
    }, LONG_PRESS_DURATION);
}

function handleSlotMouseUp(e, teamIndex, slotIndex) {
    // Ignore if click originated from potential container
    if (e.target.closest('.slot-potential-container')) return;

    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }
    if (!isLongPress) {
        const team = state.teams[teamIndex];
        const charId = team.slots[slotIndex];
        if (charId) {
            // Filled slot - show popover
            showSlotPopover(e.target, teamIndex, slotIndex);
        } else {
            // Empty slot - open selection directly
            openTeamSelectNew(teamIndex, slotIndex);
        }
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
    // Ignore if touch originated from remove button or potential container
    if (e.target.classList.contains('slot-remove-btn')) return;
    if (e.target.closest('.slot-potential-container')) return;

    // Track touch position for scroll detection
    if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }
    hasTouchMoved = false;
    isLongPress = false;

    // Do NOT call e.preventDefault() - allow scrolling

    longPressTimer = setTimeout(() => {
        if (!hasTouchMoved) {
            isLongPress = true;
            if (navigator.vibrate) navigator.vibrate(50);
            if (charId) {
                openCharDetailFromTeam(charId);
            }
        }
    }, LONG_PRESS_DURATION);
}

function handleSlotTouchMove(e, teamIndex, slotIndex) {
    if (e.touches && e.touches[0]) {
        const diffX = Math.abs(e.touches[0].clientX - touchStartX);
        const diffY = Math.abs(e.touches[0].clientY - touchStartY);
        if (diffX > MOVE_THRESHOLD || diffY > MOVE_THRESHOLD) {
            hasTouchMoved = true;
            if (longPressTimer) {
                clearTimeout(longPressTimer);
                longPressTimer = null;
            }
        }
    }
}

function handleSlotTouchEnd(e, teamIndex, slotIndex) {
    // Ignore if touch originated from potential container
    if (e.target.closest('.slot-potential-container')) return;

    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }

    // Only trigger tap if no movement and no long press
    if (!isLongPress && !hasTouchMoved) {
        const team = state.teams[teamIndex];
        const charId = team.slots[slotIndex];
        if (charId) {
            // Filled slot - show popover
            const slot = e.target.closest('.team-icon-slot');
            showSlotPopover(slot, teamIndex, slotIndex);
        } else {
            // Empty slot - open selection directly
            openTeamSelectNew(teamIndex, slotIndex);
        }
    }
    isLongPress = false;
    hasTouchMoved = false;
}

function handleRemoveClick(e, teamIndex, slotIndex) {
    e.stopPropagation();
    e.preventDefault();
    removeSlotChar(e, teamIndex, slotIndex);
}

function openCharDetailFromTeam(charId) {
    // 戻り先を編成タブに設定
    state.returnTab = 'party';

    // キャラ詳細を開く（タブは切り替えない）
    state.detailCharId = charId;
    state.detailFormIndex = 0;
    state.detailEzaMode = 'normal';
    state.animDirection = 'right';

    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('id', charId);
    window.history.pushState({ charId: charId, returnTab: 'party' }, '', url);

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
                ${sectionExpanded ? '<span class="link-hint">長押しで形態変化</span>' : ''}
            </div>
    `;

    if (sectionExpanded) {
        // Character selection row
        html += '<div class="link-char-select-row">';
        for (let i = 0; i < 7; i++) {
            const charId = team.slots[i];
            const isSelected = selectedLinkCharIndex === i;
            const selectedFormIndex = linkCharFormIndices[i] || 0;

            if (charId) {
                const char = DB.find(c => c.id === charId);
                if (char) {
                    // 形態変化があるかチェック
                    const hasForms = char.forms && char.forms.length > 1;

                    // 選択中の形態のアイコンを取得
                    const iconHtml = getLinkCharIconHtml(char, selectedFormIndex);

                    html += `
                        <div class="link-char-item ${isSelected ? 'selected' : ''}" 
                             onclick="selectLinkChar(${team.id}, ${teamIndex}, ${i})"
                             oncontextmenu="event.preventDefault(); showLinkFormPopover(event, ${char.id}, ${teamIndex}, ${i});"
                             ontouchstart="handleLinkCharTouchStart(event, ${char.id}, ${teamIndex}, ${i})"
                             ontouchend="handleLinkCharTouchEnd(event, ${team.id}, ${teamIndex}, ${i})"
                             ontouchmove="handleLinkCharTouchMove(event)"
                             data-char-id="${char.id}"
                             data-team-index="${teamIndex}"
                             data-slot-index="${i}">
                            <div class="link-char-icon">${iconHtml}</div>
                            ${hasForms ? '<div class="form-indicator">◎</div>' : ''}
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
            const selectedFormIndex = linkCharFormIndices[selectedLinkCharIndex] || 0;
            if (selectedChar) {
                html += '<div class="link-match-results">';

                const results = [];

                // 全スロットのキャラとその形態変化キャラを対象に
                for (let i = 0; i < 7; i++) {
                    if (i === selectedLinkCharIndex) continue;
                    const otherCharId = team.slots[i];
                    if (!otherCharId) continue;

                    const otherChar = DB.find(c => c.id === otherCharId);
                    if (!otherChar) continue;

                    // Exclude same-name characters
                    if (selectedChar.name === otherChar.name) continue;

                    const roleLabel = i === 0 ? 'リーダー' : (i === 6 ? 'フレンド' : `SUB${i}`);

                    // 選択中の形態でリンク計算
                    const match = calculateLinkMatchesWithFormIndex(selectedChar, selectedFormIndex, otherChar, 0);
                    results.push({
                        char: otherChar,
                        roleLabel,
                        match,
                        slotIndex: i,
                        formIndex: 0
                    });

                    // 形態変化キャラのリンクも追加
                    if (otherChar.forms && otherChar.forms.length > 1) {
                        otherChar.forms.forEach((form, formIdx) => {
                            if (formIdx === 0) return; // 最初の形態はすでに追加済み
                            if (!form.links) return;
                            if (form.label === 'ビジュアルチェンジ' || form.name === 'ビジュアルチェンジ') return;

                            // 形態変化キャラ名が同じ場合はスキップ
                            const formName = form.name || otherChar.name;
                            if (selectedChar.name === formName) return;

                            const formMatch = calculateLinkMatchesWithFormIndex(selectedChar, selectedFormIndex, otherChar, formIdx);
                            if (formMatch.count > 0) {
                                results.push({
                                    char: otherChar,
                                    roleLabel,
                                    match: formMatch,
                                    slotIndex: i,
                                    formIndex: formIdx
                                });
                            }
                        });
                    }
                }

                // Sort by match count descending
                results.sort((a, b) => b.match.count - a.match.count);

                // 重複除去（同じスロット+形態で最高のマッチのみ表示）
                const seen = new Set();
                const uniqueResults = results.filter(r => {
                    const key = `${r.slotIndex}-${r.formIndex}`;
                    if (seen.has(key)) return false;
                    seen.add(key);
                    return true;
                });

                uniqueResults.forEach(r => {
                    const matchClass = r.match.count >= 5 ? 'excellent' : (r.match.count >= 3 ? 'good' : 'low');
                    // リンク先キャラのアイコン（形態変化時はその形態のアイコン）
                    const charIconHtml = getLinkCharIconHtml(r.char, r.formIndex);

                    // リンク効果を合計
                    const totalEffects = aggregateLinkEffects(r.match.links);

                    html += `
                        <div class="link-match-row ${matchClass}">
                            <div class="link-match-icon">${charIconHtml}</div>
                            <div class="link-match-info">
                                <div class="link-match-role">${r.roleLabel}</div>
                                <div class="link-match-count">${r.match.count}リンク</div>
                            </div>
                            <div class="link-match-names">${totalEffects}</div>
                        </div>
                    `;
                });

                if (uniqueResults.length === 0) {
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

// リンク効果を合計する関数
function aggregateLinkEffects(linkNames) {
    let ki = 0;
    let atk = 0;
    let def = 0;
    let atkDef = 0; // ATK,DEF同時上昇

    linkNames.forEach(linkName => {
        const skill = LINK_SKILLS[linkName];
        if (!skill) return;

        const effect = skill.lv10;

        // 気力パース
        const kiMatch = effect.match(/気力\+(\d+)/);
        if (kiMatch) ki += parseInt(kiMatch[1]);

        // ATK,DEF同時上昇パース
        const atkDefMatch = effect.match(/ATK,DEF(\d+)%UP/);
        if (atkDefMatch) {
            atkDef += parseInt(atkDefMatch[1]);
        } else {
            // ATK単独パース
            const atkMatch = effect.match(/ATK(\d+)%UP/);
            if (atkMatch) atk += parseInt(atkMatch[1]);

            // DEF単独パース
            const defMatch = effect.match(/DEF(\d+)%UP/);
            if (defMatch) def += parseInt(defMatch[1]);
        }
    });

    // 結果を組み立て
    const parts = [];
    if (ki > 0) parts.push(`気力+${ki}`);
    if (atk > 0 || atkDef > 0) parts.push(`ATK${atk + atkDef}%`);
    if (def > 0 || atkDef > 0) parts.push(`DEF${def + atkDef}%`);

    return parts.length > 0 ? parts.join(' ') : '-';
}

// 形態変化キャラ用のリンク計算
function calculateLinkMatchesWithForm(char1, form) {
    if (!char1 || !form || !form.links) return { count: 0, links: [] };

    const links1 = (char1.forms && char1.forms[0] && char1.forms[0].links) ? char1.forms[0].links : (char1.links || []);
    const links2 = form.links;

    const set1 = new Set(links1);
    const matchingLinks = links2.filter(link => set1.has(link));

    return { count: matchingLinks.length, links: matchingLinks };
}

// 形態インデックス指定でリンク計算
function calculateLinkMatchesWithFormIndex(char1, formIndex1, char2, formIndex2) {
    if (!char1 || !char2) return { count: 0, links: [] };

    // char1の指定形態のリンクを取得
    let links1 = [];
    if (char1.forms && char1.forms[formIndex1] && char1.forms[formIndex1].links) {
        links1 = char1.forms[formIndex1].links;
    } else if (char1.links) {
        links1 = char1.links;
    }

    // char2の指定形態のリンクを取得
    let links2 = [];
    if (char2.forms && char2.forms[formIndex2] && char2.forms[formIndex2].links) {
        links2 = char2.forms[formIndex2].links;
    } else if (char2.links) {
        links2 = char2.links;
    }

    const set1 = new Set(links1);
    const matchingLinks = links2.filter(link => set1.has(link));

    return { count: matchingLinks.length, links: matchingLinks };
}

// リンク相性セクション用のキャラアイコン取得（形態指定対応）
function getLinkCharIconHtml(char, formIndex = 0) {
    if (!char) return '';

    // デバッグログ
    console.log('getLinkCharIconHtml:', char.name, 'formIndex:', formIndex);

    // 形態データを取得
    const form = (char.forms && char.forms[formIndex]) ? char.forms[formIndex] : null;

    console.log('  form:', form ? `label=${form.label}, id=${form.id}` : 'null');

    // 形態指定時の処理（formIndex > 0 = 通常形態以外）
    if (form && formIndex > 0) {
        // 形態にIDがある場合はそのIDを使用（変身先など）
        if (form.id) {
            console.log('  Using form.id:', form.id);
            const formData = {
                id: form.id,
                type: form.type || char.type,
                rarity: form.rarity || char.rarity,
                class: form.class || char.class
            };
            return getCharIconHtml(char, formData, { hideStatus: true });
        }
        console.log('  No form.id, falling back to char.id');
    }

    // デフォルトは通常のアイコン（ステータス非表示）
    console.log('  Using default char.id:', char.id);
    return getCharIconHtml(char, null, { hideStatus: true });
}

// リンク相性キャラの長押しハンドラ
let linkCharLongPressTimer = null;
let linkCharIsLongPress = false;
const LINK_CHAR_LONG_PRESS_DURATION = 500;

function handleLinkCharTouchStart(event, charId, teamIndex, slotIndex) {
    linkCharIsLongPress = false;
    linkCharLongPressTimer = setTimeout(() => {
        linkCharIsLongPress = true;
        if (navigator.vibrate) navigator.vibrate(50);
        showLinkFormPopover(event, charId, teamIndex, slotIndex);
    }, LINK_CHAR_LONG_PRESS_DURATION);
}

function handleLinkCharTouchMove(event) {
    if (linkCharLongPressTimer) {
        clearTimeout(linkCharLongPressTimer);
        linkCharLongPressTimer = null;
    }
}

function handleLinkCharTouchEnd(event, teamId, teamIndex, slotIndex) {
    if (linkCharLongPressTimer) {
        clearTimeout(linkCharLongPressTimer);
        linkCharLongPressTimer = null;
    }
    // 長押しでなければ通常のタップ（キャラ選択）
    if (!linkCharIsLongPress) {
        selectLinkChar(teamId, teamIndex, slotIndex);
    }
    linkCharIsLongPress = false;
}

// リンク相性用形態選択ポップオーバー
function showLinkFormPopover(event, charId, teamIndex, slotIndex) {
    event.preventDefault();
    event.stopPropagation();

    closeFormPopover();

    const char = DB.find(c => c.id === charId);
    if (!char || !char.forms || char.forms.length <= 1) return;

    // 形態一覧を作成
    let formsHtml = '<div class="form-popover-list">';
    char.forms.forEach((form, idx) => {
        if (form.label === 'ビジュアルチェンジ' || form.name === 'ビジュアルチェンジ') return;

        // 形態ラベルを決定（個別ラベル優先）
        let label = '通常';
        if (idx === 0) {
            label = '通常';
        } else if (form.label) {
            label = form.label;
        } else if (form.name) {
            label = form.name;
        } else {
            label = '変身';
        }

        const formName = form.name || char.name;
        const isSelected = (linkCharFormIndices[slotIndex] || 0) === idx;
        formsHtml += `<div class="form-popover-item ${isSelected ? 'selected' : ''}" onclick="selectLinkCharForm(${teamIndex}, ${slotIndex}, ${idx})"><span class="form-popover-label">${label}</span><span class="form-popover-name">${formName}</span></div>`;
    });
    formsHtml += '</div>';

    // ポップオーバー作成
    const overlay = document.createElement('div');
    overlay.className = 'form-popover-overlay';
    overlay.onclick = closeFormPopover;

    const popover = document.createElement('div');
    popover.className = 'form-popover';
    popover.innerHTML = `<div class="form-popover-title">形態選択</div>${formsHtml}`;

    document.body.appendChild(overlay);
    document.body.appendChild(popover);

    // 位置調整
    const target = event.target.closest('.link-char-item');
    if (target) {
        const rect = target.getBoundingClientRect();
        popover.style.left = `${Math.max(10, rect.left - 50)}px`;
        popover.style.top = `${rect.bottom + 8}px`;

        // 画面外に出ないよう調整
        const popRect = popover.getBoundingClientRect();
        if (popRect.right > window.innerWidth - 10) {
            popover.style.left = `${window.innerWidth - popRect.width - 10}px`;
        }
    }

    activeFormPopover = { overlay, popover };
}

// 形態選択
function selectLinkCharForm(teamIndex, slotIndex, formIndex) {
    linkCharFormIndices[slotIndex] = formIndex;
    closeFormPopover();
    updateLinkSectionUI(teamIndex);
}



// 形態変化吹き出し表示
function showFormPopover(event, charId, teamIndex) {
    event.preventDefault();
    event.stopPropagation();

    closeFormPopover();

    const char = DB.find(c => c.id === charId);
    if (!char || !char.forms || char.forms.length <= 1) return;

    // 形態一覧を作成
    let formsHtml = '<div class="form-popover-list">';
    char.forms.forEach((form, idx) => {
        if (form.label === 'ビジュアルチェンジ' || form.name === 'ビジュアルチェンジ') return;

        let label = form.label || '通常';
        if (form.reversible_icon) {
            label = 'リバチェン';
        }
        const formName = form.name || char.name;
        formsHtml += `<div class="form-popover-item"><span class="form-popover-label">${label}</span><span class="form-popover-name">${formName}</span></div>`;
    });
    formsHtml += '</div>';

    // ポップオーバー作成
    const overlay = document.createElement('div');
    overlay.className = 'form-popover-overlay';
    overlay.onclick = closeFormPopover;

    const popover = document.createElement('div');
    popover.className = 'form-popover';
    popover.innerHTML = `<div class="form-popover-title">形態変化</div>${formsHtml}`;

    document.body.appendChild(overlay);
    document.body.appendChild(popover);

    // 位置調整
    const rect = event.target.closest('.link-char-item').getBoundingClientRect();
    popover.style.left = `${Math.max(10, rect.left - 50)}px`;
    popover.style.top = `${rect.bottom + 8}px`;

    // 画面外に出ないよう調整
    const popRect = popover.getBoundingClientRect();
    if (popRect.right > window.innerWidth - 10) {
        popover.style.left = `${window.innerWidth - popRect.width - 10}px`;
    }

    activeFormPopover = { overlay, popover };
}

let activeFormPopover = null;

function closeFormPopover() {
    if (activeFormPopover) {
        activeFormPopover.overlay.remove();
        activeFormPopover.popover.remove();
        activeFormPopover = null;
    }
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
window.handleSlotTouchMove = handleSlotTouchMove;
window.handleSlotTouchEnd = handleSlotTouchEnd;
window.handleRemoveClick = handleRemoveClick;
window.openCharDetailFromTeam = openCharDetailFromTeam;
window.toggleLinkSection = toggleLinkSection;
window.selectLinkChar = selectLinkChar;
window.showFormPopover = showFormPopover;
window.closeFormPopover = closeFormPopover;
window.showLinkFormPopover = showLinkFormPopover;
window.selectLinkCharForm = selectLinkCharForm;
window.handleLinkCharTouchStart = handleLinkCharTouchStart;
window.handleLinkCharTouchMove = handleLinkCharTouchMove;
window.handleLinkCharTouchEnd = handleLinkCharTouchEnd;


// --- Slot Popover Logic ---
let activePopover = null;

function showSlotPopover(slotElement, teamIndex, slotIndex) {
    closeSlotPopover(); // Close any existing popover

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'slot-popover-overlay';
    overlay.onclick = closeSlotPopover;

    // Create popover
    const popover = document.createElement('div');
    popover.className = 'slot-popover';
    popover.innerHTML = `
        <button class="slot-popover-btn" onclick="popoverSwap(${teamIndex}, ${slotIndex})">入れ替え</button>
        <button class="slot-popover-btn remove" onclick="popoverRemove(${teamIndex}, ${slotIndex})">外す</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popover);

    // Position popover near the slot
    const rect = slotElement.getBoundingClientRect();
    popover.style.left = `${rect.left + rect.width / 2 - 50}px`;
    popover.style.top = `${rect.bottom + 8}px`;

    // Adjust if off-screen
    const popRect = popover.getBoundingClientRect();
    if (popRect.right > window.innerWidth) {
        popover.style.left = `${window.innerWidth - popRect.width - 10}px`;
    }
    if (popRect.left < 0) {
        popover.style.left = '10px';
    }

    activePopover = { overlay, popover };
}

function closeSlotPopover() {
    if (activePopover) {
        activePopover.overlay.remove();
        activePopover.popover.remove();
        activePopover = null;
    }
}

function popoverSwap(teamIndex, slotIndex) {
    closeSlotPopover();
    openTeamSelectNew(teamIndex, slotIndex);
}

function popoverRemove(teamIndex, slotIndex) {
    closeSlotPopover();
    state.teams[teamIndex].slots[slotIndex] = null;
    saveTeamState();
    renderTeamLayout();
}

window.showSlotPopover = showSlotPopover;
window.closeSlotPopover = closeSlotPopover;
window.popoverSwap = popoverSwap;
window.popoverRemove = popoverRemove;

// ========================================
// QRコード共有機能
// ========================================

// チームデータをエンコード
function encodeTeamData(team) {
    // 解放率データを収集
    const potentials = {};
    for (let i = 0; i < 7; i++) {
        const key = `${team.id}-${i}`;
        if (state.slotPotentials && state.slotPotentials[key]) {
            potentials[i] = state.slotPotentials[key];
        }
    }

    const data = {
        n: team.name,
        l: team.label,
        s: team.slots,
        m: team.memo || '',
        p: potentials  // 解放率データ追加
    };
    return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}

// チームデータをデコード
function decodeTeamData(encoded) {
    try {
        const json = decodeURIComponent(escape(atob(encoded)));
        const data = JSON.parse(json);
        return {
            name: data.n || 'インポートチーム',
            label: data.l || '汎用',
            slots: data.s || [null, null, null, null, null, null, null],
            memo: data.m || '',
            potentials: data.p || {}  // 解放率データ追加
        };
    } catch (e) {
        console.error('QRデコードエラー:', e);
        return null;
    }
}

// QRコード生成
function generateTeamQR(teamIndex) {
    const team = state.teams[teamIndex];
    if (!team) {
        console.log('QR: team not found for index', teamIndex);
        return;
    }

    // タイミング問題を解決するため、遅延を増加
    setTimeout(() => {
        const containerId = `qr-container-${teamIndex}`;
        const container = document.getElementById(containerId);

        if (!container) {
            console.log('QR: container not found:', containerId);
            return;
        }

        // 既存のQRコードをクリア
        container.innerHTML = '';

        if (typeof QRCode === 'undefined') {
            console.log('QR: QRCode library not loaded');
            container.innerHTML = '<span style="color:#888;font-size:10px;">No Lib</span>';
            return;
        }

        const encoded = encodeTeamData(team);

        // データが大きすぎる場合の対応
        if (encoded.length > 2000) {
            console.log('QR: data too large');
            container.innerHTML = '<span style="color:#ff6666;font-size:10px;">Too Big</span>';
            return;
        }

        try {
            // 新しいAPIでQRコード生成
            new QRCode(container, {
                text: encoded,
                width: 80,
                height: 80,
                colorDark: '#ffffff',
                colorLight: '#2d2d30',
                correctLevel: QRCode.CorrectLevel.L
            });
            console.log('QR: generated successfully');
        } catch (e) {
            console.error('QR生成例外:', e);
            container.innerHTML = '<span style="color:#888;font-size:10px;">Error</span>';
        }
    }, 200);
}

// QRコード保存
function saveTeamQR(teamIndex) {
    const team = state.teams[teamIndex];
    if (!team) return;

    const encoded = encodeTeamData(team);

    // 一時的なdiv要素を作成してQRコード生成
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);

    try {
        new QRCode(tempDiv, {
            text: encoded,
            width: 300,
            height: 300,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.L
        });

        // 少し待ってからcanvasを取得
        setTimeout(() => {
            const canvas = tempDiv.querySelector('canvas');
            if (canvas) {
                const link = document.createElement('a');
                link.download = `team_${team.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            } else {
                alert('QR生成エラー');
            }
            document.body.removeChild(tempDiv);
        }, 100);
    } catch (e) {
        console.error('QR保存エラー:', e);
        alert('QR生成エラー');
        document.body.removeChild(tempDiv);
    }
}

// QR読込モーダルを開く
let qrLoadTargetIndex = null;

function openQRLoadModal(teamIndex) {
    qrLoadTargetIndex = teamIndex;

    const overlay = document.createElement('div');
    overlay.id = 'qr-load-overlay';
    overlay.className = 'qr-load-overlay';
    overlay.onclick = (e) => { if (e.target === overlay) closeQRLoadModal(); };

    overlay.innerHTML = `
        <div class="qr-load-modal">
            <div class="qr-load-header">
                <span>QRコード読込</span>
                <button onclick="closeQRLoadModal()">×</button>
            </div>
            <div class="qr-load-options">
                <button class="qr-load-option" onclick="startCameraQR()">
                    <span class="qr-load-icon">📷</span>
                    <span>カメラで読取</span>
                </button>
                <button class="qr-load-option" onclick="selectImageQR()">
                    <span class="qr-load-icon">🖼️</span>
                    <span>画像から読取</span>
                </button>
            </div>
            <div id="qr-camera-container" class="qr-camera-container" style="display:none;">
                <video id="qr-video" autoplay playsinline></video>
                <canvas id="qr-scan-canvas" style="display:none;"></canvas>
                <div class="qr-scan-overlay"></div>
            </div>
            <input type="file" id="qr-file-input" accept="image/*" style="display:none;" onchange="handleQRFile(event)">
        </div>
    `;

    document.body.appendChild(overlay);
}

function closeQRLoadModal() {
    stopCameraQR();
    const overlay = document.getElementById('qr-load-overlay');
    if (overlay) overlay.remove();
    qrLoadTargetIndex = null;
}

let qrVideoStream = null;
let qrScanInterval = null;

function startCameraQR() {
    const container = document.getElementById('qr-camera-container');
    const video = document.getElementById('qr-video');
    if (!container || !video) return;

    container.style.display = 'block';

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
            qrVideoStream = stream;
            video.srcObject = stream;
            video.play();

            // 定期スキャン開始
            qrScanInterval = setInterval(() => scanQRFromVideo(video), 200);
        })
        .catch(err => {
            alert('カメラにアクセスできません: ' + err.message);
            container.style.display = 'none';
        });
}

function stopCameraQR() {
    if (qrScanInterval) {
        clearInterval(qrScanInterval);
        qrScanInterval = null;
    }
    if (qrVideoStream) {
        qrVideoStream.getTracks().forEach(track => track.stop());
        qrVideoStream = null;
    }
}

function scanQRFromVideo(video) {
    if (!video.videoWidth || typeof jsQR === 'undefined') return;

    const canvas = document.getElementById('qr-scan-canvas');
    if (!canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code) {
        applyQRData(code.data);
    }
}

function selectImageQR() {
    document.getElementById('qr-file-input')?.click();
}

function handleQRFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                applyQRData(code.data);
            } else {
                alert('QRコードが見つかりませんでした');
            }
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function applyQRData(data) {
    const teamData = decodeTeamData(data);
    if (!teamData) {
        alert('無効なQRコードです');
        return;
    }

    if (qrLoadTargetIndex !== null) {
        // 既存チームに適用
        const team = state.teams[qrLoadTargetIndex];
        if (team) {
            team.slots = teamData.slots;
            team.memo = teamData.memo;

            // 解放率データを適用
            if (teamData.potentials && Object.keys(teamData.potentials).length > 0) {
                if (!state.slotPotentials) state.slotPotentials = {};
                for (const slotIndex in teamData.potentials) {
                    const key = `${team.id}-${slotIndex}`;
                    state.slotPotentials[key] = teamData.potentials[slotIndex];
                }
            }

            saveTeamState();
            closeQRLoadModal();
            renderTeamLayout();
            return;
        }
    }

    // 新規チームとして追加
    const newTeam = {
        id: Date.now(),
        name: teamData.name,
        label: teamData.label,
        slots: teamData.slots,
        memo: teamData.memo
    };
    state.teams.push(newTeam);

    // 解放率データを新チームIDで適用
    if (teamData.potentials && Object.keys(teamData.potentials).length > 0) {
        if (!state.slotPotentials) state.slotPotentials = {};
        for (const slotIndex in teamData.potentials) {
            const key = `${newTeam.id}-${slotIndex}`;
            state.slotPotentials[key] = teamData.potentials[slotIndex];
        }
    }

    expandedTeamId = newTeam.id;
    saveTeamState();
    closeQRLoadModal();
    renderTeamLayout();
}

// グローバル公開
window.generateTeamQR = generateTeamQR;
window.saveTeamQR = saveTeamQR;
window.openQRLoadModal = openQRLoadModal;
window.closeQRLoadModal = closeQRLoadModal;
window.startCameraQR = startCameraQR;
window.selectImageQR = selectImageQR;

// ========================================
// 解放率（ポテンシャル）表示機能
// ========================================

// 解放率アイコンをレンダリング
function renderPotentialIcons(teamId, slotIndex) {
    const key = `${teamId}-${slotIndex}`;
    const potentials = state.slotPotentials?.[key] || [false, false, false, false];

    let iconsHtml = '';
    for (let i = 0; i < 4; i++) {
        const iconPath = potentials[i]
            ? 'assets/icons/Potential_released.png'
            : 'assets/icons/Potential_closed.png';
        iconsHtml += `<img src="${iconPath}" alt="潜在${i + 1}">`;
    }

    return `
        <div class="slot-potential-container" onclick="event.stopPropagation(); openPotentialModal(${teamId}, ${slotIndex})">
            <div class="slot-potential-label">解放率</div>
            <div class="slot-potential-icons">${iconsHtml}</div>
        </div>
    `;
}

// 解放率モーダルを開く
function openPotentialModal(teamId, slotIndex) {
    const key = `${teamId}-${slotIndex}`;
    const currentPotentials = state.slotPotentials?.[key] || [false, false, false, false];

    potentialModalState = {
        teamId,
        slotIndex,
        potentials: [...currentPotentials]
    };

    renderPotentialModal();
}

// モーダルをレンダリング
function renderPotentialModal() {
    if (!potentialModalState) return;

    // 既存モーダルを削除
    const existing = document.getElementById('potential-modal-overlay');
    if (existing) existing.remove();

    const { potentials } = potentialModalState;

    let iconsHtml = '';
    for (let i = 0; i < 4; i++) {
        const iconPath = potentials[i]
            ? 'assets/icons/Potential_released.png'
            : 'assets/icons/Potential_closed.png';
        iconsHtml += `<img src="${iconPath}" alt="潜在${i + 1}" onclick="togglePotentialIcon(${i})">`;
    }

    const modalHtml = `
        <div id="potential-modal-overlay" class="potential-modal-overlay" onclick="closePotentialModal()">
            <div class="potential-modal" onclick="event.stopPropagation()">
                <div class="potential-modal-title">解放率を設定</div>
                <div class="potential-modal-icons" id="potential-modal-icons">
                    ${iconsHtml}
                </div>
                <div class="potential-modal-buttons">
                    <button class="potential-modal-btn cancel" onclick="closePotentialModal()">キャンセル</button>
                    <button class="potential-modal-btn confirm" onclick="confirmPotentialModal()">完了</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// アイコンをトグル
function togglePotentialIcon(index) {
    if (!potentialModalState) return;

    potentialModalState.potentials[index] = !potentialModalState.potentials[index];

    // モーダル内のアイコンを更新
    const container = document.getElementById('potential-modal-icons');
    if (container) {
        const imgs = container.querySelectorAll('img');
        if (imgs[index]) {
            imgs[index].src = potentialModalState.potentials[index]
                ? 'assets/icons/Potential_released.png'
                : 'assets/icons/Potential_closed.png';
        }
    }
}

// モーダルを閉じる（キャンセル）
function closePotentialModal() {
    potentialModalState = null;
    const overlay = document.getElementById('potential-modal-overlay');
    if (overlay) overlay.remove();
}

// 完了（保存）
function confirmPotentialModal() {
    if (!potentialModalState) return;

    const { teamId, slotIndex, potentials } = potentialModalState;
    const key = `${teamId}-${slotIndex}`;

    // stateに保存
    if (!state.slotPotentials) state.slotPotentials = {};
    state.slotPotentials[key] = potentials;

    // 永続化
    saveTeamState();

    closePotentialModal();
    renderTeamLayout();
}

// グローバル公開（解放率関連）
window.openPotentialModal = openPotentialModal;
window.closePotentialModal = closePotentialModal;
window.togglePotentialIcon = togglePotentialIcon;
window.confirmPotentialModal = confirmPotentialModal;
window.handleQRFile = handleQRFile;

// ========================================
// チーム編集モーダル（チーム名・ラベル編集）
// ========================================

let teamEditModalState = null;

function openTeamEditModal(teamIndex) {
    const team = state.teams[teamIndex];
    if (!team) return;

    teamEditModalState = {
        teamIndex,
        name: team.name,
        label: team.label
    };

    renderTeamEditModal();
}

function renderTeamEditModal() {
    if (!teamEditModalState) return;

    // 既存モーダルを削除
    const existing = document.getElementById('team-edit-modal-overlay');
    if (existing) existing.remove();

    const { name, label } = teamEditModalState;

    const labelOptions = TEAM_LABELS.filter(l => l !== '全て').map(l =>
        `<option value="${l}" ${label === l ? 'selected' : ''}>${l}</option>`
    ).join('');

    const modalHtml = `
        <div id="team-edit-modal-overlay" class="team-edit-modal-overlay" onclick="closeTeamEditModal()">
            <div class="team-edit-modal" onclick="event.stopPropagation()">
                <div class="team-edit-modal-title">チーム編集</div>
                <div class="team-edit-modal-field">
                    <label>チーム名</label>
                    <input type="text" id="team-edit-name-input" value="${name || ''}" placeholder="チーム名">
                </div>
                <div class="team-edit-modal-field">
                    <label>ラベル</label>
                    <select id="team-edit-label-select">
                        ${labelOptions}
                    </select>
                </div>
                <div class="team-edit-modal-buttons">
                    <button class="team-edit-modal-btn cancel" onclick="closeTeamEditModal()">キャンセル</button>
                    <button class="team-edit-modal-btn confirm" onclick="confirmTeamEditModal()">完了</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeTeamEditModal() {
    teamEditModalState = null;
    const overlay = document.getElementById('team-edit-modal-overlay');
    if (overlay) overlay.remove();
}

function confirmTeamEditModal() {
    if (!teamEditModalState) return;

    const nameInput = document.getElementById('team-edit-name-input');
    const labelSelect = document.getElementById('team-edit-label-select');

    const { teamIndex } = teamEditModalState;
    const team = state.teams[teamIndex];

    if (team) {
        if (nameInput) team.name = nameInput.value;
        if (labelSelect) team.label = labelSelect.value;
        saveTeamState();
    }

    closeTeamEditModal();
    renderTeamLayout();
}

// グローバル公開（チーム編集モーダル関連）
window.openTeamEditModal = openTeamEditModal;
window.closeTeamEditModal = closeTeamEditModal;
window.confirmTeamEditModal = confirmTeamEditModal;