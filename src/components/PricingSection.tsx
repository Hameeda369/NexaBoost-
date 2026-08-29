import React from 'react';
import { Check, Sparkles, MessageCircle, ShieldCheck, Zap, FileText, ArrowRight, Copy } from 'lucide-react';
import { PRICING_PLANS } from '../data/agentsData';
import { LanguageMode } from '../types';

interface PricingSectionProps {
  language: LanguageMode;
  onOpenAudit: () => void;
  onOpenProposals?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ language, onOpenAudit, onOpenProposals }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 relative border-t border-white/5 bg-[#0A0A0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>{language === 'ur_nastaliq' ? 'شفاف پیکیجز' : 'Simple, Transparent Deployment'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'سرمایہ کاری و تعیناتی کے منصوبے'
            ) : (
              <>
                Deployment Packages for{' '}
                <span className="text-purple-400">High-Growth Brands</span>
              </>
            )}
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'کوئی خفیہ چارجز نہیں، مکمل ٹیکنیکل سیٹ اپ، واٹس ایپ کنکشن اور AI ٹریننگ شامل ہے۔'
            ) : (
              'Every tier includes full setup, WhatsApp Cloud API configuration, custom knowledgebase ingestion, and guaranteed 99.8% uptime.'
            )}
          </p>
        </div>

        {/* 14 PDF Proposals & Canva Copy Kit Feature Banner */}
        {onOpenProposals && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#14141E] to-indigo-950/40 border border-purple-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-bold uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5" />
                  <span>14 Official 1-Page PDF Proposals & Canva/Docs Kit</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                  Need individual 1-page service proposals with PKR rates?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Access complete copy-paste text formatted for Canva, MS Word, and Google Docs — including <strong className="text-purple-300">NEXA-SEO</strong>, <strong className="text-purple-300">NEXA-AI-AGENT</strong>, <strong className="text-purple-300">NEXA-UGC-ADS</strong> (Rs. 30,000 / 3 Videos - 1 Free), <strong className="text-purple-300">NEXA-VOICE-AI</strong>, and 10 more.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <button
                  id="open-14-proposals-banner-btn"
                  onClick={onOpenProposals}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open 14 PDF Proposals & Canva Kit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.popular
                  ? 'bg-[#151520] border-2 border-purple-500 shadow-2xl shadow-purple-950/40 lg:-translate-y-2'
                  : 'bg-[#111116] border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-black font-extrabold text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                
                {/* Plan Name & Tag */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white font-serif">
                    {language === 'ur_nastaliq' ? plan.nameUrdu : plan.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 my-6 pb-6 border-b border-white/10">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-serif">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-neutral-400">
                    {plan.billingPeriod}
                  </span>
                </div>

                {/* Agents included badge */}
                <div className="mb-6 p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center text-xs font-bold text-purple-300">
                  {plan.agentsCount}
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  {(language === 'ur_nastaliq' ? plan.featuresUrdu : plan.features).map(
                    (feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>

              </div>

              {/* Action Button: Direct WhatsApp Chat with Pre-filled text */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                <a
                  href={`https://wa.me/923462231606?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-purple-400 hover:bg-purple-300 text-black shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.ctaText} via WhatsApp</span>
                </a>

                <p className="text-center text-[10px] text-neutral-500">
                  Includes 14-day performance guarantee & dedicated engineer.
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Bespoke Box */}
        <div className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-neutral-300">
            Need a dedicated on-premise private LLM deployment with custom ERP integrations?
          </p>
          <a
            href="https://wa.me/923462231606?text=Hi%20NexaBoost%20team!%20We%20need%20a%20Custom%20Enterprise%20Private%20LLM%20deployment."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-purple-400 hover:underline inline-flex items-center gap-1"
          >
            Speak directly with our Chief Systems Architect on WhatsApp (+92 346 2231606) →
          </a>
        </div>

      </div>
    </section>
  );
};
