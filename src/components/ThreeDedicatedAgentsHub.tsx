import React, { useState } from 'react';
import {
  Bot,
  Headphones,
  Layout,
  Video,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  MessageCircle,
  Send,
  Sparkles,
  Zap,
  Clock,
  DollarSign,
  AlertTriangle,
  ArrowRight,
  Layers,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import {
  THREE_CORE_AGENTS,
  COMMON_RULES,
  DedicatedAgent,
  simulateAgentResponse
} from '../data/threeCoreAgentsData';
import { LanguageMode } from '../types';
import { FourDInteractiveCard } from './FourDInteractiveCard';

interface ThreeDedicatedAgentsHubProps {
  language: LanguageMode;
  onOpenAudit: () => void;
}

export const ThreeDedicatedAgentsHub: React.FC<ThreeDedicatedAgentsHubProps> = ({
  language,
  onOpenAudit
}) => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>('agent-1-chatbot-voice');
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'scripts' | 'rules'>('overview');
  
  // Simulator state
  const [simulatorInput, setSimulatorInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'agent'; text: string; time: string }[]>([
    {
      sender: 'agent',
      text: 'Salam sir! Hum NexaBoost ke AI Chatbot aur Voice AI Agent ki service dete hain. Hamara Chatbot WhatsApp aur Website par <5 second mein 24/7 jawab deta hai, aur Voice Agent Urdu mein direct call uthata aur booking karta hai. Setup 48-72 hours mein live ho jata hai. Price aur custom package ke liye abhi Free Audit book karein WhatsApp +92 346 2231606 par.',
      time: 'Just now'
    }
  ]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentAgent = THREE_CORE_AGENTS.find((a) => a.id === selectedAgentId) || THREE_CORE_AGENTS[0];

  const handleSelectAgent = (agent: DedicatedAgent) => {
    setSelectedAgentId(agent.id);
    const initialGreeting = language === 'ur_nastaliq'
      ? agent.scriptTemplates[0].scriptUrdu
      : language === 'en'
      ? agent.scriptTemplates[0].scriptEn
      : agent.scriptTemplates[0].scriptRoman;

    setChatHistory([
      {
        sender: 'agent',
        text: initialGreeting,
        time: 'Just now'
      }
    ]);
  };

  const handleSendMessage = (customPrompt?: string) => {
    const text = customPrompt || simulatorInput;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const agentReplyText = simulateAgentResponse(currentAgent.id, text, language);
    const agentMsg = {
      sender: 'agent' as const,
      text: agentReplyText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory((prev) => [...prev, userMsg, agentMsg]);
    if (!customPrompt) setSimulatorInput('');
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="three-agents-hub" className="py-24 bg-[#09090E] relative overflow-hidden border-b border-purple-500/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/15 via-amber-500/15 to-emerald-500/15 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4 shadow-lg shadow-purple-900/20">
            <Bot className="w-4 h-4 text-amber-400" />
            <span>
              {language === 'ur_nastaliq'
                ? '۳ اسپیشلائزڈ ڈیڈیکیٹڈ ایجنٹس سسٹم'
                : '3 Dedicated Core AI Agents System'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 font-serif">
            {language === 'ur_nastaliq' ? (
              <>
                صرف ۳ ایجنٹس — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-300 to-emerald-400">ٹو دی پوائنٹ سیلز</span>، کوئی فالتو بات نہیں
              </>
            ) : (
              <>
                The 3 Dedicated Agents: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-300 to-emerald-400">Point-to-Point Sales</span>, Zero Fluff
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            {language === 'ur_nastaliq'
              ? 'ہر ایجنٹ صرف اپنی مخصوص سروس بیچے گا، فکسڈ پرائس اور ڈیلیوری کا دورانیہ بتائے گا، اور کسی دوسری سروس کے سوال پر سیدھا انکار کر کے فری آڈٹ پر بھیجے گا۔'
              : 'Each agent strictly sells its own specialized service, states price model & delivery duration, and strictly rejects out-of-scope queries directing prospects to WhatsApp +92 346 2231606.'}
          </p>
        </div>

        {/* 3 Agents Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {THREE_CORE_AGENTS.map((agent) => {
            const isSelected = selectedAgentId === agent.id;
            return (
              <FourDInteractiveCard
                key={agent.id}
                depthIntensity={10}
                glowColor={agent.themeColor === 'purple' ? 'rgba(168, 85, 247, 0.3)' : agent.themeColor === 'amber' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)'}
                onClick={() => handleSelectAgent(agent)}
                className={`p-6 rounded-3xl bg-[#0E0E15] border transition-all cursor-pointer shadow-xl flex flex-col justify-between ${
                  isSelected
                    ? 'border-purple-500 ring-2 ring-purple-500/30 bg-gradient-to-b from-[#141420] to-[#0D0D14]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-sm text-white">
                      #{agent.agentNumber}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                      agent.themeColor === 'purple'
                        ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                        : agent.themeColor === 'amber'
                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                        : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    }`}>
                      {agent.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${agent.accentGradient} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#0E0E15] rounded-[14px] flex items-center justify-center text-white">
                        {agent.avatarIcon === 'Headphones' && <Headphones className="w-6 h-6 text-purple-400" />}
                        {agent.avatarIcon === 'Layout' && <Layout className="w-6 h-6 text-amber-400" />}
                        {agent.avatarIcon === 'Video' && <Video className="w-6 h-6 text-emerald-400" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-serif">
                        {language === 'ur_nastaliq' ? agent.nameUrdu : agent.name}
                      </h3>
                      <span className="text-[11px] text-neutral-400 font-sans block">
                        {language === 'ur_nastaliq' ? agent.taglineUrdu : agent.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Services Box */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      {language === 'ur_nastaliq' ? 'صرف یہ سروسز بیچے گا:' : 'Strictly Sells Only:'}
                    </span>
                    {agent.services.map((srv, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <span className="font-bold text-white block">
                            {language === 'ur_nastaliq' ? srv.titleUrdu : srv.title}
                          </span>
                          <span className="text-neutral-400 text-[11px] leading-tight block">
                            {language === 'ur_nastaliq' ? srv.descriptionUrdu : srv.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Duration info */}
                  <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <DollarSign className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-neutral-400">Price:</span>
                      <span className="font-semibold text-white">
                        {agent.priceAndDuration.pricingItems[0].label} + {agent.priceAndDuration.pricingItems[1]?.label || ''}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="text-neutral-400">Duration:</span>
                      <span className="font-bold text-emerald-400">
                        {language === 'ur_nastaliq' ? agent.priceAndDuration.durationUrdu : agent.priceAndDuration.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectAgent(agent);
                      setActiveTab('simulator');
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/10"
                  >
                    <Bot className="w-3.5 h-3.5 text-purple-400" />
                    <span>{language === 'ur_nastaliq' ? 'لائیو ٹیسٹ چیٹ' : 'Test Live Chat'}</span>
                  </button>

                  <a
                    href={`https://wa.me/923462231606?text=${encodeURIComponent(agent.whatsappPrefilledMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-900/30"
                    title="Book on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                </div>
              </FourDInteractiveCard>
            );
          })}
        </div>

        {/* Interactive Workspace / Simulator & Scripts Tabs */}
        <div className="rounded-3xl bg-[#0C0C12] border border-white/10 p-5 sm:p-8 shadow-2xl">
          
          {/* Sub-Nav Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                {language === 'ur_nastaliq' ? 'منتخب ایجنٹ:' : 'Active Agent:'}
              </span>
              <span className="px-3 py-1 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {language === 'ur_nastaliq' ? currentAgent.nameUrdu : currentAgent.name}
              </span>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/60 border border-white/10">
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'simulator'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>{language === 'ur_nastaliq' ? 'لائیو چیٹ سمولیٹر' : 'Live Chat Simulator'}</span>
              </button>

              <button
                onClick={() => setActiveTab('scripts')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'scripts'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{language === 'ur_nastaliq' ? 'کاپی ایبل اسکرپٹس' : 'Ready Sales Scripts'}</span>
              </button>

              <button
                onClick={() => setActiveTab('rules')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'rules'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{language === 'ur_nastaliq' ? '۴ گولڈن رولز' : 'The 4 Golden Rules'}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Live Simulator */}
          {activeTab === 'simulator' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Chat Window (8 Cols) */}
              <div className="lg:col-span-8 flex flex-col h-[460px] bg-black/50 rounded-2xl border border-white/10 overflow-hidden">
                {/* Chat Top Header */}
                <div className="p-3.5 bg-[#12121A] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {currentAgent.name} (Live Bot)
                      </span>
                      <span className="text-[10px] text-emerald-400 block flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Strict Point-to-Point Mode Active
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectAgent(currentAgent)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-xs transition-colors flex items-center gap-1 cursor-pointer"
                    title="Reset Chat"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span className="text-[10px]">Reset</span>
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3.5 no-scrollbar">
                  {chatHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-md ${
                          msg.sender === 'user'
                            ? 'bg-purple-600 text-white rounded-tr-none'
                            : 'bg-[#181824] text-neutral-200 border border-white/10 rounded-tl-none'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <span className="text-[9px] text-neutral-400 mt-1 block text-right">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-3 bg-[#12121A] border-t border-white/10 flex items-center gap-2">
                  <input
                    type="text"
                    value={simulatorInput}
                    onChange={(e) => setSimulatorInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message (e.g. 'Price kitni hai?', 'Website bana doge?')..."
                    className="flex-1 bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-all cursor-pointer shrink-0 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Rule-Compliance Edge Case Test Buttons (4 Cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Quick Test Prompts (1-Click):</span>
                  </span>

                  {/* Button 1: Normal In-Scope Greeting */}
                  <button
                    onClick={() => handleSendMessage('Salam sir, aap kya service dete hain?')}
                    className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <span>"Aap kya service dete hain?"</span>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                  </button>

                  {/* Button 2: Price Question */}
                  <button
                    onClick={() => handleSendMessage('Price kitni hai aur kitne din mein live hoga?')}
                    className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <span>"Price aur duration kitni hai?"</span>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                  </button>

                  {/* Button 3: Out of Scope Test (Refusal Test) */}
                  <button
                    onClick={() => {
                      if (currentAgent.id === 'agent-1-chatbot-voice') {
                        handleSendMessage('Kya aap meri company ke liye Website aur TikTok Ads bhi bana doge?');
                      } else if (currentAgent.id === 'agent-2-website-app') {
                        handleSendMessage('Kya aap WhatsApp AI Chatbot aur Voice Call agent bhi set kar doge?');
                      } else {
                        handleSendMessage('Mujhe e-commerce website aur Chatbot chahiye, bana doge?');
                      }
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs text-rose-300 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <span className="flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>Test Out-of-Scope Refusal</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Direct WhatsApp Callout Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-black border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white">Direct WhatsApp Booking</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Customer is routed straight to NexaBoost official WhatsApp with verified lead data:
                  </p>
                  <a
                    href={`https://wa.me/923462231606?text=${encodeURIComponent(currentAgent.whatsappPrefilledMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-900/30"
                  >
                    <span>Send to +92 346 2231606</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Ready Copyable Sales Scripts */}
          {activeTab === 'scripts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Click any script to copy directly to clipboard for instant use in WhatsApp, DM, or SMS:
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {currentAgent.scriptTemplates.map((template, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-purple-500/30 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Situation {idx + 1}: {language === 'ur_nastaliq' ? template.situationUrdu : template.situation}
                      </span>
                      <button
                        onClick={() => handleCopyText(template.scriptRoman, `script-${idx}`)}
                        className="p-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        {copiedId === `script-${idx}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-purple-400" />
                            <span>Copy Script</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Roman Urdu Version */}
                    <div className="p-3 rounded-xl bg-[#141420] border border-white/5 text-xs text-neutral-200 leading-relaxed font-sans">
                      <span className="text-[10px] text-purple-400 font-bold block mb-1">Roman Urdu Script:</span>
                      "{template.scriptRoman}"
                    </div>

                    {/* Nastaliq Urdu Version */}
                    <div className="p-3 rounded-xl bg-[#141420] border border-white/5 text-xs text-neutral-300 leading-relaxed font-serif text-right" dir="rtl">
                      <span className="text-[10px] text-amber-400 font-bold block mb-1 text-left" dir="ltr">Urdu Nastaliq Script:</span>
                      {template.scriptUrdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: The 4 Golden Rules */}
          {activeTab === 'rules' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COMMON_RULES.map((rule) => (
                  <div
                    key={rule.number}
                    className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 relative overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center text-xs font-bold">
                        R{rule.number}
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {language === 'ur_nastaliq' ? rule.ruleUrdu : rule.ruleEn}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed pl-9">
                      {language === 'ur_nastaliq' ? rule.descUrdu : rule.descEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Strict Non-Negotiable Banner */}
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-rose-300 block mb-0.5">
                    Strict Quality Assurance Policy:
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    If any agent receives a request outside its boundary (e.g. Chatbot agent asked about Website, or Web agent asked about Chatbot), it will immediately respond: <span className="text-white font-semibold">"Sir wo service hum nahi dete. Main sirf ___ ka expert hun. Price aur package ke liye Free Audit book karein WhatsApp +92 346 2231606 par."</span>
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
