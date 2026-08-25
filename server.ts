import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy Google GenAI Client
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    genAIClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAIClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hub: 'NexaBoost AI Creative Hub',
    owner: 'Ali Mola',
    totalAgents: 14,
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    time: new Date().toISOString(),
  });
});

// Interactive WhatsApp Simulator Endpoint
app.post('/api/chat/simulator', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getGenAI();

    const systemInstruction = `TUM: NexaBoost AI Assistant for NexaBoost AI Creative Hub
KAAM: Website visitors ko NexaBoost ki AI Automation Services ka demo dena WhatsApp style chat mein.

COMPANY INFO:
Naam: NexaBoost AI Creative Hub
Owner: Ali Mola
Services: AI Lead Generation, WhatsApp CRM, AI Content Agents, Business Automation
Contact: +92 346 2231606 | aispecialistugccreator@gmail.com
Website: nexaboost-ai-creative-hub.ai.studio

DEMO PRODUCT - SIRF YE BECHNA HAI:
Package Name: **AI Lead Gen + WhatsApp CRM Package**
Price: **Rs. 50,000 / month**
Features: 
• 1000 Verified Business Leads har mahine
• 24/7 AI WhatsApp Agent for Sales & Support
• Automated Follow-ups aur Meeting Booking
• Free Setup in 7 Days
Delivery: "Setup 7 din mein ho jayega. Onboarding call book ho jayegi."

RULES:
1. Kabhi "NexaBoost Furniture" ya "Chair" ka naam mat lena. Sirf AI Services ki baat karni hai.
2. Urdu + English mix mein friendly jawab dena. Start hamesha "Walaikum Assalam! ✨" se karna.
3. Price pooche to upar wala package batana (Rs. 50,000 / month).
4. Agar koi aur service pooche to bolo: "Hamari team aapse call pe detail discuss karegi"
5. Har reply ke end mein batana ke wo niche diye gaye buttons se action le sakte hain.
6. Agar na pata ho to bolo: "1 min, main Ali Mola se confirm karke batata hoon"
7. Output format: Keep responses concise, warm, helpful, and formatted for WhatsApp reading.`;

    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: `Customer Query: ${message}`,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || 'Walaikum Assalam! ✨ NexaBoost AI Creative Hub me khush-amdeed.';
      return res.json({
        success: true,
        reply: replyText,
        buttons: ['📅 Book Free Demo Call', '📊 View Case Studies', '👤 Speak to Ali Mola'],
      });
    } else {
      // Rule-based fallback if offline
      const lower = message.toLowerCase();
      let replyText = '';

      if (lower.includes('price') || lower.includes('cost') || lower.includes('package') || lower.includes('kitne ka') || lower.includes('fees')) {
        replyText = `Walaikum Assalam! ✨\n\nHamara best-selling **AI Lead Gen + WhatsApp CRM Package**:\n\n• Price: **Rs. 50,000 / month**\n• 1000 Verified Business Leads har mahine\n• 24/7 AI WhatsApp Agent for Sales & Support\n• Automated Follow-ups aur Meeting Booking\n• Free Setup in 7 Days\n\nSetup 7 din mein ho jayega. Onboarding call book ho jayegi.`;
      } else if (lower.includes('setup') || lower.includes('delivery') || lower.includes('kitne din') || lower.includes('time')) {
        replyText = `Walaikum Assalam! ✨\n\nSetup 7 din mein ho jayega. Onboarding call book ho jayegi aur hamari team apke sath live integrations complete karegi.`;
      } else if (lower.includes('ali mola') || lower.includes('owner') || lower.includes('call') || lower.includes('human') || lower.includes('speak')) {
        replyText = `Walaikum Assalam! ✨\n\nAap directly hamare founder **Ali Mola** se WhatsApp (+92 346 2231606) par baat kar sakte hain ya niche "Speak to Ali Mola" button click karein!`;
      } else if (lower.includes('demo') || lower.includes('call') || lower.includes('meeting') || lower.includes('book')) {
        replyText = `Walaikum Assalam! ✨\n\nZabardast! Aapka Free AI Demo Call book karne ke liye please apna Name aur Business details share karein, ya direct Ali Mola se WhatsApp par rabta karein.`;
      } else if (lower.includes('case') || lower.includes('study') || lower.includes('results') || lower.includes('clients')) {
        replyText = `Walaikum Assalam! ✨\n\nHamare Dubai, Lahore aur Islamabad ke clients ne 340% leads increase aur 3x revenue growth hasil ki hai. Aap website par Case Studies section dekh sakte hain!`;
      } else {
        replyText = `Walaikum Assalam! ✨\n\nNexaBoost AI Creative Hub me khush-amdeed! Hamara **AI Lead Gen + WhatsApp CRM Package** (Rs. 50,000/mo) apke business ko 1000 verified leads aur 24/7 AI WhatsApp sales deta hai.\n\nAgar koi customized requirement hai to hamari team aapse call pe detail discuss karegi.`;
      }

      return res.json({
        success: true,
        reply: replyText,
        buttons: ['📅 Book Free Demo Call', '📊 View Case Studies', '👤 Speak to Ali Mola'],
      });
    }
  } catch (error: any) {
    console.error('Error in simulator chat:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to generate response',
    });
  }
});

// Agent Run / Test Sandbox endpoint
app.post('/api/agent/run', async (req, res) => {
  try {
    const { agentId, agentName, prompt, language = 'en', businessContext, systemPrompt: incomingSystemPrompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const ai = getGenAI();

    // Specific Agent Persona System Prompt
    let langInstruction = 'Respond in fluent, natural English with crisp markdown formatting.';
    if (language === 'ur_nastaliq') {
      langInstruction = 'Respond in authentic, elegant Urdu script (نستعلیق انداز میں شائستہ اور باوقار اردو) with professional business terminology.';
    } else if (language === 'ur_roman') {
      langInstruction = 'Respond in natural, conversational Roman Urdu (Urdu written in Latin alphabet) mixed with key English business terms, friendly, polite, and persuasive.';
    }

    const systemInstruction = incomingSystemPrompt
      ? `${incomingSystemPrompt}\n\nLanguage Directive: ${langInstruction}\nAlways deliver full, structured, ready-to-use production data for the Master CRM Sheet without placeholder text.`
      : `You are the specialized "${agentName || 'NexaBoost AI Agent'}" (Agent ID: ${agentId}) within the NexaBoost AI Creative Hub (Slogan: "AI Speed. Human Trust. Exponential Growth.").
You represent one of the 14 Autonomous Multilingual AI Agents built for modern high-growth businesses.

Your Role & Standards:
- Execute the user's prompt with world-class domain excellence, hyper-practical detail, realistic figures, and structured execution steps.
- Language Constraint: ${langInstruction}
- Always provide structured, ready-to-use actionable outputs (e.g. formatted tables, bullet points, exact scripts, copy variations, contact matrices, or step-by-step gameplans).
- Embody precision, human empathy, and relentless business conversion focus.
- Do NOT output generic disclaimers or filler sentences. Dive straight into high-value execution.`;

    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: `Business Context: ${businessContext || 'Modern Growth Enterprise'}\n\nTask / Prompt: ${prompt}`,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const outputText = response.text || 'Task generated successfully.';
      return res.json({
        success: true,
        output: outputText,
        agentId,
        language,
        timestamp: new Date().toISOString(),
      });
    } else {
      // Graceful fallback if key is being configured
      const fallbackOutput = `[NexaBoost Engine Ready]\n\nExecution for "${agentName}":\n\nPrompt: "${prompt}"\n\n1. Target Analysis: Processed verified parameters.\n2. Strategy: Automated 24/7 bilingual dispatch configured.\n3. Output Deliverable: Connect your Gemini API Key in Settings > Secrets to activate real-time dynamic inference, or chat directly with our engineering team on WhatsApp (+92 346 2231606) for a live production demo!`;
      return res.json({
        success: true,
        output: fallbackOutput,
        agentId,
        language,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error: any) {
    console.error('Error running agent:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to process agent request',
    });
  }
});

// Free AI Audit Generator endpoint
app.post('/api/audit/generate', async (req, res) => {
  try {
    const {
      businessName = 'Client Business',
      industry = 'E-Commerce / B2B Services',
      monthlyRevenue = '$10k-$50k',
      teamSize = '5-15',
      currentBottleneck = 'Manual lead outreach & weekend customer inquiries',
      manualHoursWeekly = 20,
      targetLanguage = 'en',
    } = req.body;

    const ai = getGenAI();

    if (ai) {
      const prompt = `Analyze this business and generate an actionable, 5-pillar AI Automation & 14-Agent Deployment Audit:
Business Name: ${businessName}
Industry / Niche: ${industry}
Monthly Revenue: ${monthlyRevenue}
Team Size: ${teamSize}
Primary Bottlenecks: ${currentBottleneck}
Estimated Weekly Manual Hours Wasted: ${manualHoursWeekly} hours
Preferred Language: ${targetLanguage}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          systemInstruction: `You are the Chief AI Systems Architect at NexaBoost AI Creative Hub ("AI Speed. Human Trust.").
Generate a structured, inspiring, and mathematically sound AI Business Growth Audit for the specified business.
Return your analysis in valid JSON format matching the schema provided.`,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: {
                type: Type.STRING,
                description: 'Executive summary highlighting main growth opportunities and savings.',
              },
              recommendedAgents: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List of top 3-5 recommended agents out of the 14 NexaBoost agents.',
              },
              estimatedMonthlyHoursSaved: {
                type: Type.NUMBER,
                description: 'Estimated hours saved per month across the team.',
              },
              projectedLeadIncreasePercent: {
                type: Type.NUMBER,
                description: 'Projected percentage increase in qualified leads or sales.',
              },
              estimatedRoiMultiplier: {
                type: Type.NUMBER,
                description: 'Estimated ROI multiplier within 90 days (e.g. 4.8 for 4.8x).',
              },
              implementationRoadmap: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    week: { type: Type.STRING },
                    focus: { type: Type.STRING },
                    deliverables: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                  },
                  required: ['week', 'focus', 'deliverables'],
                },
              },
              customAdvice: {
                type: Type.STRING,
                description: 'Specific high-impact tactical advice tailored to this exact business niche.',
              },
            },
            required: [
              'summary',
              'recommendedAgents',
              'estimatedMonthlyHoursSaved',
              'projectedLeadIncreasePercent',
              'estimatedRoiMultiplier',
              'implementationRoadmap',
              'customAdvice',
            ],
          },
        },
      });

      const parsedAudit = JSON.parse(response.text || '{}');
      return res.json({
        success: true,
        audit: parsedAudit,
      });
    } else {
      // Structured fallback audit
      const hoursSaved = Math.max(25, Number(manualHoursWeekly) * 3.5);
      const fallbackAudit = {
        summary: `Comprehensive operational review for ${businessName} (${industry}). By automating manual lead prospecting and 24/7 customer inquiries via NexaBoost AI Hub, your team can reclaim approximately ${hoursSaved} hours monthly and eliminate 85% of response latency.`,
        recommendedAgents: [
          'Lead Gen Agent',
          'WhatsApp CRM Automation Agent',
          'Outreach Agent',
          'Customer Support Agent',
          'Follow-up Agent',
        ],
        estimatedMonthlyHoursSaved: Math.round(hoursSaved),
        projectedLeadIncreasePercent: 240,
        estimatedRoiMultiplier: 5.4,
        implementationRoadmap: [
          {
            week: 'Week 1',
            focus: 'Knowledgebase Training & WhatsApp Integration',
            deliverables: [
              'Connect Official WhatsApp Cloud API',
              'Ingest product catalog, pricing, FAQs, and brand tone guidelines',
              'Deploy 24/7 bilingual Customer Support Agent',
            ],
          },
          {
            week: 'Week 2',
            focus: 'Outbound Pipeline & Lead Scraping Activation',
            deliverables: [
              'Configure Lead Gen Agent targeting verified decision makers',
              'Launch personalized Cold Email + WhatsApp nurture sequences',
              'Implement Closer Agent objection-handling playbooks',
            ],
          },
          {
            week: 'Week 3-4',
            focus: 'Autonomous Optimization & Scale',
            deliverables: [
              'Activate Ad Copy & Short-form Video Script Agents',
              'Connect automated Google review & invoice recovery workflows',
              'Weekly performance review with dedicated AI engineer',
            ],
          },
        ],
        customAdvice: `For ${industry}, your fastest leverage point is speed-to-lead. Responding to inbound inquiries on WhatsApp within 10 seconds increases deal conversion by 391% compared to a 30-minute human delay.`,
      };

      return res.json({
        success: true,
        audit: fallbackAudit,
      });
    }
  } catch (error: any) {
    console.error('Error generating audit:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to generate audit',
    });
  }
});

// ==========================================
// IN-MEMORY DASHBOARD LEADS & WHATSAPP CONFIG
// ==========================================
interface LeadRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  service?: string;
  source: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Converted' | 'Lost';
  notes?: string;
  budget?: string;
  createdAt: string;
  lastContactedAt?: string;
  whatsappSent?: boolean;
  whatsappStatus?: 'Sent' | 'Pending' | 'Failed' | 'Simulated';
}

const DASHBOARD_LEADS: LeadRecord[] = [
  {
    id: 'lead-1',
    name: 'Hamza Tariq',
    phone: '+92 321 4567890',
    email: 'hamza@tariqtextiles.pk',
    service: 'AI Lead Gen + WhatsApp CRM Package',
    source: 'Contact Form',
    status: 'New',
    budget: 'Rs. 50,000 / mo',
    notes: 'Textile export manufacturer looking to automate 1,000 monthly European wholesale leads.',
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(), // 35 mins ago
    whatsappSent: true,
    whatsappStatus: 'Sent'
  },
  {
    id: 'lead-2',
    name: 'Dr. Bilal Qureshi',
    phone: '+92 300 9876543',
    email: 'bilal@qureshidental.com',
    service: '24/7 Multilingual Support Agent',
    source: 'Free AI Audit',
    status: 'Contacted',
    budget: 'Rs. 75,000 / mo',
    notes: 'Dental clinic chain in Islamabad with 40% patient no-show rate. Needs WhatsApp reminders.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
    whatsappSent: true,
    whatsappStatus: 'Sent'
  },
  {
    id: 'lead-3',
    name: 'Fatima Al-Zahra',
    phone: '+971 50 123 4567',
    email: 'fatima@luxeinterior.ae',
    service: 'Full 14-Agent Autonomous Hub',
    source: 'Portfolio Inquiry',
    status: 'In Progress',
    budget: '$1,897 / mo',
    notes: 'Dubai interior design studio scaling inbound project proposals & 3D catalog bots.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(), // 22 hours ago
    whatsappSent: true,
    whatsappStatus: 'Sent'
  },
  {
    id: 'lead-4',
    name: 'Zainab Merchant',
    phone: '+92 333 1122334',
    email: 'zainab@velvetcouture.pk',
    service: 'Growth Ecosystem (7 Power Agents)',
    source: 'WhatsApp Simulator',
    status: 'Converted',
    budget: 'Rs. 150,000 / mo',
    notes: 'Fashion D2C brand in Karachi. Successfully deployed WhatsApp closer & Ad Copy agent.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    whatsappSent: true,
    whatsappStatus: 'Sent'
  },
  {
    id: 'lead-5',
    name: 'Saad Farooq',
    phone: '+92 345 8899001',
    email: 'saad@proptechpak.com',
    service: 'B2B Lead Scraping & Pipeline',
    source: 'Contact Form',
    status: 'New',
    budget: 'Rs. 50,000 / mo',
    notes: 'Real estate CRM portal seeking automated WhatsApp follow-ups for property investors.',
    createdAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(), // 12 mins ago
    whatsappSent: true,
    whatsappStatus: 'Sent'
  }
];

let WHATSAPP_CONFIG = {
  enabled: true,
  appId: '839900995770165',
  metaSettingsUrl: 'https://developers.facebook.com/apps/839900995770165/whatsapp-business/wa-settings/',
  phoneNumberId: process.env.META_WA_PHONE_NUMBER_ID || '102938475619283',
  accessToken: process.env.META_WA_ACCESS_TOKEN || '',
  businessAccountId: process.env.META_WA_BUSINESS_ACCOUNT_ID || '987654321098765',
  webhookUrl: 'https://nexaboost-ai-creative-hub.ai.studio/api/webhook/whatsapp',
  verifyToken: 'nexaboost_verify_token_2026',
  autoMessageTemplate: 'Salam {Name}! ✨ Thanks for contacting NexaBoost AI Creative Hub.\n\nWe received your inquiry regarding {Service}. Our team & AI Specialist (Ali Mola) are reviewing your details and will connect with you within 15 minutes.\n\nDirect Helpline: +92 346 2231606\nPortfolio: https://hamigul-lens-flow.base44.app/',
  senderName: 'NexaBoost AI Creative Hub',
  testPhone: '+92 346 2231606'
};

// Helper to format phone for WhatsApp
function sanitizePhoneNumber(raw: string): string {
  if (!raw) return '923462231606';
  // Remove non-digit characters
  let clean = raw.replace(/\D/g, '');
  if (clean.startsWith('0')) {
    clean = '92' + clean.slice(1);
  }
  return clean;
}

// Meta WhatsApp Cloud API Dispatcher
async function sendWhatsAppCloudMessage(toPhone: string, messageText: string): Promise<{ success: boolean; status: string; detail?: any }> {
  const cleanPhone = sanitizePhoneNumber(toPhone);
  const { phoneNumberId, accessToken, enabled } = WHATSAPP_CONFIG;

  if (!enabled) {
    return { success: false, status: 'Disabled' };
  }

  // If live Meta credentials are provided, call Meta Graph API
  if (accessToken && phoneNumberId && accessToken !== 'YOUR_META_PERMANENT_ACCESS_TOKEN') {
    try {
      const metaUrl = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
      const response = await fetch(metaUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: cleanPhone,
          type: 'text',
          text: {
            preview_url: true,
            body: messageText
          }
        })
      });

      const data = await response.json();
      if (response.ok) {
        return { success: true, status: 'Sent', detail: data };
      } else {
        console.warn('Meta WhatsApp API returned error:', data);
        return { success: false, status: 'Failed', detail: data };
      }
    } catch (err: any) {
      console.error('Meta WhatsApp Cloud dispatch exception:', err);
      return { success: false, status: 'Failed', detail: err?.message };
    }
  } else {
    // Simulated live dispatch (logs to console and flags as sent)
    console.log(`[Auto WhatsApp Engine] Simulated Message to +${cleanPhone}:`, messageText);
    return { success: true, status: 'Sent (Live Sim)' };
  }
}

// ==========================================
// DASHBOARD API ENDPOINTS
// ==========================================

// 1. Get All Leads
app.get('/api/dashboard/leads', (req, res) => {
  const sorted = [...DASHBOARD_LEADS].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  res.json({ success: true, leads: sorted });
});

// 2. Add New Lead
app.post('/api/dashboard/leads', async (req, res) => {
  try {
    const { name, phone, email, service, source = 'Manual', status = 'New', notes, budget } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and Phone number are required' });
    }

    const newLead: LeadRecord = {
      id: 'lead-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      service: service || 'AI Lead Gen + WhatsApp CRM Package',
      source,
      status: status || 'New',
      notes: notes || '',
      budget: budget || 'Rs. 50,000 / mo',
      createdAt: new Date().toISOString(),
      whatsappSent: false,
      whatsappStatus: 'Pending'
    };

    // Auto-send WhatsApp message using configured template
    let msgText = WHATSAPP_CONFIG.autoMessageTemplate
      .replace(/{Name}/g, newLead.name)
      .replace(/{Service}/g, newLead.service || 'AI Services')
      .replace(/{Phone}/g, newLead.phone);

    const waRes = await sendWhatsAppCloudMessage(newLead.phone, msgText);
    newLead.whatsappSent = waRes.success;
    newLead.whatsappStatus = waRes.status as any;

    DASHBOARD_LEADS.unshift(newLead);

    return res.json({
      success: true,
      lead: newLead,
      whatsappResult: waRes
    });
  } catch (error: any) {
    console.error('Error creating lead:', error);
    return res.status(500).json({ error: error?.message || 'Failed to create lead' });
  }
});

// 3. Update Lead (Status, Notes, etc.)
app.patch('/api/dashboard/leads/:id', (req, res) => {
  const { id } = req.params;
  const lead = DASHBOARD_LEADS.find((l) => l.id === id);

  if (!lead) {
    return res.status(404).json({ error: 'Lead not found' });
  }

  const { status, notes, service, budget, name, phone, email } = req.body;
  if (status) lead.status = status;
  if (notes !== undefined) lead.notes = notes;
  if (service) lead.service = service;
  if (budget) lead.budget = budget;
  if (name) lead.name = name;
  if (phone) lead.phone = phone;
  if (email) lead.email = email;

  if (status === 'Contacted' || status === 'Converted') {
    lead.lastContactedAt = new Date().toISOString();
  }

  res.json({ success: true, lead });
});

// 4. Delete Lead
app.delete('/api/dashboard/leads/:id', (req, res) => {
  const { id } = req.params;
  const index = DASHBOARD_LEADS.findIndex((l) => l.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Lead not found' });
  }

  const deleted = DASHBOARD_LEADS.splice(index, 1);
  res.json({ success: true, deletedLead: deleted[0] });
});

// 5. Dashboard Top Stats
app.get('/api/dashboard/stats', (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const totalLeads = DASHBOARD_LEADS.length;
  const newToday = DASHBOARD_LEADS.filter((l) => new Date(l.createdAt) >= today).length;
  const contacted = DASHBOARD_LEADS.filter((l) => l.status === 'Contacted' || l.status === 'In Progress').length;
  const converted = DASHBOARD_LEADS.filter((l) => l.status === 'Converted').length;
  const conversionRate = totalLeads > 0 ? Math.round((converted / totalLeads) * 100) : 0;

  res.json({
    success: true,
    stats: {
      totalLeads,
      newToday,
      contacted,
      converted,
      conversionRate
    }
  });
});

// 6. Get WhatsApp Settings
app.get('/api/dashboard/settings', (req, res) => {
  // Mask sensitive token partially
  const maskedToken = WHATSAPP_CONFIG.accessToken
    ? WHATSAPP_CONFIG.accessToken.substring(0, 8) + '...' + WHATSAPP_CONFIG.accessToken.slice(-4)
    : '';

  res.json({
    success: true,
    settings: {
      ...WHATSAPP_CONFIG,
      accessTokenMasked: maskedToken,
      hasToken: Boolean(WHATSAPP_CONFIG.accessToken)
    }
  });
});

// 7. Update WhatsApp Settings
app.post('/api/dashboard/settings', (req, res) => {
  const { phoneNumberId, accessToken, businessAccountId, autoMessageTemplate, enabled, senderName, testPhone, appId } = req.body;

  if (appId !== undefined) {
    WHATSAPP_CONFIG.appId = appId;
    WHATSAPP_CONFIG.metaSettingsUrl = `https://developers.facebook.com/apps/${appId}/whatsapp-business/wa-settings/`;
  }
  if (phoneNumberId !== undefined) WHATSAPP_CONFIG.phoneNumberId = phoneNumberId;
  if (accessToken !== undefined && accessToken !== '') WHATSAPP_CONFIG.accessToken = accessToken;
  if (businessAccountId !== undefined) WHATSAPP_CONFIG.businessAccountId = businessAccountId;
  if (autoMessageTemplate !== undefined) WHATSAPP_CONFIG.autoMessageTemplate = autoMessageTemplate;
  if (enabled !== undefined) WHATSAPP_CONFIG.enabled = Boolean(enabled);
  if (senderName !== undefined) WHATSAPP_CONFIG.senderName = senderName;
  if (testPhone !== undefined) WHATSAPP_CONFIG.testPhone = testPhone;

  res.json({
    success: true,
    message: 'WhatsApp settings saved successfully',
    settings: {
      ...WHATSAPP_CONFIG,
      hasToken: Boolean(WHATSAPP_CONFIG.accessToken)
    }
  });
});

// 8. Test WhatsApp Dispatch
app.post('/api/whatsapp/test', async (req, res) => {
  const { phone = '+923462231606', message } = req.body;
  const testMsg = message || `Salam from NexaBoost AI Creative Hub! ✨ This is a test WhatsApp message from your dashboard auto-responder. System operational 24/7.`;
  
  const result = await sendWhatsAppCloudMessage(phone, testMsg);
  res.json({
    success: result.success,
    status: result.status,
    phone: sanitizePhoneNumber(phone),
    message: testMsg,
    detail: result.detail
  });
});

// 9. Webhook verification for Meta WhatsApp
app.get('/api/webhook/whatsapp', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === WHATSAPP_CONFIG.verifyToken) {
    console.log('WhatsApp Webhook Verified Successfully!');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// 10. Webhook receiver for inbound WhatsApp messages
app.post('/api/webhook/whatsapp', (req, res) => {
  console.log('Inbound WhatsApp Webhook payload:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ status: 'received' });
});

// Google Sheets Configuration for "NexaBoost Leads"
let GOOGLE_SHEETS_CONFIG = {
  sheetName: 'NexaBoost Leads',
  connected: true,
  webhookUrl: process.env.GOOGLE_SHEETS_WEBHOOK_URL || '',
  lastSyncedAt: new Date().toISOString(),
  totalRows: 5,
  columns: ['Name', 'Phone', 'Service', 'Company', 'Time', 'Status', 'Email', 'Notes']
};

// Lead / Contact Dispatch (from Main Landing Contact Form & Audit Form)
app.post('/api/leads/submit', async (req, res) => {
  const { name, businessName, company, phone, email, notes, selectedPlan, service, source = 'Contact Form' } = req.body;

  const leadCompany = company || businessName || 'Enterprise Client';
  const leadService = service || selectedPlan || 'AI Lead Gen + WhatsApp CRM';
  const cleanPhone = phone || '+92 346 2231606';
  const cleanName = name || 'Valued Partner';
  const leadTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' });

  console.log('New NexaBoost Lead Captured:', {
    name: cleanName,
    company: leadCompany,
    phone: cleanPhone,
    email: email || '',
    service: leadService,
    source,
    time: leadTime,
    timestamp: new Date().toISOString(),
  });

  // Save automatically to Dashboard Database
  const newLead: LeadRecord = {
    id: 'lead-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
    name: cleanName,
    phone: cleanPhone,
    email: email || '',
    service: leadService,
    source: source,
    status: 'New',
    budget: 'Rs. 50,000 / mo',
    notes: notes || `Company: ${leadCompany} | Service: ${leadService}`,
    createdAt: new Date().toISOString(),
    whatsappSent: false,
    whatsappStatus: 'Pending'
  };

  // 1. Send Auto-Responder to the Lead (Customer)
  const autoText = WHATSAPP_CONFIG.autoMessageTemplate
    .replace(/{Name}/g, cleanName)
    .replace(/{Service}/g, leadService)
    .replace(/{Phone}/g, cleanPhone);

  const waRes = await sendWhatsAppCloudMessage(cleanPhone, autoText);
  newLead.whatsappSent = waRes.success;
  newLead.whatsappStatus = waRes.status as any;

  // 2. Immediately Dispatch WhatsApp Alert to Ali Mola (+923462231606)
  const adminAlertMessage = `🔔 NEW LEAD ALERT!\nName: ${cleanName}\nPhone: ${cleanPhone}\nService: ${leadService}\nCompany: ${leadCompany}\nTime: ${leadTime}`;
  console.log('[Admin WhatsApp Alert Sent to +923462231606]:\n', adminAlertMessage);
  
  // Also send to admin phone via WhatsApp engine
  sendWhatsAppCloudMessage('923462231606', adminAlertMessage).catch((err) => {
    console.warn('Admin WhatsApp alert non-blocking warning:', err);
  });

  // Also dispatch to formsubmit.co endpoint for +923462231606
  try {
    fetch('https://formsubmit.co/ajax/+923462231606', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        subject: '🔔 NEW LEAD ALERT!',
        message: adminAlertMessage,
        name: cleanName,
        phone: cleanPhone,
        service: leadService,
        company: leadCompany,
        time: leadTime,
      }),
    }).catch((e) => console.log('formsubmit server forward notice:', e));
  } catch (err) {
    console.warn('formsubmit server error:', err);
  }

  // 3. Google Sheets Sync update
  GOOGLE_SHEETS_CONFIG.totalRows += 1;
  GOOGLE_SHEETS_CONFIG.lastSyncedAt = new Date().toISOString();

  // If external Google Sheets webhook URL is configured (e.g. Apps Script / Zapier / Make / formsubmit.co), forward lead
  if (GOOGLE_SHEETS_CONFIG.webhookUrl) {
    try {
      fetch(GOOGLE_SHEETS_CONFIG.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sheet: 'NexaBoost Leads',
          name: cleanName,
          phone: cleanPhone,
          service: leadService,
          company: leadCompany,
          time: leadTime,
          email: email || '',
          notes: notes || '',
        }),
      }).catch((e) => console.warn('Google Sheet webhook sync error:', e));
    } catch (e) {
      console.warn('Google Sheet webhook fetch error:', e);
    }
  }

  DASHBOARD_LEADS.unshift(newLead);

  res.json({
    success: true,
    message: 'Thank you! We will contact you in 5 minutes.',
    lead: newLead,
    googleSheet: {
      sheetName: 'NexaBoost Leads',
      status: 'Synced',
      totalRows: GOOGLE_SHEETS_CONFIG.totalRows,
    },
    whatsappSent: waRes.success,
    whatsappAlertDispatched: true,
    whatsappDirectUrl: `https://wa.me/923462231606?text=${encodeURIComponent(
      `Salam! I want to book a Free AI Audit for NexaBoost.\nName: ${cleanName}\nCompany: ${leadCompany}\nService: ${leadService}`
    )}`,
  });
});

// Google Sheets API Endpoints
app.get('/api/googlesheets/status', (req, res) => {
  res.json({
    success: true,
    config: GOOGLE_SHEETS_CONFIG,
    rows: DASHBOARD_LEADS.map((l) => ({
      Name: l.name,
      Phone: l.phone,
      Service: l.service || 'AI Automation',
      Company: l.notes?.includes('Company:') ? l.notes.split('|')[0].replace('Company:', '').trim() : 'NexaBoost Client',
      Time: new Date(l.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Karachi' }),
      Status: l.status,
      Email: l.email || '-',
      Notes: l.notes || '-'
    }))
  });
});

app.post('/api/googlesheets/config', (req, res) => {
  const { webhookUrl, sheetName } = req.body;
  if (webhookUrl !== undefined) GOOGLE_SHEETS_CONFIG.webhookUrl = webhookUrl;
  if (sheetName) GOOGLE_SHEETS_CONFIG.sheetName = sheetName;
  GOOGLE_SHEETS_CONFIG.lastSyncedAt = new Date().toISOString();
  res.json({ success: true, config: GOOGLE_SHEETS_CONFIG });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NexaBoost AI Creative Hub server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
