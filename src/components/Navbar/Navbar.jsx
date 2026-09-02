import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  PhoneCall,
  ArrowUpRight,
  ChevronDown,
  Download
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
  const [mobileExpanded, setMobileExpanded] = useState({});

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

  const toggleMobileGroup = (group) => {
    setMobileExpanded((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const navGroups = [
    {
      name: 'Spaces',
      path: '/spaces',
      items: [
        { title: 'Retail Showcase', subtitle: 'Double-Height Frontage', path: '/retail' },
        { title: 'Corporate Workspaces', subtitle: 'Scalable Office Units', path: '/offices' },
        { title: 'Contemporary Living', subtitle: 'Studio / Service Apartments', path: '/studios' },
        { title: 'Culinary Hub', subtitle: 'QSR & Communal Seating', path: '/food-court' },
        { title: 'All Spaces Directory', subtitle: 'Explore Vertical Ecosystem', path: '/spaces' }
      ]
    },
    {
      name: 'Floor Plans',
      path: '/floor-plans',
      items: [
        { title: 'All 7 Integrated Levels', subtitle: 'Interactive Blueprints', path: '/floor-plans' },
        { title: 'Lower Ground (LGF)', subtitle: 'Anchor Retail Floor', path: '/floor-plans' },
        { title: 'Upper Ground (UGF)', subtitle: 'Road Facing Retail', path: '/floor-plans' },
        { title: '1st & 2nd Floors', subtitle: 'Offices & Banquet Hall', path: '/floor-plans' },
        { title: 'Service Floor', subtitle: 'Dedicated Food Court', path: '/floor-plans' },
        { title: '3rd to 7th Floors', subtitle: 'Studio Apartment Tiers', path: '/floor-plans' }
      ]
    },
    {
      name: 'Location',
      path: '/location',
      items: [
        { title: 'Kursi Road Advantage', subtitle: 'Near Sector-J Extension', path: '/location' },
        { title: '3D Transit Radar', subtitle: 'Calculated Travel Times', path: '/location' },
        { title: 'Catchment Corridors', subtitle: 'Sitapur Rd & Ring Road', path: '/location' }
      ]
    },
    {
      name: 'Project',
      path: '/project',
      items: [
        { title: 'Project Overview', subtitle: 'Architecture & Vision', path: '/project' },
        { title: 'Visual Gallery', subtitle: 'High-Res Photo Showcase', path: '/gallery' },
        { title: 'World-Class Amenities', subtitle: 'Parking, Elevators, Security', path: '/project' }
      ]
    }
  ];

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

          {/* Desktop Navigation Menu with PropertyWala Dropdowns */}
          <nav className="navbar-menu-desktop" aria-label="Main Navigation">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`}
            >
              Home
              <span className="nav-indicator" />
            </NavLink>

            {navGroups.map((group) => (
              <div
                key={group.name}
                className={`nav-dropdown-wrapper ${activeDropdown === group.name ? 'is-open' : ''}`}
                onMouseEnter={() => setActiveDropdown(group.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={group.path}
                  className="nav-item nav-dropdown-trigger"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span>{group.name}</span>
                  {group.badge && <span className="nav-hot-badge">{group.badge}</span>}
                  <ChevronDown size={14} className="dropdown-arrow-icon" />
                  <span className="nav-indicator" />
                </Link>

                {/* Portal-Style Dropdown Flyout */}
                <div className="nav-dropdown-menu">
                  <div className="nav-dropdown-grid">
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        className="dropdown-menu-item"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="menu-item-text">
                          <span className="menu-item-title">{item.title}</span>
                          <span className="menu-item-subtitle">{item.subtitle}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

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

            {navGroups.map((group) => {
              const isExpanded = mobileExpanded[group.name];
              return (
                <div key={group.name} className="mobile-nav-group">
                  <div
                    className="mobile-group-header"
                    onClick={() => toggleMobileGroup(group.name)}
                  >
                    <span className="mobile-link-name">{group.name}</span>
                    <ChevronDown
                      size={18}
                      className={`mobile-chevron ${isExpanded ? 'rotated' : ''}`}
                    />
                  </div>

                  {isExpanded && (
                    <div className="mobile-group-submenu">
                      {group.items.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="mobile-submenu-item"
                        >
                          <span className="mobile-sub-title">{sub.title}</span>
                          <span className="mobile-sub-desc">{sub.subtitle}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

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

