import React from 'react';
import { Zap, Shield, ArrowUpRight, Compass, Layers, Activity } from 'lucide-react';

export default function WhySection({ onStartEval }) {
  return (
    <section id="why" className="about-solarion-section">
      <div className="container container-about-solarion">
        {/* Left Column: Interactive Bento Cards */}
        <div className="about-solarion-left">
          <div className="bento-card-why">
            <div className="bento-card-header">
              <div className="bento-icon-box green">
                <Zap size={22} />
              </div>
              <span className="bento-badge-chip">
                <Layers size={13} style={{ marginRight: 4, display: 'inline-block', verticalAlign: 'middle' }} />
                SECTEURS D'ACTIVITÉ
              </span>
            </div>
            <div className="bento-card-body">
              <h4>Évaluation sectorielle</h4>
              <p>Agriculture, foresterie, transport, industrie et milieu communautaire : une cartographie des dynamiques du territoire.</p>
            </div>
            <div className="bento-card-footer">
              <span className="bento-metric-text">5 secteurs clés évalués</span>
            </div>
          </div>

          <div className="bento-card-why accent">
            <div className="bento-card-header">
              <div className="bento-icon-box dark">
                <Shield size={22} />
              </div>
              <span className="bento-badge-chip dark">
                <Activity size={13} style={{ marginRight: 4, display: 'inline-block', verticalAlign: 'middle' }} />
                MESURE D'IMPACT
              </span>
            </div>
            <div className="bento-card-body">
              <h4>Évaluation d'activités</h4>
              <p>Formations, projets, concertations et initiatives locales : mesurez les retombées réelles et le niveau d'engagement.</p>
            </div>
            <div className="bento-card-footer">
              <span className="bento-metric-text">Indicateurs environnementaux et sociaux</span>
            </div>
          </div>
        </div>

        {/* Right Column: Webflow/Framer Editorial Content */}
        <div className="about-solarion-right">
          <div className="framer-tag-chip">
            <Compass size={14} className="sparkle-icon" />
            <span>DÉMARCHE TERRITORIALE</span>
          </div>

          <h2 className="about-title-solarion">
            Un outil participatif au service de la transition de la <span className="highlight-text-gradient">MRC de L'Érable</span>.
          </h2>

          <p className="about-desc-solarion">
            Initiée par la CDC de L'Érable, cette plateforme permet d'évaluer, suivre et coordonner les actions socioclimatiques des 24 457 habitants et des organisations d'un territoire à 60 % forestier et 31 % agricole.
          </p>

          <button onClick={onStartEval} className="btn-about-solarion-capsule group">
            <span>Évaluer mon impact environnemental</span>
            <ArrowUpRight size={18} className="btn-arrow-motion" />
          </button>
        </div>
      </div>
    </section>
  );
}
