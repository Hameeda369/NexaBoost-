import React, { useState } from 'react';
import {
  Sparkles,
  Calculator,
  ArrowRight,
  TrendingUp,
  Clock,
  Zap,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Layers,
  RotateCcw,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AuditRequest, AuditResult, LanguageMode } from '../types';

interface AuditSectionProps {
  language: LanguageMode;
}

export const AuditSection: React.FC<AuditSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState<AuditRequest>({
    businessName: '',
    industry: 'E-Commerce / Retail',
    monthlyRevenue: '$10k - $50k',
    teamSize: '5-15 People',
    currentBottleneck: 'Manual lead prospecting and missing weekend WhatsApp inquiries',
    manualHoursWeekly: 20,
    targetLanguage: language,
    contactWhatsapp: '',
    contactEmail: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/audit/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.audit) {
        setAuditResult(data.audit);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (err) {
      console.error('Audit generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setAuditResult(null);
  };

  const buildWhatsappAuditUrl = () => {
    const text = `Hi NexaBoost Team! I just completed the Free AI Audit for my business "${
      formData.businessName || 'my brand'
    }" (${formData.industry}).\n\n- Projected Monthly Hours Saved: ${
      auditResult?.estimatedMonthlyHoursSaved || 60
    } hrs\n- Projected ROI: ${
      auditResult?.estimatedRoiMultiplier || 5.2
    }x\n\nI want to discuss deploying these AI Agents!`;
    return `https://wa.me/923462231606?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="audit" className="py-20 md:py-28 relative border-t border-[#222222] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#222222] text-[#A78BFA] text-xs font-mono uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{language === 'ur_nastaliq' ? 'فوری کاروباری جائزہ' : 'Instant AI Readiness Audit'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'مفت AI بزنس آڈٹ و ROI روڈ میپ'
            ) : (
              <>
                Free AI Business Audit & <span className="italic text-[#A78BFA]">ROI Roadmap</span>
              </>
            )}
          </h2>

          <p className="text-[#A0A0A0] text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'اپنے کاروبار کی تفصیلات درج کریں اور جانیے کہ ۱۴ میں سے کون سے AI ایجنٹس آپ کا سب سے زیادہ وقت اور پیسہ بچائیں گے۔'
            ) : (
              'Discover which of the 14 AI Agents will yield the highest ROI and how many manual hours your team can reclaim starting this week.'
            )}
          </p>
        </div>

        {/* Form or Result View */}
        <div className="max-w-4xl mx-auto">
          {!auditResult ? (
            <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#A78BFA] blur-[140px] opacity-5 pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#888888] mb-2">
                      {language === 'ur_nastaliq' ? 'کاروبار / برانڈ کا نام:' : 'Business / Brand Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Living, Al-Karam Fabrics, Modern Dental"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-[#222222] rounded-lg text-xs sm:text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#A78BFA] transition-colors font-sans"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#888888] mb-2">
                      {language === 'ur_nastaliq' ? 'کاروباری شعبہ / انڈسٹری:' : 'Industry / Niche *'}
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-[#222222] rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#A78BFA] transition-colors font-sans"
                    >
                      <option value="E-Commerce & Retail">E-Commerce & D2C Retail</option>
                      <option value="Real Estate & Property Development">Real Estate & Property Development</option>
                      <option value="Healthcare, Clinics & Aesthetic Centers">Healthcare, Clinics & Aesthetic Centers</option>
                      <option value="B2B Services, Agencies & Software">B2B Services, Agencies & SaaS</option>
                      <option value="Education, Academies & Coaching">Education & Online Coaching</option>
                      <option value="Hospitality, Restaurants & Travel">Hospitality & Restaurants</option>
                      <option value="Manufacturing & Export Logistics">Manufacturing & Export Logistics</option>
                    </select>
                  </div>

                  {/* Monthly Revenue Bracket */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#888888] mb-2">
                      {language === 'ur_nastaliq' ? 'ماہانہ آمدنی کا تخمینہ:' : 'Current Monthly Revenue:'}
                    </label>
                    <select
                      value={formData.monthlyRevenue}
                      onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-[#222222] rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#A78BFA] transition-colors font-sans"
                    >
                      <option value="Under $10,000 / month (or Rs. 2.5M)">Under $10k / mo</option>
                      <option value="$10,000 - $50,000 / month">$10k - $50k / mo</option>
                      <option value="$50,000 - $150,000 / month">$50k - $150k / mo</option>
                      <option value="$150,000+ / month (Enterprise)">$150k+ / mo (Enterprise)</option>
                    </select>
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#888888] mb-2">
                      {language === 'ur_nastaliq' ? 'ملازمین کی تعداد:' : 'Current Team Size:'}
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-[#222222] rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#A78BFA] transition-colors font-sans"
                    >
                      <option value="1-4 (Founder + Core)">1-4 People (Lean Core)</option>
                      <option value="5-15 (Growing Scale)">5-15 People</option>
                      <option value="16-50 (Established)">16-50 People</option>
                      <option value="50+ (Enterprise)">50+ People</option>
                    </select>
                  </div>

                </div>

                {/* Primary Bottleneck */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#888888] mb-2">
                    {language === 'ur_nastaliq'
                      ? 'سب سے بڑی رکاوٹ / مسئلہ کیا ہے؟'
                      : 'Biggest Operational Bottleneck or Goal *'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g., We get inquiries on WhatsApp on weekends but respond late; cold outreach takes 4 hours daily; missed follow-ups..."
                    value={formData.currentBottleneck}
                    onChange={(e) => setFormData({ ...formData, currentBottleneck: e.target.value })}
                    className="w-full px-4 py-3 bg-[#050505] border border-[#222222] rounded-lg text-xs sm:text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#A78BFA] transition-colors resize-none font-sans"
                  />
                </div>

                {/* Hours wasted Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                      {language === 'ur_nastaliq'
                        ? 'ہفتہ وار دستی کام میں ضائع ہونے والے گھنٹے:'
                        : 'Estimated Weekly Manual Hours Spent on Repetitive Tasks:'}
                    </label>
                    <span className="text-xs font-mono font-bold text-[#A78BFA]">
                      {formData.manualHoursWeekly} HOURS / WEEK
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={60}
                    step={5}
                    value={formData.manualHoursWeekly}
                    onChange={(e) =>
                      setFormData({ ...formData, manualHoursWeekly: Number(e.target.value) })
                    }
                    className="w-full h-1.5 bg-[#141414] rounded-lg appearance-none cursor-pointer accent-[#A78BFA]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#666666] mt-1">
                    <span>5 HRS (MINOR)</span>
                    <span>30 HRS (MODERATE)</span>
                    <span>60+ HRS (HEAVY OVERHEAD)</span>
                  </div>
                </div>

                {/* Contact (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#777777] mb-1">
                      WhatsApp Number (For Strategy Copy):
                    </label>
                    <input
                      type="text"
                      placeholder="+92 300 1234567"
                      value={formData.contactWhatsapp}
                      onChange={(e) => setFormData({ ...formData, contactWhatsapp: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#050505] border border-[#222222] rounded-lg text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#A78BFA] font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#777777] mb-1">
                      Work Email (Optional):
                    </label>
                    <input
                      type="email"
                      placeholder="founder@company.com"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#050505] border border-[#222222] rounded-lg text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#A78BFA] font-sans"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isLoading || !formData.businessName}
                  id="generate-audit-submit-btn"
                  className="w-full py-4 px-6 rounded-lg bg-[#A78BFA] hover:bg-[#C4B5FD] disabled:opacity-50 text-black font-bold text-xs sm:text-sm uppercase font-mono tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#A78BFA]/20 transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin text-black" />
                      <span>Synthesizing 14-Agent Operational Blueprint...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-black" />
                      <span>{language === 'ur_nastaliq' ? 'میرا AI آڈٹ جنریٹ کریں' : 'Generate Free AI Audit & Roadmap'}</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                  100% FREE • NO CREDIT CARD REQUIRED • POWERED BY GEMINI 3.7 FLASH
                </p>
              </form>
            </div>
          ) : (
            /* Audit Result View */
            <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-300">
              
              {/* Result Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono uppercase font-semibold bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Audit Complete for {formData.businessName}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white font-serif">
                    Custom AI 14-Agent Deployment Strategy
                  </h3>
                </div>

                <button
                  onClick={handleReset}
                  className="px-3.5 py-1.5 rounded-lg bg-[#141414] hover:bg-[#222222] text-xs font-mono text-[#888888] hover:text-white transition-colors cursor-pointer"
                >
                  Recalculate
                </button>
              </div>

              {/* Key Projected ROI Stats Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#050505] border border-[#222222] rounded-xl p-4 text-center">
                  <Clock className="w-5 h-5 text-[#A78BFA] mx-auto mb-1.5" />
                  <div className="text-2xl sm:text-3xl font-normal text-white font-serif">
                    {auditResult.estimatedMonthlyHoursSaved} hrs
                  </div>
                  <div className="text-[10px] font-mono text-[#777777] uppercase tracking-wider mt-0.5">
                    Saved Monthly
                  </div>
                </div>

                <div className="bg-[#050505] border border-[#222222] rounded-xl p-4 text-center">
                  <TrendingUp className="w-5 h-5 text-[#25D366] mx-auto mb-1.5" />
                  <div className="text-2xl sm:text-3xl font-normal text-[#25D366] font-serif">
                    +{auditResult.projectedLeadIncreasePercent}%
                  </div>
                  <div className="text-[10px] font-mono text-[#777777] uppercase tracking-wider mt-0.5">
                    Projected Lead Lift
                  </div>
                </div>

                <div className="bg-[#050505] border border-[#222222] rounded-xl p-4 text-center">
                  <Zap className="w-5 h-5 text-[#A78BFA] mx-auto mb-1.5" />
                  <div className="text-2xl sm:text-3xl font-normal text-[#A78BFA] font-serif">
                    {auditResult.estimatedRoiMultiplier}x
                  </div>
                  <div className="text-[10px] font-mono text-[#777777] uppercase tracking-wider mt-0.5">
                    90-Day ROI Multiplier
                  </div>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                  Executive Assessment:
                </h4>
                <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed bg-[#050505] p-4 rounded-xl border border-[#222222]">
                  {auditResult.summary}
                </p>
              </div>

              {/* Top Recommended Agents */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                  Priority Recommended Agents for Your Niche:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {auditResult.recommendedAgents.map((agentName, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#050505] border border-[#222222] text-xs sm:text-sm text-[#E0E0E0]"
                    >
                      <Check className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <span className="font-semibold">{agentName}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Roadmap */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                  4-Week Rollout Roadmap:
                </h4>
                <div className="space-y-3">
                  {auditResult.implementationRoadmap.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#050505] border border-[#222222] space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#A78BFA] text-black text-[10px] font-mono font-bold uppercase">
                          {step.week}
                        </span>
                        <span className="font-bold text-white text-xs sm:text-sm">{step.focus}</span>
                      </div>
                      <ul className="space-y-1 pl-2">
                        {step.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="text-xs text-[#888888] flex items-start gap-2">
                            <span className="text-[#A78BFA]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tactical Niche Advice */}
              <div className="p-4 rounded-xl bg-[#141414] border border-[#222222] text-xs sm:text-sm text-[#CCCCCC] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-[#A78BFA] font-mono uppercase text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  Tactical Leverage Insight:
                </div>
                <p className="leading-relaxed">{auditResult.customAdvice}</p>
              </div>

              {/* Actions: Send to WhatsApp / Book Onboarding */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={buildWhatsappAuditUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-4 px-6 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase font-mono tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Audit to NexaBoost WhatsApp (+92 346 2231606)</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto py-4 px-6 rounded-lg bg-[#141414] hover:bg-[#222222] border border-[#222222] text-[#888888] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Run Another Audit
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
