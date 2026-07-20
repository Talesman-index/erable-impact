import React, { useState } from 'react';
import { Mail, Lock, X, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue! Connexion réussie pour ${email}`);
    onClose();
  };

  return (
    <div className="login-modal-overlay active" onClick={onClose}>
      <div className="login-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="login-close-btn" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="login-modal-header">
          <div className="login-badge-chip">
            <UserCheck size={13} />
            <span>ESPACE MEMBRE</span>
          </div>

          <h3 className="login-modal-title">Connexion à votre espace</h3>
          <p className="login-modal-subtitle">
            Accédez aux bilans et données environnementales de votre organisation.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="login-modal-form">
          <div className="login-field-group">
            <label htmlFor="login-email">Adresse courriel</label>
            <div className="login-input-wrap">
              <Mail className="login-field-icon" size={18} />
              <input
                type="email"
                id="login-email"
                className="login-input"
                placeholder="nom@organisme.qc.ca"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Lien de réinitialisation envoyé par courriel.'); }} className="login-forgot-link">
              Mot de passe oublié ?
            </a>
          </div>

          <button type="submit" className="btn-login-submit">
            <span>Se connecter</span>
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Modal Footer Security Note */}
        <div className="login-modal-footer">
          <ShieldCheck size={16} className="login-shield-icon" />
          <span>Accès réservé aux partenaires et acteurs de la MRC de L'Érable</span>
        </div>
      </div>
    </div>
  );
}
