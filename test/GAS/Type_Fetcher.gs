/**
 * Gemini API を使用して Characters シートのキャラクターのタイプ(属性)を自動取得するスクリプト
 * Web検索（Google Search）を活用して正確なタイプ情報を取得
 * 
 * 使用方法:
 * 1. GEMINI_API_KEY に有効なAPIキーを設定
 * 2. GASエディタで fetchTypesWithGemini() を実行
 * 3. オプション: fetchTypesByDateRange(startDate, endDate) で日付範囲を指定して実行
 */

// ========== 設定 ==========
// Yomi_Generator.gs の GEMINI_API_KEY を共有使用
// 両方のスクリプトを同じプロジェクトに配置してください

const TYPE_SHEET_NAME = 'Characters';
const TITLE_COLUMN = 2;    // B列 (title)
const NAME_COLUMN_TYPE = 3; // C列 (name)
const TYPE_COLUMN = 7;      // G列 (type)
const RELEASE_COLUMN = 9;   // I列 (release)
const TYPE_START_ROW = 3;   // データ開始行

// 有効なタイプ値
const VALID_TYPES = ['AGL', 'TEQ', 'INT', 'STR', 'PHY'];

// ========== メイン関数（全件処理） ==========
function fetchTypesWithGemini() {
  fetchTypesInternal(null, null);
}

// ========== 日付範囲指定で実行 ==========
/**
 * 日付範囲を指定してタイプを取得
 * @param {Date|string} startDate - 開始日（この日以降のキャラを処理）
 * @param {Date|string} endDate - 終了日（この日以前のキャラを処理）
 */
function fetchTypesByDateRange(startDate, endDate) {
  fetchTypesInternal(startDate, endDate);
}

// ========== ダイアログから日付範囲を指定して実行 ==========
function fetchTypesWithDateDialog() {
  const ui = SpreadsheetApp.getUi();
  
  const startResponse = ui.prompt(
    '開始日を入力',
    '開始日を入力してください（例: 2024/01/01）\n空欄の場合は制限なし',
    ui.ButtonSet.OK_CANCEL
  );
  
  if (startResponse.getSelectedButton() !== ui.Button.OK) {
    return;
  }
  
  const endResponse = ui.prompt(
    '終了日を入力',
    '終了日を入力してください（例: 2024/12/31）\n空欄の場合は制限なし',
    ui.ButtonSet.OK_CANCEL
  );
  
  if (endResponse.getSelectedButton() !== ui.Button.OK) {
    return;
  }
  
  const startDateStr = startResponse.getResponseText().trim();
  const endDateStr = endResponse.getResponseText().trim();
  
  const startDate = startDateStr ? new Date(startDateStr) : null;
  const endDate = endDateStr ? new Date(endDateStr) : null;
  
  // 日付のバリデーション
  if (startDateStr && isNaN(startDate.getTime())) {
    ui.alert('エラー', '開始日の形式が正しくありません。', ui.ButtonSet.OK);
    return;
  }
  if (endDateStr && isNaN(endDate.getTime())) {
    ui.alert('エラー', '終了日の形式が正しくありません。', ui.ButtonSet.OK);
    return;
  }
  
  fetchTypesInternal(startDate, endDate);
}

// ========== 内部処理関数 ==========
function fetchTypesInternal(startDate, endDate) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(TYPE_SHEET_NAME);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(`シート "${TYPE_SHEET_NAME}" が見つかりません。`);
    return;
  }

  const data = sheet.getDataRange().getValues();
  let processedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  let dateFilteredCount = 0;

  // 日付をDateオブジェクトに変換
  const startDateObj = startDate ? (startDate instanceof Date ? startDate : new Date(startDate)) : null;
  const endDateObj = endDate ? (endDate instanceof Date ? endDate : new Date(endDate)) : null;

  for (let i = TYPE_START_ROW - 1; i < data.length; i++) {
    const title = data[i][TITLE_COLUMN - 1];   // B列 (title)
    const name = data[i][NAME_COLUMN_TYPE - 1]; // C列 (name)
    const currentType = data[i][TYPE_COLUMN - 1]; // G列 (type)
    const releaseDate = data[i][RELEASE_COLUMN - 1]; // I列 (release)

    // 既にタイプが入力されている場合はスキップ
    if (currentType && String(currentType).trim().length > 0) {
      skippedCount++;
      continue;
    }

    // title と name が両方空の場合はスキップ
    if ((!title || String(title).trim().length === 0) && 
        (!name || String(name).trim().length === 0)) {
      skippedCount++;
      continue;
    }

    // 日付フィルタリング
    if (startDateObj || endDateObj) {
      let releaseDateObj = null;
      
      if (releaseDate) {
        if (releaseDate instanceof Date) {
          releaseDateObj = releaseDate;
        } else {
          releaseDateObj = new Date(releaseDate);
        }
      }

      // リリース日がない場合はスキップ（日付フィルター使用時）
      if (!releaseDateObj || isNaN(releaseDateObj.getTime())) {
        dateFilteredCount++;
        continue;
      }

      // 開始日より前の場合はスキップ
      if (startDateObj && releaseDateObj < startDateObj) {
        dateFilteredCount++;
        continue;
      }

      // 終了日より後の場合はスキップ
      if (endDateObj && releaseDateObj > endDateObj) {
        dateFilteredCount++;
        continue;
      }
    }

    try {
      const fetchedType = callGeminiForType(String(title), String(name));
      
      if (fetchedType && VALID_TYPES.includes(fetchedType)) {
        sheet.getRange(i + 1, TYPE_COLUMN).setValue(fetchedType);
        processedCount++;
        Logger.log(`Row ${i + 1}: "${title} ${name}" → "${fetchedType}"`);
      } else {
        errorCount++;
        Logger.log(`Row ${i + 1}: "${title} ${name}" → 取得失敗またはタイプ不明 (${fetchedType})`);
      }

      // API制限対策（1.5秒待機）
      Utilities.sleep(1500);

    } catch (e) {
      errorCount++;
      Logger.log(`Row ${i + 1}: エラー - ${e.message}`);
    }
  }

  let message = `処理完了\n・取得成功: ${processedCount}件\n・スキップ（既入力）: ${skippedCount}件\n・エラー: ${errorCount}件`;
  if (startDateObj || endDateObj) {
    message += `\n・日付フィルター除外: ${dateFilteredCount}件`;
  }
  
  SpreadsheetApp.getUi().alert(message);
  Logger.log(message);
}

// ========== Gemini API 呼び出し（Web検索付き） ==========
function callGeminiForType(title, name) {
  // 検索クエリを構築
  const searchQuery = `ドッカンバトル ${title} ${name} 属性`;
  
  const prompt = `あなたはドラゴンボールZドッカンバトルの専門家です。
以下のキャラクターの属性（タイプ）を特定してください。

【キャラクター情報】
二つ名: ${title}
名前: ${name}

【ルール】
1. Web検索結果を参考に、このキャラクターの属性を特定してください
2. 属性は以下の5種類のみです:
   - AGL (速属性/Agility)
   - TEQ (技属性/Technique)
   - INT (知属性/Intellect)
   - STR (力属性/Strength)
   - PHY (体属性/Physical)
3. 同名キャラクターでも二つ名によって属性が異なる場合があります
4. 確実に特定できない場合は「不明」と回答してください

【出力形式】
属性の略称のみを出力してください（AGL, TEQ, INT, STR, PHY のいずれか、または「不明」）
説明や補足は不要です。

【出力】`;

  // gemini-2.0-flash を使用（Google Search対応）
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  const payload = {
    contents: [{
      parts: [{
        text: prompt
      }]
    }],
    tools: [{
      google_search_retrieval: {
        dynamic_retrieval_config: {
          mode: "MODE_DYNAMIC",
          dynamic_threshold: 0.3
        }
      }
    }],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 100
    }
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const responseText = response.getContentText();
    const statusCode = response.getResponseCode();
    
    Logger.log(`[DEBUG] Status: ${statusCode}`);
    Logger.log(`[DEBUG] Response: ${responseText.substring(0, 500)}`);
    
    if (statusCode !== 200) {
      throw new Error(`API returned status ${statusCode}`);
    }
    
    const json = JSON.parse(responseText);

    if (json.error) {
      Logger.log(`API Error: ${JSON.stringify(json.error)}`);
      throw new Error(json.error.message);
    }

    // レスポンスからタイプを抽出
    const result = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    
    if (!result) {
      Logger.log(`[DEBUG] Empty result. Full JSON: ${JSON.stringify(json).substring(0, 500)}`);
      return '';
    }
    
    // 結果をクリーンアップ（余計な文字を除去）
    const cleanResult = result.split('\n')[0].trim().toUpperCase();
    
    // 有効なタイプかチェック
    if (VALID_TYPES.includes(cleanResult)) {
      return cleanResult;
    }
    
    // タイプ名が含まれているか確認
    for (const type of VALID_TYPES) {
      if (cleanResult.includes(type)) {
        return type;
      }
    }
    
    Logger.log(`[DEBUG] Invalid type result: ${cleanResult}`);
    return '';
    
  } catch (e) {
    Logger.log(`Exception for "${title} ${name}": ${e.message}`);
    throw e;
  }
}

// ========== テスト用関数 ==========
function testTypeFetch() {
  const testChars = [
    { title: '勝利をつかむ拳', name: '超サイヤ人孫悟空' },
    { title: '伝説の超サイヤ人', name: '超サイヤ人ブロリー' },
    { title: '驚異的な成長', name: '孫悟飯(少年期)' }
  ];

  testChars.forEach(char => {
    try {
      const type = callGeminiForType(char.title, char.name);
      Logger.log(`"${char.title} ${char.name}" → "${type}"`);
    } catch (e) {
      Logger.log(`"${char.title} ${char.name}" → エラー: ${e.message}`);
    }
    Utilities.sleep(1500);
  });
}

// ========== メニュー追加（onOpen拡張） ==========
// 注意: 既存の onOpen がある場合は、そこに追加してください
function addTypeFetcherMenu() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('タイプ取得')
    .addItem('空のtypeを自動取得', 'fetchTypesWithGemini')
    .addItem('日付範囲を指定して取得', 'fetchTypesWithDateDialog')
    .addItem('テスト実行', 'testTypeFetch')
    .addToUi();
}

// onOpenを拡張（既存のonOpenがある場合はマージしてください）
function onOpen_TypeFetcher() {
  addTypeFetcherMenu();
}
