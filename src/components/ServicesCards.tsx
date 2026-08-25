import React from 'react';
import { Bot, MessageCircle, Database, Video, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { LanguageMode } from '../types';

interface ServicesCardsProps {
  language: LanguageMode;
  onOpenSandbox: (agentId?: string) => void;
  onOpenAudit: () => void;
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({
  language,
  onOpenSandbox,
  onOpenAudit,
}) => {
  const services = [
    {
      id: 'fleet',
      icon: <Bot className="w-6 h-6 text-[#A78BFA]" />,
      badge: 'Core Engine',
      title: 'Autonomous 14-Agent AI Fleet',
      titleUrdu: '۱۴ خودکار AI ایجنٹس کا مکمل سسٹم',
      description:
        'A fully integrated team of 14 specialized AI agents handling lead generation, market research, copywriting, sales closing, and executive strategy 24/7.',
      features: [
        'Lead Gen & B2B Prospecting',
        'Urdu + English Bilingual Support',
        'Autonomous Objection Handling',
        'Executive Strategy & Reporting',
      ],
      actionText: 'Explore 14 Agents',
      onAction: () => onOpenSandbox('lead-gen'),
      highlight: true,
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
      badge: 'Instant Conversion',
      title: '24/7 WhatsApp AI CRM & Closer',
      titleUrdu: '۲۴/۷ واٹس ایپ AI سیلز اور سپورٹ ایجنٹ',
      description:
        'Automate inbound customer conversations, send instant quotes, qualify leads, and close deals directly on WhatsApp with sub-10 second response times.',
      features: [
        'Official Meta Cloud API Ready',
        'Zero-Latency Urdu/English Voice & Text',
        'Automatic Lead Sync to Dashboard',
        'One-Click Human Agent Handoff',
      ],
      actionText: 'Test WhatsApp CRM',
      onAction: () => {
        const simEl = document.getElementById('simulator');
        if (simEl) simEl.scrollIntoView({ behavior: 'smooth' });
      },
      highlight: false,
    },
    {
      id: 'lead-scraping',
      icon: <Database className="w-6 h-6 text-[#60A5FA]" />,
      badge: 'High Quality Leads',
      title: 'B2B Lead Scraping & Pipeline',
      titleUrdu: 'بی ٹو بی ویریفائیڈ لیڈز اور پائپ لائن',
      description:
        'Get 1,000+ verified decision-maker emails, phone numbers, and company profiles monthly tailored to your exact industry and target geography.',
      features: [
        '100% Verified Business Contacts',
        'Multi-Channel Nurture Workflows',
        'Personalized Cold Email AI Prompts',
        'Direct CRM & Master Sheet Export',
      ],
      actionText: 'View Pipeline Specs',
      onAction: () => onOpenSandbox('lead-gen'),
      highlight: false,
    },
    {
      id: 'content',
      icon: <Video className="w-6 h-6 text-[#F472B6]" />,
      badge: 'Viral Media',
      title: 'AI Content & Video Production',
      titleUrdu: 'AI وائرل کنٹینٹ اور ویڈیو پروڈکشن',
      description:
        'Generate high-converting short-form video scripts, UGC concepts, social media carousels, and multi-channel ad copy at 10x production speed.',
      features: [
        'High-Retention TikTok/Reels Scripts',
        'Psychological Hook Frameworks',
        'Multi-Format Visual Concepts',
        'Localization for Pakistan & Gulf',
      ],
      actionText: 'Test Content Agent',
      onAction: () => onOpenSandbox('ad-copy'),
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative border-b border-[#222222] bg-[#050505]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#A78BFA]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-[#333333] text-[#A78BFA] text-xs font-mono tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{language === 'ur_nastaliq' ? 'ہماری بنیادی خدمات' : 'Core Capabilities'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'نیکسابوسٹ کی ۴ طاقتور سروسز'
            ) : (
              <>
                Our 4 Core <span className="italic text-[#A78BFA]">AI Services</span>
              </>
            )}
          </h2>

          <p className="text-[#A0A0A0] text-base sm:text-lg">
            {language === 'ur_nastaliq'
              ? 'اپنے بزنس کو مکمل طور پر خودکار بنائیں اور سیلز کو تیز ترین رفتار سے بڑھائیں'
              : 'Everything your business needs to automate operations, capture verified leads, and convert customers 24/7.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 sm:p-8 bg-[#0A0A0A] border transition-all duration-300 relative group flex flex-col justify-between ${
                service.highlight
                  ? 'border-[#A78BFA]/40 hover:border-[#A78BFA] shadow-xl shadow-purple-950/20'
                  : 'border-[#222222] hover:border-[#444444]'
              }`}
            >
              <div className="space-y-5">
                
                {/* Top bar: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#2A2A2A] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#141414] border border-[#2A2A2A] text-[#CCCCCC]">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#A78BFA] transition-colors">
                    {language === 'ur_nastaliq' ? service.titleUrdu : service.title}
                  </h3>
                  <p className="text-sm text-[#999999] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-[#1C1C1C]">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#CCCCCC]">
                      <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#1C1C1C]">
                <button
                  onClick={service.onAction}
                  className={`w-full py-3 px-4 rounded-xl text-xs uppercase font-mono font-bold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    service.highlight
                      ? 'bg-[#A78BFA] hover:bg-[#C4B5FD] text-black shadow-md shadow-[#A78BFA]/20'
                      : 'bg-[#141414] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#A78BFA]/40 text-white'
                  }`}
                >
                  <span>{service.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
