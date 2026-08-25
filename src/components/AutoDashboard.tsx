import React, { useState, useEffect } from 'react';
import {
  Users,
  Clock,
  CheckCircle,
  TrendingUp,
  MessageCircle,
  Search,
  Filter,
  Plus,
  Download,
  Settings,
  RefreshCw,
  Trash2,
  Edit3,
  ExternalLink,
  Lock,
  Mail,
  Phone,
  Bot,
  Zap,
  Sparkles,
  ArrowLeft,
  LogOut,
  Send,
  X,
  Copy,
  Check,
  Globe
} from 'lucide-react';
import { DashboardLead, DashboardStats, LeadStatus, WhatsAppConfig } from '../types';

interface AutoDashboardProps {
  onBackToWebsite: () => void;
}

export const AutoDashboard: React.FC<AutoDashboardProps> = ({ onBackToWebsite }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('nexaboost_auth') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  // Data State
  const [leads, setLeads] = useState<DashboardLead[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalLeads: 0,
    newToday: 0,
    contacted: 0,
    converted: 0,
    conversionRate: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState<DashboardLead | null>(null);
  const [copiedWebhook, setCopiedWebhook] = useState(false);
  const [copiedVerifyToken, setCopiedVerifyToken] = useState(false);
  const [copiedAppId, setCopiedAppId] = useState(false);

  // New Lead Form State
  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'AI Lead Gen + WhatsApp CRM Package',
    source: 'Manual Entry',
    status: 'New' as LeadStatus,
    notes: '',
    budget: 'Rs. 50,000 / mo',
  });

  // WhatsApp Config State
  const [whatsappConfig, setWhatsappConfig] = useState<WhatsAppConfig>(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://ais-dev-qkmoz7spsvn55eygspabis-830983308603.asia-east1.run.app';
    return {
      enabled: true,
      appId: '839900995770165',
      metaSettingsUrl: 'https://developers.facebook.com/apps/839900995770165/whatsapp-business/wa-settings/',
      phoneNumberId: '102938475619283',
      accessToken: '',
      businessAccountId: '987654321098765',
      webhookUrl: `${origin}/api/webhook/whatsapp`,
      verifyToken: 'nexaboost_verify_token_2026',
      autoMessageTemplate:
        'Salam {Name}! ✨ Thanks for contacting NexaBoost AI Creative Hub.\n\nWe received your inquiry regarding {Service}. Our team & AI Specialist (Ali Mola) are reviewing your details and will connect with you within 15 minutes.\n\nDirect Helpline: +92 346 2231606\nPortfolio: https://hamigul-lens-flow.base44.app/',
      senderName: 'NexaBoost AI Creative Hub',
      testPhone: '+92 346 2231606',
    };
  });

  const [testStatus, setTestStatus] = useState<{ loading: boolean; message?: string; success?: boolean } | null>(null);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Fetch initial data
  const fetchData = async () => {
    setIsRefreshing(true);
    try {
      // 1. Fetch leads
      const leadsRes = await fetch('/api/dashboard/leads');
      if (leadsRes.ok) {
        const leadsData = await leadsRes.json();
        if (leadsData.leads) setLeads(leadsData.leads);
      }

      // 2. Fetch stats
      const statsRes = await fetch('/api/dashboard/stats');
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        if (statsData.stats) setStats(statsData.stats);
      }

      // 3. Fetch settings
      const settingsRes = await fetch('/api/dashboard/settings');
      if (settingsRes.ok) {
        const settingsData = await settingsRes.json();
        if (settingsData.settings) {
          setWhatsappConfig((prev) => ({
            ...prev,
            ...settingsData.settings,
          }));
        }
      }
    } catch (err) {
      console.warn('Error fetching dashboard data, using local state:', err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
      const interval = setInterval(fetchData, 20000); // 20s auto-refresh
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError('Please enter your email and password.');
      return;
    }
    // Accept standard demo or admin credentials
    setIsAuthenticated(true);
    localStorage.setItem('nexaboost_auth', 'true');
    setLoginError(null);
  };

  const handleDemoLogin = () => {
    setLoginEmail('admin@nexaboost.ai');
    setLoginPassword('nexaboost123');
    setIsAuthenticated(true);
    localStorage.setItem('nexaboost_auth', 'true');
    setLoginError(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('nexaboost_auth');
  };

  // Status Change Handler
  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    // Optimistic UI update
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );

    try {
      await fetch(`/api/dashboard/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchData();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  // Delete Lead
  const handleDeleteLead = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;

    setLeads((prev) => prev.filter((l) => l.id !== id));
    try {
      await fetch(`/api/dashboard/leads/${id}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (err) {
      console.error('Error deleting lead:', err);
    }
  };

  // Add Manual Lead
  const handleAddLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.name.trim() || !newLeadForm.phone.trim()) return;

    try {
      const response = await fetch('/api/dashboard/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLeadForm),
      });

      if (response.ok) {
        setShowAddModal(false);
        setNewLeadForm({
          name: '',
          phone: '',
          email: '',
          service: 'AI Lead Gen + WhatsApp CRM Package',
          source: 'Manual Entry',
          status: 'New',
          notes: '',
          budget: 'Rs. 50,000 / mo',
        });
        fetchData();
      }
    } catch (err) {
      console.error('Error adding lead:', err);
    }
  };

  // Save WhatsApp Settings
  const handleSaveWhatsAppSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus('Saving...');
    try {
      const res = await fetch('/api/dashboard/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(whatsappConfig),
      });
      if (res.ok) {
        setSaveStatus('WhatsApp Configuration Saved Successfully! ✅');
        setTimeout(() => setSaveStatus(null), 3000);
      } else {
        setSaveStatus('Failed to save settings.');
      }
    } catch (err) {
      setSaveStatus('Error saving settings.');
    }
  };

  // Send Test WhatsApp Message
  const handleSendTestWhatsApp = async () => {
    setTestStatus({ loading: true });
    try {
      const res = await fetch('/api/whatsapp/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: whatsappConfig.testPhone || '+92 346 2231606',
          message: whatsappConfig.autoMessageTemplate
            .replace(/{Name}/g, 'Test Client')
            .replace(/{Service}/g, 'AI Lead Gen Package')
            .replace(/{Phone}/g, whatsappConfig.testPhone || '+92 346 2231606'),
        }),
      });
      const data = await res.json();
      setTestStatus({
        loading: false,
        success: data.success,
        message: data.success
          ? `Dispatched successfully to ${data.phone}! Status: ${data.status}`
          : `Dispatch failed: ${data.status || 'Check credentials'}`,
      });
    } catch (err: any) {
      setTestStatus({
        loading: false,
        success: false,
        message: `Error: ${err?.message || 'Network failure'}`,
      });
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Name', 'Phone', 'Email', 'Service', 'Source', 'Status', 'Budget', 'Notes', 'Created At'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email || ''}"`,
      `"${l.service || ''}"`,
      `"${l.source}"`,
      `"${l.status}"`,
      `"${l.budget || ''}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
      `"${l.createdAt}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NexaBoost_Leads_Master_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter Leads
  const filteredLeads = leads.filter((lead) => {
    // Search query
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      lead.name.toLowerCase().includes(q) ||
      lead.phone.toLowerCase().includes(q) ||
      (lead.email && lead.email.toLowerCase().includes(q)) ||
      (lead.service && lead.service.toLowerCase().includes(q)) ||
      (lead.notes && lead.notes.toLowerCase().includes(q));

    // Status
    const matchesStatus = statusFilter === 'all' || lead.status.toLowerCase() === statusFilter.toLowerCase();

    // Source
    const matchesSource = sourceFilter === 'all' || lead.source.toLowerCase() === sourceFilter.toLowerCase();

    // Date
    let matchesDate = true;
    if (dateFilter === 'today') {
      const today = new Date().toISOString().slice(0, 10);
      matchesDate = lead.createdAt.slice(0, 10) === today;
    } else if (dateFilter === 'week') {
      const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      matchesDate = new Date(lead.createdAt) >= oneWeekAgo;
    } else if (dateFilter === 'month') {
      const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      matchesDate = new Date(lead.createdAt) >= oneMonthAgo;
    }

    return matchesSearch && matchesStatus && matchesSource && matchesDate;
  });

  // Calculate dynamic stats
  const totalCount = leads.length;
  const newTodayCount = leads.filter((l) => {
    const today = new Date().toISOString().slice(0, 10);
    return l.createdAt.slice(0, 10) === today;
  }).length;
  const contactedCount = leads.filter((l) => l.status === 'Contacted' || l.status === 'In Progress').length;
  const convertedCount = leads.filter((l) => l.status === 'Converted').length;

  // Format Date Helper
  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoStr;
    }
  };

  // Helper for status badge styling
  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case 'New':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Contacted':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'In Progress':
        return 'bg-purple-500/10 text-[#A78BFA] border-purple-500/30';
      case 'Converted':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Lost':
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30';
    }
  };

  // -------------------------------------------------------------
  // VIEW 1: LOGIN SCREEN IF NOT AUTHENTICATED
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#E0E0E0] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        
        {/* Subtle Ambient Glows */}
        <div className="fixed top-1/4 left-1/3 w-[500px] h-[500px] bg-[#A78BFA] rounded-full blur-[180px] opacity-[0.08] pointer-events-none" />
        <div className="fixed bottom-1/4 right-1/3 w-[450px] h-[450px] bg-[#25D366] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-md w-full space-y-8 relative z-10">
          
          {/* Header & Logo */}
          <div className="text-center space-y-3">
            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#888888] hover:text-[#A78BFA] transition-colors mb-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Main Website</span>
            </button>

            <div className="w-14 h-14 rounded-2xl bg-[#A78BFA] flex items-center justify-center text-black mx-auto shadow-xl shadow-[#A78BFA]/20">
              <Bot className="w-7 h-7" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-white">
              NexaBoost Auto Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-[#888888]">
              Automated Lead CRM & Meta WhatsApp Cloud Engine
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {loginError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="admin@nexaboost.ai"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#A78BFA] hover:bg-[#C4B5FD] text-black font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 shadow-lg shadow-[#A78BFA]/20 cursor-pointer"
              >
                Sign In to Dashboard
              </button>
            </form>

            {/* Quick Demo Login Option */}
            <div className="pt-4 border-t border-[#1C1C1C] text-center space-y-3">
              <span className="text-[11px] font-mono text-[#666666] uppercase tracking-wider block">
                Instant Evaluation Access
              </span>
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full py-2.5 px-4 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] border border-[#2A2A2A] text-white text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>1-Click Demo Login (admin@nexaboost.ai)</span>
              </button>
            </div>

          </div>

          {/* Quick Footer Links */}
          <div className="text-center text-xs font-mono text-[#666666]">
            <span>Powered by NexaBoost AI & Meta WhatsApp Engine</span>
          </div>

        </div>

      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED FULL AUTO DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] font-sans pb-20 selection:bg-[#A78BFA] selection:text-black">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Left: Brand & Back to Main */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#202020] border border-[#262626] text-xs font-mono text-[#AAAAAA] hover:text-white transition-all cursor-pointer"
              title="Return to Main Website"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Website</span>
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#A78BFA] flex items-center justify-center text-black shadow-md shadow-[#A78BFA]/20">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-serif text-white block leading-none">
                  NexaBoost Auto Dashboard
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Meta WhatsApp Pipeline: Active
                </span>
              </div>
            </div>
          </div>

          {/* Right: Actions (Refresh, Connect WhatsApp, Add Lead, Export, Logout) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Refresh */}
            <button
              onClick={fetchData}
              disabled={isRefreshing}
              className="p-2 rounded-lg bg-[#141414] hover:bg-[#202020] border border-[#262626] text-[#AAAAAA] hover:text-white transition-all cursor-pointer"
              title="Refresh Leads & Stats"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#A78BFA]' : ''}`} />
            </button>

            {/* Connect WhatsApp Button */}
            <button
              onClick={() => setShowSettingsModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold transition-all cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden md:inline">Connect WhatsApp</span>
              <span className="md:hidden">WhatsApp</span>
            </button>

            {/* Add Lead Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#A78BFA] hover:bg-[#C4B5FD] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shadow-[#A78BFA]/20 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add Lead</span>
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg bg-[#141414] hover:bg-red-500/10 hover:border-red-500/30 border border-[#262626] text-[#AAAAAA] hover:text-red-400 transition-all cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>

          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* ======================================================== */}
        {/* TOP 4 STATS CARDS */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Total Leads */}
          <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#222222] hover:border-[#333333] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">Total Leads</span>
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-[#A78BFA]" />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="text-3xl font-serif text-white">{totalCount}</div>
              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>Auto-synced from all channels</span>
              </div>
            </div>
          </div>

          {/* Card 2: New Today */}
          <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#222222] hover:border-[#333333] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">New Today</span>
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="text-3xl font-serif text-white">{newTodayCount}</div>
              <div className="text-[11px] font-mono text-blue-400">
                <span>Received in last 24h</span>
              </div>
            </div>
          </div>

          {/* Card 3: Contacted */}
          <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#222222] hover:border-[#333333] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">Contacted / In Progress</span>
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="text-3xl font-serif text-white">{contactedCount}</div>
              <div className="text-[11px] font-mono text-[#25D366]">
                <span>Active conversations</span>
              </div>
            </div>
          </div>

          {/* Card 4: Converted */}
          <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#222222] hover:border-[#333333] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">Converted Clients</span>
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="text-3xl font-serif text-white">{convertedCount}</div>
              <div className="text-[11px] font-mono text-emerald-400">
                <span>
                  {totalCount > 0 ? `${Math.round((convertedCount / totalCount) * 100)}% Conversion Rate` : '0%'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* FILTERS & SEARCH BAR */}
        {/* ======================================================== */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0A0A] border border-[#222222] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            
            {/* Search Input (5 cols) */}
            <div className="lg:col-span-5 relative">
              <Search className="w-4 h-4 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search leads by name, phone, email, notes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121212] border border-[#262626] focus:border-[#A78BFA] focus:outline-none text-white text-xs sm:text-sm placeholder-[#666666]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#666666] hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Status Filter (2 cols) */}
            <div className="lg:col-span-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                aria-label="Filter by Lead Status"
                className="w-full px-3 py-2.5 rounded-xl bg-[#121212] border border-[#262626] focus:border-[#A78BFA] focus:outline-none text-white text-xs font-mono"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in progress">In Progress</option>
                <option value="converted">Converted</option>
                <option value="lost">Lost</option>
              </select>
            </div>

            {/* Date Filter (2 cols) */}
            <div className="lg:col-span-2">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                aria-label="Filter by Date Range"
                className="w-full px-3 py-2.5 rounded-xl bg-[#121212] border border-[#262626] focus:border-[#A78BFA] focus:outline-none text-white text-xs font-mono"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Past 7 Days</option>
                <option value="month">Past 30 Days</option>
              </select>
            </div>

            {/* Source Filter (2 cols) */}
            <div className="lg:col-span-2">
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                aria-label="Filter by Lead Source"
                className="w-full px-3 py-2.5 rounded-xl bg-[#121212] border border-[#262626] focus:border-[#A78BFA] focus:outline-none text-white text-xs font-mono"
              >
                <option value="all">All Sources</option>
                <option value="contact form">Contact Form</option>
                <option value="free ai audit">Free AI Audit</option>
                <option value="whatsapp simulator">WhatsApp Simulator</option>
                <option value="portfolio inquiry">Portfolio Inquiry</option>
                <option value="manual entry">Manual Entry</option>
              </select>
            </div>

            {/* Export CSV (1 col) */}
            <div className="lg:col-span-1 flex justify-end">
              <button
                onClick={handleExportCSV}
                className="w-full sm:w-auto p-2.5 rounded-xl bg-[#141414] hover:bg-[#202020] border border-[#262626] text-white hover:text-[#A78BFA] transition-all flex items-center justify-center gap-1.5 text-xs font-mono cursor-pointer"
                title="Export Leads to CSV / Excel"
              >
                <Download className="w-4 h-4" />
                <span className="lg:hidden">Export CSV</span>
              </button>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* LEADS DATA TABLE */}
        {/* ======================================================== */}
        <div className="rounded-2xl bg-[#0A0A0A] border border-[#222222] overflow-hidden shadow-2xl">
          
          <div className="p-5 border-b border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-serif text-white">
                Live Inbound Leads & Pipeline ({filteredLeads.length})
              </h2>
              <p className="text-xs text-[#888888]">
                Every contact form submission & audit request automatically appears here in real-time.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#888888]">
                Showing {filteredLeads.length} of {leads.length} leads
              </span>
            </div>
          </div>

          {/* Table Responsive Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#101010] text-[#888888] uppercase tracking-wider border-b border-[#222222]">
                  <th className="py-3.5 px-4 font-semibold">Lead / Name</th>
                  <th className="py-3.5 px-4 font-semibold">Phone / WhatsApp</th>
                  <th className="py-3.5 px-4 font-semibold">Email</th>
                  <th className="py-3.5 px-4 font-semibold">Source</th>
                  <th className="py-3.5 px-4 font-semibold">Service / Notes</th>
                  <th className="py-3.5 px-4 font-semibold">Status</th>
                  <th className="py-3.5 px-4 font-semibold">Received</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A] text-[#D0D0D0]">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-[#666666] font-sans">
                      <div className="space-y-2">
                        <Users className="w-8 h-8 text-[#444444] mx-auto" />
                        <p className="text-sm">No leads match your current filter criteria.</p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setStatusFilter('all');
                            setDateFilter('all');
                            setSourceFilter('all');
                          }}
                          className="text-xs text-[#A78BFA] hover:underline cursor-pointer"
                        >
                          Clear all filters
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    const cleanPhone = lead.phone.replace(/\D/g, '');
                    const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                      'Hi this is NexaBoost. About your inquiry'
                    )}`;

                    return (
                      <tr key={lead.id} className="hover:bg-[#121212]/70 transition-colors group">
                        
                        {/* Name */}
                        <td className="py-4 px-4">
                          <div className="font-semibold text-white text-sm font-sans">{lead.name}</div>
                          <div className="text-[10px] text-[#666666] font-mono">ID: {lead.id}</div>
                        </td>

                        {/* Phone */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold hover:underline"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                              <span>{lead.phone}</span>
                            </a>
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-0.5 rounded-md bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black font-mono font-bold text-[10px] transition-all flex items-center gap-1"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-3 h-3 fill-current" />
                              <span>Chat</span>
                            </a>
                          </div>
                          {lead.whatsappSent && (
                            <span className="block text-[10px] text-emerald-500/80 mt-0.5">
                              ✓ Auto-WhatsApp Dispatched
                            </span>
                          )}
                        </td>

                        {/* Email */}
                        <td className="py-4 px-4 text-[#AAAAAA]">
                          {lead.email ? (
                            <a href={`mailto:${lead.email}`} className="hover:underline hover:text-white">
                              {lead.email}
                            </a>
                          ) : (
                            <span className="text-[#555555]">—</span>
                          )}
                        </td>

                        {/* Source */}
                        <td className="py-4 px-4">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-[#161616] border border-[#2A2A2A] text-[#CCCCCC]">
                            {lead.source}
                          </span>
                        </td>

                        {/* Service / Notes */}
                        <td className="py-4 px-4 max-w-[200px]">
                          <div className="truncate text-white font-medium" title={lead.service || ''}>
                            {lead.service || 'AI Automation'}
                          </div>
                          {lead.notes && (
                            <div className="truncate text-[11px] text-[#888888]" title={lead.notes}>
                              {lead.notes}
                            </div>
                          )}
                        </td>

                        {/* Status dropdown */}
                        <td className="py-4 px-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                            aria-label={`Change status for lead ${lead.name}`}
                            className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-semibold focus:outline-none cursor-pointer ${getStatusBadge(
                              lead.status
                            )} bg-[#0A0A0A]`}
                          >
                            <option value="New" className="bg-[#121212] text-blue-400">New</option>
                            <option value="Contacted" className="bg-[#121212] text-amber-400">Contacted</option>
                            <option value="In Progress" className="bg-[#121212] text-purple-400">In Progress</option>
                            <option value="Converted" className="bg-[#121212] text-emerald-400">Converted</option>
                            <option value="Lost" className="bg-[#121212] text-zinc-400">Lost</option>
                          </select>
                        </td>

                        {/* Date */}
                        <td className="py-4 px-4 text-[#888888] whitespace-nowrap">
                          {formatDate(lead.createdAt)}
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            
                            {/* Prominent Green WhatsApp Button */}
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono font-bold text-xs transition-all shadow-md shadow-[#25D366]/25 hover:scale-105 cursor-pointer shrink-0"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-current text-black" />
                              <span>WhatsApp</span>
                            </a>

                            {/* View / Edit Modal */}
                            <button
                              onClick={() => setShowDetailsModal(lead)}
                              className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#242424] border border-[#2A2A2A] text-[#AAAAAA] hover:text-white transition-all cursor-pointer"
                              title="View Lead Details"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className="p-1.5 rounded-lg bg-[#181818] hover:bg-red-500/10 border border-[#2A2A2A] hover:border-red-500/30 text-[#888888] hover:text-red-400 transition-all cursor-pointer"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>

                          </div>
                        </td>

                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

        </div>

      </main>

      {/* ======================================================== */}
      {/* MODAL 1: CONNECT WHATSAPP & META CLOUD API SETTINGS */}
      {/* ======================================================== */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[#222222] flex items-center justify-between bg-[#0F0F0F]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white">Meta WhatsApp Cloud API Integration</h3>
                  <p className="text-xs text-[#888888]">
                    Configure automatic WhatsApp replies for all new inbound leads.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="p-2 text-[#888888] hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
              
              {saveStatus && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  {saveStatus}
                </div>
              )}

              {/* Meta Developer App 839900995770165 Quick Connection Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#181818] to-[#121212] border border-[#2A2A2A] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></div>
                    <span className="font-mono text-xs text-[#CCCCCC] font-bold">
                      Meta Developer App ID: <span className="text-[#25D366]">839900995770165</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://developers.facebook.com/apps/839900995770165/whatsapp-business/wa-settings/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold transition-all shadow-sm group cursor-pointer"
                    >
                      <span>Open Meta WA Settings</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href="https://developers.facebook.com/apps/839900995770165/whatsapp-business/wa-dev-console/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#333333] text-white text-xs font-mono transition-all group cursor-pointer"
                    >
                      <span>API Setup</span>
                      <ExternalLink className="w-3 h-3 text-[#888888] group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>

                {/* 3-Step Setup Instructions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[11px] font-mono text-[#999999]">
                  <div className="p-2.5 rounded-lg bg-[#0D0D0D] border border-[#222222]">
                    <div className="text-white font-bold mb-1">1. Webhook Setup</div>
                    <p className="text-[10px] text-[#777777] mb-2">Paste Callback URL & Verify Token in Meta Console:</p>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(whatsappConfig.verifyToken);
                        setCopiedVerifyToken(true);
                        setTimeout(() => setCopiedVerifyToken(false), 2000);
                      }}
                      className="w-full py-1 px-2 rounded bg-[#181818] hover:bg-[#222222] border border-[#333333] text-[#A78BFA] text-[10px] flex items-center justify-between cursor-pointer"
                    >
                      <span>Verify Token</span>
                      {copiedVerifyToken ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#0D0D0D] border border-[#222222]">
                    <div className="text-white font-bold mb-1">2. Subscribe Fields</div>
                    <p className="text-[10px] text-[#777777]">In Meta Webhook Fields, click Manage and toggle on <strong className="text-white">messages</strong>.</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#0D0D0D] border border-[#222222]">
                    <div className="text-white font-bold mb-1">3. Token & IDs</div>
                    <p className="text-[10px] text-[#777777]">Copy Phone ID, WABA ID & Permanent Token into the form below and click Save.</p>
                  </div>
                </div>
              </div>

              {/* Status Toggle */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#121212] border border-[#262626]">
                <div>
                  <div className="font-bold text-white font-mono">Auto-Send WhatsApp on New Lead</div>
                  <div className="text-xs text-[#888888]">
                    Instantly dispatches template to user phone upon form submission
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={whatsappConfig.enabled}
                    onChange={(e) => setWhatsappConfig({ ...whatsappConfig, enabled: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#262626] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#25D366]"></div>
                </label>
              </div>

              {/* Meta Credentials Form */}
              <form onSubmit={handleSaveWhatsAppSettings} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Phone Number ID */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                      Meta Phone Number ID *
                    </label>
                    <input
                      type="text"
                      value={whatsappConfig.phoneNumberId}
                      onChange={(e) => setWhatsappConfig({ ...whatsappConfig, phoneNumberId: e.target.value })}
                      placeholder="e.g. 102938475619283"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#25D366] focus:outline-none text-white text-xs font-mono"
                    />
                  </div>

                  {/* WhatsApp Business Account ID */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                      WhatsApp Business Account ID (WABA)
                    </label>
                    <input
                      type="text"
                      value={whatsappConfig.businessAccountId}
                      onChange={(e) => setWhatsappConfig({ ...whatsappConfig, businessAccountId: e.target.value })}
                      placeholder="e.g. 987654321098765"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#25D366] focus:outline-none text-white text-xs font-mono"
                    />
                  </div>

                </div>

                {/* Permanent Access Token */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                    Meta Permanent Access Token (Bearer)
                  </label>
                  <input
                    type="password"
                    value={whatsappConfig.accessToken}
                    onChange={(e) => setWhatsappConfig({ ...whatsappConfig, accessToken: e.target.value })}
                    placeholder="EAAB..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#25D366] focus:outline-none text-white text-xs font-mono"
                  />
                  <p className="text-[11px] font-mono text-[#666666]">
                    Generate from Meta for Developers &gt; WhatsApp &gt; API Setup &gt; System User.
                  </p>
                </div>

                {/* Webhook URL with Copy */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                    Inbound Webhook Callback URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={whatsappConfig.webhookUrl}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] text-[#888888] text-xs font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(whatsappConfig.webhookUrl);
                        setCopiedWebhook(true);
                        setTimeout(() => setCopiedWebhook(false), 2000);
                      }}
                      className="px-3 py-2.5 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] text-white text-xs font-mono flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      {copiedWebhook ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedWebhook ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Auto Message Template */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                      Auto Message Template
                    </label>
                    <span className="text-[10px] font-mono text-[#A78BFA]">
                      Available Tags: {'{Name}'}, {'{Service}'}, {'{Phone}'}
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    value={whatsappConfig.autoMessageTemplate}
                    onChange={(e) => setWhatsappConfig({ ...whatsappConfig, autoMessageTemplate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#25D366] focus:outline-none text-white text-xs leading-relaxed"
                  />
                </div>

                {/* Save button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-md shadow-[#25D366]/20 cursor-pointer"
                >
                  Save WhatsApp Configuration
                </button>

              </form>

              {/* Live Test WhatsApp Dispatch Section */}
              <div className="pt-4 border-t border-[#1F1F1F] space-y-3">
                <h4 className="font-bold text-white font-mono text-xs uppercase tracking-wider">
                  Test Live WhatsApp Dispatch
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="tel"
                    value={whatsappConfig.testPhone}
                    onChange={(e) => setWhatsappConfig({ ...whatsappConfig, testPhone: e.target.value })}
                    placeholder="+92 346 2231606"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#25D366] focus:outline-none text-white text-xs font-mono"
                  />
                  <button
                    type="button"
                    onClick={handleSendTestWhatsApp}
                    disabled={testStatus?.loading}
                    className="py-2.5 px-4 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#25D366]/50 text-[#25D366] font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    {testStatus?.loading ? (
                      <div className="w-3.5 h-3.5 border-2 border-[#25D366] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    <span>Send Test Message</span>
                  </button>
                </div>

                {testStatus?.message && (
                  <div
                    className={`p-3 rounded-xl border text-xs font-mono ${
                      testStatus.success
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                    }`}
                  >
                    {testStatus.message}
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: ADD NEW LEAD MANUALLY */}
      {/* ======================================================== */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            
            <div className="p-5 border-b border-[#222222] flex items-center justify-between bg-[#0F0F0F]">
              <h3 className="text-lg font-serif text-white">Add New Business Lead</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-[#888888] hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddLead} className="p-6 space-y-4 text-xs sm:text-sm">
              
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                  Lead / Client Name *
                </label>
                <input
                  type="text"
                  required
                  value={newLeadForm.name}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                  placeholder="e.g. Asad Siddiqui"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newLeadForm.phone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                    placeholder="+92 321 0000000"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newLeadForm.email}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    placeholder="client@biz.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                    Package / Service
                  </label>
                  <input
                    type="text"
                    value={newLeadForm.service}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, service: e.target.value })}
                    placeholder="AI Lead Gen Package"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                    Initial Status
                  </label>
                  <select
                    value={newLeadForm.status}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, status: e.target.value as LeadStatus })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Converted">Converted</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                  Notes / Requirements
                </label>
                <textarea
                  rows={3}
                  value={newLeadForm.notes}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                  placeholder="Specific requirements, pain points, budget..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono text-[#888888] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#A78BFA] hover:bg-[#C4B5FD] text-black font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-md shadow-[#A78BFA]/20 cursor-pointer"
                >
                  Save & Trigger WhatsApp
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: LEAD DETAIL & EDIT */}
      {/* ======================================================== */}
      {showDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl space-y-6 p-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <div>
                <h3 className="text-xl font-serif text-white">{showDetailsModal.name}</h3>
                <span className="text-xs font-mono text-[#888888]">Source: {showDetailsModal.source}</span>
              </div>
              <button
                onClick={() => setShowDetailsModal(null)}
                className="p-1.5 text-[#888888] hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-[#121212] border border-[#222222] space-y-1">
                <span className="text-[10px] font-mono text-[#888888] uppercase">Phone</span>
                <div className="font-bold text-white font-mono">{showDetailsModal.phone}</div>
              </div>

              {showDetailsModal.email && (
                <div className="p-3 rounded-xl bg-[#121212] border border-[#222222] space-y-1">
                  <span className="text-[10px] font-mono text-[#888888] uppercase">Email</span>
                  <div className="font-bold text-white">{showDetailsModal.email}</div>
                </div>
              )}

              <div className="p-3 rounded-xl bg-[#121212] border border-[#222222] space-y-1">
                <span className="text-[10px] font-mono text-[#888888] uppercase">Service / Budget</span>
                <div className="font-bold text-[#A78BFA]">{showDetailsModal.service} ({showDetailsModal.budget || 'Custom'})</div>
              </div>

              <div className="p-3 rounded-xl bg-[#121212] border border-[#222222] space-y-1">
                <span className="text-[10px] font-mono text-[#888888] uppercase">Notes & Details</span>
                <p className="text-[#CCCCCC] leading-relaxed">
                  {showDetailsModal.notes || 'No additional notes provided.'}
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href={`https://wa.me/${showDetailsModal.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                  `Salam ${showDetailsModal.name}! Following up on your inquiry with NexaBoost.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs uppercase font-bold tracking-wider text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat</span>
              </a>

              <button
                onClick={() => setShowDetailsModal(null)}
                className="py-3 px-5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] border border-[#262626] text-white text-xs font-mono cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
