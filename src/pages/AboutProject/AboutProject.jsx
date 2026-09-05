import { useState, useEffect } from 'react';
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
  ArrowRight,
  Eye,
  X,
  FileCheck2,
  Maximize2
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
import './AboutProject.css';

export default function AboutProject({ onOpenEnquiry, onOpenBrochure }) {
  const [activeTab, setActiveTab] = useState('all');
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);

  // Keyboard Escape listener & Body scroll lock for fullscreen modal
  useEffect(() => {
    if (isSpecModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsSpecModalOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSpecModalOpen]);

  const specCategories = [
    { id: 'all', label: 'All Specifications' },
    { id: 'structure', label: 'Structure & Foundations' },
    { id: 'common', label: 'Common Areas' },
    { id: 'retail', label: 'Retail (GF & 1st)' },
    { id: 'banquet', label: 'Banquet (2nd Fl.)' },
    { id: 'apartments', label: 'Service Apartments (3-7th)' },
    { id: 'doors', label: 'Doors & Windows' },
    { id: 'mep', label: 'Electrical & MEP' }
  ];

  return (
    <div className="about-project-page-root">
      {/* Hero Section */}
      <section className="about-project-hero-section theme-section-dark">
        <div className="about-project-hero-bg">
          <img
            src={proImage}
            alt="Y2R Heights Premium Specifications"
            className="about-project-hero-img"
          />
          <div className="about-project-hero-overlay" />
        </div>
        <ArchitecturalBg variant="project_hero" />

        <div className="container-custom about-project-hero-content">
          <RevealOnScroll animation="fade-up">
            <div className="about-project-hero-badge-wrap">
              <span className="gold-badge">Y2R HEIGHTS • ARCHITECTURAL STANDARDS</span>
            </div>
            <h1 className="about-project-hero-title">
              PREMIUM SPECIFICATIONS
            </h1>
            <p className="about-project-hero-desc">
             BIS-compliant engineering with Grade-A structural framing, luxury vitrified finishes, premium Grohe/Jaquar/Roca fittings, and future-ready MEP infrastructure.
            </p>
            <div className="about-project-hero-meta">
              <span className="spec-meta-item">
                <MapPin size={15} className="text-gold" /> Kursi Road | Jankipuram Scheme, Lucknow
              </span>
              <span className="spec-meta-sep">•</span>
              <span className="spec-meta-item">
                <ShieldCheck size={15} className="text-gold" /> UP RERA: {PROJECT_INFO.reraNumber}
              </span>
              <span className="spec-meta-sep">•</span>
              <span className="spec-meta-item">
                <FileCheck2 size={15} className="text-gold" /> Canara Bank Approved
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Specifications Section */}
      <section className="section-padding theme-section-light about-specifications-main-section">
        <div className="container-custom">
          {/* Header & Brochure Document Action */}
          <div className="spec-top-header-row">
            <div>
              <SectionHeading
                number="01"
                badge="Engineering & Finishes"
                title="Comprehensive Technical Specifications"
                subtitle="Complete verified civil, architectural, and MEP specifications as certified for Y2R Heights."
                align="left"
                theme="light"
              />
            </div>
            <div className="spec-top-actions">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsSpecModalOpen(true);
                }}
                className="spec-sheet-preview-btn"
                title="View Official Spec Sheet"
              >
                <Eye size={16} />
                <span>View Official Brochure Sheet</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onOpenBrochure) onOpenBrochure();
                }}
                className="btn-primary"
              >
                <Download size={15} />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>

          {/* Quick Filter Tabs */}
          <div className="spec-filter-tabs">
            {specCategories.map((cat) => (
              <button
                key={cat.id}
                className={`spec-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Specifications Grid */}
          <div className="spec-blocks-container">
            {/* 1. Structure & Foundations */}
            {(activeTab === 'all' || activeTab === 'structure') && (
              <RevealOnScroll animation="fade-up">
                <div className="spec-block-card">
                  <div className="spec-block-header">
                    <div className="spec-block-icon">
                      <Building2 size={24} className="text-gold" />
                    </div>
                    <div>
                      <span className="spec-block-badge">Civil Engineering</span>
                      <h3 className="spec-block-title">Structure & Foundations</h3>
                    </div>
                  </div>
                  <div className="spec-detail-grid two-cols">
                    <div className="spec-item-box">
                      <h4 className="spec-item-label">Foundations</h4>
                      <p className="spec-item-value">
                        RCC raft foundations at a depth of 1.5M with a bearing capacity of <strong>1.391 kg/cm²</strong>. Pile foundation can be considered after carrying a load test of an 12M pile at the site.
                      </p>
                    </div>
                    <div className="spec-item-box">
                      <h4 className="spec-item-label">Structure</h4>
                      <p className="spec-item-value">
                        RCC column, beam, and shearwall framed structure confirming to <strong>BIS code for earthquake resistance</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* 2. Common Areas Table */}
            {(activeTab === 'all' || activeTab === 'common') && (
              <RevealOnScroll animation="fade-up">
                <div className="spec-block-card">
                  <div className="spec-block-header">
                    <div className="spec-block-icon">
                      <Layers size={24} className="text-gold" />
                    </div>
                    <div>
                      <span className="spec-block-badge">Public & Circulation Areas</span>
                      <h3 className="spec-block-title">Common Areas Finishing Matrix</h3>
                    </div>
                  </div>

                  {/* Responsive Table */}
                  <div className="spec-table-wrapper">
                    <table className="spec-common-table">
                      <thead>
                        <tr>
                          <th>AREA</th>
                          <th>FLOORING</th>
                          <th>WALL FINISH</th>
                          <th>CEILING</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PROJECT_SPECIFICATIONS.commonAreas.table.map((row, idx) => (
                          <tr key={idx}>
                            <td className="spec-table-area-cell">{row.area}</td>
                            <td><span className="spec-tag-pill">{row.flooring}</span></td>
                            <td>{row.wallFinish}</td>
                            <td>{row.ceiling}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Railing & Lifts highlight row */}
                  <div className="spec-callout-grid">
                    <div className="spec-callout-item">
                      <span className="callout-label">Railing:</span>
                      <span className="callout-val">{PROJECT_SPECIFICATIONS.commonAreas.railing}</span>
                    </div>
                    <div className="spec-callout-item">
                      <span className="callout-label">Lifts:</span>
                      <span className="callout-val">{PROJECT_SPECIFICATIONS.commonAreas.lifts}</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* 3. Retail Floors */}
            {(activeTab === 'all' || activeTab === 'retail') && (
              <RevealOnScroll animation="fade-up">
                <div className="spec-block-card">
                  <div className="spec-block-header">
                    <div className="spec-block-icon">
                      <Store size={24} className="text-gold" />
                    </div>
                    <div>
                      <span className="spec-block-badge">Ground & First Floors</span>
                      <h3 className="spec-block-title">Retail Floors</h3>
                    </div>
                  </div>
                  <div className="spec-detail-grid">
                    {PROJECT_SPECIFICATIONS.retail.items.map((item, idx) => (
                      <div key={idx} className="spec-item-box">
                        <h4 className="spec-item-label">{item.label}</h4>
                        <p className="spec-item-value">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* 4. Banquet Floor */}
            {(activeTab === 'all' || activeTab === 'banquet') && (
              <RevealOnScroll animation="fade-up">
                <div className="spec-block-card">
                  <div className="spec-block-header">
                    <div className="spec-block-icon">
                      <Sparkles size={24} className="text-gold" />
                    </div>
                    <div>
                      <span className="spec-block-badge">Second Floor (620.22 SQ.M.)</span>
                      <h3 className="spec-block-title">Banquet Floor</h3>
                    </div>
                  </div>
                  <div className="spec-detail-grid">
                    {PROJECT_SPECIFICATIONS.banquet.items.map((item, idx) => (
                      <div key={idx} className="spec-item-box">
                        <h4 className="spec-item-label">{item.label}</h4>
                        <p className="spec-item-value">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* 5. Service Apartments */}
            {(activeTab === 'all' || activeTab === 'apartments') && (
              <RevealOnScroll animation="fade-up">
                <div className="spec-block-card">
                  <div className="spec-block-header">
                    <div className="spec-block-icon">
                      <Home size={24} className="text-gold" />
                    </div>
                    <div>
                      <span className="spec-block-badge">3rd to 7th Floors</span>
                      <h3 className="spec-block-title">Service Apartments</h3>
                    </div>
                  </div>

                  <div className="spec-subgroup-title">Living / Dining & Bedrooms</div>
                  <div className="spec-detail-grid three-cols">
                    {PROJECT_SPECIFICATIONS.serviceApartments.livingDining.map((item, idx) => (
                      <div key={idx} className="spec-item-box">
                        <h4 className="spec-item-label">{item.label}</h4>
                        <p className="spec-item-value">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="spec-subgroup-title mt-4">Bathrooms & Sanitaryware</div>
                  <div className="spec-detail-grid two-cols">
                    {PROJECT_SPECIFICATIONS.serviceApartments.toilet.map((item, idx) => (
                      <div key={idx} className="spec-item-box">
                        <h4 className="spec-item-label">{item.label}</h4>
                        <p className="spec-item-value">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* 6. Doors & Windows */}
            {(activeTab === 'all' || activeTab === 'doors') && (
              <RevealOnScroll animation="fade-up">
                <div className="spec-block-card">
                  <div className="spec-block-header">
                    <div className="spec-block-icon">
                      <DoorClosed size={24} className="text-gold" />
                    </div>
                    <div>
                      <span className="spec-block-badge">Openings & Fenestration</span>
                      <h3 className="spec-block-title">Doors & Windows</h3>
                    </div>
                  </div>
                  <div className="spec-detail-grid three-cols">
                    {PROJECT_SPECIFICATIONS.doorsWindows.items.map((item, idx) => (
                      <div key={idx} className="spec-item-box">
                        <h4 className="spec-item-label">{item.label}</h4>
                        <p className="spec-item-value">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* 7. Electrical & MEP */}
            {(activeTab === 'all' || activeTab === 'mep') && (
              <RevealOnScroll animation="fade-up">
                <div className="spec-block-card">
                  <div className="spec-block-header">
                    <div className="spec-block-icon">
                      <Zap size={24} className="text-gold" />
                    </div>
                    <div>
                      <span className="spec-block-badge">Mechanical, Electrical & Plumbing</span>
                      <h3 className="spec-block-title">Electrical & MEP</h3>
                    </div>
                  </div>
                  <div className="spec-detail-grid">
                    {PROJECT_SPECIFICATIONS.mep.items.map((item, idx) => (
                      <div key={idx} className="spec-item-box">
                        <h4 className="spec-item-label">{item.label}</h4>
                        <p className="spec-item-value">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}
          </div>

          {/* Official Brochure Document Showcase Banner */}
          <RevealOnScroll animation="fade-up">
            <div className="spec-doc-banner-card">
              <div className="spec-doc-banner-info">
                <span className="spec-doc-tag">OFFICIAL ARCHITECTURAL DOSSIER</span>
                <h3 className="spec-doc-title">Verified Specifications Document</h3>
                <p className="spec-doc-desc">
                  All specifications have been planned in alignment with project architects and structural engineers. Review the original brochure specification sheet or connect with our technical advisory desk for custom fit-out queries.
                </p>
                <div className="spec-doc-actions">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsSpecModalOpen(true);
                    }}
                    className="btn-primary spec-view-btn"
                  >
                    <Maximize2 size={16} />
                    <span>View Full Spec Sheet</span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (onOpenEnquiry) onOpenEnquiry('Specifications Inquiry');
                    }}
                    className="btn-secondary"
                  >
                    <span>Request Technical Query</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div
                className="spec-doc-banner-thumb"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsSpecModalOpen(true);
                }}
                role="button"
                tabIndex={0}
              >
                <img
                  src={premiumDocImg}
                  alt="Y2R Heights Premium Specifications Sheet"
                  className="spec-thumb-img"
                />
                <div className="spec-thumb-overlay">
                  <Eye size={24} className="text-gold" />
                  <span>Click to Zoom</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Official Disclaimer Note */}
          <div className="spec-disclaimer-box">
            <p className="spec-disclaimer-text">
              <strong>Disclaimer:</strong> {PROJECT_SPECIFICATIONS.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Visual Spaces Showcase Strip */}
      <section className="section-padding theme-section-dark spec-gallery-preview-section">
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Executed Quality"
            title="Material Excellence in Every Corner"
            subtitle="Explore how premium specifications translate into luxurious retail, office, and living spaces."
            align="center"
            theme="dark"
          />

          <div className="spec-visual-grid">
            {[
              {
                image: highStreetImg,
                tag: 'RETAIL LEVELS',
                title: 'Polished Stone & Vitrified Layouts',
                subPrefix: 'HIGH-STREET',
                subHighlight: 'HEAVY TRAFFIC'
              },
              {
                image: boutiqueImg,
                tag: 'OFFICE WORKSPACES',
                title: 'Acoustic Ceilings & Concealed Wiring',
                subPrefix: 'GRADE-A',
                subHighlight: 'ISI CONDUITS'
              },
              {
                image: foodCourtImg,
                tag: 'FOOD COURT & BANQUET',
                title: 'Decorative False Ceilings & Exhaust Risers',
                subPrefix: 'COMMERCIAL',
                subHighlight: 'GREASE TRAPS'
              },
              {
                image: buildingImage,
                tag: 'FAÇADE & CIVIL',
                title: 'Earthquake Resistant Framed Landmark',
                subPrefix: 'BIS CODE',
                subHighlight: 'G+8 TOWER'
              }
            ].map((card, idx) => (
              <RevealOnScroll key={idx} animation="fade-up" delay={idx * 100}>
                <div className="spec-uiverse-container noselect">
                  <div className="spec-uiverse-canvas">
                    <div className="spec-uiverse-tracker tr-1"></div>
                    <div className="spec-uiverse-tracker tr-2"></div>
                    <div className="spec-uiverse-tracker tr-3"></div>
                    <div className="spec-uiverse-tracker tr-4"></div>
                    <div className="spec-uiverse-tracker tr-5"></div>
                    <div className="spec-uiverse-tracker tr-6"></div>
                    <div className="spec-uiverse-tracker tr-7"></div>
                    <div className="spec-uiverse-tracker tr-8"></div>
                    <div className="spec-uiverse-tracker tr-9"></div>
                    <div className="spec-uiverse-tracker tr-10"></div>
                    <div className="spec-uiverse-tracker tr-11"></div>
                    <div className="spec-uiverse-tracker tr-12"></div>
                    <div className="spec-uiverse-tracker tr-13"></div>
                    <div className="spec-uiverse-tracker tr-14"></div>
                    <div className="spec-uiverse-tracker tr-15"></div>
                    <div className="spec-uiverse-tracker tr-16"></div>
                    <div className="spec-uiverse-tracker tr-17"></div>
                    <div className="spec-uiverse-tracker tr-18"></div>
                    <div className="spec-uiverse-tracker tr-19"></div>
                    <div className="spec-uiverse-tracker tr-20"></div>
                    <div className="spec-uiverse-tracker tr-21"></div>
                    <div className="spec-uiverse-tracker tr-22"></div>
                    <div className="spec-uiverse-tracker tr-23"></div>
                    <div className="spec-uiverse-tracker tr-24"></div>
                    <div className="spec-uiverse-tracker tr-25"></div>
                    <div className="spec-uiverse-card">
                      <img src={card.image} alt={card.title} className="spec-uiverse-bg-img" />
                      <div className="spec-uiverse-overlay"></div>
                      <div className="card-content">
                        <div className="card-glare"></div>
                        <div className="cyber-lines">
                          <span></span><span></span><span></span><span></span>
                        </div>
                        <div className="spec-card-main-title">{card.title}</div>
                        <div className="glowing-elements">
                          <div className="glow-1"></div>
                          <div className="glow-2"></div>
                          <div className="glow-3"></div>
                        </div>
                        <div className="card-particles">
                          <span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <div className="corner-elements">
                          <span></span><span></span><span></span><span></span>
                        </div>
                        <div className="scan-line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection
        badge="Technical Advisory"
        title="Need Detailed Technical Drawings or Floor Plans?"
        subtitle="Our engineering and commercial advisory team is available to assist you with floor loading capacities, electrical loads, and fit-out guidelines."
        primaryBtnText="Speak With Advisory Team"
        primaryBtnAction={() => onOpenEnquiry && onOpenEnquiry('Specifications Inquiry')}
        secondaryBtnText="Download Full Brochure"
        secondaryBtnAction={onOpenBrochure}
      />

      {/* Pure Fullscreen Specification Sheet Lightbox Modal via Portal */}
      {isSpecModalOpen &&
        createPortal(
          <div
            className="spec-fullscreen-modal-overlay"
            onClick={() => setIsSpecModalOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            {/* Prominent Floating Close (Cross) Button */}
            <button
              className="spec-floating-close-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsSpecModalOpen(false);
              }}
              aria-label="Close Fullscreen View"
              title="Close (Esc)"
            >
              <X size={28} />
            </button>

            {/* Floating Action / Download Pill */}
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

            {/* Fullscreen Image Container */}
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


