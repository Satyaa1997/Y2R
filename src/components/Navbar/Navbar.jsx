import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  PhoneCall,
  ArrowUpRight,
  Download,
  ChevronDown,
  Building2,
  Sparkles
} from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import y2rLogo from '../../assets/y2r2.png';
import './Navbar.css';

// Custom SVG Social Media Icons for maximum crispness and zero dependency overhead
const FacebookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
  </svg>
);

const XTwitterIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Navbar({ onOpenBrochure }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const location = useLocation();

  const isAboutActive = location.pathname.startsWith('/about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Black Thin Top Strip (Toll Free Left, Social Media Right) */}
      <div className="navbar-top-strip">
        <div className="top-strip-container">
          {/* Left Side: Toll-Free Number in White Text */}
          <div className="top-strip-left">
            <a
              href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
              className="top-strip-tollfree-link"
              aria-label={`Call Toll Free ${PROJECT_INFO.tollFree}`}
            >
              <PhoneCall size={12} className="top-strip-phone-icon" />
              <span className="top-strip-label">Toll Free :</span>
              <span className="top-strip-number">{PROJECT_INFO.tollFree}</span>
            </a>
          </div>

          {/* Right Side: Social Media Icons in White */}
          <div className="top-strip-right">
            <div className="top-strip-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="top-strip-social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-strip-social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="top-strip-social-link" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="top-strip-social-link" aria-label="YouTube">
                <YoutubeIcon />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="top-strip-social-link" aria-label="X Twitter">
                <XTwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="navbar-main-bar">
        <div className="navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" aria-label="Y2R Heights Home">
            <img src={y2rLogo} alt="Y2R Heights Logo" className="brand-logo-img" />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="navbar-menu-desktop" aria-label="Main Navigation">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`}
            >
              Home
              <span className="nav-indicator" />
            </NavLink>

            {/* About Dropdown */}
            <div
              className={`nav-dropdown-wrapper ${activeDropdown === 'about' ? 'is-open' : ''}`}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className={`nav-item nav-dropdown-trigger ${isAboutActive ? 'nav-item-active' : ''}`}>
                About
                <ChevronDown size={14} className="dropdown-arrow-icon" />
                <span className="nav-indicator" />
              </span>

              <div className="nav-dropdown-menu">
                <div className="nav-dropdown-grid">
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) => `dropdown-menu-item ${isActive ? 'dropdown-menu-item-active' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="menu-item-icon-box">
                      <Building2 size={16} className="text-gold" />
                    </div>
                    <div className="menu-item-text">
                      <span className="menu-item-title">About Us</span>
                      <span className="menu-item-subtitle">Developer Profile & Vision</span>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/about-project"
                    className={({ isActive }) => `dropdown-menu-item ${isActive ? 'dropdown-menu-item-active' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="menu-item-icon-box">
                      <Sparkles size={16} className="text-gold" />
                    </div>
                    <div className="menu-item-text">
                      <span className="menu-item-title">About Project</span>
                      <span className="menu-item-subtitle">Y2R Heights Landmark Overview</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Floor Plans Direct Link */}
            <NavLink
              to="/floor-plans"
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`}
            >
              Floor Plans
              <span className="nav-indicator" />
            </NavLink>

            {/* Location Direct Link */}
            <NavLink
              to="/location"
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`}
            >
              Location
              <span className="nav-indicator" />
            </NavLink>
            
             {/* Project Direct Link */}
            <NavLink
              to="/project"
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`}
            >
              Project
              <span className="nav-indicator" />
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`}
            >
              Contact
              <span className="nav-indicator" />
            </NavLink>
          </nav>

          {/* Right Action Area */}
          <div className="navbar-actions-desktop">
            {/* Download Brochure Button */}
            <button
              onClick={onOpenBrochure}
              className="btn-primary navbar-brochure-btn"
              aria-label="Download Project Brochure"
            >
              <Download size={14} />
              <span>DOWNLOAD BROCHURE</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <div className="mobile-brand-box">
              <img src={y2rLogo} alt="Y2R Heights" className="mobile-logo-img" />
            </div>
            <button
              className="mobile-drawer-close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-nav-links">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'mobile-nav-item-active' : ''}`
              }
            >
              <span className="mobile-link-name">Home</span>
              <ArrowUpRight size={18} className="mobile-link-arrow" />
            </NavLink>

            {/* About Mobile Accordion Dropdown */}
            <div className="mobile-nav-group">
              <div
                className={`mobile-group-header ${isAboutActive ? 'mobile-nav-item-active' : ''}`}
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              >
                <span>About</span>
                <ChevronDown
                  size={18}
                  className={`mobile-chevron ${isMobileAboutOpen ? 'rotated' : ''}`}
                />
              </div>
              {isMobileAboutOpen && (
                <div className="mobile-group-submenu">
                  <NavLink
                    to="/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `mobile-submenu-item ${isActive ? 'mobile-submenu-active' : ''}`
                    }
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Building2 size={16} className="text-gold" />
                      <span className="mobile-sub-title">About Us</span>
                    </div>
                    <span className="mobile-sub-desc">Developer Profile & Vision</span>
                  </NavLink>
                  <NavLink
                    to="/about-project"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `mobile-submenu-item ${isActive ? 'mobile-submenu-active' : ''}`
                    }
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles size={16} className="text-gold" />
                      <span className="mobile-sub-title">About Project</span>
                    </div>
                    <span className="mobile-sub-desc">Y2R Heights Landmark Overview</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Project Direct Link */}
            <NavLink
              to="/project"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'mobile-nav-item-active' : ''}`
              }
            >
              <span className="mobile-link-name">Project</span>
              <ArrowUpRight size={18} className="mobile-link-arrow" />
            </NavLink>

            {/* Floor Plans Direct Link */}
            <NavLink
              to="/floor-plans"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'mobile-nav-item-active' : ''}`
              }
            >
              <span className="mobile-link-name">Floor Plans</span>
              <ArrowUpRight size={18} className="mobile-link-arrow" />
            </NavLink>

            {/* Location Direct Link */}
            <NavLink
              to="/location"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'mobile-nav-item-active' : ''}`
              }
            >
              <span className="mobile-link-name">Location</span>
              <ArrowUpRight size={18} className="mobile-link-arrow" />
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'mobile-nav-item-active' : ''}`
              }
            >
              <span className="mobile-link-name">Contact & Site Office</span>
              <ArrowUpRight size={18} className="mobile-link-arrow" />
            </NavLink>
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-contact-card">
              <span className="mobile-contact-label">Direct Project Helpline</span>
              <a
                href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
                className="mobile-phone-cta"
              >
                <PhoneCall size={16} className="text-gold" />
                <span>{PROJECT_INFO.tollFree}</span>
              </a>
              <span className="mobile-rera-tag">UP RERA: {PROJECT_INFO.reraNumber}</span>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="btn-primary w-full py-4 text-center justify-center mt-4"
            >
              <Download size={18} />
              <span>DOWNLOAD BROCHURE</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

