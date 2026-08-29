import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgentSandbox } from './components/AgentSandbox';
import { VisualShowcase } from './components/VisualShowcase';
import { AuditSection } from './components/AuditSection';
import { WhatsAppSimulator } from './components/WhatsAppSimulator';
import { ComparisonTable } from './components/ComparisonTable';
import { CaseStudies } from './components/CaseStudies';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { GoogleSheetsHub } from './components/GoogleSheetsHub';
import { ProposalPdfsHub } from './components/ProposalPdfsHub';
import { FourDExperienceSection } from './components/FourDExperienceSection';
import { ThreeDedicatedAgentsHub } from './components/ThreeDedicatedAgentsHub';
import { LanguageMode } from './types';

export default function App() {
  const [language, setLanguage] = useState<LanguageMode>('en');
  const [sandboxSelectedAgentId, setSandboxSelectedAgentId] = useState<string | undefined>(undefined);
  const [isSheetsModalOpen, setIsSheetsModalOpen] = useState<boolean>(false);
  const [isProposalsModalOpen, setIsProposalsModalOpen] = useState<boolean>(false);

  const handleOpenAudit = () => {
    const auditEl = document.getElementById('audit');
    if (auditEl) {
      auditEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSandbox = (agentId?: string) => {
    setSandboxSelectedAgentId(agentId || 'lead-gen');
    const agentsEl = document.getElementById('agents');
    if (agentsEl) {
      agentsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSheets = () => {
    setIsSheetsModalOpen(true);
  };

  const handleOpenProposals = () => {
    setIsProposalsModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen bg-[#0A0A0C] text-white selection:bg-purple-500 selection:text-black font-sans ${
        language === 'ur_nastaliq' ? 'font-serif' : ''
      }`}
    >
      {/* Sticky Navigation */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenAudit={handleOpenAudit}
        onOpenSandbox={handleOpenSandbox}
        onOpenSheets={handleOpenSheets}
        onOpenProposals={handleOpenProposals}
      />

      <main>
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenAudit={handleOpenAudit}
          onOpenSandbox={handleOpenSandbox}
          onOpenProposals={handleOpenProposals}
        />

        {/* 4D Hyperspace & Quantum Engine Interactive Stage */}
        <FourDExperienceSection
          language={language}
          onOpenSandbox={handleOpenSandbox}
          onOpenAudit={handleOpenAudit}
        />

        {/* 3 Dedicated Core AI Agents System (Strict Point-to-Point Sales) */}
        <ThreeDedicatedAgentsHub
          language={language}
          onOpenAudit={handleOpenAudit}
        />

        {/* 14 AI Agents Hub & Live Sandbox Playground */}
        <AgentSandbox
          language={language}
          selectedAgentId={sandboxSelectedAgentId}
          onOpenAudit={handleOpenAudit}
          onOpenSheets={handleOpenSheets}
        />

        {/* Official 10 Visual Pillars & Brand Architecture Showcase */}
        <VisualShowcase
          language={language}
          onOpenSandbox={handleOpenSandbox}
          onOpenAudit={handleOpenAudit}
        />

        {/* Free AI Business Audit & ROI Roadmap */}
        <AuditSection language={language} onOpenSheets={handleOpenSheets} />

        {/* WhatsApp CRM & Live Commerce Simulator */}
        <WhatsAppSimulator language={language} />

        {/* 14 Agents vs Human Team Comparison */}
        <ComparisonTable language={language} onOpenAudit={handleOpenAudit} />

        {/* Real Enterprise Case Studies */}
        <CaseStudies language={language} />

        {/* Pricing & Deployment Packages */}
        <PricingSection
          language={language}
          onOpenAudit={handleOpenAudit}
          onOpenProposals={handleOpenProposals}
        />

        {/* FAQ Section */}
        <FAQSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenAudit={handleOpenAudit}
        onOpenSandbox={() => handleOpenSandbox('lead-gen')}
      />

      {/* Floating 24/7 WhatsApp Widget */}
      <FloatingWhatsApp language={language} />

      {/* Google Sheets Workspace Integration Hub */}
      <GoogleSheetsHub
        isOpen={isSheetsModalOpen}
        onClose={() => setIsSheetsModalOpen(false)}
        language={language}
      />

      {/* 14 Official 1-Page PDF Proposals & Canva/Docs Kit */}
      <ProposalPdfsHub
        isOpen={isProposalsModalOpen}
        onClose={() => setIsProposalsModalOpen(false)}
        language={language}
        onOpenSheets={handleOpenSheets}
      />
    </div>
  );
}
