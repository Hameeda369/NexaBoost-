import React, { useState } from 'react';
import {
  Copy,
  Check,
  FileSpreadsheet,
  ArrowDown,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Send,
  Headphones,
  Award,
  Video,
  PenTool,
  BarChart3,
  Search,
  RefreshCw,
  Clock,
  MessageSquare,
  TrendingUp,
  Cpu,
  Info,
  CheckCircle2
} from 'lucide-react';
import { EXACT_14_ASSEMBLY_AGENTS } from '../data/exact14Agents';
import { LanguageMode } from '../types';

interface AssemblyPipelineModalProps {
  language: LanguageMode;
  isOpen: boolean;
  onClose: () => void;
}

export const AssemblyPipelineModal: React.FC<AssemblyPipelineModalProps> = ({
  language,
  isOpen,
  onClose,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);
  const [activePhaseFilter, setActivePhaseFilter] = useState<string>('all');

  if (!isOpen) return null;

  const handleCopySingle = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAllPrompts = () => {
    const fullBundle = EXACT_14_ASSEMBLY_AGENTS.map(
      (agent) => `### ${agent.assemblyOrder}. ${agent.name} (${agent.n8nPhase})\n${agent.systemPrompt}\n`
    ).join('\n---\n\n');

    navigator.clipboard.writeText(fullBundle);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const phases = [
    { id: 'all', label: 'All 14 Agents', badge: '14 Agents' },
    { id: 'PHASE 1: LEAD + DATA', label: 'Phase 1: Lead + Data', badge: '4 Agents' },
    { id: 'PHASE 2: OUTREACH + SALES', label: 'Phase 2: Outreach + Sales', badge: '4 Agents' },
    { id: 'PHASE 3: CONTENT + MARKETING', label: 'Phase 3: Content + Marketing', badge: '4 Agents' },
    { id: 'PHASE 4: MANAGEMENT', label: 'Phase 4: Management', badge: '2 Agents' }
  ];

  const filteredAgents = activePhaseFilter === 'all'
    ? EXACT_14_ASSEMBLY_AGENTS
    : EXACT_14_ASSEMBLY_AGENTS.filter((a) => a.n8nPhase === activePhaseFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0A0A0A] border border-[#333333] rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#222222] bg-[#050505] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase font-bold bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/20 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Base44 / n8n Assembly Line
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                14 Connected Nodes
              </span>
            </div>
            <h2 className="text-2xl font-normal text-white font-serif tracking-tight">
              14-Agent n8n / Base44 Assembly Line Prompts
            </h2>
            <p className="text-xs font-mono text-[#888888]">
              Ye "Assembly Line" hai — Har agent upar wale se data le kar agle agent ko Google Sheet ke zariye transfer karta hai.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAllPrompts}
              className="px-4 py-2 rounded-lg bg-[#A78BFA] hover:bg-[#C4B5FD] text-black font-mono text-xs uppercase font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#A78BFA]/10"
            >
              {copiedAll ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>All 14 Prompts Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black" />
                  <span>Copy All 14 Prompts (1-Click)</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#141414] hover:bg-[#222222] text-[#888888] hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Quick Instructions Banner */}
        <div className="p-4 bg-[#111111] border-b border-[#222222] grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono text-[#CCCCCC]">
          <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222]">
            <span className="w-5 h-5 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
            <div>
              <p className="font-bold text-white">5-Min Deployment</p>
              <p className="text-[#888888] text-[11px]">Base44/n8n me `+ New Agent` x 14 baar banayein. Naam same rakhein.</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222]">
            <span className="w-5 h-5 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
            <div>
              <p className="font-bold text-white">Master Sheet Tool</p>
              <p className="text-[#888888] text-[11px]">Har agent ko Google Sheet "NexaBoost Master CRM" connect karein.</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222]">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
            <div>
              <p className="font-bold text-white">Recommended Start</p>
              <p className="text-[#888888] text-[11px]">Pehle sirf Agent 1 (Lead Gen) + 9 (Ideas) + 13 (Analytics) ON karein.</p>
            </div>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="px-6 pt-4 pb-2 flex items-center gap-2 overflow-x-auto border-b border-[#222222] bg-[#050505]">
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePhaseFilter(p.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                activePhaseFilter === p.id
                  ? 'bg-[#A78BFA] text-black font-bold'
                  : 'bg-[#111111] text-[#888888] hover:text-white border border-[#222222]'
              }`}
            >
              {p.label} <span className="opacity-70 text-[10px]">({p.badge})</span>
            </button>
          ))}
        </div>

        {/* Agent Prompt Cards List */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto bg-[#080808]">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-[#0D0D0D] border border-[#222222] hover:border-[#A78BFA]/40 rounded-xl p-4 sm:p-5 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#1A1A1A]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center font-mono text-xs font-bold text-[#A78BFA]">
                    #{agent.assemblyOrder}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white font-mono">{agent.name}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#888888] bg-[#141414] border border-[#222222]">
                        {agent.n8nPhase}
                      </span>
                    </div>
                    <p className="text-xs text-[#888888] font-sans mt-0.5">{agent.tagline}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopySingle(agent.id, agent.systemPrompt || '')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#A78BFA] text-[#CCCCCC] hover:text-black border border-[#2A2A2A] hover:border-[#A78BFA] text-xs font-mono transition-all cursor-pointer self-start sm:self-auto shrink-0"
                >
                  {copiedId === agent.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Prompt Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>

              {/* Exact System Prompt Box */}
              <div className="relative group">
                <pre className="p-3.5 bg-[#050505] border border-[#1F1F1F] rounded-lg text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {agent.systemPrompt}
                </pre>
              </div>

              {/* Flow Metadata Pills */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#777777] pt-1">
                {agent.metrics.map((m, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#111111] border border-[#222222]">
                    <strong className="text-[#A0A0A0]">{m.label}:</strong> {m.value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#050505] border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#888888]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#A78BFA]" />
            <span>Target Google Sheet: <strong>"NexaBoost Master CRM"</strong> (Tabs: LEADS DATABASE, OUTREACH DRAFTS, CONTENT CALENDAR, REPORTS)</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/923462231606?text=Salam%20Ali%20Mola!%20Mujhe%20n8n%2014%20agents%20flow%20diagram%20aur%20setup%20chahiye."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-bold flex items-center gap-1.5 transition-all"
            >
              <span>Get n8n Workflow JSON / Diagram from Ali Mola</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
