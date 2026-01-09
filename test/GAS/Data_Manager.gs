function doPost(e) {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheetByName("Import");

        if (!sheet) {
            return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'Sheet "Import" not found' })).setMimeType(ContentService.MimeType.JSON);
        }

        var json = JSON.parse(e.postData.contents);

        if (json.type === "bulk") {
            var charRows = json.charRows;
            var formRows = json.formRows;

            // Charactersデータを追記
            if (charRows && charRows.length > 0) {
                sheet.getRange(sheet.getLastRow() + 1, 1, charRows.length, charRows[0].length).setValues(charRows);
            }

            // Formsデータを追記
            if (formRows && formRows.length > 0) {
                sheet.getRange(sheet.getLastRow() + 1, 1, formRows.length, formRows[0].length).setValues(formRows);
            }
        }

        return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() })).setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}