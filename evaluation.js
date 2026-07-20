/* ============================================================
   ERABLE GES — Plateforme d'Évaluation des Impacts Environnementaux
   evaluation.js - Logique et Calculs Dynamiques
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── 1. Émission factors & constants (Québec specific) ── */
    const EMISSION_FACTORS = {
        electricity: 0.0013,  // kg CO2e / kWh (Clean hydro)
        gas: 2.04,            // kg CO2e / m³ (Natural gas)
        oil: 2.68,            // kg CO2e / L (Heating oil)
        wood: 0.08,           // kg CO2e / kg (Firewood)
        carGasoline: 0.185,   // kg CO2e / km
        carHybrid: 0.090,     // kg CO2e / km
        carElectric: 0.008,   // kg CO2e / km
        flightPerAR: 1.1,     // tCO2e / round-trip flight
        dietMeatHeavy: 3.3,   // tCO2e / year / person
        dietOmnivore: 2.5,    // tCO2e / year / person
        dietVegetarian: 1.7,  // tCO2e / year / person
        dietVegan: 1.3,       // tCO2e / year / person
        wasteNone: 0.50,      // tCO2e / year
        wastePartial: 0.25,   // tCO2e / year
        wasteComplete: 0.05,  // tCO2e / year
    };

    // Offsets values for Step 6 (tCO2e / year)
    const ACTION_OFFSETS = {
        // Citoyens
        cit_heat_pump: 1.5,
        cit_buy_local: 0.4,
        cit_electric_car: 1.8,
        cit_solar_panels: 0.3,
        // Corporate / Municipalities
        corp_solar_panels: 6.5,
        corp_electric_fleet: 12.0,
        corp_zero_waste: 3.5,
        corp_reforestation: 8.0,
    };

    const MRC_AVERAGES = {
        citizen: 9.2,
        company: 42.0,
        organisation: 15.0,
        institution: 75.0,
        municipality: 120.0
    };

    /* ── 2. State & Initialization ── */
    let currentStep = 1;
    
    // Default state values
    let state = {
        profile: 'citizen',
        sector: 'agriculture',
        level: '1',
        
        // Step 2 inputs
        heating: 'electricity',
        bill: 120,
        gasBill: 0,
        oilLitres: 0,
        woodCords: 0,
        floorArea: 1000,
        annualElectricity: 50000,
        annualGas: 0,
        annualOil: 0,
        solarPanels: 0,

        // Step 3 inputs
        carKm: 12000,
        motor: 'gasoline',
        flights: 1,
        commuteDist: 20,
        trainKm: 0,
        carpoolShare: 0,
        employees: 10,
        fleetDist: 15000,
        fleetMotor: 'gasoline',
        autoSoloShare: 75,
        businessFlights: 2,
        freightKm: 0,
        teleworkDays: 0,

        // Step 4 inputs
        diet: 'meat-moderate',
        waste: 'partial',
        localFoodShare: 25,
        devicesCount: 5,
        clothingPurchases: 15,
        wasteMass: 350,
        hasCafeteria: 'no',
        officeWaste: 'basique',
        itFleet: 15,
        paperRames: 50,
        purchasingBudget: 10000,
        corpWasteTons: 2,

        // Step 5 inputs (Sector specific)
        cattleHead: 0,
        cropHectares: 0,
        fertilizerKg: 0,
        mealsPerDay: 0,
        redMeatRatio: 20,
        foodWasteRatio: 15,
        studentsCount: 0,
        studentSoloCarShare: 50,
        bedsCount: 0,
        medicalWasteKg: 0,
        foodDistributedTons: 0,
        refrigeratedM3: 0,

        // Step 6 checked actions (baselines)
        checkedActions: [],
        
        // Step 7 commitments (simulated additional reductions)
        futureCommitments: [],

        // History values
        history: {
            2023: 10.2,
            2024: 9.5,
            2025: 8.8,
            2026: null // Will be auto-set to current Net emissions
        }
    };

    // Load from localStorage if present
    const savedState = localStorage.getItem('erable_ges_evaluation_state');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            state = { ...state, ...parsed };
            // Set current radio values in index/step 1
            const profileRad = document.querySelector(`input[name="eval-profile"][value="${state.profile}"]`);
            if (profileRad) profileRad.checked = true;
            
            const sectorSel = document.getElementById('eval-sector');
            if (sectorSel) sectorSel.value = state.sector;

            const levelRad = document.querySelector(`input[name="eval-level"][value="${state.level}"]`);
            if (levelRad) levelRad.checked = true;
        } catch (e) {
            console.error("Error reading saved state: ", e);
        }
    }

    // Set user info from sessionStorage
    const savedUser = sessionStorage.getItem('erableUser') || 'Invité';
    document.getElementById('eval-user-badge').textContent = savedUser;

    /* ── 3. Wizard Fields Renderer ── */
    function renderWizardFields() {
        const level = parseInt(state.level, 10);
        const profile = state.profile;
        const sector = state.sector;

        // Render Step 2: Energy & Buildings
        const step2Container = document.getElementById('step-2-fields');
        let html2 = '';
        if (profile === 'citizen') {
            html2 += `
                <div class="eval-field">
                    <label>Source principale de chauffage :</label>
                    <div class="select-wrapper">
                        <select id="eval-heating" class="eval-select">
                            <option value="electricity" ${state.heating === 'electricity' ? 'selected' : ''}>Électricité (Réseau hydroélectrique propre)</option>
                            <option value="gas" ${state.heating === 'gas' ? 'selected' : ''}>Gaz naturel / Propane</option>
                            <option value="oil" ${state.heating === 'oil' ? 'selected' : ''}>Mazout (Fioul)</option>
                            <option value="wood" ${state.heating === 'wood' ? 'selected' : ''}>Bois de chauffage</option>
                        </select>
                        <svg class="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                </div>
                <div class="eval-field">
                    <label>Facture d'électricité mensuelle moyenne :</label>
                    <div class="slider-row">
                        <input type="range" id="eval-bill" min="30" max="600" value="${state.bill}" class="eval-range">
                        <div class="slider-display">
                            <span id="val-eval-bill">${state.bill}</span>
                            <span class="slider-unit">$/mois</span>
                        </div>
                    </div>
                </div>
            `;
            if (level >= 2) {
                html2 += `
                    <div class="eval-field">
                        <label>Facture mensuelle moyenne de gaz / propane (si applicable) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-gas-bill" min="0" max="400" value="${state.gasBill || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-gas-bill">${state.gasBill || 0}</span>
                                <span class="slider-unit">$/mois</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            if (level === 3) {
                html2 += `
                    <div class="eval-grid-2">
                        <div class="eval-field">
                            <label>Consommation annuelle de mazout (L) :</label>
                            <input type="number" id="eval-oil-litres" class="history-input-val" style="width:100%; height:45px;" value="${state.oilLitres || 0}">
                        </div>
                        <div class="eval-field">
                            <label>Consommation de bois (cordes/an) :</label>
                            <input type="number" id="eval-wood-cords" class="history-input-val" style="width:100%; height:45px;" value="${state.woodCords || 0}">
                        </div>
                    </div>
                `;
            }
        } else {
            // Corporates, Institutions, Municipalities
            html2 += `
                <div class="eval-grid-2">
                    <div class="eval-field">
                        <label>Superficie totale des bâtiments (m²) :</label>
                        <input type="number" id="eval-floor-area" class="history-input-val" style="width:100%; height:45px;" value="${state.floorArea || 1000}">
                    </div>
                    <div class="eval-field">
                        <label>Source principale de chauffage :</label>
                        <div class="select-wrapper">
                            <select id="eval-heating" class="eval-select">
                                <option value="electricity" ${state.heating === 'electricity' ? 'selected' : ''}>Électricité</option>
                                <option value="gas" ${state.heating === 'gas' ? 'selected' : ''}>Gaz naturel / Propane</option>
                                <option value="oil" ${state.heating === 'oil' ? 'selected' : ''}>Mazout</option>
                                <option value="wood" ${state.heating === 'wood' ? 'selected' : ''}>Biomasse / Bois</option>
                            </select>
                            <svg class="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                    </div>
                </div>
            `;
            if (level >= 2) {
                html2 += `
                    <div class="eval-field">
                        <label>Consommation électrique annuelle (kWh) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-annual-electricity" min="5000" max="1000000" step="5000" value="${state.annualElectricity || 50000}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-annual-electricity">${(state.annualElectricity || 50000).toLocaleString('fr-CA')}</span>
                                <span class="slider-unit">kWh</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Consommation annuelle de gaz naturel (m³) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-annual-gas" min="0" max="50000" step="500" value="${state.annualGas || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-annual-gas">${(state.annualGas || 0).toLocaleString('fr-CA')}</span>
                                <span class="slider-unit">m³</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            if (level === 3) {
                html2 += `
                    <div class="eval-grid-2">
                        <div class="eval-field">
                            <label>Consommation annuelle de mazout (L) :</label>
                            <input type="number" id="eval-annual-oil" class="history-input-val" style="width:100%; height:45px;" value="${state.annualOil || 0}">
                        </div>
                        <div class="eval-field">
                            <label>Superficie panneaux solaires (m²) :</label>
                            <input type="number" id="eval-solar-panels" class="history-input-val" style="width:100%; height:45px;" value="${state.solarPanels || 0}">
                        </div>
                    </div>
                `;
            }
        }
        step2Container.innerHTML = html2;

        // Render Step 3: Transports & Mobilité
        const step3Container = document.getElementById('step-3-fields');
        let html3 = '';
        if (profile === 'citizen') {
            html3 += `
                <div class="eval-field">
                    <label>Kilométrage annuel en voiture :</label>
                    <div class="slider-row">
                        <input type="range" id="eval-car" min="0" max="40000" step="500" value="${state.carKm}" class="eval-range">
                        <div class="slider-display">
                            <span id="val-eval-car">${state.carKm.toLocaleString('fr-CA')}</span>
                            <span class="slider-unit">km/an</span>
                        </div>
                    </div>
                </div>
                <div class="eval-field">
                    <label>Type de motorisation principale :</label>
                    <div class="motor-choice-group">
                        <label class="motor-choice">
                            <input type="radio" name="eval-motor" value="gasoline" ${state.motor === 'gasoline' ? 'checked' : ''}>
                            <div class="motor-box">Thermique</div>
                        </label>
                        <label class="motor-choice">
                            <input type="radio" name="eval-motor" value="hybrid" ${state.motor === 'hybrid' ? 'checked' : ''}>
                            <div class="motor-box">Hybride</div>
                        </label>
                        <label class="motor-choice">
                            <input type="radio" name="eval-motor" value="electric" ${state.motor === 'electric' ? 'checked' : ''}>
                            <div class="motor-box">Électrique</div>
                        </label>
                    </div>
                </div>
            `;
            if (level >= 2) {
                html3 += `
                    <div class="eval-field">
                        <label>Vols aller-retour par an :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-flights" min="0" max="10" value="${state.flights}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-flights">${state.flights}</span>
                                <span class="slider-unit">vol(s)/an</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Distance moyenne de déplacement quotidien (A/R km) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-commute" min="0" max="150" value="${state.commuteDist}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-commute">${state.commuteDist}</span>
                                <span class="slider-unit">km/jour</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            if (level === 3) {
                html3 += `
                    <div class="eval-grid-2">
                        <div class="eval-field">
                            <label>Voyages en train par an (Km total) :</label>
                            <input type="number" id="eval-train-km" class="history-input-val" style="width:100%; height:45px;" value="${state.trainKm || 0}">
                        </div>
                        <div class="eval-field">
                            <label>Part de trajets en covoiturage (%) :</label>
                            <input type="number" id="eval-carpool-share" class="history-input-val" style="width:100%; height:45px;" value="${state.carpoolShare || 0}">
                        </div>
                    </div>
                `;
            }
        } else {
            // Corporate Mobility
            html3 += `
                <div class="eval-grid-2">
                    <div class="eval-field">
                        <label>Nombre total d'employés :</label>
                        <input type="number" id="eval-employees" class="history-input-val" style="width:100%; height:45px;" value="${state.employees || 10}">
                    </div>
                    <div class="eval-field">
                        <label>Kilométrage annuel de la flotte corporative :</label>
                        <input type="number" id="eval-fleet-dist" class="history-input-val" style="width:100%; height:45px;" value="${state.fleetDist || 15000}">
                    </div>
                </div>
            `;
            if (level >= 2) {
                html3 += `
                    <div class="eval-field">
                        <label>Motorisation de la flotte :</label>
                        <div class="motor-choice-group">
                            <label class="motor-choice">
                                <input type="radio" name="eval-fleet-motor" value="gasoline" ${state.fleetMotor === 'gasoline' ? 'checked' : ''}>
                                <div class="motor-box">Thermique</div>
                            </label>
                            <label class="motor-choice">
                                <input type="radio" name="eval-fleet-motor" value="hybrid" ${state.fleetMotor === 'hybrid' ? 'checked' : ''}>
                                <div class="motor-box">Hybride</div>
                            </label>
                            <label class="motor-choice">
                                <input type="radio" name="eval-fleet-motor" value="electric" ${state.fleetMotor === 'electric' ? 'checked' : ''}>
                                <div class="motor-box">Électrique</div>
                            </label>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Proportion d'employés venant en auto solo (%) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-auto-solo" min="0" max="100" value="${state.autoSoloShare || 75}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-auto-solo">${state.autoSoloShare || 75}</span>
                                <span class="slider-unit">%</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Nombre de vols d'affaires annuels de l'équipe :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-business-flights" min="0" max="50" value="${state.businessFlights || 2}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-business-flights">${state.businessFlights || 2}</span>
                                <span class="slider-unit">vols/an</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            if (level === 3) {
                html3 += `
                    <div class="eval-grid-2">
                        <div class="eval-field">
                            <label>Transport logistique de fret (km/an) :</label>
                            <input type="number" id="eval-freight-km" class="history-input-val" style="width:100%; height:45px;" value="${state.freightKm || 0}">
                        </div>
                        <div class="eval-field">
                            <label>Nombre de jours de télétravail/semaine par employé :</label>
                            <input type="number" id="eval-telework-days" class="history-input-val" style="width:100%; height:45px;" value="${state.teleworkDays || 0}">
                        </div>
                    </div>
                `;
            }
        }
        step3Container.innerHTML = html3;

        // Render Step 4: Consommation / Achats
        const step4Container = document.getElementById('step-4-fields');
        let html4 = '';
        if (profile === 'citizen') {
            html4 += `
                <div class="eval-field">
                    <label>Régime alimentaire principal :</label>
                    <div class="diet-choice-group">
                        <label class="diet-choice">
                            <input type="radio" name="eval-diet" value="meat-heavy" ${state.diet === 'meat-heavy' ? 'checked' : ''}>
                            <div class="diet-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                                <span>Riche en viande</span>
                            </div>
                        </label>
                        <label class="diet-choice">
                            <input type="radio" name="eval-diet" value="meat-moderate" ${state.diet === 'meat-moderate' ? 'checked' : ''}>
                            <div class="diet-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                                <span>Omnivore modéré</span>
                            </div>
                        </label>
                        <label class="diet-choice">
                            <input type="radio" name="eval-diet" value="vegetarian" ${state.diet === 'vegetarian' ? 'checked' : ''}>
                            <div class="diet-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 4-2 8-5 10-1-3-3-5-5-6-2 1-4 3-5 6a10 10 0 0 1-5-10A10 10 0 0 1 12 2z"/></svg>
                                <span>Végétarien</span>
                            </div>
                        </label>
                        <label class="diet-choice">
                            <input type="radio" name="eval-diet" value="vegan" ${state.diet === 'vegan' ? 'checked' : ''}>
                            <div class="diet-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                                <span>Végétalien</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="eval-field">
                    <label>Gestion des matières résiduelles :</label>
                    <div class="select-wrapper">
                        <select id="eval-waste" class="eval-select">
                            <option value="none" ${state.waste === 'none' ? 'selected' : ''}>Aucun tri (tout aux ordures résiduelles)</option>
                            <option value="partial" ${state.waste === 'partial' ? 'selected' : ''}>Tri partiel (recyclage uniquement)</option>
                            <option value="complete" ${state.waste === 'complete' ? 'selected' : ''}>Tri complet et compostage systématique</option>
                        </select>
                        <svg class="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                </div>
            `;
            if (level >= 2) {
                html4 += `
                    <div class="eval-field">
                        <label>Proportion d'achats alimentaires locaux ou en vrac (%) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-local-food" min="0" max="100" value="${state.localFoodShare}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-local-food">${state.localFoodShare}</span>
                                <span class="slider-unit">%</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Nombre d'appareils numériques actifs à la maison :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-devices" min="1" max="20" value="${state.devicesCount}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-devices">${state.devicesCount}</span>
                                <span class="slider-unit">appareil(s)</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            if (level === 3) {
                html4 += `
                    <div class="eval-grid-2">
                        <div class="eval-field">
                            <label>Vêtements neufs achetés par an :</label>
                            <input type="number" id="eval-clothing" class="history-input-val" style="width:100%; height:45px;" value="${state.clothingPurchases || 0}">
                        </div>
                        <div class="eval-field">
                            <label>Production de déchets (kg/an) :</label>
                            <input type="number" id="eval-waste-mass" class="history-input-val" style="width:100%; height:45px;" value="${state.wasteMass || 350}">
                        </div>
                    </div>
                `;
            }
        } else {
            // Corporate / Institutional Purchases
            html4 += `
                <div class="eval-grid-2">
                    <div class="eval-field">
                        <label>Présence d'une cafétéria ou service alimentaire :</label>
                        <div class="select-wrapper">
                            <select id="eval-has-cafeteria" class="eval-select">
                                <option value="no" ${state.hasCafeteria === 'no' ? 'selected' : ''}>Non</option>
                                <option value="yes" ${state.hasCafeteria === 'yes' ? 'selected' : ''}>Oui</option>
                            </select>
                            <svg class="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Tri des déchets dans les locaux :</label>
                        <div class="select-wrapper">
                            <select id="eval-office-waste" class="eval-select">
                                <option value="basique" ${state.officeWaste === 'basique' ? 'selected' : ''}>Basique (Recyclage standard)</option>
                                <option value="avance" ${state.officeWaste === 'avance' ? 'selected' : ''}>Avancé (Recyclage + compostage bureaux)</option>
                                <option value="zero" ${state.officeWaste === 'zero' ? 'selected' : ''}>Zéro Déchet (Complet & lutte au gaspillage)</option>
                            </select>
                            <svg class="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                    </div>
                </div>
            `;
            if (level >= 2) {
                html4 += `
                    <div class="eval-field">
                        <label>Nombre total d'ordinateurs et écrans :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-it-fleet" min="2" max="500" value="${state.itFleet || 15}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-it-fleet">${state.itFleet || 15}</span>
                                <span class="slider-unit">écrans/PCs</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Nombre de rames de papier consommées par an :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-paper-rames" min="0" max="500" value="${state.paperRames || 50}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-paper-rames">${state.paperRames || 50}</span>
                                <span class="slider-unit">rames</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            if (level === 3) {
                html4 += `
                    <div class="eval-grid-2">
                        <div class="eval-field">
                            <label>Budget annuel achats fournitures & services ($) :</label>
                            <input type="number" id="eval-purchasing-budget" class="history-input-val" style="width:100%; height:45px;" value="${state.purchasingBudget || 10000}">
                        </div>
                        <div class="eval-field">
                            <label>Déchets produits par les bureaux (tonnes/an) :</label>
                            <input type="number" id="eval-corp-waste-tons" class="history-input-val" style="width:100%; height:45px;" value="${state.corpWasteTons || 2}">
                        </div>
                    </div>
                `;
            }
        }
        step4Container.innerHTML = html4;

        // Render Step 5: Pratiques sectorielles (Agriculture, Restauration, etc.)
        const step5Container = document.getElementById('step-5-fields');
        let html5 = '';
        if (level >= 2) {
            if (sector === 'agriculture') {
                html5 += `
                    <div class="eval-field">
                        <label>Nombre de têtes de bétail (bovins, porcs, moutons) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-cattle" min="0" max="250" value="${state.cattleHead || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-cattle">${state.cattleHead || 0}</span>
                                <span class="slider-unit">têtes</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Superficie de grandes cultures exploitées (hectares) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-crop-hectares" min="0" max="500" value="${state.cropHectares || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-crop-hectares">${state.cropHectares || 0}</span>
                                <span class="slider-unit">hectares</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Engrais azotés chimiques épandus par an (kg N) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-fertilizer" min="0" max="10000" step="100" value="${state.fertilizerKg || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-fertilizer">${(state.fertilizerKg || 0).toLocaleString('fr-CA')}</span>
                                <span class="slider-unit">kg</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (sector === 'restaurant') {
                html5 += `
                    <div class="eval-field">
                        <label>Nombre moyen de repas servis par jour d'ouverture :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-meals" min="0" max="500" value="${state.mealsPerDay || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-meals">${state.mealsPerDay || 0}</span>
                                <span class="slider-unit">repas/jour</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Proportion de repas contenant de la viande rouge (%) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-red-meat" min="0" max="100" value="${state.redMeatRatio || 20}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-red-meat">${state.redMeatRatio || 20}</span>
                                <span class="slider-unit">%</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Taux moyen de pertes et gaspillage alimentaire (%) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-food-waste" min="0" max="50" value="${state.foodWasteRatio || 15}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-food-waste">${state.foodWasteRatio || 15}</span>
                                <span class="slider-unit">%</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (sector === 'education') {
                html5 += `
                    <div class="eval-field">
                        <label>Nombre total d'élèves / étudiants fréquentant l'établissement :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-students" min="0" max="2000" step="50" value="${state.studentsCount || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-students">${state.studentsCount || 0}</span>
                                <span class="slider-unit">élèves</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Part des déplacements d'élèves/staff faits en auto solo (%) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-student-solo" min="0" max="100" value="${state.studentSoloCarShare || 50}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-student-solo">${state.studentSoloCarShare || 50}</span>
                                <span class="slider-unit">%</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (sector === 'health') {
                html5 += `
                    <div class="eval-field">
                        <label>Nombre de lits d'accueil / hébergement :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-beds" min="0" max="300" value="${state.bedsCount || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-beds">${state.bedsCount || 0}</span>
                                <span class="slider-unit">lits</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Production annuelle de déchets médicaux (kg) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-medical-waste" min="0" max="50000" step="500" value="${state.medicalWasteKg || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-medical-waste">${(state.medicalWasteKg || 0).toLocaleString('fr-CA')}</span>
                                <span class="slider-unit">kg</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (sector === 'community' || sector === 'food-aid') {
                html5 += `
                    <div class="eval-field">
                        <label>Volume annuel de denrées / repas distribués (tonnes) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-food-distributed" min="0" max="1000" step="10" value="${state.foodDistributedTons || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-food-distributed">${state.foodDistributedTons || 0}</span>
                                <span class="slider-unit">tonnes</span>
                            </div>
                        </div>
                    </div>
                    <div class="eval-field">
                        <label>Volume d'entreposage frigorifique (m³) :</label>
                        <div class="slider-row">
                            <input type="range" id="eval-refrigeration" min="0" max="500" step="10" value="${state.refrigeratedM3 || 0}" class="eval-range">
                            <div class="slider-display">
                                <span id="val-eval-refrigeration">${state.refrigeratedM3 || 0}</span>
                                <span class="slider-unit">m³</span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                html5 += `<p class="step-hint" style="text-align:center;">Aucune question sectorielle spécifique pour ce secteur en niveau de précision 2. Veuillez continuer.</p>`;
            }
        } else {
            html5 += `<p class="step-hint" style="text-align:center;">Le niveau 1 (Estimation rapide) ignore les questions sectorielles avancées. Veuillez continuer.</p>`;
        }
        step5Container.innerHTML = html5;

        // Render Step 6: Positive Actions Checklist
        const step6Container = document.getElementById('step-6-fields');
        let html6 = '';
        if (profile === 'citizen') {
            html6 += `
                <label class="action-checkbox-card">
                    <input type="checkbox" name="eval-action" value="cit_heat_pump" ${state.checkedActions.includes('cit_heat_pump') ? 'checked' : ''}>
                    <div class="action-card-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        <div class="action-card-info">
                            <h4>Thermopompe Hydro-Québec</h4>
                            <p>Remplacement du chauffage au mazout ou gaz par une thermopompe électrique propre (-1.5 t)</p>
                        </div>
                    </div>
                </label>
                <label class="action-checkbox-card">
                    <input type="checkbox" name="eval-action" value="cit_buy_local" ${state.checkedActions.includes('cit_buy_local') ? 'checked' : ''}>
                    <div class="action-card-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        <div class="action-card-info">
                            <h4>Alimentation locale & vrac</h4>
                            <p>Achat de paniers bio d'agriculteurs de L'Érable, réduction drastique du suremballage (-0.4 t)</p>
                        </div>
                    </div>
                </label>
                <label class="action-checkbox-card">
                    <input type="checkbox" name="eval-action" value="cit_electric_car" ${state.checkedActions.includes('cit_electric_car') ? 'checked' : ''}>
                    <div class="action-card-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        <div class="action-card-info">
                            <h4>Véhicule électrique (VÉ)</h4>
                            <p>Transition vers une motorisation 100% électrique alimentée par notre hydroélectricité propre (-1.8 t)</p>
                        </div>
                    </div>
                </label>
                <label class="action-checkbox-card">
                    <input type="checkbox" name="eval-action" value="cit_solar_panels" ${state.checkedActions.includes('cit_solar_panels') ? 'checked' : ''}>
                    <div class="action-card-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                        <div class="action-card-info">
                            <h4>Autonomie Solaire</h4>
                            <p>Installation de petits capteurs solaires domestiques pour soulager le réseau Hydro (-0.3 t)</p>
                        </div>
                    </div>
                </label>
            `;
        } else {
            // Corporate / Municipalities Checklist
            html6 += `
                <label class="action-checkbox-card">
                    <input type="checkbox" name="eval-action" value="corp_solar_panels" ${state.checkedActions.includes('corp_solar_panels') ? 'checked' : ''}>
                    <div class="action-card-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                        <div class="action-card-info">
                            <h4>Photovoltaïque Corporatif</h4>
                            <p>Autogénération solaire installée sur les toits d'usines, fermes ou bâtiments municipaux (-6.5 t)</p>
                        </div>
                    </div>
                </label>
                <label class="action-checkbox-card">
                    <input type="checkbox" name="eval-action" value="corp_electric_fleet" ${state.checkedActions.includes('corp_electric_fleet') ? 'checked' : ''}>
                    <div class="action-card-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        <div class="action-card-info">
                            <h4>Électrification de flotte</h4>
                            <p>Décarburation totale des voitures de fonction, machinerie légère ou camions de patrouille (-12.0 t)</p>
                        </div>
                    </div>
                </label>
                <label class="action-checkbox-card">
                    <input type="checkbox" name="eval-action" value="corp_zero_waste" ${state.checkedActions.includes('corp_zero_waste') ? 'checked' : ''}>
                    <div class="action-card-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        <div class="action-card-info">
                            <h4>Politique Zéro Déchet</h4>
                            <p>Compostage industriel des déchets de bureaux/usines, tri des plastiques agricoles complexes (-3.5 t)</p>
                        </div>
                    </div>
                </label>
                <label class="action-checkbox-card">
                    <input type="checkbox" name="eval-action" value="corp_reforestation" ${state.checkedActions.includes('corp_reforestation') ? 'checked' : ''}>
                    <div class="action-card-inner">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V12M12 12a5 5 0 0 0 5-5M12 12a5 5 0 0 1-5-5"/></svg>
                        <div class="action-card-info">
                            <h4>Reboisement de parcelles</h4>
                            <p>Plantation de haies brise-vent agroforestières ou boisés sur terrains corporatifs de la MRC (-8.0 t)</p>
                        </div>
                    </div>
                </label>
            `;
        }
        step6Container.innerHTML = html6;

        // Re-bind listeners for newly generated fields
        bindDynamicListeners();
    }

    /* ── 4. Collect Form Values ── */
    function collectCurrentStepState(step) {
        if (step === 1) {
            const picked = document.querySelector('input[name="eval-profile"]:checked');
            if (picked) state.profile = picked.value;
            
            const sectorSel = document.getElementById('eval-sector');
            if (sectorSel) state.sector = sectorSel.value;

            const levelRad = document.querySelector('input[name="eval-level"]:checked');
            if (levelRad) state.level = levelRad.value;
        }
        
        if (step === 2) {
            const heatingEl = document.getElementById('eval-heating');
            if (heatingEl) state.heating = heatingEl.value;

            const billEl = document.getElementById('eval-bill');
            if (billEl) state.bill = parseInt(billEl.value, 10);

            const gasBillEl = document.getElementById('eval-gas-bill');
            if (gasBillEl) state.gasBill = parseInt(gasBillEl.value, 10);

            const oilLitresEl = document.getElementById('eval-oil-litres');
            if (oilLitresEl) state.oilLitres = parseInt(oilLitresEl.value, 10);

            const woodCordsEl = document.getElementById('eval-wood-cords');
            if (woodCordsEl) state.woodCords = parseInt(woodCordsEl.value, 10);

            const floorAreaEl = document.getElementById('eval-floor-area');
            if (floorAreaEl) state.floorArea = parseInt(floorAreaEl.value, 10);

            const annElectEl = document.getElementById('eval-annual-electricity');
            if (annElectEl) state.annualElectricity = parseInt(annElectEl.value, 10);

            const annGasEl = document.getElementById('eval-annual-gas');
            if (annGasEl) state.annualGas = parseInt(annGasEl.value, 10);

            const annOilEl = document.getElementById('eval-annual-oil');
            if (annOilEl) state.annualOil = parseInt(annOilEl.value, 10);

            const solarPanelsEl = document.getElementById('eval-solar-panels');
            if (solarPanelsEl) state.solarPanels = parseInt(solarPanelsEl.value, 10);
        }

        if (step === 3) {
            const carEl = document.getElementById('eval-car');
            if (carEl) state.carKm = parseInt(carEl.value, 10);

            const motorEl = document.querySelector('input[name="eval-motor"]:checked');
            if (motorEl) state.motor = motorEl.value;

            const flightsEl = document.getElementById('eval-flights');
            if (flightsEl) state.flights = parseInt(flightsEl.value, 10);

            const commuteEl = document.getElementById('eval-commute');
            if (commuteEl) state.commuteDist = parseInt(commuteEl.value, 10);

            const trainEl = document.getElementById('eval-train-km');
            if (trainEl) state.trainKm = parseInt(trainEl.value, 10);

            const carpoolEl = document.getElementById('eval-carpool-share');
            if (carpoolEl) state.carpoolShare = parseInt(carpoolEl.value, 10);

            const employeesEl = document.getElementById('eval-employees');
            if (employeesEl) state.employees = parseInt(employeesEl.value, 10);

            const fleetEl = document.getElementById('eval-fleet-dist');
            if (fleetEl) state.fleetDist = parseInt(fleetEl.value, 10);

            const fleetMotorEl = document.querySelector('input[name="eval-fleet-motor"]:checked');
            if (fleetMotorEl) state.fleetMotor = fleetMotorEl.value;

            const autoSoloEl = document.getElementById('eval-auto-solo');
            if (autoSoloEl) state.autoSoloShare = parseInt(autoSoloEl.value, 10);

            const busFlightsEl = document.getElementById('eval-business-flights');
            if (busFlightsEl) state.businessFlights = parseInt(busFlightsEl.value, 10);

            const freightEl = document.getElementById('eval-freight-km');
            if (freightEl) state.freightKm = parseInt(freightEl.value, 10);

            const teleworkEl = document.getElementById('eval-telework-days');
            if (teleworkEl) state.teleworkDays = parseInt(teleworkEl.value, 10);
        }

        if (step === 4) {
            const dietEl = document.querySelector('input[name="eval-diet"]:checked');
            if (dietEl) state.diet = dietEl.value;

            const wasteEl = document.getElementById('eval-waste');
            if (wasteEl) state.waste = wasteEl.value;

            const localFoodEl = document.getElementById('eval-local-food');
            if (localFoodEl) state.localFoodShare = parseInt(localFoodEl.value, 10);

            const devicesEl = document.getElementById('eval-devices');
            if (devicesEl) state.devicesCount = parseInt(devicesEl.value, 10);

            const clothingEl = document.getElementById('eval-clothing');
            if (clothingEl) state.clothingPurchases = parseInt(clothingEl.value, 10);

            const wasteMassEl = document.getElementById('eval-waste-mass');
            if (wasteMassEl) state.wasteMass = parseInt(wasteMassEl.value, 10);

            const hasCafeteriaEl = document.getElementById('eval-has-cafeteria');
            if (hasCafeteriaEl) state.hasCafeteria = hasCafeteriaEl.value;

            const officeWasteEl = document.getElementById('eval-office-waste');
            if (officeWasteEl) state.officeWaste = officeWasteEl.value;

            const itFleetEl = document.getElementById('eval-it-fleet');
            if (itFleetEl) state.itFleet = parseInt(itFleetEl.value, 10);

            const paperRamesEl = document.getElementById('eval-paper-rames');
            if (paperRamesEl) state.paperRames = parseInt(paperRamesEl.value, 10);

            const purchasingBudgetEl = document.getElementById('eval-purchasing-budget');
            if (purchasingBudgetEl) state.purchasingBudget = parseInt(purchasingBudgetEl.value, 10);

            const corpWasteTonsEl = document.getElementById('eval-corp-waste-tons');
            if (corpWasteTonsEl) state.corpWasteTons = parseFloat(corpWasteTonsEl.value);
        }

        if (step === 5) {
            const cattleEl = document.getElementById('eval-cattle');
            if (cattleEl) state.cattleHead = parseInt(cattleEl.value, 10);

            const cropEl = document.getElementById('eval-crop-hectares');
            if (cropEl) state.cropHectares = parseInt(cropEl.value, 10);

            const fertilizerEl = document.getElementById('eval-fertilizer');
            if (fertilizerEl) state.fertilizerKg = parseInt(fertilizerEl.value, 10);

            const mealsEl = document.getElementById('eval-meals');
            if (mealsEl) state.mealsPerDay = parseInt(mealsEl.value, 10);

            const redMeatEl = document.getElementById('eval-red-meat');
            if (redMeatEl) state.redMeatRatio = parseInt(redMeatEl.value, 10);

            const foodWasteEl = document.getElementById('eval-food-waste');
            if (foodWasteEl) state.foodWasteRatio = parseInt(foodWasteEl.value, 10);

            const studentsEl = document.getElementById('eval-students');
            if (studentsEl) state.studentsCount = parseInt(studentsEl.value, 10);

            const studentSoloEl = document.getElementById('eval-student-solo');
            if (studentSoloEl) state.studentSoloCarShare = parseInt(studentSoloEl.value, 10);

            const bedsEl = document.getElementById('eval-beds');
            if (bedsEl) state.bedsCount = parseInt(bedsEl.value, 10);

            const medWasteEl = document.getElementById('eval-medical-waste');
            if (medWasteEl) state.medicalWasteKg = parseInt(medWasteEl.value, 10);

            const foodDistEl = document.getElementById('eval-food-distributed');
            if (foodDistEl) state.foodDistributedTons = parseInt(foodDistEl.value, 10);

            const refrigerationEl = document.getElementById('eval-refrigeration');
            if (refrigerationEl) state.refrigeratedM3 = parseInt(refrigerationEl.value, 10);
        }

        if (step === 6) {
            const checkboxes = document.querySelectorAll('input[name="eval-action"]:checked');
            state.checkedActions = Array.from(checkboxes).map(cb => cb.value);
        }

        // Auto-save State to LocalStorage
        localStorage.setItem('erable_ges_evaluation_state', JSON.stringify(state));
    }

    /* ── 5. Carbon Calculation Engine (MRC L'Érable Context) ── */
    function calculate() {
        let energy = 0;
        let mobility = 0;
        let consumption = 0;
        let sector = 0;
        let offsets = 0;

        const level = parseInt(state.level, 10);
        const profile = state.profile;

        // A. Énergie & Bâtiments
        if (profile === 'citizen') {
            // Electricity emissions (using Quebec's actual clean factor 0.0013 kg/kWh)
            // Average electricity rate is ~$0.10/kWh, so average annual kWh = monthly bill * 12 * 10
            const electricityKwh = state.bill * 12 * 10;
            const electricityEmissions = (electricityKwh * EMISSION_FACTORS.electricity) / 1000;

            let heatingEmissions = 0;
            if (state.heating === 'gas') {
                const gasM3 = level >= 2 ? (state.gasBill || 0) * 12 * 0.8 : state.bill * 12 * 0.4;
                heatingEmissions = (gasM3 * EMISSION_FACTORS.gas) / 1000;
            } else if (state.heating === 'oil') {
                const oilL = level === 3 ? (state.oilLitres || 0) : state.bill * 12 * 0.3;
                heatingEmissions = (oilL * EMISSION_FACTORS.oil) / 1000;
            } else if (state.heating === 'wood') {
                const woodCords = level === 3 ? (state.woodCords || 0) : 3;
                // 1 cord of wood is approx 1500 kg
                heatingEmissions = (woodCords * 1500 * EMISSION_FACTORS.wood) / 1000;
            }
            energy = electricityEmissions + heatingEmissions;
        } else {
            // Corporate buildings energy
            const sqft = state.floorArea || 1000;
            // Baseline estimates if level 1
            let electricityKwh = level >= 2 ? (state.annualElectricity || sqft * 150) : sqft * 150;
            let gasM3 = level >= 2 ? (state.annualGas || 0) : 0;
            if (level === 1 && state.heating === 'gas') gasM3 = sqft * 15;

            const electricityEmissions = (electricityKwh * EMISSION_FACTORS.electricity) / 1000;
            const gasEmissions = (gasM3 * EMISSION_FACTORS.gas) / 1000;

            let heatingEmissions = 0;
            if (state.heating === 'oil') {
                const oilL = level === 3 ? (state.annualOil || 0) : sqft * 8;
                heatingEmissions = (oilL * EMISSION_FACTORS.oil) / 1000;
            } else if (state.heating === 'wood') {
                heatingEmissions = (sqft * 12 * EMISSION_FACTORS.wood) / 1000;
            }
            energy = electricityEmissions + gasEmissions + heatingEmissions;
        }

        // B. Transports & Mobilité
        if (profile === 'citizen') {
            const carDist = state.carKm || 0;
            const carFactor = state.motor === 'hybrid' ? EMISSION_FACTORS.carHybrid : (state.motor === 'electric' ? EMISSION_FACTORS.carElectric : EMISSION_FACTORS.carGasoline);
            let carEmissions = (carDist * carFactor) / 1000;

            let flightEmissions = (state.flights || 0) * EMISSION_FACTORS.flightPerAR;
            let commuteEmissions = 0;
            if (level >= 2) {
                // commute range slider: daily round trip distance * 220 work days
                commuteEmissions = (state.commuteDist * 220 * carFactor) / 1000;
            }
            let trainEmissions = 0;
            if (level === 3) {
                trainEmissions = ((state.trainKm || 0) * 0.014) / 1000;
            }
            
            let totalMobility = carEmissions + flightEmissions + commuteEmissions + trainEmissions;
            if (level === 3 && state.carpoolShare > 0) {
                // subtract carpool offsets
                totalMobility -= carEmissions * (state.carpoolShare / 100) * 0.4;
            }
            mobility = totalMobility;
        } else {
            // Corporate Fleet & Employees Commutes
            const fleetDist = state.fleetDist || 0;
            const fleetFactor = state.fleetMotor === 'hybrid' ? EMISSION_FACTORS.carHybrid : (state.fleetMotor === 'electric' ? EMISSION_FACTORS.carElectric : EMISSION_FACTORS.carGasoline);
            let fleetEmissions = (fleetDist * fleetFactor) / 1000;

            let flightEmissions = (state.businessFlights || 0) * EMISSION_FACTORS.flightPerAR;
            let commuteEmissions = 0;
            if (level >= 2) {
                const employees = state.employees || 10;
                const autoSoloPct = state.autoSoloShare || 75;
                // Average 25 km commute per day * 220 days
                commuteEmissions = (employees * (autoSoloPct / 100) * 25 * 220 * EMISSION_FACTORS.carGasoline) / 1000;
            }
            let freightEmissions = 0;
            if (level === 3) {
                freightEmissions = ((state.freightKm || 0) * 0.55) / 1000;
            }

            let totalMobility = fleetEmissions + flightEmissions + commuteEmissions + freightEmissions;
            if (level === 3 && state.teleworkDays > 0) {
                const teleworkReduction = (state.teleworkDays / 5) * 0.8;
                totalMobility -= commuteEmissions * teleworkReduction;
            }
            mobility = totalMobility;
        }

        // C. Alimentation, Achats & Déchets
        if (profile === 'citizen') {
            const dietEmissions = state.diet === 'meat-heavy' ? EMISSION_FACTORS.dietMeatHeavy 
                                : (state.diet === 'vegetarian' ? EMISSION_FACTORS.dietVegetarian 
                                : (state.diet === 'vegan' ? EMISSION_FACTORS.dietVegan : EMISSION_FACTORS.dietOmnivore));
            
            const wasteEmissions = state.waste === 'none' ? EMISSION_FACTORS.wasteNone
                                 : (state.waste === 'complete' ? EMISSION_FACTORS.wasteComplete : EMISSION_FACTORS.wastePartial);
            
            let localDiscount = 0;
            if (level >= 2) {
                localDiscount = (state.localFoodShare / 100) * 0.25; // max 25% reduction on food footprint
            }
            
            let deviceEmissions = 0;
            if (level >= 2) {
                deviceEmissions = (state.devicesCount || 5) * 0.05; // 50kg CO2 per device per year
            }

            let clothesEmissions = 0;
            if (level === 3) {
                clothesEmissions = (state.clothingPurchases || 15) * 0.015;
            }

            consumption = (dietEmissions - localDiscount) + wasteEmissions + deviceEmissions + clothesEmissions;
        } else {
            // Corporate purchases
            let foodEmissions = 0;
            if (state.hasCafeteria === 'yes') {
                foodEmissions = (state.employees || 10) * 0.5;
            }
            
            const wasteScale = state.officeWaste === 'zero' ? 0.05 : (state.officeWaste === 'avance' ? 0.25 : 0.6);
            let wasteEmissions = (state.employees || 10) * wasteScale * 0.2;

            let itEmissions = 0;
            if (level >= 2) {
                itEmissions = (state.itFleet || 15) * 0.09;
            }
            let paperEmissions = 0;
            if (level >= 2) {
                paperEmissions = (state.paperRames || 50) * 0.004;
            }
            let budgetEmissions = 0;
            if (level === 3) {
                budgetEmissions = (state.purchasingBudget || 10000) * 0.00012;
            }

            consumption = foodEmissions + wasteEmissions + itEmissions + paperEmissions + budgetEmissions;
        }

        // D. Secteur d'activité (only if dynamic sector questionnaire applies and level >= 2)
        if (level >= 2 && ['agriculture', 'restaurant', 'education', 'health', 'community', 'food-aid'].includes(state.sector)) {
            if (state.sector === 'agriculture') {
                const cattleEm = (state.cattleHead || 0) * 2.1; // 2.1 tCO2e/year/head
                const cropEm = (state.cropHectares || 0) * 0.25; // 0.25 tCO2e/hectare
                const fertilizerEm = (state.fertilizerKg || 0) * 0.005; // 5 kg CO2e/kg nitrogen
                sector = cattleEm + cropEm + fertilizerEm;
            } else if (state.sector === 'restaurant') {
                const annualMeals = (state.mealsPerDay || 0) * 312; // 6 operating days/week
                const redMeatMeals = annualMeals * (state.redMeatRatio / 100);
                const otherMeals = annualMeals * (1 - state.redMeatRatio / 100);
                const mealEm = (redMeatMeals * 6.2 + otherMeals * 1.6) / 1000;
                const wasteEm = (annualMeals * (state.foodWasteRatio / 100) * 0.45) / 1000;
                sector = mealEm + wasteEm;
            } else if (state.sector === 'education') {
                const studCount = state.studentsCount || 0;
                const activityEm = studCount * 0.06;
                const commuteEm = studCount * (state.studentSoloCarShare / 100) * 180 * 0.09; // 180 school days
                sector = activityEm + commuteEm;
            } else if (state.sector === 'health') {
                const bedEm = (state.bedsCount || 0) * 1.5;
                const medWasteEm = (state.medicalWasteKg || 0) * 0.0022;
                sector = bedEm + medWasteEm;
            } else if (state.sector === 'community' || state.sector === 'food-aid') {
                const logisticsEm = (state.foodDistributedTons || 0) * 0.16;
                const fridgeEm = (state.refrigeratedM3 || 0) * 0.045;
                sector = logisticsEm + fridgeEm;
            }
        }

        // E. Step 6 Checked Actions Offsets
        if (state.checkedActions && state.checkedActions.length > 0) {
            state.checkedActions.forEach(actId => {
                offsets += ACTION_OFFSETS[actId] || 0;
            });
        }

        // F. Projected/Simulated Commitments in Cockpit Tab 2
        let simulatedOffsets = 0;
        if (state.futureCommitments && state.futureCommitments.length > 0) {
            state.futureCommitments.forEach(actId => {
                simulatedOffsets += ACTION_OFFSETS[actId] || 0;
            });
        }

        const gross = energy + mobility + consumption + sector;
        // Cap baseline offsets at 90% of gross
        const baselineOffsets = Math.min(offsets, gross * 0.9);
        const baselineNet = gross - baselineOffsets;

        // Simulated Net with commitments
        const totalOffsets = Math.min(offsets + simulatedOffsets, gross * 0.95);
        const simulatedNet = gross - totalOffsets;

        return {
            gross: parseFloat(gross.toFixed(1)),
            offsets: parseFloat(baselineOffsets.toFixed(1)),
            net: parseFloat(baselineNet.toFixed(1)),
            simulatedNet: parseFloat(simulatedNet.toFixed(1)),
            simulatedOffsets: parseFloat((totalOffsets - baselineOffsets).toFixed(1)),
            energy: parseFloat(energy.toFixed(1)),
            mobility: parseFloat(mobility.toFixed(1)),
            consumption: parseFloat(consumption.toFixed(1)),
            sector: parseFloat(sector.toFixed(1)),
        };
    }

    /* ── 6. Update Sidebar Live ── */
    function updateSidebarFromState() {
        const { gross, offsets, net, energy, mobility, consumption, sector } = calculate();

        if (currentStep >= 2) {
            document.getElementById('sidebar-total').textContent = net.toFixed(1);
        } else {
            document.getElementById('sidebar-total').textContent = '—';
        }

        const maxRef = 12;
        document.getElementById('mini-bar-energy').style.width = `${Math.min(100, (energy / maxRef) * 100).toFixed(0)}%`;
        document.getElementById('mini-val-energy').textContent = currentStep >= 2 ? `${energy}t` : '—';

        document.getElementById('mini-bar-mobility').style.width = `${Math.min(100, (mobility / maxRef) * 100).toFixed(0)}%`;
        document.getElementById('mini-val-mobility').textContent = currentStep >= 3 ? `${mobility}t` : '—';

        document.getElementById('mini-bar-diet').style.width = `${Math.min(100, (consumption / maxRef) * 100).toFixed(0)}%`;
        document.getElementById('mini-val-diet').textContent = currentStep >= 4 ? `${consumption}t` : '—';

        // Sector row display in sidebar
        const sectorRow = document.getElementById('mini-row-sector');
        if (parseInt(state.level, 10) >= 2 && ['agriculture', 'restaurant', 'education', 'health', 'community', 'food-aid'].includes(state.sector)) {
            sectorRow.style.display = 'grid';
            document.getElementById('mini-bar-sector').style.width = `${Math.min(100, (sector / maxRef) * 100).toFixed(0)}%`;
            document.getElementById('mini-val-sector').textContent = currentStep >= 5 ? `${sector}t` : '—';
        } else {
            sectorRow.style.display = 'none';
        }

        // Mascot messages
        const msgs = [
            'Bonjour! Je suis votre conseiller. Je vous guiderai et estimerai les données manquantes grâce aux moyennes régionales.',
            state.heating === 'electricity'
                ? 'L\'électricité hydroélectrique québécoise est extrêmement propre. Excellente base de départ !'
                : 'Le chauffage aux combustibles fossiles est un levier majeur de réduction pour votre profil.',
            state.carKm > 20000
                ? `${state.carKm.toLocaleString()} km par an représente un impact lourd. Avez-vous pensé à la motorisation électrique ?`
                : 'Votre kilométrage annuel est modéré. En zone rurale comme L\'Érable, c\'est une belle performance.',
            state.diet === 'vegan' || state.diet === 'vegetarian'
                ? 'Votre régime végétal permet d\'alléger grandement votre impact sur le territoire.'
                : 'Le tri complet et le compostage réduisent de plus de 90 % les émissions de déchets.',
            'Ce volet sectoriel permet d\'évaluer l\'impact opérationnel de vos activités professionnelles.',
            'Cochez vos actions en cours pour comptabiliser les offsets négatifs d\'évitement carbone.',
            `Bilan calculé ! Explorez votre cockpit, gérez votre plan d'action et téléchargez votre synthèse.`
        ];
        document.getElementById('sidebar-mascot-text').textContent = msgs[currentStep - 1] || msgs[0];

        // Step-specific tips
        const tips = [
            'L\'hydroélectricité québécoise est extrêmement propre (environ 1.3g CO2e/kWh).',
            'Passer au chauffage électrique ou à la thermopompe est subventionné au Québec via LogisVert.',
            'Les municipalités de la MRC de L\'Érable offrent un service d\'autopartage et de transport collectif.',
            'La CDC de L\'Érable encourage le circuit court et les marchés publics de Plessisville et Princeville.',
            'Les déchets organiques compostés évitent du méthane fortement émissif en lieu d\'enfouissement.',
            'Un arbre planté en zone tempérée québécoise séquestre environ 20 kg de CO₂ par an après maturité.',
            'Votre cockpit intègre un simulateur d\'actions pour piloter vos futures réductions.'
        ];
        document.getElementById('sidebar-tip-text').textContent = tips[currentStep - 1] || tips[0];
    }

    /* ── 7. Render Cockpit Dashboard (Step 7) ── */
    function renderResults() {
        const data = calculate();
        const maxRef = 12;

        const profiles = {
            citizen:      { label: 'Citoyen',      avg: 9.2 },
            company:      { label: 'Entreprise',   avg: 42.0 },
            organisation: { label: 'OBNL / Association', avg: 15.0 },
            institution:  { label: 'Institution publique', avg: 75.0 },
            municipality: { label: 'Collectivité / MRC', avg: 120.0 }
        };
        const prof = profiles[state.profile] || profiles.citizen;

        // Baseline score
        document.getElementById('results-total').textContent = data.net.toFixed(1);
        document.getElementById('results-profile-label').textContent = prof.label;
        document.getElementById('results-gross').textContent = data.gross.toFixed(1);
        document.getElementById('results-offset').textContent = `-${data.offsets.toFixed(1)}`;

        // Comparatif
        const diff = (((data.net - prof.avg) / prof.avg) * 100).toFixed(0);
        const compareEl = document.getElementById('results-compare-value');
        if (data.net <= prof.avg) {
            compareEl.textContent = `${Math.abs(diff)}% sous la moyenne régionale`;
            compareEl.className = 'context-value positive';
        } else {
            compareEl.textContent = `${Math.abs(diff)}% au-dessus de la moyenne régionale`;
            compareEl.className = 'context-value negative';
        }

        // Circular Gauge
        const gaugeArc = document.getElementById('results-gauge-arc');
        const gaugeOffset = 314.16 - Math.min(314.16, (data.net / maxRef) * 314.16);
        gaugeArc.setAttribute('stroke-dashoffset', gaugeOffset.toFixed(2));
        gaugeArc.setAttribute('stroke', data.net < prof.avg ? '#059669' : '#f59e0b');

        // Progress Bar
        const barPct = Math.min(100, (data.net / maxRef) * 100).toFixed(1);
        const avgPct = Math.min(100, (prof.avg / maxRef) * 100).toFixed(1);
        document.getElementById('results-bar-fill').style.width = `${barPct}%`;
        document.getElementById('results-avg-marker').style.left = `${avgPct}%`;
        document.getElementById('results-bar-avg-text').textContent = `Moy. ${prof.avg}t`;

        // Tab 1: Breakdown bars
        const maxBreak = Math.max(data.energy, data.mobility, data.consumption, data.sector, 1);
        document.getElementById('res-bar-energy').style.width = `${(data.energy / maxBreak * 100).toFixed(0)}%`;
        document.getElementById('res-val-energy').textContent = `${data.energy} t`;

        document.getElementById('res-bar-mobility').style.width = `${(data.mobility / maxBreak * 100).toFixed(0)}%`;
        document.getElementById('res-val-mobility').textContent = `${data.mobility} t`;

        document.getElementById('res-bar-diet').style.width = `${(data.consumption / maxBreak * 100).toFixed(0)}%`;
        document.getElementById('res-val-diet').textContent = `${data.consumption} t`;

        const rowSector = document.getElementById('res-row-sector');
        if (data.sector > 0) {
            rowSector.style.display = 'grid';
            document.getElementById('res-bar-sector').style.width = `${(data.sector / maxBreak * 100).toFixed(0)}%`;
            document.getElementById('res-val-sector').textContent = `${data.sector} t`;
        } else {
            rowSector.style.display = 'none';
        }

        // Tab 2: Future Commitments Checklist
        renderCommitmentsChecklist();

        // Tab 3: History & Trend Chart
        state.history[2026] = data.net; // set current net score
        renderHistoryTableAndChart();

        // Strategic recommendations
        const recs = [];
        if (state.profile === 'citizen') {
            if (state.heating === 'oil' || state.heating === 'gas') {
                recs.push('**Énergie :** Envisagez de passer à une thermopompe. Hydro-Québec propose une aide LogisVert de plus de 1 000 $ pour les modèles homologués.');
            }
            if (state.carKm > 15000 && state.motor === 'gasoline') {
                recs.push('**Transport :** Votre kilométrage est élevé. Pensez au covoiturage de proximité ou à faire l\'essai d\'un véhicule électrique branché.');
            }
            if (state.diet === 'meat-heavy' || state.diet === 'meat-moderate') {
                recs.push('**Alimentation :** L\'intégration de deux journées végétariennes par semaine réduira votre impact alimentaire de 15%.');
            }
            if (state.waste !== 'complete') {
                recs.push('**Déchets :** Lancez-vous dans le compostage organique avec le bac brun municipal pour éviter l\'enfouissement.');
            }
        } else {
            if (state.heating === 'oil' || state.heating === 'gas') {
                recs.push('**Énergie :** Commandez une analyse de thermographie de vos locaux pour déceler les fuites d\'air avant de remplacer la fournaise.');
            }
            if (state.fleetDist > 20000 && state.fleetMotor === 'gasoline') {
                recs.push('**Logistique :** Remplacez vos vieux véhicules de livraison thermiques par des alternatives hybrides ou électriques pour économiser le carburant.');
            }
            if (state.officeWaste !== 'zero') {
                recs.push('**Opérations :** Installez des zones de tri complètes (compost, papier, canettes) dans vos salles de pause.');
            }
        }
        if (recs.length === 0) {
            recs.push('**Transition :** Félicitations ! Votre profil présente déjà des performances exceptionnelles. Partagez votre démarche pour inspirer le territoire.');
        }

        const listEl = document.getElementById('results-recs-list');
        listEl.innerHTML = recs.map(r => `<li>${r.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join('');
    }

    /* ── 8. Commitments & Plans (Tab 2) ── */
    function renderCommitmentsChecklist() {
        const listEl = document.getElementById('action-plan-list');
        let html = '';

        const citizenActions = [
            { id: 'cit_heat_pump', title: 'Installer une thermopompe électrique', desc: 'Remplacer les énergies fossiles par notre électricité hydro propre.', offset: 1.5 },
            { id: 'cit_buy_local', title: 'Prioriser l\'alimentation locale et vrac', desc: 'Favoriser l\'économie locale de L\'Érable et éviter le plastique.', offset: 0.4 },
            { id: 'cit_electric_car', title: 'Passer au véhicule électrique', desc: 'Décarburer vos déplacements quotidiens dans la MRC.', offset: 1.8 },
            { id: 'cit_solar_panels', title: 'Installer des capteurs solaires thermiques', desc: 'Produire son énergie d\'appoint et chauffer l\'eau au solaire.', offset: 0.3 }
        ];

        const corpActions = [
            { id: 'corp_solar_panels', title: 'Installer du solaire photovoltaïque', desc: 'Générer de l\'énergie propre sur vos toitures industrielles/fermes.', offset: 6.5 },
            { id: 'corp_electric_fleet', title: 'Électrifier la flotte de véhicules', desc: 'Bilan de carburant fossile nul sur toute la logistique légère.', offset: 12.0 },
            { id: 'corp_zero_waste', title: 'Instaurer une politique zéro déchet', desc: 'Trier tous les résidus d\'emballage et composter la biomasse.', offset: 3.5 },
            { id: 'corp_reforestation', title: 'Créer des zones de reboisement corporatif', desc: 'Planter des arbres indigènes sur vos parcelles d\'usine/ferme.', offset: 8.0 }
        ];

        const actions = state.profile === 'citizen' ? citizenActions : corpActions;

        actions.forEach(act => {
            const isAlreadyChecked = state.checkedActions.includes(act.id);
            const isCommitted = state.futureCommitments.includes(act.id);

            html += `
                <div class="action-plan-item ${isAlreadyChecked ? 'completed' : (isCommitted ? 'completed' : '')}" data-action-id="${act.id}">
                    <input type="checkbox" class="action-plan-checkbox" 
                        ${isAlreadyChecked ? 'checked disabled' : ''} 
                        ${isCommitted ? 'checked' : ''}>
                    <div class="action-plan-details">
                        <span class="action-plan-text">${act.title} ${isAlreadyChecked ? '(Déjà réalisé)' : ''}</span>
                        <span class="action-plan-impact">Potentiel de réduction : -${act.offset} tCO₂e / an</span>
                    </div>
                </div>
            `;
        });

        listEl.innerHTML = html;

        // Add simulation listeners
        listEl.querySelectorAll('.action-plan-item').forEach(item => {
            const cb = item.querySelector('.action-plan-checkbox');
            if (cb.disabled) return;

            item.addEventListener('click', (e) => {
                if (e.target !== cb) {
                    cb.checked = !cb.checked;
                }
                
                const actId = item.dataset.actionId;
                if (cb.checked) {
                    if (!state.futureCommitments.includes(actId)) {
                        state.futureCommitments.push(actId);
                    }
                    item.classList.add('completed');
                } else {
                    state.futureCommitments = state.futureCommitments.filter(id => id !== actId);
                    item.classList.remove('completed');
                }

                // Recalculate and update the main dashboard total
                const data = calculate();
                document.getElementById('results-total').textContent = data.simulatedNet.toFixed(1);
                document.getElementById('results-offset').textContent = `-${(data.offsets + data.simulatedOffsets).toFixed(1)}`;
                
                const gaugeArc = document.getElementById('results-gauge-arc');
                const maxRef = 12;
                const gaugeOffset = 314.16 - Math.min(314.16, (data.simulatedNet / maxRef) * 314.16);
                gaugeArc.setAttribute('stroke-dashoffset', gaugeOffset.toFixed(2));

                const barPct = Math.min(100, (data.simulatedNet / maxRef) * 100).toFixed(1);
                document.getElementById('results-bar-fill').style.width = `${barPct}%`;
            });
        });
    }

    /* ── 9. Interactive SVG History Curve (Tab 3) ── */
    function renderHistoryTableAndChart() {
        const tableBody = document.getElementById('history-table-body');
        let html = '';

        const years = [2023, 2024, 2025, 2026];
        years.forEach(yr => {
            const val = state.history[yr];
            const is2026 = yr === 2026;
            html += `
                <tr>
                    <td><strong>${yr}</strong></td>
                    <td>
                        <input type="number" step="0.1" class="history-input-val history-year-input" 
                            data-year="${yr}" 
                            value="${val !== null ? val.toFixed(1) : ''}" 
                            ${is2026 ? 'disabled' : ''}>
                    </td>
                    <td>${is2026 ? 'Bilan actuel calculé en direct' : `Estimation de vos émissions pour l'année ${yr}`}</td>
                </tr>
            `;
        });
        tableBody.innerHTML = html;

        // Draw the SVG trend line
        drawHistoryChart();

        // Bind input listeners for historical years
        tableBody.querySelectorAll('.history-year-input').forEach(input => {
            input.addEventListener('change', () => {
                const yr = input.dataset.year;
                const parsedVal = parseFloat(input.value);
                if (!isNaN(parsedVal)) {
                    state.history[yr] = parsedVal;
                    // save state
                    localStorage.setItem('erable_ges_evaluation_state', JSON.stringify(state));
                    drawHistoryChart();
                }
            });
        });
    }

    function drawHistoryChart() {
        const svg = document.getElementById('history-trend-chart');
        if (!svg) return;
        
        const years = [2023, 2024, 2025, 2026];
        const dataPoints = years.map(yr => {
            return { year: yr, val: state.history[yr] || 0 };
        });

        const width = svg.clientWidth || 300;
        const height = svg.clientHeight || 180;
        const padding = 30;

        const maxVal = Math.max(...dataPoints.map(d => d.val), 10) * 1.15;

        // Generate coordinate mappings
        const points = dataPoints.map((d, index) => {
            const x = padding + (index * (width - padding * 2) / (years.length - 1));
            const y = height - padding - (d.val * (height - padding * 2) / maxVal);
            return { x, y, year: d.year, val: d.val };
        });

        // Generate the path string
        let pathD = '';
        points.forEach((p, index) => {
            if (index === 0) {
                pathD += `M ${p.x} ${p.y}`;
            } else {
                pathD += ` L ${p.x} ${p.y}`;
            }
        });

        let elementsHtml = `
            <!-- Grid lines -->
            <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#cbd5e1" stroke-width="1.5"/>
            <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#cbd5e1" stroke-width="1.5"/>
            
            <!-- Trend Line -->
            <path d="${pathD}" class="trend-line"/>
        `;

        // Add dots and text labels
        points.forEach(p => {
            elementsHtml += `
                <g>
                    <circle cx="${p.x}" cy="${p.y}" r="5" class="trend-dot"/>
                    <text x="${p.x}" y="${p.y - 10}" text-anchor="middle" class="trend-text" style="font-weight:700; fill:var(--color-secondary);">${p.val.toFixed(1)}t</text>
                    <text x="${p.x}" y="${height - 10}" text-anchor="middle" class="trend-text">${p.year}</text>
                </g>
            `;
        });

        svg.innerHTML = elementsHtml;
    }

    /* ── 10. AI Chat Environmental Advisor ── */
    const chatInput = document.getElementById('ai-chat-input');
    const chatSend = document.getElementById('ai-chat-send');
    const chatLog = document.getElementById('ai-chat-log');
    const chatSuggestions = document.getElementById('ai-chat-suggestions');

    function appendMessage(sender, text) {
        const msg = document.createElement('div');
        msg.className = `chat-msg-new ${sender}`;
        msg.textContent = text;
        chatLog.appendChild(msg);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function handleAdvisorQuery(query) {
        appendMessage('user', query);
        
        let response = '';
        const { gross, net } = calculate();

        if (query.includes('smart-defaults')) {
            response = `J'utilise des données modélisées par la CDC de L'Érable pour vos valeurs manquantes : chauffage estimé à hydroélectricité propre, moyenne de transport de la MRC fixée à 12 000 km/an, alimentation locale moyenne fixée à 25 %.`;
        } else if (query.includes('heating-tips')) {
            if (state.heating === 'electricity') {
                response = `Votre chauffage électrique est très propre (1.3g CO₂/kWh). Pour économiser l'électricité lors des pointes hivernales Hydro-Québec, abaissez le chauffage de 2°C la nuit ou installez un thermostat intelligent.`;
            } else {
                response = `Le chauffage au ${state.heating === 'gas' ? 'gaz' : 'mazout'} pèse lourd dans la MRC. Passer à une thermopompe électrique avec le programme LogisVert d'Hydro-Québec réduira instantanément votre empreinte énergétique de 90%.`;
            }
        } else if (query.includes('mrc-stats')) {
            response = `La MRC de L'Érable compte 10 municipalités. Nos principaux enjeux sont le transport individuel en zone rurale sans bus et le traitement des matières résiduelles. Le compostage individuel est fortement recommandé.`;
        } else {
            // General query parsing
            const lower = query.toLowerCase();
            if (lower.includes('mazout') || lower.includes('gaz') || lower.includes('chauffage')) {
                response = `Pour le chauffage de type fossile, la transition vers une thermopompe électrique permet d'éviter l'achat de carburant et d'économiser environ 1.5 tonne de CO₂e par an.`;
            } else if (lower.includes('electric') || lower.includes('voiture') || lower.includes('vé')) {
                response = `Un véhicule électrique au Québec n'émet que 0.008 kg de CO₂/km contre 0.185 kg pour une berline thermique. C'est l'action prioritaire si vous faites plus de 15 000 km/an.`;
            } else if (lower.includes('compost') || lower.includes('dechet') || lower.includes('compostage')) {
                response = `Le compostage domestique ou le bac brun de la MRC évite la fermentation anaérobie des ordures ménagères en décharge, qui génère du méthane à fort pouvoir de réchauffement.`;
            } else {
                response = `Sur la base de votre profil (${state.profile === 'citizen' ? 'Citoyen' : 'Professionnel'}), votre empreinte nette est estimée à ${net.toFixed(1)} tCO₂e/an. Votre principal levier est la décarburation du chauffage et de votre transport quotidien.`;
            }
        }

        setTimeout(() => {
            appendMessage('ai', response);
        }, 600);
    }

    if (chatSend && chatInput) {
        chatSend.addEventListener('click', () => {
            const txt = chatInput.value.trim();
            if (txt) {
                handleAdvisorQuery(txt);
                chatInput.value = '';
            }
        });
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const txt = chatInput.value.trim();
                if (txt) {
                    handleAdvisorQuery(txt);
                    chatInput.value = '';
                }
            }
        });
    }

    if (chatSuggestions) {
        chatSuggestions.querySelectorAll('.chat-suggest-btn-new').forEach(btn => {
            btn.addEventListener('click', () => {
                const queryText = btn.textContent;
                handleAdvisorQuery(queryText);
            });
        });
    }

    /* ── 11. PDF & CSV Exporters ── */
    const btnPdf = document.getElementById('btn-export-pdf');
    const btnCsv = document.getElementById('btn-export-csv');

    if (btnPdf) {
        btnPdf.addEventListener('click', () => {
            window.print();
        });
    }

    if (btnCsv) {
        btnCsv.addEventListener('click', () => {
            const data = calculate();
            const csvContent = [
                ["Indicateur", "Valeur", "Unité"],
                ["Profil", state.profile, ""],
                ["Secteur", state.sector, ""],
                ["Précision", state.level, ""],
                ["Énergie & Bâtiments", data.energy, "tCO2e/an"],
                ["Transports & Mobilité", data.mobility, "tCO2e/an"],
                ["Consommation & Déchets", data.consumption, "tCO2e/an"],
                ["Opérations sectorielles", data.sector, "tCO2e/an"],
                ["Total Brut", data.gross, "tCO2e/an"],
                ["Offsets réclamés", data.offsets, "tCO2e/an"],
                ["Total Net (Actuel)", data.net, "tCO2e/an"],
                ["Simulations plan d'action (Projeté)", data.simulatedNet, "tCO2e/an"]
            ].map(e => e.join(",")).join("\n");

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `Erable_Impact_Bilan_${state.profile}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    /* ── 12. Wizard Navigation & Controls ── */
    function goToStep(n) {
        document.querySelectorAll('.eval-step').forEach(el => el.classList.remove('active'));
        const target = document.querySelector(`.eval-step[data-eval-step="${n}"]`);
        if (target) {
            target.classList.add('active');

            // Stagger animations with GSAP
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
                gsap.from(target, {
                    opacity: 0,
                    y: 18,
                    duration: 0.35,
                    ease: 'power1.out',
                    clearProps: 'all'
                });
            }
        }

        // Highlight header pills
        document.querySelectorAll('.step-pill').forEach(pill => {
            const s = parseInt(pill.dataset.step, 10);
            pill.classList.remove('active', 'done');
            if (s === n) pill.classList.add('active');
            else if (s < n) pill.classList.add('done');
        });

        const mobileCounter = document.getElementById('mobile-step-counter');
        if (mobileCounter) {
            mobileCounter.textContent = (n === 7) ? 'Résultats' : `Étape ${Math.min(n, 6)} sur 6`;
        }

        // Global progress bar calculation
        const TOTAL_NAV_STEPS = 7;
        const pct = (n / TOTAL_NAV_STEPS) * 100;
        document.getElementById('eval-global-fill').style.width = `${pct}%`;

        currentStep = n;
        updateSidebarFromState();

        if (n === 7) renderResults();
    }

    // Bind event listeners to Next / Back buttons
    document.querySelectorAll('.btn-eval-next').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = parseInt(btn.dataset.target, 10);
            collectCurrentStepState(currentStep);

            // Handle dynamic skipping of Step 5 (Activity Sector Questions)
            if (currentStep === 4 && target === 5) {
                const level = parseInt(state.level, 10);
                const hasSpecializedSector = ['agriculture', 'restaurant', 'education', 'health', 'community', 'food-aid'].includes(state.sector);
                if (level < 2 || !hasSpecializedSector) {
                    // Skip to step 6 (Actions Positives)
                    goToStep(6);
                    return;
                }
            }
            goToStep(target);
        });
    });

    document.querySelectorAll('.btn-eval-back-step').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = parseInt(btn.dataset.target, 10);

            // Handle dynamic skipping of Step 5 backwards
            if (currentStep === 6 && target === 5) {
                const level = parseInt(state.level, 10);
                const hasSpecializedSector = ['agriculture', 'restaurant', 'education', 'health', 'community', 'food-aid'].includes(state.sector);
                if (level < 2 || !hasSpecializedSector) {
                    // Skip back to Step 4
                    goToStep(4);
                    return;
                }
            }
            goToStep(target);
        });
    });

    // Special Calculate Button in Step 6
    const calcBtn = document.getElementById('btn-calculate');
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            collectCurrentStepState(6);
            goToStep(7);
        });
    }

    // Back to wizard from Step 7 results
    const resultsBackBtn = document.getElementById('btn-results-back');
    if (resultsBackBtn) {
        resultsBackBtn.addEventListener('click', () => {
            goToStep(6);
        });
    }

    // Back button in Step 6 actions checklist
    const step6BackBtn = document.getElementById('btn-step-6-back');
    if (step6BackBtn) {
        step6BackBtn.addEventListener('click', () => {
            const level = parseInt(state.level, 10);
            const hasSpecializedSector = ['agriculture', 'restaurant', 'education', 'health', 'community', 'food-aid'].includes(state.sector);
            if (level < 2 || !hasSpecializedSector) {
                goToStep(4);
            } else {
                goToStep(5);
            }
        });
    }

    /* ── 13. Dynamic Listeners Binder ── */
    function bindDynamicListeners() {
        // Slider value update bubble
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            const display = document.getElementById(`val-${slider.id}`);
            if (!display) return;

            // Simple initial format
            if (slider.id === 'eval-car' || slider.id === 'eval-annual-electricity' || slider.id === 'eval-annual-gas' || slider.id === 'eval-fertilizer') {
                display.textContent = parseInt(slider.value, 10).toLocaleString('fr-CA');
            } else {
                display.textContent = slider.value;
            }

            slider.replaceWith(slider.cloneNode(true)); // remove old listener to avoid duplicate calculations
            const newSlider = document.getElementById(slider.id);

            newSlider.addEventListener('input', () => {
                if (newSlider.id === 'eval-car' || newSlider.id === 'eval-annual-electricity' || newSlider.id === 'eval-annual-gas' || newSlider.id === 'eval-fertilizer') {
                    display.textContent = parseInt(newSlider.value, 10).toLocaleString('fr-CA');
                } else {
                    display.textContent = newSlider.value;
                }
                collectCurrentStepState(currentStep);
                updateSidebarFromState();
            });
        });

        // Radios
        document.querySelectorAll('input[type="radio"]').forEach(r => {
            r.replaceWith(r.cloneNode(true));
        });
        document.querySelectorAll('input[type="radio"]').forEach(r => {
            r.addEventListener('change', () => {
                collectCurrentStepState(currentStep);
                updateSidebarFromState();
            });
        });

        // Selects
        document.querySelectorAll('select.eval-select').forEach(s => {
            s.replaceWith(s.cloneNode(true));
        });
        document.querySelectorAll('select.eval-select').forEach(s => {
            s.addEventListener('change', () => {
                collectCurrentStepState(currentStep);
                updateSidebarFromState();
            });
        });

        // Text inputs in Step 2 / Step 3
        document.querySelectorAll('input[type="number"]').forEach(numInput => {
            numInput.addEventListener('change', () => {
                collectCurrentStepState(currentStep);
                updateSidebarFromState();
            });
        });

        // Checkboxes in Step 6
        document.querySelectorAll('input[type="checkbox"]').forEach(c => {
            c.addEventListener('change', () => {
                collectCurrentStepState(currentStep);
                updateSidebarFromState();
            });
        });
    }

    /* ── 14. Tabbed Panel Navigation in Cockpit (Step 7) ── */
    document.querySelectorAll('.dashboard-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            document.querySelectorAll('.dashboard-tab-btn').forEach(b => b.classList.remove('active'));
            // Remove active from all content divs
            document.querySelectorAll('.dashboard-tab-content').forEach(c => c.classList.remove('active'));

            // Set current active
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            document.getElementById(`tab-${tabId}-content`).classList.add('active');

            if (tabId === 'history') {
                // Redraw history chart to handle dynamic SVG container sizing
                setTimeout(drawHistoryChart, 100);
            }
        });
    });

    /* ── 15. Initial State Trigger ── */
    renderWizardFields();
    goToStep(1);

    // Initial listeners update
    document.querySelectorAll('input[name="eval-profile"]').forEach(rad => {
        rad.addEventListener('change', () => {
            collectCurrentStepState(1);
            renderWizardFields();
            updateSidebarFromState();
        });
    });
    
    const sectorSel = document.getElementById('eval-sector');
    if (sectorSel) {
        sectorSel.addEventListener('change', () => {
            collectCurrentStepState(1);
            renderWizardFields();
            updateSidebarFromState();
        });
    }

    document.querySelectorAll('input[name="eval-level"]').forEach(rad => {
        rad.addEventListener('change', () => {
            collectCurrentStepState(1);
            renderWizardFields();
            updateSidebarFromState();
        });
    });
});
