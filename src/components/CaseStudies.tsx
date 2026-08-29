import React from 'react';
import { Award, TrendingUp, CheckCircle, Quote, Sparkles, MapPin, Building2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/agentsData';
import { LanguageMode } from '../types';

interface CaseStudiesProps {
  language: LanguageMode;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ language }) => {
  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-[#0A0A0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'ur_nastaliq' ? 'حقیقی نتائج و کامیابیاں' : 'Proven Track Record'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'اصلی کلائنٹس — ثابت شدہ نتائج'
            ) : (
              <>
                Real Enterprises.{' '}
                <span className="text-purple-400">Measurable Multipliers.</span>
              </>
            )}
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
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
              className="bg-[#111116] border border-white/10 hover:border-purple-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-xl group"
            >
              <div>
                
                {/* Meta: Location & Industry */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="flex items-center gap-1.5 text-purple-400 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {study.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-neutral-500" />
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-serif mb-3">
                  {study.company}
                </h3>

                {/* Problem Statement */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 mb-6">
                  <span className="text-neutral-400 font-semibold block mb-1">Previous Bottleneck:</span>
                  {study.problem}
                </div>

                {/* Results Metrics */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
                    Verified Outcomes:
                  </div>
                  {study.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-center justify-between text-xs p-2 rounded-lg bg-purple-500/5 border border-purple-500/10"
                    >
                      <span className="text-neutral-300 font-medium">{res.metric}</span>
                      <span className="text-emerald-400 font-bold">{res.change}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Testimonial Quote */}
              <div className="pt-6 border-t border-white/5 space-y-3">
                <Quote className="w-5 h-5 text-purple-400/40" />
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                  "{study.testimonial.quote}"
                </p>
                <div className="pt-2">
                  <div className="font-bold text-white text-xs">{study.testimonial.author}</div>
                  <div className="text-[11px] text-neutral-500">{study.testimonial.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
