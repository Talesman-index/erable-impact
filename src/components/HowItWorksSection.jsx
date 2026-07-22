import React, { useState } from 'react';
import { 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  BarChart3, 
  Compass, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function HowItWorksSection({ onStartEval }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Périmètre & Profil",
      icon: Layers,
      subtitle: "Choisissez votre statut & périmètre d'analyse",
      desc: "Sélectionnez si vous évaluez une organisation permanente (PME, école, municipalité, foyer) ou un événement ponctuel. L'outil adapte automatiquement les questions.",
      image: "/images/illus_profile.png",
      badgeText: "Adaptabilité 100%",
      bullets: [
        "4 Profils d'acteurs (Public, Privé, OBNL, Citoyen)",
        "2 Périmètres (Organisationnel vs Événementiel)",
        "Configuration personnalisée en moins de 1 minute"
      ]
    },
    {
      num: "02",
      title: "Collecte des Données",
      icon: Zap,
      subtitle: "Saisie guidée des consommations & habitudes",
      desc: "Renseignez vos factures d'énergie, kilomètres parcourus, repas ou déchets. Chaque donnée est qualifiée par l'Indice Qualité DQI (Mesurée, Facturée ou Estimée).",
      image: "/images/illus_energy.png",
      badgeText: "Indice DQI Certifié",
      bullets: [
        "Formulaires structurés par secteur d'activité",
        "Calculateurs automatiques de conversions thermiques",
        "Transparence sur le degré d'exactitude (DQI)"
      ]
    },
    {
      num: "03",
      title: "Bilan & Analyse GES",
      icon: BarChart3,
      subtitle: "Calcul instantané des émissions brutes et nettes",
      desc: "Nos algorithmes appliquent les facteurs d'émission certifiés ISO 14064 pour générer votre bilan de gaz à effet de serre détaillé par poste d'émission.",
      image: "/images/illus_results.png",
      badgeText: "Norme ISO 14064",
      bullets: [
        "Répartition complète par poste (Énergie, Transport, Restauration)",
        "Ratios personnalisés (kg CO₂e / participant / jour ou tCO₂e / an)",
        "Comptabilisation de la séquestration et du stockage carbone"
      ]
    },
    {
      num: "04",
      title: "Plan Climat & Impact",
      icon: Compass,
      subtitle: "Plan d'action sur mesure & Registre territorial",
      desc: "Accédez aux recommandations de la Boussole UQAM, identifiez les subventions régionales disponibles et téléchargez votre rapport officiel.",
      image: "/images/illus_actions.png",
      badgeText: "Registre Ouvert",
      bullets: [
        "Export du rapport complet en format CSV / PDF",
        "Accès direct aux aides financières et programmes d'accompagnement",
        "Valorisation de vos résultats dans le Portrait Territoire"
      ]
    }
  ];

  const current = steps[activeStep];

  return (
    <section id="how-it-works" className="section-padded" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="eco-section-header reveal-on-scroll">
          <div className="eco-pill-badge">
            <span className="eco-badge-icon">
              <Leaf size={14} />
            </span>
            <span>Guide &amp; Mode d'Emploi</span>
          </div>

          <h2 className="eco-section-title">
            Comment utiliser l'outil d'évaluation socioclimatique ?
          </h2>

          <p className="eco-section-subtitle">
            Un parcours simple et guidé en 4 étapes pour mesurer, comprendre et réduire l'empreinte carbone de votre collectivité, organisation ou foyer.
          </p>
        </div>

        {/* 4 Interactive Step Progress Pills Bar */}
        <div className="how-steps-bar reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isActive ? '#052e1e' : '#f8fafc',
                  color: isActive ? '#ffffff' : '#0f172a',
                  border: isActive ? '2px solid #052e1e' : '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
                  boxShadow: isActive ? '0 8px 24px rgba(5, 46, 30, 0.18)' : 'none',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 900, color: isActive ? '#dcfc49' : '#64748b', letterSpacing: '0.05em' }}>
                    ÉTAPE {s.num}
                  </span>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: isActive ? 'rgba(220, 252, 73, 0.15)' : '#ffffff', color: isActive ? '#dcfc49' : '#1b4332', display: 'flex', alignItems: 'center', justifyContent: 'center', border: isActive ? '1px solid rgba(220, 252, 73, 0.3)' : '1px solid #e2e8f0' }}>
                    <IconComp size={18} />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: isActive ? '#ffffff' : '#052e1e', margin: 0 }}>
                  {s.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Detailed Active Step Showcase Card */}
        <div className="tab-showcase-card reveal-on-scroll reveal-delay-1" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          
          {/* Left Text Explanation */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#052e1e', color: '#dcfc49', padding: '6px 16px', borderRadius: '9999px', fontWeight: 800, fontSize: '0.82rem', marginBottom: '16px' }}>
              <Sparkles size={14} />
              <span>{current.badgeText}</span>
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#052e1e', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>
              Étape {current.num} : {current.subtitle}
            </h3>

            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {current.desc}
            </p>

            <ul className="tab-showcase-list" style={{ marginBottom: '32px' }}>
              {current.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: '#1b4332', flexShrink: 0 }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button onClick={onStartEval} className="eco-btn-action">
              <span>Lancer mon évaluation</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Visual Image Showcase */}
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.08)', background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <img 
              src={current.image} 
              alt={current.title} 
              style={{ width: '100%', height: '340px', objectFit: 'contain', padding: '24px', background: '#ffffff' }} 
            />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: 'rgba(5, 46, 30, 0.95)', backdropFilter: 'blur(8px)', color: '#ffffff', padding: '14px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 700 }}>
                <ShieldCheck size={18} style={{ color: '#dcfc49' }} />
                <span>Norme &amp; ISO 14064 Homologué</span>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#dcfc49', fontWeight: 800 }}>Gratuit &amp; Libre</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
