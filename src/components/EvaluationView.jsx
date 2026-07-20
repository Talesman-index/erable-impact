import React, { useState, useEffect } from 'react';
import { 
  User, Users, Building, GraduationCap, MapPin, 
  Zap, BarChart2, Microscope, MessageSquare, Truck, ShoppingBag, Leaf, Award, 
  ArrowLeft, ArrowRight, X, Send, Download, FileText, Info, ChevronRight, ChevronDown, CheckCircle2, RefreshCw, HelpCircle, Bot, Sparkles, Lightbulb, Car, Trees, Factory, Wheat, Cpu, ShieldCheck, Ticket, Calendar, HeartPulse, Palette, Utensils, Smile, Flag
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
  const [sector, setSector] = useState('education'); // 12 Sectors
  const [orgSize, setOrgSize] = useState('medium'); 
  
  // Level & Mode State (TogetherSense Framework)
  const [detailLevel, setDetailLevel] = useState('level2'); // 'level1' | 'level2' | 'level3'
  const [evalMode, setEvalMode] = useState('form'); 

  // =========================================================================
  // EXHAUSTIVE DATA FIELDS (FOR ALL 12 SECTORS & ALL 3 LEVELS FROM SPEC)
  // =========================================================================

  // 1. SECTEUR ÉDUCATION
  const [eduType, setEduType] = useState('secondaire'); 
  const [studentCount, setStudentCount] = useState(850);
  const [staffCount, setStaffCount] = useState(65);
  const [schoolBusCount, setSchoolBusCount] = useState(8);
  const [schoolBusKmAnnual, setSchoolBusKmAnnual] = useState(48000);
  const [schoolBusFuelType, setSchoolBusFuelType] = useState('diesel');
  const [cafeteriaType, setCafeteriaType] = useState('interne'); 
  const [annualMealsCount, setAnnualMealsCount] = useState(45000);

  // 2. SECTEUR ENVIRONNEMENT & FORESTERIE
  const [envOrgType, setEnvOrgType] = useState('bassin_versant');
  const [volunteerCount, setVolunteerCount] = useState(35);
  const [interventionSurfaceHa, setInterventionSurfaceHa] = useState(250);
  const [fieldVehiclesCount, setFieldVehiclesCount] = useState(4);
  const [fieldFuelLiters, setFieldFuelLiters] = useState(2800);

  // 3. SECTEUR AGRICULTURE & ÉRABLIÈRE (43% L'Érable)
  const [agriProdTypes, setAgriProdTypes] = useState('laitiere');
  const [agriHa, setAgriHa] = useState(65);
  const [agriLivestockCount, setAgriLivestockCount] = useState(55);
  const [agriDieselLiters, setAgriDieselLiters] = useState(3200);
  const [agriFertilizerKg, setAgriFertilizerKg] = useState(1200);
  const [manureType, setManureType] = useState('lisier'); 
  const [agriTapsCount, setAgriTapsCount] = useState(3500); 

  // 4. SECTEUR SANTÉ & SERVICES SOCIAUX
  const [healthInstType, setHealthInstType] = useState('clinique'); 
  const [healthBedsCount, setHealthBedsCount] = useState(40);
  const [patientCountAnnual, setPatientCountAnnual] = useState(15000);
  const [biomedicalWasteKg, setBiomedicalWasteKg] = useState(450);
  const [ambulancesCount, setAmbulancesCount] = useState(2);
  const [ambulanceKmAnnual, setAmbulanceKmAnnual] = useState(24000);

  // 5. SECTEUR JEUNESSE & LOISIRS
  const [youthServedAnnual, setYouthServedAnnual] = useState(450);
  const [youthAnimatorsCount, setYouthAnimatorsCount] = useState(18);
  const [youthOutingsKm, setYouthOutingsKm] = useState(3500);

  // 6. SECTEUR COMMUNAUTAIRE & OBNL (CDC L'Érable)
  const [communityMembersCount, setCommunityMembersCount] = useState(220);
  const [communityActivitiesCount, setCommunityActivitiesCount] = useState(35);

  // 7. SECTEUR AIDE ALIMENTAIRE & BANQUES ALIMENTAIRES
  const [foodDistributedTonnes, setFoodDistributedTonnes] = useState(45);
  const [foodSavedKgPerYear, setFoodSavedKgPerYear] = useState(12000);
  const [refrigeratorsCount, setRefrigeratorsCount] = useState(6);

  // 8. SECTEUR RESTAURATION & COMMERCE
  const [restaurantCoversPerDay, setRestaurantCoversPerDay] = useState(120);
  const [kitchenType, setKitchenType] = useState('complete');
  const [propaneGasVolume, setPropaneGasVolume] = useState(1800);

  // 9. SECTEUR ART, CULTURE & SPECTACLES
  const [cultureSpectatorsAnnual, setCultureSpectatorsAnnual] = useState(8500);
  const [eventsCountAnnual, setEventsCountAnnual] = useState(24);
  const [scenographyReusePct, setScenographyReusePct] = useState(65);

  // 10. SECTEUR POLITIQUE & MUNICIPALITÉS
  const [municipalBuildingsCount, setMunicipalBuildingsCount] = useState(8);
  const [publicLightingKwh, setPublicLightingKwh] = useState(45000);
  const [snowPlowDieselLiters, setSnowPlowDieselLiters] = useState(12500);

  // 11. SECTEUR PME & INDUSTRIE
  const [industrialProcessKwh, setIndustrialProcessKwh] = useState(85000);
  const [freightKm, setFreightKm] = useState(18000);

  // 12. SECTEUR CITOYEN & MÉNAGE
  const [citizenHouseholdSize, setCitizenHouseholdSize] = useState(3);

  // COMMON BUILDINGS & ENERGY FIELDS (STEP 3)
  const [surfaceM2, setSurfaceM2] = useState(450);
  const [buildingCount, setBuildingCount] = useState(2);
  const [buildDecade, setBuildDecade] = useState('2000s');
  const [energyBillDollars, setEnergyBillDollars] = useState(4200);
  const [energyKwh, setEnergyKwh] = useState(32000);
  const [heatingType, setHeatingType] = useState('hydro');
  const [heatingFuelAmount, setHeatingFuelAmount] = useState(1800);
  const [acUnitsCount, setAcUnitsCount] = useState(2);
  const [specializedKwh, setSpecializedKwh] = useState(8500);
  const [solarOnsiteKwh, setSolarOnsiteKwh] = useState(2400);

  // COMMON MOBILITY FIELDS (STEP 4)
  const [workDaysWeek, setWorkDaysWeek] = useState(5);
  const [dailyCommuteKm, setDailyCommuteKm] = useState(28);
  const [kmCar, setKmCar] = useState(15000);
  const [carType, setCarType] = useState('gasoline');
  const [fleetCount, setFleetCount] = useState(3);
  const [staffTravelCount, setStaffTravelCount] = useState(6);

  // COMMON CONSUMPTION & WASTE FIELDS (STEP 5)
  const [dietType, setDietType] = useState('balanced');
  const [localFoodPct, setLocalFoodPct] = useState(50);
  const [paperReams, setPaperReams] = useState(22);
  const [wasteCompostKg, setWasteCompostKg] = useState(350);

  // EVENT SPECIFIC FIELDS
  const [eventType, setEventType] = useState('conference');
  const [eventParticipants, setEventParticipants] = useState(60);
  const [eventDays, setEventDays] = useState(2);
  const [eventVenueType, setEventVenueType] = useState('salle_communautaire');
  const [eventFormat, setEventFormat] = useState('presentiel');
  const [eventCateringType, setEventCateringType] = useState('traiteur_local');
  const [eventReusableTableware, setEventReusableTableware] = useState(true);
  const [eventAvgDistanceKm, setEventAvgDistanceKm] = useState(40);

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

  // CONVERSATIONAL MODE STATE
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('breakdown');

  // SMART SECTOR METADATA HELPER
  const getSectorMeta = () => {
    switch (sector) {
      case 'education':
        return {
          title: "Éducation & Établissements Scolaires",
          icon: GraduationCap,
          energyHint: "Consommation des classes, gymnases, bibliothèques et laboratoires scolaires.",
          mobilityHint: "Transport par autobus scolaires, déplacements des élèves et professeurs.",
          wasteHint: "Papier à imprimer, repas servis à la cafétéria et tri sélectif.",
          specificTitle: "Infrastructure Pédagogique & Parc d'Autobus Scolaires"
        };
      case 'agriculture':
        return {
          title: "Agriculture, Érablières & Élevage (MRC L'Érable)",
          icon: Wheat,
          energyHint: "Électricité pour la traite, la réfrigération du lait et l'évaporateur d'érablière.",
          mobilityHint: "Machinerie agricole (tracteurs, moissonneuses) et camions de livraison.",
          wasteHint: "Engrais NPK, gestion des fumiers (lisier/compost) et aliments pour animaux.",
          specificTitle: "Superficies Cultivées, Entailles & Machinerie Agricole"
        };
      case 'sante':
        return {
          title: "Santé, Hôpitaux & Services Sociaux",
          icon: HeartPulse,
          energyHint: "Énergie des unités de soins 24/7, ventilation médicale et stérilisation.",
          mobilityHint: "Ambulances, véhicules de soins à domicile et téléconsultations.",
          wasteHint: "Déchets biomédicaux, stérilisation et approvisionnement médical.",
          specificTitle: "Capacité Hospitalière, Déchets Biomédicaux & Ambulances"
        };
      case 'environnement':
        return {
          title: "Environnement, Foresterie & Conservation",
          icon: Trees,
          energyHint: "Locaux administratifs, centres d'interprétation et ateliers de terrain.",
          mobilityHint: "Déplacements d'intervention sur le territoire (4x4, VTT, bateaux, drones).",
          wasteHint: "Matériaux d'aménagement écologique (bois, pierre, géotextile).",
          specificTitle: "Superficie de Territoire Géré, Aménagements & Reboisement"
        };
      case 'aide_alimentaire':
        return {
          title: "Aide Alimentaire & Banques Alimentaires",
          icon: Utensils,
          energyHint: "Électricité des installations frigorifiques et chambres froides.",
          mobilityHint: "Tournées de collecte et de distribution alimentaire dans L'Érable.",
          wasteHint: "Nourriture sauvée du gaspillage (kg/an) et valorisation des résidus.",
          specificTitle: "Tournées de Distribution & Nourriture Sauvée du Gaspillage"
        };
      case 'restauration':
        return {
          title: "Restauration, Gastronomie & Commerces",
          icon: Utensils,
          energyHint: "Électricité et gaz/propane pour la cuisson, les frigos et l'extraction.",
          mobilityHint: "Livraisons des fournisseurs régionaux et transport des commandes.",
          wasteHint: "Gaspillage alimentaire %, vaisselle réutilisable et circuits courts %.",
          specificTitle: "Capacité de Couverts, Cuisson & Approvisionnement Local"
        };
      case 'art':
        return {
          title: "Art, Culture, Scènes & Spectacles",
          icon: Palette,
          energyHint: "Éclairage scénique, régie audiovisuelle et chauffage des salles.",
          mobilityHint: "Tournées des artistes, transport des décors et des spectateurs.",
          wasteHint: "Réemploi de la scénographie %, affiches et décors réutilisés.",
          specificTitle: "Fréquentation, Équipements Scéniques & Réemploi des Décors"
        };
      case 'politique':
        return {
          title: "Politique, Municipalités & Services Publics",
          icon: Flag,
          energyHint: "Hôtels de ville, casernes, garages municipaux et éclairage public.",
          mobilityHint: "Camions de déneigement, véhicules de voirie et patrouilles.",
          wasteHint: "Gestion des matières résiduelles de la municipalité et parcs.",
          specificTitle: "Patrimoine Municipal, Éclairage Public & Flotte de Déneigement"
        };
      case 'pme':
        return {
          title: "PME, Transformation & Industrie",
          icon: Factory,
          energyHint: "Procédés industriels, machineries d'usine et serveurs.",
          mobilityHint: "Transport de fret, camionnage et déplacements des représentants.",
          wasteHint: "Déchets industriels, emballages de transport et recyclage.",
          specificTitle: "Procédés Industriels, Fret Logistique & Serveurs"
        };
      case 'jeunesse':
        return {
          title: "Jeunesse, Camps de Jour & Loisirs",
          icon: Smile,
          energyHint: "Locaux de loisirs, chalet de parc, douches et douches des camps.",
          mobilityHint: "Sorties éducatives, minibus et camps résidentiels.",
          wasteHint: "Matériel sportif durable, collations locales et compostage.",
          specificTitle: "Jeunes Accompagnés, Sorties & Équipements de Loisirs"
        };
      case 'communautaire':
        return {
          title: "Communautaire & OBNL (CDC L'Érable)",
          icon: Users,
          energyHint: "Bureaux de l'organisme, chauffage et salles de réunion.",
          mobilityHint: "Déplacements pour la mission sociale et visites des bénévoles.",
          wasteHint: "Fournitures de bureau, ateliers zéro déchet et bac brun.",
          specificTitle: "Bénévoles, Heures de Service & Impact Social Régional"
        };
      default:
        return {
          title: "Citoyen & Empreinte du Ménage",
          icon: User,
          energyHint: "Électricité et chauffage du domicile résidentiel.",
          mobilityHint: "Déplacements personnels en voiture ou transport en commun.",
          wasteHint: "Alimentation du ménage, bac vert et bac brun compost.",
          specificTitle: "Caractéristiques du Logement & Habitudes du Ménage"
        };
    }
  };

  const sectorMeta = getSectorMeta();
  const SectorIcon = sectorMeta.icon;

  // RIGOROUS SCOPE 1-2-3 CALCULATION MODEL
  const calcEventEmissions = () => {
    if (eventFormat === 'virtuel') return parseFloat((eventParticipants * eventDays * 0.0008).toFixed(2));
    let transportEmissions = (eventParticipants * eventAvgDistanceKm * 0.00018);
    let venueEmissions = (eventParticipants * eventDays * 0.0025);
    let cateringEmissions = (eventParticipants * eventDays * (eventCateringType === 'traiteur_local' ? 0.0012 : 0.0028));
    if (eventReusableTableware) cateringEmissions *= 0.7;
    return parseFloat((transportEmissions + venueEmissions + cateringEmissions).toFixed(2));
  };

  const calcScope1 = () => {
    if (evalTarget === 'event') return parseFloat((calcEventEmissions() * 0.45).toFixed(2));
    let s1 = 0;
    if (heatingType === 'oil') s1 += (heatingFuelAmount * 2.7) / 1000;
    else if (heatingType === 'gas') s1 += (heatingFuelAmount * 1.9) / 1000;
    
    if (carType === 'gasoline') s1 += (kmCar * 0.00019);
    else if (carType === 'hybrid') s1 += (kmCar * 0.00011);
    
    if (sector === 'agriculture' && profile !== 'citizen') {
      s1 += (agriLivestockCount * 1.2) + (agriFertilizerKg * 0.005) + (agriDieselLiters * 0.0027);
    }
    if (sector === 'politique') {
      s1 += (snowPlowDieselLiters * 0.0027);
    }
    if (sector === 'education' && detailLevel !== 'level1') {
      s1 += (schoolBusCount * (schoolBusKmAnnual / Math.max(1, schoolBusCount)) * 0.0009);
    }
    return parseFloat(s1.toFixed(2));
  };

  const calcScope2 = () => {
    if (evalTarget === 'event') return parseFloat((calcEventEmissions() * 0.2).toFixed(2));
    let kwh = detailLevel === 'level1' ? energyBillDollars * 7.5 : energyKwh;
    if (detailLevel === 'level3') kwh += specializedKwh;
    if (sector === 'pme' || sector === 'manufacturier') kwh += industrialProcessKwh;
    if (sector === 'politique') kwh += publicLightingKwh;
    let s2 = (kwh * 0.0013) / 1000;
    return parseFloat(s2.toFixed(2));
  };

  const calcScope3 = () => {
    if (evalTarget === 'event') return parseFloat((calcEventEmissions() * 0.35).toFixed(2));
    let s3 = 0;
    if (dietType === 'vegan') s3 += 1.2;
    else if (dietType === 'balanced') s3 += 2.2;
    else if (dietType === 'meat') s3 += 3.5;

    s3 *= (1 - (localFoodPct * 0.002));
    s3 += (paperReams * 0.004);

    const commuteKmAnnual = workDaysWeek * dailyCommuteKm * 46;
    s3 += (commuteKmAnnual * 0.00012);

    if (sector === 'aide_alimentaire' || sector === 'communautaire') {
      s3 -= (foodSavedKgPerYear * 0.0025); 
    }

    return parseFloat(Math.max(0.2, s3).toFixed(2));
  };

  const calcSequestration = () => {
    let seq = 0;
    seq += treesPlanted * 0.025;
    if (sector === 'environnement') seq += (interventionSurfaceHa * 0.3);
    if (sector === 'agriculture') seq += (agriHa * 0.15);
    if (actions.heatPump) seq += 1.8;
    if (actions.compost) seq += (wasteCompostKg * 0.0005);
    return parseFloat(seq.toFixed(2));
  };

  const scope1Val = calcScope1();
  const scope2Val = calcScope2();
  const scope3Val = calcScope3();
  const sequestrationVal = calcSequestration();

  const grossTotal = evalTarget === 'event' 
    ? calcEventEmissions() 
    : parseFloat((scope1Val + scope2Val + scope3Val).toFixed(2));
  const netTotal = Math.max(0.1, parseFloat((grossTotal - sequestrationVal).toFixed(2)));

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
              <span className={`step-pill ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`} onClick={() => setStep(1)}>Profil &amp; Secteur</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`} onClick={() => setStep(2)}>Détail &amp; Mode</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`} onClick={() => setStep(3)}>Énergie</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 4 ? 'active' : step > 4 ? 'done' : ''}`} onClick={() => setStep(4)}>Transports</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 5 ? 'active' : step > 5 ? 'done' : ''}`} onClick={() => setStep(5)}>Consommation</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 6 ? 'active' : step > 6 ? 'done' : ''}`} onClick={() => setStep(6)}>Spécificités</span>
              <span className="step-pill-sep">→</span>
              <span className={`step-pill ${step === 7 ? 'active' : ''}`} onClick={() => setStep(7)}>Résultats</span>
            </div>
            <span className="mobile-step-counter">Étape {step} sur 7</span>
          </div>

          <div className="eval-header-actions">
            <span className="eval-user-badge" style={{ background: '#f0fdf4', color: '#059669', border: '1px solid #bbf7d0', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {evalTarget === 'event' ? <Ticket size={14} /> : <SectorIcon size={14} />}
              {evalTarget === 'event' ? 'Événement' : sector.toUpperCase()} • {detailLevel === 'level1' ? 'Rapide' : detailLevel === 'level2' ? 'Détaillé' : 'Expert'}
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
                  <span className="tile-option-subtitle">Réunions, conférences, festivals, ateliers et spectacles.</span>
                </div>
              </div>

              <div className="onboarding-actions" style={{ textAlign: 'center' }}>
                <button type="button" className="btn-onboarding-start" onClick={() => setStep(1)}>
                  Commencer l'évaluation {evalTarget === 'event' ? 'Événementielle' : 'Organisationnelle'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 1: Profil & Secteur */}
          {step === 1 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_profile.png" alt="Profil" className="illus-step-img" />
              </div>
              <h2 className="step-question">Étape 1/7 : Profil &amp; Secteur d'activité</h2>
              <p className="step-hint">Sélectionnez votre secteur pour adapter l'ensemble des questions du diagnostic.</p>

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

              <div className="form-section-title" style={{ marginTop: '24px' }}>2. Localisation &amp; Territoire</div>
              <div className="eval-form-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#1e293b' }}>
                    Localisation / Municipalité de L'Érable <span style={{ color: '#e11d48' }}>*</span>
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

              <div className="form-section-title" style={{ marginTop: '24px' }}>3. Secteur d'activité (12 Secteurs Structurés)</div>
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

          {/* STEP 2: Niveau & Mode */}
          {step === 2 && (
            <div className="eval-step active detail-level-step-view">
              <div className="onboarding-header">
                <h2>Étape 2/7 : Niveau de détail ({sectorMeta.title})</h2>
                <p>Sélectionnez la profondeur d'analyse souhaitée.</p>
              </div>

              <div className="detail-level-grid">
                {[
                  {
                    id: 'level1',
                    title: 'Niveau 1 - Rapide (5 min)',
                    duration: 'Estimation de base',
                    desc: 'Factures globales et ordres de grandeur',
                    icon: Zap,
                    color: '#f59e0b'
                  },
                  {
                    id: 'level2',
                    title: 'Niveau 2 - Détaillé (15-30 min)',
                    duration: 'Précision recommandée',
                    desc: 'Surfaces m², kWh, parc de véhicules, compost, % local',
                    icon: BarChart2,
                    color: '#059669'
                  },
                  {
                    id: 'level3',
                    title: 'Niveau 3 - Expert (1h+)',
                    duration: 'Bilan ISO 14064',
                    desc: 'Audit complet, serveurs, bilans de masse et séquestration',
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
                  Continuer vers Énergie &amp; Bâtiment <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ÉNERGIE & BÂTIMENT (ADAPTÉ AU SECTEUR) */}
          {step === 3 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_energy.png" alt="Énergie" className="illus-step-img" />
              </div>
              <h2 className="step-question">Étape 3/7 : Énergie &amp; Infrastructure ({sectorMeta.title})</h2>
              <p className="step-hint">{sectorMeta.energyHint}</p>

              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Building size={18} /></div>
                    <span>1. Bâtiments &amp; Superficies ({sector.toUpperCase()})</span>
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
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre de bâtiments / sites :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={buildingCount} onChange={(e) => setBuildingCount(Number(e.target.value))} />
                      <span className="unit-chip">sites</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Décennie de construction :</label>
                  <select value={buildDecade} onChange={(e) => setBuildDecade(e.target.value)} className="eval-select">
                    <option value="pre1980">Avant 1980 (Faible isolation)</option>
                    <option value="1980-2000">1980 - 2000 (Standard)</option>
                    <option value="2000s">2000 à aujourd'hui (Haute performance)</option>
                  </select>
                </div>
              </div>

              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Zap size={18} /></div>
                    <span>2. Électricité &amp; Source de Chauffage ({sector.toUpperCase()})</span>
                  </div>
                  <span className="form-card-badge">Scope 1 &amp; Scope 2</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Consommation électricité annuelle :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={energyKwh} onChange={(e) => setEnergyKwh(Number(e.target.value))} />
                      <span className="unit-chip">kWh/an</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Facture énergétique annuelle globale :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={energyBillDollars} onChange={(e) => setEnergyBillDollars(Number(e.target.value))} />
                      <span className="unit-chip">$ CAD</span>
                    </div>
                  </div>
                </div>

                <div className="tile-option-grid" style={{ marginBottom: '16px' }}>
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
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                      Volume annuel consommé ({heatingType === 'gas' ? 'm³ gaz' : 'Litres mazout'}) :
                    </label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={heatingFuelAmount} onChange={(e) => setHeatingFuelAmount(Number(e.target.value))} />
                      <span className="unit-chip">{heatingType === 'gas' ? 'm³' : 'L'}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(2)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(4)}>
                  Continuer vers Transports &amp; Mobilité <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: TRANSPORTS & MOBILITÉ (ADAPTÉ AU SECTEUR) */}
          {step === 4 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_mobility.png" alt="Mobilité" className="illus-step-img" />
              </div>
              <h2 className="step-question">Étape 4/7 : Transports &amp; Logistique ({sectorMeta.title})</h2>
              <p className="step-hint">{sectorMeta.mobilityHint}</p>

              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Truck size={18} /></div>
                    <span>1. Flottes de Véhicules &amp; Machinerie Spécifique</span>
                  </div>
                  <span className="form-card-badge">Scope 1 Flotte</span>
                </div>

                {sector === 'education' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre d'autobus scolaires :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={schoolBusCount} onChange={(e) => setSchoolBusCount(Number(e.target.value))} />
                        <span className="unit-chip">autobus</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Kilométrage annuel total autobus :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={schoolBusKmAnnual} onChange={(e) => setSchoolBusKmAnnual(Number(e.target.value))} />
                        <span className="unit-chip">km/an</span>
                      </div>
                    </div>
                  </div>
                )}

                {sector === 'agriculture' && (
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Diesel consommé par les tracteurs &amp; machinerie :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={agriDieselLiters} onChange={(e) => setAgriDieselLiters(Number(e.target.value))} />
                      <span className="unit-chip">Litres/an</span>
                    </div>
                  </div>
                )}

                {sector === 'sante' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre d'ambulances :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={ambulancesCount} onChange={(e) => setAmbulancesCount(Number(e.target.value))} />
                        <span className="unit-chip">ambulances</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Kilométrage annuel ambulances :</label>
                      <div className="input-unit-wrap">
                        <input type="number" className="eval-input" value={ambulanceKmAnnual} onChange={(e) => setAmbulanceKmAnnual(Number(e.target.value))} />
                        <span className="unit-chip">km/an</span>
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Véhicules de service / d'organisation :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={fleetCount} onChange={(e) => setFleetCount(Number(e.target.value))} />
                      <span className="unit-chip">véhicules</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Kilométrage véhicule principal :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={kmCar} onChange={(e) => setKmCar(Number(e.target.value))} />
                      <span className="unit-chip">km/an</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Car size={18} /></div>
                    <span>2. Déplacements Quotidiens &amp; Missions</span>
                  </div>
                  <span className="form-card-badge">Scope 3 Trajets</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Distance moyenne aller-retour :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={dailyCommuteKm} onChange={(e) => setDailyCommuteKm(Number(e.target.value))} />
                      <span className="unit-chip">km/jour</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Voyages d'affaires / de mission par an :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={staffTravelCount} onChange={(e) => setStaffTravelCount(Number(e.target.value))} />
                      <span className="unit-chip">voyages/an</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(3)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(5)}>
                  Continuer vers Consommation &amp; Déchets <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: CONSOMMATION, ALIMENTATION & DÉCHETS (ADAPTÉ AU SECTEUR) */}
          {step === 5 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_consumption.png" alt="Consommation" className="illus-step-img" />
              </div>
              <h2 className="step-question">Étape 5/7 : Alimentation, Matières &amp; Recyclage ({sectorMeta.title})</h2>
              <p className="step-hint">{sectorMeta.wasteHint}</p>

              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><ShoppingBag size={18} /></div>
                    <span>1. Restauration &amp; Approvisionnement Régional (L'Érable)</span>
                  </div>
                  <span className="form-card-badge">Scope 3 Alimentation</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Type de service repas :</label>
                    <select value={cafeteriaType} onChange={(e) => setCafeteriaType(e.target.value)} className="eval-select">
                      <option value="interne">Cantine / Cuisine interne</option>
                      <option value="traiteur">Traiteur externe</option>
                      <option value="aucune">Aucun service de repas</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre de repas servis annuellement :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={annualMealsCount} onChange={(e) => setAnnualMealsCount(Number(e.target.value))} />
                      <span className="unit-chip">repas/an</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                    Part d'approvisionnement en circuits courts (L'Érable / Québec) : {localFoodPct}%
                  </label>
                  <input type="range" min="0" max="100" step="5" value={localFoodPct} onChange={(e) => setLocalFoodPct(Number(e.target.value))} style={{ width: '100%' }} />
                </div>
              </div>

              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Leaf size={18} /></div>
                    <span>2. Consommation de Papier &amp; Compostage</span>
                  </div>
                  <span className="form-card-badge">Matières &amp; Recyclage</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Consommation de papier :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={paperReams} onChange={(e) => setPaperReams(Number(e.target.value))} />
                      <span className="unit-chip">ramettes</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Masse compostée annuellement :</label>
                    <div className="input-unit-wrap">
                      <input type="number" className="eval-input" value={wasteCompostKg} onChange={(e) => setWasteCompostKg(Number(e.target.value))} />
                      <span className="unit-chip">kg/an</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(4)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-next" onClick={() => setStep(6)}>
                  Continuer vers Spécificités Sectorielles <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: SPÉCIFICITÉS SECTORIELLES & ACTIONS POSITIVES (SUR MESURE PAR SECTEUR) */}
          {step === 6 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_actions.png" alt="Actions" className="illus-step-img" />
              </div>
              <h2 className="step-question">Étape 6/7 : {sectorMeta.specificTitle}</h2>
              <p className="step-hint">Dernières données spécialisées de votre secteur d'activité.</p>

              {/* CARD EXCLUSIVE AU SECTEUR */}
              <div className="form-card-group">
                {sector === 'education' && (
                  <>
                    <div className="form-card-header">
                      <div className="form-card-title">
                        <div className="form-card-title-icon"><GraduationCap size={18} /></div>
                        <span>Caractéristiques de l’Établissement Scolaire</span>
                      </div>
                      <span className="form-card-badge">Éducation</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Type d'institution :</label>
                        <select value={eduType} onChange={(e) => setEduType(e.target.value)} className="eval-select">
                          <option value="primaire">École primaire</option>
                          <option value="secondaire">École secondaire</option>
                          <option value="cegep">Cégep</option>
                          <option value="fp">Centre de formation professionnelle</option>
                          <option value="universite">Université</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre total d'élèves/étudiants :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={studentCount} onChange={(e) => setStudentCount(Number(e.target.value))} />
                          <span className="unit-chip">élèves</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {sector === 'agriculture' && (
                  <>
                    <div className="form-card-header">
                      <div className="form-card-title">
                        <div className="form-card-title-icon"><Wheat size={18} /></div>
                        <span>Données Spécifiques Agricoles &amp; Érablière</span>
                      </div>
                      <span className="form-card-badge">Agriculture L'Érable</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Superficie agricole cultivée :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={agriHa} onChange={(e) => setAgriHa(Number(e.target.value))} />
                          <span className="unit-chip">ha</span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre d'entailles (Érablières) :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={agriTapsCount} onChange={(e) => setAgriTapsCount(Number(e.target.value))} />
                          <span className="unit-chip">entailles</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Engrais azotés &amp; minéraux :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={agriFertilizerKg} onChange={(e) => setAgriFertilizerKg(Number(e.target.value))} />
                          <span className="unit-chip">kg/an</span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Gestion des lisiers/fumiers :</label>
                        <select value={manureType} onChange={(e) => setManureType(e.target.value)} className="eval-select">
                          <option value="lisier">Fosse à lisier liquide</option>
                          <option value="solide">Fumier solide</option>
                          <option value="composte">Compostage agricole</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {sector === 'aide_alimentaire' && (
                  <>
                    <div className="form-card-header">
                      <div className="form-card-title">
                        <div className="form-card-title-icon"><Utensils size={18} /></div>
                        <span>Opérations de Sauvetage Alimentaire</span>
                      </div>
                      <span className="form-card-badge">Aide Alimentaire</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nourriture sauvée du gaspillage :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={foodSavedKgPerYear} onChange={(e) => setFoodSavedKgPerYear(Number(e.target.value))} />
                          <span className="unit-chip">kg/an</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>Nombre d'installations frigorifiques :</label>
                        <div className="input-unit-wrap">
                          <input type="number" className="eval-input" value={refrigeratorsCount} onChange={(e) => setRefrigeratorsCount(Number(e.target.value))} />
                          <span className="unit-chip">frigos/chambres</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {sector !== 'education' && sector !== 'agriculture' && sector !== 'aide_alimentaire' && (
                  <>
                    <div className="form-card-header">
                      <div className="form-card-title">
                        <div className="form-card-title-icon"><Building size={18} /></div>
                        <span>Paramètres d'Optimisation du Secteur {sector.toUpperCase()}</span>
                      </div>
                      <span className="form-card-badge">Spécificité Métier</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                      Les données spécifiques pour {sectorMeta.title} ont été intégrées dans votre modèle d'analyse.
                    </p>
                  </>
                )}
              </div>

              {/* Actions Positives */}
              <div className="form-card-group">
                <div className="form-card-header">
                  <div className="form-card-title">
                    <div className="form-card-title-icon"><Trees size={18} /></div>
                    <span>Actions Positives &amp; Reboisement dans L'Érable</span>
                  </div>
                  <span className="form-card-badge" style={{ background: '#f0fdf4', color: '#065f46' }}>Séquestration</span>
                </div>

                <div className="form-group">
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px', color: '#0f172a' }}>
                    Nombre d'arbres plantés ou gérez en boisé forestier :
                  </label>
                  <div className="input-unit-wrap">
                    <input type="number" className="eval-input" value={treesPlanted} onChange={(e) => setTreesPlanted(Number(e.target.value))} />
                    <span className="unit-chip">arbres</span>
                  </div>
                </div>
              </div>

              <div className="step-actions" style={{ marginTop: '28px' }}>
                <button className="btn-eval-back-step" onClick={() => setStep(5)}>
                  <ArrowLeft size={16} /> Retour
                </button>
                <button className="btn-eval-calculate" onClick={() => setStep(7)}>
                  Calculer mon Bilan GES &amp; Plan d'Action <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 7: RÉSULTATS & PLAN D'ACTION */}
          {step === 7 && (
            <div className="eval-step active">
              <div className="step-hero-illus">
                <img src="/images/illus_results.png" alt="Résultats" className="illus-step-img" />
              </div>

              <div className="results-header-text">
                <h2 className="step-question">
                  Bilan GES &amp; Plan d'Action Personnalisé ({sectorMeta.title})
                </h2>
                <p className="step-hint">Analyse certifiée selon le cadre de la MRC de L'Érable.</p>
              </div>

              <div className="results-summary-card" style={{ background: '#0f172a', color: '#ffffff', padding: '28px', borderRadius: '24px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#34d399', fontWeight: 800 }}>
                  EMPREINTE TOTALE NETTE ESTIMÉE
                </div>
                <div style={{ fontSize: '3.2rem', fontWeight: 800, margin: '8px 0', fontFamily: 'var(--font-heading)', color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  {netTotal} <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#94a3b8' }}>tCO₂e / an</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.88rem', color: '#cbd5e1', marginTop: '12px' }}>
                  <span>Brut : <strong>{grossTotal} tCO₂e</strong></span>
                  <span>•</span>
                  <span style={{ color: '#a7f3d0' }}>Séquestration/Actions : <strong>-{sequestrationVal} tCO₂e</strong></span>
                </div>
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
