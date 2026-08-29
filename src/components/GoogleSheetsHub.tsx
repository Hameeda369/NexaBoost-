import React, { useState, useEffect } from 'react';
import {
  FileSpreadsheet,
  Plus,
  RefreshCw,
  ExternalLink,
  Table,
  Sparkles,
  Search,
  Check,
  Copy,
  Trash2,
  Send,
  AlertCircle,
  LogIn,
  LogOut,
  FolderOpen,
  ArrowRight,
  Database,
  Layers,
  ChevronRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { User } from 'firebase/auth';
import {
  initAuth,
  googleSignIn,
  logoutGoogle,
  getAccessToken
} from '../lib/firebaseAuth';
import {
  listSpreadsheets,
  createSpreadsheet,
  getSpreadsheetDetails,
  getSheetValues,
  appendSheetValues,
  clearSheetValues,
  addNewSheetTab,
  GoogleDriveFile,
  SpreadsheetMetadata,
  SheetValuesResult,
  ensureSheetWithHeaders
} from '../lib/googleSheetsService';
import { DestructiveConfirmDialog } from './DestructiveConfirmDialog';
import { LanguageMode } from '../types';

interface GoogleSheetsHubProps {
  isOpen: boolean;
  onClose: () => void;
  language: LanguageMode;
  initialSpreadsheetId?: string;
}

export const GoogleSheetsHub: React.FC<GoogleSheetsHubProps> = ({
  isOpen,
  onClose,
  language,
  initialSpreadsheetId,
}) => {
  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Active view tab inside modal
  const [activeTab, setActiveTab] = useState<'browse' | 'sheet_view' | 'ai_analyze' | 'quick_sync'>('browse');

  // Spreadsheets list
  const [spreadsheets, setSpreadsheets] = useState<GoogleDriveFile[]>([]);
  const [isLoadingSpreadsheets, setIsLoadingSpreadsheets] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Selected spreadsheet & sheet data
  const [selectedSpreadsheet, setSelectedSpreadsheet] = useState<GoogleDriveFile | null>(null);
  const [spreadsheetMetadata, setSpreadsheetMetadata] = useState<SpreadsheetMetadata | null>(null);
  const [activeSheetTab, setActiveSheetTab] = useState<string>('');
  const [sheetData, setSheetData] = useState<SheetValuesResult | null>(null);
  const [isLoadingSheetData, setIsLoadingSheetData] = useState<boolean>(false);

  // New spreadsheet creation
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [newSheetTitle, setNewSheetTitle] = useState<string>('NexaBoost AI Operations & Leads');
  const [newSheetTemplate, setNewSheetTemplate] = useState<string>('nexaboost_full');

  // New tab creation
  const [newTabName, setNewTabName] = useState<string>('');
  const [isAddingTab, setIsAddingTab] = useState<boolean>(false);

  // Adding a single row
  const [isAddingRow, setIsAddingRow] = useState<boolean>(false);
  const [newRowValues, setNewRowValues] = useState<string[]>([]);

  // AI Sheet Analysis state
  const [aiTaskType, setAiTaskType] = useState<'summarize' | 'lead_score' | 'outreach_draft' | 'insights' | 'custom'>('summarize');
  const [customAiPrompt, setCustomAiPrompt] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState<string>('');
  const [copiedAnalysis, setCopiedAnalysis] = useState<boolean>(false);

  // Destructive Confirmation Dialog state
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    targetDetails?: string;
    action: () => Promise<void>;
  }>({
    isOpen: false,
    title: '',
    description: '',
    action: async () => {},
  });
  const [isExecutingDestructive, setIsExecutingDestructive] = useState<boolean>(false);

  // Success message toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Initialize Firebase Auth listener
  useEffect(() => {
    setIsAuthLoading(true);
    const unsubscribe = initAuth(
      (authedUser, accessToken) => {
        setUser(authedUser);
        setToken(accessToken);
        setIsAuthLoading(false);
      },
      () => {
        setUser(null);
        setToken(null);
        setIsAuthLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Fetch spreadsheets list once authenticated
  useEffect(() => {
    if (token) {
      loadSpreadsheets(token);
    }
  }, [token]);

  const loadSpreadsheets = async (authToken: string) => {
    setIsLoadingSpreadsheets(true);
    try {
      const files = await listSpreadsheets(authToken);
      setSpreadsheets(files);

      // If initialSpreadsheetId is provided or user has files, auto-select
      if (initialSpreadsheetId) {
        const found = files.find((f) => f.id === initialSpreadsheetId);
        if (found) {
          handleSelectSpreadsheet(found, authToken);
        }
      }
    } catch (err: any) {
      console.error('Failed to load spreadsheets:', err);
    } finally {
      setIsLoadingSpreadsheets(false);
    }
  };

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setAuthError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        showToast('Signed in to Google Workspace successfully!');
        loadSpreadsheets(result.accessToken);
      }
    } catch (err: any) {
      console.error('Sign-in failed:', err);
      setAuthError(err?.message || 'Authentication was cancelled or failed.');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await logoutGoogle();
    setUser(null);
    setToken(null);
    setSelectedSpreadsheet(null);
    setSpreadsheetMetadata(null);
    setSheetData(null);
    showToast('Signed out of Google account.');
  };

  const handleSelectSpreadsheet = async (file: GoogleDriveFile, authToken?: string) => {
    const activeAccessToken = authToken || token;
    if (!activeAccessToken) return;

    setSelectedSpreadsheet(file);
    setIsLoadingSheetData(true);
    try {
      const meta = await getSpreadsheetDetails(activeAccessToken, file.id);
      setSpreadsheetMetadata(meta);
      const firstTab = meta.sheets[0]?.properties?.title || 'Sheet1';
      setActiveSheetTab(firstTab);
      await loadSheetData(activeAccessToken, file.id, firstTab);
      setActiveTab('sheet_view');
    } catch (err: any) {
      console.error('Failed to select spreadsheet:', err);
      showToast('Error loading spreadsheet details.');
    } finally {
      setIsLoadingSheetData(false);
    }
  };

  const loadSheetData = async (authToken: string, spreadsheetId: string, tabName: string) => {
    setIsLoadingSheetData(true);
    try {
      const data = await getSheetValues(authToken, spreadsheetId, `'${tabName}'!A1:Z100`);
      setSheetData(data);
    } catch (err) {
      console.error('Failed to load sheet data:', err);
    } finally {
      setIsLoadingSheetData(false);
    }
  };

  const handleSwitchTab = async (tabName: string) => {
    if (!token || !selectedSpreadsheet) return;
    setActiveSheetTab(tabName);
    await loadSheetData(token, selectedSpreadsheet.id, tabName);
  };

  const handleCreateSpreadsheet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !newSheetTitle.trim()) return;

    setIsCreatingNew(true);
    try {
      const created = await createSpreadsheet(token, newSheetTitle.trim(), 'Sheet1');
      showToast(`Created spreadsheet "${newSheetTitle}"!`);

      // Initialize default templates if selected
      if (newSheetTemplate === 'nexaboost_full') {
        await ensureSheetWithHeaders(token, created.spreadsheetId, 'NexaBoost AI Outputs', [
          'Timestamp',
          'Agent Name',
          'Language Mode',
          'Business Context',
          'Prompt / Task',
          'Generated Deliverable / Output',
          'Status',
        ]);
        await ensureSheetWithHeaders(token, created.spreadsheetId, 'AI Business Audits', [
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
        ]);
        await ensureSheetWithHeaders(token, created.spreadsheetId, 'Leads & Inquiries', [
          'Timestamp',
          'Client Name',
          'Business / Brand',
          'WhatsApp / Phone',
          'Email Address',
          'Selected AI Plan',
          'Notes / Details',
          'Lead Status',
        ]);
      }

      await loadSpreadsheets(token);
      handleSelectSpreadsheet(
        {
          id: created.spreadsheetId,
          name: created.properties.title,
          webViewLink: created.spreadsheetUrl,
        },
        token
      );
      setNewSheetTitle('NexaBoost AI Operations & Leads');
    } catch (err: any) {
      console.error('Error creating spreadsheet:', err);
      showToast(err?.message || 'Failed to create spreadsheet.');
    } finally {
      setIsCreatingNew(false);
    }
  };

  const handleAddNewTab = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !selectedSpreadsheet || !newTabName.trim()) return;

    setIsAddingTab(true);
    try {
      await addNewSheetTab(token, selectedSpreadsheet.id, newTabName.trim());
      const updatedMeta = await getSpreadsheetDetails(token, selectedSpreadsheet.id);
      setSpreadsheetMetadata(updatedMeta);
      setActiveSheetTab(newTabName.trim());
      await loadSheetData(token, selectedSpreadsheet.id, newTabName.trim());
      setNewTabName('');
      showToast(`Added tab "${newTabName.trim()}"!`);
    } catch (err: any) {
      console.error('Failed to add tab:', err);
      showToast('Could not add tab.');
    } finally {
      setIsAddingTab(false);
    }
  };

  const handleAppendRow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !selectedSpreadsheet || !activeSheetTab) return;

    setIsAddingRow(true);
    try {
      const valuesToInsert = [newRowValues];
      await appendSheetValues(
        token,
        selectedSpreadsheet.id,
        `'${activeSheetTab}'!A:Z`,
        valuesToInsert
      );
      showToast('New row appended to Google Sheet!');
      setNewRowValues([]);
      await loadSheetData(token, selectedSpreadsheet.id, activeSheetTab);
    } catch (err: any) {
      console.error('Failed to append row:', err);
      showToast('Error appending row to sheet.');
    } finally {
      setIsAddingRow(false);
    }
  };

  // Trigger Destructive Dialog for Clearing Sheet values
  const requestClearSheet = () => {
    if (!selectedSpreadsheet || !activeSheetTab) return;

    setConfirmDialog({
      isOpen: true,
      title: `Clear All Data from "${activeSheetTab}"?`,
      description: `You are about to clear all cell contents in sheet tab "${activeSheetTab}" of spreadsheet "${selectedSpreadsheet.name}". This action modifies your live Google Sheet in Google Drive.`,
      targetDetails: `Spreadsheet: ${selectedSpreadsheet.name} (ID: ${selectedSpreadsheet.id}) | Tab: ${activeSheetTab}`,
      action: async () => {
        if (!token) return;
        setIsExecutingDestructive(true);
        try {
          await clearSheetValues(token, selectedSpreadsheet.id, `'${activeSheetTab}'!A1:Z500`);
          showToast(`Cleared values from "${activeSheetTab}".`);
          await loadSheetData(token, selectedSpreadsheet.id, activeSheetTab);
        } catch (err: any) {
          console.error('Failed to clear sheet:', err);
          showToast('Failed to clear sheet values.');
        } finally {
          setIsExecutingDestructive(false);
          setConfirmDialog((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  // Run AI Intelligence Analysis on Sheet Data
  const handleAnalyzeSheet = async () => {
    if (!sheetData || !sheetData.values || sheetData.values.length === 0) {
      showToast('No sheet data found to analyze.');
      return;
    }

    setIsAnalyzing(true);
    try {
      const headers = sheetData.values[0] || [];
      const rows = sheetData.values.slice(1);

      const res = await fetch('/api/sheets/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          spreadsheetTitle: selectedSpreadsheet?.name || 'Spreadsheet',
          sheetTab: activeSheetTab,
          headers,
          rows,
          taskType: aiTaskType,
          customPrompt: customAiPrompt,
          language,
        }),
      });

      const data = await res.json();
      if (data.analysis) {
        setAiAnalysisResult(data.analysis);
      } else {
        setAiAnalysisResult('Analysis completed.');
      }
    } catch (err: any) {
      console.error('AI Analysis failed:', err);
      setAiAnalysisResult('Failed to complete AI analysis on this sheet.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!isOpen) return null;

  const headers = sheetData?.values?.[0] || [];
  const rows = sheetData?.values?.slice(1) || [];

  const filteredSpreadsheets = spreadsheets.filter((s) =>
    s.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div
      id="google-sheets-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        id="google-sheets-modal-container"
        className="w-full max-w-6xl h-[92vh] max-h-[850px] bg-[#0E0E14] border border-emerald-500/25 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white relative"
      >
        {/* Toast Alert */}
        {toastMessage && (
          <div
            id="sheets-toast-notification"
            className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-emerald-500 text-black font-semibold text-xs rounded-full shadow-lg flex items-center gap-2 animate-bounce"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#12121A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  Google Sheets Workspace
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Live Cloud Sync
                  </span>
                </h2>
              </div>
              <p className="text-xs text-neutral-400">
                Direct two-way connection for 14 AI Agents, Audits, Lead generation, and Data Intelligence.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Account Info / Sign In */}
            {user ? (
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'Google User'}
                    className="w-6 h-6 rounded-full border border-white/20"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-[10px]">
                    {user.displayName?.[0] || 'U'}
                  </div>
                )}
                <div className="hidden sm:flex flex-col text-left">
                  <span className="font-semibold text-white truncate max-w-[120px]">
                    {user.displayName || user.email}
                  </span>
                  <span className="text-[10px] text-emerald-400">Connected</span>
                </div>
                <button
                  id="sheets-sign-out-btn"
                  onClick={handleSignOut}
                  title="Disconnect Google Account"
                  className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : null}

            {/* Close Button */}
            <button
              id="google-sheets-modal-close"
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Guard Screen */}
        {!user ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-md w-full bg-[#151520] border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 mx-auto flex items-center justify-center text-emerald-400">
                <FileSpreadsheet className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white font-serif">
                  Connect Google Sheets
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Sign in with your Google Account to view, edit, and sync spreadsheets with NexaBoost 14 Multilingual AI Agents.
                </p>
              </div>

              <div className="bg-black/30 border border-white/5 rounded-xl p-3 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-Click export AI Agent sandbox deliverables to sheets</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time lead & AI Audit synchronization</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI data analyst & predictive lead scoring on sheet rows</span>
                </div>
              </div>

              {authError && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              {/* Official Google Material Sign-In Button */}
              <button
                id="sheets-google-signin-btn"
                type="button"
                onClick={handleSignIn}
                disabled={isSigningIn}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold text-sm rounded-xl shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                <span>{isSigningIn ? 'Connecting to Google...' : 'Sign in with Google'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Main Authenticated Layout */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-[#111118] border-r border-white/10 flex flex-col shrink-0">
              
              {/* Navigation Tabs */}
              <div className="p-3 space-y-1">
                <button
                  id="tab-browse-sheets"
                  onClick={() => setActiveTab('browse')}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === 'browse'
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>My Spreadsheets</span>
                  <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 font-mono">
                    {spreadsheets.length}
                  </span>
                </button>

                <button
                  id="tab-view-sheet"
                  onClick={() => {
                    if (selectedSpreadsheet) setActiveTab('sheet_view');
                    else showToast('Please select a spreadsheet first.');
                  }}
                  disabled={!selectedSpreadsheet}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-40 ${
                    activeTab === 'sheet_view'
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Table className="w-4 h-4" />
                  <span>Data Grid & Rows</span>
                  {selectedSpreadsheet && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400" />
                  )}
                </button>

                <button
                  id="tab-ai-analyze"
                  onClick={() => {
                    if (selectedSpreadsheet) setActiveTab('ai_analyze');
                    else showToast('Please select a spreadsheet first.');
                  }}
                  disabled={!selectedSpreadsheet}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-40 ${
                    activeTab === 'ai_analyze'
                      ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>AI Sheet Analyst</span>
                </button>

                <button
                  id="tab-quick-sync"
                  onClick={() => {
                    if (selectedSpreadsheet) setActiveTab('quick_sync');
                    else showToast('Please select a spreadsheet first.');
                  }}
                  disabled={!selectedSpreadsheet}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-40 ${
                    activeTab === 'quick_sync'
                      ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Hub Sync Presets</span>
                </button>
              </div>

              {/* Active Selection summary */}
              {selectedSpreadsheet && (
                <div className="mx-3 mt-auto mb-3 p-3 bg-black/40 border border-white/10 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                      Active Spreadsheet
                    </span>
                    {selectedSpreadsheet.webViewLink && (
                      <a
                        href={selectedSpreadsheet.webViewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-emerald-400 p-0.5 rounded"
                        title="Open in Google Sheets"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-white truncate" title={selectedSpreadsheet.name}>
                    {selectedSpreadsheet.name}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-neutral-400">
                    <span>Tab: {activeSheetTab || 'Sheet1'}</span>
                    <span>{rows.length} rows</span>
                  </div>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col bg-[#0A0A10] overflow-hidden">
              
              {/* TAB 1: BROWSE & CREATE SPREADSHEETS */}
              {activeTab === 'browse' && (
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  
                  {/* Top Bar: Create New + Search */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search Google Spreadsheets..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <button
                      id="refresh-sheets-list-btn"
                      onClick={() => token && loadSpreadsheets(token)}
                      disabled={isLoadingSpreadsheets}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 rounded-xl text-xs font-semibold transition-all"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isLoadingSpreadsheets ? 'animate-spin' : ''}`} />
                      <span>Refresh</span>
                    </button>
                  </div>

                  {/* Create New Preset Spreadsheet Box */}
                  <div className="bg-[#12121B] border border-emerald-500/20 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-3">
                      <Plus className="w-4 h-4 text-emerald-400" />
                      <h3 className="text-sm font-bold text-white">Create New Google Spreadsheet</h3>
                    </div>

                    <form onSubmit={handleCreateSpreadsheet} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-6">
                        <input
                          type="text"
                          required
                          placeholder="Spreadsheet Title..."
                          value={newSheetTitle}
                          onChange={(e) => setNewSheetTitle(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-black/40 border border-white/15 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div className="sm:col-span-4">
                        <select
                          value={newSheetTemplate}
                          onChange={(e) => setNewSheetTemplate(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-[#171722] border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                        >
                          <option value="nexaboost_full">Full 14 Agents + Audits + Leads Template</option>
                          <option value="blank">Blank Spreadsheet</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          id="submit-create-sheet-btn"
                          type="submit"
                          disabled={isCreatingNew}
                          className="w-full h-full py-2.5 px-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5 disabled:opacity-50"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{isCreatingNew ? 'Creating...' : 'Create'}</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* List of User's Spreadsheets */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Available Google Spreadsheets ({filteredSpreadsheets.length})
                      </h3>
                    </div>

                    {isLoadingSpreadsheets ? (
                      <div className="py-12 text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                        <span>Loading spreadsheets from Google Drive...</span>
                      </div>
                    ) : filteredSpreadsheets.length === 0 ? (
                      <div className="py-10 text-center bg-[#121218] border border-white/5 rounded-2xl p-6 text-xs text-neutral-400 space-y-3">
                        <FileSpreadsheet className="w-8 h-8 mx-auto text-neutral-600" />
                        <p>No spreadsheets found matching your search. Create one above to get started!</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {filteredSpreadsheets.map((sheet) => {
                          const isSelected = selectedSpreadsheet?.id === sheet.id;
                          return (
                            <div
                              key={sheet.id}
                              id={`spreadsheet-card-${sheet.id}`}
                              onClick={() => handleSelectSpreadsheet(sheet)}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                                isSelected
                                  ? 'bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                                  : 'bg-[#121218] border-white/10 hover:border-white/20 hover:bg-[#161620]'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                                  <FileSpreadsheet className="w-4 h-4" />
                                </div>

                                {sheet.webViewLink && (
                                  <a
                                    href={sheet.webViewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-neutral-500 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                                    title="Open in Google Sheets"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                )}
                              </div>

                              <div>
                                <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">
                                  {sheet.name}
                                </h4>
                                <p className="text-[10px] text-neutral-400 mt-1">
                                  Modified:{' '}
                                  {sheet.modifiedTime
                                    ? new Date(sheet.modifiedTime).toLocaleDateString()
                                    : 'Recently'}
                                </p>
                              </div>

                              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] text-neutral-400">
                                  {isSelected ? 'Currently Selected' : 'Click to Load'}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: LIVE SHEET DATA VIEWER & EDITOR */}
              {activeTab === 'sheet_view' && (
                <div className="flex-1 flex flex-col overflow-hidden">
                  
                  {/* Top Bar for Selected Sheet */}
                  <div className="px-6 py-3 border-b border-white/10 bg-[#12121A] flex flex-wrap items-center justify-between gap-3">
                    {/* Tabs / Sub-sheets */}
                    <div className="flex items-center gap-1.5 overflow-x-auto max-w-xl pb-1">
                      {spreadsheetMetadata?.sheets.map((s) => {
                        const tabTitle = s.properties.title;
                        const isCurrentTab = activeSheetTab === tabTitle;
                        return (
                          <button
                            key={s.properties.sheetId}
                            id={`sheet-tab-btn-${s.properties.sheetId}`}
                            onClick={() => handleSwitchTab(tabTitle)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                              isCurrentTab
                                ? 'bg-emerald-500 text-black shadow-sm font-bold'
                                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            {tabTitle}
                          </button>
                        );
                      })}

                      {/* Add new tab button */}
                      <form onSubmit={handleAddNewTab} className="flex items-center gap-1">
                        <input
                          type="text"
                          placeholder="+ Add tab..."
                          value={newTabName}
                          onChange={(e) => setNewTabName(e.target.value)}
                          className="w-24 px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] text-white focus:outline-none focus:border-emerald-500"
                        />
                        {newTabName.trim() && (
                          <button
                            type="submit"
                            disabled={isAddingTab}
                            className="p-1 bg-emerald-500 text-black rounded-lg text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        )}
                      </form>
                    </div>

                    {/* Actions: Refresh, Clear, Open External */}
                    <div className="flex items-center gap-2">
                      <button
                        id="refresh-sheet-data-btn"
                        onClick={() =>
                          token &&
                          selectedSpreadsheet &&
                          loadSheetData(token, selectedSpreadsheet.id, activeSheetTab)
                        }
                        disabled={isLoadingSheetData}
                        className="p-1.5 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg text-xs flex items-center gap-1"
                        title="Reload Data from Google"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isLoadingSheetData ? 'animate-spin' : ''}`} />
                        <span className="hidden sm:inline">Refresh</span>
                      </button>

                      <button
                        id="clear-sheet-data-btn"
                        onClick={requestClearSheet}
                        className="p-1.5 text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg text-xs flex items-center gap-1"
                        title="Clear Sheet Cells (Requires confirmation)"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Clear Data</span>
                      </button>

                      {selectedSpreadsheet?.webViewLink && (
                        <a
                          href={selectedSpreadsheet.webViewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs flex items-center gap-1"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Google Sheets</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Data Table Grid */}
                  <div className="flex-1 overflow-auto p-4">
                    {isLoadingSheetData ? (
                      <div className="h-full flex items-center justify-center text-xs text-neutral-400 gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                        <span>Fetching real-time rows from Google Sheets...</span>
                      </div>
                    ) : headers.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                        <Table className="w-10 h-10 text-neutral-600" />
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white">This Sheet Tab is Empty</h4>
                          <p className="text-xs text-neutral-400 max-w-sm">
                            Add a row or export AI Agent outputs directly into "{activeSheetTab}".
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="border border-white/10 rounded-2xl overflow-hidden shadow-xl bg-[#111117]">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead className="bg-[#181824] text-neutral-300 font-semibold border-b border-white/10 sticky top-0 z-10">
                            <tr>
                              <th className="py-2.5 px-3 text-neutral-500 w-12 text-center border-r border-white/10 font-mono">
                                #
                              </th>
                              {headers.map((h, i) => (
                                <th
                                  key={i}
                                  className="py-2.5 px-4 font-semibold text-emerald-300 border-r border-white/5 whitespace-nowrap"
                                >
                                  {h || `Col ${i + 1}`}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {rows.length === 0 ? (
                              <tr>
                                <td
                                  colSpan={headers.length + 1}
                                  className="py-8 text-center text-neutral-500 text-xs italic"
                                >
                                  Headers are set, but no rows added yet.
                                </td>
                              </tr>
                            ) : (
                              rows.map((row, rowIdx) => (
                                <tr
                                  key={rowIdx}
                                  className="hover:bg-white/5 transition-colors group"
                                >
                                  <td className="py-2 px-3 text-center text-neutral-500 border-r border-white/10 font-mono text-[11px]">
                                    {rowIdx + 1}
                                  </td>
                                  {headers.map((_, colIdx) => (
                                    <td
                                      key={colIdx}
                                      className="py-2 px-4 text-neutral-200 border-r border-white/5 max-w-md truncate"
                                      title={row[colIdx] || ''}
                                    >
                                      {row[colIdx] || ''}
                                    </td>
                                  ))}
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Add Row Drawer / Footer */}
                  {headers.length > 0 && (
                    <div className="p-4 border-t border-white/10 bg-[#12121A]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                          <Plus className="w-3.5 h-3.5 text-emerald-400" />
                          Insert New Row into "{activeSheetTab}"
                        </span>
                      </div>
                      <form onSubmit={handleAppendRow} className="flex flex-wrap gap-2 items-center">
                        {headers.slice(0, 5).map((header, idx) => (
                          <input
                            key={idx}
                            type="text"
                            placeholder={header}
                            value={newRowValues[idx] || ''}
                            onChange={(e) => {
                              const updated = [...newRowValues];
                              updated[idx] = e.target.value;
                              setNewRowValues(updated);
                            }}
                            className="flex-1 min-w-[120px] px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500"
                          />
                        ))}
                        <button
                          id="append-row-submit-btn"
                          type="submit"
                          disabled={isAddingRow || newRowValues.every((v) => !v)}
                          className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs rounded-lg transition-all disabled:opacity-40 shrink-0"
                        >
                          {isAddingRow ? 'Saving...' : 'Add Row'}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: AI SHEET DATA ANALYST */}
              {activeTab === 'ai_analyze' && (
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2 font-serif">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        NexaBoost AI Spreadsheet Intelligence Analyst
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Synthesize, score leads, draft outreach messages, and extract high-ROI patterns from "{selectedSpreadsheet?.name}" ({activeSheetTab}).
                      </p>
                    </div>
                  </div>

                  {/* Task Presets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <button
                      onClick={() => setAiTaskType('summarize')}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        aiTaskType === 'summarize'
                          ? 'bg-purple-500/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/10'
                          : 'bg-[#12121A] border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <h4 className="text-xs font-bold mb-1">Executive Summary</h4>
                      <p className="text-[11px] leading-tight text-neutral-400">
                        High-level KPI digest, trends, and data summary.
                      </p>
                    </button>

                    <button
                      onClick={() => setAiTaskType('lead_score')}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        aiTaskType === 'lead_score'
                          ? 'bg-purple-500/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/10'
                          : 'bg-[#12121A] border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <h4 className="text-xs font-bold mb-1">Lead Quality Scoring</h4>
                      <p className="text-[11px] leading-tight text-neutral-400">
                        Rate prospect tiers (Hot/Warm/Cold) & closing angles.
                      </p>
                    </button>

                    <button
                      onClick={() => setAiTaskType('outreach_draft')}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        aiTaskType === 'outreach_draft'
                          ? 'bg-purple-500/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/10'
                          : 'bg-[#12121A] border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <h4 className="text-xs font-bold mb-1">Outreach Copy Generator</h4>
                      <p className="text-[11px] leading-tight text-neutral-400">
                        Draft high-converting WhatsApp/Email copy from rows.
                      </p>
                    </button>

                    <button
                      onClick={() => setAiTaskType('insights')}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        aiTaskType === 'insights'
                          ? 'bg-purple-500/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/10'
                          : 'bg-[#12121A] border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <h4 className="text-xs font-bold mb-1">Pattern & Bottlenecks</h4>
                      <p className="text-[11px] leading-tight text-neutral-400">
                        Spot outliers, anomalies, and operational leaks.
                      </p>
                    </button>
                  </div>

                  {/* Custom Prompt Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-neutral-300">
                      Custom Instructions or Questions on Sheet Data (Optional):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. Find all leads with revenue > $50k and write custom closing hooks for them..."
                        value={customAiPrompt}
                        onChange={(e) => setCustomAiPrompt(e.target.value)}
                        className="flex-1 px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                      />
                      <button
                        id="run-sheet-ai-analysis-btn"
                        onClick={handleAnalyzeSheet}
                        disabled={isAnalyzing}
                        className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-black font-bold text-xs rounded-xl shadow-lg shadow-purple-500/20 flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                      >
                        <Sparkles className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
                        <span>{isAnalyzing ? 'Analyzing Rows...' : 'Run AI Analysis'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Analysis Result Display */}
                  {aiAnalysisResult && (
                    <div className="bg-[#12121C] border border-purple-500/30 rounded-2xl p-6 shadow-xl space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-400" />
                          <span>AI Intelligence Report</span>
                        </div>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(aiAnalysisResult);
                            setCopiedAnalysis(true);
                            setTimeout(() => setCopiedAnalysis(false), 2000);
                          }}
                          className="px-3 py-1 bg-white/5 hover:bg-white/10 text-neutral-300 text-xs rounded-lg flex items-center gap-1.5"
                        >
                          {copiedAnalysis ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedAnalysis ? 'Copied' : 'Copy Report'}</span>
                        </button>
                      </div>

                      <div className="text-xs sm:text-sm text-neutral-200 whitespace-pre-wrap leading-relaxed font-sans">
                        {aiAnalysisResult}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: QUICK SYNC PRESETS */}
              {activeTab === 'quick_sync' && (
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-white">Hub Data Synchronization Presets</h3>
                    <p className="text-xs text-neutral-400">
                      Configure automated sheet destinations for all 14 AI Agent workflows.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#12121B] border border-white/10 rounded-2xl p-5 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white">AI Sandbox Outputs</h4>
                      <p className="text-xs text-neutral-400">
                        Automatically writes prompts, deliverables, language mode, and timestamps to "NexaBoost AI Outputs".
                      </p>
                      <button
                        onClick={async () => {
                          if (!token || !selectedSpreadsheet) return;
                          await ensureSheetWithHeaders(token, selectedSpreadsheet.id, 'NexaBoost AI Outputs', [
                            'Timestamp',
                            'Agent Name',
                            'Language Mode',
                            'Business Context',
                            'Prompt / Task',
                            'Generated Deliverable / Output',
                            'Status',
                          ]);
                          showToast('Verified "NexaBoost AI Outputs" tab!');
                        }}
                        className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs font-semibold rounded-xl text-neutral-300 hover:text-white"
                      >
                        Create / Verify Tab
                      </button>
                    </div>

                    <div className="bg-[#12121B] border border-white/10 rounded-2xl p-5 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Table className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white">AI Business Audits</h4>
                      <p className="text-xs text-neutral-400">
                        Saves all generated business audits, ROI multipliers, hours saved, and recommended agents.
                      </p>
                      <button
                        onClick={async () => {
                          if (!token || !selectedSpreadsheet) return;
                          await ensureSheetWithHeaders(token, selectedSpreadsheet.id, 'AI Business Audits', [
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
                          ]);
                          showToast('Verified "AI Business Audits" tab!');
                        }}
                        className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs font-semibold rounded-xl text-neutral-300 hover:text-white"
                      >
                        Create / Verify Tab
                      </button>
                    </div>

                    <div className="bg-[#12121B] border border-white/10 rounded-2xl p-5 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Database className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white">Inbound Leads & CRM</h4>
                      <p className="text-xs text-neutral-400">
                        Dispatches customer contacts, WhatsApp numbers, email inquiries, and packages to "Leads & Inquiries".
                      </p>
                      <button
                        onClick={async () => {
                          if (!token || !selectedSpreadsheet) return;
                          await ensureSheetWithHeaders(token, selectedSpreadsheet.id, 'Leads & Inquiries', [
                            'Timestamp',
                            'Client Name',
                            'Business / Brand',
                            'WhatsApp / Phone',
                            'Email Address',
                            'Selected AI Plan',
                            'Notes / Details',
                            'Lead Status',
                          ]);
                          showToast('Verified "Leads & Inquiries" tab!');
                        }}
                        className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs font-semibold rounded-xl text-neutral-300 hover:text-white"
                      >
                        Create / Verify Tab
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Destructive Confirm Dialog */}
      <DestructiveConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.title}
        description={confirmDialog.description}
        targetDetails={confirmDialog.targetDetails}
        confirmButtonText="Yes, Clear Data"
        isLoading={isExecutingDestructive}
        onConfirm={confirmDialog.action}
        onCancel={() => setConfirmDialog((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};
