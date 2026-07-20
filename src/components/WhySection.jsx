import React from 'react';
import { Zap, Shield, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function WhySection({ onStartEval }) {
  return (
    <section id="why" className="why-premium-section">
      <div className="container why-premium-container">
        {/* Editorial Header */}
        <div className="why-premium-header reveal-on-scroll">
          <h2 className="why-premium-title">
            Un outil participatif au service de la transition de la <span className="highlight-text-gradient">MRC de L'Érable</span>.
          </h2>
          <p className="why-premium-desc">
            Initiée par la CDC de L'Érable, cette plateforme accompagne citoyens, entreprises et institutions pour évaluer, suivre et coordonner les actions socioclimatiques à l'échelle du territoire.
          </p>
        </div>

        {/* Ultra-Premium Bento Grid (3 Columns) */}
        <div className="why-premium-grid">
          {/* Card 1: Évaluation sectorielle */}
          <div className="why-premium-card has-bg-image reveal-on-scroll reveal-delay-1">
            <div 
              className="why-card-bg" 
              style={{ backgroundImage: `url('/images/earth-globe-on-green-grass-with-autumn-leaves-2026-03-09-07-13-32-utc.jpg')` }} 
            />
            <div className="why-card-overlay" />

            <div className="why-card-top">
              <div className="why-card-icon-box glass">
                <Zap size={22} />
              </div>
              <span className="why-glass-badge">
                <CheckCircle2 size={13} style={{ marginRight: 4 }} />
                5 Secteurs Évalués
              </span>
            </div>

            <div className="why-card-bottom">
              <h3>Évaluation sectorielle</h3>
              <p>Agriculture, foresterie, transport, industrie et milieu communautaire : une cartographie complète des dynamiques du territoire.</p>
              <div className="why-action-link" onClick={onStartEval}>
                <span>Découvrir les 5 secteurs</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>

          {/* Card 2: Évaluation d'activités (Dark Luxe) */}
          <div className="why-premium-card dark-luxe reveal-on-scroll reveal-delay-2">
            <div className="why-card-top">
              <div className="why-card-icon-box neon">
                <Shield size={22} />
              </div>
              <span className="why-neon-badge">
                Mesure 360°
              </span>
            </div>

            <div className="why-card-bottom">
              <h3>Évaluation d'activités</h3>
              <p>Formations, projets, concertations et initiatives locales : mesurez précisément les retombées environnementales et sociales.</p>
              <div className="why-luxe-footer">
                <span className="why-luxe-metric">Indicateurs Sociaux &amp; Environnementaux</span>
              </div>
            </div>
          </div>

          {/* Card 3: Action Territoriale */}
          <div className="why-premium-card has-bg-image reveal-on-scroll reveal-delay-3">
            <div 
              className="why-card-bg" 
              style={{ backgroundImage: `url('/images/green-globe-with-clouds-and-blue-sky-2026-01-11-08-03-55-utc.jpg')` }} 
            />
            <div className="why-card-overlay" />

            <div className="why-card-top">
              <div className="why-card-icon-box glass">
                <Compass size={22} />
              </div>
              <span className="why-glass-badge">
                24 457 Habitants
              </span>
            </div>

            <div className="why-card-bottom">
              <h3>Action Territoriale</h3>
              <p>Une démarche collective pour suivre la réduction des émissions et préserver les écosystèmes forestiers et agricoles.</p>
              <button onClick={onStartEval} className="bento-white-btn" style={{ marginTop: '12px' }}>
                <span>Lancer mon évaluation</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
