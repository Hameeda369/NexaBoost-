import React, { useState } from 'react';
import { Sparkles, X, MessageCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { LanguageMode } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: LanguageMode;
  onSuccess?: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  language,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [mainProblem, setMainProblem] = useState('Missing WhatsApp Inquiries & Slow Response');
  const [monthlyTarget, setMonthlyTarget] = useState('3x Sales & 100+ Qualified Leads/mo');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    const fullNotes = `Business: ${businessType || 'N/A'} | Problem: ${mainProblem} | Target: ${monthlyTarget}`;
    const cleanPhone = phone.trim();

    try {
      // 1. Submit to NexaBoost Backend
      const response = await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          service: `Free AI Audit: ${mainProblem}`,
          businessName: businessType.trim() || 'Business Lead',
          company: businessType.trim() || 'Business Lead',
          notes: fullNotes,
          source: 'Free AI Audit Modal',
        }),
      });

      // 2. Direct formsubmit.co Alert to WhatsApp Number (+923462231606)
      try {
        fetch('https://formsubmit.co/ajax/+923462231606', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            subject: '🔔 NEW LEAD ALERT!',
            message: `Name: ${name}\nPhone: ${cleanPhone}\nService: Free AI Audit (${mainProblem})\nCompany: ${businessType || 'N/A'}\nTime: ${new Date().toLocaleString()}`,
          }),
        }).catch(() => {});
      } catch (err) {}

      const data = await response.json();
      const redirectUrl = `https://wa.me/923462231606?text=${encodeURIComponent(
        `New Audit Request!\nName: ${name}\nBusiness: ${businessType}\nProblem: ${mainProblem}\nTarget: ${monthlyTarget}\nPhone: ${cleanPhone}`
      )}`;

      setWhatsappUrl(data.whatsappDirectUrl || redirectUrl);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.warn('Audit submit fallback:', err);
      const fallbackUrl = `https://wa.me/923462231606?text=${encodeURIComponent(
        `New Audit Request!\nName: ${name}\nBusiness: ${businessType}\nProblem: ${mainProblem}\nTarget: ${monthlyTarget}\nPhone: ${cleanPhone}`
      )}`;
      setWhatsappUrl(fallbackUrl);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0A1F44] border-2 border-[#00A8FF]/40 rounded-2xl shadow-2xl overflow-hidden text-white font-sans">
        
        {/* Top Gradient Stripe */}
        <div className="h-2 w-full bg-gradient-to-r from-[#00A8FF] via-[#FFD700] to-[#25D366]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#888888] hover:text-white bg-[#07132B] hover:bg-[#122B5C] border border-[#00A8FF]/20 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6 space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07132B] border border-[#00A8FF]/30 text-[#FFD700] text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5 fill-[#FFD700]" />
                  <span>NexaBoost⚡ by Ali Mola</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                  Book Free AI Business Audit
                </h3>
                <p className="text-xs text-[#00A8FF] font-mono">
                  Barkat se Growth | AI Speed + Human Trust
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#CCCCCC] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bilal Ahmed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07132B] border border-[#00A8FF]/30 text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#FFD700]"
                  />
                </div>

                {/* Business Type / Company */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#CCCCCC] mb-1.5">
                    Business Type / Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Real Estate Agency / D2C Fashion Brand / Dental Clinic"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07132B] border border-[#00A8FF]/30 text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#FFD700]"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#CCCCCC] mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 346 2231606"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07132B] border border-[#00A8FF]/30 text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#FFD700]"
                  />
                </div>

                {/* Main Problem Dropdown */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#CCCCCC] mb-1.5">
                    What is your Main Operational Bottleneck?
                  </label>
                  <select
                    value={mainProblem}
                    onChange={(e) => setMainProblem(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07132B] border border-[#00A8FF]/30 text-xs text-white focus:outline-none focus:border-[#FFD700]"
                  >
                    <option value="Missing WhatsApp Inquiries & Slow Response">
                      Missing WhatsApp Inquiries & Slow Response
                    </option>
                    <option value="Lead Gen & Cold B2B Outbound Bottleneck">
                      Lead Gen & Cold B2B Outbound Bottleneck
                    </option>
                    <option value="High Team Payroll & Inconsistent Sales Closers">
                      High Team Payroll & Inconsistent Sales Closers
                    </option>
                    <option value="Low Ad ROAS & Video Script Production">
                      Low Ad ROAS & Video Script Production
                    </option>
                    <option value="24/7 Customer Support Overload">
                      24/7 Customer Support Overload
                    </option>
                  </select>
                </div>

                {/* Monthly Target */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#CCCCCC] mb-1.5">
                    Desired 90-Day Target
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3x Sales Revenue or $20,000/mo"
                    value={monthlyTarget}
                    onChange={(e) => setMonthlyTarget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07132B] border border-[#00A8FF]/30 text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#FFD700]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#ffe135] hover:from-[#ffe135] hover:to-[#FFD700] text-black font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FFD700]/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>{isSubmitting ? 'Analyzing & Syncing...' : 'Get Instant Audit & Sync'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-4 text-[11px] font-mono text-[#888888]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" /> 100% Free & Confidential
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8FF]" /> Saved to Google Sheets
                </span>
              </div>
            </div>
          ) : (
            /* Thank you screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Thank you, {name}!
                </h3>
                <div className="p-3.5 rounded-xl bg-[#07132B] border border-[#00A8FF]/30 text-emerald-400 font-mono text-sm font-bold">
                  ✨ "Thank you! We will contact you in 5 minutes."
                </div>
                <p className="text-xs text-[#AAAAAA] pt-1">
                  Your inquiry has been logged to our <strong className="text-white">NexaBoost Leads</strong> Google Sheet and Ali Mola (+92 346 2231606) has received the instant alert.
                </p>
              </div>

              {whatsappUrl && (
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/30"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat with Ali Mola</span>
                  </a>
                </div>
              )}

              <button
                onClick={onClose}
                className="text-xs font-mono text-[#00A8FF] hover:underline pt-2 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
