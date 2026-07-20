import React from 'react';
import { Layers, Home, MapPin, ArrowUpRight, Building2 } from 'lucide-react';

export default function AboutSection({ onStartEval }) {
  return (
    <section className="about-framer-section">
      <div className="container about-framer-container">
        {/* Section Title */}
        <div className="about-framer-header reveal-on-scroll">
          <h2 className="about-framer-title">
            Une démarche collective ancrée dans les réalités de la <span className="highlight-text-gradient">MRC de L'Érable</span>.
          </h2>
        </div>

        {/* Bento Grid Layout using authentic project image */}
        <div className="about-framer-bento-grid">
          {/* Left Authentic Project Image Card */}
          <div className="about-hero-bento-card reveal-on-scroll reveal-delay-1">
            <div 
              className="about-bento-bg" 
              style={{ backgroundImage: `url('/images/esg-strategy-discussion-around-the-wooden-table-2026-03-20-04-19-54-utc.jpg')` }} 
            />
            <div className="about-bento-overlay" />

            <div className="about-bento-bottom">
              <p className="about-bento-desc">
                Portée par un tissu communautaire dynamique, la transition socioclimatique réunit citoyens, organismes, entreprises et institutions autour d'un objectif : mesurer pour mieux agir.
              </p>
              <button onClick={onStartEval} className="bento-white-btn">
                <span>Découvrir la démarche</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Partners & Ecosystem Bento Cards */}
          <div className="about-right-bento-col reveal-on-scroll reveal-delay-2">
            {/* Partners Card */}
            <div className="about-partners-bento-card">
              <div className="partners-card-header">
                <h4>Gouvernance partagée du territoire</h4>
              </div>

              <div className="framer-partners-grid">
                <div className="framer-partner-featured">
                  <img src="/images/CDCE-horizontal.png" alt="CDC de L'Érable" className="cdce-logo-img-framer" />
                  <span className="partner-badge-tag">Initiateur du projet</span>
                </div>

                <div className="framer-partner-item">
                  <Layers size={18} className="partner-icon" />
                  <span>MRC de L'Érable</span>
                </div>

                <div className="framer-partner-item">
                  <Home size={18} className="partner-icon" />
                  <span>Ville de Plessisville</span>
                </div>

                <div className="framer-partner-item">
                  <MapPin size={18} className="partner-icon" />
                  <span>Régie des matières résiduelles</span>
                </div>
              </div>
            </div>

            {/* 2 Mini Feature Bento Cards */}
            <div className="about-mini-bento-row">
              <div className="about-mini-bento-card">
                <div className="mini-bento-icon green">
                  <MapPin size={22} />
                </div>
                <div className="mini-bento-content">
                  <h5>10 Municipalités</h5>
                  <p>Centre-du-Québec</p>
                </div>
              </div>

              <div className="about-mini-bento-card dark">
                <div className="mini-bento-icon neon">
                  <Building2 size={22} />
                </div>
                <div className="mini-bento-content">
                  <h5>24 457 Habitants</h5>
                  <p>Citoyens &amp; PME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
