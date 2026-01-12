/**
 * Gemini API を使用して Characters シートの name から yomi を自動生成するスクリプト
 * 使用方法: GASエディタで addYomiWithGemini() を実行
 */

// ========== 設定 ==========
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE'; // ← ここにAPIキーを設定
const SHEET_NAME = 'Characters';
const NAME_COLUMN = 3;  // C列 (1始まり)
const YOMI_COLUMN = 4;  // D列 (1始まり)
const START_ROW = 3;    // データ開始行（1行目ヘッダー、2行目説明を想定）

// ========== メイン関数 ==========
function addYomiWithGemini() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(`シート "${SHEET_NAME}" が見つかりません。`);
    return;
  }

  const data = sheet.getDataRange().getValues();
  let processedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (let i = START_ROW - 1; i < data.length; i++) {
    const name = data[i][NAME_COLUMN - 1]; // C列 (name)
    const yomi = data[i][YOMI_COLUMN - 1]; // D列 (yomi)

    // D列が空セルじゃない場合はスキップ（1文字でも記入されていればスキップ）
    if (yomi && String(yomi).trim().length > 0) {
      skippedCount++;
      continue;
    }

    // nameが空の場合もスキップ
    if (!name || String(name).trim().length === 0) {
      skippedCount++;
      continue;
    }

    try {
      const generatedYomi = callGeminiForYomi(String(name));
      
      if (generatedYomi) {
        sheet.getRange(i + 1, YOMI_COLUMN).setValue(generatedYomi);
        processedCount++;
        Logger.log(`Row ${i + 1}: "${name}" → "${generatedYomi}"`);
      } else {
        errorCount++;
        Logger.log(`Row ${i + 1}: "${name}" → 生成失敗`);
      }

      // API制限対策（1秒待機）
      Utilities.sleep(1000);

    } catch (e) {
      errorCount++;
      Logger.log(`Row ${i + 1}: エラー - ${e.message}`);
    }
  }

  const message = `処理完了\n・生成: ${processedCount}件\n・スキップ: ${skippedCount}件\n・エラー: ${errorCount}件`;
  SpreadsheetApp.getUi().alert(message);
  Logger.log(message);
}

// ========== Gemini API 呼び出し ==========
function callGeminiForYomi(name) {
  const prompt = `あなたはドラゴンボールの専門家です。以下のキャラクター名の読み仮名を生成してください。

【ルール】
1. カタカナ → そのまま平仮名に変換（例：ゴクウ→ごくう）
2. 漢字 → 文脈から予測して平仮名に変換
   - 例外：「超」は「すーぱー」と読む
3. アルファベット → 読み方を平仮名で表記（例：GT→じーてぃー、Z→ぜっと）
4. 記号・括弧 → そのまま表記（例：(少年期)→(しょうねんき)）
5. 数字 → 読み方を平仮名で表記（例：17号→じゅうななごう）

【出力形式】
読み仮名のみを出力してください。説明や補足は不要です。

【入力】
${name}

【出力】`;

  // gemini-2.5-pro を使用
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${GEMINI_API_KEY}`;
  
  const payload = {
    contents: [{
      parts: [{
        text: prompt
      }]
    }],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 2048  // 思考トークン + 出力トークンを確保
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
    
    // デバッグ用: 全レスポンスをログに出力
    Logger.log(`[DEBUG] Status: ${statusCode}`);
    Logger.log(`[DEBUG] Response: ${responseText.substring(0, 500)}`);
    
    if (statusCode !== 200) {
      throw new Error(`API returned status ${statusCode}`);
    }
    
    const json = JSON.parse(responseText);

    // エラーチェック
    if (json.error) {
      Logger.log(`API Error: ${JSON.stringify(json.error)}`);
      throw new Error(json.error.message);
    }

    // レスポンスから読み仮名を抽出
    const result = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    
    if (!result) {
      Logger.log(`[DEBUG] Empty result. Full JSON: ${JSON.stringify(json).substring(0, 500)}`);
      return '';
    }
    
    // 余計な改行や空白を除去
    return result.split('\n')[0].trim();
    
  } catch (e) {
    Logger.log(`Exception for "${name}": ${e.message}`);
    throw e;
  }
}

// ========== テスト用関数 ==========
function testYomiGeneration() {
  const testNames = [
    '孫悟空',
    '超サイヤ人ゴッド孫悟空',
    'ベジータ(少年期)',
    '人造人間17号',
    'GTベジータ',
    '亀仙人'
  ];

  testNames.forEach(name => {
    try {
      const yomi = callGeminiForYomi(name);
      Logger.log(`"${name}" → "${yomi}"`);
    } catch (e) {
      Logger.log(`"${name}" → エラー: ${e.message}`);
    }
    Utilities.sleep(1000);
  });
}

// ========== メニュー追加（オプション） ==========
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Gemini自動入力')
    .addSubMenu(ui.createMenu('読み仮名')
      .addItem('空のyomiを自動生成', 'addYomiWithGemini')
      .addItem('テスト実行', 'testYomiGeneration'))
    .addSubMenu(ui.createMenu('タイプ取得')
      .addItem('空のtypeを自動取得', 'fetchTypesWithGemini')
      .addItem('日付範囲を指定して取得', 'fetchTypesWithDateDialog')
      .addItem('テスト実行', 'testTypeFetch'))
    .addToUi();
}
