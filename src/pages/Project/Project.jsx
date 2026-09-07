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
  Eye,
  X,
  FileCheck2,
  UtensilsCrossed,
  CheckCircle2,
  Wrench,
  Grid,
  Maximize2
} from 'lucide-react';
import { PROJECT_INFO, PROJECT_SPECIFICATIONS } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import proImage from '../../assets/pro.jpg';
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

  // Tabs for interactive filtering
  const specTabs = [
    { id: 'all', label: 'All Specifications', icon: Layers },
    { id: 'structure', label: 'Structure & Foundations', icon: Building2 },
    { id: 'common', label: 'Common Areas (Table)', icon: Grid },
    { id: 'retail', label: 'Retail (GF & 1st)', icon: Store },
    { id: 'banquet', label: 'Banquet (2nd Fl.)', icon: UtensilsCrossed },
    { id: 'apartments', label: 'Service Apartments (3-7th)', icon: Home },
    { id: 'doors', label: 'Doors & Windows', icon: DoorClosed },
    { id: 'mep', label: 'Electrical & MEP', icon: Zap }
  ];

  // Common Areas Table Data from Official Brochure
  const commonAreasTable = [
    {
      area: 'Entrance Lobby (Ground Floor)',
      flooring: 'Granite',
      wallFinish: 'Acrylic emulsion paint and cladding of vitrified tiles',
      ceiling: 'Gypsum false ceiling with acrylic emulsion paint'
    },
    {
      area: 'Lift Lobby (Typical Floor)',
      flooring: 'Granite',
      wallFinish: 'Granite cladding',
      ceiling: 'Armstrong false ceiling with acrylic emulsion paint'
    },
    {
      area: 'Ramps & Basement',
      flooring: 'Antiskid ceramic tiles, 12mm',
      wallFinish: 'Oil bound distemper over punning',
      ceiling: 'Cement plaster & white dry distemper'
    },
    {
      area: 'Staircase (Main)',
      flooring: 'Granite',
      wallFinish: 'Acrylic emulsion paint',
      ceiling: 'Oil bound distemper'
    },
    {
      area: 'Staircase (Fire)',
      flooring: 'Granite',
      wallFinish: 'Acrylic emulsion paint',
      ceiling: 'Oil bound distemper'
    }
  ];

  return (
    <div className="about-project-page-root">
      {/* =========================================================================
          1. HERO SECTION (Luxury Cinematic Header)
          ========================================================================= */}
      <section
        className="page-hero-section about-project-hero-section theme-section-dark"
        onClick={() => setHeroTextFaded((prev) => !prev)}
      >
        <div className="about-project-hero-bg">
          <img
            src={proImage}
            alt="Y2R Heights Project Master Elevation"
            className="about-project-hero-img"
          />
          <div className={`about-project-hero-overlay ${heroTextFaded ? 'hero-mobile-faded' : ''}`} />
        </div>

        <div className="container-custom page-hero-content about-project-hero-content">
          <div className={`about-project-hero-text-wrap ${heroTextFaded ? 'hero-mobile-faded' : ''}`}>
            <h1 className="about-project-hero-title">
              PREMIUM SPECIFICATIONS
            </h1>
            <p className="about-project-hero-desc">
              BIS-compliant engineering with Grade-A structural framing, luxury vitrified finishes, premium Grohe/Jaquar/Roca fittings, and future-ready MEP infrastructure.
            </p>
            <div className="page-hero-meta about-project-hero-meta">
              <span className="meta-item">
                <MapPin size={16} /> Kursi Road | Jankipuram Scheme, Lucknow
              </span>
              <span className="meta-sep">•</span>
              <span className="meta-item">
                <ShieldCheck size={16} /> UP RERA: {PROJECT_INFO?.reraNumber}
              </span>
              <span className="meta-sep">•</span>
              <span className="meta-item">
                <FileCheck2 size={16} /> Canara Bank Approved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SPECIFICATION NAVIGATION TABS BAR
          ========================================================================= */}
      <section className="spec-sticky-nav-section">
        <div className="container-custom">
          <div className="spec-nav-wrapper">
            <div className="spec-tabs-scroll-row" role="tablist" aria-label="Specification Categories">
              {specTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`spec-nav-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <TabIcon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MASTER SPECIFICATIONS DOSSIER (Complete Brochure Breakdown)
          ========================================================================= */}
      <section className="section-padding theme-section-light specs-main-dossier-section">
        <div className="container-custom">

          {/* -------------------------------------------------------------
              CATEGORY 1: STRUCTURE & FOUNDATIONS
              ------------------------------------------------------------- */}
          {(activeTab === 'all' || activeTab === 'structure') && (
            <RevealOnScroll animation="fade-up">
              <div className="spec-category-card" id="spec-structure">
                <div className="spec-category-header">
                  <div className="spec-cat-icon-box">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className="spec-cat-tag">Civil Engineering</span>
                    <h2 className="spec-cat-title">Structure & Foundations</h2>
                  </div>
                </div>

                <div className="spec-structure-grid">
                  <div className="spec-structure-col">
                    <div className="spec-sub-header">
                      <Wrench size={18} className="text-gold" />
                      <h4>Foundations</h4>
                    </div>
                    <p className="spec-text-content">
                      RCC raft foundations at a depth of <strong>1.5M</strong> with a bearing capacity of <strong>1.391 kg/cm²</strong>. Pile foundation can be considered after carrying a load test of an 12M pile at the site.
                    </p>
                    <div className="spec-stat-pills">
                      <span className="stat-pill">Raft Depth: 1.5M</span>
                      <span className="stat-pill">Capacity: 1.391 kg/cm²</span>
                      <span className="stat-pill">12M Pile Option</span>
                    </div>
                  </div>

                  <div className="spec-structure-col">
                    <div className="spec-sub-header">
                      <ShieldCheck size={18} className="text-gold" />
                      <h4>Structure</h4>
                    </div>
                    <p className="spec-text-content">
                      RCC column, beam, and shearwall framed structure confirming to <strong>BIS code</strong> for earthquake resistance.
                    </p>
                    <div className="spec-stat-pills">
                      <span className="stat-pill">BIS Earthquake Norms</span>
                      <span className="stat-pill">RCC Frame & Shearwall</span>
                      <span className="stat-pill">Zone-III Seismic Safe</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* -------------------------------------------------------------
              CATEGORY 2: COMMON AREAS (OFFICIAL BROCHURE TABLE)
              ------------------------------------------------------------- */}
          {(activeTab === 'all' || activeTab === 'common') && (
            <RevealOnScroll animation="fade-up">
              <div className="spec-category-card" id="spec-common-areas">
                <div className="spec-category-header">
                  <div className="spec-cat-icon-box">
                    <Grid size={24} />
                  </div>
                  <div>
                    <span className="spec-cat-tag">Public & Circulation Areas</span>
                    <h2 className="spec-cat-title">Common Areas Finish Matrix</h2>
                  </div>
                </div>

                {/* Comprehensive Official Table */}
                <div className="spec-table-responsive-wrapper">
                  <table className="brochure-spec-table">
                    <thead>
                      <tr>
                        <th className="col-area">AREA</th>
                        <th className="col-flooring">FLOORING</th>
                        <th className="col-wall">WALL FINISH</th>
                        <th className="col-ceiling">CEILING</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commonAreasTable.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                          <td className="td-area">
                            <strong>{row.area}</strong>
                          </td>
                          <td className="td-flooring">
                            <span className="mat-badge">{row.flooring}</span>
                          </td>
                          <td className="td-wall">{row.wallFinish}</td>
                          <td className="td-ceiling">{row.ceiling}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Railing & Lifts Bottom Highlights Bar */}
                <div className="common-area-footer-highlights">
                  <div className="common-highlight-box">
                    <span className="ch-label">Railing Specification:</span>
                    <span className="ch-value">MS Railing (Staircase)</span>
                  </div>
                  <div className="common-highlight-box">
                    <span className="ch-label">Vertical Transport:</span>
                    <span className="ch-value">Two (2) passenger lifts @ 10 passengers each</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* -------------------------------------------------------------
              CATEGORY 3: RETAIL FLOORS (GROUND & FIRST FLOORS)
              ------------------------------------------------------------- */}
          {(activeTab === 'all' || activeTab === 'retail') && (
            <RevealOnScroll animation="fade-up">
              <div className="spec-category-card" id="spec-retail">
                <div className="spec-category-header">
                  <div className="spec-cat-icon-box">
                    <Store size={24} />
                  </div>
                  <div>
                    <span className="spec-cat-tag">Commercial Frontage</span>
                    <h2 className="spec-cat-title">Retail Floors (Ground & First Floors)</h2>
                  </div>
                </div>

                <div className="spec-detail-keyval-grid">
                  <div className="spec-kv-item">
                    <span className="kv-label">Flooring</span>
                    <span className="kv-value">Heavy-duty large format vitrified tiles or polished stone flooring suitable for high traffic retail use.</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Walls</span>
                    <span className="kv-value">Plastered finish, ready for tenant fit-out (Oil Bound Distemper or primer coat).</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Ceiling</span>
                    <span className="kv-value">Exposed slab or simple plaster finish, ready for tenant fit-out (Oil Bound Distemper).</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Wet Points</span>
                    <span className="kv-value">Provision for water inlet and outlet in designated areas.</span>
                  </div>
                  <div className="spec-kv-item full-width">
                    <span className="kv-label">Toilets</span>
                    <span className="kv-value">Antiskid vitrified tiles on the floor, vitrified wall tiles up to false ceiling level. Premium quality sanitaryware.</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* -------------------------------------------------------------
              CATEGORY 4: BANQUET FLOOR (SECOND FLOOR)
              ------------------------------------------------------------- */}
          {(activeTab === 'all' || activeTab === 'banquet') && (
            <RevealOnScroll animation="fade-up">
              <div className="spec-category-card" id="spec-banquet">
                <div className="spec-category-header">
                  <div className="spec-cat-icon-box">
                    <UtensilsCrossed size={24} />
                  </div>
                  <div>
                    <span className="spec-cat-tag">Hospitality & Celebrations</span>
                    <h2 className="spec-cat-title">Banquet Floor (Second Floor)</h2>
                  </div>
                </div>

                <div className="spec-detail-keyval-grid">
                  <div className="spec-kv-item">
                    <span className="kv-label">Main Hall Flooring</span>
                    <span className="kv-value">Superior quality vitrified tiles of minimum 1200x600 size or marble.</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Wall Finishes</span>
                    <span className="kv-value">Acrylic emulsion on POP punning. Feature walls with textured paint or cladding.</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Ceiling</span>
                    <span className="kv-value">Decorative gypsum false ceiling with integrated lighting and acoustic treatment.</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Service Areas</span>
                    <span className="kv-value">Antiskid vitrified tiles. Acrylic emulsion paint on walls.</span>
                  </div>
                  <div className="spec-kv-item full-width">
                    <span className="kv-label">Toilets</span>
                    <span className="kv-value">Granite counter. Premium quality sanitaryware and CP fittings (Grohe/Jaquar/Roca or equivalent). False ceiling with oil bound distemper.</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* -------------------------------------------------------------
              CATEGORY 5: SERVICE APARTMENTS (3RD TO 7TH FLOORS)
              ------------------------------------------------------------- */}
          {(activeTab === 'all' || activeTab === 'apartments') && (
            <RevealOnScroll animation="fade-up">
              <div className="spec-category-card" id="spec-apartments">
                <div className="spec-category-header">
                  <div className="spec-cat-icon-box">
                    <Home size={24} />
                  </div>
                  <div>
                    <span className="spec-cat-tag">Contemporary Urban Living</span>
                    <h2 className="spec-cat-title">Service Apartments (3rd to 7th Floors)</h2>
                  </div>
                </div>

                <div className="spec-subgroup-wrap">
                  <h3 className="spec-subgroup-title">Living / Dining & Bedroom</h3>
                  <div className="spec-detail-keyval-grid">
                    <div className="spec-kv-item">
                      <span className="kv-label">Flooring / Skirting</span>
                      <span className="kv-value">Vitrified Tile - <strong>1200x600</strong></span>
                    </div>
                    <div className="spec-kv-item">
                      <span className="kv-label">Wall Finishes</span>
                      <span className="kv-value">Acrylic emulsion on POP punning</span>
                    </div>
                    <div className="spec-kv-item">
                      <span className="kv-label">Ceiling</span>
                      <span className="kv-value">Oil Bound Distemper</span>
                    </div>
                  </div>
                </div>

                <div className="spec-subgroup-wrap">
                  <h3 className="spec-subgroup-title">Bathroom & Sanitary Specifications</h3>
                  <div className="spec-detail-keyval-grid">
                    <div className="spec-kv-item">
                      <span className="kv-label">Toilet Finishes</span>
                      <span className="kv-value">Antiskid vitrified tiles. Vitrified wall tiles up to false ceiling level. Granite counter. Oil bound distemper with false ceiling.</span>
                    </div>
                    <div className="spec-kv-item">
                      <span className="kv-label">Sanitaryware & Fittings</span>
                      <span className="kv-value">Premium quality range. <strong>Grohe / Jaquar / Roca</strong> or equivalent single lever fittings in all toilets.</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* -------------------------------------------------------------
              CATEGORY 6: DOORS & WINDOWS
              ------------------------------------------------------------- */}
          {(activeTab === 'all' || activeTab === 'doors') && (
            <RevealOnScroll animation="fade-up">
              <div className="spec-category-card" id="spec-doors-windows">
                <div className="spec-category-header">
                  <div className="spec-cat-icon-box">
                    <DoorClosed size={24} />
                  </div>
                  <div>
                    <span className="spec-cat-tag">Fenestration & Joinery</span>
                    <h2 className="spec-cat-title">Doors & Windows</h2>
                  </div>
                </div>

                <div className="spec-detail-keyval-grid">
                  <div className="spec-kv-item">
                    <span className="kv-label">Doors</span>
                    <span className="kv-value">Engineered laminated frame (WPC) with laminated door shutters, 35MM thick commercial board with phenol formaldehyde.</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Hardware</span>
                    <span className="kv-value">Locks, handles, and knobs (mortise and cylindrical locks) from reputed makes and brands. High quality steel/brass hardware. Floor springs/hinges with ball bearings.</span>
                  </div>
                  <div className="spec-kv-item full-width">
                    <span className="kv-label">Windows</span>
                    <span className="kv-value">Powder coated aluminium frame or UPVC frame windows with clear float glass.</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* -------------------------------------------------------------
              CATEGORY 7: ELECTRICAL & MEP
              ------------------------------------------------------------- */}
          {(activeTab === 'all' || activeTab === 'mep') && (
            <RevealOnScroll animation="fade-up">
              <div className="spec-category-card" id="spec-mep">
                <div className="spec-category-header">
                  <div className="spec-cat-icon-box">
                    <Zap size={24} />
                  </div>
                  <div>
                    <span className="spec-cat-tag">Building Utilities & Safety</span>
                    <h2 className="spec-cat-title">Electrical & MEP Infrastructure</h2>
                  </div>
                </div>

                <div className="spec-detail-keyval-grid">
                  <div className="spec-kv-item">
                    <span className="kv-label">Fixtures & Fittings</span>
                    <span className="kv-value">ISI mark switches/sockets, distribution boxes, and circuit breakers from standard makes and brands.</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Wiring</span>
                    <span className="kv-value">ISI mark conduits PVC/Steel with copper wires concealed in RCC slabs.</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">Plumbing</span>
                    <span className="kv-value">ISI mark CPVC water supply pipes with standard valves and accessories. C-PVC pipes for external sewerage & waste water.</span>
                  </div>
                  <div className="spec-kv-item">
                    <span className="kv-label">EV Charging</span>
                    <span className="kv-value">Provision for EV charging stations to support modern mobility.</span>
                  </div>
                  <div className="spec-kv-item full-width">
                    <span className="kv-label">Security System</span>
                    <span className="kv-value">CCTV and electronic surveillance would be provided with internal communication system.</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* -------------------------------------------------------------
              OFFICIAL DISCLAIMER BANNER
              ------------------------------------------------------------- */}
          <div className="spec-disclaimer-banner">
            <span className="disclaimer-badge">Official Architectural Note</span>
            <p className="disclaimer-text">
              <strong>Disclaimer:</strong> The above specifications are indicative and may be changed in consultation with the Architect. The company reserves the right to provide equivalent finishes/fixtures and features.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. OFFICIAL BROCHURE SHEET VISUAL PREVIEW & LIGHTBOX
          ========================================================================= */}
      <section className="section-padding theme-section-dark spec-document-section">
        <ArchitecturalBg variant="project_vision" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Certified Dossier"
            title="Comprehensive Technical Specifications"
            subtitle="Complete verified civil, architectural, and MEP specifications as certified for Y2R Heights."
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
                  <span className="spec-hover-text">Click to View Official Sheet</span>
                </div>
                <div className="spec-doc-badge-pill">
                  <FileCheck2 size={14} /> Official Master Dossier
                </div>
              </div>
            </div>

            <div className="spec-doc-info-col">
              <div className="spec-doc-meta-badge">Verified RERA & Engineering Standards</div>
              <h3 className="spec-doc-heading">Certified Engineering Standards</h3>
              <p className="spec-doc-paragraph">
                Explore the complete verified specification sheet including structural foundation tolerances, lobby finishes, sanitary fittings, high-voltage electrical conduits, and fire suppression systems.
              </p>

              <div className="spec-doc-points-list">
                <div className="spec-point-row">
                  <div className="point-dot" />
                  <span><strong>Structural Foundation:</strong> RCC Raft foundation with BIS code earthquake resistance framing.</span>
                </div>
                <div className="spec-point-row">
                  <div className="point-dot" />
                  <span><strong>Luxury Finishes:</strong> Granite entrance lobbies, Armstrong false ceilings, and 1200x600 vitrified suites.</span>
                </div>
                <div className="spec-point-row">
                  <div className="point-dot" />
                  <span><strong>Sanitary & Plumbing:</strong> Grohe / Jaquar / Roca single-lever CP fittings with CPVC pipelines.</span>
                </div>
                <div className="spec-point-row">
                  <div className="point-dot" />
                  <span><strong>Future-Ready Utilities:</strong> Dedicated EV charging infrastructure, dual-fuel DG backup, and CCTV matrix.</span>
                </div>
              </div>

              <div className="spec-doc-cta-group">
                <button
                  type="button"
                  onClick={() => setIsSpecModalOpen(true)}
                  className="btn-primary"
                >
                  <Eye size={16} />
                  <span>View Official Brochure Sheet</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenBrochure}
                  className="btn-secondary"
                >
                  <Download size={16} />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. MATERIAL EXCELLENCE SHOWCASE (Common Area Materials)
          ========================================================================= */}
      <section className="section-padding theme-section-light finishes-section">
        <div className="container-custom">
          <SectionHeading
            number="03"
            badge="Material Excellence"
            title="Premium Finishes & Materials"
            subtitle="Curated materials hand-picked for durability, aesthetics, and low ongoing maintenance."
            align="center"
            theme="light"
          />

          <div className="finishes-cards-grid">
            <div className="finish-showcase-card">
              <div className="finish-card-media">
                <img src={highStreetImg} alt="Natural Granite & Vitrified Finishes" className="finish-card-img" />
                <span className="finish-card-tag">Lobbies & Circulation</span>
              </div>
              <div className="finish-card-body">
                <h4 className="finish-card-title">Granite & Vitrified Flooring</h4>
                <p className="finish-card-desc">
                  Entrance lobbies and lift foyers finished with polished granite and vitrified tile cladding with gypsum false ceilings.
                </p>
              </div>
            </div>

            <div className="finish-showcase-card">
              <div className="finish-card-media">
                <img src={boutiqueImg} alt="ISI Conduit & Copper Wiring" className="finish-card-img" />
                <span className="finish-card-tag">Electrical & Safety</span>
              </div>
              <div className="finish-card-body">
                <h4 className="finish-card-title">ISI Concealed Conduits & Copper Wiring</h4>
                <p className="finish-card-desc">
                  ISI mark steel/PVC conduits with copper wiring concealed in RCC slabs, distribution boxes, and circuit breakers.
                </p>
              </div>
            </div>

            <div className="finish-showcase-card">
              <div className="finish-card-media">
                <img src={foodCourtImg} alt="Banquet & Food Concourse Ventilation" className="finish-card-img" />
                <span className="finish-card-tag">F&B & Banquets</span>
              </div>
              <div className="finish-card-body">
                <h4 className="finish-card-title">Acoustic Ceilings & Heavy MEP</h4>
                <p className="finish-card-desc">
                  Decorative gypsum false ceiling with acoustic dampening on the banquet level and grease-trap plumbing risers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. GLOBAL TECHNICAL CTA
          ========================================================================= */}
      <CTASection
        badge="Verify & Validate"
        title="Need Detailed Technical Drawings or Floor Plans?"
        subtitle="Our engineering and commercial advisory team is available to assist you with floor loading capacities, electrical loads, and fit-out guidelines."
        description="Connect with our advisory team for customized floor layouts, pricing structures, and unit availability."
        primaryBtnText="Connect With Advisory Team"
        primaryBtnAction={() => onOpenEnquiry && onOpenEnquiry('Project Specifications Inquiry')}
        secondaryBtnText="Call 1800 890 8351"
      />

      {/* =========================================================================
          7. FULLSCREEN PURE IMAGE PREVIEW MODAL
          ========================================================================= */}
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