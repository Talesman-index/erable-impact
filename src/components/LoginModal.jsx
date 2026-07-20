import React, { useState } from 'react';
import { Mail, Lock, X, ArrowRight, ShieldCheck, User, Building2, CheckCircle2 } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  
  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [remember, setRemember] = useState(true);

  // Register State
  const [regName, setRegName] = useState('');
  const [regOrgType, setRegOrgType] = useState('citoyen');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regTerms, setRegTerms] = useState(true);

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue ! Connexion réussie pour ${loginEmail}`);
    onClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (regPassword !== regConfirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    alert(`Félicitations ${regName} ! Votre compte pour la MRC de L'Érable a été créé avec succès.`);
    setActiveTab('login');
  };

  return (
    <div className="login-modal-overlay active" onClick={onClose}>
      <div className="login-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="login-close-btn" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>

        {/* Modal Header Tabs */}
        <div className="auth-tab-row">
          <button 
            type="button"
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Se connecter
          </button>
          <button 
            type="button"
            className={`auth-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Créer un compte
          </button>
        </div>

        {activeTab === 'login' ? (
          <>
            <div className="login-modal-header">
              <h3 className="login-modal-title">Connexion à votre espace</h3>
              <p className="login-modal-subtitle">
                Accédez aux bilans et données environnementales de votre organisation.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="login-modal-form">
              <div className="login-field-group">
                <label htmlFor="login-email">Adresse courriel</label>
                <div className="login-input-wrap">
                  <Mail className="login-field-icon" size={18} />
                  <input
                    type="email"
                    id="login-email"
                    className="login-input"
                    placeholder="nom@organisme.qc.ca"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="login-password">Mot de passe</label>
                <div className="login-input-wrap">
                  <Lock className="login-field-icon" size={18} />
                  <input
                    type="password"
                    id="login-password"
                    className="login-input"
                    placeholder="••••••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
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
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Lien de réinitialisation envoyé par courriel.'); }} className="login-forgot-link">
                  Mot de passe oublié ?
                </a>
              </div>

              <button type="submit" className="btn-login-submit">
                <span>Se connecter</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-switch-prompt">
              Pas encore de compte ?{' '}
              <button type="button" onClick={() => setActiveTab('register')} className="auth-switch-link">
                Créer un compte
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="login-modal-header">
              <h3 className="login-modal-title">Créer votre compte</h3>
              <p className="login-modal-subtitle">
                Rejoignez la démarche environnementale de la MRC de L'Érable.
              </p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="login-modal-form">
              <div className="login-field-group">
                <label htmlFor="reg-name">Nom complet ou organisation</label>
                <div className="login-input-wrap">
                  <User className="login-field-icon" size={18} />
                  <input
                    type="text"
                    id="reg-name"
                    className="login-input"
                    placeholder="Jean Tremblay ou Ville de Plessisville"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="reg-orgtype">Profil de membre</label>
                <div className="login-input-wrap">
                  <Building2 className="login-field-icon" size={18} />
                  <select
                    id="reg-orgtype"
                    className="login-input login-select"
                    value={regOrgType}
                    onChange={(e) => setRegOrgType(e.target.value)}
                  >
                    <option value="citoyen">Citoyen / Ménage</option>
                    <option value="pme">Entreprise / PME locale</option>
                    <option value="organisme">Organisme communautaire (CDC)</option>
                    <option value="municipalite">Municipalité / Institution</option>
                  </select>
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="reg-email">Adresse courriel</label>
                <div className="login-input-wrap">
                  <Mail className="login-field-icon" size={18} />
                  <input
                    type="email"
                    id="reg-email"
                    className="login-input"
                    placeholder="nom@domaine.qc.ca"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="reg-password">Mot de passe</label>
                <div className="login-input-wrap">
                  <Lock className="login-field-icon" size={18} />
                  <input
                    type="password"
                    id="reg-password"
                    className="login-input"
                    placeholder="Créer un mot de passe"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field-group">
                <label htmlFor="reg-confirmpassword">Confirmer le mot de passe</label>
                <div className="login-input-wrap">
                  <Lock className="login-field-icon" size={18} />
                  <input
                    type="password"
                    id="reg-confirmpassword"
                    className="login-input"
                    placeholder="Répéter le mot de passe"
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-options-row">
                <label className="login-checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={regTerms} 
                    onChange={(e) => setRegTerms(e.target.checked)} 
                    required
                  />
                  <span>J'accepte la charte d'engagement de la MRC de L'Érable</span>
                </label>
              </div>

              <button type="submit" className="btn-login-submit">
                <span>Créer mon compte</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-switch-prompt">
              Déjà inscrit ?{' '}
              <button type="button" onClick={() => setActiveTab('login')} className="auth-switch-link">
                Se connecter
              </button>
            </div>
          </>
        )}

        {/* Modal Footer Security Note */}
        <div className="login-modal-footer">
          <ShieldCheck size={16} className="login-shield-icon" />
          <span>Accès réservé aux partenaires et acteurs de la MRC de L'Érable</span>
        </div>
      </div>
    </div>
  );
}
