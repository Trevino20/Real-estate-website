// ============================================================
//  STEP 1: Paste this entire script in Apps Script editor
//  STEP 2: Run "intialSetup" function ONCE manually first
//  STEP 3: Deploy as Web App (Execute as Me, Anyone can access)
//  STEP 4: Copy Web App URL → paste in Hero.jsx & PopupModal.jsx
// ============================================================

var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

// ▶ RUN THIS FUNCTION ONCE MANUALLY before deploying
function intialSetup() {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost(e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc   = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)

  } catch(e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)

  } finally {
    lock.releaseLock()
  }
}
