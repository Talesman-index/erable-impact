import React, { useState } from 'react';
import { BookOpen, HelpCircle, ChevronDown, ChevronUp, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function GuideFAQSection({ onStartEval }) {
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
      a: "Seuls vous-même et l'équipe d'accompagnement de la CDC de L'Érable avez accès à vos données détaillées. Le portrait régional public est 100% anonymisé et agrégé conformément à la Loi 25 du Québec."
    },
    {
      q: "Pourquoi mes recommandations du plan d'action sont-elles uniques ?",
      a: "L'outil traduit le plan d'action collectif (41 actions) selon votre secteur d'activité et votre rôle (une institution recevra des pistes réglementaires, une PME des pistes de procédés, un citoyen des gestes quotidiens)."
    }
  ];

  return (
    <section id="guide-faq" className="section-padded" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#059669', padding: '6px 16px', borderRadius: '9999px', fontWeight: 700, fontSize: '0.88rem', marginBottom: '16px' }}>
            <BookOpen size={18} />
            Guide Utilisateur &amp; Documentation
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
            Comment fonctionne la plateforme ?
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
            Tout ce qu'il faut savoir pour mesurer l'empreinte environnementale de votre organisation ou ménage dans la MRC de L'Érable.
          </p>
        </div>

        {/* 6-Step Visual Cards Grid */}
        <div style={{ marginBottom: '56px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layers size={22} style={{ color: '#059669' }} /> Les 6 étapes de votre bilan
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              { num: "01", title: "Profil & Secteur", desc: "Identifiez votre statut (institution, entreprise, OBNL, citoyen) et l'un des 12 secteurs d'activité." },
              { num: "02", title: "Boussole UQAM", desc: "Consultez la Boussole de la transition de la Chaire UQAM pour guider vos réflexions écologiques." },
              { num: "03", title: "Questionnaire Progressif", desc: "Répondez selon le niveau de votre choix (Rapide 5 min, Détaillé 15 min, Expert 30 min)." },
              { num: "04", title: "Résultats & Transparence", desc: "Découvrez vos Émissions Brutes et Actions Positives présentées séparément (ISO 14064)." },
              { num: "05", title: "Plan Climatique Collectif", desc: "Accédez à vos recommandations personnalisées parmi les 41 actions du territoire." },
              { num: "06", title: "Export & Portrait Régional", desc: "Téléchargez votre bilan en PDF/CSV et contribuez de façon anonymisée (Loi 25)." }
            ].map(item => (
              <div key={item.num} style={{ background: '#ffffff', borderRadius: '18px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#059669', opacity: 0.9 }}>{item.num}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{item.title}</h4>
                <p style={{ fontSize: '0.92rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HelpCircle size={22} style={{ color: '#059669' }} /> Foire Aux Questions (FAQ)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '18px 24px', background: activeFaq === idx ? '#f0fdf4' : '#ffffff', border: 'none', textAlign: 'left', fontWeight: 700, fontSize: '1.02rem', color: activeFaq === idx ? '#065f46' : '#0f172a', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background 0.2s ease' }}
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={20} style={{ color: '#059669' }} /> : <ChevronDown size={20} style={{ color: '#64748b' }} />}
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '18px 24px', background: '#ffffff', fontSize: '0.95rem', color: '#334155', borderTop: '1px solid #e2e8f0', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
            <button onClick={onStartEval} className="btn-onboarding-start" style={{ background: '#059669', color: '#ffffff', margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Commencer votre bilan GES <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
