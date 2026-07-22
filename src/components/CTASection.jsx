import React from 'react';
import { Leaf, Facebook, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';

export default function CTASection({ onStartEval }) {
  return (
    <section className="section-padded" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        <div className="social-engagement-card reveal-on-scroll">
          <div className="eco-pill-badge" style={{ margin: '0 auto 20px auto' }}>
            <span className="eco-badge-icon">
              <Leaf size={14} />
            </span>
            <span>Écosystème &amp; Infolettre</span>
          </div>

          <h2 className="eco-section-title" style={{ maxWidth: '700px', margin: '0 auto 16px auto' }}>
            Restez connectés &amp; rejoignez-nous sur les réseaux sociaux !
          </h2>

          <p className="eco-section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 28px auto' }}>
            Suivez les avancées de la transition socioclimatique, recevez nos guides et déployez l'outil d'évaluation sur votre territoire.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <button onClick={onStartEval} className="eco-btn-action">
              <span>Lancer mon évaluation</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Social Icon Pills Bar from Samsun design */}
          <div className="social-pill-group">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-pill" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-pill" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:info@cdclerable.qc.ca" className="social-icon-pill" aria-label="Courriel">
              <Mail size={20} />
            </a>
            <a href="tel:+18193622333" className="social-icon-pill" aria-label="Téléphone">
              <Phone size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

