import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LoginPage({ onBackHome, onGoRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue ! Connexion réussie pour ${email}`);
    onBackHome();
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
              style={{ backgroundImage: `url('/images/esg-strategy-discussion-around-the-wooden-table-2026-03-20-04-19-54-utc.jpg')` }} 
            />
            <div className="auth-hero-overlay" />

            <div className="auth-hero-content">
              <span className="auth-hero-badge">
                <CheckCircle2 size={14} style={{ marginRight: 6 }} />
                Plateforme Territoriale
              </span>
              <h2>Pilotez l'impact environnemental de la MRC de L'Érable.</h2>
              <p>Accédez aux bilans GES, indicateurs et plans d'action personnalisés de votre organisation.</p>

              <div className="auth-hero-footer-notes">
                <div className="auth-stat-chip">
                  <strong>10</strong> Municipalités
                </div>
                <div className="auth-stat-chip">
                  <strong>24 457</strong> Habitants
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="auth-form-col">
            <div className="auth-form-header">
              <h3>Connexion à votre espace</h3>
              <p>Entrez vos identifiants pour accéder au tableau de bord.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="login-field-group">
                <label htmlFor="page-email">Adresse courriel</label>
                <div className="login-input-wrap">
                  <Mail className="login-field-icon" size={18} />
                  <input
                    type="email"
                    id="page-email"
                    className="login-input"
                    placeholder="nom@organisme.qc.ca"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="page-password">Mot de passe</label>
                <div className="login-input-wrap">
                  <Lock className="login-field-icon" size={18} />
                  <input
                    type="password"
                    id="page-password"
                    className="login-input"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-options-row">
                <label className="login-checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={remember} 
                    onChange={(e) => setRemember(e.target.checked)} 
                  />
                  <span>Se souvenir de moi</span>
                </label>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert('Un courriel de réinitialisation a été envoyé.'); }} 
                  className="login-forgot-link"
                >
                  Mot de passe oublié ?
                </a>
              </div>

              <button type="submit" className="btn-auth-submit">
                <span>Se connecter</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-page-footer">
              <p>
                Pas encore de compte ?{' '}
                <button type="button" onClick={onGoRegister} className="auth-link-btn">
                  Créer un compte
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
