import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FREQUENTLY_ASKED_QUESTIONS } from '../data/agentsData';
import { LanguageMode } from '../types';

interface FAQSectionProps {
  language: LanguageMode;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'ur_nastaliq' ? 'عام پوچھے جانے والے سوالات' : 'Got Questions?'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'اکثر پوچھے گئے سوالات'
            ) : (
              <>
                Frequently Asked <span className="text-purple-400">Questions</span>
              </>
            )}
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FREQUENTLY_ASKED_QUESTIONS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#111116] border border-white/10 hover:border-purple-500/30 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-serif">
                    {language === 'ur_nastaliq' ? faq.qUrdu : faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                    {language === 'ur_nastaliq' ? faq.aUrdu : faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
