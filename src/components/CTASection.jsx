import React from 'react';

export default function CTASection({ onStartEval }) {
  return (
    <section className="cta-banner-section">
      <div className="container cta-banner-container">
        <div className="cta-banner-content">
          <h2>Participez à la transition socioclimatique de la MRC de L'Érable.</h2>
          <p>
            Citoyens, organismes, entreprises ou institutions : évaluez vos activités, mesurez vos progrès et contribuez à la gouvernance environnementale partagée de notre territoire.
          </p>
          <button onClick={onStartEval} className="btn-hero-solarion-cta" style={{ marginTop: '10px' }}>
            Commencer mon évaluation <span className="arrow-top-right">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
