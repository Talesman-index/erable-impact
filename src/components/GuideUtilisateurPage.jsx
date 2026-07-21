import React, { useState } from 'react';
import { ArrowLeft, BookOpen, HelpCircle, CheckCircle, ChevronDown, ChevronUp, ShieldCheck, Compass, BarChart2, Layers } from 'lucide-react';

export default function GuideUtilisateurPage({ onBackHome, onStartEval }) {
  const [activeFaq, setActiveFaq] = useState(null);

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
      a: "Seuls vous-même et l'équipe d'accompagnement de la CDC de L'Érable avez accès à vos données détaillées. Le portrait régional public est 100% anonymisé et agrégé conformément à la Loi 25."
    },
    {
      q: "Pourquoi mes recommandations du plan d'action sont-elles uniques ?",
      a: "L'outil traduit le plan d'action collectif (41 actions) selon votre secteur d'activité et votre rôle (une institution recevra des pistes réglementaires, une PME des pistes de procédés, un citoyen des gestes quotidiens)."
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-surface)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="eval-header">
        <div className="eval-header-inner">
          <button onClick={onBackHome} className="eval-logo" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M 12,2 C 11.5,4 11.5,4.5 11,5.5 C 10.5,5 9.5,4 8,3 C 8,4.5 8.5,5.5 8.5,6 C 7.5,5.5 6,5 5,5 C 5.5,6 6,7 7,8 C 5,7.5 3.5,7 2,7 C 3,8 4.5,9.5 5.5,10 C 4.5,10 3.5,10.5 2.5,10.5 C 3.5,11.5 5,12 6,12 C 5,13 4,14 3,15 C 4.5,14.5 5.5,14 6.5,13.5 C 6,14.5 5.5,16 5.5,17 C 6.5,16 7.5,15 8,14 C 8.5,15.5 9,17 9.5,18.5 C 10.5,18 11.5,17.5 12,17.5 L 12,22 L 12.5,22 L 12.5,17.5 C 13,17.5 14,18 15,18.5 C 15.5,17 16,15.5 16.5,14 C 17,15 18,16 19,17 C 19,16 18.5,14.5 18,13.5 C 19,14 20,14.5 21.5,15 C 20.5,14 19.5,13 18.5,12 C 20,9.5 21.5,8 22.5,7 C 21,7 19.5,7.5 17.5,8 C 18.5,7 19,6 19.5,5 C 18.5,5 17,5.5 16,6 C 16,5.5 16.5,4.5 16.5,3 C 15,4 14,5 13.5,5.5 C 13,4.5 13,4 12.5,2 L 12,2 Z"/>
            </svg>
            <span>ERABLE <strong>GES</strong></span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: 700, background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '4px 12px', borderRadius: '20px' }}>
              Guide &amp; Documentation
            </span>
            <button onClick={onBackHome} className="btn-eval-back">
              <ArrowLeft size={16} /> Retour à l'accueil
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#f0fdf4', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <BookOpen size={32} />
            </div>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
              Guide de l'Utilisateur
            </h1>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              Plateforme de pilotage environnemental et bilan GES — MRC de L'Érable
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#334155', lineHeight: 1.7 }}>
            {/* Step-by-Step Walkthrough */}
            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Layers size={22} style={{ color: '#059669' }} /> Votre Parcours Étape par Étape
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { num: "1", title: "Créer votre profil d'acteur", desc: "Choisissez votre profil (institution, PME, OBNL, citoyen) et votre secteur parmi les 12 disponibles." },
                  { num: "2", title: "La Boussole de la transition (UQAM)", desc: "Consultez l'outil de réflexion de la Chaire UQAM pour positionner votre vision écologique." },
                  { num: "3", title: "Répondre au questionnaire progressif", desc: "Choisissez votre niveau (Rapide 5 min, Détaillé 15 min, Expert ISO 30 min) et complétez les données." },
                  { num: "4", title: "Analyse des émissions brutes vs actions positives", desc: "Visualisez la répartition Scopes 1-2-3 et vos efforts de séquestration affichés séparément." },
                  { num: "5", title: "Contribution au Plan Climatique Collective", desc: "Découvrez vos recommandations sur-mesure parmi les 41 actions territoriales de L'Érable." },
                  { num: "6", title: "Télécharger & Exporter votre rapport", desc: "Générez votre rapport certifié en PDF ou CSV et participez au portrait régional anonymisé." }
                ].map(item => (
                  <div key={item.num} style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '16px 20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#059669', color: '#ffffff', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.num}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontWeight: 700, color: '#0f172a' }}>{item.title}</h4>
                      <p style={{ margin: '4px 0 0', fontSize: '0.92rem', color: '#475569' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section style={{ marginTop: '12px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HelpCircle size={22} style={{ color: '#059669' }} /> Foire Aux Questions (FAQ)
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden' }}>
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      style={{ width: '100%', padding: '16px 20px', background: '#f8fafc', border: 'none', textAlign: 'left', fontWeight: 700, color: '#0f172a', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span>{faq.q}</span>
                      {activeFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {activeFaq === idx && (
                      <div style={{ padding: '16px 20px', background: '#ffffff', fontSize: '0.93rem', color: '#334155', borderTop: '1px solid #e2e8f0', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Start Eval CTA */}
            <div style={{ background: '#0f172a', color: '#ffffff', padding: '32px', borderRadius: '20px', textAlign: 'center', marginTop: '16px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 8px', color: '#ffffff' }}>
                Prêt à réaliser votre bilan GES ?
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '20px' }}>
                L'outil est gratuit, sécurisé selon la Loi 25 et accessible en 5 minutes.
              </p>
              <button onClick={onStartEval} className="btn-onboarding-start" style={{ background: '#059669', color: '#ffffff', margin: '0 auto' }}>
                Lancer une Évaluation Maintenant
              </button>
            </div>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
            <button onClick={onBackHome} className="btn-onboarding-start" style={{ background: '#f1f5f9', color: '#0f172a' }}>
              <ArrowLeft size={16} /> Retourner à la plateforme
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
