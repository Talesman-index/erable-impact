import React from 'react';
import { Leaf, Linkedin, Mail, ExternalLink, Award, Users, Layers, ShieldCheck, Building2 } from 'lucide-react';

export default function AboutSection({ onStartEval }) {
  const teamMembers = [
    {
      name: "Jean-Marc Beaudoin",
      role: "Coordonnateur Transition — CDC L'Érable",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
      linkedin: "#"
    },
    {
      name: "Sophie Tremblay",
      role: "Spécialiste Bilan GES & Analyse ISO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      linkedin: "#"
    },
    {
      name: "Marc-Antoine Roy",
      role: "Responsable Concertation Territoriale",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
      linkedin: "#"
    }
  ];

  const partners = [
    { name: "CDC de L'Érable", logo: "/images/CDCE-horizontal.png", note: "Initiateur du projet" },
    { name: "MRC de L'Érable", logo: null, note: "Partenaire territorial" },
    { name: "Ville de Plessisville", logo: null, note: "Collectivité engagée" },
    { name: "Chaire UQAM", logo: null, note: "Boussole climatique" },
    { name: "Recyc-Québec", logo: null, note: "Soutien transition" }
  ];

  return (
    <section id="regional" className="section-padded" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">

        {/* Part 1: Partners & Alliances */}
        <div className="eco-section-header reveal-on-scroll">
          <div className="eco-pill-badge">
            <span className="eco-badge-icon">
              <Leaf size={14} />
            </span>
            <span>Nos Partenaires &amp; Soutiens</span>
          </div>

          <h2 className="eco-section-title">
            Une alliance solide au service de la transition des collectivités et territoires
          </h2>

          <p className="eco-section-subtitle">
            L'outil d'évaluation GES est né de la collaboration initiée dans la MRC de L'Érable avec les acteurs institutionnels, communautaires et économiques, et est déployable au bénéfice de l'ensemble des territoires et municipalités.
          </p>
        </div>

        {/* Partner Cards Row */}
        <div className="partners-mint-grid reveal-on-scroll reveal-delay-1" style={{ marginBottom: '80px' }}>
          {partners.map((p, idx) => (
            <div key={idx} className="partner-mint-card">
              {p.logo ? (
                <img src={p.logo} alt={p.name} className="partner-mint-logo" />
              ) : (
                <div style={{ background: '#052e1e', color: '#dcfc49', padding: '14px', borderRadius: '50%' }}>
                  <Building2 size={24} />
                </div>
              )}
              <span className="partner-mint-name">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Part 2: Team & Governance Section */}
        <div className="eco-section-header reveal-on-scroll">
          <div className="eco-pill-badge">
            <span className="eco-badge-icon">
              <Users size={14} />
            </span>
            <span>Équipe &amp; Gouvernance</span>
          </div>

          <h2 className="eco-section-title">
            Une équipe engagée pour un impact socioclimatique durable
          </h2>

          <p className="eco-section-subtitle">
            Experts en développement territorial, modélisation GES et accompagnement communautaire réunis pour piloter l'initiative socioclimatique.
          </p>
        </div>

        {/* 3 Team Cards */}
        <div className="team-grid reveal-on-scroll reveal-delay-2">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-avatar-wrapper">
                <img src={member.image} alt={member.name} className="team-avatar-img" />
              </div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>

              <a href={member.linkedin} className="team-social-btn" aria-label={`LinkedIn ${member.name}`}>
                <Linkedin size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Carousel pagination indicators from Samsun design */}
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div>
    </section>
  );
}

