import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import floorPlanImage from '../../assets/FloorPlan.png';
import { FLOOR_PLANS_DATA } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
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
      {/* 1. HERO SECTION (CLEAR VIBRANT IMAGE BANNER WITH OVERLAY) */}
      <section className="page-hero-section floor-plans-hero-section theme-section-dark">
        {/* Background Architectural Image */}
        <div className="fp-hero-video-bg">
          <img
            src={floorPlanImage}
            alt="Y2R Heights Floor Plans Banner"
            className="fp-hero-img"
          />
          <div className="fp-hero-overlay">
            <h1 className="fp-hero-overlay-title">
              DISCOVER YOUR OPTIMAL <span className="fp-gold-text">FLOOR_PLAN</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE BLUEPRINTS GALLERY (DARK BACKGROUND) */}
      <section className="section-padding theme-section-dark floor-plans-gallery-section">
        <ArchitecturalBg variant="floorplans_gallery" />
        <div className="container-custom">
          <SectionHeading
            number="01"
            badge="CAD Schematics"
            title="Interactive Floor Schematics."
            subtitle="Filter by commercial zone and click any blueprint card to open high-resolution CAD schematics."
            align="center"
            theme="dark"
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
                <div
                  className="card akshat-card"
                  onClick={() => {
                    navigate(`/floor-plans/${plan.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="card-image-container akshat-card-image-container">
                    <img
                      src={plan.blueprintUrl}
                      alt={`${plan.floor} - ${plan.purpose}`}
                      className="akshat-card-img"
                    />
                    <span className="akshat-card-badge">{plan.floor}</span>
                  </div>
                  <p className="card-title akshat-card-title">{plan.purpose}</p>
                  <p className="card-des akshat-card-des">
                    {plan.description}
                  </p>
                </div>
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

