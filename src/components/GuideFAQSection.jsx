import React, { useState } from 'react';
import { Leaf, BookOpen, HelpCircle, ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'lucide-react';

export default function GuideFAQSection({ onStartEval }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const newsArticles = [
    {
      date: "22 Juillet 2026",
      title: "Lancement du bilan d'émissions brutes de la MRC de L'Érable",
      desc: "Découvrez les données agrégées et anonymisées du territoire conformément à la Loi 25 et à la norme ISO 14064.",
      image: "/images/earth-globe-on-green-grass-with-autumn-leaves-2026-03-09-07-13-32-utc.jpg"
    },
    {
      date: "14 Juin 2026",
      title: "Guide pratique : 41 actions pour les PME et institutions",
      desc: "Un plan stratégique territorial décliné en fiches d'actions concrètes pour optimiser vos bâtiments et transports.",
      image: "/images/businesswoman-analyzing-esg-report-with-green-sphe-2026-01-20-01-09-53-utc.jpg"
    },
    {
      date: "02 Mai 2026",
      title: "Ateliers de concertation socioclimatique en milieu rural",
      desc: "Retour sur la mobilisation des 10 municipalités du Centre-du-Québec pour une gouvernance environnementale inclusive.",
      image: "/images/esg-strategy-discussion-around-the-wooden-table-2026-03-20-04-19-54-utc.jpg"
    }
  ];

  const faqs = [
    {
      q: "Que signifie « Émissions Brutes » et « Actions Positives » ?",
      a: "Le bilan brut représente l'ensemble de vos émissions réelles (Scopes 1, 2 et 3), sans déduction. Les actions positives (plantation d'arbres, recyclage, hydro-électricité) sont affichées séparément à côté, conformément aux normes ISO 14064 et GHG Protocol pour éviter tout risque de greenwashing."
    },
    {
      q: "Dois-je remplir le niveau expert dès la première utilisation ?",
      a: "Non ! Il est fortement recommandé de commencer par le Niveau 1 Rapide (5 min). Vous pourrez revenir plus tard compléter des données plus précises (Niveau 2 ou 3) sans rien perdre."
    },
    {
      q: "Que se passe-t-il si je n'ai pas de chiffres exacts sur mes factures ?",
      a: "Des estimations approximatives suffisent amplement. L'outil est conçu pour accepter des ordres de grandeur et calculer une fiabilité indicative."
    },
    {
      q: "Qui a accès à mes données déclarées ?",
      a: "Seuls vous-même et l'équipe d'accompagnement de la CDC de L'Érable avez accès à vos données détaillées. Le portrait régional public est 100% anonymisé et agrégé conformément à la Loi 25 du Québec."
    },
    {
      q: "Pourquoi mes recommandations du plan d'action sont-elles uniques ?",
      a: "L'outil traduit le plan d'action collectif (41 actions) selon votre secteur d'activité et votre rôle (une institution recevra des pistes réglementaires, une PME des pistes de procédés, un citoyen des gestes quotidiens)."
    }
  ];

  return (
    <section id="guide-faq" className="section-padded" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">

        {/* News & Articles Section */}
        <div className="eco-section-header reveal-on-scroll">
          <div className="eco-pill-badge">
            <span className="eco-badge-icon">
              <BookOpen size={14} />
            </span>
            <span>Actualités &amp; Guides du Territoire</span>
          </div>

          <h2 className="eco-section-title">
            Découvrez les avancées et guides de la transition
          </h2>

          <p className="eco-section-subtitle">
            Consultez nos derniers articles, fiches méthodologiques et bilans régionaux pour enrichir vos démarches socioclimatiques.
          </p>
        </div>

        {/* 3 News Cards Grid */}
        <div className="news-grid reveal-on-scroll reveal-delay-1">
          {newsArticles.map((article, idx) => (
            <div key={idx} className="news-card">
              <div className="news-img-wrap">
                <img src={article.image} alt={article.title} className="news-img" />
                <span className="news-date-badge">{article.date}</span>
              </div>
              <div className="news-body">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-desc">{article.desc}</p>
                <div style={{ color: '#052e1e', fontWeight: 800, fontSize: '0.92rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Lire l'article</span>
                  <ArrowRight size={16} style={{ color: '#052e1e' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons for News */}
        <div className="news-nav-bar reveal-on-scroll">
          <button className="news-nav-btn" aria-label="Article précédent">
            <ArrowLeft size={18} />
          </button>
          <button className="news-nav-btn" aria-label="Article suivant">
            <ArrowRight size={18} />
          </button>
        </div>

        {/* FAQ Accordion Block */}
        <div style={{ marginTop: '80px', background: '#ffffff', borderRadius: '32px', padding: '48px 40px', border: '1px solid #e2e8f0', boxShadow: '0 12px 35px rgba(0,0,0,0.03)' }} className="reveal-on-scroll">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
            <div style={{ background: '#052e1e', color: '#dcfc49', padding: '12px', borderRadius: '50%' }}>
              <HelpCircle size={24} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#052e1e', margin: 0, fontFamily: 'var(--font-heading)' }}>
              Foire Aux Questions (FAQ)
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '18px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '20px 28px', background: activeFaq === idx ? '#052e1e' : '#ffffff', border: 'none', textAlign: 'left', fontWeight: 800, fontSize: '1.05rem', color: activeFaq === idx ? '#dcfc49' : '#0f172a', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.25s ease' }}
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={22} style={{ color: '#dcfc49' }} /> : <ChevronDown size={22} style={{ color: '#64748b' }} />}
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '22px 28px', background: '#ffffff', fontSize: '1rem', color: '#334155', borderTop: '1px solid #e2e8f0', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '28px', borderTop: '1px solid #f1f5f9' }}>
            <button onClick={onStartEval} className="eco-btn-action">
              <span>Commencer votre bilan GES</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}


