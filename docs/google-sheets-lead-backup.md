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

function doPost(e) {
  const body = JSON.parse(e.postData.contents || "{}");

  if (body.secret !== SECRET) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "unauthorized" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");

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

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
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
