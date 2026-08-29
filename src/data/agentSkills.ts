import { AgentSkill } from '../types';

export const AGENT_SKILLS_MAP: Record<string, AgentSkill[]> = {
  'lead-gen': [
    {
      id: 'b2b-icp-scraping',
      name: 'ICP Prospect Scraper & Targeter',
      nameUrdu: 'مخصوص معیار کی لیڈز تلاش کرنا',
      badge: 'High Accuracy',
      iconName: 'Search',
      description: 'Filters and scrapes decision-makers by exact industry, company revenue, employee headcount, and geographic territory.',
      descriptionUrdu: 'مخصوص انڈسٹری، ریونیو اور عہدے کے مطابق فیصلہ سازوں کے کوائف جمع کرتا ہے۔',
      inputPlaceholder: 'e.g. Real estate developers in Dubai with $5M+ revenue',
      defaultPrompt: 'Find 5 verified B2B decision-maker prospects in Dubai commercial real estate with revenue over $5M needing luxury interior fitouts.',
      defaultPromptUrdu: 'دبئی میں کمرشل رئیل اسٹیٹ کے 5 تصدیق شدہ فیصلہ سازوں کی فہرست ان کے رابطوں اور ضروریات سمیت تیار کریں۔',
      parameters: [
        { name: 'industry', label: 'Target Industry', labelUrdu: 'ہدف انڈسٹری', type: 'text', defaultValue: 'Commercial Real Estate / Fit-out' },
        { name: 'location', label: 'Target City / Country', labelUrdu: 'شہر / ملک', type: 'text', defaultValue: 'Dubai, UAE' },
        { name: 'companySize', label: 'Company Size', labelUrdu: 'کمپنی کا سائز', type: 'select', defaultValue: '20-100 employees', options: [{ label: '1-10 (Micro)', value: '1-10' }, { label: '11-50 (Small)', value: '11-50' }, { label: '50-200 (Mid)', value: '50-200' }, { label: '200+ (Enterprise)', value: '200+' }] },
        { name: 'role', label: 'Decision Maker Title', labelUrdu: 'عہدہ', type: 'text', defaultValue: 'Managing Director / Head of Procurement' },
      ],
      quickTemplates: [
        {
          title: 'Dubai Real Estate Developers',
          titleUrdu: 'دبئی رئیل اسٹیٹ ڈویلپرز',
          prompt: 'Find 5 B2B leads for commercial fit-out in Business Bay Dubai, company size 25-100.',
          promptUrdu: 'بزنس بے دبئی میں 5 کمرشل رئیل اسٹیٹ فرمز کے مینیجنگ ڈائریکٹرز کے کوائف نکالیں۔'
        },
        {
          title: 'Pakistani E-commerce Fashion Brands',
          titleUrdu: 'پاکستانی کلاتھنگ برانڈز',
          prompt: 'Identify top 5 apparel e-commerce brands in Lahore/Karachi needing warehouse & marketing automation.',
          promptUrdu: 'لاہور اور کراچی کے 5 تیزی سے بڑھتے ہوئے فیشن برانڈز کی فہرست ان کے آنرز کے ساتھ بنائیں۔'
        },
        {
          title: 'US/UK SaaS Founders',
          titleUrdu: 'امریکی و برطانوی سافٹ ویئر فاؤنڈرز',
          prompt: 'Scrape 5 funded B2B SaaS startups ($1M-$5M ARR) seeking 24/7 outsourced SDR & support teams.',
          promptUrdu: 'امریکا اور برطانیہ کے 5 سافٹ ویئر فاؤنڈرز کے پروفائلز تلاش کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎯 Qualified ICP Prospects Batch #104\n\n1. **Aura Horizon Developments (Dubai, UAE)**\n   - **Decision Maker:** Tariq Mansoor (VP Procurement & Projects)\n   - **Direct Contact:** tariq.m@aurahorizon.ae | WhatsApp: +971 50 *** 4120\n   - **ICP Fit Score:** 96/100 (Recently leased 14,000 sq ft in Business Bay)\n   - **Budget Signal:** Active RFP for turnkey office renovation ($450k)\n\n2. **Vertex Global Logistics ME**\n   - **Decision Maker:** Sarah Al-Hashimi (Head of Expansion)\n   - **Direct Contact:** s.hashimi@vertexgl.com | WhatsApp: +971 52 *** 8831\n   - **ICP Fit Score:** 92/100 (Opening new JAFZA hub Q3)`,
        ur_nastaliq: `### 🎯 تصدیق شدہ لیڈز کی رپورٹ (دبئی رئیل اسٹیٹ)\n\n1. **اورا ہورائزن ڈیولپمنٹس**\n   - **فیصلہ ساز:** طارق منصور (ہیڈ آف پروکیورمنٹ)\n   - **رابطہ:** tariq.m@aurahorizon.ae | واٹس ایپ: +971 50 *** 4120\n   - **ضرورت:** بزنس بے میں نیا 14,000 مربع فٹ آفس تیار کر رہے ہیں۔\n   - **لیڈ اسکور:** 96/100 (فوری خریدار)`,
        ur_roman: `### 🎯 Verified Leads Matrix\n\n1. Aura Horizon Developments (Dubai)\n   - Decision Maker: Tariq Mansoor (VP Projects)\n   - Email: tariq.m@aurahorizon.ae | WA: +971 50 *** 4120\n   - Signal: 14k sqft office renovation Q3 budget ready.\n   - Lead Score: 96/100`
      }
    },
    {
      id: 'contact-enrichment',
      name: 'Direct WhatsApp & Email Validator',
      nameUrdu: 'ای میل اور واٹس ایپ کی تصدیق',
      badge: '98.5% Delivery',
      iconName: 'Check',
      description: 'Validates MX records, SMTP handshakes, and active WhatsApp phone status to prevent bounce rates.',
      descriptionUrdu: 'ای میلز اور براہ راست واٹس ایپ نمبرز کی درستگی کی جانچ کر کے باؤنس ریٹ ختم کرتا ہے۔',
      inputPlaceholder: 'Enter company names or domains to enrich...',
      defaultPrompt: 'Enrich and verify corporate emails, LinkedIn URLs, and direct WhatsApp lines for 3 specified retail brands.',
      defaultPromptUrdu: 'تین ریٹیل برانڈز کے مالکان کے آفیشل ای میل اور واٹس ایپ نمبرز کی تصدیق کریں۔',
      parameters: [
        { name: 'verificationLevel', label: 'Verification Strictness', labelUrdu: 'تصدیق کا معیار', type: 'select', defaultValue: 'Strict SMTP + WA Ping', options: [{ label: 'Standard MX', value: 'standard' }, { label: 'Strict SMTP + WA Ping', value: 'strict' }] }
      ],
      quickTemplates: [
        {
          title: 'Verify 3 Pakistan Fashion Retailers',
          titleUrdu: 'تین فیشن برانڈز کے نمبرز کی تصدیق',
          prompt: 'Enrich C-level contacts for Sapphire, J. and Nishat Linen marketing departments.',
          promptUrdu: 'تین بڑے پاکستانی برانڈز کے مارکیٹنگ ہیڈز کے رابطے تصدیق کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### ✅ Contact Enrichment & Verification Report\n\n- **Target 1:** J. Fragrances & Apparel -> Head of Digital: bilal.k@junaidjamshed.com [Status: 100% Deliverable | WA: +92 300 *** 7812 Verified]\n- **Target 2:** Sana Safinaz -> E-Commerce Director: ayesha.r@sanasafinaz.com [Status: 100% Deliverable | WA: +92 321 *** 9901 Verified]\n- **Spam Trap Score:** 0% (Safe for cold dispatch)`,
        ur_nastaliq: `### ✅ تصدیق شدہ ای میل و واٹس ایپ رپورٹ\n\n- بلال خان (ہیڈ آف ڈیجیٹل، جے ڈاٹ): ای میل اور واٹس ایپ 100% ایکٹیو ہیں (+92 300 *** 7812)\n- عائشہ رحمان (ڈائریکٹر، ثناء سفیناز): ای میل تصدیق شدہ (+92 321 *** 9901)`,
        ur_roman: `### ✅ Verified Contacts\n- Bilal Khan (Head of Digital): bilal.k@junaidjamshed.com (WA Active: +92 300 *** 7812)\n- Ayesha Rehman: ayesha.r@sanasafinaz.com (WA Active: +92 321 *** 9901)`
      }
    },
    {
      id: 'intent-scoring',
      name: 'Buying Intent Scorer & Prioritizer',
      nameUrdu: 'خریدار کی تیاری کا اسکور (Intent Score)',
      badge: 'Smart Rank',
      iconName: 'TrendingUp',
      description: 'Scores leads from 1-100 based on hiring spikes, funding rounds, website traffic changes, and tech stack triggers.',
      descriptionUrdu: 'مارکیٹ سگنلز اور نئی ہائرنگ کی بنیاد پر گرم خریداروں کو ۱ سے ۱۰۰ تک اسکور دیتا ہے۔',
      inputPlaceholder: 'Describe recent trigger signals to analyze...',
      defaultPrompt: 'Rank 4 companies based on buying urgency for AI Customer Support automation.',
      defaultPromptUrdu: 'کسٹمر سپورٹ AI ایجنٹ خریدنے کے لیے 4 کمپنیوں کی ترجیحی درجہ بندی کریں۔',
      parameters: [
        { name: 'scoreWeight', label: 'Primary Trigger', labelUrdu: 'اہم محرک', type: 'select', defaultValue: 'Hiring Spike & Inbound Bottleneck', options: [{ label: 'Hiring Spike', value: 'hiring' }, { label: 'Funding Announced', value: 'funding' }, { label: 'Negative Support Reviews', value: 'support_pain' }] }
      ],
      quickTemplates: [
        {
          title: 'Score 4 High-Growth D2C Brands',
          titleUrdu: '4 فاسٹ گروتھ برانڈز کی جانچ',
          prompt: 'Score 4 D2C brands experiencing weekend customer support backlog.',
          promptUrdu: 'کسٹمر کیئر میں تاخیر کا شکار 4 برانڈز کا اسکور تیار کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📈 Buyer Intent Scorecard\n\n1. **Glamour Cosmetics (Score: 95/100 - HOT)**\n   - Trigger: 300% surge in Eid weekend comments, posting 3 open customer rep jobs on Rozee.pk.\n   - Recommendation: Trigger Outreach Sequence A immediately.\n2. **Khaas Organic Foods (Score: 88/100 - WARM)**\n   - Trigger: Expanding same-day delivery to Islamabad.`,
        ur_nastaliq: `### 📈 انٹینٹ اسکور کارڈ (فوری خریدار)\n\n۱. **گلیمر کاسمیٹکس (اسکور: 95/100 - گرم خریدار)**\n   - سگنل: عید سیزن میں کسٹمر سپورٹ پر شدید رش اور نئی ہائرنگ کی کوشش۔\n   - سفارش: فوری طور پر آؤٹ ریچ ایجنٹ کا پیغام بھیجیں۔`,
        ur_roman: `### 📈 Lead Intent Score\n1. Glamour Cosmetics: 95/100 (Hot Lead - support bottleneck active)\n2. Khaas Foods: 88/100 (Warm - expanding to new cities)`
      }
    },
    {
      id: 'crm-export',
      name: 'Google Sheets & CRM Formatter',
      nameUrdu: 'گوگل شیٹس اور سی آر ایم سنک',
      badge: 'Instant Sync',
      iconName: 'FileSpreadsheet',
      description: 'Formats and maps all scraped lead data into standardized CRM CSV and Google Sheets schemas.',
      descriptionUrdu: 'تمام ڈیٹا کو گوگل شیٹس اور سی آر ایم میں فوری اپ لوڈ کے لیے منظم کرتا ہے۔',
      inputPlaceholder: 'Specify required CRM columns...',
      defaultPrompt: 'Generate a clean 5-column CRM schema ready to push to Google Sheets with Company, Contact, Phone, Intent Score, and Next Action.',
      defaultPromptUrdu: 'گوگل شیٹس کے لیے 5 کالمز پر مشتمل منظم لیڈ ڈیٹا تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Google Sheets Ready CSV',
          titleUrdu: 'گوگل شیٹس ریڈی ڈیٹا',
          prompt: 'Format 3 top leads into Markdown table for instant copy-paste into Google Sheets.',
          promptUrdu: 'تین لیڈز کا مکمل ٹیبل گوگل شیٹس کے لیے تیار کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `| Company Name | Decision Maker | Verified WhatsApp | Intent Score | Stage | Next Trigger |\n|---|---|---|---|---|---|\n| Aura Developments | Tariq Mansoor | +971 50 412 9011 | 96/100 | Prospect | Send Closer Proposal |\n| Vertex Logistics | Sarah Hashimi | +971 52 883 1400 | 92/100 | Qualified | Schedule 5-min Demo |\n| Pulse Retail PK | Daniyal Shah | +92 300 812 4433 | 94/100 | Hot | WhatsApp Audio Drop |`,
        ur_nastaliq: `| کمپنی کا نام | فیصلہ ساز | واٹس ایپ نمبر | اسکور | اسٹیج | اگلا قدم |\n|---|---|---|---|---|---|\n| اورا ڈیولپمنٹس | طارق منصور | +971 50 412 9011 | 96/100 | پراسپیکٹ | پروپوزل بھیجیں |\n| ورٹیکس لاجسٹکس | سارہ ہاشمی | +971 52 883 1400 | 92/100 | کوالیفائیڈ | ڈیمو شیڈول کریں |`,
        ur_roman: `| Company | Name | WhatsApp | Score | Action |\n| Aura Dev | Tariq Mansoor | +971 50 412 9011 | 96 | Send Video Pitch |\n| Pulse PK | Daniyal Shah | +92 300 812 4433 | 94 | Voice Note Intro |`
      }
    }
  ],
  'outreach': [
    {
      id: 'cold-email-crafting',
      name: 'Hyper-Personalized Cold Emailer',
      nameUrdu: 'پرسنلائزڈ کولڈ ای میلز',
      badge: '68% Open Rate',
      iconName: 'Send',
      description: 'Researches recent prospect milestones and drafts conversational 4-sentence emails that spark warm conversations.',
      descriptionUrdu: 'کلائنٹ کی حالیہ کامیابیوں کی بنیاد پر مختصر اور پرکشش ای میلز تیار کرتا ہے۔',
      inputPlaceholder: 'Prospect name, company, recent achievement...',
      defaultPrompt: 'Write a personalized 4-sentence cold email to Farhan, CEO of NextScale (a 20-person agency), pitching 24/7 client reporting automation.',
      defaultPromptUrdu: 'نیکسٹ اسکیل کے سی ای او فرحان کے لیے ایک موثر اور پرسنلائزڈ ای میل تحریر کریں۔',
      parameters: [
        { name: 'tone', label: 'Tone of Voice', labelUrdu: 'لہجہ', type: 'select', defaultValue: 'Friendly Executive', options: [{ label: 'Friendly Executive', value: 'friendly' }, { label: 'Direct & Urgent', value: 'direct' }, { label: 'Consultative', value: 'consultative' }] },
        { name: 'length', label: 'Length', labelUrdu: 'طوالت', type: 'select', defaultValue: 'Under 100 words', options: [{ label: 'Under 75 words (Ultra-punchy)', value: '75' }, { label: 'Under 120 words', value: '120' }] }
      ],
      quickTemplates: [
        {
          title: 'Agency CEO Expansion Pitch',
          titleUrdu: 'ایجنسی فاؤنڈر کے لیے ای میل',
          prompt: 'Cold email for agency founder celebrating recent 5-person hiring round.',
          promptUrdu: 'نئی ہائرنگ کرنے والے ایجنسی بانی کے لیے ای میل بنائیں۔'
        },
        {
          title: 'E-commerce Founder Scale Pitch',
          titleUrdu: 'ای کامرس بانی کے لیے پچ',
          prompt: 'Cold email to e-commerce founder whose Instagram ads are booming.',
          promptUrdu: 'ای کامرس برانڈ کے مالک کے لیے ای میل تیار کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `**Subject:** quick question on NextScale's account growth\n\nHi Farhan,\n\nNoticed NextScale welcomed 4 new account managers this month — huge congratulations on the momentum!\n\nAs your client roster crosses 25+ accounts, weekend client reporting usually turns into a headache for senior leads.\n\nWe built a 24/7 Client Comms & Reporting Agent for agencies like yours that drafts Monday KPI briefs directly into WhatsApp with zero manual hours.\n\nOpen to a 4-minute demo this Thursday at 3 PM?\n\nBest,\n**NexaBoost Growth Team**`,
        ur_nastaliq: `**موضوع:** نیکسٹ اسکیل کی حالیہ توسیع کے حوالے سے مختصر سوال\n\nالسلام علیکم فرحان بھائی،\n\nنیکسٹ اسکیل کی نئی ٹیم ہائرنگ پر دلی مبارکباد!\n\nجب کلائنٹس کی تعداد 25 سے تجاوز کرتی ہے تو پیر کے روز کلائنٹ رپورٹنگ مینیجرز کا قیمتی وقت ضائع کرتی ہے۔ ہمارا AI سسٹم واٹس ایپ پر خودکار تفصیلی رپورٹس جاری کر دیتا ہے۔\n\nکیا ہم اس جمعرات 5 منٹ کا لائیو ڈیمو رکھ سکتے ہیں؟`,
        ur_roman: `Subject: quick question regarding Farhan's team\n\nSalam Farhan bhai, NextScale ki team hiring dekh kar khushi hui! Client reporting ko 100% automated karne k liye hamara AI Agent WhatsApp par instant KPI updates deliver karta hai. Kya is Thursday 4-min quick demo schedule kar lein?`
      }
    },
    {
      id: 'whatsapp-cold-nudge',
      name: 'WhatsApp VIP Nudge Generator',
      nameUrdu: 'واٹس ایپ پر شائستہ تعارفی پیغام',
      badge: '40%+ Reply Rate',
      iconName: 'MessageSquare',
      description: 'Generates warm, non-spammy WhatsApp introductory notes in authentic Urdu and Roman Urdu.',
      descriptionUrdu: 'واٹس ایپ پر بغیر کسی اسپیم کے شائستہ اور اثر انگیز پیغامات تیار کرتا ہے۔',
      inputPlaceholder: 'Enter prospect name & offer details...',
      defaultPrompt: 'Create a warm, respectful Roman Urdu & Urdu WhatsApp outreach note to a boutique salon chain owner.',
      defaultPromptUrdu: 'سیلون چین کے مالک کے لیے اردو اور رومن اردو میں پرکشش واٹس ایپ پیغام تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Salon Chain Booking Automation',
          titleUrdu: 'سیلون بکنگ آٹومیشن',
          prompt: 'WhatsApp outreach to luxury salon offering automated 24/7 appointment booking.',
          promptUrdu: 'لگژری سیلون کے لیے خودکار اپوائنٹمنٹ بکنگ کا پیغام لکھیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `Salam Dr. Aamina! Loved your Gulberg branch's new aesthetic reel. Noticed clients often ask for appointment slots late at night on Instagram DM. Our WhatsApp booking agent handles 100% of nighttime patient confirmations automatically. Can I send a 30-second video demo?`,
        ur_nastaliq: `السلام علیکم ڈاکٹر آمنہ صاحبہ! آپ کے گلبرگ کلینک کی نئی ریلز دیکھ کر دلی خوشی ہوئی۔ رات کے وقت آنے والی بکنگز کو خودکار بنانے کے لیے ہمارا واٹس ایپ ایجنٹ مریضوں کو فوری وقت الاٹ کر دیتا ہے۔ کیا میں آپ کو 30 سیکنڈ کا ویڈیو ڈیمو شیئر کروں؟`,
        ur_roman: `Salam Dr. Aamina! Apke Gulberg clinic ki nayi branch bohot khubsurat hai. Late night patient queries aur appointments ko automate karne k liye NexaBoost WhatsApp AI seconds me booking confirm karta hai. Kya 30-sec demo bhej doon?`
      }
    },
    {
      id: 'ab-subject-testing',
      name: 'A/B Subject Line & Hook Forge',
      nameUrdu: 'سبجیکٹ لائن اور ہکس ٹیسٹنگ',
      badge: 'Viral Hooks',
      iconName: 'Zap',
      description: 'Generates 5 distinct psychological subject lines (Curiosity, Pain, Benefit, Direct, FOMO) with projected open rates.',
      descriptionUrdu: 'ای میلز اور پیغامات کے لیے ۵ مختلف نفسیاتی ہکس تیار کرتا ہے۔',
      inputPlaceholder: 'Describe your service or offer...',
      defaultPrompt: 'Generate 5 high-converting cold email subject lines for pitching AI SEO services to real estate brokers.',
      defaultPromptUrdu: 'رئیل اسٹیٹ بروکرز کو ایس ای او سروس پیش کرنے کے لیے ۵ بہترین سبجیکٹ لائنز تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'SEO for Real Estate Brokers',
          titleUrdu: 'رئیل اسٹیٹ بروکرز کے لیے ایس ای او',
          prompt: '5 subject lines for B2B real estate agency pitch.',
          promptUrdu: 'ایجنسی پچ کے لیے ۵ سبجیکٹ لائنز بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `1. **Curiosity:** "quick question regarding {Company} Google Maps ranking" (Est. 74% Open Rate)\n2. **Pain Hook:** "losing 40+ Dubai buyer calls every weekend?" (Est. 69% Open Rate)\n3. **Benefit:** "how Aura Real Estate added 14 closed deals from organic search" (Est. 65% Open Rate)\n4. **Short & Punchy:** "Farhan / AI lead engine?" (Est. 78% Open Rate)\n5. **FOMO:** "competitor in F-11 just automated their WhatsApp CRM" (Est. 71% Open Rate)`,
        ur_nastaliq: `۱. **تجسس:** "کیا آپ کے گوگل میپس پر کالز کم ہو رہی ہیں؟" (اوپن ریٹ: 74%)\n۲. **فائدہ:** "۱۴ نئی پراپرٹی ڈیلز کا آسان طریقہ" (اوپن ریٹ: 69%)\n۳. **مختصر:** "فرحان بھائی / ایک ضروری سوال" (اوپن ریٹ: 78%)`,
        ur_roman: `1. "quick question regarding {Company} leads" (75% Open)\n2. "weekend leads lose ho rahi hain?" (70% Open)\n3. "14 closed property deals case study" (68% Open)`
      }
    },
    {
      id: 'linkedin-connection-pitch',
      name: 'LinkedIn Connect & InMail Pitcher',
      nameUrdu: 'لنکڈ اِن کنکشن اور ان میل میسجز',
      badge: '52% Acceptance',
      iconName: 'Send',
      description: 'Creates natural 300-character connection notes that bypass pitch-slapping fatigue.',
      descriptionUrdu: 'لنکڈ اِن پر بغیر کسی اکتاہٹ کے باوقار تعارفی پیغامات تیار کرتا ہے۔',
      inputPlaceholder: 'Enter target profile details...',
      defaultPrompt: 'Create a 250-character LinkedIn connection note to a VP of Sales offering an automated pipeline audit.',
      defaultPromptUrdu: 'سیلز ڈائریکٹر کے لیے لنکڈ اِن پر مختصر اور پروقار کنکشن نوٹ لکھیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'VP Sales Connection Note',
          titleUrdu: 'سیلز ہیڈ کے لیے نوٹ',
          prompt: 'LinkedIn connection note for VP of Sales.',
          promptUrdu: 'سیلز ہیڈ کے لیے کنکشن نوٹ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"Hi Sarah — loved your recent post on SDR retention in fintech. We just published a teardown of how 14 AI agents replaced 80 hours of manual CRM logging for B2B teams. Would love to connect and share the PDF if helpful!"`,
        ur_nastaliq: `"السلام علیکم سارہ صاحبہ — فن ٹیک سیلز پر آپ کی حالیہ تحریر نہایت شاندار تھی۔ ہم نے B2B ٹیمز کے لیے ۸۰ گھنٹے کا دستی کام ختم کرنے کا لائحہ عمل تیار کیا ہے۔ آپ کے ساتھ لنکڈ اِن پر جڑنے کی خواہش ہے۔"`,
        ur_roman: `"Hi Sarah — loved your post on sales automation. We just published a blueprint on saving 80+ hours in manual CRM updates. Would love to connect and share the insights!"`
      }
    }
  ],
  'closer': [
    {
      id: 'objection-annihilation',
      name: 'Objection Handling & Reframing Matrix',
      nameUrdu: 'اعتراضات کا حل اور قائل کرنے کے طریقے',
      badge: '91.8% Win Rate',
      iconName: 'Award',
      description: 'Neutralizes Price, Timing, "Need to talk to my partner", and "Send me an email" objections with mathematical ROI framing.',
      descriptionUrdu: 'مہنگا ہونے، وقت کی کمی یا بعد میں سوچنے کے بہانوں کا ٹھوس اور قائل کن حل دیتا ہے۔',
      inputPlaceholder: 'What objection did the client raise?',
      defaultPrompt: 'A prospect says: "Your $1,500/mo package is too expensive compared to hiring a junior freelancer for $300." Craft an airtight rebuttal.',
      defaultPromptUrdu: 'اگر کلائنٹ کہے کہ یہ سروس مہنگی ہے اور ہم سستے فری لانسر سے کام چلا لیں گے، تو ٹھوس موازنہ کر کے جواب تیار کریں۔',
      parameters: [
        { name: 'objectionType', label: 'Objection Type', labelUrdu: 'اعتراض کی نوعیت', type: 'select', defaultValue: 'Price / Budget', options: [{ label: 'Price / Budget', value: 'price' }, { label: 'Timing / Bad Month', value: 'timing' }, { label: 'Competitor Cheaper', value: 'competitor' }, { label: 'Need to think / Consult partner', value: 'think' }] }
      ],
      quickTemplates: [
        {
          title: 'Too Expensive vs Freelancer',
          titleUrdu: 'مہنگا بمقابلہ فری لانسر',
          prompt: 'Handle price objection comparing 14 AI agents pod to hiring 2 junior staff.',
          promptUrdu: 'عملے کی تنخواہ اور AI ایجنٹس کے فوائد کا تقابل کریں۔'
        },
        {
          title: 'Send Me More Info / Ghosting',
          titleUrdu: 'بعد میں دیکھیں گے کا جواب',
          prompt: 'Overcome "Just email me the details" brush-off on WhatsApp.',
          promptUrdu: 'واٹس ایپ پر بات ٹالنے والے گاہک کو ڈیل کی طرف لائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 💼 Closer Rebuttal Matrix\n\n"I completely respect cost discipline, Zahid. Let's look at the actual output math:\n\nA $300 freelancer gives you 4-6 hours a day, takes weekends and sick days off, speaks 1 language, and leaves with all your institutional knowledge in 6 months.\n\nWith NexaBoost's 14 AI Agent Pod:\n1. **24/7/365 Non-stop execution** (Speed to lead is 8 seconds even at 3:00 AM on Sunday).\n2. **Bilingual mastery** (Urdu, English, Roman Urdu across WhatsApp & Email).\n3. **100+ verified prospects + automated closing flows** delivered every single day.\n\nIf the system closes just **ONE extra client** this month, it has paid for itself 3x over. Can we launch a risk-free 14-day test to let the numbers prove it?"`,
        ur_nastaliq: `### 💼 ڈیل کلوزر کا قائل کن جواب (اردو)\n\n"زاہد بھائی، آپ کا بجٹ کا تحفظ کرنا بالکل درست ہے۔ لیکن ذرا اس حقیقت پر غور کریں:\n\nایک فری لانسر دن میں چند گھنٹے کام کرتا ہے، چھٹیاں کرتا ہے اور رات کے وقت کلائنٹس کو جواب نہیں دے سکتا۔\n\nجبکہ ہمارا AI سسٹم رات کے ۳ بجے بھی ۸ سیکنڈ میں گاہک کو مطمئن کر کے ڈیل لاک کرتا ہے۔ اگر اس نے پورے مہینے میں صرف **ایک اضافی ڈیل** بھی کلوز کر دی، تو اس کی پوری فیس ۳ گنا منافع کے ساتھ واپس نکل آتی ہے۔\n\nکیا ہم ۱۴ دن کا آزمائشی پائلٹ شروع کریں؟"`,
        ur_roman: `### 💼 Closer Rebuttal\n\n"Zahid bhai, budget ka khayal bilkul zaroori hai. Lekin freelancer night shifts me active nahi hota. NexaBoost AI 24/7 Urdu + English me har lead ko 8 seconds me respond karta hai. Agar isne month me sirf 1 additional client bhi close kar diya toh system ki fess foran recover ho jati hai. 14 days pilot run karein?"`
      }
    },
    {
      id: 'roi-cost-breakdown',
      name: 'Interactive ROI & Salary Comparator',
      nameUrdu: 'تنخواہ اور منافع کا موازنہ (ROI Calculator)',
      badge: 'Math Closes Deals',
      iconName: 'CreditCard',
      description: 'Breaks down human employee overhead (salaries, taxes, bonuses, equipment, turnover) versus 24/7 AI pod economics.',
      descriptionUrdu: 'ملازمین کے اخراجات، تنخواہوں اور دفاتر کے مقابلے میں AI ایجنٹس کی بچت کا مکمل حساب کتاب۔',
      inputPlaceholder: 'Enter team size & average monthly salaries...',
      defaultPrompt: 'Calculate the annual cost savings of replacing 3 customer support reps and 1 copywriter with NexaBoost AI Pod.',
      defaultPromptUrdu: 'تین سپورٹ ملازمین اور ایک کاپی رائٹر کے اخراجات بمقابلہ AI سسٹم کی سالانہ بچت کا چارٹ بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '3 Reps vs 14 AI Agents',
          titleUrdu: '3 ملازمین بمقابلہ 14 ایجنٹس',
          prompt: 'Compare cost of 3 support staff + 1 sales rep vs NexaBoost pod.',
          promptUrdu: 'عملے کے اخراجات کا AI سے موازنہ کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📊 Financial Breakdown: Human Staff vs. NexaBoost AI Pod\n\n| Expense Category | Traditional Human Team (4 Staff) | NexaBoost 14 Agent Pod |\n|---|---|---|\n| Base Monthly Payroll | $3,200 ($800 x 4) | $997 (Flat) |\n| Overtime & Night Shifts | $600/mo | $0 (24/7 Included) |\n| Training & Churn Cost | $400/mo | $0 (Zero Retraining) |\n| **Total Monthly Overhead** | **$4,200 / mo** | **$997 / mo** |\n| **Net Annual Savings** | **$38,436 / year** (76% Reduction) | **+3.4x Faster Output** |`,
        ur_nastaliq: `### 📊 مالیاتی موازنہ: ملازمین بمقابلہ نیکسا بوسٹ AI\n\n- روایتی ملازمین کی ماہانہ تنخواہیں اور بلز: کم از کم ۲ لاکھ روپے ماہانہ\n- نیکسا بوسٹ AI پوڈ فیس: صرف ۳۵ ہزار روپے ماہانہ\n- **سالانہ خالص بچت: تقریباً ۲۰ لاکھ روپے** (بغیر کسی چھٹی اور تاخیر کے)`,
        ur_roman: `### 📊 ROI Breakdown\n- Traditional Team: Rs. 200,000/mo in salaries & office space.\n- NexaBoost AI Pod: Rs. 35,000/mo flat.\n- Net Annual Savings: Rs. 1,980,000/year with 24/7 zero-delay execution.`
      }
    },
    {
      id: 'instant-quote-deal',
      name: 'Dynamic Deal Lock & Quote Pitcher',
      nameUrdu: 'ڈیل لاک اور کوٹیشن فائنلائزیشن',
      badge: 'One-Click Close',
      iconName: 'Award',
      description: 'Generates customized pricing proposals, scope checklists, and instant WhatsApp checkout call-to-actions.',
      descriptionUrdu: 'گاہک کے لیے فوری کوٹیشن، سروسز کی فہرست اور پیمنٹ کا طریقہ کار تیار کرتا ہے۔',
      inputPlaceholder: 'Client details, selected plan, custom add-ons...',
      defaultPrompt: 'Generate a 1-page WhatsApp closing proposal for an apparel brand buying Growth Pod ($997/mo) with onboarding included.',
      defaultPromptUrdu: 'کپڑوں کے برانڈ کے لیے واٹس ایپ پر ایک پرکشش کوٹیشن اور معاہدہ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Growth Pod Proposal',
          titleUrdu: 'گروتھ پوڈ پروپوزل',
          prompt: '1-page WhatsApp deal proposal for Growth Pod.',
          promptUrdu: 'گروتھ پوڈ کے لیے ڈیل پروپوزل بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🤝 Official Deal Lock Proposal (Growth Pod)\n\n**Client:** Royal Threads Lifestyle\n**Deliverables:** 7 Core AI Agents (Lead Gen, Outreach, Closer, Follow-up, Content, Video Scripts, 24/7 WhatsApp CRM)\n**Investment:** $997/month (Zero setup fees, Includes 1-on-1 VIP Onboarding)\n**Launch Date:** Guaranteed live within 48 hours.\n\n👉 Click here to confirm and start VIP deployment: [One-Click Checkout Link]`,
        ur_nastaliq: `### 🤝 آفیشل ڈیل پروپوزل (گروتھ ایکو سسٹم)\n\n**کلائنٹ:** رائل تھریڈز لائف اسٹائل\n**شامل سروسز:** ۷ اہم AI ایجنٹس (لیڈز، واٹس ایپ کسٹمر سپورٹ، آرڈر بکنگ اور کاپی رائٹنگ)\n**ماہانہ فیس:** صرف ۳۵ ہزار روپے (سیٹ اپ مفت)\n**گارنٹی:** ۴۸ گھنٹے میں لائیو سسٹم فعال\n\n👉 ابھی تصدیق کے لیے یہاں کلک کریں اور آن بورڈنگ شروع کروائیں۔`,
        ur_roman: `### 🤝 Official Deal Lock\nClient: Royal Threads PK\nPlan: 7 AI Agents Pod ($997/mo)\nLive Date: Within 48 hours.\nClick to activate your agent pod now!`
      }
    },
    {
      id: 'risk-reversal-guarantee',
      name: 'Zero-Risk Pilot Terms Pitcher',
      nameUrdu: 'رسک فری آزمائشی پیشکش (100% Guarantee)',
      badge: 'Risk Reversal',
      iconName: 'ShieldCheck',
      description: 'Structures performance guarantees, pilot periods, and escrow milestones that make saying "No" impossible.',
      descriptionUrdu: 'گاہک کے دل سے نقصان کا خوف ختم کرنے کے لیے گارنٹی اور آزمائشی شرائط تیار کرتا ہے۔',
      inputPlaceholder: 'Enter guarantee parameters...',
      defaultPrompt: 'Draft an assertive 14-day money-back performance guarantee script for skeptical B2B clients.',
      defaultPromptUrdu: 'شک میں مبتلا کلائنٹ کے لیے ۱۴ دن کی منی بیک گارنٹی کا قائل کن ڈرافٹ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '14-Day Performance Guarantee',
          titleUrdu: '14 دن کی گارنٹی',
          prompt: '14-day full refund guarantee terms script.',
          promptUrdu: 'گارنٹی کی شرائط کا اسکرپٹ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"Here is our unconditional commitment, Farooq: You deploy the 14 AI Agents pod today. If the system does not generate at least 50 qualified leads and save your team 20+ hours within the first 14 days, you get a 100% instant refund with zero questions asked. You keep all the generated leads and copy assets for free. All the risk is on us."`,
        ur_nastaliq: `"فاروق بھائی، یہ ہمارا غیر مشروط وعدہ ہے: آپ آج AI سسٹم فعال کریں۔ اگر پہلے ۱۴ دنوں میں اس نے آپ کو ۵۰ معیاری لیڈز نہ دیں اور آپ کا وقت نہ بچایا، تو آپ اپنی ۱۰۰٪ رقم بغیر کسی سوال کے فوری واپس لے سکتے ہیں۔ سارا رسک ہمارے ذمے ہے۔"`,
        ur_roman: `"Farooq bhai, agar pehle 14 din me system ne apko 50+ qualified leads aur hours saved deliver na kiya, toh 100% full refund instant wapis milega. Sara risk hamara hai, apka kuch lose nahi hoga."`
      }
    }
  ],
  'follow-up': [
    {
      id: '30-day-cadence',
      name: '5-Stage Smart Nurture Cadence',
      nameUrdu: 'پانچ مراحل پر مشتمل فالو اپ شیڈول',
      badge: 'Zero Cold Leads',
      iconName: 'RefreshCw',
      description: 'Generates automated touchpoints on Day 1, Day 3, Day 7, Day 14, and Day 28 with varying psychological angles.',
      descriptionUrdu: 'پہلے، تیسرے، ساتویں، چودہویں اور اٹھائیسویں دن کے خودکار فالو اپ میسجز تیار کرتا ہے۔',
      inputPlaceholder: 'Enter prospect context and offer type...',
      defaultPrompt: 'Generate a 5-touchpoint WhatsApp & Email follow-up cadence for a prospect who received our pricing proposal but went silent.',
      defaultPromptUrdu: 'ایک کلائنٹ جس نے فیس دیکھ کر جواب دینا بند کر دیا، اس کے لیے ۵ مراحل کا مکمل فالو اپ پلان بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Proposal Ghosting Sequence',
          titleUrdu: 'پروپوزل کے بعد خاموش کلائنٹ کا فالو اپ',
          prompt: '5-touchpoint follow-up for ghosted proposal.',
          promptUrdu: 'خاموش کلائنٹ کے لیے ۵ میسجز کا سلسلہ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🔁 5-Stage Automated Follow-up Sequence\n\n- **Day 1 (Value Nudge):** "Hey Bilal, forgot to mention that the proposal includes the custom Urdu WhatsApp CRM bot at no extra charge. Attaching the 30-sec demo here."\n- **Day 3 (Micro Case Study):** "Bilal, Al-Shifa clinic cut appointment no-shows by 62% in their first week with this. Thought you'd appreciate the 1-page summary."\n- **Day 7 (Resource Drop):** "Sharing our Q3 B2B Lead Gen Playbook (PDF attached) — no strings attached!"\n- **Day 14 (CEO Check-in):** "Bilal, are you still looking to automate your lead outreach this quarter or should I take this off my active radar?"\n- **Day 28 (Permission to Close File):** "Hey Bilal, since I haven't heard back, I assume priorities shifted. Closing your onboarding reservation for now — wishing you massive growth!"`,
        ur_nastaliq: `### 🔁 ۵ مراحل پر مشتمل خودکار فالو اپ\n\n- **پہلا دن:** "بلال بھائی، پروپوزل میں اردو واٹس ایپ بوٹ مفت شامل ہے۔ یہ ۳۰ سیکنڈ کا ویڈیو کلپ دیکھیں۔"\n- **تیسرا دن:** "بلال بھائی، ایک اور کلینک نے کیسے ۶۲٪ نو شوز کم کیے، اس کی مختصر کیس اسٹڈی شیئر کر رہا ہوں۔"\n- **ساتواں دن:** "آپ کی رہنمائی کے لیے ایک مفت بزنس آٹومیشن گائیڈ بھیج رہا ہوں۔"\n- **چودہواں دن:** "کیا ہم اس ماہ سسٹم فعال کر رہے ہیں یا آپ کا ارادہ فی الحال ملتوی ہو گیا ہے؟"\n- **اٹھائیسواں دن:** "چونکہ جواب موصول نہیں ہوا، اس لیے آپ کی بکنگ فی الحال بند کر رہے ہیں۔ جب بھی ضرورت ہو ہم حاضر ہیں۔"`,
        ur_roman: `### 🔁 5-Step Follow-up\n- Day 1: "Bilal bhai, proposal me custom Urdu bot free included hai."\n- Day 3: Case study share karein.\n- Day 7: Free guide PDF.\n- Day 14: Friendly check-in.\n- Day 28: Permission to close file.`
      }
    },
    {
      id: 'dormant-revival',
      name: 'Dormant Lead Revival Campaign',
      nameUrdu: 'پرانے اور غیر فعال کلائنٹس کو جگانا',
      badge: '34.7% Revived',
      iconName: 'Zap',
      description: 'Re-activates old leads from 3-6 months ago with a 9-word curiosity email or WhatsApp voice drop.',
      descriptionUrdu: 'پرانے اور بھولے ہوئے کلائنٹس کو مختصر تجسس آمیز میسج سے دوبارہ متحرک کرتا ہے۔',
      inputPlaceholder: 'Describe inactive lead list details...',
      defaultPrompt: 'Write a 9-word revival email and WhatsApp message to 100 prospects who went dark 90 days ago.',
      defaultPromptUrdu: '۹۰ دن پرانے کلائنٹس کو دوبارہ بات چیت شروع کرنے پر مجبور کرنے والا ۹ لفظی میسج بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '9-Word Revival Question',
          titleUrdu: '9 لفظی جادوئی سوال',
          prompt: 'Dean Jackson 9-word revival question for AI agency.',
          promptUrdu: '9 لفظی تجسس والا ای میل بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `**Email Subject:** {FirstName}?\n\nHi {FirstName},\n\nAre you still looking to automate your sales outreach this quarter?\n\nBest,\nDaniyal`,
        ur_nastaliq: `**واٹس ایپ میسج:**\n"السلام علیکم {نام} بھائی! کیا آپ اب بھی اپنے بزنس کے لیے ۲۴ گھنٹے واٹس ایپ آرڈر سسٹم فعال کرنا چاہتے ہیں؟"`,
        ur_roman: `Salam {FirstName} bhai! Kya aap abhi bhi apne business ke liye WhatsApp sales AI automate karna chahte hain?`
      }
    },
    {
      id: 'value-drop-micro-case',
      name: 'Micro Case Study Value Dropper',
      nameUrdu: 'کامیاب کہانیوں اور کیس اسٹڈیز کی فراہمی',
      badge: 'Proof Sells',
      iconName: 'Award',
      description: 'Packages real client revenue transformations into snappy 60-second readables that prove competence.',
      descriptionUrdu: 'دیگر کلائنٹس کی شاندار کامیابیوں کے ٹھوس ثبوت اور اعداد و شمار گاہک کے ساتھ شیئر کرتا ہے۔',
      inputPlaceholder: 'Client industry and achieved result...',
      defaultPrompt: 'Create a 100-word micro case study on how a Lahore boutique scaled online sales by 310% using our WhatsApp AI Agent.',
      defaultPromptUrdu: 'لاہور کے بوتیک کی ۳۱۰٪ سیلز بڑھنے کی ایک مختصر اور پرکشش کیس اسٹڈی تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Boutique 310% Sales Surge',
          titleUrdu: 'بوتیک کی سیلز میں ۳۱۰٪ اضافہ',
          prompt: 'Micro case study for fashion boutique.',
          promptUrdu: 'فیشن برانڈ کی کیس اسٹڈی بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📈 How Silk & Stitch Added Rs. 1.8M in 30 Days\n\n- **The Bottleneck:** Late night inquiries on Instagram went unanswered for 10+ hours. Over 40% of potential buyers bought from competitors.\n- **The NexaBoost Fix:** Deployed our WhatsApp CRM Agent with Urdu audio note responses and COD auto-confirmation.\n- **The Numbers:** Response time dropped from 10 hours to 4 seconds. Monthly sales jumped **+310%** with zero additional ad spend.`,
        ur_nastaliq: `### 📈 سلک اینڈ اسٹچ بوتیک کی کامیابی (۳۰ دن میں ۱۸ لاکھ کا اضافہ)\n\n- **مسئلہ:** رات کو گاہکوں کو ۱۰ گھنٹے تک جواب نہ ملنے سے ۴۰٪ سیلز ضائع ہو رہی تھیں۔\n- **حل:** نیکسا بوسٹ کا اردو واٹس ایپ AI ایجنٹ فعال کیا گیا جو ۴ سیکنڈ میں آرڈر بک کرتا ہے۔\n- **نتیجہ:** بغیر کسی نئے اشتہار کے ماہانہ سیلز میں **۳۱۰٪ کا ریکارڈ اضافہ** ہوا!`,
        ur_roman: `### 📈 Silk & Stitch Case Study\n- Problem: 10-hour reply delay on Instagram DMs.\n- Fix: NexaBoost 24/7 WhatsApp AI Agent deployed.\n- Result: +310% sales growth in 30 days, zero manual workload.`
      }
    },
    {
      id: 'event-season-reminder',
      name: 'Seasonal & Urgency Nudge Engine',
      nameUrdu: 'عید و موسمی تقریبات کے خصوصی ریمائنڈرز',
      badge: 'High Urgency',
      iconName: 'Sparkles',
      description: 'Capitalizes on Eid, Black Friday, Q4 closing, and seasonal rushes with time-sensitive value propositions.',
      descriptionUrdu: 'عید، سیزن کے اختتام اور خصوصی دنوں پر گاہکوں کو وقت کی کمی کا احساس دلا کر آرڈر مکمل کرواتا ہے۔',
      inputPlaceholder: 'Event name & limited time offer details...',
      defaultPrompt: 'Draft an urgent Eid Pre-Booking follow-up for businesses wanting their AI agents running before the rush.',
      defaultPromptUrdu: 'عید کے رش سے پہلے بزنسز کے لیے AI ایجنٹ فعال کرنے کا ارجنٹ میسج تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Eid Pre-Rush AI Setup',
          titleUrdu: 'عید کے رش سے پہلے تیاری',
          prompt: 'Eid rush onboarding follow-up message.',
          promptUrdu: 'عید کی تیاری کا فالو اپ میسج بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"Hey Kashif! With Eid just 18 days away, customer message volume is about to spike 5x. We only have 3 onboarding slots left to train and launch custom AI Agents before the holiday freeze. Shall we secure your slot today so your business runs on auto-pilot throughout Eid?"`,
        ur_nastaliq: `"کاشف بھائی، عید میں صرف ۱۸ دن باقی ہیں اور پیغامات کا رش ۵ گنا بڑھنے والا ہے۔ تعطیلات سے پہلے ہمارے پاس صرف ۳ آن بورڈنگ سیٹس باقی ہیں۔ کیا ہم آج آپ کا سسٹم فعال کر دیں تاکہ عید کے دنوں میں آپ کی سیلز خودکار چلتی رہیں؟"`,
        ur_roman: `Salam Kashif bhai! Eid me sirf 18 din baaqi hain aur inquiries 5x barhne wali hain. Hamare paas sirf 3 setup slots bache hain. Kya aaj apka AI agent lock kar lein taake Eid par auto-sales chalti rahein?`
      }
    }
  ],
  'content': [
    {
      id: 'viral-linkedin-threads',
      name: 'High-Authority LinkedIn Thread & Carousel',
      nameUrdu: 'لنکڈ اِن وائرل پوسٹس اور کیروسل',
      badge: '96/100 Viral Hook',
      iconName: 'PenTool',
      description: 'Engineers scroll-stopping B2B authority hooks, structured frameworks, and high-engagement comment magnets.',
      descriptionUrdu: 'لنکڈ اِن پر فالوورز اور کاروباری ساکھ بڑھانے کے لیے بصیرت افروز پوسٹس تیار کرتا ہے۔',
      inputPlaceholder: 'Topic or core business thesis...',
      defaultPrompt: 'Write a viral LinkedIn carousel script on why traditional marketing agencies will lose 70% of accounts to AI agent hubs by 2027.',
      defaultPromptUrdu: 'روایتی ایجنسیز بمقابلہ AI ایجنٹس کے عنوان پر لنکڈ اِن کی ایک وائرل پوسٹ تحریر کریں۔',
      parameters: [
        { name: 'postFramework', label: 'Framework', labelUrdu: 'فارمولا', type: 'select', defaultValue: 'Contrarian Truth', options: [{ label: 'Contrarian Truth', value: 'contrarian' }, { label: 'Step-by-Step Breakdown', value: 'how_to' }, { label: 'Story & Revelation', value: 'story' }] }
      ],
      quickTemplates: [
        {
          title: 'Future of AI Agencies',
          titleUrdu: 'ایجنسیز کا مستقبل',
          prompt: 'LinkedIn hook and body on AI agency revolution.',
          promptUrdu: 'AI ایجنسی کے انقلاب پر پوسٹ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🚀 Viral LinkedIn Carousel Breakdown\n\n**Slide 1 (Hook):** Most CEOs think AI is about writing emails faster. The top 1% know AI is about replacing 5 fragmented tools with 1 synchronized 24/7 Agent Workforce.\n\n**Slide 2 (The Math):** When response time drops from 4 hours to 8 seconds, your deal conversion rate jumps by **+78%** instantly.\n\n**Slide 3 (The Takeaway):** Stop buying bloated software seats. Start deploying autonomous agent pods.`,
        ur_nastaliq: `### 🚀 لنکڈ اِن وائرل پوسٹ (اردو)\n\nزیادہ تر کاروباری حضرات سمجھتے ہیں کہ AI کا مطلب صرف ای میلز لکھنا ہے۔ جبکہ سمارٹ بانی جانتے ہیں کہ یہ ۲۴ گھنٹے کام کرنے والی ایک خودکار ورک فورس کی تخلیق ہے۔\n\nجب آپ کا جوابی وقت ۴ گھنٹے سے کم ہو کر **۸ سیکنڈ** رہ جاتا ہے، تو سیلز خود بخود ۳ گنا بڑھ جاتی ہیں۔`,
        ur_roman: `### 🚀 LinkedIn Post\nMost founders think AI is just ChatGPT. The top 1% know AI is deploying 24/7 autonomous agents that prospect, follow-up, and close deals while they sleep.`
      }
    },
    {
      id: 'urdu-english-social',
      name: 'Bilingual Social Media Copywriter',
      nameUrdu: 'اردو اور انگلش سوشل میڈیا پوسٹس',
      badge: 'Bilingual Mastery',
      iconName: 'Sparkles',
      description: 'Produces culturally authentic Urdu (Nastaliq & Roman Urdu) and English posts optimized for Facebook and Instagram engagement.',
      descriptionUrdu: 'فیس بک اور انسٹاگرام کے لیے دلکش اردو اور انگلش کیپشنز تیار کرتا ہے۔',
      inputPlaceholder: 'Product offer and target occasion...',
      defaultPrompt: 'Write an irresistible bilingual Facebook & Instagram post for a Lahore luxury designer collection launching Eid pre-orders.',
      defaultPromptUrdu: 'لاہور کے فیشن برانڈ کے لیے عید کلیکشن کا اردو اور انگلش میں دلکش فیس بک اشتہار لکھیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Eid Luxury Collection',
          titleUrdu: 'عید لگژری کلیکشن',
          prompt: 'Bilingual social post for luxury festive collection.',
          promptUrdu: 'عید فیشن کلیکشن کی پوسٹ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `✨ **The Grand Festive Drop 2026 is officially LIVE!**\n\nPure handcrafted raw silk, intricate gold thread embroidery, and silhouettes designed to turn heads at every gathering.\n\n- Flat 20% Pre-Order Privilege\n- Free Nationwide Delivery\n- Limited Edition (Only 50 pieces per design)\n\n👉 WhatsApp us at +92 346 2231606 to claim your exclusive catalog now!`,
        ur_nastaliq: `✨ **عید پری آرڈر کلیکشن ۲۰۲۶ اب لائیو ہے!**\n\nخالص سلک اور ہاتھ کی نازک کڑھائی کا شاہکار امتزاج۔ ہر محفل میں آپ کی شخصیت کو منفرد اور دلکش بنائے۔\n\n- پری بکنگ پر ۲۰٪ خصوصی رعایت\n- پورے پاکستان میں مفت ہوم ڈلیوری\n\n👉 ابھی واٹس ایپ پر کیٹلاگ منگوائیں یا نیچے دیے گئے بٹن پر کلک کریں۔`,
        ur_roman: `✨ Eid Collection 2026 Live Hai! Handcrafted pure silk suits. Flat 20% OFF on Pre-Orders. WhatsApp par abhi "CATALOG" likh kar bhejein!`
      }
    },
    {
      id: 'seo-pillar-blog',
      name: 'SEO Pillar Article & Schema Architect',
      nameUrdu: 'گوگل ایس ای او بلاگز اور آرٹیکلز',
      badge: 'Page #1 Intent',
      iconName: 'Search',
      description: 'Structures 1,500-word comprehensive articles with H2-H4 hierarchies, FAQ schemas, and semantic LSI keywords.',
      descriptionUrdu: 'گوگل میں رینک کرنے والے جامع ایس ای او آرٹیکلز اور سوال و جواب کے اسکیما تیار کرتا ہے۔',
      inputPlaceholder: 'Target primary keyword and industry...',
      defaultPrompt: 'Generate a comprehensive 5-pillar SEO outline and opening hook for "Best WhatsApp CRM for Shopify in 2026".',
      defaultPromptUrdu: 'شاپائفائی واٹس ایپ سی آر ایم کے موضوع پر گوگل رینکنگ کے لیے مکمل آرٹیکل آؤٹ لائن بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'WhatsApp CRM for Shopify',
          titleUrdu: 'شاپائفائی واٹس ایپ سی آر ایم',
          prompt: 'SEO blog outline for WhatsApp Shopify CRM.',
          promptUrdu: 'ایس ای او بلاگ کی آؤٹ لائن تیار کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📑 SEO Pillar Outline (Target: "Best WhatsApp CRM for Shopify")\n\n- **H1:** Top 7 WhatsApp CRM Automation Tools for Shopify Brands in 2026\n- **H2:** Why Traditional Email Marketing is Losing to WhatsApp (98% vs 20% Open Rates)\n- **H2:** Core Features to Look for: Automated COD, Courier Integration, Urdu AI NLP\n- **H2:** Deep-Dive Comparison: NexaBoost vs Interakt vs Wati\n- **FAQ Schema:** 4 structured JSON-LD FAQ blocks answering pricing, setup time, and API requirements.`,
        ur_nastaliq: `### 📑 ایس ای او آرٹیکل آؤٹ لائن (گوگل سرچ کے لیے)\n\n- **مرکزی ہیڈنگ:** ۲۰۲۶ میں ای کامرس برانڈز کے لیے واٹس ایپ سی آر ایم کی اہمیت\n- **ذیلی ہیڈنگز:** روایتی ای میل بمقابلہ واٹس ایپ، کیش آن ڈلیوری کی خودکار تصدیق، اور قیمتوں کا تقابل۔`,
        ur_roman: `### 📑 SEO Blog Outline\nH1: Best WhatsApp CRM for E-Commerce in 2026. Complete comparison of features, pricing, COD verification, and automated abandoned cart recovery.`
      }
    },
    {
      id: 'direct-response-copy',
      name: 'Direct-Response Sales Copy Specialist',
      nameUrdu: 'سیلز پیج اور ڈائریکٹ رسپانس کاپی',
      badge: 'High Conversion',
      iconName: 'Award',
      description: 'Applies battle-tested copy formulas (Problem-Agitate-Solve, Before-After-Bridge) for landing pages and sales pitches.',
      descriptionUrdu: 'سیلز پیجز اور لینڈنگ پیجز کے لیے فوری خریدار لانے والی پرکشش تحریریں بناتا ہے۔',
      inputPlaceholder: 'Service name and main customer pain point...',
      defaultPrompt: 'Write a PAS (Problem-Agitate-Solve) landing page section for NexaBoost 14 Multilingual AI Agents.',
      defaultPromptUrdu: 'نیکسا بوسٹ کے لیے پرابلم، ایجی ٹیشن اور سالو (PAS) فارمولے پر مبنی سیلز کاپی تحریر کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'PAS Formula for AI Hub',
          titleUrdu: 'PAS فارمولا برائے AI سروس',
          prompt: 'PAS landing page copy.',
          promptUrdu: 'لینڈنگ پیج کے لیے سیلز کاپی بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎯 PAS Framework Sales Copy\n\n**Problem:** You are pouring thousands into Meta ads, but half your inbound leads slip away because your sales team can't reply in under 3 minutes.\n\n**Agitate:** Every minute a lead sits waiting on WhatsApp, their buying intent drops by 10%. By morning, they have already ordered from your competitor.\n\n**Solve:** NexaBoost deploys 14 autonomous AI agents that reply in 5 seconds in Urdu, English, and Arabic, lock the deal, and sync directly with your CRM 24/7/365.`,
        ur_nastaliq: `### 🎯 سیلز کاپی (PAS فارمولا)\n\n**مسئلہ:** آپ اشتہارات پر لاکھوں خرچ کرتے ہیں، لیکن تاخیر سے جواب ملنے پر گاہک حریفوں کے پاس چلا جاتا ہے۔\n\n**شدت:** واٹس ایپ پر ہر منٹ کی تاخیر سیلز کا امکان کم کر دیتی ہے۔\n\n**حل:** نیکسا بوسٹ AI صرف ۵ سیکنڈ میں گاہک کو مطمئن کر کے آرڈر بک کر لیتا ہے، دن ہو یا رات!`,
        ur_roman: `Problem: Ads par budget lag raha hai lekin slow response ki wajah se leads drop ho rahi hain. Solution: NexaBoost AI replies in 5 seconds 24/7 in Urdu & English.`
      }
    }
  ],
  'video-script': [
    {
      id: 'tiktok-reels-30s',
      name: '30s Viral Short & 3-Sec Pattern Interrupt',
      nameUrdu: '30 سیکنڈز کا ٹک ٹاک اور ریلز اسکرپٹ',
      badge: 'Viral Retention',
      iconName: 'Video',
      description: 'Scripts dynamic short-form videos with frame-by-frame visual directions, text overlays, and spoken audio.',
      descriptionUrdu: 'پہلے ۳ سیکنڈ میں توجہ کھینچنے والے ویڈیو اسکرپٹس اور ویژول ہدایات تیار کرتا ہے۔',
      inputPlaceholder: 'Product or offer to showcase...',
      defaultPrompt: 'Create a 30-second TikTok/Reel script for a luxury apartment project in Islamabad with a killer pattern-interrupt hook and visual cues.',
      defaultPromptUrdu: 'اسلام آباد میں لگژری اپارٹمنٹس کے لیے ۳۰ سیکنڈ کا پرکشش ویڈیو اسکرپٹ بنائیں جس میں ویڈیو ڈائریکشنز بھی ہوں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Luxury Apartment Tour',
          titleUrdu: 'لگژری اپارٹمنٹ ویڈیو',
          prompt: '30-second apartment tour reel script.',
          promptUrdu: 'اپارٹمنٹ کا ویڈیو اسکرپٹ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎬 TikTok/Reel Script: "The Islamabad Rental Secret"\n\n- **[00:00 - 00:03] Pattern Interrupt Hook:** Host snaps fingers, camera whips from Margalla Hills mountain view to keys. Text overlay: "Do NOT buy an apartment in F-11 until you see this..."\n- **[00:03 - 00:15] The Reveal:** Ultra-wide pan of Italian marble kitchen & smart home panel. Voiceover: "This new tower guarantees 14% net rental yield deposited directly to your bank account monthly."\n- **[00:15 - 00:25] Scarcity:** Rooftop infinity pool b-roll. "Only 4 corner penthouses remaining."\n- **[00:25 - 00:30] CTA:** Host points down: "Comment 'VIEW' to get the full brochure and pricing sheet on WhatsApp!"`,
        ur_nastaliq: `### 🎬 ٹک ٹاک/ریل اسکرپٹ: "اسلام آباد اپارٹمنٹس"\n\n- **[00:00 - 00:03] ہک:** پہاڑوں کے خوبصورت ویو پر کیمرے کا تیز زوم۔ اسکرین پر لکھا آئے: "جب تک یہ نہ دیکھ لیں، اپارٹمنٹ مت خریدیں!"\n- **[00:03 - 00:15] تفصیل:** اسمارٹ ہوم اور ماربل کچن کی ویڈیو۔ وائس اوور: "ماہانہ پرکشش کرایہ براہ راست آپ کے اکاؤنٹ میں۔"\n- **[00:15 - 00:30] سی ٹی اے:** "ابھی نیچے دیے گئے بٹن پر کلک کریں اور واٹس ایپ پر مکمل تفصیلات حاصل کریں۔"`,
        ur_roman: `### 🎬 30s Reel Script\n[00:00-00:03] Hook: Whip pan to balcony view. Text: "Islamabad Real Estate Secret!"\n[00:03-00:20] Body: Smart features, 14% guaranteed rental yield.\n[00:20-00:30] CTA: Comment "INFO" on WhatsApp for pricing.`
      }
    },
    {
      id: 'urdu-unboxing-vlog',
      name: 'Urdu Product Demo & Unboxing Script',
      nameUrdu: 'اردو ان باکسنگ اور پروڈکٹ ڈیمو',
      badge: 'Authentic Tone',
      iconName: 'Video',
      description: 'Scripts relatable Urdu conversational unboxings showcasing product build quality, testing, and COD CTA.',
      descriptionUrdu: 'اردو میں پرکشش ان باکسنگ اور پروڈکٹ کے معائنے کا مکمل ویڈیو اسکرپٹ تیار کرتا ہے۔',
      inputPlaceholder: 'Product details (e.g. Earbuds, Shoes, Watches)...',
      defaultPrompt: 'Write an exciting 25-second Reel script in Urdu for noise-canceling wireless earbuds demonstrating water resistance.',
      defaultPromptUrdu: 'واٹر پروف ایئربڈز کے لیے ایک دلچسپ اور وائرل اردو ریل اسکرپٹ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Waterproof Earbuds Demo',
          titleUrdu: 'ایئربڈز واٹر پروف ٹیسٹ',
          prompt: 'Urdu earbuds unboxing & test.',
          promptUrdu: 'ایئربڈز ٹیسٹنگ اسکرپٹ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎧 Urdu Reel Script: Extreme Water Test\n\n- Visual: Host drops earbuds into a glass of water, pulls them out, and puts them directly in ear.\n- Voiceover (Urdu): "Agar aap bhi har 2 mahine baad naye earbuds khareed kar thak chuke hain, toh yeh dekhein. 60 ghantay battery aur crystal clear call sound!"\n- CTA: "Cash on delivery available all over Pakistan. Order on WhatsApp!"`,
        ur_nastaliq: `### 🎧 اردو ریل اسکرپٹ: لائیو واٹر ٹیسٹ\n\n- **ویژول:** ہاتھ سے ایئربڈز کو پانی کے گلاس میں ڈال کر نکالتے ہوئے دکھائیں۔\n- **وائس اوور:** "اگر آپ بھی روزانہ ایئربڈز خراب ہونے سے تنگ آ چکے ہیں، تو یہ دیکھیں۔ 60 گھنٹے مسلسل بیٹری اور شاندار آواز!"\n- **سی ٹی اے:** "پورے پاکستان میں کیش آن ڈلیوری پر منگوانے کے لیے نیچے دیے گئے لنک پر کلک کریں۔"`,
        ur_roman: `### 🎧 Reel Script\nVisual: Earbuds glass me dip karein. VO: "60 hours battery backup aur 100% waterproof! Poore Pakistan me cash on delivery available. Order now!"`
      }
    },
    {
      id: 'vsl-high-ticket',
      name: 'High-Ticket VSL & Storyboard Architect',
      nameUrdu: 'ہائی ٹکٹ ویڈیو سیلز لیٹر (VSL)',
      badge: 'High Conversion',
      iconName: 'Award',
      description: 'Creates 60-90 second Video Sales Letters engineered to sell high-value agency packages, courses, and real estate.',
      descriptionUrdu: 'بڑی ڈیلز اور قیمتی سروسز بیچنے کے لیے ۶۰ سے ۹۰ سیکنڈ کے ویڈیو سیلز لیٹر کا اسکرپٹ تیار کرتا ہے۔',
      inputPlaceholder: 'High ticket offer & target clientele...',
      defaultPrompt: 'Generate a 60-second high-ticket B2B VSL script for NexaBoost $997/mo Growth Pod targeting 7-figure e-commerce CEOs.',
      defaultPromptUrdu: 'ای کامرس سی ای اوز کے لیے ۶۰ سیکنڈ کا ہائی ویلیو ویڈیو سیلز لیٹر تحریر کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'B2B Growth Pod VSL',
          titleUrdu: 'گروتھ پوڈ وی ایس ایل',
          prompt: '60-sec VSL script for B2B AI Pod.',
          promptUrdu: 'بی ٹو بی وی ایس ایل اسکرپٹ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎥 60-Second High-Ticket VSL Script\n\n**[0:00-0:15 The Hard Truth]:** "Every single week your e-commerce store loses Rs. 500,000+ in abandoned carts and delayed WhatsApp replies. Not because your ads are bad — but because humans can't work at 3:00 AM."\n\n**[0:15-0:40 The Autonomous Workforce]:** "NexaBoost deploys 14 synchronized AI agents that take over prospecting, closing, 24/7 multilingual support, and CRM logging in under 48 hours."\n\n**[0:40-1:00 The No-Brainer Offer]:** "Try our 14-day zero-risk pilot. If it doesn't deliver 50+ qualified orders, you pay nothing. Book your strategy call below."`,
        ur_nastaliq: `### 🎥 ۶۰ سیکنڈ ہائی ٹکٹ ویڈیو سیلز لیٹر\n\n"ہر ہفتے آپ کا اسٹور تاخیر سے جواب ملنے کی وجہ سے لاکھوں روپے کے آرڈرز گنوا دیتا ہے۔ نیکسا بوسٹ کا ۱۴ ایجنٹس کا سسٹم ۴۸ گھنٹے میں آپ کی پوری سیلز کو خودکار بنا دیتا ہے۔ آج ہی رسک فری ٹرائل شروع کریں۔"`,
        ur_roman: `### 🎥 60s VSL Script\n"Har week apka store slow customer reply ki wajah se orders lose karta hai. NexaBoost 14 AI Agents pod apke sales aur support ko 24/7 automate karta hai. Book your risk-free onboarding call today!"`
      }
    },
    {
      id: 'b-roll-audio-director',
      name: 'B-Roll Shot List & Trending Audio Matcher',
      nameUrdu: 'بی رول شاٹس اور ٹرینڈنگ میوزک کا انتخاب',
      badge: 'Visual Flow',
      iconName: 'Zap',
      description: 'Generates detailed 10-shot B-roll shot lists and matches mood with trending Instagram / TikTok audio tempos.',
      descriptionUrdu: 'ویڈیو ایڈیٹرز کے لیے شاٹ بائے شاٹ بی رول کی فہرست اور ٹرینڈنگ میوزک کی سفارش کرتا ہے۔',
      inputPlaceholder: 'Video concept and duration...',
      defaultPrompt: 'Create a 10-shot B-roll cinematography shot list for a luxury café launch video.',
      defaultPromptUrdu: 'لگژری کیفے کی پروموشنل ویڈیو کے لیے ۱۰ مختلف شاٹس کی تفصیلی لسٹ بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Luxury Café B-Roll List',
          titleUrdu: 'کیفے بی رول لسٹ',
          prompt: '10-shot luxury cafe list.',
          promptUrdu: '۱۰ شاٹس کی فہرست بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎥 B-Roll Production Shot List\n\n1. **Shot 1 (Macro):** Slow-motion espresso extraction pouring into ceramic cup (120fps).\n2. **Shot 2 (Atmosphere):** Warm tungsten light reflecting on artisanal pastry display.\n3. **Shot 3 (Action):** Barista pouring intricate swan latte art.\n4. **Shot 4 (Human):** Smiling customer taking first sip with soft jazz background.\n5. **Audio Match:** Warm low-fi acoustic beats (BPM: 85) for cozy premium vibe.`,
        ur_nastaliq: `### 🎥 بی رول شاٹس کی فہرست (کیفے لانچ)\n\n۱. کافی مشین سے اسلو موشن میں ایسپریسو کا گرنا (120fps)\n۲. پیسٹری کاؤنٹر پر خوبصورت وارم لائٹس\n۳. باریستا کا دودھ سے دلکش آرٹ بنانا\n۴. ٹرینڈنگ صوفی / لو فائی میوزک کا انتخاب`,
        ur_roman: `### 🎥 Shot List\n1. Macro espresso shot (120fps)\n2. Barista latte art\n3. Ambient seating shot\nAudio: Low-fi acoustic 85 BPM`
      }
    }
  ],
  'customer-support': [
    {
      id: 'order-tracking-courier',
      name: 'Real-Time Courier Tracking & Status',
      nameUrdu: 'کوریئر ٹریکنگ اور لائیو اسٹیٹس',
      badge: 'Sub-5s Resolution',
      iconName: 'Headphones',
      description: 'Integrates with TCS, Trax, Leopards, Call Courier to give immediate live parcel tracking updates to customers on WhatsApp.',
      descriptionUrdu: 'شاپائفائی اور کوریئر سروسز سے لائیو رابطہ کر کے گاہک کو فوری پارسل کی لوکیشن بتاتا ہے۔',
      inputPlaceholder: 'Order number or tracking ID...',
      defaultPrompt: 'A customer asks: "Where is my order #9821? It has been 3 days." Draft an instant empathetic WhatsApp status update in Urdu and English.',
      defaultPromptUrdu: 'گاہک کا آرڈر نمبر #9821 تاخیر کا شکار ہے، اس کے لیے انتہائی تسلی بخش اور لائیو ٹریکنگ والا جواب بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Delayed Parcel Resolution',
          titleUrdu: 'لیٹ پارسل کا حل',
          prompt: 'Handle delayed TCS parcel #9821 query.',
          promptUrdu: 'لیٹ پارسل کی شکایت حل کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎧 Live Support Resolution (Courier Tracking)\n\n"Hi Zainab! I completely understand your concern about Order #9821.\n\nI just checked with the TCS dispatch hub in Lahore: your parcel is out for delivery with Rider Asif (Tracking # TCS-892140) and will reach your address before 4:00 PM today.\n\nAs a thank you for your patience, we added a **10% OFF voucher (LOYAL10)** to your account for your next purchase!"`,
        ur_nastaliq: `### 🎧 کسٹمر سپورٹ کا لائیو جواب (اردو)\n\n"السلام علیکم زینب بہن! پارسل کے حوالے سے آپ کی فکر بالکل درست ہے۔\n\nمیں نے فوری طور پر کوریئر ٹیم سے رابطہ کیا ہے، آپ کا پارسل اس وقت ڈیلیوری رائیڈر کے پاس ہے اور آج شام ۴ بجے سے پہلے آپ کو مل جائے گا۔\n\nآپ کے تعاون کے شکریے کے طور پر ہم نے آپ کے اگلے آرڈر کے لیے ۱۰٪ کا خصوصی ڈسکاؤنٹ کوڈ **LOYAL10** جاری کر دیا ہے۔"`,
        ur_roman: `Salam Zainab baji! Maine TCS team se track kiya hai, apka parcel Rider Asif ke paas hai aur aaj 4 PM tak deliver ho jayega. Apki asani k liye 10% discount code LOYAL10 bhej rahe hain!`
      }
    },
    {
      id: 'angry-customer-deescalation',
      name: 'Empathetic Conflict Resolution & Refund',
      nameUrdu: 'ناراض گاہک کا ازالہ اور مطمئن کرنا',
      badge: '99.4% CSAT',
      iconName: 'ShieldCheck',
      description: 'De-escalates heated complaints with extreme warmth, apology protocols, replacement options, and discount tokens.',
      descriptionUrdu: 'غصے میں بھرے گاہک کو شائستہ انداز میں مطمئن کر کے متبادل یا ریفنڈ کی پیشکش کرتا ہے۔',
      inputPlaceholder: 'Complaint details and customer issue...',
      defaultPrompt: 'A customer received the wrong shoe size and is furious on WhatsApp. Craft a comforting, immediate replacement protocol.',
      defaultPromptUrdu: 'غلط سائز ملنے پر ناراض گاہک کو فری ریپلیسمنٹ اور معذرت کے ساتھ مطمئن کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Wrong Shoe Size Replacement',
          titleUrdu: 'غلط سائز کی مفت تبدیلی',
          prompt: 'De-escalate wrong shoe size delivery.',
          promptUrdu: 'غلط پروڈکٹ کی تبدیلی کا پیغام بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"Dear Hamza, I am truly sorry about this mix-up — getting Size 41 instead of 43 is completely our fault.\n\nPlease don't worry at all: I have already dispatched the correct Size 43 to your address today via express courier. When the rider arrives, simply hand over the wrong pair. Zero courier charges for you, plus a Rs. 500 gift voucher for the hassle."`,
        ur_nastaliq: `"محترم حمزہ صاحب، غلط سائز ملنے پر ہم دل سے معذرت خواہ ہیں۔ آپ بالکل پریشان نہ ہوں، ہم نے صحیح سائز ۴۳ کا نیا جوڑا آج ہی ایکسپریس ڈلیوری سے روانہ کر دیا ہے۔ جب رائیڈر آئے تو پرانا جوڑا واپس کر دیجیے گا۔ تمام تر کوریئر اخراجات ہماری طرف سے ہیں۔"`,
        ur_roman: `Dear Hamza bhai, galat size deliver hone par dil se maazrat. Humne sahi size express parcel se rawana kar diya hai. Rider ko purana parcel wapis kar dein, 0 delivery fee.`
      }
    },
    {
      id: 'technical-faq-guide',
      name: 'Step-by-Step Technical FAQ Assistant',
      nameUrdu: 'تکنیکی معلومات اور آسان گائیڈ',
      badge: 'Clear & Simple',
      iconName: 'Zap',
      description: 'Explains complex software setups, logins, integration steps, and policies in clear, numbered, easy-to-follow steps.',
      descriptionUrdu: 'سافٹ ویئر کے استعمال اور سیٹنگز کو آسان اور واضح مراحل میں سمجھاتا ہے۔',
      inputPlaceholder: 'Technical question or feature...',
      defaultPrompt: 'Explain how to connect an existing WhatsApp Business number to the NexaBoost dashboard in 3 easy steps.',
      defaultPromptUrdu: 'واٹس ایپ بزنس نمبر کو سسٹم سے جوڑنے کا ۳ آسان مراحل پر مشتمل طریقہ سمجھائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'WhatsApp Setup Steps',
          titleUrdu: 'واٹس ایپ سیٹ اپ گائیڈ',
          prompt: '3-step WhatsApp integration guide.',
          promptUrdu: '۳ مراحل کی گائیڈ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🛠️ 3-Step WhatsApp Connection Guide\n\n1. **Step 1:** Open your NexaBoost Settings > Integrations.\n2. **Step 2:** Click "Connect WhatsApp Official API" and scan the Meta QR code with your business phone.\n3. **Step 3:** Select your language preferences (Urdu / English). You are live in under 90 seconds!`,
        ur_nastaliq: `### 🛠️ واٹس ایپ کنکشن گائیڈ (۳ آسان مراحل)\n\n۱. **پہلا مرحلہ:** اپنے ڈیش بورڈ میں سیٹنگز کھولیں۔\n۲. **دوسرا مرحلہ:** "کنیکٹ واٹس ایپ" پر کلک کر کے اسکرین پر آنے والا QR کوڈ اسکین کریں۔\n۳. **تیسرا مرحلہ:** اردو یا انگلش زبان کا انتخاب کریں۔ آپ کا سسٹم صرف ۹۰ سیکنڈ میں فعال ہو جائے گا!`,
        ur_roman: `### 🛠️ Easy WhatsApp Setup\n1. Settings me Integrations open karein.\n2. Connect WhatsApp par click karke QR code scan karein.\n3. Urdu/English select karein — system 90 seconds me ready!`
      }
    },
    {
      id: 'smart-human-handoff',
      name: 'Priority Human Ticket Summarizer',
      nameUrdu: 'انسانی نمائندے کو کیس ٹرانسفر سمری',
      badge: 'Seamless Handoff',
      iconName: 'UserCheck',
      description: 'Packages customer history, sentiment score, past purchases, and core issue into a 4-bullet brief for human staff.',
      descriptionUrdu: 'انسانی مینیجر کے لیے گاہک کی گفتگو اور مسئلے کا فوری خلاصہ تیار کرتا ہے۔',
      inputPlaceholder: 'Customer chat history to summarize...',
      defaultPrompt: 'Generate an executive handoff brief for human sales manager on a VIP wholesale inquiry.',
      defaultPromptUrdu: 'ہول سیل گاہک کی بڑی ڈیل کے لیے انسانی مینیجر کے لیے بریف تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Wholesale Deal Handoff',
          titleUrdu: 'بڑی ڈیل کا کیس ٹرانسفر',
          prompt: 'VIP wholesale inquiry handoff brief.',
          promptUrdu: 'وی آئی پی گاہک کی سمری بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📋 Priority Ticket Escalation #802\n\n- **Client:** Tariq Mahmood (Wholesale Buyer - Lahore)\n- **Inquiry:** 500 units custom embroidered formal shirts for corporate gifting.\n- **Budget:** Rs. 1,200,000 (Ready to transfer 50% advance)\n- **Assigned Human Rep:** Daniyal (Enterprise Sales Lead)\n- **Recommended Action:** Call on WhatsApp within 10 minutes with bulk catalog sample.`,
        ur_nastaliq: `### 📋 وی آئی پی کیس ٹرانسفر بریف\n\n- **کلائنٹ:** طارق محمود (ہول سیل خریدار)\n- **ڈیل کا حجم:** ۵۰۰ شرٹس برائے کارپوریٹ گفٹنگ (۱۲ لاکھ روپے بجٹ)\n- **سفارش:** مینیجر دانیال صاحب ۱۰ منٹ کے اندر براہِ راست واٹس ایپ پر کال کر کے ڈیل لاک کریں۔`,
        ur_roman: `Ticket Escalation: Tariq Mahmood (500 units order, budget Rs 1.2M). Action: Human manager Daniyal to call immediately with custom samples.`
      }
    }
  ],
  'seo-competitor': [
    {
      id: 'competitor-keyword-gaps',
      name: 'Competitor Keyword Gap Extraction',
      nameUrdu: 'حریفوں کی کمزوریاں اور کی ورڈز کی تلاش',
      badge: 'High Search Vol',
      iconName: 'Search',
      description: 'Finds high-volume, low-competition commercial search terms where your competitors have zero content.',
      descriptionUrdu: 'ایسے کی ورڈز تلاش کرتا ہے جہاں مقابلہ کم اور گاہکوں کی سرچ زیادہ ہو تاکہ فوری رینکنگ ملے۔',
      inputPlaceholder: 'Your niche and competitor website...',
      defaultPrompt: 'Find 3 high-volume, low-difficulty keyword gaps for an organic skincare brand in UAE.',
      defaultPromptUrdu: 'یو اے ای میں اسکن کیئر کے لیے ۳ آسان اور زیادہ سرچ والے کی ورڈز کی نشاندہی کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'UAE Skincare Keyword Gaps',
          titleUrdu: 'یو اے ای اسکن کیئر کی ورڈز',
          prompt: 'Keyword gaps for UAE clean beauty.',
          promptUrdu: 'اسکن کیئر کے کی ورڈز نکالیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🔍 Competitor Gap Matrix (UAE Beauty)\n\n1. **"halal certified spf 50 dubai"** — 4,200 Searches/mo | KD: 22 (Low) | Zero competitors have dedicated page.\n2. **"organic acne serum abu dhabi delivery"** — 2,800 Searches/mo | KD: 18 (Very Low) | High buying intent.\n3. **"fragrance free moisturizer uae summer"** — 5,100 Searches/mo | KD: 35 (Medium)`,
        ur_nastaliq: `### 🔍 کی ورڈز کی رپورٹ (دبئی مارکیٹ)\n\n۱. "halal certified spf 50 dubai" — ۴,۲۰۰ سرچز ماہانہ (مقابلہ انتہائی کم)\n۲. "organic acne serum abu dhabi" — ۲,۸۰۰ سرچز ماہانہ (فوری خریدار)`,
        ur_roman: `1. "halal certified spf 50 dubai" (Vol: 4,200, Easy to rank)\n2. "organic acne serum abu dhabi" (Vol: 2,800, High Intent)`
      }
    },
    {
      id: 'onpage-technical-audit',
      name: 'On-Page Technical SEO & Schema Forge',
      nameUrdu: 'آن پیج ایس ای او اور میٹا ٹیگز',
      badge: 'Google Rank 1',
      iconName: 'Zap',
      description: 'Generates SEO title tags, meta descriptions, H1-H3 structures, and JSON-LD Rich Snippets schema markup.',
      descriptionUrdu: 'ویب سائٹ کے تمام میٹا ٹیگز، ہیڈنگز اور اسکیما کوڈ تیار کرتا ہے۔',
      inputPlaceholder: 'Landing page URL or product topic...',
      defaultPrompt: 'Generate optimized Title Tag, Meta Description, H1, and Schema markup for NexaBoost AI Hub.',
      defaultPromptUrdu: 'نیکسا بوسٹ کے لیے ٹائٹل ٹیگ، میٹا ڈسکرپشن اور مکمل اسکیما کوڈ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'NexaBoost Meta Tags',
          titleUrdu: 'نیکسا بوسٹ میٹا ٹیگز',
          prompt: 'Meta tags and schema for AI Agent Hub.',
          promptUrdu: 'میٹا ٹیگز تیار کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🏷️ Technical SEO Blueprint\n\n- **Title Tag (58 chars):** NexaBoost™ | 14 Multilingual AI Agents for 24/7 Growth\n- **Meta Description (154 chars):** Deploy 14 autonomous AI agents for B2B lead gen, Urdu/English outreach, WhatsApp closing & 24/7 customer support. Scale pipeline with zero salary overhead.\n- **Primary H1:** AI Speed. Human Trust. Exponential Business Growth.\n- **Schema Type:** SoftwareApplication & Organization JSON-LD`,
        ur_nastaliq: `### 🏷️ تکنیکی ایس ای او میٹا ٹیگز\n\n- **ٹائٹل ٹیگ:** نیکسا بوسٹ | ۱۴ جدید AI ایجنٹس برائے ۲۴ گھنٹے بزنس گروتھ\n- **میٹا ڈسکرپشن:** لیڈ جنریشن، واٹس ایپ کسٹمر سپورٹ اور آرڈر کلوزنگ کے لیے بہترین خودکار سسٹم۔`,
        ur_roman: `Title: NexaBoost | 14 Multilingual AI Agents for Business Growth\nMeta Desc: Automate sales, Urdu/Eng outreach, and 24/7 WhatsApp support with NexaBoost.`
      }
    },
    {
      id: 'google-maps-local-seo',
      name: 'Google Maps & Local 3-Pack Optimizer',
      nameUrdu: 'گوگل میپس اور لوکل ایس ای او',
      badge: 'Local #1 Rank',
      iconName: 'Search',
      description: 'Optimizes Google Business Profile categories, geo-tagged photo descriptions, local citations, and weekly post schedules.',
      descriptionUrdu: 'گوگل میپس پر کلینک، شوروم یا ریسٹورنٹ کو ٹاپ ۳ پوزیشن پر لانے کی حکمتِ عملی بناتا ہے۔',
      inputPlaceholder: 'Business name, city, and category...',
      defaultPrompt: 'Create a local SEO 30-day ranking roadmap for an orthodontic dental clinic in Islamabad.',
      defaultPromptUrdu: 'اسلام آباد میں ڈینٹل کلینک کے لیے گوگل میپس پر نمبر ۱ پوزیشن حاصل کرنے کا پلان بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Dental Clinic Local SEO',
          titleUrdu: 'ڈینٹل کلینک لوکل ایس ای او',
          prompt: 'Local SEO plan for Islamabad dental clinic.',
          promptUrdu: 'لوکل ایس ای او پلان بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📍 Google Business Profile Optimization Plan (Islamabad Clinic)\n\n1. **Primary Category:** Orthodontist | Secondary: Cosmetic Dentist, Dental Clinic\n2. **Target Local Query:** "best invisible braces islamabad price F-7"\n3. **Weekly Action:** Publish 2 geo-tagged before/after case photos + enable WhatsApp 1-click booking button.\n4. **Review Acceleration:** Deploy automated WhatsApp post-appointment 5-star review request.`,
        ur_nastaliq: `### 📍 گوگل میپس پلان (اسلام آباد ڈینٹل کلینک)\n\n۱. اہم کی ورڈ: "best invisible braces islamabad"\n۲. ہفتہ وار ۲ نئی تصاویر اور واٹس ایپ اپوائنٹمنٹ لنک کا اندراج۔\n۳. مریضوں سے ۵ اسٹار ریویوز حاصل کرنے کا خودکار نظام۔`,
        ur_roman: `Google Maps Strategy: Primary category 'Orthodontist'. Target keyword 'braces price islamabad'. Post weekly updates & auto WhatsApp review funnel.`
      }
    },
    {
      id: 'backlink-outreach-plan',
      name: 'High-Authority Backlink & PR Strategist',
      nameUrdu: 'بیک لنکس اور ڈیجیٹل پی آر اسٹریٹجی',
      badge: 'Domain Authority',
      iconName: 'TrendingUp',
      description: 'Identifies high-DR industry publication opportunities and drafts non-spam editorial guest post pitches.',
      descriptionUrdu: 'اعلیٰ معیار کی نیوز ویب سائٹس سے بیک لنکس حاصل کرنے کے لیے ایڈیٹوریل پچ تیار کرتا ہے۔',
      inputPlaceholder: 'Industry niche & content assets...',
      defaultPrompt: 'Draft a guest article pitch to ProPakistani / TechInAsia on enterprise AI agent adoption.',
      defaultPromptUrdu: 'ٹیک ویب سائٹس کے لیے AI ٹیکنالوجی پر آرٹیکل پچ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Tech Editorial Backlink Pitch',
          titleUrdu: 'ٹیک ویب سائٹ پچ',
          prompt: 'Editorial pitch for enterprise AI.',
          promptUrdu: 'بیک لنک کے لیے پچ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `**Subject:** Story Pitch: How Pakistani e-commerce brands are replacing 20-person call centers with Urdu AI agents\n\nHi Editor,\n\nWe tracked 40+ local brands during Ramadan 2026 and found automated Urdu WhatsApp agents handled 82% of all COD transactions with 0 errors.\n\nI have prepared a data-driven 1,200-word exclusive breakdown with actionable charts for your readers. Would you like to review the draft?`,
        ur_nastaliq: `**موضوع:** ای کامرس میں اردو AI ایجنٹس کا انقلاب (خصوصی اسٹوری)\n\nہم نے پاکستان کے ۴۰ بڑے برانڈز کے رمضان ڈیٹا کا تجزیہ کیا ہے کہ کیسے AI نے ۸۲٪ آرڈرز خودکار طریقے سے مکمل کیے۔ کیا آپ اس تفصیلی رپورٹ کو اپنی ویب سائٹ پر شائع کرنا پسند کریں گے؟`,
        ur_roman: `Pitch: Data-backed story on how Urdu AI agents handled 82% of e-commerce orders in Pakistan. Draft ready for review.`
      }
    }
  ],
  'ad-copy': [
    {
      id: 'meta-5-angles',
      name: '5 Psychological Meta Ad Angles',
      nameUrdu: 'فیس بک ایڈز کے ۵ نفسیاتی زاویے',
      badge: '3.8x ROAS',
      iconName: 'Zap',
      description: 'Generates 5 distinct conversion angles: Social Status, Fear of Loss, Pain Relief, Pure Logic, and Direct Offer.',
      descriptionUrdu: 'فیس بک اور انسٹاگرام کے لیے ۵ مختلف طریقوں سے گاہک کی توجہ حاصل کرنے والے اشتہارات بناتا ہے۔',
      inputPlaceholder: 'Product, price point, unique selling point...',
      defaultPrompt: 'Generate 5 high-converting Meta ad copy angles for handcrafted genuine leather formal shoes in Pakistan.',
      defaultPromptUrdu: 'اصلی چمڑے کے جوتوں کے لیے ۵ مختلف فیس بک اشتہارات کی کاپی تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Handcrafted Leather Shoes',
          titleUrdu: 'لیدر شوز فیس بک ایڈز',
          prompt: '5 Meta ad angles for leather shoes.',
          promptUrdu: 'جوتوں کے لیے ۵ ایڈ اینگلز بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎯 5 High-ROAS Meta Ad Angles\n\n1. **Status Angle:** "The shoes you wear to the meeting speak before you say a single word. 100% full-grain calfskin leather, designed to last 10 years without creasing."\n2. **Risk Reversal:** "Open parcel before payment. Wear them, test them — if it's not 100% genuine leather, get an instant refund."\n3. **Pain Relief:** "Tired of soles peeling off after 2 months? Double-stitched Goodyear welted construction solves this forever."\n4. **Logic:** "Save Rs. 8,000 compared to mall retail markups by buying direct from master artisans."\n5. **FOMO:** "Only 40 pairs crafted this batch. Claim yours before sizes run out."`,
        ur_nastaliq: `### 🎯 فیس بک اشتہارات کے ۵ زاویے (اردو)\n\n۱. **وقار اور اسٹیٹس:** "آپ کی جوتی آپ کی شخصیت کا پہلا تاثر ہوتی ہے۔ ۱۰۰٪ اصلی چمڑے کے جوتے۔"\n۲. **بغیر کسی رسک کے:** "پہلے پارسل کھول کر چیک کریں، تسلی ہونے پر رقم ادا کریں۔"\n۳. **پائیداری:** "سالہا سال چلنے والی مضبوط سلائی اور آرام دہ سول۔"`,
        ur_roman: `1. Status: Boardroom standard genuine leather shoes.\n2. Risk Reversal: Open parcel before paying cash on delivery.\n3. Quality: Double stitched for 10-year durability.`
      }
    },
    {
      id: 'google-rsa-bundle',
      name: 'Google Responsive Search Ads Bundle',
      nameUrdu: 'گوگل سرچ ایڈز پیکج (15 ہیڈلائنز)',
      badge: 'High CTR',
      iconName: 'Search',
      description: 'Delivers 15 high-CTR headlines and 4 descriptions matching Google search intent and character limits.',
      descriptionUrdu: 'گوگل سرچ ایڈز کے لیے ۱۵ ہیڈلائنز اور ۴ ڈسکرپشنز کا مکمل پیکج تیار کرتا ہے۔',
      inputPlaceholder: 'Target service and location...',
      defaultPrompt: 'Generate 15 Google RSA headlines and 4 descriptions for Corporate Tax & Law Consultancy in Dubai.',
      defaultPromptUrdu: 'دبئی میں کارپوریٹ ٹیکس کنسلٹنسی کے لیے گوگل ایڈز کی ہیڈلائنز اور ڈسکرپشنز بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Dubai Tax Consultant Google Ads',
          titleUrdu: 'دبئی ٹیکس ایڈز',
          prompt: 'Google RSA for Dubai tax consultant.',
          promptUrdu: 'گوگل سرچ ایڈز بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🔎 Google Responsive Search Ads (Dubai Corporate Tax)\n\n**Headlines (Max 30 chars each):**\n1. UAE Corporate Tax Advisors\n2. 100% FTA Compliant Filing\n3. Book Free 15-Min Tax Audit\n4. Zero Penalty Guarantee\n5. Licensed Dubai Tax Agents\n\n**Descriptions (Max 90 chars each):**\n1. Navigate UAE Corporate Tax with zero stress. 500+ businesses filed with 100% compliance.\n2. Avoid heavy FTA penalties. Get expert tax structuring & filing tailored to your industry.`,
        ur_nastaliq: `### 🔎 گوگل سرچ ایڈز (دبئی کارپوریٹ ٹیکس)\n\n- ہیڈلائنز: یو اے ای ٹیکس کنسلٹنٹس | ۱۰۰٪ درست ٹیکس فائلنگ | مفت ٹیکس آڈٹ\n- ڈسکرپشن: بھاری جرمانوں سے بچیں اور اپنے بزنس کے لیے قانونی ٹیکس مشاورت حاصل کریں۔`,
        ur_roman: `Headlines: UAE Corporate Tax Experts | 100% FTA Filing | Free Tax Audit Dubai.\nDescriptions: Avoid FTA penalties with expert tax structuring.`
      }
    },
    {
      id: 'urdu-roman-ecom-ad',
      name: 'Pakistani & Gulf Market E-Com Copy',
      nameUrdu: 'پاکستانی و خلیجی مارکیٹ ایڈ کاپی',
      badge: 'Local Flavor',
      iconName: 'Sparkles',
      description: 'Generates high-converting Roman Urdu and conversational ad copy engineered for WhatsApp checkout.',
      descriptionUrdu: 'واٹس ایپ پر فوری آرڈرز لانے والی پرکشش رومن اردو اور لوکل ایڈ کاپی بناتا ہے۔',
      inputPlaceholder: 'Product details, price & delivery terms...',
      defaultPrompt: 'Draft a high-energy Roman Urdu Facebook Ad for an online watch brand with Free Delivery and Open Parcel.',
      defaultPromptUrdu: 'گھڑیوں کے آن لائن اسٹور کے لیے کیش آن ڈلیوری والا پرکشش فیس بک ایڈ لکھیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Luxury Watch Roman Urdu Ad',
          titleUrdu: 'لگژری واچ ایڈ',
          prompt: 'Roman Urdu luxury watch ad copy.',
          promptUrdu: 'رومن اردو اشتہار بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `⌚ **Executive Chronograph Watch 2026**\n\nHar mehfil me apna alag style banayein! Japanese quartz movement, scratch-resistant sapphire glass aur luxury stainless steel strap.\n\n- Free Delivery all over Pakistan 🇵🇰\n- Open parcel facility (Pehle check karein phir pay karein)\n- 1-Year official replacement warranty\n\n👉 Abhi WhatsApp par "WATCH" likh kar order confirm karein: [WhatsApp Link]`,
        ur_nastaliq: `⌚ **لگژری ایگزیکٹو گھڑی ۲۰۲۶**\n\nجاپانی کوارٹز موومنٹ، مضبوط شیشہ اور پریمیم ڈیزائن۔\n\n- پورے پاکستان میں مفت ڈلیوری\n- پارسل کھول کر چیک کرنے کی سہولت\n- ۱ سال کی آفیشل وارنٹی\n\n👉 ابھی واٹس ایپ پر آرڈر بک کریں!`,
        ur_roman: `Har mehfil me apna style chamkayein! Japanese quartz movement watch. Open parcel delivery + 1 year warranty. Order on WhatsApp now!`
      }
    },
    {
      id: 'creative-brief-designer',
      name: 'Ad Visual & Video Creative Brief Generator',
      nameUrdu: 'گرافک ڈیزائنر کے لیے ایڈ بریف',
      badge: 'Design Ready',
      iconName: 'PenTool',
      description: 'Produces exact visual specs, aspect ratios (1:1, 9:16, 4:5), typography rules, and color palettes for creative teams.',
      descriptionUrdu: 'ڈیزائنرز کے لیے اشتہارات کے رنگوں، تصاویر اور متن کی تفصیلی بریف تیار کرتا ہے۔',
      inputPlaceholder: 'Campaign concept...',
      defaultPrompt: 'Generate an Instagram ad creative design brief for Eid Mega Sale.',
      defaultPromptUrdu: 'عید سیل کے اشتہار کے لیے ڈیزائنر کے لیے مکمل بریف بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Eid Sale Creative Brief',
          titleUrdu: 'عید سیل ڈیزائن بریف',
          prompt: 'Design brief for Eid campaign.',
          promptUrdu: 'ڈیزائن بریف تیار کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎨 Designer Creative Brief (Eid Mega Sale)\n\n- **Dimensions:** 1080x1350px (Feed 4:5) & 1080x1920px (Story 9:16)\n- **Color Palette:** Deep Royal Emerald (#043927), Antique Gold (#D4AF37), Warm Ivory (#FFFFF0)\n- **Main Visual Element:** 3D model wearing midnight green festive kurta centered with soft gold rim lighting.\n- **Primary Text:** "EID PRE-ORDER | FLAT 20% OFF"\n- **Subtext:** "Open Parcel Delivery | WhatsApp Order"`,
        ur_nastaliq: `### 🎨 ڈیزائن بریف (عید سیل اشتہار)\n\n- **سائز:** 1080x1350px (انسٹاگرام فیڈ)\n- **رنگ:** گہرا سبز، سنہری گولڈ اور سفید\n- **مرکزی ٹیکسٹ:** "عید پری آرڈر | فلیٹ ۲۰٪ رعایت"`,
        ur_roman: `Design Brief: Colors Royal Green & Gold. Center model with product. Bold text: Flat 20% OFF Eid Pre-Order.`
      }
    }
  ],
  'reputation': [
    {
      id: 'google-5star-request',
      name: 'Post-Delivery 5-Star WhatsApp Funnel',
      nameUrdu: 'خریداری کے بعد 5 اسٹار ریویو کا خودکار میسج',
      badge: '+320% Reviews',
      iconName: 'ShieldCheck',
      description: 'Triggers an automated post-delivery WhatsApp note that guides happy customers to leave a 1-click Google / Trustpilot review.',
      descriptionUrdu: 'پارسل ملنے کے بعد خوش گاہک سے گوگل پر اچھے ریویوز حاصل کرنے کا میسج بھیجتا ہے۔',
      inputPlaceholder: 'Customer name and product purchased...',
      defaultPrompt: 'Draft a post-purchase WhatsApp message thanking a customer and offering a Rs. 300 discount coupon in exchange for a Google review.',
      defaultPromptUrdu: 'خوش گاہک کے لیے شکریے اور گوگل ریویو کے بدلے ڈسکاؤنٹ کوپن کا میسج بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Post-Delivery Review Gift',
          titleUrdu: 'ریویو پر ڈسکاؤنٹ کوپن',
          prompt: 'Review request with discount voucher.',
          promptUrdu: 'ریویو کی درخواست کا میسج بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"Hi Usman! Hope you are loving your new handcrafted leather shoes! 👞✨\n\nIf you have 15 seconds, could you share your honest rating on Google? As a special thank you from our family workshop, we will instantly send you a **Rs. 500 Gift Voucher** for your next order!\n\n👉 Click here to review: [1-Click Google Review Link]"`,
        ur_nastaliq: `"السلام علیکم عثمان بھائی! امید ہے آپ کو اپنے نئے لیدر شوز پسند آئے ہوں گے!\n\nاگر آپ کے پاس صرف ۱۵ سیکنڈ ہوں تو برائے مہربانی گوگل پر اپنی رائے شیئر فرمائیں۔ آپ کی حوصلہ افزائی کے شکریے کے طور پر ہم آپ کو اگلے آرڈر کے لیے **۵۰۰ روپے کا گفٹ واؤچر** فوری بھیج دیں گے!\n\n👉 ریویو کے لیے یہاں کلک کریں: [گوگل لنک]"`,
        ur_roman: `Salam Usman bhai! Shoes pasand aaye hon toh please Google par 15-second review dein. Shukriye k tor par hum foran Rs. 500 gift voucher code share karein ge!`
      }
    },
    {
      id: 'negative-review-diplomat',
      name: 'Negative Review De-escalation & Shield',
      nameUrdu: 'منفی ریویو کا باوقار اور سفارتی جواب',
      badge: 'Brand Shield',
      iconName: 'ShieldCheck',
      description: 'Writes public owner responses to 1-star reviews that display extreme professionalism and turn skeptics into believers.',
      descriptionUrdu: 'گوگل پر ۱ اسٹار منفی ریویو کا ایسا جواب دیتا ہے جس سے پڑھنے والے دوسرے لوگوں کا اعتماد بڑھے۔',
      inputPlaceholder: 'The negative review text to address...',
      defaultPrompt: 'A customer left a 1-star review on Google complaining that the bakery cake arrived 30 minutes late. Write an executive owner reply.',
      defaultPromptUrdu: 'بیکری کے لیے ۳۰ منٹ تاخیر پر ۱ اسٹار ریویو کا انتہائی باوقار اور تسلی بخش جواب تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Late Cake Delivery Review',
          titleUrdu: 'کیک ڈلیوری میں تاخیر کا جواب',
          prompt: 'Owner reply to late delivery review.',
          promptUrdu: 'منفی ریویو کا جواب لکھیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🛡️ Public Owner Response\n\n"Dear Bilal, thank you for bringing this to our attention. First and foremost, please accept our sincere apologies that your birthday cake arrived 30 minutes after your delivery window on Saturday. We pride ourselves on punctuality and we fell short of your expectations.\n\nOur General Manager, Daniyal, has already reviewed the delivery route to ensure this never repeats. We would love the opportunity to make this right personally — please message Daniyal directly at **gm@delicebakery.com** or WhatsApp **+92 300 *** 8811** so we can send a complimentary celebration gift. Your trust means everything to us."`,
        ur_nastaliq: `### 🛡️ عوامی جواب (اردو)\n\n"محترم بلال صاحب، فیڈ بیک کا شکریہ۔ ہفتے کے روز کیک کی ڈلیوری میں ۳۰ منٹ کی تاخیر پر ہم دل کی گہرائیوں سے معذرت خواہ ہیں۔ وقت کی پابندی ہماری اولین ترجیح ہے۔\n\nہمارے جنرل مینیجر آپ سے براہِ راست رابطہ کر کے اس کمی کا ازالہ کرنا چاہتے ہیں۔ برائے مہربانی اپنا آرڈر نمبر واٹس ایپ پر شیئر فرمائیں۔ آپ کا اعتماد ہمارا اصل اثاثہ ہے۔"`,
        ur_roman: `Dear Bilal bhai, Saturday ko cake delivery delay par dil se maazrat. Hamare manager Daniyal apse personally contact karke iska behtareen solution aur complimentary gift provide karna chahte hain.`
      }
    },
    {
      id: 'private-feedback-interceptor',
      name: 'Private Bad-Feedback Interceptor',
      nameUrdu: 'منفی تاثرات کو پبلک ہونے سے پہلے روکنا',
      badge: 'Crisis Prevention',
      iconName: 'Zap',
      description: 'Detects unhappy customers in WhatsApp chat before they post on Google/Facebook, routing them to VIP support.',
      descriptionUrdu: 'گاہک کی ناراضگی کو سوشل میڈیا پر جانے سے پہلے نجی طور پر حل کرتا ہے۔',
      inputPlaceholder: 'Customer message context...',
      defaultPrompt: 'Draft an automated private feedback triage question that filters ratings 1-3 to support and ratings 4-5 to Google.',
      defaultPromptUrdu: 'گاہک سے خفیہ ریٹنگ لے کر ناراض کسٹمر کو فوری مینیجر کے پاس بھیجنے کا سسٹم بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Feedback Filter Question',
          titleUrdu: 'فیڈ بیک فلٹر',
          prompt: 'Triage 1-5 star feedback privately.',
          promptUrdu: 'فیڈ بیک فلٹر بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"How was your experience with your order today?\n\n[ ⭐⭐⭐⭐⭐ Loved it! ] -> (Redirects to Google 5-Star)\n[ ⚠️ Had an Issue ] -> (Directly alerts GM Daniyal on WhatsApp for immediate resolution)"`,
        ur_nastaliq: `"آج کے آرڈر سے آپ کا تجربہ کیسا رہا؟\n\n[ ⭐⭐⭐⭐⭐ زبردست! ] -> (گوگل ریویو پیج پر جائے گا)\n[ ⚠️ کوئی شکایت ہے ] -> (فوری طور پر مینیجر سے لائیو چیٹ کھلے گی)"`,
        ur_roman: `Order kaisa laga? [ ⭐⭐⭐⭐⭐ Zabardast ] ya [ ⚠️ Koi Issue Tha ]. Happy buyers go to Google, issues get resolved instantly in private chat.`
      }
    },
    {
      id: 'seo-owner-review-replies',
      name: 'Keyword-Rich Public Review Responder',
      nameUrdu: 'ایس ای او سے بھرپور ریویو جوابات',
      badge: 'Local SEO Boost',
      iconName: 'Search',
      description: 'Generates heartfelt 5-star replies woven with local keywords and service names to boost Google local rank.',
      descriptionUrdu: 'گوگل پر ۵ اسٹار ریویوز کے ایسے جوابات لکھتا ہے جن میں علاقے اور سروسز کے اہم کی ورڈز شامل ہوں۔',
      inputPlaceholder: 'Customer 5-star review details...',
      defaultPrompt: 'Write an SEO-rich owner response to a 5-star review praising our Lahore catering service for wedding events.',
      defaultPromptUrdu: 'لاہور میں شادی کی کیٹرنگ سروس کے لیے ۵ اسٹار ریویو کا شاندار جواب تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Wedding Catering 5-Star Reply',
          titleUrdu: 'کیٹرنگ ۵ اسٹار ریویو کا جواب',
          prompt: 'SEO response to 5-star catering review.',
          promptUrdu: 'ایس ای او ریویو جواب بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"Thank you so much for the glowing 5-star review, Sarah! We were honored to provide our **wedding catering and live BBQ live stations** in DHA Lahore for your special day. Our chefs take immense pride in delivering the freshest Mughlai dishes across Lahore. We look forward to serving your family again soon!"`,
        ur_nastaliq: `"سارہ بہن، ۵ اسٹار ریویو کا بے حد شکریہ! ڈی ایچ اے لاہور میں آپ کی شادی کی تقریب میں **کیٹرنگ اور لائیو بی بی کیو سروس** فراہم کرنا ہمارے لیے باعثِ مسرت تھا۔ ہم ہمیشہ معیاری کھانوں کے لیے کوشاں رہتے ہیں۔"`,
        ur_roman: `Sarah baji, 5-star review k liye shukriya! DHA Lahore me wedding catering provide karna hamare liye honor tha. Looking forward to serving you again!`
      }
    }
  ],
  'invoice-recovery': [
    {
      id: 'diplomatic-7day-reminder',
      name: 'Diplomatic Overdue Payment Reminder',
      nameUrdu: 'رکی ہوئی رقم کی شائستہ وصولی',
      badge: '78.6% Recovery',
      iconName: 'CreditCard',
      description: 'Sends polite, professional payment reminder messages via WhatsApp and email that preserve long-term client goodwill.',
      descriptionUrdu: 'تعلقات خراب کیے بغیر واٹس ایپ اور ای میل پر بل اور انوائس کی یاد دہانی کرواتا ہے۔',
      inputPlaceholder: 'Client name, invoice #, amount, days late...',
      defaultPrompt: 'Draft a polite WhatsApp message for an agency client who is 7 days late on Invoice #INV-2049 ($2,200).',
      defaultPromptUrdu: 'ایک کلائنٹ جس کی ماہانہ فیس ۷ دن لیٹ ہو چکی ہے، اس کے لیے ایک باوقار واٹس ایپ میسج لکھیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '7-Day Overdue Retainer',
          titleUrdu: '7 دن کی تاخیر کا فالو اپ',
          prompt: '7-day overdue retainer reminder.',
          promptUrdu: 'انوائس کی یاد دہانی کا میسج بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 💳 Stage 2 Payment Reminder (Day +7)\n\n"Hi Salman,\n\nHope your week is off to a productive start!\n\nJust a quick check-in regarding Invoice **#INV-2049 ($2,200)** for your April AI Pod management, which reached its due date last Tuesday.\n\nTo make settlement seamless for your finance team, here is the direct one-click payment link: [Secure Payment Link]. Alternatively, our bank wire details are attached below.\n\nIf the payment was already dispatched today, please disregard this note. Thank you for your continued partnership!"`,
        ur_nastaliq: `### 💳 ادائیگی کی یاد دہانی (اردو)\n\n"السلام علیکم سلمان بھائی،\n\nامید ہے آپ خیریت سے ہوں گے۔\n\nیہ پیغام برائے مہربانی اپریل کے انوائس **#INV-2049** کی یاد دہانی کے سلسلے میں ہے، جس کی آخری تاریخ پچھلے منگل تھی۔\n\nآپ کی سہولت کے لیے ڈائریکٹ آن لائن پیمنٹ لنک اور بینک اکاؤنٹ کی تفصیل نیچے موجود ہے۔\n\nاگر ادائیگی پہلے ہی کی جا چکی ہے تو برائے مہربانی اس پیغام کو نظر انداز فرمائیں۔ آپ کے تعاون کا تہہِ دل سے شکریہ!"`,
        ur_roman: `Salam Salman bhai! Invoice #INV-2049 ($2,200) ki gentle reminder thi jo last week due tha. Payment link yahan attached hai: [Link]. Shukriya!`
      }
    },
    {
      id: 'early-settlement-discount',
      name: 'Early Settlement Incentive Pitch',
      nameUrdu: 'بروقت ادائیگی پر رعایت کی ترغیب',
      badge: 'Faster Cash Flow',
      iconName: 'Zap',
      description: 'Offers a 3-5% instant discount if the invoice is cleared within 24 hours to rapidly pull forward cash flow.',
      descriptionUrdu: '۲۴ گھنٹے میں ادائیگی کرنے پر ۳ سے ۵ فیصد رعایت دے کر کیش فلو تیز کرتا ہے۔',
      inputPlaceholder: 'Invoice amount and discount percentage...',
      defaultPrompt: 'Create a message offering a 3% instant settlement discount on a $3,500 invoice if cleared by 5 PM today.',
      defaultPromptUrdu: 'آج شام ۵ بجے تک ادائیگی پر ۳٪ رعایت کا خصوصی آفر میسج بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '3% 24-Hour Settlement',
          titleUrdu: '3% فوری ادائیگی رعایت',
          prompt: '3% early settlement discount offer.',
          promptUrdu: 'رعایت کا میسج بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"Hey Farhan! As part of our month-end accounting close, we are offering an immediate **3% instant cash settlement discount (Save $105)** if Invoice #INV-2050 is cleared via bank wire before 5:00 PM today. Let me know if you would like the adjusted payment link!"`,
        ur_nastaliq: `"فرحان بھائی! اگر آج شام ۵ بجے سے پہلے انوائس کلیئر کر دی جائے تو ہم آپ کو **۳٪ فوری رعایت (۱۰۵ ڈالر کی بچت)** پیش کر رہے ہیں۔ کیا میں آپ کو نیا پیمنٹ لنک بھیج دوں؟"`,
        ur_roman: `Salam Farhan bhai! Agar aaj 5 PM se pehle invoice clear karein toh 3% instant discount ($105 save) apply ho jayega. Adjusted payment link share karun?`
      }
    },
    {
      id: 'installment-plan-negotiation',
      name: 'Structured Installment Plan Agreement',
      nameUrdu: 'اقساط پر مبنی ادائیگی کا معاہدہ',
      badge: 'Debt Recovery',
      iconName: 'CreditCard',
      description: 'Structures a 2-part or 3-part split payment plan for distressed clients while keeping ongoing services active.',
      descriptionUrdu: 'مشکل میں پھنسے کلائنٹ کے لیے ۲ یا ۳ آسان اقساط کا پلان تیار کرتا ہے تاکہ رقم ضائع نہ ہو۔',
      inputPlaceholder: 'Total debt amount & split terms...',
      defaultPrompt: 'Create a 3-installment payment schedule for a $4,500 overdue balance.',
      defaultPromptUrdu: '۴,۵۰۰ ڈالر کے واجبات کے لیے ۳ آسان اقساط کا معاہدہ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '3-Part Split Plan',
          titleUrdu: '3 اقساط کا پلان',
          prompt: '3-part installment recovery schedule.',
          promptUrdu: 'اقساط کا شیڈول بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📑 Structured Settlement Agreement\n\nTotal Overdue: **$4,500**\n- **Installment 1 (Today):** $1,500 (Activates account reactivation)\n- **Installment 2 (15th):** $1,500\n- **Installment 3 (30th):** $1,500\n\nAutomated direct-debit links configured for each date. Zero penalties applied upon timely clearance.`,
        ur_nastaliq: `### 📑 آسان اقساط کا لائحہ عمل\n\nکل بقایا رقم: **۴,۵۰۰ ڈالر**\n- **پہلی قسط (آج):** ۱,۵۰۰ ڈالر (سروس فوری بحال ہو جائے گی)\n- **دوسری قسط (۱۵ تاریخ):** ۱,۵۰۰ ڈالر\n- **تیسری قسط (۳۰ تاریخ):** ۱,۵۰۰ ڈالر`,
        ur_roman: `Total balance $4,500 split into 3 equal monthly installments of $1,500 each. Services remain active upon 1st payment.`
      }
    },
    {
      id: 'automated-receipt-sync',
      name: 'Instant WhatsApp Receipt & Billing Sync',
      nameUrdu: 'خودکار رسید اور واٹس ایپ تصدیق',
      badge: 'Instant Receipt',
      iconName: 'FileSpreadsheet',
      description: 'Dispatches instant PDF receipts and thank-you notes on WhatsApp the moment payment hits bank/gateway.',
      descriptionUrdu: 'ادائیگی موصول ہوتے ہی واٹس ایپ پر تصدیقی میسج اور سرکاری رسید بھیجتا ہے۔',
      inputPlaceholder: 'Transaction details and customer name...',
      defaultPrompt: 'Generate an official WhatsApp payment received confirmation message with PDF receipt attachment notice.',
      defaultPromptUrdu: 'ادائیگی کی وصولی پر شکریے اور رسید کا باضابطہ واٹس ایپ میسج بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Payment Received WhatsApp',
          titleUrdu: 'رقم وصولی کا میسج',
          prompt: 'Payment received confirmation note.',
          promptUrdu: 'رسید کا میسج بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"✅ **Payment Received!**\n\nThank you, Tariq! We have successfully received your payment of **Rs. 35,000** for the NexaBoost Monthly AI Agent Pod. Official tax invoice #REC-8910 is attached. Your agent workflows remain fully active 24/7!"`,
        ur_nastaliq: `"✅ **ادائیگی موصول ہو گئی ہے!**\n\nطارق صاحب، آپ کی ۳۵ ہزار روپے کی ادائیگی کامیابی سے وصول ہو چکی ہے۔ سرکاری رسید #REC-8910 نیچے منسلک ہے۔ آپ کا AI سسٹم ۲۴ گھنٹے فعال رہے گا۔"`,
        ur_roman: `Payment Received! Rs. 35,000 received for NexaBoost AI Pod. Receipt #REC-8910 attached. Thank you for your partnership!`
      }
    }
  ],
  'trend-listening': [
    {
      id: 'newsjacking-meme-creator',
      name: '15-Min Real-Time Trend & Meme Forge',
      nameUrdu: 'وائرل ٹرینڈز پر فوری میمز اور پوسٹس',
      badge: 'Real-Time Radar',
      iconName: 'TrendingUp',
      description: 'Capitalizes on breaking cultural moments, cricket victories, and viral tweets with safe brand-aligned memes and promo codes.',
      descriptionUrdu: 'بریکنگ نیوز اور وائرل واقعات پر ۱۵ منٹ کے اندر برانڈ کے لیے میمز اور آفرز تیار کرتا ہے۔',
      inputPlaceholder: 'Trending topic or news event...',
      defaultPrompt: 'Create a witty promo post and meme concept for a fast-food burger brand capitalizing on a thrilling last-ball cricket match victory.',
      defaultPromptUrdu: 'کرکٹ کے سنسنی خیز میچ پر فاسٹ فوڈ برانڈ کے لیے ایک وائرل میم اور ڈسکاؤنٹ آفر تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Cricket Win Burger Promo',
          titleUrdu: 'کرکٹ جیت پر برگر آفر',
          prompt: 'Newsjacking cricket last ball win.',
          promptUrdu: 'کرکٹ ٹرینڈ پر پوسٹ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### ⚡ Real-Time Trend Post (Cricket Thriller)\n\n**Visual / Meme:** Split screen — Left: Heart monitor going off the charts. Right: Hot crispy double-cheese burger.\n\n**Copy:** "Aakhri over me dil sambhalna mushkil tha, lekin midnight cravings ka hal simple hai! 🏏🍔\n\nUse promo code **MATCHWINNER** on WhatsApp & get **Flat 25% OFF** all Gourmet Burgers till 2:00 AM!\n\nTag that friend whose heart rate still hasn't normalized! 👇"`,
        ur_nastaliq: `### ⚡ وائرل ٹرینڈ پوسٹ (کرکٹ جیت کا جشن)\n\nآخری گیند پر میچ جیتنے کا جو سنسنی خیز مزہ ہے، وہی مزہ ہمارے کرسپی برگر کے پہلے نوالے میں ہے! 🍔🔥\n\nمیچ کا جشن منائیں خصوصی آفر کے ساتھ:\nکوڈ استعمال کریں: **MATCHWINNER** اور حاصل کریں فلیٹ ۲۵٪ رعایت!\n\nابھی واٹس ایپ پر آرڈر کریں!`,
        ur_roman: `Aakhri ball par match jitne ka jo maza hai, wahi crispy bite ka maza NexaBurgers me hai! 🍔 Code: MATCHWINNER for 25% OFF till 2 AM on WhatsApp!`
      }
    },
    {
      id: 'competitor-viral-breakdown',
      name: 'Competitor Viral Post Deconstruct & Hook',
      nameUrdu: 'حریفوں کی وائرل پوسٹس کا تجزیہ',
      badge: 'Reverse Engineer',
      iconName: 'Search',
      description: 'Dissects why a competitor post gained 100k+ views and produces an even stronger counter-narrative.',
      descriptionUrdu: 'حریفوں کی مقبول ویڈیوز کی کامیابی کی وجوہات تلاش کر کے ان سے بہتر مواد تیار کرتا ہے۔',
      inputPlaceholder: 'Competitor post link or summary...',
      defaultPrompt: 'Analyze a competitor viral video about "Why hiring VA is better than AI" and write a devastating counter-hook.',
      defaultPromptUrdu: 'حریف کی ویڈیو کا تجزیہ کر کے اس سے بہتر اور مضبوط متبادل اسکرپٹ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Counter-Narrative to VA Video',
          titleUrdu: 'وی اے کے موازنے کا جواب',
          prompt: 'Counter hook to competitor VA post.',
          promptUrdu: 'حریف کی ویڈیو کا جواب بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🎯 Counter-Narrative Video Hook\n\n**Their Hook:** "Why you should never use AI agents and hire human VAs instead." (80k views)\n\n**Our Superior Counter-Hook:**\n"The agency guru telling you to hire 5 human VAs is paying $4,000/mo in payroll while his top competitor uses 14 AI agents for $997 and replies in 5 seconds at 3:00 AM. Here is the actual profit comparison they won't show you..."`,
        ur_nastaliq: `### 🎯 حریف کے جواب میں وائرل ہک\n\n"جو لوگ آپ کو ۵ ورچوئل اسسٹنٹس رکھنے کا مشورہ دیتے ہیں وہ تنخواہوں پر لاکھوں اڑا رہے ہیں۔ جبکہ سمارٹ برانڈز AI ایجنٹس کے ذریعے ۸ سیکنڈ میں گاہک کو جواب دے کر ۴ گنا زیادہ منافع کما رہے ہیں۔ یہ رہا اصل حساب کتاب..."`,
        ur_roman: `Counter-Hook: "Guru telling you to hire 5 VAs is burning $4k/mo while competitors use 14 AI agents for $997 and reply in 5 seconds 24/7. Here is the math..."`
      }
    },
    {
      id: 'cricket-cultural-campaign',
      name: 'Cultural Moment & Festival Newsjacker',
      nameUrdu: 'تہواروں اور قومی ایونٹس کی مارکیٹنگ',
      badge: 'Cultural Fit',
      iconName: 'Sparkles',
      description: 'Aligns brand messaging with Independence Day, Ramadan timing, Chai culture, and local wedding seasons.',
      descriptionUrdu: 'چودہ اگست، رمضان المبارک اور شادیوں کے سیزن کے لیے بروقت اور دل کو چھو لینے والے پیغامات تیار کرتا ہے۔',
      inputPlaceholder: 'Cultural event and brand product...',
      defaultPrompt: 'Create a 14th August Independence Day celebratory campaign for a local tech hardware brand.',
      defaultPromptUrdu: '۱۴ اگست یومِ آزادی کے لیے ٹیک برانڈ کی خصوصی پروموشنل مہم تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '14th August Tech Campaign',
          titleUrdu: '14 اگست مہم',
          prompt: 'Independence day promo campaign.',
          promptUrdu: 'یوم آزادی کا اشتہار بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `🇵🇰 **Made in Pakistan. Built for the Future.**\n\nThis Independence Day, we celebrate the relentless spirit of Pakistani creators, engineers, and entrepreneurs building global brands.\n\nEnjoy **Flat 14% Azadi Discount + Free Delivery** on all high-performance gear using code **AZADI2026**.\n\nOrder today on WhatsApp!`,
        ur_nastaliq: `🇵🇰 **پاکستان کی خود مختاری اور ترقی کا جشن!**\n\nاس یومِ آزادی پر پاکستانی ہنر اور ٹیکنالوجی کو خراجِ تحسین پیش کرتے ہوئے حاصل کریں:\n\n✨ فلیٹ ۱۴٪ آزادی رعایت\n✨ پورے پاکستان میں مفت ڈلیوری\n\nکوڈ استعمال کریں: **AZADI2026**`,
        ur_roman: `Made in Pakistan, Built for Global Scale! Flat 14% Azadi Discount with code AZADI2026. Free shipping nationwide.`
      }
    },
    {
      id: 'crisis-sentiment-alert',
      name: 'Crisis Sentinel & Early Sentiment Shield',
      nameUrdu: 'کسی بھی بحران یا منفی پروپیگنڈا کا تدارک',
      badge: 'Reputation Safe',
      iconName: 'ShieldCheck',
      description: 'Scans for emerging brand backlash or boycott discussions and produces immediate PR defense talking points.',
      descriptionUrdu: 'برانڈ کے خلاف کسی بھی افواہ یا منفی مہم کا فوری نوٹس لے کر وضاحتی بیان جاری کرتا ہے۔',
      inputPlaceholder: 'Crisis or rumor details...',
      defaultPrompt: 'Draft an urgent, transparent official brand clarification statement addressing a supplier rumor.',
      defaultPromptUrdu: 'سپلائر کی افواہ کے جواب میں برانڈ کا باضابطہ اور شفاف وضاحتی بیان تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Official PR Clarification',
          titleUrdu: 'آفیشل وضاحتی بیان',
          prompt: 'Crisis PR clarification statement.',
          promptUrdu: 'وضاحتی بیان لکھیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📢 Official Statement from Management\n\n"To our valued community: We are aware of recent inaccurate rumors regarding our ingredient sourcing. We want to state unequivocally that 100% of our dairy and organic supplies are certified Halal and locally sourced from verified Punjab farms. We welcome full public inspection of our ISO-9001 labs at any time."`,
        ur_nastaliq: `### 📢 انتظامیہ کی طرف سے باضابطہ وضاحتی بیان\n\n"ہمارے معزز کسٹمرز کے لیے: سوشل میڈیا پر اجزاء کے حوالے سے پھیلائی جانے والی افواہیں بے بنیاد ہیں۔ ہمارے تمام اجزاء ۱۰۰٪ حلال اور تصدیق شدہ فارمز سے حاصل کیے جاتے ہیں۔ شفافیت ہماری اولین ترجیح ہے۔"`,
        ur_roman: `Official Statement: Recent rumors regarding sourcing are false. 100% ingredients are Halal certified & locally sourced from verified Punjab farms.`
      }
    }
  ],
  'market-research': [
    {
      id: 'competitor-swot-matrix',
      name: '4-Pillar Comprehensive SWOT Matrix',
      nameUrdu: 'کاروباری SWOT تجزیہ (طاقتیں، کمزوریاں، مواقع)',
      badge: 'Deep Intelligence',
      iconName: 'BarChart3',
      description: 'Delivers a deep analysis of Strengths, Weaknesses, Opportunities, and Threats for any business niche in under 60 seconds.',
      descriptionUrdu: 'کسی بھی کاروبار کے لیے طاقتوں، کمزوریوں، مواقع اور خطرات کا مفصل اور باریک بین تجزیہ کرتا ہے۔',
      inputPlaceholder: 'Business model, target city, and industry...',
      defaultPrompt: 'Conduct a comprehensive SWOT analysis for launching an artisanal coffee subscription service in Karachi and Lahore.',
      defaultPromptUrdu: 'لاہور اور کراچی میں پریمیم کافی ہوم ڈلیوری ماڈل کا مکمل SWOT تجزیہ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Artisanal Coffee Subscription SWOT',
          titleUrdu: 'کافی سبسکرپشن ماڈل کا SWOT',
          prompt: 'SWOT for coffee subscription PK.',
          promptUrdu: 'کافی بزنس کا تجزیہ کریں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📊 Market Intelligence & SWOT Matrix (Specialty Coffee)\n\n#### 1. Strengths & Opportunities:\n- **Rapid 42% YoY Youth Café Culture Growth** in DHA / Gulberg / Bahria Town.\n- **Zero Dominant Direct-to-Consumer Home Refill Brand:** Great café presence, but fragmented home delivery.\n\n#### 2. Weaknesses & Market Threats:\n- **Import Duty Volatility:** Green bean prices fluctuate with currency exchange.\n- **Grinder Education Gap:** 68% of home consumers do not own burr grinders.\n\n#### 3. Strategic Move:\n- Bundle a free manual burr grinder with 6-month pre-paid subscriptions to remove the primary barrier to entry.`,
        ur_nastaliq: `### 📊 مارکیٹ ریسرچ و SWOT رپورٹ (پریمیم کافی ماڈل)\n\n۱. **سب سے بڑا موقع:** نوجوانوں میں اسپیشلٹی کافی کا رجحان عروج پر ہے، لیکن گھر پر ماہانہ تازہ بینز مہیا کرنے والا کوئی منظم برانڈ نہیں۔\n۲. **رکاوٹ:** زیادہ تر لوگوں کے پاس کافی گرائنڈر موجود نہیں۔\n۳. **حل:** ۶ ماہ کی ایڈوانس سبسکرپشن کے ساتھ مفت گرائنڈر کا تحفہ دیں تاکہ آرڈرز میں رکاوٹ ختم ہو۔`,
        ur_roman: `SWOT: Opportunity in high specialty coffee demand in Lahore/Karachi. Barrier: lack of grinders. Strategy: Free manual grinder bundle with 6-month plan.`
      }
    },
    {
      id: 'pricing-elasticity-benchmarking',
      name: 'Pricing Elasticity & Competitor Benchmark',
      nameUrdu: 'قیمتوں کا تعین اور حریفوں کے پیکیجز کا موازنہ',
      badge: 'Price Optimization',
      iconName: 'CreditCard',
      description: 'Benchmarks competitor pricing tiers, packaging strategies, and identifies the optimal price point for maximum profit.',
      descriptionUrdu: 'مارکیٹ میں حریفوں کی قیمتوں کا موازنہ کر کے سب سے زیادہ منافع بخش فیس اور پیکیجز کا تعین کرتا ہے۔',
      inputPlaceholder: 'Service type and target customer segment...',
      defaultPrompt: 'Benchmark pricing models for a WhatsApp CRM tool targeting retail chains in Saudi Arabia and UAE.',
      defaultPromptUrdu: 'خلیجی ممالک کے ریٹیل اسٹورز کے لیے واٹس ایپ سوفٹ ویئر کے بہترین پرائسنگ ماڈل کی سفارش کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Gulf WhatsApp CRM Pricing',
          titleUrdu: 'خلیجی مارکیٹ پرائسنگ ماڈل',
          prompt: 'Pricing tiers for UAE/KSA WhatsApp CRM.',
          promptUrdu: 'پرائسنگ ماڈل بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 💰 Pricing Benchmark & Tier Architecture (UAE / KSA Retail)\n\n- **Tier 1 (Starter Store - $299/mo):** 1 Phone Number, 10,000 WhatsApp Marketing Messages, COD Auto-Confirmation.\n- **Tier 2 (Growth Enterprise - $799/mo - Recommended):** 3 Numbers, 50,000 Messages, Full POS/Shopify Sync, Multilingual AI Bot in Arabic/English.\n- **Tier 3 (Omnichannel Retail - $1,800/mo):** Unlimited Numbers, Dedicated SLA, Custom ERP Integration.\n- **Payback Period:** Less than 14 days for retailers with 100+ daily orders.`,
        ur_nastaliq: `### 💰 پرائسنگ ماڈل (خلیجی ممالک کے لیے)\n\n- **اسٹارٹر پلان:** $299 ماہانہ (۱۰ ہزار میسجز اور کیش آن ڈلیوری کنفرمیشن)\n- **گروتھ پلان:** $799 ماہانہ (عربی اور انگلش AI ایجنٹ + شاپائفائی سنک)\n- **انٹرپرائز پلان:** $1,800 ماہانہ (مکمل کسٹم کنکشن اور سپورٹ)`,
        ur_roman: `Pricing Tiers: Starter ($299/mo), Growth ($799/mo), Enterprise ($1,800/mo). High margin with rapid payback under 14 days.`
      }
    },
    {
      id: 'buyer-persona-triggers',
      name: 'Psychographic Buyer Persona & Triggers',
      nameUrdu: 'خریدار کی نفسیات اور خریداری کے محرکات',
      badge: 'Deep Empathy',
      iconName: 'UserCheck',
      description: 'Maps exact customer pain points, secret anxieties, decision criteria, and irrational buying triggers.',
      descriptionUrdu: 'گاہک کی پوشیدہ پریشانیوں اور اس کے فوری خریداری کے محرکات کا نقشہ تیار کرتا ہے۔',
      inputPlaceholder: 'Target audience archetype...',
      defaultPrompt: 'Create a deep psychographic persona for a 7-figure Amazon & Shopify e-commerce founder named Salman.',
      defaultPromptUrdu: 'کامیاب ای کامرس برانڈ کے مالک سلمان کی نفسیات اور ضروریات کا گہرا جائزہ تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '7-Figure E-Com Founder Persona',
          titleUrdu: 'ای کامرس بانی کی پروفائل',
          prompt: 'Psychographic persona for e-com founder.',
          promptUrdu: 'خریدار کا نفسیاتی خاکہ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 👤 Persona Dossier: "Scaling Salman" (Age: 32, E-Com Founder)\n\n- **Core Anxiety:** "My ad spend is profitable, but my customer service staff keeps dropping balls on WhatsApp. If I step away for a weekend, orders crash."\n- **Status Trigger:** Wants to be seen as a modern tech-forward founder who runs lean, high-margin systems rather than bloated headcount.\n- **Magic Pitch Phrase:** "Stop babysitting shift schedules. Deploy 14 agents that run your sales and support on autopilot."`,
        ur_nastaliq: `### 👤 خریدار کا نفسیاتی خاکہ: "سلمان بھائی (ای کامرس فاؤنڈر)"\n\n- **سب سے بڑا خوف:** "میرے اشتہارات چل رہے ہیں لیکن رات کو عملہ جواب نہ دے کر سیلز گنوا رہا ہے۔"\n- **خواہش:** کم ملازمین کے ساتھ بغیر کسی سر درد کے زیادہ منافع کمانا۔\n- **کامیاب پچ:** "عملے کی نگرانی چھوڑیں، ۱۴ خودکار AI ایجنٹس سے ۲۴ گھنٹے سیلز کروائیں۔"`,
        ur_roman: `Persona: Scaling Salman (32). Pain: Managing human staff shifts & losing night leads. Key Trigger: Autonomous 24/7 AI workforce.`
      }
    },
    {
      id: 'gtm-90day-launchpad',
      name: '90-Day Go-To-Market Execution Blueprint',
      nameUrdu: '90 دن میں مارکیٹ پر غلبے کا روڈ میپ',
      badge: 'Execution Roadmap',
      iconName: 'TrendingUp',
      description: 'Lays out exact week-by-week milestones across validation, paid acquisition, referral flywheels, and scaling.',
      descriptionUrdu: 'پہلے ۹۰ دنوں میں کاروبار کو زیرو سے ٹاپ پر لے جانے کے ہفتہ وار اہداف مقرر کرتا ہے۔',
      inputPlaceholder: 'New product or service to launch...',
      defaultPrompt: 'Create a 90-day GTM roadmap for launching a B2B AI Agent agency in Dubai.',
      defaultPromptUrdu: 'دبئی میں AI ایجنسی لانچ کرنے کا ۹۰ دن کا جامع پلان بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Dubai AI Agency 90-Day Plan',
          titleUrdu: 'دبئی میں 90 دن کا بزنس پلان',
          prompt: '90-day GTM plan for Dubai AI agency.',
          promptUrdu: '۹۰ دن کا روڈ میپ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🚀 90-Day GTM Blueprint (Dubai AI Agency)\n\n- **Month 1 (Days 1-30 - Foundation & 5 Pilot Clients):** Scrape 500 Dubai Real Estate & E-com leads. Offer 14-day zero-risk pilots. Secure 5 paid case studies.\n- **Month 2 (Days 31-60 - Inbound Engine & Paid Ads):** Launch Meta & LinkedIn video ads highlighting pilot ROI. Deploy WhatsApp booking bot.\n- **Month 3 (Days 61-90 - Scale & Retainers):** Cross $25k MRR by scaling client referrals and introducing annual enterprise pods.`,
        ur_nastaliq: `### 🚀 ۹۰ دن کا روڈ میپ (دبئی مارکیٹ)\n\n- **پہلا مہینہ:** ۵۰۰ تصدیق شدہ لیڈز نکال کر پہلے ۵ پائلٹ کلائنٹس کو کامیاب بنائیں۔\n- **دوسرا مہینہ:** ویڈیو اشتہارات اور واٹس ایپ بکنگ بوٹ کے ذریعے سیلز تیز کریں۔\n- **تیسرا مہینہ:** سالانہ معاہدوں کے ذریعے ماہانہ ۲۵ ہزار ڈالر کی آمدنی کا ہدف حاصل کریں۔`,
        ur_roman: `Month 1: 5 pilot clients in Dubai real estate. Month 2: Scale video ads & WhatsApp CRM. Month 3: Cross $25k MRR with annual contracts.`
      }
    }
  ],
  'whatsapp-crm': [
    {
      id: 'conversational-order-cod',
      name: 'Bilingual Conversational Order & COD Flow',
      nameUrdu: 'واٹس ایپ پر آرڈر اور کیش آن ڈلیوری کی بکنگ',
      badge: '82% Auto-Orders',
      iconName: 'MessageSquare',
      description: 'Takes customer product selection, validates street address & phone number, and logs COD orders in seconds.',
      descriptionUrdu: 'اردو اور انگلش میں بات کر کے سائز، رنگ اور پتہ لے کر آرڈر فوری فائنل کرتا ہے۔',
      inputPlaceholder: 'Product details, price and customer input...',
      defaultPrompt: 'Simulate a natural Urdu WhatsApp conversation where an agent helps a customer select a shoe size, confirms their address in Gulshan-e-Iqbal Karachi, and logs the COD order.',
      defaultPromptUrdu: 'واٹس ایپ پر گاہک کے ساتھ اردو میں بات چیت کر کے جوتے کا سائز اور پتہ لے کر آرڈر کنفرم کرنے کا ڈیمو بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Shoe Order COD Flow (Urdu)',
          titleUrdu: 'جوتے کا آرڈر (اردو)',
          prompt: 'Urdu WhatsApp shoe order flow.',
          promptUrdu: 'واٹس ایپ پر آرڈر کا بہاؤ بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📱 WhatsApp Interactive Order Flow\n\n**Customer:** "Salam, shoe price kya hai aur size 42 available hai?"\n\n**NexaBoost AI (0.8s):** "Walaikum Assalam! 👞✨ Ji bilkul, **Royal Oxford Black (Size 42)** stock me available hai!\n- **Price:** Rs. 4,850 (Free Delivery across Pakistan)\n- **Material:** 100% Genuine Full-Grain Leather\n\nKya aap Cash on Delivery par order confirm karna chahte hain?"\n\n**Customer:** "Haan Gulshan-e-Iqbal Karachi me bhejna hai."\n\n**NexaBoost AI (0.8s):** "Bohot shukriya! Please apna House #, Street aur Contact Number bhej dein taake parcel dispatch ho sake!"`,
        ur_nastaliq: `### 📱 واٹس ایپ لائیو چیٹ سیمولیشن (اردو)\n\n**گاہک:** "السلام علیکم! کیا یہ جوتا سائز ۴۲ میں مل جائے گا؟"\n\n**نیکسا بوسٹ AI (0.8 سیکنڈ میں):** "وعلیکم السلام! جی بالکل، سائز ۴۲ دستیاب ہے!\n- **قیمت:** ۴,۸۵۰ روپے (ڈلیوری بالکل مفت)\n- **گارنٹی:** ۱۰۰٪ اصلی چمڑا\n\nکیا آپ کیش آن ڈلیوری پر آرڈر کنفرم کرنا چاہتے ہیں؟"\n\n**گاہک:** "جی گلشن اقبال کراچی بھیج دیں۔"\n\n**نیکسا بوسٹ AI:** "شکریہ! برائے مہربانی اپنا گلی اور مکان نمبر شیئر فرمائیں۔"`,
        ur_roman: `Customer: "Salam, shoe size 42 available hai?"\nNexaBoost AI: "Walaikum Assalam! Ji bilkul, Rs. 4,850 me free delivery ke sath available hai. Cash on delivery par book karein?"`
      }
    },
    {
      id: 'interactive-menu-builder',
      name: 'Interactive Buttons & List Catalog Builder',
      nameUrdu: 'انٹرایکٹو بٹنز اور لسٹ مینیو ڈیزائنر',
      badge: 'Official API Ready',
      iconName: 'Zap',
      description: 'Builds compliant WhatsApp Interactive Button and Section List payloads for product catalogs and clinic menus.',
      descriptionUrdu: 'واٹس ایپ کے انٹرایکٹو بٹنز اور کیٹلاگ مینیو کی سیٹنگز تیار کرتا ہے۔',
      inputPlaceholder: 'Service options or product categories...',
      defaultPrompt: 'Design a rich WhatsApp button workflow for a medical clinic booking appointments across 3 specialties.',
      defaultPromptUrdu: 'کلینک کے لیے ڈاکٹر کی اپوائنٹمنٹ بک کرنے کا واٹس ایپ بٹن مینیو ڈیزائن کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Clinic Appointment Menu',
          titleUrdu: 'کلینک اپوائنٹمنٹ مینیو',
          prompt: 'Interactive WhatsApp clinic menu.',
          promptUrdu: 'کلینک مینیو بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 📲 WhatsApp Interactive Menu JSON Payload\n\n**Header:** "Welcome to Shifa Health Clinic 🏥"\n**Body:** "Please select a medical department to view available consultation slots:"\n\n**Action Buttons:**\n- [ 🦷 Dental & Orthodontics ]\n- [ 🩺 Dermatology & Skin ]\n- [ 👶 Pediatrics & Child Care ]\n\n**Footer:** "Reply '0' at any time to talk to a human receptionist."`,
        ur_nastaliq: `### 📲 واٹس ایپ بٹن مینیو (کلینک اپوائنٹمنٹ)\n\n**خوش آمدید شفاء ہیلتھ کلینک 🏥**\nبراہ کرم متعلقہ شعبے کا انتخاب فرمائیں:\n\n- [ 🦷 ڈینٹل و دانتوں کا علاج ]\n- [ 🩺 جلد و بالوں کے امراض ]\n- [ 👶 بچوں کے امراض کے ماہر ]\n\nانسانی نمائندے سے بات کرنے کے لیے کسی بھی وقت '0' لکھ کر بھیجیں۔`,
        ur_roman: `Welcome to Shifa Clinic! Choose department: [ Dental ] [ Dermatology ] [ Pediatrics ]. Or reply 0 to speak to staff.`
      }
    },
    {
      id: 'cart-abandonment-recovery',
      name: 'WhatsApp Abandoned Cart Auto-Recovery',
      nameUrdu: 'چھوڑی ہوئی شاپنگ کارٹس کی خودکار وصولی',
      badge: '4.8x Cart Lift',
      iconName: 'RefreshCw',
      description: 'Sends a gentle 15-minute post-abandonment WhatsApp reminder with product picture and 1-click checkout button.',
      descriptionUrdu: 'ویب سائٹ پر خریداری ادھوری چھوڑنے والے گاہک کو ۱۵ منٹ بعد واٹس ایپ پر ریمائنڈر بھیجتا ہے۔',
      inputPlaceholder: 'Abandoned product and customer cart details...',
      defaultPrompt: 'Draft an abandoned cart WhatsApp recovery sequence offering 5% off if completed in 30 minutes.',
      defaultPromptUrdu: 'ادھورے آرڈر کو مکمل کروانے کے لیے ۵٪ رعایت کے ساتھ واٹس ایپ میسج تیار کریں۔',
      parameters: [],
      quickTemplates: [
        {
          title: '15-Min Abandoned Cart Nudge',
          titleUrdu: '15 منٹ کارٹ ریمائنڈر',
          prompt: '15-min abandoned cart recovery note.',
          promptUrdu: 'کارٹ ریکوری میسج بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `"Salam Bilal! 🛒 We noticed you left the **Handcrafted Oxford Shoes (Size 42)** in your cart.\n\nWe saved your items! Complete your checkout within the next 30 minutes with coupon code **SAVE5** and get an extra **5% OFF + Free Delivery**:\n\n👉 [Complete Order in 1-Click]"`,
        ur_nastaliq: `"السلام علیکم بلال بھائی! 🛒 ہم نے دیکھا کہ آپ کی کارٹ میں **لیدر شوز (سائز ۴۲)** محفوظ ہیں۔\n\nاگر آپ اگلے ۳۰ منٹ میں اپنا آرڈر مکمل کرتے ہیں تو کوپن کوڈ **SAVE5** کے ساتھ **اضافی ۵٪ رعایت اور مفت ڈلیوری** حاصل کریں!\n\n👉 [ایک کلک میں آرڈر مکمل کریں]"`,
        ur_roman: `Salam Bilal bhai! Apka cart me item bacha hua hai. Agle 30 mins me checkout complete karein aur code SAVE5 se extra 5% OFF paayein!`
      }
    },
    {
      id: 'multi-agent-handoff-flow',
      name: 'Multi-Agent Smart Orchestrator & Handoff',
      nameUrdu: 'ایک ایجنٹ سے دوسرے ایجنٹ کو کیس ٹرانسفر',
      badge: 'Synchronized Hub',
      iconName: 'UserCheck',
      description: 'Transfers active conversations seamlessly (e.g. from Customer Support to Closer to Invoice Reminder) without dropping context.',
      descriptionUrdu: 'کسٹمر کی گفتگو کو متعلقہ ماہر ایجنٹ (مثلاً سپورٹ سے سیلز یا انوائسنگ) کی طرف منتقل کرتا ہے۔',
      inputPlaceholder: 'Source agent and target agent details...',
      defaultPrompt: 'Simulate how a support inquiry about broken tracking transitions seamlessly into an upselling Closer conversation.',
      defaultPromptUrdu: 'کسٹمر سپورٹ سے اپ سیلنگ سیلز ایجنٹ کی طرف بغیر کسی رکاوٹ کے منتقلی کا ڈیمو بنائیں۔',
      parameters: [],
      quickTemplates: [
        {
          title: 'Support to Upsell Handoff',
          titleUrdu: 'سپورٹ سے اپ سیلنگ',
          prompt: 'Support to Closer agent handoff.',
          promptUrdu: 'ایجنٹ ہینڈ آف ڈیمو بنائیں۔'
        }
      ],
      sampleExecutionResult: {
        en: `### 🔄 Multi-Agent Context Transfer\n\n1. **Customer Support Agent resolves issue:** "Your tracking issue is resolved! Parcel arrives at 3 PM today."\n2. **Context Handoff:** System passes VIP customer status & shoe preference to Closer Agent.\n3. **Closer Agent triggers:** "By the way, Bilal, since you love our Oxford shoes, we just launched a matching Italian leather belt with a 30% VIP bundle discount today. Would you like me to add it to your order?"`,
        ur_nastaliq: `### 🔄 ملٹی ایجنٹ ہم آہنگی (سپورٹ سے اپ سیلنگ)\n\n۱. **سپورٹ ایجنٹ:** "آپ کا مسئلہ حل ہو گیا ہے، پارسل آج ۳ بجے مل جائے گا۔"\n۲. **سیلز ایجنٹ فوری طور پر:** "بلال بھائی، چونکہ آپ نے ہمارے لیدر شوز پسند فرمائے ہیں، اس کے ساتھ میچنگ لیدر بیلٹ پر آج ۳۰٪ خصوصی ڈسکاؤنٹ ہے۔ کیا میں اسے بھی شامل کر دوں؟"`,
        ur_roman: `Support Agent resolves delivery query -> Closer Agent smoothly offers matching belt with 30% bundle discount in the same chat.`
      }
    }
  ]
};

