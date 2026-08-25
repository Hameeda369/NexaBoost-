import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Bot, ShieldCheck, Zap, TrendingUp, CheckCircle2, Play } from 'lucide-react';
import { LanguageMode } from '../types';

interface HeroProps {
  language: LanguageMode;
  onOpenAudit: () => void;
  onOpenSandbox: (agentId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenAudit, onOpenSandbox }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#222222]">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#A78BFA] blur-[170px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge: 14 Multilingual Agents Active */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A] border border-[#222222] text-xs font-mono tracking-wider text-[#A78BFA] backdrop-blur-md shadow-lg shadow-black/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span className="font-semibold text-white uppercase">
              {language === 'ur_nastaliq'
                ? '۱۴ خودمختار AI ایجنٹس — ۲۴/۷ لائیو'
                : '14 Autonomous AI Agents Pod'}
            </span>
            <span className="text-[#555]">•</span>
            <span className="text-[#A78BFA]">
              {language === 'ur_nastaliq' ? 'اردو اور انگلش میں' : 'Bilingual English + Urdu'}
            </span>
          </div>
        </div>

        {/* Primary Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white font-serif leading-[1.12]">
            {language === 'ur_nastaliq' ? (
              <span className="leading-relaxed">
                AI کی رفتار۔ <span className="italic text-[#A78BFA]">انسانی</span> اعتماد۔ <br />
                <span className="text-white">
                  بے مثال کاروباری ترقی۔
                </span>
              </span>
            ) : (
              <>
                AI Speed. <span className="italic text-[#A78BFA]">Human</span> Trust.{' '}
                <br className="hidden sm:inline" />
                <span className="text-neutral-100">
                  Exponential Growth.
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#A0A0A0] font-sans max-w-2xl mx-auto leading-relaxed">
            {language === 'ur_nastaliq' ? (
              'ہم آپ کے کاروبار کے لیے ۱۴ کسٹم AI ایجنٹس تیار کرتے ہیں جو دن رات لیڈز لاتے ہیں، واٹس ایپ پر گاہکوں سے بات کرتے ہیں، ڈیلز کلوز کرتے ہیں اور کاروبار بڑھاتے ہیں۔'
            ) : (
              'Deploy 14 synchronized Multilingual AI Agents that find leads, execute human-level outreach, handle objections, automate WhatsApp commerce, and scale your operations 24/7/365.'
            )}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Free Audit Button */}
            <button
              onClick={onOpenAudit}
              id="hero-book-audit-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#A78BFA] hover:bg-[#C4B5FD] text-black font-bold text-xs uppercase font-mono tracking-widest transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#A78BFA]/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>{language === 'ur_nastaliq' ? 'مفت AI بزنس آڈٹ حاصل کریں' : 'Book Free AI Audit'}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/923462231606?text=Hi%20NexaBoost%20Team!%20I%20saw%20your%2014%20AI%20Agents%20Hub%20and%20want%20to%20chat%20about%20deploying%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-chat-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase font-mono tracking-widest transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>{language === 'ur_nastaliq' ? 'واٹس ایپ پر رابطہ کریں' : 'Chat on WhatsApp'}</span>
            </a>

            {/* Live Interactive Sandbox Button */}
            <button
              onClick={() => onOpenSandbox('lead-gen')}
              id="hero-test-sandbox-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#0A0A0A] hover:bg-[#141414] border border-[#222222] text-[#E0E0E0] hover:border-[#A78BFA]/50 font-semibold text-xs uppercase font-mono tracking-widest transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-[#A78BFA]" />
              <span>{language === 'ur_nastaliq' ? 'لائیو ایجنٹ ٹیسٹ کریں' : 'Test Live Sandbox'}</span>
            </button>

          </div>

          {/* Micro Trust Points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Official WhatsApp Cloud API</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Live in 48-72 Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Human Override Anytime</span>
            </div>
          </div>

        </div>

        {/* Live Metrics Grid Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-xl p-5 text-center relative overflow-hidden group hover:border-[#A78BFA]/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-normal text-white font-serif mb-1">
              14
            </div>
            <div className="text-xs font-bold text-[#A78BFA] font-mono uppercase tracking-wider">
              {language === 'ur_nastaliq' ? 'مربوط AI ایجنٹس' : 'Specialized Agents'}
            </div>
            <div className="text-[11px] font-mono text-[#777777] mt-1">Sales, Ops, Support, Content</div>
          </div>

          <div className="bg-[#0A0A0A] border border-[#222222] rounded-xl p-5 text-center relative overflow-hidden group hover:border-[#A78BFA]/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-normal text-white font-serif mb-1">
              &lt; 5s
            </div>
            <div className="text-xs font-bold text-[#25D366] font-mono uppercase tracking-wider">
              {language === 'ur_nastaliq' ? 'فوری جوابی رفتار' : 'Response Speed'}
            </div>
            <div className="text-[11px] font-mono text-[#777777] mt-1">24/7/365 Zero delays</div>
          </div>

          <div className="bg-[#0A0A0A] border border-[#222222] rounded-xl p-5 text-center relative overflow-hidden group hover:border-[#A78BFA]/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-normal text-white font-serif mb-1">
              500k+
            </div>
            <div className="text-xs font-bold text-[#A78BFA] font-mono uppercase tracking-wider">
              {language === 'ur_nastaliq' ? 'محفوظ پیغامات' : 'Processed Messages'}
            </div>
            <div className="text-[11px] font-mono text-[#777777] mt-1">High-ticket deals & chats</div>
          </div>

          <div className="bg-[#0A0A0A] border border-[#222222] rounded-xl p-5 text-center relative overflow-hidden group hover:border-[#A78BFA]/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-normal text-white font-serif mb-1">
              100%
            </div>
            <div className="text-xs font-bold text-[#C4B5FD] font-mono uppercase tracking-wider">
              {language === 'ur_nastaliq' ? 'اردو و انگلش کوریج' : 'Bilingual Native'}
            </div>
            <div className="text-[11px] font-mono text-[#777777] mt-1">Urdu script + Roman + Eng</div>
          </div>

        </div>

      </div>
    </section>
  );
};
