import React, { useState } from 'react';
import { ArrowLeft, Award, CheckCircle2, Heart, Users, Building, GraduationCap, MapPin, Send } from 'lucide-react';

export default function CharteEngagementPage({ onBackHome }) {
  const [signed, setSigned] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [representative, setRepresentative] = useState('');
  const [actorRole, setActorRole] = useState('organisation');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orgName || !representative) {
      alert('Veuillez remplir le nom de l\'organisation et du représentant.');
      return;
    }
    setSigned(true);
  };

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
              Charte Territoriale de L'Érable
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
              <Award size={32} />
            </div>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
              Charte d'Engagement Socioclimatique
            </h1>
            <p style={{ color: '#059669', fontSize: '1.1rem', fontWeight: 700 }}>
              MRC de L'Érable &amp; Centre-du-Québec
            </p>
          </div>

          {/* Key Quote Banner */}
          <div style={{ background: '#0f172a', color: '#ffffff', padding: '24px 28px', borderRadius: '20px', marginBottom: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.6, margin: 0, fontWeight: 500, color: '#ecfdf5' }}>
              « Une transition qui n'a de sens que si elle protège d'abord celles et ceux qui sont les plus vulnérables aux crises climatiques et économiques. »
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: '#334155', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                Préambule &amp; Démarche Territoriale
              </h2>
              <p>
                Cette charte est l'aboutissement d'une démarche participative d'envergure menée dans la MRC de L'Érable : cartographie des vulnérabilités climatiques, exercice collectif de la <strong>Boussole de la transition (UQAM)</strong> et priorisation d'un <strong>Plan d'action climatique de 41 actions concrètes</strong>.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                Notre Vision Commune
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontWeight: 700, color: '#059669', marginBottom: '6px' }}>1. Mobilisation Citoyenne</h4>
                  <p style={{ fontSize: '0.92rem', margin: 0 }}>La transition se fera par la démocratie participative locale et le pouvoir d'agir des citoyens.</p>
                </div>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontWeight: 700, color: '#059669', marginBottom: '6px' }}>2. Justice Sociale &amp; Climat</h4>
                  <p style={{ fontSize: '0.92rem', margin: 0 }}>La justice sociale et la carboneutralité ne sont pas concurrentes mais indissociables.</p>
                </div>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontWeight: 700, color: '#059669', marginBottom: '6px' }}>3. Ancrage Territorial</h4>
                  <p style={{ fontSize: '0.92rem', margin: 0 }}>Action prioritaire dans nos milieux de vie de L'Érable (Plessisville, Princeville, etc.).</p>
                </div>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontWeight: 700, color: '#059669', marginBottom: '6px' }}>4. Décisions Factuelles</h4>
                  <p style={{ fontSize: '0.92rem', margin: 0 }}>Engagement basé sur des bilans GES mesurés et vérifiables plutôt que des promesses.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                Engagements Spécifiques selon Votre Rôle
              </h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
                    <th style={{ padding: '12px', border: '1px solid #cbd5e1' }}>Type d'acteur</th>
                    <th style={{ padding: '12px', border: '1px solid #cbd5e1' }}>Engagements spécifiques</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 700, color: '#059669' }}>Institutions &amp; Municipalités</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Intégrer les priorités du plan climatique dans les règlements, schémas d'aménagement et budgets.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 700, color: '#059669' }}>Entreprises &amp; PME</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Adapter les opérations sectorielles et investir dans des procédés bas-carbone.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 700, color: '#059669' }}>Organismes Communautaires</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Mobiliser et protéger en priorité les populations vulnérables du territoire.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 700, color: '#059669' }}>Citoyennes &amp; Citoyens</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Adopter des gestes écoresponsables quotidiens et participer aux démarches locales.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Signature / Adhésion Form */}
            <section style={{ marginTop: '20px', background: '#f0fdf4', padding: '32px', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#065f46', marginBottom: '8px', textAlign: 'center' }}>
                Signer &amp; Adhérer à la Charte Territoriale
              </h2>
              <p style={{ textAlign: 'center', fontSize: '0.95rem', color: '#047857', marginBottom: '24px' }}>
                Rejoignez le mouvement des acteurs engagés pour la transition dans la MRC de L'Érable.
              </p>

              {signed ? (
                <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', textAlign: 'center', border: '1px solid #86efac' }}>
                  <CheckCircle2 size={48} style={{ color: '#059669', margin: '0 auto 12px' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#065f46', marginBottom: '4px' }}>
                    Adhésion Confirmée !
                  </h3>
                  <p style={{ color: '#334155', margin: 0 }}>
                    Merci à <strong>{orgName}</strong> (Représenté par {representative}) pour votre engagement au sein de la MRC de L'Érable.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a', display: 'block', marginBottom: '6px' }}>
                        Nom de l'organisation / du foyer :
                      </label>
                      <input 
                        type="text" 
                        className="eval-input" 
                        placeholder="ex: Ville de Plessisville ou Famille Tremblay"
                        value={orgName} 
                        onChange={(e) => setOrgName(e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <label style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a', display: 'block', marginBottom: '6px' }}>
                        Représenté(e) par :
                      </label>
                      <input 
                        type="text" 
                        className="eval-input" 
                        placeholder="Prénom et Nom"
                        value={representative} 
                        onChange={(e) => setRepresentative(e.target.value)} 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a', display: 'block', marginBottom: '6px' }}>
                      Type d'acteur :
                    </label>
                    <select value={actorRole} onChange={(e) => setActorRole(e.target.value)} className="eval-select">
                      <option value="organisation">Organisme Communautaire / OBNL</option>
                      <option value="institution">Institution / Municipalité</option>
                      <option value="entreprise">Entreprise / PME / Ferme</option>
                      <option value="citoyen">Citoyen / Ménage</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-onboarding-start" style={{ background: '#059669', color: '#ffffff', width: '100%', marginTop: '8px' }}>
                    <Send size={16} /> Signer Numériquement la Charte
                  </button>
                </form>
              )}
            </section>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
            <button onClick={onBackHome} className="btn-onboarding-start" style={{ background: '#0f172a', color: '#ffffff' }}>
              <ArrowLeft size={16} /> Retourner à la plateforme
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
