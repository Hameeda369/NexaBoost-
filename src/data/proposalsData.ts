export interface ServiceProposal {
  id: string;
  pdfFileName: string;
  title: string;
  tagline: string;
  price: string;
  priceNote?: string;
  deliveryTime?: string;
  category: 'growth' | 'ai_automation' | 'creative' | 'dev';
  deliverables: string[];
  bonus?: string;
  guarantee?: string;
  cta: string;
  whatsappMessage: string;
  canvaDocText: string;
}

export const ALL_14_PROPOSALS: ServiceProposal[] = [
  {
    id: 'nexa-seo',
    pdfFileName: 'NEXA-SEO.pdf',
    title: 'NEXA-SEO',
    tagline: '90 Din Top 10 Guarantee',
    price: 'Rs. 25,000 / Month',
    category: 'growth',
    deliverables: [
      '20 Keywords In-depth Research',
      '50 High DA Backlinks / Month',
      '10 SEO Optimized Articles',
      'Technical SEO + Page Speed Optimization',
      'Weekly Transparent Performance Report'
    ],
    bonus: 'Pehle mahine ka Complete Website Audit Free',
    guarantee: '90 Din mein Google Top 10 Rankings warna 1 month Free Service',
    cta: 'WhatsApp par Form Fill Karein & Start Karein',
    whatsappMessage: 'Hi NexaBoost! I want to start NEXA-SEO (Rs. 25,000/mo) with 90-day Top 10 Google Ranking Guarantee.',
    canvaDocText: `NEXA-SEO - 90 Din Top 10 Guarantee
Price: Rs. 25,000 / Month

Kya Milega:
- 20 Keywords Research
- 50 High DA Backlinks / Month
- 10 SEO Articles
- Technical SEO + Speed
- Weekly Report

Bonus: Pehle mahine ka Audit Free
Guarantee: 90 Din mein Top 10 warna 1 month free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-ai-agent',
    pdfFileName: 'NEXA-AI-AGENT.pdf',
    title: 'NEXA-AI-AGENT',
    tagline: '30 Din 50+ Qualified Leads',
    price: 'Rs. 35,000 One Time + Rs. 5,000 / Month',
    category: 'ai_automation',
    deliverables: [
      'Website / WhatsApp / Instagram AI Agent Setup',
      '24/7 Auto Reply + Instant Meeting/Order Booking',
      'Autonomous Lead Qualification + Multi-touch Followup',
      'Seamless CRM & Google Sheets Live Integration'
    ],
    bonus: '1,000 AI Messages Free in Setup',
    guarantee: '30 Din mein 50+ Leads warna 100% Paise Wapis',
    cta: 'WhatsApp par Demo Test Karein & Setup Karwayen',
    whatsappMessage: 'Hi NexaBoost! I want to deploy NEXA-AI-AGENT (Rs. 35,000 Setup + Rs. 5,000/mo) with 50+ Leads Guarantee.',
    canvaDocText: `NEXA-AI-AGENT - 30 Din 50+ Leads
Price: Rs. 35,000 One Time + Rs. 5,000 / Month

Kya Milega:
- Website/WhatsApp/IG AI Agent
- 24/7 Auto Reply + Booking
- Lead Qualify + Followup
- CRM Integration

Bonus: 1000 Messages Free
Guarantee: 30 Din mein 50+ Leads warna paise wapis
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-voice-ai',
    pdfFileName: 'NEXA-VOICE-AI.pdf',
    title: 'NEXA-VOICE-AI',
    tagline: 'Human Jaisi Real Voice Calling',
    price: 'Rs. 15,000 Setup + Rs. 3,000 / Month',
    category: 'ai_automation',
    deliverables: [
      'Autonomous Outbound Calling / 24/7 Customer Support',
      'Natural Urdu & English Male + Female Voice AI Models',
      'High-Converting Voice Call Script Writing',
      '7 Din Free Test & Acoustic Calibration'
    ],
    bonus: '500 Live Calls Free included in Setup',
    cta: 'Voice AI Test Call Book Karein',
    whatsappMessage: 'Hi NexaBoost! I want to test and deploy NEXA-VOICE-AI (Rs. 15,000 Setup + Rs. 3,000/mo) with 500 free calls.',
    canvaDocText: `NEXA-VOICE-AI - Human Jaisi Voice
Price: Rs. 15,000 Setup + Rs. 3,000 / Month

Kya Milega:
- Outbound Calls / Customer Support
- Male + Female Voice
- Script Writing
- 7 Din Free Test

Bonus: 500 Calls Free in Setup
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-chatbot',
    pdfFileName: 'NEXA-CHATBOT.pdf',
    title: 'NEXA-CHATBOT',
    tagline: '30 Din 100+ Live Chats',
    price: 'Rs. 12,000 One Time',
    category: 'ai_automation',
    deliverables: [
      'Website + WhatsApp Cloud Chatbot Integration',
      'Instant FAQ Auto Reply in Urdu & English',
      'Automated Lead Contact Capture & Tagging',
      'Smart Human Handover Routing'
    ],
    bonus: '20 Custom FAQs Free Knowledge Base Setup',
    cta: 'Chatbot Live Setup Karwayen',
    whatsappMessage: 'Hi NexaBoost! I want to set up NEXA-CHATBOT (Rs. 12,000 One Time) for my website and WhatsApp.',
    canvaDocText: `NEXA-CHATBOT - 30 Din 100+ Chats
Price: Rs. 12,000 One Time

Kya Milega:
- Website + WhatsApp Chatbot
- FAQ Auto Reply
- Lead Capture
- Human Handover

Bonus: 20 FAQs Free Setup
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-content',
    pdfFileName: 'NEXA-CONTENT.pdf',
    title: 'NEXA-CONTENT',
    tagline: '10 SEO Articles & Authority Copy',
    price: 'Rs. 8,000',
    deliveryTime: '7 Din Delivery',
    category: 'creative',
    deliverables: [
      '10 x 1,200 Words High-Quality SEO Articles',
      'Competitor Keyword Research & Topic Clustering',
      'Royalty-Free Featured Images + Schema Formatting',
      'Guaranteed 7 Din Fast Delivery'
    ],
    bonus: '5 Extra SEO Articles Free of Cost',
    cta: 'Content Order Place Karein',
    whatsappMessage: 'Hi NexaBoost! I want to order NEXA-CONTENT (Rs. 8,000) for 10+5 SEO Articles.',
    canvaDocText: `NEXA-CONTENT - 10 SEO Articles
Price: Rs. 8,000

Kya Milega:
- 10 x 1200 Words Articles
- Keyword Research
- Images + Formatting
- 7 Din Delivery

Bonus: 5 Articles Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-ugc-ads',
    pdfFileName: 'NEXA-UGC-ADS.pdf',
    title: 'NEXA-UGC-ADS',
    tagline: 'TikTok & Reels High-Converting Ads',
    price: 'Rs. 30,000 / 3 Videos - 1 Free',
    deliveryTime: '7 Din Delivery',
    category: 'creative',
    deliverables: [
      '3 UGC Videos + 1 Free = 4 High-Converting Videos Total',
      'Viral Scripting + Professional Dynamic Editing + 3-Sec Hooks',
      '7 Din Fast Turnaround Delivery',
      '1 Dedicated Polish Revision Free'
    ],
    bonus: '5 High-CTR Static Ad Creatives Free',
    cta: 'UGC Campaign Start Karein',
    whatsappMessage: 'Hi NexaBoost! I want to book NEXA-UGC-ADS (Rs. 30,000 for 3 Videos + 1 Free = 4 Videos Total) with 5 free ad creatives.',
    canvaDocText: `NEXA-UGC-ADS - TikTok/Reels Ads
Price: Rs. 30,000 / 3 Videos - 1 Free

Kya Milega:
- 3 UGC Videos + 1 Free = 4 Total
- Script + Editing + Hook
- 7 Din Delivery
- 1 Revision Free

Bonus: 5 Ad Creatives Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-vsl-ads',
    pdfFileName: 'NEXA-VSL-ADS.pdf',
    title: 'NEXA-VSL-ADS',
    tagline: 'High-Converting Sales Video (VSL)',
    price: 'Rs. 30,000 / Video',
    deliveryTime: '10 Din Delivery',
    category: 'creative',
    deliverables: [
      '60-90 Seconds High Converting Video Sales Letter (VSL)',
      'Psychological Scriptwriting + Studio Voiceover + Motion Editing',
      'Dynamic Subtitles & Motion Graphics B-Roll',
      '10 Din Delivery'
    ],
    bonus: '1 Complete Revision Free included',
    cta: 'VSL Production Book Karein',
    whatsappMessage: 'Hi NexaBoost! I want to order NEXA-VSL-ADS (Rs. 30,000/Video) for our high-converting sales funnel.',
    canvaDocText: `NEXA-VSL-ADS - Sales Video
Price: Rs. 30,000 / Video

Kya Milega:
- 60-90 Sec High Converting VSL
- Script + Voiceover + Editing
- 10 Din Delivery

Bonus: 1 Revision Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-digital-product',
    pdfFileName: 'NEXA-DIGITAL-PRODUCT.pdf',
    title: 'NEXA-DIGITAL-PRODUCT',
    tagline: 'Ebook, Course & Digital Asset System',
    price: 'Rs. 15,000+',
    category: 'creative',
    deliverables: [
      'Premium Ebook / Video Course / Template Design',
      'High-Converting Landing & Sales Page',
      'Payment Gateway Integration (Stripe, JazzCash, EasyPaisa, Nayapay)',
      'Instant Automated Buyer Download Delivery'
    ],
    bonus: 'Meta Ad Campaign Setup Free of Cost',
    cta: 'Digital Product Launch Karein',
    whatsappMessage: 'Hi NexaBoost! I want to build and launch NEXA-DIGITAL-PRODUCT (Rs. 15,000+).',
    canvaDocText: `NEXA-DIGITAL-PRODUCT - Ebook/Course
Price: Rs. 15,000+

Kya Milega:
- Ebook / Course / Template Design
- Sales Page
- Payment Gateway

Bonus: Ad Setup Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-website-ai',
    pdfFileName: 'NEXA-WEBSITE-AI.pdf',
    title: 'NEXA-WEBSITE-AI',
    tagline: '7 Din Modern AI-Powered Website',
    price: 'Rs. 40,000',
    deliveryTime: '7 Din Delivery',
    category: 'dev',
    deliverables: [
      'Ultra-Fast AI Powered Responsive Business Website',
      '100% Mobile & Tablet Optimized UX Layout',
      'Direct Lead Contact Form + Live WhatsApp Chat Button',
      'Lightning-Fast Cloud Hosting Setup'
    ],
    bonus: '1 Full Month On-Page SEO Optimization Free',
    cta: 'Website Project Start Karein',
    whatsappMessage: 'Hi NexaBoost! I want to start NEXA-WEBSITE-AI (Rs. 40,000) for a 7-day turnaround website.',
    canvaDocText: `NEXA-WEBSITE-AI - 7 Din Website
Price: Rs. 40,000

Kya Milega:
- AI Powered Website
- Mobile Responsive
- Contact Form + WhatsApp

Bonus: 1 Month SEO Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-app',
    pdfFileName: 'NEXA-APP.pdf',
    title: 'NEXA-APP',
    tagline: 'Custom Android + iOS Mobile App',
    price: 'Rs. 80,000+',
    deliveryTime: '30 Din Delivery',
    category: 'dev',
    deliverables: [
      'Cross-Platform Android + iOS Production-Ready App',
      '5 Core Business Features (Auth, Products, Cart, Push Alerts, Chat)',
      'Clean Modern UI/UX with Offline Cache',
      '30 Din Complete Build & Test Delivery'
    ],
    bonus: '1 Extra Premium Feature Built Free',
    cta: 'App Architecture Discuss Karein',
    whatsappMessage: 'Hi NexaBoost! I want to build NEXA-APP (Rs. 80,000+) for Android & iOS.',
    canvaDocText: `NEXA-APP - Mobile App
Price: Rs. 80,000+

Kya Milega:
- Android + iOS App
- 5 Main Features
- 30 Din Delivery

Bonus: 1 Feature Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-social',
    pdfFileName: 'NEXA-SOCIAL.pdf',
    title: 'NEXA-SOCIAL',
    tagline: '30 Posts & 10 Viral Reels / Month',
    price: 'Rs. 25,000 / Month',
    category: 'creative',
    deliverables: [
      '30 Custom Branded Graphics Posts + 10 Edited Reels',
      'Engaging Bilingual Captions + Niche Hashtag Strategy',
      'Complete Social Media Page Management & Scheduling',
      'Weekly Follower & Engagement Analytics'
    ],
    bonus: '1 Month Extra Management Free on Quarter Booking',
    cta: 'Social Media Management Start Karein',
    whatsappMessage: 'Hi NexaBoost! I want to enroll in NEXA-SOCIAL (Rs. 25,000/mo) for 30 Posts + 10 Reels.',
    canvaDocText: `NEXA-SOCIAL - 30 Posts / Month
Price: Rs. 25,000 / Month

Kya Milega:
- 30 Posts + 10 Reels
- Caption + Hashtag + Design
- Page Management

Bonus: 1 Month Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-google-ads',
    pdfFileName: 'NEXA-GOOGLE-ADS.pdf',
    title: 'NEXA-GOOGLE-ADS',
    tagline: '100 Guaranteed Qualified Leads',
    price: 'Rs. 20,000 + Ad Budget',
    category: 'growth',
    deliverables: [
      'Complete Google Search Ads Strategy & Campaign Setup',
      'High-Intent Negative & Commercial Keyword Mapping',
      'High-Converting Landing Page Optimization Audit',
      'Daily Bid & Negative Keyword Optimization'
    ],
    guarantee: '100 Verified Leads warna Agla Mahina Management 100% Free',
    cta: 'Google Ads Campaign Launch Karein',
    whatsappMessage: 'Hi NexaBoost! I want to start NEXA-GOOGLE-ADS (Rs. 20,000 + Ad Budget) with 100 Leads Guarantee.',
    canvaDocText: `NEXA-GOOGLE-ADS - 100 Leads
Price: Rs. 20,000 + Ad Budget

Kya Milega:
- Google Search Ads Setup
- Keyword + Landing Page
- Daily Optimization

Guarantee: 100 Leads warna agla mahina free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-email',
    pdfFileName: 'NEXA-EMAIL.pdf',
    title: 'NEXA-EMAIL',
    tagline: '10 High-Converting Email Automation Funnel',
    price: 'Rs. 18,000',
    category: 'growth',
    deliverables: [
      '10-Step Automated Email Sequence (Welcome, Nurture, Offer, Re-engagement)',
      'Direct-Response Copywriting + Responsive Clean Design',
      'Mailchimp, Klaviyo, Brevo or Custom SMTP Automation Setup',
      'Spam Score Verification & Deliverability Testing'
    ],
    bonus: 'Next Follow-up Campaign Funnel Free',
    cta: 'Email Funnel Setup Karwayen',
    whatsappMessage: 'Hi NexaBoost! I want to deploy NEXA-EMAIL (Rs. 18,000) for a 10-email sequence.',
    canvaDocText: `NEXA-EMAIL - 10 Email Funnel
Price: Rs. 18,000

Kya Milega:
- 10 Email Sequence
- Copywriting + Design
- Automation Setup

Bonus: Next Funnel Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  },
  {
    id: 'nexa-branding',
    pdfFileName: 'NEXA-BRANDING.pdf',
    title: 'NEXA-BRANDING',
    tagline: 'Premium Logo & Master Brand Kit',
    price: 'Rs. 10,000',
    category: 'creative',
    deliverables: [
      '3 Distinct Premium Vector Logo Concepts',
      'Curated Brand Color Palette + Typography Guidelines',
      'Complete Social Media Kit (Profile, Cover, Watermarks)',
      'Print-Ready Vector Files (AI, SVG, PNG, PDF)'
    ],
    bonus: '1 Extra Custom Logo Concept Free',
    cta: 'Branding Project Start Karein',
    whatsappMessage: 'Hi NexaBoost! I want to order NEXA-BRANDING (Rs. 10,000) for Logo & Brand Kit.',
    canvaDocText: `NEXA-BRANDING - Logo + Brand Kit
Price: Rs. 10,000

Kya Milega:
- 3 Logo Concepts
- Color Palette + Fonts
- Social Media Kit

Bonus: 1 Logo Concept Free
CTA: Form fill karein / WhatsApp: +92 346 2231606`
  }
];
