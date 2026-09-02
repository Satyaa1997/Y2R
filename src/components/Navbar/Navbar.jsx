import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  PhoneCall,
  ArrowUpRight,
  ChevronDown,
  Store,
  Briefcase,
  Home as HomeIcon,
  UtensilsCrossed,
  Layers,
  MapPin,
  ShieldCheck,
  Building2,
  Image,
  FileText,
  Download
} from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import y2rLogo from '../../assets/y2r2.png';
import './Navbar.css';

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
        { title: 'Retail Showcase', subtitle: 'Double-Height Frontage', path: '/retail', icon: Store },
        { title: 'Corporate Workspaces', subtitle: 'Scalable Office Units', path: '/offices', icon: Briefcase },
        { title: 'Contemporary Living', subtitle: 'Studio / Service Apartments', path: '/studios', icon: HomeIcon },
        { title: 'Culinary Hub', subtitle: 'QSR & Communal Seating', path: '/food-court', icon: UtensilsCrossed },
        { title: 'All Spaces Directory', subtitle: 'Explore Vertical Ecosystem', path: '/spaces', icon: Building2 }
      ]
    },
    {
      name: 'Floor Plans',
      path: '/floor-plans',
      items: [
        { title: 'All 7 Integrated Levels', subtitle: 'Interactive Blueprints', path: '/floor-plans', icon: Layers },
        { title: 'Lower Ground (LGF)', subtitle: 'Anchor Retail Floor', path: '/floor-plans', icon: FileText },
        { title: 'Upper Ground (UGF)', subtitle: 'Road Facing Retail', path: '/floor-plans', icon: FileText },
        { title: '1st & 2nd Floors', subtitle: 'Offices & Banquet Hall', path: '/floor-plans', icon: FileText },
        { title: 'Service Floor', subtitle: 'Dedicated Food Court', path: '/floor-plans', icon: FileText },
        { title: '3rd to 7th Floors', subtitle: 'Studio Apartment Tiers', path: '/floor-plans', icon: FileText }
      ]
    },
    {
      name: 'Location',
      path: '/location',
      items: [
        { title: 'Kursi Road Advantage', subtitle: 'Near Sector-J Extension', path: '/location', icon: MapPin },
        { title: '3D Transit Radar', subtitle: 'Calculated Travel Times', path: '/location', icon: Layers },
        { title: 'Catchment Corridors', subtitle: 'Sitapur Rd & Ring Road', path: '/location', icon: Building2 }
      ]
    },
    {
      name: 'Project',
      path: '/project',
      items: [
        { title: 'Project Overview', subtitle: 'Architecture & Vision', path: '/project', icon: Building2 },
        { title: 'Visual Gallery', subtitle: 'High-Res Photo Showcase', path: '/gallery', icon: Image },
        { title: 'World-Class Amenities', subtitle: 'Parking, Elevators, Security', path: '/project', icon: ShieldCheck }
      ]
    }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
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
                  {group.items.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={item.title}
                        to={item.path}
                        className="dropdown-menu-item"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="menu-item-icon-box">
                          <IconComp size={16} className="text-gold" />
                        </div>
                        <div className="menu-item-text">
                          <span className="menu-item-title">{item.title}</span>
                          <span className="menu-item-subtitle">{item.subtitle}</span>
                        </div>
                      </Link>
                    );
                  })}
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
          {/* Call Helpline Button */}
          <a
            href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
            className="navbar-helpline-cta"
            aria-label={`Call Helpline ${PROJECT_INFO.tollFree}`}
          >
            <div className="helpline-icon-wrap">
              <PhoneCall size={15} />
            </div>
            <div className="helpline-text-group">
              <span className="helpline-micro-label">Toll-Free Helpline</span>
              <span className="helpline-number-val">{PROJECT_INFO.tollFree}</span>
            </div>
          </a>

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

