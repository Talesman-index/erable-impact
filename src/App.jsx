import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import CategoriesSection from './components/CategoriesSection';
import AboutSection from './components/AboutSection';
import ImpactSection from './components/ImpactSection';
import GuideFAQSection from './components/GuideFAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import EvaluationView from './components/EvaluationView';
import MentionsLegalesPage from './components/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './components/PolitiqueConfidentialitePage';
import CharteEngagementPage from './components/CharteEngagementPage';
import { useScrollReveal } from './utils/useScrollReveal';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'evaluation' | 'login' | 'register' | 'mentions' | 'confidentialite' | 'charte'

  useScrollReveal(view);

  const scrollToGuideFAQ = () => {
    if (view !== 'landing') {
      setView('landing');
      setTimeout(() => {
        const el = document.getElementById('guide-faq');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('guide-faq');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (view === 'evaluation') {
    return <EvaluationView onBackHome={() => setView('landing')} />;
  }

  if (view === 'login') {
    return (
      <LoginPage 
        onBackHome={() => setView('landing')} 
        onGoRegister={() => setView('register')} 
      />
    );
  }

  if (view === 'register') {
    return (
      <RegisterPage 
        onBackHome={() => setView('landing')} 
        onGoLogin={() => setView('login')} 
      />
    );
  }

  if (view === 'mentions') {
    return <MentionsLegalesPage onBackHome={() => setView('landing')} />;
  }

  if (view === 'confidentialite') {
    return <PolitiqueConfidentialitePage onBackHome={() => setView('landing')} />;
  }

  if (view === 'charte') {
    return <CharteEngagementPage onBackHome={() => setView('landing')} />;
  }

  return (
    <div className="app-root">
      <Navbar 
        onOpenLogin={() => setView('login')} 
        onOpenRegister={() => setView('register')} 
        onStartEval={() => setView('evaluation')} 
        onOpenGuide={scrollToGuideFAQ}
        onOpenCharte={() => setView('charte')}
      />
      
      <main>
        <HeroSection onStartEval={() => setView('evaluation')} />
        <WhySection onStartEval={() => setView('evaluation')} />
        <CategoriesSection onStartEval={() => setView('evaluation')} />
        <AboutSection onStartEval={() => setView('evaluation')} />
        <GuideFAQSection onStartEval={() => setView('evaluation')} />
        <ImpactSection />
        <CTASection onStartEval={() => setView('evaluation')} />
      </main>

      <Footer 
        onStartEval={() => setView('evaluation')} 
        onOpenMentions={() => setView('mentions')}
        onOpenConfidentialite={() => setView('confidentialite')}
        onOpenCharte={() => setView('charte')}
        onOpenGuide={scrollToGuideFAQ}
      />
    </div>
  );
}
