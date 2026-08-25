import React, { useState } from 'react';
import {
  MessageCircle,
  Send,
  Bot,
  User,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Zap,
  Sparkles,
  RefreshCw,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { LanguageMode } from '../types';

interface MessageItem {
  id: string;
  sender: 'customer' | 'ai' | 'system';
  text: string;
  time: string;
  buttons?: string[];
  productCard?: {
    title: string;
    price: string;
    tag: string;
  };
}

interface WhatsAppSimulatorProps {
  language: LanguageMode;
  onOpenAudit?: () => void;
}

export const WhatsAppSimulator: React.FC<WhatsAppSimulatorProps> = ({ language, onOpenAudit }) => {
  const initialMessages: MessageItem[] = [
    {
      id: '1',
      sender: 'customer',
      text: 'Salam, mujhe apne business ke liye AI Lead Generation aur WhatsApp CRM agent ki details aur price chahiye. Setup kitne din mein ho jayega?',
      time: '10:42 AM',
    },
    {
      id: '2',
      sender: 'ai',
      text: 'Walaikum Assalam! ✨\n\nNexaBoost AI Creative Hub me khush-amdeed. Hamara best-selling **AI Lead Gen + WhatsApp CRM Package** is waqt available hai!\n\n• Price: **Rs. 50,000 / month**\n• 1000 Verified Business Leads har mahine\n• 24/7 AI WhatsApp Agent for Sales & Support\n• Automated Follow-ups aur Meeting Booking\n• Free Setup in 7 Days\n\nSetup 7 din mein ho jayega. Onboarding call book ho jayegi.',
      time: '10:42 AM',
      productCard: {
        title: 'AI Lead Gen + WhatsApp CRM Package',
        price: 'Rs. 50,000 / month',
        tag: '1000 Leads • 24/7 AI WhatsApp • 7-Day Setup',
      },
      buttons: ['📅 Book Free Demo Call', '📊 View Case Studies', '👤 Speak to Ali Mola'],
    },
  ];

  const [messages, setMessages] = useState<MessageItem[]>(initialMessages);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleActionButton = (btnText: string) => {
    if (btnText.includes('Speak to Ali Mola')) {
      window.open(
        'https://wa.me/923462231606?text=Salam%20Ali%20Mola!%20I%20am%20on%20NexaBoost%20website%20and%20want%20to%20discuss%20the%20AI%20Lead%20Gen%20%2B%20WhatsApp%20CRM%20Package.',
        '_blank'
      );
      return;
    }

    if (btnText.includes('View Case Studies')) {
      const caseSection = document.getElementById('case-studies');
      if (caseSection) {
        caseSection.scrollIntoView({ behavior: 'smooth' });
      }
      handleSendMessage('Please share your client case studies and verified results.');
      return;
    }

    if (btnText.includes('Book Free Demo Call')) {
      if (onOpenAudit) {
        onOpenAudit();
      }
      handleSendMessage('I want to book a Free AI Demo Call for my business.');
      return;
    }

    handleSendMessage(btnText);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMsg: MessageItem = {
      id: String(Date.now()),
      sender: 'customer',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    try {
      // Call server backend simulator endpoint
      const response = await fetch('/api/chat/simulator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiMsg: MessageItem = {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: data.reply || 'Walaikum Assalam! ✨ NexaBoost AI Creative Hub me khush-amdeed.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          buttons: ['📅 Book Free Demo Call', '📊 View Case Studies', '👤 Speak to Ali Mola'],
        };
        setMessages((prev) => [...prev, aiMsg]);
        setIsTyping(false);
        return;
      }
    } catch (err) {
      console.warn('Backend chat offline, switching to rule-based fallback:', err);
    }

    // Client-side rule-based fallback matching the exact prompt guidelines
    setTimeout(() => {
      let replyText = '';
      const lower = query.toLowerCase();

      if (lower.includes('price') || lower.includes('cost') || lower.includes('package') || lower.includes('kitne ka') || lower.includes('fees')) {
        replyText = `Walaikum Assalam! ✨\n\nHamara best-selling **AI Lead Gen + WhatsApp CRM Package**:\n\n• Price: **Rs. 50,000 / month**\n• 1000 Verified Business Leads har mahine\n• 24/7 AI WhatsApp Agent for Sales & Support\n• Automated Follow-ups aur Meeting Booking\n• Free Setup in 7 Days\n\nSetup 7 din mein ho jayega. Onboarding call book ho jayegi.`;
      } else if (lower.includes('setup') || lower.includes('delivery') || lower.includes('kitne din') || lower.includes('time') || lower.includes('when')) {
        replyText = `Walaikum Assalam! ✨\n\nSetup 7 din mein ho jayega. Onboarding call book ho jayegi aur hamari team apka system live kar degi.`;
      } else if (lower.includes('lead') || lower.includes('1000') || lower.includes('b2b') || lower.includes('client')) {
        replyText = `Walaikum Assalam! ✨\n\nIs package me aapko har mahine 1000 verified decision-maker business leads milengi jinko hamara AI WhatsApp agent automatically nurture aur book karega.`;
      } else if (lower.includes('demo') || lower.includes('call') || lower.includes('meeting') || lower.includes('book')) {
        replyText = `Walaikum Assalam! ✨\n\nZabardast! Aapka Free Demo Call book karne ke liye please apna Name aur Business details share karein, ya direct Ali Mola se WhatsApp par rabta karein.`;
      } else if (lower.includes('case') || lower.includes('study') || lower.includes('result') || lower.includes('client')) {
        replyText = `Walaikum Assalam! ✨\n\nHamare Dubai, Lahore aur Islamabad ke clients ne 340% leads increase aur 3x revenue growth hasil ki hai. Aap website par Case Studies section dekh sakte hain!`;
      } else if (lower.includes('ali mola') || lower.includes('human') || lower.includes('owner') || lower.includes('founder')) {
        replyText = `Walaikum Assalam! ✨\n\nAap directly hamare founder **Ali Mola** se WhatsApp (+92 346 2231606) par baat kar sakte hain.`;
      } else if (lower.includes('other') || lower.includes('custom') || lower.includes('website') || lower.includes('video') || lower.includes('seo')) {
        replyText = `Walaikum Assalam! ✨\n\nHamari team aapse call pe detail discuss karegi aur apke business ke mutabiq custom roadmap banayegi.`;
      } else {
        replyText = `Walaikum Assalam! ✨\n\nNexaBoost AI Creative Hub me khush-amdeed! Hamara **AI Lead Gen + WhatsApp CRM Package** (Rs. 50,000 / month) apke business ko 1000 verified leads aur 24/7 AI WhatsApp sales deta hai.\n\nAgar koi aur requirement hai to 1 min, main Ali Mola se confirm karke batata hoon.`;
      }

      const aiMsg: MessageItem = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        buttons: ['📅 Book Free Demo Call', '📊 View Case Studies', '👤 Speak to Ali Mola'],
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleReset = () => {
    setMessages(initialMessages);
  };

  return (
    <section id="simulator" className="py-20 md:py-28 relative border-t border-[#222222] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#222222] text-[#25D366] text-xs font-mono uppercase tracking-widest">
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Interactive WhatsApp CRM Demo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'لائیو واٹس ایپ AI سیلز کا تجربہ کریں'
            ) : (
              <>
                Experience Autonomous{' '}
                <span className="italic text-[#25D366]">WhatsApp Commerce</span>
              </>
            )}
          </h2>

          <p className="text-[#A0A0A0] text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'دیکھیے کیسے NexaBoost کا AI اسسٹنٹ واٹس ایپ پر اردو اور انگلش میں AI لیڈز اور سیلز آٹومیشن کے سوالات کے فوری جوابات دیتا ہے۔'
            ) : (
              'Try typing below or click interactive buttons to see how our AI Agent answers inquiries in seconds with package details, pricing, and automated demo booking.'
            )}
          </p>
        </div>

        {/* Interactive WhatsApp Device Mockup */}
        <div className="max-w-lg mx-auto bg-[#0A0A0A] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[650px] relative">
          
          {/* Top WhatsApp Bar */}
          <div className="bg-[#111111] px-4 py-3.5 flex items-center justify-between border-b border-[#222222]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-[#181818] border border-[#222222] flex items-center justify-center text-[#A78BFA] font-bold text-sm">
                  <Bot className="w-4 h-4 text-[#A78BFA]" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] border-2 border-[#111111] rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight font-sans">
                    NexaBoost AI Assistant
                  </h4>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <p className="text-[10px] text-[#25D366] font-mono tracking-wider uppercase">
                  {isTyping ? 'typing...' : 'online • 24/7 Official Cloud API'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#777777]">
              <button
                onClick={handleReset}
                title="Restart chat simulation"
                className="p-1.5 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 bg-[#050505] p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
            
            {/* Encryption notice */}
            <div className="text-center my-2">
              <span className="bg-[#0e0e0e] border border-[#222222] text-[#888888] font-mono text-[9px] uppercase tracking-wider px-3 py-1 rounded inline-block">
                🔒 Messages are end-to-end encrypted with Official Meta API.
              </span>
            </div>

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === 'customer' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-xl p-3.5 shadow-md ${
                    m.sender === 'customer'
                      ? 'bg-[#183626] border border-[#25D366]/30 text-white rounded-tr-none'
                      : 'bg-[#0E0E0E] text-[#D0D0D0] rounded-tl-none border border-[#222222]'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>

                  {/* Product Card */}
                  {m.productCard && (
                    <div className="mt-3 p-3 bg-[#050505] rounded-lg border border-[#222222] flex items-center justify-between gap-3">
                      <div>
                        <div className="font-bold text-white text-xs font-sans">
                          {m.productCard.title}
                        </div>
                        <div className="text-[#25D366] font-mono font-bold text-xs mt-0.5">
                          {m.productCard.price}
                        </div>
                        <div className="text-[10px] text-[#888888] font-mono uppercase tracking-wider mt-0.5">
                          {m.productCard.tag}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-[#A78BFA]/10 border border-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA] shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-1 text-[10px] text-[#666666] font-mono mt-1.5">
                    <span>{m.time}</span>
                    {m.sender === 'customer' && (
                      <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                    )}
                  </div>
                </div>

                {/* 3 Action Buttons attached to AI Message */}
                {m.buttons && (
                  <div className="mt-2 space-y-1.5 w-full max-w-[88%]">
                    {m.buttons.map((btnText, bIdx) => (
                      <button
                        key={bIdx}
                        onClick={() => handleActionButton(btnText)}
                        className="w-full py-2 px-3 rounded-lg bg-[#0E0E0E] hover:bg-[#181818] border border-[#25D366]/30 text-[#25D366] text-xs font-mono font-medium transition-all text-left flex items-center justify-between cursor-pointer group"
                      >
                        <span className="group-hover:text-white transition-colors">{btnText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366] opacity-70 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-xs text-[#888888] bg-[#0E0E0E] border border-[#222222] p-2.5 rounded-lg w-20">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce"></span>
                <span
                  className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></span>
                <span
                  className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                ></span>
              </div>
            )}
          </div>

          {/* Quick Preset Message Chips */}
          <div className="bg-[#0E0E0E] px-3 py-2 border-t border-[#222222] flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono">
            <span className="text-[#666666] uppercase tracking-wider shrink-0">Try:</span>
            <button
              onClick={() => handleSendMessage('Price & Package Details?')}
              className="px-2.5 py-1 rounded bg-[#181818] border border-[#222222] hover:border-[#444444] text-[#A0A0A0] hover:text-white whitespace-nowrap cursor-pointer transition-colors"
            >
              Price & Package?
            </button>
            <button
              onClick={() => handleSendMessage('Setup kitne din mein hoga?')}
              className="px-2.5 py-1 rounded bg-[#181818] border border-[#222222] hover:border-[#444444] text-[#A0A0A0] hover:text-white whitespace-nowrap cursor-pointer transition-colors"
            >
              Setup Duration?
            </button>
            <button
              onClick={() => handleSendMessage('1000 Leads kaise milti hain?')}
              className="px-2.5 py-1 rounded bg-[#181818] border border-[#222222] hover:border-[#444444] text-[#A0A0A0] hover:text-white whitespace-nowrap cursor-pointer transition-colors"
            >
              1000 Leads Details
            </button>
            <button
              onClick={() => handleActionButton('👤 Speak to Ali Mola')}
              className="px-2.5 py-1 rounded bg-[#181818] border border-[#25D366]/30 text-[#25D366] whitespace-nowrap cursor-pointer transition-colors"
            >
              Speak to Ali Mola
            </button>
          </div>

          {/* Bottom Chat Input Bar */}
          <div className="bg-[#111111] p-3 flex items-center gap-2 border-t border-[#222222]">
            <input
              type="text"
              placeholder="Type in English or Roman Urdu..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-3.5 py-2.5 bg-[#050505] border border-[#222222] rounded-lg text-xs sm:text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#25D366] transition-colors"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputVal.trim()}
              className="p-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] disabled:opacity-40 text-black transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Direct Link to Real WhatsApp with Ali Mola */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/923462231606?text=Salam%20Ali%20Mola!%20I%20am%20on%20NexaBoost%20website%20and%20want%20to%20discuss%20deploying%20the%20AI%20Lead%20Gen%20%2B%20WhatsApp%20CRM%20Package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A0A0A] hover:bg-[#141414] border border-[#25D366]/40 text-[#25D366] font-mono text-xs uppercase tracking-wider font-bold transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat directly with Ali Mola on WhatsApp (+92 346 2231606)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
