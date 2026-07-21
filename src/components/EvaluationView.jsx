import React, { useState } from 'react';
import Logo from './Logo';
import { 
  User, Users, Building, GraduationCap, MapPin, 
  Zap, BarChart2, Microscope, MessageSquare, Truck, ShoppingBag, Leaf, Award, 
  ArrowLeft, ArrowRight, X, Send, Download, FileText, Info, ChevronRight, ChevronDown, CheckCircle2, RefreshCw, HelpCircle, Bot, Sparkles, Lightbulb, Car, Trees, Factory, Wheat, Cpu, ShieldCheck, Ticket, Calendar, HeartPulse, Palette, Utensils, Smile, Flag, Compass, CheckSquare, Layers, Sun
} from 'lucide-react';

export default function EvaluationView({ onBackHome }) {
  // Navigation & Configuration State
  const [step, setStep] = useState(0); 
  const [evalTarget, setEvalTarget] = useState('organisation'); // 'organisation' | 'event'

  // Profile & Location State (Table acteurs)
  const [profile, setProfile] = useState('institution'); 
  const [actorStatus, setActorStatus] = useState('public'); // 'public' | 'private' | 'obnl'
  const [location, setLocation] = useState('Région de L\'Érable');
  const [postalCode, setPostalCode] = useState('G6L 1A1');
  const [sector, setSector] = useState('education'); 
  const [orgSize, setOrgSize] = useState('medium'); // 'small' | 'medium' | 'large'
  
  // Level & Mode State
  const [detailLevel, setDetailLevel] = useState('level2'); // 'level1' | 'level2' | 'level3'

  // Data Quality Index (DQI) tags for each section (Mesurée=1.0, Facturée=0.7, Estimée=0.4)
  const [dqiQuality, setDqiQuality] = useState({
    energy: 'facturee',
    transport: 'facturee',
    consumption: 'estimee',
    specific: 'facturee'
  });

  // UQAM Boussole de la transition scores (6 Pôles : 0 à 8)
  const [boussoleScores, setBoussoleScores] = useState({
    global: 5.5,
    carboneutralite: 6.2,
    technocentre: 3.8,
    local: 7.1,
    justice_sociale: 6.8,
    sociocentre: 5.9
  });
  const [hasCompletedBoussole, setHasCompletedBoussole] = useState(true);

  // 41 Actions Plan Climatique Collectif (Couverture actuel)
  const [coveredActions, setCoveredActions] = useState({
    G1: true, // Plan d'action climat
    G2: true, // Brigade verte
    N1: true, // Protection berges
    N3: true, // Reboisement local
    H1: true, // Alimentation locale
    H4: true, // Antigaspillage
    E1: true, // Efficacité énergétique
    E5: false, // Solaire/Autoproduction
    E9: true  // Recyclage & Compost
  });

  // DEDICATED EVENT EVALUATION STATE
  const [eventType, setEventType] = useState('conference'); 
  const [eventParticipants, setEventParticipants] = useState(60);
  const [eventDays, setEventDays] = useState(2);
  const [eventVenueType, setEventVenueType] = useState('salle_communautaire'); 
  const [eventFormat, setEventFormat] = useState('presentiel'); 
  const [eventVenueSurfaceM2, setEventVenueSurfaceM2] = useState(200);
  const [eventGeneratorFuelLiters, setEventGeneratorFuelLiters] = useState(45);
  const [eventStageLightingKwh, setEventStageLightingKwh] = useState(350);
  const [eventAvgDistanceKm, setEventAvgDistanceKm] = useState(40);
  const [eventMainTransportMode, setEventMainTransportMode] = useState('car_solo');
  const [eventSpeakerCount, setEventSpeakerCount] = useState(5);
  const [eventHotelNightsCount, setEventHotelNightsCount] = useState(15);
  const [eventCateringType, setEventCateringType] = useState('traiteur_local'); 
  const [eventMealsCount, setEventMealsCount] = useState(120);
  const [eventLocalFoodPct, setEventLocalFoodPct] = useState(65);
  const [eventReusableTableware, setEventReusableTableware] = useState(true);
  const [eventCompostKg, setEventCompostKg] = useState(40);
  const [eventPrintReams, setEventPrintReams] = useState(5);
  const [eventScenographyReusePct, setEventScenographyReusePct] = useState(75);
  const [eventTreesOffset, setEventTreesOffset] = useState(15);

  // ORGANISATIONAL EVALUATION STATE (12 SECTORS)
  const [eduType, setEduType] = useState('secondaire'); 
  const [studentCount, setStudentCount] = useState(850);
  const [staffCount, setStaffCount] = useState(65);
  const [schoolBusCount, setSchoolBusCount] = useState(8);
  const [schoolBusKmAnnual, setSchoolBusKmAnnual] = useState(48000);
  const [cafeteriaType, setCafeteriaType] = useState('interne'); 

  // SMART CALCULATION ASSISTANTS (JOURNALIER / MENSUEL / HEBDOMADAIRE)
  const [mealsInputMode, setMealsInputMode] = useState('daily'); // 'annual' | 'daily'
  const [dailyMealsCount, setDailyMealsCount] = useState(200);
  const [activeDaysPerYear, setActiveDaysPerYear] = useState(225);
  const [annualMealsCount, setAnnualMealsCount] = useState(45000);

  const [energyInputMode, setEnergyInputMode] = useState('monthly'); // 'annual' | 'monthly'
  const [monthlyEnergyBill, setMonthlyEnergyBill] = useState(350);

  const [wasteInputMode, setWasteInputMode] = useState('weekly'); // 'annual' | 'weekly'
  const [weeklyWasteKg, setWeeklyWasteKg] = useState(7);

  const [interventionSurfaceHa, setInterventionSurfaceHa] = useState(250);
  const [agriHa, setAgriHa] = useState(65);
  const [agriLivestockCount, setAgriLivestockCount] = useState(55);
  const [agriDieselLiters, setAgriDieselLiters] = useState(3200);
  const [agriFertilizerKg, setAgriFertilizerKg] = useState(1200);
  const [manureType, setManureType] = useState('lisier'); 
  const [agriTapsCount, setAgriTapsCount] = useState(3500); 

  const [biomedicalWasteKg, setBiomedicalWasteKg] = useState(450);
  const [ambulancesCount, setAmbulancesCount] = useState(2);
  const [ambulanceKmAnnual, setAmbulanceKmAnnual] = useState(24000);

  const [foodSavedKgPerYear, setFoodSavedKgPerYear] = useState(12000);
  const [publicLightingKwh, setPublicLightingKwh] = useState(45000);
  const [snowPlowDieselLiters, setSnowPlowDieselLiters] = useState(12500);
  const [industrialProcessKwh, setIndustrialProcessKwh] = useState(85000);

  // COMMON BUILDINGS & ENERGY FIELDS (STEP 3 ORGANISATION)
  const [surfaceM2, setSurfaceM2] = useState(450);
  const [buildingCount, setBuildingCount] = useState(2);
  const [buildDecade, setBuildDecade] = useState('2000s');
  const [energyBillDollars, setEnergyBillDollars] = useState(4200);
  const [energyKwh, setEnergyKwh] = useState(32000);
  const [heatingType, setHeatingType] = useState('hydro');
  const [heatingFuelAmount, setHeatingFuelAmount] = useState(1800);

  // COMMON MOBILITY FIELDS (STEP 4 ORGANISATION)
  const [workDaysWeek, setWorkDaysWeek] = useState(5);
  const [dailyCommuteKm, setDailyCommuteKm] = useState(28);
  const [kmCar, setKmCar] = useState(15000);
  const [carType, setCarType] = useState('gasoline');
  const [fleetCount, setFleetCount] = useState(3);

  // COMMON CONSUMPTION & WASTE FIELDS (STEP 5 ORGANISATION)
  const [dietType, setDietType] = useState('balanced');
  const [localFoodPct, setLocalFoodPct] = useState(50);
  const [paperReams, setPaperReams] = useState(22);
  const [wasteCompostKg, setWasteCompostKg] = useState(350);

  // Actions Positives & Séquestration
  const [treesPlanted, setTreesPlanted] = useState(30);

  // CALCUL DES INDICATEURS & DQI
  const calcDqiValue = (tag) => {
    if (tag === 'mesuree') return 1.0;
    if (tag === 'facturee') return 0.7;
    return 0.4; // estimée
  };

  const globalDqiPct = Math.round(
    ((calcDqiValue(dqiQuality.energy) + calcDqiValue(dqiQuality.transport) + calcDqiValue(dqiQuality.consumption) + calcDqiValue(dqiQuality.specific)) / 4) * 100
  );

  // RIGOROUS DEDICATED CALCULATION MODELS
  const calcEventEmissionsDetailed = () => {
    if (eventFormat === 'virtuel') {
      return {
        total: parseFloat((eventParticipants * eventDays * 0.0008).toFixed(2)),
        gross: parseFloat((eventParticipants * eventDays * 0.0008).toFixed(2)),
        offset: 0,
        perParticipantPerDay: parseFloat(((eventParticipants * eventDays * 0.8) / Math.max(1, eventParticipants * eventDays)).toFixed(2))
      };
    }

    let transportModeFactor = 0.00019; 
    if (eventMainTransportMode === 'carpool') transportModeFactor = 0.00009;
    else if (eventMainTransportMode === 'bus') transportModeFactor = 0.00005;

    let transportTotal = (eventParticipants * eventAvgDistanceKm * transportModeFactor) + (eventSpeakerCount * 180 * 0.00018);
    let venueTotal = (eventVenueSurfaceM2 * eventDays * 0.0018) + (eventGeneratorFuelLiters * 0.0027) + (eventStageLightingKwh * 0.0013 / 1000);
    let mealFactor = (eventCateringType === 'traiteur_local' ? 0.0018 : 0.0032) * (1 - (eventLocalFoodPct * 0.003));
    if (eventReusableTableware) mealFactor *= 0.75;
    let cateringTotal = (eventMealsCount * mealFactor);
    let wasteTotal = (eventHotelNightsCount * 0.015) + (eventPrintReams * 0.004) - (eventCompostKg * 0.0005);

    const gross = parseFloat((transportTotal + venueTotal + cateringTotal + wasteTotal).toFixed(2));
    const offset = parseFloat((eventTreesOffset * 0.025).toFixed(2));

    return {
      total: Math.max(0.05, parseFloat((gross - offset).toFixed(2))),
      gross: gross,
      offset: offset,
      perParticipantPerDay: parseFloat(((gross * 1000) / Math.max(1, eventParticipants * eventDays)).toFixed(2))
    };
  };

  const calcScope1 = () => {
    let s1 = 0;
    if (heatingType === 'oil') s1 += (heatingFuelAmount * 2.7) / 1000;
    else if (heatingType === 'gas') s1 += (heatingFuelAmount * 1.9) / 1000;
    if (carType === 'gasoline') s1 += (kmCar * 0.00019);
    else if (carType === 'hybrid') s1 += (kmCar * 0.00011);
    if (sector === 'agriculture') s1 += (agriLivestockCount * 1.2) + (agriFertilizerKg * 0.005) + (agriDieselLiters * 0.0027);
    if (sector === 'politique') s1 += (snowPlowDieselLiters * 0.0027);
    if (sector === 'education' && detailLevel !== 'level1') s1 += (schoolBusCount * (schoolBusKmAnnual / Math.max(1, schoolBusCount)) * 0.0009);
    return parseFloat(s1.toFixed(2));
  };

  const calcScope2 = () => {
    let kwh = detailLevel === 'level1' ? energyBillDollars * 7.5 : energyKwh;
    if (sector === 'pme' || sector === 'manufacturier') kwh += industrialProcessKwh;
    if (sector === 'politique') kwh += publicLightingKwh;
    return parseFloat(((kwh * 0.0013) / 1000).toFixed(2));
  };

  const calcScope3 = () => {
    let s3 = 0;
    if (dietType === 'vegan') s3 += 1.2;
    else if (dietType === 'balanced') s3 += 2.2;
    else if (dietType === 'meat') s3 += 3.5;
    s3 *= (1 - (localFoodPct * 0.002));
    s3 += (paperReams * 0.004);
    const commuteKmAnnual = workDaysWeek * dailyCommuteKm * 46;
    s3 += (commuteKmAnnual * 0.00012);
    if (sector === 'aide_alimentaire' || sector === 'communautaire') s3 -= (foodSavedKgPerYear * 0.0025); 
    return parseFloat(Math.max(0.2, s3).toFixed(2));
  };

  const calcSequestration = () => {
    let seq = treesPlanted * 0.025;
    if (sector === 'environnement') seq += (interventionSurfaceHa * 0.3);
    if (sector === 'agriculture') seq += (agriHa * 0.15);
    return parseFloat(seq.toFixed(2));
  };

  const eventCalcResults = calcEventEmissionsDetailed();
  const scope1Val = calcScope1();
  const scope2Val = calcScope2();
  const scope3Val = calcScope3();
  const sequestrationVal = calcSequestration();

  const grossTotal = evalTarget === 'event' ? eventCalcResults.gross : parseFloat((scope1Val + scope2Val + scope3Val).toFixed(2));
  const netTotal = evalTarget === 'event' ? eventCalcResults.total : Math.max(0.1, parseFloat((grossTotal - sequestrationVal).toFixed(2)));

  // Taux de couverture plan collectif
  const coveredCount = Object.values(coveredActions).filter(Boolean).length;
  const coveragePct = Math.round((coveredCount / 9) * 100);

  // Normalized per unit
  const perPersonVal = sector === 'education' 
    ? (grossTotal / Math.max(1, studentCount)).toFixed(3)
    : (grossTotal / Math.max(1, staffCount)).toFixed(2);

  const exportCSV = () => {
    const csvContent = `data:text/csv;charset=utf-8,Parametre,Valeur,Unite\nActeur,${profile},Enum\nSecteur,${sector},Enum\nTotal Brut,${grossTotal},tCO2e\nSequestration,${sequestrationVal},tCO2e\nNet,${netTotal},tCO2e\nDQI,${globalDqiPct},%\nCouverture Plan,${coveragePct},%\n`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `bilan_ges_${sector}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-surface)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="eval-header">
        <div className="eval-header-inner">
          <div onClick={onBackHome} style={{ cursor: 'pointer' }}>
            <Logo />
          </div>

          <div className="eval-header-progress">
            <div className="header-step-pills">
              <span className={`step-pill ${step === 0 ? 'active' : step > 0 ? 'done' : ''}`} onClick={() => setStep(0)}>Périmètre</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`} onClick={() => setStep(1)}>{evalTarget === 'event' ? 'Événement' : 'Profil'}</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`} onClick={() => setStep(2)}>{evalTarget === 'event' ? 'Site & Scène' : 'Boussole'}</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`} onClick={() => setStep(3)}>{evalTarget === 'event' ? 'Génératrices' : 'Énergie'}</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 4 ? 'active' : step > 4 ? 'done' : ''}`} onClick={() => setStep(4)}>{evalTarget === 'event' ? 'Mobilité' : 'Transports'}</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 5 ? 'active' : step > 5 ? 'done' : ''}`} onClick={() => setStep(5)}>{evalTarget === 'event' ? 'Traiteur' : 'Consommation'}</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 6 ? 'active' : step > 6 ? 'done' : ''}`} onClick={() => setStep(6)}>Plan Climat</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 7 ? 'active' : ''}`} onClick={() => setStep(7)}>Bilan Certifié</span>
            </div>
            <span className="mobile-step-counter">Étape {step} sur 7</span>
          </div>

          <div className="eval-header-actions">
            <span className="eval-user-badge" style={{ background: '#f0fdf4', color: '#059669', border: '1px solid #bbf7d0', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} /> DQI: {globalDqiPct}%
            </span>
            <button onClick={onBackHome} className="btn-eval-back">
              <X size={16} /> Quitter
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="eval-main">
        <div className="eval-wizard-panel" style={{ width: '100%' }}>
          
          {/* STEP 0: Onboarding */}
          {step === 0 && (
            <div className="eval-step active onboarding-step-view">
              <div className="onboarding-header">
                <h2>Évaluation de l'empreinte carbone (L'Érable)</h2>
                <p>Choisissez le périmètre d'analyse selon les spécifications du Cahier de collecte</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div 
                  className={`tile-option-card ${evalTarget === 'organisation' ? 'active' : ''}`}
                  onClick={() => setEvalTarget('organisation')}
                  style={{ padding: '20px', borderRadius: '18px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <Building size={22} style={{ color: evalTarget === 'organisation' ? '#059669' : '#64748b' }} />
                    <span className="tile-option-title" style={{ fontSize: '1.05rem' }}>Évaluation Organisationnelle</span>
                  </div>
                  <span className="tile-option-subtitle">Bilan annuel approfondi structuré pour les 12 secteurs de L'Érable.</span>
                </div>

                <div 
                  className={`tile-option-card ${evalTarget === 'event' ? 'active' : ''}`}
                  onClick={() => setEvalTarget('event')}
                  style={{ padding: '20px', borderRadius: '18px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <Ticket size={22} style={{ color: evalTarget === 'event' ? '#059669' : '#64748b' }} />
                    <span className="tile-option-title" style={{ fontSize: '1.05rem' }}>Événement &amp; Activité Ponctuelle</span>
                  </div>
                  <span className="tile-option-subtitle">Réunions, conférences, festivals, ateliers et spectacles dans L'Érable.</span>
                </div>
              </div>

              <div className="onboarding-actions" style={{ textAlign: 'center' }}>
                <button type="button" className="btn-onboarding-start" onClick={() => setStep(1)}>
                  Commencer l'évaluation {evalTarget === 'event' ? 'Événementielle' : 'Organisationnelle'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 1: PROFILAGE ADAPTÉ SELON LE PÉRIMÈTRE (ORGANISATION VS ÉVÉNEMENT) */}
          {step === 1 && (
            <div className="eval-step active" style={{ maxWidth: '950px', margin: '0 auto' }}>
              {evalTarget === 'event' ? (
                /* === ÉVÉNEMENT & ACTIVITÉ PONCTUELLE : ÉTAPE 1 === */
                <div>
                  <div className="onboarding-header" style={{ textAlign: 'center', marginBottom: '28px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#059669', padding: '6px 16px', borderRadius: '9999px', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px' }}>
                      <Ticket size={18} />
                      Évaluation d'Événement &amp; Activité Ponctuelle
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>
                      Étape 1/7 : Caractéristiques de votre Événement
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '650px', margin: '8px auto 0' }}>
                      Définissez le type, le format et la taille de votre activité ponctuelle dans L'Érable.
                    </p>
                  </div>

                  {/* TYPE D'ÉVÉNEMENT (CARTES) */}
                  <div style={{ marginBottom: '28px' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '12px' }}>
                      1. Type d'activité ponctuelle :
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                      {[
                        { id: 'conference', title: 'Conférence & Colloque', desc: 'Réunions, assises, congrès', icon: Users },
                        { id: 'festival', title: 'Festival & Fête', desc: 'Événement culturel grand public', icon: Palette },
                        { id: 'atelier', title: 'Atelier & Formation', desc: 'Atelier pratique, cours, atelier vert', icon: GraduationCap },
                        { id: 'spectacle', title: 'Spectacle & Concert', desc: 'Représentation, théâtre, musique', icon: Ticket },
                        { id: 'sport', title: 'Événement Sportif', desc: 'Tournoi, course, compétition', icon: HeartPulse }
                      ].map((evt) => {
                        const EvtIcon = evt.icon;
                        const isSelected = eventType === evt.id;
                        return (
                          <div
                            key={evt.id}
                            onClick={() => setEventType(evt.id)}
                            style={{
                              background: isSelected ? '#f0fdf4' : '#ffffff',
                              border: isSelected ? '2px solid var(--color-primary)' : '1px solid #e2e8f0',
                              borderRadius: '14px',
                              padding: '14px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                              <EvtIcon size={20} style={{ color: isSelected ? 'var(--color-primary)' : '#64748b' }} />
                              {isSelected && <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />}
                            </div>
                            <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-secondary)' }}>{evt.title}</div>
                            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{evt.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* FORMAT & JAUGES PARTICIPANTS */}
                  <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '18px', border: '1px solid #e2e8f0', marginBottom: '28px' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '16px' }}>
                      2. Format, Durée &amp; Nombre de participants :
                    </h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.88rem' }}>Format :</label>
                        <select value={eventFormat} onChange={(e) => setEventFormat(e.target.value)} className="eval-select">
                          <option value="presentiel">100% Présentiel</option>
                          <option value="hybride">Hybride (Présentiel + Web)</option>
                          <option value="virtuel">100% Virtuel</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.88rem' }}>Participants attendus :</label>
                        <input type="number" className="eval-input" value={eventParticipants} onChange={(e) => setEventParticipants(Number(e.target.value))} />
                      </div>
                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.88rem' }}>Durée (Nombre de jours) :</label>
                        <input type="number" className="eval-input" value={eventDays} onChange={(e) => setEventDays(Number(e.target.value))} />
                      </div>
                    </div>
                  </div>

                  {/* BOUTONS D'ACTION ÉVÉNEMENT */}
                  <div className="step-actions" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn-eval-back-step" onClick={() => setStep(0)}>
                      <ArrowLeft size={16} /> Retour au périmètre
                    </button>
                    <button className="btn-eval-next" onClick={() => setStep(2)} style={{ background: '#059669', color: '#ffffff' }}>
                      Continuer vers le Site &amp; la Scène <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                /* === ORGANISATION PERMANENTE : ÉTAPE 1 === */
                <div>
                  <div className="onboarding-header" style={{ textAlign: 'center', marginBottom: '28px' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>
                      Étape 1/7 : Choix de votre Profil &amp; Secteur d'Activité
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '650px', margin: '8px auto 0' }}>
                      Sélectionnez les cartes correspondant à votre organisation ou statut pour adapter le questionnaire et les recommandations du Plan Climat.
                    </p>
                  </div>

              {/* SECTION 1: TYPE D'ACTEUR (4 CARTES VISUELLES) */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f0fdf4', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 800 }}>1</span>
                  1. Quel est votre type d'acteur ?
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  {[
                    { id: 'institution', title: 'Institution', desc: 'Écoles, Municipalités, CIUSSS, MRC', icon: GraduationCap, defaultStatus: 'public' },
                    { id: 'company', title: 'Entreprise / PME', desc: 'Commerces, Érablières, Usines, Fermes', icon: Factory, defaultStatus: 'private' },
                    { id: 'organisation', title: 'Organisme / OBNL', desc: 'CDC L\'Érable, Banques alimentaires, Associations', icon: Users, defaultStatus: 'obnl' },
                    { id: 'citizen', title: 'Citoyen / Ménage', desc: 'Résidents du territoire, Familles, Individus', icon: User, defaultStatus: 'private' }
                  ].map((act) => {
                    const IconComp = act.icon;
                    const isSelected = profile === act.id;
                    return (
                      <div
                        key={act.id}
                        onClick={() => {
                          setProfile(act.id);
                          setActorStatus(act.defaultStatus);
                        }}
                        style={{
                          background: isSelected ? '#f0fdf4' : '#ffffff',
                          border: isSelected ? '2px solid var(--color-primary)' : '1px solid #e2e8f0',
                          borderRadius: '16px',
                          padding: '18px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: isSelected ? '0 6px 16px rgba(5, 150, 105, 0.15)' : '0 2px 6px rgba(0,0,0,0.02)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: isSelected ? 'var(--color-primary)' : '#f1f5f9', color: isSelected ? '#ffffff' : '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconComp size={20} />
                          </div>
                          {isSelected && <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} />}
                        </div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-secondary)', margin: 0 }}>{act.title}</h4>
                        <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>{act.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: STATUT JURIDIQUE & CATEGORIE (3 CARTES) */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f0fdf4', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 800 }}>2</span>
                  2. Statut &amp; Catégorie de recommandation
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                  {[
                    { id: 'public', title: 'Public / Parapublic', badge: 'Réglementaire & Exemplarité', desc: 'Recommandations axées sur les politiques publiques et la gouvernance' },
                    { id: 'private', title: 'Privé à but lucratif', badge: 'Procédés & Énergie', desc: 'Recommandations axées sur l\'efficacité opérationnelle et les coûts' },
                    { id: 'obnl', title: 'OBNL / Communautaire', badge: 'Mobilisation & Social', desc: 'Recommandations axées sur l\'entraide, la sensibilisation et l\'équité' }
                  ].map((st) => {
                    const isSelected = actorStatus === st.id;
                    return (
                      <div
                        key={st.id}
                        onClick={() => setActorStatus(st.id)}
                        style={{
                          background: isSelected ? '#ecfdf5' : '#ffffff',
                          border: isSelected ? '2px solid var(--color-primary)' : '1px solid #e2e8f0',
                          borderRadius: '14px',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-secondary)' }}>{st.title}</span>
                          {isSelected && <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />}
                        </div>
                        <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, color: '#065f46', background: '#dcfce7', padding: '2px 8px', borderRadius: '6px', marginBottom: '6px' }}>
                          {st.badge}
                        </span>
                        <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>{st.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: SECTEUR D'ACTIVITE (GRILLE DE CARTES SECTORIELLES) */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f0fdf4', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 800 }}>3</span>
                  3. Votre secteur d'activité dans L'Érable
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  {[
                    { id: 'education', name: 'Éducation & Scolaire', icon: GraduationCap, badge: '5-10 min' },
                    { id: 'environnement', name: 'Environnement & Foresterie', icon: Trees, badge: 'Conservation' },
                    { id: 'agriculture', name: 'Agriculture & Érablières', icon: Wheat, badge: '43% Emplois' },
                    { id: 'sante', name: 'Santé & Services Sociaux', icon: HeartPulse, badge: 'CIUSSS & Cliniques' },
                    { id: 'jeunesse', name: 'Jeunesse & Loisirs', icon: Smile, badge: 'Camps & Sports' },
                    { id: 'communautaire', name: 'Communautaire & OBNL', icon: Users, badge: 'CDC L\'Érable' },
                    { id: 'aide_alimentaire', name: 'Aide Alimentaire', icon: Utensils, badge: 'Antigaspillage' },
                    { id: 'restauration', name: 'Restauration & Commerce', icon: ShoppingBag, badge: 'Alimentation' },
                    { id: 'art', name: 'Art, Culture & Spectacles', icon: Palette, badge: 'Événements' },
                    { id: 'politique', name: 'Politique & Municipalités', icon: Building, badge: 'Infrastructures' },
                    { id: 'pme', name: 'PME & Industrie', icon: Factory, badge: 'Transformation' }
                  ].map((sec) => {
                    const SecIcon = sec.icon;
                    const isSelected = sector === sec.id;
                    return (
                      <div
                        key={sec.id}
                        onClick={() => setSector(sec.id)}
                        style={{
                          background: isSelected ? 'var(--color-primary)' : '#ffffff',
                          color: isSelected ? '#ffffff' : 'var(--color-secondary)',
                          border: isSelected ? '2px solid var(--color-primary-hover)' : '1px solid #e2e8f0',
                          borderRadius: '14px',
                          padding: '14px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          boxShadow: isSelected ? '0 4px 12px rgba(5, 150, 105, 0.25)' : 'none'
                        }}
                      >
                        <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: isSelected ? 'rgba(255,255,255,0.2)' : '#f1f5f9', color: isSelected ? '#ffffff' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <SecIcon size={18} />
                        </div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sec.name}</div>
                          <div style={{ fontSize: '0.72rem', opacity: isSelected ? 0.9 : 0.6 }}>{sec.badge}</div>
                        </div>
                        {isSelected && <CheckCircle2 size={16} style={{ color: '#ffffff', flexShrink: 0 }} />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 4: LOCALISATION DANS LA MRC DE L'ÉRABLE */}
              <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '18px', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={18} style={{ color: '#059669' }} />
                  4. Localisation &amp; Ancrage territorial (MRC de L'Érable)
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.9rem' }}>Municipalité de L'Érable :</label>
                    <select value={location} onChange={(e) => setLocation(e.target.value)} className="eval-select">
                      <option value="Région de L'Érable">Région de L'Érable (Globale)</option>
                      <option value="Ville de Plessisville">Ville de Plessisville</option>
                      <option value="Ville de Princeville">Ville de Princeville</option>
                      <option value="Notre-Dame-de-Lourdes">Notre-Dame-de-Lourdes</option>
                      <option value="Saint-Ferdinand">Saint-Ferdinand</option>
                      <option value="Sainte-Sophie-d'Halifax">Sainte-Sophie-d'Halifax</option>
                      <option value="Inverness">Inverness</option>
                      <option value="Laurierville">Laurierville</option>
                      <option value="Lyster">Lyster</option>
                      <option value="Villeroy">Villeroy</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.9rem' }}>Code postal :</label>
                    <input type="text" className="eval-input" value={postalCode} onChange={(e) => setPostalCode(e.target.value.toUpperCase())} placeholder="ex. G6L 1A1" />
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="step-actions" style={{ marginTop: '28px', display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(0)}>
                  <ArrowLeft size={16} /> Retour à l'accueil
                </button>
                <button className="btn-eval-next" onClick={() => setStep(2)} style={{ background: '#059669', color: '#ffffff' }}>
                  Continuer vers la Boussole UQAM <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

          {/* STEP 2: SITE & LIEU DE L'ÉVÉNEMENT (OU BOUSSOLE SI ORGANISATION) */}
          {step === 2 && (
            <div className="eval-step active">
              {evalTarget === 'event' ? (
                <div>
                  <div className="onboarding-header" style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#059669', padding: '6px 16px', borderRadius: '9999px', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px' }}>
                      <Building size={18} />
                      Infrastructures &amp; Lieu d'Accueil
                    </div>
                    <h2>Étape 2/7 : Caractéristiques du Site de l'Événement</h2>
                    <p>Définissez le lieu et la surface occupée dans la MRC de L'Érable</p>
                  </div>

                  <div className="form-card-group">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px' }}>Type de site / lieu :</label>
                        <select value={eventVenueType} onChange={(e) => setEventVenueType(e.target.value)} className="eval-select">
                          <option value="salle_communautaire">Salle municipale / communautaire</option>
                          <option value="plein_air">Plein air (Parc, terrain extérieur, chapiteau)</option>
                          <option value="ecole">Établissement scolaire / gymnase</option>
                          <option value="centre_congres">Centre de congrès / Aréna</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px' }}>Surface occupée ($m^2$) :</label>
                        <input type="number" className="eval-input" value={eventVenueSurfaceM2} onChange={(e) => setEventVenueSurfaceM2(Number(e.target.value))} />
                      </div>
                    </div>

                    <div style={{ marginTop: '14px' }}>
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px' }}>Municipalité d'accueil (L'Érable) :</label>
                      <select value={location} onChange={(e) => setLocation(e.target.value)} className="eval-select">
                        <option value="Ville de Plessisville">Ville de Plessisville</option>
                        <option value="Ville de Princeville">Ville de Princeville</option>
                        <option value="Notre-Dame-de-Lourdes">Notre-Dame-de-Lourdes</option>
                        <option value="Saint-Ferdinand">Saint-Ferdinand</option>
                        <option value="Sainte-Sophie-d'Halifax">Sainte-Sophie-d'Halifax</option>
                        <option value="Inverness">Inverness</option>
                        <option value="Laurierville">Laurierville</option>
                        <option value="Lyster">Lyster</option>
                        <option value="Villeroy">Villeroy</option>
                      </select>
                    </div>
                  </div>

                  <div className="step-actions" style={{ marginTop: '28px' }}>
                    <button className="btn-eval-back-step" onClick={() => setStep(1)}>
                      <ArrowLeft size={16} /> Retour
                    </button>
                    <button className="btn-eval-next" onClick={() => setStep(3)}>
                      Continuer vers Génératrices &amp; Scène <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="onboarding-header" style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#059669', padding: '6px 16px', borderRadius: '9999px', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px' }}>
                      <Compass size={18} />
                      Partenariat Chaire de Recherche UQAM
                    </div>
                    <h2>Étape 2/7 : La Boussole de la transition</h2>
                    <p>Évaluez vos 6 pôles de maturité socioclimatique (Étape facultative)</p>
                  </div>

                  <div className="form-card-group">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '4px' }}>Pôle Global (0-8) : {boussoleScores.global}</label>
                        <input type="range" min="0" max="8" step="0.1" value={boussoleScores.global} onChange={(e) => setBoussoleScores({...boussoleScores, global: parseFloat(e.target.value)})} style={{ width: '100%' }} />
                      </div>
                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '4px' }}>Pôle Carboneutralité : {boussoleScores.carboneutralite}</label>
                        <input type="range" min="0" max="8" step="0.1" value={boussoleScores.carboneutralite} onChange={(e) => setBoussoleScores({...boussoleScores, carboneutralite: parseFloat(e.target.value)})} style={{ width: '100%' }} />
                      </div>
                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '4px' }}>Pôle Local : {boussoleScores.local}</label>
                        <input type="range" min="0" max="8" step="0.1" value={boussoleScores.local} onChange={(e) => setBoussoleScores({...boussoleScores, local: parseFloat(e.target.value)})} style={{ width: '100%' }} />
                      </div>
                      <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '4px' }}>Pôle Justice Sociale : {boussoleScores.justice_sociale}</label>
                        <input type="range" min="0" max="8" step="0.1" value={boussoleScores.justice_sociale} onChange={(e) => setBoussoleScores({...boussoleScores, justice_sociale: parseFloat(e.target.value)})} style={{ width: '100%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="step-actions" style={{ marginTop: '28px' }}>
                    <button className="btn-eval-back-step" onClick={() => setStep(1)}>
                      <ArrowLeft size={16} /> Retour
                    </button>
                    <button className="btn-eval-next" onClick={() => setStep(3)}>
                      Continuer vers l'Énergie (Niveau 2) <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: ÉNERGIE TEMPORAIRE & GÉNÉRATRICES (OU ÉNERGIE D'ORGANISATION) */}
          {step === 3 && (
            <div className="eval-step active">
              {evalTarget === 'event' ? (
                <div>
                  <h2 className="step-question">Étape 3/7 : Énergie temporaire, Génératrices &amp; Scène</h2>
                  <p className="step-hint">Consommations d'électricité temporaire et de carburant événementiel</p>

                  <div className="form-card-group">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Génératrices temporaires (litres de carburant) :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={eventGeneratorFuelLiters} onChange={(e) => setEventGeneratorFuelLiters(Number(e.target.value))} />
                          <span className="unit-chip">Litres</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Électricité scène, éclairage &amp; sono (kWh) :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={eventStageLightingKwh} onChange={(e) => setEventStageLightingKwh(Number(e.target.value))} />
                          <span className="unit-chip">kWh</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="step-actions" style={{ marginTop: '28px' }}>
                    <button className="btn-eval-back-step" onClick={() => setStep(2)}>
                      <ArrowLeft size={16} /> Retour
                    </button>
                    <button className="btn-eval-next" onClick={() => setStep(4)}>
                      Continuer vers la Mobilité <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="step-question">Étape 3/7 : Énergie &amp; Qualité de Donnée</h2>
                  
                  <div className="form-card-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontWeight: 700 }}>Qualité de cette donnée (DQI) :</span>
                      <select value={dqiQuality.energy} onChange={(e) => setDqiQuality({...dqiQuality, energy: e.target.value})} className="eval-select" style={{ width: 'auto' }}>
                        <option value="mesuree">Mesurée (DQI = 100%)</option>
                        <option value="facturee">Facturée (DQI = 70%)</option>
                        <option value="estimee">Estimée (DQI = 40%)</option>
                      </select>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Consommation électricité (kWh) :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={energyKwh} onChange={(e) => setEnergyKwh(Number(e.target.value))} />
                          <span className="unit-chip">kWh/an</span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Facture annuelle ($ CAD) :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={energyBillDollars} onChange={(e) => setEnergyBillDollars(Number(e.target.value))} />
                          <span className="unit-chip">$ CAD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="step-actions" style={{ marginTop: '28px' }}>
                    <button className="btn-eval-back-step" onClick={() => setStep(2)}>
                      <ArrowLeft size={16} /> Retour
                    </button>
                    <button className="btn-eval-next" onClick={() => setStep(4)}>
                      Continuer vers Transports <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: TRANSPORTS ET MOBILITÉ ÉVÉNEMENTIELLE */}
          {step === 4 && (
            <div className="eval-step active">
              {evalTarget === 'event' ? (
                <div>
                  <h2 className="step-question">Étape 4/7 : Mobilité, Transports &amp; Nuitées de l'Événement</h2>
                  <p className="step-hint">Provenances des participants, modes de transport et hébergement temporaire</p>

                  <div className="form-card-group">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Distance moyenne par participant (aller-retour) :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={eventAvgDistanceKm} onChange={(e) => setEventAvgDistanceKm(Number(e.target.value))} />
                          <span className="unit-chip">km / participant</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Mode de transport principal :</label>
                        <select value={eventMainTransportMode} onChange={(e) => setEventMainTransportMode(e.target.value)} className="eval-select">
                          <option value="car_solo">Voiture individuelle (Solo)</option>
                          <option value="covoiturage">Covoiturage (≥2 pers/auto)</option>
                          <option value="bus">Autobus / Navette collective</option>
                          <option value="actif">Transport actif (Vélo, marche, mobilité douce)</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Conférenciers / Artistes invités :</label>
                        <input type="number" className="eval-input" value={eventSpeakerCount} onChange={(e) => setEventSpeakerCount(Number(e.target.value))} />
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Nuitées d'hôtel / gîte réservées :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={eventHotelNightsCount} onChange={(e) => setEventHotelNightsCount(Number(e.target.value))} />
                          <span className="unit-chip">Nuitées</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="step-actions" style={{ marginTop: '28px' }}>
                    <button className="btn-eval-back-step" onClick={() => setStep(3)}>
                      <ArrowLeft size={16} /> Retour
                    </button>
                    <button className="btn-eval-next" onClick={() => setStep(5)}>
                      Continuer vers la Restauration &amp; Traiteur <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="step-question">Étape 4/7 : Transports &amp; Mobilité</h2>

                  <div className="form-card-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontWeight: 700 }}>Qualité des données Transports (DQI) :</span>
                      <select value={dqiQuality.transport} onChange={(e) => setDqiQuality({...dqiQuality, transport: e.target.value})} className="eval-select" style={{ width: 'auto' }}>
                        <option value="mesuree">Mesurée (100%)</option>
                        <option value="facturee">Facturée (70%)</option>
                        <option value="estimee">Estimée (40%)</option>
                      </select>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Kilométrage annuel auto/flotte :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={kmCar} onChange={(e) => setKmCar(Number(e.target.value))} />
                          <span className="unit-chip">km/an</span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Type de carburant :</label>
                        <select value={carType} onChange={(e) => setCarType(e.target.value)} className="eval-select">
                          <option value="gasoline">Essence ordinaire</option>
                          <option value="hybrid">Hybride</option>
                          <option value="electric">Électrique (Hydro-Québec)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="step-actions" style={{ marginTop: '28px' }}>
                    <button className="btn-eval-back-step" onClick={() => setStep(3)}>
                      <ArrowLeft size={16} /> Retour
                    </button>
                    <button className="btn-eval-next" onClick={() => setStep(5)}>
                      Continuer vers Consommation <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 5: CONSOMMATION & RESTAURATION */}
          {step === 5 && (
            <div className="eval-step active">
              <h2 className="step-question">Étape 5/7 : Alimentation &amp; Consommation</h2>
              <p className="step-hint">Calcul simplifié des repas et de l'approvisionnement (Assistant journalier disponible)</p>

              <div className="form-card-group">
                {/* Repas Mode Selector */}
                <div style={{ marginBottom: '20px', background: '#f8fafc', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <label style={{ fontWeight: 700, color: 'var(--color-secondary)', fontSize: '0.95rem' }}>
                      1. Cantine &amp; Restauration — Mode de calcul :
                    </label>
                    <div style={{ display: 'flex', gap: '6px', background: '#e2e8f0', padding: '3px', borderRadius: '10px' }}>
                      <button 
                        type="button"
                        onClick={() => setMealsInputMode('daily')}
                        style={{ 
                          padding: '6px 14px', 
                          borderRadius: '8px', 
                          border: 'none', 
                          fontWeight: 700, 
                          fontSize: '0.82rem', 
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: mealsInputMode === 'daily' ? 'var(--color-primary)' : 'transparent',
                          color: mealsInputMode === 'daily' ? '#ffffff' : '#64748b'
                        }}
                      >
                        <Sun size={14} /> Par jour (Journalier)
                      </button>
                      <button 
                        type="button"
                        onClick={() => setMealsInputMode('annual')}
                        style={{ 
                          padding: '6px 14px', 
                          borderRadius: '8px', 
                          border: 'none', 
                          fontWeight: 700, 
                          fontSize: '0.82rem', 
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: mealsInputMode === 'annual' ? 'var(--color-primary)' : 'transparent',
                          color: mealsInputMode === 'annual' ? '#ffffff' : '#64748b'
                        }}
                      >
                        <Calendar size={14} /> Total Annuel Direct
                      </button>
                    </div>
                  </div>

                  {mealsInputMode === 'daily' ? (
                    <div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                        <div>
                          <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.88rem' }}>
                            Repas moyens par jour :
                          </label>
                          <div className="input-unit-wrap">
                            <input 
                              type="number" 
                              className="eval-input" 
                              value={dailyMealsCount} 
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                setDailyMealsCount(val);
                                setAnnualMealsCount(val * activeDaysPerYear);
                              }} 
                            />
                            <span className="unit-chip">repas/jour</span>
                          </div>
                        </div>

                        <div>
                          <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.88rem' }}>
                            Jours d'activité par an :
                          </label>
                          <div className="input-unit-wrap">
                            <input 
                              type="number" 
                              className="eval-input" 
                              value={activeDaysPerYear} 
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                setActiveDaysPerYear(val);
                                setAnnualMealsCount(dailyMealsCount * val);
                              }} 
                            />
                            <span className="unit-chip">jours/an</span>
                          </div>
                        </div>
                      </div>

                      {/* Calculation Badge */}
                      <div style={{ background: '#ecfdf5', border: '1px solid #bbf7d0', color: '#065f46', padding: '10px 14px', borderRadius: '10px', fontSize: '0.88rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={16} style={{ color: '#059669' }} />
                        <span>Calcul automatique : {dailyMealsCount} repas/jour × {activeDaysPerYear} jours = <strong>{annualMealsCount.toLocaleString()} repas/an</strong></span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.88rem' }}>Repas annuels servis :</label>
                      <div className="input-unit-wrap">
                        <input 
                          type="number" 
                          className="eval-input" 
                          value={annualMealsCount} 
                          onChange={(e) => setAnnualMealsCount(Number(e.target.value))} 
                        />
                        <span className="unit-chip">repas/an</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Local Food slider */}
                <div style={{ background: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Part d'approvisionnement local (MRC de L'Érable) : <strong style={{ color: 'var(--color-primary)' }}>{localFoodPct}%</strong>
                  </label>
                  <input type="range" min="0" max="100" value={localFoodPct} onChange={(e) => setLocalFoodPct(Number(e.target.value))} style={{ width: '100%' }} />
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(4)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(6)}>
                  Continuer vers le Plan Climat <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: ALIGNEMENT PLAN CLIMATIQUE COLLECTIF (41 ACTIONS) */}
          {step === 6 && (
            <div className="eval-step active">
              <div className="onboarding-header" style={{ textAlign: 'center', marginBottom: '24px' }}>
                <h2>Étape 6/7 : Alignement avec le Plan d'Action Climatique (41 Actions)</h2>
                <p>Cochez les actions du territoire auxquelles vous contribuez déjà</p>
              </div>

              <div className="form-card-group">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    { id: 'G1', label: 'G1 — Plan d\'action climat formalisé dans l\'organisation' },
                    { id: 'G2', label: 'G2 — Équipe / Comité vert interne' },
                    { id: 'N1', label: 'N1 — Protection des cours d\'eau et des berges' },
                    { id: 'N3', label: 'N3 — Reboisement et conservation forestière dans L\'Érable' },
                    { id: 'H1', label: 'H1 — Approvisionnement alimentaire en circuits courts' },
                    { id: 'H4', label: 'H4 — Programme de réduction du gaspillage alimentaire' },
                    { id: 'E1', label: 'E1 — Rénovation d\'efficacité énergétique et isolation' },
                    { id: 'E5', label: 'E5 — Installation de panneaux solaires ou géothermie' },
                    { id: 'E9', label: 'E9 — Tri sélectif et compostage systématique' }
                  ].map(act => (
                    <label key={act.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', padding: '12px', borderRadius: '12px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                      <input 
                        type="checkbox" 
                        checked={!!coveredActions[act.id]} 
                        onChange={(e) => setCoveredActions({...coveredActions, [act.id]: e.target.checked})} 
                      />
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>{act.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(5)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-calculate" onClick={() => setStep(7)}>
                  Générer le Bilan Certifié &amp; Recommandations <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 7: RÉSULTATS DÉTAILLÉS & PLAN DE GOUVERNANCE */}
          {step === 7 && (
            <div className="eval-step active">
              {evalTarget === 'event' ? (
                /* === BILAN ÉVÉNEMENTIEL CERTIFIÉ (PAR PARTICIPANT ET PAR JOUR) === */
                <div>
                  <div className="results-header-text" style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#059669', padding: '6px 16px', borderRadius: '9999px', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px' }}>
                      <Ticket size={18} />
                      Bilan Carbone Événementiel — {eventType.toUpperCase()}
                    </div>
                    <h2 className="step-question">Bilan Certifié Éco-Événement dans L'Érable</h2>
                    <p className="step-hint">Indicateurs spécialisés par participant/jour &amp; Norme BNQ 9700-253 Écoresponsabilité</p>
                  </div>

                  {/* Header Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '20px', borderRadius: '18px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#059669', fontWeight: 800 }}>ÉMISS. BRUTES TOTALE</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#065f46' }}>
                        {((eventParticipants * eventAvgDistanceKm * 0.15 + eventGeneratorFuelLiters * 2.68 + eventMealsCount * 2.2 + eventHotelNightsCount * 25) / 1000).toFixed(2)} <span style={{ fontSize: '1rem' }}>tCO₂e</span>
                      </div>
                    </div>

                    <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '20px', borderRadius: '18px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#2563eb', fontWeight: 800 }}>PARTICIPANTS &amp; DURÉE</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1e40af' }}>{eventParticipants} <span style={{ fontSize: '0.9rem' }}>pers ({eventDays}j)</span></div>
                    </div>

                    <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '20px', borderRadius: '18px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#d97706', fontWeight: 800 }}>PART APPRO. LOCAL</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#92400e' }}>{eventLocalFoodPct}%</div>
                    </div>
                  </div>

                  {/* Main Event Key Indicator Box: Per Participant Per Day */}
                  <div className="results-summary-card" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', padding: '32px', borderRadius: '24px', marginBottom: '24px', boxShadow: '0 10px 25px rgba(15,23,42,0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#dbfc49', fontWeight: 800 }}>
                        INDICATEUR CLÉ ÉVÉNEMENTIEL (BNQ 9700-253)
                      </div>
                      <span style={{ background: '#dbfc49', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem', padding: '4px 10px', borderRadius: '6px' }}>
                        Périmètre Événement
                      </span>
                    </div>

                    <div style={{ fontSize: '3.6rem', fontWeight: 900, margin: '8px 0', fontFamily: 'var(--font-heading)', color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                      {(
                        ((eventParticipants * eventAvgDistanceKm * 0.15 + eventGeneratorFuelLiters * 2.68 + eventMealsCount * 2.2 + eventHotelNightsCount * 25)) /
                        Math.max(1, eventParticipants * eventDays)
                      ).toFixed(2)} 
                      <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#dbfc49' }}>kg CO₂e / participant / jour</span>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.9rem', color: '#cbd5e1', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', flexWrap: 'wrap' }}>
                      <span>🚘 Transports : <strong>{((eventParticipants * eventAvgDistanceKm * 0.15) / 1000).toFixed(2)} tCO₂e</strong></span>
                      <span>•</span>
                      <span>🥗 Restauration : <strong>{((eventMealsCount * 2.2) / 1000).toFixed(2)} tCO₂e</strong></span>
                      <span>•</span>
                      <span>⚡ Énergie Scène : <strong>{((eventGeneratorFuelLiters * 2.68 + eventStageLightingKwh * 0.0345) / 1000).toFixed(2)} tCO₂e</strong></span>
                      <span>•</span>
                      <span>🏨 Nuitées : <strong>{((eventHotelNightsCount * 25) / 1000).toFixed(2)} tCO₂e</strong></span>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="results-actions" style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button className="btn-eval-back-step" onClick={exportCSV} style={{ background: '#0f172a', color: '#ffffff' }}>
                      <Download size={16} /> Exporter Rapport Événement (CSV)
                    </button>
                    <button className="btn-results-home" onClick={onBackHome} style={{ background: '#059669', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: 700, cursor: 'pointer' }}>
                      Enregistrer dans le Registre Événementiel de L'Érable
                    </button>
                  </div>
                </div>
              ) : (
                /* === BILAN ORGANISATIONNEL CLASSIQUE === */
                <div>
                  <div className="results-header-text" style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <h2 className="step-question">Bilan Certifié &amp; Plan d'Action — {sector.toUpperCase()}</h2>
                    <p className="step-hint">Structure conforme ISO 14064 &amp; Cahier de collecte CDC L'Érable</p>
                  </div>

                  {/* DQI & Coverage Header Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '20px', borderRadius: '18px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#059669', fontWeight: 800 }}>ÉMISS. BRUTES (E_SOURCES)</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#065f46' }}>{grossTotal} <span style={{ fontSize: '1rem' }}>tCO₂e</span></div>
                    </div>

                    <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '20px', borderRadius: '18px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#2563eb', fontWeight: 800 }}>INDICE DQI QUALITÉ</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1e40af' }}>{globalDqiPct}%</div>
                    </div>

                    <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '20px', borderRadius: '18px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#d97706', fontWeight: 800 }}>COUVERTURE PLAN CLIMAT</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#92400e' }}>{coveragePct}%</div>
                    </div>
                  </div>

                  <div className="results-summary-card" style={{ background: '#0f172a', color: '#ffffff', padding: '28px', borderRadius: '24px', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#34d399', fontWeight: 800 }}>
                      EMPREINTE NETTE ESTIMÉE (E_NET)
                    </div>
                    <div style={{ fontSize: '3.2rem', fontWeight: 800, margin: '8px 0', fontFamily: 'var(--font-heading)', color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      {netTotal} <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#94a3b8' }}>tCO₂e / an</span>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.88rem', color: '#cbd5e1', marginTop: '12px' }}>
                      <span>Brut (E_sources) : <strong>{grossTotal} tCO₂e</strong></span>
                      <span>•</span>
                      <span style={{ color: '#a7f3d0' }}>Séquestration/Actions (S) : <strong>-{sequestrationVal} tCO₂e</strong></span>
                      <span>•</span>
                      <span>Ratio : <strong>{perPersonVal} tCO₂e / pers</strong></span>
                    </div>
                  </div>

                  <div className="results-actions" style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button className="btn-eval-back-step" onClick={exportCSV} style={{ background: '#0f172a', color: '#ffffff' }}>
                      <Download size={16} /> Exporter Rapport (CSV)
                    </button>
                    <button className="btn-results-home" onClick={onBackHome} style={{ background: '#059669', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: 700, cursor: 'pointer' }}>
                      Sauvegarder dans le Portrait Régional
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
