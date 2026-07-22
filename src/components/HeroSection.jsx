import React from 'react';

export default function HeroSection({ onStartEval }) {
  return (
    <section className="hero-section">
      <video autoPlay muted loop playsInline className="hero-video-bg">
        <source src="/hero_new.mp4" type="video/mp4" />
        <source src="/hero.mov" type="video/mp4" />
        <source src="/hero.mov" type="video/quicktime" />
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
              Un outil commun d'évaluation environnementale initié par la CDC de L'Érable, accessible à l'ensemble des territoires pour mesurer et suivre les impacts des citoyens, PME, organisations et collectivités.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
