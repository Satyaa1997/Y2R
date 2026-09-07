import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  Building2,
  Layers,
  Store,
  Sparkles,
  Home,
  DoorClosed,
  Zap,
  ShieldCheck,
  MapPin,
  Download,
  Eye,
  X,
  FileCheck2,
  FileText
} from 'lucide-react';
import { PROJECT_INFO, PROJECT_SPECIFICATIONS } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import proImage from '../../assets/pro.jpg';
import buildingImage from '../../assets/earthquack.png';
import premiumDocImg from '../../assets/Premium.JPG';
import highStreetImg from '../../assets/Stone.jfif';
import boutiqueImg from '../../assets/wire.jfif';
import foodCourtImg from '../../assets/exaust.jpg';
import './Project.css';

export default function Project({ onOpenEnquiry, onOpenBrochure }) {
  const [activeTab, setActiveTab] = useState('all');
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [heroTextFaded, setHeroTextFaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroTextFaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard Escape listener for Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSpecModalOpen) {
        setIsSpecModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSpecModalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isSpecModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSpecModalOpen]);

  // Structural & Engineering Highlights
  const coreEngineeringSpecs = [
    {
      id: 'structure',
      title: 'Earthquake-Resistant RCC Frame',
      desc: 'Engineered as per Zone-III BIS norms with high-grade Fe-550 TMT steel and M30 concrete for maximum structural integrity.',
      icon: Building2,
      stat: 'Zone-III'
    },
    {
      id: 'elevators',
      title: '6 High-Speed Passenger & Service Lifts',
      desc: 'Automatic passenger and dedicated service elevators (Otis / Schindler / Kone) with ARD emergency lowering systems.',
      icon: Zap,
      stat: '6 Lifts'
    },
    {
      id: 'power',
      title: '100% DG Power Backup',
      desc: 'Silent dual-fuel diesel generator sets providing uninterrupted round-the-clock emergency power for all critical common utilities.',
      icon: Sparkles,
      stat: '100% DG'
    },
    {
      id: 'fire',
      title: 'Multi-Tier Fire Suppression System',
      desc: 'Hydrant rings, automatic ceiling sprinklers, addressable smoke detectors, and dual fire exits per floor meeting NBC norms.',
      icon: ShieldCheck,
      stat: 'NBC Rated'
    }
  ];

  // Visual highlights for common area finishes
  const commonFinishes = [
    {
      title: 'Natural Stone Cladding',
      location: 'Ground Floor & Façade',
      desc: 'Double-height entrance lobby finished with imported Italian marble, polished granite accents, and high-impact toughened glass curtain walls.',
      image: highStreetImg
    },
    {
      title: 'Heavy-Duty Wiring & Safety',
      location: 'All Distribution Lines',
      desc: 'FR/FRLS copper wiring throughout the project (Havells / Polycab / RR Kabel) with dedicated MCBs and earth-leakage breakers per unit.',
      image: boutiqueImg
    },
    {
      title: 'Dedicated Kitchen Exhaust Ducts',
      location: '8th Floor & Terrace',
      desc: 'Commercial-grade kitchen ventilation risers, heavy grease-trapping conduits, and high-volume air handlers for the food concourse.',
      image: foodCourtImg
    }
  ];

  // Convert to Array safely even if PROJECT_SPECIFICATIONS is an Object or null
  const normalizedSpecs = useMemo(() => {
    if (!PROJECT_SPECIFICATIONS) return [];
    if (Array.isArray(PROJECT_SPECIFICATIONS)) return PROJECT_SPECIFICATIONS;
    if (typeof PROJECT_SPECIFICATIONS === 'object') {
      return Object.entries(PROJECT_SPECIFICATIONS).map(([key, val]) => ({
        id: val.id || key,
        ...val
      }));
    }
    return [];
  }, []);

  // Filter safely without crashing
  const floorSpecs = useMemo(() => {
    if (activeTab === 'all') return normalizedSpecs;
    return normalizedSpecs.filter((s) => s.id === activeTab);
  }, [normalizedSpecs, activeTab]);

  return (
    <div className="about-project-page-root">
      {/* HERO SECTION */}
      <section
        className="page-hero-section about-project-hero-section theme-section-dark"
        onClick={() => setHeroTextFaded((prev) => !prev)}
      >
        <div className="about-project-hero-bg">
          <img
            src={proImage}
            alt="Y2R Heights Project Master View"
            className="about-project-hero-img"
          />
          <div className={`about-project-hero-overlay ${heroTextFaded ? 'hero-mobile-faded' : ''}`} />
        </div>

        <div className="container-custom page-hero-content about-project-hero-content">
          <div className={`about-project-hero-text-wrap ${heroTextFaded ? 'hero-mobile-faded' : ''}`}>
            <h1 className="about-project-hero-title">
              Engineering & Space Specifications. <br />
              <span className="about-project-hero-highlight">Architectural Perfection at Y2R Heights.</span>
            </h1>
            <p className="about-project-hero-desc">
              A comprehensive technical overview of structural engineering, building envelope, MEP systems, and material specifications governing all 11 levels of Y2R Heights, Jankipuram Scheme, Lucknow.
            </p>
            <div className="page-hero-meta about-project-hero-meta">
              <span className="meta-item">
                <MapPin size={16} /> Kursi Road, Jankipuram Scheme
              </span>
              <span className="meta-sep">•</span>
              <span className="meta-item">
                <ShieldCheck size={16} /> G+8 Structure + Double Basement
              </span>
              <span className="meta-sep">•</span>
              <span className="meta-item">
                <FileCheck2 size={16} /> UP RERA: {PROJECT_INFO?.reraNumber}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: Core Civil & Structural Engineering */}
      <section className="section-padding theme-section-light civil-eng-section">
        <div className="container-custom">
          <div className="civil-eng-layout">
            <div className="civil-eng-text">
              <SectionHeading
                number="01"
                badge="Civil Engineering"
                title="Built for Longevity & Seismic Resilience"
                subtitle="Structural integrity meets contemporary engineering standards."
                align="left"
                theme="light"
              />
              <p className="civil-eng-lead">
                Every square foot of <strong>Y2R Heights</strong> has been engineered to surpass NBC (National Building Code) guidelines. The structure employs a cast-in-place reinforced concrete moment-resisting frame founded on deep piling to withstand seismic tremors and high wind loads.
              </p>

              <div className="civil-eng-specs-grid">
                {coreEngineeringSpecs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="civil-spec-card">
                      <div className="civil-spec-header">
                        <div className="civil-spec-icon-box">
                          <Icon size={20} />
                        </div>
                        <span className="civil-spec-badge">{item.stat}</span>
                      </div>
                      <h4 className="civil-spec-title">{item.title}</h4>
                      <p className="civil-spec-desc">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="civil-eng-media">
              <RevealOnScroll animation="fade-left">
                <div className="civil-media-frame">
                  <img
                    src={buildingImage}
                    alt="Y2R Heights Engineering Detail"
                    className="civil-media-img"
                  />
                  <div className="civil-media-overlay">
                    <span className="civil-media-tag">Engineering Blueprints</span>
                    <h4 className="civil-media-title">M30 Grade Concrete & Fe-550 TMT Steel</h4>
                    <p className="civil-media-caption">Strict on-site third-party quality testing at every pour stage.</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Official Premium Specifications Document Teaser */}
      <section className="section-padding theme-section-dark spec-document-section">
        <ArchitecturalBg variant="project_vision" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Official Document"
            title="Premium Specifications Sheet"
            subtitle="Verified architectural specifications directly from the Y2R Heights master planning docket."
            align="center"
            theme="dark"
          />

          <div className="spec-doc-banner">
            <div className="spec-doc-preview-col">
              <div
                className="spec-doc-thumbnail-wrap"
                onClick={() => setIsSpecModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setIsSpecModalOpen(true)}
                aria-label="Click to enlarge Specifications Document"
              >
                <img
                  src={premiumDocImg}
                  alt="Y2R Heights Premium Specifications Sheet Preview"
                  className="spec-doc-thumbnail"
                />
                <div className="spec-doc-hover-overlay">
                  <Eye size={28} className="text-gold" />
                  <span className="spec-hover-text">Click to View Full Document</span>
                </div>
                <div className="spec-doc-badge-pill">
                  <FileCheck2 size={14} /> Official Master Sheet
                </div>
              </div>
            </div>

            <div className="spec-doc-info-col">
              <div className="spec-doc-meta-badge">Verified RERA Documentation</div>
              <h3 className="spec-doc-heading">Comprehensive Specification Breakdown</h3>
              <p className="spec-doc-paragraph">
                The official document details flooring compositions, electrical fittings, plumbing provisions, exterior glazing, lift shafts, and fire safety systems specified for every zone across the 11 floors.
              </p>

              <div className="spec-doc-points-list">
                <div className="spec-point-row">
                  <div className="point-dot" />
                  <span><strong>Structure:</strong> Earthquake-resistant RCC frame structure with brick infill walls.</span>
                </div>
                <div className="spec-point-row">
                  <div className="point-dot" />
                  <span><strong>Flooring:</strong> Double-charged vitrified tiles in suites, antiskid tiles in wet areas, granite in lobbies.</span>
                </div>
                <div className="spec-point-row">
                  <div className="point-dot" />
                  <span><strong>Electricals:</strong> Modular switches (Anchor / Havells), copper wiring, pre-installed AC conduits.</span>
                </div>
                <div className="spec-point-row">
                  <div className="point-dot" />
                  <span><strong>Plumbing:</strong> CPVC/UPVC pipelines with premium CP fittings (Jaquar / Grohe / Roca or equivalent).</span>
                </div>
              </div>

              <div className="spec-doc-cta-group">
                <button
                  type="button"
                  onClick={() => setIsSpecModalOpen(true)}
                  className="btn-primary"
                >
                  <Eye size={16} />
                  <span>View Full-Size Document</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenBrochure}
                  className="btn-secondary"
                >
                  <Download size={16} />
                  <span>Download Project Dossier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Common Area Finishes */}
      <section className="section-padding theme-section-light finishes-section">
        <div className="container-custom">
          <SectionHeading
            number="03"
            badge="Material Grade"
            title="Premium Finishes & Utility Infrastructure"
            subtitle="Curated materials hand-picked for durability, aesthetics, and low ongoing maintenance."
            align="center"
            theme="light"
          />

          <div className="finishes-cards-grid">
            {commonFinishes.map((item) => (
              <div key={item.title} className="finish-showcase-card">
                <div className="finish-card-media">
                  <img src={item.image} alt={item.title} className="finish-card-img" />
                  <span className="finish-card-tag">{item.location}</span>
                </div>
                <div className="finish-card-body">
                  <h4 className="finish-card-title">{item.title}</h4>
                  <p className="finish-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: Floor-wise Granular Specifications */}
      <section className="section-padding theme-section-dark floor-specs-section">
        <ArchitecturalBg variant="project_why" />
        <div className="container-custom">
          <SectionHeading
            number="04"
            badge="Granular Matrix"
            title="Floor-Wise Specification Matrix"
            subtitle="Browse detailed technical inclusions classified by each operational segment."
            align="center"
            theme="dark"
          />

          {/* Interactive Filter Pills */}
          <div className="spec-tabs-bar" role="tablist" aria-label="Specification Categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              className={`spec-tab-pill ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <Layers size={14} />
              <span>All Levels</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'retail'}
              className={`spec-tab-pill ${activeTab === 'retail' ? 'active' : ''}`}
              onClick={() => setActiveTab('retail')}
            >
              <Store size={14} />
              <span>Retail (LG & UG)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'offices'}
              className={`spec-tab-pill ${activeTab === 'offices' ? 'active' : ''}`}
              onClick={() => setActiveTab('offices')}
            >
              <DoorClosed size={14} />
              <span>Corporate (1st & 2nd)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'studios'}
              className={`spec-tab-pill ${activeTab === 'studios' ? 'active' : ''}`}
              onClick={() => setActiveTab('studios')}
            >
              <Home size={14} />
              <span>Studios (3rd to 7th)</span>
            </button>
          </div>

          {/* Detailed Cards List */}
          <div className="spec-blocks-container">
            {floorSpecs && floorSpecs.length > 0 ? (
              floorSpecs.map((spec, index) => {
                const FloorIcon = spec.icon || FileText;
                return (
                  <div key={spec.id || index} className="spec-block-card">
                    <div className="spec-block-header">
                      <div className="spec-block-title-wrap">
                        <div className="spec-block-icon">
                          <FloorIcon size={22} />
                        </div>
                        <div>
                          <span className="spec-block-level">{spec.level}</span>
                          <h3 className="spec-block-title">{spec.category || spec.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Highlights Grid */}
                    {spec.details && (
                      <div className={`spec-detail-grid ${spec.details?.length > 2 ? 'three-cols' : 'two-cols'}`}>
                        {spec.details.map((detail, dIdx) => (
                          <div key={detail.label || dIdx} className="spec-detail-item">
                            <span className="detail-item-label">{detail.label}</span>
                            <span className="detail-item-value">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Comprehensive Item Breakdown Table */}
                    {spec.items && spec.items.length > 0 && (
                      <div className="spec-table-wrap">
                        <table className="spec-common-table">
                          <thead>
                            <tr>
                              <th style={{ width: '28%' }}>Component</th>
                              <th style={{ width: '42%' }}>Technical Specification</th>
                              <th style={{ width: '30%' }}>Approved Brand / Grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            {spec.items.map((it, itIdx) => (
                              <tr key={it.feature || itIdx}>
                                <td className="spec-feature-name">
                                  <strong>{it.feature}</strong>
                                </td>
                                <td className="spec-feature-desc">{it.spec}</td>
                                <td className="spec-feature-brand">
                                  <span className="brand-tag">{it.brand || 'ISI Standard / Premium'}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#94A3B8' }}>
                No specifications found for this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GLOBAL CTA SECTION */}
      <CTASection
        badge="Verify & Validate"
        title="Request Official Technical Dossier"
        subtitle="Where Vision Meets Value."
        description="Our civil engineering and planning team is available to assist you with detailed structural blueprints, floor MEP drawings, and material compliance certificates."
        primaryBtnText="Speak With Project Engineers"
        primaryBtnAction={() => onOpenEnquiry && onOpenEnquiry('Project Specifications Inquiry')}
        secondaryBtnText="Download Master Brochure"
        secondaryBtnAction={onOpenBrochure}
      />

      {/* FULLSCREEN PURE IMAGE PREVIEW MODAL */}
      {isSpecModalOpen &&
        createPortal(
          <div
            className="spec-fullscreen-overlay"
            onClick={() => setIsSpecModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen Document View"
          >
            <button
              type="button"
              className="spec-fullscreen-close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsSpecModalOpen(false);
              }}
              aria-label="Close Fullscreen View"
              title="Close (Esc)"
            >
              <X size={28} />
            </button>

            <div
              className="spec-floating-pill"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="spec-pill-title">Y2R Heights • Premium Specifications Sheet</span>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onOpenBrochure) onOpenBrochure();
                }}
                className="spec-pill-download-btn"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </button>
            </div>

            <div
              className="spec-fullscreen-img-wrap"
              onClick={() => setIsSpecModalOpen(false)}
            >
              <img
                src={premiumDocImg}
                alt="Y2R Heights Official Premium Specifications Sheet - Full Screen View"
                className="spec-pure-fullscreen-img"
                onClick={(e) => e.stopPropagation()}
                title="Y2R Heights Specifications"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}