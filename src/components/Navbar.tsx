import React, { useState } from 'react';
import { Bot, MessageCircle, Sparkles, Globe, Menu, X, Zap, ExternalLink, LayoutDashboard, Briefcase } from 'lucide-react';
import { LanguageMode } from '../types';

interface NavbarProps {
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
  onOpenAudit: () => void;
  onOpenSandbox: (agentId?: string) => void;
  onNavigateToDashboard?: () => void;
  onNavigateToFreePlan?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onOpenAudit,
  onOpenSandbox,
  onNavigateToDashboard,
  onNavigateToFreePlan,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#222222] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-[#A78BFA] p-0.5 shadow-lg shadow-[#A78BFA]/20 group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full bg-[#050505] rounded-[6px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#A78BFA]" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-white font-serif">
                    Nexa<span className="text-[#A78BFA] italic">Boost</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/20">
                    AI HUB
                  </span>
                </div>
                <span className="text-[11px] text-[#888888] tracking-widest font-mono uppercase hidden sm:block">
                  AI Speed. Human Trust.
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs uppercase font-mono tracking-widest text-[#A0A0A0]">
            <a href="#services" className="hover:text-[#A78BFA] transition-colors">
              {language === 'ur_nastaliq' ? 'خدمات' : 'Services'}
            </a>
            
            <a href="#portfolio" className="hover:text-[#A78BFA] transition-colors">
              {language === 'ur_nastaliq' ? 'پورٹ فولیو' : 'Portfolio'}
            </a>

            <button
              onClick={() => onOpenSandbox()}
              className="hover:text-[#A78BFA] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-[#A78BFA] animate-pulse" />
              <span>{language === 'ur_nastaliq' ? '۱۴ ایجنٹس' : '14 Agents'}</span>
            </button>

            <a href="#pricing" className="hover:text-[#A78BFA] transition-colors">
              {language === 'ur_nastaliq' ? 'پلانز' : 'Pricing'}
            </a>

            <a href="#contact" className="hover:text-[#A78BFA] transition-colors">
              {language === 'ur_nastaliq' ? 'رابطہ' : 'Contact'}
            </a>
          </nav>

          {/* Actions Button Bar: Portfolio, Dashboard, Language Switcher, Green WhatsApp Button, Audit CTA */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5">
            
            {/* Language Selector */}
            <div className="flex items-center bg-[#0A0A0A] border border-[#222222] rounded-lg p-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-[#888888] ml-1.5 mr-1" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-all cursor-pointer text-xs font-mono ${
                  language === 'en'
                    ? 'bg-[#A78BFA] text-black font-bold shadow-sm'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ur_nastaliq')}
                className={`px-2 py-1 rounded transition-all cursor-pointer text-xs font-mono ${
                  language === 'ur_nastaliq'
                    ? 'bg-[#A78BFA] text-black font-bold shadow-sm'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                اردو
              </button>
              <button
                onClick={() => setLanguage('ur_roman')}
                className={`px-2 py-1 rounded transition-all cursor-pointer text-xs font-mono ${
                  language === 'ur_roman'
                    ? 'bg-[#A78BFA] text-black font-bold shadow-sm'
                    : 'text-[#888888] hover:text-white'
                }`}
                title="Roman Urdu"
              >
                Roman
              </button>
            </div>

            {/* Portfolio Header Button */}
            <a
              href="https://hamigul-lens-flow.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#2A2A2A] hover:border-[#A78BFA]/60 text-white hover:text-[#A78BFA] text-xs font-mono font-bold transition-all shadow-sm group cursor-pointer"
              title="Open Live Portfolio (Lens Flow)"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#A78BFA] group-hover:scale-110 transition-transform" />
              <span>{language === 'ur_nastaliq' ? 'پورٹ فولیو' : 'Portfolio'}</span>
              <ExternalLink className="w-3 h-3 text-[#777777] group-hover:text-[#A78BFA] transition-colors" />
            </a>

            {/* Dashboard Button */}
            {onNavigateToDashboard && (
              <button
                onClick={onNavigateToDashboard}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#A78BFA]/10 hover:bg-[#A78BFA]/20 border border-[#A78BFA]/30 text-[#A78BFA] font-mono text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Dashboard</span>
              </button>
            )}

            {/* Green WhatsApp CTA Button in Header Right */}
            <a
              href="https://wa.me/923462231606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs font-bold transition-all shadow-md shadow-[#25D366]/20 group cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-black" />
              <span>WhatsApp</span>
            </a>

            {/* Get Free Plan Button */}
            <button
              onClick={() => {
                if (onNavigateToFreePlan) {
                  onNavigateToFreePlan();
                } else {
                  window.location.hash = '#get-free-plan';
                }
              }}
              id="nav-get-free-plan-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#00A8FF] hover:bg-[#38bdf8] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#00A8FF]/30 hover:scale-105 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-black text-black" />
              <span>{language === 'ur_nastaliq' ? 'مفت پلان لیں' : 'Get Free Plan'}</span>
            </button>

            {/* Audit Booking CTA */}
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#A78BFA] hover:bg-[#C4B5FD] text-black font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-md shadow-[#A78BFA]/20 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{language === 'ur_nastaliq' ? 'مفت آڈٹ' : 'Free Audit'}</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Direct WhatsApp Button */}
            <a
              href="https://wa.me/923462231606"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold flex items-center gap-1"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
            </a>

            <a
              href="https://hamigul-lens-flow.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#141414] border border-[#2A2A2A] text-[#A78BFA] text-xs font-mono font-bold flex items-center gap-1"
              title="Portfolio"
            >
              <Briefcase className="w-4 h-4" />
            </a>

            {onNavigateToDashboard && (
              <button
                onClick={onNavigateToDashboard}
                className="p-2 rounded-lg bg-[#A78BFA]/10 border border-[#A78BFA]/30 text-[#A78BFA] text-xs font-mono font-bold flex items-center gap-1"
                title="Dashboard"
              >
                <LayoutDashboard className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0A0A0A] border border-[#222222] text-[#888888] hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#222222] px-4 pt-4 pb-6 space-y-4">
          <div className="grid grid-cols-3 gap-1 bg-[#111111] p-1 rounded-lg text-center text-xs font-mono">
            <button
              onClick={() => setLanguage('en')}
              className={`py-1.5 rounded ${language === 'en' ? 'bg-[#A78BFA] text-black font-bold' : 'text-[#888888]'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('ur_nastaliq')}
              className={`py-1.5 rounded ${language === 'ur_nastaliq' ? 'bg-[#A78BFA] text-black font-bold' : 'text-[#888888]'}`}
            >
              اردو
            </button>
            <button
              onClick={() => setLanguage('ur_roman')}
              className={`py-1.5 rounded ${language === 'ur_roman' ? 'bg-[#A78BFA] text-black font-bold' : 'text-[#888888]'}`}
            >
              Roman
            </button>
          </div>

          <div className="flex flex-col space-y-3 text-xs uppercase font-mono tracking-wider text-[#A0A0A0]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5"
            >
              4 Core Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Our Work & Portfolio
            </a>
            <a
              href="https://hamigul-lens-flow.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 flex items-center justify-between text-[#A78BFA] font-bold bg-[#141414] border border-[#222222]"
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#A78BFA]" />
                <span>Open Live Portfolio</span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#A78BFA]" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSandbox();
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-white/5 flex items-center justify-between text-[#A78BFA]"
            >
              <span>14 AI Agents Sandbox</span>
              <Zap className="w-4 h-4 text-[#A78BFA]" />
            </button>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Pricing & Packages
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 text-white"
            >
              Contact Us
            </a>
            {onNavigateToDashboard && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToDashboard();
                }}
                className="text-left px-3 py-2.5 rounded-lg bg-[#A78BFA]/10 border border-[#A78BFA]/30 flex items-center justify-between text-[#A78BFA] font-bold"
              >
                <span>Open Auto Dashboard</span>
                <LayoutDashboard className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToFreePlan) {
                  onNavigateToFreePlan();
                } else {
                  window.location.hash = '#get-free-plan';
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#00A8FF] hover:bg-[#38bdf8] text-black font-bold text-xs uppercase font-mono tracking-wider shadow-lg shadow-[#00A8FF]/25 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-black text-black" />
              <span>Get Free Growth Plan</span>
            </button>

            <a
              href="https://hamigul-lens-flow.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] text-white font-bold text-xs uppercase font-mono tracking-wider"
            >
              <Briefcase className="w-4 h-4 text-[#A78BFA]" />
              <span>View Portfolio (Lens Flow)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#A78BFA]" />
            </a>

            <a
              href="https://wa.me/923462231606"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase font-mono tracking-wider shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>WhatsApp (+92 346 2231606)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#A78BFA] text-black font-bold text-xs uppercase font-mono tracking-wider"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free AI Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
