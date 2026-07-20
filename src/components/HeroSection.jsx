import React from 'react';

export default function HeroSection({ onStartEval }) {
  return (
    <section className="hero-section">
      <video autoPlay muted loop playsInline className="hero-video-bg">
        <source src="/hero_a.mp4" type="video/mp4" />
      </video>

      <div className="hero-video-overlay" />

      <div className="hero-content-wrapper">
        <div className="container hero-layout-container-solarion">
          <div className="hero-left-solarion">
            <h1 className="hero-title-solarion">
              Ensemble vers <br className="hero-br-desktop" />
              une <span className="title-underline">transition</span> <br className="hero-br-desktop" />
              socioclimatique
            </h1>
          </div>

          <div className="hero-right-solarion">
            <button onClick={onStartEval} className="btn-hero-solarion-cta">
              Lancer l'évaluation <span className="arrow-top-right">↗</span>
            </button>
            <p className="hero-desc-solarion">
              Un outil commun initié par la CDC de L'Érable pour identifier, mesurer et suivre les impacts environnementaux des citoyens, organisations, entreprises et institutions du territoire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
