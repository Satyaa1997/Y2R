import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import floorPlanVideo from '../../assets/FloorPlan.mp4';
import {
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Car,
  ShieldCheck
} from 'lucide-react';
import { FLOOR_PLANS_DATA, PROJECT_INFO } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './FloorPlans.css';

export default function FloorPlans({ onOpenEnquiry }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All 7 Levels' },
    { id: 'retail', label: 'Retail (LGF/UGF)' },
    { id: 'commercial', label: 'Commercial & Banquet' },
    { id: 'fnb', label: 'Food Court' },
    { id: 'residential', label: 'Studio Apartments' }
  ];

  const filteredPlans = FLOOR_PLANS_DATA.filter((plan) => {
    if (filter === 'all') return true;
    if (filter === 'retail') return plan.id === 'lgf' || plan.id === 'ugf';
    if (filter === 'commercial') return plan.id === '1st' || plan.id === '2nd';
    if (filter === 'fnb') return plan.id === 'service';
    if (filter === 'residential') return plan.id === '3to7' || plan.id === 'terrace';
    return true;
  });

  return (
    <div className="floor-plans-page-root">
      {/* 1. HERO SECTION (CLEAR VIBRANT VIDEO BANNER) */}
      <section className="page-hero-section floor-plans-hero-section theme-section-dark">
        {/* Background Architectural Video & Soft Overlay */}
        <div className="fp-hero-video-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="fp-hero-video"
          >
            <source src={floorPlanVideo} type="video/mp4" />
          </video>
          <div className="fp-hero-video-overlay" />
        </div>

        <div className="container-custom page-hero-content fp-hero-content">
          <span className="gold-badge">Architectural Blueprints</span>
          <h1 className="page-hero-title">
            A Space for <br />
            <span className="hero-title-highlight">Every Ambition.</span>
          </h1>
          <p className="page-hero-desc">
            Explore the structured vertical integration of Y2R Heights across 7 dedicated spatial tiers. Click any floor to inspect detailed blueprint schematics.
          </p>

          <div className="fp-hero-stats-row">
            <div className="fp-hero-stat">
              <Layers size={16} className="text-gold" />
              <span>7 Spatial Tiers</span>
            </div>
            <div className="fp-hero-stat">
              <Car size={16} className="text-gold" />
              <span>Double Basement Parking</span>
            </div>
            <div className="fp-hero-stat">
              <ShieldCheck size={16} className="text-gold" />
              <span>UP RERA: {PROJECT_INFO.reraNumber}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE BLUEPRINTS GALLERY (WHITE / LIGHT BACKGROUND) */}
      <section className="section-padding theme-section-white floor-plans-gallery-section">
        <ArchitecturalBg variant="floorplans_gallery" />
        <div className="container-custom">
          <SectionHeading
            number="01"
            badge="CAD Schematics"
            title="Interactive Floor Schematics."
            subtitle="Filter by commercial zone and click any blueprint card to open high-resolution CAD schematics."
            align="center"
            theme="light"
          />

          {/* Filter Tabs on Light Background */}
          <div className="filter-tabs-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Blueprint Cards Grid on Light Background */}
          <div className="blueprint-cards-grid">
            {filteredPlans.map((plan, idx) => (
              <RevealOnScroll
                key={plan.id}
                animation="fade-up"
                delay={idx * 60}
                className="blueprint-card-col"
              >
                <TiltCard
                  maxTilt={6}
                  scale={1.015}
                  className="blueprint-tilt-card cursor-pointer"
                  onClick={() => {
                    navigate(`/floor-plans/${plan.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="blueprint-dark-card blueprint-grid">
                    <div className="blueprint-card-header">
                      <div className="bp-floor-meta">
                        <span className="bp-floor-tag">{plan.floor}</span>
                        <span className="bp-purpose-sub">{plan.purpose}</span>
                      </div>
                      <span className="bp-code-tag">{plan.code || `LVL-${plan.id.toUpperCase()}`}</span>
                    </div>

                    <div className="bp-preview-image-wrap">
                      <img src={plan.blueprintUrl} alt={plan.purpose} />
                      <div className="bp-click-overlay">
                        <span className="bp-overlay-btn">
                          <span>Inspect CAD Map</span>
                          <ArrowUpRight size={13} />
                        </span>
                      </div>
                      <div className="bp-cad-indicator-chip">
                        <Layers size={11} className="text-gold" />
                        <span>CAD Map Ready</span>
                      </div>
                    </div>

                    <p className="bp-description">{plan.description}</p>

                    <div className="bp-specs-list">
                      {plan.highlights.slice(0, 2).map((h, hIdx) => (
                        <div key={hIdx} className="bp-spec-item">
                          <CheckCircle2 size={13} className="text-gold flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bp-card-footer">
                      <span className="bp-open-cue">
                        View Level Details
                      </span>
                      <div className="bp-arrow-bubble">
                        <ArrowUpRight size={14} className="text-gold" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <CTASection
        theme="light"
        title="Request Architectural Floor Sheets & Layouts"
        subtitle="Where Vision Meets Value."
        description="Receive detailed spatial plans, column grids, and custom sizing options from our architectural advisory team."
        onOpenEnquiry={() => onOpenEnquiry("Floor Plans")}
      />
    </div>
  );
}

