import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, FileCheck, UserCheck, Server, AlertCircle } from 'lucide-react';

export default function PolitiqueConfidentialitePage({ onBackHome }) {
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
              Conforme Loi 25 (Québec)
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
              <ShieldCheck size={32} />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
              Politique de Confidentialité &amp; Protection des Données
            </h1>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              Conformité stricte à la <strong>Loi 25 du Québec</strong> (RLRQ, c. P-39.1)<br />
              <strong style={{ color: '#059669' }}>CDC de L'Érable — Projet de transition socioclimatique</strong>
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #059669', background: '#ecfdf5', padding: '16px 20px', borderRadius: '0 12px 12px 0', marginBottom: '32px', fontSize: '0.92rem', color: '#065f46' }}>
            <strong>Engagement de confidentialité :</strong> La CDC de L'Érable s'engage à protéger l'intégralité des renseignements personnels et des données environnementales déclarées par les citoyens, entreprises, institutions et organismes de la MRC de L'Érable.
          </div>

          <div className="legal-article" style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: '#334155', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <UserCheck size={20} style={{ color: '#059669' }} /> 1. Responsable de la protection des renseignements personnels
              </h2>
              <p>
                Conformément à la Loi 25, la CDC de L'Érable a désigné un Responsable de la protection des renseignements personnels :
              </p>
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', marginTop: '8px', fontSize: '0.95rem', border: '1px solid #e2e8f0' }}>
                <strong>Responsable Loi 25 — CDC de L'Érable</strong><br />
                <strong>Courriel dédié :</strong> confidentialite@cdclerable.qc.ca<br />
                <strong>Adresse :</strong> 1280, avenue Trudelle, Plessisville (QC) G6L 3K4<br />
                <strong>Téléphone :</strong> +1 819 362 2333
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileCheck size={20} style={{ color: '#059669' }} /> 2. Renseignements personnels collectés
              </h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
                    <th style={{ padding: '10px', border: '1px solid #cbd5e1' }}>Catégorie</th>
                    <th style={{ padding: '10px', border: '1px solid #cbd5e1' }}>Données incluses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 600 }}>Profil &amp; Contact</td>
                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Nom, courriel, type d'acteur, secteur d'activité, municipalité de L'Érable, code postal.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 600 }}>Données environnementales</td>
                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Consommations d'énergie (kWh, $), kilomètres de déplacements, alimentation, matières et déchets.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 600 }}>Boussole &amp; Plan d'action</td>
                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Résultat de la Boussole de la transition (UQAM) et actions collectives sélectionnées.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lock size={20} style={{ color: '#059669' }} /> 3. Finalités de la collecte
              </h2>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Calculer votre bilan d'impact environnemental individuel ou organisationnel.</li>
                <li>Générer des recommandations personnalisées alignées sur le <strong>Plan d'action climatique collectif de L'Érable (41 actions)</strong>.</li>
                <li>Alimenter le <strong>Portrait Régional Agrégé et Anonymisé</strong> de la MRC de L'Érable sans jamais exposer de données nominatives.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Server size={20} style={{ color: '#059669' }} /> 4. Sécurité &amp; Vos Droits selon la Loi 25
              </h2>
              <p>
                Vos données sont <strong>chiffrées en transit et au repos</strong>. Elles sont stockées au Canada et ne sont jamais vendues ou partagées à des fins commerciales.
              </p>
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', marginTop: '12px' }}>
                <strong style={{ color: '#0f172a' }}>Vos droits garantis :</strong>
                <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                  <li><strong>Droit d'accès &amp; rectification :</strong> Consultez et modifiez vos données en tout temps.</li>
                  <li><strong>Droit au retrait du consentement :</strong> Supprimez votre compte et vos historiques sur simple demande.</li>
                  <li><strong>Droit à la portabilité (Loi 25) :</strong> Exportez l'ensemble de vos données au format structuré CSV/JSON.</li>
                  <li><strong>Recours :</strong> Vous pouvez déposer une plainte auprès de la Commission d'accès à l'information du Québec (CAI).</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle size={20} style={{ color: '#059669' }} /> 5. Transparence sur le traitement automatisé (Art. 12.1)
              </h2>
              <p>
                Les recommandations du plan d'action sont générées automatiquement selon votre secteur et profil. Elles n'ont aucun effet juridique ou financier contraignant. Vous pouvez demander des explications sur leur calcul en contactant notre responsable.
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
