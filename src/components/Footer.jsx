import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export default function Footer({ onStartEval }) {
  return (
    <footer className="main-footer">
      <div className="container footer-grid-new">
        <div className="footer-brand-new">
          <a href="#" className="logo-new">
            <div className="logo-icon-wrap-new">
              <svg className="logo-leaf-new" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 12,2 C 11.5,4 11.5,4.5 11,5.5 C 10.5,5 9.5,4 8,3 C 8,4.5 8.5,5.5 8.5,6 C 7.5,5.5 6,5 5,5 C 5.5,6 6,7 7,8 C 5,7.5 3.5,7 2,7 C 3,8 4.5,9.5 5.5,10 C 4.5,10 3.5,10.5 2.5,10.5 C 3.5,11.5 5,12 6,12 C 5,13 4,14 3,15 C 4.5,14.5 5.5,14 6.5,13.5 C 6,14.5 5.5,16 5.5,17 C 6.5,16 7.5,15 8,14 C 8.5,15.5 9,17 9.5,18.5 C 10.5,18 11.5,17.5 12,17.5 L 12,22 L 12.5,22 L 12.5,17.5 C 13,17.5 14,18 15,18.5 C 15.5,17 16,15.5 16.5,14 C 17,15 18,16 19,17 C 19,16 18.5,14.5 18,13.5 C 19,14 20,14.5 21.5,15 C 20.5,14 19.5,13 18.5,12 C 19.5,12 21,11.5 22,10.5 C 21,10.5 20,10 19,10 C 20,9.5 21.5,8 22.5,7 C 21,7 19.5,7.5 17.5,8 C 18.5,7 19,6 19.5,5 C 18.5,5 17,5.5 16,6 C 16,5.5 16.5,4.5 16.5,3 C 15,4 14,5 13.5,5.5 C 13,4.5 13,4 12.5,2 L 12,2 Z"/>
              </svg>
            </div>
            <span>Erable</span>
          </a>

          <h4 className="newsletter-title-new">S'abonner à notre infolettre</h4>
          <form className="newsletter-form-new" onSubmit={(e) => { e.preventDefault(); alert('Merci pour votre inscription!'); }}>
            <input type="email" placeholder="Entrez votre adresse courriel" required className="newsletter-input-new" />
            <button type="submit" className="newsletter-btn-new">S'abonner!</button>
          </form>
        </div>

        <div className="footer-links-new">
          <h5 className="column-title-new">Pages</h5>
          <div className="links-subgrid-new">
            <div className="links-col-new">
              <a href="#" className="active-link-new">Accueil</a>
              <a href="#why">Bénéfices</a>
              <a href="#measure">Indicateurs</a>
              <a href="#regional">Vision Régionale</a>
              <a href="#impact">Bilan d'Impact</a>
              <button onClick={onStartEval} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Évaluation
              </button>
            </div>
            <div className="links-col-new">
              <a href="#">Actualités</a>
              <a href="#">Nous joindre</a>
              <a href="#">Espace membre</a>
              <a href="#">Confidentialité</a>
              <a href="#">Mentions légales</a>
            </div>
          </div>
        </div>

        <div className="footer-contact-new">
          <h5 className="column-title-new">Nous contacter</h5>
          <div className="contact-details-new">
            <div className="contact-item-new">
              <Phone className="contact-icon-new" size={20} />
              <div className="contact-text-new">
                <span>+1 819 362 2333</span>
                <span>+1 819 362 2334</span>
              </div>
            </div>
            <div className="contact-item-new">
              <Mail className="contact-icon-new" size={20} />
              <div className="contact-text-new">
                <span>info@cdclerable.qc.ca</span>
              </div>
            </div>
            <div className="contact-item-new">
              <MapPin className="contact-icon-new" size={20} />
              <div className="contact-text-new font-smaller-new">
                <span>1280, avenue Trudelle, Plessisville, QC G6L 3K4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom-new">
        <p className="copyright-new">Conçu par Talesman</p>
        <div className="social-badges-new">
          <a href="#" className="social-btn-new" aria-label="Facebook">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
