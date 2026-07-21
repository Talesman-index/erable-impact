import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onStartEval, onOpenMentions, onOpenConfidentialite, onOpenCharte, onOpenGuide }) {
  return (
    <footer className="main-footer">
      <div className="container footer-grid-new">
        <div className="footer-brand-new">
          <a href="#" style={{ textDecoration: 'none' }}>
            <Logo lightText={true} />
          </a>

          <h4 className="newsletter-title-new">S'abonner à notre infolettre</h4>
          <form className="newsletter-form-new" onSubmit={(e) => { e.preventDefault(); alert('Merci pour votre inscription!'); }}>
            <input type="email" placeholder="Entrez votre adresse courriel" required className="newsletter-input-new" />
            <button type="submit" className="newsletter-btn-new">S'abonner!</button>
          </form>
        </div>

        <div className="footer-links-new">
          <h5 className="column-title-new">Pages &amp; Documents</h5>
          <div className="links-subgrid-new">
            <div className="links-col-new">
              <a href="#" className="active-link-new">Accueil</a>
              <a href="#why">Bénéfices</a>
              <a href="#measure">Indicateurs</a>
              <a href="#regional">Vision Régionale</a>
              <button onClick={onStartEval} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Évaluation
              </button>
            </div>
            <div className="links-col-new">
              <button onClick={onOpenGuide} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Guide &amp; FAQ
              </button>
              <button onClick={onOpenCharte} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Charte d'engagement
              </button>
              <button onClick={onOpenConfidentialite} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Confidentialité (Loi 25)
              </button>
              <button onClick={onOpenMentions} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Mentions légales
              </button>
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
