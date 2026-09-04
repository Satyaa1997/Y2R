import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Maximize2,
  Ruler,
  Layers,
  DoorOpen,
  Building,
  Phone,
  ShieldCheck,
  MapPin,
  Sparkles,
  Zap,
  Car,
  Download,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Briefcase,
  X
} from 'lucide-react';
import { FLOOR_PLANS_DATA, PROJECT_INFO } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import TiltCard from '../../components/TiltCard/TiltCard';
import CTASection from '../../components/CTASection/CTASection';
import './FloorPlanDetail.css';

export default function FloorPlanDetail({ onOpenEnquiry, onOpenBrochure }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeView, setActiveView] = useState('map'); // 'map' | 'render'
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    if (isZoomOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsZoomOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isZoomOpen]);

  // Find plan by id, default to first if not found
  const planIndex = FLOOR_PLANS_DATA.findIndex((p) => p.id === id);
  const plan = planIndex !== -1 ? FLOOR_PLANS_DATA[planIndex] : FLOOR_PLANS_DATA[0];

  // Adjacent plans
  const prevPlan = planIndex > 0 ? FLOOR_PLANS_DATA[planIndex - 1] : null;
  const nextPlan = planIndex < FLOOR_PLANS_DATA.length - 1 ? FLOOR_PLANS_DATA[planIndex + 1] : null;

  // Other plans for bottom grid (excluding current)
  const otherPlans = FLOOR_PLANS_DATA.filter((p) => p.id !== plan.id);

  const currentImage = activeView === 'map' && plan.mapImage ? plan.mapImage : plan.blueprintUrl;

  return (
    <div className="floor-detail-page-root">
      {/* 1. HERO & BREADCRUMB SECTION (DARK LUXURY - MINIMAL COMPACT) */}
      <section className="floor-detail-hero-section theme-section-dark">
        <ArchitecturalBg variant="floorplans_hero" />
        <div className="container-custom floor-detail-hero-container">
          {/* Minimal Top Bar: Back Link, Breadcrumbs & RERA Badges */}
          <div className="minimal-hero-top-bar">
            <div className="minimal-nav-group">
              <Link to="/floor-plans" className="minimal-back-btn">
                <ArrowLeft size={15} />
                <span>All Floor Plans</span>
              </Link>
              <nav className="minimal-breadcrumb" aria-label="Breadcrumb">
                <Link to="/" className="breadcrumb-link">Home</Link>
                <ChevronRight size={13} className="breadcrumb-separator" />
                <Link to="/floor-plans" className="breadcrumb-link">Floor Plans</Link>
                <ChevronRight size={13} className="breadcrumb-separator" />
                <span className="breadcrumb-current">{plan.floor}</span>
              </nav>
            </div>

            <div className="minimal-meta-group">
              <span className="minimal-rera-badge">UP RERA: {PROJECT_INFO.reraNumber}</span>
              <span className="minimal-code-badge">{plan.code || `Y2R-${plan.id.toUpperCase()}`}</span>
            </div>
          </div>

          {/* Minimal Title & Header */}
          <div className="minimal-hero-main">
            <div className="minimal-title-wrapper">
              <h1 className="minimal-hero-title">
                {plan.floor} <span className="minimal-purpose-text">— {plan.purpose}</span>
              </h1>
            </div>
          </div>

          {/* Minimal Floor Selector Bar */}
          <div className="minimal-floor-switcher-bar">
            <div className="minimal-switcher-scroll">
              {FLOOR_PLANS_DATA.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    navigate(`/floor-plans/${p.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`minimal-floor-pill ${p.id === plan.id ? 'active' : ''}`}
                >
                  <span className="pill-floor-name">{p.floor}</span>
                  <span className="pill-dot">•</span>
                  <span className="pill-purpose-name">{p.purpose}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN BLUEPRINT & SPECIFICATION SHOWCASE (LIGHT THEME FOR CRISP MAP VISIBILITY) */}
      <section className="section-padding theme-section-white floor-detail-main-section">
        <ArchitecturalBg variant="floorplans_gallery" />
        <div className="container-custom">
          
          {/* TOP: MAIN CAD BLUEPRINT & 3D VISUALIZER */}
          <div className="detail-visual-main-wrapper">
            {/* View Switcher Tabs (CAD Map vs 3D Perspective) */}
            <div className="detail-view-switcher">
              <button
                type="button"
                onClick={() => setActiveView('map')}
                className={`detail-view-tab ${activeView === 'map' ? 'active' : ''}`}
              >
                <Layers size={16} />
                <span>Architectural CAD Map</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView('render')}
                className={`detail-view-tab ${activeView === 'render' ? 'active' : ''}`}
              >
                <Sparkles size={16} />
                <span>3D Perspective Render</span>
              </button>
            </div>

            {/* Map Display Frame */}
            <div className="detail-blueprint-frame">
              <div className="blueprint-stamp-overlay">
                <span className="stamp-long-text">
                  {activeView === 'map' ? 'SANCTIONED CAD MAP • Y2R HEIGHTS' : '3D ARCHITECTURAL PERSPECTIVE'}
                </span>
                <span className="stamp-short-text">
                  {activeView === 'map' ? 'CAD MAP' : '3D VIEW'}
                </span>
              </div>

              <img
                src={currentImage}
                alt={`${plan.floor} - ${plan.purpose} Blueprint Map`}
                className="detail-blueprint-img"
                onClick={() => {
                  setActiveView('map');
                  setIsZoomOpen(true);
                }}
              />

              {/* Zoom Action Cue Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveView('map');
                  setIsZoomOpen(true);
                }}
                className="detail-zoom-trigger-btn"
                title="Inspect Fullscreen Blueprint Map"
                aria-label="Inspect Fullscreen Blueprint Map"
              >
                <Maximize2 size={15} />
                <span className="zoom-btn-text">Inspect Fullscreen</span>
              </button>

              <div className="blueprint-frame-meta">
                <span className="meta-text">SCALE: 1:100 CAD FIT</span>
                <span className="meta-text">LEVEL: {plan.floor}</span>
                <span className="meta-text">STATUS: APPROVED</span>
              </div>
            </div>
          </div>

          {/* BELOW THE MAIN IMAGE: ALL SPECIFICATIONS & DETAILS */}
          <div className="detail-below-image-content">
            
            {/* 1. Floor Layout Vision & Recommended Occupants */}
            <div className="detail-narrative-and-occupants-row">
              <div className="detail-narrative-card">
                <div className="narrative-badge-row">
                  <span className="gold-badge">Spatial Architecture</span>
                  <span className="floor-zoning-tag">{plan.zoning || plan.purpose}</span>
                </div>
                <h2 className="detail-section-title">Floor Layout & Architectural Vision</h2>
                <p className="detail-narrative-p">
                  {plan.longDescription || plan.description}
                </p>
              </div>

              {plan.idealOccupants && (
                <div className="detail-occupants-card">
                  <div className="occupants-icon">
                    <Briefcase size={20} className="text-gold" />
                  </div>
                  <div className="occupants-content">
                    <span className="occupants-label">Recommended Formats & Occupants</span>
                    <span className="occupants-text">{plan.idealOccupants}</span>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Key Spatial Specifications (6-Box Grid) */}
            <div className="detail-metrics-matrix">
              <h3 className="matrix-heading">Key Spatial Specifications</h3>
              <div className="matrix-grid">
                <div className="matrix-card">
                  <div className="matrix-card-icon">
                    <Ruler size={18} className="text-gold" />
                  </div>
                  <div className="matrix-card-body">
                    <span className="matrix-label">Clear Height</span>
                    <span className="matrix-val">{plan.slabHeight || "14 Ft Slab-to-Slab"}</span>
                  </div>
                </div>

                <div className="matrix-card">
                  <div className="matrix-card-icon">
                    <Building size={18} className="text-gold" />
                  </div>
                  <div className="matrix-card-body">
                    <span className="matrix-label">Zoning Format</span>
                    <span className="matrix-val">{plan.unitType || "Commercial Space"}</span>
                  </div>
                </div>

                <div className="matrix-card">
                  <div className="matrix-card-icon">
                    <DoorOpen size={18} className="text-gold" />
                  </div>
                  <div className="matrix-card-body">
                    <span className="matrix-label">Vertical Ingress</span>
                    <span className="matrix-val">{plan.ingress || "Dual High-Speed Lifts"}</span>
                  </div>
                </div>

                <div className="matrix-card">
                  <div className="matrix-card-icon">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div className="matrix-card-body">
                    <span className="matrix-label">Frontage Exposure</span>
                    <span className="matrix-val">{plan.frontage || "Main Kursi Road Frontage"}</span>
                  </div>
                </div>

                <div className="matrix-card">
                  <div className="matrix-card-icon">
                    <Zap size={18} className="text-gold" />
                  </div>
                  <div className="matrix-card-body">
                    <span className="matrix-label">Power Redundancy</span>
                    <span className="matrix-val">{plan.powerBackup || "100% DG Power Backup"}</span>
                  </div>
                </div>

                <div className="matrix-card">
                  <div className="matrix-card-icon">
                    <Car size={18} className="text-gold" />
                  </div>
                  <div className="matrix-card-body">
                    <span className="matrix-label">Basement Parking</span>
                    <span className="matrix-val">{plan.parkingInfo || "Double Basement Access"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Level Inclusions & Layout Highlights */}
            <div className="detail-checklist-card">
              <h3 className="checklist-heading">Level Inclusions & Layout Highlights</h3>
              <div className="checklist-items">
                {plan.highlights.map((item, idx) => (
                  <div key={idx} className="checklist-item-row">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Consultation & Action Card */}
            <div className="detail-action-card">
              <div className="action-card-header">
                <h4 className="action-card-title">Reserve Space on {plan.floor}</h4>
                <p className="action-card-desc">
                  Connect directly with our project advisory team to receive customized floor plates, price sheets, and unit availability.
                </p>
              </div>

              <div className="action-card-buttons-row">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${plan.floor} - ${plan.purpose}`)}
                  className="btn-primary action-btn"
                >
                  <span>Request CAD Drawings & Pricing</span>
                  <ArrowUpRight size={16} />
                </button>

                <button
                  onClick={() => onOpenBrochure && onOpenBrochure()}
                  className="btn-secondary action-btn"
                >
                  <Download size={15} />
                  <span>Download Brochure</span>
                </button>

                <a
                  href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
                  className="btn-secondary action-btn"
                >
                  <Phone size={15} className="text-gold" />
                  <span>{PROJECT_INFO.tollFree}</span>
                </a>
              </div>

              <div className="action-card-rera">
                <ShieldCheck size={14} className="text-gold" />
                <span>UP RERA Sanctioned Commercial Project: {PROJECT_INFO.reraNumber}</span>
              </div>
            </div>

          </div>

          {/* 3. ADJACENT LEVEL NAVIGATION */}
          <div className="adjacent-nav-bar">
            {prevPlan ? (
              <Link to={`/floor-plans/${prevPlan.id}`} className="adjacent-nav-link prev">
                <ArrowLeft size={16} className="text-gold" />
                <div className="adjacent-link-text">
                  <span className="nav-sub">Previous Level</span>
                  <span className="nav-title">{prevPlan.floor} ({prevPlan.purpose})</span>
                </div>
              </Link>
            ) : (
              <div className="adjacent-nav-placeholder" />
            )}

            <Link to="/floor-plans" className="adjacent-nav-center">
              <span>View All 7 Levels</span>
            </Link>

            {nextPlan ? (
              <Link to={`/floor-plans/${nextPlan.id}`} className="adjacent-nav-link next">
                <div className="adjacent-link-text">
                  <span className="nav-sub">Next Level</span>
                  <span className="nav-title">{nextPlan.floor} ({nextPlan.purpose})</span>
                </div>
                <ArrowRight size={16} className="text-gold" />
              </Link>
            ) : (
              <div className="adjacent-nav-placeholder" />
            )}
          </div>

        </div>
      </section>

      {/* 4. EXPLORE OTHER FLOOR PLANS SECTION */}
      <section className="section-padding theme-section-dark other-floors-section">
        <ArchitecturalBg variant="floorplans_other" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Vertical Architecture"
            title="Explore Other Integrated Levels."
            subtitle="Discover how Y2R Heights integrates retail, commercial halls, banquets, and residential suites."
            align="center"
            theme="dark"
          />

          <div className="other-floors-grid">
            {otherPlans.map((otherPlan, idx) => (
              <RevealOnScroll
                key={otherPlan.id}
                animation="fade-up"
                delay={idx * 60}
                className="other-floor-col"
              >
                <TiltCard
                  maxTilt={6}
                  scale={1.02}
                  className="other-floor-tilt cursor-pointer"
                  onClick={() => {
                    navigate(`/floor-plans/${otherPlan.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="other-floor-card">
                    <div className="other-card-img-wrap">
                      <img src={otherPlan.blueprintUrl} alt={otherPlan.purpose} />
                      <span className="other-floor-tag">{otherPlan.floor}</span>
                    </div>
                    <div className="other-card-body">
                      <h4 className="other-card-title">{otherPlan.purpose}</h4>
                      <p className="other-card-desc">{otherPlan.description}</p>
                      <div className="other-card-footer">
                        <span>Explore Floor Plan</span>
                        <ArrowRight size={14} className="text-gold" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <CTASection
        theme="light"
        title={`Explore Spaces on ${plan.floor}`}
        subtitle="Direct Commercial Advisory"
        description={`Connect with our advisory team for detailed floor plates, CAD drawings, and unit reservations on ${plan.floor}.`}
        onOpenEnquiry={() => onOpenEnquiry && onOpenEnquiry(`${plan.floor} - ${plan.purpose}`)}
      />

      {/* 6. PURE FULLSCREEN BLUEPRINT LIGHTBOX (PORTAL TO DOCUMENT.BODY, NO SCROLLERS) */}
      {isZoomOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="blueprint-pure-fullscreen"
          onClick={() => setIsZoomOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${plan.floor} Fullscreen Map`}
        >
          {/* Top Floating Info & Close Button */}
          <div className="fullscreen-floating-top" onClick={(e) => e.stopPropagation()}>
            <div className="fullscreen-pill-badge">
              <span className="gold-dot" />
              <span className="fullscreen-plan-name">{plan.floor} — {plan.purpose}</span>
              <span className="fullscreen-plan-code">CAD: {plan.code || plan.id.toUpperCase()}</span>
            </div>

            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="fullscreen-close-btn"
              title="Close Fullscreen (Esc)"
              aria-label="Close Fullscreen Map"
            >
              <X size={18} />
              <span className="close-btn-label">Close Map</span>
            </button>
          </div>

          {/* Fullscreen Image Stage (Full Viewport, Zero Scrollbars) */}
          <div className="fullscreen-img-stage" onClick={() => setIsZoomOpen(false)}>
            <img
              src={plan.mapImage || currentImage}
              alt={`${plan.floor} Architectural CAD Map Fullscreen`}
              className="fullscreen-map-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Bottom Floating Info Pill */}
          <div className="fullscreen-floating-bottom" onClick={(e) => e.stopPropagation()}>
            <span className="fullscreen-info-text">
              Sanctioned Architectural Layout • UP RERA: {PROJECT_INFO.reraNumber}
            </span>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

