/**
 * ドッカンバトルDB用 スプレッドシート to JSON 変換スクリプト
 * Standby, Field, Reversible, SourceType, DropInfo 対応版
 */

const FIXED_REVERSIBLE_ICON_NAME = "RC_Button";

/**
 * Web API (GET) エントリーポイント
 * アプリから fetch() で呼ばれた際に JSON を返す
 */
function doGet(e) {
  const result = getCharacterData();
  
  // JSON 文字列化
  let jsonString = JSON.stringify(result);
  
  // \n のエスケープ修正 (セル内の記述 "\n" を 実際の改行コードに変換)
  jsonString = jsonString.replace(/\\\\n/g, '\\n');

  return ContentService.createTextOutput(jsonString)
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 手動実行用: クリップボードコピー用画面を表示
 * js/data.js に貼り付ける形式 (const CHARACTER_DATA = ...) で出力
 */
function exportSimpleDokkanData() {
  const result = getCharacterData();
  
  let jsonString = JSON.stringify(result, null, 4);
    
  // \n のエスケープ修正
  jsonString = jsonString.replace(/\\\\n/g, '\\n');

  const outputJs = "const CHARACTER_DATA = " + jsonString + ";";
  
  const htmlContent = `
    <style>
      textarea { width: 100%; height: 350px; font-family: monospace; font-size: 12px; }
      button { padding: 10px 20px; font-size: 16px; cursor: pointer; background: #4cd964; color: white; border: none; border-radius: 4px; }
    </style>
    <p>以下のテキストを全選択(Ctrl+A)してコピーし、<b>js/data.js</b> に貼り付けてください。</p>
    <textarea id="output">${outputJs}</textarea>
    <br><br>
    <button onclick="document.getElementById('output').select();document.execCommand('copy');this.innerText='コピーしました！'">クリップボードにコピー</button>
  `;

  const htmlOutput = HtmlService.createHtmlOutput(htmlContent)
    .setWidth(600)
    .setHeight(500);
  
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, '変換データの出力');
}

/**
 * データ取得・加工の共通ロジック
 */
function getCharacterData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  let charsSheet = ss.getSheetByName('Characters') || ss.getSheetByName('data - Characters');
  let formsSheet = ss.getSheetByName('Forms') || ss.getSheetByName('data - Forms');

  if (!charsSheet || !formsSheet) {
    throw new Error("エラー: 'Characters' または 'Forms' シートが見つかりません。");
  }

  const chars = getData(charsSheet);
  const forms = getData(formsSheet);

  return chars.map(c => {
    const charObj = {
      id: Number(c.id),
      title: c.title,
      name: c.name,
      yomi: c.yomi,
      rarity: c.rarity,
      cost: Number(c.cost),
      type: c.type,
      class: c.class,
      release: formatDate(c.release),
      eza: formatDate(c.eza),
      seza: formatDate(c.seza),
      
      source_type: c.source_type, // 'event' or 'gasha'
      
      // ドロップ情報 (確率は表示しないがデータとしては取得しておく / イベント名は必須)
      drop_event: c.drop_event, // 例: "物語イベント"

      categories: c.categories ? String(c.categories).split(',').map(s => s.trim()) : [],
      leaderSkill: c.leaderSkill,
      leaderSkill_eza: c.leaderSkill_eza,
      leaderSkill_seza: c.leaderSkill_seza,
      awakening: parseJsObject(c.awakening_json),
      
      farmCards: [],
      partners: [],
      
      forms: [],
      forms_eza: [],
      forms_seza: []
    };

    const myForms = forms.filter(f => String(f.char_id) === String(c.id));

    myForms.forEach(f => {
      const formObj = {
        label: f.label,
        name: f.name,
        id: f.form_id ? Number(f.form_id) : undefined,
        links: f.links ? String(f.links).split(',').map(s => s.trim()) : [],
        stats: parseJsObject(f.stats_json),
        superAttacks: parseJsObject(f.attacks_json),
        passive: parseJsObject(f.passive_json),
        active: parseJsObject(f.active_json),
        standby: parseJsObject(f.standby_json),
        field: parseJsObject(f.field_json),
        unitSuperAttack: parseJsObject(f.unitSuperAttack_json)
      };

      if (f.reversible !== undefined && f.reversible !== "") {
        formObj.reversible_icon = FIXED_REVERSIBLE_ICON_NAME;
        formObj.reversible_type = String(f.reversible);
      }

      const mode = f.mode ? f.mode.toLowerCase() : 'normal';
      if (mode === 'eza') {
        charObj.forms_eza.push(formObj);
      } else if (mode === 'seza') {
        charObj.forms_seza.push(formObj);
      } else {
        charObj.forms.push(formObj);
      }
    });

    if (charObj.forms_eza.length === 0) delete charObj.forms_eza;
    if (charObj.forms_seza.length === 0) delete charObj.forms_seza;

    return charObj;
  });
}

function getData(sheet) {
  const values = sheet.getDataRange().getValues();
  // 最低でも ヘッダー(1行目) + 説明(2行目) + データ(3行目以降) が必要
  if (values.length < 3) return [];
  
  const headers = values[0]; // 1行目がヘッダー（キー名）
  const data = [];
  
  for (let i = 2; i < values.length; i++) {
    const row = values[i];
    // IDがない行はスキップ
    if (!row[0]) continue;

    let obj = {};
    headers.forEach((h, colIndex) => {
      if (h) {
        let val = row[colIndex];
        if (h === 'release' || h === 'eza' || h === 'seza') {
             val = formatDate(val);
        }
        obj[h] = val;
      }
    });
    data.push(obj);
  }
  return data;
}

function formatDate(dateVal) {
    if (!dateVal) return undefined;
    if (dateVal instanceof Date) {
        return Utilities.formatDate(dateVal, "JST", "yyyy/MM/dd");
    }
    return String(dateVal);
}

function parseJsObject(str) {
  if (!str) return undefined;
  let s = String(str).trim();
  if (s === "") return undefined;
  
  // \nの特別処理: JSONパース前にセル入力の "\n" をエスケープされた改行コードに置換しておく
  // JSON.parseでエラーにならないようにするため。
  // 注意: parseJsObjectはオブジェクト形式の文字列 "{...}" をパースするものと想定
  
  try {
    return JSON.parse(s);
  } catch (e) {
    try {
      return new Function("return " + s)();
    } catch (e2) {
      Logger.log("Parse Error: " + s);
      return null;
    }
  }
}
