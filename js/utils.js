// --- Helper Functions ---

function getCharIconHtml(char, formData, options = {}) {
    const displayId = (formData && formData.id) ? formData.id : char.id;
    const displayType = (formData && formData.type) ? formData.type : char.type;
    const displayRarity = (formData && formData.rarity) ? formData.rarity : char.rarity;
    let displayClass = (formData && formData.class) ? formData.class : char.class;

    // SR, R, N は常に汎用属性アイコンを使用
    // SSR は「Native SSR」（SR/R/Nからの覚醒でない）の場合のみ汎用アイコンを使用
    let useGenericIcon = false;
    if (['SR', 'R', 'N'].includes(displayRarity)) {
        useGenericIcon = true;
    } else if (displayRarity === 'SSR') {
        // Check if it's a "Native SSR" (No 'SR', 'R', or 'N' in awakening steps)
        const hasLowerForms = char.awakening && char.awakening.some(step => ['SR', 'R', 'N'].includes(step.rank));
        if (!hasLowerForms) {
            useGenericIcon = true;
        }
    }

    if (useGenericIcon) {
        displayClass = null;
    }

    let typeColor = getAttributeColor(displayType);
    // Access state via global variable or passed arg (here assuming global state for simplicity in this refactor)
    // Ideally state should be passed or managed via a store.
    // For now, checking global state object
    const isOwned = typeof state !== 'undefined' && state.owned.includes(char.id);
    const isFav = typeof state !== 'undefined' && state.favorites.includes(char.id);

    const imgHtml = `<img src="assets/images/${displayId}.png" class="icon-layer layer-char" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><div class="icon-layer layer-char" style="display:none;align-items:center;justify-content:center;color:#555;font-size:10px;background:#333;">IMG</div>`;
    const frameSrc = `assets/frames/${displayRarity}_${displayType}.png`;
    const frameHtml = `<img src="${frameSrc}" class="icon-layer layer-frame" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"><div class="icon-layer layer-frame" style="display:none; border: 2px solid ${typeColor}; box-sizing:border-box;"></div>`;
    const raritySrc = `assets/rarities/${displayRarity}.png`;
    const rarityHtml = `<div class="layer-rarity"><img src="${raritySrc}" class="rarity-img" onerror="this.parentElement.style.background='rgba(0,0,0,0.8)'; this.parentElement.innerHTML='${displayRarity}';"></div>`;

    let typeSrc = '';
    if (displayClass) {
        typeSrc = `assets/types/${displayClass}_${displayType}.png`;
    } else {
        typeSrc = `assets/types/${displayType}.png`;
    }

    const typeHtml = `<div class="layer-type"><img src="${typeSrc}" class="type-img" onerror="this.parentElement.style.background='${typeColor}'; this.parentElement.innerHTML='${getShortType(displayType)}';"></div>`;

    // ステータスアイコン（所持・お気に入り）
    // options.hideStatus: 全て非表示
    // options.hideOwned: 所持のみ非表示
    let statusHtml = '';
    if (!options.hideStatus) {
        const showFav = isFav;
        const showOwned = isOwned && !options.hideOwned;

        if (showFav || showOwned) {
            statusHtml = '<div class="layer-status">';
            if (showFav) statusHtml += '<div class="status-icon status-fav">★</div>';
            if (showOwned) statusHtml += '<div class="status-icon status-owned">✔</div>';
            statusHtml += '</div>';
        }
    }

    // EZAバッジ - options.hideEzaで非表示
    let ezaHtml = '';
    if (!options.hideEza) {
        if (char.seza) {
            ezaHtml = `<div class="layer-eza-status"><img src="assets/status/seza.png" class="eza-icon-img"></div>`;
        } else if (char.eza) {
            ezaHtml = `<div class="layer-eza-status"><img src="assets/status/eza.png" class="eza-icon-img"></div>`;
        }
    }

    return `<div class="dokkan-icon">${frameHtml}${imgHtml}${rarityHtml}${typeHtml}${statusHtml}${ezaHtml}</div>`;
}

// 覚醒ルート用のアイコン生成関数
function getStepIconHtml(step, parentChar) {
    // Pseudo char for rendering
    // If ID exists, use it. If not, use placeholder text logic (simplified)
    const displayId = step.id;
    const displayRarity = step.rank;
    // Inherit type/class
    const displayType = parentChar.type;
    // SSR usually uses normal type icon, others use Super/Extreme if available
    const displayClass = (step.rank === 'SSR') ? null : parentChar.class;

    let typeColor = getAttributeColor(displayType);

    // ▼▼▼ ここが「極限」「超極限」アイコンを生成している部分です ▼▼▼
    // ID（キャラ画像）が指定されていない場合＝極限Z覚醒ステップとみなす
    if (!displayId) {
        let boxClass = 'medal-icon-box';
        if (step.rank === 'EZA') boxClass += ' eza';
        if (step.rank === 'SEZA') boxClass += ' seza';
        let content = 'IMG';
        if (step.rank === 'EZA') {
            content = `<img src="assets/status/eza.png" class="medal-img" style="width: 150%; height: 150%; object-fit: none;">`;
        }
        if (step.rank === 'SEZA') {
            content = `<img src="assets/status/seza.png" class="medal-img" style="width: 80%; height: 80%; object-fit: contain;">`;
        }

        return `<div class="${boxClass}">${content}<div class="rank-badge">${step.rank}</div></div>`;
    }

    // With ID, render full icon (reuse getCharIconHtml logic but simplified without status/eza)
    const imgHtml = `<img src="assets/images/${displayId}.png" class="icon-layer layer-char" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><div class="icon-layer layer-char" style="display:none;align-items:center;justify-content:center;color:#555;font-size:10px;background:#333;">IMG</div>`;
    const frameSrc = `assets/frames/${displayRarity}_${displayType}.png`;
    const frameHtml = `<img src="${frameSrc}" class="icon-layer layer-frame" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"><div class="icon-layer layer-frame" style="display:none; border: 2px solid ${typeColor}; box-sizing:border-box;"></div>`;

    const raritySrc = `assets/rarities/${displayRarity}.png`;
    const rarityHtml = `<div class="layer-rarity"><img src="${raritySrc}" class="rarity-img" onerror="this.parentElement.style.display='none'"></div>`;

    // Type Icon logic
    let typeSrc = '';
    if (displayClass) typeSrc = `assets/types/${displayClass}_${displayType}.png`;
    else typeSrc = `assets/types/${displayType}.png`; // Normal type

    const typeHtml = `<div class="layer-type"><img src="${typeSrc}" class="type-img" onerror="this.parentElement.style.display='none'"></div>`;

    return `<div class="dokkan-icon medal-icon-wrapper">${frameHtml}${imgHtml}${rarityHtml}${typeHtml}</div>`;
}


function getRankColor(r) { return (r === 'LR') ? 'linear-gradient(45deg, #ff0000, #ffff00)' : (r === 'UR') ? '#ff8c00' : '#aaa'; }
function getShortType(t) { return t ? (t === 'AGL' ? '速' : t === 'TEQ' ? '技' : t === 'INT' ? '知' : t === 'STR' ? '力' : '体') : '?'; }
function getAttributeColor(t) { return t ? (t === 'AGL' ? '#00ccff' : t === 'TEQ' ? '#4cd964' : t === 'INT' ? '#ba55d3' : t === 'STR' ? '#ff4d4d' : '#ffa500') : '#888'; }

function parsePassiveText(text) {
    if (!text) return "";
    let formatted = text.replace(/\[img:([^\]]+)\]/g, '<img src="assets/skills/$1.png" class="inline-skill-icon" onerror="this.style.display=\'none\'">');
    return formatted.split('\n').map(line => `<span class="passive-bullet">${line}</span>`).join('');
}

// ★修正: プレースホルダー破壊対策
function formatText(text) {
    if (!text) return "";

    const placeholders = [];
    const pushPlaceholder = (str) => {
        placeholders.push(str);
        return `__PH_${placeholders.length - 1}__`;
    };

    let processed = text;

    // 1. リンク化などの置換（プレースホルダー化）
    processed = processed.replace(/名称に「([^」]+)」/g, (match, name) => {
        const link = `名称に<span class="embedded-link" onclick="applyFilter('name', '${name}')">「${name}」</span>`;
        return pushPlaceholder(link);
    });

    processed = processed.replace(/「([^」]+)」/g, (match, cat) => {
        const link = `<span class="embedded-link" onclick="applyFilter('category', '${cat}')">「${cat}」</span>`;
        return pushPlaceholder(link);
    });

    processed = processed.replace(/\[img:([^\]]+)\]/g, (match, imgName) => {
        const imgTag = `<img src="assets/skills/${imgName}.png" class="inline-skill-icon" onerror="this.style.display='none'">`;
        return pushPlaceholder(imgTag);
    });

    // 2. 数値ハイライト（★修正: プレースホルダー内の数字は無視する）
    // 正規表現: (__PH_\d+__) または (数値パターン) にマッチさせる
    processed = processed.replace(/(__PH_\d+__)|([0-9]+%?|\+[0-9]+)/g, (match, ph, num) => {
        if (ph) {
            // プレースホルダーにマッチした場合は何もしない（そのまま返す）
            return ph;
        } else {
            // 数値にマッチした場合はハイライト
            return `<span class="hl-num">${match}</span>`;
        }
    });

    // 3. プレースホルダーを元のHTMLタグに戻す
    processed = processed.replace(/__PH_(\d+)__/g, (match, index) => {
        return placeholders[Number(index)];
    });

    // 4. 改行を <br> に変換
    return processed.replace(/\n/g, '<br>');
}

function scrollToTop() {
    const c = document.getElementById('main-content');
    if (c) c.scrollTo({ top: 0, behavior: 'auto' });
}

// --- DOM操作ヘルパー ---

/**
 * getElementById のショートカット
 * @param {string} id - 要素のID
 * @returns {HTMLElement|null}
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * 要素を作成するヘルパー
 * @param {string} tag - タグ名
 * @param {string} className - クラス名
 * @param {string} innerHTML - 内部HTML
 * @returns {HTMLElement}
 */
function createElement(tag, className = '', innerHTML = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

// --- タップ・長押しハンドラ ---

/**
 * 長押し・タップ判定ヘルパー
 * タップでonTap、長押し（500ms）でonLongPressを呼び出す
 * @param {HTMLElement} element - 対象要素
 * @param {Function} onTap - タップ時のコールバック
 * @param {Function} onLongPress - 長押し時のコールバック
 * @param {Object} options - オプション
 * @param {number} options.longPressDuration - 長押し判定時間（ms）デフォルト500
 * @param {number} options.moveThreshold - 移動閾値（px）デフォルト10
 */
function addPressHandlers(element, onTap, onLongPress, options = {}) {
    const longPressDuration = options.longPressDuration || 500;
    const moveThreshold = options.moveThreshold || 10;

    let timer;
    let isLongPressed = false;
    let startX, startY;

    const handleStart = (e) => {
        isLongPressed = false;
        if (e.touches) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
        timer = setTimeout(() => {
            isLongPressed = true;
            if (navigator.vibrate) navigator.vibrate(50);
            onLongPress();
        }, longPressDuration);
    };

    const handleEnd = (e) => {
        if (timer) {
            clearTimeout(timer);
            if (!isLongPressed) {
                onTap();
            }
        }
    };

    const handleMove = (e) => {
        if (!timer) return;
        if (e.touches) {
            const diffX = Math.abs(e.touches[0].clientX - startX);
            const diffY = Math.abs(e.touches[0].clientY - startY);
            if (diffX > moveThreshold || diffY > moveThreshold) {
                clearTimeout(timer);
                timer = null;
            }
        }
    };

    // タッチイベント
    element.addEventListener('touchstart', handleStart, { passive: true });
    element.addEventListener('touchmove', handleMove, { passive: true });
    element.addEventListener('touchend', handleEnd);

    // マウスイベント（PC用）
    element.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        startX = e.clientX;
        startY = e.clientY;
        isLongPressed = false;
        timer = setTimeout(() => {
            isLongPressed = true;
            onLongPress();
        }, longPressDuration);
    });

    element.addEventListener('mousemove', (e) => {
        if (timer) {
            const diffX = Math.abs(e.clientX - startX);
            const diffY = Math.abs(e.clientY - startY);
            if (diffX > moveThreshold || diffY > moveThreshold) {
                clearTimeout(timer);
                timer = null;
            }
        }
    });

    element.addEventListener('mouseup', (e) => {
        if (timer) {
            clearTimeout(timer);
            if (!isLongPressed && e.button === 0) {
                onTap();
            }
        }
    });

    element.addEventListener('mouseleave', () => {
        if (timer) clearTimeout(timer);
    });

    element.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
}

/**
 * スクロール対応タップ判定ヘルパー
 * スクロール時は選択しないようにする
 * @param {HTMLElement} element - 対象要素
 * @param {Function} onTap - タップ時のコールバック
 * @param {Object} options - オプション
 * @param {number} options.moveThreshold - 移動閾値（px）デフォルト10
 */
function addScrollAwareHandler(element, onTap, options = {}) {
    const moveThreshold = options.moveThreshold || 10;
    let startX, startY;
    let hasMoved = false;

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

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd);

    // マウスイベント（PC用）
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