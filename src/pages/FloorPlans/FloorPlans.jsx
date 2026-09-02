import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FLOOR_PLANS_DATA } from '../../data/projectData';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './FloorPlans.css';

export default function FloorPlans({ onOpenEnquiry, onSelectFloorPlan }) {
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
    if (filter === 'residential') return plan.id === '3-7th' || plan.id === 'terrace';
    return true;
  });

  return (
    <div className="floor-plans-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="floorplans_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Architectural Blueprints</span>
            <h1 className="page-hero-title">
              A Space for <br />
              <span className="gold-gradient-text">Every Ambition.</span>
            </h1>
            <p className="page-hero-desc">
              Explore the structured vertical integration of Y2R Heights across 7 dedicated spatial tiers. Click any floor to inspect detailed blueprint schematics.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding theme-section-dark floor-plans-gallery-section">
        <ArchitecturalBg variant="floorplans_gallery" />
        <div className="container-custom">
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

          {/* Blueprint Cards Grid */}
          <div className="blueprint-cards-grid">
            {filteredPlans.map((plan, idx) => (
              <RevealOnScroll
                key={plan.id}
                animation="fade-up"
                delay={idx * 80}
                className="blueprint-card-col"
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.02}
                  className="blueprint-tilt-card cursor-pointer"
                  onClick={() => onSelectFloorPlan(plan)}
                >
                  <div className="blueprint-card-inner blueprint-grid">
                    <div className="blueprint-card-header">
                      <span className="bp-floor-tag">{plan.floor}</span>
                      <span className="bp-code-tag">SCHEMATIC-{plan.id.toUpperCase()}</span>
                    </div>

                    <div className="bp-preview-image-wrap">
                      <img src={plan.blueprintUrl} alt={plan.purpose} />
                      <div className="bp-click-overlay">
                        <span className="bp-overlay-btn">Inspect Blueprint</span>
                      </div>
                    </div>

                    <h3 className="bp-purpose-title">{plan.purpose}</h3>
                    <p className="bp-description">{plan.description}</p>

                    <div className="bp-specs-list">
                      {plan.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="bp-spec-item">
                          <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bp-card-footer">
                      <span className="bp-open-cue">
                        Click to view full schematic
                      </span>
                      <ArrowUpRight size={16} className="text-gold" />
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Request Architectural Floor Sheets & Layouts"
        subtitle="Where Vision Meets Value."
        description="Receive detailed spatial plans, column grids, and custom sizing options from our architectural advisory team."
        onOpenEnquiry={() => onOpenEnquiry("Floor Plans")}
      />
    </div>
  );
}

