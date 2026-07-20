import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import CategoriesSection from './components/CategoriesSection';
import AboutSection from './components/AboutSection';
import ImpactSection from './components/ImpactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import EvaluationView from './components/EvaluationView';
import { useScrollReveal } from './utils/useScrollReveal';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'evaluation' | 'login' | 'register'

  useScrollReveal(view);

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

  return (
    <div className="app-root">
      <Navbar 
        onOpenLogin={() => setView('login')} 
        onOpenRegister={() => setView('register')} 
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
    </div>
  );
}
