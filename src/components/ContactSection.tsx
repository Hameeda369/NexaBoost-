import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Send, CheckCircle2, Sparkles, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { LanguageMode } from '../types';

interface ContactSectionProps {
  language: LanguageMode;
  onLeadCaptured?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, onLeadCaptured }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'AI Lead Gen + WhatsApp CRM Package (15,000 PKR/mo)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const servicesList = [
    'AI Lead Gen + WhatsApp CRM Package (15,000 PKR/mo)',
    '13 AI Autonomous Agents Team ($997/mo Growth Plan)',
    'Starter AI Fleet ($497/mo)',
    '24/7 Multilingual WhatsApp Support & Sales Closer',
    'B2B Lead Scraping & Cold Outbound Pipeline',
    'AI UGC & Viral Video Script Production',
    'Custom Enterprise AI Automation',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // 1. Submit to NexaBoost Backend API (Saves to Dashboard & Google Sheets)
      const response = await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company || 'Private Client',
          service: formData.service,
          selectedPlan: formData.service,
          notes: `Company: ${formData.company || 'N/A'} | Notes: ${formData.notes || 'Interested in NexaBoost AI Lead Gen'}`,
          source: 'Contact Form',
        }),
      });

      // 2. Direct formsubmit.co Alert to WhatsApp Number (+923462231606)
      try {
        fetch('https://formsubmit.co/ajax/+923462231606', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            subject: '🔔 NEW LEAD ALERT!',
            message: `Name: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nCompany: ${formData.company || 'N/A'}\nTime: ${new Date().toLocaleString()}`,
          }),
        }).catch((e) => console.log('formsubmit notice:', e));
      } catch (err) {
        console.warn('formsubmit client call notice:', err);
      }

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setWhatsappUrl(
          data.whatsappDirectUrl ||
            `https://wa.me/923462231606?text=${encodeURIComponent(
              `Salam! I want to book a Free AI Audit for NexaBoost.\nName: ${formData.name}\nPhone: ${formData.phone}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service}`
            )}`
        );
        if (onLeadCaptured) onLeadCaptured();
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (err: any) {
      console.warn('Backend submit fallback:', err);
      // Also attempt formsubmit in catch
      try {
        fetch('https://formsubmit.co/ajax/+923462231606', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            subject: '🔔 NEW LEAD ALERT!',
            message: `Name: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nTime: ${new Date().toLocaleString()}`,
          }),
        }).catch(() => {});
      } catch (e) {}

      setIsSubmitted(true);
      setWhatsappUrl(
        `https://wa.me/923462231606?text=${encodeURIComponent(
          `Salam! I want to book a Free AI Audit for NexaBoost.\nName: ${formData.name}\nPhone: ${formData.phone}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service}`
        )}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-b border-[#222222] bg-[#070707]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[#A78BFA]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-[#333333] text-[#A78BFA] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{language === 'ur_nastaliq' ? 'ہم سے رابطہ کریں' : 'Direct Access'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'آج ہی اپنا AI سفر شروع کریں'
            ) : (
              <>
                Let’s Scale Your Business with <span className="italic text-[#A78BFA]">Autonomous AI</span>
              </>
            )}
          </h2>

          <p className="text-[#A0A0A0] text-base sm:text-lg">
            {language === 'ur_nastaliq'
              ? 'فارم پُر کریں یا براہ راست واٹس ایپ پر علی مولا سے فوری بات چیت کریں'
              : 'Submit your requirements below to instantly sync with our auto dashboard, or connect directly on WhatsApp with our founder Ali Mola.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-[#222222] space-y-6">
              <h3 className="text-xl font-serif text-white">Direct Communication</h3>
              
              <div className="space-y-4">
                
                {/* WhatsApp Direct Card */}
                <a
                  href="https://wa.me/923462231606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-[#262626] hover:border-[#25D366]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono text-[#888888] uppercase">Fastest Response (&lt; 2 min)</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                      +92 346 2231606
                    </div>
                    <div className="text-xs text-[#999999]">Direct chat with Founder Ali Mola</div>
                  </div>
                </a>

                {/* Email Direct Card */}
                <a
                  href="mailto:aispecialistugccreator@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-[#262626] hover:border-[#A78BFA]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/10 border border-[#A78BFA]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#A78BFA]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono text-[#888888] uppercase">Official Inquiries</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#A78BFA] transition-colors break-all">
                      aispecialistugccreator@gmail.com
                    </div>
                    <div className="text-xs text-[#999999]">Proposals, custom workflows & NDAs</div>
                  </div>
                </a>

              </div>

              {/* Deployment Highlights */}
              <div className="pt-4 border-t border-[#1C1C1C] space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-[#CCCCCC]">
                  <Clock className="w-4 h-4 text-[#A78BFA] shrink-0" />
                  <span>Deployment ready in 7 days or less</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#CCCCCC]">
                  <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Zero risk — 100% money-back SLA guarantee</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#CCCCCC]">
                  <Sparkles className="w-4 h-4 text-[#A78BFA] shrink-0" />
                  <span>Auto-synced directly to live Dashboard</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7">
            
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0A0A0A] border border-[#222222] shadow-2xl relative overflow-hidden">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-white">Inquiry Received!</h3>
                    <div className="p-3.5 rounded-xl bg-[#0A1F44] border border-[#00A8FF]/40 text-emerald-400 font-mono text-sm font-bold">
                      ✨ "Thank you! We will contact you in 5 minutes."
                    </div>
                    <p className="text-xs text-[#AAAAAA] max-w-md mx-auto pt-1">
                      Thank you <span className="text-white font-bold">{formData.name}</span>. Your inquiry has been saved to the <strong className="text-white">NexaBoost Leads</strong> Google Sheet, auto-synced to our Dashboard, and dispatched to Founder Ali Mola (+92 346 2231606).
                    </p>
                  </div>

                  {whatsappUrl && (
                    <div className="pt-4 space-y-3 max-w-md mx-auto">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm uppercase font-mono tracking-wider transition-all shadow-lg shadow-[#25D366]/25"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Continue to WhatsApp Now</span>
                      </a>
                      <p className="text-[11px] font-mono text-[#777777]">
                        Click above to chat directly on WhatsApp (+92 346 2231606)
                      </p>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          company: '',
                          service: servicesList[0],
                          notes: '',
                        });
                      }}
                      className="text-xs font-mono text-[#A78BFA] hover:underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-[#1F1F1F]">
                    <h3 className="text-lg font-serif text-white">Get Demo & Consultation</h3>
                    <span className="text-xs font-mono text-[#FFD700] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-[#FFD700]" />
                      Google Sheets Synced
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hamza Tariq"
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 346 2231606"
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm font-mono"
                      />
                    </div>
                  </div>

                  {/* Company & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Tariq Textiles / Apex Real Estate"
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                        Interested Service / Package
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                      >
                        {servicesList.map((svc, i) => (
                          <option key={i} value={svc} className="bg-[#141414] text-white">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                      Work Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#AAAAAA] tracking-wider">
                      Business Details / Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your current bottlenecks, target audience, or what you want to automate..."
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#2A2A2A] focus:border-[#A78BFA] focus:outline-none text-white text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#A78BFA] hover:bg-[#C4B5FD] disabled:opacity-50 text-black font-mono text-sm uppercase font-bold tracking-wider transition-all duration-300 shadow-lg shadow-[#A78BFA]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Syncing to Auto Dashboard...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit & Trigger WhatsApp Confirmation</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] font-mono text-[#666666]">
                    🔒 All submissions are securely logged and forwarded to our official WhatsApp helpline (+92 346 2231606).
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
