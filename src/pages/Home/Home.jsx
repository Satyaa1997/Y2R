import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroVideo from '../../assets/Herovedio.mp4';
import qrImage from '../../assets/QR.png';
import buildingImage from '../../assets/Building.JPG';
import building1Image from '../../assets/Building1.JPG';

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  MapPin,
  Car,
  ShieldCheck,
  Phone,
  X,
  Maximize2,
  DoorOpen,
  Building2,
  MoveUp,
  Camera,
  Zap,
  Sparkles,
  Layers
} from 'lucide-react';
import {
  PROJECT_INFO,
  SPACES_CATEGORIES,
  AMENITIES_LIST,
  PARKING_LEVELS,
  FLOOR_PLANS_DATA,
  WHY_Y2R_POINTS
} from '../../data/projectData';
import { GALLERY_ITEMS } from '../../data/galleryData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import Commercial3DAnimation from '../../components/Commercial3DAnimation/Commercial3DAnimation';
import './Home.css';

const AMENITY_ICONS_MAP = {
  DoorOpen,
  Building2,
  MoveUp,
  Car,
  ShieldCheck,
  Camera,
  Zap,
  Sparkles
};

export default function Home({ onOpenEnquiry, onSelectGalleryItem }) {
  const navigate = useNavigate();
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
                <MapPin size={15} className="text-gold" />
                <span>Kursi Road | Jankipuram Extension, Lucknow</span>
              </div>

              <h1 className="hero-portal-title">
                Where Vision <br />
                <span className="hero-title-white">Meets Value.</span>
              </h1>

              <p className="hero-portal-desc">
                Welcome to Y2R Heights - Lucknow's premier destination for high-frontage commercial retail, boutique corporate offices, dedicated dining food courts, and contemporary studio apartments on Kursi Road.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PRECISION PLANNING MEETS PREMIUM DESIGN (Brochure Poster Showcase)
          ========================================================================= */}
      <section className="section-padding theme-section-white brochure-overview-section" id="overview">
        <div className="container-custom">
          <div className="brochure-overview-grid">
            {/* Left Column: Brochure Content, Branding & 7-Feature Matrix */}
            <RevealOnScroll animation="fade-right" className="brochure-overview-content-col">
              <div className="brochure-content-wrapper">
          
                {/* Main Titles */}
                <div className="brochure-titles-block">
                  <h2 className="brochure-title-primary">PRECISION PLANNING</h2>
                  <h3 className="brochure-title-secondary">MEETS PREMIUM DESIGN</h3>
                </div>

                {/* Uppercase Lead Narrative */}
                <p className="brochure-lead-statement">
                  Y2R HEIGHTS OFFERS A SEAMLESS COMMERCIAL EXPERIENCE THROUGH ITS G+8 STRUCTURE, BACKED BY SMART INFRASTRUCTURE AND REFINED PLANNING.
                </p>

                {/* Descriptive Body Paragraph */}
                <p className="brochure-body-text">
                  With a grand entrance lobby, dedicated Ground and Basement parking levels, and six high-speed elevators, the development ensures seamless mobility and secure access for occupants and visitors alike. Crowned with a contemporary glass façade, the project blends modern aesthetics with smart design, creating an impressive business destination that perfectly balances elegance and functionality.
                </p>

                {/* 7 Architectural Feature Icons Grid */}
                <div className="brochure-features-grid">
                  {/* Item 1: Studio Apartment */}
                  <div className="brochure-feature-item">
                    <div className="brochure-feature-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" />
                        <path d="M9 22v-4h6v4" />
                        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
                      </svg>
                    </div>
                    <span className="brochure-feature-label">Studio<br />Apartment</span>
                  </div>

                  {/* Item 2: Food Court */}
                  <div className="brochure-feature-item">
                    <div className="brochure-feature-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
                        <path d="M15 2v18" />
                        <path d="M5 2v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2" />
                        <path d="M7 8v12" />
                      </svg>
                    </div>
                    <span className="brochure-feature-label">Food<br />Court</span>
                  </div>

                  {/* Item 3: Grand Entrance Lobby */}
                  <div className="brochure-feature-item">
                    <div className="brochure-feature-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18" />
                        <path d="M5 21V7l7-4 7 4v14" />
                        <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
                        <path d="M9 10h.01M15 10h.01" />
                      </svg>
                    </div>
                    <span className="brochure-feature-label">Grand Entrance<br />Lobby</span>
                  </div>

                  {/* Item 4: High Speed Elevators */}
                  <div className="brochure-feature-item">
                    <div className="brochure-feature-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" />
                        <path d="M9 7l3-3 3 3" />
                        <path d="M9 17l3 3 3-3" />
                        <path d="M12 4v16" />
                      </svg>
                    </div>
                    <span className="brochure-feature-label">High Speed<br />Elevators</span>
                  </div>

                  {/* Item 5: Modern Glass Façade */}
                  <div className="brochure-feature-item">
                    <div className="brochure-feature-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                      </svg>
                    </div>
                    <span className="brochure-feature-label">Modern Glass<br />Façade</span>
                  </div>

                  {/* Item 6: Self Contained Offices */}
                  <div className="brochure-feature-item">
                    <div className="brochure-feature-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <span className="brochure-feature-label">Self Contained<br />Offices</span>
                  </div>

                  {/* Item 7: Retail Spaces */}
                  <div className="brochure-feature-item">
                    <div className="brochure-feature-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l1-6h16l1 6" />
                        <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                        <path d="M4 9v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                        <path d="M9 22v-6h6v6" />
                      </svg>
                    </div>
                    <span className="brochure-feature-label">Retail<br />Spaces</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Column: Master Building Elevation Showcase */}
            <RevealOnScroll animation="fade-left" className="brochure-overview-media-col">
              <div className="brochure-elevation-card">
                {/* Decorative Blue Sky Accent Backdrop behind building */}
                <div className="brochure-sky-backdrop" />
                
                {/* Daytime Uncropped Building Image */}
                <img
                  src={building1Image}
                  alt="Y2R Heights Master Architectural Elevation - Precision Planning Meets Premium Design"
                  className="brochure-master-building-img"
                />
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
                  <Link to={space.slug} className="hasan-card-link">
                    <article className="hasan-uiverse-card">
                      <div className="hasan-sub-card category">
                        <span className="hasan-text-span">{space.badge || 'Commercial'}</span>
                        <div className="hasan-icon-box">
                          <span className="hasan-idx-tag">0{idx + 1}</span>
                          <ArrowUpRight size={14} className="hasan-icon-svg" />
                        </div>
                      </div>

                      <div className="hasan-card-container">
                        <img
                          src={space.image}
                          alt={space.title}
                          className="hasan-card-img"
                          loading="lazy"
                        />
                        <div className="hasan-img-overlay" />
                        <div className="hasan-center-info">
                          <h3 className="hasan-center-title">{space.title}</h3>
                          <p className="hasan-center-desc">{space.tagline || space.highlight}</p>
                        </div>
                      </div>

                      <div className="hasan-sub-card named">
                        <span className="hasan-text-span">{space.title}</span>
                      </div>
                    </article>
                  </Link>
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
              <Link to="/offices" className="sushma-blueprint-card">
                <span className="sushma-dashed-border" />

                <div className="sushma-card-box">
                  {/* Full Size Background Image */}
                  <div className="sushma-img-bg-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                      alt="Boutique Offices at Y2R Heights"
                      className="sushma-card-bg-img"
                      loading="lazy"
                    />
                    <div className="sushma-img-overlay" />
                  </div>

                  {/* Default State (Visible on load, hides on hover) */}
                  <div className="sushma-state-default">
                    <span className="sushma-level-badge">1st & 2nd Floors</span>
                    <h2 className="sushma-card-heading">Boutique Offices</h2>
                  </div>

                  {/* Hover State (Reveals on hover) */}
                  <div className="sushma-state-hover">
                    <div className="sushma-hover-top">
                      <span className="sushma-level-badge">1st & 2nd Floors</span>
                      <h3 className="sushma-card-heading">Boutique Offices</h3>
                      <p className="sushma-card-desc">
                        High-efficiency boutique offices designed for modern founders, consultants & corporate firms with natural light and zero wasted space.
                      </p>
                    </div>

                    <div className="sushma-hover-bottom">
                      <span className="sushma-readmore-link">
                        <span>Explore Office Spaces</span>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>

            {/* Studio Apartments Card */}
            <RevealOnScroll animation="fade-left" delay={120} className="dual-card-col">
              <Link to="/studios" className="sushma-blueprint-card">
                <span className="sushma-dashed-border" />

                <div className="sushma-card-box">
                  {/* Full Size Background Image */}
                  <div className="sushma-img-bg-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
                      alt="Studio Apartments at Y2R Heights"
                      className="sushma-card-bg-img"
                      loading="lazy"
                    />
                    <div className="sushma-img-overlay" />
                  </div>

                  {/* Default State (Visible on load, hides on hover) */}
                  <div className="sushma-state-default">
                    <span className="sushma-level-badge">3rd–7th Floors</span>
                    <h2 className="sushma-card-heading">Studio Apartments</h2>
                  </div>

                  {/* Hover State (Reveals on hover) */}
                  <div className="sushma-state-hover">
                    <div className="sushma-hover-top">
                      <span className="sushma-level-badge">3rd–7th Floors</span>
                      <h3 className="sushma-card-heading">Studio Apartments</h3>
                      <p className="sushma-card-desc">
                        Contemporary studio suites on 3rd–7th floors designed for professionals, corporate stays & long-term rental income in Lucknow.
                      </p>
                    </div>

                    <div className="sushma-hover-bottom">
                      <span className="sushma-readmore-link">
                        <span>Explore Studio Apartments</span>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
          7. AMENITIES MOVING CAROUSEL (Right to Left: 4 on Desktop, 1 on Mobile)
          ========================================================================= */}
      <section className="section-padding theme-section-white amenities-section">
        <ArchitecturalBg variant="home_amenities" />
        <div className="container-custom">
          <SectionHeading
            number="06"
            badge="World-Class Standards"
            title="Thoughtfully Planned. Effortlessly Functional."
            subtitle="Engineered infrastructure supporting seamless daily operations."
            align="center"
            theme="light"
          />

          {/* Luxury Quick Specification Highlights Pill Row */}
          <div className="amenities-quick-specs-row">
            <span className="amenity-spec-pill">
              <Sparkles size={13} className="text-gold" />
              <span>G+8 High-Rise Standards</span>
            </span>
            <span className="amenity-spec-pill">
              <MoveUp size={13} className="text-gold" />
              <span>6 High-Speed Vertical Elevators</span>
            </span>
            <span className="amenity-spec-pill">
              <Car size={13} className="text-gold" />
              <span>Double Basement Structured Parking</span>
            </span>
            <span className="amenity-spec-pill">
              <ShieldCheck size={13} className="text-gold" />
              <span>24/7 CCTV & Electronic Surveillance</span>
            </span>
          </div>
        </div>

        {/* Continuous Right-to-Left Moving Marquee Track */}
        <div className="amenities-marquee-container">
          <div className="amenities-marquee-track">
            {[...AMENITIES_LIST, ...AMENITIES_LIST].map((amenity, idx) => {
              const AmenityIcon = AMENITY_ICONS_MAP[amenity.icon] || Sparkles;
              return (
                <div key={`${amenity.title}-${idx}`} className="amenity-marquee-item">
                  <div className="amenity-uiverse-card">
                    <div className="card__shine" />
                    <div className="card__glow" />

                    {/* Top Architectural Media Frame */}
                    <div className="card__image">
                      <img
                        src={amenity.image}
                        alt={amenity.title}
                        className="card__img-el"
                        loading="lazy"
                      />
                      <div className="card__img-gradient" />

                      {/* Floating Top-Left Luxury Icon */}
                      <div className="card__icon-badge">
                        <AmenityIcon size={16} />
                      </div>

                      {/* Floating Top-Right Spec Badge */}
                      <div className="card__badge">{amenity.badge || 'PREMIUM'}</div>
                    </div>

                    {/* Card Content & Details */}
                    <div className="card__content">
                      <div className="card__tag-row">
                        <span className="card__tag-pill">{amenity.tag || 'Infrastructure'}</span>
                        <span className="card__spec-code">Y2R SPEC</span>
                      </div>

                      <div className="card__text">
                        <h4 className="card__title">{amenity.title}</h4>
                        <p className="card__description">{amenity.description}</p>
                      </div>

                      <div className="card__footer">
                        <span className="card__status-dot-wrap">
                          <span className="card__status-dot" />
                          <span className="card__status-text">Fully Integrated</span>
                        </span>
                        <div className="card__button" aria-label={`Explore ${amenity.title}`}>
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Golden Progress Accent Line */}
                    <div className="card__bottom-accent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. PARKING SLABS 3D SECTION
          ========================================================================= */}
      <section className="section-padding theme-section-dark parking-section">
        <ArchitecturalBg variant="home_parking" />
        <div className="container-custom">
          <SectionHeading
            number="07"
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
                <div className="parking-uiverse-card">
                  <div className="parking-card-content architectural-grid-gold">
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
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. ARCHITECTURAL SCHEMATICS (3D STACKED BLUEPRINT DECK & SPLIT HEADINGS)
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
                      const tabLabels = ['LGF', 'UGF', '1st Flr', '2nd Flr'];
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

                  <div className="arch-wallet">
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
                          onClick={() => {
                            if (activeDeckCard === idx) {
                              navigate(`/floor-plans/${plan.id}`);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                              setActiveDeckCard(idx);
                            }
                          }}
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
                <SectionHeading
                  number="08"
                  badge="Architectural Schematics"
                  title="A Space for Every Ambition."
                  subtitle="Structured vertical integration from Lower Ground to Rooftop Terrace."
                  align="left"
                  theme="light"
                />

                <p className="schematics-lead-text">
                  Y2R Heights is engineered with precision spatial zoning—separating vibrant high-footfall retail, dynamic commercial office suites, expansive banquets, and serene residential studios into seamless vertical tiers.
                </p>

                <div className="schematics-levels-list">
                  {FLOOR_PLANS_DATA.slice(0, 4).map((plan, idx) => (
                    <div
                      key={`level-row-${plan.id}`}
                      className={`schematic-alert-box alert-tier-${idx + 1}`}
                      onClick={() => {
                        navigate(`/floor-plans/${plan.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
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
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. WHY Y2R HEIGHTS
          ========================================================================= */}
      <section className="section-padding theme-section-dark why-section">
        <ArchitecturalBg variant="home_why" />
        <div className="container-custom">
          <SectionHeading
            number="09"
            badge="Value Proposition"
            title="A Location to Grow. A Presence to Remember."
            subtitle="Strategic Location • Versatile Spaces • Premium Planning • Business Visibility"
            align="center"
            theme="dark"
          />

          <div className="why-grid">
            {WHY_Y2R_POINTS.map((pt, idx) => {
              const whyIcons = [Compass, Layers, ShieldCheck, Sparkles];
              const IconComp = whyIcons[idx] || Sparkles;
              return (
                <RevealOnScroll
                  key={pt.id}
                  animation="fade-up"
                  delay={idx * 100}
                  className="why-col"
                >
                  <div className="jubayer-card" role="article" aria-label={`${pt.title} - ${pt.description}`}>
                    {/* Top-Right Circular Badge with Index Number */}
                    <div className="jubayer-badge-circle">
                      <p className="jubayer-badge-num">{pt.id}</p>
                    </div>

                    {/* Top Icon */}
                    <div className="jubayer-icon-box">
                      <IconComp size={38} className="jubayer-icon-svg" />
                    </div>

                    {/* Title */}
                    <h3 className="jubayer-title">{pt.title}</h3>

                    {/* Description */}
                    <p className="jubayer-desc">{pt.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. COMMERCIAL REAL ESTATE / INVESTMENT TEASER (3D ANIMATED BACKGROUND)
          ========================================================================= */}
      {/* =========================================================================
          11. COMMERCIAL REAL ESTATE / INVESTMENT TEASER (3D ANIMATED BACKGROUND - TRANSPARENT)
          ========================================================================= */}
      <section className="section-padding theme-section-white investment-teaser-section" id="commercial-real-estate">
        <Commercial3DAnimation />
        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <RevealOnScroll animation="fade-up">
            <div className="investment-content-transparent">
              <h2 className="investment-title">
                An Address Designed for Tomorrow.
              </h2>

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
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================================================
          12. GALLERY PREVIEW (3D FLIP CARDS GRID - UIVERSE DAVID-MOHSENI)
          ========================================================================= */}
      <section className="section-padding theme-section-dark gallery-preview-section">
        <ArchitecturalBg variant="home_gallery" />
        <div className="container-custom">
          <SectionHeading
            number="10"
            badge="Visual Gallery"
            title="See The Vision Take Shape."
            subtitle="Exterior • Retail • Offices • Studios • Food Court • Floor Plans"
            align="center"
            theme="dark"
          />

          <RevealOnScroll animation="fade-up">
            <div className="gallery-flip-grid">
              {GALLERY_ITEMS.slice(0, 6).map((item, idx) => (
                <div
                  key={item.id}
                  className="flip-card-item"
                  onClick={() => onSelectGalleryItem(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.title} - Click to view fullscreen`}
                >
                  <div className="flip">
                    <div className="content">
                      {/* Front Face (From Uiverse.io by david-mohseni) */}
                      <div
                        className="front"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="flip-front-overlay" />
                        <div className="flip-front-body">
                          <span className="flip-badge">{item.categoryLabel}</span>
                          <h3 className="flip-front-title">{item.title}</h3>
                          <span className="flip-front-num">0{idx + 1}</span>
                        </div>
                      </div>

                      {/* Back Face (From Uiverse.io by david-mohseni) */}
                      <div
                        className="back"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="flip-back-overlay" />
                        <div className="flip-back-body">
                          <span className="flip-badge">{item.categoryLabel}</span>
                          <h3 className="flip-back-title">{item.title}</h3>
                          <p className="flip-back-desc">{item.caption}</p>
                          <button
                            type="button"
                            className="flip-fullscreen-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectGalleryItem(idx);
                            }}
                          >
                            <Maximize2 size={14} />
                            <span>View Fullscreen</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-primary">
              <span>View Complete Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. DIRECT CONSULTATION (PROFESSIONAL 50/50 CARD ON WHITE BACKGROUND)
          ========================================================================= */}
      <section className="section-padding theme-section-white enquiry-section" id="enquiry">
        <ArchitecturalBg variant="home_enquiry" />
        <div className="container-custom">
          <RevealOnScroll animation="fade-up">
            <div className="consultation-pro-card architectural-grid-gold">
              <div className="consultation-pro-grid">
                {/* Left 50%: Direct Consultation & Advisory Details */}
                <div className="consultation-pro-content">
                  <h2 className="consultation-pro-title">
                    Your Next Space Starts Here.
                  </h2>

                  <p className="consultation-pro-desc">
                    Connect directly with our project advisory team to explore prime retail showrooms, boutique corporate offices, and serviced studio apartments with bespoke space configurations at Y2R Heights.
                  </p>

                  {/* 4 Professional Metric Chips */}
                  <div className="consultation-pro-matrix-grid">
                    <div className="consultation-pro-matrix-item">
                      <span className="pro-matrix-val">G+8 Structure</span>
                      <span className="pro-matrix-lbl">11-Storey Landmark Tower</span>
                    </div>
                    <div className="consultation-pro-matrix-item">
                      <span className="pro-matrix-val">Double Basement</span>
                      <span className="pro-matrix-lbl">40+ Dedicated Vehicle Bays</span>
                    </div>
                    <div className="consultation-pro-matrix-item">
                      <span className="pro-matrix-val">6 High-Speed Lifts</span>
                      <span className="pro-matrix-lbl">Rapid Vertical Transit</span>
                    </div>
                    <div className="consultation-pro-matrix-item">
                      <span className="pro-matrix-val">100% Vastu</span>
                      <span className="pro-matrix-lbl">Self-Contained Units</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="consultation-pro-actions">
                    <Link to="/contact" className="btn-primary">
                      <span>Connect With Advisory</span>
                      <ArrowRight size={15} />
                    </Link>
                    <a
                      href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
                      className="btn-secondary"
                    >
                      <Phone size={14} className="text-gold" />
                      <span>{PROJECT_INFO.tollFree}</span>
                    </a>
                  </div>

                  {/* Bottom Verification Strip */}
                  <div className="consultation-pro-footer-tags">
                    <div className="consultation-pro-tag">
                      <ShieldCheck size={16} className="text-gold " />
                      <span>UP RERA: <strong>{PROJECT_INFO.reraNumber}</strong></span>
                    </div>
                    <div className="consultation-pro-tag">
                      <MapPin size={15} className="text-gold " />
                      <span>CP-02, Main Kursi Road, Lucknow</span>
                    </div>
                  </div>
                </div>

                {/* Right 50%: Building Image in Professional Architectural Frame */}
                <div className="consultation-pro-media">
                  <div className="consultation-pro-image-frame">
                    <img
                      src={buildingImage}
                      alt="Y2R Heights Landmark Architectural Elevation"
                      className="consultation-pro-building-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================================================
          RIGHT-SIDE ANIMATED QR POPUP (Auto Opens on Website Load)
          ========================================================================= */}
      <div
        className={`project-highlights-popup qr-transparent-popup ${showHighlightsPopup ? 'visible' : ''}`}
        role="dialog"
        aria-label="Y2R Project QR Code"
      >
        <div className="popup-qr-glass-card">
          <button
            type="button"
            className="popup-qr-close-btn"
            onClick={() => setShowHighlightsPopup(false)}
            aria-label="Close QR Code"
          >
            <X size={16} />
          </button>

          <div className="popup-qr-media-wrap">
            <img
              src={qrImage}
              alt="Y2R Heights Official QR Code"
              className="popup-qr-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

