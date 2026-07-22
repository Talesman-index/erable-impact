import React from 'react';
import { Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhySection({ onStartEval }) {
  return (
    <section id="why" className="section-padded" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header with Centered Eco Pill Badge */}
        <div className="eco-section-header reveal-on-scroll">
          <div className="eco-pill-badge">
            <span className="eco-badge-icon">
              <Leaf size={14} />
            </span>
            <span>Mobilisation &amp; Transition Écologique</span>
          </div>

          <h2 className="eco-section-title">
            Une démarche collective au service de la transition des collectivités et territoires
          </h2>

          <p className="eco-section-subtitle">
            Initiée par la CDC de L'Érable comme projet pilote d'envergure, cette plateforme universelle accompagne citoyens, PME, institutions et municipalités pour évaluer, mesurer et piloter leur transition socioclimatique.
          </p>

          <button onClick={onStartEval} className="eco-btn-action">
            <span>Lancer mon évaluation</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Central Showcase Image Card with Floating Badge */}
        <div className="hero-showcase-card reveal-on-scroll reveal-delay-1">
          <img 
            src="/images/hero-moss.jpg" 
            alt="Transition écologique des collectivités et territoires" 
            className="hero-showcase-img" 
          />
          <div className="hero-showcase-overlay">
            <div className="hero-showcase-badge">
              <CheckCircle2 size={18} />
              <span>Outil de calcul certifié ISO 14064 — Adaptable à tout territoire</span>
            </div>
          </div>
        </div>

        {/* 3 High Contrast Stats Cards Row */}
        <div className="stats-mint-grid reveal-on-scroll reveal-delay-2">
          {/* Card 1: Dark Hero Card (#052e1e + #dcfc49) */}
          <div className="stat-mint-card dark-hero">
            <div className="stat-mint-value">24 457</div>
            <div className="stat-mint-title">Acteurs &amp; Citoyens Engagés</div>
            <div className="stat-mint-desc">
              Mobilisés sur le territoire pilote et prêts à s'étendre à toutes les municipalités.
            </div>
          </div>

          {/* Card 2: Crisp White Card */}
          <div className="stat-mint-card">
            <div className="stat-mint-value">43 %</div>
            <div className="stat-mint-title">Emplois Économiques</div>
            <div className="stat-mint-desc">
              Issus du secteur agricole et forestier, piliers de l'économie territoriale.
            </div>
          </div>

          {/* Card 3: Crisp White Card */}
          <div className="stat-mint-card">
            <div className="stat-mint-value">37</div>
            <div className="stat-mint-title">Indicateurs d'Impact</div>
            <div className="stat-mint-desc">
              Permettant de suivre précisément la trajectoire de décarbonation de votre région.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


