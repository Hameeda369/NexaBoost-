export interface GoogleDriveFile {
  id: string;
  name: string;
  modifiedTime?: string;
  webViewLink?: string;
  owners?: { displayName: string; emailAddress: string }[];
}

export interface SheetTabInfo {
  sheetId: number;
  title: string;
  index: number;
  rowCount?: number;
  columnCount?: number;
}

export interface SpreadsheetMetadata {
  spreadsheetId: string;
  properties: {
    title: string;
    locale?: string;
  };
  sheets: {
    properties: SheetTabInfo;
  }[];
  spreadsheetUrl?: string;
}

export interface SheetValuesResult {
  range: string;
  majorDimension: string;
  values?: string[][];
}

/**
 * Lists Google Spreadsheets from user's Google Drive.
 */
export async function listSpreadsheets(accessToken: string): Promise<GoogleDriveFile[]> {
  const query = "mimeType='application/vnd.google-apps.spreadsheet' and trashed=false";
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
    query
  )}&fields=files(id,name,modifiedTime,webViewLink,owners)&orderBy=modifiedTime desc&pageSize=30`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to fetch spreadsheets: ${res.statusText}`);
  }

  const data = await res.json();
  return data.files || [];
}

/**
 * Creates a brand new Google Spreadsheet.
 */
export async function createSpreadsheet(
  accessToken: string,
  title: string,
  initialSheetTitle: string = 'Sheet1'
): Promise<SpreadsheetMetadata> {
  const url = 'https://sheets.googleapis.com/v4/spreadsheets';

  const body = {
    properties: {
      title,
    },
    sheets: [
      {
        properties: {
          title: initialSheetTitle,
        },
      },
    ],
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to create spreadsheet: ${res.statusText}`);
  }

  return await res.json();
}

/**
 * Gets metadata for a spreadsheet (list of sheet tabs).
 */
export async function getSpreadsheetDetails(
  accessToken: string,
  spreadsheetId: string
): Promise<SpreadsheetMetadata> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=false`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to fetch spreadsheet details: ${res.statusText}`);
  }

  return await res.json();
}

/**
 * Reads cell values from a specific sheet range (e.g. 'Sheet1!A1:Z100').
 */
export async function getSheetValues(
  accessToken: string,
  spreadsheetId: string,
  range: string
): Promise<SheetValuesResult> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
    range
  )}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to read sheet values: ${res.statusText}`);
  }

  return await res.json();
}

/**
 * Appends row(s) to a sheet.
 */
export async function appendSheetValues(
  accessToken: string,
  spreadsheetId: string,
  range: string,
  values: any[][]
): Promise<any> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
    range
  )}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      range,
      majorDimension: 'ROWS',
      values,
    }),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to append values: ${res.statusText}`);
  }

  return await res.json();
}

/**
 * Updates cell values at a specific range.
 */
export async function updateSheetValues(
  accessToken: string,
  spreadsheetId: string,
  range: string,
  values: any[][]
): Promise<any> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
    range
  )}?valueInputOption=USER_ENTERED`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      range,
      majorDimension: 'ROWS',
      values,
    }),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to update values: ${res.statusText}`);
  }

  return await res.json();
}

/**
 * Clears values in a range.
 */
export async function clearSheetValues(
  accessToken: string,
  spreadsheetId: string,
  range: string
): Promise<any> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
    range
  )}:clear`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to clear values: ${res.statusText}`);
  }

  return await res.json();
}

/**
 * Adds a new tab/sheet to the spreadsheet.
 */
export async function addNewSheetTab(
  accessToken: string,
  spreadsheetId: string,
  sheetTitle: string
): Promise<any> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [
        {
          addSheet: {
            properties: {
              title: sheetTitle,
            },
          },
        },
      ],
    }),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to add sheet tab: ${res.statusText}`);
  }

  return await res.json();
}

/**
 * Ensures a tab exists with standard header columns. If tab is missing, creates it and writes headers.
 */
export async function ensureSheetWithHeaders(
  accessToken: string,
  spreadsheetId: string,
  sheetTitle: string,
  headers: string[]
): Promise<void> {
  const details = await getSpreadsheetDetails(accessToken, spreadsheetId);
  const existingSheet = details.sheets.find(
    (s) => s.properties.title.toLowerCase() === sheetTitle.toLowerCase()
  );

  if (!existingSheet) {
    await addNewSheetTab(accessToken, spreadsheetId, sheetTitle);
    await updateSheetValues(accessToken, spreadsheetId, `'${sheetTitle}'!A1`, [headers]);
  } else {
    // Check if headers exist
    try {
      const existingData = await getSheetValues(accessToken, spreadsheetId, `'${sheetTitle}'!A1:Z1`);
      if (!existingData.values || existingData.values.length === 0) {
        await updateSheetValues(accessToken, spreadsheetId, `'${sheetTitle}'!A1`, [headers]);
      }
    } catch {
      await updateSheetValues(accessToken, spreadsheetId, `'${sheetTitle}'!A1`, [headers]);
    }
  }
}

/**
 * Sync Agent Sandbox Output to Google Sheets
 */
export async function syncAgentOutputToSheet(
  accessToken: string,
  spreadsheetId: string,
  data: {
    agentName: string;
    agentId?: string;
    prompt: string;
    output: string;
    language: string;
    businessContext?: string;
  }
): Promise<void> {
  const sheetTitle = 'NexaBoost AI Outputs';
  const headers = [
    'Timestamp',
    'Agent Name',
    'Language Mode',
    'Business Context',
    'Prompt / Task',
    'Generated Deliverable / Output',
    'Status',
  ];

  await ensureSheetWithHeaders(accessToken, spreadsheetId, sheetTitle, headers);

  const row = [
    new Date().toLocaleString(),
    data.agentName,
    data.language,
    data.businessContext || 'Default',
    data.prompt,
    data.output,
    'Executed Successfully',
  ];

  await appendSheetValues(accessToken, spreadsheetId, `'${sheetTitle}'!A:G`, [row]);
}

/**
 * Sync Free AI Business Audit to Google Sheets
 */
export async function syncAuditToSheet(
  accessToken: string,
  spreadsheetId: string,
  data: {
    businessName: string;
    industry: string;
    monthlyRevenue?: string;
    teamSize?: string;
    hoursSaved: number;
    roi: number;
    leadIncreasePercent?: number;
    recommendedAgents: string[];
    summary: string;
    customAdvice?: string;
  }
): Promise<void> {
  const sheetTitle = 'AI Business Audits';
  const headers = [
    'Timestamp',
    'Business Name',
    'Industry',
    'Monthly Revenue',
    'Team Size',
    'Est. Monthly Hours Saved',
    'Projected ROI Multiplier',
    'Projected Lead Growth %',
    'Recommended AI Agents',
    'Executive Summary',
    'Custom Strategy Advice',
  ];

  await ensureSheetWithHeaders(accessToken, spreadsheetId, sheetTitle, headers);

  const row = [
    new Date().toLocaleString(),
    data.businessName,
    data.industry,
    data.monthlyRevenue || 'N/A',
    data.teamSize || 'N/A',
    `${data.hoursSaved} hrs/mo`,
    `${data.roi}x ROI`,
    `${data.leadIncreasePercent || 200}%`,
    data.recommendedAgents.join(', '),
    data.summary,
    data.customAdvice || '',
  ];

  await appendSheetValues(accessToken, spreadsheetId, `'${sheetTitle}'!A:K`, [row]);
}

/**
 * Sync Lead / Inbound Contact to Google Sheets
 */
export async function syncLeadToSheet(
  accessToken: string,
  spreadsheetId: string,
  data: {
    name: string;
    businessName: string;
    phone: string;
    email: string;
    selectedPlan: string;
    notes?: string;
  }
): Promise<void> {
  const sheetTitle = 'Leads & Inquiries';
  const headers = [
    'Timestamp',
    'Client Name',
    'Business / Brand',
    'WhatsApp / Phone',
    'Email Address',
    'Selected AI Plan',
    'Notes / Details',
    'Lead Status',
  ];

  await ensureSheetWithHeaders(accessToken, spreadsheetId, sheetTitle, headers);

  const row = [
    new Date().toLocaleString(),
    data.name,
    data.businessName,
    data.phone,
    data.email,
    data.selectedPlan,
    data.notes || '',
    'New Inbound Lead',
  ];

  await appendSheetValues(accessToken, spreadsheetId, `'${sheetTitle}'!A:H`, [row]);
}
