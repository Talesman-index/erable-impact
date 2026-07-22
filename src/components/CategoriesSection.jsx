import React, { useState } from 'react';
import { Leaf, ArrowRight, CheckCircle2, Zap, Sprout, Truck, Users } from 'lucide-react';

export default function CategoriesSection({ onStartEval }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      id: 'energie',
      label: 'Énergie & Bâtiments',
      title: 'Performance & Énergie du Bâtiment',
      desc: "Analyse et optimisation des consommations énergétiques des infrastructures publiques, industrielles et privées de vos collectivités et territoires.",
      image: '/images/energie-batiment.jpg',
      points: [
        'Évaluation de l\'efficacité thermique & isolation',
        'Optimisation de l\'électricité et chauffage hydroélectrique',
        'Identification des subventions et plans de rénovation'
      ]
    },
    {
      id: 'agri',
      label: 'Agriculture & Foresterie',
      title: 'Pratiques Agricoles & Conservation Forestière',
      desc: "Valorisation du sol, gestion des rejets et préservation des 60% de couverture forestière du territoire.",
      image: '/images/agricoles-foresterie.jpg',
      points: [
        'Calcul des émissions d\'azote et gestion des engrais',
        'Stockage du carbone dans le sol et les forêts',
        'Protection de la biodiversité locale du Centre-du-Québec'
      ]
    },
    {
      id: 'mobilite',
      label: 'Transports & Mobilité',
      title: 'Flottes & Déplacements Ruraux',
      desc: "Optimisation de la mobilité rurale, carburants alternatifs et réduction des déplacements individuels.",
      image: '/images/flottes-deplacements.jpg',
      points: [
        'Analyse des trajets quotidiens et déplacements de travail',
        'Électrification des véhicules et bornes de recharge',
        'Encouragement du covoiturage et transports collectifs'
      ]
    },
    {
      id: 'communautaire',
      label: 'Milieu Communautaire',
      title: 'Action Citoyenne & Organismes',
      desc: "Engagement des foyers, des écoles et des OBNL pour ancrer des habitudes éco-responsables à grande échelle.",
      image: '/images/action-citoyenne.jpg',
      points: [
        'Sensibilisation et bilans familiaux accessibles en 5 min',
        'Gestion zéro déchet et économie circulaire localisée',
        'Valorisation des initiatives citoyennes du territoire'
      ]
    }
  ];

  const currentTab = tabsData[activeTab];

  return (
    <section id="measure" className="section-padded" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="eco-section-header reveal-on-scroll">
          <div className="eco-pill-badge">
            <span className="eco-badge-icon">
              <Leaf size={14} />
            </span>
            <span>Fonctionnalités &amp; Secteurs</span>
          </div>

          <h2 className="eco-section-title">
            Des outils d'évaluation adaptés à chaque secteur du territoire
          </h2>

          <p className="eco-section-subtitle">
            Sélectionnez un secteur ci-dessous pour découvrir la méthodologie spécifique et mesurer vos impacts avec précision.
          </p>
        </div>

        {/* Dark Green Horizontal Tab Bar */}
        <div className="dark-tab-container reveal-on-scroll">
          {tabsData.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`dark-tab-item ${activeTab === idx ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Showcase Card */}
        <div className="tab-showcase-card reveal-on-scroll reveal-delay-1">
          <div className="tab-showcase-content">
            <h3>{currentTab.title}</h3>
            <p>{currentTab.desc}</p>

            <ul className="tab-showcase-list">
              {currentTab.points.map((pt, i) => (
                <li key={i}>
                  <CheckCircle2 size={20} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <button onClick={onStartEval} className="eco-btn-action">
              <span>Évaluer ce secteur</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="tab-showcase-img-wrap">
            <img 
              src={currentTab.image} 
              alt={currentTab.title} 
              className="tab-showcase-img" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

