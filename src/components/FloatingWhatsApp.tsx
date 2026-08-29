import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { LanguageMode } from '../types';

interface FloatingWhatsAppProps {
  language: LanguageMode;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Tooltip speech bubble */}
      {isOpen && (
        <div className="bg-[#182229] border border-[#25D366]/40 text-white p-3.5 rounded-2xl shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative text-xs">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span className="font-bold text-[#25D366]">NexaBoost Online</span>
          </div>

          <p className="text-neutral-200 leading-snug">
            {language === 'ur_nastaliq'
              ? 'السلام علیکم! 14 AI ایجنٹس کے حوالے سے کوئی بھی سوال پوچھنے کے لیے واٹس ایپ پر لائیو چیٹ کریں۔'
              : 'Chat with our AI Systems Architect on WhatsApp (+92 346 2231606).'}
          </p>

          <a
            href="https://wa.me/923462231606?text=Hi%20NexaBoost%20team!%20I%20have%20a%20question%20about%20your%2014%20AI%20Agents."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-black bg-[#25D366] px-3 py-1.5 rounded-lg hover:bg-[#20ba5a] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Main Button */}
      <a
        href="https://wa.me/923462231606?text=Hi%20NexaBoost%20team!%20I%20want%20to%20chat%20about%20the%2014%20AI%20Agents%20Hub."
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-trigger"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-black" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

    </div>
  );
};
