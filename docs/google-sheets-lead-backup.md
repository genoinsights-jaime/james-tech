# Google Sheets Lead Backup

This project can save IA-30D form submissions to Google Sheets before sending the Resend email.

## 1. Create the Sheet

Create a Google Sheet with a tab named `Leads` and this header row:

```text
Fecha, Nombre, Email, WhatsApp, Empresa, Rol, Tamaño del equipo, Nivel de IA, Objetivo, Mensaje, Fuente, Referrer, User Agent
```

## 2. Create the Apps Script Web App

In the Sheet, go to `Extensions > Apps Script` and paste:

```js
const SECRET = "replace-with-a-long-random-secret";
const SPREADSHEET_ID = "replace-with-your-google-sheet-id";
const SHEET_NAME = "Leads";

const HEADERS = [
  "Fecha",
  "Nombre",
  "Email",
  "WhatsApp",
  "Empresa",
  "Rol",
  "Tamaño del equipo",
  "Nivel de IA",
  "Objetivo",
  "Mensaje",
  "Fuente",
  "Referrer",
  "User Agent",
];

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function getLeadSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function saveLead(body) {
  if (body.secret !== SECRET) {
    return jsonResponse({ ok: false, error: "unauthorized" });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const sheet = getLeadSheet();
    sheet.appendRow([
      body.submittedAt || new Date().toISOString(),
      body.name || "",
      body.email || "",
      body.whatsapp || "",
      body.company || "",
      body.role || "",
      body.teamSize || "",
      body.aiLevel || "",
      body.primaryGoal || "",
      body.message || "",
      body.source || "",
      body.referrer || "",
      body.userAgent || "",
    ]);
  } finally {
    lock.releaseLock();
  }

  return jsonResponse({ ok: true, saved: true });
}

function doGet(e) {
  try {
    if (!e.parameter.payload) {
      return jsonResponse({ ok: true, service: "ia30d-leads" });
    }

    return saveLead(JSON.parse(e.parameter.payload));
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}
```

Deploy it as a Web App:

- Execute as: `Me`
- Who has access: `Anyone`

## 3. Add Vercel Environment Variables

Add these to Production and Preview:

```text
GOOGLE_SHEETS_WEBHOOK_URL=<web-app-url>
GOOGLE_SHEETS_WEBHOOK_SECRET=<same-secret-from-apps-script>
```

Redeploy after adding the variables.
