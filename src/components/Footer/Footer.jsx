import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import y2rLogo from '../../assets/y2r2.png';
import './Footer.css';

export default function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      {/* Top Gold Accent Bar */}
      <div className="footer-top-accent" />

      <div className="footer-container">
        <div className="footer-main-grid">
          {/* Column 1: Brand & Manifesto */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img src={y2rLogo} alt="Y2R Heights" className="footer-brand-logo-img" />
            </div>

            <p className="footer-tagline-text">
              Where Vision Meets Value.
            </p>

            <p className="footer-manifesto">
              A premium destination for business, retail and contemporary living strategically positioned along Lucknow's thriving Kursi Road – Jankipuram Extension corridor.
            </p>

            <div className="footer-rera-box">
              <ShieldCheck className="text-gold flex-shrink-0" size={20} />
              <div>
                <span className="rera-label">UP RERA Registered Project</span>
                <span className="rera-code">{PROJECT_INFO.reraNumber}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/project">Project Vision</Link></li>
              <li><Link to="/spaces">Commercial Spaces</Link></li>
              <li><Link to="/location">Strategic Location</Link></li>
              <li><Link to="/floor-plans">Floor Plans & Specs</Link></li>
              <li><Link to="/gallery">Visual Gallery</Link></li>
              <li><Link to="/investment">Investment Overview</Link></li>
              <li><Link to="/contact">Contact & Site Visit</Link></li>
            </ul>
          </div>

          {/* Column 3: Spaces Breakdown */}
          <div className="footer-col">
            <h4 className="footer-heading">Spatial Formats</h4>
            <ul className="footer-links-list">
              <li><Link to="/retail">High-Frontage Retail</Link></li>
              <li><Link to="/offices">Boutique Office Suites</Link></li>
              <li><Link to="/studios">Contemporary Studios (3rd–7th Fl.)</Link></li>
              <li><Link to="/food-court">Food Court & Culinary Zones</Link></li>
              <li><Link to="/spaces">Banquet & Event Halls</Link></li>
              <li><Link to="/floor-plans">Basement 1 & 2 Parking</Link></li>
            </ul>

            <div className="footer-enquiry-box">
              <p className="enquiry-prompt">Explore spaces tailored for your brand.</p>
              <button onClick={onOpenEnquiry} className="btn-secondary footer-enquire-btn">
                <span>Request Details</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin className="contact-icon text-gold" size={18} />
                <div>
                  <span className="contact-tag">Site Sales Office</span>
                  <p className="contact-value">{PROJECT_INFO.siteOffice}</p>
                </div>
              </div>

              <div className="contact-item">
                <MapPin className="contact-icon text-gold" size={18} />
                <div>
                  <span className="contact-tag">Registered Office</span>
                  <p className="contact-value">{PROJECT_INFO.registeredOffice}</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon text-gold" size={18} />
                <div>
                  <span className="contact-tag">Direct Lines</span>
                  <p className="contact-value">
                    <a href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`} className="phone-anchor font-semibold text-gold-light">
                      {PROJECT_INFO.tollFree} (Toll Free)
                    </a>
                  </p>
                  <p className="contact-value text-sm mt-1">
                    <a href="tel:9235742750" className="phone-anchor">9235742750</a> / <a href="tel:9194706137" className="phone-anchor">91947 06137</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <Mail className="contact-icon text-gold" size={18} />
                <div>
                  <span className="contact-tag">Official Inquiries</span>
                  <p className="contact-value">
                    <a href={`mailto:${PROJECT_INFO.email}`} className="email-anchor">
                      {PROJECT_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} Y2R HEIGHTS. All Rights Reserved. Designed for Business. Built for Growth.
          </p>

          <div className="footer-legal-links">
            <span className="legal-item">UP RERA: {PROJECT_INFO.reraNumber}</span>
            <span className="legal-separator">•</span>
            <span className="legal-item">Privacy Policy</span>
            <span className="legal-separator">•</span>
            <span className="legal-item">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

