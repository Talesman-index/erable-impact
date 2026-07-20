import React, { useState, useEffect } from 'react';
import { 
  User, Users, Building, GraduationCap, MapPin, 
  Zap, BarChart2, Microscope, MessageSquare, Truck, ShoppingBag, Leaf, Award, 
  ArrowLeft, ArrowRight, X, Send, Download, FileText, Info, ChevronRight, ChevronDown, CheckCircle2, RefreshCw, HelpCircle, Bot, Sparkles, Lightbulb, Car, Trees, Factory, Wheat, Cpu, ShieldCheck, Ticket, Calendar, HeartPulse, Palette, Utensils, Smile, Flame, Sun, Droplets, BookOpen, Layers
} from 'lucide-react';

export default function EvaluationView({ onBackHome }) {
  // Navigation & Configuration State
  const [step, setStep] = useState(0); 
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' | 'imperial'
  const [showDetailedInfo, setShowDetailedInfo] = useState(false);

  // Target Scope State (Organisation vs Événement)
  const [evalTarget, setEvalTarget] = useState('organisation'); 

  // Profile & Location State
  const [profile, setProfile] = useState('citizen'); 
  const [location, setLocation] = useState('Région de L\'Érable');
  const [postalCode, setPostalCode] = useState('G6L 1A1');
  const [sector, setSector] = useState('education'); // 12 Sectors from Structuration Spec
  const [orgSize, setOrgSize] = useState('small'); 
  
  // Event Specific State
  const [eventType, setEventType] = useState('conference'); 
  const [eventParticipants, setEventParticipants] = useState(50);
  const [eventDays, setEventDays] = useState(2);
  const [eventVenueType, setEventVenueType] = useState('salle_communautaire'); 
  const [eventFormat, setEventFormat] = useState('presentiel'); 
  const [eventCateringType, setEventCateringType] = useState('traiteur_local'); 
  const [eventReusableTableware, setEventReusableTableware] = useState(true);
  const [eventAvgDistanceKm, setEventAvgDistanceKm] = useState(35);

  // Level & Mode State (TogetherSense Framework)
  const [detailLevel, setDetailLevel] = useState('level1'); 
  const [evalMode, setEvalMode] = useState('form'); 

  // ==========================================
  // ALL 12 SECTORS FIELDS (STRUCTURATION SPEC)
  // ==========================================
  
  // GLOBAL COMMON FIELDS
  const [energyBillDollars, setEnergyBillDollars] = useState(2400); 
  const [heatingType, setHeatingType] = useState('hydro'); 
  const [kmCar, setKmCar] = useState(12000);
  const [carType, setCarType] = useState('gasoline'); 
  const [dietType, setDietType] = useState('balanced'); 
  const [surfaceM2, setSurfaceM2] = useState(250);
  const [buildingCount, setBuildingCount] = useState(1);
  const [buildDecade, setBuildDecade] = useState('2000s');
  const [energyKwh, setEnergyKwh] = useState(22000); 
  const [heatingFuelAmount, setHeatingFuelAmount] = useState(1500); 

  // 1. ÉDUCATION
  const [eduType, setEduType] = useState('ecole_secondaire'); // primary, secondary, cegep, uni, private, etc.
  const [eduStudentsCount, setEduStudentsCount] = useState(450);
  const [eduStaffCount, setEduStaffCount] = useState(40);
  const [eduBusCount, setEduBusCount] = useState(6);
  const [eduBusKmTotal, setEduBusKmTotal] = useState(45000);
  const [eduCateringType, setEduCateringType] = useState('cantine_interne');
  const [eduHasDel, setEduHasDel] = useState(true);
  const [eduHasEcoProgram, setEduHasEcoProgram] = useState(true);
  const [eduHasVeBus, setEduHasVeBus] = useState(false);
  const [eduVeggieDaysPerWeek, setEduVeggieDaysPerWeek] = useState(1);
  const [eduHasPoolOrGym, setEduHasPoolOrGym] = useState(true);

  // 2. ENVIRONNEMENT & FORESTERIE
  const [envOrgType, setEnvOrgType] = useState('bassin_versant');
  const [envStaffCount, setEnvStaffCount] = useState(8);
  const [envVolunteersCount, setEnvVolunteersCount] = useState(35);
  const [envInterventionHa, setEnvInterventionHa] = useState(250);
  const [envFleetCount, setEnvFleetCount] = useState(3);
  const [envTreesPlantedPerYear, setEnvTreesPlantedPerYear] = useState(1500);
  const [envRiverRestoredMeters, setEnvRiverRestoredMeters] = useState(400);

  // 3. AGRICULTURE & ÉRABLIÈRE
  const [agriProdTypes, setAgriProdTypes] = useState(['laitiere', 'erabliere']);
  const [agriHa, setAgriHa] = useState(65); 
  const [agriForestHa, setAgriForestHa] = useState(45);
  const [agriLivestockCount, setAgriLivestockCount] = useState(55); 
  const [agriFertilizerKg, setAgriFertilizerKg] = useState(1200); 
  const [agriDieselLiters, setAgriDieselLiters] = useState(3200); 
  const [agriTapsCount, setAgriTapsCount] = useState(4000); 
  const [agriManureMgmt, setAgriManureMgmt] = useState('composte');

  // 4. SANTÉ & SERVICES SOCIAUX
  const [healthType, setHealthType] = useState('clinique');
  const [healthStaffCount, setHealthStaffCount] = useState(25);
  const [healthPatientsPerYear, setHealthPatientsPerYear] = useState(3500);
  const [healthAmbulancesCount, setHealthAmbulancesCount] = useState(2);
  const [healthBiomedicalWasteKg, setHealthBiomedicalWasteKg] = useState(450);
  const [healthTeleconsultationPct, setHealthTeleconsultationPct] = useState(30);

  // 5. JEUNESSE & LOISIRS
  const [youthServedPerYear, setYouthServedPerYear] = useState(600);
  const [youthAnimatorsCount, setYouthAnimatorsCount] = useState(18);
  const [youthOutingsKm, setYouthOutingsKm] = useState(8500);
  const [youthEquipmentReusePct, setYouthEquipmentReusePct] = useState(70);

  // 6. COMMUNAUTAIRE & OBNL (CDC L'ÉRABLE)
  const [commMembersCount, setCommMembersCount] = useState(120);
  const [commMissionKm, setCommMissionKm] = useState(6500);
  const [commActivitiesPerYear, setCommActivitiesPerYear] = useState(24);

  // 7. AIDE ALIMENTAIRE & BANQUE ALIMENTAIRE
  const [foodHelpPeopleServed, setFoodHelpPeopleServed] = useState(850);
  const [foodDistributionsPerYear, setFoodDistributionsPerYear] = useState(52);
  const [foodTonsDistributed, setFoodTonsDistributed] = useState(45);
  const [foodSavedKgPerYear, setFoodSavedKgPerYear] = useState(18000);
  const [foodRefrigUnits, setFoodRefrigUnits] = useState(5);

  // 8. RESTAURATION & COMMERCE
  const [restoCoversPerDay, setRestoCoversPerDay] = useState(120);
  const [restoLocalFoodPct, setRestoLocalFoodPct] = useState(55);
  const [restoFoodWasteCompostedPct, setRestoFoodWasteCompostedPct] = useState(80);

  // 9. ART, CULTURE & SPECTACLES
  const [artVisitorsPerYear, setArtVisitorsPerYear] = useState(4500);
  const [artEventsPerYear, setArtEventsPerYear] = useState(14);
  const [artScenographyReusePct, setArtScenographyReusePct] = useState(75);

  // 10. POLITIQUE & MUNICIPALITÉS
  const [muniPopulation, setMuniPopulation] = useState(3200);
  const [muniPublicBuildingsCount, setMuniPublicBuildingsCount] = useState(5);
  const [muniStreetLightingDelPct, setMuniStreetLightingDelPct] = useState(90);

  // 11. PME, INDUSTRIE & TRANSFORMATION
  const [pmeEmployees, setPmeEmployees] = useState(16);
  const [pmeFreightKm, setPmeFreightKm] = useState(12500);
  const [pmeProcessKwh, setPmeProcessKwh] = useState(45000);

  // 12. CITOYEN & MÉNAGES
  const [citizenHouseholdSize, setCitizenHouseholdSize] = useState(3);
  const [citizenHousingType, setCitizenHousingType] = useState('maison_unifamiliale');

  // ACTIONS POSITIVES GLOBAL
  const [treesPlanted, setTreesPlanted] = useState(25);
  const [actions, setActions] = useState({
    heatPump: true,
    compost: true,
    localFood: true,
    treePlanting: true,
    solar: false,
    greenElectricity: true
  });

  // CONVERSATIONAL MODE STATE
  const [convStepIndex, setConvStepIndex] = useState(0);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('breakdown');

  // CALCULATION ENGINE ACCORDING TO STRUCTURATION SPEC
  const calcScope1 = () => {
    let s1 = 0;
    if (heatingType === 'oil') s1 += (heatingFuelAmount * 2.7) / 1000;
    else if (heatingType === 'gas') s1 += (heatingFuelAmount * 1.9) / 1000;
    
    s1 += (kmCar * 0.00019);
    
    if (sector === 'education') {
      s1 += (eduBusCount * 3.5);
    } else if (sector === 'agriculture') {
      s1 += (agriLivestockCount * 1.2) + (agriFertilizerKg * 0.005) + (agriDieselLiters * 0.0027);
    } else if (sector === 'sante') {
      s1 += (healthAmbulancesCount * 4.2) + (healthBiomedicalWasteKg * 0.0015);
    } else if (sector === 'aide_alimentaire' || sector === 'pme') {
      s1 += (pmeFreightKm * 0.00028);
    }
    return parseFloat(s1.toFixed(2));
  };

  const calcScope2 = () => {
    let kwh = detailLevel === 'level1' ? energyBillDollars * 7.5 : energyKwh;
    if (sector === 'pme') kwh += pmeProcessKwh;
    let s2 = (kwh * 0.0013) / 1000;
    return parseFloat(s2.toFixed(2));
  };

  const calcScope3 = () => {
    let s3 = 0;
    if (dietType === 'vegan') s3 += 1.2;
    else if (dietType === 'balanced') s3 += 2.2;
    else if (dietType === 'meat') s3 += 3.5;

    s3 *= (1 - (restoLocalFoodPct * 0.002));

    if (sector === 'education') {
      s3 += (eduStudentsCount * 0.15) + (eduStaffCount * 0.25);
    } else if (sector === 'art') {
      s3 += (artVisitorsPerYear * 0.003);
    }
    return parseFloat(s3.toFixed(2));
  };

  const calcSequestration = () => {
    let seq = 0;
    seq += treesPlanted * 0.025;
    if (sector === 'environnement') seq += (envInterventionHa * 0.5) + (envTreesPlantedPerYear * 0.025);
    if (sector === 'agriculture') seq += (agriForestHa * 0.8) + (agriTapsCount * 0.002);
    if (sector === 'aide_alimentaire') seq += (foodSavedKgPerYear * 0.0012); // Émissions évitées via détournement gaspillage
    if (actions.heatPump) seq += 1.8;
    if (actions.compost) seq += 0.5;
    return parseFloat(seq.toFixed(2));
  };

  const scope1Val = calcScope1();
  const scope2Val = calcScope2();
  const scope3Val = calcScope3();
  const sequestrationVal = calcSequestration();

  const grossTotal = parseFloat((scope1Val + scope2Val + scope3Val).toFixed(2));
  const netTotal = Math.max(0.1, parseFloat((grossTotal - sequestrationVal).toFixed(2)));

  const maxSteps = 7;

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
              <span className={`step-pill ${step === 0 ? 'active' : step > 0 ? 'done' : ''}`} onClick={() => setStep(0)}>Accueil</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`} onClick={() => setStep(1)}>Secteur &amp; Profil</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`} onClick={() => setStep(2)}>Niveau</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`} onClick={() => setStep(3)}>Énergie</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 4 ? 'active' : step > 4 ? 'done' : ''}`} onClick={() => setStep(4)}>Transports</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 5 ? 'active' : step > 5 ? 'done' : ''}`} onClick={() => setStep(5)}>Secteur ({sector})</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === maxSteps ? 'active' : ''}`} onClick={() => setStep(maxSteps)}>Résultats</span>
            </div>
            <span className="mobile-step-counter">Étape {step} sur {maxSteps}</span>
          </div>

          <div className="eval-header-actions">
            <span className="eval-user-badge" style={{ background: '#f0fdf4', color: '#059669', border: '1px solid #bbf7d0', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Building size={14} />
              {sector.toUpperCase()} • {detailLevel === 'level1' ? 'Niveau 1 (Basique)' : detailLevel === 'level2' ? 'Niveau 2 (Intermédiaire)' : 'Niveau 3 (Avancé)'}
            </span>
            <button onClick={onBackHome} className="btn-eval-back">
              <X size={16} /> Quitter
            </button>
          </div>
        </div>

        <div className="eval-global-progress">
          <div className="eval-global-fill" style={{ width: `${(step / maxSteps) * 100}%` }} />
        </div>
      </header>

      {/* Main Layout */}
      <main className={`eval-main ${step === 0 ? 'onboarding-main' : ''}`}>
        <div className="eval-wizard-panel" style={{ width: '100%' }}>
          {/* STEP 0: Onboarding */}
          {step === 0 && (
            <div className="eval-step active onboarding-step-view">
              <div className="onboarding-header">
                <h2>Évaluation d'empreinte carbone (12 Secteurs Structurés)</h2>
                <p>Cadre d'évaluation en 3 Niveaux conforme au guide de la MRC de L'Érable.</p>
              </div>

              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <button type="button" className="btn-onboarding-start" onClick={() => setStep(1)}>
                  Commencer l'évaluation sectorielle
                </button>
              </div>
            </div>
          )}

          {/* STEP 1: Profil & Choix parmi les 12 Secteurs de la Spécification */}
          {step === 1 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_profile.png" alt="Profil" className="illus-step-img" />
              </div>
              <h2 className="step-question">Sélection du Secteur d'Activité &amp; Profil</h2>
              <p className="step-hint">Choisissez précisément votre secteur pour charger les questions de la spécification.</p>

              {/* 1. Type d'acteur */}
              <div className="form-section-title">1. Type d'acteur</div>
              <div className="profile-choice-grid select-5-columns">
                {[
                  { id: 'citizen', title: 'Citoyen', desc: 'Ménages & logement.', icon: User },
                  { id: 'organisation', title: 'Organisation', desc: 'OBNL & associations.', icon: Users },
                  { id: 'company', title: 'Entreprise / PME', desc: 'Opérations & commerce.', icon: Building },
                  { id: 'institution', title: 'Institution', desc: 'Écoles, hôpitaux.', icon: GraduationCap },
                  { id: 'municipality', title: 'Collectivité', desc: 'Villes & MRC.', icon: MapPin }
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

              {/* 2. Choix parmi les 12 Secteurs Complètement Structurés */}
              <div className="form-section-title" style={{ marginTop: '24px' }}>2. Secteur d'activité spécifique (12 Secteurs du Guide)</div>
              <div className="eval-field" style={{ marginTop: '12px' }}>
                <div className="select-wrapper">
                  <select value={sector} onChange={(e) => setSector(e.target.value)} className="eval-select">
                    <option value="education">1. ÉDUCATION (Écoles primaires, secondaires, Cégep, Universités)</option>
                    <option value="environnement">2. ENVIRONNEMENT &amp; FORESTERIE (Conservation, bassins versants, forêt)</option>
                    <option value="agriculture">3. AGRICULTURE &amp; ÉRABLIÈRE (43% emplois L'Érable, bétail, machinerie)</option>
                    <option value="sante">4. SANTÉ &amp; SERVICES SOCIAUX (Hôpitaux, cliniques, déchets biomédicaux)</option>
                    <option value="jeunesse">5. JEUNESSE &amp; LOISIRS (Camps, animateurs, équipements sportifs)</option>
                    <option value="communautaire">6. COMMUNAUTAIRE &amp; OBNL (CDC de L'Érable, bénévoles)</option>
                    <option value="aide_alimentaire">7. AIDE ALIMENTAIRE (Banques alimentaires, frigos, antigaspillage)</option>
                    <option value="restauration">8. RESTAURATION &amp; COMMERCE (Cuisines, approvisionnement local)</option>
                    <option value="art">9. ART, CULTURE &amp; SPECTACLES (Événements, décors scéniques)</option>
                    <option value="politique">10. POLITIQUE &amp; MUNICIPALITÉS (Éclairage public, bâtiments publics)</option>
                    <option value="pme">11. PME, INDUSTRIE &amp; TRANSFORMATION (Procédés, fret, emballages)</option>
                    <option value="citoyen">12. CITOYEN &amp; MÉNAGES (Logement, voiture, tri et consommation)</option>
                  </select>
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '32px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(0)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(2)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Choix du Niveau de Collecte (Niveau 1 Basique, Niveau 2 Intermédiaire, Niveau 3 Avancé) */}
          {step === 2 && (
            <div className="eval-step active detail-level-step-view">
              <div className="onboarding-header">
                <h2>Choisissez votre niveau de collecte pour le secteur [{sector.toUpperCase()}]</h2>
                <p>Conforme aux 3 niveaux de la structuration officielle.</p>
              </div>

              <div className="detail-level-grid">
                {[
                  {
                    id: 'level1',
                    title: 'Niveau 1 — Basique',
                    duration: '5–10 min',
                    desc: 'Données globales simples pour un portrait rapide et premières actions positives',
                    icon: Zap,
                    color: '#f59e0b'
                  },
                  {
                    id: 'level2',
                    title: 'Niveau 2 — Intermédiaire',
                    duration: '30–45 min',
                    desc: 'Collecte quantifiée des flux, de la mobilité modale et du compost',
                    icon: BarChart2,
                    color: '#059669'
                  },
                  {
                    id: 'level3',
                    title: 'Niveau 3 — Avancé / Expert',
                    duration: '1h30–3h (ISO 14064)',
                    desc: 'Bilan GES quasi exhaustif, analyses de sol, carnets de bord et ACV',
                    icon: Microscope,
                    color: '#6366f1'
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = detailLevel === item.id;
                  return (
                    <div 
                      key={item.id} 
                      className={`detail-level-card ${isSelected ? 'active' : ''}`}
                      onClick={() => setDetailLevel(item.id)}
                    >
                      <div className="level-card-icon" style={{ color: item.color }}>
                        <Icon size={28} />
                      </div>
                      <h3>{item.title}</h3>
                      <span className="level-duration-tag">{item.duration}</span>
                      <p>{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(1)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(3)}>
                  Remplir les questions {detailLevel.toUpperCase()} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: QUESTIONS STRUCTURÉES PAR SECTEUR (12 SECTEURS & 3 NIVEAUX) */}
          {step === 5 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_actions.png" alt="Secteur" className="illus-step-img" />
              </div>
              <h2 className="step-question">
                Données Spécifiques : {sector.toUpperCase()} ({detailLevel === 'level1' ? 'Niveau 1 Basique' : detailLevel === 'level2' ? 'Niveau 2 Intermédiaire' : 'Niveau 3 Avancé'})
              </h2>

              {/* DYNAMIC FORM CARDS FOR THE 12 SECTORS */}
              <div className="form-card-group">
                {sector === 'education' && (
                  <>
                    <div className="form-card-header">
                      <div className="form-card-title">
                        <div className="form-card-title-icon"><BookOpen size={18} /></div>
                        <span>Secteur Éducation — {detailLevel.toUpperCase()}</span>
                      </div>
                      <span className="form-card-badge">Établissements Scolaires</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Type d'institution :</label>
                        <select className="eval-select" value={eduType} onChange={(e) => setEduType(e.target.value)}>
                          <option value="ecole_primaire">École primaire</option>
                          <option value="ecole_secondaire">École secondaire</option>
                          <option value="cegep">Cégep</option>
                          <option value="cfp">Centre de formation professionnelle (CFP)</option>
                          <option value="universite">Université</option>
                          <option value="ecole_privee">École privée</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Nombre d'élèves/étudiants :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={eduStudentsCount} onChange={(e) => setEduStudentsCount(Number(e.target.value))} />
                          <span className="unit-chip">élèves</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Nombre d'autobus scolaires :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={eduBusCount} onChange={(e) => setEduBusCount(Number(e.target.value))} />
                          <span className="unit-chip">autobus</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Type de restauration :</label>
                        <select className="eval-select" value={eduCateringType} onChange={(e) => setEduCateringType(e.target.value)}>
                          <option value="aucune">Aucune restauration</option>
                          <option value="cantine_interne">Cantine / Cafétéria interne</option>
                          <option value="traiteur_externe">Traiteur externe</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {sector === 'agriculture' && (
                  <>
                    <div className="form-card-header">
                      <div className="form-card-title">
                        <div className="form-card-title-icon"><Wheat size={18} /></div>
                        <span>Secteur Agriculture &amp; Érablière — {detailLevel.toUpperCase()}</span>
                      </div>
                      <span className="form-card-badge" style={{ background: '#f0fdf4', color: '#065f46' }}>MRC L'Érable</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Superficie agricole exploitée :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={agriHa} onChange={(e) => setAgriHa(Number(e.target.value))} />
                          <span className="unit-chip">ha</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Entailles d'érablière :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={agriTapsCount} onChange={(e) => setAgriTapsCount(Number(e.target.value))} />
                          <span className="unit-chip">entailles</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Carburant diesel machinerie :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={agriDieselLiters} onChange={(e) => setAgriDieselLiters(Number(e.target.value))} />
                          <span className="unit-chip">L/an</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Engrais azotés minéraux :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={agriFertilizerKg} onChange={(e) => setAgriFertilizerKg(Number(e.target.value))} />
                          <span className="unit-chip">kg N/an</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {sector === 'aide_alimentaire' && (
                  <>
                    <div className="form-card-header">
                      <div className="form-card-title">
                        <div className="form-card-title-icon"><Utensils size={18} /></div>
                        <span>Aide Alimentaire &amp; Banques Alimentaires — {detailLevel.toUpperCase()}</span>
                      </div>
                      <span className="form-card-badge">Antigaspillage</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Aliments sauvés de la décharge :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={foodSavedKgPerYear} onChange={(e) => setFoodSavedKgPerYear(Number(e.target.value))} />
                          <span className="unit-chip">kg/an</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Nombre d'unités réfrigérées / frigos :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={foodRefrigUnits} onChange={(e) => setFoodRefrigUnits(Number(e.target.value))} />
                          <span className="unit-chip">unités</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(4)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-calculate" onClick={() => setStep(maxSteps)}>
                  Calculer mes résultats sectoriels <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 & 4 GENERICS FOR THE STEPS FLOW */}
          {step >= 3 && step < 5 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_energy.png" alt="Énergie" className="illus-step-img" />
              </div>
              <h2 className="step-question">
                {step === 3 ? 'Données d\'Énergie & Bâtiments' : 'Déplacements & Logistique'} ({sector.toUpperCase()})
              </h2>

              <div className="form-card-group">
                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Facture énergétique globale :</label>
                  <div className="input-unit-wrap">
                    <input type="number" className="eval-input" value={energyBillDollars} onChange={(e) => setEnergyBillDollars(Number(e.target.value))} />
                    <span className="unit-chip">$ CAD</span>
                  </div>
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(step - 1)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(step + 1)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* LAST STEP: RÉSULTATS */}
          {step === maxSteps && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_results.png" alt="Résultats" className="illus-step-img" />
              </div>

              <div className="results-header-text">
                <h2 className="step-question">Bilan GES — {sector.toUpperCase()} ({detailLevel.toUpperCase()})</h2>
                <p className="step-hint">Calcul conforme au cadre de collecte officielle de la MRC de L'Érable.</p>
              </div>

              <div className="results-summary-card" style={{ background: '#0f172a', color: '#ffffff', padding: '28px', borderRadius: '24px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#34d399', fontWeight: 800 }}>
                  EMPREINTE TOTALE NETTE ESTIMÉE
                </div>
                <div style={{ fontSize: '3.2rem', fontWeight: 800, margin: '8px 0', fontFamily: 'var(--font-heading)', color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  {netTotal} <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#94a3b8' }}>tCO₂e / an</span>
                </div>
              </div>

              <div className="results-actions" style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(0)}>
                  <ArrowLeft size={16} /> Nouvelle Évaluation
                </button>
                <button className="btn-results-home" onClick={onBackHome} style={{ background: '#059669', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: 700, cursor: 'pointer' }}>
                  Terminer
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
