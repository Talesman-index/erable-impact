import React from 'react';
import Globe3D from './Globe3D';

export default function ImpactSection() {
  return (
    <section id="impact" className="impact-section">
      <div className="container impact-container">
        <div className="impact-grid">
          <div className="impact-stats-content">
            <div className="main-stat-block">
              <span className="stat-large">24 457</span>
              <p className="stat-large-desc">
                Habitants de la MRC de L'Érable, répartis sur 10 municipalités, au cœur du Centre-du-Québec.
              </p>
            </div>

            <div className="impact-divider" />

            <div className="sub-stats-grid">
              <div className="sub-stat-item">
                <span className="stat-val">43 %</span>
                <span className="stat-label">des emplois liés à l'agriculture</span>
              </div>
              <div className="sub-stat-item">
                <span className="stat-val">60 %</span>
                <span className="stat-label">du territoire couvert de forêts</span>
              </div>
              <div className="sub-stat-item">
                <span className="stat-val">31 %</span>
                <span className="stat-label">de la superficie en activités agricoles</span>
              </div>
              <div className="sub-stat-item">
                <span className="stat-val">95 %</span>
                <span className="stat-label">du mix énergétique québécois issu de l'hydroélectricité</span>
              </div>
            </div>
          </div>

          <Globe3D />
        </div>
      </div>
    </section>
  );
}
