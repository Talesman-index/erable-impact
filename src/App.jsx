import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import CategoriesSection from './components/CategoriesSection';
import AboutSection from './components/AboutSection';
import ImpactSection from './components/ImpactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import EvaluationView from './components/EvaluationView';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'evaluation'
  const [loginOpen, setLoginOpen] = useState(false);

  if (view === 'evaluation') {
    return <EvaluationView onBackHome={() => setView('landing')} />;
  }

  return (
    <div className="app-root">
      <Navbar 
        onOpenLogin={() => setLoginOpen(true)} 
        onStartEval={() => setView('evaluation')} 
      />
      
      <main>
        <HeroSection onStartEval={() => setView('evaluation')} />
        <WhySection onStartEval={() => setView('evaluation')} />
        <CategoriesSection onStartEval={() => setView('evaluation')} />
        <AboutSection onStartEval={() => setView('evaluation')} />
        <ImpactSection />
        <CTASection onStartEval={() => setView('evaluation')} />
      </main>

      <Footer onStartEval={() => setView('evaluation')} />

      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
      />
    </div>
  );
}
