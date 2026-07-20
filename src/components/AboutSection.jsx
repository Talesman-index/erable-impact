import React from 'react';
import { Layers, Home, MapPin } from 'lucide-react';

export default function AboutSection({ onStartEval }) {
  return (
    <section className="about-platform-section-new">
      <div className="container about-new-container">
        <div className="about-new-grid">
          <div className="about-new-left">
            <div className="about-new-img-wrap">
              <img src="/images/illus_about.png" alt="Action collective" className="about-new-img" />
            </div>
            <p className="about-new-left-desc">
              Portée par un tissu communautaire dynamique, la transition socioclimatique de la MRC de L'Érable réunit citoyens, organismes, entreprises et institutions autour d'une vision commune : mesurer pour mieux agir.
            </p>
            <button onClick={onStartEval} className="btn-dark-green-capsule">
              En savoir plus sur nous
            </button>
          </div>

          <div className="about-new-right">
            <h2 className="about-new-title">
              Une démarche collective, inclusive et ancrée dans les réalités du territoire de la MRC de L'Érable.
            </h2>

            <div className="about-allies-block">
              <p className="allies-heading">En partenariat avec</p>
              <div className="allies-logos-strip">
                <div className="ally-logo-item ally-logo-featured">
                  <img src="/images/CDCE-horizontal.png" alt="CDC de L'Érable" className="cdce-logo-img" />
                </div>
                <div className="ally-logo-item">
                  <Layers className="ally-icon" size={18} />
                  <span>MRC Érable</span>
                </div>
                <div className="ally-logo-item">
                  <Home className="ally-icon" size={18} />
                  <span>Ville de Plessisville</span>
                </div>
                <div className="ally-logo-item">
                  <MapPin className="ally-icon" size={18} />
                  <span>Régie des matières résiduelles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
