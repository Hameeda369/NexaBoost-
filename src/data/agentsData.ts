import { AgentSpec, PricingPlan, CaseStudy } from '../types';

export const ALL_14_AGENTS: AgentSpec[] = [
  {
    id: 'lead-gen',
    name: 'Lead Gen Agent',
    nameUrdu: 'لیڈ جنریشن ایجنٹ',
    title: 'Autonomous Multi-Channel Lead Prospector',
    department: 'sales',
    departmentLabel: 'Sales & Growth',
    tagline: 'Finds 100+ verified B2B/B2C leads daily matching your exact ICP',
    taglineUrdu: 'روزانہ 100 سے زائد تصدیق شدہ لیڈز آپ کے معیار کے مطابق تلاش کرے',
    badge: 'Top Performer',
    iconName: 'UserCheck',
    description: 'Scrapes, enriches, scores, and verifies decision-maker contact details across LinkedIn, Google Maps, local directories, and industry databases 24/7.',
    descriptionUrdu: 'لنکڈ اِن، گوگل میپس اور مقامی ڈائریکٹریز سے 24 گھنٹے فیصلہ سازوں کی تصدیق شدہ معلومات اور رابطے جمع کرتا ہے۔',
    capabilities: [
      'Pinpoint ICP targeting (Industry, revenue, city, decision-maker title)',
      'Verified corporate email + direct WhatsApp phone validation',
      'Automated intent scoring to prioritize warm buyers',
      'Instant CRM sync with HubSpot, GoHighLevel, Google Sheets'
    ],
    capabilitiesUrdu: [
      'مخصوص انڈسٹری، شہر اور عہدے کے مطابق درست ہدف بندی',
      'تصدیق شدہ ای میل اور براہ راست واٹس ایپ نمبرز کی جانچ',
      'گرم گاہکوں کی شناخت کے لیے اسکورنگ',
      'سی آر ایم اور گوگل شیٹس میں فوری ہم آہنگی'
    ],
    metrics: [
      { label: 'Daily Leads', value: '120+' },
      { label: 'Email Accuracy', value: '98.5%' },
      { label: 'Hours Saved/Wk', value: '25 hrs' }
    ],
    samplePrompts: [
      {
        title: 'Dubai Real Estate Investors',
        titleUrdu: 'دبئی رئیل اسٹیٹ سرمایہ کار',
        prompt: 'Find 5 high-intent B2B leads for commercial interior design services in Dubai with company size 20-100 and annual revenue over $2M.',
        promptUrdu: 'دبئی میں کمرشل انٹیریئر ڈیزائن سروسز کے لیے 5 اہم کمپنیوں کی فہرست بنائیں جن کی سالانہ آمدنی 2 ملین ڈالر سے زیادہ ہو۔'
      },
      {
        title: 'Pakistan E-commerce Brands',
        titleUrdu: 'پاکستانی ای کامرس برانڈز',
        prompt: 'Identify top 5 fast-growing apparel e-commerce brands in Pakistan needing digital marketing & logistics automation.',
        promptUrdu: 'پاکستان میں تیزی سے بڑھتے ہوئے 5 فیشن اور کلاتھنگ برانڈز کے لیے لیڈ پروفائل اور پیشکش کی تجاویز بنائیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🎯 Qualified Leads Batch #409 (Target: Dubai Commercial Fit-out)\n\n1. **Aura Horizon Developments**\n   - **Decision Maker:** Tariq Mansoor (Head of Procurement & Expansion)\n   - **Contact:** tariq.m@aurahorizon.ae | WhatsApp: +971 50 *** 4120\n   - **Intent Signal:** Recently leased 14,000 sq ft office in Business Bay, actively searching for turnkey architectural solutions.\n   - **Lead Score:** 94/100 (High Readiness)\n\n2. **Vertex Global Logistics ME**\n   - **Decision Maker:** Sarah Al-Hashimi (VP Operations)\n   - **Contact:** s.hashimi@vertexgl.com | WhatsApp: +971 52 *** 8831\n   - **Intent Signal:** Announced warehouse & executive suite modernization Q3 budget ($450k).\n   - **Lead Score:** 91/100 (High Budget)`,
      ur_nastaliq: `### 🎯 تصدیق شدہ لیڈز کی رپورٹ (دبئی مارکیٹ)\n\n1. **اورا ہورائزن ڈیولپمنٹس**\n   - **فیصلہ ساز:** طارق منصور (ہیڈ آف پروکیورمنٹ)\n   - **رابطہ:** tariq.m@aurahorizon.ae | واٹس ایپ: +971 50 *** 4120\n   - **ضرورت:** بزنس بے میں 14,000 مربع فٹ نئے دفتر کے لیے ڈیزائننگ سروسز درکار ہیں۔\n   - **لیڈ اسکور:** 94/100 (فوری خریدار)`,
      ur_roman: `### 🎯 Verified Leads Report (Dubai Market)\n\n1. **Aura Horizon Developments**\n   - Decision Maker: Tariq Mansoor (Head of Procurement)\n   - Contact: tariq.m@aurahorizon.ae | WA: +971 50 *** 4120\n   - Status: Business Bay me new 14,000 sqft office renovate kar rahe hain.\n   - Lead Score: 94/100 (High Intent)`
    }
  },
  {
    id: 'outreach',
    name: 'Outreach Agent',
    nameUrdu: 'آؤٹ ریچ ایجنٹ',
    title: 'Hyper-Personalized Multi-Channel Prospecting',
    department: 'sales',
    departmentLabel: 'Sales & Growth',
    tagline: 'Crafts bespoke cold emails and WhatsApp messages that feel 100% human',
    taglineUrdu: 'ہر کلائنٹ کے لیے پرسنلائزڈ ای میلز اور واٹس ایپ پیغامات خودکار انداز میں بھیجے',
    badge: 'High Reply Rate',
    iconName: 'Send',
    description: 'Researches each prospect company, finds personal common ground, and executes tailored outreach sequences via Email, LinkedIn, and WhatsApp without spam triggers.',
    descriptionUrdu: 'ہر کمپنی اور کلائنٹ کی مکمل تحقیق کر کے دل کو چھو لینے والے پیغامات تیار کرتا ہے جن سے 40%+ جوابی شرح حاصل ہوتی ہے۔',
    capabilities: [
      'Prospect specific contextual icebreakers (recent news, LinkedIn posts)',
      'A/B testing subject lines and value hooks automatically',
      'Dual-channel coordination (Email + gentle WhatsApp nudge)',
      'Multi-language fluency (English, Urdu, Arabic)'
    ],
    capabilitiesUrdu: [
      'ہر گاہک کے لیے منفرد تعارفی جملے اور ویلیو پروپوزیشن',
      'مختلف پیغامات کی خودکار جانچ (A/B Testing)',
      'ای میل اور واٹس ایپ پر متوازن گفتگو',
      'اردو، انگریزی اور عربی زبان میں مہارت'
    ],
    metrics: [
      { label: 'Avg Open Rate', value: '68.4%' },
      { label: 'Reply Rate', value: '38.2%' },
      { label: 'Daily Outreaches', value: '350+' }
    ],
    samplePrompts: [
      {
        title: 'B2B Software Cold Email',
        titleUrdu: 'بی ٹو بی سافٹ ویئر کولڈ ای میل',
        prompt: 'Draft a short, high-converting cold email pitch for a marketing agency CEO named Farhan whose agency just hit 15 team members.',
        promptUrdu: 'ایک ڈیجیٹل ایجنسی کے بانی فرحان کے لیے موثر ای میل ڈرافٹ کریں جس میں ہمارے کسٹمر سپورٹ AI ایجنٹ کی پیشکش ہو۔'
      },
      {
        title: 'WhatsApp VIP Nudge (Urdu)',
        titleUrdu: 'واٹس ایپ پر پیشکش (اردو)',
        prompt: 'Write a warm, respectful WhatsApp outreach in Roman Urdu and Urdu script to an online boutique owner offering a 3x increase in catalog sales.',
        promptUrdu: 'آن لائن کپڑوں کے برانڈ کے مالک کے لیے اردو میں ایک شائستہ اور پرکشش واٹس ایپ پیغام تحریر کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `**Subject:** quick question regarding Farhan's team expansion at NextScale\n\nHi Farhan,\n\nNoticed NextScale just welcomed 4 new account managers this month — huge congratulations on the momentum!\n\nAs your client roster grows past 20+ active accounts, client reporting and ad monitoring usually turns into a weekend nightmare for your seniors.\n\nWe built a 24/7 AI Reporting & Client Comms Agent for agencies like yours that drafts Monday performance summaries directly into WhatsApp groups with zero manual hours.\n\nWould you be open to a 4-minute demo this Thursday at 3 PM to see if this could save your team 15 hours weekly?\n\nBest,\n**NexaBoost Growth Team**`,
      ur_nastaliq: `السلام علیکم فرحان بھائی،\n\nنیکسٹ اسکیل کی حالیہ توسیع اور نئی ٹیم ہائرنگ پر دلی مبارکباد!\n\nہم نے ایجنسیز کے لیے ایک جدید AI سسٹم تیار کیا ہے جو کلائنٹس کی رپورٹنگ اور 24/7 واٹس ایپ کسٹمر سپورٹ کو خودکار بنا دیتا ہے، جس سے آپ کے سینئر مینیجرز کا ہفتہ وار 15 گھنٹے کا وقت بچتا ہے۔\n\nکیا ہم اس جمعرات کو صرف 5 منٹ کا کوئیک ڈیمو شیڈول کر سکتے ہیں تاکہ آپ اس کا لائیو رزلٹ دیکھ سکیں؟\n\nنیک تمناؤں کے ساتھ،\n**نیکسا بوسٹ ٹیم**`,
      ur_roman: `Salam Farhan bhai,\n\nNextScale ki nayi team hiring aur growth dekh kar bohot khushi hui!\n\nJab clients barhte hain toh reporting aur customer queries handle karna team k liye challenging ho jata hai. NexaBoost ka AI Agent apke clients ko 24/7 instant updates deta hai aur team k 15+ hours bachta hai.\n\nKya is Thursday ko 5-minute quick live demo schedule kar lein?`
    }
  },
  {
    id: 'closer',
    name: 'Closer Agent',
    nameUrdu: 'ڈیل کلوزر ایجنٹ',
    title: 'Objection-Handling & Deal Finalization Engine',
    department: 'sales',
    departmentLabel: 'Sales & Growth',
    tagline: 'Turns interested prospects into paid clients by removing friction & booking calls',
    taglineUrdu: 'گاہکوں کے اعتراضات حل کر کے ڈیلز فائنل کرے اور ادائیگی کے لنکس فراہم کرے',
    badge: 'Revenue Driver',
    iconName: 'Award',
    description: 'Handles pricing objections, sends custom video proposals, negotiates terms within your preset bounds, and syncs directly with payment gateways & Calendly.',
    descriptionUrdu: 'قیمت کے حوالے سے گاہکوں کے تمام سوالات کے قائل کن جوابات دیتا ہے، معاہدے تیار کرتا ہے اور ڈیل لاک کرتا ہے۔',
    capabilities: [
      'Real-time objection reframing (Price, Timing, Competitor comparison)',
      'Automated quote calculation and dynamic PDF contract generation',
      'One-click WhatsApp checkout link delivery',
      'Calendly & Google Calendar automatic slot booking'
    ],
    capabilitiesUrdu: [
      'قیمت اور وقت سے متعلق خدشات کا تسلی بخش حل',
      'خودکار کوٹیشن اور معاہدے کی فوری تیاری',
      'واٹس ایپ پر فوری ادائیگی کے لنکس بھیجنا',
      'کیلنڈر پر میٹنگز کا خودکار شیڈول'
    ],
    metrics: [
      { label: 'Close Rate Lift', value: '+42%' },
      { label: 'Booking Speed', value: '< 90 sec' },
      { label: 'Objections Solved', value: '91.8%' }
    ],
    samplePrompts: [
      {
        title: 'Overcome "Too Expensive" Objection',
        titleUrdu: 'مہنگا ہونے کے اعتراض کا حل',
        prompt: 'A client says: "Your $1,500/mo setup is out of our budget right now." Handle this objection professionally focusing on ROI & human salary comparison.',
        promptUrdu: 'اگر کلائنٹ کہے کہ یہ ہماری پہنچ سے باہر ہے، تو اس کو ROI اور ملازمین کی تنخواہ سے موازنہ کر کے قائل کرنے والا جواب بنائیں۔'
      },
      {
        title: 'Urdu Deal Finalization Pitch',
        titleUrdu: 'ڈیل فائنلائزیشن (اردو)',
        prompt: 'Create an assertive yet polite closing script for an e-commerce brand deciding between NexaBoost AI Hub and hiring 2 call center reps.',
        promptUrdu: 'آن لائن اسٹور کے مالک کے لیے کال سینٹر کے مقابلے میں AI ایجنٹس کے فوائد بتا کر ڈیل کلوز کرنے والا میسج ڈرافٹ کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 💼 Closer Response Matrix (Objection: "Price is too high")\n\n"I completely understand budget caution, Zahid. Let's look at the actual math:\n\nTo handle 24/7 lead generation, follow-ups, and customer calls with humans, you would need at least **2 full-time staff** ($800–$1,200/mo each + taxes, training, sick leaves, and 8-hour shift limits).\n\nWith NexaBoost's 14 AI Agents pod at $1,500/mo:\n- ✅ **24/7/365 coverage** across English and Urdu with zero delays\n- ✅ **100+ new verified leads** fed directly into your WhatsApp daily\n- ✅ Average payback period across our clients is **18 days** with just 2 closed deals.\n\nCan we start with a risk-free 14-day pilot so the system pays for itself before month-end? Let's book your onboarding call here: [Calendly Link]"`,
      ur_nastaliq: `### 💼 ڈیل کلوزر جواب (اعتراض: بجٹ کا مسئلہ)\n\n"زاہد بھائی، آپ کی بات بالکل درست ہے کہ بجٹ اہم ہے۔ لیکن ذرا اس حساب پر غور فرمائیں:\n\nاگر آپ 24 گھنٹے گاہکوں کو جواب دینے کے لیے 2 بندے بھی رکھیں تو ماہانہ کم از کم 1 لاکھ روپے تنخواہ، چھٹیاں اور مانیٹرنگ کا وقت درکار ہوتا ہے۔\n\nجبکہ ہمارا AI ایجنٹ بغیر کسی وقفے کے ہر لمحہ الرٹ رہتا ہے اور پہلے ہی مہینے 3 گنا زیادہ آرڈرز لا کر اپنی فیس سے کئی گنا زیادہ کما کر دیتا ہے۔\n\nکیا ہم 14 دن کے آزمائشی پائلٹ سے آغاز کریں؟"`,
      ur_roman: `### 💼 Closer Response (Budget Objection)\n\n"Zahid bhai, budget ka khayal rakhna bilkul zaroori hai. Lekin agar aap 2 call center agents bhi rakhein toh salary + training + night shifts ka issue rehta hai.\n\nNexaBoost AI 24/7 active rehta hai, Urdu + English dono me seconds me deals lock karta hai aur pehle 15 din me hi system ki cost recover ho jati hai. Chalein 14 days pilot run kar k dekh letay hain?"`
    }
  },
  {
    id: 'follow-up',
    name: 'Follow-up Agent',
    nameUrdu: 'فالو اپ ایجنٹ',
    title: 'Persistent 24/7 Multi-Touch Nurturing',
    department: 'sales',
    departmentLabel: 'Sales & Growth',
    tagline: 'Never lets a warm lead go cold with contextual, polite automated touchpoints',
    taglineUrdu: 'کوئی بھی گاہک ضائع نہ ہونے دے، وقت پر خودکار اور شائستہ یاد دہانی کرائے',
    badge: 'Zero Cold Leads',
    iconName: 'RefreshCw',
    description: 'Tracks customer micro-actions, email opens, and WhatsApp reads. Sends personalized value nuggets, case studies, and gentle check-ins over 30 days automatically.',
    descriptionUrdu: 'گاہک کی سرگرمیوں کو مانیٹر کرتا ہے اور مناسب وقفوں سے فائدہ مند تجاویز اور فالو اپ میسجز بھیجتا رہتا ہے۔',
    capabilities: [
      'Smart cadence (Day 1, Day 3, Day 7, Day 14, Day 28)',
      'Content-led value drops instead of boring "just checking in" spam',
      'Immediate alert to human reps when a dormant lead replies',
      'Automatic snooze if lead specifies a later date'
    ],
    capabilitiesUrdu: [
      'مناسب شیڈول کے مطابق میسجز (پہلا، تیسرا، ساتواں دن)',
      'بورنگ پیغامات کے بجائے قیمتی معلومات اور کیس اسٹڈیز کی فراہمی',
      'جیسے ہی پرانا کلائنٹ جواب دے، فوری مطلع کرنا',
      'کلائنٹ کی دی گئی تاریخ پر خودکار ریمائنڈر'
    ],
    metrics: [
      { label: 'Revived Leads', value: '34.7%' },
      { label: 'Follow-up Cadence', value: '100% On-Time' },
      { label: 'Pipeline Leakage', value: '-80%' }
    ],
    samplePrompts: [
      {
        title: 'Day 3 WhatsApp Touchpoint',
        titleUrdu: 'تیسرے دن کا واٹس ایپ فالو اپ',
        prompt: 'Generate a Day 3 WhatsApp follow-up for a salon owner who saw our pricing proposal but stopped replying.',
        promptUrdu: 'ایک بیوٹی پارلر اونر کے لیے تیسرے دن کا شائستہ فالو اپ لکھیں جنہوں نے آفر دیکھی تھی مگر جواب نہیں دیا۔'
      },
      {
        title: 'Revive 30-Day Dormant Lead',
        titleUrdu: 'پرانے کلائنٹ کو دوبارہ متحرک کرنا',
        prompt: 'Draft an engaging email that shares a new 300% ROI case study with a client who ghosted us last month.',
        promptUrdu: 'ایک ایسے بزنس اونر کے لیے ای میل تیار کریں جس نے پچھلے مہینے بات چیت ادھوری چھوڑ دی تھی۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🔁 Smart Follow-Up Cadence #3 (Value Drop)\n\n"Hey Bilal,\n\nI know how hectic running a 3-location clinic can get, so no worries at all on the delayed reply!\n\nJust wanted to share a quick 1-page breakdown of how **Al-Shifa Wellness** automated their WhatsApp patient booking last month and cut no-shows by 62% without changing their reception staff.\n\nAttaching the 60-second summary here [PDF Link]. Thought it might spark an idea for your Gulberg branch.\n\nShall I send over the 3 quick fixes they used?"`,
      ur_nastaliq: `### 🔁 خودکار فالو اپ میسج (تیسرا دن)\n\n"السلام علیکم بلال بھائی،\n\nامید ہے آپ خیریت سے ہوں گے۔ میں سمجھ سکتا ہوں کہ کلینک کی مصروفیات میں وقت نکالنا مشکل ہوتا ہے۔\n\nصرف آپ کے ساتھ ایک چھوٹی سی کیس اسٹڈی شیئر کرنی تھی کہ کیسے ایک کلینک نے واٹس ایپ AI ریمائنڈرز کے ذریعے مریضوں کے وقت ضائع کرنے کا مسئلہ 62 فیصد تک کم کر دیا۔\n\nکیا میں آپ کو اس کی 2 منٹ کی مختصر تفصیل بھیج دوں؟"`,
      ur_roman: `### 🔁 Smart WhatsApp Follow-up\n\n"Salam Bilal bhai, umeed hai aap khairiyat se honge. Clinic ke busy schedule me time nikalna mushkil hota hai, completely understandable!\n\nBas apke sath ek short case study share karni thi k kaise ek clinic ne NexaBoost WhatsApp AI laga kar appointments me 62% no-show drop kiya. Kya apko iski 1-minute video summary share karun?"`
    }
  },
  {
    id: 'content',
    name: 'Content & Copywriting Agent',
    nameUrdu: 'کنٹنٹ و کاپی رائٹنگ ایجنٹ',
    title: 'Bilingual Viral Authority & SEO Content Engine',
    department: 'marketing',
    departmentLabel: 'Marketing & Content',
    tagline: 'Produces high-converting Urdu + English social posts, LinkedIn threads & SEO blogs',
    taglineUrdu: 'اردو اور انگلش میں دلکش سوشل میڈیا پوسٹس، بلاگز اور کاپی رائٹنگ تیار کرے',
    badge: 'Bilingual Mastery',
    iconName: 'PenTool',
    description: 'Writes brand-aligned, emotionally resonant content in native English and authentic Urdu (Nastaliq & Roman Urdu) optimized for viral engagement and Google ranking.',
    descriptionUrdu: 'انسٹاگرام، فیس بک، لنکڈ اِن اور بلاگز کے لیے ایسا مواد تیار کرتا ہے جو سیدھا گاہک کے دل پر اثر کرے اور سیلز لائے۔',
    capabilities: [
      'Flawless Urdu script (نستعلیق) and Roman Urdu conversational copywriting',
      'LinkedIn authority carousels, hooks, and thought-leadership essays',
      'High-ranking SEO blog posts with structured schema markup',
      'Direct-response ad copy using PAS, AIDA, and StoryBrand frameworks'
    ],
    capabilitiesUrdu: [
      'مستند اردو رسم الخط اور رومن اردو میں پرکشش تحریریں',
      'لنکڈ اِن اور فیس بک کے لیے وائرل پوسٹس اور ہکس',
      'گوگل سرچ میں ٹاپ رینکنگ کے لیے مکمل ایس ای او بلاگز',
      'سیلز بڑھانے والے فارمولوں کے مطابق اشتہارات کی کاپی'
    ],
    metrics: [
      { label: 'Weekly Posts', value: '28+ Assets' },
      { label: 'Viral Hook Score', value: '96/100' },
      { label: 'Languages', value: 'Urdu + English' }
    ],
    samplePrompts: [
      {
        title: 'LinkedIn Thought Leadership',
        titleUrdu: 'لنکڈ اِن بزنس پوسٹ',
        prompt: 'Write a viral LinkedIn hook and carousel script on why traditional agencies will lose 70% of their business to AI agent hubs by 2027.',
        promptUrdu: 'لنکڈ اِن پر ایک فکر انگیز اور وائرل پوسٹ لکھیں کہ کیسے روایتی ایجنسیز کے مقابلے میں AI ایجنٹس تیزی سے مارکیٹ جیت رہے ہیں۔'
      },
      {
        title: 'Bilingual Facebook Ad Copy (Urdu + Eng)',
        titleUrdu: 'فیس بک اشتہار کی کاپی (اردو)',
        prompt: 'Write a high-converting Facebook ad copy for a Lahore luxury furniture showroom announcing their Eid Pre-order launch.',
        promptUrdu: 'لاہور کے فرنیچر شوروم کے لیے عید سیل کا ایک دلکش اور پرکشش فیس بک ایڈ ڈرافٹ کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🚀 Viral LinkedIn Post Draft\n\n**Hook:** Most CEOs think AI is about writing emails faster. The top 1% know AI is about building an autonomous workforce that never sleeps.\n\nHere is what happens when you replace 5 fragmented SaaS tools with 1 synchronized Agent Hub:\n\n1. **Lead generation shifts from manual hunting to inbound compounding.**\n2. **Response time drops from 4 hours to 8 seconds.** (Speed to lead is 78% of the sale).\n3. **Your overhead drops by $40k/year per department.**\n\nStop buying tools. Start deploying agents.\n\n👇 Drop "AGENT" below and I'll DM our 14-agent blueprint.`,
      ur_nastaliq: `### 💎 عید پری آرڈر فیس بک ایڈ کاپی (اردو)\n\nکیا آپ کا گھر اس عید پر ایک شاہانہ اور پروقار روپ کے لیے تیار ہے؟ ✨\n\n**شاندار لگژری فرنیچر کلیکشن ۲۰۲۶ اب دستیاب ہے!**\n\nہاتھ کی روایتی کاریگری اور جدید اطالوی ڈیزائن کا بے مثال امتزاج۔ محدود ایڈیشن صوفہ سیٹس اور ڈائننگ ٹیبلز پر خصوصی ۲۰٪ پری بکنگ رعایت۔\n\n✨ لائف ٹائم لکڑی کی وارنٹی\n✨ مفت ہوم ڈلیوری اور فٹنگ\n\n👉 ابھی واٹس ایپ پر کیٹلاگ حاصل کریں یا ہمارے گلبرگ شوروم کا رخ کریں۔`,
      ur_roman: `### 💎 Eid Pre-Order Ad Copy\n\nKya apka ghar is Eid par naye aur shaandar andaz k liye tayar hai? ✨\n\nRoyal Furniture Collection 2026 ab live hai! Classic wood carving aur modern Italian finish ka behtareen combination.\n\n- Flat 20% discount on Eid Pre-Orders\n- Lifetime Wood Warranty\n- Free delivery across Lahore, Karachi & Islamabad\n\nAbhi WhatsApp par "CATALOG" likh kar bheinjen!`
    }
  },
  {
    id: 'video-script',
    name: 'Video & Script Agent',
    nameUrdu: 'ویڈیو و اسکرپٹ ایجنٹ',
    title: 'Viral Short-Form TikTok & Reels Director',
    department: 'marketing',
    departmentLabel: 'Marketing & Content',
    tagline: 'Creates TikTok, IG Reels & YouTube Shorts scripts with hooks & visual cues',
    taglineUrdu: 'ٹک ٹاک، ریلز اور یوٹیوب شارٹس کے لیے وائرل اسکرپٹس اور ویژول آئیڈیاز تیار کرے',
    badge: 'Trend Setter',
    iconName: 'Video',
    description: 'Generates 3-second retention hooks, frame-by-frame visual directions, on-screen text overlays, and audio recommendations designed for algorithm dominance.',
    descriptionUrdu: 'پہلے 3 سیکنڈ میں ناظرین کی توجہ کھینچنے والے ویڈیو اسکرپٹس اور ایڈیٹنگ کی رہنمائی فراہم کرتا ہے۔',
    capabilities: [
      'Pattern interrupt hooks (Visual + Verbal + Text overlay)',
      'B-roll shot lists and caption placement timestamps',
      'Urdu/English voiceover scripts with emotional inflection marks',
      'Trending audio matching for Instagram Reels and TikTok'
    ],
    capabilitiesUrdu: [
      'پہلے ۳ سیکنڈز میں وائرل ہک تکنیک کا استعمال',
      'شارٹ بائے شارٹ ویڈیو اور بی رول کی مکمل تفصیل',
      'اردو اور انگریزی میں جاندار وائس اوور اسکرپٹس',
      'ٹرینڈنگ آڈیو اور کیپشنز کا انتخاب'
    ],
    metrics: [
      { label: 'Avg Retention Lift', value: '+54%' },
      { label: 'Scripts/Minute', value: 'Instant' },
      { label: 'Hook Formats', value: '50+ Archetypes' }
    ],
    samplePrompts: [
      {
        title: '30s TikTok for Real Estate',
        titleUrdu: 'رئیل اسٹیٹ ٹک ٹاک اسکرپٹ',
        prompt: 'Create a 30-second TikTok script for a luxury apartment tour in Islamabad with a killer pattern-interrupt hook and visual cues.',
        promptUrdu: 'اسلام آباد میں لگژری اپارٹمنٹس کے لیے 30 سیکنڈ کا ٹک ٹاک اسکرپٹ بنائیں جس میں ویڈیو ڈائریکشنز بھی ہوں۔'
      },
      {
        title: 'Urdu E-Commerce Unboxing Hook',
        titleUrdu: 'ان باکسنگ ویڈیو ہک (اردو)',
        prompt: 'Write an exciting 20-second Reel script in Urdu for a noise-canceling earbuds brand showing extreme battery endurance.',
        promptUrdu: 'وائرلیس ایئربڈز کے لیے ایک وائرل 20 سیکنڈ ریل اسکرپٹ لکھیں جو فوراً گاہک کو خریدنے پر مجبور کرے۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🎬 TikTok/Reel Script: "The $100k Apartment Secret"\n\n**[00:00 - 00:03] Pattern Interrupt Hook:**\n- **Visual:** Fast zoom into a balcony view of Margalla Hills, then snap cut to the host holding keys.\n- **On-Screen Text:** "Never buy an apartment in F-11 until you check this..."\n- **Voiceover:** "Stop! If you have $100k and are looking at standard apartments in Islamabad, you are losing 25% ROI right now."\n\n**[00:03 - 00:15] The Reveal & Tour:**\n- **Visual:** 0.5x ultra-wide pan of Italian marble kitchen & smart home control panel.\n- **Voiceover:** "This new high-rise gives you automated rental yields deposited into your account every 1st of the month, fully managed."\n\n**[00:15 - 00:25] Social Proof & Scarcity:**\n- **Visual:** Floor plan graphics + rooftop infinity pool b-roll.\n- **Voiceover:** "Only 4 corner units left with full mountain views."\n\n**[00:25 - 00:30] CTA:**\n- **Visual:** Host points down to link in bio sticker.\n- **Voiceover:** "Comment 'VIEW' and I'll send the full brochure and pricing sheet directly to your WhatsApp."`,
      ur_nastaliq: `### 🎬 ٹک ٹاک/ریل اسکرپٹ: "وائرلیس ایئربڈز ٹیسٹ"\n\n**[00:00 - 00:03] ہک:**\n- **ویژول:** ہاتھ سے ایئربڈز کو پانی کے گلاس میں ڈال کر نکالتے ہوئے دکھائیں۔\n- **اسکرین ٹیکسٹ:** "کیا یہ پانی میں زندہ بچے گا؟ 😱"\n- **وائس اوور:** "اگر آپ بھی روزانہ ایئربڈز چارج کر کر کے تنگ آ چکے ہیں، تو یہ دیکھیں۔"\n\n**[00:03 - 00:15] ٹیسٹ اور کوالٹی:**\n- **ویژول:** بائیک چلاتے ہوئے اور تیز ہوا میں کرسٹل کلیئر کال کا لائیو ساؤنڈ۔\n- **وائس اوور:** "مسلسل 60 گھنٹے کی بیٹری، زبردست باس اور ایکٹیو نوائز کینسلیشن۔"\n\n**[00:15 - 00:20] آفر اور سی ٹی اے:**\n- **ویژول:** کیش آن ڈلیوری کا باکس اور پیکنگ۔\n- **وائس اوور:** "آج ہی پورے پاکستان میں کیش آن ڈلیوری پر منگوانے کے لیے نیچے دیے گئے بٹن پر کلک کریں!"`,
      ur_roman: `### 🎬 TikTok/Reel Script: "Wireless Earbuds"\n\n[00:00-00:03] Hook: Earbuds ko paani me dip karke dikhayein. Text: "Waterproof Test!" VO: "Agar apke earbuds ki battery 3 ghante me khatam ho jati hai toh yeh video lazmi dekhein."\n[00:03-00:15] Body: 60 hours battery backup, crystal clear calling in heavy traffic.\n[00:15-00:20] CTA: Cash on Delivery available all over Pakistan. Order now!`
    }
  },
  {
    id: 'customer-support',
    name: 'Customer Support Agent',
    nameUrdu: 'کسٹمر سپورٹ ایجنٹ',
    title: '24/7 Multilingual Empathetic Support Engine',
    department: 'operations',
    departmentLabel: 'Operations & Support',
    tagline: 'Instant 24/7 multilingual ticket resolution with human-level empathy & accuracy',
    taglineUrdu: 'گاہکوں کے ہر سوال کا 5 سیکنڈ میں شائستہ اور درست حل 24 گھنٹے فراہم کرے',
    badge: '99.4% CSAT',
    iconName: 'Headphones',
    description: 'Handles order tracking, returns, technical troubleshooting, FAQs, and refunds in English, Urdu, and Arabic with seamless human escalation when needed.',
    descriptionUrdu: 'آرڈر ٹریکنگ، شکایات کا ازالہ، ریفنڈ اور معلومات کے لیے 24 گھنٹے متحرک کسٹمر کیئر۔',
    capabilities: [
      'Sub-5 second reply speed 24 hours a day, 365 days a year',
      'Integration with Shopify, WooCommerce, Trax, TCS, Leopard logistics',
      'Sentiment analysis to de-escalate upset customers instantly',
      'Smart human handoff when complex edge-cases occur'
    ],
    capabilitiesUrdu: [
      'دن رات کسی بھی وقت 5 سیکنڈ کے اندر فوری جواب',
      'شاپائفائی، کوریئر سروسز (TCS, Trax) سے لائیو ٹریکنگ',
      'ناراض گاہکوں کے ساتھ نہایت شائستہ اور ہمدردانہ انداز',
      'ضرورت پڑنے پر فوری انسانی نمائندے کو کیس ٹرانسفر کرنا'
    ],
    metrics: [
      { label: 'Avg First Response', value: '4.2 sec' },
      { label: 'Resolution Rate', value: '88.3%' },
      { label: 'CSAT Score', value: '4.9 / 5.0' }
    ],
    samplePrompts: [
      {
        title: 'Delayed Courier Order Query',
        titleUrdu: 'لیٹ آرڈر کی شکایت کا حل',
        prompt: 'A customer is angry that their order #9821 is delayed by 3 days. Provide an empathetic resolution in Urdu and English with a 10% coupon.',
        promptUrdu: 'ایک ناراض کلائنٹ جس کا پارسل لیٹ ہو گیا ہے، اس کے لیے انتہائی ہمدردانہ اور مطمئن کرنے والا جواب تیار کریں۔'
      },
      {
        title: 'B2B Software Technical FAQ',
        titleUrdu: 'تکنیکی سوالات کا فوری حل',
        prompt: 'Answer how to connect an existing WhatsApp Business number to the NexaBoost dashboard without losing chat history.',
        promptUrdu: 'واٹس ایپ بزنس نمبر کو سسٹم سے جوڑنے کے آسان اور واضح مراحل سمجھائیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🎧 Customer Support Live Resolution\n\n**Agent:** "Hi Zainab! I completely understand your frustration regarding Order #9821 — waiting when you expected it earlier is truly disappointing.\n\nI just checked directly with the TCS courier dispatch team in Lahore: your parcel is on the delivery van right now with Rider Asif (Tracking # TCS-892140). It will arrive at your address before 4:00 PM today.\n\nBecause of the inconvenience, I have credited **10% OFF** to your account automatically for your next order with coupon code **SORRYFORWAIT10**.\n\nWould you like me to ping you on WhatsApp the moment the rider reaches your street?"`,
      ur_nastaliq: `### 🎧 کسٹمر سپورٹ کا لائیو جواب (اردو)\n\n"السلام علیکم زینب بہن! آپ کی پریشانی بالکل قابلِ فہم ہے اور پارسل میں تاخیر کے لیے ہم معذرت خواہ ہیں۔\n\nمیں نے فوری طور پر کوریئر ٹیم سے رابطہ کیا ہے، آپ کا پارسل اس وقت ڈیلیوری رائیڈر کے پاس ہے اور آج شام 4 بجے سے پہلے آپ کی دہلیز پر پہنچا دیا جائے گا۔\n\nتاخیر کی تلافی کے طور پر ہم نے آپ کے اگلے آرڈر کے لیے ۱۰٪ رعایت کا خصوصی کوپن **EIDGIFT10** فعال کر دیا ہے۔\n\nاگر کوئی اور سوال ہو تو میں ہمہ وقت حاضر ہوں!"`,
      ur_roman: `### 🎧 Support Resolution\n\n"Salam Zainab baji! Parcel me delay k liye dil se maazrat. Maine TCS logistics team se abhi check kiya hai, apka parcel ride par hai aur aaj 4 PM se pehle apko deliver ho jayega.\n\nApki asani k liye humne agle order par 10% discount code SORRY10 add kar diya hai. Jaise hi rider pohanchega hum apko update bhej denge!"`
    }
  },
  {
    id: 'seo-competitor',
    name: 'SEO & Competitor Spy Agent',
    nameUrdu: 'ایس ای او و حریف تجزیہ ایجنٹ',
    title: 'Rank Dominance & Competitor Intelligence Engine',
    department: 'marketing',
    departmentLabel: 'Marketing & Content',
    tagline: 'Discovers competitor keyword gaps, backlinks & on-page SEO opportunities',
    taglineUrdu: 'مارکیٹ کے حریفوں کی کمزوریاں ڈھونڈے اور گوگل کے پہلے صفحے پر رینکنگ لائے',
    badge: 'Page #1 Rankings',
    iconName: 'Search',
    description: 'Reverse-engineers what keywords your competitors are ranking for, detects high-volume low-competition content gaps, and produces complete SEO audits.',
    descriptionUrdu: 'گوگل میں سب سے اوپر آنے کے لیے کی ورڈز تلاش کرتا ہے اور حریفوں کی حکمتِ عملی کا مکمل تجزیہ کرتا ہے۔',
    capabilities: [
      'Competitor keyword gap extraction and SERP volatility tracking',
      'Full technical on-page SEO audit (H1-H4, Schema, meta tags, Core Web Vitals)',
      'High-intent commercial query mapping (local & international)',
      'Automated programmatic SEO content outlines'
    ],
    capabilitiesUrdu: [
      'حریفوں کے اہم کی ورڈز اور بیک لنکس کی مکمل کھوج',
      'ویب سائٹ کے تکنیکی نقائص اور میٹا ٹیگز کی اصلاح',
      'مقامی اور بین الاقوامی خریداروں کے سرچ کی ورڈز کا نقشہ',
      'ایس ای او بلاگز اور پیجز کی تفصیلی آؤٹ لائن'
    ],
    metrics: [
      { label: 'Organic Traffic Lift', value: '+210%' },
      { label: 'Keyword Gaps Found', value: '350+' },
      { label: 'Audit Speed', value: '< 60 sec' }
    ],
    samplePrompts: [
      {
        title: 'Competitor Keyword Gap Analysis',
        titleUrdu: 'حریفوں کے کی ورڈز کا تجزیہ',
        prompt: 'Analyze keyword gaps for an online organic skincare brand in UAE competing against established international brands.',
        promptUrdu: 'یو اے ای میں آرگینک اسکن کیئر برانڈ کے لیے ایسے کی ورڈز تلاش کریں جن پر آسانی سے رینک کیا جا سکے۔'
      },
      {
        title: 'Local SEO Plan for Dental Clinic',
        titleUrdu: 'لوکل ایس ای او پلان',
        prompt: 'Create a localized Google Business Profile and keyword optimization blueprint for an orthodontic clinic in Islamabad.',
        promptUrdu: 'اسلام آباد میں ڈینٹل کلینک کے لیے گوگل میپس اور لوکل سرچ میں نمبر 1 پر آنے کا جامع پلان بنائیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🔍 Competitor Gap & High-Intent Keyword Matrix\n\n**Niche:** UAE Organic Skincare & Clean Beauty\n\n| High-Intent Keyword | Monthly Vol | Difficulty | Opportunity Angle |\n|---|---|---|---|\n| "halal certified sunscreen dubai" | 4,200 | Low (24/100) | Zero top competitors have a dedicated landing page for Halal certification. |\n| "organic acne serum abu dhabi delivery" | 2,800 | Very Low (18/100) | Direct commercial intent with same-day delivery query. |\n| "fragrance free moisturizer uae summer" | 5,100 | Medium (38/100) | Huge seasonal spike between April–October. |\n\n**Immediate Action Plan:**\n1. Launch 3 localized pillar pages addressing Halal Certified SPF.\n2. Add Schema FAQ Markup answering 5 specific ingredient queries.\n3. Estimated timeline to Top 3 ranking: **28 to 45 days** with our SEO agent deployment.`,
      ur_nastaliq: `### 🔍 ایس ای او اور حریفوں کی کھوج کی رپورٹ\n\n**شعبہ:** اسلام آباد میں ڈینٹل کلینک\n\n1. **اہم کی ورڈ:** "best invisible braces islamabad price"\n   - سرچ والیم: 2,400 ماہانہ | مقابلہ: انتہائی کم\n   - حریفوں کی غلطی: کسی نے بھی قیمت اور اقساط کی شفاف تفصیل نہیں لکھی۔\n\n2. **گوگل بزنس پروفائل حکمتِ عملی:**\n   - ہفتہ وار 3 جیو ٹیگ شدہ تصاویر اور لائیو واٹس ایپ چیٹ بٹن فعال کریں۔\n   - متوقع نتیجہ: 4 ہفتوں میں گوگل میپس پر ٹاپ 3 پوزیشن۔`,
      ur_roman: `### 🔍 SEO Action Plan (Islamabad Dental Clinic)\n\n1. Target Keyword: "invisible braces islamabad price" (Monthly searches: 2,400, Competition: Low).\n2. Opportunity: Competitors pricing hide karte hain. Transparent monthly installment package page banayein.\n3. Google Maps Optimization: Weekly updates and instant WhatsApp booking integration.`
    }
  },
  {
    id: 'ad-copy',
    name: 'Ad Copy & Creative Optimizer',
    nameUrdu: 'اشتہارات و ایڈ کاپی ایجنٹ',
    title: 'High-ROAS Meta & Google Ads Copy Specialist',
    department: 'marketing',
    departmentLabel: 'Marketing & Content',
    tagline: 'Generates high-converting Meta, Google & TikTok ad angles that slash CAC',
    taglineUrdu: 'فیس بک، انسٹاگرام اور گوگل ایڈز کے لیے پرکشش کاپی اور ہکس لکھے جو لاگت کم کریں',
    badge: '3.8x Avg ROAS',
    iconName: 'Zap',
    description: 'Writes dozens of hook variations, primary texts, headlines, and call-to-actions engineered to stop scrolling and trigger high-converting purchases.',
    descriptionUrdu: 'فیس بک اور گوگل ایڈز کے لیے سکرول روکنے والے ہکس، پرکشش ہیڈلائنز اور فوری ایکشن لینے والے پیغامات تیار کرتا ہے۔',
    capabilities: [
      '5 distinct psychological angles (Fear of missing out, Social status, Pain-relief, Pure logic, Direct offer)',
      'Meta Ad Primary Text + Headline + Description variations',
      'Google Responsive Search Ads (15 headlines + 4 descriptions bundle)',
      'Bilingual targeting (Roman Urdu for local markets, English for international)'
    ],
    capabilitiesUrdu: [
      '5 مختلف نفسیاتی طریقوں سے گاہک کی توجہ حاصل کرنا',
      'فیس بک اور انسٹاگرام اشتہارات کی مکمل کاپی',
      'گوگل ایڈز کے لیے 15 ہیڈلائنز اور 4 ڈسکرپشنز کا پیکج',
      'مقامی اور بین الاقوامی مارکیٹ کے لیے موزوں زبان'
    ],
    metrics: [
      { label: 'Avg ROAS Lift', value: '+140%' },
      { label: 'Cost Per Click', value: '-35%' },
      { label: 'Angles Tested', value: '20+ / Product' }
    ],
    samplePrompts: [
      {
        title: 'Meta Ad for Men Leather Shoes',
        titleUrdu: 'لیدر شوز فیس بک ایڈ',
        prompt: 'Generate 3 high-converting Meta ad variations (Hook, Body, Headline) for handcrafted genuine leather formal shoes in Pakistan.',
        promptUrdu: 'پاکستان میں اصلی چمڑے کے جوتوں کے لیے 3 مختلف فیس بک اشتہارات کی کاپی تیار کریں۔'
      },
      {
        title: 'Google Search Ads for Law Firm',
        titleUrdu: 'گوگل سرچ ایڈز برائے وکالت فرم',
        prompt: 'Write 5 high-CTR Google search ad headlines and 2 descriptions for a corporate tax attorney in London.',
        promptUrdu: 'لندن میں کارپوریٹ ٹیکس کنسلٹنسی کے لیے گوگل سرچ ایڈز کے ہیڈلائنز اور ڈسکرپشنز بنائیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🎯 High-ROAS Meta Ad Angles (Handcrafted Leather Shoes)\n\n**Angle 1: The Social Status & Craftsmanship Hook**\n- **Primary Text:** "The shoes you wear into the boardroom speak before you say a single word. Handcrafted from 100% full-grain calfskin leather, designed to last 10+ years without a single crease. Made for men who lead."\n- **Headline:** Genuine Full-Grain Leather | Handstitched Excellence\n- **CTA Button:** Shop Collection\n\n**Angle 2: The Direct Risk-Reversal Hook (Urdu & Roman Urdu Blend)**\n- **Primary Text:** "Ghar par check karein, pehan kar dekhein — agar 100% genuine leather na ho toh poora paisa wapis! Free home delivery + open parcel before payment."\n- **Headline:** Open Parcel Delivery | 7-Day Money Back\n- **CTA Button:** Order on WhatsApp`,
      ur_nastaliq: `### 🎯 فیس بک اشتہار کی کاپی (خالص لیدر شوز)\n\n**پہلا اشتہار: اعتماد اور معیار**\nکیا آپ ایسی جوتیوں کی تلاش میں ہیں جو نہ صرف پائیدار ہوں بلکہ ہر محفل میں آپ کے وقار میں اضافہ کریں؟\n\n✨ ۱۰۰٪ اصلی چمڑے سے ہاتھ سے تیار کردہ جوتے\n✨ پارسل کھول کر چیک کرنے کی مکمل سہولت\n✨ پورے پاکستان میں مفت ڈلیوری اور ۷ دن کی واپسی کی گارنٹی\n\n👉 ابھی آرڈر کریں یا واٹس ایپ پر ڈیزائنز دیکھیں!`,
      ur_roman: `### 🎯 Facebook Ad (Leather Shoes)\n\n"Har meeting aur event me apna impression alag banayein. 100% Genuine Full-Grain Leather Shoes, handcrafted to perfection.\n\n- Open parcel delivery (pehle check karein phir pay karein)\n- Free shipping all over Pakistan\n- 7-day hassle free exchange\n\nOrder now on WhatsApp!"`
    }
  },
  {
    id: 'reputation',
    name: 'Reputation & Review Agent',
    nameUrdu: 'شہرت و ریویو ایجنٹ',
    title: '5-Star Review Generator & Sentiment Shield',
    department: 'operations',
    departmentLabel: 'Operations & Support',
    tagline: 'Monitors Google/Trustpilot reviews, generates 5-star replies & handles complaints',
    taglineUrdu: 'گوگل اور سوشل میڈیا پر اچھے ریویوز لائے اور منفی تاثرات کا فوری دفاع کرے',
    badge: 'Trust Guardian',
    iconName: 'ShieldCheck',
    description: 'Intercepts unhappy customers before they post publicly, triggers automated review request flows to happy buyers, and writes heartfelt SEO-rich owner responses.',
    descriptionUrdu: 'مطمئن گاہکوں سے 5 اسٹار ریویوز حاصل کرتا ہے اور ناراض گاہکوں کا غصہ ٹھنڈا کر کے برانڈ کے وقار کی حفاظت کرتا ہے۔',
    capabilities: [
      'Automated WhatsApp 5-star review request funnel after successful delivery',
      'Private feedback interception for 1-3 star ratings to fix complaints quietly',
      'Keyword-optimized Google Business response generation for every review',
      'Real-time brand sentiment monitoring across social media'
    ],
    capabilitiesUrdu: [
      'آرڈر ملنے کے بعد واٹس ایپ پر 5 اسٹار ریویو کی خودکار درخواست',
      'منفی فیڈ بیک کو عوامی ہونے سے پہلے نجی طور پر حل کرنا',
      'گوگل ریویوز کے شائستہ اور کی ورڈ سے بھرپور جوابات',
      'سوشل میڈیا پر برانڈ کی ساکھ پر 24 گھنٹے نظر رکھنا'
    ],
    metrics: [
      { label: '5-Star Volume Lift', value: '+320%' },
      { label: 'Response Rate', value: '100%' },
      { label: 'Avg Google Rating', value: '4.88 ★' }
    ],
    samplePrompts: [
      {
        title: 'Handle 1-Star Google Review',
        titleUrdu: '1 اسٹار منفی ریویو کا شائستہ جواب',
        prompt: 'A customer left a 1-star review on Google claiming slow delivery for our luxury bakery. Write a diplomatic, brand-protecting owner reply.',
        promptUrdu: 'بیکری کے لیے گوگل پر منفی ریویو کا ایسا جواب لکھیں جس سے پڑھنے والے دوسرے لوگوں کا اعتماد بڑھے۔'
      },
      {
        title: 'Post-Purchase WhatsApp Review Prompt',
        titleUrdu: 'خریداری کے بعد ریویو کا واٹس ایپ میسج',
        prompt: 'Write a warm WhatsApp message asking a customer who rated their shoe purchase 10/10 to leave a 1-click Google review with an instant gift.',
        promptUrdu: 'خوش گاہک سے گوگل پر 5 اسٹار ریویو دینے کے لیے ایک شائستہ واٹس ایپ میسج لکھیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🛡️ Reputation Shield: Owner Response to 1-Star Review\n\n**Public Google Review Response:**\n"Dear Hamza, thank you for sharing your candid feedback. First and foremost, we sincerely apologize that your cake arrived 25 minutes after your expected window on Saturday evening. We hold our kitchen and delivery standards to the absolute highest tier, and we clearly fell short of your expectations.\n\nOur General Manager, Daniyal, has already investigated the route delay and would love the opportunity to make this right personally. Please reach out to him directly at **gm@delicebakery.com** or WhatsApp **+92 300 *** 8811** with your order number. Your trust means everything to our family-owned business."`,
      ur_nastaliq: `### 🛡️ ریویو کا باوقار جواب (اردو)\n\n"محترم حمزہ صاحب، آپ کے فیڈ بیک کا شکریہ۔ ہفتے کی شام کیک کی ڈیلیوری میں 25 منٹ کی تاخیر پر ہم دل کی گہرائیوں سے معذرت خواہ ہیں۔ وقت کی پابندی ہماری اولین ترجیح ہے اور ہم اس پر کسی سمجھوتے کے قائل نہیں۔\n\nہمارے مینیجر دانیال صاحب آپ سے براہِ راست رابطہ کر کے اس کمی کا ازالہ کرنا چاہتے ہیں۔ برائے مہربانی اپنا آرڈر نمبر واٹس ایپ پر شیئر فرمائیں۔ آپ کا اعتماد ہمارا اصل سرمایہ ہے۔"`,
      ur_roman: `### 🛡️ Review Management Response\n\n"Dear Hamza bhai, feedback k liye shukriya. Saturday ko cake delivery me 25 mins delay par hum dil se maazrat-khwah hain. Hamare manager Daniyal apse personally contact karke iska behtareen solution provide karna chahte hain. Please apna order number WhatsApp par share kijiye."`
    }
  },
  {
    id: 'invoice-recovery',
    name: 'Invoice & Payment Reminder Agent',
    nameUrdu: 'ادائیگی و انوائس فالو اپ ایجنٹ',
    title: 'Diplomatic Revenue Recovery & Billing Automation',
    department: 'operations',
    departmentLabel: 'Operations & Support',
    tagline: 'Recovers overdue payments politely via WhatsApp & email without burning bridges',
    taglineUrdu: 'خوشگوار تعلقات برقرار رکھتے ہوئے رکی ہوئی رقم اور انوائسز کی وصولی کرے',
    badge: 'Cash Flow Booster',
    iconName: 'CreditCard',
    description: 'Tracks unpaid invoices, sends polite early bird reminders, handles payment link dispatch, and executes phased escalation workflows automatically.',
    descriptionUrdu: 'واٹس ایپ اور ای میل پر وقت سے پہلے اور بل بننے پر ادائیگی کی شائستہ یاد دہانی کرواتا ہے تاکہ کیش فلو بہتر رہے۔',
    capabilities: [
      'Multi-stage payment reminders (3 days before due, Day of due, +3 days, +7 days)',
      'Direct instant payment links (Stripe, JazzCash, EasyPaisa, Bank Wire) sent in chat',
      'Diplomatic tone modulation from helpful reminder to formal notice',
      'Automated receipt generation and accounting software sync (QuickBooks, Xero)'
    ],
    capabilitiesUrdu: [
      'تاریخ سے پہلے اور بعد میں منظم یاد دہانی',
      'چیٹ کے اندر براہِ راست پیمنٹ لنکس کی فراہمی',
      'تعلقات خراب کیے بغیر پیشہ ورانہ اور شائستہ لہجہ',
      'ادائیگی کے بعد خودکار رسید اور کھاتہ جات کی اپ ڈیٹ'
    ],
    metrics: [
      { label: 'Overdue Recovery', value: '78.6%' },
      { label: 'Avg Days Faster', value: '14 Days' },
      { label: 'Disputes Prevented', value: '94%' }
    ],
    samplePrompts: [
      {
        title: '7-Day Overdue Diplomatic Reminder',
        titleUrdu: '7 دن کی تاخیر پر شائستہ یاد دہانی',
        prompt: 'Draft a polite but firm WhatsApp message for an agency client who is 7 days late on a $2,200 monthly retainer invoice.',
        promptUrdu: 'ایک کلائنٹ جس کی ماہانہ فیس 7 دن لیٹ ہو چکی ہے، اس کے لیے ایک باوقار اور موثر واٹس ایپ میسج لکھیں۔'
      },
      {
        title: 'Early-Bird Discount Prompt',
        titleUrdu: 'بروقت ادائیگی پر رعایت کی پیشکش',
        prompt: 'Create a message offering a 3% instant settlement discount if the invoice is cleared within 24 hours.',
        promptUrdu: '24 گھنٹے میں ادائیگی پر ۳٪ رعایت کی ترغیب دینے والا میسج ڈرافٹ کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 💳 Payment Recovery Protocol (Stage 2: Day +7 Overdue)\n\n**Channel:** Direct WhatsApp & Email\n\n"Hi Salman,\n\nHope your week is off to a productive start!\n\nJust a quick check-in regarding Invoice **#INV-2049 ($2,200)** for your April Marketing & AI Pod management, which reached its due date last Tuesday.\n\nTo make settlement seamless for your finance team, here is the direct one-click payment link: [Secure Payment Link]. Alternatively, our bank transfer details are attached below.\n\nIf the payment was already dispatched from your end today, please feel free to disregard this note. Thank you for your continued partnership!"`,
      ur_nastaliq: `### 💳 ادائیگی کی یاد دہانی (اردو)\n\n"السلام علیکم سلمان بھائی،\n\nامید ہے آپ کا کاروبار خوب ترقی کر رہا ہوگا۔\n\nیہ پیغام برائے مہربانی اپریل کے انوائس **#INV-2049** کی یاد دہانی کے سلسلے میں ہے، جس کی آخری تاریخ پچھلے منگل تھی۔\n\nآپ کی سہولت کے لیے ڈائریکٹ آن لائن پیمنٹ لنک اور بینک اکاؤنٹ کی تفصیل نیچے موجود ہے۔\n\nاگر ادائیگی پہلے ہی کی جا چکی ہے تو برائے مہربانی اس پیغام کو نظر انداز فرمائیں۔ آپ کے تعاون کا تہہِ دل سے شکریہ!"`,
      ur_roman: `### 💳 Payment Reminder\n\n"Salam Salman bhai, umeed hai aap theek honge. Bas Invoice #INV-2049 ki gentle reminder thi jo last week due tha. Apki asani k liye direct payment link yahan attached hai: [Link]. Agar payment transfer ho chuki hai toh confirmation slip share farma dein. Shukriya!"`
    }
  },
  {
    id: 'trend-listening',
    name: 'Social Listening & Trend Agent',
    nameUrdu: 'سوشل ٹرینڈز و لسننگ ایجنٹ',
    title: 'Real-Time Viral Trend & Newsjacking Radar',
    department: 'marketing',
    departmentLabel: 'Marketing & Content',
    tagline: 'Scans Twitter/X, TikTok & News 24/7 to capitalize on viral moments in your niche',
    taglineUrdu: 'سوشل میڈیا اور خبروں پر وائرل ہونے والے موضوعات پر فوری مارکیٹنگ آئیڈیاز دے',
    badge: 'Viral Radar',
    iconName: 'TrendingUp',
    description: 'Monitors industry mentions, breakout hashtags, competitor campaigns, and cultural moments in real-time, delivering ready-to-publish newsjacking concepts.',
    descriptionUrdu: 'ٹک ٹاک، ٹویٹر اور نیوز پر لائیو نظر رکھتا ہے اور ٹرینڈنگ ٹاپکس پر فوری پوسٹس اور ویڈیوز کے آئیڈیاز تیار کرتا ہے۔',
    capabilities: [
      'Real-time breakout hashtag & cultural event detection',
      'Competitor viral post breakdown with actionable counter-angles',
      'Ready-to-post memes, tweets, and commentary generated within 15 minutes',
      'Brand risk alert when negative industry sentiment spikes'
    ],
    capabilitiesUrdu: [
      'مارکیٹ میں بریکنگ نیوز اور وائرل ٹرینڈز کی فوری اطلاع',
      'حریفوں کی مقبول پوسٹس کا تجزیہ اور بہتر متبادل مواد',
      '15 منٹ کے اندر ٹرینڈ پر تیار شدہ میمز اور پوسٹس',
      'برانڈ کو کسی بھی منفی پروپیگنڈا سے بروقت خبردار کرنا'
    ],
    metrics: [
      { label: 'Trend Detection Time', value: '< 15 mins' },
      { label: 'Engagement Multiplier', value: '4.2x' },
      { label: 'Platforms Tracked', value: '6 Major Networks' }
    ],
    samplePrompts: [
      {
        title: 'PSL Cricket Trend Newsjacking',
        titleUrdu: 'کرکٹ ٹرینڈ پر فوری مارکیٹنگ',
        prompt: 'Create a witty, brand-safe meme and promotional post for a fast-food burger chain capitalizing on last night thrilling cricket match finish.',
        promptUrdu: 'کرکٹ کے سنسنی خیز میچ پر فاسٹ فوڈ برانڈ کے لیے ایک وائرل میم اور ڈسکاؤنٹ آفر تیار کریں۔'
      },
      {
        title: 'Tech AI News Commentary',
        titleUrdu: 'ٹیکنالوجی نیوز پر کمنٹری',
        prompt: 'Draft an insightful Twitter/X thread analyzing the latest OpenAI announcement tailored for non-technical small business owners.',
        promptUrdu: 'چھوٹے کاروباری حضرات کے لیے نئی AI ٹیکنالوجی کے فوائد پر مبنی ایک وائرل ٹویٹر تھریڈ بنائیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### ⚡ Real-Time Trend Capitalization (Cricket Thriller Newsjack)\n\n**Trend Context:** Last-ball boundary win by Lahore Qalandars in front of 40,000 screaming fans.\n\n**Meme / Graphic Angle:**\n- **Visual:** Split screen. Left: Heart rate monitor going crazy. Right: Opening a crispy double-cheese burger box.\n- **Headline:** "Last over me dil sambhalna mushkil tha, lekin bhook ka ilaaj simple hai!"\n\n**Social Copy (X & Instagram):**\n"Matches come down to the wire, but your midnight cravings shouldn't have to wait! 🏏🔥\n\nUse promo code **LASTBALLWIN** for 25% OFF all Gourmet Burgers till 2:00 AM on Foodpanda & WhatsApp order!\n\nTag that friend whose heart rate still hasn't normalized! 👇"`,
      ur_nastaliq: `### ⚡ وائرل ٹرینڈ مارکیٹنگ پوسٹ (اردو)\n\nآخری گیند پر میچ جیتنے کا جو سنسنی خیز مزہ ہے، وہی مزہ ہمارے کرسپی برگر کے پہلے نوالے میں ہے! 🍔🔥\n\nمیچ کا جشن منائیں خصوصی عارضی آفر کے ساتھ:\nکوڈ استعمال کریں: **MATCHWINNER** اور حاصل کریں فلیٹ ۲۵٪ رعایت!\n\nابھی واٹس ایپ پر آرڈر کریں اور جشن کو دوبالا کریں۔`,
      ur_roman: `### ⚡ Trend Post (Cricket Match Win)\n\n"Aakhri ball par match jitne ka jo maza hai, wahi crispy bite ka maza NexaBurgers me hai! 🍔🔥\n\nPromo code use karein: MATCHWINNER for Flat 25% OFF till midnight. WhatsApp par abhi order karein!"`
    }
  },
  {
    id: 'market-research',
    name: 'Market Research & SWOT Agent',
    nameUrdu: 'مارکیٹ ریسرچ و تجارتی تجزیہ ایجنٹ',
    title: 'Deep Competitor Intelligence & Positioning Strategist',
    department: 'strategy',
    departmentLabel: 'Strategy & Analytics',
    tagline: 'Delivers deep market SWOT, pricing benchmarks & growth blueprints on demand',
    taglineUrdu: 'مارکیٹ کی گہرائی، قیمتوں کا موازنہ اور بزنس کی ترقی کا مکمل روڈ میپ بنائے',
    badge: 'Strategic Brain',
    iconName: 'BarChart3',
    description: 'Synthesizes industry reports, pricing models, target persona pain points, and competitive blindspots to help you enter and dominate new markets.',
    descriptionUrdu: 'نئے کاروبار یا پروڈکٹ کو لانچ کرنے کے لیے مارکیٹ، قیمتوں اور گاہکوں کی ترجیحات کا مفصل تجزیہ کرتا ہے۔',
    capabilities: [
      'Full Competitor SWOT matrix (Strengths, Weaknesses, Opportunities, Threats)',
      'Pricing elasticity benchmarks across competitor tiers',
      'Target audience psychographic personas with exact buying triggers',
      'Go-To-Market (GTM) launch roadmap with 90-day KPI targets'
    ],
    capabilitiesUrdu: [
      'کاروبار کے لیے SWOT تجزیہ (طاقتیں، کمزوریاں، مواقع اور خطرات)',
      'مارکیٹ میں حریفوں کی قیمتوں اور پیکیجز کا باریک بین موازنہ',
      'خریداروں کی نفسیات اور خریداری کے محرکات کی نشاندہی',
      '90 دن میں مارکیٹ پر غلبہ پانے کا مکمل روڈ میپ'
    ],
    metrics: [
      { label: 'Research Depth', value: '50+ Data Points' },
      { label: 'Report Speed', value: 'Under 2 Mins' },
      { label: 'Strategic Clarity', value: '100%' }
    ],
    samplePrompts: [
      {
        title: 'E-Commerce Niche SWOT in Pakistan',
        titleUrdu: 'ای کامرس شعبے کا تجزیہ',
        prompt: 'Conduct a comprehensive SWOT analysis for launching an artisanal coffee bean subscription service in Karachi and Lahore.',
        promptUrdu: 'پاکستان میں پریمیم کافی بینز کے نئے بزنس ماڈل کا SWOT تجزیہ اور مارکیٹ کے مواقع بیان کریں۔'
      },
      {
        title: 'B2B SaaS Pricing Strategy',
        titleUrdu: 'سافٹ ویئر کی قیمتوں کا تعین',
        prompt: 'Benchmark pricing models for a WhatsApp CRM tool targeting retail chains in Saudi Arabia and the UAE.',
        promptUrdu: 'خلیجی ممالک میں ریٹیل اسٹورز کے لیے واٹس ایپ سوفٹ ویئر کے بہترین پرائسنگ ماڈل کی سفارش کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 📊 Market Intelligence & SWOT Matrix\n\n**Market:** Premium Artisanal Coffee Subscription (Pakistan Metro Hubs)\n\n#### 1. Strengths & Opportunities:\n- **Rapid Third-Wave Coffee Adoption:** 42% YoY growth in youth café culture in DHA/Gulberg.\n- **Zero Dominant Direct-to-Consumer Player:** High café density but nearly zero seamless home subscription models.\n\n#### 2. Weaknesses & Market Threats:\n- **Import Duty Volatility:** Green bean prices fluctuate with currency exchange.\n- **Consumer Grind Education Gap:** 68% of households still lack burr grinders.\n\n#### 3. Strategic Recommendations:\n- **Bundle Free Grinder:** Offer a manual burr grinder free with 6-month pre-paid subscriptions to remove entry barrier.\n- **WhatsApp Reorder Automation:** Trigger automatic delivery reminders 3 days before the 250g bag runs out.`,
      ur_nastaliq: `### 📊 مارکیٹ ریسرچ و حکمتِ عملی رپورٹ\n\n**شعبہ:** پریمیم کافی ہوم ڈلیوری ماڈل\n\n1. **سب سے بڑا موقع:**\n   لاہور، کراچی اور اسلام آباد میں نوجوانوں میں اسپیشلٹی کافی کا رجحان تیزی سے بڑھ رہا ہے، لیکن گھر پر تازہ بینز مہیا کرنے والا کوئی بڑا ڈیجیٹل برانڈ موجود نہیں۔\n\n2. **بزنس کی حکمتِ عملی:**\n   - گاہکوں کو آسان سبسکرپشن ماڈل پیش کریں۔\n   - ہر مہینے واٹس ایپ کے ذریعے خودکار ری فل آرڈر کی تصدیق حاصل کریں۔\n   - پہلے ۱۰۰ آرڈرز کے ساتھ مفت کافی گرائنڈر کا تحفہ دیں۔`,
      ur_roman: `### 📊 Market Research Summary\n\n1. Opportunity: Specialty coffee culture Karachi/Lahore me peak par hai lekin home subscription ka organized model missing hai.\n2. Strategy: Free manual grinder bundle with 3-month subscription package.\n3. Automation: Automated WhatsApp refill reminder every 25 days before stock runs out.`
    }
  },
  {
    id: 'whatsapp-crm',
    name: 'WhatsApp CRM Automation Agent',
    nameUrdu: 'واٹس ایپ سی آر ایم ایجنٹ',
    title: 'Bilingual Conversational Commerce & Funnel Botflow',
    department: 'sales',
    departmentLabel: 'Sales & Growth',
    tagline: 'Converts WhatsApp into an autonomous sales machine that takes orders & books calls',
    taglineUrdu: 'واٹس ایپ کو ایک خودکار دکان میں تبدیل کرے جو آرڈرز لے اور کسٹمر سروس سنبھالے',
    badge: 'Must-Have Hub',
    iconName: 'MessageSquare',
    description: 'Connects with official WhatsApp Cloud API, delivers interactive product catalogs, processes orders, takes payments, and maintains personalized CRM context 24/7.',
    descriptionUrdu: 'آفیشل واٹس ایپ API کے ذریعے کٹلاگ دکھاتا ہے، ایڈریس لیتا ہے اور 24 گھنٹے خودکار طور پر سیلز مکمل کرتا ہے۔',
    capabilities: [
      'Interactive WhatsApp buttons, list menus, and rich media catalog delivery',
      'Automated address capture, phone validation, and Cash-on-Delivery confirmation',
      'Seamless multi-agent handoff (e.g. from support to closer to invoicing)',
      'Full synchronization with Google Sheets, Shopify, GoHighLevel, and Slack'
    ],
    capabilitiesUrdu: [
      'واٹس ایپ پر انٹرایکٹو بٹنز، مینیو اور پراڈکٹ کیٹلاگ',
      'مکمل پتہ، فون نمبر کی جانچ اور کیش آن ڈلیوری کی خودکار تصدیق',
      'ایک ہی واٹس ایپ پر تمام ۱۴ ایجنٹس کا آپس میں مربوط کام',
      'گوگل شیٹس اور شاپائفائی میں فوری آرڈر انٹری'
    ],
    metrics: [
      { label: 'Cart Conversion', value: '4.8x higher than Web' },
      { label: 'Automated Orders', value: '82.5%' },
      { label: 'Uptime', value: '99.99%' }
    ],
    samplePrompts: [
      {
        title: 'Urdu Conversational Order Flow',
        titleUrdu: 'واٹس ایپ پر مکمل آرڈر کا بہاؤ',
        prompt: 'Simulate a natural Urdu WhatsApp conversation where an agent helps a customer select a shoe size, confirms their address in Gulshan-e-Iqbal, and logs the COD order.',
        promptUrdu: 'واٹس ایپ پر گاہک کے ساتھ اردو میں بات چیت کر کے جوتے کا سائز اور پتہ لے کر آرڈر کنفرم کرنے کا ڈیمو بنائیں۔'
      },
      {
        title: 'Interactive Catalog Menu Trigger',
        titleUrdu: 'انٹرایکٹو مینیو اور کیٹلاگ',
        prompt: 'Design a rich WhatsApp button workflow for a clinic booking doctor appointments across 3 specialties.',
        promptUrdu: 'کلینک کے لیے ڈاکٹر کی اپوائنٹمنٹ بک کرنے کا واٹس ایپ بٹن مینیو ڈیزائن کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 📱 WhatsApp Interactive Commerce Simulation\n\n**Customer:** "Salam, shoe price kya hai aur size 42 available hai?"\n\n**NexaBoost WhatsApp AI (0.8s):**\n"Walaikum Assalam! 👞✨\n\nJi bilkul, hamara **Royal Oxford Black (Size 42)** is waqt stock me available hai!\n- **Price:** Rs. 4,850 (Free Delivery across Pakistan)\n- **Material:** 100% Genuine Full-Grain Leather\n\nKya aap Cash on Delivery par order confirm karna chahte hain ya mazeed pictures dekhna chahte hain?"\n\n[🔘 Confirm Order COD]  [🔘 View Live Pictures]  [🔘 Talk to Human]`,
      ur_nastaliq: `### 📱 واٹس ایپ لائیو چیٹ سیمولیشن (اردو)\n\n**گاہک:** "السلام علیکم! کیا یہ سوٹ کیش آن ڈلیوری پر مل جائے گا؟"\n\n**نیکسا بوسٹ واٹس ایپ AI (0.8 سیکنڈ میں):**\n"وعلیکم السلام! جی بالکل، پورے پاکستان میں کیش آن ڈلیوری اور پارسل کھول کر چیک کرنے کی مکمل سہولت دستیاب ہے!\n\n- **قیمت:** ۳,۹۵۰ روپے (ڈلیوری مفت)\n- **اسٹاک:** آخری ۳ سوٹ باقی ہیں\n\nآرڈر بک کرنے کے لیے برائے مہربانی اپنا مکمل نام، شہر اور پتہ بھیج دیں۔"\n\n[🔘 ابھی آرڈر بک کریں]  [🔘 سائز چارٹ دیکھیں]`,
      ur_roman: `### 📱 WhatsApp CRM Flow\n\nCustomer: "Salam! Order book karna hai."\nNexaBoost AI: "Walaikum Assalam! Bohot shukriya. Please apna Name, Phone aur Delivery Address share farma dein taake hum foran parcel dispatch kar sakein."`
    }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Agent Pod',
    nameUrdu: 'اسٹارٹر ایجنٹ پوڈ',
    price: '$497',
    billingPeriod: '/month',
    description: 'Perfect for fast-growing small businesses needing instant 24/7 lead capture & support.',
    agentsCount: '3 Core AI Agents',
    features: [
      'Lead Gen Agent (50+ verified leads/day)',
      '24/7 Multilingual Support Agent (Urdu + English)',
      'WhatsApp CRM Automation Agent with Instant Reply',
      'Official WhatsApp Cloud API Integration',
      'Google Sheets & CRM Sync',
      'Standard 99.8% Uptime SLA',
      'Dedicated Onboarding Engineer'
    ],
    featuresUrdu: [
      'لیڈ جنریشن ایجنٹ (روزانہ ۵۰+ لیڈز)',
      '۲۴ گھنٹے کسٹمر سپورٹ ایجنٹ (اردو اور انگلش)',
      'واٹس ایپ سی آر ایم آٹومیشن',
      'آفیشل واٹس ایپ کلاؤڈ API کنکشن',
      'گوگل شیٹس اور سی آر ایم سنک',
      'مکمل ٹیکنیکل سیٹ اپ اور ٹریننگ'
    ],
    ctaText: 'Deploy Starter Pod',
    whatsappMessage: 'Hi NexaBoost team! I want to deploy the Starter Agent Pod ($497/mo) for my business.'
  },
  {
    id: 'growth',
    name: 'Growth Ecosystem',
    nameUrdu: 'گروتھ ایکو سسٹم',
    popular: true,
    badge: 'Most Popular',
    price: '$997',
    billingPeriod: '/month',
    description: 'The complete revenue engine for ambitious brands scaling pipeline, content & closing.',
    agentsCount: '7 Power AI Agents',
    features: [
      'All 3 Starter Pod Agents Included',
      'Outreach Agent (Cold Email & WhatsApp campaigns)',
      'Closer & Objection Handling Agent',
      'Persistent Follow-up Agent (Zero cold leads)',
      'Content & Copywriting Agent (Urdu + Eng posts)',
      'Meta & Google Ad Copy Optimizer Agent',
      'Custom Tone of Voice & Knowledgebase Training',
      'Priority WhatsApp Support & Weekly Strategy Review'
    ],
    featuresUrdu: [
      'اسٹارٹر پوڈ کے تمام ایجنٹس شامل',
      'کولڈ آؤٹ ریچ اور ای میل مہمات کا ایجنٹ',
      'ڈیل کلوزر اور اعتراضات حل کرنے والا ایجنٹ',
      'خودکار ۲۴ گھنٹے فالو اپ ایجنٹ',
      'سوشل میڈیا اور کاپی رائٹنگ ایجنٹ',
      'اشتہارات (Ads) آپٹیمائزر ایجنٹ',
      'آپ کے برانڈ کے مطابق خصوصی ٹریننگ',
      'ہفتہ وار اسٹریٹجی کال اور ترجیحی سپورٹ'
    ],
    ctaText: 'Deploy Growth Pod',
    whatsappMessage: 'Hi NexaBoost team! I want to scale with the Growth Ecosystem ($997/mo).'
  },
  {
    id: 'enterprise',
    name: 'Full 14-Agent Autonomous Hub',
    nameUrdu: 'مکمل ۱۴ ایجنٹ انٹرپرائز ہب',
    badge: 'Complete Autonomous Enterprise',
    price: '$1,897',
    billingPeriod: '/month',
    description: 'Total business automation. 14 specialized AI agents working as a synchronized 24/7 team.',
    agentsCount: 'All 14 AI Agents Synced',
    features: [
      'Full 14 AI Agents Fleet Fully Synchronized',
      'Video & TikTok/Reels Script Agent',
      'SEO & Competitor Spy Agent',
      'Reputation & Review Guardian Agent',
      'Invoice & Payment Recovery Agent',
      'Social Listening & Trend Agent',
      'Market Research & SWOT Strategy Agent',
      'Multi-Channel Deployment (WhatsApp, Web, Email, Instagram, Slack)',
      'Custom LLM Fine-Tuning on your Private Data',
      'Dedicated AI Systems Architect & 24/7 VIP Hotline'
    ],
    featuresUrdu: [
      'تمام ۱۴ خودمختار AI ایجنٹس کا مکمل کنٹرول',
      'ٹک ٹاک اور ریلز اسکرپٹ ڈائریکٹر',
      'ایس ای او اور حریفوں کی جاسوسی کا ایجنٹ',
      'شہرت و گوگل ریویوز کا محافظ ایجنٹ',
      'انوائس اور رکی ہوئی رقوم کی ریکوری ایجنٹ',
      'ٹرینڈز اور بریکنگ نیوز مانیٹرنگ ایجنٹ',
      'مارکیٹ ریسرچ اور حکمتِ عملی ایجنٹ',
      'تمام پلیٹ فارمز پر لائیو کوریج (واٹس ایپ، ویب، انسٹاگرام)',
      'ڈیڈیکیٹڈ AI انجینئر اور 24/7 وی آئی پی سپورٹ'
    ],
    ctaText: 'Deploy Enterprise Hub',
    whatsappMessage: 'Hi NexaBoost team! I am interested in deploying the Full 14-Agent Autonomous Hub for my enterprise.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    company: 'LuxeLiving Interior & Decor',
    location: 'Dubai & Lahore',
    industry: 'High-Ticket Interior Architecture',
    problem: 'Spent $4,000/mo on 3 sales coordinators who missed 40% of weekend inquiries and took 6 hours to respond.',
    deployedAgents: ['Lead Gen Agent', 'WhatsApp CRM', 'Closer Agent', 'Follow-up Agent'],
    results: [
      { metric: 'First Response Time', change: '8.4 sec (down from 6 hrs)' },
      { metric: 'Qualified Leads', change: '+340% in 60 days' },
      { metric: 'Monthly Payroll Saved', change: '$3,100 / month' },
      { metric: 'Closed Revenue', change: '+$142,000 in Q1' }
    ],
    testimonial: {
      quote: 'NexaBoost 14 Agents Hub completely changed our game. Weekend leads used to go cold; now our WhatsApp Closer Agent sends 3D proposal links and books design consultations in under 2 minutes.',
      author: 'Kamran Al-Ansari',
      role: 'Managing Director, LuxeLiving ME'
    }
  },
  {
    id: '2',
    company: 'Veritas Health & Orthodontics',
    location: 'Islamabad',
    industry: 'Specialized Healthcare Clinic',
    problem: 'High patient no-show rate (38%) and reception overwhelmed by repetitive pricing questions in Urdu and English.',
    deployedAgents: ['Customer Support', 'Follow-up Agent', 'Invoice Recovery', 'Reputation Agent'],
    results: [
      { metric: 'Appointment No-Shows', change: 'Dropped from 38% to 6%' },
      { metric: 'Google 5-Star Reviews', change: '140+ New 5★ Reviews' },
      { metric: 'Patient Inquiries Handled', change: '100% 24/7 Coverage' },
      { metric: 'ROI Multiplier', change: '8.4x in 90 days' }
    ],
    testimonial: {
      quote: 'The bilingual Urdu and English capability is flawless. Patients receive instant gentle reminders on WhatsApp, and our Google rating jumped to 4.9 stars automatically.',
      author: 'Dr. Ayesha Malik',
      role: 'Clinical Director & Founder'
    }
  },
  {
    id: '3',
    company: 'Apex Apparel & Footwear',
    location: 'Karachi & Faisalabad',
    industry: 'D2C E-Commerce Brand',
    problem: 'Cart abandonment was 74% and ad copy was stale, causing Meta ROAS to drop below 1.6x.',
    deployedAgents: ['Ad Copy Optimizer', 'Video Script Agent', 'Content Agent', 'Trend Radar'],
    results: [
      { metric: 'Blended Meta ROAS', change: '3.92x (up from 1.6x)' },
      { metric: 'Cart Recovery Rate', change: '31.4% via WhatsApp' },
      { metric: 'Weekly Video Assets', change: '24 Ready-to-Shoot Scripts' },
      { metric: 'Monthly Revenue Lift', change: '+215% YoY' }
    ],
    testimonial: {
      quote: 'The Video Script and Ad Copy agents give our media buying team 10 fresh viral angles every single morning. We scaled our ad spend with zero creative burnout.',
      author: 'Shahmeer Khan',
      role: 'Head of Growth, Apex Apparel'
    }
  }
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    q: 'How quickly can we deploy the 14 AI Agents for our business?',
    qUrdu: 'یہ ۱۴ AI ایجنٹس ہمارے بزنس کے لیے کتنی دیر میں لائیو ہو سکتے ہیں؟',
    a: 'Standard deployment takes just 48 to 72 hours. Our engineering team connects your WhatsApp Business number, uploads your business knowledgebase (product catalog, pricing, FAQs, brand tone), and tests all agent workflows before going live.',
    aUrdu: 'ہماری ٹیم صرف ۴۸ سے ۷۲ گھنٹوں میں آپ کے واٹس ایپ، کیٹلاگ اور برانڈ ڈیٹا کو ٹرین کر کے سسٹم لائیو کر دیتی ہے۔'
  },
  {
    q: 'Do the agents genuinely speak and understand authentic Urdu & Roman Urdu?',
    qUrdu: 'کیا یہ ایجنٹس واقعی روانی کے ساتھ اردو اور رومن اردو بولتے ہیں؟',
    a: 'Yes, 100%. NexaBoost agents are specifically fine-tuned for high-context bilingual communication. They smoothly understand Roman Urdu (e.g., "bhai order kab deliver hoga?"), authentic Nastaliq Urdu (نستعلیق), English, and Arabic, switching languages seamlessly based on how the customer speaks.',
    aUrdu: 'جی بالکل! یہ ایجنٹس رومن اردو، نستعلیق اردو، انگریزی اور عربی زبان کو گاہک کے لہجے کے مطابق قدرتی اور شائستہ انداز میں جواب دیتے ہیں۔'
  },
  {
    q: 'Can a human team member take over a WhatsApp chat at any time?',
    qUrdu: 'کیا ضرورت پڑنے پر کوئی انسان چیٹ کو کنٹرول کر سکتا ہے؟',
    a: 'Absolutely. Whenever a human staff member types into the WhatsApp chat or if the customer specifically clicks "Talk to Human", the AI instantly pauses for that conversation, logs the transcript, and alerts your team on Slack or WhatsApp.',
    aUrdu: 'جی ہاں! جیسے ہی آپ کا کوئی ملازم جواب لکھے گا یا کلائنٹ انسان سے بات کی درخواست کرے گا، AI فوراً رک جائے گا اور نوٹیفکیشن بھیجے گا۔'
  },
  {
    q: 'How does the Free AI Business Audit work?',
    qUrdu: 'مفت AI بزنس آڈٹ کیسے کام کرتا ہے؟',
    a: 'You enter basic details about your industry, monthly revenue, and current manual bottlenecks. Our AI engine instantly analyzes your operations, identifies which of the 14 agents will yield the fastest ROI, and delivers a customized 5-part deployment blueprint.',
    aUrdu: 'آپ اپنے بزنس اور چیلنجز کی تفصیل درج کریں، ہمارا سسٹم فوری طور پر آپ کے لیے سب سے زیادہ منافع بخش AI ایجنٹس کا روڈ میپ بنا دے گا۔'
  },
  {
    q: 'Is there any risk of WhatsApp number banning?',
    qUrdu: 'کیا واٹس ایپ نمبر بلاک ہونے کا کوئی خطرہ ہے؟',
    a: 'None. We build exclusively on the Official Meta WhatsApp Cloud API with verified green-tick compliance, automated rate-limiting, and official message templates that adhere strictly to Meta business policies.',
    aUrdu: 'کوئی خطرہ نہیں! ہم آفیشل میٹا واٹس ایپ کلاؤڈ API استعمال کرتے ہیں جو ۱۰۰٪ قانونی اور محفوظ ہے۔'
  }
];
