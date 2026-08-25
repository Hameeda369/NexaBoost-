import React from 'react';
import { Check, Sparkles, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/agentsData';
import { LanguageMode } from '../types';

interface PricingSectionProps {
  language: LanguageMode;
  onOpenAudit: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ language, onOpenAudit }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 relative border-t border-[#222222] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#222222] text-[#A78BFA] text-xs font-mono uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{language === 'ur_nastaliq' ? 'شفاف پیکیجز' : 'Simple, Transparent Deployment'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'سرمایہ کاری و تعیناتی کے منصوبے'
            ) : (
              <>
                Deployment Packages for{' '}
                <span className="italic text-[#A78BFA]">High-Growth Brands</span>
              </>
            )}
          </h2>

          <p className="text-[#A0A0A0] text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'کوئی خفیہ چارجز نہیں، مکمل ٹیکنیکل سیٹ اپ، واٹس ایپ کنکشن اور AI ٹریننگ شامل ہے۔'
            ) : (
              'Every tier includes full setup, WhatsApp Cloud API configuration, custom knowledgebase ingestion, and guaranteed 99.8% uptime.'
            )}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.popular
                  ? 'bg-[#0E0E0E] border-2 border-[#A78BFA] shadow-2xl shadow-[#A78BFA]/10 lg:-translate-y-2'
                  : 'bg-[#0A0A0A] border border-[#222222] hover:border-[#333333]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A78BFA] text-black font-mono font-bold text-[10px] uppercase tracking-widest px-3.5 py-1 rounded shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                
                {/* Plan Name & Tag */}
                <div className="mb-4">
                  <h3 className="text-xl font-normal text-white font-serif">
                    {language === 'ur_nastaliq' ? plan.nameUrdu : plan.name}
                  </h3>
                  <p className="text-xs text-[#888888] mt-1">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 my-6 pb-6 border-b border-[#222222]">
                  <span className="text-4xl sm:text-5xl font-normal text-white font-serif">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono uppercase text-[#777777]">
                    {plan.billingPeriod}
                  </span>
                </div>

                {/* Agents included badge */}
                <div className="mb-6 p-2 rounded-lg bg-[#050505] border border-[#222222] text-center text-xs font-mono font-bold text-[#A78BFA] uppercase tracking-wider">
                  {plan.agentsCount}
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-[#CCCCCC]">
                  {(language === 'ur_nastaliq' ? plan.featuresUrdu : plan.features).map(
                    (feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>

              </div>

              {/* Action Button: Direct WhatsApp Chat with Pre-filled text */}
              <div className="mt-8 pt-6 border-t border-[#222222] space-y-3">
                <a
                  href={`https://wa.me/923462231606?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-lg font-mono uppercase tracking-wider font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-[#A78BFA] hover:bg-[#C4B5FD] text-black shadow-lg shadow-[#A78BFA]/20'
                      : 'bg-[#141414] hover:bg-[#222222] border border-[#222222] text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.ctaText} via WhatsApp</span>
                </a>

                <p className="text-center text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                  Includes 14-day guarantee & dedicated engineer.
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Bespoke Box */}
        <div className="mt-14 p-6 rounded-xl bg-[#0A0A0A] border border-[#222222] text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-[#AAAAAA]">
            Need a dedicated on-premise private LLM deployment with custom ERP integrations?
          </p>
          <a
            href="https://wa.me/923462231606?text=Hi%20NexaBoost%20team!%20We%20need%20a%20Custom%20Enterprise%20Private%20LLM%20deployment."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-wider font-bold text-[#A78BFA] hover:underline inline-flex items-center gap-1"
          >
            Speak directly with our Chief Systems Architect on WhatsApp (+92 346 2231606) →
          </a>
        </div>

      </div>
    </section>
  );
};
