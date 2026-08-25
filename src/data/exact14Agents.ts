import { AgentSpec } from '../types';

export const EXACT_14_ASSEMBLY_AGENTS: AgentSpec[] = [
  // -------------------------------------------------------------
  // PHASE 1: LEAD + DATA - 4 AGENTS
  // -------------------------------------------------------------
  {
    id: 'lead-gen',
    assemblyOrder: 1,
    n8nPhase: 'PHASE 1: LEAD + DATA',
    name: 'LEAD GEN AGENT',
    nameUrdu: 'لیڈ جنریشن ایجنٹ',
    title: 'NexaBoost Lead Gen AI Agent',
    department: 'sales',
    departmentLabel: 'Phase 1: Lead + Data',
    tagline: 'Find Pakistani businesses from Google/LinkedIn without messaging',
    taglineUrdu: 'پاکستانی کاروباروں کی تصدیق شدہ لیڈز گوگل اور لنکڈ اِن سے تلاش کرے',
    badge: '1. Lead Finder',
    iconName: 'UserCheck',
    description: 'Finds Digital Marketing Agencies, Clinics, Real Estate, and E-commerce businesses in Pakistan. Writes raw qualified leads to "LEADS DATABASE" tab in Google Sheet.',
    descriptionUrdu: 'پاکستان میں ایجینسیز، کلینکس، رئیل اسٹیٹ اور ای کامرس کی نئی لیڈز تلاش کر کے ماسٹر سی آر ایم شیٹ میں فیڈ کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Lead Gen AI Agent
MISSION: Find Pakistani businesses. DO NOT message anyone.
TARGET: Digital Marketing Agencies, Clinics, Real Estate, E-commerce in Pakistan
OUTPUT: Write to "LEADS DATABASE" tab in Google Sheet "NexaBoost Master CRM"
COLUMNS: Company Name | Industry | Owner Name | Email | WhatsApp | City | Source | Status: New
RULES: Only real data from Google/LinkedIn. If not found write "Not Found". No guessing.`,
    capabilities: [
      'Targets Digital Marketing Agencies, Clinics, Real Estate, E-commerce in PK',
      'Pushes to "LEADS DATABASE" tab in Google Sheet "NexaBoost Master CRM"',
      'Records Company Name | Industry | Owner Name | Email | WhatsApp | City | Source | Status: New',
      'Strict truthfulness: writes "Not Found" if missing, no guessing'
    ],
    capabilitiesUrdu: [
      'پاکستانی رئیل اسٹیٹ، ای کامرس، کلینکس اور ڈیجیٹل ایجنسیز کو ٹارگٹ کرے',
      'گوگل شیٹ کے "LEADS DATABASE" ٹیب میں ڈیٹا لکھے',
      'تمام لازمی کالمز اور اسٹیٹس "New" کے ساتھ درج کرے',
      'صرف اصلی ڈیٹا، غیر مصدقہ پر "Not Found" درج کرے'
    ],
    metrics: [
      { label: 'Target Market', value: 'Pakistan' },
      { label: 'Sheet Tab', value: 'LEADS DATABASE' },
      { label: 'Status Assigned', value: 'New' }
    ],
    samplePrompts: [
      {
        title: 'Find Lahore Real Estate Leads',
        titleUrdu: 'لاہور رئیل اسٹیٹ لیڈز تلاش کریں',
        prompt: 'Find 5 verified Real Estate developers or agencies in Lahore with owner names and contact details.',
        promptUrdu: 'لاہور کے 5 تصدیق شدہ رئیل اسٹیٹ ڈویلپرز یا ایجنسیز کی تفصیلات تیار کریں۔'
      },
      {
        title: 'Find Karachi E-commerce Brands',
        titleUrdu: 'کراچی ای کامرس برانڈز',
        prompt: 'Find 5 active apparel and lifestyle e-commerce brands in Karachi with owner or marketing head contacts.',
        promptUrdu: 'کراچی کے 5 فعال ای کامرس برانڈز کی معلومات اکٹھی کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🎯 LEAD GEN AGENT — Output Batch (Status: New)\n\n| Company Name | Industry | Owner Name | Email | WhatsApp | City | Source | Status |\n|---|---|---|---|---|---|---|---|\n| PrimeEdge Media | Digital Marketing | Farhan Akhtar | farhan@primeedge.pk | +92 300 8421921 | Lahore | LinkedIn | New |\n| Al-Noor Dental Clinic | Healthcare | Dr. Usman Tariq | info@alnoordental.pk | +92 321 9845112 | Islamabad | Google Maps | New |\n| Zaytoun Luxe Living | Real Estate | Hamza Malik | sales@zaytounluxe.com | +92 333 4567890 | Karachi | LinkedIn | New |\n| Modesty Wear PK | E-commerce | Zainab Bilal | contact@modestywear.pk | +92 345 7712340 | Faisalabad | Instagram/Web | New |`,
      ur_nastaliq: `### 🎯 لیڈ جنریشن ایجنٹ — ڈیٹا بیس آؤٹ پٹ\n\nگوگل شیٹ "LEADS DATABASE" میں 4 نئی تصدیق شدہ پاکستانی لیڈز شامل کر دی گئی ہیں جن کی تمام فیلڈز اور اسٹیٹس "New" ایکٹو ہیں۔`,
      ur_roman: `### 🎯 LEAD GEN AGENT — Output (LEADS DATABASE Tab)\n\n4 new Pakistani B2B leads added with Status: New. Columns populated: Company Name, Industry, Owner Name, Email, WhatsApp, City, Source.`
    }
  },
  {
    id: 'crm-cleaner',
    assemblyOrder: 2,
    n8nPhase: 'PHASE 1: LEAD + DATA',
    name: 'CRM CLEANER AGENT',
    nameUrdu: 'سی آر ایم کلینر ایجنٹ',
    title: 'NexaBoost CRM Cleaner Agent',
    department: 'operations',
    departmentLabel: 'Phase 1: Lead + Data',
    tagline: 'Cleans "LEADS DATABASE" every 1 hour, removes duplicates, formats +92 WhatsApp',
    taglineUrdu: 'ہر 1 گھنٹے بعد شیٹ سے ڈپلیکیٹ ڈیٹا ختم کرے اور فون نمبر درست فارمیٹ میں لائے',
    badge: '2. Data Cleaner',
    iconName: 'RefreshCw',
    description: 'Runs every 1 hour on "LEADS DATABASE" tab: removes duplicate emails/numbers, formats all WhatsApp numbers to international standard (+92 3xx xxxxxxx), and validates "New" status.',
    descriptionUrdu: 'ہر ایک گھنٹے بعد ماسٹر سی آر ایم کو اسکین کر کے ڈپلیکیٹ لیڈز ختم کرتا ہے اور واٹس ایپ نمبرز کو بین الاقوامی فارمیٹ میں درست کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost CRM Cleaner Agent
MISSION: Clean "LEADS DATABASE" tab every 1 hour
TASK: 1. Remove duplicate Emails/WhatsApp 2. Format WhatsApp as +92 3xx xxxxxxx 3. Status "New" walo ko mark karo
OUTPUT: Update same "LEADS DATABASE" tab`,
    capabilities: [
      'Automated hourly trigger on Google Sheet "LEADS DATABASE"',
      'Deduplication across Email and WhatsApp numbers',
      'Standardizes Pakistani mobile numbers to +92 3xx xxxxxxx',
      'Flags unverified or corrupt rows before enrichment'
    ],
    capabilitiesUrdu: [
      'ہر 1 گھنٹے بعد شیٹ کی خودکار صفائی',
      'ڈپلیکیٹ ای میل اور نمبرز کا خاتمہ',
      'تمام پاکستانی نمبرز کو +92 فارمیٹ میں درست کرنا',
      'اسٹیٹس نیو والی قطاروں کی تصدیق'
    ],
    metrics: [
      { label: 'Run Frequency', value: 'Every 1 Hour' },
      { label: 'Deduplication', value: '100% Exact' },
      { label: 'Format Target', value: '+92 3xx xxxxxxx' }
    ],
    samplePrompts: [
      {
        title: 'Clean Raw Batch of 10 Leads',
        titleUrdu: '10 لیڈز کا کچا ڈیٹا صاف کریں',
        prompt: 'Clean this raw phone list: "03001234567, 0321-9876543, 923451122334, 03001234567 (duplicate)". Remove duplicates and format as +92 3xx xxxxxxx.',
        promptUrdu: 'فون نمبرز کی فہرست سے ڈپلیکیٹ ختم کریں اور درست +92 فارمیٹ لاگو کریں۔'
      },
      {
        title: 'Audit Master Sheet Tab',
        titleUrdu: 'شیٹ کی جانچ پڑتال',
        prompt: 'Run full sanitation routine on LEADS DATABASE tab and report removed duplicates.',
        promptUrdu: 'گوگل شیٹ کے ڈیٹا بیس ٹیب کی مکمل صفائی کا نتیجہ تیار کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🧹 CRM CLEANER AGENT — Execution Log\n\n- **Target Tab:** "LEADS DATABASE" (Google Sheet "NexaBoost Master CRM")\n- **Rows Scanned:** 142 rows\n- **Duplicates Removed:** 7 duplicate entries (matched by email/phone)\n- **WhatsApp Formatted:** 38 numbers standardized to \`+92 3xx xxxxxxx\`\n- **Status Maintained:** "New" flagged for enrichment\n- **Status:** Clean & Ready for Agent 3 (Data Enricher)`,
      ur_nastaliq: `### 🧹 سی آر ایم کلینر ایجنٹ — لاگ رپورٹ\n\n- شیٹ اسکین مکمل: 142 قطاریں\n- ڈپلیکیٹ خارج: 7 اندراجات\n- نمبر فارمیٹ درست: +92 3xx xxxxxxx\n- شیٹ مکمل صاف اور انریچمنٹ کے لیے تیار ہے۔`,
      ur_roman: `### 🧹 CRM CLEANER AGENT — Log\n\nLEADS DATABASE tab cleaned. 7 duplicates removed. All phone numbers formatted to +92 3xx xxxxxxx. Ready for Data Enricher Agent.`
    }
  },
  {
    id: 'data-enricher',
    assemblyOrder: 3,
    n8nPhase: 'PHASE 1: LEAD + DATA',
    name: 'DATA ENRICHER AGENT',
    nameUrdu: 'ڈیٹا انریچر ایجنٹ',
    title: 'NexaBoost Data Enricher Agent',
    department: 'operations',
    departmentLabel: 'Phase 1: Lead + Data',
    tagline: 'Finds missing Email, WhatsApp, and Owner Name for "Status = New" leads',
    taglineUrdu: 'ادھوری لیڈز کا گمشدہ ای میل، نمبر اور مالک کا نام گوگل سے تلاش کرے',
    badge: '3. Data Enricher',
    iconName: 'Search',
    description: 'Searches Google, company registries, and websites for missing data in "Status = New" rows. Updates "LEADS DATABASE" tab. If not found, keeps "Not Found".',
    descriptionUrdu: 'جن لیڈز کا ای میل یا مالک کا نام نامکمل ہو، ان کی مکمل تحقیق کر کے گوگل شیٹ کو اپ ڈیٹ کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Data Enricher Agent  
MISSION: Find missing data for "Status = New" leads
TASK: Google pe company name search karke missing Email/WhatsApp/Owner Name bharo
OUTPUT: Update "LEADS DATABASE" tab. If not found, keep "Not Found"`,
    capabilities: [
      'Pulls "Status = New" rows with missing fields',
      'Executes targeted Google searches for Founder/CEO, Direct Email, WhatsApp',
      'Updates the "LEADS DATABASE" tab in real-time',
      'Adheres to strict truthfulness without artificial hallucinations'
    ],
    capabilitiesUrdu: [
      'نامکمل قطاروں کی نشاندہی',
      'گوگل اور ویب سائٹ سے مالک کے نام اور رابطے کی تلاش',
      'گوگل شیٹ کے خالی کالمز کو پر کرنا',
      'غلط معلومات کے بجائے درست ڈیٹا درج کرنا'
    ],
    metrics: [
      { label: 'Filter Criterion', value: 'Status = New' },
      { label: 'Enrichment Rate', value: '78.5%' },
      { label: 'Fallback Logic', value: '"Not Found"' }
    ],
    samplePrompts: [
      {
        title: 'Enrich Clinic Lead with Missing WhatsApp',
        titleUrdu: 'کلینک لیڈ کے لیے واٹس ایپ تلاش کریں',
        prompt: 'Company: "Nova Aesthetics Islamabad", missing WhatsApp and Owner Name. Search and enrich row.',
        promptUrdu: 'نووا ایستھیٹکس اسلام آباد کے مالک کا نام اور رابطہ تلاش کر کے شیٹ مکمل کریں۔'
      },
      {
        title: 'Enrich Agency with Missing Direct Email',
        titleUrdu: 'ایجنسی کے سی ای او کا ای میل',
        prompt: 'Company: "Elevate Digital Lahore", missing Owner Email. Find direct professional inbox.',
        promptUrdu: 'ایلیویٹ ڈیجیٹل لاہور کے سی ای او کا دفتری ای میل تلاش کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🔍 DATA ENRICHER AGENT — Batch Result\n\n- **Lead ID #88:** Nova Aesthetics Islamabad\n  - **Before:** Owner: [Not Found] | Email: info@novaaesthetics.pk | WhatsApp: [Not Found]\n  - **After Enrichment:** Owner: Dr. Ayesha Siddiqui (Medical Director) | WhatsApp: +92 301 5567812 | Source: Google Business Profile\n  - **Sheet Updated:** "LEADS DATABASE" updated successfully.`,
      ur_nastaliq: `### 🔍 ڈیٹا انریچر ایجنٹ — نتیجہ\n\nنووا ایستھیٹکس اسلام آباد کے مالک کا نام (ڈاکٹر عائشہ صدیقی) اور واٹس ایپ (+92 301 5567812) کامیابی سے شیٹ میں اپ ڈیٹ کر دیا گیا ہے۔`,
      ur_roman: `### 🔍 DATA ENRICHER AGENT — Result\n\nMissing fields enriched for Nova Aesthetics Islamabad. Owner and WhatsApp updated in LEADS DATABASE tab.`
    }
  },
  {
    id: 'verifier',
    assemblyOrder: 4,
    n8nPhase: 'PHASE 1: LEAD + DATA',
    name: 'VERIFIER AGENT',
    nameUrdu: 'ویریفائر ایجنٹ',
    title: 'NexaBoost Verifier Agent',
    department: 'operations',
    departmentLabel: 'Phase 1: Lead + Data',
    tagline: 'Checks if Email/WhatsApp is real, adds "Verified" or "Risky" to Notes',
    taglineUrdu: 'ای میل اور نمبر کی حقیقت جانچ کر شیٹ میں ویریفائیڈ یا رسکی کا نوٹ درج کرے',
    badge: '4. Lead Gatekeeper',
    iconName: 'ShieldCheck',
    description: 'Pulls batches of 10 leads from "LEADS DATABASE". Verifies email syntax, MX records, and +92 WhatsApp number validity. Writes "Verified" or "Risky" in the Notes column.',
    descriptionUrdu: 'شیٹ سے 10 لیڈز کے بیجز اٹھا کر ان کے ای میل اور نمبرز کی درستگی چیک کرتا ہے تاکہ کوئی باؤنس یا خراب نمبر نہ رہے۔',
    systemPrompt: `ROLE: NexaBoost Verifier Agent
MISSION: Check if Email/WhatsApp is real
TASK: "LEADS DATABASE" se 10 leads uthao. Check karo email format sahi hai aur number +92 se start hota hai
OUTPUT: Add note in "Notes" column: "Verified" or "Risky"`,
    capabilities: [
      'Pulls 10-lead batches from "LEADS DATABASE"',
      'Verifies RFC-compliant email syntax and active domain deliverability',
      'Validates Pakistani mobile prefix (+92 300 to +92 349)',
      'Appends "Verified" or "Risky" directly into the "Notes" column'
    ],
    capabilitiesUrdu: [
      '10 لیڈز کے بیجز پر کام کرنا',
      'ای میل ڈومین اور فارمیٹ کی توثیق',
      'پاکستانی موبائل نیٹ ورک کوڈز کی تصدیق',
      'نوٹس کالم میں "Verified" یا "Risky" ٹیگ لگانا'
    ],
    metrics: [
      { label: 'Batch Size', value: '10 Leads/Run' },
      { label: 'Check Logic', value: 'Syntax + MX + +92' },
      { label: 'Tagging', value: 'Verified / Risky' }
    ],
    samplePrompts: [
      {
        title: 'Verify Batch of 10 Master Leads',
        titleUrdu: '10 لیڈز کے بیج کی تصدیق',
        prompt: 'Inspect 10 rows from LEADS DATABASE: check if emails have active domains and WhatsApp numbers start with +92 3xx.',
        promptUrdu: '10 لیڈز کی جانچ کریں اور درست لیڈز کو ویریفائیڈ مارک کریں۔'
      },
      {
        title: 'Test Risky Number Detection',
        titleUrdu: 'غیر درست نمبر کی شناخت',
        prompt: 'Check lead with email "user@gmailcom" and phone "042-35712345" (landline). Format and mark note.',
        promptUrdu: 'غلط ای میل اور لینڈ لائن نمبر والی لیڈ کو رسکی مارک کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🛡️ VERIFIER AGENT — 10-Lead Quality Batch\n\n1. **PrimeEdge Media** (farhan@primeedge.pk | +92 300 8421921) ➡️ **Notes: Verified** ✅\n2. **Al-Noor Dental** (info@alnoordental.pk | +92 321 9845112) ➡️ **Notes: Verified** ✅\n3. **Zaytoun Luxe** (sales@zaytounluxe.com | +92 333 4567890) ➡️ **Notes: Verified** ✅\n4. **Quick Logistics** (fake@tempmail.org | 042-3580000) ➡️ **Notes: Risky (Temp Mail / Landline)** ⚠️\n\n*Updated "LEADS DATABASE" Notes column. Verified leads released for Phase 2 Outreach.*`,
      ur_nastaliq: `### 🛡️ ویریفائر ایجنٹ — 10 لیڈز کی توثیقی رپورٹ\n\nتمام درست لیڈز کے آگے نوٹس کالم میں "Verified" اور غیر مصدقہ یا لینڈ لائن کے آگے "Risky" کا نوٹ درج کر دیا گیا ہے۔`,
      ur_roman: `### 🛡️ VERIFIER AGENT — Batch Verification\n\n10 rows checked in LEADS DATABASE. Verified leads marked ready for Outreach Writer Agent.`
    }
  },

  // -------------------------------------------------------------
  // PHASE 2: OUTREACH + SALES - 4 AGENTS
  // -------------------------------------------------------------
  {
    id: 'outreach-writer',
    assemblyOrder: 5,
    n8nPhase: 'PHASE 2: OUTREACH + SALES',
    name: 'OUTREACH WRITER AGENT',
    nameUrdu: 'آؤٹ ریچ رائٹر ایجنٹ',
    title: 'NexaBoost Outreach Writer Agent - Urdu + English',
    department: 'sales',
    departmentLabel: 'Phase 2: Outreach + Sales',
    tagline: 'Writes 1st WhatsApp/Email message for "Status = New" leads into "OUTREACH DRAFTS"',
    taglineUrdu: 'نئی لیڈز کے لیے پہلا پرسنلائزڈ واٹس ایپ اور ای میل میسج ڈرافٹ کرے',
    badge: '5. First Contact',
    iconName: 'Send',
    description: 'Drafts friendly, value-first 1st contact messages (Urdu + English) for Verified "Status = New" leads. Writes to "OUTREACH DRAFTS" tab with Status: "Pending Approval".',
    descriptionUrdu: 'تصدیق شدہ لیڈز کے لیے دوستانہ اور پرکشش پہلا پیغام لکھ کر "OUTREACH DRAFTS" میں پینڈنگ اپروول کے ساتھ محفوظ کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Outreach Writer Agent - Urdu + English
MISSION: Write 1st WhatsApp/Email message for "Status = New" leads
OUTPUT: Write to "OUTREACH DRAFTS" tab. Status: Pending Approval
TONE: Friendly, Short, Value first. Example: "Salam {Owner Name}, Kya aap har mahine 1000 leads chahte hain bina ads chalaye? Hum AI se karte hain. 15 min demo chahiye?"`,
    capabilities: [
      'Fetches Verified "Status = New" leads from Master CRM',
      'Generates bilingual (Roman Urdu + English) punchy openers',
      'Pushes to "OUTREACH DRAFTS" tab with "Status: Pending Approval"',
      'Template: "Salam {Owner Name}, Kya aap har mahine 1000 leads chahte hain bina ads chalaye?..."'
    ],
    capabilitiesUrdu: [
      'تصدیق شدہ نیو لیڈز کے لیے ڈرافٹ تیار کرنا',
      'اردو اور انگریزی میں مختصر اور پر اثر پیغامات',
      '"OUTREACH DRAFTS" ٹیب میں محفوظ کرنا',
      '15 منٹ فری ڈیمو کی آفر شامل کرنا'
    ],
    metrics: [
      { label: 'Target Tab', value: 'OUTREACH DRAFTS' },
      { label: 'Draft Status', value: 'Pending Approval' },
      { label: 'Tone', value: 'Friendly, Value First' }
    ],
    samplePrompts: [
      {
        title: 'Draft WhatsApp for Real Estate Agency CEO',
        titleUrdu: 'رئیل اسٹیٹ مالک کے لیے میسج',
        prompt: 'Owner Name: "Tariq Mahmood", Company: "Lahore Heights Real Estate". Draft the 1st WhatsApp outreach.',
        promptUrdu: 'طارق محمود (لاہور ہائٹس) کے لیے پہلا واٹس ایپ آؤٹ ریچ ڈرافٹ تیار کریں۔'
      },
      {
        title: 'Draft Email for Marketing Agency Founder',
        titleUrdu: 'ڈیجیٹل ایجنسی کے بانی کے لیے ای میل',
        prompt: 'Owner Name: "Bilal Chaudhry", Company: "ScaleUp Agency Karachi". Draft value-first message.',
        promptUrdu: 'بلال چوہدری (اسکیل اپ ایجنسی) کے لیے آؤٹ ریچ میسج بنائیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### ✉️ OUTREACH WRITER AGENT — Output in "OUTREACH DRAFTS" Tab\n\n- **Target Lead:** Tariq Mahmood | Lahore Heights Real Estate (+92 300 8421921)\n- **Status:** Pending Approval\n- **Channel:** WhatsApp\n- **Message Draft:**\n  > "Salam Tariq bhai, Kya aap har mahine 1000 verified buyer leads chahte hain bina Facebook ads par lakhon lagaye? Hum NexaBoost AI se karte hain. Kya is Thursday ko 15 min ka quick live demo dekhna pasand karein ge? — Ali Mola, NexaBoost AI Hub"\n\n*Saved to "OUTREACH DRAFTS" tab. Awaiting 1-click approval.*`,
      ur_nastaliq: `### ✉️ آؤٹ ریچ رائٹر ایجنٹ — ڈرافٹ میسج\n\n"سلام طارق بھائی، کیا آپ ہر مہینے 1000 خریدار لیڈز چاہتے ہیں بغیر مہنگے اشتہارات کے؟ ہم NexaBoost AI سے خودکار کرتے ہیں۔ کیا 15 منٹ کا کوئیک لائیو ڈیمو شیڈول کر لیں؟"`,
      ur_roman: `### ✉️ OUTREACH WRITER AGENT — Draft (OUTREACH DRAFTS Tab)\n\nSalam {Owner Name}, Kya aap har mahine 1000 leads chahte hain bina ads chalaye? Hum AI se karte hain. 15 min demo chahiye? (Status: Pending Approval)`
    }
  },
  {
    id: 'follow-up',
    assemblyOrder: 6,
    n8nPhase: 'PHASE 2: OUTREACH + SALES',
    name: 'FOLLOW-UP AGENT',
    nameUrdu: 'فالو اپ ایجنٹ',
    title: 'NexaBoost Follow-up Agent',
    department: 'sales',
    departmentLabel: 'Phase 2: Outreach + Sales',
    tagline: 'Drafts reminders for "Status = Contacted" leads after 3 days',
    taglineUrdu: 'جن لیڈز کو میسج بھیجا گیا ہو ان کے لیے 3 دن بعد نرم ریمائنڈر تیار کرے',
    badge: '6. Nurture Loop',
    iconName: 'Clock',
    description: 'Finds leads in "LEADS DATABASE" with "Status = Contacted". If 3 days passed with no reply, creates a polite follow-up draft in "OUTREACH DRAFTS" tab.',
    descriptionUrdu: 'جن گاہکوں نے پہلے میسج کا جواب نہ دیا ہو، ان کے لیے 3 دن بعد شائستہ فالو اپ تیار کر کے شیٹ میں لکھتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Follow-up Agent
MISSION: "LEADS DATABASE" mein "Contacted" wale leads ke liye 3 din baad followup draft banao
OUTPUT: Add new row in "OUTREACH DRAFTS" tab. Message: "Sir bas reminder tha AI demo ka..."`,
    capabilities: [
      'Monitors "LEADS DATABASE" for "Status = Contacted"',
      'Calculates 3-day quiet interval automatically',
      'Adds reminder row in "OUTREACH DRAFTS" tab',
      'Template: "Sir bas reminder tha AI demo ka..."'
    ],
    capabilitiesUrdu: [
      '3 دن پرانی رابطہ شدہ لیڈز کی مانیٹرنگ',
      'شیٹ میں فالو اپ ڈرافٹ کا اندراج',
      'نرم اور شائستہ یاد دہانی کا میسج',
      'بغیر اسپیم کیے گاہک کو دوبارہ ایکٹو کرنا'
    ],
    metrics: [
      { label: 'Trigger Interval', value: '3 Days After 1st Contact' },
      { label: 'Filter Criterion', value: 'Status = Contacted' },
      { label: 'Draft Destination', value: 'OUTREACH DRAFTS Tab' }
    ],
    samplePrompts: [
      {
        title: 'Generate Day 3 Follow-up Reminder',
        titleUrdu: 'تیسرے دن کا فالو اپ ریمائنڈر',
        prompt: 'Lead: "Dr. Usman Tariq (Al-Noor Dental)", contacted on Monday. Today is Thursday with no response. Generate follow-up.',
        promptUrdu: 'ڈاکٹر عثمان طارق کے لیے 3 دن بعد کا فالو اپ میسج بنائیں۔'
      },
      {
        title: 'Generate Day 6 Gentle Case Study Nudge',
        titleUrdu: 'کامیابی کی مثال کے ساتھ فالو اپ',
        prompt: 'Lead: "Farhan Akhtar (PrimeEdge)", contacted 6 days ago. Send quick case study proof.',
        promptUrdu: 'کلائنٹ کو رزلٹ دکھا کر یاد دہانی کروائیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### ⏰ FOLLOW-UP AGENT — New Row in "OUTREACH DRAFTS"\n\n- **Target:** Dr. Usman Tariq | Al-Noor Dental Clinic\n- **Previous Contact:** 3 Days Ago (Status: Contacted)\n- **Draft Message:**\n  > "Salam Dr. Usman sb, umeed hai aap khairiyat se honge. Sir bas chota sa reminder tha hamare 15-min AI Patient Booking Demo ka. Kya kal jummay ko 3 baje 5 min nikal sakte hain? — Ali Mola (+92 346 2231606)"\n\n*Added row to "OUTREACH DRAFTS" tab.*`,
      ur_nastaliq: `### ⏰ فالو اپ ایجنٹ — ریمائنڈر ڈرافٹ\n\n"سلام عثمان صاحب، امید ہے آپ خیریت سے ہوں گے۔ سر بس چھوٹا سا ریمائنڈر تھا ہمارے AI ڈیمو کا، کیا کل 3 بجے چند منٹ کے لیے کنیکٹ ہو سکتے ہیں؟"`,
      ur_roman: `### ⏰ FOLLOW-UP AGENT — Output\n\n"Sir bas reminder tha AI demo ka... Kya kal 3 baje 5 min connect ho sakte hain?" (Added to OUTREACH DRAFTS tab)`
    }
  },
  {
    id: 'support-agent',
    assemblyOrder: 7,
    n8nPhase: 'PHASE 2: OUTREACH + SALES',
    name: 'SUPPORT AGENT',
    nameUrdu: 'کسٹمر سپورٹ ایجنٹ',
    title: 'NexaBoost Support AI Agent',
    department: 'operations',
    departmentLabel: 'Phase 2: Outreach + Sales',
    tagline: 'Replies to customer inquiries 24/7 (Price: Rs. 50k/mo, Setup: 7 Days, Owner: Ali Mola)',
    taglineUrdu: 'گاہکوں کے تمام سوالات کے 24 گھنٹے فوری جوابات دے (فیس 50 ہزار، سیٹ اپ 7 دن)',
    badge: '7. 24/7 Support',
    iconName: 'Headphones',
    description: 'Replies instantly to prospect questions about NexaBoost AI services. Quotes Rs. 50,000/mo package, 7-day setup, and connects to founder Ali Mola (+92 346 2231606) for complex queries.',
    descriptionUrdu: 'گاہکوں کے ہر سوال کا فوری جواب دیتا ہے، پیکیج کی تفصیلات بتاتا ہے اور ضرورت پڑنے پر علی مولا سے کنیکٹ کرواتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Support AI Agent
MISSION: Reply to customer questions about NexaBoost services
FAQ: Price: 50,000/mo, Setup: 7 Days, Owner: Ali Mola +92 346 2231606
RULE: If hard question, say "1 min, Ali Mola se connect karwata hun"`,
    capabilities: [
      'Instant 24/7 replies on WhatsApp and Web Simulator',
      'Knowledge Base: Package = Rs. 50,000/mo | 1000 Leads | 7-Day Setup',
      'Owner escalation: "1 min, Ali Mola se connect karwata hun (+92 346 2231606)"',
      'Polite bilingual Urdu and English conversation'
    ],
    capabilitiesUrdu: [
      '24 گھنٹے واٹس ایپ اور ویب سائٹ پر جوابات',
      'معلومات: 50 ہزار ماہانہ، 1000 لیڈز، 7 دن سیٹ اپ',
      'مشکل سوال پر فوری بانی علی مولا سے رابطہ',
      'اردو اور انگریزی میں شائستہ گفتگو'
    ],
    metrics: [
      { label: 'Response Time', value: '< 2 Seconds' },
      { label: 'Core Package', value: 'Rs. 50,000 / mo' },
      { label: 'Setup Time', value: '7 Days' }
    ],
    samplePrompts: [
      {
        title: 'Customer Asks for Pricing and Guarantee',
        titleUrdu: 'قیمت اور گارنٹی کا سوال',
        prompt: 'Customer says: "Bhai pricing kya hai aur setup kitne din mein live hoga?"',
        promptUrdu: 'گاہک کو پیکیج کی قیمت اور سیٹ اپ کی مدت کا جواب دیں۔'
      },
      {
        title: 'Customer Asks Complex Custom ERP Integration',
        titleUrdu: 'پیچیدہ کسٹم سوال کا جواب',
        prompt: 'Customer says: "Can this AI connect to our proprietary Oracle database on local server?"',
        promptUrdu: 'پیچیدہ ٹیکنیکل سوال پر علی مولا سے کنیکٹ کروانے والا جواب دیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🎧 SUPPORT AGENT — Live Response\n\n"Walaikum Assalam! ✨\n\nHamara complete **AI Lead Gen + WhatsApp CRM Package**:\n- 💰 **Price:** Rs. 50,000 / month\n- ⚡ **Features:** 1,000 Verified Business Leads + 24/7 WhatsApp AI Sales Agent + Auto Follow-ups\n- 🚀 **Setup Time:** 7 din mein live ho jayega aur onboarding call book ho jayegi.\n\nAgar aap hamare founder se direct baat karna chahte hain to Ali Mola (+92 346 2231606) se foran connect karwa deta hoon!"`,
      ur_nastaliq: `### 🎧 کسٹمر سپورٹ ایجنٹ — جواب\n\n"وعلیکم السلام! ✨ ہمارا AI پیکیج 50,000 روپے ماہانہ ہے جس میں 1000 تصدیق شدہ لیڈز اور 24/7 واٹس ایپ ایجنٹ شامل ہے۔ مکمل سیٹ اپ 7 دن میں ہو جائے گا۔"`,
      ur_roman: `### 🎧 SUPPORT AGENT — Standard Reply\n\nWalaikum Assalam! ✨ Price: Rs. 50,000/mo, 1000 Leads, 7 Days Setup. Contact Ali Mola at +92 346 2231606.`
    }
  },
  {
    id: 'closer-agent',
    assemblyOrder: 8,
    n8nPhase: 'PHASE 2: OUTREACH + SALES',
    name: 'CLOSER AGENT',
    nameUrdu: 'ڈیل کلوزر ایجنٹ',
    title: 'NexaBoost Closer Agent',
    department: 'sales',
    departmentLabel: 'Phase 2: Outreach + Sales',
    tagline: 'When lead says "Yes/Interested/Price", books meeting & alerts aispecialistugccreator@gmail.com',
    taglineUrdu: 'گاہک کی دلچسپی پر میٹنگ بک کرے اور ای میل الرٹ بھیج کر اسٹیٹس اپ ڈیٹ کرے',
    badge: '8. Deal Closer',
    iconName: 'Award',
    description: 'When prospect says "Yes", "Interested", or asks for pricing, books meeting slot, sends email alert to aispecialistugccreator@gmail.com with subject "HOT LEAD - {Company Name}", and updates status to "Meeting Booked".',
    descriptionUrdu: 'گاہک کی دلچسپی ظاہر ہونے پر فوری میٹنگ بک کرتا ہے، بانی کو ای میل الرٹ بھیجتا ہے اور شیٹ میں اسٹیٹس "Meeting Booked" کر دیتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Closer Agent
MISSION: When lead says "Yes/Interested/Price", book meeting
TASK: Send email to aispecialistugccreator@gmail.com with Subject: HOT LEAD - {Company Name}
OUTPUT: Update "LEADS DATABASE" Status to "Meeting Booked"`,
    capabilities: [
      'Detects high-intent triggers ("Yes", "Interested", "Price")',
      'Automated email notification to aispecialistugccreator@gmail.com',
      'Subject format: HOT LEAD - {Company Name}',
      'Updates "LEADS DATABASE" Status column to "Meeting Booked"'
    ],
    capabilitiesUrdu: [
      'گرم گاہکوں کی فوری شناخت',
      'ای میل الرٹ: HOT LEAD - {Company Name}',
      'شیٹ میں اسٹیٹس "Meeting Booked" اپ ڈیٹ کرنا',
      'میٹنگ کا وقت اور کلائنٹ کا واٹس ایپ فورا لاک کرنا'
    ],
    metrics: [
      { label: 'Trigger Keywords', value: 'Yes / Interested / Price' },
      { label: 'Alert Destination', value: 'aispecialistugccreator@gmail.com' },
      { label: 'Updated Status', value: 'Meeting Booked' }
    ],
    samplePrompts: [
      {
        title: 'Lead Agrees to Demo Call',
        titleUrdu: 'کلائنٹ ڈیمو کے لیے راضی ہوا',
        prompt: 'Lead "Zaytoun Luxe Living (Hamza Malik)" replies: "Yes, we are interested. Can you show demo Friday at 4 PM?" Book meeting and trigger alert.',
        promptUrdu: 'کلائنٹ کے راضی ہونے پر ای میل الرٹ اور شیٹ اپ ڈیٹ پرفارم کریں۔'
      },
      {
        title: 'Lead Asks for Invoice and Onboarding Link',
        titleUrdu: 'کلائنٹ نے فیس کی تفصیل مانگی',
        prompt: 'Lead asks: "Send me bank account and contract, we want the Rs. 50,000 package." Close and alert.',
        promptUrdu: '50 ہزار کے پیکیج کا فوری معاہدہ اور الرٹ جاری کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🏆 CLOSER AGENT — Action Triggered!\n\n1. **Email Alert Sent:**\n   - **To:** aispecialistugccreator@gmail.com\n   - **Subject:** \`HOT LEAD - Zaytoun Luxe Living\`\n   - **Body:** Lead Hamza Malik (+92 333 4567890) agreed to Friday 4 PM Demo for Rs. 50k/mo Package.\n2. **Master Sheet Updated:**\n   - **Row:** Zaytoun Luxe Living\n   - **Status:** \`Meeting Booked\` ✅\n   - **Notes:** Demo scheduled for Friday 4 PM. Founder notified.`,
      ur_nastaliq: `### 🏆 کلوزر ایجنٹ — ایکشن مکمل!\n\n- ای میل الرٹ روانہ: HOT LEAD - Zaytoun Luxe Living\n- گوگل شیٹ اسٹیٹس اپ ڈیٹ: "Meeting Booked"\n- بانی علی مولا کو واٹس ایپ اور ای میل پر تفصیل موصول ہو گئی۔`,
      ur_roman: `### 🏆 CLOSER AGENT — Executed\n\nEmail sent to aispecialistugccreator@gmail.com (Subject: HOT LEAD - Zaytoun Luxe Living). LEADS DATABASE status updated to "Meeting Booked".`
    }
  },

  // -------------------------------------------------------------
  // PHASE 3: CONTENT + MARKETING - 4 AGENTS
  // -------------------------------------------------------------
  {
    id: 'content-ideas',
    assemblyOrder: 9,
    n8nPhase: 'PHASE 3: CONTENT + MARKETING',
    name: 'CONTENT IDEAS AGENT',
    nameUrdu: 'کنٹینٹ آئیڈیاز ایجنٹ',
    title: 'NexaBoost Content Ideas Agent',
    department: 'marketing',
    departmentLabel: 'Phase 3: Content + Marketing',
    tagline: 'Gives 3 viral content ideas daily for TikTok/IG/LinkedIn into "CONTENT CALENDAR"',
    taglineUrdu: 'ٹک ٹاک، انسٹاگرام اور لنکڈ اِن کے لیے روزانہ 3 وائرل آئیڈیاز تیار کرے',
    badge: '9. Viral Hooks',
    iconName: 'PenTool',
    description: 'Generates 3 viral content angles daily on "AI Automation for Pakistani Businesses" tailored for TikTok, Instagram Reels, and LinkedIn. Writes to "CONTENT CALENDAR" tab with Status: Draft.',
    descriptionUrdu: 'پاکستانی کاروباروں کے لیے روزانہ 3 وائرل ویڈیو اور پوسٹ آئیڈیاز بنا کر گوگل شیٹ کے کنٹینٹ کیلنڈر میں محفوظ کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Content Ideas Agent
MISSION: Give 3 viral content ideas daily for TikTok/IG/LinkedIn
TOPIC: AI Automation for Pakistani Businesses
OUTPUT: Write to "CONTENT CALENDAR" tab. Status: Draft`,
    capabilities: [
      'Daily automated generation of 3 high-converting hooks',
      'Topic: AI Automation for Pakistani Businesses (Real Estate, Clinics, Agencies)',
      'Pushes directly to "CONTENT CALENDAR" tab with Status: Draft',
      'Optimized for short-form retention (TikTok, Reels, LinkedIn)'
    ],
    capabilitiesUrdu: [
      'روزانہ 3 وائرل ٹاپکس کی تخلیق',
      'موضوع: پاکستانی کاروباروں کے لیے AI آٹومیشن',
      '"CONTENT CALENDAR" شیٹ میں ڈرافٹ محفوظ کرنا',
      'ٹک ٹاک، انسٹاگرام اور لنکڈ اِن کے لیے بہترین زاویے'
    ],
    metrics: [
      { label: 'Daily Output', value: '3 Viral Ideas' },
      { label: 'Channels', value: 'TikTok, IG, LinkedIn' },
      { label: 'Status Assigned', value: 'Draft' }
    ],
    samplePrompts: [
      {
        title: 'Generate 3 Viral Ideas for Pakistani Real Estate AI',
        titleUrdu: 'رئیل اسٹیٹ AI کے 3 آئیڈیاز',
        prompt: 'Generate 3 viral video topics showing how Pakistani property builders waste money on cold calling instead of AI WhatsApp agents.',
        promptUrdu: 'رئیل اسٹیٹ کے لیے 3 وائرل ویڈیو آئیڈیاز بنائیں۔'
      },
      {
        title: 'Generate Agency Automation Topic',
        titleUrdu: 'مارکیٹنگ ایجنسی آٹومیشن آئیڈیا',
        prompt: 'Create 3 ideas on how agency owners in Lahore can automate 1000 client leads monthly without human salary stress.',
        promptUrdu: 'ایجنسی مالکان کے لیے 1000 لیڈز کا آئیڈیا تیار کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 💡 CONTENT IDEAS AGENT — Daily 3 Ideas in "CONTENT CALENDAR"\n\n1. **Idea 1 (Reels/TikTok):** "Kyu 90% Pakistani real estate agents WhatsApp pe clients lose kar dete hain (And how AI saves Rs. 50k salary)".\n2. **Idea 2 (LinkedIn):** "How an Islamabad clinic booked 120 patient appointments in 7 days using 1 automated WhatsApp agent."\n3. **Idea 3 (TikTok):** "Stop hiring 5 call center reps! Watch this 14 AI Agent assembly line in action."\n\n*Saved to "CONTENT CALENDAR" tab. Status: Draft.*`,
      ur_nastaliq: `### 💡 کنٹینٹ آئیڈیاز ایجنٹ — 3 وائرل آئیڈیاز\n\n1. رئیل اسٹیٹ ایجنٹس کے لیے واٹس ایپ AI کا کمال۔\n2. کلینک نے بغیر عملے کے 120 اپائنٹمنٹس کیسے کیں۔\n3. 5 بندوں کی ٹیم بمقابلہ 14 AI ایجنٹس۔\n(کنٹینٹ کیلنڈر میں محفوظ کر دیا گیا ہے)` ,
      ur_roman: `### 💡 CONTENT IDEAS AGENT — Output (CONTENT CALENDAR Tab)\n\n3 daily ideas generated on "AI Automation for Pakistani Businesses". Status: Draft in CONTENT CALENDAR tab.`
    }
  },
  {
    id: 'video-script',
    assemblyOrder: 10,
    n8nPhase: 'PHASE 3: CONTENT + MARKETING',
    name: 'VIDEO SCRIPT AGENT',
    nameUrdu: 'ویڈیو اسکرپٹ ایجنٹ',
    title: 'NexaBoost Video Script Agent',
    department: 'marketing',
    departmentLabel: 'Phase 3: Content + Marketing',
    tagline: 'Takes 1 idea from "CONTENT CALENDAR" and writes 30 sec reel script (Hook | Body | CTA | Hashtags)',
    taglineUrdu: 'شیٹ سے آئیڈیا لے کر 30 سیکنڈ کی مکمل ریل اسکرپٹ تیار کرے',
    badge: '10. Reel Producer',
    iconName: 'Video',
    description: 'Pulls drafted ideas from "CONTENT CALENDAR" and writes high-retention 30-second video scripts with exact Hook, Body, Call to Action, and Viral Hashtags. Updates the same row in Google Sheet.',
    descriptionUrdu: 'آئیڈیا کو 30 سیکنڈ کے پر اثر اسکرپٹ (ہک، باڈی، سی ٹی اے، ہیش ٹیگز) میں تبدیل کر کے شیٹ اپ ڈیٹ کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Video Script Agent
MISSION: Take 1 idea from "CONTENT CALENDAR" and write 30 sec reel script
FORMAT: Hook | Body | CTA | Hashtags
OUTPUT: Update same row in "CONTENT CALENDAR" tab`,
    capabilities: [
      'Reads pending idea from "CONTENT CALENDAR"',
      'Strict 4-part script structure: Hook (0-3s) | Body (4-22s) | CTA (23-30s) | Hashtags',
      'Roman Urdu + conversational Pakistani business tone',
      'Updates the same row in "CONTENT CALENDAR" tab'
    ],
    capabilitiesUrdu: [
      'شیٹ سے آئیڈیا اٹھا کر مکمل اسکرپٹ بنانا',
      'ڈھانچہ: ہک، باڈی، سی ٹی اے، ہیش ٹیگز',
      '30 سیکنڈ کی بہترین ٹائمنگ',
      'اسی قطار کو گوگل شیٹ میں اپ ڈیٹ کرنا'
    ],
    metrics: [
      { label: 'Script Duration', value: '30 Seconds' },
      { label: 'Format', value: 'Hook | Body | CTA | Tags' },
      { label: 'Output Tab', value: 'CONTENT CALENDAR' }
    ],
    samplePrompts: [
      {
        title: 'Write 30s Script for Real Estate WhatsApp AI',
        titleUrdu: 'رئیل اسٹیٹ ریل اسکرپٹ',
        prompt: 'Take idea "How Real Estate agents lose clients on WhatsApp" and write a punchy 30-second script for Ali Mola.',
        promptUrdu: '30 سیکنڈ کی پرکشش ریل اسکرپٹ تیار کریں۔'
      },
      {
        title: 'Write 30s Script for Rs. 50,000 Package',
        titleUrdu: '50 ہزار پیکیج کی پرومو ریل',
        prompt: 'Write high-energy 30-second TikTok script explaining the 1000 Leads + WhatsApp CRM package.',
        promptUrdu: '1000 لیڈز والے پیکیج کی تشہیری ویڈیو اسکرپٹ لکھیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🎬 VIDEO SCRIPT AGENT — 30-Sec Reel Script in "CONTENT CALENDAR"\n\n- **HOOK (0-3s):** "Agar aapka business abhi bhi manual WhatsApp replies de raha hai, to aap rozana lakhon ka nuqsaan kar rahe hain!"\n- **BODY (4-22s):** "NexaBoost ka 14 AI Agent system apke business ko 1000 verified leads deta hai aur 24/7 har customer ko 2 second mein price, catalog aur booking provide karta hai — bina kisi human team ke!"\n- **CTA (23-30s):** "Apne business ke liye free AI Demo call book karein. Bio mein link par click karein ya WhatsApp karein +92 346 2231606!"\n- **HASHTAGS:** #AIBusinessPakistan #NexaBoost #LeadGeneration #WhatsAppAutomation #LahoreBusiness #KarachiBusiness`,
      ur_nastaliq: `### 🎬 ویڈیو اسکرپٹ ایجنٹ — 30 سیکنڈ ریل\n\n- ہک: اگر آپ کا کاروبار ابھی بھی دستی جوابات دے رہا ہے تو آپ نقصان کر رہے ہیں!\n- باڈی: ہمارا AI ایجنٹ 1000 لیڈز اور 24 گھنٹے خودکار سیلز کرتا ہے۔\n- سی ٹی اے: ابھی بائیو کے لنک سے فری ڈیمو بک کریں!\n- ہیش ٹیگز: #AIPakistan #NexaBoost`,
      ur_roman: `### 🎬 VIDEO SCRIPT AGENT — Script Format\n\nHook (0-3s) | Body (4-22s) | CTA (23-30s) | Hashtags updated in CONTENT CALENDAR tab.`
    }
  },
  {
    id: 'ad-copy',
    assemblyOrder: 11,
    n8nPhase: 'PHASE 3: CONTENT + MARKETING',
    name: 'AD COPY AGENT',
    nameUrdu: 'ایڈ کاپی ایجنٹ',
    title: 'NexaBoost Ad Copy Agent',
    department: 'marketing',
    departmentLabel: 'Phase 3: Content + Marketing',
    tagline: 'Writes Facebook/Google Ad copy for "AI Lead Gen Package Rs. 50,000" (3 Headlines + 3 Descriptions)',
    taglineUrdu: '50 ہزار کے AI پیکیج کے لیے 3 ہیڈلائنز اور 3 ڈسکرپشنز کے ساتھ اشتہاری کاپی لکھے',
    badge: '11. Ad Specialist',
    iconName: 'TrendingUp',
    description: 'Writes conversion-optimized Facebook, Instagram, and Google Ad copies specifically for the "AI Lead Gen Package Rs. 50,000". Delivers 3 High-CTR Headlines, 3 Descriptions, and Target Audience specs.',
    descriptionUrdu: 'فیس بک اور گوگل اشتہارات کے لیے 3 زبردست ہیڈلائنز، ڈسکرپشنز اور ہدف سامعین کی تفصیلات تیار کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Ad Copy Agent
MISSION: Write Facebook/Google Ad copy for "AI Lead Gen Package Rs. 50,000"
OUTPUT: Give 3 Headlines + 3 Descriptions + Target Audience`,
    capabilities: [
      'Tailored copy for Facebook Ads Manager & Google Search/PMax',
      'Package focused: "AI Lead Gen Package Rs. 50,000 / month"',
      'Provides 3 Hook Headlines + 3 High-Converting Descriptions + Detailed Target Audience',
      'Highlights 1000 Leads + 24/7 AI WhatsApp Agent + 7-Day Setup'
    ],
    capabilitiesUrdu: [
      'فیس بک اور گوگل کے لیے خصوصی ایڈ کاپی',
      'فوکس: 50 ہزار والا 1000 لیڈز پیکیج',
      '3 ہیڈلائنز + 3 ڈسکرپشنز + ٹارگٹ آڈینس',
      '7 دن میں لائیو سیٹ اپ کی گارنٹی'
    ],
    metrics: [
      { label: 'Headlines', value: '3 Variations' },
      { label: 'Descriptions', value: '3 Variations' },
      { label: 'Audience Targeting', value: 'Pakistani Business Owners' }
    ],
    samplePrompts: [
      {
        title: 'Generate Meta Ad Copy for Rs. 50,000 Package',
        titleUrdu: 'فیس بک اشتہار کی مکمل کاپی',
        prompt: 'Write Meta Ads copy for Pakistani B2B founders: 3 Headlines, 3 Descriptions, and suggested audience interests.',
        promptUrdu: 'پاکستانی بزنس آنرز کے لیے فیس بک اشتہار تیار کریں۔'
      },
      {
        title: 'Generate Google Search Ad Headlines',
        titleUrdu: 'گوگل سرچ اشتہار کی ہیڈلائنز',
        prompt: 'Create 3 Google Ads headlines under 30 characters each focusing on B2B Leads and WhatsApp CRM.',
        promptUrdu: 'گوگل سرچ کے لیے مختصر اور پر اثر ہیڈلائنز لکھیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 🎯 AD COPY AGENT — Campaign: "AI Lead Gen Rs. 50,000"\n\n**HEADLINES (3 Variations):**\n1. 1,000 Verified Leads + 24/7 AI WhatsApp Agent (Rs. 50k/mo)\n2. Stop Cold Calling! Get 1000 Decision Maker Leads with AI\n3. Scale Your Sales 3X — Full AI Setup in 7 Days\n\n**DESCRIPTIONS (3 Variations):**\n1. Transform your sales with NexaBoost. We provide 1000 monthly verified B2B leads & an autonomous 24/7 AI WhatsApp CRM. Setup in 7 days.\n2. No more manual follow-ups or lost chats. Our bilingual AI closes deals 24/7. Includes onboarding with Ali Mola.\n3. Trusted by 25+ fast-growing Pakistani brands. Get your Free AI Audit & Demo today.\n\n**TARGET AUDIENCE:** Pakistani Business Owners, Real Estate Directors, Clinic Owners, E-commerce Founders (Age 25-55, Cities: Lahore, Karachi, Islamabad, Faisalabad).`,
      ur_nastaliq: `### 🎯 ایڈ کاپی ایجنٹ — اشتہاری کاپی\n\n- ہیڈلائنز: 1000 تصدیق شدہ لیڈز + 24/7 واٹس ایپ AI (50 ہزار/ماہ)\n- ڈسکرپشن: 7 دن میں مکمل سیٹ اپ، خودکار فالو اپ اور علی مولا کے ساتھ آن بورڈنگ۔\n- ٹارگٹ آڈینس: پاکستانی بزنس آنرز اور ڈائریکٹرز۔`,
      ur_roman: `### 🎯 AD COPY AGENT — Complete Ad Blueprint\n\n3 Headlines + 3 Descriptions + Target Audience for "AI Lead Gen Package Rs. 50,000".`
    }
  },
  {
    id: 'seo-blog',
    assemblyOrder: 12,
    n8nPhase: 'PHASE 3: CONTENT + MARKETING',
    name: 'SEO BLOG AGENT',
    nameUrdu: 'ایس ای او بلاگ ایجنٹ',
    title: 'NexaBoost SEO Blog Agent',
    department: 'marketing',
    departmentLabel: 'Phase 3: Content + Marketing',
    tagline: 'Writes blog outline for "How Pakistani Businesses Can Get Leads with AI in 2026"',
    taglineUrdu: 'سال 2026 میں پاکستانی کاروباروں کے لیے AI سے لیڈز حاصل کرنے پر مکمل بلاگ خاکہ بنائے',
    badge: '12. Organic SEO',
    iconName: 'BarChart3',
    description: 'Creates SEO-ranked blog outlines, H1/H2/H3 structures, high-intent keywords, and meta descriptions for authoritative ranking on Google for Pakistani AI automation searches.',
    descriptionUrdu: 'گوگل پر ٹاپ رینکنگ کے لیے مکمل بلاگ کا ڈھانچہ، ہیڈنگز، کی ورڈز اور میٹا تفصیلات تیار کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost SEO Blog Agent
MISSION: Write blog outline for "How Pakistani Businesses Can Get Leads with AI in 2026"
OUTPUT: H1, H2, H3, Keywords, Meta Description`,
    capabilities: [
      'Topic Authority: "How Pakistani Businesses Can Get Leads with AI in 2026"',
      'Generates exact H1, H2, H3 hierarchy with semantic keywords',
      'Writes 155-character CTR-optimized Meta Description',
      'Incorporates local Pakistani commercial search intent'
    ],
    capabilitiesUrdu: [
      'موضوع: 2026 میں پاکستانی کاروبار AI سے لیڈز کیسے لیں',
      'H1, H2, H3 کی مکمل درجہ بندی',
      'اعلیٰ درجے کے سرچ کی ورڈز اور میٹا ڈسکرپشن',
      'گوگل کے پہلے صفحے پر رینکنگ کی صلاحیت'
    ],
    metrics: [
      { label: 'Target Year', value: '2026' },
      { label: 'Search Intent', value: 'High Commercial B2B' },
      { label: 'Structure', value: 'H1, H2, H3, Meta, Keywords' }
    ],
    samplePrompts: [
      {
        title: 'Generate Outline for 2026 Lead Gen Guide',
        titleUrdu: '2026 لیڈ جنریشن گائیڈ کا خاکہ',
        prompt: 'Write complete SEO outline for "How Pakistani Businesses Can Get Leads with AI in 2026" including keywords.',
        promptUrdu: 'مکمل ایس ای او بلاگ آؤٹ لائن تیار کریں۔'
      },
      {
        title: 'Generate Meta Tags and FAQ Schema',
        titleUrdu: 'میٹا ٹیگز اور ایف اے کیو',
        prompt: 'Create meta title, 155-char meta description, and 3 schema FAQ questions.',
        promptUrdu: 'میٹا ڈسکرپشن اور گوگل اسکیما سوالات بنائیں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 📝 SEO BLOG AGENT — Blueprint & Outline\n\n**H1:** How Pakistani Businesses Can Get 1,000+ Qualified Leads with AI in 2026\n\n**META DESCRIPTION:** Discover how leading Pakistani enterprises use 24/7 AI agents and WhatsApp CRM to generate 1000+ verified leads monthly without hiring large sales teams.\n\n**PRIMARY KEYWORDS:** AI lead generation Pakistan, WhatsApp CRM automation Lahore, business automation Karachi, NexaBoost AI Hub, B2B leads Pakistan 2026.\n\n**H2 & H3 STRUCTURE:**\n- **H2: The 2026 Sales Shift in Pakistan**\n  - H3: Why Traditional Telemarketing & Cold Calling is Failing\n  - H3: The WhatsApp First Buyer Culture\n- **H2: How Autonomous AI Lead Engines Work**\n  - H3: Step 1: Instant B2B Database Scraping & Verification\n  - H3: Step 2: 24/7 Bilingual WhatsApp Response (Urdu + English)\n  - H3: Step 3: Automated Onboarding & Meeting Booking\n- **H2: NexaBoost vs. 14-Person Human Team (ROI Breakdown)**\n- **H2: How to Deploy in 7 Days (Starting at Rs. 50,000/mo)**`,
      ur_nastaliq: `### 📝 ایس ای او بلاگ ایجنٹ — مکمل آؤٹ لائن\n\n- H1: سال 2026 میں پاکستانی کاروبار AI سے 1000 لیڈز کیسے حاصل کریں؟\n- میٹا تفصیل: جانیے کیسے واٹس ایپ اور AI ایجنٹس کے ذریعے کاروبار کو 3 گنا بڑھایا جا سکتا ہے۔\n- مکمل H2 اور H3 ہیڈنگز اور کی ورڈز شامل ہیں۔`,
      ur_roman: `### 📝 SEO BLOG AGENT — Output\n\nH1, H2, H3, Keywords, and Meta Description generated for "How Pakistani Businesses Can Get Leads with AI in 2026".`
    }
  },

  // -------------------------------------------------------------
  // PHASE 4: MANAGEMENT - 2 AGENTS
  // -------------------------------------------------------------
  {
    id: 'analytics-agent',
    assemblyOrder: 13,
    n8nPhase: 'PHASE 4: MANAGEMENT',
    name: 'ANALYTICS AGENT',
    nameUrdu: 'اینالیٹکس ایجنٹ',
    title: 'NexaBoost Analytics Agent',
    department: 'strategy',
    departmentLabel: 'Phase 4: Management',
    tagline: 'Every Monday 9 AM, counts Leads, Replies, Meetings into "REPORTS" & emails aispecialistugccreator@gmail.com',
    taglineUrdu: 'ہر پیر صبح 9 بجے شیٹ کی رپورٹ بنائے اور بانی کو ہفتہ وار ای میل سمری بھیجے',
    badge: '13. KPI Tracker',
    iconName: 'BarChart3',
    description: 'Runs every Monday at 9 AM: reads "LEADS DATABASE" and "REPORTS" tabs. Calculates Total Leads, Replies, and Meetings Booked. Writes summary into "REPORTS" tab and emails aispecialistugccreator@gmail.com.',
    descriptionUrdu: 'ہر پیر کی صبح مکمل سی آر ایم کا تجزیہ کر کے کل لیڈز، جوابی شرح اور میٹنگز کی رپورٹ بانی کو ای میل کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Analytics Agent
MISSION: Every Monday 9 AM, read "LEADS DATABASE" and "REPORTS" tab
TASK: Count Total Leads, Replies, Meetings. Write in "REPORTS" tab
OUTPUT: Email summary to aispecialistugccreator@gmail.com`,
    capabilities: [
      'Scheduled trigger: Every Monday at 9:00 AM PKT',
      'Aggregates Total Leads Generated, Reply Rate, and Meetings Booked',
      'Appends new row in "REPORTS" tab of Master CRM',
      'Dispatches executive email summary to aispecialistugccreator@gmail.com'
    ],
    capabilitiesUrdu: [
      'ہر پیر صبح 9 بجے خودکار رپورٹ تیار کرنا',
      'کل لیڈز، جوابی شرح اور میٹنگز کی گنتی',
      '"REPORTS" ٹیب میں محفوظ کرنا',
      'ای میل سمری: aispecialistugccreator@gmail.com'
    ],
    metrics: [
      { label: 'Schedule', value: 'Every Monday 9:00 AM' },
      { label: 'Tracked KPIs', value: 'Leads, Replies, Meetings' },
      { label: 'Recipient', value: 'aispecialistugccreator@gmail.com' }
    ],
    samplePrompts: [
      {
        title: 'Generate Weekly Monday Performance Report',
        titleUrdu: 'پیر کی صبح کی ہفتہ وار رپورٹ',
        prompt: 'Analyze LEADS DATABASE for past 7 days: 280 leads added, 98 replies, 18 meetings booked. Generate report row and email.',
        promptUrdu: 'گزشتہ 7 دن کی کارکردگی کی رپورٹ تیار کریں۔'
      },
      {
        title: 'Calculate Monthly ROI Summary for Ali Mola',
        titleUrdu: 'ماہانہ منافع اور کارکردگی سمری',
        prompt: 'Calculate 30-day conversion stats for all 14 agents.',
        promptUrdu: 'تمام 14 ایجنٹس کے ماہانہ نتائج کا خلاصہ تیار کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### 📊 ANALYTICS AGENT — Monday 9:00 AM Executive Digest\n\n- **Target Sheet:** Google Sheet "NexaBoost Master CRM" (Tab: "REPORTS")\n- **Email Dispatched To:** aispecialistugccreator@gmail.com\n- **Weekly Performance Summary:**\n  - 📥 **Total New Leads Sourced:** 320 leads\n  - 💬 **Outreaches Sent:** 295 (Reply Rate: 34.2% / 101 replies)\n  - 📅 **Meetings Booked:** 24 Hot Demos\n  - 💰 **Pipeline Value:** Rs. 1,200,000 (at Rs. 50k/mo avg package)\n\n*Row written to "REPORTS" tab. Email notification sent.*`,
      ur_nastaliq: `### 📊 اینالیٹکس ایجنٹ — ہفتہ وار کارکردگی رپورٹ\n\n- کل نئی لیڈز: 320\n- پیغامات کے جوابات: 101 (34.2% شرح)\n- تصدیق شدہ میٹنگز: 24 ڈیمو کالز\n- رپورٹ شیٹ میں درج کر کے ای میل پر بھیج دی گئی ہے۔`,
      ur_roman: `### 📊 ANALYTICS AGENT — Weekly Digest\n\nReport logged in "REPORTS" tab and emailed to aispecialistugccreator@gmail.com every Monday 9 AM.`
    }
  },
  {
    id: 'review-agent',
    assemblyOrder: 14,
    n8nPhase: 'PHASE 4: MANAGEMENT',
    name: 'REVIEW AGENT',
    nameUrdu: 'ریویو ایجنٹ',
    title: 'NexaBoost Review Agent',
    department: 'strategy',
    departmentLabel: 'Phase 4: Management',
    tagline: 'Finds "Status = Closed" leads, creates message draft asking for Google Review in Notes',
    taglineUrdu: 'کامیاب کلائنٹس کے لیے گوگل ریویو اور فیڈبیک کا پرسنلائزڈ ڈرافٹ تیار کرے',
    badge: '14. Reputation Booster',
    iconName: 'MessageSquare',
    description: 'Scans "LEADS DATABASE" for leads with "Status = Closed" (active paid clients). Generates a polite, warm message draft asking for a 5-star Google Review and appends it to the Notes column.',
    descriptionUrdu: 'ڈیل مکمل ہونے پر کلائنٹ کے لیے شائستہ انداز میں گوگل ریویو کی درخواست تیار کر کے نوٹس میں محفوظ کرتا ہے۔',
    systemPrompt: `ROLE: NexaBoost Review Agent
MISSION: Find "Status = Closed" leads. Send them message draft to ask for Google Review
OUTPUT: Add draft in "Notes" column: "Sir review de den please..."`,
    capabilities: [
      'Filters for "Status = Closed" (successfully converted clients)',
      'Generates respectful, relationship-building review request drafts',
      'Appends directly into the "Notes" column for 1-click WhatsApp dispatch',
      'Boosts Google Business Profile & trust ranking automatically'
    ],
    capabilitiesUrdu: [
      'کامیاب ڈیلز ("Status = Closed") کی شناخت',
      'گوگل ریویو کے لیے پرسنلائزڈ ڈرافٹ کی تیاری',
      'نوٹس کالم میں میسج کا اندراج',
      'کمپنی کی آن لائن ریٹنگ اور ساکھ میں اضافہ'
    ],
    metrics: [
      { label: 'Filter Criterion', value: 'Status = Closed' },
      { label: 'Output Column', value: 'Notes Column' },
      { label: 'Target', value: '5-Star Google Review' }
    ],
    samplePrompts: [
      {
        title: 'Draft Review Request for Closed Clinic Client',
        titleUrdu: 'کلینک کلائنٹ کے لیے ریویو ڈرافٹ',
        prompt: 'Client "Dr. Usman Tariq" completed onboarding 14 days ago with 40+ booked patients. Draft Google Review message.',
        promptUrdu: 'کامیاب کلائنٹ کے لیے گوگل ریویو کا میسج بنائیں۔'
      },
      {
        title: 'Draft Review Request for Real Estate Client',
        titleUrdu: 'رئیل اسٹیٹ کلائنٹ کے لیے ریویو ڈرافٹ',
        prompt: 'Client "Hamza Malik (Zaytoun Luxe)" closed 2 property sales via AI agent. Draft respectful review request.',
        promptUrdu: 'پراپرٹی کلائنٹ کے لیے ریویو میسج ڈرافٹ کریں۔'
      }
    ],
    defaultSampleOutput: {
      en: `### ⭐ REVIEW AGENT — Review Draft in "Notes" Column\n\n- **Target Closed Client:** Dr. Usman Tariq | Al-Noor Dental Clinic (Status: Closed)\n- **Draft Appended to Notes:**\n  > "Salam Dr. Usman sb, umeed hai aap khairiyat se honge. Al-Noor Dental par AI booking live hone ke baad 40+ patients successfully book huye hain! Agar aapko hamari service pasand aayi ho to please 30 seconds nikal kar hamare Google page par 5-star review de dein: [Google Review Link]. Ye hamari team ke liye bohot badi hosla-afzai hogi! — Ali Mola, NexaBoost AI"\n\n*Saved to "Notes" column.*`,
      ur_nastaliq: `### ⭐ ریویو ایجنٹ — گوگل ریویو ڈرافٹ\n\n"سلام عثمان صاحب، امید ہے آپ خیریت سے ہوں گے۔ اگر آپ کو NexaBoost AI سروس پسند آئی ہو تو پلیز ہمارے گوگل پیج پر ایک ریویو ضرور عنایت فرمائیں: [لنک]۔ بہت شکریہ — علی مولا"`,
      ur_roman: `### ⭐ REVIEW AGENT — Output\n\nReview draft added to Notes column for Status = Closed leads: "Sir review de den please..." with Google Review link.`
    }
  }
];
