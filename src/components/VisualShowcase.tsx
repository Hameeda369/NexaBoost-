import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  ZoomIn,
  Play,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Cpu,
  TrendingUp,
  Video,
  ExternalLink,
  X,
  CheckCircle2,
  FileText,
  PhoneCall
} from 'lucide-react';
import { VISUAL_ASSETS, VisualAssetItem } from '../data/visualAssetsData';
import { LanguageMode } from '../types';

interface VisualShowcaseProps {
  language: LanguageMode;
  onOpenSandbox: (agentId?: string) => void;
  onOpenAudit: () => void;
}

export const VisualShowcase: React.FC<VisualShowcaseProps> = ({
  language,
  onOpenSandbox,
  onOpenAudit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalAsset, setActiveModalAsset] = useState<VisualAssetItem | null>(null);

  const categories = [
    { id: 'all', label: 'All 10 Visual Assets', labelUrdu: 'تمام ۱۰ آفیشل ویژولز', icon: Layers },
    { id: 'ecosystem', label: '14-in-1 Ecosystem Poster', labelUrdu: '۱۴ سروسز پوسٹر', icon: Sparkles },
    { id: 'hq', label: 'DigiGulBibi Executive HQ', labelUrdu: 'ہیڈ کوارٹر و قیادت', icon: Building2 },
    { id: 'ai_automation', label: 'AI Automation & Voice', labelUrdu: 'اے آئی و وائس کالنگ', icon: Cpu },
    { id: 'growth_media', label: 'Growth, SEO & Video Ads', labelUrdu: 'ایس ای او، ای میل و ایڈز', icon: TrendingUp },
    { id: 'strategy', label: 'Strategy & Omnichannel', labelUrdu: 'اسٹریٹجی و اومنی چینل', icon: ShieldCheck },
    { id: 'product_tech', label: 'Web, App & Product Tech', labelUrdu: 'ویب سائٹ، ایپس و برانڈنگ', icon: Video }
  ];

  const filteredAssets =
    selectedCategory === 'all'
      ? VISUAL_ASSETS
      : VISUAL_ASSETS.filter((item) => item.category === selectedCategory);

  return (
    <section id="visual-showcase" className="py-24 bg-[#08080A] relative overflow-hidden border-t border-b border-white/5">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>
              {language === 'ur_nastaliq'
                ? 'آفیشل برانڈ و سروسز آرکیٹیکچر گیلری'
                : 'Official Brand Architecture & Visual Ecosystem'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            {language === 'ur_nastaliq' ? (
              <>
                نیکسا بوسٹ کے <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-200 to-purple-300">۱۰ آفیشل ویژول سسٹمز</span> کی نمائش
              </>
            ) : (
              <>
                Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-200 to-purple-300">10 NexaBoost Visual Pillars</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            {language === 'ur_nastaliq'
              ? 'ڈیجی گل بی بی ایگزیکٹو ہیڈ کوارٹر سے لے کر ۱۴ اے آئی سروسز کے ماسٹر پوسٹر اور وائرل ویڈیو اشتہارات تک، تمام آفیشل اثاثہ جات اور جدید ڈیزائن سسٹم ملاحظہ فرمائیں۔'
              : 'From our prestigious DigiGulBibi Executive Headquarters to the comprehensive 14-in-1 AI Services Master Poster, explore the visual frameworks powering high-performance enterprises.'}
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-purple-400'}`} />
                <span>{language === 'ur_nastaliq' ? cat.labelUrdu : cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="group bg-[#0E0E12] rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-purple-950/30"
            >
              <div>
                {/* Image Container with Aspect Ratio and Lightbox Trigger */}
                <div
                  onClick={() => setActiveModalAsset(asset)}
                  className="relative w-full aspect-[9/14] sm:aspect-[9/13] bg-black/60 overflow-hidden cursor-pointer group-hover:brightness-105 transition-all"
                >
                  <img
                    src={asset.imageSrc}
                    alt={asset.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-black/30" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30 flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{language === 'ur_nastaliq' ? asset.badgeUrdu : asset.badge}</span>
                    </span>
                  </div>

                  {/* Zoom Hover CTA Button */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalAsset(asset);
                      }}
                      className="p-2 rounded-full bg-purple-600/90 text-white shadow-lg backdrop-blur-sm hover:bg-purple-500 transition-all cursor-pointer"
                      title="View High-Res Poster"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-md">
                      {language === 'ur_nastaliq' ? asset.titleUrdu : asset.title}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
                      {language === 'ur_nastaliq' ? asset.subtitleUrdu : asset.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Content & Highlights */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {language === 'ur_nastaliq' ? asset.descriptionUrdu : asset.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {(language === 'ur_nastaliq' ? asset.highlightsUrdu : asset.highlights)
                      .slice(0, 2)
                      .map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveModalAsset(asset)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-semibold transition-all cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-purple-400" />
                  <span>{language === 'ur_nastaliq' ? 'مکمل پوسٹر دیکھیں' : 'Full-Screen'}</span>
                </button>

                <button
                  onClick={() => {
                    const targetAgentId = asset.associatedAgentIds[0] || 'lead-gen';
                    onOpenSandbox(targetAgentId);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
                  <span>{language === 'ur_nastaliq' ? 'ایجنٹ ٹیسٹ کریں' : 'Test Agent'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-[#12121A] to-amber-900/20 border border-purple-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>DigiGulBibi & NexaBoost Enterprise Standards</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {language === 'ur_nastaliq'
                ? 'کیا آپ اپنے برانڈ کے لیے یہ مکمل ایکو سسٹم نافذ کرنا چاہتے ہیں؟'
                : 'Ready to Deploy this Complete Visual & AI System for Your Brand?'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
              {language === 'ur_nastaliq'
                ? 'ہم آپ کے کاروبار کے لیے تمام ۱۴ ایجنٹس، کسٹم ویب سائٹ، اور ہائی کنورٹنگ ویڈیو اشتہارات صرف ۷ سے ۱۴ دنوں میں لائیو کرتے ہیں۔'
                : 'We deploy the entire autonomous architecture, custom websites, and viral ad funnels for your enterprise in just 7 to 14 days.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenAudit}
              className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>{language === 'ur_nastaliq' ? 'مفت بزنس آڈٹ حاصل کریں' : 'Get Free AI Audit'}</span>
            </button>

            <a
              href={`https://wa.me/923462231606?text=${encodeURIComponent(
                'Hi NexaBoost Leadership! I explored your 10 Official Visual Pillars on the website and want to discuss deploying the full system for my brand.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-green-600/30 flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{language === 'ur_nastaliq' ? 'واٹس ایپ پر فوری رابطہ' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Full-Screen High-Res Modal Lightbox */}
      {activeModalAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto">
          <div className="bg-[#0D0D12] border border-purple-500/40 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {language === 'ur_nastaliq' ? activeModalAsset.badgeUrdu : activeModalAsset.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {language === 'ur_nastaliq' ? activeModalAsset.titleUrdu : activeModalAsset.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalAsset(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[80vh] overflow-y-auto">
              
              {/* Left Column: High-Res Full Image (7 cols) */}
              <div className="lg:col-span-7 bg-black/70 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={activeModalAsset.imageSrc}
                  alt={activeModalAsset.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[65vh] object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Right Column: Full Specifications, Highlights & Actions (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-1">
                      {language === 'ur_nastaliq' ? 'ایکو سسٹم کی تفصیل:' : 'System Architecture:'}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {language === 'ur_nastaliq'
                        ? activeModalAsset.descriptionUrdu
                        : activeModalAsset.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    <h5 className="text-xs font-semibold text-white">
                      {language === 'ur_nastaliq' ? 'اہم خصوصیات و فوائد:' : 'Key Capabilities & Outputs:'}
                    </h5>
                    {(language === 'ur_nastaliq'
                      ? activeModalAsset.highlightsUrdu
                      : activeModalAsset.highlights
                    ).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Connected Agents */}
                  {activeModalAsset.associatedAgentIds.length > 0 && (
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <h5 className="text-xs font-semibold text-purple-300">
                        {language === 'ur_nastaliq'
                          ? 'مربوط خودمختار ایجنٹس:'
                          : 'Associated Autonomous AI Agents:'}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {activeModalAsset.associatedAgentIds.map((agentId) => (
                          <button
                            key={agentId}
                            onClick={() => {
                              setActiveModalAsset(null);
                              onOpenSandbox(agentId);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/40 text-[11px] text-neutral-300 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                          >
                            <Play className="w-2.5 h-2.5 text-purple-400" />
                            <span className="capitalize">{agentId.replace('-', ' ')}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal CTA Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/923462231606?text=${encodeURIComponent(
                      activeModalAsset.whatsappText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-600/30 transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>
                      {language === 'ur_nastaliq'
                        ? 'یہ سسٹم اپنے برانڈ کے لیے آرڈر کریں'
                        : 'Deploy this System via WhatsApp'}
                    </span>
                  </a>

                  <button
                    onClick={() => {
                      const firstAgent = activeModalAsset.associatedAgentIds[0] || 'lead-gen';
                      setActiveModalAsset(null);
                      onOpenSandbox(firstAgent);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 text-purple-400" />
                    <span>
                      {language === 'ur_nastaliq'
                        ? 'لائیو ایجنٹ سینڈ باکس میں ٹیسٹ کریں'
                        : 'Test in Live Agent Sandbox'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
