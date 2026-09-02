import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/hero-bg.mp4';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Store,
  Briefcase,
  Home as HomeIcon,
  UtensilsCrossed,
  MapPin,
  Car,
  ShieldCheck,
  Building2,
  DoorOpen,
  Camera,
  Zap,
  Sparkles,
  X
} from 'lucide-react';
import {
  PROJECT_INFO,
  SPACES_CATEGORIES,
  CONNECTIVITY_DATA,
  AMENITIES_LIST,
  PARKING_LEVELS,
  FLOOR_PLANS_DATA,
  WHY_Y2R_POINTS
} from '../../data/projectData';
import { GALLERY_ITEMS } from '../../data/galleryData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import Location3DMap from '../../components/Location3DMap/Location3DMap';
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Home.css';

export default function Home({ onOpenEnquiry, onSelectFloorPlan, onSelectGalleryItem }) {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const spacesSliderRef = useRef(null);
  const [showHighlightsPopup, setShowHighlightsPopup] = useState(false);
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const [activeDeckCard, setActiveDeckCard] = useState(null);

  const handleSpaceScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const itemWidth = e.target.offsetWidth;
    if (itemWidth > 0) {
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== activeSpaceIndex && newIndex >= 0 && newIndex < SPACES_CATEGORIES.length) {
        setActiveSpaceIndex(newIndex);
      }
    }
  };

  const scrollToSpace = (index) => {
    if (spacesSliderRef.current) {
      const itemWidth = spacesSliderRef.current.offsetWidth;
      spacesSliderRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setActiveSpaceIndex(index);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }

    const popupTimer = setTimeout(() => {
      setShowHighlightsPopup(true);
    }, 700);

    return () => clearTimeout(popupTimer);
  }, []);

  const getAmenityIcon = (iconName) => {
    switch (iconName) {
      case 'DoorOpen': return DoorOpen;
      case 'Building2': return Building2;
      case 'MoveUp': return ArrowUpRight;
      case 'Car': return Car;
      case 'ShieldCheck': return ShieldCheck;
      case 'Camera': return Camera;
      case 'Zap': return Zap;
      case 'Sparkles': return Sparkles;
      default: return Building2;
    }
  };

  return (
    <div className="home-page-root">
      {/* =========================================================================
          1. HERO SECTION (Clean Cinematic Ambient Video Banner)
          ========================================================================= */}
      <section ref={heroRef} className="hero-portal-section">
        {/* Background Architectural Canvas & Video */}
        <div className="hero-portal-bg">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
            className="hero-portal-video"
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-portal-overlay" />
        </div>

        <div className="container-custom hero-portal-container">
          <div className="hero-portal-content">
            <RevealOnScroll animation="fade-up">
              <div className="hero-location-pill">
                <MapPin size={15} className="text-gold flex-shrink-0" />
                <span>Kursi Road | Jankipuram Extension, Lucknow</span>
              </div>

              <h1 className="hero-portal-title">
                Where Vision <br />
                <span className="hero-title-white">Meets Value.</span>
              </h1>

              <p className="hero-portal-desc">
                Welcome to Y2R Heights – Lucknow’s premier destination for high-frontage commercial retail, boutique corporate offices, dedicated dining food courts, and contemporary studio apartments on Kursi Road.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PROJECT OVERVIEW / INTRO SPLIT LAYOUT (Expressive White Section)
          ========================================================================= */}
      <section className="section-padding theme-section-white intro-section" id="overview">
        <ArchitecturalBg variant="home_overview" />
        <div className="container-custom">
          <div className="intro-split-grid">
            {/* Left Half: 50% Master Architectural Elevation Showcase */}
            <RevealOnScroll animation="fade-right" className="intro-half-media-col">
              <TiltCard maxTilt={4} scale={1.01} className="intro-half-tilt-card">
                <div className="intro-half-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                    alt="Y2R Heights Master Elevation"
                    className="intro-half-master-img"
                  />
                  <div className="intro-half-overlay" />

                  {/* Top Floating Badge */}
                  <div className="intro-floating-top-badge">
                    <ShieldCheck size={16} className="text-gold" />
                    <span>UP RERA: {PROJECT_INFO.reraNumber}</span>
                  </div>

                  {/* Bottom Floating Badge */}
                  <div className="intro-floating-bottom-badge">
                    <span className="live-pulse-dot" />
                    <div className="badge-text-group">
                      <span className="badge-main-text">7 Integrated Spatial Levels</span>
                      <span className="badge-sub-text">Double Basement Parking • 40+ Vehicles Capacity</span>
                    </div>
                  </div>

                  {/* Architectural Corner Brackets */}
                  <div className="frame-corner top-left" />
                  <div className="frame-corner top-right" />
                  <div className="frame-corner bottom-left" />
                  <div className="frame-corner bottom-right" />
                </div>
              </TiltCard>
            </RevealOnScroll>

            {/* Right Half: 50% Auto-Moving Vertical Overview Details (Pauses on Hover) */}
            <RevealOnScroll animation="fade-left" className="intro-half-content-col">
              <div className="overview-moving-viewport">
                {/* Live Interactive Hint Bar */}
                <div className="overview-scroll-hint-bar">
                  <span className="scroll-indicator-dot" />
                  <span>Auto-Moving Feed (Hover to Pause)</span>
                </div>

                <div className="overview-moving-track">
                  {[1, 2].map((loopIdx) => (
                    <div key={`overview-loop-${loopIdx}`} className="overview-moving-content-block">
                      {/* Block 1: Executive Title & Vision Narrative */}
                      <div className="overview-block-header">
                        <div className="intro-section-eyebrow">
                          <span className="gold-badge">Project Overview</span>
                          <span className="overview-spec-tag">UP RERA: {PROJECT_INFO.reraNumber}</span>
                        </div>

                        <h2 className="intro-main-title">
                          A Unified Vision for <br />
                          <span className="gold-gradient-text">Commercial Landmark Living</span>
                        </h2>

                        <p className="intro-lead-text">
                          Situated prominently on <strong>Kursi Road | Jankipuram Extension</strong>, Y2R Heights is a modern commercial and residential hub combining high-street retail, corporate offices, curated dining, and contemporary studio suites.
                        </p>

                        <p className="intro-sub-text">
                          Engineered with double basement structured parking, structural glass façade, and high-speed vertical transit — delivering long-term value for investors and occupants alike.
                        </p>
                      </div>

                      {/* Block 2: 7 Integrated Spatial Levels Breakdown */}
                      <div className="spatial-levels-breakdown">
                        <div className="spatial-breakdown-header">
                          <span className="breakdown-title-tag">Architectural Vertical Zoning</span>
                          <span className="breakdown-sub-tag">7 Integrated Levels</span>
                        </div>

                        <div className="spatial-levels-list">
                          {/* Tier 1: Studios */}
                          <div className="spatial-level-row">
                            <div className="level-floor-badge">3rd–7th</div>
                            <div className="level-details">
                              <div className="level-title-row">
                                <span className="level-title">Studio Apartments</span>
                                <span className="level-category">Residential</span>
                              </div>
                              <p className="level-desc">Contemporary urban living suites with private balconies</p>
                            </div>
                          </div>

                          {/* Tier 2: Food Court */}
                          <div className="spatial-level-row">
                            <div className="level-floor-badge">Service</div>
                            <div className="level-details">
                              <div className="level-title-row">
                                <span className="level-title">Food Court & Dining</span>
                                <span className="level-category">F&B Hub</span>
                              </div>
                              <p className="level-desc">Curated multi-cuisine QSRs, cafés & terrace dining</p>
                            </div>
                          </div>

                          {/* Tier 3: Offices */}
                          <div className="spatial-level-row">
                            <div className="level-floor-badge">1st & 2nd</div>
                            <div className="level-details">
                              <div className="level-title-row">
                                <span className="level-title">Boutique Offices</span>
                                <span className="level-category">Commercial</span>
                              </div>
                              <p className="level-desc">Efficient workspaces with natural light & zero wasted space</p>
                            </div>
                          </div>

                          {/* Tier 4: Retail */}
                          <div className="spatial-level-row">
                            <div className="level-floor-badge">LGF & UGF</div>
                            <div className="level-details">
                              <div className="level-title-row">
                                <span className="level-title">High-Street Retail</span>
                                <span className="level-category">Commerce</span>
                              </div>
                              <p className="level-desc">Double-height frontage for flagship stores & boutique brands</p>
                            </div>
                          </div>

                          {/* Tier 5: Basement Parking */}
                          <div className="spatial-level-row parking-tier-row">
                            <div className="level-floor-badge basement">B1 & B2</div>
                            <div className="level-details">
                              <div className="level-title-row">
                                <span className="level-title">Double Basement Parking</span>
                                <span className="level-category">40+ Vehicles</span>
                              </div>
                              <p className="level-desc">Dual subterranean ramps for effortless vehicular arrival</p>
                            </div>
                          </div>
                        </div>

                        <div className="spatial-breakdown-footer">
                          <Link to="/floor-plans" className="breakdown-explore-link">
                            <span>Explore Full Architectural Blueprints</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>

                      {/* Block 3: 4 Architectural Pillars Grid */}
                      <div className="intro-pillars-grid">
                        <div className="intro-pillar-item">
                          <div className="pillar-icon-box">
                            <Store size={18} className="text-gold" />
                          </div>
                          <div className="pillar-info">
                            <h4 className="pillar-title">High-Street Retail</h4>
                            <p className="pillar-desc">Double-height frontage with direct road access</p>
                          </div>
                        </div>

                        <div className="intro-pillar-item">
                          <div className="pillar-icon-box">
                            <Briefcase size={18} className="text-gold" />
                          </div>
                          <div className="pillar-info">
                            <h4 className="pillar-title">Boutique Offices</h4>
                            <p className="pillar-desc">Zero-wastage layouts with ample natural light</p>
                          </div>
                        </div>

                        <div className="intro-pillar-item">
                          <div className="pillar-icon-box">
                            <UtensilsCrossed size={18} className="text-gold" />
                          </div>
                          <div className="pillar-info">
                            <h4 className="pillar-title">Food & Dining</h4>
                            <p className="pillar-desc">Dedicated service level with ventilation</p>
                          </div>
                        </div>

                        <div className="intro-pillar-item">
                          <div className="pillar-icon-box">
                            <HomeIcon size={18} className="text-gold" />
                          </div>
                          <div className="pillar-info">
                            <h4 className="pillar-title">Studio Residences</h4>
                            <p className="pillar-desc">Contemporary urban living on 3rd–7th floors</p>
                          </div>
                        </div>
                      </div>

                      {/* Block 4: Key Stats & Action CTAs */}
                      <div className="intro-stats-row">
                        <div className="stat-card">
                          <span className="stat-value">2</span>
                          <span className="stat-label">Basement Parking Tiers</span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-value">7+</span>
                          <span className="stat-label">Integrated Spatial Levels</span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-value">0 min</span>
                          <span className="stat-label">Kursi Road Access</span>
                        </div>
                      </div>

                      <div className="intro-actions">
                        <Link to="/project" className="btn-primary">
                          <span>Discover Full Vision</span>
                          <ArrowRight size={16} />
                        </Link>
                        <Link to="/floor-plans" className="btn-secondary">
                          <span>Explore Floor Plans</span>
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. QUICK PROJECT HIGHLIGHTS (3D TILT CARDS)
          ========================================================================= */}
      <section className="section-padding theme-section-dark highlights-section">
        <ArchitecturalBg variant="home_highlights" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Versatile Infrastructure"
            title="Everything Your Business Needs."
            subtitle="Engineered for efficiency, customer engagement and lasting prestige."
            align="center"
            theme="dark"
          />

          {/* Desktop 3x2 Grid & Mobile Touch-Swipeable Slider Container */}
          <div className="highlights-slider-wrapper">
            <div
              className="highlights-grid"
              ref={spacesSliderRef}
              onScroll={handleSpaceScroll}
            >
              {SPACES_CATEGORIES.map((space, idx) => (
                <div key={space.id} className="highlight-grid-col">
                  <TiltCard maxTilt={6} scale={1.01} className="highlight-tilt-card">
                    <div className="highlight-card-inner">
                      <div className="highlight-card-header">
                        <span className="highlight-badge">{space.badge}</span>
                        <span className="highlight-num">0{idx + 1}</span>
                      </div>

                      <div className="highlight-image-wrap">
                        <img
                          src={space.image}
                          alt={space.title}
                          className="highlight-img"
                          loading="lazy"
                        />
                        <div className="highlight-img-overlay" />
                      </div>

                      <h3 className="highlight-card-title">{space.title}</h3>
                      <p className="highlight-card-desc">{space.tagline || space.highlight}</p>

                      <div className="highlight-card-footer">
                        <Link to={space.slug} className="highlight-cta-link">
                          <span>{space.ctaText}</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Navigation Controls (Prev / Next & Slide Dots) */}
            <div className="highlights-mobile-nav">
              <button
                type="button"
                className="highlights-nav-btn prev"
                onClick={() => scrollToSpace(Math.max(0, activeSpaceIndex - 1))}
                disabled={activeSpaceIndex === 0}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="highlights-dots-list">
                {SPACES_CATEGORIES.map((_, idx) => (
                  <button
                    key={`space-dot-${idx}`}
                    type="button"
                    className={`highlights-dot ${activeSpaceIndex === idx ? 'active' : ''}`}
                    onClick={() => scrollToSpace(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="highlights-nav-btn next"
                onClick={() => scrollToSpace(Math.min(SPACES_CATEGORIES.length - 1, activeSpaceIndex + 1))}
                disabled={activeSpaceIndex === SPACES_CATEGORIES.length - 1}
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SPACES SHOWCASE (RETAIL SPOTLIGHT)
          ========================================================================= */}
      <section className="section-padding theme-section-light retail-spotlight-section">
        <ArchitecturalBg variant="home_retail" />
        <div className="container-custom">
          <div className="spotlight-split-grid">
            <div className="spotlight-content-col">
              <SectionHeading
                number="03"
                badge="High-Frontage Commerce"
                title="Made for Brands That Want to Be Seen."
                subtitle="More Visibility. More Possibility."
                align="left"
                theme="light"
              />

              <RevealOnScroll animation="fade-up" delay={200}>
                <p className="spotlight-body">
                  Premium retail spaces with efficient layouts, strong frontage and high visibility.
                </p>
                <p className="spotlight-sub">
                  From flagship stores and boutiques to cafés, restaurants, salons and wellness concepts, Y2R Heights offers spaces designed to strengthen your brand presence and simplify day-to-day operations.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={300}>
                <ul className="spotlight-features">
                  <li>
                    <span className="feature-bullet" />
                    <span>Double-height frontage for prominent brand signage</span>
                  </li>
                  <li>
                    <span className="feature-bullet" />
                    <span>Lower Ground & Upper Ground high-footfall access</span>
                  </li>
                  <li>
                    <span className="feature-bullet" />
                    <span>Wide pedestrian corridors and grand customer arrival</span>
                  </li>
                </ul>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={400}>
                <div className="spotlight-actions">
                  <Link to="/retail" className="btn-primary">
                    <span>Explore Retail Spaces</span>
                    <ArrowRight size={16} />
                  </Link>
                  <button
                    onClick={() => onOpenEnquiry("Retail")}
                    className="btn-secondary"
                  >
                    <span>Reserve Retail Unit</span>
                  </button>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll animation="fade-left" className="spotlight-media-col">
              <TiltCard maxTilt={8} scale={1.02} className="spotlight-tilt">
                <div className="spotlight-media-card">
                  <img
                    src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1400&auto=format&fit=crop"
                    alt="Y2R Heights Retail Concourse"
                    className="spotlight-img"
                  />
                  <div className="spotlight-tag">
                    <span>RETAIL CONCOURSE • LGF & UGF</span>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OFFICE & STUDIO APARTMENTS SPOTLIGHT (DUAL 3D PRESENTATION)
          ========================================================================= */}
      <section className="section-padding theme-section-dark dual-spotlight-section">
        <ArchitecturalBg variant="home_dual_spotlight" />
        <div className="container-custom">
          <SectionHeading
            number="04"
            badge="Productivity & Living"
            title="Workspaces & Contemporary Living"
            subtitle="Customisable Offices • Studio Apartments on 3rd–7th Floors"
            align="center"
            theme="dark"
          />

          <div className="dual-cards-grid">
            {/* Boutique Offices Card */}
            <RevealOnScroll animation="fade-right" className="dual-card-col">
              <TiltCard maxTilt={5} scale={1.01} className="dual-tilt-card">
                <div className="dual-card-inner">
                  <div className="dual-card-image">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                      alt="Boutique Offices at Y2R Heights"
                      loading="lazy"
                    />
                    <span className="dual-badge">Boutique Offices</span>
                  </div>
                  <div className="dual-card-body">
                    <h3 className="dual-card-title">More Than an Office. A Statement.</h3>
                    <p className="dual-card-text">
                      High-efficiency boutique offices designed for modern founders, consultants & corporate firms with natural light and zero wasted space.
                    </p>
                    <div className="dual-specs-pills">
                      <span>Customisable Units</span>
                      <span>Natural Light</span>
                      <span>Zero Wastage</span>
                    </div>
                    <Link to="/offices" className="btn-primary w-full text-center">
                      <span>Explore Office Spaces</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>

            {/* Studio Apartments Card */}
            <RevealOnScroll animation="fade-left" delay={120} className="dual-card-col">
              <TiltCard maxTilt={5} scale={1.01} className="dual-tilt-card">
                <div className="dual-card-inner">
                  <div className="dual-card-image">
                    <img
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
                      alt="Studio Apartments at Y2R Heights"
                      loading="lazy"
                    />
                    <span className="dual-badge">Studio Apartments</span>
                  </div>
                  <div className="dual-card-body">
                    <h3 className="dual-card-title">Urban Living, Simplified.</h3>
                    <p className="dual-card-text">
                      Contemporary studio suites on 3rd–7th floors designed for professionals, corporate stays & long-term rental income in Lucknow.
                    </p>
                    <div className="dual-specs-pills">
                      <span>3rd–7th Floors</span>
                      <span>Private Balconies</span>
                      <span>Turnkey Living</span>
                    </div>
                    <Link to="/studios" className="btn-primary w-full text-center">
                      <span>Explore Studio Apartments</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FOOD COURT SECTION
          ========================================================================= */}
      <section className="section-padding theme-section-white food-court-section">
        <ArchitecturalBg variant="home_foodcourt" />
        <div className="container-custom">
          <div className="spotlight-split-grid reverse-mobile">
            <RevealOnScroll animation="fade-right" className="spotlight-media-col">
              <TiltCard maxTilt={8} scale={1.02} className="spotlight-tilt">
                <div className="spotlight-media-card">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
                    alt="Food Court at Y2R Heights"
                    className="spotlight-img"
                  />
                  <div className="spotlight-tag">
                    <span>CULINARY DESTINATION • SERVICE FLOOR</span>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>

            <div className="spotlight-content-col">
              <SectionHeading
                number="05"
                badge="F&B & Dining"
                title="Where Every Craving Finds Its Place."
                subtitle="QSR • Café • Desserts • Regional Cuisine • Dining Concepts"
                align="left"
                theme="light"
              />

              <RevealOnScroll animation="fade-up" delay={200}>
                <p className="spotlight-body">
                  A vibrant culinary destination created for modern F&B brands.
                </p>
                <p className="spotlight-sub">
                  Generous counter frontage, planned circulation, service and ventilation zones, along with communal seating, create an environment designed to serve both customers and operators efficiently.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={300}>
                <div className="food-categories-pills">
                  <span className="food-pill">QSR Formats</span>
                  <span className="food-pill">Café Culture</span>
                  <span className="food-pill">Dessert Parlours</span>
                  <span className="food-pill">Regional Cuisine</span>
                  <span className="food-pill">Dining Concepts</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={400}>
                <div className="spotlight-actions">
                  <Link to="/food-court" className="btn-primary">
                    <span>Explore F&B Spaces</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. LOCATION & 3D CONNECTIVITY RADAR
          ========================================================================= */}
      <section className="section-padding theme-section-dark location-section">
        <ArchitecturalBg variant="home_location" />
        <div className="container-custom">
          <SectionHeading
            number="06"
            badge="Strategic Nexus"
            title="Strategically Centered. Seamlessly Connected."
            subtitle="A location that keeps business closer to everything that matters."
            description="Y2R Heights is situated near Sector-J Extension, Jankipuram Extension Scheme, with connectivity towards Kursi Road, Sitapur Road, Vikas Nagar, Indira Nagar, Gomti Nagar, Outer Ring Road and Shaheed Path."
            align="center"
            theme="dark"
          />

          {/* Interactive 3D Radar Visualizer */}
          <RevealOnScroll animation="zoom-in" delay={150}>
            <Location3DMap />
          </RevealOnScroll>

          {/* Connectivity Matrix Grid */}
          <div className="connectivity-matrix-grid">
            {CONNECTIVITY_DATA.map((item, idx) => (
              <RevealOnScroll
                key={item.destination}
                animation="fade-up"
                delay={idx * 60}
                className="matrix-col"
              >
                <div className="matrix-card">
                  <div className="matrix-time-bubble">{item.time}</div>
                  <h4 className="matrix-dest">{item.destination}</h4>
                  <span className="matrix-type">{item.type}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/location" className="btn-secondary">
              <span>View Comprehensive Location Analysis</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. AMENITIES MOVING CAROUSEL (Right to Left: 4 on Desktop, 1 on Mobile)
          ========================================================================= */}
      <section className="section-padding theme-section-white amenities-section">
        <ArchitecturalBg variant="home_amenities" />
        <div className="container-custom">
          <SectionHeading
            number="07"
            badge="World-Class Standards"
            title="Thoughtfully Planned. Effortlessly Functional."
            subtitle="Engineered infrastructure supporting seamless daily operations."
            align="center"
            theme="light"
          />
        </div>

        {/* Continuous Right-to-Left Moving Marquee Track */}
        <div className="amenities-marquee-container">
          <div className="amenities-marquee-track">
            {[...AMENITIES_LIST, ...AMENITIES_LIST].map((amenity, idx) => {
              const IconComp = getAmenityIcon(amenity.icon);
              return (
                <div key={`${amenity.title}-${idx}`} className="amenity-marquee-item">
                  <div className="amenity-card-inner">
                    <div className="amenity-icon-box">
                      <IconComp size={24} className="text-gold" />
                    </div>
                    <h3 className="amenity-title">{amenity.title}</h3>
                    <p className="amenity-desc">{amenity.description}</p>
                    <div className="amenity-corner-accent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. PARKING SLABS 3D SECTION
          ========================================================================= */}
      <section className="section-padding theme-section-dark parking-section">
        <ArchitecturalBg variant="home_parking" />
        <div className="container-custom">
          <SectionHeading
            number="08"
            badge="Dual Basement Tiers"
            title="Designed for Effortless Arrival."
            subtitle="Two dedicated basement parking levels support convenient access for occupants and visitors."
            align="center"
            theme="dark"
          />

          <div className="parking-slabs-grid">
            {PARKING_LEVELS.map((parking, idx) => (
              <RevealOnScroll
                key={parking.level}
                animation={idx === 0 ? "fade-right" : "fade-left"}
                delay={idx * 150}
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

      {/* =========================================================================
          10. ARCHITECTURAL SCHEMATICS (3D STACKED BLUEPRINT DECK & SPLIT HEADINGS)
          ========================================================================= */}
      <section className="section-padding theme-section-light floor-plans-preview-section">
        <ArchitecturalBg variant="home_floorplans" />
        <div className="container-custom">
          <div className="schematics-split-container">
            {/* Left Column: Interactive 3D Stacked Wallet / Pocket Deck */}
            <div className="schematics-deck-col">
              <RevealOnScroll animation="fade-right">
                <div className="arch-wallet-deck-wrapper">
                  {/* Quick Level Selector Tabs for Instant Grabbing on Desktop & Mobile */}
                  <div className="arch-deck-quick-tabs">
                    {FLOOR_PLANS_DATA.slice(0, 4).map((plan, idx) => {
                      const tabLabels = ['01 LGF', '02 UGF', '03 1st Flr', '04 2nd Flr'];
                      const isSelected = activeDeckCard === idx;
                      return (
                        <button
                          key={`tab-${plan.id}`}
                          type="button"
                          className={`arch-deck-tab-pill ${isSelected ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDeckCard(activeDeckCard === idx ? null : idx);
                          }}
                          aria-label={`Select ${plan.floor}`}
                        >
                          {tabLabels[idx]}
                        </button>
                      );
                    })}
                  </div>

                  <div
                    className="arch-wallet"
                    onMouseLeave={() => setActiveDeckCard(null)}
                  >
                    {/* Wallet Back Foundation */}
                    <div className="arch-wallet-back" />

                    {/* 4 Stacked Architectural Blueprint Cards */}
                    {FLOOR_PLANS_DATA.slice(0, 4).map((plan, idx) => {
                      const cardClassNames = ['arch-card-1', 'arch-card-2', 'arch-card-3', 'arch-card-4'];
                      const cardClass = cardClassNames[idx] || `arch-card-${idx + 1}`;
                      const floorCode = idx === 0 ? 'LGF/UGF' : idx === 1 ? '1ST-FLR' : idx === 2 ? '2ND-FLR' : '3RD-7TH';
                      const isCardActive = activeDeckCard === idx;

                      return (
                        <div
                          key={plan.id}
                          className={`arch-deck-card ${cardClass} ${isCardActive ? 'card-active-pull' : ''}`}
                          onClick={() => onSelectFloorPlan(plan)}
                          onMouseEnter={() => setActiveDeckCard(idx)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Inspect blueprint for ${plan.floor}`}
                        >
                          <div className="arch-card-inner">
                            <div className="arch-card-top">
                              <span className="arch-card-floor">{plan.floor}</span>
                              <div className="arch-chip" />
                            </div>

                            <div className="arch-card-middle">
                              <h4 className="arch-card-purpose">{plan.purpose}</h4>
                              <p className="arch-card-desc">{plan.description}</p>
                            </div>

                            <div className="arch-card-bottom">
                              <div className="arch-card-spec">
                                <span className="arch-spec-label">CAD SPEC</span>
                                <span className="arch-spec-val">SCHEMATIC v2.4</span>
                              </div>
                              <div className="arch-card-code-wrap">
                                <span className="arch-code-hidden">•••• •••• {floorCode}</span>
                                <span className="arch-inspect-prompt">
                                  <span>Inspect</span>
                                  <ArrowUpRight size={13} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Front Architectural Pocket */}
                    <div className="arch-pocket">
                      <div className="arch-pocket-content">
                        <div className="arch-pocket-emblem">
                          <Compass size={22} className="arch-pocket-icon" />
                        </div>
                        <div className="arch-pocket-title">Y2R ARCHITECTURAL DECK</div>
                        <div className="arch-pocket-level-badge">
                          <span className="pocket-hint-stars">4 CORE SPATIAL LEVELS</span>
                          <span className="pocket-hint-real">CLICK CARD TO INSPECT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Headings, Spatial Level Breakdowns, & Actions */}
            <div className="schematics-content-col">
              <RevealOnScroll animation="fade-left">
                {/* 1. Animated Text Box */}
                <div className="schematics-text-anim-box">
                  <SectionHeading
                    number="09"
                    badge="Architectural Schematics"
                    title="A Space for Every Ambition."
                    subtitle="Structured vertical integration from Lower Ground to Rooftop Terrace."
                    align="left"
                    theme="light"
                  />

                  <p className="schematics-lead-text">
                    Y2R Heights is engineered with precision spatial zoning—separating vibrant high-footfall retail, dynamic commercial office suites, expansive banquets, and serene residential studios into seamless vertical tiers.
                  </p>
                </div>

                {/* 2. Animated 4-Boxes Container */}
                <div className="schematics-boxes-anim-wrapper">
                  <div className="schematics-levels-list">
                    {FLOOR_PLANS_DATA.slice(0, 4).map((plan, idx) => (
                      <div
                        key={`level-row-${plan.id}`}
                        className={`schematic-alert-box alert-tier-${idx + 1}`}
                        onClick={() => onSelectFloorPlan(plan)}
                        role="alert"
                        tabIndex={0}
                        aria-label={`${plan.floor} - ${plan.purpose}`}
                      >
                        <div className="alert-box-shimmer" />
                        <svg
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="alert-box-svg"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        </svg>

                        <div className="alert-box-num">0{idx + 1}</div>

                        <div className="alert-box-info">
                          <span className="alert-box-floor">{plan.floor}</span>
                          <span className="alert-box-purpose">{plan.purpose}</span>
                        </div>

                        <ArrowUpRight size={15} className="alert-box-arrow" />
                      </div>
                    ))}
                  </div>

                  <div className="schematics-cta-wrap">
                    <Link to="/floor-plans" className="btn-primary">
                      <span>View All 7 Spatial Levels</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. WHY Y2R HEIGHTS
          ========================================================================= */}
      <section className="section-padding theme-section-dark why-section">
        <ArchitecturalBg variant="home_why" />
        <div className="container-custom">
          <SectionHeading
            number="10"
            badge="Value Proposition"
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
                delay={idx * 100}
                className="why-col"
              >
                <div className="coin-3d-wrapper">
                  <div className="coin-rotating-card" role="article" aria-label={`${pt.title} - ${pt.description}`}>
                    {/* Front Face (Heads) */}
                    <div className="coin-side coin-front">
                      <div className="coin-inner-disc">
                        <span className="coin-front-badge">PILLAR {pt.id}</span>
                        <div className="coin-gold-medallion">
                          <span className="coin-medallion-text">{pt.id}</span>
                        </div>
                        <h3 className="coin-title-text">{pt.title}</h3>
                        <span className="coin-sub-tag">VALUE PROPOSITION</span>
                        <span className="coin-loc-text">Y2R HEIGHTS • LUCKNOW</span>
                      </div>
                    </div>

                    {/* Back Face (Tails) */}
                    <div className="coin-side coin-back">
                      <div className="coin-inner-disc">
                        <span className="coin-back-pillar">PILLAR {pt.id}</span>
                        <h4 className="coin-back-heading">{pt.title}</h4>
                        <div className="coin-gold-divider" />
                        <p className="coin-back-description">{pt.description}</p>
                        <div className="coin-rera-stamp">
                          <span>UP RERA APPROVED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. INVESTMENT OVERVIEW (STRICTLY FACTUAL)
          ========================================================================= */}
      <section className="section-padding theme-section-white investment-teaser-section">
        <ArchitecturalBg variant="home_investment" />
        <div className="container-custom">
          <div className="investment-slab architectural-grid-gold">
            <div className="investment-content">
              <span className="gold-badge">Commercial Real Estate</span>
              <h2 className="investment-title">An Address Designed for Tomorrow.</h2>
              <p className="investment-highlight">
                Own a Space Where Growth Takes Centre Stage.
              </p>
              <p className="investment-text">
                For investors and end-users alike, Y2R Heights combines location, versatile commercial formats and contemporary infrastructure in one emerging business destination.
              </p>

              <div className="investment-actions">
                <Link to="/investment" className="btn-primary">
                  <span>Explore Investment Parameters</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => onOpenEnquiry("Investment")}
                  className="btn-secondary"
                >
                  <span>Request Investment Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. GALLERY PREVIEW (MASONRY SHOWCASE)
          ========================================================================= */}
      <section className="section-padding theme-section-dark gallery-preview-section">
        <ArchitecturalBg variant="home_gallery" />
        <div className="container-custom">
          <SectionHeading
            number="11"
            badge="Visual Gallery"
            title="See The Vision Take Shape."
            subtitle="Exterior • Retail • Offices • Studios • Food Court • Floor Plans"
            align="center"
            theme="dark"
          />

          <div className="gallery-masonry-preview">
            {GALLERY_ITEMS.slice(0, 6).map((item, idx) => (
              <RevealOnScroll
                key={item.id}
                animation="zoom-in"
                delay={idx * 80}
                className={`gallery-card aspect-${item.aspect}`}
              >
                <div
                  className="gallery-item-inner"
                  onClick={() => onSelectGalleryItem(idx)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-badge">{item.categoryLabel}</span>
                    <h4 className="gallery-title">{item.title}</h4>
                    <span className="gallery-click-cue">Click to view fullscreen</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-primary">
              <span>View Complete Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          14. BRAND STATEMENT (CINEMATIC LUXURY ACCENT)
          ========================================================================= */}
      <section className="brand-statement-section theme-section-dark">
        <div className="brand-statement-bg">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
            alt="Y2R Heights Statement"
          />
          <div className="brand-statement-overlay" />
        </div>

        <div className="container-custom brand-statement-content">
          <RevealOnScroll animation="zoom-in">
            <span className="gold-badge mb-4">The Benchmark</span>
            <h2 className="statement-title">
              Rise Where the World <br />
              <span className="gold-gradient-text">Takes Notice.</span>
            </h2>
            <p className="statement-desc">
              Y2R Heights is envisioned as more than another commercial building. It is a contemporary destination created for ambitious businesses, growing brands and people who value visibility, functionality and presence.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================================================
          15. ENQUIRY SECTION (INTEGRATED CONSULTATION FORM)
          ========================================================================= */}
      <section className="section-padding theme-section-white enquiry-section" id="enquiry">
        <ArchitecturalBg variant="home_enquiry" />
        <div className="container-custom">
          <div className="enquiry-split-grid">
            <div className="enquiry-text-col">
              <SectionHeading
                number="12"
                badge="Direct Consultation"
                title="Your Next Business Address Starts Here."
                subtitle="Speak with our advisory team and discover the space that fits your requirement."
                align="left"
                theme="light"
              />

              <p className="enquiry-lead">
                Looking for retail, office, studio or commercial investment opportunities at Y2R Heights?
              </p>

              <div className="enquiry-direct-links">
                <div className="enquiry-link-card">
                  <span className="link-tag">Toll Free Consultation</span>
                  <a href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`} className="link-val">
                    {PROJECT_INFO.tollFree}
                  </a>
                </div>

                <div className="enquiry-link-card">
                  <span className="link-tag">Official Inquiries</span>
                  <a href={`mailto:${PROJECT_INFO.email}`} className="link-val">
                    {PROJECT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="enquiry-rera-badge">
                <ShieldCheck size={18} className="text-gold" />
                <span>UP RERA Registration: <strong>{PROJECT_INFO.reraNumber}</strong></span>
              </div>
            </div>

            <div className="enquiry-form-col">
              <div className="enquiry-form-card architectural-grid">
                <EnquiryForm defaultInterest="Retail" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RIGHT-SIDE ANIMATED HIGHLIGHTS POPUP (Auto Opens on Website Load)
          ========================================================================= */}
      <div
        className={`project-highlights-popup ${showHighlightsPopup ? 'visible' : ''}`}
        role="dialog"
        aria-label="Project Highlights"
      >
        <div className="popup-glass-card">
          <div className="popup-header">
            <div className="popup-header-title">
              <span className="popup-live-dot" />
              <span className="popup-badge-label">Key Project Highlights</span>
            </div>
            <button
              type="button"
              className="popup-close-btn"
              onClick={() => setShowHighlightsPopup(false)}
              aria-label="Close highlights"
            >
              <X size={15} />
            </button>
          </div>

          <div className="popup-points-list">
            {/* Point 1: UP RERA */}
            <div className="popup-point-item">
              <div className="popup-icon-wrap">
                <ShieldCheck size={18} className="text-gold flex-shrink-0" />
              </div>
              <div className="popup-point-content">
                <span className="popup-point-tag">RERA Approved</span>
                <span className="popup-point-val">UP RERA: {PROJECT_INFO.reraNumber}</span>
              </div>
            </div>

            {/* Point 2: Double Basement Parking */}
            <div className="popup-point-item">
              <div className="popup-icon-wrap">
                <Car size={18} className="text-gold flex-shrink-0" />
              </div>
              <div className="popup-point-content">
                <span className="popup-point-tag">Structured Parking</span>
                <span className="popup-point-val">Double Basement Parking (40+ Vehicles)</span>
              </div>
            </div>

            {/* Point 3: 7 Integrated Spatial Levels */}
            <div className="popup-point-item">
              <div className="popup-icon-wrap">
                <Building2 size={18} className="text-gold flex-shrink-0" />
              </div>
              <div className="popup-point-content">
                <span className="popup-point-tag">Vertical Elevation</span>
                <span className="popup-point-val">7 Integrated Spatial Levels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

