import React, { useState, useEffect } from 'react';
import { User, UserPlus, X, ArrowUpRight, BookOpen, Award } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenLogin, onOpenRegister, onStartEval, onOpenGuide, onOpenCharte }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.classList.toggle('no-scroll', next);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <Logo lightText={!scrolled} />
        </a>

        {/* Desktop Nav */}
        <nav className="main-nav desktop-only-nav">
          <a href="#why">Bénéfices</a>
          <a href="#measure">Indicateurs</a>
          <a href="#regional">Vision Régionale</a>
          <a href="#guide-faq" onClick={onOpenGuide}>
            Guide &amp; FAQ
          </a>
        </nav>

        {/* Desktop Header Actions */}
        <div className="header-actions-group">
          <button onClick={onOpenLogin} className="header-action-user" aria-label="Connexion Espace Membre" title="Se connecter">
            <User size={20} />
            <span className="user-badge">0</span>
          </button>

          <button onClick={onOpenRegister} className="btn-header-register-text">
            Créer un compte
          </button>

          <button onClick={onStartEval} className="btn-header-neon">
            Commencer <span className="arrow-right">→</span>
          </button>
        </div>

        {/* Mobile Animated Hamburger Button */}
        <button 
          className={`mobile-toggle-btn ${mobileOpen ? 'open' : ''}`} 
          onClick={toggleMobile}
          aria-label="Menu Mobile"
        >
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </button>
      </div>

      {/* Modern Webflow Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <div className="logo-icon-wrap">
              <svg className="logo-leaf" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 12,2 C 11.5,4 11.5,4.5 11,5.5 C 10.5,5 9.5,4 8,3 C 8,4.5 8.5,5.5 8.5,6 C 7.5,5.5 6,5 5,5 C 5.5,6 6,7 7,8 C 5,7.5 3.5,7 2,7 C 3,8 4.5,9.5 5.5,10 C 4.5,10 3.5,10.5 2.5,10.5 C 3.5,11.5 5,12 6,12 C 5,13 4,14 3,15 C 4.5,14.5 5.5,14 6.5,13.5 C 6,14.5 5.5,16 5.5,17 C 6.5,16 7.5,15 8,14 C 8.5,15.5 9,17 9.5,18.5 C 10.5,18 11.5,17.5 12,17.5 L 12,22 L 12.5,22 L 12.5,17.5 C 13,17.5 14,18 15,18.5 C 15.5,17 16,15.5 16.5,14 C 17,15 18,16 19,17 C 19,16 18.5,14.5 18,13.5 C 19,14 20,14.5 21.5,15 C 20.5,14 19.5,13 18.5,12 C 19.5,12 21,11.5 22,10.5 C 21,10.5 20,10 19,10 C 20,9.5 21.5,8 22.5,7 C 21,7 19.5,7.5 17.5,8 C 18.5,7 19,6 19.5,5 C 18.5,5 17,5.5 16,6 C 16,5.5 16.5,4.5 16.5,3 C 15,4 14,5 13.5,5.5 C 13,4.5 13,4 12.5,2 L 12,2 Z"/>
              </svg>
            </div>
            <span>Erable</span>
          </div>

          <button onClick={closeMobile} className="mobile-drawer-close" aria-label="Fermer le menu">
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <nav className="mobile-drawer-links">
            <a href="#why" onClick={closeMobile} className="mobile-drawer-link">
              <span className="link-num">01</span>
              <span className="link-text">Bénéfices</span>
              <ArrowUpRight size={18} className="link-arrow" />
            </a>
            <a href="#measure" onClick={closeMobile} className="mobile-drawer-link">
              <span className="link-num">02</span>
              <span className="link-text">Indicateurs</span>
              <ArrowUpRight size={18} className="link-arrow" />
            </a>
            <button onClick={() => { closeMobile(); onOpenGuide(); }} className="mobile-drawer-link" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}>
              <span className="link-num">03</span>
              <span className="link-text">Guide &amp; FAQ</span>
              <BookOpen size={18} className="link-arrow" />
            </button>
          </nav>
        </div>

        <div className="mobile-drawer-footer">
          <button onClick={() => { closeMobile(); onStartEval(); }} className="btn-mobile-drawer-cta">
            <span>Commencer l'évaluation</span>
            <ArrowUpRight size={18} />
          </button>
          
          <button onClick={() => { closeMobile(); onOpenRegister(); }} className="btn-mobile-drawer-login" style={{ background: '#dcfc49', color: '#052e1e', border: '1px solid #dcfc49', fontWeight: 800 }}>
            <UserPlus size={18} />
            <span>Créer un compte</span>
          </button>

          <button onClick={() => { closeMobile(); onOpenLogin(); }} className="btn-mobile-drawer-login">
            <User size={18} />
            <span>Se connecter</span>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className={`mobile-drawer-backdrop ${mobileOpen ? 'open' : ''}`} 
        onClick={closeMobile}
      />
    </header>
  );
}
