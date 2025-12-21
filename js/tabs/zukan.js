// Zukan related logic

// --- 1. Helper Functions (Calculations & Parsing) ---

function getSpecsHtml(specs) {
    if (!specs) return "";

    let html = '<div class="sa-specs-footer">';
    let hasContent = false;

    // アイテム生成用ヘルパー
    const addItem = (iconName, text, className = "", defaultText = "") => {
        let displayText = text;
        if (text === true && defaultText) displayText = defaultText;
        if (text === true && !defaultText) displayText = ""; // テキストなし

        let textHtml = displayText ? `<span class="sa-spec-text">${displayText}</span>` : "";

        html += `<div class="sa-spec-item ${className}"><img src="assets/skills/${iconName}.png" class="sa-spec-icon" onerror="this.style.display='none'">${textHtml}</div>`;
        hasContent = true;
    };

    // --- ステータス変動 ---
    if (specs.atk_up) addItem('icon_atk_up', specs.atk_up, 'spec-up');
    if (specs.def_up) addItem('icon_def_up', specs.def_up, 'spec-up');
    if (specs.atk_down) addItem('icon_atk_down', specs.atk_down, 'spec-down');
    if (specs.def_down) addItem('icon_def_down', specs.def_down, 'spec-down');

    // --- 確率・数値系 ---
    if (specs.crit) addItem('icon_crit', specs.crit);     // 会心
    if (specs.add) addItem('icon_add', specs.add);       // 追撃
    if (specs.dodge) addItem('icon_dodge', specs.dodge);   // 回避
    if (specs.reduce) addItem('icon_reduce', specs.reduce); // 軽減

    // --- 特殊効果系 ---
    if (specs.effective) addItem('icon_effective', specs.effective, '', '');
    if (specs.guard) addItem('icon_guard', specs.guard, '', '');
    if (specs.action_break) addItem('icon_action_break', specs.action_break, '', '');
    if (specs.revival) addItem('icon_revival', specs.revival, '', '');
    if (specs.stun) addItem('icon_stun', specs.stun, '', '');
    if (specs.seal) addItem('icon_seal', specs.seal, '', '');
    if (specs.counter) addItem('icon_counter', specs.counter, '', '');

    // ターゲット集中
    if (specs.target) addItem('icon_target', specs.target, '', 'タゲ集中');

    // KO耐え
    const surviveVal = specs.survive || specs.survive_ko;
    if (surviveVal) addItem('icon_survive', surviveVal, '', '');

    html += '</div>';
    return hasContent ? html : "";
}

function parseLinkStats(description, stats) {
    if (!description) return;

    const kiMatch = description.match(/気力\+(\d+)/);
    if (kiMatch) stats.ki += parseInt(kiMatch[1], 10);

    const bothMatch = description.match(/(?:ATK|DEF)(?:,|と|&)(?:ATK|DEF)(\d+)%UP/);
    if (bothMatch) {
        const val = parseInt(bothMatch[1], 10);
        stats.atk += val;
        stats.def += val;
    } else {
        const atkMatch = description.match(/ATK(\d+)%UP/);
        if (atkMatch) stats.atk += parseInt(atkMatch[1], 10);

        const defMatch = description.match(/DEF(\d+)%UP/);
        if (defMatch) stats.def += parseInt(defMatch[1], 10);
    }

    const defDownMatch = description.match(/敵(?:の)?DEF(\d+)%DOWN/);
    if (defDownMatch) stats.def_down += parseInt(defDownMatch[1], 10);

    const hpRecMatch = description.match(/HP(\d+)%回復/);
    if (hpRecMatch) stats.hp_rec += parseInt(hpRecMatch[1], 10);

    const critMatch = description.match(/会心(?:率)?(\d+)%UP/);
    if (critMatch) stats.crit += parseInt(critMatch[1], 10);

    const reduceMatch = description.match(/ダメージ軽減(?:率)?(\d+)%UP/) || description.match(/被ダメージを(\d+)%軽減/);
    if (reduceMatch) stats.reduce += parseInt(reduceMatch[1], 10);

    const dodgeMatch = description.match(/回避(?:率)?(\d+)%UP/);
    if (dodgeMatch) stats.dodge += parseInt(dodgeMatch[1], 10);
}

function parseSegmentStats(text) {
    const stats = { ki: 0, hp: 0, atk: 0, def: 0 };
    if (!text) return stats;

    const kiMatch = text.match(/気力\+(\d+)/);
    if (kiMatch) stats.ki = parseInt(kiMatch[1], 10);

    const allMatch = text.match(/HP(?:\s*(?:と|&|,|、)\s*)ATK(?:\s*(?:と|&|,|、)\s*)DEF\s*(\d+)%UP/);
    if (allMatch) {
        const val = parseInt(allMatch[1], 10);
        stats.hp = Math.max(stats.hp, val);
        stats.atk = Math.max(stats.atk, val);
        stats.def = Math.max(stats.def, val);
    }
    else {
        const upRegex = /([^、,]+?)\s*(\d+)%UP/g;
        let match;
        while ((match = upRegex.exec(text)) !== null) {
            const label = match[1];
            const val = parseInt(match[2], 10);
            if (label.includes("HP")) stats.hp = Math.max(stats.hp, val);
            if (label.includes("ATK")) stats.atk = Math.max(stats.atk, val);
            if (label.includes("DEF")) stats.def = Math.max(stats.def, val);
        }
    }
    return stats;
}

function calcDetailedLeaderStats(leaderChar, subChar) {
    let lsText = "";
    if (leaderChar.leaderSkill) lsText = leaderChar.leaderSkill;

    if (!lsText || !subChar) return { ki: 0, hp: 0, atk: 0, def: 0 };

    lsText = lsText.replace(/\n/g, '').replace(/更に/g, 'さらに');
    const subCats = new Set(subChar.categories || []);

    let subType = subChar.type || "";
    let subClass = subChar.class || "";
    if (!subClass && subType.includes("Super")) { subClass = "Super"; subType = subType.replace("Super", "").trim(); }
    if (!subClass && subType.includes("Extreme")) { subClass = "Extreme"; subType = subType.replace("Extreme", "").trim(); }
    const typeMapReverse = { '速': 'AGL', '技': 'TEQ', '知': 'INT', '力': 'STR', '体': 'PHY' };

    const checkCategories = (text) => {
        if (!text) return false;
        const catMatches = text.match(/「([^」]+)」/g);
        if (!catMatches) return false;
        return catMatches.map(s => s.replace(/[「」]/g, '')).some(c => subCats.has(c));
    };

    const checkType = (text) => {
        if (!text) return false;
        if (text.includes('全属性')) return true;
        const jpTypes = ['速', '技', '知', '力', '体'];
        for (const jT of jpTypes) {
            if (text.includes(jT + '属性')) {
                const enType = typeMapReverse[jT];
                if (subType.includes(enType)) {
                    let classMatch = true;
                    if (text.includes('超' + jT) && subClass !== 'Super') classMatch = false;
                    if (text.includes('極' + jT) && subClass !== 'Extreme') classMatch = false;
                    if (classMatch) return true;
                }
            }
        }
        if (text.includes('超系') && subClass === 'Super') return true;
        if (text.includes('極系') && subClass === 'Extreme') return true;
        return false;
    };

    let totalStats = { ki: 0, hp: 0, atk: 0, def: 0 };

    const extraConditionRegex = /((?:「[^」]+」(?:または|、)?)+)カテゴリを含む場合は/;
    const extraMatch = lsText.match(extraConditionRegex);

    let baseText = lsText;
    let extraCatsText = "";
    let extraEffectText = "";

    if (extraMatch) {
        extraCatsText = extraMatch[1];
        baseText = lsText.substring(0, extraMatch.index);
        extraEffectText = lsText.substring(extraMatch.index + extraMatch[0].length);
    }

    // Helper to check if text contains any condition keywords (categories or types)
    const hasConditionText = (text) => {
        if (!text) return false;
        // Check for category brackets
        if (/「[^」]+」/.test(text)) return true;
        // Check for type keywords
        const typeKeywords = ['全属性', '速属性', '技属性', '知属性', '力属性', '体属性', '超系', '極系', '超速', '超技', '超知', '超力', '超体', '極速', '極技', '極知', '極力', '極体'];
        return typeKeywords.some(kw => text.includes(kw));
    };

    const upRegex = /(\d+)%UP/g;
    let match;
    let lastIndex = 0;
    let currentMatch = false; // Maintain context across segments

    while ((match = upRegex.exec(baseText)) !== null) {
        const endIndex = match.index + match[0].length;
        const segment = baseText.substring(lastIndex, endIndex);
        lastIndex = endIndex;

        // Check if this segment contains condition text
        if (hasConditionText(segment)) {
            // Update currentMatch based on new conditions found
            currentMatch = checkCategories(segment) || checkType(segment);
        }
        // If no condition text in segment, inherit previous currentMatch value

        if (currentMatch) {
            const segStats = parseSegmentStats(segment);
            totalStats.ki = Math.max(totalStats.ki, segStats.ki);
            totalStats.hp = Math.max(totalStats.hp, segStats.hp);
            totalStats.atk = Math.max(totalStats.atk, segStats.atk);
            totalStats.def = Math.max(totalStats.def, segStats.def);
        }
    }

    if (totalStats.atk > 0 && extraCatsText && checkCategories(extraCatsText)) {
        const extraStats = parseSegmentStats(extraEffectText);
        totalStats.ki += extraStats.ki;
        totalStats.hp += extraStats.hp;
        totalStats.atk += extraStats.atk;
        totalStats.def += extraStats.def;
    }

    return totalStats;
}

function calcLeaderCandidates(subChar) {
    const candidates = [];

    DB.forEach(char => {
        if (char.awakening && char.awakening.length > 0) {
            const stepsWithId = char.awakening.filter(step => step.id !== undefined && step.id !== null);
            if (stepsWithId.length > 0) {
                const lastStepId = stepsWithId[stepsWithId.length - 1].id;
                if (char.id !== lastStepId) return;
            }
        }

        let lsText = "";
        let mode = "normal";
        if (char.leader_skill_seza) { lsText = char.leader_skill_seza; mode = "seza"; }
        else if (char.leader_skill_eza || char.leaderSkill_eza) { lsText = (char.leader_skill_eza || char.leaderSkill_eza); mode = "eza"; }
        else lsText = char.leaderSkill;

        if (!lsText) return;

        const tempLeader = { ...char, leaderSkill: lsText };
        const stats = calcDetailedLeaderStats(tempLeader, subChar);

        if (stats.atk >= 150) {
            candidates.push({
                char: char,
                stats: stats,
                mode: mode
            });
        }
    });

    candidates.sort((a, b) => b.stats.atk - a.stats.atk);

    return candidates.slice(0, 30);
}

function calcLeaderBoost(leaderChar, subChar) {
    let lsText = "";
    if (leaderChar.leaderSkill) lsText = leaderChar.leaderSkill;

    if (state.detailEzaMode === 'eza' || state.detailEzaMode === 'seza') {
        if (leaderChar.leader_skill_eza) lsText = leaderChar.leader_skill_eza;
        else if (leaderChar.leaderSkill_eza) lsText = leaderChar.leaderSkill_eza;
        else if (leaderChar.leader_skill_seza && state.detailEzaMode === 'seza') lsText = leaderChar.leader_skill_seza;
    }

    if (!lsText || !subChar) return 0;

    lsText = lsText.replace(/\n/g, '').replace(/更に/g, 'さらに');
    const subCats = new Set(subChar.categories || []);

    let subType = subChar.type || "";
    let subClass = subChar.class || "";
    if (!subClass && subType.includes("Super")) { subClass = "Super"; subType = subType.replace("Super", "").trim(); }
    if (!subClass && subType.includes("Extreme")) { subClass = "Extreme"; subType = subType.replace("Extreme", "").trim(); }
    const typeMapReverse = { '速': 'AGL', '技': 'TEQ', '知': 'INT', '力': 'STR', '体': 'PHY' };

    const checkCategories = (text) => {
        const catMatches = text.match(/「([^」]+)」/g);
        if (!catMatches) return false;
        return catMatches.map(s => s.replace(/[「」]/g, '')).some(c => subCats.has(c));
    };

    const checkType = (text) => {
        if (text.includes('全属性')) return true;
        const jpTypes = ['速', '技', '知', '力', '体'];
        for (const jT of jpTypes) {
            if (text.includes(jT + '属性')) {
                const enType = typeMapReverse[jT];
                if (subType.includes(enType)) {
                    let classMatch = true;
                    if (text.includes('超' + jT) && subClass !== 'Super') classMatch = false;
                    if (text.includes('極' + jT) && subClass !== 'Extreme') classMatch = false;
                    if (classMatch) return true;
                }
            }
        }
        if (text.includes('超系') && subClass === 'Super') return true;
        if (text.includes('極系') && subClass === 'Extreme') return true;
        return false;
    };

    let baseAtkRate = 0;
    let extraRate = 0;
    let baseText = lsText;

    const extraConditionRegex = /((?:「[^」]+」(?:または)?)+)カテゴリを含む場合は(?:さらに)?.*?(\d+)%UP/;
    const extraMatch = lsText.match(extraConditionRegex);

    if (extraMatch) {
        baseText = lsText.substring(0, extraMatch.index);

        const extraCatsText = extraMatch[1];
        // Parse the extra segment to get ATK value
        const extraFullText = lsText.substring(extraMatch.index);
        const extraStats = parseSegmentStats(extraFullText);

        if (checkCategories(extraCatsText)) {
            extraRate = extraStats.atk > 0 ? extraStats.atk : parseInt(extraMatch[2], 10);
        }
    }

    const upRegex = /(\d+)%UP/g;
    let match;
    let lastIndex = 0;
    let currentMatch = false;

    while ((match = upRegex.exec(baseText)) !== null) {
        const endIndex = match.index + match[0].length;
        const segment = baseText.substring(lastIndex, endIndex);
        lastIndex = endIndex;

        // Check if this segment contains condition text
        const catMatches = segment.match(/「[^」]+」/);
        const typeKeywords = ['全属性', '速属性', '技属性', '知属性', '力属性', '体属性', '超系', '極系'];
        const hasTypeKeyword = typeKeywords.some(kw => segment.includes(kw));

        if (catMatches || hasTypeKeyword) {
            const isCatMatch = checkCategories(segment);
            const isTypeMatch = checkType(segment);
            currentMatch = isCatMatch || isTypeMatch;
        }

        if (currentMatch) {
            // Parse segment to get ATK specifically
            const segStats = parseSegmentStats(segment);
            if (segStats.atk > baseAtkRate) {
                baseAtkRate = segStats.atk;
            }
        }
    }

    if (baseAtkRate > 0) {
        return baseAtkRate + extraRate;
    }

    return 0;
}

function calcPartners(targetChar, currentForm) {
    if (!currentForm.links || currentForm.links.length === 0) return [];
    const targetLinks = new Set(currentForm.links);
    const results = [];
    const myLinkCount = currentForm.links.length;

    const targetName = currentForm.name || targetChar.name;

    DB.forEach(char => {
        if (char.awakening && char.awakening.length > 0) {
            const stepsWithId = char.awakening.filter(step => step.id !== undefined && step.id !== null);
            if (stepsWithId.length > 0) {
                const lastStepId = stepsWithId[stepsWithId.length - 1].id;
                if (char.id !== lastStepId) return;
            }
        }

        const checkAndPush = (formObj, fType, fIdx) => {
            if (!formObj.links) return;

            if (formObj.label === 'ビジュアルチェンジ' || formObj.name === 'ビジュアルチェンジ') return;

            const candidateName = formObj.name || char.name;
            if (candidateName === targetName) return;

            const m = formObj.links.filter(l => targetLinks.has(l)).length;
            if (m >= 3) {
                results.push({
                    char: char,
                    targetForm: formObj,
                    match: m,
                    isFull: (m === myLinkCount) || (m >= 7),
                    formType: fType,
                    formIndex: fIdx
                });
            }
        };

        checkAndPush(char, 'base', -1);

        if (char.forms) {
            char.forms.forEach((form, idx) => {
                let targetF = form;
                let type = 'normal';

                if (char.forms_seza && char.forms_seza[idx]) {
                    targetF = char.forms_seza[idx];
                    type = 'seza';
                } else if (char.forms_eza && char.forms_eza[idx]) {
                    targetF = char.forms_eza[idx];
                    type = 'eza';
                }

                checkAndPush(targetF, type, idx);
            });
        }
    });

    results.sort((a, b) => {
        if (b.match !== a.match) return b.match - a.match;
        return a.char.id - b.char.id;
    });

    return results.slice(0, 15);
}

function calcFarmCards(targetChar) {
    const names = new Set();

    names.add(targetChar.name);

    if (targetChar.awakening) {
        targetChar.awakening.forEach(step => {
            if (step.id) {
                const stepChar = DB.find(c => c.id === step.id);
                if (stepChar) {
                    names.add(stepChar.name);
                }
            }
        });
    }

    const matches = DB.filter(c =>
        names.has(c.name) &&
        c.id !== targetChar.id &&
        c.rarity === 'SSR'
    );

    const events = [];
    const gashas = [];

    matches.forEach(c => {
        let isEvent = false;
        if (c.source_type) {
            isEvent = (c.source_type === 'event');
        } else {
            isEvent = (c.cost <= 20);
        }

        if (isEvent) events.push(c);
        else gashas.push(c);
    });

    return { events, gashas };
}

// --- 2. Initialization & Filter Logic ---

function renderFilterModal() {
    if (document.getElementById('filter-modal')) return;

    const html = `
    <div id="filter-modal" class="modal-overlay">
        <div class="filter-modal scale-in">
            <h2 style="font-size:16px; font-weight:bold; margin-bottom:20px; text-align:center;">絞り込み条件</h2>

            <!-- Removed Global Logic Toggle -->

            <!-- 属性 (Type) -->
            <div class="filter-section">
                <div class="filter-header">
                    <span class="filter-label">属性 (Type)</span>
                    <div class="toggle-mini" onclick="toggleMiniLogic('type')" id="logic-btn-type">
                        <span class="toggle-mini-opt">AND</span>
                        <span class="toggle-mini-opt active">OR</span>
                        <div class="toggle-mini-slider" style="transform:translateX(33px); background-color: var(--accent-str);"></div>
                    </div>
                </div>
                <div class="filter-chips" id="filter-types">
                    <div class="filter-chip" onclick="toggleFilter('type', 'AGL')">速属性</div>
                    <div class="filter-chip" onclick="toggleFilter('type', 'TEQ')">技属性</div>
                    <div class="filter-chip" onclick="toggleFilter('type', 'INT')">知属性</div>
                    <div class="filter-chip" onclick="toggleFilter('type', 'STR')">力属性</div>
                    <div class="filter-chip" onclick="toggleFilter('type', 'PHY')">体属性</div>
                </div>
            </div>

            <!-- 属性区分 (Class) -->
            <div class="filter-section">
                <div class="filter-header">
                    <span class="filter-label">属性区分 (Class)</span>
                    <div class="toggle-mini" onclick="toggleMiniLogic('class')" id="logic-btn-class">
                        <span class="toggle-mini-opt">AND</span>
                        <span class="toggle-mini-opt active">OR</span>
                        <div class="toggle-mini-slider" style="transform:translateX(33px); background-color: var(--accent-str);"></div>
                    </div>
                </div>
                <div class="filter-chips" id="filter-classes">
                    <div class="filter-chip" onclick="toggleFilter('class', 'Super')">超系</div>
                    <div class="filter-chip" onclick="toggleFilter('class', 'Extreme')">極系</div>
                </div>
            </div>

            <!-- レアリティ -->
            <div class="filter-section">
                <div class="filter-header">
                    <span class="filter-label">レアリティ</span>
                    <div class="toggle-mini" onclick="toggleMiniLogic('rarity')" id="logic-btn-rarity">
                        <span class="toggle-mini-opt">AND</span>
                        <span class="toggle-mini-opt active">OR</span>
                        <div class="toggle-mini-slider" style="transform:translateX(33px); background-color: var(--accent-str);"></div>
                    </div>
                </div>
                <div class="filter-chips" id="filter-rarities">
                    <div class="filter-chip" onclick="toggleFilter('rarity', 'LR')">LR</div>
                    <div class="filter-chip" onclick="toggleFilter('rarity', 'UR')">UR</div>
                    <div class="filter-chip" onclick="toggleFilter('rarity', 'SSR')">SSR</div>
                    <div class="filter-chip" onclick="toggleFilter('rarity', 'SR')">SR</div>
                </div>
            </div>

            <!-- 所持・お気に入り状態 -->
            <div class="filter-section">
                <span class="filter-label">状態 (Status)</span>
                <div class="filter-chips" id="filter-status">
                    <div class="filter-chip" onclick="toggleFilter('status', 'owned')">所持済み</div>
                    <div class="filter-chip" onclick="toggleFilter('status', 'favorite')">お気に入り</div>
                </div>
            </div>

            <!-- 極限覚醒状態 -->
            <div class="filter-section">
                <span class="filter-label">極限状態</span>
                <div class="filter-chips" id="filter-eza">
                    <div class="filter-chip" onclick="toggleFilter('eza', 'none')">通常</div>
                    <div class="filter-chip" onclick="toggleFilter('eza', 'eza')">極限Z覚醒</div>
                    <div class="filter-chip" onclick="toggleFilter('eza', 'seza')">超極限</div>
                </div>
            </div>

            <!-- 必殺技区分 -->
            <div class="filter-section">
                <span class="filter-label">必殺技の種類</span>
                <div class="filter-chips" id="filter-sa-type">
                    <div class="filter-chip" onclick="toggleFilter('saType', '気弾')">気弾</div>
                    <div class="filter-chip" onclick="toggleFilter('saType', '格闘')">格闘</div>
                    <div class="filter-chip" onclick="toggleFilter('saType', '物理')">物理</div>
                    <div class="filter-chip" onclick="toggleFilter('saType', 'その他')">その他</div>
                </div>
            </div>

            <!-- カテゴリ検索 -->
            <div class="filter-section">
                <div class="filter-header">
                    <span class="filter-label">カテゴリ</span>
                    <div class="toggle-mini" onclick="toggleMiniLogic('category')" id="logic-btn-category">
                        <span class="toggle-mini-opt active">AND</span>
                        <span class="toggle-mini-opt">OR</span>
                        <div class="toggle-mini-slider"></div>
                    </div>
                </div>
                <div class="filter-input-row">
                    <input list="category-list" id="cat-input" class="filter-select-input" placeholder="カテゴリを検索..." onchange="addFilterFromInput('category', this)" style="flex:1;">
                    <button class="btn-sm" onclick="toggleAllItems('category')">一覧</button>
                </div>
                <datalist id="category-list"></datalist>
                <div class="filter-chips" id="selected-cats" style="margin-top:10px;"></div>
                <div id="all-cats-container" class="all-items-container" style="display:none;"></div>
            </div>

            <!-- リンクスキル検索 -->
            <div class="filter-section">
                <div class="filter-header">
                    <span class="filter-label">リンクスキル</span>
                    <div class="toggle-mini" onclick="toggleMiniLogic('link')" id="logic-btn-link">
                        <span class="toggle-mini-opt active">AND</span>
                        <span class="toggle-mini-opt">OR</span>
                        <div class="toggle-mini-slider"></div>
                    </div>
                </div>
                <div class="filter-input-row">
                    <input list="link-list" id="link-input" class="filter-select-input" placeholder="リンクスキルを検索..." onchange="addFilterFromInput('link', this)" style="flex:1;">
                    <button class="btn-sm" onclick="toggleAllItems('link')">一覧</button>
                </div>
                <datalist id="link-list"></datalist>
                <div class="filter-chips" id="selected-links" style="margin-top:10px;"></div>
                <div id="all-links-container" class="all-items-container" style="display:none;"></div>
            </div>

            <!-- アクションボタン -->
            <div class="filter-actions">
                <button class="btn-reset" onclick="resetFilters()">リセット</button>
                <button class="btn-apply" onclick="closeFilterModal()">完了</button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);
    populateFilterOptions();
    updateFilterUI();
}

function populateFilterOptions() {
    if (typeof DB === 'undefined') return;

    // Task 3: Use source files for order
    const catsSource = (typeof CATEGORY_LIST !== 'undefined' && CATEGORY_LIST.length > 0) ? CATEGORY_LIST : null;
    const linksSource = (typeof LINKS !== 'undefined' && Object.keys(LINKS).length > 0) ? Object.keys(LINKS) : null;

    let catsToRender = [];
    if (catsSource) {
        catsToRender = catsSource;
    } else {
        const allCats = new Set();
        DB.forEach(c => { if (c.categories) c.categories.forEach(cat => allCats.add(cat)); });
        catsToRender = Array.from(allCats).sort();
    }

    const catList = document.getElementById('category-list');
    if (catList) {
        catList.innerHTML = '';
        catsToRender.forEach(cat => {
            const op = document.createElement('option');
            op.value = cat;
            catList.appendChild(op);
        });

        const allCatsContainer = document.getElementById('all-cats-container');
        if (allCatsContainer) {
            allCatsContainer.innerHTML = '';
            catsToRender.forEach(cat => {
                const item = document.createElement('div');
                item.className = 'all-item-chip';
                item.innerText = cat;
                item.onclick = () => {
                    if (!state.filter.categories.includes(cat)) {
                        state.filter.categories.push(cat);
                        updateFilterUI();
                    }
                };
                allCatsContainer.appendChild(item);
            });
        }
    }

    let linksToRender = [];
    if (linksSource) {
        linksToRender = linksSource;
    } else {
        const allLinks = new Set();
        DB.forEach(c => {
            if (c.links) c.links.forEach(l => allLinks.add(l));
            if (c.forms) c.forms.forEach(f => {
                if (f.links) f.links.forEach(l => allLinks.add(l));
            });
        });
        linksToRender = Array.from(allLinks).sort();
    }

    const linkList = document.getElementById('link-list');
    if (linkList) {
        linkList.innerHTML = '';
        linksToRender.forEach(l => {
            const op = document.createElement('option');
            op.value = l;
            linkList.appendChild(op);
        });

        const allLinksContainer = document.getElementById('all-links-container');
        if (allLinksContainer) {
            allLinksContainer.innerHTML = '';
            linksToRender.forEach(l => {
                const item = document.createElement('div');
                item.className = 'all-item-chip';
                item.innerText = l;
                item.onclick = () => {
                    if (!state.filter.links.includes(l)) {
                        state.filter.links.push(l);
                        updateFilterUI();
                    }
                };
                allLinksContainer.appendChild(item);
            });
        }
    }
}

function openFilterModal() {
    renderFilterModal(); // Ensure modal exists
    const modal = document.getElementById('filter-modal');
    if (modal) modal.classList.add('open');
}

function closeFilterModal() {
    const modal = document.getElementById('filter-modal');
    if (modal) modal.classList.remove('open');
    renderZukanList();
}

function toggleAllItems(type) {
    const id = type === 'category' ? 'all-cats-container' : 'all-links-container';
    const container = document.getElementById(id);
    if (container) {
        const isHidden = container.style.display === 'none';
        container.style.display = isHidden ? 'grid' : 'none';
    }
}

function setFilterLogic(logic) {
    // Deprecated global logic
}

function toggleMiniLogic(type) {
    const key = type + 'Logic';
    const current = state.filter[key];
    state.filter[key] = (current === 'AND') ? 'OR' : 'AND';

    const btn = document.getElementById(`logic-btn-${type}`);
    if (btn) {
        const opts = btn.querySelectorAll('.toggle-mini-opt');
        const slider = btn.querySelector('.toggle-mini-slider');

        if (state.filter[key] === 'OR') {
            btn.classList.add('state-or');
            if (opts[0]) opts[0].classList.remove('active');
            if (opts[1]) opts[1].classList.add('active');
            if (slider) {
                slider.style.transform = 'translateX(33px)';
                slider.style.backgroundColor = 'var(--accent-str)';
            }
        } else {
            btn.classList.remove('state-or');
            if (opts[0]) opts[0].classList.add('active');
            if (opts[1]) opts[1].classList.remove('active');
            if (slider) {
                slider.style.transform = 'translateX(0px)';
                slider.style.backgroundColor = '#555';
            }
        }
    }
}

function setSort(value) {
    state.filter.sort = value;
    state.scrollPositions['zukan'] = 0; // Reset scroll on sort change

    // Task 2: Maintain Sort Order on Back Navigation
    // Update history state to include the new sort option
    const url = new URL(window.location);
    const currentState = window.history.state || {};
    const newState = {
        ...currentState,
        filter: state.filter
    };
    window.history.replaceState(newState, '', url);

    renderZukanList();
}

function toggleFilter(key, value) {
    const targetKey = (key === 'rarity') ? 'rarities' : (key === 'class') ? 'classes' : (key === 'type' ? 'types' : (key === 'eza' ? 'eza' : (key === 'status' ? 'status' : 'saTypes')));
    const arr = state.filter[targetKey];
    const idx = arr.indexOf(value);
    if (idx > -1) arr.splice(idx, 1); else arr.push(value);
    updateFilterUI();
}

function addFilterFromInput(type, input) {
    const val = input.value;
    if (!val) return;
    const arr = type === 'category' ? state.filter.categories : state.filter.links;
    if (!arr.includes(val)) arr.push(val);
    input.value = "";
    updateFilterUI();
}

function removeArrayFilter(type, value) {
    const arr = type === 'category' ? state.filter.categories : state.filter.links;
    const idx = arr.indexOf(value);
    if (idx > -1) arr.splice(idx, 1);
    updateFilterUI();

    // Update history state to reflect filter change
    const url = new URL(window.location);
    window.history.replaceState({ filter: JSON.parse(JSON.stringify(state.filter)), searchQuery: state.searchQuery }, '', url);
}

function resetFilters() {
    state.filter = {
        sort: 'releaseDesc',
        rarities: [], rarityLogic: 'OR', types: [], typeLogic: 'OR', classes: [], classLogic: 'OR',
        status: [], eza: [], ezaLogic: 'OR', saTypes: [], saTypeLogic: 'OR',
        categories: [], categoryLogic: 'AND', links: [], linkLogic: 'AND'
    };

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.value = 'releaseDesc';

    // Reset Logic Buttons
    const allLogics = ['type', 'class', 'rarity', 'eza', 'saType', 'category', 'link'];
    allLogics.forEach(t => {
        state.filter[t + 'Logic'] = (t === 'category' || t === 'link') ? 'AND' : 'OR';
        const btn = document.getElementById(`logic-btn-${t}`);
        if (btn) {
            const isOr = state.filter[t + 'Logic'] === 'OR';
            const opts = btn.querySelectorAll('.toggle-mini-opt');
            const slider = btn.querySelector('.toggle-mini-slider');

            if (isOr) {
                btn.classList.add('state-or');
                if (opts[0]) opts[0].classList.remove('active');
                if (opts[1]) opts[1].classList.add('active');
                if (slider) {
                    slider.style.transform = 'translateX(33px)';
                    slider.style.backgroundColor = 'var(--accent-str)';
                }
            } else {
                btn.classList.remove('state-or');
                if (opts[0]) opts[0].classList.add('active');
                if (opts[1]) opts[1].classList.remove('active');
                if (slider) {
                    slider.style.transform = 'translateX(0px)';
                    slider.style.backgroundColor = '#555';
                }
            }
        }
    });

    updateFilterUI();

    // Update history state to reflect reset filter
    const url = new URL(window.location);
    window.history.replaceState({ filter: JSON.parse(JSON.stringify(state.filter)), searchQuery: state.searchQuery }, '', url);
}

function updateFilterUI() {
    const updateChips = (containerId, arr) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        Array.from(container.children).forEach(chip => {
            const onclickVal = chip.getAttribute('onclick');
            if (onclickVal) {
                const match = onclickVal.match(/'([^']+)'\)$/);
                if (match) { const val = match[1]; chip.classList.toggle('selected', arr.includes(val)); }
            }
        });
    };

    updateChips('filter-types', state.filter.types);
    updateChips('filter-classes', state.filter.classes);
    updateChips('filter-rarities', state.filter.rarities);
    updateChips('filter-status', state.filter.status);
    updateChips('filter-eza', state.filter.eza);
    updateChips('filter-sa-type', state.filter.saTypes);

    const catContainer = document.getElementById('selected-cats');
    if (catContainer) {
        catContainer.innerHTML = '';
        state.filter.categories.forEach(c => {
            const chip = document.createElement('div');
            chip.className = 'filter-chip selected';
            chip.innerText = c + ' ×';
            chip.onclick = () => removeArrayFilter('category', c);
            catContainer.appendChild(chip);
        });
    }

    const linkContainer = document.getElementById('selected-links');
    if (linkContainer) {
        linkContainer.innerHTML = '';
        state.filter.links.forEach(l => {
            const chip = document.createElement('div');
            chip.className = 'filter-chip selected';
            chip.innerText = l + ' ×';
            chip.onclick = () => removeArrayFilter('link', l);
            linkContainer.appendChild(chip);
        });
    }

    // Update All Item Chips selection state
    const updateAllItemChips = (containerId, arr) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        Array.from(container.children).forEach(chip => {
            chip.classList.toggle('selected', arr.includes(chip.innerText));
        });
    };
    updateAllItemChips('all-cats-container', state.filter.categories);
    updateAllItemChips('all-links-container', state.filter.links);
}

// --- 3. Navigation & Rendering ---

function applyFilter(type, value) {
    resetFilters();
    state.searchQuery = '';

    if (type === 'name') state.searchQuery = value;
    else if (type === 'category') state.filter.categories = [value];
    else if (type === 'link') state.filter.links = [value];

    updateFilterUI();

    state.detailCharId = null;
    state.animDirection = 'left';
    state.scrollPositions['zukan'] = 0; // Reset scroll on new filter

    const url = new URL(window.location);
    url.searchParams.delete('id');

    // Deep copy filter to avoid reference issues
    window.history.pushState({ filter: JSON.parse(JSON.stringify(state.filter)), searchQuery: state.searchQuery }, '', url);

    if (typeof updateTabUI === 'function') updateTabUI();
    if (typeof render === 'function') render();
    if (typeof window.scrollToTop === 'function') window.scrollToTop();
}

function clearSearch() {
    state.searchQuery = '';
    const input = document.getElementById('zukan-search-input');
    if (input) input.value = '';
    renderZukanList();
}

function setListMode(mode) {
    state.listMode = mode;
    const btns = document.querySelectorAll('.mode-btn');
    if (btns.length > 1) {
        btns[0].className = `mode-btn ${mode === 'icon' ? 'active' : ''}`;
        btns[1].className = `mode-btn ${mode === 'detail' ? 'active' : ''}`;
    }
    renderZukanList();
}

function toggleMaxAwakening(btn) {
    state.filter.maxAwakening = !state.filter.maxAwakening;
    if (btn) {
        btn.classList.toggle('active', state.filter.maxAwakening);
    }
    if (typeof saveFilterState === 'function') saveFilterState();
    renderZukanList();
}

function renderZukanLayout() {
    const contentDiv = document.getElementById('main-content');
    if (!contentDiv) return;

    let header = document.getElementById('zukan-header-el');
    if (!header || !contentDiv.contains(header)) {
        contentDiv.innerHTML = '';
        header = document.createElement('div');
        header.id = 'zukan-header-el';
        header.className = 'zukan-header';

        // --- 【追記】選択モード時のバナーHTML生成 ---
        let bannerHtml = '';
        if (state.listMode === 'teamSelect') {
            // selectingSlot: 0=リーダー, 6=フレンド, 1-5=サブ
            const slotName = state.selectingSlot === 0 ? 'リーダー' : (state.selectingSlot === 6 ? 'フレンド' : 'サブメンバー');
            bannerHtml = `<div class="select-mode-banner">${slotName}を選択中... (タップで決定)</div>`;
        }

        // Removed Filter Button from header (Remove button moved to popover in team.js)
        header.innerHTML = `
            <div class="search-container"><div class="search-wrapper"><input type="text" id="zukan-search-input" class="search-bar" placeholder="名前、二つ名で検索..." value="${state.searchQuery}"><button id="search-clear-btn" class="search-clear-btn" onclick="clearSearch()">×</button></div></div>
            <div class="action-row" style="justify-content: flex-end;">
                <div class="sort-select-wrapper"><select id="sort-select" class="sort-select-main" onchange="setSort(this.value)"><option value="releaseDesc">実装日: 新しい順</option><option value="releaseAsc">実装日: 古い順</option><option value="rarityDesc">レアリティ: 高い順</option><option value="rarityAsc">レアリティ: 低い順</option><option value="costDesc">コスト: 高い順</option><option value="costAsc">コスト: 低い順</option><option value="hpDesc">HP: 高い順</option><option value="atkDesc">ATK: 高い順</option><option value="defDesc">DEF: 高い順</option></select></div>
                <button id="max-awakening-btn" class="max-awakening-btn ${state.filter.maxAwakening ? 'active' : ''}" onclick="toggleMaxAwakening(this)">覚醒最大</button>
                <div class="mode-switch"><div class="mode-btn ${state.listMode === 'icon' ? 'active' : ''}" onclick="setListMode('icon')"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/></svg></div><div class="mode-btn ${state.listMode === 'detail' ? 'active' : ''}" onclick="setListMode('detail')"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg></div></div>
            </div>
            <div class="text-xs text-gray-500" id="zukan-count" style="margin-top:4px; text-align:right;">---</div>
            ${bannerHtml}
            `;
        header.querySelector('input').addEventListener('input', (e) => { state.searchQuery = e.target.value; renderZukanList(); });
        contentDiv.appendChild(header);

        const grid = document.createElement('div');
        grid.id = 'zukan-grid';
        contentDiv.appendChild(grid);

        // Add FAB (must be added before renderZukanList so badge can be updated)
        const fab = document.createElement('div');
        fab.id = 'filter-fab';
        fab.className = 'filter-fab';
        fab.onclick = openFilterModal;
        fab.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg><span id="fab-badge" class="fab-badge" style="display:none;">0</span>`;
        contentDiv.appendChild(fab);

        // Call renderZukanList after FAB is in DOM so badge updates correctly
        renderZukanList(grid);


    } else {
        renderZukanList();
    }

    if (state.animDirection === 'left') {
        const grid = document.getElementById('zukan-grid');
        if (grid) {
            grid.classList.remove('slide-in-right');
            grid.classList.add('slide-in-left');
        }
    }

    // Scroll restoration removed from layout render, it's in list render now
}

function renderZukanList(targetGrid) {
    const f = state.filter;
    const query = state.searchQuery.toLowerCase();

    const clrBtn = document.getElementById('search-clear-btn');
    if (clrBtn) {
        if (state.searchQuery) clrBtn.classList.add('visible');
        else clrBtn.classList.remove('visible');
    }

    const check = (arr, logic, checkFn) => {
        if (arr.length === 0) return true;
        if (logic === 'AND') return arr.every(checkFn);
        return arr.some(checkFn);
    };

    let displayDB = DB.filter(char => {
        if (query) {
            const n = char.name.toLowerCase();
            const t = char.title ? char.title.toLowerCase() : '';
            const y = char.yomi ? char.yomi : '';
            if (!n.includes(query) && !t.includes(query) && !y.includes(query)) return false;
        }

        if (!check(f.rarities, f.rarityLogic, r => char.rarity === r)) return false;
        if (!check(f.types, f.typeLogic, t => char.type === t)) return false;
        if (!check(f.classes, f.classLogic, c => char.class === c)) return false;

        if (f.status.includes('owned') && !state.owned.includes(char.id)) return false;
        if (f.status.includes('favorite') && !state.favorites.includes(char.id)) return false;

        if (f.eza.length > 0) {
            let isEza = char.eza || (char.awakening && char.awakening.some(a => a.rank === 'EZA'));
            let isSeza = (char.awakening && char.awakening.some(a => a.rank === 'SEZA'));
            const match = f.eza.some(val => {
                if (val === 'none') return !isEza;
                if (val === 'eza') return isEza && !isSeza;
                if (val === 'seza') return isSeza;
                return false;
            });
            if (!match) return false;
        }

        if (!check(f.categories, f.categoryLogic, c => char.categories?.includes(c))) return false;
        if (!check(f.links, f.linkLogic, l => {
            if (char.links?.includes(l)) return true;
            if (char.forms?.some(frm => frm.links?.includes(l))) return true;
            return false;
        })) return false;

        if (f.saTypes.length > 0) {
            const allSaTypes = new Set();
            const scanSA = (saList) => saList?.forEach(sa => allSaTypes.add(sa.type));
            scanSA(char.superAttacks);
            char.forms?.forEach(f => scanSA(f.superAttacks));
            char.forms_eza?.forEach(f => scanSA(f.superAttacks));
            if (!check(f.saTypes, f.saTypeLogic, t => allSaTypes.has(t))) return false;
        }

        // Max Awakening Filter: Only show final awakening form
        if (f.maxAwakening) {
            if (char.awakening && char.awakening.length > 0) {
                const validSteps = char.awakening.filter(s => s.id !== undefined && s.id !== null);
                if (validSteps.length > 0) {
                    const lastStepId = validSteps[validSteps.length - 1].id;
                    if (char.id !== lastStepId) return false;
                }
            }
        }

        return true;
    });

    // --- FILTER DUPLICATE CHARACTERS IN TEAM SELECT MODE ---
    if (state.listMode === 'teamSelect') {
        const team = state.teams[state.currentTeamIndex];
        const currentSlot = state.selectingSlot;

        // When selecting Friend slot (6), don't filter duplicates at all
        // Users can set the same character as Leader and Friend
        if (currentSlot !== 6) {
            // Get all characters already in the team (excluding current slot and Friend slot 6)
            const existingChars = [];
            team.slots.forEach((charId, idx) => {
                // Skip: current slot being edited, Friend slot (idx 6), and Leader slot if selecting Leader
                if (charId && idx !== currentSlot && idx !== 6) {
                    // Also skip Leader (idx 0) if we're selecting for slot 0
                    if (currentSlot === 0 && idx === 0) return;

                    const char = DB.find(c => c.id === charId);
                    if (char) {
                        existingChars.push({ name: char.name, title: char.title });
                    }
                }
            });

            // Filter out characters with same name AND title
            displayDB = displayDB.filter(char => {
                return !existingChars.some(e => e.name === char.name && e.title === char.title);
            });
        }
    }

    // --- LEADER SKILL SORTING LOGIC ---
    // チーム選択モードかつリーダー以外の場合、LS倍率を計算
    const isSubSelectMode = state.listMode === 'teamSelect' && state.selectingSlot !== 0;

    if (isSubSelectMode) {
        const team = state.teams[state.currentTeamIndex];
        const leaderId = team.slots[0];

        if (leaderId) {
            const leader = DB.find(c => c.id === leaderId);
            if (leader) {
                displayDB.forEach(c => {
                    c.tempLsBoost = calcLeaderBoost(leader, c);
                });
                // 倍率降順 -> 実装日新しい順
                displayDB.sort((a, b) => {
                    if (b.tempLsBoost !== a.tempLsBoost) return b.tempLsBoost - a.tempLsBoost;
                    const getDate = (c) => [c.release, c.eza, c.seza].filter(d => d).sort().pop() || "";
                    return getDate(b).localeCompare(getDate(a));
                });
            }
        } else {
            // リーダー未設定の場合、倍率は0
            displayDB.forEach(c => c.tempLsBoost = 0);
        }
    } else if (f.sort) {
        displayDB.sort((a, b) => {
            const getStat = (c, k) => (c.forms && c.forms[0] && c.forms[0].stats && c.forms[0].stats[k]) ? c.forms[0].stats[k] : (c.stats ? c.stats[k] : 0);
            const getRank = (r) => RARITY_RANK[r] !== undefined ? RARITY_RANK[r] : -1;
            const getDate = (c) => [c.release, c.eza, c.seza].filter(d => d).sort().pop() || "";

            const dateA = getDate(a);
            const dateB = getDate(b);
            const dateDiff = dateB.localeCompare(dateA);

            if (f.sort === 'releaseDesc') return dateDiff;
            if (f.sort === 'releaseAsc') return dateA.localeCompare(dateB);

            let diff = 0;
            if (f.sort === 'rarityDesc') diff = getRank(b.rarity) - getRank(a.rarity);
            if (f.sort === 'rarityAsc') diff = getRank(a.rarity) - getRank(b.rarity);
            if (f.sort === 'costDesc') diff = (b.cost || 0) - (a.cost || 0);
            if (f.sort === 'costAsc') diff = (a.cost || 0) - (b.cost || 0);
            if (f.sort === 'hpDesc') diff = getStat(b, 'hp') - getStat(a, 'hp');
            if (f.sort === 'atkDesc') diff = getStat(b, 'atk') - getStat(a, 'atk');
            if (f.sort === 'defDesc') diff = getStat(b, 'def') - getStat(a, 'def');

            if (diff !== 0) return diff;
            return dateDiff;
        });
    }

    state.currentList = displayDB;

    const countEl = document.getElementById('zukan-count');
    if (countEl) countEl.innerText = `${displayDB.length}体 表示中`;

    // Update FAB Badge
    const badge = document.getElementById('fab-badge');
    const fab = document.getElementById('filter-fab');
    if (badge && fab) {
        const activeCount = f.rarities.length + f.types.length + f.classes.length + f.status.length + f.eza.length + f.saTypes.length + f.categories.length + f.links.length;
        if (activeCount > 0) {
            badge.style.display = 'flex';
            badge.innerText = activeCount;
            fab.classList.add('active');
        } else {
            badge.style.display = 'none';
            fab.classList.remove('active');
        }
    }

    const grid = targetGrid || document.getElementById('zukan-grid');
    if (!grid) return;

    grid.className = `char-grid ${state.listMode === 'detail' ? 'mode-detail' : ''}`;
    grid.innerHTML = '';

    // --- 【分岐】サブキャラ選択モード (セクション分け表示) ---
    if (isSubSelectMode) {
        grid.className = 'char-grid-sections'; // 通常のgridではなくブロック積み上げ用クラス
        grid.style.display = 'block'; // Grid解除

        // 倍率ごとにグルーピング
        const groups = new Map();
        displayDB.forEach(char => {
            const boost = char.tempLsBoost || 0;
            if (!groups.has(boost)) groups.set(boost, []);
            groups.get(boost).push(char);
        });

        // Mapは挿入順を保持するが、念のため降順キーで処理
        const sortedBoosts = Array.from(groups.keys()).sort((a, b) => b - a);

        sortedBoosts.forEach(boost => {
            const chars = groups.get(boost);

            // セクションヘッダー作成
            const sectionHeader = document.createElement('div');
            sectionHeader.className = 'ls-section-header';
            let headerColor = '#888';
            if (boost >= 200) headerColor = '#ff4d4d';
            else if (boost >= 170) headerColor = '#4cd964';
            else if (boost >= 150) headerColor = '#ffa500';

            sectionHeader.style.borderColor = headerColor;
            sectionHeader.style.color = headerColor;

            if (boost > 0) {
                sectionHeader.innerHTML = `<span style="font-weight:bold; font-size:14px;">ATK ${boost}% UP</span>`;
            } else {
                sectionHeader.innerHTML = `<span style="font-size:12px;">LS対象外 (0%)</span>`;
                sectionHeader.style.borderColor = '#444';
            }
            grid.appendChild(sectionHeader);

            // このセクション用のグリッド
            const sectionGrid = document.createElement('div');
            sectionGrid.className = 'char-grid'; // 既存のgridクラスを流用
            sectionGrid.style.padding = '5px 0 20px 0';

            chars.forEach(char => {
                const item = document.createElement('div');
                item.className = 'char-item-icon';
                item.style.position = 'relative';
                // アイコン生成
                const iconHtml = (typeof getCharIconHtml === 'function') ? getCharIconHtml(char) : 'IMG';
                item.innerHTML = iconHtml;

                // 長押し・タップ判定ロジック
                addPressHandlers(item,
                    // Tap Action
                    () => {
                        if (typeof selectCharForTeam === 'function') selectCharForTeam(char.id);
                    },
                    // Long Press Action
                    () => {
                        // 長押し時のフィードバック（振動などあれば良いが、ここでは詳細を開く）
                        openDetail(char.id);
                    }
                );

                sectionGrid.appendChild(item);
            });

            grid.appendChild(sectionGrid);
        });

    } else {
        // --- 通常モード / リーダー選択モード (フラットリスト) ---
        // teamSelect(リーダー)の時は icon モードを強制
        const actualMode = state.listMode === 'teamSelect' ? 'icon' : state.listMode;
        grid.className = `char-grid ${actualMode === 'detail' ? 'mode-detail' : ''}`;
        grid.style.display = actualMode === 'detail' ? 'flex' : 'grid';

        displayDB.forEach(char => {
            const item = document.createElement('div');
            const iconHtml = (typeof getCharIconHtml === 'function') ? getCharIconHtml(char) : 'IMG';

            const defaultClick = () => {
                if (state.listMode === 'teamSelect') {
                    if (typeof selectCharForTeam === 'function') selectCharForTeam(char.id);
                } else {
                    openDetail(char.id);
                }
            };

            if (actualMode === 'icon') {
                item.className = 'char-item-icon';
                item.style.position = 'relative';
                item.innerHTML = iconHtml;

                // For team select mode, use scroll-aware handlers to prevent accidental selection
                if (state.listMode === 'teamSelect') {
                    addScrollAwareHandler(item, () => {
                        if (typeof selectCharForTeam === 'function') selectCharForTeam(char.id);
                    });
                } else {
                    // Normal mode - simple click
                    item.onclick = defaultClick;
                }

            } else {
                item.className = 'char-item-row';
                const rawStats = (char.forms && char.forms[0]) ? char.forms[0].stats : char.stats;
                let displayStats = { hp: '---', atk: '---', def: '---' };
                if (rawStats) {
                    if (rawStats.rainbow) displayStats = rawStats.rainbow;
                    else if (rawStats.hp) displayStats = rawStats;
                }

                let badgeHtml = '';
                if (char.seza) {
                    badgeHtml = `<span class="seza-badge-mini">超極限</span>`;
                } else if (char.eza && !char.seza) {
                    badgeHtml = `<span class="eza-badge-mini">極限</span>`;
                }

                let totalLen = char.name.length;
                if (badgeHtml) totalLen += 3;

                let nameClass = 'char-row-name';
                if (totalLen > 18) nameClass += ' text-xs';
                else if (totalLen > 14) nameClass += ' text-sm';

                item.innerHTML = `
                    <div class="list-icon-wrapper">${iconHtml}</div>
                    <div class="char-row-info">
                        <div class="char-row-header"><div class="char-row-title">${char.title || ''}</div><div class="char-row-date">${char.release || ''}</div></div>
                        <div class="char-name-badge-flex" style="display:flex; align-items:center; width:100%;">
                            <div class="${nameClass}" style="flex:1; display:block; padding-right:4px;">
                                <span class="char-name-text">${char.name.replace(/\n/g, ' ')}</span>
                            </div>
                            ${badgeHtml}
                        </div>
                        <div class="char-row-details">
                            <div class="list-cost">コスト ${char.cost || '-'}</div>
                            <div class="char-row-stats"><span>HP ${displayStats.hp}</span><span>ATK ${displayStats.atk}</span><span>DEF ${displayStats.def}</span></div>
                        </div>
                    </div>`;
                item.onclick = defaultClick;
            }
            grid.appendChild(item);
        });
    }

    // 長押し・タップ判定ヘルパー
    function addPressHandlers(element, onTap, onLongPress) {
        let timer;
        let isLongPressed = false;
        let startX, startY;
        const longPressDuration = 500; // ms

        const handleStart = (e) => {
            isLongPressed = false;
            if (e.touches) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
            timer = setTimeout(() => {
                isLongPressed = true;
                if (navigator.vibrate) navigator.vibrate(50); // 触覚フィードバック
                onLongPress();
            }, longPressDuration);
        };

        const handleEnd = (e) => {
            // e.preventDefault(); // 必要に応じて
            if (timer) clearTimeout(timer);
            if (!isLongPressed) {
                onTap();
            }
        };

        const handleMove = (e) => {
            if (!timer) return;
            if (e.touches) {
                const diffX = Math.abs(e.touches[0].clientX - startX);
                const diffY = Math.abs(e.touches[0].clientY - startY);
                if (diffX > 10 || diffY > 10) {
                    clearTimeout(timer);
                    timer = null; // Cancel
                }
            }
        };

        // スマホ用
        element.addEventListener('touchstart', handleStart, { passive: true });
        element.addEventListener('touchmove', handleMove, { passive: true });
        element.addEventListener('touchend', handleEnd);

        // PC用 (右クリック無効化して長押しっぽくするか、単純にクリックと右クリックにするか)
        // ここではPCでもマウスダウン長押しに対応させる
        element.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return; // 左クリックのみ
            isLongPressed = false;
            timer = setTimeout(() => {
                isLongPressed = true;
                onLongPress();
            }, longPressDuration);
        });
        element.addEventListener('mouseup', (e) => {
            if (timer) clearTimeout(timer);
            if (!isLongPressed && e.button === 0) {
                onTap();
            }
        });
        element.addEventListener('mouseleave', () => {
            if (timer) clearTimeout(timer);
        });
        // コンテキストメニュー抑制（長押しでメニューが出ないように）
        element.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    // スクロール対応タップ判定ヘルパー (スクロール時は選択しない)
    function addScrollAwareHandler(element, onTap) {
        let startX, startY;
        let hasMoved = false;
        const moveThreshold = 10; // px

        const handleTouchStart = (e) => {
            hasMoved = false;
            if (e.touches && e.touches[0]) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
        };

        const handleTouchMove = (e) => {
            if (e.touches && e.touches[0]) {
                const diffX = Math.abs(e.touches[0].clientX - startX);
                const diffY = Math.abs(e.touches[0].clientY - startY);
                if (diffX > moveThreshold || diffY > moveThreshold) {
                    hasMoved = true;
                }
            }
        };

        const handleTouchEnd = (e) => {
            if (!hasMoved) {
                onTap();
            }
            hasMoved = false;
        };

        // Touch events
        element.addEventListener('touchstart', handleTouchStart, { passive: true });
        element.addEventListener('touchmove', handleTouchMove, { passive: true });
        element.addEventListener('touchend', handleTouchEnd);

        // Mouse events (for PC)
        let mouseHasMoved = false;
        element.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            mouseHasMoved = false;
            startX = e.clientX;
            startY = e.clientY;
        });
        element.addEventListener('mousemove', (e) => {
            if (startX !== undefined) {
                const diffX = Math.abs(e.clientX - startX);
                const diffY = Math.abs(e.clientY - startY);
                if (diffX > moveThreshold || diffY > moveThreshold) {
                    mouseHasMoved = true;
                }
            }
        });
        element.addEventListener('mouseup', (e) => {
            if (e.button === 0 && !mouseHasMoved) {
                onTap();
            }
            mouseHasMoved = false;
            startX = undefined;
            startY = undefined;
        });
    }


    if (state.detailCharId === null && state.scrollPositions && state.scrollPositions['zukan'] !== undefined) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const content = document.getElementById('main-content');
                if (content) {
                    content.scrollTop = state.scrollPositions['zukan'];
                }
            });
        });
    }
}

// --- 4. Detail View Logic & UI Actions ---

function openDetail(id) {
    // Save scroll position BEFORE changing state
    const content = document.getElementById('main-content');
    if (content) {
        state.scrollPositions['zukan'] = content.scrollTop;
    }

    const url = new URL(window.location);
    url.searchParams.set('id', id);
    window.history.pushState({ id: id }, '', url);

    if (content) {
        content.scrollTop = 0;
    }

    state.detailCharId = id;
    state.detailFormIndex = 0;
    state.detailEzaMode = 'normal';
    state.animDirection = 'right';

    if (typeof render === 'function') render();
    if (typeof scrollToTop === 'function') scrollToTop();
}

function closeDetail() {
    const url = new URL(window.location);
    if (url.searchParams.has('id')) {
        window.history.back();
        return;
    }

    // Save current detail scroll just in case
    const content = document.getElementById('main-content');
    if (content) state.scrollPositions['detail'] = content.scrollTop;

    state.detailCharId = null;
    state.animDirection = 'left';
    if (typeof render === 'function') render();
}

function setDetailForm(index) {
    state.detailFormIndex = index;
    renderCharacterDetail(state.detailCharId);
}

function setEzaMode(mode) {
    state.detailEzaMode = mode;

    const char = DB.find(c => c.id === state.detailCharId);
    let targetForms = char.forms;
    if (mode === 'eza' && char.forms_eza) targetForms = char.forms_eza;
    if (mode === 'seza' && char.forms_seza) targetForms = char.forms_seza;

    if (!targetForms || !targetForms[state.detailFormIndex]) {
        state.detailFormIndex = 0;
    }

    renderCharacterDetail(state.detailCharId);
}

function toggleEzaSwitch(el) {
    if (el.classList.contains('disabled')) return;
    const char = DB.find(c => c.id === state.detailCharId);
    let nextMode = 'normal';
    if (state.detailEzaMode === 'normal') { if (char.eza) nextMode = 'eza'; }
    else if (state.detailEzaMode === 'eza') { if (char.seza) nextMode = 'seza'; else nextMode = 'normal'; }
    else { nextMode = 'normal'; }
    setEzaMode(nextMode);
}

function toggleFieldInfo(btn) {
    const container = btn.closest('.field-floating-container');
    const details = container.querySelector('.field-details-popup');

    if (details.classList.contains('open')) {
        details.classList.remove('open');
    } else {
        details.classList.add('open');
    }
}

function togglePartnerSection(id, btn) {
    const el = document.getElementById(id);
    if (!el) return;

    // Task 1: Accordion Animation
    // Toggle the 'open' class
    const isOpen = el.classList.contains('open');
    if (isOpen) {
        el.classList.remove('open');
    } else {
        el.classList.add('open');
    }

    if (btn) {
        const arrow = btn.querySelector('.toggle-arrow');
        if (arrow) arrow.textContent = !isOpen ? '▲' : '▼';
    }
}

function openLeaderDetailModal(leaderId) {
    const leaderChar = DB.find(c => c.id === leaderId);
    const subChar = DB.find(c => c.id === state.detailCharId);
    if (!leaderChar || !subChar) return;

    let lsText = leaderChar.leaderSkill;
    let modeLabel = "";
    if (leaderChar.leader_skill_seza) { lsText = leaderChar.leader_skill_seza; modeLabel = " (超極限)"; }
    else if (leaderChar.leader_skill_eza || leaderChar.leaderSkill_eza) { lsText = (leaderChar.leader_skill_eza || leaderChar.leaderSkill_eza); modeLabel = " (極限)"; }

    const tempLeader = { ...leaderChar, leaderSkill: lsText };
    const currentSubForm = (subChar.forms && subChar.forms[state.detailFormIndex]) ? subChar.forms[state.detailFormIndex] : subChar;
    const targetForCalc = { ...currentSubForm, categories: (currentSubForm.categories || subChar.categories), type: (currentSubForm.type || subChar.type), class: (currentSubForm.class || subChar.class) };

    const stats = calcDetailedLeaderStats(tempLeader, targetForCalc);

    const leaderIconHtml = getCharIconHtml(leaderChar);

    const modalHtml = `
        <div id="leader-detail-modal" class="modal-overlay open" style="z-index: 1200;">
            <div class="filter-modal scale-in" style="height: auto; max-height: 80vh; padding-bottom: 30px;">
                <div class="link-modal-content">
                    <h2 style="font-size:14px; font-weight:bold; text-align:center; padding-bottom:10px; border-bottom:1px solid #333;">リーダー詳細</h2>
                    
                    <div style="display:flex; flex-direction:column; align-items:center; padding:15px 0;">
                        <div class="dokkan-icon" onclick="closeLeaderModal(); openDetail(${leaderId});" style="width:80px; height:80px; margin-bottom:8px; cursor:pointer;">
                            ${leaderIconHtml}
                        </div>
                        <div style="font-size:12px; font-weight:bold; color:#fff;">${leaderChar.name}</div>
                        <div style="font-size:10px; color:#aaa;">${leaderChar.title || ''}${modeLabel}</div>
                    </div>

                    <div class="link-summary-box">
                        <div class="summary-title">対象キャラへの効果</div>
                        <div class="summary-stats">
                            ${stats.ki > 0 ? `<div class="stat-badge stat-ki">気力+${stats.ki}</div>` : ''}
                            <div class="stat-badge stat-def" style="border-color:#4cd964;">HP${stats.hp}%</div>
                            <div class="stat-badge stat-atk">ATK${stats.atk}%</div>
                            <div class="stat-badge stat-def">DEF${stats.def}%</div>
                        </div>
                    </div>

                    <div style="background:#2a2a2e; padding:10px; border-radius:6px; margin: 0 15px 15px 15px; font-size:11px; color:#ddd; line-height:1.5;">
                        <div style="color:#aaa; margin-bottom:4px; font-weight:bold;">リーダースキル:</div>
                        ${lsText}
                    </div>

                    <div style="padding:10px; border-top:1px solid #333;">
                        <button class="btn-reset" onclick="closeLeaderModal()" style="width:100%; padding:10px;">閉じる</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const existing = document.getElementById('leader-detail-modal');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeLeaderModal() {
    const modal = document.getElementById('leader-detail-modal');
    if (modal) modal.remove();
}

function openLinkPartnerModal(partnerId, formType, formIndex) {
    const mainChar = DB.find(c => c.id === state.detailCharId);
    if (!mainChar) return;

    let targetForms = mainChar.forms;
    if (state.detailEzaMode === 'eza' && mainChar.forms_eza) targetForms = mainChar.forms_eza;
    if (state.detailEzaMode === 'seza' && mainChar.forms_seza) targetForms = mainChar.forms_seza;

    const mainForm = (targetForms && targetForms[state.detailFormIndex]) ? targetForms[state.detailFormIndex] : mainChar;
    const mainLinks = new Set(mainForm.links || []);

    const partnerChar = DB.find(c => c.id === partnerId);
    if (!partnerChar) return;

    let partnerForm = partnerChar;

    if (formType && formIndex !== undefined && formIndex >= 0) {
        if (formType === 'seza' && partnerChar.forms_seza && partnerChar.forms_seza[formIndex]) {
            partnerForm = partnerChar.forms_seza[formIndex];
        } else if (formType === 'eza' && partnerChar.forms_eza && partnerChar.forms_eza[formIndex]) {
            partnerForm = partnerChar.forms_eza[formIndex];
        } else if (formType === 'normal' && partnerChar.forms && partnerChar.forms[formIndex]) {
            partnerForm = partnerChar.forms[formIndex];
        }
    }

    const partnerLinks = partnerForm.links || [];
    const sharedLinks = partnerLinks.filter(l => mainLinks.has(l));

    let totalStats = {
        ki: 0, atk: 0, def: 0, def_down: 0,
        hp_rec: 0, crit: 0, reduce: 0, dodge: 0
    };
    let linksHtml = "";

    sharedLinks.forEach(linkName => {
        const linkData = LINKS[linkName] || { lv1: "---", lv10: "---" };
        parseLinkStats(linkData.lv10, totalStats);

        linksHtml += `
            <div class="shared-link-item">
                <div class="shared-link-name">${linkName}</div>
                <div class="shared-link-effect">Lv10: ${formatText(linkData.lv10)}</div>
            </div>
        `;
    });

    const leaderData = (mainForm.leaderSkill || mainForm.leader_skill_eza) ? mainForm : mainChar;
    const lsBoost = calcLeaderBoost(mainChar, partnerChar);
    let lsBadgeHtml = "";

    if (lsBoost > 0) {
        let badgeColor = "#888";
        if (lsBoost >= 200) badgeColor = "#ff4d4d";
        else if (lsBoost >= 170) badgeColor = "#a7c51eff";
        else if (lsBoost >= 150) badgeColor = "#5f5100ff";

        lsBadgeHtml = `<div style="margin-top:4px; font-size:10px; font-weight:bold; color:#fff; background:${badgeColor}; padding:1px 6px; border-radius:4px; box-shadow:0 1px 3px rgba(0,0,0,0.5);">LS ${lsBoost}%</div>`;
    } else {
        lsBadgeHtml = `<div style="margin-top:4px; font-size:10px; color:#666; background:#222; padding:1px 6px; border-radius:4px; border:1px solid #444;">LS 対象外</div>`;
    }

    const mainIconHtml = getCharIconHtml(mainChar, mainForm);
    const partnerIconHtml = getCharIconHtml(partnerChar, partnerForm);

    const modalHtml = `
        <div id="link-partner-modal" class="modal-overlay open" style="z-index: 1100;">
            <div class="filter-modal scale-in" style="height: 70vh; max-height: 600px;">
                <div class="link-modal-content">
                    <h2 style="font-size:14px; font-weight:bold; text-align:center; padding-bottom:10px; border-bottom:1px solid #333;">リンクスキル相性確認</h2>
                    
                    <div class="link-compare-row">
                        <div class="compare-char">
                            <div class="dokkan-icon" style="width:60px; height:60px; margin-bottom:4px;">${mainIconHtml}</div>
                            <span style="font-size:10px; color:#aaa; text-align:center;">自身</span>
                        </div>
                        <div class="compare-arrow">⇔</div>
                        <div class="compare-char" onclick="closeLinkModal(); openDetail(${partnerChar.id});" style="cursor:pointer;">
                            <div class="dokkan-icon" style="width:60px; height:60px; margin-bottom:4px;">${partnerIconHtml}</div>
                            ${lsBadgeHtml}
                            <span style="font-size:10px; color:#ffd700; text-decoration:underline; text-align:center;">詳細へ</span>
                        </div>
                    </div>

                    <div class="link-summary-box">
                        <div class="summary-title">発動リンク合計効果 (Lv10)</div>
                        <div class="summary-stats">
                            ${totalStats.ki > 0 ? `<div class="stat-badge stat-ki">気力+${totalStats.ki}</div>` : ''}
                            ${totalStats.atk > 0 ? `<div class="stat-badge stat-atk">ATK${totalStats.atk}%UP</div>` : ''}
                            ${totalStats.def > 0 ? `<div class="stat-badge stat-def">DEF${totalStats.def}%UP</div>` : ''}
                            ${totalStats.hp_rec > 0 ? `<div class="stat-badge stat-def">HP${totalStats.hp_rec}%回復</div>` : ''}
                            ${totalStats.crit > 0 ? `<div class="stat-badge stat-atk">会心率${totalStats.crit}%UP</div>` : ''}
                            ${totalStats.reduce > 0 ? `<div class="stat-badge stat-def">軽減率${totalStats.reduce}%UP</div>` : ''}
                            ${totalStats.dodge > 0 ? `<div class="stat-badge stat-def">回避率${totalStats.dodge}%UP</div>` : ''}
                            ${totalStats.def_down > 0 ? `<div class="stat-badge stat-down">敵DEF${totalStats.def_down}%DOWN</div>` : ''}
                            
                            ${(totalStats.ki === 0 && totalStats.atk === 0 && totalStats.def === 0 && totalStats.def_down === 0 && totalStats.hp_rec === 0 && totalStats.crit === 0 && totalStats.reduce === 0 && totalStats.dodge === 0) ? '<span style="font-size:11px;color:#666;">ステータス変動なし</span>' : ''}
                        </div>
                    </div>

                    <div class="link-detail-list">
                        <div style="font-size:11px; color:#888; margin-bottom:6px;">共通リンク (${sharedLinks.length}個)</div>
                        ${linksHtml}
                    </div>

                    <div style="padding:10px; border-top:1px solid #333;">
                        <button class="btn-reset" onclick="closeLinkModal()" style="width:100%; padding:10px;">閉じる</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const existing = document.getElementById('link-partner-modal');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeLinkModal() {
    const modal = document.getElementById('link-partner-modal');
    if (modal) modal.remove();
}

function renderCharacterDetail(id) {
    const contentDiv = document.getElementById('main-content');
    contentDiv.innerHTML = '';
    const char = DB.find(c => c.id === id);
    if (!char) return;

    const animClass = state.animDirection === 'right' ? 'slide-in-right' : 'slide-in-left';

    const container = document.createElement('div');
    container.className = `detail-container-wrapper ${animClass}`;

    let targetForms = char.forms;
    if (state.detailEzaMode === 'eza' && char.forms_eza) targetForms = char.forms_eza;
    if (state.detailEzaMode === 'seza' && char.forms_seza) targetForms = char.forms_seza;

    const currentData = (targetForms && targetForms.length > 0 && targetForms[state.detailFormIndex]) ? targetForms[state.detailFormIndex] : char;

    const displayName = (currentData.name || char.name || "").replace(/\n/g, '<br>');
    const displayRawName = (currentData.name || char.name || "").split('\n')[0];
    const isLongName = displayRawName.length > 15;
    const nameClass = isLongName ? 'header-scroll-anim' : '';

    // Task 3: Persistence Fallback
    let navList = state.currentList;
    if (!navList || navList.length === 0) {
        navList = DB;
    }

    let prevCharId = null;
    let nextCharId = null;
    if (navList) {
        const idx = navList.findIndex(c => c.id === id);
        if (idx !== -1) {
            if (idx > 0) prevCharId = navList[idx - 1].id;
            if (idx < navList.length - 1) nextCharId = navList[idx + 1].id;
        }
    }

    const header = document.createElement('div');
    header.className = 'detail-header';
    // Task 2: Compact Header & Removed Nav Arrows
    header.innerHTML = `
        <div class="header-left">
            <button class="back-btn" onclick="closeDetail()">←</button>
            <div style="flex: 1; min-width: 0;">
                <div class="char-sub-header text-truncate">${char.title || ''}</div>
                <div class="char-name-header clickable-tag" onclick="applyFilter('name', '${displayRawName}')"><span class="${nameClass}">${displayName}</span></div>
                <div class="date-info">
                    <div class="date-row-primary">
                        <span class="date-tag">実装: ${char.release || '---'}</span>
                        ${char.eza ? `<span class="date-tag eza">極限: ${char.eza}</span>` : ''}
                    </div>
                    ${char.seza ? `<span class="date-tag seza">超極限: ${char.seza}</span>` : ''}
                </div>
            </div>
        </div>
        <div class="action-buttons">
            <button class="icon-btn ${state.favorites.includes(id) ? 'active' : ''}" onclick="toggleFav(this, ${id})">★</button>
            <button class="icon-btn owned-btn ${state.owned.includes(id) ? 'active' : ''}" onclick="toggleOwned(this, ${id})">BOX</button>
        </div>
    `;

    const stickyWrapper = document.createElement('div');
    stickyWrapper.className = 'sticky-header-wrapper';
    stickyWrapper.appendChild(header);

    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'tabs-control-row';

    if (targetForms && targetForms.length > 0) {
        const tabRow = document.createElement('div');
        tabRow.className = 'transform-tabs';

        const currentRevType = String(currentData.reversible_type || "");

        targetForms.forEach((form, idx) => {
            const formRevType = String(form.reversible_type || "");

            if (formRevType === currentRevType) {
                const isActive = state.detailFormIndex === idx ? 'active' : '';
                tabRow.innerHTML += `<div class="transform-tab-item ${isActive}" onclick="setDetailForm(${idx})">${form.label || '形態' + (idx + 1)}</div>`;
            }
        });
        controlsContainer.appendChild(tabRow);
    } else {
        controlsContainer.innerHTML += '<div class="transform-tabs" style="flex:1"></div>';
    }

    if (char.forms_eza || char.forms_seza) {
        const mode = state.detailEzaMode;
        const hasSeza = !!char.forms_seza;
        const hasEza = char.eza || (char.awakening && char.awakening.some(a => a.rank === 'EZA'));
        const ezaBadge = hasEza ? `<span class="eza-badge-mini">極限</span>` : '';
        const ezaSwitch = document.createElement('div');
        ezaSwitch.className = 'eza-switch-container-inline';
        ezaSwitch.innerHTML = `
            <div class="eza-switch">
                <div class="eza-switch-item ${mode === 'normal' ? 'active' : ''}" onclick="setEzaMode('normal')">通常</div>
                <div class="eza-switch-item ${mode === 'eza' ? 'active active-eza' : ''} ${!hasEza ? 'disabled' : ''}" onclick="${hasEza ? "setEzaMode('eza')" : ""}">極限</div>
                <div class="eza-switch-item ${mode === 'seza' ? 'active active-seza' : ''} ${!hasSeza ? 'disabled' : ''}" onclick="${hasSeza ? "setEzaMode('seza')" : ""}">超極限</div>
            </div>`;
        controlsContainer.appendChild(ezaSwitch);
    }

    stickyWrapper.appendChild(controlsContainer);
    container.appendChild(stickyWrapper);

    const body = document.createElement('div');
    body.className = 'detail-container';

    if (char.awakening) {
        let awkHtml = `<div class="section-title" style="margin-top:10px;">覚醒ルート</div><div class="scroll-container-x">`;
        char.awakening.forEach((step, idx) => {
            const iconHtml = getStepIconHtml(step, char);
            let clickAction = "";
            let cursorStyle = "";
            if (step.id) {
                clickAction = `onclick="openDetail(${step.id})"`;
                cursorStyle = `cursor: pointer;`;
            }
            awkHtml += `<div class="medal-step" ${clickAction} style="${cursorStyle}">${iconHtml}</div>`;
            if (idx < char.awakening.length - 1) {
                const nextStep = char.awakening[idx + 1];
                if (nextStep.medals) {
                    awkHtml += `<div class="transition-area"><div class="medals-req">`;
                    nextStep.medals.forEach(medal => {
                        let bgHtml = '';
                        if (medal.bg) {
                            bgHtml = `<img src="assets/medals/${medal.bg}.png" class="medal-bg" onerror="this.style.display='none'">`;
                        }

                        let medalImg = `<img src="assets/medals/${medal.name}.png" class="medal-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`;
                        let medalFallback = `<div class="req-icon-fallback" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;color:#fff;font-size:8px;">M</div>`;

                        awkHtml += `<div class="req-item"><div class="req-icon" title="${medal.name}">${bgHtml}${medalImg}${medalFallback}</div><div class="req-count">x${medal.count}</div></div>`;
                    });
                    awkHtml += `</div><div class="arrow-long">→</div></div>`;
                } else { awkHtml += `<div class="transition-area"><div class="arrow-long">→</div></div>`; }
            }
        });
        awkHtml += `</div>`;
        body.innerHTML += awkHtml;
    }

    if (currentData.stats) {
        let sRainbow, sFifty, sBase;
        if (currentData.stats.rainbow) {
            sRainbow = currentData.stats.rainbow;
            sFifty = currentData.stats.fifty || { hp: 0, atk: 0, def: 0 };
            sBase = currentData.stats.base || { hp: 0, atk: 0, def: 0 };
        }
        else {
            const base = currentData.stats;

            if (base.hp) {
                sBase = base;

                sFifty = {
                    hp: Number(base.hp) + 2000,
                    atk: Number(base.atk) + 2000,
                    def: Number(base.def) + 2000
                };

                const boosts = {
                    'AGL': { hp: 4600, atk: 5000, def: 5400 },
                    'TEQ': { hp: 4600, atk: 5400, def: 5000 },
                    'INT': { hp: 5000, atk: 5000, def: 5000 },
                    'STR': { hp: 5000, atk: 5400, def: 4600 },
                    'PHY': { hp: 5400, atk: 5000, def: 4600 }
                };

                const type = char.type || 'AGL';
                const boost = boosts[type] || { hp: 5000, atk: 5000, def: 5000 };

                sRainbow = {
                    hp: Number(base.hp) + boost.hp,
                    atk: Number(base.atk) + boost.atk,
                    def: Number(base.def) + boost.def
                };

            } else {
                sRainbow = { hp: '---', atk: '---', def: '---' }; sFifty = sRainbow; sBase = sRainbow;
            }
        }
        let maxLv = 100;
        if (char.rarity === 'LR') maxLv = 150;
        else if (char.rarity === 'UR') {
            if (state.detailEzaMode === 'eza' || state.detailEzaMode === 'seza') maxLv = 140; else maxLv = 120;
        } else if (char.rarity === 'SSR') maxLv = 80;

        body.innerHTML += `<div id="char-swipe-area" style="touch-action: pan-y;"><div class="section-title">ステータス</div><div style="display:flex; gap:10px;"><div style="display:flex; flex-direction:column; align-items:center;"><div class="detail-icon-large">${getCharIconHtml(char, currentData)}</div><div class="text-xs text-gray-300 mt-1">最大Lv.${maxLv}</div>${char.cost ? `<div class="char-cost">コスト: ${char.cost}</div>` : ''}</div><table style="width:100%; font-size:11px; text-align:center; border-collapse:collapse; border:1px solid #444; border-radius:4px; overflow:hidden;"><tr style="background:#333; color:#aaa;"><th></th><th>HP</th><th>ATK</th><th>DEF</th></tr><tr style="background:#222; border-bottom:1px solid #333;"><td style="background:#2a2a2e;font-weight:bold;">LvMax</td><td>${sBase.hp}</td><td>${sBase.atk}</td><td>${sBase.def}</td></tr><tr style="background:#222; border-bottom:1px solid #333;"><td style="background:#2a2a2e;font-weight:bold;">55%</td><td>${sFifty.hp}</td><td>${sFifty.atk}</td><td>${sFifty.def}</td></tr><tr style="background:#222;"><td style="background:#2a2a2e;font-weight:bold;">100%</td><td>${sRainbow.hp}</td><td>${sRainbow.atk}</td><td>${sRainbow.def}</td></tr></table></div></div>`;
    }

    let displayLeaderSkill = char.leaderSkill;
    if (state.detailEzaMode === 'eza' && char.leaderSkill_eza) displayLeaderSkill = char.leaderSkill_eza;
    else if (state.detailEzaMode === 'seza' && char.leaderSkill_seza) displayLeaderSkill = char.leaderSkill_seza;

    if (displayLeaderSkill) {
        body.innerHTML += `<div class="section-title">リーダースキル</div><div class="skill-card"><div class="passive-text">${formatText(displayLeaderSkill)}</div></div>`;
    }

    const partners = calcPartners(char, currentData);
    if (partners.length > 0) {
        let partnersHtml = '';
        partners.forEach(p => {
            const iconHtml = getCharIconHtml(p.char, p.targetForm);
            let labelHtml = `リンク: ${p.match}`;
            let badgeClass = "link-match-badge";
            if (p.isFull) { labelHtml = "フルリンク"; badgeClass += " full-link"; }
            partnersHtml += `<div class="scroll-item-wrapper" onclick="openLinkPartnerModal(${p.char.id}, '${p.formType}', ${p.formIndex})"><div class="scroll-icon-box">${iconHtml}</div><div class="scroll-item-info"><span class="${badgeClass}">${labelHtml}</span></div></div>`;
        });

        const toggleId = `partner-toggle-${id}`;
        body.innerHTML += `
            <div class="section-title" onclick="togglePartnerSection('${toggleId}', this)" style="cursor:pointer; display:flex; align-items:center; justify-content:space-between;">
                <span>相性の良いキャラ (タップで開く)</span>
                <span class="toggle-arrow" style="font-size:12px; color:#888;">▼</span>
            </div>
                <!-- Task 1: Accordion Animation - added accordion-content, removed display:none -->
                <div id="${toggleId}" class="partner-scroll accordion-content">${partnersHtml}</div>
        `;
    }

    if (currentData.passive) {
        let content = '';
        if (currentData.passive.intro) {
            const conditionHtml = formatText(currentData.passive.intro.condition);

            const effectsList = currentData.passive.intro.effect.split('\n').map(line => {
                let processed = line.replace(/\[img:([^\]]+)\]/g, '<img src="assets/skills/$1.png" class="inline-skill-icon" onerror="this.style.display=\'none\'">')
                    .replace(/([0-9]+%?|\+[0-9]+)/g, '<span class="hl-num">$1</span>');
                return `<div class="passive-bullet">${processed}</div>`;
            }).join('');

            content += `<div class="entry-effect-box">
                <div class="entry-title">登場時演出</div>
                <div class="passive-group" style="margin-top:6px;">
                    <div class="passive-title">${conditionHtml}</div>
                    <div class="passive-list">${effectsList}</div>
                </div>
            </div>`;
        }
        if (currentData.passive.details) {
            currentData.passive.details.forEach(group => {
                content += `<div class="passive-group">`;
                if (group.title) content += `<div class="passive-title">${group.title}</div>`;
                if (group.effects && group.effects.length > 0) {
                    content += `<div class="passive-list">`;
                    group.effects.forEach(effect => {
                        let processedText = effect.replace(/\[img:([^\]]+)\]/g, '<img src="assets/skills/$1.png" class="inline-skill-icon" onerror="this.style.display=\'none\'">').replace(/([0-9]+%?|\+[0-9]+)/g, '<span class="hl-num">$1</span>');
                        content += `<div class="passive-bullet">${processedText}</div>`;
                    });
                    content += `</div>`;
                }
                content += `</div>`;
            });
        } else {
            content += `<div class="passive-text">${parsePassiveText(currentData.passive.main)}</div>`;
        }

        if (currentData.passive.maxValues) {
            const mv = currentData.passive.maxValues;

            content += `
            <div class="skill-footer">
                <div class="skill-val-item">
                    <span class="skill-val-label">最大会心</span>
                    <div class="skill-val-content">
                        <img src="assets/skills/icon_crit.png" class="skill-stat-icon" onerror="this.style.display='none'">
                        <span class="skill-val-text">${mv.crit || '-'}</span>
                    </div>
                </div>
                <div class="skill-val-item">
                    <span class="skill-val-label">最大必殺追撃</span>
                    <div class="skill-val-content">
                        <img src="assets/skills/icon_add.png" class="skill-stat-icon" onerror="this.style.display='none'">
                        <span class="skill-val-text">${mv.add || '-'}</span>
                    </div>
                </div>
                <div class="skill-val-item">
                    <span class="skill-val-label">最大軽減</span>
                    <div class="skill-val-content">
                        <img src="assets/skills/icon_reduce.png" class="skill-stat-icon" onerror="this.style.display='none'">
                        <span class="skill-val-text">${mv.reduce || '-'}</span>
                    </div>
                </div>
                <div class="skill-val-item">
                    <span class="skill-val-label">最大回避</span>
                    <div class="skill-val-content">
                        <img src="assets/skills/icon_dodge.png" class="skill-stat-icon" onerror="this.style.display='none'">
                        <span class="skill-val-text">${mv.dodge || '-'}</span>
                    </div>
                </div>
            </div>`;

            let effectIcons = '';
            if (mv.effective) {
                effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_effective.png" class="passive-effect-icon" title="全属性効果抜群"></div>`;
            }
            if (mv.guard) {
                effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_guard.png" class="passive-effect-icon" title="全属性ガード"></div>`;
            }
            if (mv.action_break) {
                effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_action_break.png" class="passive-effect-icon" title="アクションブレイク"></div>`;
            }
            if (mv.revival) {
                effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_revival.png" class="passive-effect-icon" title="復活"></div>`;
            }
            if (mv.stun) {
                effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_stun.png" class="passive-effect-icon" title="気絶"></div>`;
            }
            if (mv.seal) {
                effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_seal.png" class="passive-effect-icon" title="必殺封じ"></div>`;
            }
            if (mv.counter) {
                effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_counter.png" class="passive-effect-icon" title="反撃"></div>`;
            }
            if (mv.survive_ko) {
                effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_survive.png" class="passive-effect-icon" title="KOダメージに耐える"></div>`;
            }
            if (mv.target) effectIcons += `<div class="passive-effect-item"><img src="assets/skills/icon_target.png" class="passive-effect-icon" title="ターゲット集中"></div>`;

            if (effectIcons) {
                content += `<div class="passive-effect-row">${effectIcons}</div>`;
            }
        }

        body.innerHTML += `<div class="section-title">パッシブスキル</div><div class="skill-card"><div class="skill-name">${currentData.passive.name}</div>${content}</div>`;
    }

    if (currentData.active) {
        body.innerHTML += `<div class="section-title">アクティブスキル</div>`;

        const specsHtml = getSpecsHtml(currentData.active.specs);

        body.innerHTML += `
            <div class="skill-card">
                <div class="skill-name">${currentData.active.name}</div>
                <div class="passive-text">
                    <span style="color:var(--highlight); font-weight:bold;">[条件]</span> ${formatText(currentData.active.condition)}<br>
                    <span style="color:var(--highlight); font-weight:bold;">[効果]</span> ${formatText(currentData.active.effect)}
                </div>
                ${specsHtml}
            </div>`;
    }

    if (currentData.standby) {
        const sb = currentData.standby;
        const sbTypeLabel = sb.type || 'STANDBY';

        const finishes = Array.isArray(sb.finish) ? sb.finish : (sb.finish ? [sb.finish] : []);

        let finishesHtml = '';
        finishes.forEach((fin, idx) => {
            const labelText = fin.type || `フィニッシュ${finishes.length > 1 ? " " + (idx + 1) : ""}`;

            finishesHtml += `
                <div class="standby-finish-block" style="text-align: left;">
                    <div class="finish-header">
                        <span class="finish-type-badge">${labelText}</span>
                        <span class="finish-name-text">${fin.name || '---'}</span>
                    </div>
                    <div class="passive-text" style="text-align: left;">
                        <span style="color:var(--highlight); font-weight:bold;">[条件]</span> ${formatText(fin.condition)}<br>
                        <span style="color:var(--highlight); font-weight:bold;">[効果]</span> ${formatText(fin.effect)}
                    </div>
                </div>`;
        });

        body.innerHTML += `
            <div class="section-title" style="color: var(--standby-border); border-left-color: var(--standby-border);">スタンバイスキル</div>
            <div class="standby-card">
                <div class="standby-header">
                    <div class="skill-name" style="margin-bottom:0; color: #fff;">${sb.name}</div>
                </div>
                <div class="passive-text" style="text-align: left;">
                    <span style="color:var(--highlight); font-weight:bold;">[条件]</span> ${formatText(sb.condition)}<br>
                    <span style="color:var(--highlight); font-weight:bold;">[効果]</span> ${formatText(sb.effect)}
                </div>
                ${finishesHtml}
            </div>
        `;
    }

    if (currentData.superAttacks) {
        body.innerHTML += `<div class="section-title">必殺技</div>`;
        currentData.superAttacks.forEach(sa => {
            let color = (sa.ki && sa.ki.includes("18")) ? "#ff4d4d" : "#ffd700";
            let typeIcon = `<span class="sa-type-badge">${sa.type}</span>`;
            if (sa.type) typeIcon = `<div class="sa-type-badge"><img src="assets/sa_types/${sa.type}.png" class="sa-type-icon" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'"><span>${sa.type}</span></div>`;

            const specsHtml = getSpecsHtml(sa.specs);

            body.innerHTML += `
                <div class="super-attack-card" style="border-top-color: ${color};">
                    <div class="sa-header">
                        <span class="sa-ki-badge" style="background:${color};">気力 ${sa.ki || '12'}</span>
                        ${sa.maxLv ? `<span class="sa-lv-badge">Lv${sa.maxLv}</span>` : ''}
                        <span class="sa-name">${sa.name}</span>
                        ${typeIcon}
                    </div>
                    <div class="sa-effect">${formatText(sa.effect)}</div>
                    ${specsHtml}
                </div>`;
        });
    }

    if (char.categories) {
        let catHtml = `<div class="section-title">カテゴリ</div><div style="display:flex; flex-wrap:wrap; gap:6px;">`;
        char.categories.forEach(cat => { catHtml += `<span class="clickable-tag" onclick="window.applyFilter('category', '${cat}')" style="background:#333; padding:6px 12px; border-radius:12px; font-size:12px; border:1px solid #555;">${cat}</span>`; });
        catHtml += `</div>`;
        body.innerHTML += catHtml;

        const targetForLeaderCalc = {
            ...currentData,
            categories: (currentData.categories || char.categories),
            type: (currentData.type || char.type),
            class: (currentData.class || char.class)
        };
        const leaderCandidates = calcLeaderCandidates(targetForLeaderCalc);

        if (leaderCandidates.length > 0) {
            let leaderHtml = '';
            leaderCandidates.forEach(l => {
                const iconHtml = getCharIconHtml(l.char);
                let badgeClass = "link-match-badge";
                if (l.stats.atk >= 200) badgeClass += " full-link";

                leaderHtml += `
                    <div class="leader-candidate-item" onclick="openLeaderDetailModal(${l.char.id})">
                        <div class="scroll-icon-box">${iconHtml}</div>
                        <div class="scroll-item-info">
                            <span class="${badgeClass}">ATK ${l.stats.atk}%</span>
                        </div>
                    </div>`;
            });

            const toggleId = `leader-toggle-${id}`;
            body.innerHTML += `
                <div class="section-title" onclick="togglePartnerSection('${toggleId}', this)" style="cursor:pointer; display:flex; align-items:center; justify-content:space-between; margin-top:20px;">
                    <span>リーダー候補 (タップで開く)</span>
                    <span class="toggle-arrow" style="font-size:12px; color:#888;">▼</span>
                </div>
                <!-- Task 1: Accordion Animation - added accordion-content, removed display:none -->
                <div id="${toggleId}" class="partner-scroll accordion-content" style="padding-top:10px;">${leaderHtml}</div>
            `;
        }
    }

    if (currentData.links) {
        let linkHtml = `<div class="section-title">リンクスキル</div><div class="w-full mt-2 border-t border-[#3a3a3e]"><table class="link-table">`;
        currentData.links.forEach(linkName => {
            const effectData = LINKS[linkName] || { lv1: "---", lv10: "---" };
            linkHtml += `<tr onclick="applyFilter('link', '${linkName}')" style="cursor:pointer;"><td style="border-bottom:1px solid #333; padding:8px 4px;"><div class="link-name">${linkName}</div><div class="link-effect-row"><span class="link-lv-tag">Lv1</span><span>${formatText(effectData.lv1)}</span></div><div class="link-effect-row"><span class="link-lv-tag">Lv10</span><span>${formatText(effectData.lv10)}</span></div></td></tr>`;
        });
        linkHtml += `</table></div>`;
        body.innerHTML += linkHtml;
    }

    const farmResult = calcFarmCards(char);
    if (farmResult.events.length > 0 || farmResult.gashas.length > 0) {
        let farmHtml = `<div class="section-title">技上げ素材</div>`;

        const createFarmItem = (card, labelText, isGasha = false) => {
            const iconHtml = getCharIconHtml(card);
            const displayLabel = isGasha ? "" : labelText;

            return `
                <div class="scroll-item-wrapper" onclick="openDetail(${card.id})">
                    <div class="scroll-icon-box">${iconHtml}</div>
                    <div class="scroll-item-info">
                        ${displayLabel ? `<span class="farm-prob-badge" title="${displayLabel}" style="font-size:8px;max-width:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;">${displayLabel}</span>` : ''}
                    </div>
                </div>`;
        };

        if (farmResult.events.length > 0) {
            farmHtml += `<div class="farm-section-row"><div class="farm-sub-label">イベント</div><div class="scroll-container-x">`;
            farmResult.events.forEach(c => {
                farmHtml += createFarmItem(c, c.drop_event || "Event");
            });
            farmHtml += `</div></div>`;
        }

        if (farmResult.gashas.length > 0) {
            farmHtml += `<div class="farm-section-row" style="margin-top:10px;"><div class="farm-sub-label">ガシャ</div><div class="scroll-container-x">`;
            farmResult.gashas.forEach(c => {
                farmHtml += createFarmItem(c, "", true);
            });
            farmHtml += `</div></div>`;
        }

        body.innerHTML += farmHtml;
    }

    // Ad Slot
    body.innerHTML += `
        <div class="detail-ad-slot">
            <div style="width: 300px; height: 250px; background: #444; color: #888; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                [Advertisement Area]
            </div>
        </div>`;

    container.appendChild(body);
    contentDiv.appendChild(container);

    const fabContainer = document.createElement('div');
    fabContainer.className = 'field-floating-container';
    let hasFab = false;

    if (currentData.field) {
        hasFab = true;
        const fd = currentData.field;
        const initial = fd.name ? fd.name.charAt(0) : 'F';
        const fieldHtml = `
            <div class="fab-wrapper">
                <div class="field-details-popup">
                    <div class="skill-name" style="color:#e080ff; margin-bottom:5px;">${fd.name}</div>
                    <div class="passive-text">
                        <span style="color:var(--highlight); font-weight:bold;">[条件]</span> ${formatText(fd.condition)}<br>
                        <span style="color:var(--highlight); font-weight:bold;">[効果]</span> ${formatText(fd.effect)}
                    </div>
                </div>
                <div class="field-icon-btn" onclick="toggleFieldInfo(this)">
                    <img src="assets/icons/${fd.icon}.png" class="field-icon-img-round" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="field-icon-fallback-round" style="display:none;">${initial}</div>
                </div>
            </div>`;
        fabContainer.innerHTML += fieldHtml;
    }

    if (targetForms && targetForms.length > 0) {

        const currentRevType = String(currentData.reversible_type || "");
        const hasReversibleForm = targetForms.some(f => f.reversible_type !== undefined && f.reversible_type !== "");

        if (hasReversibleForm) {
            let nextIndex = -1;
            let showButton = false;

            if (currentRevType === "") {
                showButton = false;
            } else {
                const firstIndexOfType = targetForms.findIndex(f => String(f.reversible_type || "") === currentRevType);

                if (state.detailFormIndex === firstIndexOfType) {

                    if (currentRevType === "0") {
                        const destIndex = targetForms.findIndex(f => f.reversible_type !== undefined && String(f.reversible_type) !== "" && String(f.reversible_type) !== "0");
                        if (destIndex !== -1) {
                            nextIndex = destIndex;
                            showButton = true;
                        }
                    } else {
                        let sourceIndex = targetForms.findIndex(f => String(f.reversible_type) === "0");
                        if (sourceIndex === -1) sourceIndex = 0;

                        nextIndex = sourceIndex;
                        showButton = true;
                    }
                }
            }

            if (showButton && nextIndex !== -1) {
                hasFab = true;
                const iconName = currentData.reversible_icon || "RC_Button";

                const isTargetMode = (currentRevType !== "0" && currentRevType !== "");
                const borderStyle = isTargetMode ? 'border-color: #ffd700;' : '';

                const revHtml = `
                    <div class="fab-wrapper">
                        <div class="field-icon-btn reversible-icon-btn" onclick="setDetailForm(${nextIndex})" style="${borderStyle}">
                            <img src="assets/icons/${iconName}.png" class="reversible-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                            <div class="field-icon-fallback-round" style="display:none; color:#00ccff;">R</div>
                        </div>
                    </div>`;
                fabContainer.innerHTML += revHtml;
            }
        }
    }

    if (hasFab) {
        contentDiv.appendChild(fabContainer);
    }
}

// --- 5. Expose to Window ---

window.renderFilterModal = renderFilterModal;
window.populateFilterOptions = populateFilterOptions;
window.openFilterModal = openFilterModal;
window.closeFilterModal = closeFilterModal;
window.setFilterLogic = setFilterLogic;
window.toggleMiniLogic = toggleMiniLogic;
window.setSort = setSort;
window.toggleFilter = toggleFilter;
window.addFilterFromInput = addFilterFromInput;
window.removeArrayFilter = removeArrayFilter;
window.resetFilters = resetFilters;
window.applyFilter = applyFilter;
window.clearSearch = clearSearch;
window.setListMode = setListMode;
window.renderZukanLayout = renderZukanLayout;
window.renderZukanList = renderZukanList;
window.openDetail = openDetail;
window.closeDetail = closeDetail;
window.setDetailForm = setDetailForm;
window.setEzaMode = setEzaMode;
window.toggleEzaSwitch = toggleEzaSwitch;
window.renderCharacterDetail = renderCharacterDetail;
window.togglePartnerSection = togglePartnerSection;
window.openLeaderDetailModal = openLeaderDetailModal;
window.closeLeaderModal = closeLeaderModal;
window.openLinkPartnerModal = openLinkPartnerModal;
window.closeLinkModal = closeLinkModal;
window.toggleFieldInfo = toggleFieldInfo;
window.toggleAllItems = toggleAllItems;

// Remove slot character and return to team screen
function removeSlotAndReturn() {
    if (state.listMode === 'teamSelect' && state.selectingSlot !== null) {
        state.teams[state.currentTeamIndex].slots[state.selectingSlot] = null;
        saveTeamState();
    }
    state.listMode = 'icon';
    state.selectingSlot = null;
    state.currentTab = 'team';
    updateTabUI();
    renderTeamLayout();
}
window.removeSlotAndReturn = removeSlotAndReturn;