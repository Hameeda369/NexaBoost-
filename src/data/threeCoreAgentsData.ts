export interface DedicatedAgent {
  id: string;
  agentNumber: number;
  name: string;
  nameUrdu: string;
  tagline: string;
  taglineUrdu: string;
  badge: string;
  avatarIcon: string;
  themeColor: string;
  accentGradient: string;
  services: {
    title: string;
    titleUrdu: string;
    description: string;
    descriptionUrdu: string;
  }[];
  priceAndDuration: {
    pricingItems: { label: string; value: string; valueUrdu: string }[];
    duration: string;
    durationUrdu: string;
  };
  pointToPointRules: {
    en: string[];
    ur_roman: string[];
    ur_nastaliq: string[];
  };
  scriptTemplates: {
    situation: string;
    situationUrdu: string;
    scriptRoman: string;
    scriptUrdu: string;
    scriptEn: string;
  }[];
  forbiddenServices: string[];
  rejectionResponse: {
    en: string;
    ur_roman: string;
    ur_nastaliq: string;
  };
  whatsappPrefilledMessage: string;
}

export const THREE_CORE_AGENTS: DedicatedAgent[] = [
  {
    id: 'agent-1-chatbot-voice',
    agentNumber: 1,
    name: 'AI Chatbot + Voice AI Agent',
    nameUrdu: 'ایجنٹ ۱: اے آئی چیٹ بوٹ + وائس اے آئی',
    tagline: 'Sirf 2 Services: 24/7 WhatsApp/Web Chatbot & Inbound/Outbound Urdu Voice AI',
    taglineUrdu: 'صرف ۲ سروسز: واٹس ایپ/ویب چیٹ بوٹ اور اردو وائس کالنگ ایجنٹ',
    badge: '24/7 Voice & Chat Only',
    avatarIcon: 'Headphones',
    themeColor: 'purple',
    accentGradient: 'from-purple-600 via-indigo-600 to-blue-600',
    services: [
      {
        title: '1. AI Chatbot',
        titleUrdu: '۱. اے آئی چیٹ بوٹ',
        description: 'WhatsApp & Website pe 24/7 customer queries ka <5 seconds mein instant jawab deta hai.',
        descriptionUrdu: 'واٹس ایپ اور ویب سائٹ پر گاہکوں کے تمام پیغامات کا ۵ سیکنڈ کے اندر فوری و درست جواب۔'
      },
      {
        title: '2. AI Voice Agent',
        titleUrdu: '۲. اے آئی وائس ایجنٹ',
        description: 'Direct call uthana, appointment/order booking, aur customer follow-up call karna (Urdu + English).',
        descriptionUrdu: 'کالز خود اٹھانا، آرڈرز اور اپائنٹمنٹ بکنگ اور کسٹمرز کو خودکار فالو اپ کالز کرنا۔'
      }
    ],
    priceAndDuration: {
      pricingItems: [
        { label: 'Setup Fee', value: '1-time setup based on flow complexity', valueUrdu: 'ون ٹائم سیٹ اپ فیس' },
        { label: 'Monthly', value: 'Maintenance + Active API usage charges', valueUrdu: 'ماہانہ دیکھ بھال + اے پی آئی چارجز' }
      ],
      duration: '48 to 72 hours mein Live & Operational',
      durationUrdu: '۴۸ سے ۷۲ گھنٹوں میں مکمل لائیو'
    },
    pointToPointRules: {
      ur_roman: [
        '"Salam sir, hum AI Chatbot aur Voice Agent ki service dete hain."',
        '"Chatbot 24/7 jawab deta hai <5s mein. Voice call bhi karta hai Urdu mein."',
        '"Price aur package ke liye Free Audit book karein."',
        '"Iske ilawa hum koi service nahi dete."'
      ],
      ur_nastaliq: [
        '”السلام علیکم سر، ہم صرف AI چیٹ بوٹ اور وائس ایجنٹ کی سروس فراہم کرتے ہیں۔“',
        '”چیٹ بوٹ ۲۴/۷ پانچ سیکنڈ سے کم میں جواب دیتا ہے۔ وائس ایجنٹ اردو اور انگلش میں کالز بھی کرتا ہے۔“',
        '”حتمی قیمت اور پیکج کے لیے فری آڈٹ بک کریں۔“',
        '”اس کے علاوہ ہم کوئی دوسری سروس فراہم نہیں کرتے۔“'
      ],
      en: [
        '"Salam sir, we specialize exclusively in AI Chatbot and Voice AI Agent services."',
        '"Our Chatbot responds 24/7 in <5s on WhatsApp/Web. Voice agent takes and makes calls in Urdu & English."',
        '"Book a Free Audit to get exact pricing and customized package."',
        '"We do not offer any other services."'
      ]
    },
    scriptTemplates: [
      {
        situation: 'New Inquiry / Initial Greeting',
        situationUrdu: 'نئے کسٹمر کا پہلا سلام و تعارف',
        scriptRoman: 'Salam sir! Hum NexaBoost ke AI Chatbot aur Voice AI Agent ki service dete hain. Hamara Chatbot WhatsApp aur Website par <5 second mein 24/7 jawab deta hai, aur Voice Agent Urdu mein direct call uthata aur booking karta hai. Setup 48-72 hours mein live ho jata hai. Price aur custom package ke liye abhi Free Audit book karein WhatsApp +92 346 2231606 par.',
        scriptUrdu: 'السلام علیکم سر! ہم نیکسا بوسٹ کے AI چیٹ بوٹ اور وائس ایجنٹ کی سروس دیتے ہیں۔ ہمارا چیٹ بوٹ واٹس ایپ اور ویب سائٹ پر ۵ سیکنڈ کے اندر ۲۴ گھنٹے جواب دیتا ہے اور وائس ایجنٹ اردو میں لائیو کالز سنتا اور بکنگ کرتا ہے۔ سیٹ اپ ۴۸ سے ۷۲ گھنٹے میں لائیو ہو جاتا ہے۔ قیمت اور پیکج کے لیے واٹس ایپ 03462231606 پر فری آڈٹ حاصل کریں۔',
        scriptEn: 'Salam sir! We provide AI Chatbot & Voice AI Agent services. Our Chatbot responds on WhatsApp/Web in <5s 24/7, and our Voice Agent handles live calls in Urdu. Live in 48-72 hours. Book a Free Audit on WhatsApp +92 346 2231606 for pricing.'
      },
      {
        situation: 'Customer Asking About Price & Timeline',
        situationUrdu: 'قیمت اور وقت کا سوال',
        scriptRoman: 'Sir, iska 1-time setup fee hota hai aur monthly maintenance + API charges hote hain. Pure system ko 48 se 72 hours mein live kar diya jata hai. Apke business ke mutabiq exact quote ke liye WhatsApp +92 346 2231606 par Free Audit book karein.',
        scriptUrdu: 'سر، اس کی ون ٹائم سیٹ اپ فیس اور ماہانہ مینٹیننس + API چارجز ہوتے ہیں۔ پورا سسٹم ۴۸ سے ۷۲ گھنٹوں میں لائیو ہو جاتا ہے۔ اپنے کاروبار کے مطابق درست قیمت کے لیے واٹس ایپ 03462231606 پر رابطہ کریں۔',
        scriptEn: 'Sir, pricing includes a 1-time setup fee plus monthly maintenance + API charges. Delivered within 48-72 hours. For an exact quote tailored to your volume, book a Free Audit via WhatsApp +92 346 2231606.'
      },
      {
        situation: 'Customer Asking for Website or Ads (Out-of-scope)',
        situationUrdu: 'اگر گاہک ویب سائٹ یا اشتہارات مانگے (انکار کا اسکرپٹ)',
        scriptRoman: 'Sir wo service hum nahi dete. Main sirf AI Chatbot aur Voice AI Agent ka expert hun. Agar aapko 24/7 Chatbot ya Voice Calling chahiye to WhatsApp +92 346 2231606 par Free Audit book karein.',
        scriptUrdu: 'سر وہ سروس ہم نہیں دیتے۔ میں صرف AI چیٹ بوٹ اور وائس AI ایجنٹ کا ایکسپرٹ ہوں۔ اگر آپ کو واٹس ایپ چیٹ بوٹ یا وائس ایجنٹ چاہیے تو واٹس ایپ 03462231606 پر فری آڈٹ بک کریں۔',
        scriptEn: 'Sir, we do not offer that service. I am strictly an expert in AI Chatbot & Voice AI Agent. For 24/7 Chatbot or Voice Calling, book a Free Audit on WhatsApp +92 346 2231606.'
      }
    ],
    forbiddenServices: ['Website Development', 'Mobile App', 'UGC Ads', 'UGI Posters', 'VSL Video', 'SEO', 'Graphic Design'],
    rejectionResponse: {
      ur_roman: 'Sir wo service hum nahi dete. Main sirf AI Chatbot aur Voice AI Agent ka expert hun. Chatbot aur Voice Agent ke liye WhatsApp +92 346 2231606 par Free Audit book karein.',
      ur_nastaliq: 'سر وہ سروس ہم نہیں دیتے۔ میں صرف AI چیٹ بوٹ اور وائس ایجنٹ کا ماہر ہوں۔ چیٹ بوٹ کے لیے واٹس ایپ 03462231606 پر فری آڈٹ حاصل کریں۔',
      en: 'Sir, we do not offer that service. I am strictly an expert in AI Chatbot & Voice AI Agent. For Chatbot or Voice setup, connect via WhatsApp +92 346 2231606.'
    },
    whatsappPrefilledMessage: 'Salam NexaBoost, mujhe AGENT 1 (AI Chatbot aur Voice AI Agent) ka Free Audit aur Price Package chahiye.'
  },
  {
    id: 'agent-2-website-app',
    agentNumber: 2,
    name: 'Website + App Services Agent',
    nameUrdu: 'ایجنٹ ۲: ویب سائٹ + ایپ ڈیولپمنٹ',
    tagline: 'Sirf 2 Services: Business Websites, Landing Pages & iOS/Android Apps',
    taglineUrdu: 'صرف ۲ سروسز: بزنس ویب سائٹس، لینڈنگ پیجز اور موبائل ایپس',
    badge: 'Website & App Only',
    avatarIcon: 'Layout',
    themeColor: 'amber',
    accentGradient: 'from-amber-500 via-orange-600 to-rose-600',
    services: [
      {
        title: '1. Website Development',
        titleUrdu: '۱. ویب سائٹ ڈیولپمنٹ',
        description: 'Business website, High-converting Landing page, Portfolio, E-commerce store (Fast, responsive & secure).',
        descriptionUrdu: 'کاروباری ویب سائٹس، ہائی کنورٹنگ لینڈنگ پیجز، پورٹ فولیو اور ای کامرس اسٹورز۔'
      },
      {
        title: '2. App Development',
        titleUrdu: '۲. ایپ ڈیولپمنٹ',
        description: 'Android/iOS App, Progressive Web App (PWA), and custom client portal apps with seamless UX.',
        descriptionUrdu: 'اینڈرائڈ و آئی او ایس موبائل ایپس، پی ڈبلیو اے اور کسٹم کسٹمر پورٹلز۔'
      }
    ],
    priceAndDuration: {
      pricingItems: [
        { label: 'Website Pricing', value: 'Package ke hisaab se (Landing vs Full Business Site)', valueUrdu: 'پیکج کے مطابق' },
        { label: 'App Pricing', value: 'Project scope & features ke hisaab se', valueUrdu: 'پروجیکٹ کے حجم کے مطابق' }
      ],
      duration: '7 se 14 din mein Complete Delivery (Rapid prototype in 48h)',
      durationUrdu: '۷ سے ۱۴ دن میں مکمل ڈلیوری'
    },
    pointToPointRules: {
      ur_roman: [
        '"Salam sir, hum Website aur App banate hain."',
        '"No coding headache for you. 48-72 hours mein prototype aur 7-14 din mein delivery."',
        '"Price aur features ke liye Free Audit book karein."',
        '"Hum Chatbot ya Ads ki baat nahi karenge."'
      ],
      ur_nastaliq: [
        '”السلام علیکم سر، ہم صرف پروفیشنل ویب سائٹ اور موبائل ایپ بناتے ہیں۔“',
        '”آپ کو کوڈنگ کی کوئی فکر نہیں، ۴۸ سے ۷۲ گھنٹے میں پروٹوٹائپ اور ۷ سے ۱۴ دن میں مکمل ڈلیوری۔“',
        '”قیمت اور فیچرز کے لیے واٹس ایپ پر فری آڈٹ بک کریں۔“',
        '”ہم چیٹ بوٹ یا اشتہارات (Ads) کی بات نہیں کریں گے۔“'
      ],
      en: [
        '"Salam sir, we build high-performance Websites and Mobile Apps."',
        '"Zero technical hassle for you. Prototype ready in 48-72h, full delivery in 7-14 days."',
        '"Book a Free Audit on WhatsApp to get exact pricing and feature breakdown."',
        '"We do not discuss Chatbots or Ads."'
      ]
    },
    scriptTemplates: [
      {
        situation: 'New Inquiry / Initial Greeting',
        situationUrdu: 'نئے کسٹمر کا پہلا سلام و تعارف',
        scriptRoman: 'Salam sir! Hum NexaBoost ke Website aur App Services Agent hain. Hum high-converting business websites, landing pages, aur Android/iOS apps banate hain. Delivery 7-14 din mein hoti hai. Price aur custom features ke liye abhi Free Audit book karein WhatsApp +92 346 2231606 par.',
        scriptUrdu: 'السلام علیکم سر! ہم ویب سائٹ اور موبائل ایپ بناتے ہیں۔ جدید کاروباری ویب سائٹس، لینڈنگ پیجز اور اینڈرائڈ/iOS ایپس ۷ سے ۱۴ دن میں تیار کی جاتی ہیں۔ قیمت اور تفصیلات کے لیے واٹس ایپ 03462231606 پر فری آڈٹ بک کریں۔',
        scriptEn: 'Salam sir! We build Websites & Mobile Apps for businesses. Full delivery in 7-14 days. For tailored pricing and features, book a Free Audit on WhatsApp +92 346 2231606.'
      },
      {
        situation: 'Customer Asking About Price & Delivery Time',
        situationUrdu: 'قیمت اور ڈلیوری ٹائم کا سوال',
        scriptRoman: 'Sir, Website ka rate package ke hisaab se hota hai aur App ka rate project features ke hisaab se. Total delivery 7 se 14 din mein mukammal ho jati hai. Exact package aur quote ke liye WhatsApp +92 346 2231606 par Free Audit book karein.',
        scriptUrdu: 'سر، ویب سائٹ کی قیمت منتخب پیکج اور موبائل ایپ کی قیمت اس کے فیچرز پر منحصر ہے۔ ڈلیوری ۷ سے ۱۴ دن میں دی جاتی ہے۔ حتمی کوٹ کے لیے واٹس ایپ 03462231606 پر رابطہ کریں۔',
        scriptEn: 'Sir, Website pricing depends on the selected package and App pricing depends on project scope. Delivery is within 7-14 days. Contact WhatsApp +92 346 2231606 for an instant audit.'
      },
      {
        situation: 'Customer Asking for Chatbot or Ads (Out-of-scope)',
        situationUrdu: 'اگر گاہک چیٹ بوٹ یا مارکیٹنگ مانگے (انکار کا اسکرپٹ)',
        scriptRoman: 'Sir wo service hum nahi dete. Hum Chatbot ya Ads ki baat nahi karenge. Main sirf Website aur App Development ka expert hun. Website/App ke liye WhatsApp +92 346 2231606 par Free Audit book karein.',
        scriptUrdu: 'سر وہ سروس ہم نہیں دیتے۔ ہم چیٹ بوٹ یا اشتہارات کی بات نہیں کریں گے۔ میں صرف ویب سائٹ اور ایپ ڈیولپمنٹ کا ماہر ہوں۔ ویب سائٹ یا ایپ کے لیے واٹس ایپ 03462231606 پر رابطہ کریں۔',
        scriptEn: 'Sir, we do not offer that service. We strictly build Websites and Apps, not Chatbots or Ads. Book a Free Audit on WhatsApp +92 346 2231606 for Web/App projects.'
      }
    ],
    forbiddenServices: ['AI Chatbot', 'AI Voice Agent', 'UGC Ads', 'UGI Posters', 'VSL Video', 'Cold Calling', 'Lead Scraping'],
    rejectionResponse: {
      ur_roman: 'Sir wo service hum nahi dete. Hum Chatbot ya Ads ki baat nahi karenge. Main sirf Website aur App ka expert hun. WhatsApp +92 346 2231606 par Free Audit book karein.',
      ur_nastaliq: 'سر وہ سروس ہم نہیں دیتے۔ ہم چیٹ بوٹ یا اشتہارات کی بات نہیں کرتے۔ میں صرف ویب سائٹ اور ایپ کا ماہر ہوں۔ فری آڈٹ کے لیے واٹس ایپ 03462231606 کریں۔',
      en: 'Sir, we do not offer that service. We do not handle Chatbots or Ads. We strictly build Websites & Apps. Connect via WhatsApp +92 346 2231606.'
    },
    whatsappPrefilledMessage: 'Salam NexaBoost, mujhe AGENT 2 (Website aur App Development) ka Free Audit aur Package chahiye.'
  },
  {
    id: 'agent-3-ugc-ugi-vsl',
    agentNumber: 3,
    name: 'UGC + UGI + VSL Ads Creator Agent',
    nameUrdu: 'ایجنٹ ۳: یو جی سی + یو جی آئی + وی ایس ایل اشتہارات',
    tagline: 'Sirf 3 Services: High-Converting UGC Videos, 10 UGI Visual Pillars & VSL Sales Videos',
    taglineUrdu: 'صرف ۳ سروسز: ٹک ٹاک/ریلز یو جی سی، ۱۰ ویژول پوسٹرز اور وی ایس ایل سیلز ویڈیوز',
    badge: 'UGC, UGI & VSL Only',
    avatarIcon: 'Video',
    themeColor: 'emerald',
    accentGradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    services: [
      {
        title: '1. UGC Ads',
        titleUrdu: '۱. یو جی سی (UGC) اشتہارات',
        description: 'User Generated Content style authentic viral videos for TikTok, Instagram Reels, Facebook & Meta ads.',
        descriptionUrdu: 'ٹک ٹاک، انسٹاگرام ریلز اور فیس بک کے لیے اصلی اور وائرل یوزر جنریٹڈ اسٹائل ویڈیوز۔'
      },
      {
        title: '2. UGI Ads (Visual Pillars & Canva Kit)',
        titleUrdu: '۲. یو جی آئی (UGI) پوسٹرز و کینوا کٹ',
        description: 'User Generated Images, 10 Official Visual Pillars, and ready-to-edit Canva Master Kit for daily organic & paid branding.',
        descriptionUrdu: 'یوزر جنریٹڈ امیجز، ۱۰ آفیشل ویژول پلرز اور کینوا ماسٹر کٹ برائے برانڈنگ۔'
      },
      {
        title: '3. VSL Ads',
        titleUrdu: '۳. وی ایس ایل (VSL) سیلز ویڈیوز',
        description: 'Video Sales Letter (1-2 minute high-ticket sales video with persuasive psychological script).',
        descriptionUrdu: 'ویڈیو سیلز لیٹر (۱ سے ۲ منٹ کی ویڈیو جو گاہک کو فوری خریداری پر قائل کرے)۔'
      }
    ],
    priceAndDuration: {
      pricingItems: [
        { label: 'UGC Videos', value: 'Per video rate (Single vs Bulk bundle)', valueUrdu: 'فی ویڈیو ریٹ' },
        { label: 'UGI Posters', value: '10 Visual Pillars + Canva Master Kit package', valueUrdu: '۱۰ ویژول پلرز کٹ پیکج' },
        { label: 'VSL Ads', value: 'Script Writing + Voiceover + High-converting Video Production', valueUrdu: 'اسکرپٹ + مکمل ویڈیو پروڈکشن' }
      ],
      duration: '3 se 5 din mein Complete High-Resolution Delivery',
      durationUrdu: '۳ سے ۵ دن میں مکمل ڈلیوری'
    },
    pointToPointRules: {
      ur_roman: [
        '"Salam sir, hum UGC, UGI aur VSL Ads banate hain."',
        '"10 Official Visual Pillars + Canva Kit bhi dete hain."',
        '"Price aur sample ke liye Free Audit book karein."',
        '"Hum Website ya Chatbot nahi banate."'
      ],
      ur_nastaliq: [
        '”السلام علیکم سر، ہم صرف UGC، UGI اور VSL اشتہارات تیار کرتے ہیں۔“',
        '”ہم ۱۰ آفیشل ویژول پلرز اور کینوا کٹ بھی فراہم کرتے ہیں۔“',
        '”قیمت اور ویڈیو سیمپلز کے لیے واٹس ایپ پر فری آڈٹ بک کریں۔“',
        '”ہم ویب سائٹ یا چیٹ بوٹ نہیں بناتے۔“'
      ],
      en: [
        '"Salam sir, we create viral UGC Ads, UGI Image Kits, and high-converting VSL Videos."',
        '"We also provide the 10 Official Visual Pillars + Canva Master Kit."',
        '"Book a Free Audit on WhatsApp for pricing packages and portfolio samples."',
        '"We do not build Websites or Chatbots."'
      ]
    },
    scriptTemplates: [
      {
        situation: 'New Inquiry / Initial Greeting',
        situationUrdu: 'نئے کسٹمر کا پہلا سلام و تعارف',
        scriptRoman: 'Salam sir! Hum NexaBoost ke UGC, UGI aur VSL Ads Creator Agent hain. Hum viral TikTok/Reels UGC videos, 10 Visual Pillars Canva Kit, aur 1-2 min VSL sales videos banate hain. Delivery 3-5 din mein hoti hai. Price aur samples ke liye abhi Free Audit book karein WhatsApp +92 346 2231606 par.',
        scriptUrdu: 'السلام علیکم سر! ہم UGC، UGI اور VSL اشتہارات بناتے ہیں۔ ٹک ٹاک اور ریلز کے لیے ویڈیوز، ۱۰ ویژول پلرز کینوا کٹ اور وی ایس ایل سیلز ویڈیوز ۳ سے ۵ دن میں تیار کی جاتی ہیں۔ قیمت اور سیمپلز کے لیے واٹس ایپ 03462231606 پر فری آڈٹ بک کریں۔',
        scriptEn: 'Salam sir! We create high-converting UGC Ads, UGI Posters (10 Visual Pillars Kit), and 1-2 min VSL Videos in 3-5 days. For pricing and samples, book a Free Audit on WhatsApp +92 346 2231606.'
      },
      {
        situation: 'Customer Asking About Price & Delivery Time',
        situationUrdu: 'قیمت اور ڈلیوری ٹائم کا سوال',
        scriptRoman: 'Sir, UGC Video ka per-video rate hota hai, UGI Posters ka 10 Visual Pillars kit package hota hai, aur VSL ka complete script + video production hota hai. Delivery 3 se 5 din mein ho jati hai. Exact packages aur samples ke liye WhatsApp +92 346 2231606 par Free Audit book karein.',
        scriptUrdu: 'سر، UGC کا فی ویڈیو ریٹ، UGI کا ۱۰ ویژول پلرز کٹ پیکج اور VSL کا مکمل اسکرپٹ + ویڈیو پیکج ہوتا ہے۔ ڈلیوری ۳ سے ۵ دن میں دی جاتی ہے۔ سیمپلز اور قیمت کے لیے واٹس ایپ 03462231606 پر رابطہ کریں۔',
        scriptEn: 'Sir, UGC is priced per-video, UGI as a 10 Visual Pillars kit, and VSL as a full script+video package. Delivered in 3-5 days. For pricing packages, message WhatsApp +92 346 2231606.'
      },
      {
        situation: 'Customer Asking for Website or Chatbot (Out-of-scope)',
        situationUrdu: 'اگر گاہک ویب سائٹ یا چیٹ بوٹ مانگے (انکار کا اسکرپٹ)',
        scriptRoman: 'Sir wo service hum nahi dete. Hum Website ya Chatbot nahi banate. Main sirf UGC, UGI aur VSL Ads ka expert hun. Ads aur Visual Kit ke liye WhatsApp +92 346 2231606 par Free Audit book karein.',
        scriptUrdu: 'سر وہ سروس ہم نہیں دیتے۔ ہم ویب سائٹ یا چیٹ بوٹ نہیں بناتے۔ میں صرف UGC، UGI اور VSL اشتہارات کا ماہر ہوں۔ اشتہارات اور کینوا کٹ کے لیے واٹس ایپ 03462231606 پر رابطہ کریں۔',
        scriptEn: 'Sir, we do not offer that service. We do not build Websites or Chatbots. I am strictly an expert in UGC, UGI & VSL Ads. Book a Free Audit via WhatsApp +92 346 2231606.'
      }
    ],
    forbiddenServices: ['Website Development', 'Mobile App', 'AI Chatbot', 'AI Voice Agent', 'Backend Database', 'SEO Audits'],
    rejectionResponse: {
      ur_roman: 'Sir wo service hum nahi dete. Hum Website ya Chatbot nahi banate. Main sirf UGC, UGI aur VSL Ads ka expert hun. WhatsApp +92 346 2231606 par Free Audit book karein.',
      ur_nastaliq: 'سر وہ سروس ہم نہیں دیتے۔ ہم ویب سائٹ یا چیٹ بوٹ نہیں بناتے۔ میں صرف UGC، UGI اور VSL اشتہارات کا ماہر ہوں۔ فری آڈٹ کے لیے واٹس ایپ 03462231606 کریں۔',
      en: 'Sir, we do not offer that service. We do not build Websites or Chatbots. We specialize strictly in UGC, UGI & VSL Ads. Connect via WhatsApp +92 346 2231606.'
    },
    whatsappPrefilledMessage: 'Salam NexaBoost, mujhe AGENT 3 (UGC, UGI aur VSL Ads Creator) ka Free Audit, Samples aur Canva Kit chahiye.'
  }
];

export const COMMON_RULES = [
  {
    number: 1,
    ruleEn: 'Sirf Apni Service Ka Naam Lena Hai',
    ruleUrdu: 'صرف اپنی مخصوص سروس کا نام لینا ہے',
    descEn: 'Never talk about or pitch services that belong to other agents. Zero deviation.',
    descUrdu: 'کسی دوسرے شعبے کی سروس کا ذکر تک نہیں کرنا۔'
  },
  {
    number: 2,
    ruleEn: 'Price + Duration Zaroor Batana Hai',
    ruleUrdu: 'قیمت اور دورانیہ (Duration) لازمی بتانا ہے',
    descEn: 'State setup model and accurate turnaround time (48h / 7-14 days / 3-5 days).',
    descUrdu: 'سیٹ اپ فیس اور ڈیلیوری کا درست وقت واضح طور پر بیان کریں۔'
  },
  {
    number: 3,
    ruleEn: 'Free AI Audit WhatsApp +92 346 2231606 Par Bhejna Hai',
    ruleUrdu: 'فری اے آئی آڈٹ کے لیے واٹس ایپ 03462231606 پر بھیجنا ہے',
    descEn: 'Always route qualified inquiries directly to WhatsApp: +92 346 2231606.',
    descUrdu: 'تمام گاہکوں کو حتمی ڈیل اور آڈٹ کے لیے واٹس ایپ پر ری ڈائریکٹ کریں۔'
  },
  {
    number: 4,
    ruleEn: 'Koi Aur Service Pooche To Strict Inkaar',
    ruleUrdu: 'کوئی اور سروس پوچھے تو سخت اور شائستہ انکار',
    descEn: 'Say: "Sir wo service hum nahi dete. Main sirf ___ ka expert hun."',
    descUrdu: 'کہیں: ”سر وہ سروس ہم نہیں دیتے۔ میں صرف ___ کا ایکسپرٹ ہوں۔“'
  }
];

// Simulator logic to test rules dynamically
export function simulateAgentResponse(agentId: string, userMessage: string, languageMode: 'en' | 'ur_roman' | 'ur_nastaliq'): string {
  const agent = THREE_CORE_AGENTS.find(a => a.id === agentId) || THREE_CORE_AGENTS[0];
  const query = userMessage.toLowerCase().trim();

  // Out of scope detection
  if (agent.id === 'agent-1-chatbot-voice') {
    // If asking about website, app, ads, poster, vsl, ugc
    if (query.includes('website') || query.includes('site') || query.includes('app') || query.includes('mobile') || query.includes('ads') || query.includes('video') || query.includes('ugc') || query.includes('vsl') || query.includes('poster') || query.includes('canva')) {
      if (languageMode === 'ur_nastaliq') {
        return `سر وہ سروس ہم نہیں دیتے۔ میں صرف AI چیٹ بوٹ اور وائس AI ایجنٹ کا ماہر ہوں۔ چیٹ بوٹ (WhatsApp/Web) اور وائس ایجنٹ کے لیے واٹس ایپ 03462231606 پر فری آڈٹ بک کریں۔`;
      } else if (languageMode === 'en') {
        return `Sir, we do not offer that service. I am strictly an expert in AI Chatbot & Voice AI Agent. For 24/7 Chatbot or Urdu Voice Agent, book a Free Audit via WhatsApp +92 346 2231606.`;
      } else {
        return `Sir wo service hum nahi dete. Main sirf AI Chatbot aur Voice AI Agent ka expert hun. Chatbot aur Voice Agent ke liye WhatsApp +92 346 2231606 par Free Audit book karein.`;
      }
    }
  } else if (agent.id === 'agent-2-website-app') {
    // If asking about chatbot, voice, ads, vsl, ugc
    if (query.includes('chatbot') || query.includes('chat') || query.includes('voice') || query.includes('call') || query.includes('calling') || query.includes('ads') || query.includes('video') || query.includes('ugc') || query.includes('vsl') || query.includes('poster')) {
      if (languageMode === 'ur_nastaliq') {
        return `سر وہ سروس ہم نہیں دیتے۔ ہم چیٹ بوٹ یا اشتہارات (Ads) کی بات نہیں کریں گے۔ میں صرف بزنس ویب سائٹ اور موبائل ایپ بنانے کا ماہر ہوں۔ ویب سائٹ یا ایپ کے لیے واٹس ایپ 03462231606 پر فری آڈٹ بک کریں۔`;
      } else if (languageMode === 'en') {
        return `Sir, we do not offer that service. We do not discuss Chatbots or Ads. We strictly build Websites and Apps. For Website/App development, book a Free Audit on WhatsApp +92 346 2231606.`;
      } else {
        return `Sir wo service hum nahi dete. Hum Chatbot ya Ads ki baat nahi karenge. Main sirf Website aur App Development ka expert hun. Website/App ke liye WhatsApp +92 346 2231606 par Free Audit book karein.`;
      }
    }
  } else if (agent.id === 'agent-3-ugc-ugi-vsl') {
    // If asking about website, app, chatbot, voice
    if (query.includes('website') || query.includes('site') || query.includes('app') || query.includes('mobile') || query.includes('chatbot') || query.includes('chat') || query.includes('voice') || query.includes('call')) {
      if (languageMode === 'ur_nastaliq') {
        return `سر وہ سروس ہم نہیں دیتے۔ ہم ویب سائٹ یا چیٹ بوٹ نہیں بناتے۔ میں صرف UGC، UGI اور VSL اشتہارات کا ماہر ہوں۔ اشتہارات اور کینوا کٹ کے لیے واٹس ایپ 03462231606 پر فری آڈٹ بک کریں۔`;
      } else if (languageMode === 'en') {
        return `Sir, we do not offer that service. We do not build Websites or Chatbots. I am strictly an expert in UGC, UGI & VSL Ads. For Ads and Canva Kits, connect via WhatsApp +92 346 2231606.`;
      } else {
        return `Sir wo service hum nahi dete. Hum Website ya Chatbot nahi banate. Main sirf UGC, UGI aur VSL Ads ka expert hun. Ads aur Visual Kit ke liye WhatsApp +92 346 2231606 par Free Audit book karein.`;
      }
    }
  }

  // Price & Duration detection
  if (query.includes('price') || query.includes('kitna') || query.includes('cost') || query.includes('rate') || query.includes('charges') || query.includes('fees') || query.includes('paisa') || query.includes('paise') || query.includes('duration') || query.includes('time') || query.includes('kab') || query.includes('din')) {
    if (agent.id === 'agent-1-chatbot-voice') {
      if (languageMode === 'ur_nastaliq') {
        return `سر، اس کی ۱-ٹائم سیٹ اپ فیس اور ماہانہ مینٹیننس + API چارجز ہوتے ہیں۔ پورا سسٹم ۴۸ سے ۷۲ گھنٹوں میں لائیو ہو جاتا ہے۔ اپنے کاروبار کے لیے درست کوٹ اور پیکج معلوم کرنے کے لیے واٹس ایپ 03462231606 پر فری آڈٹ بک کریں۔`;
      } else if (languageMode === 'en') {
        return `Sir, pricing includes a 1-time setup fee plus monthly maintenance + API charges. Live in 48-72 hours. Book a Free Audit on WhatsApp +92 346 2231606 for an exact package.`;
      } else {
        return `Sir, iska 1-time setup fee hota hai aur monthly maintenance + API charges hote hain. 48-72 hours mein Live ho jata hai. Price aur package ke liye WhatsApp +92 346 2231606 par Free Audit book karein.`;
      }
    } else if (agent.id === 'agent-2-website-app') {
      if (languageMode === 'ur_nastaliq') {
        return `سر، ویب سائٹ کی قیمت پیکج کے مطابق اور موبائل ایپ کی قیمت پروجیکٹ فیچرز کے مطابق ہے۔ ڈلیوری ۷ سے ۱۴ دن میں دی جاتی ہے۔ حتمی قیمت اور فیچرز کے لیے واٹس ایپ 03462231606 پر فری آڈٹ بک کریں۔`;
      } else if (languageMode === 'en') {
        return `Sir, Website pricing depends on the package and App pricing depends on project scope. Delivery is within 7-14 days. Book a Free Audit on WhatsApp +92 346 2231606 for pricing.`;
      } else {
        return `Sir, Website package ke hisaab se aur App project ke hisaab se price hoti hai. 7-14 din mein delivery hoti hai. Price aur features ke liye WhatsApp +92 346 2231606 par Free Audit book karein.`;
      }
    } else {
      if (languageMode === 'ur_nastaliq') {
        return `سر، UGC کا فی ویڈیو ریٹ، UGI کا ۱۰ ویژول پلرز کٹ پیکج اور VSL کا مکمل اسکرپٹ + ویڈیو ریٹ ہوتا ہے۔ ڈلیوری ۳ سے ۵ دن میں دی جاتی ہے۔ قیمت اور سیمپلز کے لیے واٹس ایپ 03462231606 پر فری آڈٹ حاصل کریں۔`;
      } else if (languageMode === 'en') {
        return `Sir, UGC is priced per-video, UGI as a 10 Visual Pillars kit, and VSL as script+video. Delivery in 3-5 days. For price packages and samples, book a Free Audit via WhatsApp +92 346 2231606.`;
      } else {
        return `Sir, UGC per video rate, UGI 10 Visual Pillars kit, aur VSL script+video package hota hai. 3-5 din mein delivery hoti hai. Price aur samples ke liye WhatsApp +92 346 2231606 par Free Audit book karein.`;
      }
    }
  }

  // Default response (Point to point)
  if (languageMode === 'ur_nastaliq') {
    return agent.scriptTemplates[0].scriptUrdu;
  } else if (languageMode === 'en') {
    return agent.scriptTemplates[0].scriptEn;
  } else {
    return agent.scriptTemplates[0].scriptRoman;
  }
}
