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
    <section id="faq" className="py-20 md:py-28 relative border-t border-[#222222] bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#222222] text-[#A78BFA] text-xs font-mono uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{language === 'ur_nastaliq' ? 'عام پوچھے جانے والے سوالات' : 'Got Questions?'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'اکثر پوچھے گئے سوالات'
            ) : (
              <>
                Frequently Asked <span className="italic text-[#A78BFA]">Questions</span>
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
                className="bg-[#0A0A0A] border border-[#222222] hover:border-[#A78BFA]/30 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-normal text-white font-serif">
                    {language === 'ur_nastaliq' ? faq.qUrdu : faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#A78BFA] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#AAAAAA] leading-relaxed border-t border-[#222222] pt-4">
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
