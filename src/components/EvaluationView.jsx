import React, { useState, useEffect } from 'react';
import { 
  User, Users, Building, GraduationCap, MapPin, 
  Zap, BarChart2, Microscope, MessageSquare, Truck, ShoppingBag, Leaf, Award, 
  ArrowLeft, ArrowRight, X, Send, Download, FileText, Info, ChevronRight, ChevronDown, CheckCircle2, RefreshCw, HelpCircle, Bot, Sparkles, Lightbulb, Car, Trees, Factory, Wheat, Cpu, ShieldCheck
} from 'lucide-react';

export default function EvaluationView({ onBackHome }) {
  // Navigation & Configuration State
  const [step, setStep] = useState(0); 
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' | 'imperial'
  const [showDetailedInfo, setShowDetailedInfo] = useState(false);
  const [showAdvancedParams, setShowAdvancedParams] = useState(false);

  // Profile State
  const [profile, setProfile] = useState('citizen'); // 'citizen' | 'organisation' | 'company' | 'institution' | 'municipality'
  const [location, setLocation] = useState('Région de L\'Érable');
  const [postalCode, setPostalCode] = useState('G6L 1A1');
  const [sector, setSector] = useState('agriculture');
  const [orgSize, setOrgSize] = useState('small'); // 'small' | 'medium' | 'large'
  
  // Level & Mode State (TogetherSense Framework)
  const [detailLevel, setDetailLevel] = useState('level1'); // 'level1' (Rapide 5m) | 'level2' (Détaillé 15-30m) | 'level3' (Expert 1h+)
  const [evalMode, setEvalMode] = useState('form'); // 'conversational' | 'form'

  // ==========================================
  // ENRICHED FORM DATA (ALL 3 LEVELS & SECTORS)
  // ==========================================
  
  // LEVEL 1 FIELDS
  const [energyBillDollars, setEnergyBillDollars] = useState(2400); 
  const [heatingType, setHeatingType] = useState('hydro'); // 'hydro' | 'gas' | 'oil' | 'biomass'
  const [kmCar, setKmCar] = useState(12000);
  const [carType, setCarType] = useState('gasoline'); 
  const [dietType, setDietType] = useState('balanced'); 
  const [wasteBasicTri, setWasteBasicTri] = useState(true);

  // LEVEL 2 FIELDS (Détaillé)
  const [surfaceM2, setSurfaceM2] = useState(180);
  const [buildingCount, setBuildingCount] = useState(1);
  const [buildDecade, setBuildDecade] = useState('2000s');
  const [energyKwh, setEnergyKwh] = useState(18000); 
  const [heatingFuelAmount, setHeatingFuelAmount] = useState(1500); 
  const [acUnitsCount, setAcUnitsCount] = useState(1);
  const [greenElectricityPct, setGreenElectricityPct] = useState(20);
  const [retroFitSavingsKwh, setRetroFitSavingsKwh] = useState(1500);

  const [workDaysWeek, setWorkDaysWeek] = useState(5);
  const [dailyCommuteKm, setDailyCommuteKm] = useState(24);
  const [fleetCount, setFleetCount] = useState(2);
  const [fleetFuelType, setFleetFuelType] = useState('diesel');
  const [staffTravelCount, setStaffTravelCount] = useState(4);
  const [staffTravelAvgKm, setStaffTravelAvgKm] = useState(350);
  const [teleworkKmSaved, setTeleworkKmSaved] = useState(1200);

  const [localFoodPct, setLocalFoodPct] = useState(40);
  const [bioFoodPct, setBioFoodPct] = useState(25);
  const [annualMealsCount, setAnnualMealsCount] = useState(12000);
  const [foodWastePct, setFoodWastePct] = useState(10);
  const [paperReams, setPaperReams] = useState(14);
  const [wasteCompostKg, setWasteCompostKg] = useState(150);
  const [wasteRecycleKg, setWasteRecycleKg] = useState(320);

  // LEVEL 3 FIELDS (Expert ISO/Bilan Carbone)
  const [specializedKwh, setSpecializedKwh] = useState(6500); 
  const [solarOnsiteKwh, setSolarOnsiteKwh] = useState(1200); 
  const [freightKm, setFreightKm] = useState(4500); 
  const [freightVehicleType, setFreightVehicleType] = useState('semi');
  const [equipmentRenewalYears, setEquipmentRenewalYears] = useState(4); 
  const [furnitureReusePct, setFurnitureReusePct] = useState(35);
  const [landfillWasteKg, setLandfillWasteKg] = useState(450);
  const [hazardousWasteKg, setHazardousWasteKg] = useState(30);

  // SECTOR-SPECIFIC FIELDS (Agriculture, Érablières & Éducation)
  const [agriHa, setAgriHa] = useState(50); 
  const [agriForestHa, setAgriForestHa] = useState(35); 
  const [agriLivestockCount, setAgriLivestockCount] = useState(45); 
  const [agriFertilizerKg, setAgriFertilizerKg] = useState(800); 
  const [agriDieselLiters, setAgriDieselLiters] = useState(2500); 
  const [agriTapsCount, setAgriTapsCount] = useState(3000); 

  // Actions Positives & Séquestration Carbone
  const [treesPlanted, setTreesPlanted] = useState(20);
  const [actions, setActions] = useState({
    heatPump: true,
    compost: true,
    localFood: true,
    treePlanting: true,
    solar: false,
    greenElectricity: true,
    smartThermostats: true
  });

  // CONVERSATIONAL MODE STATE
  const [convStepIndex, setConvStepIndex] = useState(0);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('breakdown');

  // Conversational Questions Engine
  const getConversationalQuestions = () => {
    const questions = [];

    questions.push({
      id: 'heating',
      text: `Bonjour ! Initions l'évaluation pour votre profil [${profile === 'citizen' ? 'Citoyen' : profile}]. Quelle est la source principale de chauffage de vos installations dans la MRC de L'Érable ?`,
      options: [
        { label: 'Électricité (Hydro-Québec / Thermopompe)', value: 'hydro' },
        { label: 'Gaz naturel', value: 'gas' },
        { label: 'Mazout (Huile)', value: 'oil' },
        { label: 'Biomasse / Bois local de L\'Érable', value: 'biomass' }
      ],
      field: 'heatingType'
    });

    if (detailLevel === 'level1') {
      questions.push({
        id: 'energy_bill',
        text: "Niveau 1 (Rapide) : Quel est le montant approximatif de votre facture énergétique annuelle globale ($ CAD) ?",
        options: [
          { label: 'Moins de 1 500 $', value: 1200 },
          { label: '1 500 $ à 3 000 $', value: 2400 },
          { label: '3 000 $ à 6 000 $', value: 4500 },
          { label: 'Plus de 6 000 $', value: 8000 }
        ],
        field: 'energyBillDollars'
      });
    } else {
      questions.push({
        id: 'surface',
        text: `Niveau ${detailLevel === 'level2' ? '2 (Détaillé)' : '3 (Expert)'} : Quelle est la superficie totale occupée (en m²) et le nombre de bâtiments ?`,
        options: [
          { label: 'Moins de 100 m² (1 bâtiment)', value: 80 },
          { label: '100 m² à 300 m²', value: 200 },
          { label: '300 m² à 1000 m²', value: 650 },
          { label: 'Plus de 1000 m² (Sites multiples)', value: 1800 }
        ],
        field: 'surfaceM2'
      });

      if (detailLevel === 'level3') {
        questions.push({
          id: 'specialized_power',
          text: "Niveau 3 (Expert) : Possédez-vous des équipements à forte intensité énergétique (serveurs informatiques, cuisines commerciales, laboratoires, séchoirs à bois) ?",
          options: [
            { label: 'Non ou très faible', value: 1000 },
            { label: 'Modéré (1-2 serveurs / petite cuisine)', value: 6500 },
            { label: 'Élevé (Salle de serveurs / procédé industriel)', value: 22000 }
          ],
          field: 'specializedKwh'
        });
      }
    }

    questions.push({
      id: 'car_km',
      text: "Quel est le kilométrage annuel effectué en véhicule automobile principal ?",
      options: [
        { label: 'Moins de 5 000 km', value: 4000 },
        { label: '5 000 à 15 000 km', value: 10000 },
        { label: '15 000 à 25 000 km', value: 20000 },
        { label: 'Plus de 25 000 km', value: 32000 }
      ],
      field: 'kmCar'
    });

    if (detailLevel !== 'level1' && profile !== 'citizen') {
      questions.push({
        id: 'fleet',
        text: "Combien de véhicules (autos de service, autobus scolaires, camionnettes) compose votre flotte ?",
        options: [
          { label: '1 à 2 véhicules', value: 2 },
          { label: '3 à 8 véhicules', value: 5 },
          { label: 'Plus de 8 véhicules', value: 14 }
        ],
        field: 'fleetCount'
      });
    }

    questions.push({
      id: 'local_food',
      text: "Quelle est la part d'approvisionnement en produits régionaux (MRC de L'Érable / Centre-du-Québec) ?",
      options: [
        { label: 'Faible (< 20%)', value: 15 },
        { label: 'Moyenne (20% à 50%)', value: 35 },
        { label: 'Élevée (> 50% circuits courts)', value: 65 }
      ],
      field: 'localFoodPct'
    });

    if (sector === 'agriculture' && profile !== 'citizen') {
      questions.push({
        id: 'agri_details',
        text: "Secteur Agricole / Érablière : Quelle est votre superficie cultivée (ha) et le nombre de têtes de bétail ?",
        options: [
          { label: '< 25 ha / 15 bovins', value: 20 },
          { label: '25 à 75 ha / 45 bovins', value: 50 },
          { label: '> 75 ha / Érablière > 3000 entailles', value: 110 }
        ],
        field: 'agriHa'
      });
    }

    questions.push({
      id: 'trees',
      text: "Combien d'arbres avez-vous plantés ou gérez-vous en reboisement forestier dans la MRC de L'Érable ?",
      options: [
        { label: 'Aucun pour le moment', value: 0 },
        { label: '1 à 15 arbres', value: 10 },
        { label: '15 à 50 arbres', value: 30 },
        { label: 'Plus de 50 arbres / Boisé géré', value: 120 }
      ],
      field: 'treesPlanted'
    });

    return questions;
  };

  useEffect(() => {
    if (evalMode === 'conversational' && step === 3) {
      const qList = getConversationalQuestions();
      setConvStepIndex(0);
      setChatMessages([
        { 
          sender: 'ai', 
          text: qList[0].text,
          options: qList[0].options,
          field: qList[0].field
        }
      ]);
    }
  }, [evalMode, step, detailLevel, profile, sector]);

  const handleConversationalAnswer = (option) => {
    const qList = getConversationalQuestions();
    const currentQ = qList[convStepIndex];

    if (currentQ.field === 'heatingType') setHeatingType(option.value);
    if (currentQ.field === 'energyBillDollars') setEnergyBillDollars(option.value);
    if (currentQ.field === 'surfaceM2') setSurfaceM2(option.value);
    if (currentQ.field === 'specializedKwh') setSpecializedKwh(option.value);
    if (currentQ.field === 'kmCar') setKmCar(option.value);
    if (currentQ.field === 'fleetCount') setFleetCount(option.value);
    if (currentQ.field === 'localFoodPct') setLocalFoodPct(option.value);
    if (currentQ.field === 'agriHa') setAgriHa(option.value);
    if (currentQ.field === 'treesPlanted') setTreesPlanted(option.value);

    const updatedMessages = [
      ...chatMessages,
      { sender: 'user', text: option.label }
    ];

    const nextIndex = convStepIndex + 1;
    if (nextIndex < qList.length) {
      setConvStepIndex(nextIndex);
      setTimeout(() => {
        setChatMessages([
          ...updatedMessages,
          { 
            sender: 'ai', 
            text: qList[nextIndex].text,
            options: qList[nextIndex].options,
            field: qList[nextIndex].field
          }
        ]);
      }, 400);
    } else {
      setConvStepIndex(nextIndex);
      setTimeout(() => {
        setChatMessages([
          ...updatedMessages,
          { 
            sender: 'ai', 
            text: "Merci ! Votre évaluation conversationnelle est terminée. Cliquez ci-dessous pour consulter votre bilan GES et votre plan d'action !",
            isComplete: true
          }
        ]);
      }, 500);
    }
  };

  // CALCULATION MODEL
  const calcScope1 = () => {
    let s1 = 0;
    if (heatingType === 'oil') s1 += (heatingFuelAmount * 2.7) / 1000;
    else if (heatingType === 'gas') s1 += (heatingFuelAmount * 1.9) / 1000;
    
    if (carType === 'gasoline') s1 += (kmCar * 0.00019);
    else if (carType === 'hybrid') s1 += (kmCar * 0.00011);
    
    if (detailLevel !== 'level1') {
      s1 += (fleetCount * 1.8);
    }

    if (sector === 'agriculture' && profile !== 'citizen') {
      s1 += (agriLivestockCount * 1.2) + (agriFertilizerKg * 0.005) + (agriDieselLiters * 0.0027);
    }

    return parseFloat(s1.toFixed(2));
  };

  const calcScope2 = () => {
    let kwh = detailLevel === 'level1' ? energyBillDollars * 7.5 : energyKwh;
    if (detailLevel === 'level3') kwh += specializedKwh;
    let s2 = (kwh * 0.0013) / 1000;
    return parseFloat(s2.toFixed(2));
  };

  const calcScope3 = () => {
    let s3 = 0;
    if (dietType === 'vegan') s3 += 1.2;
    else if (dietType === 'balanced') s3 += 2.2;
    else if (dietType === 'meat') s3 += 3.5;

    s3 *= (1 - (localFoodPct * 0.002));

    const commuteKmAnnual = workDaysWeek * dailyCommuteKm * 46;
    s3 += (commuteKmAnnual * 0.00012);

    if (detailLevel !== 'level1') {
      s3 += (paperReams * 0.004);
      if (detailLevel === 'level3') {
        s3 += (freightKm * 0.00028) + (landfillWasteKg * 0.0008);
      }
    }

    return parseFloat(s3.toFixed(2));
  };

  const calcSequestration = () => {
    let seq = 0;
    seq += treesPlanted * 0.025;
    if (actions.heatPump) seq += 1.8;
    if (actions.compost) seq += (wasteCompostKg * 0.0005);
    if (actions.solar) seq += (solarOnsiteKwh * 0.0005) + 0.8;
    return parseFloat(seq.toFixed(2));
  };

  const scope1Val = calcScope1();
  const scope2Val = calcScope2();
  const scope3Val = calcScope3();
  const sequestrationVal = calcSequestration();

  const grossTotal = parseFloat((scope1Val + scope2Val + scope3Val).toFixed(2));
  const netTotal = Math.max(0.1, parseFloat((grossTotal - sequestrationVal).toFixed(2)));

  const handleSendMessage = (msg) => {
    const query = msg || chatInput;
    if (!query.trim()) return;

    const newMsgs = [...chatMessages, { sender: 'user', text: query }];
    setChatMessages(newMsgs);
    setChatInput('');

    setTimeout(() => {
      let reply = "L'hydroélectricité québécoise est à 95% propre (≈ 1.3g CO₂e/kWh), ce qui réduit votre Scope 2 à un niveau très bas.";
      if (query.toLowerCase().includes('mrc') || query.toLowerCase().includes('stat')) {
        reply = "La MRC de L'Érable compte 10 municipalités et 24 457 habitants. 60% du territoire est couvert de forêts et 31% est agricole.";
      } else if (query.toLowerCase().includes('chauffage') || query.toLowerCase().includes('thermopompe')) {
        reply = "Remplacer un chauffage au mazout par une thermopompe électrique dans L'Érable permet d'éviter jusqu'à 2.7 tCO₂e/an.";
      } else if (query.toLowerCase().includes('arbre') || query.toLowerCase().includes('forêt')) {
        reply = "Chaque arbre adulte planté dans la MRC de L'Érable séquestre environ 25 kg de CO₂e par an.";
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  const toggleAction = (key) => {
    setActions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getMaxSteps = () => {
    if (evalMode === 'conversational') return 4;
    if (detailLevel === 'level1') return 5;
    if (detailLevel === 'level2') return 6;
    return 7; 
  };

  const maxSteps = getMaxSteps();

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
              <span className={`step-pill ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`} onClick={() => setStep(1)}>Profil</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`} onClick={() => setStep(2)}>Détail &amp; Mode</span>
              <span className="step-pill-sep">→</span>
              
              {evalMode === 'conversational' ? (
                <span className={`step-pill ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`} onClick={() => setStep(3)}>Audit IA Chat</span>
              ) : (
                <>
                  <span className={`step-pill ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`} onClick={() => setStep(3)}>Énergie</span>
                  <span className="step-pill-sep">→</span>
                  <span className={`step-pill ${step === 4 ? 'active' : step > 4 ? 'done' : ''}`} onClick={() => setStep(4)}>Mobilité</span>
                  <span className="step-pill-sep">→</span>
                  <span className={`step-pill ${step === 5 ? 'active' : step > 5 ? 'done' : ''}`} onClick={() => setStep(5)}>Consommation</span>
                  {detailLevel === 'level3' && (
                    <>
                      <span className="step-pill-sep">→</span>
                      <span className={`step-pill ${step === 6 ? 'active' : step > 6 ? 'done' : ''}`} onClick={() => setStep(6)}>Expert &amp; Secteur</span>
                    </>
                  )}
                </>
              )}
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === maxSteps ? 'active' : ''}`} onClick={() => setStep(maxSteps)}>Résultats</span>
            </div>
            <span className="mobile-step-counter">Étape {step} sur {maxSteps}</span>
          </div>

          <div className="eval-header-actions">
            <span className="eval-user-badge" style={{ background: '#f0fdf4', color: '#059669', border: '1px solid #bbf7d0', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {detailLevel === 'level1' ? <Zap size={14} /> : detailLevel === 'level2' ? <BarChart2 size={14} /> : <Microscope size={14} />}
              {detailLevel === 'level1' ? 'Rapide (5m)' : detailLevel === 'level2' ? 'Détaillé (15-30m)' : 'Expert (1h+)'} • {evalMode === 'conversational' ? 'Conversationnel' : 'Formulaire'}
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
      <main className={`eval-main ${step === 0 || evalMode === 'conversational' ? 'onboarding-main' : ''}`}>
        <div className="eval-wizard-panel" style={{ width: '100%' }}>
          {/* STEP 0: Onboarding / Informations à préparer */}
          {step === 0 && (
            <div className="eval-step active onboarding-step-view">
              <div className="onboarding-header">
                <h2>Évaluation de l'empreinte carbone</h2>
                <p>Commencez par sélectionner votre profil pour personnaliser l'évaluation</p>
              </div>

              {/* Card 1: Unité de mesure */}
              <div className="unit-measure-card">
                <div className="unit-measure-left">
                  <div className="unit-title-row">
                    <strong>Unité de mesure</strong>
                    <Info size={16} className="unit-info-icon" title="Par défaut, les analyses sont en mode métrique." />
                  </div>
                  <p>Par défaut, les analyses sont en mode métrique.</p>
                </div>
                <div className="unit-toggle-buttons">
                  <button 
                    type="button"
                    className={`btn-unit ${unitSystem === 'metric' ? 'active' : ''}`}
                    onClick={() => setUnitSystem('metric')}
                  >
                    Métrique
                  </button>
                  <button 
                    type="button"
                    className={`btn-unit ${unitSystem === 'imperial' ? 'active' : ''}`}
                    onClick={() => setUnitSystem('imperial')}
                  >
                    Impérial
                  </button>
                </div>
              </div>

              {/* Card 2: Informations à préparer */}
              <div className="prep-info-box">
                <h3 className="prep-title">Informations à préparer</h3>
                <p className="prep-subtitle">
                  Pas besoin de tout avoir dès le début : commencez avec l'essentiel. Vous pourrez compléter plus tard.
                </p>

                {/* 3 Quick Prep Cards */}
                <div className="prep-quick-grid">
                  <div className="prep-quick-card">
                    <span className="prep-card-tag">ÉNERGIE</span>
                    <h4>Factures énergie</h4>
                    <p>Électricité, gaz, fioul/mazout.</p>
                  </div>

                  <div className="prep-quick-card">
                    <span className="prep-card-tag">BÂTIMENT</span>
                    <h4>Superficies</h4>
                    <p>Surface des bâtiments/locaux.</p>
                  </div>

                  <div className="prep-quick-card">
                    <span className="prep-card-tag">MOBILITÉ</span>
                    <h4>Kilométrage</h4>
                    <p>Véhicules et déplacements principaux.</p>
                  </div>
                </div>

                {/* Collapsible Accordion Button */}
                <div className="prep-accordion-wrap">
                  <button 
                    type="button"
                    className="btn-prep-toggle"
                    onClick={() => setShowDetailedInfo(!showDetailedInfo)}
                  >
                    <span className="arrow-icon">{showDetailedInfo ? '▼' : '▶'}</span>
                    <span>Voir les informations utiles pour une analyse détaillée</span>
                  </button>

                  {showDetailedInfo && (
                    <div className="prep-detailed-content">
                      <ul>
                        <li><strong>Périmètre</strong> : sites concernés, année de référence, type d'activité.</li>
                        <li><strong>Bâtiments</strong> : nombre de bâtiments, année de construction, taux d'occupation.</li>
                        <li><strong>Chauffage / ECS / climatisation</strong> : type d'équipements, consommation, fuites de réfrigérants.</li>
                        <li><strong>Mobilité avancée</strong> : domicile-travail, déplacements professionnels, train/avion, télétravail.</li>
                        <li><strong>Logistique / fret</strong> : distances de transport de matériel, type de véhicule.</li>
                        <li><strong>Alimentation</strong> : nombre de repas, part locale, gaspillage alimentaire.</li>
                        <li><strong>Achats et immobilisations</strong> : équipements, numérique, mobilier, durée de vie.</li>
                        <li><strong>Déchets</strong> : quantités recyclées, compostées, incinérées, enfouies.</li>
                        <li><strong>Eau</strong> : consommation annuelle et eau chaude.</li>
                        <li><strong>Indicateurs d'activité</strong> : effectifs, usagers/clients, jours d'ouverture.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Onboarding Steps Timeline */}
              <div className="onboarding-steps-preview">
                <div className="step-preview-item">
                  <div className="preview-num active">1</div>
                  <div className="preview-text">
                    <strong>Sélection du profil</strong>
                    <span>Type, secteur, localisation</span>
                  </div>
                </div>

                <div className="step-preview-item">
                  <div className="preview-num">2</div>
                  <div className="preview-text">
                    <strong>Questions</strong>
                    <span>Collecte des données</span>
                  </div>
                </div>

                <div className="step-preview-item">
                  <div className="preview-num">3</div>
                  <div className="preview-text">
                    <strong>Résultats</strong>
                    <span>Visualisation et analyse</span>
                  </div>
                </div>

                <div className="step-preview-item">
                  <div className="preview-num">4</div>
                  <div className="preview-text">
                    <strong>Plan d'action</strong>
                    <span>Recommandations et export</span>
                  </div>
                </div>
              </div>

              {/* Start Button */}
              <div className="onboarding-actions" style={{ marginTop: '28px', textAlign: 'center' }}>
                <button type="button" className="btn-onboarding-start" onClick={() => setStep(1)}>
                  Commencer
                </button>
              </div>
            </div>
          )}

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

              {/* 2. Localisation / Région & Code Postal */}
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
                        <option value="agriculture">Agriculture &amp; Agroalimentaire (43% MRC L'Érable)</option>
                        <option value="foresterie">Foresterie &amp; Transformation du bois (60% Forêt)</option>
                        <option value="batiment">Bâtiments, Construction &amp; Génie</option>
                        <option value="transport">Transport, Logistique &amp; Équipements</option>
                        <option value="commerce">Commerce, Restauration &amp; Services</option>
                        <option value="manufacturier">Manufacturier, Transformation &amp; Industrie</option>
                        <option value="education">Éducation, Recherche &amp; Culture</option>
                        <option value="sante">Santé &amp; Services sociaux</option>
                        <option value="administration">Administration, Collectivité &amp; Municipal</option>
                        <option value="obnl">OBNL, Association &amp; Communautaire (CDC)</option>
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
                <button className="btn-eval-back-step" onClick={() => setStep(0)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(2)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Choix du Niveau de Détail & Mode de réponse */}
          {step === 2 && (
            <div className="eval-step active detail-level-step-view">
              <div className="onboarding-header">
                <h2>Choisissez votre niveau de détail</h2>
                <p>Sélectionnez le niveau qui correspond à votre disponibilité et à vos besoins.</p>
              </div>

              {/* 3 Level Cards Grid */}
              <div className="detail-level-grid">
                {[
                  {
                    id: 'level1',
                    title: 'Niveau 1 - Rapide',
                    duration: '5 min (4-5 questions)',
                    desc: 'Questions minimales pour une empreinte initiale rapide',
                    icon: Zap,
                    color: '#f59e0b'
                  },
                  {
                    id: 'level2',
                    title: 'Niveau 2 - Détaillé',
                    duration: '15-30 min (12-15 questions)',
                    desc: 'Collecte approfondie (surface m², kWh, flotte, compost, % local)',
                    icon: BarChart2,
                    color: '#059669'
                  },
                  {
                    id: 'level3',
                    title: 'Niveau 3 - Expert',
                    duration: '1h+ (Exhaustif Bilan GES)',
                    desc: 'Bilan ISO 14064 (fret, serveurs, bilans sectoriels & déchets)',
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

              {/* Mode Switcher: Conversationnel vs Formulaire */}
              <div className="eval-mode-toggle-container">
                <div className="eval-mode-toggle-bar">
                  <button
                    type="button"
                    className={`btn-mode-toggle ${evalMode === 'conversational' ? 'active' : ''}`}
                    onClick={() => setEvalMode('conversational')}
                  >
                    <MessageSquare size={18} />
                    <span>Conversationnel (IA Guidée)</span>
                  </button>

                  <button
                    type="button"
                    className={`btn-mode-toggle ${evalMode === 'form' ? 'active' : ''}`}
                    onClick={() => setEvalMode('form')}
                  >
                    <FileText size={18} />
                    <span>Formulaire</span>
                  </button>
                </div>
              </div>

              <div className="detail-level-actions">
                {!detailLevel ? (
                  <div className="level-prompt-banner">
                    Veuillez d'abord sélectionner un niveau de détail ci-dessus.
                  </div>
                ) : (
                  <div className="step-actions" style={{ marginTop: '28px' }}>
                    <button className="btn-eval-back-step" onClick={() => setStep(1)}>
                      <ArrowLeft size={16} /> Retour
                    </button>
                    <button className="btn-eval-next" onClick={() => setStep(3)}>
                      Commencer en Mode {evalMode === 'conversational' ? 'Conversationnel (IA)' : 'Formulaire'} <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* MODE CONVERSATIONNEL INTERACTIF */}
          {evalMode === 'conversational' && step === 3 && (
            <div className="eval-step active conversational-audit-view" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="conv-hero-header" style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#059669', padding: '6px 16px', borderRadius: '9999px', fontWeight: 700, fontSize: '0.85rem', marginBottom: '12px' }}>
                  <Bot size={18} />
                  Audit Interactif IA — Niveau {detailLevel === 'level1' ? '1 (Rapide)' : detailLevel === 'level2' ? '2 (Détaillé)' : '3 (Expert)'}
                </div>
                <h2>Conseiller Environnemental IA</h2>
                <p>Répondez aux questions ci-dessous. Votre bilan GES s'actualise en temps réel.</p>
              </div>

              <div className="conv-chat-card" style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '24px', padding: '24px', boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}>
                <div className="conv-messages-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`conv-msg-bubble ${msg.sender === 'user' ? 'conv-user' : 'conv-ai'}`} style={{
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '85%',
                      background: msg.sender === 'user' ? '#059669' : '#f8fafc',
                      color: msg.sender === 'user' ? '#ffffff' : '#0f172a',
                      padding: '16px 20px',
                      borderRadius: '18px',
                      border: msg.sender === 'user' ? 'none' : '1px solid #e2e8f0',
                      fontSize: '0.95rem',
                      lineHeight: '1.5'
                    }}>
                      <div style={{ fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px', color: msg.sender === 'user' ? '#a7f3d0' : '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {msg.sender === 'user' ? 'Vous' : <><Bot size={14} /> Conseiller IA ERABLE GES</>}
                      </div>
                      <p style={{ margin: 0, color: msg.sender === 'user' ? '#ffffff' : '#0f172a', fontWeight: msg.sender === 'user' ? 600 : 400 }}>{msg.text}</p>

                      {msg.options && (
                        <div className="conv-options-grid" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
                          {msg.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              type="button"
                              className="btn-conv-option"
                              onClick={() => handleConversationalAnswer(opt)}
                            >
                              <span>{opt.label}</span>
                              <ChevronRight size={18} />
                            </button>
                          ))}
                        </div>
                      )}

                      {msg.isComplete && (
                        <button
                          type="button"
                          className="btn-eval-next"
                          onClick={() => setStep(4)}
                          style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
                        >
                          Voir mes résultats et recommandations <ArrowRight size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: '#0f172a', color: '#ffffff', padding: '16px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase' }}>Estimation en direct</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{netTotal} tCO₂e / an</div>
                  </div>
                  <button className="btn-change-mode-dark" onClick={() => setStep(2)}>
                    <ArrowLeft size={16} /> Changer de mode
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MODE FORMULAIRE ULTRA-RICHE (STEP 3: Énergie & Bâtiment) */}
          {evalMode === 'form' && step === 3 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_energy.png" alt="Énergie" className="illus-step-img" />
              </div>
              <h2 className="step-question">Énergie et Infrastructure Immobilière</h2>
              <p className="step-hint">Niveau de collecte : {detailLevel === 'level1' ? 'Niveau 1 Rapide' : detailLevel === 'level2' ? 'Niveau 2 Détaillé' : 'Niveau 3 Expert Bilan Carbone'}</p>

              {/* CARD GROUP 1: Périmètre Bâtiment */}
              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Building size={18} /></div>
                    <span>1. Caractéristiques de l'Infrastructure</span>
                  </div>
                  <span className="form-card-badge">Périmètre Immobilier</span>
                </div>

                {detailLevel === 'level1' ? (
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Facture énergétique annuelle globale ($ CAD) :
                    </label>
                    <div className="input-unit-wrap">
                      <input 
                        type="number" 
                        className="eval-input"
                        value={energyBillDollars} 
                        onChange={(e) => setEnergyBillDollars(Number(e.target.value))} 
                      />
                      <span className="unit-chip">$ CAD</span>
                    </div>
                    
                    <div className="form-callout-banner">
                      <Lightbulb size={18} className="form-callout-icon" />
                      <div>
                        <strong>Conversion Intelligente :</strong> Votre facture correspond à environ <strong>{(energyBillDollars * 7.5).toLocaleString()} kWh</strong> d'électricité sur le tarif moyen d'Hydro-Québec.
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                          Superficie chauffée / occupée :
                        </label>
                        <div className="input-unit-wrap">
                          <input 
                            type="number"
                            className="eval-input"
                            value={surfaceM2}
                            onChange={(e) => setSurfaceM2(Number(e.target.value))}
                          />
                          <span className="unit-chip">m²</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                          Nombre de bâtiments / sites :
                        </label>
                        <div className="input-unit-wrap">
                          <input 
                            type="number"
                            className="eval-input"
                            value={buildingCount}
                            onChange={(e) => setBuildingCount(Number(e.target.value))}
                          />
                          <span className="unit-chip">site(s)</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                          Décennie de construction :
                        </label>
                        <select className="eval-select" value={buildDecade} onChange={(e) => setBuildDecade(e.target.value)}>
                          <option value="pre1980">Avant 1980 (Faible isolation)</option>
                          <option value="1980-2000">1980 - 2000 (Standard)</option>
                          <option value="2000s">2000 à aujourd'hui (Haute performance)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                          Consommation électrique réelle :
                        </label>
                        <div className="input-unit-wrap">
                          <input 
                            type="number"
                            className="eval-input"
                            value={energyKwh}
                            onChange={(e) => setEnergyKwh(Number(e.target.value))}
                          />
                          <span className="unit-chip">kWh/an</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* CARD GROUP 2: Source de Chauffage en Tuiles Visuelles */}
              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Zap size={18} /></div>
                    <span>2. Énergie de Chauffage Principal</span>
                  </div>
                  <span className="form-card-badge">Scope 1 &amp; Scope 2</span>
                </div>

                <div className="tile-option-grid">
                  {[
                    { id: 'hydro', title: 'Hydro-Québec / Thermopompe', subtitle: 'Propre (1.3g CO₂/kWh)' },
                    { id: 'gas', title: 'Gaz naturel', subtitle: 'Combustion fossile 1.9 kg/m³' },
                    { id: 'oil', title: 'Mazout (Huile)', subtitle: 'Élevé 2.7 kg/Litre' },
                    { id: 'biomass', title: 'Biomasse Bois L\'Érable', subtitle: 'Ressource forestière locale' }
                  ].map(opt => (
                    <div 
                      key={opt.id} 
                      className={`tile-option-card ${heatingType === opt.id ? 'active' : ''}`}
                      onClick={() => setHeatingType(opt.id)}
                    >
                      <span className="tile-option-title">{opt.title}</span>
                      <span className="tile-option-subtitle">{opt.subtitle}</span>
                    </div>
                  ))}
                </div>

                {(heatingType === 'gas' || heatingType === 'oil') && (
                  <div className="form-group" style={{ marginTop: '16px' }}>
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Volume annuel consommé ({heatingType === 'gas' ? 'm³ de gaz' : 'Litres de mazout'}) :
                    </label>
                    <div className="input-unit-wrap">
                      <input 
                        type="number" 
                        className="eval-input"
                        value={heatingFuelAmount}
                        onChange={(e) => setHeatingFuelAmount(Number(e.target.value))}
                      />
                      <span className="unit-chip">{heatingType === 'gas' ? 'm³' : 'L'}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* CARD GROUP 3: Paramètres Avancés Niveau 3 */}
              {detailLevel === 'level3' && (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Cpu size={18} /></div>
                      <span>3. Équipements Spécialisés &amp; Autoproduction</span>
                    </div>
                    <span className="form-card-badge" style={{ background: '#eef2ff', color: '#3730a3' }}>Niveau 3 Expert</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                        Serveurs, Cuisines, Labos (kWh) :
                      </label>
                      <div className="input-unit-wrap">
                        <input 
                          type="number"
                          className="eval-input"
                          value={specializedKwh}
                          onChange={(e) => setSpecializedKwh(Number(e.target.value))}
                        />
                        <span className="unit-chip">kWh/an</span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                        Solaire ou Géothermie sur site :
                      </label>
                      <div className="input-unit-wrap">
                        <input 
                          type="number"
                          className="eval-input"
                          value={solarOnsiteKwh}
                          onChange={(e) => setSolarOnsiteKwh(Number(e.target.value))}
                        />
                        <span className="unit-chip">kWh/an</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(2)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(4)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* MODE FORMULAIRE ULTRA-RICHE (STEP 4: Mobilité & Transports) */}
          {evalMode === 'form' && step === 4 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_mobility.png" alt="Mobilité" className="illus-step-img" />
              </div>
              <h2 className="step-question">Transports et Mobilité Régionale</h2>
              <p className="step-hint">Calculateurs de déplacements personnels, flottes et fret.</p>

              {/* CARD GROUP 1: Trajets Quotidiens */}
              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Car size={18} /></div>
                    <span>1. Déplacements Domicile-Travail</span>
                  </div>
                  <span className="form-card-badge">Calculateur Automatique</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Jours de travail par semaine :
                    </label>
                    <div className="input-unit-wrap">
                      <input 
                        type="number" 
                        min="1" 
                        max="7" 
                        className="eval-input" 
                        value={workDaysWeek} 
                        onChange={(e) => setWorkDaysWeek(Number(e.target.value))} 
                      />
                      <span className="unit-chip">jours/sem</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Distance quotidienne aller-retour :
                    </label>
                    <div className="input-unit-wrap">
                      <input 
                        type="number" 
                        className="eval-input" 
                        value={dailyCommuteKm} 
                        onChange={(e) => setDailyCommuteKm(Number(e.target.value))} 
                      />
                      <span className="unit-chip">km/jour</span>
                    </div>
                  </div>
                </div>

                <div className="form-callout-banner">
                  <Car size={18} className="form-callout-icon" />
                  <div>
                    <strong>Bilan Kilométrique :</strong> Vos trajets quotidiens génèrent environ <strong>{(workDaysWeek * dailyCommuteKm * 46).toLocaleString()} km/an</strong> de déplacements professionnels.
                  </div>
                </div>
              </div>

              {/* CARD GROUP 2: Véhicule & Flotte */}
              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Truck size={18} /></div>
                    <span>2. Véhicules &amp; Mode de Carburant</span>
                  </div>
                  <span className="form-card-badge">Flotte &amp; Autos</span>
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                    Kilométrage annuel total du véhicule principal :
                  </label>
                  <div className="input-unit-wrap">
                    <input 
                      type="number" 
                      className="eval-input" 
                      value={kmCar} 
                      onChange={(e) => setKmCar(Number(e.target.value))} 
                    />
                    <span className="unit-chip">km/an</span>
                  </div>
                </div>

                <div className="tile-option-grid">
                  {[
                    { id: 'gasoline', title: 'Essence / Diesel', subtitle: 'Standard fossile' },
                    { id: 'hybrid', title: 'Hybride Rechargeable', subtitle: 'PHEV hybride' },
                    { id: 'electric', title: '100% Électrique (VE)', subtitle: 'Zéro émission directe' },
                    { id: 'bus', title: 'Transport en commun', subtitle: 'Autobus / Covoiturage' }
                  ].map(opt => (
                    <div 
                      key={opt.id} 
                      className={`tile-option-card ${carType === opt.id ? 'active' : ''}`}
                      onClick={() => setCarType(opt.id)}
                    >
                      <span className="tile-option-title">{opt.title}</span>
                      <span className="tile-option-subtitle">{opt.subtitle}</span>
                    </div>
                  ))}
                </div>

                {detailLevel !== 'level1' && profile !== 'citizen' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                        Taille de la flotte d'organisation :
                      </label>
                      <div className="input-unit-wrap">
                        <input 
                          type="number" 
                          className="eval-input" 
                          value={fleetCount} 
                          onChange={(e) => setFleetCount(Number(e.target.value))} 
                        />
                        <span className="unit-chip">véhicules</span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                        Voyages d'affaires annuels :
                      </label>
                      <div className="input-unit-wrap">
                        <input 
                          type="number" 
                          className="eval-input" 
                          value={staffTravelCount} 
                          onChange={(e) => setStaffTravelCount(Number(e.target.value))} 
                        />
                        <span className="unit-chip">voyages/an</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(3)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(5)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* MODE FORMULAIRE ULTRA-RICHE (STEP 5: Consommation & Déchets) */}
          {evalMode === 'form' && step === 5 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_consumption.png" alt="Consommation" className="illus-step-img" />
              </div>
              <h2 className="step-question">Alimentation, Achats &amp; Gestion des Déchets</h2>
              <p className="step-hint">Chaîne d'approvisionnement locale et économie circulaire dans L'Érable.</p>

              {/* CARD GROUP 1: Alimentation */}
              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><ShoppingBag size={18} /></div>
                    <span>1. Profil d'Alimentation &amp; Restauration</span>
                  </div>
                  <span className="form-card-badge">Scope 3</span>
                </div>

                <div className="tile-option-grid" style={{ marginBottom: '16px' }}>
                  {[
                    { id: 'balanced', title: 'Équilibré', subtitle: 'Viande modérée &amp; local' },
                    { id: 'meat', title: 'Riche en viande', subtitle: 'Viande rouge fréquente' },
                    { id: 'vegan', title: 'Végétarien / Végétalien', subtitle: 'Faible empreinte carbone' }
                  ].map(opt => (
                    <div 
                      key={opt.id} 
                      className={`tile-option-card ${dietType === opt.id ? 'active' : ''}`}
                      onClick={() => setDietType(opt.id)}
                    >
                      <span className="tile-option-title">{opt.title}</span>
                      <span className="tile-option-subtitle">{opt.subtitle}</span>
                    </div>
                  ))}
                </div>

                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                    Part d'aliments de circuits courts (MRC de L'Érable / Québec) : {localFoodPct}%
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="5" 
                    value={localFoodPct} 
                    onChange={(e) => setLocalFoodPct(Number(e.target.value))} 
                    style={{ width: '100%' }} 
                  />
                </div>
              </div>

              {/* CARD GROUP 2: Recyclage & Compost */}
              {detailLevel !== 'level1' && (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Leaf size={18} /></div>
                      <span>2. Gestion des Déchets &amp; Matières</span>
                    </div>
                    <span className="form-card-badge">Économie Circulaire</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                        Matière compostée annuellement :
                      </label>
                      <div className="input-unit-wrap">
                        <input 
                          type="number" 
                          className="eval-input" 
                          value={wasteCompostKg} 
                          onChange={(e) => setWasteCompostKg(Number(e.target.value))} 
                        />
                        <span className="unit-chip">kg/an</span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                        Consommation de papier :
                      </label>
                      <div className="input-unit-wrap">
                        <input 
                          type="number" 
                          className="eval-input" 
                          value={paperReams} 
                          onChange={(e) => setPaperReams(Number(e.target.value))} 
                        />
                        <span className="unit-chip">ramettes</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(4)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(detailLevel === 'level3' ? 6 : maxSteps)}>
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* MODE FORMULAIRE (STEP 6: SPÉCIFICITÉS SECTORIELLES - LEVEL 3 EXPERT) */}
          {evalMode === 'form' && step === 6 && detailLevel === 'level3' && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_actions.png" alt="Actions" className="illus-step-img" />
              </div>
              <h2 className="step-question">Données Spécifiques au Secteur ({sector.toUpperCase()}) — Niveau 3</h2>
              <p className="step-hint">Inégalée précision pour l’agriculture, les institutions et l’industrie de L'Érable.</p>

              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Wheat size={18} /></div>
                    <span>Paramètres Agricoles &amp; Érablière</span>
                  </div>
                  <span className="form-card-badge" style={{ background: '#f0fdf4', color: '#065f46' }}>MRC L'Érable</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Superficie cultivée :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={agriHa} onChange={(e) => setAgriHa(Number(e.target.value))} />
                      <span className="unit-chip">hectares</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Consommation diesel machinerie :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={agriDieselLiters} onChange={(e) => setAgriDieselLiters(Number(e.target.value))} />
                      <span className="unit-chip">L/an</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(5)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-calculate" onClick={() => setStep(7)}>
                  Calculer mes résultats <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* LAST STEP: RÉSULTATS & PLAN D'ACTION */}
          {step === maxSteps && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_results.png" alt="Résultats" className="illus-step-img" />
              </div>
              
              <div className="results-header-text">
                <h2 className="step-question">Bilan GES et plan d'action personnalisé</h2>
                <p className="step-hint">Analyse selon le framework TogetherSense de la MRC de L'Érable ({detailLevel === 'level1' ? 'Niveau 1 Rapide' : detailLevel === 'level2' ? 'Niveau 2 Détaillé' : 'Niveau 3 Expert ISO'}).</p>
              </div>

              {/* Main Score Summary */}
              <div className="results-summary-card" style={{ background: '#0f172a', color: '#ffffff', padding: '28px', borderRadius: '24px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#34d399', fontWeight: 800 }}>
                  EMPREINTE TOTALE NETTE ESTIMÉE
                </div>
                <div style={{ fontSize: '3.2rem', fontWeight: 800, margin: '8px 0', fontFamily: 'var(--font-heading)', color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  {netTotal} <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#94a3b8' }}>tCO₂e / an</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.88rem', color: '#cbd5e1', marginTop: '12px' }}>
                  <span>Émissions brutes : <strong>{grossTotal} tCO₂e</strong></span>
                  <span>•</span>
                  <span style={{ color: '#a7f3d0' }}>Séquestration/Réduction : <strong>-{sequestrationVal} tCO₂e</strong></span>
                </div>
              </div>

              {/* Scope Breakdown Tabs */}
              <div className="results-tabs" style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
                <button 
                  className={`btn-tab ${activeTab === 'breakdown' ? 'active' : ''}`}
                  onClick={() => setActiveTab('breakdown')}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'breakdown' ? '#059669' : '#f1f5f9',
                    color: activeTab === 'breakdown' ? '#ffffff' : '#64748b',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Ventilation par Scope (1, 2, 3)
                </button>
                <button 
                  className={`btn-tab ${activeTab === 'recom' ? 'active' : ''}`}
                  onClick={() => setActiveTab('recom')}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'recom' ? '#059669' : '#f1f5f9',
                    color: activeTab === 'recom' ? '#ffffff' : '#64748b',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Plan d'Action Régional MRC
                </button>
              </div>

              {activeTab === 'breakdown' ? (
                <div className="breakdown-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="breakdown-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div>
                      <strong style={{ color: '#0f172a', display: 'block' }}>Scope 1 : Émissions directes (Chauffage, Carburants &amp; Agriculture)</strong>
                      <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Combustion sur site, bétail et engrais</span>
                    </div>
                    <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>{scope1Val} tCO₂e</strong>
                  </div>

                  <div className="breakdown-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div>
                      <strong style={{ color: '#0f172a', display: 'block' }}>Scope 2 : Énergie achetée (Hydro-Québec &amp; Équipements)</strong>
                      <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Consommation électrique propre (1.3g CO₂/kWh)</span>
                    </div>
                    <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>{scope2Val} tCO₂e</strong>
                  </div>

                  <div className="breakdown-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div>
                      <strong style={{ color: '#0f172a', display: 'block' }}>Scope 3 : Chaîne de valeur (Fret, Alimentation, Déplacements, Achats)</strong>
                      <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Trajets quotidiens, achats et déchets</span>
                    </div>
                    <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>{scope3Val} tCO₂e</strong>
                  </div>

                  {sequestrationVal > 0 && (
                    <div className="breakdown-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', background: '#f0fdf4', color: '#047857', borderRadius: '14px', border: '1px solid #bbf7d0' }}>
                      <div>
                        <strong style={{ color: '#065f46', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Leaf size={16} /> Séquestration Forestière &amp; Gains Positifs (L'Érable)
                        </strong>
                        <span style={{ fontSize: '0.82rem', color: '#047857' }}>Reboisement forestier et réductions actives</span>
                      </div>
                      <strong style={{ fontSize: '1.1rem', color: '#047857' }}>-{sequestrationVal} tCO₂e</strong>
                    </div>
                  )}
                </div>
              ) : (
                <div className="recom-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ padding: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', fontSize: '0.9rem', color: '#065f46' }}>
                    <strong>1. Subvention Thermopompe MRC de L'Érable</strong> : Bénéficiez des aides locales pour remplacer les systèmes au mazout ou au gaz.
                  </div>
                  <div style={{ padding: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', fontSize: '0.9rem', color: '#065f46' }}>
                    <strong>2. Programme de Compostage Régional (CDC)</strong> : Réduisez de 30% la masse de déchets ultimes dirigés vers les sites d'enfouissement.
                  </div>
                  <div style={{ padding: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', fontSize: '0.9rem', color: '#065f46' }}>
                    <strong>3. Circuits Courts Agroalimentaires</strong> : Priorisez les producteurs agricoles de L'Érable pour abaisser l'empreinte Scope 3.
                  </div>
                </div>
              )}

              <div className="results-actions" style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(2)}>
                  <ArrowLeft size={16} /> Modifier les choix
                </button>
                <button className="btn-results-home" onClick={onBackHome} style={{ background: '#059669', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Terminer et sauvegarder le bilan
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: AI Environmental Assistant */}
        {step > 0 && evalMode === 'form' && (
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
                <button onClick={() => handleSendMessage("Comment estimer ma facture ?")}>Facture $ ➔ kWh</button>
                <button onClick={() => handleSendMessage("Séquestration des arbres ?")}>Séquestration arbres</button>
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
                <span className="score-unit">tCO₂e / an (Nette)</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
