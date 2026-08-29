import React, { useState, useId } from 'react';
import {
  FileText,
  Copy,
  Check,
  Printer,
  Sparkles,
  Search,
  MessageCircle,
  ExternalLink,
  Gift,
  ShieldAlert,
  Zap,
  Download,
  Share2,
  CheckCircle2,
  FileSpreadsheet,
  X,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ALL_14_PROPOSALS, ServiceProposal } from '../data/proposalsData';
import { LanguageMode } from '../types';

interface ProposalPdfsHubProps {
  isOpen: boolean;
  onClose: () => void;
  language?: LanguageMode;
  onOpenSheets?: () => void;
}

export const ProposalPdfsHub: React.FC<ProposalPdfsHubProps> = ({
  isOpen,
  onClose,
  language = 'en',
  onOpenSheets
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProposal, setActiveProposal] = useState<ServiceProposal>(ALL_14_PROPOSALS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);
  const [showA4PrintModal, setShowA4PrintModal] = useState<boolean>(false);

  const searchInputId = useId();

  if (!isOpen) return null;

  const filteredProposals = ALL_14_PROPOSALS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.pdfFileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopySingle = (proposal: ServiceProposal) => {
    navigator.clipboard.writeText(proposal.canvaDocText);
    setCopiedId(proposal.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const fullText = ALL_14_PROPOSALS.map(
      (p, idx) => `*${idx + 1}. http://${p.pdfFileName}*\n${p.canvaDocText}\n`
    ).join('\n---\n\n');
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handlePrintA4 = (proposal?: ServiceProposal) => {
    if (proposal) {
      setActiveProposal(proposal);
    }
    setShowA4PrintModal(true);
  };

  const executePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="proposals-hub-container"
        className="bg-[#0D0D12] border border-white/10 rounded-2xl md:rounded-3xl w-full max-w-7xl h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-purple-950/40 via-neutral-900/60 to-black/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight font-serif">
                  14 Official PDF Proposals & Canva/Docs Kit
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase tracking-wider">
                  1-Page A4 Ready
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Copy text for Canva / Word / Google Docs or generate 1-page client-ready PDF proposals with official PKR rates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="copy-all-14-proposals-btn"
              onClick={handleCopyAll}
              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-purple-600/30 cursor-pointer"
            >
              {copiedAll ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>All 14 Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy All 14 for Canva/Docs</span>
                </>
              )}
            </button>

            {onOpenSheets && (
              <button
                id="proposals-sync-sheets-btn"
                onClick={onOpenSheets}
                className="px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                title="Sync 14 proposals into connected Google Spreadsheet"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">Google Sheets</span>
              </button>
            )}

            <button
              id="close-proposals-hub-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All 14 Packages' },
              { id: 'growth', label: 'SEO & Ads Growth (4)' },
              { id: 'ai_automation', label: 'AI Agents & Voice (3)' },
              { id: 'creative', label: 'Creative & Video Ads (5)' },
              { id: 'dev', label: 'Web & Mobile Apps (2)' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              id={searchInputId}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PDF or service..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Main Content: Split Grid (Left List + Right Detailed 1-Page A4 Proposal Preview) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Left Column: 14 Proposals Cards Grid (5 cols on desktop) */}
          <div className="lg:col-span-5 p-4 sm:p-6 overflow-y-auto border-r border-white/10 space-y-3 scrollbar-thin scrollbar-thumb-white/10">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 px-1">
              <span>Showing {filteredProposals.length} of 14 Services</span>
              <span>Click card to inspect & format</span>
            </div>

            {filteredProposals.map((proposal) => {
              const isSelected = activeProposal.id === proposal.id;
              const isUgcEdited = proposal.id === 'nexa-ugc-ads';

              return (
                <div
                  key={proposal.id}
                  id={`proposal-card-${proposal.id}`}
                  onClick={() => setActiveProposal(proposal)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-purple-950/20 border-purple-500 shadow-lg shadow-purple-950/50'
                      : 'bg-[#121218] border-white/5 hover:border-white/15 hover:bg-[#161620]'
                  }`}
                >
                  {isUgcEdited && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                      Special Rate Updated
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-purple-400 font-bold">
                          {proposal.pdfFileName}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white mt-0.5">
                        {proposal.title} — <span className="text-neutral-300 font-normal">{proposal.tagline}</span>
                      </h3>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between border-t border-white/5 pt-2.5">
                    <span className="text-xs font-extrabold text-amber-300">
                      {proposal.price}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopySingle(proposal);
                        }}
                        className="px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                        title="Copy Canva text"
                      >
                        {copiedId === proposal.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-300">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrintA4(proposal);
                        }}
                        className="px-2 py-1 rounded-md bg-purple-500/15 hover:bg-purple-500/30 text-purple-300 text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                        title="View A4 Printable Document"
                      >
                        <Printer className="w-3 h-3" />
                        <span>A4 PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed A4 Proposal Sheet & Action Studio (7 cols on desktop) */}
          <div className="lg:col-span-7 p-4 sm:p-6 overflow-y-auto bg-black/40 flex flex-col justify-between space-y-6">
            {/* Header & Quick Action Row */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 text-xs font-mono font-bold">
                      {activeProposal.pdfFileName}
                    </span>
                    <span className="text-xs text-neutral-400">1-Page Standard Document</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-serif">
                    {activeProposal.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-purple-300 font-medium">
                    {activeProposal.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id="preview-a4-modal-btn"
                    onClick={() => handlePrintA4(activeProposal)}
                    className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-purple-600/30 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print / Save 1-Page A4 PDF</span>
                  </button>

                  <button
                    id="copy-active-proposal-btn"
                    onClick={() => handleCopySingle(activeProposal)}
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedId === activeProposal.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy for Canva/Docs</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Price Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-amber-200 uppercase tracking-wider font-semibold block">
                    Investment Rate
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
                    {activeProposal.price}
                  </span>
                </div>
                {activeProposal.deliveryTime && (
                  <div className="text-right">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold block">
                      Turnaround
                    </span>
                    <span className="text-sm font-bold text-white">
                      {activeProposal.deliveryTime}
                    </span>
                  </div>
                )}
              </div>

              {/* Deliverables Section (Kya Milega) */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Kya Milega (Deliverables):</span>
                </h4>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  {activeProposal.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus & Guarantee Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProposal.bonus && (
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
                      <Gift className="w-3.5 h-3.5" />
                      <span>Exclusive Bonus:</span>
                    </div>
                    <p className="text-xs text-neutral-200">{activeProposal.bonus}</p>
                  </div>
                )}

                {activeProposal.guarantee && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Risk-Free Guarantee:</span>
                    </div>
                    <p className="text-xs text-neutral-200">{activeProposal.guarantee}</p>
                  </div>
                )}
              </div>

              {/* Raw Canva / Word Text View with Copy */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono">Canva / Word / Docs Direct Text Block:</span>
                  <button
                    onClick={() => handleCopySingle(activeProposal)}
                    className="text-purple-400 hover:text-purple-300 text-xs font-medium inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy Raw Block</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-[11px] sm:text-xs text-neutral-300 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {activeProposal.canvaDocText}
                </pre>
              </div>
            </div>

            {/* Bottom Actions: Send to WhatsApp / Book */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                id="whatsapp-proposal-cta"
                href={`https://wa.me/923462231606?text=${encodeURIComponent(activeProposal.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send {activeProposal.title} to WhatsApp (+92 346 2231606)</span>
              </a>

              <button
                onClick={() => handlePrintA4(activeProposal)}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-purple-400" />
                <span>Preview A4 Sheet</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* A4 1-PAGE DOCUMENT PRINT & PREVIEW MODAL */}
      {showA4PrintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-lg overflow-y-auto">
          <div className="bg-neutral-900 border border-white/20 rounded-2xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Bar */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/50">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white font-serif">
                  A4 1-Page Document Preview: {activeProposal.pdfFileName}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  id="print-a4-now-btn"
                  onClick={executePrint}
                  className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setShowA4PrintModal(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Printable A4 Styled Sheet */}
            <div className="p-6 sm:p-10 bg-[#0E0E14] text-white space-y-6 max-h-[75vh] overflow-y-auto print:max-h-none print:p-0">
              {/* Header Branding */}
              <div className="flex items-start justify-between border-b border-purple-500/30 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                      NexaBoost AI Creative Hub
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-serif">
                    {activeProposal.title}
                  </h1>
                  <p className="text-sm text-purple-300 font-medium mt-0.5">
                    {activeProposal.tagline}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block">
                    Document Code
                  </span>
                  <span className="text-sm font-mono font-bold text-amber-300">
                    {activeProposal.pdfFileName}
                  </span>
                </div>
              </div>

              {/* Price Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-neutral-900 to-black border border-purple-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block">
                    Official Investment Rate:
                  </span>
                  <span className="text-3xl font-black text-amber-300 font-serif">
                    {activeProposal.price}
                  </span>
                </div>
                {activeProposal.deliveryTime && (
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block">
                      Timeline
                    </span>
                    <span className="text-sm font-bold text-white">
                      {activeProposal.deliveryTime}
                    </span>
                  </div>
                )}
              </div>

              {/* Kya Milega (Deliverables) */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Kya Milega (Key Deliverables):</span>
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeProposal.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-neutral-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus & Guarantee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeProposal.bonus && (
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
                      <Gift className="w-4 h-4" />
                      <span>Bonus:</span>
                    </div>
                    <p className="text-xs text-neutral-200 font-medium">
                      {activeProposal.bonus}
                    </p>
                  </div>
                )}

                {activeProposal.guarantee && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Guarantee:</span>
                    </div>
                    <p className="text-xs text-neutral-200 font-medium">
                      {activeProposal.guarantee}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer CTA & Direct Contact */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
                <div>
                  <span className="text-white font-bold block">
                    NexaBoost AI Creative Hub
                  </span>
                  <span>WhatsApp: +92 346 2231606 | Autonomous Growth Ecosystem</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 font-bold text-xs text-center">
                  CTA: {activeProposal.cta}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
