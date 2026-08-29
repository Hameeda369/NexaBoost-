import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, Bot, ShieldCheck, Zap, TrendingUp, CheckCircle2, Play, FileText, Building2, Eye, Image as ImageIcon, Rotate3d } from 'lucide-react';
import { LanguageMode } from '../types';
import servicesPosterImg from '../assets/images/nexaboost_services_poster_1787994444446.jpg';
import digigulbibiHqImg from '../assets/images/digigulbibi_hq_office_1787994475205.jpg';
import goldCubesImg from '../assets/images/gold_cubes_omnichannel_1787994497632.jpg';
import { FourDInteractiveCard } from './FourDInteractiveCard';

interface HeroProps {
  language: LanguageMode;
  onOpenAudit: () => void;
  onOpenSandbox: (agentId?: string) => void;
  onOpenProposals?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenAudit, onOpenSandbox, onOpenProposals }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/5">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-purple-500/30 text-xs font-medium text-purple-300 backdrop-blur-md shadow-lg shadow-purple-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-semibold text-white">
              {language === 'ur_nastaliq'
                ? '۱۴ خودمختار AI ایجنٹس — ۲۴/۷ لائیو'
                : '14 Autonomous AI Agents Pod'}
            </span>
            <span className="text-neutral-400">•</span>
            <span className="text-purple-300">
              {language === 'ur_nastaliq' ? 'اردو اور انگلش میں' : 'Bilingual English + Urdu'}
            </span>
          </div>

          {onOpenProposals && (
            <button
              onClick={onOpenProposals}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-xs font-semibold text-purple-300 transition-all cursor-pointer shadow-sm"
              title="14 1-Page PDF Proposals with PKR Rates & Canva Kit"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>14 PDF Proposals & Canva Kit</span>
            </button>
          )}

          {/* 4D Dimension Experience Button */}
          <a
            href="#4d-experience"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-xs font-semibold text-amber-300 transition-all cursor-pointer shadow-sm animate-pulse"
            title="Interactive 4D Hyperspace & Tesseract Animation"
          >
            <Rotate3d className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'ur_nastaliq' ? '۴ ڈی اینیمیشن انجن' : '4D AI Engine'}</span>
          </a>
        </div>

        {/* Primary Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-serif leading-[1.12]">
            {language === 'ur_nastaliq' ? (
              <span className="leading-relaxed">
                AI کی رفتار۔ انسانی اعتماد۔ <br />
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  بے مثال کاروباری ترقی۔
                </span>
              </span>
            ) : (
              <>
                AI Speed. Human Trust.{' '}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  Exponential Growth.
                </span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-sans max-w-2xl mx-auto leading-relaxed">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-purple-400 hover:bg-purple-300 text-black font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-purple-500/25 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-black" />
              <span>{language === 'ur_nastaliq' ? 'مفت AI بزنس آڈٹ حاصل کریں' : 'Book Free AI Audit'}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/923462231606?text=Hi%20NexaBoost%20Team!%20I%20saw%20your%2014%20AI%20Agents%20Hub%20and%20want%20to%20chat%20about%20deploying%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-chat-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              <span>{language === 'ur_nastaliq' ? 'واٹس ایپ پر رابطہ کریں' : 'Chat on WhatsApp'}</span>
            </a>

            {/* Live Interactive Sandbox Button */}
            <button
              onClick={() => onOpenSandbox('lead-gen')}
              id="hero-test-sandbox-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-base transition-all cursor-pointer"
            >
              <Zap className="w-5 h-5 text-purple-400" />
              <span>{language === 'ur_nastaliq' ? 'لائیو ایجنٹ ٹیسٹ کریں' : 'Test Live Sandbox'}</span>
            </button>

          </div>

          {/* Micro Trust Points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Official WhatsApp Cloud API</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Live in 48-72 Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Human Override Anytime</span>
            </div>
          </div>

        </div>

        {/* Live Metrics Grid Banner with 4D Gyroscope Tilt */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <FourDInteractiveCard depthIntensity={10} glowColor="rgba(168, 85, 247, 0.25)">
            <div className="bg-[#111116] border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden group hover:border-purple-500/40 transition-colors h-full">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif mb-1">
                14
              </div>
              <div className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-wider">
                {language === 'ur_nastaliq' ? 'مربوط AI ایجنٹس' : 'Specialized Agents'}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Sales, Ops, Support, Content</div>
            </div>
          </FourDInteractiveCard>

          <FourDInteractiveCard depthIntensity={10} glowColor="rgba(16, 185, 129, 0.25)">
            <div className="bg-[#111116] border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden group hover:border-emerald-500/40 transition-colors h-full">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif mb-1">
                &lt; 5s
              </div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                {language === 'ur_nastaliq' ? 'فوری جوابی رفتار' : 'Response Speed'}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">24/7/365 Zero delays</div>
            </div>
          </FourDInteractiveCard>

          <FourDInteractiveCard depthIntensity={10} glowColor="rgba(245, 158, 11, 0.25)">
            <div className="bg-[#111116] border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden group hover:border-amber-500/40 transition-colors h-full">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif mb-1">
                500k+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-wider">
                {language === 'ur_nastaliq' ? 'محفوظ پیغامات' : 'Processed Messages'}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">High-ticket deals & chats</div>
            </div>
          </FourDInteractiveCard>

          <FourDInteractiveCard depthIntensity={10} glowColor="rgba(99, 102, 241, 0.25)">
            <div className="bg-[#111116] border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden group hover:border-indigo-500/40 transition-colors h-full">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-indigo-400 uppercase tracking-wider">
                {language === 'ur_nastaliq' ? 'اردو و انگلش کوریج' : 'Bilingual Native'}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Urdu script + Roman + Eng</div>
            </div>
          </FourDInteractiveCard>

        </div>

        {/* Featured Visual Architecture Hero Teaser Cards with 4D Tilt */}
        <div className="mt-12 max-w-5xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
                {language === 'ur_nastaliq' ? 'آفیشل برانڈ و ایکو سسٹم پوسٹرز:' : 'Official Brand & Visual Ecosystem Hub:'}
              </span>
            </div>
            <a
              href="#visual-showcase"
              className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-semibold transition-colors"
            >
              <span>{language === 'ur_nastaliq' ? 'تمام ۱۰ ویژولز دیکھیں' : 'View All 10 Posters'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* 1. 14 Services Poster Teaser */}
            <FourDInteractiveCard depthIntensity={12} glowColor="rgba(168, 85, 247, 0.3)">
              <a
                href="#visual-showcase"
                className="group p-2.5 rounded-xl bg-black/40 hover:bg-purple-950/20 border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-3 block"
              >
                <div className="w-12 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-white/15">
                  <img
                    src={servicesPosterImg}
                    alt="14 AI Services Poster"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-bold text-purple-400 block uppercase">14-in-1 Poster</span>
                  <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    14 AI Services Master
                  </span>
                  <span className="text-[11px] text-neutral-400 line-clamp-1">Full-stack agency infra</span>
                </div>
              </a>
            </FourDInteractiveCard>

            {/* 2. DigiGulBibi HQ Teaser */}
            <FourDInteractiveCard depthIntensity={12} glowColor="rgba(245, 158, 11, 0.3)">
              <a
                href="#visual-showcase"
                className="group p-2.5 rounded-xl bg-black/40 hover:bg-amber-950/20 border border-white/10 hover:border-amber-500/40 transition-all flex items-center gap-3 block"
              >
                <div className="w-12 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-white/15">
                  <img
                    src={digigulbibiHqImg}
                    alt="DigiGulBibi Executive HQ"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-bold text-amber-400 block uppercase">Leadership HQ</span>
                  <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    DigiGulBibi Executive HQ
                  </span>
                  <span className="text-[11px] text-neutral-400 line-clamp-1">"We Sell Promises Not Products"</span>
                </div>
              </a>
            </FourDInteractiveCard>

            {/* 3. Omnichannel 3D Stack Teaser */}
            <FourDInteractiveCard depthIntensity={12} glowColor="rgba(99, 102, 241, 0.3)">
              <a
                href="#visual-showcase"
                className="group p-2.5 rounded-xl bg-black/40 hover:bg-indigo-950/20 border border-white/10 hover:border-indigo-500/40 transition-all flex items-center gap-3 block"
              >
                <div className="w-12 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-white/15">
                  <img
                    src={goldCubesImg}
                    alt="Omnichannel 3D Stack"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-bold text-indigo-400 block uppercase">Conversion Stack</span>
                  <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                    Omnichannel 3D Growth
                  </span>
                  <span className="text-[11px] text-neutral-400 line-clamp-1">Meta, Google & Ads Synergy</span>
                </div>
              </a>
            </FourDInteractiveCard>
          </div>
        </div>

      </div>
    </section>
  );
};
