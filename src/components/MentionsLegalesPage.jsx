import React from 'react';
import { ArrowLeft, Shield, Building, FileText, Lock, Globe, Scale } from 'lucide-react';

export default function MentionsLegalesPage({ onBackHome }) {
  return (
    <div style={{ backgroundColor: 'var(--color-surface)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="eval-header">
        <div className="eval-header-inner">
          <button onClick={onBackHome} className="eval-logo" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="logo-icon-wrap" style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--color-neon-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f172a">
                <path d="M 12,2 C 11.5,4 11.5,4.5 11,5.5 C 10.5,5 9.5,4 8,3 C 8,4.5 8.5,5.5 8.5,6 C 7.5,5.5 6,5 5,5 C 5.5,6 6,7 7,8 C 5,7.5 3.5,7 2,7 C 3,8 4.5,9.5 5.5,10 C 4.5,10 3.5,10.5 2.5,10.5 C 3.5,11.5 5,12 6,12 C 5,13 4,14 3,15 C 4.5,14.5 5.5,14 6.5,13.5 C 6,14.5 5.5,16 5.5,17 C 6.5,16 7.5,15 8,14 C 8.5,15.5 9,17 9.5,18.5 C 10.5,18 11.5,17.5 12,17.5 L 12,22 L 12.5,22 L 12.5,17.5 C 13,17.5 14,18 15,18.5 C 15.5,17 16,15.5 16.5,14 C 17,15 18,16 19,17 C 19,16 18.5,14.5 18,13.5 C 19,14 20,14.5 21.5,15 C 20.5,14 19.5,13 18.5,12 C 19.5,12 21,11.5 22,10.5 C 21,10.5 20,10 19,10 C 20,9.5 21.5,8 22.5,7 C 21,7 19.5,7.5 17.5,8 C 18.5,7 19,6 19.5,5 C 18.5,5 16.5,4.5 16.5,3 C 15,4 14,5 13.5,5.5 C 13,4.5 13,4 12.5,2 L 12,2 Z"/>
              </svg>
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>Erable <strong style={{ color: 'var(--color-primary)' }}>GES</strong></span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: 700, background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '4px 12px', borderRadius: '20px' }}>
              Mentions Légales Officieuses
            </span>
            <button onClick={onBackHome} className="btn-eval-back">
              <ArrowLeft size={16} /> Retour à l'accueil
            </button>
          </div>
        </div>
      </header>

      {/* Main Legal Content */}
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#f0fdf4', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Scale size={30} />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
              Mentions Légales
            </h1>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              Outil d'évaluation d'impact environnemental — MRC de L'Érable <br />
              <strong style={{ color: '#059669' }}>CDC de L'Érable — Projet de transition socioclimatique</strong>
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #059669', background: '#f8fafc', padding: '16px 20px', borderRadius: '0 12px 12px 0', marginBottom: '32px', fontSize: '0.92rem', color: '#334155' }}>
            <strong>Avis important :</strong> Ce document régit l'utilisation de l'outil d'évaluation d'impact environnemental de la MRC de L'Érable. Conformément à la Loi 25 et aux exigences de transparence, cette version est tenue à jour par la CDC de L'Érable.
          </div>

          <div className="legal-article" style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: '#334155', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Building size={20} style={{ color: '#059669' }} /> 1. Éditeur de l'outil
              </h2>
              <p>L'outil d'évaluation d'impact environnemental est édité par la :</p>
              <div style={{ background: '#f1f5f9', padding: '16px', borderRadius: '12px', marginTop: '8px', fontSize: '0.95rem' }}>
                <strong>Corporation de développement communautaire (CDC) de L'Érable</strong><br />
                <strong>Adresse :</strong> 1280, avenue Trudelle, Plessisville (Québec) G6L 3K4<br />
                <strong>Courriel :</strong> info@cdclerable.qc.ca<br />
                <strong>Téléphone :</strong> +1 819 362 2333
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText size={20} style={{ color: '#059669' }} /> 2. Responsable de la publication
              </h2>
              <p>
                La direction générale de la CDC de L'Érable exerce la responsabilité de la publication de l'outil et veille à la conformité du traitement des données du territoire.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe size={20} style={{ color: '#059669' }} /> 3. Hébergement &amp; Souveraineté des données (Loi 25)
              </h2>
              <p>
                Conformément aux exigences strictes de la <strong>Loi 25 du Québec</strong>, l'outil et l'ensemble de ses bases de données sont hébergés sur des serveurs sécurisés situés au <strong>Canada</strong> (avec préférence de résidence au Québec).
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={20} style={{ color: '#059669' }} /> 4. Propriété intellectuelle &amp; Références scientifiques
              </h2>
              <p>
                Le contenu de l'outil (textes, méthodologie, visuels, algorithmes) est la propriété de la CDC de L'Érable.
                Les méthodologies et facteurs d'émission proviennent de sources officielles certifiées :
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                <li>Ministère de l'Environnement, de la Lutte contre les changements climatiques, de la Faune et des Parcs (MELCCFP) du Québec.</li>
                <li>Inventaire national des GES du Canada (ECCC).</li>
                <li>Hydro-Québec (Facteur d'émission du réseau 1.3 g CO₂e/kWh).</li>
                <li>ISO 14064-1 &amp; GHG Protocol.</li>
                <li><strong>La Boussole de la transition :</strong> Développée par la Chaire de recherche sur la transition écologique de l'UQAM.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lock size={20} style={{ color: '#059669' }} /> 5. Limitation de responsabilité
              </h2>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>Portée indicative :</strong> Les résultats produits sont des estimations à des fins de sensibilisation et de priorisation collective. Ils ne constituent pas un bilan carbone réglementaire certifié par un tiers.</li>
                <li><strong>Qualité des données :</strong> La précision des résultats dépend de la fiabilité des informations saisies par les utilisateurs.</li>
                <li><strong>Recommandations :</strong> Les conseils du plan d'action sont fournis à titre d'orientation stratégique et ne remplacent pas un avis d'ingénieur ou d'expert financier.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                6. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par les lois applicables dans la province de Québec et le droit fédéral canadien. Tout litige relève des tribunaux compétents du district judiciaire d'Arthabaska.
              </p>
            </section>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
            <button onClick={onBackHome} className="btn-onboarding-start" style={{ background: '#059669', color: '#ffffff' }}>
              <ArrowLeft size={16} /> Retourner à la plateforme
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
