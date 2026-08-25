import React, { useState } from 'react';
import {
  UserCheck,
  Send,
  Award,
  RefreshCw,
  PenTool,
  Video,
  Headphones,
  Search,
  Zap,
  ShieldCheck,
  CreditCard,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Play,
  RotateCcw,
  SlidersHorizontal,
  X,
  MessageCircle,
  ExternalLink,
  Bot,
  Layers,
  Clock,
  Code
} from 'lucide-react';
import { ALL_14_AGENTS } from '../data/agentsData';
import { AgentSpec, LanguageMode } from '../types';
import { AssemblyPipelineModal } from './AssemblyPipelineModal';

interface AgentSandboxProps {
  language: LanguageMode;
  selectedAgentId?: string;
  onOpenAudit: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-purple-400" />,
  Send: <Send className="w-6 h-6 text-indigo-400" />,
  Award: <Award className="w-6 h-6 text-amber-400" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-emerald-400" />,
  PenTool: <PenTool className="w-6 h-6 text-pink-400" />,
  Video: <Video className="w-6 h-6 text-rose-400" />,
  Headphones: <Headphones className="w-6 h-6 text-sky-400" />,
  Search: <Search className="w-6 h-6 text-teal-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  CreditCard: <CreditCard className="w-6 h-6 text-purple-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-orange-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-blue-400" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-emerald-400" />,
  Clock: <Clock className="w-6 h-6 text-sky-400" />
};

export const AgentSandbox: React.FC<AgentSandboxProps> = ({
  language,
  selectedAgentId,
  onOpenAudit,
}) => {
  const [activePhase, setActivePhase] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalAgent, setActiveModalAgent] = useState<AgentSpec | null>(
    selectedAgentId ? ALL_14_AGENTS.find((a) => a.id === selectedAgentId) || null : null
  );
  const [isAssemblyModalOpen, setIsAssemblyModalOpen] = useState<boolean>(false);

  // Playground state
  const [sandboxPrompt, setSandboxPrompt] = useState<string>('');
  const [sandboxLanguage, setSandboxLanguage] = useState<LanguageMode>(language);
  const [businessContext, setBusinessContext] = useState<string>('B2B Growth Enterprise / E-commerce');
  const [agentOutput, setAgentOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [promptCopied, setPromptCopied] = useState<boolean>(false);

  // Sync modal when selectedAgentId changes externally
  React.useEffect(() => {
    if (selectedAgentId) {
      const found = ALL_14_AGENTS.find((a) => a.id === selectedAgentId);
      if (found) {
        handleOpenModal(found);
      }
    }
  }, [selectedAgentId]);

  const handleOpenModal = (agent: AgentSpec) => {
    setActiveModalAgent(agent);
    const defaultPrompt = agent.samplePrompts[0]?.prompt || 'Demonstrate your core capability.';
    setSandboxPrompt(defaultPrompt);
    // Set default sample output matching language
    if (language === 'ur_nastaliq') {
      setAgentOutput(agent.defaultSampleOutput.ur_nastaliq);
    } else if (language === 'ur_roman') {
      setAgentOutput(agent.defaultSampleOutput.ur_roman);
    } else {
      setAgentOutput(agent.defaultSampleOutput.en);
    }
  };

  const handleRunAgent = async () => {
    if (!activeModalAgent || !sandboxPrompt.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/agent/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId: activeModalAgent.id,
          agentName: activeModalAgent.name,
          prompt: sandboxPrompt,
          language: sandboxLanguage,
          businessContext,
          systemPrompt: activeModalAgent.systemPrompt
        }),
      });

      const data = await res.json();
      if (data.output) {
        setAgentOutput(data.output);
      } else {
        setAgentOutput(activeModalAgent.defaultSampleOutput.en);
      }
    } catch (err) {
      console.error(err);
      setAgentOutput(activeModalAgent.defaultSampleOutput.en);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(agentOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySystemPrompt = (promptText?: string) => {
    if (!promptText) return;
    navigator.clipboard.writeText(promptText);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2000);
  };

  // Filter agents
  const filteredAgents = ALL_14_AGENTS.filter((agent) => {
    const matchesPhase = activePhase === 'all' || agent.n8nPhase === activePhase;
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (agent.systemPrompt && agent.systemPrompt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      agent.nameUrdu.includes(searchQuery);
    return matchesPhase && matchesSearch;
  });

  return (
    <section id="agents" className="py-20 md:py-28 relative border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-[#333333] text-[#A78BFA] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>NexaBoost 14-Agent Assembly Line</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              '۱۴ مکمل AI ایجنٹس — نِکسا بوسٹ خودکار اسمبلی لائن'
            ) : (
              <>
                The 14 AI Agents — <span className="italic text-[#A78BFA]">Base44 & n8n Assembly Line</span>
              </>
            )}
          </h2>
          
          <p className="text-[#A0A0A0] text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'یہ مکمل اسمبلی لائن ہے: اوپر والا ایجنٹ نیچے والے کو ڈیٹا دیتا ہے اور ماسٹر سی آر ایم شیٹ کو اپ ڈیٹ کرتا ہے۔'
            ) : (
              'A connected 4-phase assembly line where upstream agents hand off verified data to downstream agents via the Google Sheet "NexaBoost Master CRM".'
            )}
          </p>

          {/* Quick Assembly Prompts Modal Trigger Button */}
          <div className="pt-2">
            <button
              onClick={() => setIsAssemblyModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#A78BFA] hover:bg-[#C4B5FD] text-black font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-lg shadow-[#A78BFA]/20 cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Copy All 14 System Prompts for n8n / Base44</span>
            </button>
          </div>
        </div>

        {/* Phase Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Phase Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0A0A0A] border border-[#222222] rounded-xl overflow-x-auto max-w-full font-mono text-xs">
            <button
              onClick={() => setActivePhase('all')}
              className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activePhase === 'all'
                  ? 'bg-[#A78BFA] text-black font-bold shadow-sm'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              ALL 14 AGENTS
            </button>
            <button
              onClick={() => setActivePhase('PHASE 1: LEAD + DATA')}
              className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activePhase === 'PHASE 1: LEAD + DATA'
                  ? 'bg-[#A78BFA] text-black font-bold shadow-sm'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              PHASE 1: LEAD + DATA (4)
            </button>
            <button
              onClick={() => setActivePhase('PHASE 2: OUTREACH + SALES')}
              className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activePhase === 'PHASE 2: OUTREACH + SALES'
                  ? 'bg-[#A78BFA] text-black font-bold shadow-sm'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              PHASE 2: OUTREACH + SALES (4)
            </button>
            <button
              onClick={() => setActivePhase('PHASE 3: CONTENT + MARKETING')}
              className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activePhase === 'PHASE 3: CONTENT + MARKETING'
                  ? 'bg-[#A78BFA] text-black font-bold shadow-sm'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              PHASE 3: CONTENT + MARKETING (4)
            </button>
            <button
              onClick={() => setActivePhase('PHASE 4: MANAGEMENT')}
              className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activePhase === 'PHASE 4: MANAGEMENT'
                  ? 'bg-[#A78BFA] text-black font-bold shadow-sm'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              PHASE 4: MANAGEMENT (2)
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={language === 'ur_nastaliq' ? 'ایجنٹ یا پرامپٹ سرچ...' : 'Search 14 agents & prompts...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#0A0A0A] border border-[#222222] rounded-xl text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#A78BFA] transition-colors"
            />
          </div>

        </div>

        {/* 14 Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              id={`agent-card-${agent.id}`}
              className="bg-[#0A0A0A] hover:bg-[#111111] border border-[#222222] hover:border-[#A78BFA]/50 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Card Header: Icon, Badge & Department */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#141414] border border-[#222222] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {ICON_MAP[agent.iconName] || <Bot className="w-5 h-5 text-[#A78BFA]" />}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-mono uppercase font-semibold bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/20">
                    {agent.badge}
                  </span>
                </div>

                {/* Agent Number & Name */}
                <div className="mb-2">
                  <div className="text-[10px] font-mono text-[#666666] uppercase tracking-widest mb-1">
                    #{agent.assemblyOrder || 1} • {agent.n8nPhase || agent.departmentLabel}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#A78BFA] transition-colors font-mono">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-[#999999] mt-1 line-clamp-2">
                    {language === 'ur_nastaliq' ? agent.taglineUrdu : agent.tagline}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="mt-4 pt-4 border-t border-[#1a1a1a] space-y-2">
                  {(language === 'ur_nastaliq' ? agent.capabilitiesUrdu : agent.capabilities)
                    .slice(0, 2)
                    .map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-[#cccccc]">
                        <Check className="w-3.5 h-3.5 text-[#A78BFA] mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{cap}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Card Footer: Metrics & Launch Sandbox CTA */}
              <div className="mt-6 pt-4 border-t border-[#1a1a1a] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#777777]">
                  <span>{agent.metrics[0]?.label}:</span>
                  <span className="font-bold text-[#E0E0E0]">{agent.metrics[0]?.value}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleOpenModal(agent)}
                    id={`test-agent-${agent.id}-btn`}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#141414] hover:bg-[#A78BFA] text-[#E0E0E0] hover:text-black border border-[#222222] hover:border-[#A78BFA] text-[11px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Test AI</span>
                  </button>
                  <button
                    onClick={() => {
                      if (agent.systemPrompt) {
                        navigator.clipboard.writeText(agent.systemPrompt);
                        alert(`Copied prompt for ${agent.name} to clipboard!`);
                      }
                    }}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#111111] hover:bg-[#1f1f1f] text-[#A78BFA] border border-[#262626] text-[11px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy Prompt</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0A0A0A] border border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-normal text-white font-serif">
              Ready to automate your Pakistan business pipeline in 7 Days?
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] font-mono">
              Complete AI Lead Gen + WhatsApp CRM Package: Rs. 50,000 / month with 1,000 verified leads and full setup.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923462231606?text=Salam%20Ali%20Mola!%20Mujhe%2014%20Agents%20Assembly%20Line%20setup%20karwana%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs uppercase font-mono tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Ali Mola (+92 346 2231606)</span>
            </a>
            <button
              onClick={onOpenAudit}
              className="px-5 py-3 rounded-lg bg-[#A78BFA] hover:bg-[#C4B5FD] text-black font-bold text-xs uppercase font-mono tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free AI Audit</span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Sandbox Playground Modal */}
      {activeModalAgent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#222222] flex items-center justify-between bg-[#050505]">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#222222] flex items-center justify-center">
                  {ICON_MAP[activeModalAgent.iconName] || <Bot className="w-5 h-5 text-[#A78BFA]" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-normal text-white font-mono">
                      {activeModalAgent.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/20">
                      {activeModalAgent.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#888888] mt-0.5">
                    {activeModalAgent.n8nPhase} • Node #{activeModalAgent.assemblyOrder}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopySystemPrompt(activeModalAgent.systemPrompt)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#A78BFA] text-[#CCCCCC] hover:text-black border border-[#222222] text-xs font-mono transition-colors cursor-pointer"
                >
                  {promptCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{promptCopied ? 'Copied Prompt!' : 'Copy Base44/n8n Prompt'}</span>
                </button>
                <button
                  onClick={() => setActiveModalAgent(null)}
                  className="p-2 rounded-lg bg-[#141414] hover:bg-[#222222] text-[#888888] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[75vh] overflow-y-auto">
              
              {/* Left Column: Controls & Prompt Input (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Official System Prompt Box */}
                {activeModalAgent.systemPrompt && (
                  <div className="p-3 bg-[#060606] border border-[#1F1F1F] rounded-lg space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#888888] uppercase">
                      <span>Exact Base44 / n8n System Prompt:</span>
                      <button
                        onClick={() => handleCopySystemPrompt(activeModalAgent.systemPrompt)}
                        className="text-[#A78BFA] hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </button>
                    </div>
                    <pre className="text-[11px] font-mono text-emerald-300 leading-snug overflow-x-auto whitespace-pre-wrap max-h-28 overflow-y-auto">
                      {activeModalAgent.systemPrompt}
                    </pre>
                  </div>
                )}

                {/* Language Output Selector */}
                <div>
                  <label className="block text-xs font-mono text-[#888888] mb-1.5 uppercase tracking-wider">
                    Target Output Language:
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-[#111111] p-1 rounded-lg border border-[#222222] text-xs font-mono">
                    <button
                      onClick={() => setSandboxLanguage('en')}
                      className={`py-1.5 rounded transition-all ${
                        sandboxLanguage === 'en'
                          ? 'bg-[#A78BFA] text-black font-bold'
                          : 'text-[#888888] hover:text-white'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setSandboxLanguage('ur_nastaliq')}
                      className={`py-1.5 rounded transition-all ${
                        sandboxLanguage === 'ur_nastaliq'
                          ? 'bg-[#A78BFA] text-black font-bold'
                          : 'text-[#888888] hover:text-white'
                      }`}
                    >
                      اردو
                    </button>
                    <button
                      onClick={() => setSandboxLanguage('ur_roman')}
                      className={`py-1.5 rounded transition-all ${
                        sandboxLanguage === 'ur_roman'
                          ? 'bg-[#A78BFA] text-black font-bold'
                          : 'text-[#888888] hover:text-white'
                      }`}
                    >
                      Roman
                    </button>
                  </div>
                </div>

                {/* Instant Prompt Presets */}
                <div>
                  <label className="block text-xs font-mono text-[#888888] mb-1.5 uppercase tracking-wider">
                    One-Click Task Templates:
                  </label>
                  <div className="space-y-1.5">
                    {activeModalAgent.samplePrompts.map((preset, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (sandboxLanguage === 'ur_nastaliq') {
                            setSandboxPrompt(preset.promptUrdu);
                          } else {
                            setSandboxPrompt(preset.prompt);
                          }
                        }}
                        className="w-full text-left p-2.5 rounded-lg bg-[#111111] hover:bg-[#181818] border border-[#222222] text-xs text-[#CCCCCC] transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <span className="font-medium group-hover:text-[#A78BFA] line-clamp-1">
                          {sandboxLanguage === 'ur_nastaliq' ? preset.titleUrdu : preset.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#A78BFA] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Prompt Textarea */}
                <div>
                  <label className="block text-xs font-mono text-[#888888] mb-1.5 uppercase tracking-wider">
                    Agent Instruction / Test Task:
                  </label>
                  <textarea
                    rows={3}
                    value={sandboxPrompt}
                    onChange={(e) => setSandboxPrompt(e.target.value)}
                    placeholder="Enter what you want this agent to execute..."
                    className="w-full p-3 bg-[#050505] border border-[#222222] rounded-lg text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#A78BFA] transition-colors resize-none font-sans"
                  />
                </div>

                {/* Run Button */}
                <button
                  onClick={handleRunAgent}
                  disabled={isLoading || !sandboxPrompt.trim()}
                  className="w-full py-3 px-4 rounded-lg bg-[#A78BFA] hover:bg-[#C4B5FD] disabled:opacity-50 text-black font-bold text-xs uppercase font-mono tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#A78BFA]/20 transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin text-black" />
                      <span>Executing Inference...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-black" />
                      <span>Run Live Agent Inference</span>
                    </>
                  )}
                </button>

              </div>

              {/* Right Column: Live Output Display (7 cols) */}
              <div className="lg:col-span-7 flex flex-col bg-[#050505] border border-[#222222] rounded-xl overflow-hidden">
                
                {/* Output Top Bar */}
                <div className="p-3 bg-[#0A0A0A] border-b border-[#222222] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">
                      Live Output Stream (Target: Google Sheet "NexaBoost Master CRM")
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#141414] hover:bg-[#222222] text-[11px] font-mono text-[#888888] hover:text-white transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#25D366]" />
                          <span className="text-[#25D366]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Output</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Output Content Area */}
                <div className="p-4 sm:p-5 flex-1 min-h-[280px] overflow-y-auto text-xs sm:text-sm text-[#D0D0D0] font-sans leading-relaxed whitespace-pre-wrap">
                  {agentOutput}
                </div>

                {/* Output Footer Note */}
                <div className="p-3 bg-[#0A0A0A] border-t border-[#222222] text-[10px] font-mono text-[#666666] flex items-center justify-between">
                  <span>MODEL: GEMINI-3.7-FLASH</span>
                  <span>ASSEMBLY NODE #{activeModalAgent.assemblyOrder} OF 14</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* Assembly Pipeline Modal */}
      <AssemblyPipelineModal
        language={language}
        isOpen={isAssemblyModalOpen}
        onClose={() => setIsAssemblyModalOpen(false)}
      />

    </section>
  );
};
