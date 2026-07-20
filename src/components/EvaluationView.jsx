import React, { useState, useEffect } from 'react';
import { 
  User, Users, Building, GraduationCap, MapPin, 
  Zap, BarChart2, Microscope, MessageSquare, Truck, ShoppingBag, Leaf, Award, 
  ArrowLeft, ArrowRight, X, Send, Download, FileText, Info, ChevronRight, ChevronDown, CheckCircle2, RefreshCw, HelpCircle, Bot, Sparkles, Lightbulb, Car, Trees, Factory, Wheat, Cpu, ShieldCheck, Ticket, Calendar, HeartPulse, Palette, Utensils, Smile, Flag, Hotel, Gift
} from 'lucide-react';

export default function EvaluationView({ onBackHome }) {
  // Navigation & Configuration State
  const [step, setStep] = useState(0); 
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' | 'imperial'
  const [showDetailedInfo, setShowDetailedInfo] = useState(false);

  // Target Scope State (Organisation vs Événement)
  const [evalTarget, setEvalTarget] = useState('organisation'); // 'organisation' | 'event'

  // Profile & Location State
  const [profile, setProfile] = useState('institution'); 
  const [location, setLocation] = useState('Région de L\'Érable');
  const [postalCode, setPostalCode] = useState('G6L 1A1');
  const [sector, setSector] = useState('education'); 
  const [orgSize, setOrgSize] = useState('medium'); 
  
  // Level & Mode State (TogetherSense Framework)
  const [detailLevel, setDetailLevel] = useState('level2'); 
  const [evalMode, setEvalMode] = useState('form'); 

  // =========================================================================
  // DEDICATED EVENT EVALUATION STATE (ÉVÉNEMENT & ACTIVITÉ PONCTUELLE)
  // =========================================================================
  const [eventType, setEventType] = useState('conference'); 
  const [eventParticipants, setEventParticipants] = useState(60);
  const [eventDays, setEventDays] = useState(2);
  const [eventVenueType, setEventVenueType] = useState('salle_communautaire'); 
  const [eventFormat, setEventFormat] = useState('presentiel'); 
  
  // Event Step 3: Energy & Venue
  const [eventVenueSurfaceM2, setEventVenueSurfaceM2] = useState(200);
  const [eventGeneratorFuelLiters, setEventGeneratorFuelLiters] = useState(45);
  const [eventStageLightingKwh, setEventStageLightingKwh] = useState(350);
  const [eventHeatingSource, setEventHeatingSource] = useState('hydro');

  // Event Step 4: Transport & Accommodation
  const [eventAvgDistanceKm, setEventAvgDistanceKm] = useState(40);
  const [eventMainTransportMode, setEventMainTransportMode] = useState('car_solo'); // 'car_solo', 'carpool', 'bus', 'transit'
  const [eventSpeakerCount, setEventSpeakerCount] = useState(5);
  const [eventHotelNightsCount, setEventHotelNightsCount] = useState(15);

  // Event Step 5: Catering & Waste
  const [eventCateringType, setEventCateringType] = useState('traiteur_local'); 
  const [eventMealsCount, setEventMealsCount] = useState(120);
  const [eventLocalFoodPct, setEventLocalFoodPct] = useState(65);
  const [eventReusableTableware, setEventReusableTableware] = useState(true);
  const [eventCompostKg, setEventCompostKg] = useState(40);
  const [eventPrintReams, setEventPrintReams] = useState(5);

  // Event Step 6: Scenography & Positive Actions
  const [eventScenographyReusePct, setEventScenographyReusePct] = useState(75);
  const [eventGoodiesType, setEventGoodiesType] = useState('eco'); // 'none', 'eco', 'standard'
  const [eventTreesOffset, setEventTreesOffset] = useState(15);

  // =========================================================================
  // ORGANISATIONAL EVALUATION STATE (12 SECTORS)
  // =========================================================================

  // 1. SECTEUR ÉDUCATION
  const [eduType, setEduType] = useState('secondaire'); 
  const [studentCount, setStudentCount] = useState(850);
  const [schoolBusCount, setSchoolBusCount] = useState(8);
  const [schoolBusKmAnnual, setSchoolBusKmAnnual] = useState(48000);
  const [cafeteriaType, setCafeteriaType] = useState('interne'); 
  const [annualMealsCount, setAnnualMealsCount] = useState(45000);

  // 2. SECTEUR ENVIRONNEMENT & FORESTERIE
  const [interventionSurfaceHa, setInterventionSurfaceHa] = useState(250);

  // 3. SECTEUR AGRICULTURE & ÉRABLIÈRE (43% L'Érable)
  const [agriHa, setAgriHa] = useState(65);
  const [agriLivestockCount, setAgriLivestockCount] = useState(55);
  const [agriDieselLiters, setAgriDieselLiters] = useState(3200);
  const [agriFertilizerKg, setAgriFertilizerKg] = useState(1200);
  const [manureType, setManureType] = useState('lisier'); 
  const [agriTapsCount, setAgriTapsCount] = useState(3500); 

  // 4. SECTEUR SANTÉ & SERVICES SOCIAUX
  const [healthInstType, setHealthInstType] = useState('clinique'); 
  const [biomedicalWasteKg, setBiomedicalWasteKg] = useState(450);
  const [ambulancesCount, setAmbulancesCount] = useState(2);
  const [ambulanceKmAnnual, setAmbulanceKmAnnual] = useState(24000);

  // 5. SECTEUR COMMUNAUTAIRE & AIDE ALIMENTAIRE
  const [foodSavedKgPerYear, setFoodSavedKgPerYear] = useState(12000);
  const [refrigeratorsCount, setRefrigeratorsCount] = useState(6);

  // 6. SECTEUR POLITIQUE & MUNICIPALITÉS
  const [publicLightingKwh, setPublicLightingKwh] = useState(45000);
  const [snowPlowDieselLiters, setSnowPlowDieselLiters] = useState(12500);

  // 7. SECTEUR PME & INDUSTRIE
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

  // Actions Positives State
  const [treesPlanted, setTreesPlanted] = useState(30);
  const [actions, setActions] = useState({
    ledLighting: true,
    heatPump: true,
    compost: true,
    localFood: true,
    treePlanting: true,
    solar: false,
    smartThermostats: true
  });

  // RIGOROUS DEDICATED CALCULATION MODELS
  const calcEventEmissionsDetailed = () => {
    if (eventFormat === 'virtuel') {
      return {
        total: parseFloat((eventParticipants * eventDays * 0.0008).toFixed(2)),
        transport: 0,
        venue: parseFloat((eventParticipants * eventDays * 0.0005).toFixed(2)),
        catering: 0,
        waste: parseFloat((eventParticipants * eventDays * 0.0003).toFixed(2))
      };
    }

    // 1. Transport Participants & Speakers
    let transportModeFactor = 0.00019; // car_solo
    if (eventMainTransportMode === 'carpool') transportModeFactor = 0.00009;
    else if (eventMainTransportMode === 'bus') transportModeFactor = 0.00005;
    else if (eventMainTransportMode === 'transit') transportModeFactor = 0.00004;

    let transportTotal = (eventParticipants * eventAvgDistanceKm * transportModeFactor) + (eventSpeakerCount * 180 * 0.00018);

    // 2. Venue Energy & Generators
    let venueTotal = (eventVenueSurfaceM2 * eventDays * 0.0018) + (eventGeneratorFuelLiters * 0.0027) + (eventStageLightingKwh * 0.0013 / 1000);

    // 3. Catering & Meals
    let mealFactor = eventCateringType === 'traiteur_local' ? 0.0018 : 0.0032;
    mealFactor *= (1 - (eventLocalFoodPct * 0.003));
    if (eventReusableTableware) mealFactor *= 0.75;
    let cateringTotal = (eventMealsCount * mealFactor);

    // 4. Hotel & Waste
    let wasteTotal = (eventHotelNightsCount * 0.015) + (eventPrintReams * 0.004) - (eventCompostKg * 0.0005);
    if (eventGoodiesType === 'standard') wasteTotal += (eventParticipants * 0.0012);

    const gross = parseFloat((transportTotal + venueTotal + cateringTotal + wasteTotal).toFixed(2));
    const offset = parseFloat((eventTreesOffset * 0.025).toFixed(2));

    return {
      total: Math.max(0.05, parseFloat((gross - offset).toFixed(2))),
      gross: gross,
      offset: offset,
      transport: parseFloat(transportTotal.toFixed(2)),
      venue: parseFloat(venueTotal.toFixed(2)),
      catering: parseFloat(cateringTotal.toFixed(2)),
      waste: parseFloat(wasteTotal.toFixed(2)),
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
    if (actions.heatPump) seq += 1.8;
    if (actions.compost) seq += (wasteCompostKg * 0.0005);
    return parseFloat(seq.toFixed(2));
  };

  const eventCalcResults = calcEventEmissionsDetailed();
  const scope1Val = calcScope1();
  const scope2Val = calcScope2();
  const scope3Val = calcScope3();
  const sequestrationVal = calcSequestration();

  const grossTotal = evalTarget === 'event' ? eventCalcResults.gross : parseFloat((scope1Val + scope2Val + scope3Val).toFixed(2));
  const netTotal = evalTarget === 'event' ? eventCalcResults.total : Math.max(0.1, parseFloat((grossTotal - sequestrationVal).toFixed(2)));

  return (
    <div style={{ backgroundColor: 'var(--color-surface)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="eval-header">
        <div className="eval-header-inner">
          <button onClick={onBackHome} className="eval-logo" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M 12,2 C 11.5,4 11.5,4.5 11,5.5 C 10.5,5 9.5,4 8,3 C 8,4.5 8.5,5.5 8.5,6 C 7.5,5.5 6,5 5,5 C 5.5,6 6,7 7,8 C 5,7.5 3.5,7 2,7 C 3,8 4.5,9.5 5.5,10 C 4.5,10 3.5,10.5 2.5,10.5 C 3.5,11.5 5,12 6,12 C 5,13 4,14 3,15 C 4.5,14.5 5.5,14 6.5,13.5 C 6,14.5 5.5,16 5.5,17 C 6.5,16 7.5,15 8,14 C 8.5,15.5 9,17 9.5,18.5 C 10.5,18 11.5,17.5 12,17.5 L 12,22 L 12.5,22 L 12.5,17.5 C 13,17.5 14,18 15,18.5 C 15.5,17 16,15.5 16.5,14 C 17,15 18,16 19,17 C 19,16 18.5,14.5 18,13.5 C 19,14 20,14.5 21.5,15 C 20.5,14 19.5,13 18.5,12 C 19.5,12 21,11.5 22,10.5 C 21,10.5 20,10 19,10 C 20,9.5 21.5,8 22.5,7 C 21,7 19.5,7.5 16.5,3 C 15,4 14,5 13.5,5.5 C 13,4.5 13,4 12.5,2 L 12,2 Z"/>
            </svg>
            <span>ERABLE <strong>GES</strong></span>
          </button>

          <div className="eval-header-progress">
            <div className="header-step-pills">
              <span className={`step-pill ${step === 0 ? 'active' : step > 0 ? 'done' : ''}`} onClick={() => setStep(0)}>Accueil</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`} onClick={() => setStep(1)}>
                {evalTarget === 'event' ? 'Événement' : 'Profil & Secteur'}
              </span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`} onClick={() => setStep(2)}>Détail &amp; Mode</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`} onClick={() => setStep(3)}>
                {evalTarget === 'event' ? 'Lieu & Énergie' : 'Énergie'}
              </span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 4 ? 'active' : step > 4 ? 'done' : ''}`} onClick={() => setStep(4)}>
                {evalTarget === 'event' ? 'Transports' : 'Transports'}
              </span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 5 ? 'active' : step > 5 ? 'done' : ''}`} onClick={() => setStep(5)}>
                {evalTarget === 'event' ? 'Restauration' : 'Consommation'}
              </span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 6 ? 'active' : step > 6 ? 'done' : ''}`} onClick={() => setStep(6)}>
                {evalTarget === 'event' ? 'Scénographie' : 'Spécificités'}
              </span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 7 ? 'active' : ''}`} onClick={() => setStep(7)}>Résultats</span>
            </div>
            <span className="mobile-step-counter">Étape {step} sur 7</span>
          </div>

          <div className="eval-header-actions">
            <span className="eval-user-badge" style={{ background: '#f0fdf4', color: '#059669', border: '1px solid #bbf7d0', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {evalTarget === 'event' ? <Ticket size={14} /> : <Building size={14} />}
              {evalTarget === 'event' ? '🎪 Événement' : sector.toUpperCase()} • {detailLevel === 'level1' ? 'Rapide' : 'Détaillé'}
            </span>
            <button onClick={onBackHome} className="btn-eval-back">
              <X size={16} /> Quitter
            </button>
          </div>
        </div>

        <div className="eval-global-progress">
          <div className="eval-global-fill" style={{ width: `${(step / 7) * 100}%` }} />
        </div>
      </header>

      {/* Main Layout */}
      <main className={`eval-main ${step === 0 || evalMode === 'conversational' ? 'onboarding-main' : ''}`}>
        <div className="eval-wizard-panel" style={{ width: '100%' }}>
          
          {/* STEP 0: Onboarding */}
          {step === 0 && (
            <div className="eval-step active onboarding-step-view">
              <div className="onboarding-header">
                <h2>Évaluation de l'empreinte carbone</h2>
                <p>Choisissez le périmètre d'analyse : Organisation annuelle ou Événement ponctuel</p>
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

          {/* STEP 1: CARACTÉRISTIQUES (ÉVÉNEMENT VS ORGANISATION) */}
          {step === 1 && evalTarget === 'event' && (
            <div className="eval-step active">
              <div className="onboarding-header" style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#059669', padding: '6px 16px', borderRadius: '9999px', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px' }}>
                  <Ticket size={18} />
                  Évaluation d'empreinte carbone d'un événement
                </div>
                <h2>Étape 1/7 : Caractéristiques de l'Événement</h2>
                <p>Adapté à tout type d'organisation : réunions, conférences, ateliers, formations, festivals, etc.</p>
              </div>

              <div className="form-card-group">
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                    Type d'événement <span style={{ color: '#e11d48' }}>*</span>
                  </label>
                  <select value={eventType} onChange={(e) => setEventType(e.target.value)} className="eval-select">
                    <option value="conference">Conférence / Forum / Congrès</option>
                    <option value="reunion">Réunion d'affaires / Concertation</option>
                    <option value="festival">Festival / Événement culturel / Spectacle</option>
                    <option value="atelier">Atelier / Formation / Séminaire</option>
                    <option value="concert">Concert / Rassemblement communautaire</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Nombre de participants <span style={{ color: '#e11d48' }}>*</span>
                    </label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={eventParticipants} onChange={(e) => setEventParticipants(Number(e.target.value))} />
                      <span className="unit-chip">pers</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Nombre de jours de l'événement <span style={{ color: '#e11d48' }}>*</span>
                    </label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={eventDays} onChange={(e) => setEventDays(Number(e.target.value))} />
                      <span className="unit-chip">jour(s)</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Type de lieu <span style={{ color: '#e11d48' }}>*</span>
                    </label>
                    <select value={eventVenueType} onChange={(e) => setEventVenueType(e.target.value)} className="eval-select">
                      <option value="salle_communautaire">Salle communautaire / Municipale</option>
                      <option value="centre_congres">Centre de congrès / Hôtel</option>
                      <option value="plein_air">Site plein air / Parc naturel</option>
                      <option value="ecole">Établissement scolaire / Cégep</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Format <span style={{ color: '#e11d48' }}>*</span>
                    </label>
                    <select value={eventFormat} onChange={(e) => setEventFormat(e.target.value)} className="eval-select">
                      <option value="presentiel">Présentiel</option>
                      <option value="hybride">Hybride (Présentiel + Virtuel)</option>
                      <option value="virtuel">100% Virtuel (Vidéoconférence)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(0)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(2)}>
                  Continuer vers le Niveau &amp; Mode <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 1: ORGANISATION */}
          {step === 1 && evalTarget === 'organisation' && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_profile.png" alt="Profil" className="illus-step-img" />
              </div>
              <h2 className="step-question">Étape 1/7 : Profil Organisationnel &amp; Secteur</h2>
              <p className="step-hint">Sélectionnez le secteur d'activité de votre organisation dans L'Érable.</p>

              <div className="form-section-title">1. Type d'acteur</div>
              <div className="profile-choice-grid select-5-columns">
                {[
                  { id: 'citizen', title: 'Citoyen', desc: 'Ménage.', icon: User },
                  { id: 'organisation', title: 'Organisation', desc: 'OBNL.', icon: Users },
                  { id: 'company', title: 'Entreprise', desc: 'PME.', icon: Building },
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

              <div className="form-section-title" style={{ marginTop: '24px' }}>2. Secteur d'activité (12 Secteurs Structurés)</div>
              <div className="eval-field" style={{ marginTop: '12px' }}>
                <div className="select-wrapper">
                  <select value={sector} onChange={(e) => setSector(e.target.value)} className="eval-select">
                    <option value="education">1. Éducation (Primaires, Secondaires, Cégeps, Universités)</option>
                    <option value="environnement">2. Environnement &amp; Foresterie (Bassin versant, Conservation, Reforestation)</option>
                    <option value="agriculture">3. Agriculture &amp; Agroalimentaire (43% emplois L'Érable, Érablières, Bovins)</option>
                    <option value="sante">4. Santé &amp; Services sociaux (Hôpitaux, Cliniques, Urgences)</option>
                    <option value="jeunesse">5. Jeunesse &amp; Loisirs (Camps de jour, Équipements sportifs)</option>
                    <option value="communautaire">6. Communautaire &amp; OBNL (CDC de L'Érable, Bénévoles)</option>
                    <option value="aide_alimentaire">7. Aide Alimentaire &amp; Banques alimentaires (Frigos, Antigaspillage)</option>
                    <option value="restauration">8. Restauration &amp; Commerce (Cuisines, Aliments locaux)</option>
                    <option value="art">9. Art, Culture &amp; Spectacles (Scénographie, Audio, Expositions)</option>
                    <option value="politique">10. Politique &amp; Municipalités (Bâtiments publics, Éclairage)</option>
                    <option value="pme">11. PME, Transformation &amp; Industrie (Procédés, Fret, Serveurs)</option>
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

          {/* STEP 2: NIVEAU & MODE */}
          {step === 2 && (
            <div className="eval-step active detail-level-step-view">
              <div className="onboarding-header">
                <h2>Étape 2/7 : Niveau de détail ({evalTarget === 'event' ? 'Événement' : sector.toUpperCase()})</h2>
                <p>Choisissez le degré de précision souhaité pour l'évaluation.</p>
              </div>

              <div className="detail-level-grid">
                {[
                  {
                    id: 'level1',
                    title: 'Niveau 1 - Rapide (5 min)',
                    duration: 'Estimation express',
                    desc: 'Grandes lignes et ordres de grandeur',
                    icon: Zap,
                    color: '#f59e0b'
                  },
                  {
                    id: 'level2',
                    title: 'Niveau 2 - Détaillé (15 min)',
                    duration: 'Précision recommandée',
                    desc: 'Surfaces, kilomètres, traiteur, déchets et énergie',
                    icon: BarChart2,
                    color: '#059669'
                  },
                  {
                    id: 'level3',
                    title: 'Niveau 3 - Expert (30 min)',
                    duration: 'Certification Carbone',
                    desc: 'Bilan complet certifié conforme ISO 20121 / ISO 14064',
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
                  Continuer vers Lieu &amp; Énergie <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: LIEU & ÉNERGIE (DÉDIÉ ÉVÉNEMENT OU ORGANISATION) */}
          {step === 3 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_energy.png" alt="Énergie" className="illus-step-img" />
              </div>
              <h2 className="step-question">
                Étape 3/7 : {evalTarget === 'event' ? "Lieu & Énergie de l'Événement" : "Énergie & Bâtiments de l'Organisation"}
              </h2>
              <p className="step-hint">
                {evalTarget === 'event' 
                  ? "Consommations électriques de la salle, éclairage scénique et groupes électrogènes." 
                  : "Superficie des locaux et source de chauffage principale."}
              </p>

              {evalTarget === 'event' ? (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Zap size={18} /></div>
                      <span>1. Énergie du Lieu &amp; Équipements Temporaires</span>
                    </div>
                    <span className="form-card-badge">Lieu Événementiel</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Superficie de la salle / du site :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={eventVenueSurfaceM2} onChange={(e) => setEventVenueSurfaceM2(Number(e.target.value))} />
                        <span className="unit-chip">m²</span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Génératrices temporaires (Diesel) :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={eventGeneratorFuelLiters} onChange={(e) => setEventGeneratorFuelLiters(Number(e.target.value))} />
                        <span className="unit-chip">Litres</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Éclairage scénique &amp; Régie audiovisuelle estimée :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={eventStageLightingKwh} onChange={(e) => setEventStageLightingKwh(Number(e.target.value))} />
                      <span className="unit-chip">kWh</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Building size={18} /></div>
                      <span>1. Bâtiments &amp; Consommation Électrique</span>
                    </div>
                    <span className="form-card-badge">Infrastructure</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Superficie totale occupée :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={surfaceM2} onChange={(e) => setSurfaceM2(Number(e.target.value))} />
                        <span className="unit-chip">m²</span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Consommation électricité annuelle :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={energyKwh} onChange={(e) => setEnergyKwh(Number(e.target.value))} />
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
                  Continuer vers Transports <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: TRANSPORTS & DÉPLACEMENTS (DÉDIÉ ÉVÉNEMENT OU ORGANISATION) */}
          {step === 4 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_mobility.png" alt="Mobilité" className="illus-step-img" />
              </div>
              <h2 className="step-question">
                Étape 4/7 : {evalTarget === 'event' ? "Transports des Participants & Conférenciers" : "Transports & Flotte de l'Organisation"}
              </h2>
              <p className="step-hint">
                {evalTarget === 'event' 
                  ? "Distances parcourues par les participants et mode de transport majoritaire." 
                  : "Véhicules d'entreprise et kilomètres domicile-travail."}
              </p>

              {evalTarget === 'event' ? (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Car size={18} /></div>
                      <span>1. Déplacements des Participants &amp; Hébergement</span>
                    </div>
                    <span className="form-card-badge">Transports Événement</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Distance moyenne aller-retour :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={eventAvgDistanceKm} onChange={(e) => setEventAvgDistanceKm(Number(e.target.value))} />
                        <span className="unit-chip">km aller-retour</span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Mode de transport majoritaire :</label>
                      <select value={eventMainTransportMode} onChange={(e) => setEventMainTransportMode(e.target.value)} className="eval-select">
                        <option value="car_solo">Voiture solo (1-2 pers)</option>
                        <option value="carpool">Covoiturage (3+ pers)</option>
                        <option value="bus">Autobus charter / Navette</option>
                        <option value="transit">Transport en commun</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Conférenciers &amp; Invités spéciaux :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={eventSpeakerCount} onChange={(e) => setEventSpeakerCount(Number(e.target.value))} />
                        <span className="unit-chip">invités</span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nuitées d'hôtel réservées dans L'Érable :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={eventHotelNightsCount} onChange={(e) => setEventHotelNightsCount(Number(e.target.value))} />
                        <span className="unit-chip">nuitées</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Truck size={18} /></div>
                      <span>1. Flotte de Véhicules &amp; Trajets</span>
                    </div>
                    <span className="form-card-badge">Flotte</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre de véhicules :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={fleetCount} onChange={(e) => setFleetCount(Number(e.target.value))} />
                        <span className="unit-chip">autos</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Kilométrage annuel :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={kmCar} onChange={(e) => setKmCar(Number(e.target.value))} />
                        <span className="unit-chip">km/an</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(3)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(5)}>
                  Continuer vers Restauration &amp; Traiteur <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: RESTAURATION & TRAITEUR (DÉDIÉ ÉVÉNEMENT OU ORGANISATION) */}
          {step === 5 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_consumption.png" alt="Consommation" className="illus-step-img" />
              </div>
              <h2 className="step-question">
                Étape 5/7 : {evalTarget === 'event' ? "Restauration, Traiteur & Déchets de l'Événement" : "Alimentation & Déchets de l'Organisation"}
              </h2>
              <p className="step-hint">
                {evalTarget === 'event' 
                  ? "Repas servis, traiteur local de L'Érable et vaisselle réutilisable." 
                  : "Achats alimentaires et gestion des déchets."}
              </p>

              {evalTarget === 'event' ? (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Utensils size={18} /></div>
                      <span>1. Service de Restauration &amp; Traiteur Local</span>
                    </div>
                    <span className="form-card-badge">Traiteur &amp; Repas</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Type de traiteur :</label>
                      <select value={eventCateringType} onChange={(e) => setEventCateringType(e.target.value)} className="eval-select">
                        <option value="traiteur_local">Traiteur local &amp; Produits de L'Érable</option>
                        <option value="buffet">Buffet traditionnel</option>
                        <option value="pauses_cafe">Pauses-café uniquement</option>
                        <option value="aucun">Aucun repas servi</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre total de repas servis :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={eventMealsCount} onChange={(e) => setEventMealsCount(Number(e.target.value))} />
                        <span className="unit-chip">repas</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Part de nourriture de circuits courts (MRC de L'Érable) : {eventLocalFoodPct}%
                    </label>
                    <input type="range" min="0" max="100" step="5" value={eventLocalFoodPct} onChange={(e) => setEventLocalFoodPct(Number(e.target.value))} style={{ width: '100%' }} />
                  </div>
                </div>
              ) : (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><ShoppingBag size={18} /></div>
                      <span>1. Cantine &amp; Consommation</span>
                    </div>
                    <span className="form-card-badge">Scope 3</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Repas annuels :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={annualMealsCount} onChange={(e) => setAnnualMealsCount(Number(e.target.value))} />
                        <span className="unit-chip">repas/an</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Compost annuel :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={wasteCompostKg} onChange={(e) => setWasteCompostKg(Number(e.target.value))} />
                        <span className="unit-chip">kg/an</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(4)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(6)}>
                  Continuer vers Scénographie &amp; Actions <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: SCÉNOGRAPHIE & ACTIONS ÉCORESPONSABLES */}
          {step === 6 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_actions.png" alt="Actions" className="illus-step-img" />
              </div>
              <h2 className="step-question">
                Étape 6/7 : {evalTarget === 'event' ? "Scénographie, Goodies & Compensation Événementielle" : `Spécificités du Secteur ${sector.toUpperCase()}`}
              </h2>
              <p className="step-hint">
                {evalTarget === 'event' 
                  ? "Réemploi des décors, cadeaux promotionnels et reboisement dans L'Érable." 
                  : "Ajustements sectoriels et bilan des actions écologiques."}
              </p>

              {evalTarget === 'event' ? (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Palette size={18} /></div>
                      <span>1. Scénographie &amp; Offset Écoresponsable</span>
                    </div>
                    <span className="form-card-badge">Actions Événement</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Taux de réemploi des décors :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={eventScenographyReusePct} onChange={(e) => setEventScenographyReusePct(Number(e.target.value))} />
                        <span className="unit-chip">%</span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Arbres plantés en compensation :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={eventTreesOffset} onChange={(e) => setEventTreesOffset(Number(e.target.value))} />
                        <span className="unit-chip">arbres</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="form-card-group">
                  <div className="form-card-header">
                    <div className="form-card-title">
                      <div className="form-card-title-icon"><Trees size={18} /></div>
                      <span>1. Actions Positives &amp; Reboisement</span>
                    </div>
                    <span className="form-card-badge">Séquestration</span>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre d'arbres plantés dans L'Érable :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={treesPlanted} onChange={(e) => setTreesPlanted(Number(e.target.value))} />
                      <span className="unit-chip">arbres</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(5)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-calculate" onClick={() => setStep(7)}>
                  Calculer mon Bilan GES &amp; Obtenir la Certification <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 7: RÉSULTATS & CERTIFICATION */}
          {step === 7 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_results.png" alt="Résultats" className="illus-step-img" />
              </div>

              <div className="results-header-text">
                <h2 className="step-question">
                  {evalTarget === 'event' ? 'Bilan Carbone de l\'Événement Certifié' : `Bilan GES — ${sector.toUpperCase()}`}
                </h2>
                <p className="step-hint">
                  {evalTarget === 'event' 
                    ? `Résultats pour l'événement (${eventParticipants} participants sur ${eventDays} jours)` 
                    : "Analyse certifiée selon le cadre de la MRC de L'Érable."}
                </p>
              </div>

              <div className="results-summary-card" style={{ background: '#0f172a', color: '#ffffff', padding: '28px', borderRadius: '24px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#34d399', fontWeight: 800 }}>
                  {evalTarget === 'event' ? 'EMPREINTE CARBONE TOTALE NETTE DE L\'ÉVÉNEMENT' : 'EMPREINTE TOTALE NETTE ESTIMÉE'}
                </div>
                <div style={{ fontSize: '3.2rem', fontWeight: 800, margin: '8px 0', fontFamily: 'var(--font-heading)', color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  {netTotal} <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#94a3b8' }}>tCO₂e</span>
                </div>

                {evalTarget === 'event' && (
                  <div style={{ color: '#a7f3d0', fontSize: '1.05rem', fontWeight: 700, marginTop: '8px' }}>
                    ➔ Ratio spécifique : <strong>{eventCalcResults.perParticipantPerDay} kg CO₂e / participant / jour</strong>
                  </div>
                )}
              </div>

              <div className="results-actions" style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(0)}>
                  <ArrowLeft size={16} /> Nouvelle Évaluation
                </button>
                <button className="btn-results-home" onClick={onBackHome} style={{ background: '#059669', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: 700, cursor: 'pointer' }}>
                  Terminer et Sauvegarder
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
