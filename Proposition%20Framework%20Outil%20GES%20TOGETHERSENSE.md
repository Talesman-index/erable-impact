 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Réalisé par : Oba Haniel Pasqua AGOSSOU 
 
 
 
 
 
 
 
Proposition de cadre de conception pour un outil 
d’évaluation de l’impact environnemental dans la 
région de L’Érable, au Centre-du-Québec. 


Table des matières 
1. 
Contexte de réalisation de l’outil ................................................................................................. 3 
2. 
Localisation de la région d’étude ................................................................................................. 5 
3. 
Différents secteurs des parties prenantes ...................................................................................... 6 
4. 
Exemple Outil (référence à améliorer) ......................................................................................... 7 
5. 
Framework de notre Outils ....................................................................................................... 10 
5.1. 
Principes fondamentaux .................................................................................................... 10 
5.2. 
Accessibilités ..................................................................................................................... 10 
5.3. 
Forces ............................................................................................................................... 10 
5.4. 
Structure de l'interface ...................................................................................................... 11 
5.5. 
Gestion de la Collecte des données ...................................................................................... 12 
5.6. 
Recommandations pour l'accessibilité de la collecte ............................................................. 13 
6. 
Type de données par secteur ...................................................................................................... 14 
6.1. 
Secteur éducation .............................................................................................................. 14 
6.2. 
Secteur environnement ...................................................................................................... 16 
6.3. 
Secteur agriculture ............................................................................................................ 18 
6.4. 
Secteur santé ..................................................................................................................... 21 
6.5. 
Secteur jeunesse ................................................................................................................ 23 
6.6. 
Secteur communautaire ..................................................................................................... 25 
6.7. 
Secteur aide alimentaire ..................................................................................................... 27 
6.8. 
Secteur restauration .......................................................................................................... 29 
6.9. 
Secteur art et culture ......................................................................................................... 31 
6.10. 
Secteur politique ............................................................................................................ 33 
6.11. 
Secteur citoyen (Individus et ménages) ................................................................................ 35 
7. 
Avantages pour la région de l'Érable ......................................................................................... 38 
8. 
Base de calcul ........................................................................................................................... 39 
9. 
Évaluation de l'empreinte carbone d’une activités précise ........................................................... 64 
10. 
Facteurs d’émission .............................................................................................................. 77 
 
 
 


1. Contexte de réalisation de l’outil 
Dans le cadre du projet de transition socioclimatique initié par la Corporation de développement communautaire 
(CDC) de L’Érable, les parties prenantes du territoire : citoyens, organisations communautaires, entreprises, 
institutions publiques et acteurs agricoles ont exprimé le besoin de disposer d’un outil commun d’évaluation des 
impacts environnementaux. Cet outil s’inscrit dans la logique participative et systémique de la transition 
socioclimatique et vise à les accompagner dans leurs démarches de transition en leur permettant d’identifier, de 
mesurer et de suivre les effets environnementaux de leurs activités, tout en favorisant une culture de durabilité, 
de responsabilité et d’apprentissage collectif. 
Le présent document constitue un cadre de conception préliminaire de cet outil. Il décrit les grandes orientations, 
la structure envisagée et les fonctionnalités souhaitées, sans aborder pour l’instant la faisabilité technique, les 
contraintes budgétaires ou les considérations technologiques. Ces aspects seront analysés ultérieurement, en 
fonction des réalités pratiques et des ressources disponibles pour la mise en œuvre. 
L’outil proposé se structure autour de deux grandes composantes complémentaires : 
• L’évaluation des impacts environnementaux par secteur d’activité, afin d’offrir une vision d’ensemble des 
dynamiques régionales et des enjeux prioritaires (agriculture, foresterie, transport, industrie, milieu 
communautaire, etc.) ; 
• L’évaluation spécifique d’activités ponctuelles, telles que les formations, les campagnes de sensibilisation, 
les concertations, les événements communautaires ou autres…, permettant d’analyser leurs retombées 
environnementales et sociales dans le cadre du processus de transition. 
Au-delà de la simple évaluation, l’outil a pour vocation d’être informatif, pédagogique et évolutif. Il recueillera 
un ensemble de données qualitatives et quantitatives permettant non seulement de renseigner sur l’empreinte 
environnementale, mais également de produire des projections, d’évaluer les progrès et de formuler des 
recommandations concrètes. Cette approche vise à en faire un instrument d’aide à la décision et de mobilisation 
collective, accessible à tous les acteurs du territoire. 
Pensé dans une logique d’inclusivité et d’accessibilité, l’outil sera conçu pour être utilisé aussi bien par les 
organismes que par les entreprises, les institutions ou les citoyens intéressés. À terme, chaque organisation 
pourrait disposer d’un compte personnalisé, facilitant la mise à jour des données et la comparaison des résultats 
dans le temps. Les utilisateurs pourraient ainsi suivre l’évolution de leurs pratiques, identifier leurs points 
d’amélioration et valoriser leurs actions positives. 
Enfin, l’intégration éventuelle d’un assistant virtuel ou agent intelligent (IA) permettrait de simplifier la saisie et 
la mise à jour des informations, tout en guidant les utilisateurs dans leur processus d’évaluation. L’outil 


ambitionne ainsi de devenir une plateforme dynamique, participative et évolutive, au service de la transition 
socioclimatique régionale et de la gouvernance environnementale partagée. 
 


2. Localisation de la région d’étude 
L’étude a été réalisée dans la Municipalité régionale 
de comté (MRC) de L’Érable, située dans la région 
administrative du Centre-du-Québec, au Canada. Ce 
territoire à dominante rurale regroupe désormais dix 
municipalités, à la suite de la fusion récente de la 
Paroisse de Plessisville et de la Ville de Plessisville 
(MRC de L’Érable, 2023). Selon l’Institut de la 
statistique du Québec (ISQ, 2024), la MRC compte 
une population estimée à 24 457 habitants, répartie 
sur un vaste territoire caractérisé par une forte 
diversité paysagère, combinant forêts, terres 
agricoles et zones villageoises. 
L’économie régionale repose principalement sur l’agriculture, qui représente environ 43 % des emplois, ainsi que 
sur la foresterie, la transformation agroalimentaire, le commerce local et la petite industrie manufacturière 
(MAPAQ, 2022). La forêt couvre plus de 60 % du territoire, tandis qu’environ 31 % de la superficie est dédiée 
aux activités agricoles (MRC de L’Érable, 2022). La région est également traversée par un réseau hydrographique 
dense, dominé par la rivière Bécancour et ses affluents, qui alimentent plusieurs milieux humides et écosystèmes 
sensibles d’importance écologique. 
Sur le plan environnemental, la MRC de L’Érable est confrontée à des enjeux climatiques croissants, tels que la 
sécheresse estivale récurrente, l’érosion des sols agricoles, la perte de biodiversité, ainsi que la fréquence accrue 
des événements météorologiques extrêmes (Ouranos, 2023). Ces phénomènes accentuent la vulnérabilité des 
écosystèmes et des communautés locales, tout en renforçant la nécessité d’une transition socioclimatique 
concertée et territorialisée. 
Socialement, la région se distingue par un tissu communautaire dynamique, animé par de nombreux organismes 
de concertation et de développement local. Les citoyens manifestent un intérêt croissant pour les initiatives de 
durabilité, d’économie circulaire et de résilience communautaire. Enfin, la MRC de L’Érable s’inscrit dans un 
contexte énergétique à faibles émissions, le mix québécois étant dominé à 95 % par l’hydroélectricité (≈ 15–20 g 
CO₂/kWh), bien que la dépendance au transport routier demeure un facteur important d’émissions régionales (≈ 
8–9 tonnes CO₂/an par habitant). 
 
 
Figure 1: Localisation de la région (MRC DE L’ERABLE) 


3. Différents secteurs des parties prenantes 
 
 
0
5
10
15
20
25
30
Figure 1 : Présentation de l’échantillon (Secteurs d'activité des différents acteurs acteurs) 


4. Exemple Outil (référence à améliorer) 
Exemple de site : 
1- https://www.elf.agency/news/tag/reporting 
2- https://www.carbonfootprint.com/  
 
Commence par une page informative sur l’empreinte Carbone  
  
 
 
 
 
 
 
 
 
 
 


 
Ensuite mettre l’outil de mesure de l’empreinte 
Carbone (Exemple ELF) 
Critère : 
• la taille de votre foyer 
• 
l'efficacité 
énergétique 
de 
vos 
appareils 
électroménagers 
• votre fréquence de déplacement en voiture ou en 
avion 
• votre alimentation 
• votre taux de recyclage 
 


 
 
 
 
 
 
 


5. Framework de notre Outils 
5.1. 
Principes fondamentaux 
Trois principes fondamentaux axée sur le dynamisme et l’interaction de l’outil :  
1. Progressive complexity : proposez un chemin simple pour les novices (niveau rapide) avec la possibilité 
d'approfondir.  
2. l'engagement progressif : mieux vaut que quelqu'un remplisse 70% des données du niveau 1 que d'abandonner 
en chemin.  
3. Intégrer les valeurs par défaut intelligentes : utiliser des données régionales, sectorielles ou publiques pour 
pré-remplir ce que vous pouvez, permettant même aux petites organisations sans données détaillées de participer. 
5.2. 
Accessibilités 
Pour l’accessibilité de l’outil : 
1. Créer un questionnaire conversationnel plutôt que des formulaires longs 
2. Fournir des convertisseurs d'unités simples (litres ↔ kWh, km ↔ tonnes CO₂) et aussi des exemples simples 
pour les permettre de comparer et de se situer pas forcément des chiffres Exemple : nombre je jours de travail 
dans la semaine multiplier par la distance de la maison au travail peut nous permettre de calculer de façon 
dynamique la distance parcourue en Km pour travail trouver des exemples basiques pour collecter des données 
complexes (très important).  
3. Intégrer des validations douces (alerter sans bloquer si les données semblent aberrantes) 
4. Proposer des résultats contextualisés avec graphe dynamique : pas juste "5 tonnes CO₂" mais "équivalent 
à un trajet Paris-Berlin en voiture, ou 2 mois de chauffage pour 4 personnes" 
5.3. 
Forces 
Trois forces de l’outil pour notre contexte régional : 
Spécificité sectorielle : Chaque secteur aura ses propres critères pertinents. Un agriculteur et un citoyen urbain 
n'ont pas les mêmes paramètres, mais l'outil parlera leur langage. 
Progressivité : Les gens peuvent commencer simple (10 minutes) et approfondir. Ça maximise la participation. 
Valorisation du territoire : L'outil intègrera les forces de l'Érable : hydroélectricité propre, ressources forestières, 
agriculture, patrimoine culturel. Si possible montrer comment ces atouts jouent en faveur du climat régional. 
 
 


5.4. 
Structure de l'interface  
Phase 1 : Sélection de profil 
• 
Type : Citoyen / Entreprise / Organisation / Collectivité 
• 
Secteur (si applicable) : Éducation, Environnement, Agriculture, Santé, Jeunesse, Communautaire, Aide 
alimentaire, Restauration, Art, Politique 
• 
Localisation/ Région 
• 
Code Postale : 
• 
Taille : Petite / Moyenne / Grande (pour pré-remplir des valeurs par défaut) 
Et en fonction du profil le questionnaire s’ajuste/s’adapte  
Phase 2 : Questions progressives 
• 
Niveau 1 (5-10 min) : Questions minimales pour une empreinte initiale 
• 
Niveau 2 (30-45 min) : Détails supplémentaires pour affinage 
• 
Niveau 3 (expert, 1-2h) : Données exhaustives pour stratégie détaillée 
Phase 3 : Résultats et visualisations 
• 
Graphiques : Répartition par source (énergie, transport, alimentation, biens) 
• 
Comparaisons : Votre empreinte vs moyenne régionale / nationale 
• 
Benchmarks sectoriels : Où se situe votre secteur 
• 
Potentiel de réduction : Gisements d'économies identifiés (je trouve que ce serai intéressant d’informer 
sur le potentiel de réduction également grâce aux données collecter) 
• 
Recommandations : Fournir des recommandations sur la base des données pour améliorer l’impact 
environnemental. 
Phase 4 : Actions et partage 
• 
Plan d'action personnalisé : Réductions rapides, moyen terme, long terme 
• 
Export : Rapport PDF, données CSV 
• 
Suivi : Refaire le test en 6-12 mois 
Partage régional : Anonyme, contribuer à l'empreinte collective régionale 
 


5.5. 
Gestion de la Collecte des données 
Niveaux de collecte adaptés par profil utilisateur 
Niveau 1 : Rapide et minimal (15-20 minutes) 
Pour une estimation initiale sans effort majeur. 
• 
Nombre de personnes/employés 
• 
Consommation énergétique annuelle totale (facture) 
• 
Mode de transport principal et kilométrage annuel 
• 
Régime alimentaire ou type de restauration 
• 
Estimation simple du gaspillage (peu/moyen/beaucoup) 
Niveau 2 : Détaillé standard (45-60 minutes) 
Pour une meilleure compréhension et comparaison. 
• 
Tous les éléments du niveau 1 + détails 
Niveau 3 : Exhaustif (2-3 heures) 
Pour les organisations souhaitant affiner leurs stratégies. 
• 
Tous les éléments précédents 
• 
Données par mois ou trimestre 
• 
Inventaire détaillé des achats 
• 
Émissions de scope 3 
• 
Facteurs d'émission spécifiques à leurs opérations 
• 
Données sur la fin de vie 
 
 


5.6. 
Recommandations pour l'accessibilité de la collecte 
Pour la collecte de données : 
• 
Proposer des valeurs par défaut par région ou secteur 
• 
Permettre l'estimation approximative quand les données exactes ne sont pas disponibles 
• 
Offrir des fourchettes (ex: "50-100 kg de viande par mois") 
• 
Intégrer des imports de données automatisées (factures, données publiques) 
Pour la compréhension : 
• 
Expliciter chaque paramètre avec des exemples concrets 
• 
Proposer des explications sur le calcul (transparence) 
• 
Fournir des benchmarks régionaux ou sectoriels pour contextualiser 
Pour l'usabilité : 
• 
Interface simple et progressive (niveau 1 → 3) 
• 
Possibilité de remplir partiellement et reprendre plus tard 
• 
Résultats visuels et comparables (graphiques, historique) 
• 
Export de résultats en formats simples (PDF, CSV) 
 
 


6. Type de données par secteur 
6.1. 
Secteur éducation 
Niveau simplifié (15 min) 
• 
Nombre d'élèves et d'employés 
• 
Facture énergétique totale annuelle 
• 
Transport scolaire : nombre d'autobus, km annuels 
• 
Type de restauration 
Niveau détaillé (1h) 
• 
Tous les éléments ci-dessous avec détails 
Institutions couvertes 
Écoles primaires, secondaires, cégeps, centres de formation professionnelle, universités, écoles privées, 
organismes de formation. 
Données essentielles à collecter 
Infrastructure immobilière 
• 
Nombre d'élèves/étudiants et d'employés 
• 
Surface totale des bâtiments (m²) 
• 
Année de construction (pour estimer l'efficacité énergétique) 
• 
Nombre de bâtiments 
• 
Type de chauffage (gaz, électrique, autres) 
Consommation énergétique 
• 
Électricité annuelle (kWh) — détailler si possible : éclairage, chauffage, équipements 
• 
Chauffage (source et volume) : gaz naturel (m³), électricité, huile, biomasse 
• 
Eau chaude sanitaire (source) 
• 
Climatisation (si applicable) 
Mobilité des occupants 
• 
Flotte de transport scolaire : nombre de véhicules, carburant, distance annuelle 


• 
Trajets domicile-école : modes de transport des élèves et employés 
• 
Déplacements professionnels des enseignants/personnel (formations, congrès) 
Alimentation (cantines/cafétérias) 
• 
Nombre de repas servis annuellement 
• 
Part d'aliments locaux, régionaux, bio 
• 
Types de régimes proposés 
• 
Gaspillage alimentaire estimé (% des repas) 
• 
Source d'approvisionnement 
Consommation de biens et déchets 
• 
Papier et fournitures scolaires (quantité annuelle) (peut être faire par individus et multiplier par le nombre 
d’individus) 
• 
Équipements informatiques et mobilier (fréquence d'achat) 
• 
Gestion des déchets : recyclage, compostage, incinération 
• 
Programmes de réduction en place 
Données spécifiques à la région de l'Érable 
• 
Utilisation de ressources forestières locales (si applicable) 
• 
Partenariats avec organismes régionaux 
 
 


6.2. 
Secteur environnement 
Organisations couvertes 
Organismes de conservation, comités de bassin versant, coopératives environnementales, associations de 
protection de la nature, groupes d'action environnementale. 
Données essentielles à collecter 
Base organisationnelle 
• 
Nombre d'employés et de bénévoles 
• 
Locaux : surface, énergie utilisée 
• 
Secteurs d'intervention (forêts, cours d'eau, biodiversité, qualité de l'air, etc.) 
Opérations environnementales 
• 
Terrain/zone d'intervention : surface gérée (ha) 
• 
Véhicules utilisés : 4x4, tracteurs, bateaux (type, carburant, utilisation annuelle) 
• 
Équipements spécialisés 
• 
Trajets de monitoring/surveillance 
Mobilité et terrain 
• 
Kilométrage annuel des déplacements professionnels 
• 
Trajets d'intervention sur le terrain 
Projets et interventions 
• 
Types de projets (restauration, monitoring, sensibilisation) 
• 
Matériaux utilisés (si applicable) 
• 
Énergie consommée pour les interventions 
Restauration et séquestration carbone 
• 
Initiatives de plantation/reforestation (nombre d'arbres, espèces) 
• 
Projets de séquestration carbone (si quantifiés) 
• 
Zones restaurées (surface) 
Donnée clé pour l'Érable 


La région comptabiliser les projets de foresterie durable et régénération pour montrer l'impact positif net potentiel 
du secteur. 
 
 


6.3. 
Secteur agriculture 
Niveau simplifié (20 min) 
• 
Type de production 
• 
Superficie/taille du cheptel 
• 
Carburant annuel total 
• 
Engrais utilisé : type et quantité 
• 
Gestion du fumier 
Niveau détaillé (1-2h) 
• 
Tous les éléments ci-dessous 
Exploitations couvertes 
Fermes laitières, cultures (grains, légumes), élevage (volaille, porc), arboriculture, apiculture, agritourisme, 
coopératives agricoles. 
Données essentielles à collecter 
Activité agricole principale 
• 
Type de production (laitière, céréale, légume, viande, etc.) 
• 
Superficie cultivée ou pâturée (ha) 
• 
Taille du cheptel (nombre d’animaux) si applicable 
• 
Rendement (tonnes/an, litres/an, etc.) 
Énergie et carburant 
• 
Diesel ou essence pour tracteurs et machines (litres/an) — détailler par activité 
• 
Électricité (kWh) : traite, réfrigération, irrigation, bâtiments 
• 
Chauffage : type et volume 
• 
Gaz naturel (si applicable) 
Intrants agricoles 
• 
Engrais (azotés surtout) : type, quantité (tonnes/an) 
• 
Pesticides et herbicides : volume et type 


• 
Semences : volume et provenance 
• 
Aliments pour animaux : type, volume, provenance 
Gestion du bétail (si applicable) 
• 
Nombre d'animaux par catégorie (vaches laitières, génisses, etc.) 
• 
Système d'alimentation (pâturage, fourrage, ensilage, concentrés) 
• 
Gestion du fumier : stockage, épandage, traitement 
• 
Type de fumier produit 
Sols et matière organique 
• 
Pratiques de travail du sol (conventionnel, labour réduit, sans labour) 
• 
Couverture hivernale 
• 
Rotation des cultures 
• 
Matière organique estimée des sols 
Eau 
• 
Système d'irrigation (si applicable) 
• 
Source d'eau 
• 
Volume utilisé annuellement 
Transports et logistique 
• 
Transport des produits vers le marché : distance, carburant 
• 
Fréquence de récolte/livraison 
• 
Emballage utilisé 
Certification et pratiques durables 
• 
Agriculture biologique (certifiée ou en transition) 
• 
Certification éco-responsable 
• 
Autres certifications 
Données spécifiques à la région de l'Érable 


• 
Sylvopastoralisme (forêts + pâturage) si applicable 
• 
Ressources forestières exploitées 
• 
Proximité des marchés régionaux (circuits courts) 
 
 


6.4. 
Secteur santé 
Institutions couvertes 
Cliniques, hôpitaux, centres d'urgence, cliniques vétérinaires, centres de soins palliatifs, pharmacies, cabinets 
privés. 
Données essentielles à collecter 
Infrastructure 
• 
Surface des locaux (m²) 
• 
Nombre de lits (si applicable) 
• 
Nombre d'employés, patients/visiteurs annuels 
• 
Nombre de bâtiments 
Consommation énergétique 
• 
Électricité (kWh)  (très important pour les services de santé) 
• 
Chauffage (source, volume) 
• 
Climatisation/refroidissement 
• 
Eau chaude 
• 
Générateur de secours (si applicable) : type de carburant, utilisation 
Eau 
• 
Consommation d'eau (m³) — usages médicaux, sanitaires, lessive 
• 
Gestion de l'eau usée 
Déchets médicaux et spécialisés 
• 
Déchets biomédicaux : volume, traitement (incinération, désinfection) 
• 
Déchets généraux : recyclage, compostage, mise en décharge 
• 
Gestion de la stérilisation (vapeur = électricité) 
Transports et ambulances 
• 
Nombre d'ambulances et véhicules 
• 
Kilométrage annuel 


• 
Carburant utilisé (essence, diesel) 
• 
Trajets d'urgence vs transport non urgent 
 
Produits pharmaceutiques et matériel médical 
• 
Fournisseurs et localisation (local, régional, national, importé) 
• 
Emballages utilisés 
• 
Stockage de produits réfrigérés 
Approvisionnement et alimentation 
• 
Restauration sur place (si applicable) 
• 
Type de menus 
• 
Gaspillage alimentaire 
Donnée clé pour l'Érable 
Identifier les pratiques de santé préventive qui réduisent les transports/déplacements (télésanté, consultations à 
distance). 
 
 
 


6.5. 
Secteur jeunesse 
Organisations couvertes 
Maisons des jeunes, organismes d'insertion professionnelle, associations jeunesse, camps d'été, centres d'activités, 
clubs de loisirs, organismes d'engagement civique. 
Données essentielles à collecter 
Base organisationnelle 
• 
Nombre de jeunes servis annuellement 
• 
Nombre d'animateurs et d'employés 
• 
Locaux : surface, type (intérieur, extérieur, mixte) 
• 
Nombre de sites opérés 
Énergie des locaux 
• 
Électricité (kWh) 
• 
Chauffage (source, volume) 
• 
Eau 
• 
Installations spécifiques (cuisine, douches, etc.) 
Activités et mobilité 
• 
Types d'activités (sports, arts, nature, éducation) 
• 
Déplacements pour sorties : transport utilisé, km annuels 
• 
Trajets avec accompagnement (animateurs/personnel) 
• 
Camps résidentiels : fréquence et durée 
Alimentation 
• 
Repas/collations servis annuellement 
• 
Gestion de la cafétéria 
• 
Approvisionnement local vs externe 
Équipements et loisirs 
• 
Équipements de sport/activité 


• 
Véhicules (minibus, fourgonnettes) : nombre et utilisation 
• 
Biens durables (vélos, skis, équipements) 
Sensibilisation environnementale 
• 
Programmes d'éducation environnementale proposés 
• 
Projets de réduction de l'empreinte carbone internes 
Données spécifiques à la région de l'Érable 
• 
Activités en nature (randonnée, camping, forêt) : évaluer l'empreinte vs les bénéfices pédagogiques 
• 
Partenariats avec des fermes ou organismes locaux 
 
 
 


6.6. 
Secteur communautaire 
Organisations couvertes 
Centres communautaires, mutualités, coopératives de solidarité, associations citoyennes, syndicats, collectifs de 
quartier, cabinets-conseils communautaires. 
Données essentielles à collecter 
Base organisationnelle 
• 
Nombre de membres/participants 
• 
Nombre d'employés et de bénévoles 
• 
Surface des locaux (m²) 
• 
Années d'opération 
Énergie 
• 
Électricité, chauffage, eau 
• 
Type de chauffage 
Mobilité professionnelle 
• 
Déplacements des employés (domicile-travail) 
• 
Trajets pour servir les clients/membres ( Trajets pour la mission) 
• 
Territoires desservis (proximité) 
Services offerts 
• 
Types de services (formation, soutien, loisirs, advocacy, etc.) 
• 
Nombre de personnes rejointes annuellement 
• 
Impact social (capacité à réduire des besoins via prévention) 
Ressources utilisées 
• 
Fournitures et matériel 
• 
Équipements 
• 
Partenariats et réseaux 
Sensibilisation et actions 


• 
Initiatives environnementales internes 
• 
Programmes de sensibilisation offerts 
Donnée clé pour l'Érable 
Évaluer comment les services communautaires réduisent les besoins de transport ou de consommation (ex: partage 
d'outils, covoiturage organisé). 
 
 
 


6.7. 
Secteur aide alimentaire 
Organisations couvertes 
Banques alimentaires, cuisines collectives, soupes populaires, programmes d'aide alimentaire, jardins 
communautaires, organismes de distribution alimentaire. 
Données essentielles à collecter 
Opérations de base 
• 
Nombre de personnes servies annuellement 
• 
Volume de nourriture distribuée (tonnes/an) 
• 
Nombre de distributions (mensuelle, hebdomadaire) 
• 
Employés et bénévoles 
Locaux 
• 
Surface et type 
• 
Équipements (entreposage réfrigéré, cuisine, etc.) 
• 
Électricité, chauffage, eau 
Approvisionnement alimentaire 
• 
Sources des aliments : dons locaux, épiceries, distributeurs, producteurs régionaux 
• 
Part d'aliments locaux vs importés 
• 
Qualité nutritionnelle (protéines, fruits/légumes, aliments transformés) 
• 
Périssables vs non-périssables 
Transport et logistique 
• 
Véhicules de collecte/distribution 
• 
Kilomètres parcourus annuellement 
• 
Carburant utilisé 
• 
Fréquence des tournées 
Gestion des déchets 
• 
Aliments gaspillés malgré les efforts 


• 
Emballages utilisés et gérés 
• 
Compostage possible des résidus 
Valeur environnementale du secteur 
• 
Aliments détournés de la décharge 
• 
Réduction du gaspillage alimentaire régional 
• 
Sensibilisation à la surproduction/consommation 
Donnée clé pour l'Érable 
• 
Circuits courts : privilégier les producteurs locaux de la région 
• 
Évaluer les aliments "seconds choix" de la région (fruits/légumes cosmétiques) 
• 
Calculer l'empreinte carbone évitée par la redistribution 
 
 


6.8. 
Secteur restauration 
Établissements couverts 
Restaurants, cafés, bars, traiteurs, micro-brasseries, cuisines de collectivités (restaurants d'entreprises), food 
trucks. 
Données essentielles à collecter 
Infrastructure 
• 
Surface (m²) 
• 
Type de cuisine (complète, préparation limitée) 
• 
Nombre de clients/couverts par jour en moyenne 
• 
Nombre d'employés 
Énergie 
• 
Électricité (éclairage, réfrigération, cuisson, extraction) : kWh 
• 
Gaz naturel ou propane (cuisson, eau chaude) : m³ ou litres 
• 
Eau (consommation annuelle) 
Approvisionnement alimentaire 
• 
Fournisseurs : locaux, régionaux, nationaux, importés 
• 
Type de cuisine proposée (locale, fusion, ethnique, etc.) 
• 
Menus : part de végétal vs viande, poisson 
• 
Saisonnalité des menus (usage de produits locaux) 
• 
Quantité d'aliments achetée annuellement (tonnes) 
• 
Certifications (biologique, commerce équitable) 
Gestion des déchets alimentaires 
• 
Volume de restes annuel estimé (tonnes, % des achats) 
• 
Compostage sur place (si applicable) 
• 
Récupération pour animaux 
• 
Incinération/mise en décharge 


Transport et logistique 
• 
Fréquence des livraisons 
• 
Distance moyennes des fournisseurs 
• 
Emballages reçus (cartons, plastiques) 
• 
Gestion des emballages 
Équipements durables 
• 
Vaisselle réutilisable vs jetable (si applicable) 
• 
Contenants pour emporter 
• 
Système de gestion de l'eau 
Données spécifiques à la région de l'Érable 
• 
Valorisation des produits régionaux : érable, pommes, viande régionale, produits laitiers 
• 
Partenariats avec agriculteurs locaux 
• 
Agritourisme : intégration avec le patrimoine régional 
 
 


6.9. 
Secteur art et culture 
Organisations couvertes 
Musées, galeries, théâtres, cinémas, salles de spectacle, centres culturels, studios d'art, écoles d'art, festivals, 
associations artistiques. 
Données essentielles à collecter 
Infrastructure culturelle 
• 
Surface (m²) 
• 
Type d'espace (exhibitoire, performant, formation) 
• 
Nombre de visiteurs/spectateurs annuels 
• 
Nombre d'artistes engagés 
• 
Employés et bénévoles 
Énergie 
• 
Électricité (crucial pour éclairage/scène) : kWh 
• 
Chauffage, climatisation, eau 
• 
Éclairage spécialisé ou systèmes audiovisuels 
• 
Générateurs (si applicable) 
Mobilité des artistes et visiteurs 
• 
Accès en transport public vs privé 
• 
Stationnement disponible (influence mode de transport) 
• 
Trajets des artistes (locaux, régionaux, nationaux) 
• 
Déplacements des œuvres/expositions 
Événements et spectacles 
• 
Nombre d'événements annuels 
• 
Catering/restauration pour événements 
• 
Matériel scénique : construction, stockage, réutilisabilité 
• 
Décors et accessoires 


Consommation de biens 
• 
Matériaux artistiques et de production 
• 
Affiches, catalogues, impression 
• 
Équipement audiovisuel 
• 
Matériel d'exposition 
Gestion des déchets 
• 
Résidus de production 
• 
Matériaux réutilisables vs jetables 
Donnée clé pour l'Érable 
• 
Art régional et patrimoine culturel : valoriser les artistes locaux 
• 
Événements culturels régionaux : fêtes de l'Érable, festivals locaux 
• 
Évaluer comment la culture renforce l'identité régionale et les comportements durables 
 
 
 


6.10. Secteur politique 
Organisations couvertes 
Municipalités, MRC, représentations élues, services municipaux, conseils municipaux, élus municipaux et 
régionaux. 
Données essentielles à collecter 
Infrastructure administrative 
• 
Bâtiments municipaux : nombre, surface, type 
• 
Type de chauffage dominant 
• 
Électricité totale 
• 
Eau 
• 
Flotte de véhicules : nombre, type, utilisation 
Énergie 
• 
Électricité (bâtiments, éclairage public) : kWh 
• 
Chauffage : source et volume 
• 
Éclairage urbain : technologie (DEL, sodium, etc.), nombre de points 
• 
Eau traitée et distribuée 
Mobilité des élus et agents 
• 
Trajets pour réunions, visites de terrain 
• 
Véhicules municipaux : nombre, km annuels 
• 
Déplacements domicile-travail des employés 
Services publics 
• 
Gestion des routes (entretien, épandage hivernal) 
• 
Gestion des déchets : collecte, tri, incinération, enfouissement 
• 
Services de loisirs et parcs 
• 
Transports en commun (si applicable) 
 


Infrastructure verte 
• 
Parcs et espaces verts : surface, gestion 
• 
Cours d'eau : monitoring, restauration 
• 
Initiatives de réduction de GES déjà en place 
Sensibilisation et politiques 
• 
Plans d'action climatique ou durabilité 
• 
Programmes de sensibilisation citoyenne 
• 
Objectifs de réduction carbone 
Donnée clé pour l'Érable 
• 
Rôle exemplaire : municipes comme modèles pour réduction d'empreinte 
• 
Évaluation de l'impact des politiques régionales sur les émissions globales 
• 
Potentiel de partenariats avec d'autres secteurs 
 
 


6.11. Secteur citoyen (Individus et ménages) 
Niveau simplifié (10-15 min) 
• 
Nombre de personnes au foyer 
• 
Facture énergétique annuelle 
• 
Mode de transport principal 
• 
Régime alimentaire estimé 
Niveau détaillé (30-45 min) 
• 
Tous les éléments détaillés 
Profils couverts 
Tous les résidents de la région : familles, personnes seules, retraités, avec ou sans activité professionnelle. 
Données essentielles à collecter 
Démographie du ménage 
• 
Nombre de personnes 
• 
Enfants (nombre et âge) 
• 
Type de logement (appartement, maison unifamiliale, mobile, autre) 
• 
Année de construction ou classe énergétique 
Énergie domestique 
• 
Électricité (kWh/an) 
• 
Chauffage : type (électrique, gaz, huile, bois), volume 
• 
Eau chaude sanitaire : source, consommation estimée 
• 
Climatisation (si applicable) 
• 
Énergie renouvelable produite (panneaux solaires, etc.) 
Transport personnel 
• 
Modes de transport utilisés : voiture, transports publics, vélo, marche, télétravail 
• 
Si voiture : carburant (essence, diesel, électrique, hybride), modèle, âge, consommation 


• 
Kilométrage annuel par mode 
• 
Trajets : domicile-travail, loisirs, vacances 
• 
Trajets en avion (nombre, destinations, classe) 
Alimentation et consommation 
• 
Régime alimentaire : omnivore, flexitarien, végétarien, végan 
• 
Fréquence de consommation : viande, poisson, produits laitiers, légumes 
• 
Part d'aliments biologiques, locaux, saisonniers 
• 
Gaspillage alimentaire estimé 
• 
Repas à domicile vs restaurants 
Consommation de biens et gestion des déchets 
• 
Achats de vêtements (nombre d'articles/an, neuf vs d'occasion) 
• 
Électroménagers et mobilier (fréquence renouvellement) 
• 
Équipements informatiques et électroniques 
• 
Livres, loisirs, équipements sportifs 
• 
Emballages de consommation 
• 
Gestion des déchets : recyclage, compostage, incinération, décharge 
Eau 
• 
Consommation (m³/an) ou estimation 
• 
Usages principaux 
Services financiers et immobilier 
• 
Propriétaire vs locataire 
• 
Investissements financiers (actions, épargne) 
• 
Type d'emploi ou secteur professionnel 
Données optionnelles pour niveau expert 
• 
Consommation mensuelle (variations saisonnières) 


• 
Hobbys et loisirs impact carbone (ski, golf, gaming, etc.) 
• 
Habits de consommation numérique 
• 
Utilisations secondaires (maison de campagne, yacht, etc.) 
 
 
 


7. Avantages pour la région de l'Érable 
 
Données régionales préexistantes à intégrer : 
• 
Mix électrique québécois (95% hydroélectricité = très bas carbone) 
• 
Facteurs d'émission sectoriels régionaux 
• 
Cycles saisonniers (chauffage hivernal intense, agriculture saisonnière) 
• 
Ressources forestières et agricoles locales 
Indicateurs régionaux à suivre : 
• 
Empreinte carbone moyenne par habitant (benchmark) 
• 
Répartition par secteur 
• 
Évolution annuelle (suivi de progrès) 
• 
Contribution du secteur agricole et forestier à la séquestration carbone 
Opportunités de mobilisation : 
• 
Comparer avant/après les initiatives locales 
• 
Identifier les champions régionaux (citoyens, entreprises, organisations à faible empreinte) 
• 
Valoriser les pratiques durables régionales (agriculture biologique, alimentation locale, etc.) 
 
 
 


8. Base de calcul  
Base de calcul Outil GES  
I-Secteur de l’éducation 
Formule générale (synthèse) 
𝐸𝑡𝑜𝑡𝑎𝑙= 𝐸𝑒ˊ𝑛𝑒𝑟𝑔𝑖𝑒+ 𝐸𝑐ℎ𝑎𝑢𝑓𝑓𝑎𝑔𝑒+ 𝐸𝑒𝑎𝑢𝑐ℎ𝑎𝑢𝑑𝑒+ 𝐸𝑐𝑙𝑖𝑚+ 𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ + 𝐸𝑎𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛+ 𝐸𝑏𝑖𝑒𝑛𝑠+ 𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠
+ 𝐸𝑖𝑛𝑓𝑟𝑎𝑠𝑡𝑟𝑢𝑐𝑡𝑢𝑟𝑒𝑠 
 
𝐸𝑛𝑒𝑡= 𝐸𝑡𝑜𝑡𝑎𝑙−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
Tous les 𝐸sont en kg CO₂-équivalent/an. 
 
Décomposition et formules (postes principaux) 
1. Énergie électrique (éclairage, équipements, part chauffage électrique) 
𝐸𝑒𝑙𝑒𝑐= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
 
• 
𝐸𝑙𝑒𝑐𝑘𝑊ℎ= consommation électrique annuelle (kWh). 
• 
𝐸𝐹𝑒𝑙𝑒𝑐= facteur d’émission (kg CO₂e/kWh) — utiliser EF régional si disponible. 
2. Chauffage (si gaz, mazout, biomasse, ou élec déjà pris) 
𝐸𝑐ℎ𝑎𝑢𝑓𝑓= 𝐺𝑎𝑠𝑚3 × 𝐸𝐹𝑔𝑎𝑠+ 𝐹𝑢𝑒𝑙𝐿× 𝐸𝐹𝑓𝑢𝑒𝑙+ 𝐵𝑖𝑜𝑚𝑎𝑠𝑠𝑒𝐺𝐽× 𝐸𝐹𝑏𝑖𝑜𝑚 
 
• 
Adapter aux unités collectées (m³, L, GJ). Pour chauffage électrique, compté dans 𝐸𝑙𝑒𝑐𝑘𝑊ℎ. 
3. Eau chaude sanitaire 
𝐸𝑒𝑎𝑢= 𝐸𝑎𝑢𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐ou𝐸𝑎𝑢𝑚3 × 𝐸𝐹𝑝𝑟𝑜𝑐_𝑒𝑎𝑢 
 
4. Climatisation 
𝐸𝑐𝑙𝑖𝑚= 𝐶𝑙𝑖𝑚𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐹𝑢𝑖𝑡𝑒_𝑓𝑟𝑖𝑔× 𝐸𝐹𝐹_𝑔𝑎𝑧 
 
(inclure pertes de fluides frigorigènes si connues) 
5. Mobilité des occupants (transport scolaire + trajets domicile-travail) 
𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ = 𝐸𝑓𝑙𝑜𝑡𝑡𝑒+ 𝐸𝑡𝑟𝑎𝑗𝑒𝑡𝑠+ 𝐸𝑑𝑒ˊ𝑝𝑙𝑎𝑐𝑒𝑚𝑒𝑛𝑡𝑠_𝑝𝑟𝑜 
 
avec par exemple : 


𝐸𝑓𝑙𝑜𝑡𝑡𝑒= ∑(𝑁𝑣𝑒ℎ× 𝑘𝑚𝑣𝑒ℎ× 𝐸𝐹𝑣𝑒ℎ_𝑡𝑦𝑝𝑒) 
𝐸𝑡𝑟𝑎𝑗𝑒𝑡𝑠= ∑(𝑁𝑖𝑛𝑑,𝑖× 𝑘𝑚𝑚𝑜𝑦,𝑖× 𝐸𝐹𝑚𝑜𝑑𝑒,𝑖) 
 
6. Alimentation (cantine) 
𝐸𝑎𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛= 𝑁𝑟𝑒𝑝𝑎𝑠× [∑
𝑗
(𝑝𝑗× 𝐸𝐹𝑎𝑙𝑖𝑚,𝑗)] × (1 + 𝐺𝑎𝑠𝑝𝑖𝑙𝑙𝑎𝑔𝑒) 
 
• 
𝑝𝑗= part (%) d’un type d’aliment (local, importé, viande, végétal…). 
• 
𝐸𝐹𝑎𝑙𝑖𝑚,𝑗= kgCO₂e/repas pour chaque catégorie. 
7. Biens & équipements (amortissement annuel) 
𝐸𝑏𝑖𝑒𝑛𝑠= ∑𝑀𝑎𝑠𝑠𝑒_𝐺𝐻𝐺𝑎𝑐ℎ𝑎𝑡_𝑐𝑎𝑡
𝑇𝑎𝑚𝑜𝑟𝑡
 
 
• 
Convertir achats (mobilier, ordinateurs, papier) en émissions incorporées puis annualiser. 
8. Déchets 
𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠= ∑(𝑄𝑓𝑙𝑢𝑥× 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡) 
 
(papier recyclé vs incinéré vs composté, fraction compostée réduit émissions, incinération augmente) 
9. Infrastructures (amortissement carbone construction) 
𝐸𝑖𝑛𝑓𝑟𝑎𝑠𝑡𝑟𝑢𝑐𝑡𝑢𝑟𝑒𝑠= 𝐸𝑚𝑝𝑟_𝑐𝑜𝑛𝑠𝑡𝑟
𝑇𝑑𝑢𝑟𝑒ˊ𝑒
 
 
• 
𝐸𝑚𝑝𝑟_𝑐𝑜𝑛𝑠𝑡𝑟= émissions incorporées estimées du bâti (kgCO₂e) ; annualiser sur durée technique. 
 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑎𝑟𝑏𝑟𝑒𝑠_𝑝𝑙𝑎𝑛𝑡𝑒ˊ𝑠+ 𝑆𝑝𝑟𝑜𝑗𝑒𝑡𝑠_𝑣𝑒𝑟𝑡𝑠_𝑒ˊ𝑐𝑜𝑙𝑒𝑠 
 
• 
Plantations sur site, espaces verts éducatifs. 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠=
∑
𝑚𝑒𝑠𝑢𝑟𝑒𝑠
(𝐸ˊ𝑛𝑒𝑟𝑔𝑖𝑒_𝑟𝑒𝑛𝑜𝑢𝑣𝑒𝑙𝑎𝑏𝑙𝑒+ 𝑅𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛_𝑝𝑎𝑝𝑖𝑒𝑟+ 𝐶𝑜𝑚𝑝𝑜𝑠𝑡
+ 𝐴𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛_𝑙𝑜𝑐𝑎𝑙𝑒) 
 
• 
Inclut panneaux solaires, récupération papier, compostage, aliments bio ou locaux. 


3) Impact net 
𝐸𝑛𝑒𝑡= 𝐸𝑡𝑜𝑡𝑎𝑙−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
• 
𝐸𝑛𝑒𝑡< 0: école net-négative. 
• 
Sinon, 𝐸𝑛𝑒𝑡= émissions annuelles nettes. 
 
4) Normalisation / indicateurs 
• 
Par élève : 𝐸/𝑒ˊ𝑙𝑒ˋ𝑣𝑒= 𝐸𝑛𝑒𝑡/𝑁𝑒ˊ𝑙𝑒ˋ𝑣𝑒𝑠 
• 
Par m² de bâtiment : 𝐸/𝑚2 = 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒 
• 
Par repas servi : 𝐸/𝑟𝑒𝑝𝑎𝑠= 𝐸𝑎𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛/𝑁𝑟𝑒𝑝𝑎𝑠 
 
5) Gestion des données et incertitude 
• 
Documenter tous les facteurs d’émission (EF) et sources. Utiliser EF par défaut (bases 
nationales/internationales) si EF locaux absents. 
• 
Indiquer Data Quality Index (0–1) par poste (estimation, relevé, mesure). 
• 
Estimer fourchette d’incertitude (%) et propagation pour obtenir 𝐸𝑛𝑒𝑡± Δ. Estimer incertitude ±% (ex. 
±10–30%) et/ou faire analyse de sensibilité / Monte-Carlo si nécessaire. 
 


II- Secteur de l’environnement 
Définitions rapides (unités) 
• 
kg CO₂e = kilogrammes équivalent CO₂ 
• 
kWh = kilowatt-heure, m³ = mètre cube, L = litre, ha = hectare, km = kilomètre, t = tonne 
 
Formule principale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝐴𝑒ˊ𝑣𝑖𝑡𝑒ˊ 
 
avec 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑏𝑎̂𝑡𝑖𝑚𝑒𝑛𝑡𝑠+ 𝐸𝑣𝑒ˊℎ𝑖𝑐𝑢𝑙𝑒𝑠+ 𝐸𝑒ˊ𝑞𝑢𝑖𝑝𝑒𝑚𝑒𝑛𝑡𝑠+ 𝐸𝑑𝑒ˊ𝑝𝑙𝑎𝑐𝑒𝑚𝑒𝑛𝑡𝑠+ 𝐸𝑝𝑟𝑜𝑗𝑒𝑡𝑠+ 𝐸𝑒𝑚𝑏𝑎𝑟𝑞𝑢𝑒ˊ𝑠 
 
1) Émissions — postes détaillés 
• 
Bâtiments / locaux 
𝐸𝑏𝑎̂𝑡= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐻𝑒𝑎𝑡𝑚3 × 𝐸𝐹ℎ𝑒𝑎𝑡+ 𝐴𝑢𝑡𝑟𝑒𝑠_𝑒ˊ𝑛𝑒𝑟𝑔𝑖𝑒 
 
(ou par m² : diviser la conso par la surface si utile) 
• 
Véhicules & machines (4×4, tracteurs, bateaux) 
𝐸𝑣𝑒ˊℎ𝑖= ∑
𝑖
(𝑁𝑖× 𝑘𝑚𝑖× 𝐸𝐹𝑓𝑢𝑒𝑙,𝑖) 
 
où 𝐸𝐹𝑓𝑢𝑒𝑙,𝑖en kgCO₂e/km (ou convertir L×EF_{fuel_L}) 
• 
Équipements spécialisés (opérationnel + embodied amorti) 
𝐸𝑒ˊ𝑞𝑢𝑖𝑝= 𝐸𝑛𝑒𝑟𝑔𝑦𝑒ˊ𝑞𝑢𝑖𝑝,𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ ∑𝐸𝑚𝑏𝑜𝑑𝑖𝑒𝑑_𝐺𝐻𝐺𝑚𝑎𝑡,𝑗
𝑇𝑎𝑚𝑜𝑟𝑡,𝑗
 
 
• 
Trajets / déplacements pro & monitoring 
𝐸𝑑𝑒ˊ𝑝𝑙= ∑
𝑚𝑜𝑑𝑒𝑠
(𝑁𝑝𝑒𝑟𝑠× 𝑘𝑚𝑚𝑜𝑦× 𝐸𝐹𝑚𝑜𝑑𝑒) 
 
• 
Projets & interventions (matériaux + énergie) 
𝐸𝑝𝑟𝑜𝑗= ∑
𝑘
(𝑀𝑎𝑡𝑘,𝑘𝑔× 𝐸𝐹𝑚𝑎𝑡,𝑘) + 𝐸𝑛𝑒𝑟𝑔𝑦𝑝𝑟𝑜𝑗,𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
 


• 
Autres émissions incorporées / administratives 
𝐸𝑒𝑚𝑏𝑎𝑟𝑞𝑢𝑒ˊ𝑠= 𝑃𝑎𝑝𝑖𝑒𝑟𝑘𝑔× 𝐸𝐹𝑝𝑎𝑝𝑖𝑒𝑟+ 𝐴𝑐ℎ𝑎𝑡𝑠€ × 𝐸𝐹𝑣𝑎𝑙𝑒𝑢𝑟  (si applicable) 
 
 
2) Crédits / réductions (positifs) 
• 
Séquestration par plantation / reforestation 
𝑆𝑝𝑙𝑎𝑛𝑡= 𝑁𝑎𝑟𝑏𝑟𝑒𝑠× 𝑆𝑒𝑞𝑎𝑟𝑏𝑟𝑒_𝑡𝐶𝑂2/𝑎𝑛× 1000 
 
• 
Séquestration / restauration de zones 
𝑆𝑟𝑒𝑠𝑡= 𝑆𝑢𝑟𝑓𝑎𝑐𝑒𝑟𝑒𝑠𝑡,ℎ𝑎× 𝑆𝑒𝑞ℎ𝑎_𝑡𝐶𝑂2/ℎ𝑎/𝑎𝑛× 1000 
 
• 
Émissions évitées (prévention de déforestation, pratiques agroécologiques, substitution) 
𝐴𝑒ˊ𝑣𝑖𝑡𝑒ˊ = ∑𝑃𝑟𝑜𝑗𝑒𝑐𝑡𝑠  (𝐴𝑟𝑒𝑎_𝑎𝑣𝑜𝑖𝑑𝑒𝑑_𝑡𝐶𝑂2_𝑎𝑛) 
 
Enfin : 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑝𝑙𝑎𝑛𝑡+ 𝑆𝑟𝑒𝑠𝑡 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝐴𝑒ˊ𝑣𝑖𝑡𝑒ˊ) 
 
Si 𝐸𝑛𝑒𝑡< 0: l’organisation est net négative (crédit GES net). Sinon 𝐸𝑛𝑒𝑡est la valeur positive des émissions 
annuelles. 
Normalisations utiles (comparaisons) 
• 
Par employé : 𝐸𝑝𝑎𝑟_𝑒𝑚𝑝= 𝐸𝑛𝑒𝑡/𝑁𝑒𝑚𝑝𝑙𝑜𝑦𝑒ˊ𝑠 
• 
Par hectare géré : 𝐸𝑝𝑎𝑟_ℎ𝑎= 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒𝑔𝑒ˊ𝑟𝑒ˊ𝑒 
• 
Par projet : 𝐸𝑝𝑎𝑟_𝑝𝑟𝑜𝑗𝑒𝑡= 𝐸𝑛𝑒𝑡/𝑁𝑝𝑟𝑜𝑗𝑒𝑡𝑠 
 
Qualité des données & incertitudes 
• 
Toujours indiquer les facteurs d’émission (EF) utilisés (source + année). 
• 
Fournir un Data Quality Index (0–1) par poste et estimer une incertitude (%) ; propager via erreur 
linéaire ou Monte-Carlo. 
• 
Documenter l’hypothèse de séquestration (par espèce, par âge, taux annuels) — la séquestration varie 
fortement dans le temps. 
 
 


III- Secteur de l’agriculture  
Formule principale 
𝐸𝑛𝑒𝑡   =   𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠   −  𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛   −  𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
où tous les termes sont en kg CO₂-eq / an. 
 
1) Émissions — somme des postes 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑒𝑛𝑡𝑒𝑟𝑖𝑐+ 𝐸𝑓𝑢𝑚𝑖𝑒𝑟+ 𝐸𝑒𝑛𝑔𝑟𝑎𝑖𝑠_𝑁2𝑂+ 𝐸𝑐𝑎𝑟𝑏𝑢𝑟𝑎𝑛𝑡𝑠+ 𝐸𝑒𝑙𝑒𝑐+ 𝐸𝑖𝑛𝑡𝑟𝑎𝑛𝑡𝑠+ 𝐸𝑠𝑜𝑙𝑠_𝐿𝑈𝐶+ 𝐸𝑡𝑟𝑎𝑛𝑠
+ 𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑 
 
a) Enteric (ruminants) 
𝐸𝑒𝑛𝑡𝑒𝑟𝑖𝑐= ∑
𝑐
𝑁𝑐× 𝐸𝐹𝑒𝑛𝑡𝑒𝑟𝑖𝑐,𝑐 
 
• 
𝑁𝑐= nombre d’animaux de catégorie 𝑐(vaches laitières, bovins viande, ovins…) 
• 
𝐸𝐹𝑒𝑛𝑡𝑒𝑟𝑖𝑐,𝑐= kg CO₂-eq / animal / an (ou kg CH₄/an converti en CO₂-eq) 
b) Fumier (stockage + gestion) 
𝐸𝑓𝑢𝑚𝑖𝑒𝑟= ∑
𝑠𝑦𝑠𝑡
𝑉𝑜𝑙𝑓𝑢𝑚𝑖𝑒𝑟,𝑠𝑦𝑠𝑡× 𝐸𝐹𝑓𝑢𝑚𝑖𝑒𝑟,𝑠𝑦𝑠𝑡 
 
• 
selon système (stockage couvert, fosse, compostage, lagune) ; inclut CH₄ et N₂O 
c) Engrais azotés — émissions directes/indirectes de N₂O 
𝐸𝑒𝑛𝑔𝑟𝑎𝑖𝑠_𝑁2𝑂= 𝑁𝑎𝑝𝑝𝑙× 𝐸𝐹𝑁2𝑂_𝑎𝑝𝑝𝑙× (conversion N₂O→CO₂-eq) 
 
• 
𝑁𝑎𝑝𝑝𝑙= masse d’azote appliquée (kg N/an) 
• 
𝐸𝐹𝑁2𝑂_𝑎𝑝𝑝𝑙= kg N₂O-N/kg N (ou autre format selon source) 
d) Carburant (tracteurs, machines) 
𝐸𝑐𝑎𝑟𝑏𝑢𝑟𝑎𝑛𝑡𝑠= ∑
𝑖
𝐿𝑖× 𝐸𝐹𝑓𝑢𝑒𝑙,𝑖 
 
• 
𝐿𝑖= litres/an pour usage 𝑖; 𝐸𝐹𝑓𝑢𝑒𝑙,𝑖= kg CO₂e / L 
e) Électricité 


𝐸𝑒𝑙𝑒𝑐= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
 
• 
inclure traite, réfrigération, irrigation, pompage 
f) Intrants incorporés (production d’engrais, semences, aliments achetés) 
𝐸𝑖𝑛𝑡𝑟𝑎𝑛𝑡𝑠= ∑
𝑗
𝑄𝑗× 𝐸𝐹𝑝𝑟𝑜𝑑,𝑗 
 
• 
𝑄𝑗= quantité (kg ou €) ; 𝐸𝐹𝑝𝑟𝑜𝑑,𝑗= kgCO₂e/kg (ou par valeur monétaire si nécessaire) 
g) Sols / LUC (pertes de carbone) 
𝐸𝑠𝑜𝑙𝑠_𝐿𝑈𝐶= Δ𝐶𝑠𝑜𝑙𝑠_𝑝𝑒𝑟𝑡𝑒_𝑡𝐶𝑂2 × 1000 
 
• 
pertes annuelles de stock de carbone du sol dues à pratiques, conversion de prairies, drainage, etc. 
h) Transport des produits 
𝐸𝑡𝑟𝑎𝑛𝑠= ∑(𝑡𝑜𝑛𝑛𝑒𝑠_𝑝𝑟𝑜𝑑× 𝑘𝑚× 𝐸𝐹𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡) 
 
i) Emissions incorporées équipements & infrastructure (annualisées) 
𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑= ∑𝐺𝐻𝐺𝑎𝑐ℎ𝑎𝑡,𝑘
𝑇𝑎𝑚𝑜𝑟𝑡,𝑘
 
 
 
2) Séquestration et actions positives (crédits) 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑠𝑜𝑙𝑠+ 𝑆𝑏𝑜𝑖𝑠+ 𝑆𝑏𝑖𝑜𝑐ℎ𝑎𝑟+ 𝑆𝑝𝑟𝑎𝑡𝑖𝑞𝑢𝑒𝑠 
 
• 
𝑆𝑠𝑜𝑙𝑠= Δ𝐶𝑠𝑜𝑙𝑠_𝑔𝑎𝑖𝑛_𝑡𝐶𝑂2/ℎ𝑎× 𝑆𝑢𝑟𝑓𝑎𝑐𝑒ℎ𝑎× 1000 
• 
𝑆𝑏𝑜𝑖𝑠= 𝑁𝑎𝑟𝑏𝑟𝑒𝑠× 𝑆𝑒𝑞𝑎𝑟𝑏𝑟𝑒_𝑡𝐶𝑂2/𝑎𝑛× 1000 
• 
𝑆𝑏𝑖𝑜𝑐ℎ𝑎𝑟, 𝑆𝑝𝑟𝑎𝑡𝑖𝑞𝑢𝑒𝑠(couverture hivernale, agroforesterie, pâturage amélioré) : quantifier en tCO₂e/an. 
3) Réductions évitées 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠= eˊnergies renouvelables produites × 𝐸𝐹𝑒𝑙𝑒𝑐+ autres eˊvitements quantifieˊs 
 
 
4) Impact net et normalisations 
• 
𝐸𝑛𝑒𝑡= max⁡(0,  𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠)(si négatif, organisation net-négative) 


• 
Normaliser : par hectare 𝐸/ℎ𝑎, par tonne produite 𝐸/𝑡, par UTH/employé 𝐸/𝑒𝑚𝑝. 
 
5) Qualité des données & incertitude 
• 
Indiquer source des 𝐸𝐹, Data Quality Index (0–1) par poste. 
• 
Fournir fourchette d’incertitude (%) ; utiliser propagation d’erreur ou Monte-Carlo pour analyses 
robustes. 
 
 


IV- Secteur de la santé 
Formule générale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
Tous les termes en kg CO₂-eq / an. 
 
1) Émissions — somme des postes 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑒ˊ𝑙𝑒𝑐+ 𝐸𝑐ℎ𝑎𝑢𝑓𝑓+ 𝐸𝑔𝑒ˊ𝑛_𝑠𝑒𝑐+ 𝐸𝑒𝑎𝑢+ 𝐸𝑠𝑡𝑒ˊ𝑟𝑖𝑙+ 𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠+ 𝐸𝑎𝑛𝑒𝑠𝑡ℎ+ 𝐸𝑝ℎ𝑎𝑟𝑚𝑎+ 𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡
+ 𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑 
 
a) Électricité (kWh) 
𝐸𝑒ˊ𝑙𝑒𝑐= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
 
Inclure éclairage, équipements médicaux, réfrigération, IT, pompes. 
b) Chauffage & climatisation 
𝐸𝑐ℎ𝑎𝑢𝑓𝑓= 𝐻𝑒𝑎𝑡𝑢𝑛𝑖𝑡× 𝐸𝐹ℎ𝑒𝑎𝑡; 𝐸𝑐𝑙𝑖𝑚= 𝐶𝑙𝑖𝑚𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
 
Convertir unités (m³, L, GJ → kWh ou kgCO₂e) selon source. 
c) Générateur de secours 
𝐸𝑔𝑒ˊ𝑛_𝑠𝑒𝑐= 𝐹𝑢𝑒𝑙𝐿,𝑎𝑢𝑥× 𝐸𝐹𝑓𝑢𝑒𝑙 
 
Prendre en compte heures d’utilisation annuelles. 
d) Eau et eaux usées 
𝐸𝑒𝑎𝑢= 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑒𝑎𝑢_𝑝𝑟𝑜𝑑+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡 
 
e) Stérilisation & blanchisserie 
𝐸𝑠𝑡𝑒ˊ𝑟𝑖𝑙= 𝐸𝑛𝑒𝑟𝑔𝑦𝑠𝑡𝑒ˊ𝑟𝑖𝑙,𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐸𝑛𝑒𝑟𝑔𝑦𝑏𝑙𝑎𝑛𝑐ℎ,𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
 
f) Déchets (biomédicaux, spéciaux, généraux) 
𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠= ∑
𝑓𝑙𝑢𝑥
𝑄𝑓𝑙𝑢𝑥× 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡,𝑓𝑙𝑢𝑥 
 
Distinct : incinération (fort), autoclave+déchèterie (plus faible), compost, recyclage. 


g) Gaz anesthésiques et frigorigènes 
𝐸𝑎𝑛𝑒𝑠𝑡ℎ= ∑
𝑔𝑎𝑠
𝑀𝑎𝑠𝑠𝑔𝑎𝑠× 𝐺𝑊𝑃𝑔𝑎𝑠 
 
(inclure N₂O, desflurane, sevoflurane, fuites frigorigènes) 
h) Produits pharmaceutiques & matériel (approche embodied) 
𝐸𝑝ℎ𝑎𝑟𝑚𝑎= ∑
𝑓𝑜𝑢𝑟𝑛
𝑆𝑝𝑒𝑛𝑑€/𝑘𝑔× 𝐸𝐹𝑝𝑟𝑜𝑑 
 
ou convertir quantités en kg × EF (kgCO₂e/kg). 
i) Transport (ambulances, véhicules, livraison) 
𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡= ∑
𝑣𝑒ℎ
(𝑁𝑣𝑒ℎ× 𝑘𝑚𝑣𝑒ℎ× 𝐸𝐹𝑣𝑒ℎ) 
 
j) Émissions incorporées (construction, gros équipements, annualisées) 
𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑= ∑
𝐺𝐻𝐺𝑐𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑖𝑜𝑛/𝑎𝑐ℎ𝑎𝑡
𝑇𝑎𝑚𝑜𝑟𝑡
 
 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑣𝑒ˊ𝑔+ 𝑆𝑡𝑜𝑖𝑡_𝑣𝑒𝑟𝑡+ 𝑆𝑏𝑜𝑖𝑠 
 
(ex. surface végétalisée, arbres plantés : 𝑁𝑎𝑟𝑏𝑟𝑒𝑠× 𝑆𝑒𝑞𝑎𝑟𝑏𝑟𝑒_𝑡𝐶𝑂2/𝑎𝑛× 1000) 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠= 𝐸𝑛𝑒𝑟𝑔𝑦_𝑟𝑒𝑛𝑜𝑢𝑣𝑒𝑙𝑎𝑏𝑙𝑒𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝑆𝑎𝑣𝑖𝑛𝑔𝑠𝑒𝑓𝑓𝑖𝑐𝑎𝑐𝑖𝑡𝑒 
 
(énergies PV injectées, économies avérées de consommation, réductions déchets) 
 
3) Impact net & normalisations 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
Normaliser selon besoins : 
• 
par lit 𝐸/𝑙𝑖𝑡= 𝐸𝑛𝑒𝑡/𝑁𝑙𝑖𝑡𝑠 
• 
par patient-séjour 𝐸/𝑝𝑠= 𝐸𝑛𝑒𝑡/𝑁𝑝𝑎𝑡𝑖𝑒𝑛𝑡𝑠 


• 
par m² 𝐸/𝑚2 = 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒 
 
4) Qualité des données & incertitude 
• 
Lister les EF utilisés (source, année). 
• 
Indiquer Data Quality Index (0–1) par poste. 
• 
Estimer intervalle d’incertitude (%) et propager (erreur linéaire ou Monte-Carlo) pour obtenir fourchette 
𝐸𝑛𝑒𝑡± Δ. 
 
 


V- Secteur Jeunesse 
Formule générale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
 
1) Émissions — postes principaux 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑒ˊ𝑛𝑒𝑟𝑔𝑖𝑒+ 𝐸𝑐ℎ𝑎𝑢𝑓𝑓+ 𝐸𝑒𝑎𝑢+ 𝐸𝑖𝑛𝑠𝑡𝑎𝑙𝑙𝑎𝑡𝑖𝑜𝑛𝑠+ 𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ + 𝐸𝑎𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛+ 𝐸𝑏𝑖𝑒𝑛𝑠+ 𝐸𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ𝑠 
 
a) Énergie des locaux 
𝐸𝑒ˊ𝑛𝑒𝑟𝑔𝑖𝑒= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
𝐸𝑐ℎ𝑎𝑢𝑓𝑓= 𝐻𝑒𝑎𝑡𝑢𝑛𝑖𝑡× 𝐸𝐹𝑐ℎ𝑎𝑢𝑓𝑓 
𝐸𝑒𝑎𝑢= 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑒𝑎𝑢_𝑝𝑟𝑜𝑑+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡 
 
• 
Inclure cuisine, douches, équipements spécifiques. 
b) Installations & équipements 
𝐸𝑖𝑛𝑠𝑡𝑎𝑙𝑙𝑎𝑡𝑖𝑜𝑛𝑠= ∑
𝑒𝑞𝑢𝑖𝑝
(𝐸𝑛𝑒𝑟𝑔𝑦𝑒𝑞𝑢𝑖𝑝,𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐸𝑚𝑏𝑜𝑑𝑖𝑒𝑑𝑒𝑞𝑢𝑖𝑝/𝑇𝑎𝑚𝑜𝑟𝑡) 
 
• 
Inclure mobilier, structures, équipements durables. 
c) Mobilité / transport 
𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ = ∑
𝑣𝑒ℎ
(𝑁𝑣𝑒ℎ× 𝑘𝑚𝑣𝑒ℎ× 𝐸𝐹𝑣𝑒ℎ) +
∑
𝑡𝑟𝑎𝑗𝑒𝑡𝑠
(𝑁𝑝𝑒𝑟𝑠× 𝑘𝑚× 𝐸𝐹𝑚𝑜𝑑𝑒) 
 
• 
Inclure sorties, camps résidentiels, trajets animateurs/personnel. 
d) Alimentation 
𝐸𝑎𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛= 𝑁𝑟𝑒𝑝𝑎𝑠× ∑
𝑗
(𝑝𝑗× 𝐸𝐹𝑎𝑙𝑖𝑚,𝑗) × (1 + 𝐺𝑎𝑠𝑝𝑖𝑙𝑙𝑎𝑔𝑒) 
 
• 
𝑝𝑗= fraction par type d’aliment (local, importé, végétal, viande, etc.) 
e) Biens et loisirs 
𝐸𝑏𝑖𝑒𝑛𝑠=
∑
𝑒𝑞𝑢𝑖𝑝_𝑠𝑝𝑜𝑟𝑡
(𝐸𝑚𝑏𝑜𝑑𝑖𝑒𝑑𝑒𝑞𝑢𝑖𝑝/𝑇𝑎𝑚𝑜𝑟𝑡) 
 


f) Activités 
𝐸𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ𝑠= ∑
𝑝𝑟𝑜𝑗𝑒𝑡
(𝐸𝑛𝑒𝑟𝑔𝑦𝑝𝑟𝑜𝑗,𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝑀𝑎𝑡𝑒ˊ𝑟𝑖𝑎𝑢𝑥𝑝𝑟𝑜𝑗× 𝐸𝐹𝑚𝑎𝑡) 
 
• 
Inclut ateliers, sports, arts, sorties éducatives. 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑣𝑒ˊ𝑔+ 𝑆𝑎𝑟𝑏𝑟𝑒𝑠+ 𝑆𝑝𝑟𝑜𝑗𝑒𝑡𝑠_𝑣𝑒𝑟𝑡 
 
• 
Exemple : plantations sur sites, zones végétalisées, potagers éducatifs, projets de compost. 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠=
∑
𝑚𝑒𝑠𝑢𝑟𝑒𝑠_𝑒𝑐𝑜
𝐸𝑛𝑒𝑟𝑔𝑦_𝑟𝑒𝑛𝑜𝑢𝑣𝑒𝑙𝑎𝑏𝑙𝑒× 𝐸𝐹𝑒𝑙𝑒𝑐
+ 𝑒ˊ𝑐𝑜𝑛𝑜𝑚𝑖𝑒𝑠𝑟𝑒ˊ𝑒𝑙𝑙𝑒𝑠(𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑒𝑎𝑢, 𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡𝑝𝑎𝑟𝑡𝑎𝑔𝑒ˊ) 
 
 
3) Impact net 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
• 
Si 𝐸𝑛𝑒𝑡< 0, organisation net-négative en GES. 
• 
Sinon, 𝐸𝑛𝑒𝑡représente les émissions annuelles nettes. 
 
4) Normalisation / indicateurs 
• 
Par jeune servi : 𝐸/𝑗𝑒𝑢𝑛𝑒= 𝐸𝑛𝑒𝑡/𝑁𝑗𝑒𝑢𝑛𝑒𝑠 
• 
Par m² : 𝐸/𝑚2 = 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒 
• 
Par activité : 𝐸/𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ = 𝐸𝑛𝑒𝑡/𝑁𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ𝑠 
 
5) Qualité des données et incertitudes 
• 
Documenter les facteurs d’émission utilisés (EF) et sources. 
• 
Estimer une fourchette d’incertitude (%) pour chaque poste. 
• 
Fournir un Data Quality Index (0–1) pour la robustesse des données collectées. 
 
 


VI- Secteur Communautaire 
Formule générale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
 
1) Émissions — postes principaux 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑒ˊ𝑛𝑒𝑟𝑔𝑖𝑒+ 𝐸𝑐ℎ𝑎𝑢𝑓𝑓𝑎𝑔𝑒+ 𝐸𝑒𝑎𝑢+ 𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ + 𝐸𝑟𝑒𝑠𝑠𝑜𝑢𝑟𝑐𝑒𝑠+ 𝐸𝑠𝑒𝑟𝑣𝑖𝑐𝑒𝑠+ 𝐸𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ𝑠 
 
a) Énergie des locaux 
𝐸𝑒ˊ𝑛𝑒𝑟𝑔𝑖𝑒= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
𝐸𝑐ℎ𝑎𝑢𝑓𝑓𝑎𝑔𝑒= 𝐻𝑒𝑎𝑡𝑢𝑛𝑖𝑡× 𝐸𝐹ℎ𝑒𝑎𝑡 
𝐸𝑒𝑎𝑢= 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑒𝑎𝑢_𝑝𝑟𝑜𝑑+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡 
 
• 
Inclure tous les bâtiments utilisés (bureau, salle communautaire, locaux annexes). 
b) Mobilité professionnelle 
𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ =
∑
𝑡𝑟𝑎𝑗𝑒𝑡𝑠
(𝑁𝑝𝑒𝑟𝑠× 𝑘𝑚𝑡𝑟𝑎𝑗𝑒𝑡× 𝐸𝐹𝑚𝑜𝑑𝑒) 
 
• 
Inclut domicile-travail, trajets pour servir les membres/clients, missions ponctuelles. 
• 
Distinction par type de véhicule : voiture, minibus, transport public, vélo (réduction nulle ou négative 
pour vélo). 
c) Ressources utilisées 
𝐸𝑟𝑒𝑠𝑠𝑜𝑢𝑟𝑐𝑒𝑠=
∑
𝑓𝑜𝑢𝑟𝑛𝑖𝑡𝑢𝑟𝑒𝑠
𝑄𝑓𝑜𝑢𝑟𝑛× 𝐸𝐹𝑚𝑎𝑡+
∑
𝑒ˊ𝑞𝑢𝑖𝑝𝑒𝑚𝑒𝑛𝑡𝑠
𝐺𝐻𝐺𝑎𝑐ℎ𝑎𝑡
𝑇𝑎𝑚𝑜𝑟𝑡
 
 
• 
Comprend matériel, papeterie, équipements durables. 
d) Services offerts et activités 
𝐸𝑠𝑒𝑟𝑣𝑖𝑐𝑒𝑠=
∑
𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ𝑠
(𝐸𝑛𝑒𝑟𝑔𝑦𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ,𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝑀𝑎𝑡𝑒ˊ𝑟𝑖𝑎𝑢𝑥𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ × 𝐸𝐹𝑚𝑎𝑡) 
 
• 
Formation, loisirs, advocacy, événements en présentiel. 
𝐸𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ𝑠=
∑
𝑝𝑟𝑒ˊ𝑠𝑒𝑛𝑡𝑖𝑒𝑙
𝑁𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠× 𝑘𝑚𝑡𝑟𝑎𝑗𝑒𝑡× 𝐸𝐹𝑚𝑜𝑑𝑒 
 


• 
Déplacements des participants pour les activités en présentiel (optionnel si données disponibles). 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑣𝑒ˊ𝑔+ 𝑆𝑎𝑟𝑏𝑟𝑒𝑠+ 𝑆𝑝𝑟𝑜𝑗𝑒𝑡𝑠_𝑣𝑒𝑟𝑡𝑠 
 
• 
Plantations sur site, potagers communautaires, zones végétalisées, compostage. 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠=
∑
𝑚𝑒𝑠𝑢𝑟𝑒𝑠_𝑒𝑐𝑜
𝐸𝑛𝑒𝑟𝑔𝑦_𝑟𝑒𝑛𝑜𝑢𝑣𝑒𝑙𝑎𝑏𝑙𝑒× 𝐸𝐹𝑒𝑙𝑒𝑐
+ 𝑒ˊ𝑐𝑜𝑛𝑜𝑚𝑖𝑒𝑠𝑒𝑎𝑢, 𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠, 𝑠𝑒𝑛𝑠𝑖𝑏𝑖𝑙𝑖𝑠𝑎𝑡𝑖𝑜𝑛𝑖𝑚𝑝𝑎𝑐𝑡𝑎𝑛𝑡𝑒 
 
 
3) Impact net 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
• 
Si 𝐸𝑛𝑒𝑡< 0: organisation net-négative en GES. 
• 
Sinon 𝐸𝑛𝑒𝑡= émissions annuelles nettes. 
 
4) Normalisation et indicateurs 
• 
Par membre/participant : 𝐸/𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡= 𝐸𝑛𝑒𝑡/𝑁𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠 
• 
Par m² de locaux : 𝐸/𝑚2 = 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒 
• 
Par activité organisée : 𝐸/𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ = 𝐸𝑛𝑒𝑡/𝑁𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑒ˊ𝑠 
 
5) Qualité des données & incertitude 
• 
Documenter les facteurs d’émission (EF) et sources. 
• 
Indiquer un Data Quality Index (0–1) par poste. 
• 
Estimer intervalle d’incertitude (%) et propagation pour obtenir fourchette 𝐸𝑛𝑒𝑡± Δ. 
 
 


VII- Secteur aide alimentaire 
Formule générale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
 
1) Émissions — postes principaux 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑙𝑜𝑐𝑎𝑢𝑥+ 𝐸𝑎𝑝𝑝𝑟𝑜𝑣𝑖𝑠𝑖𝑜𝑛𝑛𝑒𝑚𝑒𝑛𝑡+ 𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡+ 𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠+ 𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑 
 
a) Locaux et équipements 
𝐸𝑙𝑜𝑐𝑎𝑢𝑥= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐻𝑒𝑎𝑡𝑢𝑛𝑖𝑡× 𝐸𝐹𝑐ℎ𝑎𝑢𝑓𝑓+ 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑒𝑎𝑢_𝑝𝑟𝑜𝑑+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡
+ ∑
𝑒𝑞𝑢𝑖𝑝
𝐺𝐻𝐺𝑒𝑞𝑢𝑖𝑝
𝑇𝑎𝑚𝑜𝑟𝑡
 
 
• 
Inclut entreposage réfrigéré, cuisines, surfaces utilisées, chauffage et eau. 
b) Approvisionnement alimentaire 
𝐸𝑎𝑝𝑝𝑟𝑜𝑣𝑖𝑠𝑖𝑜𝑛𝑛𝑒𝑚𝑒𝑛𝑡=
∑
𝑡𝑦𝑝𝑒_𝑎𝑙𝑖𝑚𝑒𝑛𝑡
𝑉𝑜𝑙𝑢𝑚𝑒𝑡𝑜𝑛𝑛𝑒𝑠× 𝐸𝐹𝑎𝑙𝑖𝑚,𝑡𝑦𝑝𝑒 
 
• 
Différencier aliments locaux / importés / transformés / frais / périssables. 
• 
EF basé sur cycle de vie moyen par type d’aliment (kg CO₂e/tonne). 
c) Transport et logistique 
𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡= ∑
𝑣𝑒ℎ
𝑘𝑚𝑣𝑒ℎ× 𝐸𝐹𝑓𝑢𝑒𝑙+
∑
𝑡𝑟𝑎𝑗𝑒𝑡𝑠_𝑏𝑒ˊ𝑛𝑒ˊ𝑣𝑜𝑙𝑒𝑠
𝑘𝑚× 𝐸𝐹𝑚𝑜𝑑𝑒 
 
• 
Inclure collecte, distribution et déplacements du personnel/bénévoles. 
d) Déchets et gaspillage 
𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠= 𝐺𝑎𝑠𝑝𝑖𝑙𝑙𝑎𝑔𝑒𝑡𝑜𝑛𝑛𝑒𝑠× 𝐸𝐹𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠+ 𝐸𝑚𝑏𝑎𝑙𝑙𝑎𝑔𝑒𝑘𝑔× 𝐸𝐹𝑒𝑚𝑏𝑎𝑙𝑙𝑎𝑔𝑒−𝐶𝑜𝑚𝑝𝑜𝑠𝑡𝑡𝑜𝑛𝑛𝑒𝑠× 𝐸𝐹𝑐𝑜𝑚𝑝𝑜𝑠𝑡 
 
• 
Les actions de compostage ou recyclage réduisent l’impact. 
e) Émissions incorporées 
𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑= ∑𝐺𝐻𝐺𝑐𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑖𝑜𝑛_𝑙𝑜𝑐𝑎𝑢𝑥+ 𝐺𝐻𝐺𝑎𝑐ℎ𝑎𝑡_𝑒ˊ𝑞𝑢𝑖𝑝𝑒𝑚𝑒𝑛𝑡𝑠
𝑇𝑎𝑚𝑜𝑟𝑡
 
 


• 
Annualisation sur durée de vie des infrastructures et équipements. 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑐𝑜𝑚𝑝𝑜𝑠𝑡+ 𝑆𝑎𝑟𝑏𝑟𝑒𝑠_𝑝𝑙𝑎𝑛𝑡𝑒ˊ𝑠+ 𝑆𝑝𝑟𝑜𝑗𝑒𝑡𝑠_𝑣𝑒𝑟𝑡𝑠 
 
• 
Compostage, potagers communautaires, zones végétalisées, actions de sensibilisation. 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠=
∑
𝑎𝑐𝑡𝑖𝑜𝑛𝑠
(𝑎𝑙𝑖𝑚𝑒𝑛𝑡𝑠𝑑𝑒ˊ𝑡𝑜𝑢𝑟𝑛𝑒ˊ𝑠𝑑𝑒𝑙𝑎𝑑𝑒ˊ𝑐ℎ𝑎𝑟𝑔𝑒× 𝐸𝐹𝑒ˊ𝑣𝑖𝑡𝑒ˊ + 𝑒ˊ𝑐𝑜𝑛𝑜𝑚𝑖𝑒𝑠𝑒ˊ𝑛𝑒𝑟𝑔𝑖𝑒/𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡) 
 
• 
Réduction du gaspillage alimentaire, valorisation de dons locaux, optimisation logistique. 
 
3) Impact net 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
• 
Si 𝐸𝑛𝑒𝑡< 0: organisation net-négative en GES. 
• 
Sinon 𝐸𝑛𝑒𝑡= émissions annuelles nettes. 
 
4) Normalisation / indicateurs 
• 
Par personne servie : 𝐸/𝑝𝑒𝑟𝑠𝑜𝑛𝑛𝑒= 𝐸𝑛𝑒𝑡/𝑁𝑝𝑒𝑟𝑠𝑜𝑛𝑛𝑒𝑠 
• 
Par tonne de nourriture distribuée : 𝐸/𝑡𝑜𝑛𝑛𝑒= 𝐸𝑛𝑒𝑡/𝑉𝑜𝑙𝑢𝑚𝑒𝑡𝑜𝑛𝑛𝑒𝑠 
• 
Par distribution : 𝐸/𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛= 𝐸𝑛𝑒𝑡/𝑁𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛𝑠 
 
5) Qualité des données et incertitudes 
• 
Documenter les facteurs d’émission (EF) et leur source. 
• 
Fournir Data Quality Index (0–1) par poste pour la robustesse. 
• 
Estimer fourchette d’incertitude (%) et propager via erreurs linéaires ou Monte-Carlo. 
 
 


VIII- Secteur Restauration 
Formule générale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
 
1) Émissions — postes principaux 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑙𝑜𝑐𝑎𝑢𝑥+ 𝐸𝑎𝑝𝑝𝑟𝑜𝑣𝑖𝑠𝑖𝑜𝑛𝑛𝑒𝑚𝑒𝑛𝑡+ 𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠+ 𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡+ 𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑+ 𝐸𝑒𝑞𝑢𝑖𝑝𝑒𝑚𝑒𝑛𝑡𝑠 
 
a) Locaux et énergie 
𝐸𝑙𝑜𝑐𝑎𝑢𝑥= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐻𝑒𝑎𝑡𝑢𝑛𝑖𝑡× 𝐸𝐹𝑐ℎ𝑎𝑢𝑓𝑓+ 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑒𝑎𝑢_𝑝𝑟𝑜𝑑+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡 
 
• 
Inclut éclairage, réfrigération, cuisson, extraction, eau chaude. 
• 
Heat_unit = volume gaz/propane converti en kWh ou directement en kg CO₂e. 
b) Approvisionnement alimentaire 
𝐸𝑎𝑝𝑝𝑟𝑜𝑣𝑖𝑠𝑖𝑜𝑛𝑛𝑒𝑚𝑒𝑛𝑡=
∑
𝑡𝑦𝑝𝑒_𝑎𝑙𝑖𝑚𝑒𝑛𝑡
𝑄𝑢𝑎𝑛𝑡𝑖𝑡𝑒ˊ𝑡𝑜𝑛𝑛𝑒𝑠× 𝐸𝐹𝑎𝑙𝑖𝑚,𝑡𝑦𝑝𝑒× (1 −𝑃𝑎𝑟𝑡𝑏𝑖𝑜/𝑙𝑜𝑐𝑎𝑙𝑒) 
 
• 
Différencier végétal / viande / poisson / importé / local / bio. 
• 
Les aliments locaux/bio peuvent bénéficier d’un EF réduit. 
c) Gestion des déchets alimentaires 
𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠= 𝑅𝑒𝑠𝑡𝑒𝑠𝑡𝑜𝑛𝑛𝑒𝑠× 𝐸𝐹𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠−𝐶𝑜𝑚𝑝𝑜𝑠𝑡𝑡𝑜𝑛𝑛𝑒𝑠× 𝐸𝐹𝑐𝑜𝑚𝑝𝑜𝑠𝑡−𝑅𝑒ˊ𝑐𝑢𝑝𝑡𝑜𝑛𝑛𝑒𝑠× 𝐸𝐹𝑒ˊ𝑣𝑖𝑡𝑒ˊ 
 
• 
Compostage ou récupération pour animaux réduit l’impact. 
d) Transport et logistique 
𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡=
∑
𝑙𝑖𝑣𝑟𝑎𝑖𝑠𝑜𝑛𝑠
(𝐷𝑖𝑠𝑡𝑎𝑛𝑐𝑒𝑘𝑚× 𝑄𝑢𝑎𝑛𝑡𝑖𝑡𝑒ˊ𝑡𝑜𝑛𝑛𝑒𝑠× 𝐸𝐹𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡) + 𝐸𝑚𝑏𝑎𝑙𝑙𝑎𝑔𝑒𝑠𝑘𝑔× 𝐸𝐹𝑒𝑚𝑏𝑎𝑙𝑙𝑎𝑔𝑒 
 
• 
Inclut livraison fournisseurs, emballages reçus et gestion. 
e) Équipements durables et matériels 
𝐸𝑒𝑞𝑢𝑖𝑝𝑒𝑚𝑒𝑛𝑡𝑠= ∑
𝑒𝑞𝑢𝑖𝑝
𝐺𝐻𝐺𝑎𝑐ℎ𝑎𝑡
𝑇𝑎𝑚𝑜𝑟𝑡
 
 


• 
Vaisselle réutilisable, contenants, équipements de cuisine durables. 
f) Émissions incorporées 
𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑= 𝐺𝐻𝐺𝑐𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑖𝑜𝑛+𝑎𝑚𝑒ˊ𝑛𝑎𝑔𝑒𝑚𝑒𝑛𝑡
𝑇𝑎𝑚𝑜𝑟𝑡
 
 
• 
Annualisation des infrastructures (bâtiments, cuisines). 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑐𝑜𝑚𝑝𝑜𝑠𝑡+ 𝑆𝑝𝑜𝑡𝑎𝑔𝑒𝑟+ 𝑆𝑝𝑟𝑜𝑗𝑒𝑡𝑠_𝑣𝑒𝑟𝑡𝑠 
 
• 
Compostage sur place, potagers urbains, plantations autour du restaurant. 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠=
∑
𝑚𝑒𝑠𝑢𝑟𝑒𝑠
𝐸𝑛𝑒𝑟𝑔𝑦_𝑟𝑒𝑛𝑜𝑢𝑣𝑒𝑙𝑎𝑏𝑙𝑒× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝑒ˊ𝑐𝑜𝑛𝑜𝑚𝑖𝑒𝑠𝑑’𝑒𝑎𝑢+ 𝑒𝑚𝑏𝑎𝑙𝑙𝑎𝑔𝑒𝑠𝑟𝑒ˊ𝑢𝑡𝑖𝑙𝑖𝑠𝑎𝑏𝑙𝑒𝑠 
 
• 
Énergie solaire, récupération eau, réduction plastique. 
 
3) Impact net 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
• 
Si 𝐸𝑛𝑒𝑡< 0: organisation net-négative. 
• 
Sinon 𝐸𝑛𝑒𝑡= émissions annuelles nettes. 
 
4) Normalisation / indicateurs 
• 
Par couvert / client : 𝐸/𝑐𝑜𝑢𝑣𝑒𝑟𝑡= 𝐸𝑛𝑒𝑡/𝑁𝑐𝑜𝑢𝑣𝑒𝑟𝑡𝑠 
• 
Par tonne d’aliment acheté : 𝐸/𝑡𝑜𝑛𝑛𝑒= 𝐸𝑛𝑒𝑡/𝑄𝑢𝑎𝑛𝑡𝑖𝑡𝑒ˊ𝑡𝑜𝑛𝑛𝑒𝑠 
• 
Par m² de cuisine : 𝐸/𝑚2 = 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒 
 
5) Qualité des données & incertitudes 
• 
Documenter tous les facteurs d’émission (EF) et sources. 
• 
Indiquer Data Quality Index (0–1) pour robustesse. 
• 
Estimer fourchette d’incertitude (%) et propagation d’erreur. 
 
 


IX- Secteur art et culture  
Formule générale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
 
1) Émissions — postes principaux 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑙𝑜𝑐𝑎𝑢𝑥+ 𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ + 𝐸𝑒ˊ𝑣𝑒ˊ𝑛𝑒𝑚𝑒𝑛𝑡𝑠+ 𝐸𝑏𝑖𝑒𝑛𝑠+ 𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠+ 𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑 
 
a) Locaux et énergie 
𝐸𝑙𝑜𝑐𝑎𝑢𝑥= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐻𝑒𝑎𝑡𝑢𝑛𝑖𝑡× 𝐸𝐹𝑐ℎ𝑎𝑢𝑓𝑓+ 𝐶𝑙𝑖𝑚𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑒𝑎𝑢_𝑝𝑟𝑜𝑑
+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡 
 
• 
Inclut éclairage spécialisé, audiovisuel, scène, générateurs ponctuels. 
b) Mobilité des artistes et visiteurs 
𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ =
∑
𝑡𝑟𝑎𝑗𝑒𝑡𝑠
(𝑁𝑝𝑒𝑟𝑠× 𝑘𝑚× 𝐸𝐹𝑚𝑜𝑑𝑒) +
∑
𝑜𝑒𝑢𝑣𝑟𝑒𝑠
(𝑘𝑔_𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡𝑒× 𝑘𝑚× 𝐸𝐹𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡) 
 
• 
Différencier transport privé vs public, déplacements locaux, régionaux, nationaux. 
c) Événements et spectacles 
𝐸𝑒ˊ𝑣𝑒ˊ𝑛𝑒𝑚𝑒𝑛𝑡𝑠=
∑
𝑒ˊ𝑣𝑒ˊ𝑛𝑒𝑚𝑒𝑛𝑡𝑠
(𝐸𝑛𝑒𝑟𝑔𝑦𝑒ˊ𝑣𝑒ˊ𝑛𝑒𝑚𝑒𝑛𝑡,𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐶𝑎𝑡𝑒𝑟𝑖𝑛𝑔𝑘𝑔× 𝐸𝐹𝑎𝑙𝑖𝑚
+ 𝑀𝑎𝑡𝑒ˊ𝑟𝑖𝑒𝑙𝑠𝑐𝑒ˊ𝑛𝑖𝑞𝑢𝑒× 𝐸𝐹𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑) 
 
• 
Inclut restauration, décoration, accessoires et construction/réutilisation du matériel scénique. 
d) Consommation de biens 
𝐸𝑏𝑖𝑒𝑛𝑠=
∑
𝑚𝑎𝑡𝑒ˊ𝑟𝑖𝑎𝑢𝑥_𝑎𝑟𝑡𝑖𝑠𝑡𝑖𝑞𝑢𝑒𝑠
𝑄𝑚𝑎𝑡× 𝐸𝐹𝑚𝑎𝑡+
∑
𝑖𝑚𝑝𝑟𝑒𝑠𝑠𝑖𝑜𝑛
𝑄𝑝𝑟𝑖𝑛𝑡× 𝐸𝐹𝑝𝑟𝑖𝑛𝑡
+ 𝐸ˊ 𝑞𝑢𝑖𝑝𝑒𝑚𝑒𝑛𝑡𝑎𝑢𝑑𝑖𝑜𝑣𝑖𝑠𝑢𝑒𝑙/𝑇𝑎𝑚𝑜𝑟𝑡 
 
• 
Inclut affiches, catalogues, matériel audiovisuel et d’exposition. 
e) Gestion des déchets 
𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠= 𝐷𝑒ˊ𝑐ℎ𝑒𝑡𝑠𝑘𝑔× 𝐸𝐹𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠−𝑅𝑒𝑢𝑡𝑖𝑙𝑖𝑠𝑎𝑡𝑖𝑜𝑛𝑘𝑔× 𝐸𝐹𝑒ˊ𝑣𝑖𝑡𝑒ˊ 
 


• 
Réutilisation et compostage réduisent l’impact. 
f) Émissions incorporées 
𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑= ∑𝐺𝐻𝐺𝑐𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑖𝑜𝑛+𝑎𝑚𝑒ˊ𝑛𝑎𝑔𝑒𝑚𝑒𝑛𝑡
𝑇𝑎𝑚𝑜𝑟𝑡
 
 
• 
Pour bâtiments culturels, équipements lourds, structures permanentes. 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑎𝑟𝑏𝑟𝑒𝑠+ 𝑆𝑣𝑒ˊ𝑔+ 𝑆𝑝𝑟𝑜𝑗𝑒𝑡𝑠_𝑣𝑒𝑟𝑡𝑠 
 
• 
Plantations sur site, zones végétalisées autour de la structure, initiatives pédagogiques éco-responsables. 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠= 𝐸𝑛𝑒𝑟𝑔𝑦_𝑟𝑒𝑛𝑜𝑢𝑣𝑒𝑙𝑎𝑏𝑙𝑒× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝑒ˊ𝑐𝑜𝑛𝑜𝑚𝑖𝑒𝑠𝑒𝑎𝑢+ 𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠
+ 𝑟𝑒ˊ𝑢𝑡𝑖𝑙𝑖𝑠𝑎𝑡𝑖𝑜𝑛𝑚𝑎𝑡𝑒ˊ𝑟𝑖𝑒𝑙 
 
• 
Énergie solaire, récupérations, réemploi des décors. 
 
3) Impact net 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
• 
𝐸𝑛𝑒𝑡< 0: organisation net-négative. 
• 
Sinon, 𝐸𝑛𝑒𝑡= émissions annuelles nettes. 
 
4) Normalisation / indicateurs 
• 
Par visiteur : 𝐸/𝑣𝑖𝑠𝑖𝑡𝑒𝑢𝑟= 𝐸𝑛𝑒𝑡/𝑁𝑣𝑖𝑠𝑖𝑡𝑒𝑢𝑟𝑠 
• 
Par événement : 𝐸/𝑒ˊ𝑣𝑒ˊ𝑛𝑒𝑚𝑒𝑛𝑡= 𝐸𝑛𝑒𝑡/𝑁𝑒ˊ𝑣𝑒ˊ𝑛𝑒𝑚𝑒𝑛𝑡𝑠 
• 
Par m² d’infrastructure : 𝐸/𝑚2 = 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒 
 
5) Qualité des données et incertitude 
• 
Documenter facteurs d’émission (EF) et sources. 
• 
Fournir Data Quality Index (0–1) par poste. 
• 
Estimer fourchette d’incertitude (%) et propagation d’erreur. 
 
 


X-Secteur Politique 
Formule générale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
 
1) Émissions — postes principaux 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑏𝑎̂𝑡𝑖𝑚𝑒𝑛𝑡𝑠+ 𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ + 𝐸𝑠𝑒𝑟𝑣𝑖𝑐𝑒𝑠_𝑝𝑢𝑏𝑙𝑖𝑐𝑠+ 𝐸𝑒𝑎𝑢+ 𝐸𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠+ 𝐸𝑖𝑛𝑓𝑟𝑎𝑠𝑡𝑟𝑢𝑐𝑡𝑢𝑟𝑒_𝑣𝑒𝑟𝑡𝑒+ 𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑 
 
a) Bâtiments et énergie 
𝐸𝑏𝑎̂𝑡𝑖𝑚𝑒𝑛𝑡𝑠= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐻𝑒𝑎𝑡𝑢𝑛𝑖𝑡× 𝐸𝐹𝑐ℎ𝑎𝑢𝑓𝑓+ 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑒𝑎𝑢_𝑝𝑟𝑜𝑑+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡 
 
• 
Inclut bâtiments municipaux, éclairage public, espaces administratifs. 
• 
Heat_unit = volume de gaz/mazout/électricité converti en kg CO₂e. 
b) Mobilité des élus et agents 
𝐸𝑚𝑜𝑏𝑖𝑙𝑖𝑡𝑒ˊ =
∑
𝑡𝑟𝑎𝑗𝑒𝑡𝑠
(𝑁𝑝𝑒𝑟𝑠× 𝑘𝑚× 𝐸𝐹𝑚𝑜𝑑𝑒) +
∑
𝑣𝑒ℎ_𝑚𝑢𝑛
𝑘𝑚𝑣𝑒ℎ× 𝐸𝐹𝑓𝑢𝑒𝑙 
 
• 
Inclut déplacements domicile-travail, réunions, visites de terrain, véhicules municipaux. 
c) Services publics 
𝐸𝑠𝑒𝑟𝑣𝑖𝑐𝑒𝑠_𝑝𝑢𝑏𝑙𝑖𝑐𝑠
= ∑
𝑟𝑜𝑢𝑡𝑒𝑠
𝐹𝑢𝑒𝑙𝑟𝑜𝑢𝑡𝑒× 𝐸𝐹𝑓𝑢𝑒𝑙+
∑
𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠
𝑄𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠× 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡
+
∑
𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡𝑠_𝑝𝑢𝑏𝑙𝑖𝑐𝑠
𝑘𝑚× 𝐸𝐹𝑡𝑟𝑎𝑛𝑠𝑝 
 
• 
Entretien des routes, collecte/traitement des déchets, transports en commun si applicables. 
d) Eau et traitement 
𝐸𝑒𝑎𝑢= 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑝𝑜𝑚𝑝𝑎𝑔𝑒+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡 
 
• 
Eau potable, assainissement et traitement des eaux usées. 
e) Infrastructure verte 
𝐸𝑖𝑛𝑓𝑟𝑎𝑠𝑡𝑟𝑢𝑐𝑡𝑢𝑟𝑒_𝑣𝑒𝑟𝑡𝑒= 𝑀𝑎𝑖𝑛𝑡𝑒𝑛𝑎𝑛𝑐𝑒𝑒𝑠𝑝𝑎𝑐𝑒𝑠_𝑣𝑒𝑟𝑡𝑠× 𝐸𝐹𝑒𝑛𝑡𝑟𝑒𝑡𝑖𝑒𝑛−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛_𝑎𝑟𝑏𝑟𝑒𝑠 
 


• 
Gestion des parcs, restauration des cours d’eau, initiatives de verdissement. 
f) Émissions incorporées 
𝐸𝑒𝑚𝑏𝑜𝑑𝑖𝑒𝑑= ∑𝐺𝐻𝐺𝑐𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑖𝑜𝑛+𝑒ˊ𝑞𝑢𝑖𝑝𝑒𝑚𝑒𝑛𝑡𝑠
𝑇𝑎𝑚𝑜𝑟𝑡
 
 
• 
Construction/maintenance bâtiments, équipements municipaux lourds. 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑎𝑟𝑏𝑟𝑒𝑠_𝑝𝑙𝑎𝑛𝑡𝑒ˊ𝑠+ 𝑆𝑧𝑜𝑛𝑒𝑠_ℎ𝑢𝑚𝑖𝑑𝑒𝑠+ 𝑆𝑖𝑛𝑖𝑡𝑖𝑎𝑡𝑖𝑣𝑒𝑠_𝑣𝑒𝑟𝑡𝑒𝑠 
 
• 
Plantations, restauration des zones humides, projets de séquestration sur le territoire. 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠=
∑
𝑚𝑒𝑠𝑢𝑟𝑒𝑠
𝐸𝑛𝑒𝑟𝑔𝑦_𝑟𝑒𝑛𝑜𝑢𝑣𝑒𝑙𝑎𝑏𝑙𝑒× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝑒ˊ𝑐𝑜𝑛𝑜𝑚𝑖𝑒𝑠𝑒𝑎𝑢+ 𝑒ˊ𝑐𝑙𝑎𝑖𝑟𝑎𝑔𝑒𝐷𝐸𝐿
+ 𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑐𝑎𝑟𝑏𝑢𝑟𝑎𝑛𝑡𝑣𝑒ˊℎ𝑖𝑐𝑢𝑙𝑒𝑠 
 
• 
Mesures déjà en place pour réduire l’empreinte énergétique et carbone. 
 
3) Impact net 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
• 
𝐸𝑛𝑒𝑡< 0: organisation net-négative. 
• 
Sinon, 𝐸𝑛𝑒𝑡= émissions annuelles nettes. 
 
4) Normalisation / indicateurs 
• 
Par habitant desservi : 𝐸/ℎ𝑎𝑏𝑖𝑡𝑎𝑛𝑡= 𝐸𝑛𝑒𝑡/𝑃𝑜𝑝𝑢𝑙𝑎𝑡𝑖𝑜𝑛 
• 
Par km de routes entretenues : 𝐸/𝑘𝑚= 𝐸𝑛𝑒𝑡/𝐾𝑚𝑟𝑜𝑢𝑡𝑒𝑠 
• 
Par m² de bâtiments municipaux : 𝐸/𝑚2 = 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒 
 
5) Qualité des données et incertitude 
• 
Documenter facteurs d’émission (EF) et sources. 
• 
Fournir Data Quality Index (0–1) pour robustesse par poste. 
• 
Estimer fourchette d’incertitude (%) et propagation pour obtenir 𝐸𝑛𝑒𝑡± Δ. 
 


XI- Secteur Citoyen 
Formule générale 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛−𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠 
 
 
1) Émissions — postes principaux 
𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠= 𝐸𝑑𝑜𝑚𝑖𝑐𝑖𝑙𝑒+ 𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡+ 𝐸𝑎𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛+ 𝐸𝑐𝑜𝑛𝑠𝑜𝑚𝑚𝑎𝑡𝑖𝑜𝑛_𝑏𝑖𝑒𝑛𝑠+ 𝐸𝑒𝑎𝑢+ 𝐸𝑖𝑛𝑣𝑒𝑠𝑡𝑖𝑠𝑠𝑒𝑚𝑒𝑛𝑡𝑠 
 
a) Énergie domestique 
𝐸𝑑𝑜𝑚𝑖𝑐𝑖𝑙𝑒= 𝐸𝑙𝑒𝑐𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐+ 𝐻𝑒𝑎𝑡𝑢𝑛𝑖𝑡× 𝐸𝐹𝑐ℎ𝑎𝑢𝑓𝑓+ 𝐴𝐶𝑆𝑘𝑊ℎ/𝑚3 × 𝐸𝐹𝑒𝑎𝑢𝑐ℎ𝑎𝑢𝑑𝑒+ 𝐶𝑙𝑖𝑚𝑘𝑊ℎ× 𝐸𝐹𝑒𝑙𝑒𝑐 
 
• 
Inclut chauffage, climatisation, eau chaude, électricité générale. 
• 
Heat_unit = volume gaz/mazout/bois/électricité converti en kg CO₂e. 
• 
Énergie renouvelable produite : soustraite via 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠. 
b) Transport personnel 
𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡= ∑
𝑚𝑜𝑑𝑒𝑠
𝑘𝑚𝑚𝑜𝑑𝑒× 𝐸𝐹𝑚𝑜𝑑𝑒+ ∑
𝑎𝑣𝑖𝑜𝑛
𝑣𝑜𝑙𝑠× 𝐸𝐹𝑣𝑜𝑙 
 
• 
Inclut domicile-travail, loisirs, vacances, trajets locaux. 
• 
Différencier véhicules thermiques, hybrides, électriques. 
c) Alimentation et consommation alimentaire 
𝐸𝑎𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛=
∑
𝑡𝑦𝑝𝑒_𝑎𝑙𝑖𝑚𝑒𝑛𝑡
𝑄𝑢𝑎𝑛𝑡𝑖𝑡𝑒ˊ𝑘𝑔× 𝐸𝐹𝑎𝑙𝑖𝑚,𝑡𝑦𝑝𝑒−𝐺𝑎𝑠𝑝𝑖𝑙𝑙𝑎𝑔𝑒𝑘𝑔× 𝐸𝐹𝑒ˊ𝑣𝑖𝑡𝑒ˊ 
 
• 
Différencier omnivore, flexitarien, végétarien, bio, local, saisonnier. 
• 
Réductions via aliments locaux, bio et gaspillage évité. 
d) Consommation de biens et déchets 
𝐸𝑐𝑜𝑛𝑠𝑜𝑚𝑚𝑎𝑡𝑖𝑜𝑛_𝑏𝑖𝑒𝑛𝑠= ∑
𝑎𝑐ℎ𝑎𝑡
𝑄𝑏𝑖𝑒𝑛𝑠× 𝐸𝐹𝑏𝑖𝑒𝑛−𝑅𝑒𝑐𝑦𝑐𝑙𝑎𝑔𝑒𝑘𝑔× 𝐸𝐹𝑒ˊ𝑣𝑖𝑡𝑒ˊ −𝐶𝑜𝑚𝑝𝑜𝑠𝑡𝑘𝑔× 𝐸𝐹𝑐𝑜𝑚𝑝𝑜𝑠𝑡 
 
• 
Inclut vêtements, meubles, électroménagers, électronique, emballages. 
e) Eau 


𝐸𝑒𝑎𝑢= 𝑊𝑎𝑡𝑒𝑟𝑚3 × 𝐸𝐹𝑝𝑜𝑚𝑝𝑎𝑔𝑒+ 𝑊𝑊𝑚3 × 𝐸𝐹𝑡𝑟𝑎𝑖𝑡𝑒𝑚𝑒𝑛𝑡 
 
f) Investissements et services financiers 
𝐸𝑖𝑛𝑣𝑒𝑠𝑡𝑖𝑠𝑠𝑒𝑚𝑒𝑛𝑡𝑠=
∑
𝑝𝑙𝑎𝑐𝑒𝑚𝑒𝑛𝑡𝑠
𝑀𝑜𝑛𝑡𝑎𝑛𝑡𝑖𝑛𝑣𝑒𝑠𝑡𝑖× 𝐸𝐹𝑓𝑖𝑛𝑎𝑛𝑐𝑒 
 
• 
Peut inclure impact carbone lié aux investissements (fonds non durables vs durables). 
 
2) Crédits / actions positives 
𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛= 𝑆𝑎𝑟𝑏𝑟𝑒𝑠_𝑝𝑙𝑎𝑛𝑡𝑒ˊ𝑠+ 𝑆𝑝𝑜𝑡𝑎𝑔𝑒𝑟𝑠+ 𝑆𝑧𝑜𝑛𝑒𝑠_𝑣𝑒ˊ𝑔𝑒ˊ𝑡𝑎𝑙𝑖𝑠𝑒ˊ𝑒𝑠 
𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠=
∑
𝑚𝑒𝑠𝑢𝑟𝑒𝑠
(𝐸ˊ𝑛𝑒𝑟𝑔𝑖𝑒_𝑟𝑒𝑛𝑜𝑢𝑣𝑒𝑙𝑎𝑏𝑙𝑒+ 𝑅𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛_𝑑𝑒ˊ𝑐ℎ𝑒𝑡𝑠+ 𝑇𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡_𝑑𝑢𝑟𝑎𝑏𝑙𝑒
+ 𝐴𝑙𝑖𝑚𝑒𝑛𝑡𝑎𝑡𝑖𝑜𝑛_𝑙𝑜𝑐𝑎𝑙𝑒) 
 
• 
Inclut panneaux solaires, compostage, vélo, covoiturage, achats durables, réduction viande. 
 
3) Impact net 
𝐸𝑛𝑒𝑡= 𝐸𝑠𝑜𝑢𝑟𝑐𝑒𝑠−(𝑆𝑠𝑒ˊ𝑞𝑢𝑒𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛+ 𝑅𝑟𝑒ˊ𝑑𝑢𝑐𝑡𝑖𝑜𝑛𝑠) 
 
• 
𝐸𝑛𝑒𝑡< 0: ménage ou organisation net-négatif. 
• 
Sinon, 𝐸𝑛𝑒𝑡= émissions annuelles nettes. 
 
4) Normalisation / indicateurs 
• 
Par personne du ménage : 𝐸/𝑝𝑒𝑟𝑠𝑜𝑛𝑛𝑒= 𝐸𝑛𝑒𝑡/𝑁𝑝𝑒𝑟𝑠𝑜𝑛𝑛𝑒𝑠 
• 
Par m² de logement : 𝐸/𝑚2 = 𝐸𝑛𝑒𝑡/𝑆𝑢𝑟𝑓𝑎𝑐𝑒 
• 
Par km transporté : 𝐸/𝑘𝑚= 𝐸𝑡𝑟𝑎𝑛𝑠𝑝𝑜𝑟𝑡/𝑘𝑚𝑡𝑜𝑡𝑎𝑙 
 
5) Qualité des données et incertitude 
• 
Documenter facteurs d’émission (EF) et sources pour chaque poste. 
• 
Indiquer Data Quality Index (0–1) par poste. 
• 
Fournir fourchette d’incertitude (%) et propagation sur 𝐸𝑛𝑒𝑡. 
 
 


9. Évaluation de l'empreinte carbone d’une activités précise 
Adapté à tout type d'organisation 
Contexte 
Les activités de rencontre regroupent : réunions, congrès, séminaires, conférences, ateliers, formations, 
événements, assemblées, salons, forums, rencontres conviviales, célébrations, lancements, consultations 
publiques, etc. 
Ces activités génèrent une empreinte carbone souvent sous-estimée, provenant de sources directes (transport, 
énergie) et indirectes (alimentation, matériels, hébergement). 
Cet outil permet à toute organisation, indépendamment de sa taille et de son secteur, de mesurer et réduire cet 
impact. 
PARTIE 1 : DONNÉES DE BASE OBLIGATOIRES 
1.1 Caractéristiques de l'événement 
Critère 
Description 
Unités 
Adaptabilité 
Type d'événement 
Réunion, 
conférence, 
atelier, 
formation, 
assemblée, festival, célébration, congrès 
Catégorie 
Tous secteurs 
Nombre de participants 
Total attendu ou réel 
Personnes Tous secteurs 
Nombre de jours 
Durée de l'événement 
Jours 
Tous secteurs 
Nombre de sessions/demi-
journées 
Si pertinent pour durée partielle 
Sessions 
Tous secteurs 
Localisation 
Adresse ou région 
Adresse 
Tous secteurs 
Type de lieu 
Intérieur (bâtiment existant), extérieur, hybride, 
virtuel 
Catégorie 
Tous secteurs 
Distance moyenne estimée 
des participants 
Calculée après collecte des trajets 
km 
Tous secteurs 
 
 
 


1.2 Format et modalités 
Critère 
Description 
Unités 
Adaptabilité 
Format 
Présentiel, virtuel, hybride 
Catégorie 
Tous secteurs 
Présence 
d'hébergement 
Oui/Non — certains participants restent une nuit 
ou plus 
Oui/Non 
Grands 
événements 
Nombre de nuits 
Moyenne par participant 
Nuits 
Avec hébergement 
Récurrence annuelle 
Événement 
ponctuel, 
annuel, 
mensuel, 
hebdomadaire 
Fréquence Tous secteurs 
Public cible 
Employés, membres, clients, public général 
Catégorie 
Tous secteurs 
 
PARTIE 2 : TRANSPORT ET MOBILITÉ 
2.1 Transports des participants 
C'est souvent le poste majeur (40-70% de l'empreinte d'un événement). 
Critère 
Description 
Collecte 
Notes 
Mode de transport 
utilisé 
Voiture personnelle, transports 
publics (bus, train), avion, vélo, 
marche 
Nombre 
de 
personnes 
par 
mode 
Si possible : sonder les 
participants ou estimer 
Kilométrage total 
Distance moyenne × nombre de 
participants par mode 
km 
Différencier les modes 
Carburant 
pour 
voitures 
Essence, 
diesel, 
électrique, 
hybride, GPL 
Nombre 
de 
véhicules par type 
Ou 
consommation 
moyenne en l/100km 
Trajets 
domicile-
venue 
Distance parcourue 
km 
Demander aux participants 
lors de l'inscription 
Trajets 
retour 
domicile 
Idem 
km 
Souvent oublié ! 
Trajets 
pendant 
l'événement 
Excursions, visites, déplacements 
inter-sites 
km 
Transports 
supplémentaires organisés 


Trajets aériens 
Nombre de personnes, distance, 
classe de voyage 
Personnes × km 
Multiplicateur : éco vs 
business 
Moyens de transport 
des orateurs 
Souvent déplacement spécifique 
km 
À documenter séparément 
Covoiturage organisé Nombre 
de 
personnes 
ayant 
covoituré vs trajet seul 
Personnes 
Facteur de réduction 
Transports 
publics 
fournis 
Navettes gratuites, passes de 
transport incluses 
Nombre 
d'utilisations 
Facteur de réduction 
Stationnement 
Nombre de places, tarif, impact 
sur choix modal 
Places 
Influence : voiture vs 
transport public 
Facteurs d'émission de référence (Québec) : 
• 
Voiture essence moyenne : ~2,3 kg CO₂/L ≈ 230 g CO₂/km (4-5 L/100km) 
• 
Voiture diesel : ~2,7 kg CO₂/L ≈ 250 g CO₂/km 
• 
Voiture électrique : ~80 g CO₂/km (électricité québécoise) 
• 
Train régional : ~50 g CO₂/km/personne 
• 
Bus urbain : ~100 g CO₂/km/personne 
• 
Avion court-courrier (< 500 km) : ~250 g CO₂/km/personne 
• 
Avion moyen-courrier (500-1500 km) : ~180 g CO₂/km/personne 
• 
Avion long-courrier (> 1500 km) : ~150 g CO₂/km/personne 
2.2 Transport de marchandises et matériel 
Critère 
Description 
Collecte 
Notes 
Matériel expédié avant 
Documents, 
affiches, 
équipements, 
décor 
km 
ou 
poids 
Source → lieu 
Approvisionnement 
alimentation 
Distance 
parcourue 
par 
distributeurs/fournisseurs 
km 
Peut être significatif 
Transports urgents 
Express, courrier express 
% 
du 
matériel 
Multiplicateur 
carbone 


Élimination post-événement Déchets transportés, recyclage collecté 
km 
et 
tonnes 
Vers 
recyclerie, 
décharge 
 
PARTIE 3 : ALIMENTATION ET RESTAURATION 
3.1 Repas et collations 
Critère 
Description 
Collecte 
Notes 
Nombre de repas servis 
Petit-déj, 
déjeuner, 
dîner, 
souper, collations 
Nombre total 
Par type de repas 
Nombre de participants 
par repas 
Tous 
ne 
mangent 
pas 
nécessairement 
Personnes 
Estimer 
assistances 
réelles 
Menu proposé 
Plats, portions, sources de 
protéines 
Description 
Viande, poisson, végé, 
vegan 
Part de plats viande 
% repas avec viande / poisson 
% 
Principal levier 
Part 
de 
plats 
végétariens/végans 
% 
repas 
sans 
protéines 
animales 
% 
Réduction clé 
Part de poisson 
% repas avec poisson 
% 
Émission intermédiaire 
Source des aliments : local 
% produits de la région (< 200 
km) 
% 
Plus bas carbone 
Source 
des 
aliments 
: 
régional 
% produits de la province / 
pays 
% 
Carbone moyen 
Source 
des 
aliments 
: 
importé 
% produits importés (> 1500 
km) 
% 
Carbone plus haut 
Produits biologiques 
% du total alimentaire 
% 
Réduction estimée : 10-
15% 
Emballages alimentaires 
Vaisselle jetable vs réutilisable, 
matériau 
Nombre / type 
Plastique, 
carton, 
porcelaine, etc. 


Gaspillage alimentaire 
Part estimée des restes non 
consommés 
% du total 
À minimiser 
Boissons 
Eau en bouteille, café, thé, jus, 
alcool 
Nombre 
de 
contenants 
Bouteille 
plastique 
= 
high carbone 
Conditionnement 
des 
boissons 
Bouteilles 
réutilisables 
vs 
jetables 
% 
Facteur majeur 
 
Facteurs d'émission alimentaires (moyennes) : 
• 
Viande bovine : ~25 kg CO₂/kg (production, transport) 
• 
Viande porcine : ~12 kg CO₂/kg 
• 
Poulet : ~6 kg CO₂/kg 
• 
Poisson d'élevage : ~15 kg CO₂/kg 
• 
Produits laitiers : ~3-4 kg CO₂/kg 
• 
Légumes/fruits locaux : ~0,5-1 kg CO₂/kg 
• 
Légumes/fruits importés : ~2-3 kg CO₂/kg 
• 
Eau en bouteille (1L plastique) : ~0,3 kg CO₂/L (transport inclus) 
• 
Café (1 tasse) : ~0,1-0,2 kg CO₂ 
3.2 Partenaires alimentaires 
Critère 
Description 
Collecte 
Notes 
Catérer local 
Nombre de partenaires issus de 
la région 
Oui/Non, 
nombre 
Soutien local + réduction 
carbone 
Fournisseur certifié durable Bio, 
commerce 
équitable, 
certification 
Oui/Non 
À valoriser 
Distance 
moyenne 
des 
fournisseurs 
Adresse 
du 
catérer 
ou 
fournisseur 
km 
Moins de 100 km = idéal 
 
 


PARTIE 4 : INFRASTRUCTURE ET ÉNERGIE 
4.1 Lieu de l'événement 
Critère 
Description 
Collecte 
Notes 
Surface utilisée 
Salles, toilettes, cuisines, accueil 
m² 
Impact 
énergétique 
Type de bâtiment 
Neuf, ancien, rénové, temporaire, 
tente 
Catégorie 
Efficacité 
énergétique 
Chauffage/refroidissement 
Déjà en place vs temporaire 
kWh ou approx 
Chiffrer si possible 
Éclairage 
DEL, halogène, autre ; naturel vs 
artificiel 
Heures 
d'utilisation 
Durée et intensité 
Eau chaude 
Douches, toilettes, cuisine 
m³ ou litres 
Si applicable 
Consommation 
électrique 
globale 
Appareils, audiovisuel, cuisine, 
charges 
kWh 
Facturer 
si 
possible 
Facteurs régionaux : 
• 
Électricité québécoise : ~15-20 g CO₂/kWh (très bas carbone) 
• 
Chauffage gaz : ~200 g CO₂/kWh 
• 
Chauffage fioul : ~280 g CO₂/kWh 
4.2 Équipements audiovisuels et technologiques 
Critère 
Description 
Collecte 
Notes 
Projecteurs/écrans 
Nombre, durée d'utilisation Heures 
Consommation variable 
Sonorisation 
Amplificateurs, 
microphones 
Heures 
Énergie supplémentaire 
Vidéoconférence 
(pour 
hybride) 
Serveurs, encodage vidéo 
Heures 
× 
participants 
Empreinte numériques 
Éclairage scénique 
Projecteurs spécialisés 
Heures 
Si 
spectacle/grande 
conférence 


Enregistrement/diffusion 
en 
direct 
Stockage données, bande 
passante 
Heures 
de 
streaming 
Numérique = carbone 
distribué 
 
PARTIE 5 : MATÉRIELS ET CONSOMMABLES 
5.1 Supports de communication 
Critère 
Description 
Collecte 
Notes 
Documents imprimés 
Programmes, agendas, notes 
Nombre 
de 
feuilles 
A4, couleur, pages 
Affiches et signalisation 
Bandeaux, 
panneaux 
directionnels 
Nombre 
Matériau : papier vs 
vinyle 
Badges/accréditations 
Supports, cordons, épingles 
Nombre 
Plastique, carton 
Matériel 
promotionnel/cadeaux 
Articles 
publicitaires, 
souvenirs 
Articles 
T-shirt, mugs, stylos, 
etc. 
Mobilier temporaire 
Tables, 
chaises, 
tentes, 
structures 
Unités 
Loué ou acheté neuf 
Points d'attention : 
• 
Papier recyclé vs vierge : réduction ~20-30% 
• 
Impression couleur vs N&B : ~2x plus carbone 
• 
Matériel réutilisé des années précédentes : carbone amorti 
5.2 Consommables d'événement 
Critère 
Description 
Collecte 
Notes 
Serviettes, nappes 
Jetables vs réutilisables 
Nombre 
Textile vs papier 
Contenants de boisson Gobelets jetables vs réutilisables 
Nombre 
Plastique, carton, verre 
Articles de nettoyage 
Produits 
chimiques, 
papier 
absorbant 
Liters / unités Persistance 
environnementale 
Fournitures générales Scotch, agrafes, clips, cordes 
Nombre 
Impact faible mais cumulatif 
 


PARTIE 6 : HÉBERGEMENT 
6.1 Si l'événement inclut une ou plusieurs nuits 
Critère 
Description 
Collecte 
Notes 
Type d'hébergement 
Hôtel, auberge, camping, dortoir, 
chez l'habitant 
Catégorie 
Efficacité énergétique 
Distance 
lieu-
hébergement 
Trajets additionnels entre lieu et 
chambre 
km 
Navette 
vs 
taxi/voiture 
Nombre de nuits 
Par participant moyen 
Nuits 
Accumulation 
énergétique 
Taille de l'hébergement Étoiles hôtel, capacité 
Classification 
Corrélation 
avec 
empreinte 
Émissions générées par 
nuit 
Si données disponibles auprès de 
l'établissement 
kg 
CO₂/nuit/personne 
Demander 
au 
partenaire 
Benchmark hébergement : 
• 
Hôtel 5 étoiles : ~15-25 kg CO₂/nuit/personne 
• 
Hôtel 3 étoiles : ~8-12 kg CO₂/nuit/personne 
• 
Auberge simple : ~5-8 kg CO₂/nuit/personne 
• 
Camping/gîte : ~2-4 kg CO₂/nuit/personne 
6.2 Services à l'hébergement 
Critère 
Description 
Collecte 
Notes 
Petit-déjeuner fourni 
Oui/Non, inclus dans nuitée 
Oui/Non 
Énergie/alimentation incluses 
Service de ménage 
Quotidien, sur demande 
Fréquence Impact énergétique et chimique 
Utilisation 
serviettes/linge 
Changement 
quotidien 
vs 
réutilisation 
Fréquence Lavage 
= 
consommation 
eau/énergie 
Climatisation/chauffage 
Utilisé durant séjour 
Heures 
Variation saisonnière 
 
 


PARTIE 7 : GESTION DES DÉCHETS 
7.1 Tri et traitement 
Critère 
Description 
Collecte 
Notes 
Réduction des déchets 
Objectif % réduction 
% 
Comparé 
à 
baseline 
attendue 
Tri en source 
Bacs 
recyclage, 
compostage, 
déchets 
Nombre 
de 
catégories 
Facilite collecte 
Récupération compost Résidus alimentaires compostés 
% 
Détournement 
de 
décharge 
Recyclage 
papier/carton 
% du total imprimé 
% 
Valorisation 
post-
événement 
Recyclage 
verres/métaux 
Bouteilles, cannettes, contenants 
% 
Collecte sélective 
Plastiques 
Récupération, 
type 
(PETE, 
HDPE, etc.) 
% 
Valorisation croissante 
Déchets 
non 
recyclables 
% mis en décharge 
% 
À minimiser 
Incinération 
Déchets brûlés vs enfouis 
% 
Plus 
polluant 
que 
décharge 
Hypothèse carbone gestion déchets : 
• 
Recyclage : évite ~60-80% des émissions produites 
• 
Compostage : évite ~80% des émissions (vs décomposition anaérobie) 
• 
Décharge : baseline 100% 
 
 
 
 


7.2 Logistique post-événement 
Critère 
Description 
Collecte Notes 
Transport 
matériel 
résiduel 
Déchets vers centre de tri, incinérateur, 
décharge 
km 
Empreinte finale 
Récupération/réemploi 
Matériel réutilisable pour futurs événements 
% 
Allonge durée de 
vie 
 
PARTIE 8 : COMMUNICATION ET SENSIBILISATION 
8.1 Avant l'événement 
Critère 
Description 
Collecte Notes 
Promotion 
dématérialisée 
% digital vs papier 
% 
Affiche électronique, email 
Incitation covoiturage 
Plateforme, annonces, stationnement 
gratuit covoiturage 
Oui/Non Réduction 
de 
30-50% 
possible 
Transports 
publics 
promus 
Informations, 
passes 
gratuites, 
partenariat 
Oui/Non Facilite accessibilité 
Option 
téléparticipation 
Streaming, 
participation 
virtuelle 
proposée 
Oui/Non Réduit 
empreinte 
certains 
participants 
Communication 
carbone 
Participants informés du bilan CO₂, défis Oui/Non Conscientisation 
8.2 Pendant l'événement 
Critère 
Description 
Collecte Notes 
Tri des déchets visible Signalisation, sensibilisation participants Oui/Non Encourage participation 
Animations durabilité Stands, ateliers, conférences sur carbone 
Oui/Non Renforce messages 
 
 
 


8.3 Après l'événement 
Critère 
Description 
Collecte Notes 
Rapport carbone publié 
Résultats 
communiqués 
à 
participants/public 
Oui/Non Transparence, 
accountability 
Objectifs 
de 
réduction 
2025+ 
Améliorations engagées 
Texte 
Accountability 
Suivi des améliorations 
Mesures implémentées l'année suivante 
Oui/Non Itération continue 
 
PARTIE 9 : DONNÉES OPTIONNELLES POUR ÉVÉNEMENTS COMPLEXES 
9.1 Événements avec spectacle/divertissement 
| Critère | Description | Notes | |---------|-------------|--------|---| | Équipements de scène | Lumières, sonorisation, 
projections | Haute consommation électrique | | Artistes et personnel scénique | Transport des équipes, hôtel | À 
ajouter aux trajets | | Décoration éphémère | Construction, stockage, récupération post-événement | Carbone de 
production | 
9.2 Événements avec excursions/activités 
| Critère | Description | Notes | |---------|-------------|--------|---| | Activités nature | Randonnée, kayak, visite (impact 
faible mais à documenter) | Trajets + équipement | | Visites touristiques | Bus, guide, hébergement temporaire | 
Transports collectifs = avantage | | Activités sportives | Golf, ski, équitation (carbone élevé) | À évaluer 
spécifiquement | 
9.3 Événements récurrents (congrès annuels, formations mensuelles) 
| Critère | Description | Notes | |---------|-------------|--------|---| | Localisation variable | Change de ville chaque 
année | Influence transport international | | Cumulatif annuel | Somme empreinte × récurrence | Peut être 
significatif si fréquent | | Améliorations progressives | Réduits chaque édition | Mesure fidélité à objectifs climat 
| 
 
 
 
 


PARTIE 10 : CALCUL SYNTHÉTIQUE ET RÉSULTATS 
10.1 Formule d'estimation simple 
Empreinte carbone totale (kg CO₂e) =   (Transport participants) +   (Transport matériel) +   (Alimentation) +  
  (Énergie du lieu) +   (Consommables) +   (Hébergement) +   (Équipements) -   (Réductions : covoiturage, virtuel, 
recyclage) 
10.2 Résultats par participant 
Métrique 
Calcul 
Interprétation 
Empreinte totale 
kg CO₂e 
Valeur absolue 
Par participant 
kg CO₂e ÷ nombre participants 
Comparabilité 
Par jour de participation kg CO₂e ÷ (nombre participants × nombre jours) Intensité 
Comparé à référence 
% vs événement type régional 
Benchmark 
 
10.3 Exemple de comparaison 
• 
Événement classique 100 personnes, 2 jours : ~4-8 tonnes CO₂e (40-80 kg/personne) 
• 
Même événement avec optimisations : ~1.5-3 tonnes CO₂e (15-30 kg/personne) : réduction 50-60% 
PARTIE 11 : LEVIERS DE RÉDUCTION UNIVERSELS 
Applicables à tout type d'organisation, tous événements : 
Réduction rapide (faible coût, haut impact) 
1. Promotion transports collectifs : réduction 30-50% émissions transport 
2. Réduction papier : 80% moins carbone dématérialisé 
3. Menu végétarisé : réduction 30-60% alimentation 
4. Récupération déchets : réduit empreinte finale 40-80% 
5. Éliminer boissons en bouteille : utiliser eau du robinet filtrée, carafes réutilisables 
Réduction moyen terme (moyen coût, moyen impact) 
6. Événement hybride : 20-40% participants virtuels = 20-40% transport économisé 


7. Alimentation 100% locale : réduction 40-60% comparé à importé 
8. Hébergement plus proche : réduit trajets additionnels 
9. Électricité renouvelable : si lieu offre option (quasi neutre en Québec déjà) 
Réduction long terme (investissement, transformation) 
10. Virtuel complet : réduction 90%+ émissions (abandon hébergement, transports) 
11. Cyclicité réduite : événements biennaux au lieu annuels 
12. Carbone compensé : projet reforestation régionale (si autres leviers épuisés) 
 
 
 


10. Facteurs d’émission 
 
Combustible 
Facteur 
d’émission 
typique 
Unité 
Source / Référence 
Essence 
(automobile) 
2,307 g CO₂ / 
L 
g CO₂ / litre 
Guide de quantification des émissions — 
Transition énergétique Québec 
(transitionenergetique.gouv.qc.ca) 
Essence 
(automobile) 
(émission GES 
équivalent, tous gaz) 
~2,317 g 
CO₂e / L 
g CO₂e / litre 
Même guide  
Diesel routier 
(véhicule) 
2,6805 kg 
CO₂ / L 
kg CO₂ / litre 
Module parcs de véhicules — Infrastructure 
Canada (logement-
infrastructure.canada.ca) 
Diesel routier (tous 
gaz équivalents) 
~2,747 kg 
CO₂e / L 
kg CO₂e / litre 
Même source. (logement-
infrastructure.canada.ca) 
Propane (véhicule) 
1,515 g CO₂ / 
L 
g CO₂ / litre 
Guide Québec  
Propane (équivalent 
GES) 
~1,539 g 
CO₂e / L 
g CO₂e / litre 
Même guide.  
Essence d’aviation 
2,325 g CO₂ / 
L 
g CO₂ / litre 
Guide Québec  
Kérosène 
(carburéacteur) 
2,560 g CO₂ / 
L 
g CO₂ / litre 
Guide Québec  
Charbon 
(bitumineux, selon 
France) 
~4,0 t CO₂ / 
tep 
tonnes CO₂ par 
tonne 
équivalent 
pétrole (tep) 
Statistiques Clés Climat France 
(statistiques.developpement-
durable.gouv.fr) 
Lignite 
~4,2 t CO₂ / 
tep 
tonne CO₂ / tep Statistiques Clés Climat France 
(statistiques.developpement-
durable.gouv.fr) 
 
 
 


Facteurs d'émission de référence (Québec) : 
• 
Voiture essence moyenne : ~2,3 kg CO₂/L ≈ 230 g CO₂/km (4-5 L/100km) 
• 
Voiture diesel : ~2,7 kg CO₂/L ≈ 250 g CO₂/km 
• 
Voiture électrique : ~80 g CO₂/km (électricité québécoise) 
• 
Train régional : ~50 g CO₂/km/personne 
• 
Bus urbain : ~100 g CO₂/km/personne 
• 
Avion court-courrier (< 500 km) : ~250 g CO₂/km/personne 
• 
Avion moyen-courrier (500-1500 km) : ~180 g CO₂/km/personne 
• 
Avion long-courrier (> 1500 km) : ~150 g CO₂/km/personne 
Facteurs d'émission alimentaires (moyennes) : 
• 
Viande bovine : ~25 kg CO₂/kg (production, transport) 
• 
Viande porcine : ~12 kg CO₂/kg 
• 
Poulet : ~6 kg CO₂/kg 
• 
Poisson d'élevage : ~15 kg CO₂/kg 
• 
Produits laitiers : ~3-4 kg CO₂/kg 
• 
Légumes/fruits locaux : ~0,5-1 kg CO₂/kg 
• 
Légumes/fruits importés : ~2-3 kg CO₂/kg 
• 
Eau en bouteille (1L plastique) : ~0,3 kg CO₂/L (transport inclus) 
• 
Café (1 tasse) : ~0,1-0,2 kg CO₂ 
Facteurs régionaux : 
• 
Électricité québécoise : ~15-20 g CO₂/kWh (très bas carbone) 
• 
Chauffage gaz : ~200 g CO₂/kWh 
• 
Chauffage fioul : ~280 g CO₂/kWh 
Benchmark hébergement : 
• 
Hôtel 5 étoiles : ~15-25 kg CO₂/nuit/personne 


• 
Hôtel 3 étoiles : ~8-12 kg CO₂/nuit/personne 
• 
Auberge simple : ~5-8 kg CO₂/nuit/personne 
• 
Camping/gîte : ~2-4 kg CO₂/nuit/personne 
 
 
