/* ==========================================================================
   ERABLE GES — Interactive Functionality & Simulator Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Mobile Navigation & Scroll Header
       ========================================================================== */
    const header = document.querySelector('.main-header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navBackdrop = document.getElementById('nav-backdrop');

    const mobileLoginTrigger = document.getElementById('mobile-login-trigger');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    function toggleMobileNav(forceClose = false) {
        if (!mainNav) return;
        const isOpen = forceClose ? false : !mainNav.classList.contains('active');
        if (mobileToggle) mobileToggle.classList.toggle('active', isOpen);
        if (mainNav) mainNav.classList.toggle('active', isOpen);
        if (navBackdrop) navBackdrop.classList.toggle('active', isOpen);
        document.body.classList.toggle('no-scroll', isOpen);
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileNav();
        });
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMobileNav(true);
        });
    }

    // Close menu when clicking navigation links
    if (mainNav) {
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.id !== 'mobile-login-trigger') {
                    toggleMobileNav(true);
                }
            });
        });
    }


    /* ==========================================================================
       2. Connection Login Modal Interaction
       ========================================================================== */
    const loginTrigger = document.getElementById('login-btn-trigger');
    const loginModal = document.getElementById('login-modal');
    const modalClose = loginModal ? loginModal.querySelector('.modal-close-btn') : null;
    const loginForm = document.getElementById('login-form');
    const mascotBubbleText = document.getElementById('mascot-text');

    function openModal(e) {
        if (e) e.preventDefault();
        if (loginModal) loginModal.classList.add('active');
        toggleMobileNav(true);
    }

    function closeModal() {
        if (loginModal) loginModal.classList.remove('active');
    }

    if (loginTrigger) loginTrigger.addEventListener('click', openModal);
    if (mobileLoginTrigger) mobileLoginTrigger.addEventListener('click', openModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);

    const headerStartBtn = document.getElementById('header-start-btn');
    if (headerStartBtn) {
        headerStartBtn.addEventListener('click', openModal);
    }

    const heroStartBtn = document.getElementById('hero-start-btn');
    if (heroStartBtn) {
        heroStartBtn.addEventListener('click', openModal);
    }
    
    // Close modal when clicking outside of the box
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeModal();
        }
    });

    // Handle mock login submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value || 'utilisateur';
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        
        submitBtn.textContent = "Authentification...";
        submitBtn.disabled = true;

        // Mock network delay (1.2s) then redirect to evaluation page
        setTimeout(() => {
            const username = email.includes('@') ? email.split('@')[0] : email;
            sessionStorage.setItem('erableUser', username);
            sessionStorage.setItem('erableUserType', 'member');
            window.location.href = 'evaluation.html';
        }, 1200);
    });    // Guest access — no credentials required → redirect immediately
    const guestBtn = document.getElementById('guest-access-btn');
    if (guestBtn) {
        guestBtn.addEventListener('click', () => {
            sessionStorage.setItem('erableUser', 'Invité');
            sessionStorage.setItem('erableUserType', 'guest');
            window.location.href = 'evaluation.html';
        });
    }



    /* ==========================================================================
       4. Live Simulator Engine
       ========================================================================== */
    
    // UI Elements
    const wizardSteps = document.querySelectorAll('.wizard-step-content');
    const wizardIndicators = document.querySelectorAll('.wizard-step-indicator');
    const prevBtns = document.querySelectorAll('.prev-wizard-btn');
    const nextBtns = document.querySelectorAll('.next-wizard-btn');
    const calculateBtn = document.getElementById('calculate-btn');
    
    if (calculateBtn) {
        // Progress UI Elements
        const progressFill = document.getElementById('wizard-progress-fill');
        const progressStepText = document.getElementById('progress-step-text');
        const progressPctText = document.getElementById('progress-percentage-text');

        // Sliders & Outputs
        const billSlider = document.getElementById('input-energy-bill');
        const billValSpan = document.getElementById('val-energy-bill');
        
        const carSlider = document.getElementById('input-mobility-car');
        const carValSpan = document.getElementById('val-mobility-car');
        
        const flightsSlider = document.getElementById('input-mobility-flights');
        const flightsValSpan = document.getElementById('val-mobility-flights');

        // Setup input slider value updates
        function syncSlider(slider, displaySpan, formatFn) {
            if (!slider) return;
            slider.addEventListener('input', () => {
                let val = parseFloat(slider.value);
                displaySpan.textContent = formatFn ? formatFn(val) : val;
                calculateFootprint(); // Live recalculation on every slider input!
                updateMascotTextForInput(slider.id, val);
            });
        }

        syncSlider(billSlider, billValSpan);
        syncSlider(carSlider, carValSpan, val => val.toLocaleString());
        syncSlider(flightsSlider, flightsValSpan);

        // Profile radio check updates
        const profileInputs = document.querySelectorAll('input[name="sim-profile"]');
        profileInputs.forEach(input => {
            input.addEventListener('change', () => {
                adaptFormForProfile(input.value);
                calculateFootprint();
                
                const profileText = {
                    'citizen': 'Citoyen',
                    'company': 'Entreprise',
                    'municipality': 'Collectivité'
                }[input.value];
                mascotBubbleText.textContent = `Profil configuré : ${profileText}. Commençons à mesurer vos bâtiments.`;
            });
        });

        // Handle form change event delegation
        document.querySelectorAll('.wizard-card select').forEach(select => {
            select.addEventListener('change', () => {
                calculateFootprint();
                updateMascotTextForSelect(select.id, select.value);
            });
        });

        let currentWizardStep = 1;

        function updateProgressBar(stepNum) {
            const totalSteps = 4;
            const pct = (stepNum / totalSteps) * 100;
            progressFill.style.width = `${pct}%`;
            progressPctText.textContent = `${pct}% complété`;

            const stepLabels = {
                1: "Étape 1 sur 4 : Profil",
                2: "Étape 2 sur 4 : Énergie & Bâtiment",
                3: "Étape 3 sur 4 : Mobilité",
                4: "Étape 4 sur 4 : Consommation"
            };
            progressStepText.textContent = stepLabels[stepNum];
        }

        function goToWizardStep(stepNum) {
            if (stepNum < 1 || stepNum > 4) return;
            
            wizardSteps.forEach(step => step.classList.remove('active'));
            wizardIndicators.forEach(ind => ind.classList.remove('active'));
            
            document.querySelector(`.wizard-step-content[data-wizard-step="${stepNum}"]`).classList.add('active');
            document.querySelector(`.wizard-step-indicator[data-step-indicator="${stepNum}"]`).classList.add('active');
            
            currentWizardStep = stepNum;
            updateProgressBar(stepNum);

            // Mascot commentary based on step transition
            const mascotStepMsgs = {
                1: "Sélectionnez votre profil d'activité.",
                2: "Renseignez vos consommations électriques et énergétiques.",
                3: "Passons aux transports. C'est souvent le poste le plus lourd.",
                4: "Dernière étape : alimentation et gestion des résidus."
            };
            mascotBubbleText.textContent = mascotStepMsgs[stepNum];
        }

        nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                goToWizardStep(currentWizardStep + 1);
            });
        });

        prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                goToWizardStep(currentWizardStep - 1);
            });
        });

        calculateBtn.addEventListener('click', () => {
            calculateFootprint(true); // final calculation
            mascotBubbleText.textContent = "Calcul terminé ! Votre cockpit de pilotage carbone est prêt.";
            // Scroll to dashboard on small viewports
            if (window.innerWidth <= 1100) {
                document.querySelector('.dashboard-card').scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Mascot interactive live messaging
        function updateMascotTextForInput(id, val) {
            if (id === 'input-energy-bill') {
                if (val > 300) {
                    mascotBubbleText.textContent = "Une consommation élevée. Avez-vous pensé à une isolation thermique renforcée ?";
                } else {
                    mascotBubbleText.textContent = "Consommation électrique modérée. Parfait pour le bilan !";
                }
            } else if (id === 'input-mobility-car') {
                if (val > 20000) {
                    mascotBubbleText.textContent = `Aïe, ${val.toLocaleString()} km c'est beaucoup. La voiture solo pèse lourd sur la jauge.`;
                } else {
                    mascotBubbleText.textContent = "Kilométrage raisonnable. Chaque réduction compte.";
                }
            } else if (id === 'input-mobility-flights') {
                if (val > 3) {
                    mascotBubbleText.textContent = `Prendre l'avion ${val} fois par an génère des émissions concentrées.`;
                }
            }
        }

        function updateMascotTextForSelect(id, value) {
            if (id === 'input-energy-heating') {
                if (value === 'electricity') {
                    mascotBubbleText.textContent = "L'hydroélectricité québécoise est une des énergies les plus décarbonées au monde !";
                } else if (value === 'oil') {
                    mascotBubbleText.textContent = "Attention : le chauffage au mazout émet énormément de gaz à effet de serre.";
                } else if (value === 'gas') {
                    mascotBubbleText.textContent = "Le gaz naturel est fossile. Envisagez une transition vers une thermopompe.";
                }
            } else if (id === 'input-diet') {
                if (value === 'vegetarian' || value === 'vegan') {
                    mascotBubbleText.textContent = "Excellent ! Un régime végétal divise par 3 l'empreinte de votre assiette.";
                } else if (value === 'meat-heavy') {
                    mascotBubbleText.textContent = "La production de viande rouge génère beaucoup d'émissions de méthane.";
                }
            } else if (id === 'input-waste') {
                if (value === 'complete') {
                    mascotBubbleText.textContent = "Génial ! Le compostage détourne les biodéchets de l'enfouissement émetteur.";
                }
            }
        }

        // Profile Adaptability Settings
        function adaptFormForProfile(profile) {
            const labelCar = document.getElementById('label-mobility-car');
            const billLabel = document.querySelector('label[for="input-energy-bill"]');
            const flightsGroup = document.getElementById('group-flights');
            const dietGroup = document.getElementById('group-diet');
            const labelThirdBreakdown = document.getElementById('label-breakdown-third');

            if (profile === 'citizen') {
                labelCar.textContent = "Kilométrage annuel en voiture solo (conducteur seul) :";
                billLabel.textContent = "Facture d'électricité mensuelle moyenne (€ / Ménage) :";
                if (flightsGroup) flightsGroup.style.display = 'block';
                if (dietGroup) dietGroup.style.display = 'block';
                labelThirdBreakdown.innerHTML = `
                    <svg class="label-icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    Alimentation & Déchets
                `;
                
                // Adjust slider ranges for citizens
                billSlider.min = "30";
                billSlider.max = "500";
                if(parseFloat(billSlider.value) > 500) billSlider.value = "120";
                
                carSlider.min = "0";
                carSlider.max = "40000";
                if(parseFloat(carSlider.value) > 40000) carSlider.value = "12000";
                
            } else if (profile === 'company') {
                labelCar.textContent = "Kilométrage annuel de la flotte de véhicules professionnels :";
                billLabel.textContent = "Facture d'électricité mensuelle moyenne (€ / Bureaux et production) :";
                if (flightsGroup) flightsGroup.style.display = 'none'; // Hide flights (grouped in services)
                if (dietGroup) dietGroup.style.display = 'none';   // Hide diet (cafeteria is sub-item of purchases)
                labelThirdBreakdown.innerHTML = `
                    <svg class="label-icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    Déchets & Services
                `;
                
                // Adjust sliders for companies (larger scales)
                billSlider.min = "200";
                billSlider.max = "10000";
                if(parseFloat(billSlider.value) < 200) billSlider.value = "1500";
                
                carSlider.min = "0";
                carSlider.max = "250000";
                if(parseFloat(carSlider.value) < 10000) carSlider.value = "45000";
                
            } else if (profile === 'municipality') {
                labelCar.textContent = "Kilométrage annuel cumulé de la flotte municipale (Camions, bus, police) :";
                billLabel.textContent = "Facture d'électricité mensuelle moyenne (€ / Bâtiments publics et éclairage) :";
                if (flightsGroup) flightsGroup.style.display = 'none';
                if (dietGroup) dietGroup.style.display = 'none';
                labelThirdBreakdown.innerHTML = `
                    <svg class="label-icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    Gestion des Déchets
                `;
                
                // Adjust sliders for municipalities (huge scales)
                billSlider.min = "1000";
                billSlider.max = "50000";
                if(parseFloat(billSlider.value) < 1000) billSlider.value = "15000";
                
                carSlider.min = "0";
                carSlider.max = "500000";
                if(parseFloat(carSlider.value) < 20000) carSlider.value = "85000";
            }
            
            // Update slider texts
            billValSpan.textContent = parseFloat(billSlider.value).toLocaleString();
            carValSpan.textContent = parseFloat(carSlider.value).toLocaleString();
        }

        // Footprint Calculation Core Logic
        function calculateFootprint(isFinal = false) {
            const profile = document.querySelector('input[name="sim-profile"]:checked').value;
            const heating = document.getElementById('input-energy-heating').value;
            const electricBill = parseFloat(billSlider.value);
            const carKm = parseFloat(carSlider.value);
            const motorType = document.getElementById('input-mobility-type').value;
            const wasteType = document.getElementById('input-waste').value;

            let energyEmissions = 0;
            let mobilityEmissions = 0;
            let consumptionEmissions = 0; // Or waste for company/municipality
            let average = 9.2;
            let totalMax = 20; // Used for gauge scaling

            // A. Citizen profile calculation
            if (profile === 'citizen') {
                average = 9.2; // average tCO2e/citizen
                totalMax = 20;

                // Chauffage & Electricité (Quebec clean electricity base + heating source impact)
                let heatingFactor = 0.00005; // clean hydro
                if (heating === 'gas') heatingFactor = 0.003;
                else if (heating === 'oil') heatingFactor = 0.005;
                else if (heating === 'wood') heatingFactor = 0.0012;

                energyEmissions = (electricBill * 12 * 0.0005) + (electricBill * 12 * heatingFactor);

                // Mobility: Car + Flights
                let carFactor = 0.00022; // gasoline
                if (motorType === 'hybrid') carFactor = 0.00012;
                else if (motorType === 'electric') carFactor = 0.00002;

                const flights = parseFloat(flightsSlider.value);
                mobilityEmissions = (carKm * carFactor) + (flights * 0.9);

                // Diet & Waste
                const diet = document.getElementById('input-diet').value;
                let dietBase = 1.8; // Omnivore modéré
                if (diet === 'meat-heavy') dietBase = 2.9;
                else if (diet === 'vegetarian') dietBase = 0.9;
                else if (diet === 'vegan') dietBase = 0.4;

                let wasteAdj = 0; // Partial recyclage
                if (wasteType === 'none') wasteAdj = 0.6;
                else if (wasteType === 'complete') wasteAdj = -0.3;

                consumptionEmissions = dietBase + wasteAdj;
            }
            // B. Company profile calculation
            else if (profile === 'company') {
                average = 75.0; // tCO2e average for SMEs
                totalMax = 150;

                let heatingFactor = 0.00005;
                if (heating === 'gas') heatingFactor = 0.0028;
                else if (heating === 'oil') heatingFactor = 0.0045;
                else if (heating === 'wood') heatingFactor = 0.001;

                energyEmissions = (electricBill * 12 * 0.0003) + (electricBill * 12 * heatingFactor * 1.5);

                // Fleet mobility
                let fleetFactor = 0.00024; // fleet mix gasoline/diesel
                if (motorType === 'hybrid') fleetFactor = 0.00014;
                else if (motorType === 'electric') fleetFactor = 0.00003;

                mobilityEmissions = (carKm * fleetFactor);

                // Waste & Services footprint
                let wasteBase = 12.5; // average company waste & office services base
                if (wasteType === 'none') wasteBase = 18.0;
                else if (wasteType === 'complete') wasteBase = 6.0;

                consumptionEmissions = wasteBase;
            }
            // C. Municipality profile calculation
            else if (profile === 'municipality') {
                average = 420.0; // tCO2e average municipal assets
                totalMax = 800;

                let heatingFactor = 0.00005;
                if (heating === 'gas') heatingFactor = 0.0026;
                else if (heating === 'oil') heatingFactor = 0.004;
                else if (heating === 'wood') heatingFactor = 0.0008;

                energyEmissions = (electricBill * 12 * 0.0002) + (electricBill * 12 * heatingFactor * 2.5);

                // Municipal fleet
                let fleetFactor = 0.0003; // heavy vehicles
                if (motorType === 'hybrid') fleetFactor = 0.00018;
                else if (motorType === 'electric') fleetFactor = 0.00004;

                mobilityEmissions = (carKm * fleetFactor);

                // Waste management & regional landfill impact
                let wasteBase = 90.0;
                if (wasteType === 'none') wasteBase = 135.0;
                else if (wasteType === 'complete') wasteBase = 45.0;

                consumptionEmissions = wasteBase;
            }

            // Apply clean boundaries
            energyEmissions = Math.max(0.1, energyEmissions);
            mobilityEmissions = Math.max(0.1, mobilityEmissions);
            consumptionEmissions = Math.max(0.1, consumptionEmissions);

            const totalEmissions = energyEmissions + mobilityEmissions + consumptionEmissions;

            // UI Updates
            document.getElementById('result-total-co2').textContent = totalEmissions.toFixed(1);

            // Circular Gauge Animation
            const gaugeFill = document.getElementById('gauge-fill-element');
            const circumference = 2 * Math.PI * 42; // r=42 -> 263.89
            const percentFilled = Math.min(100, (totalEmissions / totalMax) * 100);
            const dashoffset = circumference - (percentFilled / 100) * circumference;
            gaugeFill.style.strokeDashoffset = dashoffset;

            // Visual gauge color state depending on scale
            if (totalEmissions > average * 1.2) {
                gaugeFill.style.stroke = '#ef4444'; // Red for very high
            } else if (totalEmissions < average * 0.8) {
                gaugeFill.style.stroke = '#059669'; // Green for low
            } else {
                gaugeFill.style.stroke = '#fbbf24'; // Yellow for average
            }

            // Profile labels update
            const profileTypeText = {
                'citizen': 'Bilan Citoyen',
                'company': 'Bilan Entreprise (PME)',
                'municipality': 'Bilan Collectivité (MRC)'
            };
            document.getElementById('comp-profile-type').textContent = profileTypeText[profile];
            document.getElementById('comp-avg-label').textContent = `Moyenne (${average.toFixed(1)}t)`;

            // Comparison Bar Update
            const percentageText = document.getElementById('comp-percentage-text');
            const marker = document.getElementById('avg-marker-element');
            const fillBar = document.getElementById('comp-fill-element');

            const ratioTotal = Math.min(1, totalEmissions / totalMax);
            const ratioAvg = Math.min(1, average / totalMax);

            fillBar.style.width = `${ratioTotal * 100}%`;
            marker.style.left = `${ratioAvg * 100}%`;

            if (totalEmissions < average) {
                const diffPct = ((average - totalEmissions) / average * 100).toFixed(0);
                percentageText.textContent = `${diffPct}% sous la moyenne`;
                percentageText.style.color = '#34d399';
            } else {
                const diffPct = ((totalEmissions - average) / average * 100).toFixed(0);
                percentageText.textContent = `${diffPct}% au-dessus de la moyenne`;
                percentageText.style.color = '#f87171';
            }

            // Breakdown bars rendering
            const totalSum = energyEmissions + mobilityEmissions + consumptionEmissions;
            
            const pctEnergy = (energyEmissions / totalSum * 100).toFixed(0);
            const pctMobility = (mobilityEmissions / totalSum * 100).toFixed(0);
            const pctConsumption = (consumptionEmissions / totalSum * 100).toFixed(0);

            document.getElementById('bar-energy').style.width = `${pctEnergy}%`;
            document.getElementById('val-bar-energy').textContent = `${energyEmissions.toFixed(1)} t (${pctEnergy}%)`;

            document.getElementById('bar-mobility').style.width = `${pctMobility}%`;
            document.getElementById('val-bar-mobility').textContent = `${mobilityEmissions.toFixed(1)} t (${pctMobility}%)`;

            document.getElementById('bar-diet').style.width = `${pctConsumption}%`;
            document.getElementById('val-bar-diet').textContent = `${consumptionEmissions.toFixed(1)} t (${pctConsumption}%)`;

            // Actionable Recommendations Engine
            const recsList = document.getElementById('recs-list');
            recsList.innerHTML = ''; // reset recommendations

            let recommendations = [];

            if (profile === 'citizen') {
                if (carKm > 12000 && motorType !== 'electric') {
                    recommendations.push(`Privilégiez le transport collectif ou le covoiturage pour réduire vos ${carKm.toLocaleString()} km annuels de voiture thermique.`);
                }
                if (heating === 'oil' || heating === 'gas') {
                    const heatName = heating === 'oil' ? 'au mazout' : 'au gaz propane';
                    recommendations.push(`Votre chauffage ${heatName} est très émetteur. Envisager l'installation d'une thermopompe électrique hydro-québécoise.`);
                }
                if (document.getElementById('input-diet').value === 'meat-heavy') {
                    recommendations.push("Réduire votre part de viande rouge au profit d'alternatives végétales réduira votre empreinte alimentaire jusqu'à 35%.");
                }
                if (wasteType === 'none' || wasteType === 'partial') {
                    recommendations.push("L'intégration complète du compostage permettra de capter vos biodéchets et d'éviter les émissions de méthane.");
                }
            } else if (profile === 'company') {
                if (carKm > 40000 && motorType !== 'electric') {
                    recommendations.push(`Convertir votre flotte professionnelle (${carKm.toLocaleString()} km) vers l'électrique est votre priorité d'impact.`);
                }
                if (heating === 'oil' || heating === 'gas') {
                    recommendations.push("Réalisez un audit de transition thermique pour remplacer les chaudières fossiles des hangars/bureaux.");
                }
                if (wasteType !== 'complete') {
                    recommendations.push("Mettez en place une politique d'approvisionnement circulaire (zéro déchet de bureau et valorisation compostage en entreprise).");
                }
            } else if (profile === 'municipality') {
                if (carKm > 80000 && motorType !== 'electric') {
                    recommendations.push(`Électrifiez de manière prioritaire la flotte municipale et optimisez les circuits de transit collectif.`);
                }
                if (heating === 'oil' || heating === 'gas') {
                    recommendations.push("Amorcez la décarbonation complète des centres communautaires, arénas et hôtels de ville via la géothermie ou biomasse.");
                }
                if (wasteType !== 'complete') {
                    recommendations.push("Augmentez les redevances d'enfouissement régionales et déployez la collecte des résidus alimentaires à l'échelle du territoire.");
                }
            }

            // Fallbacks if performance is outstanding
            if (recommendations.length === 0) {
                recommendations.push("Félicitations, vos indicateurs sont excellents ! Poursuivez vos efforts en parrainant des projets communautaires dans la MRC de L'Érable.");
                recommendations.push("Partagez votre rapport bilan pour inspirer d'autres acteurs de votre entourage.");
            }

            // Render lists
            recommendations.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                recsList.appendChild(li);
            });
        }

        // Adapt layout configuration and launch initial default calculation
        adaptFormForProfile('citizen');
        updateProgressBar(1);
        calculateFootprint();
    }uration and launch initial default calculation
    adaptFormForProfile('citizen');
    updateProgressBar(1);
    calculateFootprint();


    /* ==========================================================================
       UI/UX Pro Max — Scroll Reveal Animations (power1.out, 300-400ms)
       Respects prefers-reduced-motion per WCAG 2.1 §2.3.3
       ========================================================================== */
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion) {
            // Generic fade-up on every section heading + subtitle
            document.querySelectorAll('.section-header h2, .section-header p, .about-solarion-tag, .section-tag').forEach(el => {
                gsap.fromTo(el, 
                    { opacity: 0, y: 16 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.38,
                        ease: 'power1.out',
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 95%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // Stagger grid items (why-cards, feature-boxes, target cards…)
            document.querySelectorAll('.why-grid, .features-grid, .targets-grid, .categories-grid, .benefits-grid, .about-new-grid, .categories-grid-new, .regional-new-grid').forEach(grid => {
                const items = grid.querySelectorAll(':scope > *');
                gsap.fromTo(items, 
                    { opacity: 0, y: 20, scale: 0.97 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.42,
                        stagger: { each: 0.06, from: 'start' },
                        ease: 'power1.out',
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: grid,
                            start: 'top 95%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // Hero text cascade — title, description, CTA button (power1.out)
            const heroTitle  = document.querySelector('.hero-title-solarion');
            const heroDesc   = document.querySelector('.hero-desc-solarion');
            const heroCta    = document.querySelector('.btn-hero-solarion-cta');
            
            if (heroTitle) {
                gsap.fromTo([heroTitle, heroCta, heroDesc].filter(Boolean), 
                    { opacity: 0, y: 24 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        stagger: 0.15,
                        ease: 'power2.out',
                        delay: 0.15,
                        clearProps: 'all'
                    }
                );
            }



            // Background video subtle fade-in
            const heroVideo = document.querySelector('.hero-video-bg');
            if (heroVideo) {
                gsap.fromTo(heroVideo, 
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power1.out',
                        clearProps: 'all'
                    }
                );
            }
        }
    }
    /* ==========================================================================
       Standalone Native 3D Globe Engine (Lime Neon Dotted Matrix Style)
       ========================================================================== */
    function initGlobe() {
        const canvas = document.getElementById('globe-canvas');
        if (!canvas) return;

        const width = canvas.width;
        const height = canvas.height;
        const context = canvas.getContext('2d');
        const radius = width * 0.44;

        // Simplified continental polygon data
        const CONTINENTS = [
            // North America
            [[-168,65],[-168,72],[-140,70],[-120,75],[-85,82],[-60,82],[-55,60],[-50,47],[-65,44],[-75,35],[-80,25],[-90,15],[-80,8],[-77,8],[-82,14],[-98,16],[-105,20],[-115,30],[-125,48],[-140,60],[-168,65]],
            // South America
            [[-80,10],[-60,10],[-35,-5],[-38,-18],[-55,-30],[-65,-45],[-68,-55],[-75,-45],[-80,-20],[-80,10]],
            // Eurasia
            [[-10,36],[0,42],[15,38],[28,40],[40,41],[40,28],[55,25],[60,25],[70,20],[75,10],[80,10],[90,22],[100,5],[105,10],[110,20],[120,23],[125,40],[140,55],[170,65],[180,70],[170,78],[140,75],[100,78],[70,75],[30,71],[15,58],[5,62],[-5,58],[-10,50],[-10,36]],
            // Africa
            [[-17,35],[30,32],[33,28],[43,12],[51,11],[40,-10],[33,-34],[18,-34],[12,-5],[-5,5],[-17,20],[-17,35]],
            // Australia
            [[113,-22],[130,-12],[142,-11],[153,-28],[148,-38],[138,-35],[115,-35],[113,-22]],
            // Greenland
            [[-55,60],[-20,70],[-25,82],[-60,82],[-55,60]]
        ];

        function pointInPoly(pt, poly) {
            let x = pt[0], y = pt[1];
            let inside = false;
            for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
                let xi = poly[i][0], yi = poly[i][1];
                let xj = poly[j][0], yj = poly[j][1];
                let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                if (intersect) inside = !inside;
            }
            return inside;
        }

        function isLand(lon, lat) {
            for (let c = 0; c < CONTINENTS.length; c++) {
                if (pointInPoly([lon, lat], CONTINENTS[c])) return true;
            }
            return false;
        }

        // Generate matrix dot grid inside landmasses
        const matrixDots = [];
        for (let lat = -75; lat <= 75; lat += 2.4) {
            for (let lon = -180; lon <= 180; lon += 2.4) {
                if (isLand(lon, lat)) {
                    matrixDots.push([lon, lat]);
                }
            }
        }

        // Native 3D projection math
        function project(lon, lat, rotY, rotX) {
            const radLon = (lon * Math.PI) / 180;
            const radLat = (lat * Math.PI) / 180;
            const rY = (rotY * Math.PI) / 180;
            const rX = (rotX * Math.PI) / 180;

            let x = Math.cos(radLat) * Math.sin(radLon);
            let y = Math.sin(radLat);
            let z = Math.cos(radLat) * Math.cos(radLon);

            let x1 = x * Math.cos(rY) + z * Math.sin(rY);
            let z1 = -x * Math.sin(rY) + z * Math.cos(rY);

            let y2 = y * Math.cos(rX) - z1 * Math.sin(rX);
            let z2 = y * Math.sin(rX) + z1 * Math.cos(rX);

            return {
                x: width / 2 + x1 * radius,
                y: height / 2 - y2 * radius,
                visible: z2 > 0,
                z: z2
            };
        }

        let start = null;

        function animate(timestamp) {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const rotY = elapsed * 0.018;
            const rotX = -20;

            context.clearRect(0, 0, width, height);

            // 1. Dark green sphere background
            context.beginPath();
            context.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
            context.fillStyle = "#03170d";
            context.fill();
            context.strokeStyle = "#0d3c24";
            context.lineWidth = 2;
            context.stroke();

            // 2. Graticules (Latitude & Longitude grid lines)
            context.strokeStyle = "rgba(70, 180, 40, 0.16)";
            context.lineWidth = 0.6;
            
            // Latitude lines
            for (let lat = -60; lat <= 60; lat += 20) {
                context.beginPath();
                let first = true;
                for (let lon = -180; lon <= 180; lon += 5) {
                    const p = project(lon, lat, rotY, rotX);
                    if (p.visible) {
                        if (first) { context.moveTo(p.x, p.y); first = false; }
                        else { context.lineTo(p.x, p.y); }
                    } else { first = true; }
                }
                context.stroke();
            }

            // Longitude lines
            for (let lon = -180; lon < 180; lon += 30) {
                context.beginPath();
                let first = true;
                for (let lat = -85; lat <= 85; lat += 5) {
                    const p = project(lon, lat, rotY, rotX);
                    if (p.visible) {
                        if (first) { context.moveTo(p.x, p.y); first = false; }
                        else { context.lineTo(p.x, p.y); }
                    } else { first = true; }
                }
                context.stroke();
            }

            // 3. Draw Dotted Matrix Fill inside landmasses
            context.fillStyle = "rgba(130, 250, 50, 0.85)";
            for (let i = 0; i < matrixDots.length; i++) {
                const pt = matrixDots[i];
                const p = project(pt[0], pt[1], rotY, rotX);
                if (p.visible) {
                    context.fillRect(p.x, p.y, 1.4, 1.4);
                }
            }

            // 4. Draw Continent Outlines
            context.strokeStyle = "#82fa32";
            context.lineWidth = 1.4;
            for (let c = 0; c < CONTINENTS.length; c++) {
                const poly = CONTINENTS[c];
                context.beginPath();
                let first = true;
                for (let i = 0; i < poly.length; i++) {
                    const p = project(poly[i][0], poly[i][1], rotY, rotX);
                    if (p.visible) {
                        if (first) { context.moveTo(p.x, p.y); first = false; }
                        else { context.lineTo(p.x, p.y); }
                    } else { first = true; }
                }
                context.stroke();
            }

            // 5. Pulsing white location pin over MRC de L'Érable (-71.9, 46.3)
            const pin = project(-71.9, 46.3, rotY, rotX);
            if (pin.visible) {
                const pulse = 5 + Math.abs(Math.sin(elapsed * 0.004)) * 6;
                context.beginPath();
                context.arc(pin.x, pin.y, pulse, 0, 2 * Math.PI);
                context.strokeStyle = "rgba(255, 255, 255, 0.6)";
                context.lineWidth = 1.5;
                context.stroke();

                context.beginPath();
                context.arc(pin.x, pin.y, 4.5, 0, 2 * Math.PI);
                context.fillStyle = "#ffffff";
                context.shadowColor = "#ffffff";
                context.shadowBlur = 8;
                context.fill();
                context.shadowBlur = 0;
            }

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }

    initGlobe();

    // Refresh ScrollTrigger after resources (images, video) are fully loaded
    window.addEventListener('load', () => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    });
});
