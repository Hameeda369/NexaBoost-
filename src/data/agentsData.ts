import { AgentSpec, PricingPlan, CaseStudy } from '../types';
import { EXACT_14_ASSEMBLY_AGENTS } from './exact14Agents';

export const ALL_14_AGENTS: AgentSpec[] = EXACT_14_ASSEMBLY_AGENTS;

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
