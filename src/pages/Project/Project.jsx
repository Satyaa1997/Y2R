import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Building,
  ShieldCheck,
  Car,
  MapPin,
  Landmark,
  Layers,
  Sparkles,
  Zap,
  DoorOpen,
  Ruler
} from 'lucide-react';
import {
  PROJECT_INFO,
  SPACES_CATEGORIES,
  AMENITIES_LIST,
  PARKING_LEVELS,
  WHY_Y2R_POINTS,
  PROJECT_SPECIFICATIONS
} from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Project.css';

export default function Project({ onOpenEnquiry }) {
  const [activeSpecTab, setActiveSpecTab] = useState('structure');
  return (
    <div className="project-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="project_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Project Vision</span>
            <h1 className="page-hero-title">
              Designed for Business. <br />
              <span className="gold-gradient-text">Built for Growth.</span>
            </h1>
            <p className="page-hero-desc">
              Y2R Heights brings thoughtfully planned commercial and lifestyle spaces together in one contemporary destination along the Jankipuram Extension–Kursi Road corridor.
            </p>
            <div className="page-hero-meta">
              <span className="meta-item">
                <MapPin size={15} className="text-gold" /> Kursi Road | Jankipuram Extension, Lucknow
              </span>
              <span className="meta-sep">•</span>
              <span className="meta-item">
                <ShieldCheck size={15} className="text-gold" /> RERA: {PROJECT_INFO.reraNumber}
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Deep Vision Section */}
      <section className="section-padding theme-section-dark project-vision-section">
        <ArchitecturalBg variant="project_vision" />
        <div className="container-custom">
          <div className="vision-grid">
            <RevealOnScroll animation="fade-right" className="vision-media-col">
              <TiltCard maxTilt={6} scale={1.01} className="vision-tilt">
                <div className="vision-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1400&auto=format&fit=crop"
                    alt="Y2R Heights Master Elevation"
                    className="vision-img"
                  />
                  <div className="vision-image-caption">
                    <span className="gold-badge">Architectural Landmark</span>
                    <p>Kursi Road • Jankipuram Scheme, Lucknow</p>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>

            <div className="vision-text-col">
              <SectionHeading
                number="01"
                badge="Master Vision"
                title="Elevating Northern Lucknow's Business Landscape"
                subtitle="High-Frontage Commerce • Boutique Offices • Modern Studios"
                align="left"
                theme="dark"
              />

              <RevealOnScroll animation="fade-up" delay={150}>
                <p className="vision-p">
                  Strategically situated on Kursi Road in close proximity to Sector-J Extension, Jankipuram Scheme, Sitapur Road, and Outer Ring Road, Y2R Heights is planned to address the growing demand for modern commercial infrastructure and urban residences.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={250}>
                <p className="vision-p">
                  Envisioned as more than another commercial building, it offers a multi-faceted ecosystem uniting high-frontage retail, boutique executive offices, modern studio apartments, culinary food courts, banquet facilities, and dual-level basement parking.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={350}>
                <div className="vision-key-points">
                  <div className="v-point">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span>Thoughtfully planned commercial and lifestyle formats</span>
                  </div>
                  <div className="v-point">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span>Immediate frontage along Kursi Road arterial network</span>
                  </div>
                  <div className="v-point">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span>Engineered for efficiency, footfall and brand prestige</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Spatial Categories */}
      <section className="section-padding theme-section-white project-spaces-section">
        <ArchitecturalBg variant="project_spaces" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Zoning & Formats"
            title="Everything Your Business Needs."
            subtitle="Explore each meticulously planned spatial tier."
            align="center"
            theme="light"
          />

          <div className="spaces-catalog-grid">
            {SPACES_CATEGORIES.map((space, idx) => (
              <RevealOnScroll
                key={space.id}
                animation="fade-up"
                delay={idx * 100}
                className="space-catalog-col"
              >
                <TiltCard maxTilt={8} scale={1.02} className="space-catalog-card">
                  <div className="space-catalog-inner">
                    <div className="space-img-box">
                      <img src={space.image} alt={space.title} />
                      <span className="space-badge-tag">{space.badge}</span>
                    </div>

                    <div className="space-body-box">
                      <h3 className="space-title">{space.title}</h3>
                      <p className="space-desc">{space.description}</p>
                      <p className="space-highlight-line">{space.highlight}</p>

                      <div className="space-footer-link">
                        <Link to={space.slug} className="btn-link">
                          <span>{space.ctaText}</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding theme-section-dark project-amenities-section">
        <ArchitecturalBg variant="project_amenities" />
        <div className="container-custom">
          <SectionHeading
            number="03"
            badge="Infrastructure"
            title="Thoughtfully Planned. Effortlessly Functional."
            subtitle="Engineered for seamless daily operations."
            align="center"
            theme="dark"
          />

          <div className="amenities-grid">
            {AMENITIES_LIST.map((amenity, idx) => (
              <RevealOnScroll
                key={amenity.title}
                animation="fade-up"
                delay={idx * 60}
                className="amenity-col"
              >
                <TiltCard maxTilt={8} scale={1.02} className="amenity-tilt-card">
                  <div className="amenity-card-inner">
                    <div className="amenity-icon-box">
                      <Building size={24} className="text-gold" />
                    </div>
                    <h3 className="amenity-title">{amenity.title}</h3>
                    <p className="amenity-desc">{amenity.description}</p>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Parking Section */}
      <section className="section-padding theme-section-light project-parking-section">
        <ArchitecturalBg variant="project_parking" />
        <div className="container-custom">
          <SectionHeading
            number="04"
            badge="Vehicle Access"
            title="Designed for Effortless Arrival."
            subtitle="Two dedicated basement parking levels support convenient access for occupants and visitors."
            align="center"
            theme="light"
          />

          <div className="parking-slabs-grid">
            {PARKING_LEVELS.map((parking, idx) => (
              <RevealOnScroll
                key={parking.level}
                animation={idx === 0 ? "fade-right" : "fade-left"}
                delay={idx * 120}
                className="parking-col"
              >
                <TiltCard maxTilt={8} scale={1.02} className="parking-tilt-card">
                  <div className="parking-slab-inner architectural-grid-gold">
                    <div className="parking-header">
                      <div className="parking-icon-wrap">
                        <Car size={26} className="text-gold" />
                      </div>
                      <div>
                        <span className="parking-level-badge">{parking.level}</span>
                        <h3 className="parking-capacity">{parking.capacity}</h3>
                      </div>
                    </div>
                    <p className="parking-desc">{parking.description}</p>
                    <div className="parking-specs-row">
                      {parking.specs.map((spec, sIdx) => (
                        <span key={sIdx} className="parking-spec-tag">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Official Engineering & Technical Specifications Section */}
      <section className="section-padding theme-section-white project-specs-section">
        <ArchitecturalBg variant="project_specs" />
        <div className="container-custom">
          <SectionHeading
            number="05"
            badge="Engineering Matrix"
            title="Precision Planning. Premium Specifications."
            subtitle="Explore comprehensive architectural standards, structural engineering, and branded fittings at Y2R Heights."
            align="center"
            theme="light"
          />

          {/* Specification Navigation Tabs */}
          <div className="project-specs-tabs-row">
            <button
              onClick={() => setActiveSpecTab('structure')}
              className={`spec-tab-btn ${activeSpecTab === 'structure' ? 'active' : ''}`}
            >
              <Building size={16} />
              <span>Structure & Foundation</span>
            </button>

            <button
              onClick={() => setActiveSpecTab('retail')}
              className={`spec-tab-btn ${activeSpecTab === 'retail' ? 'active' : ''}`}
            >
              <Layers size={16} />
              <span>Retail (LGF/UGF)</span>
            </button>

            <button
              onClick={() => setActiveSpecTab('banquet')}
              className={`spec-tab-btn ${activeSpecTab === 'banquet' ? 'active' : ''}`}
            >
              <Sparkles size={16} />
              <span>Banquet (620.22 SQ.M.)</span>
            </button>

            <button
              onClick={() => setActiveSpecTab('apartments')}
              className={`spec-tab-btn ${activeSpecTab === 'apartments' ? 'active' : ''}`}
            >
              <DoorOpen size={16} />
              <span>Service Apartments</span>
            </button>

            <button
              onClick={() => setActiveSpecTab('common')}
              className={`spec-tab-btn ${activeSpecTab === 'common' ? 'active' : ''}`}
            >
              <Ruler size={16} />
              <span>Common Areas Table</span>
            </button>

            <button
              onClick={() => setActiveSpecTab('doors')}
              className={`spec-tab-btn ${activeSpecTab === 'doors' ? 'active' : ''}`}
            >
              <ShieldCheck size={16} />
              <span>Doors & Windows</span>
            </button>

            <button
              onClick={() => setActiveSpecTab('mep')}
              className={`spec-tab-btn ${activeSpecTab === 'mep' ? 'active' : ''}`}
            >
              <Zap size={16} />
              <span>Electrical, MEP & EV</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="spec-tab-content-box">
            {activeSpecTab === 'structure' && (
              <div className="spec-items-grid">
                {PROJECT_SPECIFICATIONS.structure.items.map((item, idx) => (
                  <div key={idx} className="spec-feature-card">
                    <div className="spec-card-top">
                      <span className="spec-label-tag">{item.label}</span>
                      <CheckCircle2 size={18} className="text-gold" />
                    </div>
                    <p className="spec-detail-val">{item.value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSpecTab === 'retail' && (
              <div className="spec-items-grid">
                {PROJECT_SPECIFICATIONS.retail.items.map((item, idx) => (
                  <div key={idx} className="spec-feature-card">
                    <div className="spec-card-top">
                      <span className="spec-label-tag">{item.label}</span>
                      <CheckCircle2 size={18} className="text-gold" />
                    </div>
                    <p className="spec-detail-val">{item.value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSpecTab === 'banquet' && (
              <div>
                <div className="spec-banner-note">
                  <span className="gold-badge">Dedicated Second Floor Format</span>
                  <span className="banner-area-highlight">Total Floor Area: {PROJECT_SPECIFICATIONS.banquet.area}</span>
                </div>
                <div className="spec-items-grid">
                  {PROJECT_SPECIFICATIONS.banquet.items.map((item, idx) => (
                    <div key={idx} className="spec-feature-card">
                      <div className="spec-card-top">
                        <span className="spec-label-tag">{item.label}</span>
                        <CheckCircle2 size={18} className="text-gold" />
                      </div>
                      <p className="spec-detail-val">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSpecTab === 'apartments' && (
              <div className="spec-items-grid">
                {PROJECT_SPECIFICATIONS.serviceApartments.items.map((item, idx) => (
                  <div key={idx} className="spec-feature-card">
                    <div className="spec-card-top">
                      <span className="spec-label-tag">{item.label}</span>
                      <CheckCircle2 size={18} className="text-gold" />
                    </div>
                    <p className="spec-detail-val">{item.value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSpecTab === 'common' && (
              <div className="common-areas-table-wrapper">
                <table className="common-areas-table">
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th>Flooring</th>
                      <th>Wall Finish</th>
                      <th>Ceiling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROJECT_SPECIFICATIONS.commonAreas.map((row, idx) => (
                      <tr key={idx}>
                        <td className="area-col-cell">{row.area}</td>
                        <td>{row.flooring}</td>
                        <td>{row.wallFinish}</td>
                        <td>{row.ceiling}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeSpecTab === 'doors' && (
              <div className="spec-items-grid">
                {PROJECT_SPECIFICATIONS.doorsWindows.items.map((item, idx) => (
                  <div key={idx} className="spec-feature-card">
                    <div className="spec-card-top">
                      <span className="spec-label-tag">{item.label}</span>
                      <CheckCircle2 size={18} className="text-gold" />
                    </div>
                    <p className="spec-detail-val">{item.value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSpecTab === 'mep' && (
              <div className="spec-items-grid">
                {PROJECT_SPECIFICATIONS.mep.items.map((item, idx) => (
                  <div key={idx} className="spec-feature-card">
                    <div className="spec-card-top">
                      <span className="spec-label-tag">{item.label}</span>
                      <CheckCircle2 size={18} className="text-gold" />
                    </div>
                    <p className="spec-detail-val">{item.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Banking Approval & Financial Assurance Card */}
          <div className="banking-assurance-card">
            <div className="bank-card-left">
              <div className="bank-logo-emblem">
                <Landmark size={28} className="text-gold" />
              </div>
              <div>
                <h4 className="bank-card-title">Official Financial & Collection Details</h4>
                <p className="bank-card-desc">
                  {PROJECT_INFO.bankAccount.note}
                </p>
              </div>
            </div>

            <div className="bank-details-grid">
              <div className="bank-detail-item">
                <span className="b-label">Account Name</span>
                <span className="b-val">{PROJECT_INFO.bankAccount.name}</span>
              </div>
              <div className="bank-detail-item">
                <span className="b-label">Account Number</span>
                <span className="b-val font-mono">{PROJECT_INFO.bankAccount.accountNumber}</span>
              </div>
              <div className="bank-detail-item">
                <span className="b-label">Bank & Branch</span>
                <span className="b-val">{PROJECT_INFO.bankAccount.bank}, {PROJECT_INFO.bankAccount.branch}</span>
              </div>
              <div className="bank-detail-item">
                <span className="b-label">IFSC Code</span>
                <span className="b-val font-mono">{PROJECT_INFO.bankAccount.ifsc}</span>
              </div>
              <div className="bank-detail-item">
                <span className="b-label">Official Launch Date</span>
                <span className="b-val">{PROJECT_INFO.launchDate}</span>
              </div>
              <div className="bank-detail-item">
                <span className="b-label">RERA Registration</span>
                <span className="b-val font-mono">{PROJECT_INFO.reraNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Y2R Heights */}
      <section className="section-padding theme-section-dark why-section">
        <ArchitecturalBg variant="project_why" />
        <div className="container-custom">
          <SectionHeading
            number="06"
            badge="Core Advantages"
            title="A Location to Grow. A Presence to Remember."
            subtitle="Strategic Location • Versatile Spaces • Premium Planning • Business Visibility"
            align="center"
            theme="dark"
          />

          <div className="why-grid">
            {WHY_Y2R_POINTS.map((pt, idx) => (
              <RevealOnScroll
                key={pt.id}
                animation="fade-up"
                delay={idx * 80}
                className="why-col"
              >
                <div className="why-card">
                  <span className="why-number">{pt.id}</span>
                  <h3 className="why-title">{pt.title}</h3>
                  <p className="why-desc">{pt.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Schedule a Personalized Project Walkthrough"
        subtitle="Where Vision Meets Value."
        description="Connect with our site advisory team to review floor plans, spatial zoning, and availability at Y2R Heights."
        onOpenEnquiry={() => onOpenEnquiry("Project")}
      />
    </div>
  );
}

