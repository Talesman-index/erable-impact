import React, { useState } from 'react';
import { 
  User, Users, Building, GraduationCap, MapPin, 
  Zap, Truck, ShoppingBag, Leaf, Award, 
  ArrowLeft, ArrowRight, X, Send, Download, FileText
} from 'lucide-react';

export default function EvaluationView({ onBackHome }) {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState('citizen'); // 'citizen' | 'organisation' | 'company' | 'institution' | 'municipality'
  const [location, setLocation] = useState('Région de L\'Érable');
  const [postalCode, setPostalCode] = useState('G6L 1A1');
  const [sector, setSector] = useState('agriculture');
  const [orgSize, setOrgSize] = useState('small'); // 'small' | 'medium' | 'large'
  const [level, setLevel] = useState(1);

  // Form State
  const [energyKwh, setEnergyKwh] = useState(15000);
  const [heatingType, setHeatingType] = useState('hydro');
  const [kmCar, setKmCar] = useState(12000);
  const [carType, setCarType] = useState('gasoline');
  const [dietType, setDietType] = useState('balanced');
  const [actions, setActions] = useState({
    solar: false,
    compost: true,
    localFood: true,
    treePlanting: false,
    heatPump: true
  });

  // Chat State
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Bonjour ! Je suis votre conseiller environnemental IA. Posez-moi des questions sur vos facteurs d\'émissions ou les moyennes de la MRC de L\'Érable.' }
  ]);
  const [activeTab, setActiveTab] = useState('breakdown');

  // Calculations
  const calcEnergy = () => {
    let base = (energyKwh * 0.0013) / 1000; // Hydro Quebec rate
    if (heatingType === 'oil') base += 2.8;
    if (heatingType === 'gas') base += 1.6;
    return parseFloat(base.toFixed(1));
  };

  const calcMobility = () => {
    let factor = 0.00019; // Gasoline
    if (carType === 'electric') factor = 0.00003;
    if (carType === 'hybrid') factor = 0.00011;
    return parseFloat((kmCar * factor).toFixed(1));
  };

  const calcDiet = () => {
    let base = 2.4;
    if (dietType === 'vegan') base = 1.2;
    if (dietType === 'meat') base = 3.6;
    return base;
  };

  const energyVal = calcEnergy();
  const mobilityVal = calcMobility();
  const dietVal = calcDiet();
  const grossTotal = parseFloat((energyVal + mobilityVal + dietVal).toFixed(1));
  
  let offsets = 0;
  if (actions.treePlanting) offsets += 0.3;
  if (actions.solar) offsets += 0.2;
  const netTotal = Math.max(0.2, parseFloat((grossTotal - offsets).toFixed(1)));

  const handleSendMessage = (msg) => {
    const query = msg || chatInput;
    if (!query.trim()) return;

    const newMsgs = [...chatMessages, { sender: 'user', text: query }];
    setChatMessages(newMsgs);
    setChatInput('');

    setTimeout(() => {
      let reply = "L'hydroélectricité québécoise est extrêmement propre (≈ 1.3g CO₂e/kWh), ce qui réduit fortement l'impact de l'électricité directe dans la MRC de L'Érable.";
      if (query.toLowerCase().includes('mrc') || query.toLowerCase().includes('stat')) {
        reply = "La MRC de L'Érable compte 24 457 habitants sur 10 municipalités, avec 60% de forêt et 43% d'emplois liés à l'agriculture.";
      } else if (query.toLowerCase().includes('chauffage')) {
        reply = "Passer d'un chauffage au mazout à une thermopompe électrique dans la MRC permet d'économiser jusqu'à 2.5 tCO₂e/an.";
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  const toggleAction = (key) => {
    setActions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ backgroundColor: 'var(--color-surface)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="eval-header">
        <div className="eval-header-inner">
          <button onClick={onBackHome} className="eval-logo" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M 12,2 C 11.5,4 11.5,4.5 11,5.5 C 10.5,5 9.5,4 8,3 C 8,4.5 8.5,5.5 8.5,6 C 7.5,5.5 6,5 5,5 C 5.5,6 6,7 7,8 C 5,7.5 3.5,7 2,7 C 3,8 4.5,9.5 5.5,10 C 4.5,10 3.5,10.5 2.5,10.5 C 3.5,11.5 5,12 6,12 C 5,13 4,14 3,15 C 4.5,14.5 5.5,14 6.5,13.5 C 6,14.5 5.5,16 5.5,17 C 6.5,16 7.5,15 8,14 C 8.5,15.5 9,17 9.5,18.5 C 10.5,18 11.5,17.5 12,17.5 L 12,22 L 12.5,22 L 12.5,17.5 C 13,17.5 14,18 15,18.5 C 15.5,17 16,15.5 16.5,14 C 17,15 18,16 19,17 C 19,16 18.5,14.5 18,13.5 C 19,14 20,14.5 21.5,15 C 20.5,14 19.5,13 18.5,12 C 19.5,12 21,11.5 22,10.5 C 21,10.5 20,10 19,10 C 20,9.5 21.5,8 22.5,7 C 21,7 19.5,7.5 17.5,8 C 18.5,7 19,6 19.5,5 C 18.5,5 17,5.5 16,6 C 16,5.5 16.5,4.5 16.5,3 C 15,4 14,5 13.5,5.5 C 13,4.5 13,4 12.5,2 L 12,2 Z"/>
            </svg>
            <span>ERABLE <strong>GES</strong></span>
          </button>

          <div className="eval-header-progress">
            <div className="header-step-pills">
              <span className={`step-pill ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`} onClick={() => setStep(1)}>Profil</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`} onClick={() => setStep(2)}>Énergie</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`} onClick={() => setStep(3)}>Mobilité</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 4 ? 'active' : step > 4 ? 'done' : ''}`} onClick={() => setStep(4)}>Consommation</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 5 ? 'active' : step > 5 ? 'done' : ''}`} onClick={() => setStep(5)}>Actions</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 6 ? 'active' : ''}`} onClick={() => setStep(6)}>Résultats</span>
            </div>
            <span className="mobile-step-counter">Étape {step} sur 6</span>
          </div>

          <div className="eval-header-actions">
            <span className="eval-user-badge">Invité</span>
            <button onClick={onBackHome} className="btn-eval-back">
              <X size={16} /> Quitter
            </button>
          </div>
        </div>

        <div className="eval-global-progress">
          <div className="eval-global-fill" style={{ width: `${(step / 6) * 100}%` }} />
        </div>
      </header>

      {/* Main Layout */}
      <main className="eval-main">
        <div className="eval-wizard-panel">
          {/* STEP 1: Profile */}
          {step === 1 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_profile.png" alt="Profil" className="illus-step-img" />
              </div>
              <h2 className="step-question">Créez votre profil d'évaluation</h2>
              <p className="step-hint">Adaptez les calculs et facteurs d'émissions selon votre réalité.</p>

              {/* 1. Type d'acteur */}
              <div className="form-section-title">1. Type d'acteur</div>
              <div className="profile-choice-grid select-5-columns">
                {[
                  { id: 'citizen', title: 'Citoyen', desc: 'Bilan personnel et mode de vie.', icon: User },
                  { id: 'organisation', title: 'Organisation', desc: 'OBNL et associations.', icon: Users },
                  { id: 'company', title: 'Entreprise', desc: 'Opérations et PME.', icon: Building },
                  { id: 'institution', title: 'Institution', desc: 'Écoles, hôpitaux.', icon: GraduationCap },
                  { id: 'municipality', title: 'Collectivité', desc: 'Villes et MRC.', icon: MapPin }
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <label key={item.id} className="profile-choice">
                      <input 
                        type="radio" 
                        name="eval-profile" 
                        value={item.id} 
                        checked={profile === item.id} 
                        onChange={() => setProfile(item.id)} 
                      />
                      <div className="profile-choice-card">
                        <div className="choice-icon"><Icon size={24} /></div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* 2. Localisation / Région & Code Postal (All Actors) */}
              <div className="form-section-title" style={{ marginTop: '24px' }}>2. Localisation &amp; Territoire</div>
              <div className="eval-form-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#1e293b' }}>
                    Localisation / Région <span style={{ color: '#e11d48' }}>*</span>
                  </label>
                  <div className="select-wrapper">
                    <select value={location} onChange={(e) => setLocation(e.target.value)} className="eval-select">
                      <option value="Région de L'Érable">Région de L'Érable</option>
                      <option value="Ville de Plessisville">Ville de Plessisville</option>
                      <option value="Ville de Princeville">Ville de Princeville</option>
                      <option value="Notre-Dame-de-Lourdes">Notre-Dame-de-Lourdes</option>
                      <option value="Saint-Ferdinand">Saint-Ferdinand</option>
                      <option value="Sainte-Sophie-d'Halifax">Sainte-Sophie-d'Halifax</option>
                      <option value="Inverness">Inverness</option>
                      <option value="Laurierville">Laurierville</option>
                      <option value="Lyster">Lyster</option>
                      <option value="Villeroy">Villeroy</option>
                      <option value="Autre région du Québec">Autre région du Québec</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#1e293b' }}>
                    Code postal <span style={{ color: '#e11d48' }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="eval-input"
                    placeholder="G6L 1A1"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                  />
                  <span style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px', display: 'block' }}>Format: A1A 1A1</span>
                </div>
              </div>

              {/* 3. Secteur d'activité & 4. Taille (ONLY for NON-Citizen Actors) */}
              {profile !== 'citizen' && (
                <>
                  <div className="form-section-title" style={{ marginTop: '24px' }}>3. Secteur d'activité</div>
                  <div className="eval-field" style={{ marginTop: '12px' }}>
                    <div className="select-wrapper">
                      <select value={sector} onChange={(e) => setSector(e.target.value)} className="eval-select">
                        <option value="agriculture">Agriculture &amp; Agroalimentaire</option>
                        <option value="foresterie">Foresterie &amp; Transformation du bois</option>
                        <option value="batiment">Bâtiments, Construction &amp; Génie</option>
                        <option value="transport">Transport, Logistique &amp; Équipements</option>
                        <option value="commerce">Commerce, Restauration &amp; Services</option>
                        <option value="manufacturier">Manufacturier, Transformation &amp; Industrie</option>
                        <option value="education">Éducation, Recherche &amp; Culture</option>
                        <option value="sante">Santé &amp; Services sociaux</option>
                        <option value="administration">Administration, Collectivité &amp; Municipal</option>
                        <option value="obnl">OBNL, Association &amp; Communautaire</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-section-title" style={{ marginTop: '24px' }}>4. Taille de l'organisation <span style={{ color: '#e11d48' }}>*</span></div>
                  <div className="org-size-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '12px' }}>
                    {[
                      { id: 'small', title: 'Petite', desc: '< 20 personnes' },
                      { id: 'medium', title: 'Moyenne', desc: '20-100 personnes' },
                      { id: 'large', title: 'Grande', desc: '> 100 personnes' }
                    ].map(item => (
                      <div 
                        key={item.id} 
                        className={`org-size-card ${orgSize === item.id ? 'active' : ''}`}
                        onClick={() => setOrgSize(item.id)}
                      >
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="step-actions" style={{ marginTop: '32px' }}>
                <button className="btn-eval-next" onClick={() => setStep(2)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Énergie */}
          {step === 2 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_energy.png" alt="Énergie" className="illus-step-img" />
              </div>
              <h2 className="step-question">Énergie et bâtiments</h2>
              <p className="step-hint">L'énergie des bâtiments est un poste clé de la transition.</p>

              <div className="eval-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Consommation d'électricité annuelle (kWh) : {energyKwh} kWh
                  </label>
                  <input 
                    type="range" 
                    min="2000" 
                    max="50000" 
                    step="1000" 
                    value={energyKwh} 
                    onChange={(e) => setEnergyKwh(Number(e.target.value))} 
                    style={{ width: '100%' }} 
                  />
                </div>

                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Source principale de chauffage :</label>
                  <div className="select-wrapper">
                    <select value={heatingType} onChange={(e) => setHeatingType(e.target.value)} className="eval-select">
                      <option value="hydro">Électricité (Hydro-Québec / Thermopompe)</option>
                      <option value="gas">Gaz naturel</option>
                      <option value="oil">Mazout / Biomasse</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="step-actions">
                <button className="btn-eval-back-step" onClick={() => setStep(1)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(3)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Mobilité */}
          {step === 3 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_mobility.png" alt="Mobilité" className="illus-step-img" />
              </div>
              <h2 className="step-question">Transports et déplacements</h2>
              <p className="step-hint">Évaluez vos kilomètres parcourus et vos modes de transport.</p>

              <div className="eval-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Kilométrage annuel en voiture : {kmCar.toLocaleString()} km
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max="40000" 
                    step="1000" 
                    value={kmCar} 
                    onChange={(e) => setKmCar(Number(e.target.value))} 
                    style={{ width: '100%' }} 
                  />
                </div>

                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Type de véhicule principal :</label>
                  <div className="select-wrapper">
                    <select value={carType} onChange={(e) => setCarType(e.target.value)} className="eval-select">
                      <option value="gasoline">Essence / Diesel</option>
                      <option value="hybrid">Hybride (PHEV)</option>
                      <option value="electric">100% Électrique (VE)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="step-actions">
                <button className="btn-eval-back-step" onClick={() => setStep(2)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(4)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Consommation */}
          {step === 4 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_consumption.png" alt="Consommation" className="illus-step-img" />
              </div>
              <h2 className="step-question">Alimentation et consommation</h2>
              <p className="step-hint">Vos choix de consommation influencent les émissions indirectes.</p>

              <div className="eval-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Régime alimentaire habituel :</label>
                  <div className="select-wrapper">
                    <select value={dietType} onChange={(e) => setDietType(e.target.value)} className="eval-select">
                      <option value="balanced">Équilibré (Viande modérée &amp; produits locaux)</option>
                      <option value="meat">Riche en viande rouge &amp; transformée</option>
                      <option value="vegan">Végétarien / Végétalien</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="step-actions">
                <button className="btn-eval-back-step" onClick={() => setStep(3)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(5)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Actions */}
          {step === 5 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_actions.png" alt="Actions" className="illus-step-img" />
              </div>
              <h2 className="step-question">Actions et engagements écologiques</h2>
              <p className="step-hint">Sélectionnez les initiatives déjà en place ou planifiées.</p>

              <div className="actions-checklist" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { key: 'heatPump', label: 'Thermopompe haute efficacité installée' },
                  { key: 'compost', label: 'Compostage des résidus organiques' },
                  { key: 'localFood', label: 'Approvisionnement local (MRC de L\'Érable)' },
                  { key: 'treePlanting', label: 'Plantation d\'arbres / Reboisement' },
                  { key: 'solar', label: 'Panneaux solaires ou énergie renouvelable' }
                ].map(item => (
                  <label 
                    key={item.key} 
                    className="action-check-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 18px',
                      background: actions[item.key] ? '#f0fdf4' : '#ffffff',
                      border: `1.5px solid ${actions[item.key] ? '#059669' : '#e2e8f0'}`,
                      borderRadius: '14px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: actions[item.key] ? '#047857' : '#1e293b'
                    }}
                  >
                    <input 
                      type="checkbox" 
                      checked={actions[item.key]} 
                      onChange={() => toggleAction(item.key)} 
                      style={{ width: '18px', height: '18px', accentColor: '#059669' }}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>

              <div className="step-actions">
                <button className="btn-eval-back-step" onClick={() => setStep(4)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-calculate" onClick={() => setStep(6)}>
                  Calculer mes résultats <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Results */}
          {step === 6 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_results.png" alt="Résultats" className="illus-step-img" />
              </div>
              
              <div className="results-header-text">
                <h2 className="step-question">Bilan GES et plan d'action personnalisé</h2>
                <p className="step-hint">Voici l'estimation de votre empreinte environnementale annuelle.</p>
              </div>

              <div className="results-summary-card" style={{ background: '#0f172a', color: '#ffffff', padding: '24px', borderRadius: '20px', marginBottom: '24px', textIndent: 0 }}>
                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-neon-yellow)', fontWeight: 700 }}>
                  Empreinte Totale Estimée
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 800, margin: '8px 0', fontFamily: 'var(--font-heading)', color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  {netTotal} <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#94a3b8' }}>tCO₂e / an</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0 }}>
                  Par rapport à la moyenne québécoise (≈ 9.2 tCO₂e/pers), votre bilan affiche un profil responsable.
                </p>
              </div>

              {/* Tabs */}
              <div className="results-tabs" style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <button 
                  className={`btn-tab ${activeTab === 'breakdown' ? 'active' : ''}`}
                  onClick={() => setActiveTab('breakdown')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    background: activeTab === 'breakdown' ? '#059669' : '#f1f5f9',
                    color: activeTab === 'breakdown' ? '#ffffff' : '#64748b',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Détail par poste
                </button>
                <button 
                  className={`btn-tab ${activeTab === 'recom' ? 'active' : ''}`}
                  onClick={() => setActiveTab('recom')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    background: activeTab === 'recom' ? '#059669' : '#f1f5f9',
                    color: activeTab === 'recom' ? '#ffffff' : '#64748b',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Recommandations MRC
                </button>
              </div>

              {activeTab === 'breakdown' ? (
                <div className="breakdown-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="breakdown-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: '#f8fafc', borderRadius: '12px' }}>
                    <span>⚡ Énergie &amp; Chauffage</span>
                    <strong>{energyVal} tCO₂e</strong>
                  </div>
                  <div className="breakdown-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: '#f8fafc', borderRadius: '12px' }}>
                    <span>🚗 Transports &amp; Véhicule</span>
                    <strong>{mobilityVal} tCO₂e</strong>
                  </div>
                  <div className="breakdown-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: '#f8fafc', borderRadius: '12px' }}>
                    <span>🥗 Alimentation &amp; Consommation</span>
                    <strong>{dietVal} tCO₂e</strong>
                  </div>
                  {offsets > 0 && (
                    <div className="breakdown-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: '#f0fdf4', color: '#047857', borderRadius: '12px' }}>
                      <span>🌱 Compensations &amp; Actions</span>
                      <strong>-{offsets} tCO₂e</strong>
                    </div>
                  )}
                </div>
              ) : (
                <div className="recom-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ padding: '14px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', fontSize: '0.9rem', color: '#065f46' }}>
                    <strong>1. Subvention Thermopompe MRC</strong> : Bénéficiez des aides locales pour optimiser le chauffage de votre bâtiment.
                  </div>
                  <div style={{ padding: '14px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', fontSize: '0.9rem', color: '#065f46' }}>
                    <strong>2. Programme de compostage municipal</strong> : Réduisez de 30% le poids de vos bacs de résidus ultimes.
                  </div>
                </div>
              )}

              <div className="results-actions" style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(5)}>
                  <ArrowLeft size={16} /> Modifier
                </button>
                <button className="btn-results-home" onClick={onBackHome} style={{ background: '#059669', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 20px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Terminer l'évaluation
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: AI Environmental Assistant */}
        <div className="eval-ai-sidebar">
          <div className="ai-chat-card">
            <div className="ai-chat-header">
              <div className="ai-status-dot" />
              <span>CONSEILLER ENVIRONNEMENTAL IA</span>
            </div>

            <div className="ai-chat-body">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`ai-msg ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="ai-quick-prompts">
              <button onClick={() => handleSendMessage("Comment réduire mon chauffage ?")}>Réduire mon chauffage</button>
              <button onClick={() => handleSendMessage("Quelles sont les infos sur la MRC ?")}>Infos sur la MRC</button>
            </div>

            <div className="ai-chat-input-row">
              <input 
                type="text" 
                placeholder="Poser une question..." 
                value={chatInput} 
                onChange={(e) => setChatInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
              />
              <button onClick={() => handleSendMessage()} className="btn-send-ai">
                <Send size={16} />
              </button>
            </div>

            <div className="ai-score-preview">
              <span className="score-val">{netTotal}</span>
              <span className="score-unit">tCO₂e / an (Net)</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
