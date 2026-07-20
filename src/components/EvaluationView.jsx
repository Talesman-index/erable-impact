import React, { useState } from 'react';
import { 
  User, Users, Building, GraduationCap, MapPin, 
  Zap, Truck, ShoppingBag, Leaf, Award, 
  ArrowLeft, ArrowRight, X, Send, Download, FileText
} from 'lucide-react';

export default function EvaluationView({ onBackHome }) {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState('citizen');
  const [sector, setSector] = useState('agriculture');
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

              <div className="form-section-title" style={{ marginTop: '24px' }}>2. Secteur d'activité</div>
              <div className="eval-field" style={{ marginTop: 0 }}>
                <div className="select-wrapper">
                  <select value={sector} onChange={(e) => setSector(e.target.value)} className="eval-select">
                    <option value="agriculture">Agriculture & Agroalimentaire</option>
                    <option value="education">Éducation & Recherche</option>
                    <option value="health">Santé & Services sociaux</option>
                    <option value="environment">Environnement & Conservation</option>
                    <option value="community">Communautaire & Action sociale</option>
                  </select>
                </div>
              </div>

              <div className="step-actions">
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
                  <select value={heatingType} onChange={(e) => setHeatingType(e.target.value)} className="eval-select">
                    <option value="hydro">Hydroélectricité / Plinthes électriques</option>
                    <option value="heatpump">Thermopompe haute efficacité</option>
                    <option value="oil">Chauffage au mazout (Fioul)</option>
                    <option value="gas">Gaz naturel</option>
                    <option value="wood">Bois de chauffage certifié</option>
                  </select>
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
              <h2 className="step-question">Transports et mobilité</h2>
              <p className="step-hint">La mobilité est souvent le premier poste d'émissions en milieu rural.</p>

              <div className="eval-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Kilométrage annuel en voiture : {kmCar.toLocaleString()} km/an
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
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Motorisation du véhicule :</label>
                  <select value={carType} onChange={(e) => setCarType(e.target.value)} className="eval-select">
                    <option value="gasoline">Essence (standard)</option>
                    <option value="diesel">Diesel</option>
                    <option value="hybrid">Hybride</option>
                    <option value="electric">100% Électrique (EV)</option>
                  </select>
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
              <p className="step-hint">Vos choix alimentaires et de gestion des déchets influencent votre bilan.</p>

              <div className="eval-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Régime alimentaire habituel :</label>
                  <select value={dietType} onChange={(e) => setDietType(e.target.value)} className="eval-select">
                    <option value="balanced">Équilibré (viande 2-4x/semaine)</option>
                    <option value="meat">Riche en viande rouge</option>
                    <option value="flexitarian">Flexitarien (viande occasionnelle)</option>
                    <option value="vegan">Végétalien / Végétarien</option>
                  </select>
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

          {/* STEP 5: Actions Positives */}
          {step === 5 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_seedling.png" alt="Actions" className="illus-step-img" />
              </div>
              <h2 className="step-question">Vos actions positives pour le territoire</h2>
              <p className="step-hint">Cochez les gestes concrètement mis en œuvre pour réduire ou séquestrer du carbone.</p>

              <div className="actions-checklist-grid" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                {[
                  { key: 'heatPump', label: 'Thermopompe / Chauffage électrique efficace' },
                  { key: 'localFood', label: 'Achats locaux et de saison dans la MRC de L\'Érable' },
                  { key: 'compost', label: 'Compostage domestique ou bac brun municipal' },
                  { key: 'treePlanting', label: 'Plantation d\'arbres / Reboisement sur terrain' },
                  { key: 'solar', label: 'Panneaux solaires ou énergie renouvelable d\'appoint' }
                ].map(act => (
                  <label key={act.key} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={actions[act.key]} 
                      onChange={() => toggleAction(act.key)} 
                    />
                    <span style={{ fontWeight: 500 }}>{act.label}</span>
                  </label>
                ))}
              </div>

              <div className="step-actions">
                <button className="btn-eval-back-step" onClick={() => setStep(4)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-calculate" onClick={() => setStep(6)}>
                  Calculer mon empreinte
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Results Cockpit */}
          {step === 6 && (
            <div className="eval-step active">
              <div className="results-header">
                <img src="/images/illus_results.png" alt="Résultats" className="illus-results-img" />
                <div className="results-header-text">
                  <h2 style={{ margin: 0, padding: 0, lineHeight: 1.25 }}>Votre cockpit environnemental</h2>
                  <p style={{ margin: '6px 0 0 0', padding: 0, color: 'var(--color-muted)', fontSize: '0.95rem' }}>Consultez votre bilan et pilotez vos progrès en temps réel.</p>
                </div>
              </div>

              <div className="results-score-card">
                <div className="score-gauge-wrap">
                  <svg className="score-gauge-svg" viewBox="0 0 120 120">
                    <circle className="gauge-track" cx="60" cy="60" r="50" fill="transparent" strokeWidth="10" />
                    <circle className="gauge-arc" cx="60" cy="60" r="50" fill="transparent" strokeWidth="10" strokeDasharray="314.16" strokeDashoffset={314 - (netTotal / 15) * 314} />
                  </svg>
                  <div className="score-center">
                    <span className="score-number">{netTotal}</span>
                    <span className="score-unit">tCO₂e/an</span>
                  </div>
                </div>

                <div className="score-context">
                  <div className="context-row">
                    <span className="context-label">Profil d'acteur</span>
                    <span className="context-value" style={{ textTransform: 'capitalize' }}>{profile}</span>
                  </div>
                  <div className="context-row">
                    <span className="context-label">Facteurs nets</span>
                    <span className="context-value" style={{ fontWeight: 700 }}>
                      {grossTotal} t Brut / <span style={{ color: '#059669' }}>-{offsets} t Offsets</span>
                    </span>
                  </div>
                  <div className="context-row">
                    <span className="context-label">Comparatif régional</span>
                    <span className="context-value positive">-18 % sous la moyenne MRC</span>
                  </div>
                </div>
              </div>

              {/* Tabs Nav */}
              <div className="dashboard-tabs-nav">
                <button className={`dashboard-tab-btn ${activeTab === 'breakdown' ? 'active' : ''}`} onClick={() => setActiveTab('breakdown')}>Répartition</button>
                <button className={`dashboard-tab-btn ${activeTab === 'actions' ? 'active' : ''}`} onClick={() => setActiveTab('actions')}>Plan d'action</button>
              </div>

              {activeTab === 'breakdown' && (
                <div className="results-breakdown" style={{ marginTop: '20px' }}>
                  <h3 className="breakdown-heading" style={{ marginBottom: '12px' }}>Répartition par poste</h3>
                  
                  <div className="breakdown-row">
                    <div className="breakdown-row-label">Énergie & Bâtiments</div>
                    <div className="breakdown-row-bar-wrap">
                      <div className="breakdown-bar-fill emerald" style={{ width: `${Math.min(100, (energyVal / grossTotal) * 100)}%` }} />
                    </div>
                    <span className="breakdown-val">{energyVal} t</span>
                  </div>

                  <div className="breakdown-row">
                    <div className="breakdown-row-label">Transports & Mobilité</div>
                    <div className="breakdown-row-bar-wrap">
                      <div className="breakdown-bar-fill amber" style={{ width: `${Math.min(100, (mobilityVal / grossTotal) * 100)}%` }} />
                    </div>
                    <span className="breakdown-val">{mobilityVal} t</span>
                  </div>

                  <div className="breakdown-row">
                    <div className="breakdown-row-label">Alimentation & Déchets</div>
                    <div className="breakdown-row-bar-wrap">
                      <div className="breakdown-bar-fill emerald" style={{ width: `${Math.min(100, (dietVal / grossTotal) * 100)}%` }} />
                    </div>
                    <span className="breakdown-val">{dietVal} t</span>
                  </div>
                </div>
              )}

              {activeTab === 'actions' && (
                <div style={{ marginTop: '20px' }}>
                  <h3 style={{ marginBottom: '12px' }}>Plan d'action personnalisé</h3>
                  <p className="step-hint">Sélectionnez les gestes pour recalculer immédiatement votre potentiel.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                    {Object.entries(actions).map(([key, val]) => (
                      <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '8px', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                        <input type="checkbox" checked={val} onChange={() => toggleAction(key)} />
                        <span>Engagement : {key}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="results-actions" style={{ marginTop: '24px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(5)}>
                  <ArrowLeft size={16} /> Modifier mes réponses
                </button>
                <button className="btn-results-home" onClick={() => alert('Exportation PDF en cours...')} style={{ background: '#0f172a', color: 'white' }}>
                  <FileText size={16} /> Exporter PDF
                </button>
                <button className="btn-results-home" onClick={onBackHome}>
                  Retour à l'accueil
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Live Advisor */}
        <aside className="eval-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-live-badge">
              <span className="live-dot" />
              Conseiller Environnemental IA
            </div>

            <div className="eval-sidebar-chat-layout" style={{ marginTop: '16px' }}>
              <div className="chat-container-new" style={{ maxHeight: '220px', overflowY: 'auto' }}>
                {chatMessages.map((m, idx) => (
                  <div key={idx} className={`chat-msg-new ${m.sender}`}>
                    {m.text}
                  </div>
                ))}
              </div>

              <div className="chat-suggestions-new" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', margin: '12px 0' }}>
                <button className="chat-suggest-btn-new" onClick={() => handleSendMessage('Réduire mon chauffage')}>Réduire mon chauffage</button>
                <button className="chat-suggest-btn-new" onClick={() => handleSendMessage('Infos sur la MRC')}>Infos sur la MRC</button>
              </div>

              <div className="chat-input-row-new">
                <input 
                  type="text" 
                  className="chat-input-new" 
                  placeholder="Poser une question..."
                  value={chatInput} 
                  onChange={(e) => setChatInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={() => handleSendMessage()} className="chat-send-btn-new" aria-label="Envoyer">
                  <Send size={14} />
                </button>
              </div>
            </div>

            <div className="sidebar-score-block" style={{ marginTop: '20px' }}>
              <div className="sidebar-score-number">{netTotal}</div>
              <div className="sidebar-score-label">tCO₂e / an (Net)</div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
