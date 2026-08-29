import React from 'react';
import { Check, X, Sparkles, Zap, Users, AlertCircle } from 'lucide-react';
import { LanguageMode } from '../types';

interface ComparisonTableProps {
  language: LanguageMode;
  onOpenAudit: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ language, onOpenAudit }) => {
  const comparisonData = [
    {
      feature: 'Monthly Cost / Overhead',
      featureUrdu: 'ماہانہ لاگت و خرچ',
      nexa: '$497 - $1,897 / month flat',
      human: '$25,000 - $45,000 / month (Salaries + Benefits)',
      genericAi: '$200/mo (Fragmented, no execution)',
      highlight: true,
    },
    {
      feature: 'Operating Hours & Availability',
      featureUrdu: 'کام کے اوقات و دستیابی',
      nexa: '24/7/365 Non-Stop (Zero sick leaves)',
      human: '8 hrs/day (Mon-Fri only, slow weekends)',
      genericAi: 'Self-service (Requires manual prompting)',
      highlight: false,
    },
    {
      feature: 'First Response Speed to Leads',
      featureUrdu: 'گاہکوں کو جوابی رفتار',
      nexa: '< 5 Seconds Guaranteed',
      human: '2 to 6 Hours average',
      genericAi: 'N/A (No WhatsApp trigger)',
      highlight: true,
    },
    {
      feature: 'Bilingual Urdu & English Fluency',
      featureUrdu: 'اردو اور انگلش میں مہارت',
      nexa: 'Native Urdu Script + Roman + English',
      human: 'Varies widely by individual rep',
      genericAi: 'Grammatically stiff / unnatural',
      highlight: false,
    },
    {
      feature: 'Daily Verified Lead Prospecting',
      featureUrdu: 'روزانہ تصدیق شدہ لیڈز',
      nexa: '100+ Verified ICP Leads / Day',
      human: '15-20 manual leads / day',
      genericAi: 'Zero automated scraping',
      highlight: true,
    },
    {
      feature: 'WhatsApp Commerce Integration',
      featureUrdu: 'واٹس ایپ پر مکمل آرڈر سسٹم',
      nexa: 'Official Meta Cloud API & Auto-CRM',
      human: 'Manual typing on phone',
      genericAi: 'Not supported without coding',
      highlight: false,
    },
    {
      feature: 'Scalability on Demand',
      featureUrdu: 'کاروبار کی تیز توسیع',
      nexa: 'Instant (Handles 10,000 chats at once)',
      human: 'Requires hiring, vetting & 6-week training',
      genericAi: 'Token & server bottlenecks',
      highlight: true,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ur_nastaliq' ? 'سچی حقیقت و موازنہ' : 'The Value Equation'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              '۱۴ AI ایجنٹس بمقابلہ روایتی انسانی ٹیم'
            ) : (
              <>
                NexaBoost 14 AI Hub vs.{' '}
                <span className="text-purple-400">Traditional Agency</span>
              </>
            )}
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'موازنہ کیجیے کہ کیوں تیز رفتار برانڈز روایتی طریقوں کے بجائے NexaBoost کے خودمختار سسٹم پر منتقل ہو رہے ہیں۔'
            ) : (
              'See why top-tier businesses are replacing fragmented teams and isolated SaaS subscriptions with one synchronized 14-Agent autonomous engine.'
            )}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px] bg-[#111116] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-5 sm:p-6 text-sm font-bold text-neutral-400 uppercase tracking-wider">
                  Operational Factor
                </th>
                <th className="p-5 sm:p-6 text-sm font-bold text-purple-400 uppercase tracking-wider bg-purple-500/10 border-x border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span>NexaBoost 14 AI Hub</span>
                  </div>
                </th>
                <th className="p-5 sm:p-6 text-sm font-bold text-neutral-400 uppercase tracking-wider">
                  14-Person Human Team
                </th>
                <th className="p-5 sm:p-6 text-sm font-bold text-neutral-500 uppercase tracking-wider">
                  Single DIY AI Bot
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-white/[0.02] transition-colors ${
                    row.highlight ? 'bg-purple-950/10' : ''
                  }`}
                >
                  <td className="p-5 sm:p-6 font-semibold text-white">
                    {language === 'ur_nastaliq' ? row.featureUrdu : row.feature}
                  </td>
                  <td className="p-5 sm:p-6 font-bold text-purple-300 bg-purple-500/10 border-x border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{row.nexa}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-6 text-neutral-400">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-500/70 shrink-0" />
                      <span>{row.human}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-6 text-neutral-500">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500/60 shrink-0" />
                      <span>{row.genericAi}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA below table */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-400 hover:bg-purple-300 text-black font-bold text-sm sm:text-base shadow-lg shadow-purple-500/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>
              {language === 'ur_nastaliq'
                ? 'اپنے بزنس کے لیے لاگت کا تخمینہ لگائیں'
                : 'Calculate Your Exact Savings in Free AI Audit'}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
