import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesCards } from './components/ServicesCards';
import { PortfolioSection } from './components/PortfolioSection';
import { AgentSandbox } from './components/AgentSandbox';
import { AuditSection } from './components/AuditSection';
import { WhatsAppSimulator } from './components/WhatsAppSimulator';
import { ComparisonTable } from './components/ComparisonTable';
import { CaseStudies } from './components/CaseStudies';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { AutoDashboard } from './components/AutoDashboard';
import { GetFreePlanPage } from './components/GetFreePlanPage';
import { LanguageMode } from './types';

export default function App() {
  const [language, setLanguage] = useState<LanguageMode>('en');
  const [sandboxSelectedAgentId, setSandboxSelectedAgentId] = useState<string | undefined>(undefined);
  
  // Route / View State
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'get-free-plan'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('get-free-plan') || hash === '#get-free-plan') {
        return 'get-free-plan';
      }
      if (path.includes('dashboard') || hash === '#dashboard') {
        return 'dashboard';
      }
    }
    return 'landing';
  });

  // Listen to hash / URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('get-free-plan') || hash === '#get-free-plan') {
        setCurrentView('get-free-plan');
      } else if (path.includes('dashboard') || hash === '#dashboard') {
        setCurrentView('dashboard');
      } else {
        setCurrentView('landing');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleOpenAudit = () => {
    if (currentView !== 'landing') setCurrentView('landing');
    setTimeout(() => {
      const auditEl = document.getElementById('audit');
      if (auditEl) auditEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleOpenSandbox = (agentId?: string) => {
    if (currentView !== 'landing') setCurrentView('landing');
    setSandboxSelectedAgentId(agentId || 'lead-gen');
    setTimeout(() => {
      const agentsEl = document.getElementById('agents');
      if (agentsEl) agentsEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToDashboard = () => {
    setCurrentView('dashboard');
    window.location.hash = '#dashboard';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFreePlan = () => {
    setCurrentView('get-free-plan');
    window.location.hash = '#get-free-plan';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLanding = () => {
    setCurrentView('landing');
    if (window.location.hash === '#dashboard' || window.location.hash === '#get-free-plan') {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in Free Plan view, render the GetFreePlanPage component
  if (currentView === 'get-free-plan') {
    return <GetFreePlanPage onBackToWebsite={navigateToLanding} language={language} />;
  }

  // If in Dashboard view, render the AutoDashboard component
  if (currentView === 'dashboard') {
    return <AutoDashboard onBackToWebsite={navigateToLanding} />;
  }

  return (
    <div
      className={`min-h-screen bg-[#050505] text-[#E0E0E0] selection:bg-[#A78BFA] selection:text-black font-sans relative overflow-x-hidden ${
        language === 'ur_nastaliq' ? 'font-serif' : ''
      }`}
    >
      {/* Ambient Background Grid & Radial Glows */}
      <div className="fixed inset-0 pointer-events-none opacity-25 sophisticated-dark-bg z-0" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#A78BFA] rounded-full blur-[180px] opacity-[0.07] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[180px] opacity-[0.05] pointer-events-none z-0" />

      {/* Sticky Navigation */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenAudit={handleOpenAudit}
        onOpenSandbox={handleOpenSandbox}
        onNavigateToDashboard={navigateToDashboard}
        onNavigateToFreePlan={navigateToFreePlan}
      />

      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          language={language}
          onOpenAudit={handleOpenAudit}
          onOpenSandbox={handleOpenSandbox}
        />

        {/* 2. 4 Core Services Section */}
        <ServicesCards
          language={language}
          onOpenSandbox={handleOpenSandbox}
          onOpenAudit={handleOpenAudit}
        />

        {/* 3. Our Work & Portfolio Section */}
        <PortfolioSection language={language} />

        {/* 4. 14 AI Agents Hub & Live Sandbox Playground */}
        <AgentSandbox
          language={language}
          selectedAgentId={sandboxSelectedAgentId}
          onOpenAudit={handleOpenAudit}
        />

        {/* 5. Free AI Business Audit & ROI Roadmap */}
        <AuditSection language={language} />

        {/* 6. WhatsApp CRM & Live Commerce Simulator */}
        <WhatsAppSimulator language={language} onOpenAudit={handleOpenAudit} />

        {/* 7. 14 Agents vs Human Team Comparison */}
        <ComparisonTable language={language} onOpenAudit={handleOpenAudit} />

        {/* 8. Testimonials & Case Studies */}
        <CaseStudies language={language} />

        {/* 9. Pricing & Deployment Packages */}
        <PricingSection language={language} onOpenAudit={handleOpenAudit} />

        {/* 10. Direct Contact Form & Lead Sync */}
        <ContactSection language={language} />

        {/* 11. FAQ Section */}
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
    </div>
  );
}
