import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Car,
  Footprints,
  Building2,
  Route,
  CheckCircle2,
  ChevronRight,
  Download,
  MapPin,
  Maximize2,
  Phone,
  ShieldCheck,
  Sparkles,
  X
} from 'lucide-react';
import { ARRIVAL_FEATURES, PROJECT_INFO } from '../../data/projectData';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import TiltCard from '../../components/TiltCard/TiltCard';
import CTASection from '../../components/CTASection/CTASection';
import './ArrivalDetail.css';

export default function ArrivalDetail({ onOpenEnquiry, onOpenBrochure }) {
  const { id } = useParams();
  const navigate = useNavigate();

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

  // Find feature by id, default to first if not found
  const featureIndex = (ARRIVAL_FEATURES || []).findIndex((f) => f.id === id);
  const feature = featureIndex !== -1 ? ARRIVAL_FEATURES[featureIndex] : (ARRIVAL_FEATURES?.[0] || {});

  // Adjacent features
  const prevFeature = featureIndex > 0 ? ARRIVAL_FEATURES[featureIndex - 1] : null;
  const nextFeature = featureIndex < (ARRIVAL_FEATURES?.length - 1) ? ARRIVAL_FEATURES[featureIndex + 1] : null;

  // Other features for bottom grid (excluding current)
  const otherFeatures = (ARRIVAL_FEATURES || []).filter((f) => f.id !== feature.id);

  const renderIcon = (iconName, size = 20) => {
    switch (iconName) {
      case 'footprints':
        return <Footprints size={size} className="text-gold" />;
      case 'building':
        return <Building2 size={size} className="text-gold" />;
      case 'route':
        return <Route size={size} className="text-gold" />;
      case 'car':
      default:
        return <Car size={size} className="text-gold" />;
    }
  };

  return (
    <div className="arrival-detail-page-root">
      {/* 1. HERO & BREADCRUMB SECTION */}
      <section className="arrival-detail-hero-section theme-section-dark">
        <ArchitecturalBg variant="floorplans_hero" />
        <div className="container-custom arrival-detail-hero-container">
          {/* Top Bar: Back Link & Breadcrumbs */}
          <div className="minimal-hero-top-bar">
            <div className="minimal-nav-group">
              <Link to="/" className="minimal-back-btn">
                <ArrowLeft size={15} />
                <span>Home</span>
              </Link>
              <div className="breadcrumb-trail">
                <Link to="/" className="breadcrumb-link">Overview</Link>
                <ChevronRight size={13} className="breadcrumb-separator" />
                <span className="breadcrumb-category">Arrival Experience</span>
                <ChevronRight size={13} className="breadcrumb-separator" />
                <span className="breadcrumb-current">{feature.level}</span>
              </div>
            </div>

            <div className="minimal-rera-badge">
              <ShieldCheck size={14} className="text-gold" />
              <span>UP RERA: <strong>{PROJECT_INFO.reraNumber}</strong></span>
            </div>
          </div>

          {/* Title Header */}
          <div className="arrival-detail-hero-title-area">
            <div className="arrival-detail-badge-row">
              <span className="gold-pill-badge">{feature.badge || 'Transit Feature'}</span>
              <span className="arrival-structure-pill">{PROJECT_INFO.name} • Infrastructure</span>
            </div>

            <h1 className="arrival-detail-page-title">
              {feature.level}
            </h1>

            <p className="arrival-detail-page-tagline">
              {feature.tagline || feature.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN DETAIL SHOWCASE (SPLIT TWO-COLUMNS) */}
      <section className="section-padding theme-section-light arrival-detail-main-section">
        <ArchitecturalBg variant="retail_showcase" />
        <div className="container-custom">
          <div className="arrival-detail-grid">
            {/* Left Column: Image Frame & Quick Actions */}
            <div className="arrival-detail-media-col">
              <RevealOnScroll animation="fade-right">
                <TiltCard maxTilt={6} scale={1.01} className="arrival-media-tilt">
                  <div className="arrival-detail-image-box">
                    <img
                      src={feature.image}
                      alt={`${feature.level} - Architectural View`}
                      className="arrival-detail-img"
                    />

                    <div className="arrival-image-corner-tag">
                      {renderIcon(feature.icon, 16)}
                      <span>{feature.capacity}</span>
                    </div>

                    <button
                      type="button"
                      className="arrival-zoom-trigger-btn"
                      onClick={() => setIsZoomOpen(true)}
                      aria-label="View Fullscreen High-Res Image"
                    >
                      <Maximize2 size={16} />
                      <span>Full View</span>
                    </button>
                  </div>
                </TiltCard>

                {/* Direct Actions Card */}
                <div className="arrival-actions-panel architectural-grid-gold">
                  <div className="arrival-actions-header">
                    <Sparkles size={16} className="text-gold" />
                    <h3 className="actions-panel-title">Explore & Book Consult</h3>
                  </div>

                  <div className="arrival-actions-btn-group">
                    <button
                      onClick={() => {
                        if (typeof onOpenEnquiry === 'function') {
                          onOpenEnquiry(`Arrival & Transit: ${feature.level}`);
                        }
                      }}
                      className="btn-primary arrival-action-btn"
                    >
                      <span>Inquire About {feature.level}</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      onClick={() => {
                        if (typeof onOpenBrochure === 'function') {
                          onOpenBrochure();
                        }
                      }}
                      className="btn-secondary arrival-action-btn"
                    >
                      <Download size={15} className="text-gold" />
                      <span>Project Brochure</span>
                    </button>

                    {feature.floorPlanLink && (
                      <Link
                        to={feature.floorPlanLink}
                        className="btn-secondary arrival-action-btn"
                      >
                        <span>View Related Plan</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    )}
                  </div>

                  <div className="arrival-contact-quick-link">
                    <Phone size={14} className="text-gold" />
                    <span>Toll Free Direct: <a href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}>{PROJECT_INFO.tollFree}</a></span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Architectural Narrative, Highlights & Technical Specifications */}
            <div className="arrival-detail-content-col">
              <RevealOnScroll animation="fade-left">
                {/* Narrative Overview */}
                <div className="arrival-narrative-card">
                  <span className="arrival-section-eyebrow">Architectural Specification</span>
                  <h2 className="arrival-content-heading">Engineering & Circulation Overview</h2>
                  <p className="arrival-long-desc">
                    {feature.longDescription || feature.description}
                  </p>
                </div>

                {/* Key Architectural Highlights */}
                {feature.highlights && feature.highlights.length > 0 && (
                  <div className="arrival-highlights-card">
                    <h3 className="arrival-subheading">Key Design Highlights</h3>
                    <ul className="arrival-highlights-list">
                      {feature.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="arrival-highlight-item">
                          <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Specifications Grid */}
                {feature.techSpecs && feature.techSpecs.length > 0 && (
                  <div className="arrival-specs-card">
                    <h3 className="arrival-subheading">Technical Matrix & Infrastructure</h3>
                    <div className="arrival-specs-table-grid">
                      {feature.techSpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="arrival-spec-cell">
                          <span className="arrival-spec-label">{spec.label}</span>
                          <span className="arrival-spec-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ADJACENT NAVIGATION STRIP */}
      <section className="adjacent-navigation-section theme-section-dark">
        <div className="container-custom">
          <div className="adjacent-nav-wrapper">
            {prevFeature ? (
              <Link to={prevFeature.slug} className="adjacent-nav-link prev">
                <ArrowLeft size={16} className="adjacent-icon text-gold" />
                <div className="adjacent-text-wrap">
                  <span className="adjacent-dir-label">Previous Feature</span>
                  <span className="adjacent-plan-name">{prevFeature.level}</span>
                </div>
              </Link>
            ) : <div className="adjacent-nav-placeholder" />}

            <Link to="/" className="adjacent-nav-center">
              <span>Back to Home Overview</span>
            </Link>

            {nextFeature ? (
              <Link to={nextFeature.slug} className="adjacent-nav-link next">
                <div className="adjacent-text-wrap text-right">
                  <span className="adjacent-dir-label">Next Feature</span>
                  <span className="adjacent-plan-name">{nextFeature.level}</span>
                </div>
                <ArrowRight size={16} className="adjacent-icon text-gold" />
              </Link>
            ) : <div className="adjacent-nav-placeholder" />}
          </div>
        </div>
      </section>

      {/* 4. OTHER ARRIVAL & TRANSIT FEATURES */}
      <section className="section-padding theme-section-dark other-features-section">
        <ArchitecturalBg variant="home_parking" />
        <div className="container-custom">
          <div className="other-features-header">
            <span className="gold-pill-badge">Explore More</span>
            <h2 className="other-features-title">Other Arrival & Transit Features</h2>
          </div>

          <div className="other-features-grid">
            {otherFeatures.map((item) => (
              <div
                key={item.id}
                className="other-feature-card"
                onClick={() => {
                  navigate(item.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                role="button"
                tabIndex={0}
              >
                <div className="other-feature-media">
                  <img
                    src={item.image}
                    alt={item.level}
                    className="other-feature-img"
                  />
                  <span className="other-feature-badge">{item.badge}</span>
                </div>
                <div className="other-feature-content">
                  <div className="other-feature-icon-row">
                    {renderIcon(item.icon, 16)}
                    <span className="other-feature-subtitle">{item.capacity}</span>
                  </div>
                  <h4 className="other-feature-title">{item.level}</h4>
                  <p className="other-feature-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <CTASection
        title={`Experience ${feature.level} in Person`}
        subtitle="Where Vision Meets Value."
        description="Schedule a private guided walkthrough with our commercial architects and advisory team on Main Kursi Road."
        onOpenEnquiry={() => {
          if (typeof onOpenEnquiry === 'function') {
            onOpenEnquiry(`Site Visit: ${feature.level}`);
          }
        }}
      />

      {/* Fullscreen High-Res Zoom Modal */}
      {isZoomOpen && (
        <div className="arrival-zoom-modal-backdrop" onClick={() => setIsZoomOpen(false)}>
          <div className="arrival-zoom-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="arrival-zoom-close-btn"
              onClick={() => setIsZoomOpen(false)}
              aria-label="Close Fullscreen View"
            >
              <X size={20} />
            </button>
            <div className="arrival-zoom-media-frame">
              <img
                src={feature.image}
                alt={`${feature.level} High-Resolution`}
                className="arrival-zoom-full-img"
              />
            </div>
            <div className="arrival-zoom-caption-bar">
              <div className="arrival-zoom-caption-left">
                <span className="zoom-caption-title">{feature.level}</span>
                <span className="zoom-caption-sub">{feature.capacity} • {feature.badge}</span>
              </div>
              <div className="zoom-caption-right">
                <MapPin size={13} className="text-gold" />
                <span>CP-02, Kursi Road, Lucknow</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

