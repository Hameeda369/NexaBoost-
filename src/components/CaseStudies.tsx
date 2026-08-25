import React from 'react';
import { Award, TrendingUp, CheckCircle, Quote, Sparkles, MapPin, Building2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/agentsData';
import { LanguageMode } from '../types';

interface CaseStudiesProps {
  language: LanguageMode;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ language }) => {
  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-[#050505] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#222222] text-[#A78BFA] text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{language === 'ur_nastaliq' ? 'حقیقی نتائج و کامیابیاں' : 'Proven Track Record'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'اصلی کلائنٹس — ثابت شدہ نتائج'
            ) : (
              <>
                Real Enterprises.{' '}
                <span className="italic text-[#A78BFA]">Measurable Multipliers.</span>
              </>
            )}
          </h2>

          <p className="text-[#A0A0A0] text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'دیکھیے کیسے دبئی، لاہور اور اسلام آباد کے برانڈز نے NexaBoost کے AI ایجنٹس کے ذریعے اپنے اخراجات میں کمی اور آمدنی میں اضافہ کیا۔'
            ) : (
              'From high-ticket interior firms to fast-growing healthcare clinics and direct-to-consumer apparel brands.'
            )}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-[#0A0A0A] border border-[#222222] hover:border-[#A78BFA]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-xl group"
            >
              <div>
                
                {/* Meta: Location & Industry */}
                <div className="flex items-center justify-between text-xs text-[#888888] mb-3 font-mono">
                  <span className="flex items-center gap-1.5 text-[#A78BFA]">
                    <MapPin className="w-3.5 h-3.5" />
                    {study.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#666666]">
                    <Building2 className="w-3.5 h-3.5" />
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-xl font-normal text-white font-serif mb-3">
                  {study.company}
                </h3>

                {/* Problem Statement */}
                <div className="p-3 rounded-lg bg-[#050505] border border-[#222222] text-xs text-[#AAAAAA] mb-6">
                  <span className="text-[#888888] font-mono text-[10px] uppercase tracking-wider block mb-1">Previous Bottleneck:</span>
                  {study.problem}
                </div>

                {/* Results Metrics */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A78BFA]">
                    Verified Outcomes:
                  </div>
                  {study.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#050505] border border-[#222222]"
                    >
                      <span className="text-[#CCCCCC] font-medium">{res.metric}</span>
                      <span className="text-[#25D366] font-mono font-bold">{res.change}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Testimonial Quote */}
              <div className="pt-6 border-t border-[#222222] space-y-3">
                <Quote className="w-4 h-4 text-[#A78BFA]/50" />
                <p className="text-xs sm:text-sm text-[#AAAAAA] italic leading-relaxed">
                  "{study.testimonial.quote}"
                </p>
                <div className="pt-2">
                  <div className="font-semibold text-white text-xs">{study.testimonial.author}</div>
                  <div className="text-[10px] font-mono text-[#666666]">{study.testimonial.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
