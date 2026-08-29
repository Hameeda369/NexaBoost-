import servicesPosterImg from '../assets/images/nexaboost_services_poster_1787994444446.jpg';
import digigulbibiHqImg from '../assets/images/digigulbibi_hq_office_1787994475205.jpg';
import goldCubesImg from '../assets/images/gold_cubes_omnichannel_1787994497632.jpg';
import aiAutomationImg from '../assets/images/ai_automation_voice_1787994526400.jpg';
import seoGrowthImg from '../assets/images/seo_growth_analytics_1787994552231.jpg';
import emailMarketingImg from '../assets/images/email_marketing_dashboard_1787994583152.jpg';
import ugcAdsImg from '../assets/images/ugc_ads_phones_1787994604274.jpg';
import ugiInfluencersImg from '../assets/images/ugi_ai_influencers_1787994637744.jpg';
import strategyDeskImg from '../assets/images/strategy_executive_desk_1787994662618.jpg';
import productSuiteImg from '../assets/images/product_web_app_suite_1787994685461.jpg';

export interface VisualAssetItem {
  id: string;
  category: 'ecosystem' | 'hq' | 'ai_automation' | 'growth_media' | 'product_tech' | 'strategy';
  title: string;
  titleUrdu: string;
  subtitle: string;
  subtitleUrdu: string;
  badge: string;
  badgeUrdu: string;
  imageSrc: string;
  aspectRatio: string;
  description: string;
  descriptionUrdu: string;
  highlights: string[];
  highlightsUrdu: string[];
  associatedAgentIds: string[];
  whatsappText: string;
}

export const VISUAL_ASSETS: VisualAssetItem[] = [
  {
    id: 'services-ecosystem-poster',
    category: 'ecosystem',
    title: 'NexaBoost 14 AI Autonomous Services Poster',
    titleUrdu: 'نیکسا بوسٹ: ۱۴ خودمختار AI سروسز انفرااسٹرکچر',
    subtitle: 'Comprehensive 14-in-1 Full Spectrum Agency Ecosystem',
    subtitleUrdu: 'ایک مکمل نظام میں تمام ۱۴ ڈیجیٹل و مارکیٹنگ سروسز',
    badge: '14-in-1 Master Ecosystem',
    badgeUrdu: 'ماسٹر ایکو سسٹم پوسٹر',
    imageSrc: servicesPosterImg,
    aspectRatio: '9:16',
    description:
      'The complete architectural poster encapsulating all 14 NexaBoost autonomous capabilities: SEO, Autonomous AI Agents, Voice-AI, Chatbots, High-Ticket Content, UGC Ads, VSL Ads, Digital Products, Website-AI, Custom Mobile Apps, Social Media, Google Ads, Cold Email, and Brand Architecture.',
    descriptionUrdu:
      'نیکسا بوسٹ کا جامع انفرا اسٹرکچر پوسٹر جس میں تمام ۱۴ جدید ترین خدمات شامل ہیں: ایس ای او، خودمختار ایجنٹس، وائس اے آئی، چیٹ باٹ، مواد کی تیاری، یو جی سی ویڈیوز، وی ایس ایل اشتہارات، ڈیجیٹل پروڈکٹس، ویب سائٹ اے آئی، موبائل ایپس، گوگل اشتہارات، ای میل مارکیٹنگ اور برانڈنگ۔',
    highlights: [
      '14 Connected Autonomous AI Departments',
      'Zero Operational Friction & 99.8% System Uptime',
      'Unified Data Sync Across CRM, Sheets & Meta APIs',
      'High-Resolution Blueprint for Agency Scalability'
    ],
    highlightsUrdu: [
      '۱۴ مربوط اور ہم آہنگ خودکار شعبہ جات',
      'صفر آپریشنل رکاوٹ اور ۹۹.۸٪ مسلسل دستیابی',
      'گوگل شیٹس، سی آر ایم اور فیس بک سے خودکار لنک',
      'بڑے پیمانے پر کاروبار بڑھانے کا واضح لائحہ عمل'
    ],
    associatedAgentIds: ['lead-gen', 'outreach', 'closer', 'follow-up', 'content', 'video-script', 'customer-support', 'seo-competitor', 'ad-copy', 'reputation', 'invoice-recovery', 'trend-listening', 'market-research', 'whatsapp-crm'],
    whatsappText: 'Hi NexaBoost team! I reviewed your 14 AI Autonomous Services Master Poster and want to implement this full ecosystem for my company.'
  },
  {
    id: 'digigulbibi-executive-hq',
    category: 'hq',
    title: 'DigiGulBibi Executive Global HQ & Workstation',
    titleUrdu: 'ڈیجی گل بی بی: ایگزیکٹو ہیڈ کوارٹر و قیادت',
    subtitle: '"We Sell Promises Not Products" — Unmatched Corporate Trust',
    subtitleUrdu: '"ہم مصنوعات نہیں، اپنے وعدے فروخت کرتے ہیں" — پختہ اعتماد',
    badge: 'Executive HQ & Brand Trust',
    badgeUrdu: 'ایگزیکٹو ہیڈ کوارٹر',
    imageSrc: digigulbibiHqImg,
    aspectRatio: '9:16',
    description:
      'The prestigious executive office of DigiGulBibi & NexaBoost, representing our heritage, commitment to enterprise execution, and our philosophy of delivering on guarantees. Rooted in Pakistan with international delivery standards for Gulf, US, and UK enterprises.',
    descriptionUrdu:
      'ڈیجی گل بی بی اور نیکسا بوسٹ کا پرتعیش ایگزیکٹو ورک اسپیس، جو ہمارے اصولوں، بااعتماد ترسیل اور بہترین کاروباری نتائج کا عکاس ہے۔ پاکستان میں مضبوط بنیادوں کے ساتھ خلیجی ممالک، امریکہ اور برطانیہ کے اداروں کو عالمی معیار کی سروسز۔',
    highlights: [
      'Gold-Standard Corporate Guarantee & Escrow Safety',
      'Direct Access to Senior AI Architects & Strategists',
      'Pakistani Heritage with Global Enterprise Standards',
      'Dedicated 24/7 VIP Support & Deployment War-Room'
    ],
    highlightsUrdu: [
      'سو فیصد قابلِ اعتماد کاروباری ضمانت اور تحفظ',
      'سینئر اے آئی ماہرین اور اسٹریٹجسٹس سے براہِ راست رابطہ',
      'عالمی معیار اور پاکستانی کاروباری ساکھ کی پہچان',
      '۲۴ گھنٹے فعال وی آئی پی وار روم اور سپورٹ'
    ],
    associatedAgentIds: ['closer', 'market-research', 'strategy'],
    whatsappText: 'Hi DigiGulBibi & NexaBoost Leadership! I saw your executive HQ presentation and want to discuss a partnership.'
  },
  {
    id: 'ai-automation-voice-hub',
    category: 'ai_automation',
    title: 'AI Automation, Voice-AI & Conversational Bot Hub',
    titleUrdu: 'اے آئی آٹومیشن: وائس کالنگ و ذہین چیٹ باٹس',
    subtitle: 'Autonomous Customer Reception, Voice Inbound & Lead Qualification',
    subtitleUrdu: 'خودکار کالنگ، گاہکوں سے رابطہ اور فوری آرڈر بکنگ',
    badge: 'Voice-AI & 24/7 Agents',
    badgeUrdu: 'وائس اے آئی اور ایجنٹس',
    imageSrc: aiAutomationImg,
    aspectRatio: '9:16',
    description:
      'Next-generation voice synthesis and neural dialogue systems capable of handling thousands of simultaneous phone calls in natural Urdu, English, and Arabic. Automatically qualifies inbound leads, schedules appointments, and confirms cash-on-delivery orders.',
    descriptionUrdu:
      'جدید ترین وائس سنتھیسس اور نیورل ڈائیلاگ سسٹم جو اردو، انگلش اور عربی میں بیک وقت ہزاروں فون کالز خود سنبھال سکتا ہے۔ لیڈز کی تصدیق، اپائنٹمنٹس کی بکنگ اور کیش آن ڈلیوری آرڈرز کی فون پر کنفرمیشن۔',
    highlights: [
      'Sub-800ms Voice Latency with Human Empathy Pitch',
      'Instant Sync with Google Sheets & CRM Tables',
      'Multilingual Urdu, English & Gulf Arabic Support',
      'Automated COD Delivery Confirmation Calls'
    ],
    highlightsUrdu: [
      'صرف ۸۰۰ ملی سیکنڈ میں انسانی لہجے میں فوری جواب',
      'گوگل شیٹس اور سی آر ایم میں خودکار اندراج',
      'اردو، انگلش اور عربی زبانوں کی مکمل صلاحیت',
      'کیش آن ڈلیوری کے تصدیقی فون کالز کا خودکار نظام'
    ],
    associatedAgentIds: ['customer-support', 'whatsapp-crm', 'lead-gen'],
    whatsappText: 'Hi NexaBoost! I want to deploy the AI Automation & Voice-AI Calling System for my business inbound/outbound calls.'
  },
  {
    id: 'seo-growth-analytics',
    category: 'growth_media',
    title: 'SEO & Algorithmic Search Growth Engine',
    titleUrdu: 'ایس ای او اور آرگینک سرچ گروتھ انجن',
    subtitle: 'Hyper-Targeted Google Rankings, Local 3-Pack & Competitor Spy',
    subtitleUrdu: 'گوگل کے پہلے صفحے پر رینکنگ اور حریفوں کی کمزوریوں کی تلاش',
    badge: 'Top Google Rankings',
    badgeUrdu: 'گوگل رینکنگ انجن',
    imageSrc: seoGrowthImg,
    aspectRatio: '9:16',
    description:
      'Algorithmic keyword optimization, technical schema injection, and competitor backlink spy engine. Designed to push your business into Google’s top search results and Google Maps Local 3-Pack without paying ongoing ad click costs.',
    descriptionUrdu:
      'گوگل کے الگورتھم کے مطابق کی ورڈز کی درست ترتیب، ٹیکنیکل اسکیما اور حریفوں کی بیک لنکس کا تجزیہ۔ آپ کے کاروبار کو گوگل سرچ اور گوگل میپس کے ٹاپ ۳ نتائج میں لانے کا پائیدار طریقہ۔',
    highlights: [
      'Google Maps 3-Pack Domination for Local Clinics & Stores',
      'High-Intent Buyer Keyword Ranking in 60-90 Days',
      'Automated JSON-LD Rich Snippet Generation',
      'Continuous Competitor Gap & Backlink Monitoring'
    ],
    highlightsUrdu: [
      'لوکل دکانوں اور کلینکس کے لیے گوگل میپس پر سرفہرست پوزیشن',
      'صرف ۶۰ سے ۹۰ دن میں خریداری کے لیے تیار ٹریفک',
      'گوگل رچ اسنپٹس کا خودکار اسکیما کوڈ',
      'حریفوں کی سرگرمیوں اور بیک لنکس پر چوبیس گھنٹے نظر'
    ],
    associatedAgentIds: ['seo-competitor', 'content', 'market-research'],
    whatsappText: 'Hi NexaBoost! I want to rank my business on Google first page using your SEO & Growth Analytics Engine.'
  },
  {
    id: 'email-marketing-dashboard',
    category: 'growth_media',
    title: 'High-Impact Email Marketing & Revenue Surges',
    titleUrdu: 'ای میل مارکیٹنگ و ریونیو گروتھ ڈیش بورڈ',
    subtitle: 'Deliverability Shield, Cold B2B Sequences & Automated Drip Funnels',
    subtitleUrdu: 'اسپیم فری بی ٹو بی ای میلز اور خودکار فالو اپ فینلز',
    badge: 'High Inbound Revenue',
    badgeUrdu: 'ای میل ریونیو انجن',
    imageSrc: emailMarketingImg,
    aspectRatio: '9:16',
    description:
      'Engineered cold email sequences that land straight into the primary inbox. Complete with multi-step follow-ups, spam score mitigation, and dynamic personalization to turn cold prospects into high-ticket enterprise contracts.',
    descriptionUrdu:
      'ای میلز کا ایسا خودکار نظام جو اسپیم فولڈر کے بجائے سیدھا ان باکس میں پہنچتا ہے۔ خودکار فالو اپ پیغامات اور ذاتی نوعیت کے مواد کے ذریعے نئے کلائنٹس سے لاکھوں کے سودے حاصل کرنے کی صلاحیت۔',
    highlights: [
      '99.2% Primary Inbox Delivery Guarantee',
      'Dynamic B2B Personalization (Name, Pain Point, Revenue)',
      'Automated 3-Tier Multi-Day Follow-Up Triggers',
      'Real-Time Open, Click & Reply Revenue Analytics'
    ],
    highlightsUrdu: [
      '۹۹.۲٪ ای میلز کے ان باکس میں پہنچنے کی ضمانت',
      'ہر کلائنٹ کے نام اور ضرورت کے مطابق ذاتی پیغامات',
      'خودکار ۳ مرحلہ وار فالو اپ یاد دہانیاں',
      'ای میل کے اوپن ریٹ اور منافع کا لائیو تجزیہ'
    ],
    associatedAgentIds: ['outreach', 'follow-up', 'invoice-recovery'],
    whatsappText: 'Hi NexaBoost! I want to deploy your High-Impact Email Marketing System to acquire B2B clients.'
  },
  {
    id: 'ugc-ads-viral-network',
    category: 'growth_media',
    title: 'Viral UGC Video Ads & Creator Engine',
    titleUrdu: 'وائرل یو جی سی (UGC) ویڈیوز و ایڈورٹائزنگ نیٹ ورک',
    subtitle: 'High-Converting TikTok, Instagram Reels & Meta Ad Creatives',
    subtitleUrdu: 'ٹک ٹاک، ریلز اور فیس بک کے لیے خریدار لانے والی ویڈیوز',
    badge: 'Viral Creative Suite',
    badgeUrdu: 'وائرل یو جی سی ویڈیوز',
    imageSrc: ugcAdsImg,
    aspectRatio: '9:16',
    description:
      'Authentic, high-energy UGC video ads designed to stop the scroll in the first 3 seconds. Proven script formulas (Problem-Agitate-Solve) matching native platform trends that slash your cost per acquisition by 40-60%.',
    descriptionUrdu:
      'حقیقی اور پرکشش یوزر جنریٹڈ مواد (UGC) کے اشتہارات جو پہلے ۳ سیکنڈ میں گاہک کی توجہ کھینچتے ہیں۔ فیس بک اور ٹک ٹاک پر ایڈز کا خرچہ آدھا کرنے والے آزمودہ ویڈیو اسکرپٹس اور ایڈیٹنگ۔',
    highlights: [
      '3-Second Scroll-Stopping Pattern Interrupts',
      'Native TikTok & Reels Formatting with Captions',
      'Urdu, Roman Urdu & English Audio Scripts',
      '40-60% Lower Customer Acquisition Cost (CAC)'
    ],
    highlightsUrdu: [
      'پہلے ۳ سیکنڈ میں ویڈیو روکنے والی زبردست ہکس',
      'ٹک ٹاک اور انسٹاگرام کے مطابق سب ٹائٹلز کے ساتھ ویڈیوز',
      'اردو، رومن اردو اور انگلش کے پرکشش وائس اوورز',
      'اشتہاری لاگت میں ۴۰ سے ۶۰ فیصد نمایاں کمی'
    ],
    associatedAgentIds: ['video-script', 'ad-copy', 'content'],
    whatsappText: 'Hi NexaBoost! I need high-converting UGC Ads & Video Scripts for my product marketing campaigns.'
  },
  {
    id: 'ugi-ai-influencer-ads',
    category: 'growth_media',
    title: 'UGI Ads — Next-Gen AI Virtual Influencer Network',
    titleUrdu: 'یو جی آئی (UGI) ایڈز: اے آئی ورچوئل ماڈلز و ایمبیسیڈرز',
    subtitle: 'Photorealistic AI Creators & Zero-Studio Video Production',
    subtitleUrdu: 'بغیر مہنگے شوٹ کے فوٹو ریئلسٹک اے آئی ماڈلز کی تشہیری ویڈیوز',
    badge: 'AI Influencer Ads',
    badgeUrdu: 'اے آئی ورچوئل ماڈلز',
    imageSrc: ugiInfluencersImg,
    aspectRatio: '9:16',
    description:
      'Eliminate costly influencer fees and endless studio delays with custom photorealistic AI influencers. Generate localized digital brand ambassadors that deliver flawless pitches in any language with lip-sync precision.',
    descriptionUrdu:
      'مہنگے ماڈلز اور اسٹوڈیو کے اخراجات ختم کریں۔ اپنے برانڈ کے لیے مخصوص فوٹو ریئلسٹک اے آئی ایمبیسیڈرز بنائیں جو کسی بھی زبان میں آپ کی مصنوعات کا تعارف اور لائیو ڈیمو پیش کر سکتے ہیں۔',
    highlights: [
      'Custom Brand Ambassador Avatars & Persona Creation',
      'Flawless Lip-Sync Video in Urdu, Arabic & English',
      'Zero Studio Shoot Overhead & 10x Faster Turnaround',
      'Multi-Angle E-Commerce Video Testing at Scale'
    ],
    highlightsUrdu: [
      'برانڈ کے لیے مخصوص ڈیجیٹل ماڈلز اور شخصیات کی تیاری',
      'اردو، عربی اور انگلش میں ہونٹوں کی درست حرکت کے ساتھ ویڈیوز',
      'اسٹوڈیو کے مہنگے اخراجات سے مکمل نجات',
      'ایک ہی دن میں درجنوں مختلف اشتہارات کی ٹیسٹنگ'
    ],
    associatedAgentIds: ['video-script', 'ad-copy', 'trend-listening'],
    whatsappText: 'Hi NexaBoost! I want to create custom UGI AI Influencer Ads for my brand campaigns.'
  },
  {
    id: 'omnichannel-3d-stack',
    category: 'strategy',
    title: 'Omnichannel Conversion Stack & Ad Channels',
    titleUrdu: 'اومنی چینل مارکیٹنگ و ہائی ٹکٹ کنورژن اسٹیک',
    subtitle: 'Unified Meta, Google, Instagram & Web Ecosystem Synergy',
    subtitleUrdu: 'گوگل، فیس بک، انسٹاگرام اور ویب سائٹ کا متحدہ مارکیٹنگ نظام',
    badge: 'Full-Funnel Synergy',
    badgeUrdu: 'متحدہ کنورژن اسٹیک',
    imageSrc: goldCubesImg,
    aspectRatio: '9:16',
    description:
      'Seamless multi-touch marketing architecture connecting Google Search, Meta Ads, Instagram Social Proof, and High-Ticket Digital Closing into a synchronized revenue flywheel.',
    descriptionUrdu:
      'گوگل سرچ، فیس بک، انسٹاگرام اور ہائی ٹکٹ سیلز کا ایسا ہم آہنگ نظام جو ہر پلیٹ فارم سے آنے والے گاہک کو بغیر ضائع کیے فوری خریدار میں تبدیل کرتا ہے۔',
    highlights: [
      'Multi-Channel Attribution & Retargeting Loops',
      'Cross-Platform Lead Data Synchronization',
      'High-Ticket Luxury Brand Positioning',
      'Automated Customer Journey Orchestration'
    ],
    highlightsUrdu: [
      'تمام پلیٹ فارمز پر ایک ساتھ دوبارہ اشتہار دکھانے کا نظام',
      'لیڈز کے ڈیٹا کی فوری خودکار ہم آہنگی',
      'برانڈ کی پروقار اور پرتعیش مارکیٹ ویلیو کی تعمیر',
      'گاہک کی پہلی نظر سے خریداری تک خودکار رہنمائی'
    ],
    associatedAgentIds: ['ad-copy', 'closer', 'trend-listening'],
    whatsappText: 'Hi NexaBoost! I want to scale my business across Google, Meta, and Instagram using your Omnichannel Stack.'
  },
  {
    id: 'strategy-executive-desk',
    category: 'strategy',
    title: '90-Day GTM Growth Strategy & Executive Blueprint',
    titleUrdu: '۹۰ روزہ گو-ٹو-مارکیٹ اسٹریٹجی و ایگزیکٹو روڈ میپ',
    subtitle: 'Data-Driven Market Research, Unit Economics & Scaling Plans',
    subtitleUrdu: 'مارکیٹ ریسرچ، قیمتوں کا درست تعین اور کاروبار کی توسیع کا پلان',
    badge: 'Executive Scaling Roadmap',
    badgeUrdu: '۹۰ روزہ گروتھ پلان',
    imageSrc: strategyDeskImg,
    aspectRatio: '9:16',
    description:
      'Customized enterprise business blueprints crafted with quantitative market research, competitor vulnerability benchmarks, profit margin optimization, and weekly tactical milestones.',
    descriptionUrdu:
      'کاروبار کے لیے مخصوص جامع روڈ میپ جس میں مارکیٹ ریسرچ، حریفوں کی کمزوریوں کا جائزہ، منافع کی شرح بڑھانے کی تدابیر اور ہر ہفتے کے اہداف شامل ہیں۔',
    highlights: [
      'Detailed 4-Pillar SWOT Analysis & Risk Shield',
      'Pricing Elasticity & Profit Optimization Matrix',
      'Week-by-Week 90-Day Implementation Timeline',
      'Executive 1-Page Summary for Board & Investors'
    ],
    highlightsUrdu: [
      'طاقتوں، کمزوریوں اور مواقع کا تفصیلی سائنسی تجزیہ',
      'قیمتوں کا ایسا تعین جس سے منافع میں زیادہ سے زیادہ اضافہ ہو',
      'ہفتہ وار بنیادوں پر اگلے ۹۰ دن کا واضح ٹائم لائن',
      'سرمایہ کاروں اور ڈائریکٹرز کے لیے ۱ صفحے کا مختصر خلاصہ'
    ],
    associatedAgentIds: ['market-research', 'closer', 'lead-gen'],
    whatsappText: 'Hi NexaBoost team! I want a customized 90-Day GTM Strategy & Scaling Blueprint for my business.'
  },
  {
    id: 'product-web-app-suite',
    category: 'product_tech',
    title: 'Full-Stack Product Suite: Web-AI, Apps & Digital Assets',
    titleUrdu: 'پروڈکٹ و ٹیک سوٹ: ویب سائٹ اے آئی، موبائل ایپس و برانڈنگ',
    subtitle: 'Ultra-Fast React 18, Mobile Apps, Digital Products & Enterprise UI',
    subtitleUrdu: 'سپر فاسٹ ویب سائٹس، جدید موبائل ایپس اور مکمل برانڈ کٹ',
    badge: 'Full-Stack Tech Suite',
    badgeUrdu: 'ویب، موبائل اور ڈیجیٹل سوٹ',
    imageSrc: productSuiteImg,
    aspectRatio: '9:16',
    description:
      'State-of-the-art web applications, iOS/Android mobile apps, e-commerce stores, and digital products engineered for ultra-fast load times, seamless payments, and maximum conversion rates.',
    descriptionUrdu:
      'جدید ترین ویب سائٹس، آئی فون اور اینڈرائیڈ کی موبائل ایپس، شاپائفائی ای کامرس اسٹورز اور ڈیجیٹل مصنوعات جو تیز ترین لوڈ ٹائم اور آسان ادائیگی کے ساتھ بنائی گئی ہیں۔',
    highlights: [
      'Blazing Fast React, Next.js & Mobile Architecture',
      'Integrated WhatsApp Checkout & Payment Gateways',
      'High-Conversion UI/UX Design System & Dark Luxury Themes',
      'End-to-End Brand Guidelines & Identity Kit'
    ],
    highlightsUrdu: [
      'تیز ترین ری ایکٹ اور موبائل ایپ ٹیکنالوجی',
      'واٹس ایپ اور آن لائن پیمنٹ گیٹ ویز کا فوری انضمام',
      'خوبصورت اور خریداروں کو مائل کرنے والا جدید ڈیزائن',
      'لوگو، رنگوں اور مکمل برانڈ بک کی فراہمی'
    ],
    associatedAgentIds: ['whatsapp-crm', 'seo-competitor', 'content'],
    whatsappText: 'Hi NexaBoost! I want to build a Website-AI, Custom Mobile App, or Digital Product Suite.'
  }
];
