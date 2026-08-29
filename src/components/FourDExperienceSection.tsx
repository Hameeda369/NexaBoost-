import React, { useState } from 'react';
import {
  Rotate3d,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Compass,
  ArrowRight,
  TrendingUp,
  Boxes,
  Play
} from 'lucide-react';
import { FourDAnimationCanvas } from './FourDAnimationCanvas';
import { FourDInteractiveCard } from './FourDInteractiveCard';
import { LanguageMode } from '../types';

interface FourDExperienceSectionProps {
  language: LanguageMode;
  onOpenSandbox: (agentId?: string) => void;
  onOpenAudit: () => void;
}

export const FourDExperienceSection: React.FC<FourDExperienceSectionProps> = ({
  language,
  onOpenSandbox,
  onOpenAudit
}) => {
  const [selectedAgentDimension, setSelectedAgentDimension] = useState<string>('lead-gen');

  const dimensionFeatures = [
    {
      id: 'd1',
      title: 'Dimension 1: Real-Time Speed (Z-Speed)',
      titleUrdu: 'پہلی جہت: الٹرا فاسٹ اسپیڈ',
      desc: 'Sub-800ms neural inference across 14 synchronized AI departments.',
      descUrdu: 'صرف ۸۰۰ ملی سیکنڈ میں تمام ۱۴ شعبوں کا بیک وقت ردعمل۔',
      badge: '<800ms Latency',
      color: 'text-amber-400'
    },
    {
      id: 'd2',
      title: 'Dimension 2: Spatial Omnichannel (XYZ Space)',
      titleUrdu: 'دوسری جہت: اومنی چینل کوریج',
      desc: 'Synchronized customer capture across WhatsApp, Meta, Google, and Web.',
      descUrdu: 'واٹس ایپ، فیس بک، گوگل اور ویب سائٹ پر گاہکوں کا خودکار گھیراؤ۔',
      badge: '360° Omnichannel',
      color: 'text-purple-400'
    },
    {
      id: 'd3',
      title: 'Dimension 3: Continuous Learning (Memory Depth)',
      titleUrdu: 'تیسری جہت: خودکار ارتقاء و ڈیٹا',
      desc: 'Dynamic vector memory linking closed deals back into ad copy refinement.',
      descUrdu: 'کامیاب ڈیلز کا ڈیٹا خودکار طریقے سے اشتہارات کو مزید بہتر بناتا ہے۔',
      badge: 'Vector Feedback',
      color: 'text-sky-400'
    },
    {
      id: 'd4',
      title: 'Dimension 4: Time-Dilation Automation (4th Dimension W)',
      titleUrdu: 'چوتھی جہت (4D Time): ۲۴/۷ خودکار تسلسل',
      desc: 'Zero-downtime execution while your competition sleeps — 365 days a year.',
      descUrdu: 'چوبیس گھنٹے بغیر رکے کسٹمر سپورٹ، کالنگ اور آرڈر بکنگ۔',
      badge: '24/7/365 Unstoppable',
      color: 'text-emerald-400'
    }
  ];

  return (
    <section id="4d-experience" className="py-24 bg-[#07070A] relative overflow-hidden border-t border-b border-purple-500/20">
      {/* 4D Spatial Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-purple-900/20">
            <Rotate3d className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>
              {language === 'ur_nastaliq'
                ? '۴ ڈی ہائپر اسپیس اینیمیشن و کوانٹم کور'
                : 'Interactive 4D Hyperspace & Quantum Engine'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 font-serif">
            {language === 'ur_nastaliq' ? (
              <>
                نیکسا بوسٹ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-300 to-sky-400">۴ ڈی ڈائمینشنل AI</span> آرکیٹیکچر
              </>
            ) : (
              <>
                Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-300 to-sky-400">4D Multidimensional AI Core</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            {language === 'ur_nastaliq'
              ? 'تھری ڈی اسپیس سے آگے، وقت (Time Dimension) اور ملٹی ڈائمینشنل میتھمیٹکس کے ساتھ انٹرایکٹو ۴ ڈی ٹیسیریکٹ اور کوانٹم پارٹیکل ورٹیکس کو لائیو کنٹرول کریں۔'
              : 'Beyond standard 3D interfaces: Interact in real-time with our 4-dimensional (X, Y, Z, W) Tesseract and Quantum AI Vortex engine powering autonomous agency operations.'}
          </p>
        </div>

        {/* Main 4D Interactive Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Real-time 3D/4D Canvas (7 Cols) */}
          <div className="lg:col-span-7">
            <FourDAnimationCanvas
              language={language}
              variant="interactive_stage"
              className="h-[460px] sm:h-[520px] w-full"
            />
          </div>

          {/* Right Column: 4 Dimensions Breakdown & Interactive Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <Boxes className="w-4 h-4" />
                {language === 'ur_nastaliq' ? 'کاروبار کی ۴ بنیادی جہتیں:' : 'The 4 Dimensions of Autonomous Growth:'}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {dimensionFeatures.map((item, idx) => (
                <FourDInteractiveCard
                  key={item.id}
                  depthIntensity={8}
                  glowColor="rgba(168, 85, 247, 0.2)"
                  className="p-4 rounded-2xl bg-[#0E0E14] border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer group shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          4D.{idx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                          {language === 'ur_nastaliq' ? item.titleUrdu : item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed pl-8">
                        {language === 'ur_nastaliq' ? item.descUrdu : item.desc}
                      </p>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md bg-white/5 border border-white/10 whitespace-nowrap shrink-0 ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>
                </FourDInteractiveCard>
              ))}
            </div>

            {/* CTA inside 4D Section */}
            <div className="pt-3 flex items-center gap-3">
              <button
                onClick={() => onOpenSandbox('lead-gen')}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span>{language === 'ur_nastaliq' ? 'لائیو ۴ ڈی ایجنٹ ٹیسٹ کریں' : 'Launch 4D Live Agent'}</span>
              </button>

              <a
                href="#visual-showcase"
                className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>{language === 'ur_nastaliq' ? 'ویژول پوسٹرز' : 'View Posters'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
