import React from 'react';
import { Zap, Truck, ArrowUpRight, Sprout, Car } from 'lucide-react';

export default function CategoriesSection({ onStartEval }) {
  return (
    <section id="measure" className="categories-section-new">
      <div className="container measure-new-container">
        {/* Header Row */}
        <div className="measure-header-row reveal-on-scroll">
          <div>
            <h2 className="measure-title">Secteurs d'évaluation environnementale</h2>
          </div>

          <button onClick={onStartEval} className="btn-neon-yellow-capsule">
            <span>Faire le test</span>
            <ArrowUpRight size={18} className="btn-arrow-motion" />
          </button>
        </div>

        {/* Bento Grid with Project Photography */}
        <div className="categories-grid-bento">
          {/* Card 1: Énergie */}
          <div className="bento-sector-card energy-bento has-hover-image reveal-on-scroll reveal-delay-1">
            <div 
              className="bento-hover-bg" 
              style={{ backgroundImage: `url('/images/businesswoman-analyzing-esg-report-with-green-sphe-2026-01-20-01-09-53-utc.jpg')` }} 
            />
            <div className="bento-hover-overlay" />

            <div className="bento-sector-top">
              <div className="bento-sector-icon">
                <Zap size={24} />
              </div>
              <span className="bento-pill-badge">
                <Zap size={13} style={{ marginRight: 4, display: 'inline-block', verticalAlign: 'middle' }} />
                Bilan Énergétique
              </span>
            </div>
            
            <div className="bento-sector-bottom">
              <h3>Énergie &amp; Bâtiments</h3>
              <p>Évaluez l'efficacité énergétique de vos bâtiments et infrastructures. Identifiez les leviers de réduction de consommation et d'émissions.</p>
              <div className="bento-action-link" onClick={onStartEval}>
                <span>Analyser mes bâtiments</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>

          {/* Card 2: Agriculture (Hero Image Card with authentic field photo) */}
          <div className="bento-sector-card agri-bento reveal-on-scroll reveal-delay-2">
            <div 
              className="bento-agri-bg" 
              style={{ backgroundImage: `url('/images/beatiful-morning-green-field-with-blue-heaven-2026-03-26-04-36-32-utc.jpg')` }} 
            />
            <div className="bento-agri-overlay" />
            
            <div className="bento-agri-top">
              <span className="bento-glass-pill">
                <Sprout size={13} style={{ marginRight: 4, display: 'inline-block', verticalAlign: 'middle' }} />
                43 % des emplois de la MRC
              </span>
            </div>

            <div className="bento-agri-content">
              <h3>Agriculture &amp; Foresterie</h3>
              <p>Mesurez l'empreinte de vos pratiques agricoles et forestières pour préserver la qualité des sols et les milieux naturels du territoire.</p>
              <button onClick={onStartEval} className="bento-white-btn">
                <span>Évaluer les pratiques</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 3: Mobilité */}
          <div className="bento-sector-card mobility-bento has-hover-image reveal-on-scroll reveal-delay-3">
            <div 
              className="bento-hover-bg" 
              style={{ backgroundImage: `url('/images/green-globe-with-trees-and-windmills-against-sky-2026-03-26-03-35-56-utc.jpg')` }} 
            />
            <div className="bento-hover-overlay" />

            <div className="bento-sector-top">
              <div className="bento-sector-icon">
                <Truck size={24} />
              </div>
              <span className="bento-pill-badge">
                <Car size={13} style={{ marginRight: 4, display: 'inline-block', verticalAlign: 'middle' }} />
                Mobilité Rurale
              </span>
            </div>
            
            <div className="bento-sector-bottom">
              <h3>Transports &amp; Mobilité</h3>
              <p>Analyse des déplacements professionnels et personnels en milieu rural pour identifier des solutions d'optimisation adaptées.</p>
              <div className="bento-action-link" onClick={onStartEval}>
                <span>Calculer les déplacements</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
