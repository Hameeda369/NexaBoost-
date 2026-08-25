export type LanguageMode = 'en' | 'ur_nastaliq' | 'ur_roman';

export type AgentDepartment = 'sales' | 'marketing' | 'operations' | 'strategy';

export interface AgentSpec {
  id: string;
  name: string;
  nameUrdu: string;
  title: string;
  department: AgentDepartment;
  departmentLabel: string;
  tagline: string;
  taglineUrdu: string;
  badge: string;
  description: string;
  descriptionUrdu: string;
  capabilities: string[];
  capabilitiesUrdu: string[];
  systemPrompt?: string;
  n8nPhase?: string;
  assemblyOrder?: number;
  metrics: {
    label: string;
    value: string;
  }[];
  samplePrompts: {
    title: string;
    titleUrdu: string;
    prompt: string;
    promptUrdu: string;
  }[];
  defaultSampleOutput: {
    en: string;
    ur_nastaliq: string;
    ur_roman: string;
  };
  iconName: string;
}

export interface AuditRequest {
  businessName: string;
  industry: string;
  monthlyRevenue: string;
  teamSize: string;
  currentBottleneck: string;
  manualHoursWeekly: number;
  targetLanguage: LanguageMode;
  contactWhatsapp?: string;
  contactEmail?: string;
}

export interface AuditResult {
  summary: string;
  recommendedAgents: string[];
  estimatedMonthlyHoursSaved: number;
  projectedLeadIncreasePercent: number;
  estimatedRoiMultiplier: number;
  implementationRoadmap: {
    week: string;
    focus: string;
    deliverables: string[];
  }[];
  customAdvice: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  nameUrdu: string;
  badge?: string;
  popular?: boolean;
  price: string;
  billingPeriod: string;
  description: string;
  agentsCount: string;
  features: string[];
  featuresUrdu: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  location: string;
  industry: string;
  problem: string;
  deployedAgents: string[];
  results: {
    metric: string;
    change: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export type LeadStatus = 'New' | 'Contacted' | 'In Progress' | 'Converted' | 'Lost';

export interface DashboardLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  service?: string;
  source: string;
  status: LeadStatus;
  notes?: string;
  budget?: string;
  createdAt: string;
  lastContactedAt?: string;
  whatsappSent?: boolean;
  whatsappStatus?: 'Sent' | 'Pending' | 'Failed' | 'Simulated';
}

export interface WhatsAppConfig {
  enabled: boolean;
  appId?: string;
  metaSettingsUrl?: string;
  phoneNumberId: string;
  accessToken: string;
  businessAccountId: string;
  webhookUrl: string;
  verifyToken: string;
  autoMessageTemplate: string;
  senderName: string;
  testPhone?: string;
}

export interface DashboardStats {
  totalLeads: number;
  newToday: number;
  contacted: number;
  converted: number;
  conversionRate: number;
}
