import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, ArrowLeft, User, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RegisterPage({ onBackHome, onGoLogin }) {
  const [name, setName] = useState('');
  const [orgType, setOrgType] = useState('citoyen');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    alert(`Félicitations ${name} ! Votre compte pour la MRC de L'Érable a été créé avec succès.`);
    onGoLogin();
  };

  return (
    <div className="auth-page-root">
      <div className="auth-page-container">
        {/* Top Back Navigation */}
        <div className="auth-back-nav">
          <button onClick={onBackHome} className="btn-auth-back">
            <ArrowLeft size={18} />
            <span>Retour à l'accueil</span>
          </button>
          <div className="auth-logo-brand" onClick={onBackHome} style={{ cursor: 'pointer' }}>
            <span>ERABLE <strong>GES</strong></span>
          </div>
        </div>

        <div className="auth-card-wrapper">
          {/* Left Hero Branding Column */}
          <div className="auth-hero-col">
            <div 
              className="auth-hero-bg" 
              style={{ backgroundImage: `url('/images/beatiful-morning-green-field-with-blue-heaven-2026-03-26-04-36-32-utc.jpg')` }} 
            />
            <div className="auth-hero-overlay" />

            <div className="auth-hero-content">
              <span className="auth-hero-badge">
                <CheckCircle2 size={14} style={{ marginRight: 6 }} />
                Rejoignez la Transition
              </span>
              <h2>Inscrivez votre organisation ou foyer dans la démarche régionale.</h2>
              <p>Évaluez vos émissions, accédez aux subventions locales et mesurez votre impact dans la MRC de L'Érable.</p>

              <div className="auth-hero-footer-notes">
                <div className="auth-stat-chip">
                  <strong>60%</strong> Forêt
                </div>
                <div className="auth-stat-chip">
                  <strong>31%</strong> Agriculture
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="auth-form-col">
            <div className="auth-form-header">
              <h3>Créer votre compte</h3>
              <p>Complétez les informations ci-dessous pour créer votre profil.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="login-field-group">
                <label htmlFor="reg-page-name">Nom complet ou organisation</label>
                <div className="login-input-wrap">
                  <User className="login-field-icon" size={18} />
                  <input
                    type="text"
                    id="reg-page-name"
                    className="login-input"
                    placeholder="Jean Tremblay ou Ville de Plessisville"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="reg-page-orgtype">Profil de membre</label>
                <div className="login-input-wrap">
                  <Building2 className="login-field-icon" size={18} />
                  <select
                    id="reg-page-orgtype"
                    className="login-input eval-select"
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                  >
                    <option value="citoyen">Citoyen / Ménage</option>
                    <option value="pme">Entreprise / PME locale</option>
                    <option value="organisme">Organisme communautaire (CDC)</option>
                    <option value="municipalite">Municipalité / Institution</option>
                  </select>
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="reg-page-email">Adresse courriel</label>
                <div className="login-input-wrap">
                  <Mail className="login-field-icon" size={18} />
                  <input
                    type="email"
                    id="reg-page-email"
                    className="login-input"
                    placeholder="nom@domaine.qc.ca"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="reg-page-password">Mot de passe</label>
                <div className="login-input-wrap">
                  <Lock className="login-field-icon" size={18} />
                  <input
                    type="password"
                    id="reg-page-password"
                    className="login-input"
                    placeholder="Créer un mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="reg-page-confirmpassword">Confirmer le mot de passe</label>
                <div className="login-input-wrap">
                  <Lock className="login-field-icon" size={18} />
                  <input
                    type="password"
                    id="reg-page-confirmpassword"
                    className="login-input"
                    placeholder="Répéter le mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-options-row">
                <label className="login-checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={terms} 
                    onChange={(e) => setTerms(e.target.checked)} 
                    required
                  />
                  <span>J'accepte la charte d'engagement de la MRC de L'Érable</span>
                </label>
              </div>

              <button type="submit" className="btn-auth-submit">
                <span>Créer mon compte</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-page-footer">
              <p>
                Déjà inscrit ?{' '}
                <button type="button" onClick={onGoLogin} className="auth-link-btn">
                  Se connecter
                </button>
              </p>
              
              <div className="auth-security-note">
                <ShieldCheck size={16} />
                <span>Espace sécurisé réservé aux membres de la MRC de L'Érable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
