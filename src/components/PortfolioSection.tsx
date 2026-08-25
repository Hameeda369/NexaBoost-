import React from 'react';
import { ExternalLink, Sparkles, ArrowRight, Layers, Bot, Zap, Cpu, CheckCircle2 } from 'lucide-react';
import { LanguageMode } from '../types';

interface PortfolioSectionProps {
  language: LanguageMode;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ language }) => {
  const portfolioUrl = 'https://hamigul-lens-flow.base44.app/';

  return (
    <section id="portfolio" className="py-20 md:py-28 relative border-b border-[#222222] bg-[#050505]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#A78BFA]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-[#333333] text-[#A78BFA] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{language === 'ur_nastaliq' ? 'ہمارا پورٹ فولیو' : 'Production Showcase'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'ہمارا کام اور پورٹ فولیو'
            ) : (
              <>
                Our Work & <span className="italic text-[#A78BFA]">Portfolio</span>
              </>
            )}
          </h2>

          <p className="text-[#A0A0A0] text-base sm:text-lg">
            {language === 'ur_nastaliq'
              ? 'دیکھیں اصلی پروجیکٹس جو ہم نے AI اور خودکار ایجنٹس کی مدد سے تیار کیے ہیں'
              : 'See real projects we built with AI'}
          </p>
        </div>

        {/* Big Portfolio Feature Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-[#A78BFA]/40 via-[#222222] to-[#111111] hover:from-[#A78BFA] hover:to-[#A78BFA]/30 transition-all duration-500 shadow-2xl shadow-purple-950/20">
            
            <div className="rounded-[15px] bg-[#0A0A0A] p-6 sm:p-10 md:p-12 overflow-hidden relative">
              
              {/* Decorative background grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left details (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/30 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      Featured Live AI System
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Deployment
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white group-hover:text-white transition-colors">
                      Hamigul Lens Flow — AI Intelligent Suite
                    </h3>
                    <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
                      An end-to-end autonomous business workflow and visual intelligence platform built on modern AI frameworks. Experience live pipeline automation, real-time client interaction flows, and high-performance agent architecture.
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#CCCCCC]">
                      <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <span>Full-Stack AI Integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#CCCCCC]">
                      <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <span>Autonomous Workflow Automation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#CCCCCC]">
                      <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <span>Interactive Client Portals</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#CCCCCC]">
                      <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <span>High-Conversion Funnel Design</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                      href={portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#A78BFA] hover:bg-[#C4B5FD] text-black font-mono text-sm uppercase font-bold tracking-wider transition-all duration-300 shadow-lg shadow-[#A78BFA]/25 group/btn hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>View My Work</span>
                      <ArrowRight className="w-4 h-4 text-black group-hover/btn:translate-x-1 transition-transform" />
                    </a>

                    <span className="text-xs font-mono text-[#888888] flex items-center justify-center sm:justify-start gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-[#A78BFA]" />
                      <span>Opens live project in new tab</span>
                    </span>
                  </div>

                </div>

                {/* Right Visual Card / Mock Preview (5 cols) */}
                <div className="lg:col-span-5">
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-xl overflow-hidden border border-[#2A2A2A] group-hover:border-[#A78BFA]/50 transition-all duration-300 bg-[#0E0E0E] shadow-xl"
                  >
                    {/* App Window Top Bar */}
                    <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <div className="px-3 py-0.5 rounded bg-[#0A0A0A] border border-[#222222] text-[10px] font-mono text-[#888888] truncate max-w-[200px]">
                        hamigul-lens-flow.base44.app
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#A78BFA] transition-colors" />
                    </div>

                    {/* Interactive Preview Canvas */}
                    <div className="p-6 sm:p-8 space-y-4 bg-gradient-to-br from-[#121212] to-[#080808]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#1F1F1F]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[#A78BFA]/20 border border-[#A78BFA]/30 flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-[#A78BFA]" />
                          </div>
                          <div>
                            <div className="text-xs font-mono font-bold text-white">Lens Flow Engine</div>
                            <div className="text-[10px] font-mono text-emerald-400">Status: Live 99.9%</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-[#A78BFA] bg-[#A78BFA]/10 px-2 py-0.5 rounded border border-[#A78BFA]/20">
                          v2.4 Active
                        </span>
                      </div>

                      {/* Mock pipeline stages */}
                      <div className="space-y-2 font-mono text-xs">
                        <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222] flex items-center justify-between text-[#CCCCCC]">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#A78BFA]"></span>
                            AI Visual Ingestion
                          </span>
                          <span className="text-[10px] text-emerald-400 font-bold">100% OK</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222] flex items-center justify-between text-[#CCCCCC]">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#A78BFA]"></span>
                            Multi-Node Flow Router
                          </span>
                          <span className="text-[10px] text-emerald-400 font-bold">ACTIVE</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222] flex items-center justify-between text-[#CCCCCC]">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                            Direct Lead Handoff
                          </span>
                          <span className="text-[10px] text-[#25D366] font-bold">SYNCED</span>
                        </div>
                      </div>

                      <div className="pt-2 text-center">
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A78BFA] group-hover:underline">
                          <span>Click to launch full app preview</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
