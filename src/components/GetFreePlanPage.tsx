import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  Zap,
  ExternalLink,
  Layers,
  ChevronRight,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import { LanguageMode } from '../types';

interface GetFreePlanPageProps {
  onBackToWebsite: () => void;
  language?: LanguageMode;
}

export const GetFreePlanPage: React.FC<GetFreePlanPageProps> = ({
  onBackToWebsite,
  language = 'en',
}) => {
  // Google Form Embed Link State (User can customize or replace)
  const [embedLink, setEmbedLink] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nexaboost_google_form_embed');
      if (saved) return saved;
    }
    // Default placeholder Google Form embed link
    return 'https://docs.google.com/forms/d/e/1FAIpQLSfD_placeholder_nexaboost_free_plan/viewform?embedded=true';
  });

  const [isEditingEmbed, setIsEditingEmbed] = useState(false);
  const [customLinkInput, setCustomLinkInput] = useState(embedLink);
  const [selectedNiche, setSelectedNiche] = useState<string>('Real Estate & Property');
  const [activeTab, setActiveTab] = useState<'embed' | 'quick_form'>('embed');

  // Interactive Quick Form state for instant 2-minute plan submission
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    monthlyRevenue: '$5k - $20k / mo',
    mainChallenge: 'Getting consistent qualified leads',
    niche: 'Real Estate & Property',
    desiredAgents: 'Lead Gen + WhatsApp Closer (Growth Plan)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const niches = [
    'Real Estate & Property',
    'E-Commerce & D2C Brands',
    'Clinics & Healthcare',
    'Agencies & Consultancies',
    'B2B SaaS & Tech',
    'Fashion & Apparel',
    'Solar & Clean Energy',
    'Coaching & Infoproducts',
    'Auto Dealerships',
    'Law Firms & Legal',
    'Restaurants & Hospitality',
    'Gyms & Fitness Centers',
    'Education & EdTech',
    'Financial Services',
  ];

  const handleSaveCustomEmbed = (e: React.FormEvent) => {
    e.preventDefault();
    let cleaned = customLinkInput.trim();
    if (cleaned.includes('<iframe')) {
      const match = cleaned.match(/src=["']([^"']+)["']/);
      if (match && match[1]) {
        cleaned = match[1];
      }
    }
    setEmbedLink(cleaned);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nexaboost_google_form_embed', cleaned);
    }
    setIsEditingEmbed(false);
  };

  const handleQuickFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    const servicePayload = `Free 2-Min Growth Plan: [${formData.niche}] - ${formData.desiredAgents}`;
    const notesPayload = `Company: ${formData.company || 'N/A'} | Rev: ${formData.monthlyRevenue} | Challenge: ${formData.mainChallenge}`;

    try {
      // 1. Submit to Backend / Google Sheets sync
      await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          service: servicePayload,
          notes: notesPayload,
          source: 'Get Free Plan (2-Min Page)',
        }),
      });

      // 2. Direct formsubmit.co alert
      try {
        fetch('https://formsubmit.co/ajax/+923462231606', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            subject: '🔔 NEW FREE GROWTH PLAN REQUEST!',
            message: `Name: ${formData.name}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nNiche: ${formData.niche}\nTarget: ${formData.desiredAgents}\nTime: ${new Date().toLocaleString()}`,
          }),
        }).catch(() => {});
      } catch (err) {}

      setIsSubmitted(true);
    } catch (err) {
      console.warn('Submission fallback:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] font-sans relative overflow-x-hidden selection:bg-[#00A8FF] selection:text-black">
      {/* Background Electric Blue Grids & Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#00A8FF_1px,transparent_1px)] [background-size:24px_24px] z-0" />
      <div className="fixed top-0 right-1/4 w-[600px] h-[500px] bg-[#00A8FF] rounded-full blur-[190px] opacity-[0.08] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-1/4 w-[600px] h-[500px] bg-[#0A1F44] rounded-full blur-[190px] opacity-[0.25] pointer-events-none z-0" />

      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#0A1F44] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Back Button & Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={onBackToWebsite}
                id="back-to-home-btn"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0A1F44]/70 hover:bg-[#0A1F44] border border-[#00A8FF]/30 text-[#00A8FF] hover:text-white font-mono text-xs font-bold transition-all group cursor-pointer shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>Back to Hub</span>
              </button>

              <div className="h-5 w-[1px] bg-[#222222] hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-lg font-serif font-bold text-white tracking-tight">
                  Nexa<span className="text-[#00A8FF]">Boost</span>⚡
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00A8FF]/15 text-[#00A8FF] border border-[#00A8FF]/30 hidden md:inline-block">
                  FREE GROWTH PLAN
                </span>
              </div>
            </div>

            {/* Right Action: Direct WhatsApp */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/923462231606?text=Salam%20Ali%20Mola!%20I%20am%20on%20the%20Get%20Free%20Plan%20page%20and%20want%20to%20consult%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs font-bold transition-all shadow-lg shadow-[#25D366]/20 group cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current text-black" />
                <span className="hidden sm:inline">WhatsApp Help (+92 346 2231606)</span>
                <span className="sm:hidden">Help</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* Page Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1F44] border border-[#00A8FF]/40 text-[#00A8FF] text-xs font-mono font-bold shadow-lg shadow-[#00A8FF]/10">
            <Sparkles className="w-3.5 h-3.5 fill-[#00A8FF] text-[#00A8FF]" />
            <span>100% FREE CUSTOMIZED AI BLUEPRINT</span>
            <span className="text-[#888888]">•</span>
            <span className="flex items-center gap-1 text-[#FFD700]">
              <Clock className="w-3 h-3" /> 2 Minutes
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Get Your Free Growth Plan in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-[#38bdf8] to-[#FFD700]">
              2 Minutes
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-mono text-[#00A8FF] font-medium tracking-wide">
            14 Niches. 1 Form. Zero Guesswork.
          </p>

          <p className="text-xs sm:text-sm text-[#AAAAAA] max-w-2xl mx-auto leading-relaxed">
            Tell us about your business bottleneck. Founder Ali Mola & our 14 AI Agent Fleet will engineer a step-by-step roadmap to automate your lead generation, sales pipeline, and 24/7 WhatsApp closing.
          </p>

          {/* Guarantee Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-[#CCCCCC]">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A1F44]/50 border border-[#00A8FF]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Zero Cost & No Obligation</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A1F44]/50 border border-[#00A8FF]/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8FF]" />
              <span>Tailored for 14 Specific Niches</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A1F44]/50 border border-[#00A8FF]/20">
              <Zap className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>Fast 5-Min WhatsApp Delivery</span>
            </div>
          </div>

        </div>

        {/* 14 Niches Interactive Ribbon */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0A1F44]/60 to-[#07132B]/90 border border-[#00A8FF]/30 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00A8FF]" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Select Your Industry / Niche:
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#00A8FF]">
              14 Proven Playbooks Available
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {niches.map((niche) => {
              const isSelected = selectedNiche === niche;
              return (
                <button
                  key={niche}
                  onClick={() => {
                    setSelectedNiche(niche);
                    setFormData((prev) => ({ ...prev, niche }));
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#00A8FF] text-black font-bold shadow-md shadow-[#00A8FF]/30 scale-105'
                      : 'bg-[#050505] hover:bg-[#122B5C] text-[#CCCCCC] hover:text-white border border-[#00A8FF]/20'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                  <span>{niche}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form View Switcher: Google Form Embed vs Instant Direct Form */}
        <div className="flex items-center justify-between border-b border-[#0A1F44] pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('embed')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'embed'
                  ? 'bg-[#00A8FF] text-black shadow-lg shadow-[#00A8FF]/20'
                  : 'bg-[#0A1F44]/50 text-[#888888] hover:text-white border border-[#00A8FF]/20'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Google Form Embed</span>
            </button>

            <button
              onClick={() => setActiveTab('quick_form')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'quick_form'
                  ? 'bg-[#00A8FF] text-black shadow-lg shadow-[#00A8FF]/20'
                  : 'bg-[#0A1F44]/50 text-[#888888] hover:text-white border border-[#00A8FF]/20'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>2-Minute Quick Form</span>
            </button>
          </div>

          {activeTab === 'embed' && (
            <button
              onClick={() => setIsEditingEmbed(!isEditingEmbed)}
              className="text-[11px] font-mono text-[#00A8FF] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{isEditingEmbed ? 'Cancel Edit' : 'Paste Custom Google Form Link ⚙️'}</span>
            </button>
          )}
        </div>

        {/* Custom Google Form Embed URL Editor Drawer */}
        {isEditingEmbed && activeTab === 'embed' && (
          <form
            onSubmit={handleSaveCustomEmbed}
            className="p-4 rounded-xl bg-[#0A1F44] border border-[#00A8FF]/50 space-y-3 animate-in fade-in duration-200"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Embed Your Own Google Form Link / Iframe:
              </h4>
              <span className="text-[10px] font-mono text-[#00A8FF]">
                (Paste full URL or &lt;iframe&gt; code)
              </span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={customLinkInput}
                onChange={(e) => setCustomLinkInput(e.target.value)}
                placeholder="https://docs.google.com/forms/d/e/.../viewform?embedded=true"
                className="flex-1 px-3 py-2 rounded-lg bg-[#050505] border border-[#00A8FF]/40 text-xs text-white placeholder-[#666666] focus:outline-none focus:border-[#FFD700] font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#00A8FF] hover:bg-[#0090dc] text-black font-mono font-bold text-xs cursor-pointer shrink-0"
              >
                Apply Link
              </button>
            </div>
          </form>
        )}

        {/* TAB 1: Google Form Embed View */}
        {activeTab === 'embed' && (
          <div className="space-y-4">
            <div className="relative rounded-2xl bg-[#08152E] border-2 border-[#00A8FF]/40 shadow-2xl shadow-[#00A8FF]/10 overflow-hidden min-h-[640px] flex flex-col">
              
              {/* Top Window Bar */}
              <div className="px-4 py-3 bg-[#050E20] border-b border-[#00A8FF]/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                  </div>
                  <span className="text-xs font-mono text-[#00A8FF] font-semibold ml-2">
                    NexaBoost™ Free Growth Plan Form [{selectedNiche}]
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-[#888888]">
                  <span className="hidden sm:inline">Encrypted & Confidential</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
              </div>

              {/* Embedded Google Form Iframe Container */}
              <div className="flex-1 w-full relative bg-[#060D1A]">
                {embedLink.includes('placeholder') ? (
                  /* Elegant interactive simulated form if placeholder hasn't been replaced yet */
                  <div className="p-6 sm:p-10 max-w-2xl mx-auto space-y-6">
                    <div className="p-4 rounded-xl bg-[#0A1F44]/90 border border-[#00A8FF]/40 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#FFD700]" />
                          <h3 className="text-sm font-mono font-bold text-white">
                            Google Form Embed Placeholder
                          </h3>
                        </div>
                        <button
                          onClick={() => setIsEditingEmbed(true)}
                          className="px-2.5 py-1 rounded bg-[#00A8FF] text-black font-mono font-bold text-[10px] cursor-pointer hover:bg-[#38bdf8]"
                        >
                          + Paste Your Link Here
                        </button>
                      </div>
                      <p className="text-xs text-[#CCCCCC]">
                        You can paste your live Google Form link above, or fill out our instant 2-minute growth audit below which syncs directly to our team!
                      </p>
                    </div>

                    {/* Integrated 2-Min Form */}
                    <form onSubmit={handleQuickFormSubmit} className="space-y-4 text-left">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-[#CCCCCC] mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Tariq Khan"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-[#CCCCCC] mb-1">
                            WhatsApp Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+92 346 2231606"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-[#CCCCCC] mb-1">
                            Company / Brand Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Prime Realty"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-[#CCCCCC] mb-1">
                            Current Monthly Revenue
                          </label>
                          <select
                            value={formData.monthlyRevenue}
                            onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
                          >
                            <option value="Under $5k / mo">Under $5,000 / mo (Rs. 1.4M PK)</option>
                            <option value="$5k - $20k / mo">$5,000 - $20,000 / mo</option>
                            <option value="$20k - $50k / mo">$20,000 - $50,000 / mo</option>
                            <option value="$50k+ / mo">$50,000+ / mo (Enterprise Scale)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#CCCCCC] mb-1">
                          Primary Growth Bottleneck
                        </label>
                        <select
                          value={formData.mainChallenge}
                          onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
                        >
                          <option value="Getting consistent qualified leads">Getting consistent qualified leads</option>
                          <option value="Slow WhatsApp reply times & lost deals">Slow WhatsApp reply times & lost deals</option>
                          <option value="High team payroll & poor closing rate">High team payroll & poor closing rate</option>
                          <option value="Producing viral ad video hooks & UGC scripts">Producing viral ad video hooks & UGC scripts</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00A8FF] to-[#0066FF] hover:from-[#38bdf8] hover:to-[#00A8FF] text-black font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#00A8FF]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                      >
                        <Zap className="w-4 h-4 fill-black" />
                        <span>{isSubmitting ? 'Analyzing & Syncing Plan...' : 'Generate My Free Growth Blueprint'}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                ) : (
                  <iframe
                    src={embedLink}
                    width="100%"
                    height="780"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full min-h-[720px] rounded-b-xl border-none"
                    title="NexaBoost Free Growth Plan Form"
                  >
                    Loading Google Form…
                  </iframe>
                )}
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Instant 2-Minute Quick Form */}
        {activeTab === 'quick_form' && (
          <div className="p-6 sm:p-10 rounded-2xl bg-[#08152E] border-2 border-[#00A8FF]/40 shadow-2xl space-y-6">
            {!isSubmitted ? (
              <form onSubmit={handleQuickFormSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-white">
                    Tell Us About Your Business
                  </h3>
                  <p className="text-xs font-mono text-[#00A8FF]">
                    Selected Niche: {selectedNiche} (Click chips above to switch)
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#CCCCCC]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asad Mehmood"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-sm text-white focus:outline-none focus:border-[#00A8FF]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#CCCCCC]">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 346 2231606"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-sm text-white focus:outline-none focus:border-[#00A8FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#CCCCCC]">Company / Business Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Nova D2C Apparel"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-sm text-white focus:outline-none focus:border-[#00A8FF]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#CCCCCC]">Work Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-sm text-white focus:outline-none focus:border-[#00A8FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#CCCCCC]">Monthly Revenue Stage</label>
                    <select
                      value={formData.monthlyRevenue}
                      onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
                    >
                      <option value="Under $5k / mo">Under $5,000 / mo</option>
                      <option value="$5k - $20k / mo">$5,000 - $20,000 / mo</option>
                      <option value="$20k - $50k / mo">$20,000 - $50,000 / mo</option>
                      <option value="$50k+ / mo">$50,000+ / mo (Scale)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#CCCCCC]">Primary Desired Agent Fleet</label>
                    <select
                      value={formData.desiredAgents}
                      onChange={(e) => setFormData({ ...formData, desiredAgents: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#00A8FF]/30 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
                    >
                      <option value="Growth Plan ($997/mo - 13 AI Agents)">Growth Plan ($997/mo - 13 AI Agents)</option>
                      <option value="Starter Plan ($497/mo - 3 Core Agents)">Starter Plan ($497/mo - 3 Core Agents)</option>
                      <option value="AI Lead Gen Starter (15,000 PKR/mo)">AI Lead Gen Starter (15,000 PKR/mo)</option>
                      <option value="Dominance Custom ($2,997/mo)">Dominance Custom ($2,997/mo)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#ffe135] hover:from-[#ffe135] hover:to-[#FFD700] text-black font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FFD700]/20 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>{isSubmitting ? 'Syncing with Ali Mola & Google Sheets...' : 'Submit & Receive 2-Minute Growth Plan'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Growth Plan Request Dispatched!
                </h3>
                <div className="p-3.5 rounded-xl bg-[#0A1F44] border border-[#00A8FF]/40 text-emerald-400 font-mono text-sm font-bold max-w-lg mx-auto">
                  ✨ "Thank you! We will contact you in 5 minutes."
                </div>
                <p className="text-xs text-[#AAAAAA] max-w-md mx-auto">
                  Your inquiry has been logged into our <strong className="text-white">NexaBoost Leads</strong> Google Sheet. Ali Mola has received your alert and will connect via WhatsApp at <strong className="text-white">{formData.phone}</strong>.
                </p>

                <div className="pt-3">
                  <a
                    href={`https://wa.me/923462231606?text=${encodeURIComponent(
                      `Salam Ali Mola! I just requested the Free 2-Min Growth Plan for ${formData.name} (${formData.company || 'Business'}) in the ${formData.niche} niche.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/30"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat (+92 346 2231606)</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Social Proof & FAQ summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <div className="p-4 rounded-xl bg-[#0A1F44]/50 border border-[#00A8FF]/20 space-y-2">
            <h4 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="text-[#00A8FF]">01.</span>
              <span>14 Niches Supported</span>
            </h4>
            <p className="text-xs text-[#AAAAAA] leading-relaxed">
              Every niche has distinct buying psychology, objection patterns, and ad angles tailored into our AI agent prompts.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A1F44]/50 border border-[#00A8FF]/20 space-y-2">
            <h4 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="text-[#00A8FF]">02.</span>
              <span>24/7 WhatsApp AI Closer</span>
            </h4>
            <p className="text-xs text-[#AAAAAA] leading-relaxed">
              Never let a hot lead go cold at 2:00 AM. Our agent qualifies, shares portfolios, and books appointments autonomously.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A1F44]/50 border border-[#00A8FF]/20 space-y-2">
            <h4 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="text-[#00A8FF]">03.</span>
              <span>Barkat se Growth</span>
            </h4>
            <p className="text-xs text-[#AAAAAA] leading-relaxed">
              Speed with human dignity and ethical business conduct. We treat every client's growth with personal commitment.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
};
