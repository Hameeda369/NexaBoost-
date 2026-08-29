import React from 'react';
import {
  Bot,
  MessageCircle,
  Sparkles,
  PhoneCall,
  Globe,
  Menu,
  X,
  Zap,
  FileSpreadsheet,
  FileText,
  Briefcase,
  LayoutDashboard,
  Star,
  Rotate3d
} from 'lucide-react';
import { LanguageMode } from '../types';
import nexaboostMascotLogo from '../assets/images/nexaboost_mascot_logo_1787995162400.jpg';

interface NavbarProps {
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
  onOpenAudit: () => void;
  onOpenSandbox: (agentId?: string) => void;
  onOpenSheets: () => void;
  onOpenProposals: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onOpenAudit,
  onOpenSandbox,
  onOpenSheets,
  onOpenProposals,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0E]/95 backdrop-blur-lg border-b border-white/10 transition-all shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-amber-400 via-purple-600 to-indigo-600 p-[1.5px] shadow-lg shadow-purple-900/40 group-hover:scale-105 transition-transform shrink-0">
                <div className="w-full h-full bg-[#0D0D14] rounded-[14px] overflow-hidden flex items-center justify-center relative">
                  <img
                    src={nexaboostMascotLogo}
                    alt="NexaBoost Official Mascot Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Subtle ambient light glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Online pulse indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0A0A0E] shadow-sm flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif flex items-center gap-1">
                    Nexa<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-purple-300">Boost</span>
                    <span className="text-amber-400 text-sm sm:text-base">★</span>
                  </span>
                  <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    14 AI Agents
                  </span>
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-medium text-neutral-300 tracking-wide font-sans hidden sm:block">
                  {language === 'ur_nastaliq' ? 'ہم ترقی فروخت کرتے ہیں، وعدے نہیں' : 'We Sell Growth, Not Promises'}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-xs lg:text-sm font-medium text-neutral-300">
            {/* 4D Hyperspace Engine Link */}
            <a
              id="nav-4d-engine-link"
              href="#4d-experience"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer text-amber-300 font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 shadow-sm"
              title="Interactive 4D Hyperspace & Tesseract Animation"
            >
              <Rotate3d className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>{language === 'ur_nastaliq' ? '۴ ڈی اینیمیشن' : '4D Engine'}</span>
            </a>

            {/* 3 Dedicated Core Agents Link */}
            <a
              id="nav-three-agents-link"
              href="#three-agents-hub"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer text-emerald-300 font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 shadow-sm"
              title="3 Dedicated Core AI Agents System"
            >
              <Bot className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ur_nastaliq' ? '۳ کور ایجنٹس' : '3 Core Agents'}</span>
            </a>

            {/* Dashboard / Live Sandbox Button */}
            <button
              id="nav-dashboard-btn"
              onClick={() => onOpenSandbox()}
              className="hover:text-purple-300 transition-colors flex items-center gap-1.5 cursor-pointer text-purple-300 font-semibold px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/25 shadow-sm"
              title="Open 14 AI Agents Live Dashboard & Sandbox"
            >
              <LayoutDashboard className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>{language === 'ur_nastaliq' ? 'ڈیش بورڈ' : 'AI Dashboard'}</span>
            </button>

            {/* Portfolio / Case Studies Link */}
            <a
              id="nav-portfolio-link"
              href="#case-studies"
              className="hover:text-purple-400 transition-colors flex items-center gap-1.5 text-neutral-200"
            >
              <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
              <span>{language === 'ur_nastaliq' ? 'پورٹ فولیو و نتائج' : 'Portfolio'}</span>
            </a>

            {/* 14 PDF Proposals & Canva Kit Button */}
            <button
              id="nav-pdf-proposals-btn"
              onClick={onOpenProposals}
              className="hover:text-purple-300 transition-colors flex items-center gap-1.5 cursor-pointer text-purple-300 font-semibold px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/25 shadow-sm"
              title="14 1-Page PDF Proposals and Canva/Docs Copy Kit"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>14 PDF Proposals</span>
            </button>

            {/* Google Sheets Sync Hub */}
            <button
              id="nav-google-sheets-btn"
              onClick={onOpenSheets}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-emerald-300 font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>Sheets</span>
            </button>

            {/* Visual Ecosystem Showcase Link */}
            <a
              id="nav-visual-showcase-link"
              href="#visual-showcase"
              className="hover:text-purple-300 transition-colors flex items-center gap-1.5 cursor-pointer text-amber-300 font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 shadow-sm"
              title="Official 10 Visual Pillars & Brand Architecture"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'ur_nastaliq' ? 'ویژول گیلری' : 'Visual Ecosystem'}</span>
            </a>

            {/* Free Audit */}
            <a href="#audit" className="hover:text-purple-400 transition-colors">
              {language === 'ur_nastaliq' ? 'مفت آڈٹ' : 'Free Audit'}
            </a>

            {/* Pricing */}
            <a href="#pricing" className="hover:text-purple-400 transition-colors">
              {language === 'ur_nastaliq' ? 'پلانز' : 'Pricing'}
            </a>
          </nav>

          {/* Header Right Actions: Language Toggle, WhatsApp CTA Button, Free Audit CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Selector */}
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-lg p-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-neutral-400 ml-1.5 mr-1" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-purple-600 text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ur_nastaliq')}
                className={`px-2 py-1 rounded transition-all cursor-pointer ${
                  language === 'ur_nastaliq'
                    ? 'bg-purple-600 text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                اردو
              </button>
              <button
                onClick={() => setLanguage('ur_roman')}
                className={`px-2 py-1 rounded transition-all cursor-pointer ${
                  language === 'ur_roman'
                    ? 'bg-purple-600 text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Roman Urdu"
              >
                Roman
              </button>
            </div>

            {/* Prominent WhatsApp Header Button (Always accessible) */}
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/923462231606?text=Hi%20NexaBoost%20Team!%20I%20want%20to%20consult%20regarding%20your%2014%20AI%20Agents%20and%20Service%20Packages."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs sm:text-xs shadow-lg shadow-[#25D366]/25 transition-all group shrink-0"
              title="Chat directly with NexaBoost on WhatsApp (+92 346 2231606)"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
              <span className="hidden sm:inline font-mono font-bold">+92 346 2231606</span>
              <span className="sm:hidden font-bold">WhatsApp</span>
            </a>

            {/* Quick Audit Booking CTA Button */}
            <button
              id="header-audit-cta-btn"
              onClick={onOpenAudit}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-black font-bold text-xs transition-all shadow-md shadow-purple-500/20 cursor-pointer shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{language === 'ur_nastaliq' ? 'مفت آڈٹ' : 'Book Free Audit'}</span>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center xl:hidden">
              <button
                id="mobile-hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile & Tablet Expanded Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D0D14] border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Language Switcher on Mobile */}
          <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-xl text-center text-xs">
            <button
              onClick={() => setLanguage('en')}
              className={`py-2 rounded-lg font-semibold transition-all ${language === 'en' ? 'bg-purple-600 text-white shadow-sm' : 'text-neutral-400'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('ur_nastaliq')}
              className={`py-2 rounded-lg font-semibold transition-all ${language === 'ur_nastaliq' ? 'bg-purple-600 text-white shadow-sm' : 'text-neutral-400'}`}
            >
              اردو
            </button>
            <button
              onClick={() => setLanguage('ur_roman')}
              className={`py-2 rounded-lg font-semibold transition-all ${language === 'ur_roman' ? 'bg-purple-600 text-white shadow-sm' : 'text-neutral-400'}`}
            >
              Roman Urdu
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="flex flex-col space-y-2 text-sm font-medium text-neutral-300">
            {/* 4D AI Engine in Mobile Menu */}
            <a
              id="mobile-nav-4d-engine-link"
              href="#4d-experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Rotate3d className="w-4 h-4 text-amber-400" />
                <span>4D AI Hyperspace & Quantum Engine</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] uppercase font-bold">4D</span>
            </a>

            {/* 3 Core Agents in Mobile Menu */}
            <a
              id="mobile-nav-three-agents-link"
              href="#three-agents-hub"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-emerald-400" />
                <span>3 Dedicated Core Agents (Strict Sales)</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold">3 Agents</span>
            </a>

            {/* Dashboard button in mobile menu */}
            <button
              id="mobile-nav-dashboard-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSandbox();
              }}
              className="text-left px-3.5 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-purple-400" />
                <span>AI Agents Dashboard & Sandbox</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] uppercase font-bold">Live</span>
            </button>

            {/* Portfolio Link */}
            <a
              id="mobile-nav-portfolio-link"
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between text-neutral-200"
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-neutral-400" />
                <span>Website Portfolio & Case Studies</span>
              </div>
            </a>

            {/* 14 PDF Proposals */}
            <button
              id="mobile-nav-pdf-proposals-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposals();
              }}
              className="text-left px-3.5 py-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between text-purple-300 font-semibold"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                <span>14 PDF Proposals & Canva Kit</span>
              </div>
            </button>

            {/* Visual Ecosystem Link */}
            <a
              id="mobile-nav-visual-showcase-link"
              href="#visual-showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between text-amber-300 font-semibold"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>10 Official Visual Pillars & Poster</span>
              </div>
            </a>

            {/* Google Sheets Workspace */}
            <button
              id="mobile-nav-google-sheets-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSheets();
              }}
              className="text-left px-3.5 py-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between text-emerald-400 font-semibold"
            >
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>Google Sheets Workspace</span>
              </div>
            </button>

            {/* 14 AI Agents list anchor */}
            <a
              href="#agents"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-xl hover:bg-white/5 text-neutral-300"
            >
              14 AI Agents Overview
            </a>

            {/* Free Audit anchor */}
            <a
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-xl hover:bg-white/5 text-neutral-300"
            >
              Free AI Business Audit
            </a>

            {/* WhatsApp Simulator anchor */}
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-xl hover:bg-white/5 text-neutral-300"
            >
              WhatsApp AI Demo Simulator
            </a>

            {/* Pricing anchor */}
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-xl hover:bg-white/5 text-neutral-300"
            >
              Pricing & Deployment Packages
            </a>
          </div>

          {/* Quick Action CTAs on Mobile Menu */}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://wa.me/923462231606?text=Hi%20NexaBoost%20Team!%20I%20want%20to%20consult%20regarding%20your%2014%20AI%20Agents%20and%20Service%20Packages."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black font-bold text-sm shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5 fill-black text-[#25D366]" />
              <span>Chat on WhatsApp (+92 346 2231606)</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-black font-bold text-sm shadow-lg shadow-purple-500/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Book Free AI Business Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
