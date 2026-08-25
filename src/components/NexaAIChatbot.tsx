import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageCircle, Send, X, Sparkles, ChevronRight, Phone, CheckCircle2, User, RefreshCw } from 'lucide-react';
import { LanguageMode } from '../types';

interface NexaAIChatbotProps {
  language: LanguageMode;
  onOpenAudit: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: 'open_audit' | 'whatsapp' | 'phone_capture';
}

export const NexaAIChatbot: React.FC<NexaAIChatbotProps> = ({ language, onOpenAudit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text:
        language === 'ur_nastaliq'
          ? 'السلام علیکم! میں Nexa AI ہوں، NexaBoost⚡ کا اسمارٹ اسسٹنٹ۔ میں آپ کی کیا مدد کر سکتا ہوں؟'
          : 'Salam! I am Nexa AI, the 24/7 AI growth agent for NexaBoost⚡ by Ali Mola. How can I assist your business today?',
      timestamp: 'Just now',
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Analyze intent based on prompt specifications
    const lowerQuery = query.toLowerCase();

    setTimeout(() => {
      let botResponse: Message;
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Rule 1: Price / Package / Cost Inquiry
      if (
        lowerQuery.includes('price') ||
        lowerQuery.includes('cost') ||
        lowerQuery.includes('pricing') ||
        lowerQuery.includes('package') ||
        lowerQuery.includes('rate') ||
        lowerQuery.includes('fees') ||
        lowerQuery.includes('how much') ||
        lowerQuery.includes('قیمت') ||
        lowerQuery.includes('پیکیج')
      ) {
        botResponse = {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: 'Our AI Lead Gen packages start from 15,000 PKR/month. Book a free demo?',
          timestamp: timeStr,
          action: 'open_audit',
        };
      }
      // Rule 2: Demo / Audit / Book Inquiry
      else if (
        lowerQuery.includes('demo') ||
        lowerQuery.includes('audit') ||
        lowerQuery.includes('book') ||
        lowerQuery.includes('schedule') ||
        lowerQuery.includes('meeting') ||
        lowerQuery.includes('consultation') ||
        lowerQuery.includes('ڈیمو') ||
        lowerQuery.includes('آڈٹ')
      ) {
        botResponse = {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: 'Opening your Free AI Business Audit & Demo booking portal now! You can also chat directly with Ali Mola on WhatsApp.',
          timestamp: timeStr,
          action: 'open_audit',
        };
        // Auto trigger the audit modal / section
        setTimeout(() => {
          onOpenAudit();
        }, 500);
      }
      // Rule 3: Any other question -> connect to team & ask for number
      else {
        botResponse = {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: 'Let me connect you to our team. Please leave your number or reach us directly on WhatsApp (+92 346 2231606).',
          timestamp: timeStr,
          action: 'phone_capture',
        };
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userPhone.trim()) return;

    try {
      await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Nexa AI Chat Visitor',
          phone: userPhone,
          service: 'Nexa AI Chatbot Inquiry',
          source: 'Nexa AI Chatbot',
          notes: 'Captured via Nexa AI chatbot interactive widget',
        }),
      });
      setPhoneSubmitted(true);
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-confirm-' + Date.now(),
          sender: 'bot',
          text: `Thank you! We received ${userPhone}. Ali Mola & our team will contact you in 5 minutes via WhatsApp.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      console.error('Phone sync error:', err);
      setPhoneSubmitted(true);
    }
  };

  return (
    <aside aria-label="Nexa AI Chat Assistant" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[520px] max-h-[85vh] bg-[#0A1F44]/95 backdrop-blur-xl border border-[#00A8FF]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#07132B] border-b border-[#00A8FF]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00A8FF] to-[#A78BFA] p-0.5 flex items-center justify-center shadow-md">
                  <div className="w-full h-full bg-[#0A1F44] rounded-[10px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#00A8FF]" />
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#07132B]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white font-serif">Nexa AI</h4>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30">
                    ⚡ 24/7 Agent
                  </span>
                </div>
                <p className="text-[10px] text-[#00A8FF] font-mono">Barkat se Growth • by Ali Mola</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setMessages([
                    {
                      id: 'msg-1',
                      sender: 'bot',
                      text: 'Salam! I am Nexa AI, the 24/7 AI growth agent for NexaBoost⚡ by Ali Mola. How can I assist your business today?',
                      timestamp: 'Just now',
                    },
                  ]);
                  setPhoneSubmitted(false);
                }}
                className="p-1.5 text-[#888888] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#888888] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#00A8FF] text-white rounded-br-none font-medium'
                      : 'bg-[#122B5C] border border-[#00A8FF]/30 text-[#E0E0E0] rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Interactive Action Buttons */}
                  {msg.action === 'open_audit' && (
                    <div className="mt-2.5 pt-2 border-t border-white/15 flex flex-col gap-1.5">
                      <button
                        onClick={() => {
                          onOpenAudit();
                          setIsOpen(false);
                        }}
                        className="w-full py-1.5 px-3 rounded-lg bg-[#FFD700] hover:bg-[#ffe135] text-black font-mono font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 fill-black" />
                        <span>Book Free Demo / AI Audit</span>
                      </button>

                      <a
                        href="https://wa.me/923462231606?text=Salam%20I%20want%20to%20book%20a%20Free%20AI%20Audit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Chat on WhatsApp (+92 346 2231606)</span>
                      </a>
                    </div>
                  )}

                  {msg.action === 'phone_capture' && !phoneSubmitted && (
                    <form onSubmit={handlePhoneSubmit} className="mt-2.5 pt-2 border-t border-white/15 space-y-2">
                      <div className="flex items-center gap-1.5">
                        <input
                          type="tel"
                          placeholder="Your WhatsApp: +92 3xx..."
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          required
                          className="w-full px-2.5 py-1.5 rounded-lg bg-[#07132B] border border-[#00A8FF]/40 text-white text-[11px] placeholder-[#777777] focus:outline-none focus:border-[#FFD700]"
                        />
                        <button
                          type="submit"
                          className="px-3 py-1.5 rounded-lg bg-[#25D366] text-black font-bold text-[11px] shrink-0"
                        >
                          Send
                        </button>
                      </div>
                      <a
                        href="https://wa.me/923462231606?text=Salam%20I%20want%20to%20connect%20with%20Ali%20Mola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-[10px] text-[#00A8FF] hover:underline font-mono"
                      >
                        Or click here to chat on WhatsApp directly →
                      </a>
                    </form>
                  )}
                </div>
                <span className="text-[9px] font-mono text-[#78909C] mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 bg-[#122B5C] border border-[#00A8FF]/20 rounded-xl rounded-bl-none w-16">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="px-3 py-2 bg-[#07132B]/80 border-t border-[#00A8FF]/20 flex gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleSendMessage('What is the price?')}
              className="px-2.5 py-1 rounded-full bg-[#122B5C] hover:bg-[#00A8FF]/30 border border-[#00A8FF]/30 text-[#00A8FF] hover:text-white text-[10px] font-mono whitespace-nowrap transition-colors"
            >
              💰 Price?
            </button>
            <button
              onClick={() => handleSendMessage('Book a free demo')}
              className="px-2.5 py-1 rounded-full bg-[#122B5C] hover:bg-[#FFD700]/30 border border-[#FFD700]/40 text-[#FFD700] hover:text-white text-[10px] font-mono whitespace-nowrap transition-colors"
            >
              🚀 Book Demo
            </button>
            <button
              onClick={() => handleSendMessage('Tell me about 13 AI Agents')}
              className="px-2.5 py-1 rounded-full bg-[#122B5C] hover:bg-[#00A8FF]/30 border border-[#00A8FF]/30 text-[#00A8FF] hover:text-white text-[10px] font-mono whitespace-nowrap transition-colors"
            >
              🤖 13 AI Agents
            </button>
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-[#07132B] border-t border-[#00A8FF]/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Nexa AI about price, demo, agents..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-3 py-2 bg-[#0A1F44] border border-[#00A8FF]/30 rounded-xl text-xs text-white placeholder-[#78909C] focus:outline-none focus:border-[#00A8FF] font-sans"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-xl bg-[#00A8FF] hover:bg-[#0090dc] disabled:opacity-40 text-black font-bold transition-all shrink-0 cursor-pointer"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Floating Toggle Button Bar */}
      <div className="flex items-center gap-2">
        {/* Direct WhatsApp Quick Shortcut */}
        <a
          href="https://wa.me/923462231606?text=Salam%20I%20want%20to%20book%20a%20Free%20AI%20Audit"
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 px-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono font-bold text-xs flex items-center gap-2 shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all group"
          title="Direct WhatsApp (+92 346 2231606)"
        >
          <MessageCircle className="w-5 h-5 fill-current text-black" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Nexa AI Widget Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="nexa-ai-chatbot-btn"
          className="h-12 px-4 rounded-full bg-gradient-to-r from-[#0A1F44] to-[#122B5C] hover:from-[#122B5C] hover:to-[#0A1F44] border border-[#00A8FF]/60 text-white font-mono font-bold text-xs flex items-center gap-2.5 shadow-2xl shadow-[#00A8FF]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          aria-label="Open Nexa AI Chat Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-[#00A8FF] group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FFD700] animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FFD700]" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="text-white">Nexa AI</span>
              <span className="text-[10px] text-[#FFD700]">⚡</span>
            </div>
          </div>
        </button>
      </div>
    </aside>
  );
};
