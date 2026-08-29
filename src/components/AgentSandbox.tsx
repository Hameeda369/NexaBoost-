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
  FileSpreadsheet
} from 'lucide-react';
import { ALL_14_AGENTS } from '../data/agentsData';
import { AGENT_SKILLS_MAP } from '../data/agentSkills';
import { AgentSpec, AgentSkill, LanguageMode } from '../types';

interface AgentSandboxProps {
  language: LanguageMode;
  selectedAgentId?: string;
  onOpenAudit: () => void;
  onOpenSheets: () => void;
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
  MessageSquare: <MessageSquare className="w-6 h-6 text-emerald-400" />
};

export const AgentSandbox: React.FC<AgentSandboxProps> = ({
  language,
  selectedAgentId,
  onOpenAudit,
  onOpenSheets,
}) => {
  const [activeDepartment, setActiveDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalAgent, setActiveModalAgent] = useState<AgentSpec | null>(
    selectedAgentId ? ALL_14_AGENTS.find((a) => a.id === selectedAgentId) || null : null
  );
  const [selectedSkill, setSelectedSkill] = useState<AgentSkill | null>(null);
  const [skillParamValues, setSkillParamValues] = useState<Record<string, any>>({});

  // Playground state
  const [sandboxPrompt, setSandboxPrompt] = useState<string>('');
  const [sandboxLanguage, setSandboxLanguage] = useState<LanguageMode>(language);
  const [businessContext, setBusinessContext] = useState<string>('B2B Growth Enterprise / E-commerce');
  const [agentOutput, setAgentOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync modal when selectedAgentId changes externally
  React.useEffect(() => {
    if (selectedAgentId) {
      const found = ALL_14_AGENTS.find((a) => a.id === selectedAgentId);
      if (found) {
        handleOpenModal(found);
      }
    }
  }, [selectedAgentId]);

  const handleOpenModal = (agent: AgentSpec, initialSkillId?: string) => {
    setActiveModalAgent(agent);
    const agentSkills = AGENT_SKILLS_MAP[agent.id] || [];
    const skillToSelect = initialSkillId
      ? agentSkills.find((s) => s.id === initialSkillId) || agentSkills[0] || null
      : agentSkills[0] || null;

    setSelectedSkill(skillToSelect);

    // Initialize parameter values
    const initParams: Record<string, any> = {};
    if (skillToSelect?.parameters) {
      skillToSelect.parameters.forEach((param) => {
        initParams[param.name] = param.defaultValue || '';
      });
    }
    setSkillParamValues(initParams);

    if (skillToSelect) {
      if (language === 'ur_nastaliq') {
        setSandboxPrompt(skillToSelect.defaultPromptUrdu || skillToSelect.defaultPrompt);
        if (skillToSelect.sampleExecutionResult) {
          setAgentOutput(skillToSelect.sampleExecutionResult.ur_nastaliq);
        } else {
          setAgentOutput(agent.defaultSampleOutput.ur_nastaliq);
        }
      } else if (language === 'ur_roman') {
        setSandboxPrompt(skillToSelect.defaultPrompt);
        if (skillToSelect.sampleExecutionResult) {
          setAgentOutput(skillToSelect.sampleExecutionResult.ur_roman);
        } else {
          setAgentOutput(agent.defaultSampleOutput.ur_roman);
        }
      } else {
        setSandboxPrompt(skillToSelect.defaultPrompt);
        if (skillToSelect.sampleExecutionResult) {
          setAgentOutput(skillToSelect.sampleExecutionResult.en);
        } else {
          setAgentOutput(agent.defaultSampleOutput.en);
        }
      }
    } else {
      const defaultPrompt = agent.samplePrompts[0]?.prompt || 'Demonstrate your core capability.';
      setSandboxPrompt(defaultPrompt);
      if (language === 'ur_nastaliq') {
        setAgentOutput(agent.defaultSampleOutput.ur_nastaliq);
      } else if (language === 'ur_roman') {
        setAgentOutput(agent.defaultSampleOutput.ur_roman);
      } else {
        setAgentOutput(agent.defaultSampleOutput.en);
      }
    }
  };

  const handleSelectSkill = (skill: AgentSkill) => {
    setSelectedSkill(skill);
    const initParams: Record<string, any> = {};
    if (skill.parameters) {
      skill.parameters.forEach((param) => {
        initParams[param.name] = param.defaultValue || '';
      });
    }
    setSkillParamValues(initParams);

    if (sandboxLanguage === 'ur_nastaliq') {
      setSandboxPrompt(skill.defaultPromptUrdu || skill.defaultPrompt);
      if (skill.sampleExecutionResult) {
        setAgentOutput(skill.sampleExecutionResult.ur_nastaliq);
      }
    } else if (sandboxLanguage === 'ur_roman') {
      setSandboxPrompt(skill.defaultPrompt);
      if (skill.sampleExecutionResult) {
        setAgentOutput(skill.sampleExecutionResult.ur_roman);
      }
    } else {
      setSandboxPrompt(skill.defaultPrompt);
      if (skill.sampleExecutionResult) {
        setAgentOutput(skill.sampleExecutionResult.en);
      }
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
          skillId: selectedSkill?.id,
          skillName: selectedSkill?.name,
          skillParameters: skillParamValues,
          prompt: sandboxPrompt,
          language: sandboxLanguage,
          businessContext,
        }),
      });

      const data = await res.json();
      if (data.output) {
        setAgentOutput(data.output);
      } else if (selectedSkill?.sampleExecutionResult) {
        if (sandboxLanguage === 'ur_nastaliq') {
          setAgentOutput(selectedSkill.sampleExecutionResult.ur_nastaliq);
        } else if (sandboxLanguage === 'ur_roman') {
          setAgentOutput(selectedSkill.sampleExecutionResult.ur_roman);
        } else {
          setAgentOutput(selectedSkill.sampleExecutionResult.en);
        }
      } else {
        setAgentOutput(activeModalAgent.defaultSampleOutput.en);
      }
    } catch (err) {
      console.error(err);
      if (selectedSkill?.sampleExecutionResult) {
        if (sandboxLanguage === 'ur_nastaliq') {
          setAgentOutput(selectedSkill.sampleExecutionResult.ur_nastaliq);
        } else if (sandboxLanguage === 'ur_roman') {
          setAgentOutput(selectedSkill.sampleExecutionResult.ur_roman);
        } else {
          setAgentOutput(selectedSkill.sampleExecutionResult.en);
        }
      } else {
        setAgentOutput(activeModalAgent.defaultSampleOutput.en);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(agentOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter agents
  const filteredAgents = ALL_14_AGENTS.filter((agent) => {
    const matchesDept = activeDepartment === 'all' || agent.department === activeDepartment;
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.nameUrdu.includes(searchQuery);
    return matchesDept && matchesSearch;
  });

  return (
    <section id="agents" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ur_nastaliq' ? 'مکمل ۱۴ ایجنٹ سسٹم' : 'The Complete Fleet'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              '۱۴ خودمختار AI ایجنٹس — آپ کی ۲۴/۷ ٹیم'
            ) : (
              <>
                The 14 AI Agents — <span className="text-purple-400">Your 24/7 Team</span>
              </>
            )}
          </h2>
          
          <p className="text-neutral-400 text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'ہر ایجنٹ اپنے شعبے میں ماہر ہے اور دیگر ایجنٹس کے ساتھ مل کر آپ کے بزنس کے تمام کام خودکار انداز میں سرانجام دیتا ہے۔'
            ) : (
              'Each agent is trained on specialized domain workflows, fully integrated into your WhatsApp, CRM, and sales pipelines.'
            )}
          </p>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Department Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveDepartment('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeDepartment === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {language === 'ur_nastaliq' ? 'تمام ۱۴ ایجنٹس (14)' : 'All 14 Agents'}
            </button>
            <button
              onClick={() => setActiveDepartment('sales')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeDepartment === 'sales'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {language === 'ur_nastaliq' ? 'سیلز و پائپ لائن (4)' : 'Sales & Pipeline (4)'}
            </button>
            <button
              onClick={() => setActiveDepartment('marketing')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeDepartment === 'marketing'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {language === 'ur_nastaliq' ? 'مارکیٹنگ و کنٹنٹ (5)' : 'Marketing & Creative (5)'}
            </button>
            <button
              onClick={() => setActiveDepartment('operations')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeDepartment === 'operations'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {language === 'ur_nastaliq' ? 'کسٹمر کیئر و آپریشنز (3)' : 'Operations & Care (3)'}
            </button>
            <button
              onClick={() => setActiveDepartment('strategy')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeDepartment === 'strategy'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {language === 'ur_nastaliq' ? 'اسٹریٹجی و تجزیہ (2)' : 'Strategy & Intelligence (2)'}
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={language === 'ur_nastaliq' ? 'ایجنٹ تلاش کریں...' : 'Search agent...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

        </div>

        {/* 14 Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent, index) => (
            <div
              key={agent.id}
              id={`agent-card-${agent.id}`}
              className="bg-[#111116] hover:bg-[#15151C] border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-lg hover:shadow-purple-950/20"
            >
              <div>
                {/* Card Header: Icon, Badge & Department */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {ICON_MAP[agent.iconName] || <Bot className="w-6 h-6 text-purple-400" />}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {agent.badge}
                  </span>
                </div>

                {/* Agent Number & Name */}
                <div className="mb-2">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    Agent #{index + 1} • {agent.departmentLabel}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {language === 'ur_nastaliq' ? agent.nameUrdu : agent.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {language === 'ur_nastaliq' ? agent.taglineUrdu : agent.tagline}
                  </p>
                </div>

                {/* 4 Distinct Skills Pills */}
                <div className="mt-3.5 pt-3 border-t border-white/5 space-y-1.5">
                  <div className="text-[10px] font-semibold text-purple-400 uppercase tracking-wider">
                    {language === 'ur_nastaliq' ? '۴ مخصوص مہارتیں (Skills):' : '4 Specialized Skills:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(AGENT_SKILLS_MAP[agent.id] || []).map((skill) => (
                      <button
                        key={skill.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(agent, skill.id);
                        }}
                        className="px-2 py-1 rounded-md bg-white/[0.04] hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-[11px] text-neutral-300 hover:text-white transition-all text-left flex items-center gap-1 cursor-pointer"
                        title={language === 'ur_nastaliq' ? skill.descriptionUrdu : skill.description}
                      >
                        <Zap className="w-2.5 h-2.5 text-purple-400 shrink-0" />
                        <span className="line-clamp-1">{language === 'ur_nastaliq' ? skill.nameUrdu : skill.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="mt-3 pt-3 border-t border-white/5 space-y-1.5">
                  {(language === 'ur_nastaliq' ? agent.capabilitiesUrdu : agent.capabilities)
                    .slice(0, 2)
                    .map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-400">
                        <Check className="w-3 h-3 text-purple-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Card Footer: Metrics & Launch Sandbox CTA */}
              <div className="mt-5 pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-neutral-400">
                  <span>{agent.metrics[0]?.label}:</span>
                  <span className="font-bold text-white">{agent.metrics[0]?.value}</span>
                </div>

                <button
                  onClick={() => handleOpenModal(agent)}
                  id={`test-agent-${agent.id}-btn`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold transition-all cursor-pointer group-hover:border-purple-400"
                >
                  <Play className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
                  <span>{language === 'ur_nastaliq' ? 'مہارتیں اور لائیو ٹیسٹ' : 'Explore Skills & Test'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-neutral-900 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
              {language === 'ur_nastaliq'
                ? 'کیا آپ کے پاس کوئی خاص کاروباری ضرورت ہے؟'
                : 'Need a custom AI agent pod tailored to your exact workflows?'}
            </h3>
            <p className="text-sm text-neutral-300">
              {language === 'ur_nastaliq'
                ? 'ہم آپ کی پروڈکٹس اور کسٹمرز کے مطابق AI کو ۲۴ گھنٹے میں ٹرین کر کے دیتے ہیں۔'
                : 'We connect with your CRM, Shopify catalog, and WhatsApp Business API within 48-72 hours.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923462231606?text=Hi%20NexaBoost%20team!%20I%20want%20to%20discuss%20a%20custom%20AI%20Agent%20deployment."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs sm:text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk to Systems Architect</span>
            </a>
            <button
              onClick={onOpenAudit}
              className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free AI Audit</span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Sandbox Playground Modal / Drawer */}
      {activeModalAgent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#0F0F14] border border-purple-500/30 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  {ICON_MAP[activeModalAgent.iconName] || <Bot className="w-6 h-6 text-purple-400" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white font-serif">
                      {activeModalAgent.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {activeModalAgent.badge}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {activeModalAgent.title} • {activeModalAgent.departmentLabel}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModalAgent(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[80vh] overflow-y-auto">
              
              {/* Left Column: Skills Selector, Parameters & Prompt (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* 1. Skills Matrix Selector */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-purple-400" />
                      <span>{sandboxLanguage === 'ur_nastaliq' ? 'ایجنٹ کی مخصوص مہارت منتخب کریں:' : 'Select Agent Skill:'}</span>
                    </label>
                    <span className="text-[10px] text-neutral-400">4 Skills Available</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {(AGENT_SKILLS_MAP[activeModalAgent.id] || []).map((skill) => {
                      const isSelected = selectedSkill?.id === skill.id;
                      return (
                        <button
                          key={skill.id}
                          onClick={() => handleSelectSkill(skill)}
                          className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-purple-600/20 border-purple-500 text-white shadow-md shadow-purple-950/40'
                              : 'bg-white/5 hover:bg-white/10 border-white/10 text-neutral-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="font-semibold text-xs text-white">
                              {sandboxLanguage === 'ur_nastaliq' ? skill.nameUrdu : skill.name}
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono shrink-0">
                              {skill.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                            {sandboxLanguage === 'ur_nastaliq' ? skill.descriptionUrdu : skill.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Interactive Skill Parameters (if any) */}
                {selectedSkill && selectedSkill.parameters && selectedSkill.parameters.length > 0 && (
                  <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl space-y-2.5">
                    <label className="text-[11px] font-semibold text-neutral-300 flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3 h-3 text-purple-400" />
                      <span>{sandboxLanguage === 'ur_nastaliq' ? 'مہارت کے متغیرات (Parameters):' : 'Skill Parameters:'}</span>
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedSkill.parameters.map((param) => (
                        <div key={param.name}>
                          <span className="block text-[10px] text-neutral-400 mb-1">
                            {sandboxLanguage === 'ur_nastaliq' ? param.labelUrdu : param.label}
                          </span>
                          {param.type === 'select' ? (
                            <select
                              value={skillParamValues[param.name] || ''}
                              onChange={(e) =>
                                setSkillParamValues((prev) => ({
                                  ...prev,
                                  [param.name]: e.target.value,
                                }))
                              }
                              className="w-full p-2 bg-black/50 border border-white/15 rounded-lg text-xs text-white focus:border-purple-500"
                            >
                              {(param.options || []).map((opt) => (
                                <option key={opt.value} value={opt.value} className="bg-[#111116] text-white">
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={param.type === 'number' ? 'number' : 'text'}
                              value={skillParamValues[param.name] || ''}
                              onChange={(e) =>
                                setSkillParamValues((prev) => ({
                                  ...prev,
                                  [param.name]: e.target.value,
                                }))
                              }
                              placeholder={param.placeholder || ''}
                              className="w-full p-2 bg-black/50 border border-white/15 rounded-lg text-xs text-white placeholder-neutral-500 focus:border-purple-500"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Language Output Selector */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Target Output Language:
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
                    <button
                      onClick={() => setSandboxLanguage('en')}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        sandboxLanguage === 'en'
                          ? 'bg-purple-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setSandboxLanguage('ur_nastaliq')}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        sandboxLanguage === 'ur_nastaliq'
                          ? 'bg-purple-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      اردو (Nastaliq)
                    </button>
                    <button
                      onClick={() => setSandboxLanguage('ur_roman')}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        sandboxLanguage === 'ur_roman'
                          ? 'bg-purple-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Roman Urdu
                    </button>
                  </div>
                </div>

                {/* 4. Quick Template Presets for this Skill */}
                {selectedSkill && selectedSkill.quickTemplates && selectedSkill.quickTemplates.length > 0 && (
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      {sandboxLanguage === 'ur_nastaliq' ? 'فوری ٹیمپلیٹس:' : 'Skill Quick Templates:'}
                    </label>
                    <div className="space-y-1.5">
                      {selectedSkill.quickTemplates.map((preset, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (sandboxLanguage === 'ur_nastaliq') {
                              setSandboxPrompt(preset.promptUrdu || preset.prompt);
                            } else {
                              setSandboxPrompt(preset.prompt);
                            }
                          }}
                          className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span className="font-medium group-hover:text-purple-300 line-clamp-1">
                            {sandboxLanguage === 'ur_nastaliq' ? preset.titleUrdu : preset.title}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-purple-400 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Custom Prompt Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    {sandboxLanguage === 'ur_nastaliq' ? 'ایجنٹ کی ہدایات / ٹاسک:' : 'Execution Task / Prompt:'}
                  </label>
                  <textarea
                    rows={3}
                    value={sandboxPrompt}
                    onChange={(e) => setSandboxPrompt(e.target.value)}
                    placeholder={selectedSkill?.inputPlaceholder || "Enter what you want this agent skill to execute..."}
                    className="w-full p-3 bg-black/40 border border-white/15 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                {/* 6. Run Button */}
                <button
                  onClick={handleRunAgent}
                  disabled={isLoading || !sandboxPrompt.trim()}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 disabled:opacity-50 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin text-black" />
                      <span>Executing {selectedSkill?.name || activeModalAgent.name}...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-black" />
                      <span>Execute Skill: {selectedSkill ? (sandboxLanguage === 'ur_nastaliq' ? selectedSkill.nameUrdu : selectedSkill.name) : activeModalAgent.name}</span>
                    </>
                  )}
                </button>

                {/* Direct WhatsApp Deployment link */}
                <a
                  href={`https://wa.me/923462231606?text=${encodeURIComponent(
                    `Hi NexaBoost team! I tested the "${activeModalAgent.name}" skill "${selectedSkill?.name || 'All Skills'}" in your sandbox and want to deploy it for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Deploy {activeModalAgent.name} on WhatsApp</span>
                </a>

              </div>

              {/* Right Column: Live Output Display (7 cols) */}
              <div className="lg:col-span-7 flex flex-col bg-black/50 border border-white/10 rounded-2xl overflow-hidden">
                
                {/* Output Top Bar */}
                <div className="p-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span className="text-xs font-semibold text-neutral-300">
                      Live Output Stream
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      id="export-sandbox-to-sheets-btn"
                      onClick={onOpenSheets}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-[11px] text-emerald-300 hover:text-emerald-200 transition-colors cursor-pointer"
                      title="Sync deliverable to connected Google Spreadsheet"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Sync to Google Sheets</span>
                    </button>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
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
                <div className="p-4 sm:p-5 flex-1 min-h-[280px] overflow-y-auto text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed whitespace-pre-wrap">
                  {agentOutput}
                </div>

                {/* Output Footer Note */}
                <div className="p-3 bg-white/[0.02] border-t border-white/5 text-[11px] text-neutral-500 flex items-center justify-between">
                  <span>Model: gemini-3.7-flash (Server-Side)</span>
                  <span>Latency: ~1.2s • 100% Autonomous</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
