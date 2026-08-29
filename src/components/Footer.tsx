import React from 'react';
import { Bot, MessageCircle, Phone, Mail, Shield, Globe, Sparkles } from 'lucide-react';
import { LanguageMode } from '../types';
import nexaboostMascotLogo from '../assets/images/nexaboost_mascot_logo_1787995162400.jpg';

interface FooterProps {
  language: LanguageMode;
  onOpenAudit: () => void;
  onOpenSandbox: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenAudit, onOpenSandbox }) => {
  return (
    <footer className="bg-[#07070A] border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-purple-600 to-indigo-600 p-[1.5px] overflow-hidden shadow-lg shrink-0">
                <img
                  src={nexaboostMascotLogo}
                  alt="NexaBoost Mascot Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-serif flex items-center gap-1">
                  Nexa<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-purple-300">Boost</span>
                  <span className="text-amber-400 text-sm">★</span>
                </span>
                <span className="text-[10px] text-neutral-400 block font-sans">
                  We Sell Growth, Not Promises
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              AI Speed. Human Trust. Exponential Growth. We build and operate 14 Multilingual AI Agents that work 24/7 for modern enterprises.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#25D366]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span>Official WhatsApp Cloud API Partner</span>
            </div>
          </div>

          {/* Col 2: The 14 Agents Fleet */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              The 14 AI Fleet
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#agents" className="hover:text-purple-400 transition-colors">Lead Gen Agent (100+ daily)</a></li>
              <li><a href="#agents" className="hover:text-purple-400 transition-colors">Outreach & Prospecting Agent</a></li>
              <li><a href="#agents" className="hover:text-purple-400 transition-colors">Closer & Objection Agent</a></li>
              <li><a href="#agents" className="hover:text-purple-400 transition-colors">Follow-up Agent (Zero cold leads)</a></li>
              <li><a href="#agents" className="hover:text-purple-400 transition-colors">Content & Copywriting Agent (Urdu+Eng)</a></li>
              <li><a href="#agents" className="hover:text-purple-400 transition-colors">Video & Reels Script Agent</a></li>
              <li><a href="#agents" className="hover:text-purple-400 transition-colors">Customer Support Agent (24/7)</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Actions */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              Autonomous Hub
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={onOpenSandbox} className="hover:text-purple-400 transition-colors text-left cursor-pointer">
                  Interactive Agent Sandbox
                </button>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-purple-400 transition-colors text-left cursor-pointer">
                  Free AI Business Audit
                </button>
              </li>
              <li><a href="#visual-showcase" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">10 Official Visual Pillars & Poster</a></li>
              <li><a href="#simulator" className="hover:text-purple-400 transition-colors">WhatsApp CRM Simulator</a></li>
              <li><a href="#case-studies" className="hover:text-purple-400 transition-colors">Enterprise Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing & Deployment</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ & Security Standards</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/923462231606"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +92 346 2231606</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-400 px-1">
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>Coverage: UAE, Pakistan, USA, UK</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400 px-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enterprise SOC2 & Meta Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} NexaBoost AI Creative Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Powered by Gemini 3.7 Flash</span>
            <span>•</span>
            <span>Urdu + English Bilingual Core</span>
            <span>•</span>
            <a href="https://wa.me/923462231606" className="text-purple-400 hover:underline">
              Instant Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
