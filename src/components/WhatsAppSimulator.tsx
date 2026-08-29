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
  ShoppingBag,
  Sparkles,
  RefreshCw,
  ShieldCheck,
  FileText,
  ExternalLink,
  Zap,
  Flame
} from 'lucide-react';
import { LanguageMode } from '../types';

interface ServiceDefinition {
  id: string;
  name: string;
  pdfName: string;
  price: string;
  guarantee: string;
  formLink: string;
  keywords: string[];
}

const SERVICES_CATALOG: ServiceDefinition[] = [
  {
    id: 'seo',
    name: 'NEXA-SEO',
    pdfName: 'NEXA-SEO.pdf',
    price: 'Rs. 25,000/mo',
    guarantee: '90 Din Top 10 Guarantee (20 Keywords, 50 Backlinks, 10 SEO Articles)',
    formLink: 'https://forms.gle/SEO-WALA-LINK',
    keywords: ['seo', 'nexa-seo', 'google rank', 'search engine', 'ranking']
  },
  {
    id: 'ai-agent',
    name: 'NEXA-AI-AGENT',
    pdfName: 'NEXA-AI-AGENT.pdf',
    price: 'Rs. 35,000 Setup + Rs. 5k/mo',
    guarantee: '30 Din 50+ Leads Guarantee (24/7 Web/WhatsApp/IG Auto Reply)',
    formLink: 'https://forms.gle/AIAGENT-WALA-LINK',
    keywords: ['ai-agent', 'ai agent', 'nexa-ai-agent', 'agent', 'sales agent']
  },
  {
    id: 'voice-ai',
    name: 'NEXA-VOICE-AI',
    pdfName: 'NEXA-VOICE-AI.pdf',
    price: 'Rs. 15,000 + 3k/mo',
    guarantee: '7 Din Free Test (500 Free Calls in Setup, Human Sounding Voice)',
    formLink: 'https://forms.gle/VOICE-WALA-LINK',
    keywords: ['voice-ai', 'voice ai', 'nexa-voice-ai', 'calling', 'voice bot', 'call']
  },
  {
    id: 'chatbot',
    name: 'NEXA-CHATBOT',
    pdfName: 'NEXA-CHATBOT.pdf',
    price: 'Rs. 12,000 One Time',
    guarantee: '30 Din 100+ Chats Guarantee (20 FAQs Free Setup)',
    formLink: 'https://forms.gle/CHATBOT-WALA-LINK',
    keywords: ['chatbot', 'nexa-chatbot', 'chat bot', 'whatsapp bot']
  },
  {
    id: 'content',
    name: 'NEXA-CONTENT',
    pdfName: 'NEXA-CONTENT.pdf',
    price: 'Rs. 8,000',
    guarantee: '10 x 1200 Words SEO Articles + 5 Articles Free (7 Din Delivery)',
    formLink: 'https://forms.gle/CONTENT-WALA-LINK',
    keywords: ['content', 'nexa-content', 'articles', 'blogs', 'copywriting']
  },
  {
    id: 'ugc-ads',
    name: 'NEXA-UGC-ADS',
    pdfName: 'NEXA-UGC-ADS.pdf',
    price: 'Rs. 20,000 / 5 Videos - 2 Free',
    guarantee: 'Viral TikTok/Reels Scripts + 5 Ad Creatives Free (7 Din Delivery)',
    formLink: 'https://forms.gle/UGC-WALA-LINK',
    keywords: ['ugc', 'ugc-ads', 'nexa-ugc-ads', 'ugc ads', 'tiktok ads', 'reels ads', 'video ads']
  },
  {
    id: 'vsl-ads',
    name: 'NEXA-VSL-ADS',
    pdfName: 'NEXA-VSL-ADS.pdf',
    price: 'Rs. 30,000 / Video',
    guarantee: '60-90 Sec Sales Video + Script + Voiceover + 1 Revision Free',
    formLink: 'https://forms.gle/VSL-WALA-LINK',
    keywords: ['vsl', 'vsl-ads', 'nexa-vsl-ads', 'video sales letter', 'sales video']
  },
  {
    id: 'digital-product',
    name: 'NEXA-DIGITAL-PRODUCT',
    pdfName: 'NEXA-DIGITAL-PRODUCT.pdf',
    price: 'Rs. 15,000+',
    guarantee: 'Ebook/Course + Sales Page + Payment Gateway + Free Ad Setup',
    formLink: 'https://forms.gle/DIGITAL-WALA-LINK',
    keywords: ['digital', 'digital-product', 'nexa-digital-product', 'course', 'ebook']
  },
  {
    id: 'website-ai',
    name: 'NEXA-WEBSITE-AI',
    pdfName: 'NEXA-WEBSITE-AI.pdf',
    price: 'Rs. 40,000',
    guarantee: '7 Din AI Responsive Website + 1 Month Free SEO',
    formLink: 'https://forms.gle/WEBSITE-WALA-LINK',
    keywords: ['website', 'website-ai', 'nexa-website-ai', 'web design', 'landing page']
  },
  {
    id: 'app',
    name: 'NEXA-APP',
    pdfName: 'NEXA-APP.pdf',
    price: 'Rs. 80,000+',
    guarantee: 'Android + iOS App, 5 Features + 1 Extra Feature Free',
    formLink: 'https://forms.gle/APP-WALA-LINK',
    keywords: ['app', 'nexa-app', 'mobile app', 'ios', 'android', 'application']
  },
  {
    id: 'social',
    name: 'NEXA-SOCIAL',
    pdfName: 'NEXA-SOCIAL.pdf',
    price: 'Rs. 25,000/mo',
    guarantee: '30 Posts + 10 Reels + 1 Month Free on Quarter',
    formLink: 'https://forms.gle/SOCIAL-WALA-LINK',
    keywords: ['social', 'nexa-social', 'social media', 'instagram', 'facebook management']
  },
  {
    id: 'google-ads',
    name: 'NEXA-GOOGLE-ADS',
    pdfName: 'NEXA-GOOGLE-ADS.pdf',
    price: 'Rs. 20,000 + Ad Budget',
    guarantee: '100 Guaranteed Qualified Leads Setup & Campaign Scaling',
    formLink: 'https://forms.gle/ADS-WALA-LINK',
    keywords: ['google-ads', 'google ads', 'nexa-google-ads', 'ppc', 'adwords']
  },
  {
    id: 'email',
    name: 'NEXA-EMAIL',
    pdfName: 'NEXA-EMAIL.pdf',
    price: 'Rs. 18,000',
    guarantee: '10 High-Converting Email Sequences + Next Funnel Free',
    formLink: 'https://forms.gle/EMAIL-WALA-LINK',
    keywords: ['email', 'nexa-email', 'email marketing', 'newsletter', 'cold email']
  },
  {
    id: 'branding',
    name: 'NEXA-BRANDING',
    pdfName: 'NEXA-BRANDING.pdf',
    price: 'Rs. 10,000',
    guarantee: '3 Logo Concepts + Color Palette + Social Kit + 1 Logo Concept Free',
    formLink: 'https://forms.gle/BRANDING-WALA-LINK',
    keywords: ['branding', 'nexa-branding', 'logo', 'identity', 'brand kit']
  }
];

const INITIAL_GREETING = `Salam! Main NexaBoost ka Official AI Sales Agent **NEXA AI** hoon. 🔥

Hamari 14 High-Performance AI Services & Special Guarantees ye hain:

1. **NEXA-SEO** - Rs. 25,000/mo - 90 Din Top 10 Guarantee
2. **NEXA-AI-AGENT** - Rs. 35,000 - 30 Din 50+ Leads  
3. **NEXA-VOICE-AI** - Rs. 15,000 + 3k/mo - 7 Din Free Test
4. **NEXA-CHATBOT** - Rs. 12,000 - 30 Din 100+ Chats
5. **NEXA-CONTENT** - Rs. 8,000 / 10 Articles - 5 Free
6. **NEXA-UGC-ADS** - Rs. 20,000 / 5 Videos - 2 Free
7. **NEXA-VSL-ADS** - Rs. 30,000 / Video - 1 Revision Free
8. **NEXA-DIGITAL-PRODUCT** - Rs. 15,000+ - Ad Setup Free
9. **NEXA-WEBSITE-AI** - Rs. 40,000 - 1 Month SEO Free
10. **NEXA-APP** - Rs. 80,000+ - 1 Feature Free
11. **NEXA-SOCIAL** - Rs. 25,000/mo - 1 Month Free
12. **NEXA-GOOGLE-ADS** - Rs. 20,000 + Budget - 100 Leads
13. **NEXA-EMAIL** - Rs. 18,000 - Next Funnel Free
14. **NEXA-BRANDING** - Rs. 10,000 - 1 Logo Concept Free

👉 Aap ko in me se **konsi service aaj start karni hai?** (Neeche click karein ya type karein)`;

interface MessageItem {
  id: string;
  sender: 'customer' | 'ai' | 'system';
  text: string;
  time: string;
  buttons?: string[];
  pdfAttach?: {
    filename: string;
    price: string;
    formLink: string;
  };
}

interface WhatsAppSimulatorProps {
  language: LanguageMode;
}

export const WhatsAppSimulator: React.FC<WhatsAppSimulatorProps> = ({ language }) => {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: '1',
      sender: 'ai',
      text: INITIAL_GREETING,
      time: 'Just now',
      buttons: [
        '🚀 NEXA-AI-AGENT',
        '📈 NEXA-SEO',
        '🎬 NEXA-UGC-ADS',
        '📞 NEXA-VOICE-AI',
        '🌐 NEXA-WEBSITE-AI',
        '🎨 NEXA-BRANDING'
      ]
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const findMatchedService = (text: string): ServiceDefinition | undefined => {
    const lower = text.toLowerCase().trim();
    return SERVICES_CATALOG.find(service => 
      service.keywords.some(k => lower.includes(k)) || 
      lower.includes(service.name.toLowerCase()) ||
      lower.includes(service.id)
    );
  };

  const handleSendMessage = (textToSend?: string) => {
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

    // AI dynamic simulation response adhering strictly to rules
    setTimeout(() => {
      const matched = findMatchedService(query);

      let replyText = '';
      let pdfAttach: { filename: string; price: string; formLink: string } | undefined = undefined;
      let buttons: string[] | undefined = undefined;

      if (matched) {
        replyText = `Zabardast choice! 🔥\n\nYe rahi service ki official PDF:\n📄 [Attached: ${matched.pdfName}]\n\n• Package Rate: ${matched.price}\n• Special Offer / Guarantee: ${matched.guarantee}\n\n📝 Order ke liye foran form fill karein:\n🔗 ${matched.formLink}\n\nKonsi service aaj start karni hai?`;
        
        pdfAttach = {
          filename: matched.pdfName,
          price: matched.price,
          formLink: matched.formLink
        };

        buttons = [
          `📝 Open ${matched.name} Form`,
          '💬 Chat on WhatsApp (+92 346 2231606)',
          '📋 View All 14 Services List'
        ];
      } else if (query.toLowerCase().includes('all') || query.toLowerCase().includes('list') || query.toLowerCase().includes('services')) {
        replyText = INITIAL_GREETING;
        buttons = [
          '🚀 NEXA-AI-AGENT',
          '📈 NEXA-SEO',
          '🎬 NEXA-UGC-ADS',
          '📞 NEXA-VOICE-AI',
          '💻 NEXA-APP',
          '🎯 NEXA-GOOGLE-ADS'
        ];
      } else {
        replyText = `Zabardast! 🔥 Main NEXA AI hoon.\n\nHamari 14 services me se aap kis field me grow karna chahte hain? (SEO, AI Agents, Voice AI, UGC Ads, Website, Apps, Branding waghera).\n\nBas service ka naam batayein, main foran PDF aur Order Form link bhej doonga!`;
        buttons = [
          '🚀 NEXA-AI-AGENT',
          '📈 NEXA-SEO',
          '🎬 NEXA-UGC-ADS',
          '📞 NEXA-VOICE-AI'
        ];
      }

      const aiMsg: MessageItem = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        buttons,
        pdfAttach
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: '1',
        sender: 'ai',
        text: INITIAL_GREETING,
        time: 'Just now',
        buttons: [
          '🚀 NEXA-AI-AGENT',
          '📈 NEXA-SEO',
          '🎬 NEXA-UGC-ADS',
          '📞 NEXA-VOICE-AI',
          '🌐 NEXA-WEBSITE-AI',
          '🎨 NEXA-BRANDING'
        ]
      },
    ]);
  };

  return (
    <section id="simulator" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-[#25D366]" />
            <span>NEXA AI — Official Sales & Intake Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            {language === 'ur_nastaliq' ? (
              'NEXA AI کے ساتھ لائیو چیٹ کریں'
            ) : (
              <>
                Meet <span className="text-[#25D366]">NEXA AI</span> Sales Agent
              </>
            )}
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            {language === 'ur_nastaliq' ? (
              'ہمارے 14 سروس پیکجز، 1-پیج PDF، اور فوری آرڈر فارمز کے لیے نیچے چیٹ ٹیسٹ کریں۔'
            ) : (
              'Test our 24/7 AI Sales Agent live. Inquire about any of the 14 service packages for instant PDF attachments and order booking forms.'
            )}
          </p>
        </div>

        {/* Interactive WhatsApp Device Mockup */}
        <div className="max-w-xl mx-auto bg-[#111b21] border border-neutral-700/80 rounded-[32px] overflow-hidden shadow-2xl shadow-emerald-950/20 flex flex-col h-[680px] relative">
          
          {/* Top WhatsApp Bar */}
          <div className="bg-[#202c33] px-4 py-3.5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#202c33] rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white leading-tight">
                    NEXA AI (NexaBoost Sales)
                  </h4>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <p className="text-[11px] text-[#25D366] font-medium">
                  {isTyping ? 'typing response...' : 'online • 14 Service Proposals Ready'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-neutral-400">
              <button
                onClick={handleReset}
                title="Restart chat simulation"
                className="p-1.5 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 bg-[#0b141a] p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
            
            {/* Encryption notice */}
            <div className="text-center my-2">
              <span className="bg-[#182229] text-[#ffd279] text-[10px] px-3 py-1 rounded-lg inline-block shadow-sm">
                🔒 Official NEXA AI Sales Protocol • 14 Services Auto-Intake
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
                  className={`max-w-[90%] rounded-2xl p-3 shadow-md ${
                    m.sender === 'customer'
                      ? 'bg-[#005c4b] text-white rounded-tr-none'
                      : 'bg-[#202c33] text-neutral-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>

                  {/* PDF Attachment Card in Chat */}
                  {m.pdfAttach && (
                    <div className="mt-3 p-3 bg-black/50 rounded-xl border border-purple-500/30 flex flex-col gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-white text-xs truncate">
                            {m.pdfAttach.filename}
                          </div>
                          <div className="text-[11px] text-emerald-400 font-bold">
                            {m.pdfAttach.price}
                          </div>
                        </div>
                      </div>

                      <a
                        href={m.pdfAttach.formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-purple-600/30"
                      >
                        <span>Fill Order Form</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-1 text-[10px] text-neutral-400 mt-1">
                    <span>{m.time}</span>
                    {m.sender === 'customer' && (
                      <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                    )}
                  </div>
                </div>

                {/* Interactive Action Buttons attached to AI Message */}
                {m.buttons && (
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 w-full max-w-[90%]">
                    {m.buttons.map((btnText, bIdx) => {
                      if (btnText.includes('Open') && btnText.includes('Form') && m.pdfAttach) {
                        return (
                          <a
                            key={bIdx}
                            href={m.pdfAttach.formLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="col-span-full py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/30"
                          >
                            <span>{btnText}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        );
                      }

                      if (btnText.includes('Chat on WhatsApp')) {
                        return (
                          <a
                            key={bIdx}
                            href="https://wa.me/923462231606?text=Hi%20NexaBoost!%20I%20want%20to%20order%20a%20service."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="col-span-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-black" />
                            <span>{btnText}</span>
                          </a>
                        );
                      }

                      return (
                        <button
                          key={bIdx}
                          onClick={() => handleSendMessage(btnText.replace(/^[^\w\s]+/, '').trim())}
                          className="py-1.5 px-2.5 rounded-xl bg-[#202c33] hover:bg-[#2a3942] border border-[#25D366]/40 text-[#25D366] text-xs font-medium transition-all text-left flex items-center justify-between cursor-pointer"
                        >
                          <span className="truncate">{btnText}</span>
                          <Sparkles className="w-3 h-3 text-[#25D366] shrink-0 ml-1" />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 bg-[#202c33] p-2.5 rounded-xl w-24">
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
          <div className="bg-[#202c33] px-3 py-1.5 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <span className="text-neutral-400 shrink-0">Try Service:</span>
            <button
              onClick={() => handleSendMessage('NEXA-SEO')}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-neutral-300 whitespace-nowrap cursor-pointer"
            >
              SEO (Rs. 25k)
            </button>
            <button
              onClick={() => handleSendMessage('NEXA-AI-AGENT')}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-neutral-300 whitespace-nowrap cursor-pointer"
            >
              AI-AGENT (Rs. 35k)
            </button>
            <button
              onClick={() => handleSendMessage('NEXA-UGC-ADS')}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-neutral-300 whitespace-nowrap cursor-pointer"
            >
              UGC-ADS (Rs. 20k)
            </button>
            <button
              onClick={() => handleSendMessage('NEXA-VOICE-AI')}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-neutral-300 whitespace-nowrap cursor-pointer"
            >
              VOICE-AI (Rs. 15k)
            </button>
            <button
              onClick={() => handleSendMessage('NEXA-BRANDING')}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-neutral-300 whitespace-nowrap cursor-pointer"
            >
              BRANDING (Rs. 10k)
            </button>
          </div>

          {/* Bottom Chat Input Bar */}
          <div className="bg-[#202c33] p-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about SEO, AI-Agent, Voice AI, UGC Ads..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-4 py-2.5 bg-[#2a3942] rounded-xl text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputVal.trim()}
              className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] disabled:opacity-40 text-black transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Direct Link to Real WhatsApp */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/923462231606?text=Salam%20NEXA%20AI!%20Mujhe%20NexaBoost%20ki%20services%20aur%20pricing%20kay%20baray%20me%20jan-na%20hai."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-bold text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with NEXA AI on Real WhatsApp (+92 346 2231606)</span>
          </a>
        </div>

      </div>
    </section>
  );
};

