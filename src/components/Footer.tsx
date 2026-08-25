import React from 'react';
import { Bot, MessageCircle, Phone, Mail, Shield, Globe, Sparkles, ExternalLink, Instagram, Facebook, Linkedin, Share2 } from 'lucide-react';
import { LanguageMode } from '../types';

interface FooterProps {
  language: LanguageMode;
  onOpenAudit: () => void;
  onOpenSandbox: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenAudit, onOpenSandbox }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@nexaboost.ai',
      url: 'https://instagram.com/nexaboost.ai',
      icon: <Instagram className="w-4 h-4" />,
      colorHover: 'hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10',
    },
    {
      name: 'Facebook',
      handle: 'NexaBoost AI',
      url: 'https://facebook.com/nexaboost.ai',
      icon: <Facebook className="w-4 h-4" />,
      colorHover: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10',
    },
    {
      name: 'LinkedIn',
      handle: 'NexaBoost',
      url: 'https://linkedin.com/company/nexaboost',
      icon: <Linkedin className="w-4 h-4" />,
      colorHover: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10',
    },
    {
      name: 'TikTok',
      handle: '@nexaboost.ai',
      url: 'https://tiktok.com/@nexaboost.ai',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.48 6.27 6.27 0 0 0 1.86-4.48V8.71a8.28 8.28 0 0 0 4.92 1.63v-3.65h-.01z"/>
        </svg>
      ),
      colorHover: 'hover:text-[#EE1D52] hover:border-[#EE1D52]/40 hover:bg-[#EE1D52]/10',
    },
    {
      name: 'WhatsApp',
      handle: '+92 346 2231606',
      url: 'https://wa.me/923462231606',
      icon: <MessageCircle className="w-4 h-4" />,
      colorHover: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10',
    },
  ];

  return (
    <footer className="bg-[#050505] border-t border-[#222222] pt-16 pb-12 text-[#888888] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#A78BFA] flex items-center justify-center text-black shadow-lg shadow-[#A78BFA]/20">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-xl font-normal text-white font-serif">
                Nexa<span className="text-[#A78BFA] italic">Boost</span>
              </span>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed font-sans">
              AI Speed. Human Trust. Exponential Growth. We build and operate 14 Multilingual AI Agents that work 24/7 for modern enterprises.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#25D366]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span>Official WhatsApp Cloud API Partner</span>
            </div>
          </div>

          {/* Col 2: The 14 Agents Fleet */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              The 14 AI Fleet
            </h4>
            <ul className="space-y-1.5 text-xs text-[#888888]">
              <li><a href="#agents" className="hover:text-[#A78BFA] transition-colors">Lead Gen Agent (100+ daily)</a></li>
              <li><a href="#agents" className="hover:text-[#A78BFA] transition-colors">Outreach & Prospecting Agent</a></li>
              <li><a href="#agents" className="hover:text-[#A78BFA] transition-colors">Closer & Objection Agent</a></li>
              <li><a href="#agents" className="hover:text-[#A78BFA] transition-colors">Follow-up Agent (Zero cold leads)</a></li>
              <li><a href="#agents" className="hover:text-[#A78BFA] transition-colors">Content & Copywriting Agent (Urdu+Eng)</a></li>
              <li><a href="#agents" className="hover:text-[#A78BFA] transition-colors">Video & Reels Script Agent</a></li>
              <li><a href="#agents" className="hover:text-[#A78BFA] transition-colors">Customer Support Agent (24/7)</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Portfolio */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-[#888888]">
              <li>
                <a
                  href="https://hamigul-lens-flow.base44.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#A78BFA] transition-colors inline-flex items-center gap-1.5 font-bold"
                >
                  <span>Our Portfolio (Lens Flow)</span>
                  <ExternalLink className="w-3 h-3 text-[#A78BFA]" />
                </a>
              </li>
              <li>
                <button onClick={onOpenSandbox} className="hover:text-[#A78BFA] transition-colors text-left cursor-pointer">
                  Interactive Agent Sandbox
                </button>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-[#A78BFA] transition-colors text-left cursor-pointer">
                  Free AI Business Audit
                </button>
              </li>
              <li><a href="#simulator" className="hover:text-[#A78BFA] transition-colors">WhatsApp CRM Simulator</a></li>
              <li><a href="#case-studies" className="hover:text-[#A78BFA] transition-colors">Enterprise Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-[#A78BFA] transition-colors">Pricing & Deployment</a></li>
              <li><a href="#faq" className="hover:text-[#A78BFA] transition-colors">FAQ & Security Standards</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              Founder & Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222] space-y-1">
                <div className="text-white font-medium text-xs">Ali Mola</div>
                <div className="text-[11px] text-[#A78BFA] font-mono">Founder & AI Specialist</div>
              </div>
              <a
                href="https://wa.me/923462231606"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222] hover:border-[#25D366]/40 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="font-mono text-xs">+92 346 2231606</span>
              </a>
              <a
                href="mailto:aispecialistugccreator@gmail.com"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222] hover:border-[#A78BFA]/40 text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#A78BFA]" />
                <span className="font-mono text-[11px] truncate">aispecialistugccreator@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-[#777777] px-1 font-mono text-[11px]">
                <Globe className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>Coverage: UAE, PK, USA, UK</span>
              </div>
              <div className="flex items-center gap-2 text-[#777777] px-1 font-mono text-[11px]">
                <Shield className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Enterprise SOC2 & Meta Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated "CONNECT WITH US" Social Media Hub */}
        <div className="pt-8 border-t border-[#222222]">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
                <Share2 className="w-3.5 h-3.5" />
                <span>Stay Connected</span>
              </div>
              <h3 className="text-lg sm:text-xl font-normal text-white font-serif">
                Connect With Us
              </h3>
              <p className="text-xs text-[#888888]">
                Follow NexaBoost across official social channels or chat directly with our team on WhatsApp.
              </p>
            </div>

              {/* 5 Social Media Buttons + Direct Green WhatsApp Action */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <a
                  href="https://wa.me/923462231606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono font-bold text-xs transition-all duration-200 shadow-lg shadow-[#25D366]/20 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-black" />
                  <span>WhatsApp: +92 346 2231606</span>
                </a>

                {socialLinks.filter(s => s.name !== 'WhatsApp').map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#121212] border border-[#262626] text-[#CCCCCC] text-xs font-mono font-medium transition-all duration-200 ${social.colorHover} hover:scale-105 hover:shadow-lg`}
                  >
                    <span className="shrink-0">{social.icon}</span>
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </div>

          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#666666] uppercase tracking-wider">
          <p>© {new Date().getFullYear()} NexaBoost AI Creative Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://hamigul-lens-flow.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A78BFA] hover:underline flex items-center gap-1"
            >
              <span>Portfolio</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span>•</span>
            <span>Powered by Gemini 3.7 Flash</span>
            <span>•</span>
            <a href="https://wa.me/923462231606" className="text-[#25D366] hover:underline">
              WhatsApp Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
