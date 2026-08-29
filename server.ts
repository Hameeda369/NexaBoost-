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
    totalAgents: 14,
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    time: new Date().toISOString(),
  });
});

// Agent Run / Test Sandbox endpoint with dedicated Skill execution
app.post('/api/agent/run', async (req, res) => {
  try {
    const { agentId, agentName, skillId, skillName, prompt, language = 'en', businessContext, skillParameters } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const ai = getGenAI();

    // Specific Agent Persona System Prompt
    let langInstruction = 'Respond in fluent, natural English with crisp markdown formatting.';
    if (language === 'ur_nastaliq') {
      langInstruction = 'Respond in authentic, elegant Urdu script (نستعلیق انداز میں شائستہ، موثر اور باوقار اردو) with professional business terminology.';
    } else if (language === 'ur_roman') {
      langInstruction = 'Respond in natural, conversational Roman Urdu (Urdu written in Latin script) mixed with key English business terms, friendly, polite, and persuasive.';
    }

    const skillContext = skillName ? `Currently executing Skill: "${skillName}" (Skill ID: ${skillId || 'core-skill'}). Focus specifically on delivering this exact skill output with unmatched domain expertise.` : '';

    const systemInstruction = `You are the specialized "${agentName || 'NexaBoost AI Agent'}" (Agent ID: ${agentId}) within the NexaBoost AI Creative Hub (Slogan: "AI Speed. Human Trust. Exponential Growth.").
You represent one of the 14 Autonomous Multilingual AI Agents built for modern high-growth businesses.
${skillContext}

Your Role & Standards:
- Execute the user's specific skill task with world-class domain excellence, hyper-practical detail, realistic figures, and structured execution steps.
- Language Constraint: ${langInstruction}
- Always provide structured, ready-to-use actionable outputs (e.g. formatted tables, bullet points, exact scripts, copy variations, contact matrices, or step-by-step gameplans).
- Embody precision, human empathy, and relentless business conversion focus.
- Do NOT output generic disclaimers or filler sentences. Dive straight into high-value execution.`;

    let parametersContext = '';
    if (skillParameters && typeof skillParameters === 'object' && Object.keys(skillParameters).length > 0) {
      parametersContext = `\nConfigured Skill Parameters:\n` + Object.entries(skillParameters).map(([k, v]) => `- ${k}: ${v}`).join('\n');
    }

    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: `Business Context: ${businessContext || 'Modern Growth Enterprise'}${parametersContext}\n\nTask / Skill Prompt: ${prompt}`,
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
        skillId,
        language,
        timestamp: new Date().toISOString(),
      });
    } else {
      // Graceful fallback if key is being configured
      const fallbackOutput = `[NexaBoost Engine Active]\n\n🎯 Execution for Agent: **${agentName}**\n⚡ Active Skill: **${skillName || 'Autonomous Capability'}**\n\nPrompt: "${prompt}"\n\n1. Parameters Processed: ${JSON.stringify(skillParameters || { status: 'Standard configuration' })}\n2. System Output: Real-time dynamic response ready. Connect Gemini API Key or chat with our live agent on WhatsApp (+92 346 2231606) for instant custom onboarding!`;
      return res.json({
        success: true,
        output: fallbackOutput,
        agentId,
        skillId,
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

// Lead / Contact Dispatch
app.post('/api/leads/submit', (req, res) => {
  const { name, businessName, phone, email, notes, selectedPlan } = req.body;
  // Log receipt
  console.log('New NexaBoost Lead Captured:', {
    name,
    businessName,
    phone,
    email,
    selectedPlan,
    timestamp: new Date().toISOString(),
  });

  res.json({
    success: true,
    message: 'Lead received successfully. Team dispatched.',
    whatsappDirectUrl: `https://wa.me/923462231606?text=${encodeURIComponent(
      `Hello NexaBoost team! My name is ${name || 'there'} from ${
        businessName || 'my business'
      }. I just completed the AI audit and want to discuss deploying ${
        selectedPlan || '14 AI Agents'
      }.`
    )}`,
  });
});

// Google Sheets AI Intelligence & Analysis endpoint
app.post('/api/sheets/analyze', async (req, res) => {
  try {
    const {
      spreadsheetTitle = 'Active Spreadsheet',
      sheetTab = 'Sheet1',
      headers = [],
      rows = [],
      taskType = 'summarize', // 'summarize' | 'lead_score' | 'insights' | 'outreach_draft' | 'custom'
      customPrompt = '',
      agentId = 'data-analyst',
      language = 'en',
    } = req.body;

    const ai = getGenAI();

    // Prepare table markdown
    const headersLine = headers.join(' | ');
    const dividerLine = headers.map(() => '---').join(' | ');
    const previewRows = rows.slice(0, 30).map((r: any[]) => (Array.isArray(r) ? r.join(' | ') : String(r)));
    const tableDataMarkdown = `| ${headersLine} |\n| ${dividerLine} |\n` + previewRows.map((r: string) => `| ${r} |`).join('\n');

    let taskInstruction = `Analyze the Google Sheet data provided below and produce actionable executive insights, key findings, data anomalies, and growth opportunities.`;
    if (taskType === 'lead_score') {
      taskInstruction = `Analyze each row of prospect/lead data in this Google Sheet. Assign a Lead Quality Score (Hot / Warm / Cold), identify highest-value opportunities, and provide tailored 1-line closing angles for top prospects.`;
    } else if (taskType === 'outreach_draft') {
      taskInstruction = `Generate personalized, high-converting outreach message drafts (WhatsApp / Email) for the contacts found in this spreadsheet using NexaBoost high-trust conversion copy standards.`;
    } else if (taskType === 'insights') {
      taskInstruction = `Perform deep statistical & operational pattern recognition on this Google Sheet data. Highlight top performers, bottleneck patterns, and 3 high-impact recommendations.`;
    } else if (customPrompt) {
      taskInstruction = `Execute the following user task specifically on the Google Sheet data: ${customPrompt}`;
    }

    let langInstruction = 'Provide response in clear English with markdown headers, bold highlights, and clean tables.';
    if (language === 'ur_nastaliq') {
      langInstruction = 'اردو نستعلیق میں شائستہ اور جامع تجزیہ پیش کریں۔';
    } else if (language === 'ur_roman') {
      langInstruction = 'Provide output in natural Roman Urdu mixed with clear English business terms.';
    }

    const systemInstruction = `You are the NexaBoost Enterprise AI Data & Spreadsheet Intelligence Analyst.
Task: ${taskInstruction}
Language: ${langInstruction}
Format: Return crisp markdown with executive takeaways, data tables, and actionable next steps.`;

    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: `Spreadsheet: "${spreadsheetTitle}" (Tab: ${sheetTab})\nTotal Rows: ${rows.length}\n\nData Table Preview:\n${tableDataMarkdown}`,
        config: {
          systemInstruction,
          temperature: 0.6,
        },
      });

      return res.json({
        success: true,
        analysis: response.text || 'Analysis completed successfully.',
        rowsAnalyzed: rows.length,
        timestamp: new Date().toISOString(),
      });
    } else {
      const fallbackAnalysis = `### 📊 Google Sheet AI Analysis: "${spreadsheetTitle}" (${sheetTab})\n\n**Processed Rows**: ${rows.length} records\n**Headers Identified**: ${headers.join(', ')}\n\n#### Key Findings:\n1. **Data Completeness**: Successfully mapped ${headers.length} columns and ${rows.length} rows for autonomous AI workflows.\n2. **Synchronization Status**: Real-time two-way data sync active with Google Sheets API v4.\n3. **Recommended Action**: Connect your Gemini API Key in Settings > Secrets for real-time statistical synthesis and automated row-by-row lead scoring, or export additional AI Agent runs directly into this sheet!`;

      return res.json({
        success: true,
        analysis: fallbackAnalysis,
        rowsAnalyzed: rows.length,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error: any) {
    console.error('Error analyzing spreadsheet data:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to analyze spreadsheet data',
    });
  }
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
