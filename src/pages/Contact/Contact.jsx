import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Landmark, Globe, Navigation, ExternalLink } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import contactBanner from '../../assets/contactbanner.png';
import './Contact.css';

export default function Contact() {
  const [heroTextFaded, setHeroTextFaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroTextFaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-page-root">
      {/* Page Hero with contactbanner.png Background Image */}
      <section
        className="page-hero-section contact-hero-section theme-section-dark"
        onClick={() => setHeroTextFaded((prev) => !prev)}
      >
        <div className="contact-hero-bg">
          <img
            src={contactBanner}
            alt="Y2R Heights Official Advisory & Contact"
            className="contact-hero-img"
          />
          <div className={`contact-hero-overlay ${heroTextFaded ? 'hero-mobile-faded' : ''}`} />
        </div>
        <ArchitecturalBg variant="contact_hero" />
        <div className="container-custom contact-hero-container">
          <div className={`contact-hero-content ${heroTextFaded ? 'hero-mobile-faded' : ''}`}>
            <h1 className="page-hero-title contact-title-white">
              Visit <br />
              <span>Y2R Heights</span>
            </h1>
            <p className="page-hero-desc">
              Connect directly with our project consultants, arrange on-site inspections, or schedule an in-depth portfolio review.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-padding theme-section-white contact-main-section">
        <ArchitecturalBg variant="contact_main" />
        <div className="container-custom">
          <div className="contact-main-grid">
            {/* Left Column: Direct Info Cards */}
            <div className="contact-info-col">
              <SectionHeading
                number="01"
                badge="Reach Out"
                title="Connect With Us"
                subtitle="We are ready to guide your commercial or residential journey."
                align="left"
              />

              <div className="contact-cards-stack">
                {/* Site Office Card */}
                <RevealOnScroll animation="fade-up" delay={100}>
                  <TiltCard maxTilt={6} scale={1.01} className="contact-detail-tilt">
                    <div className="contact-detail-card">
                      <div className="card-icon-box">
                        <MapPin size={22} className="text-gold" />
                      </div>
                      <div>
                        <span className="card-tag">Site Sales Office</span>
                        <h3 className="card-heading">{PROJECT_INFO.siteOffice}</h3>
                        <p className="card-subtext">Near Sector-J Extension, Jankipuram Scheme, Kursi Road</p>
                      </div>
                    </div>
                  </TiltCard>
                </RevealOnScroll>

                {/* Registered Office Card */}
                <RevealOnScroll animation="fade-up" delay={200}>
                  <TiltCard maxTilt={6} scale={1.01} className="contact-detail-tilt">
                    <div className="contact-detail-card">
                      <div className="card-icon-box">
                        <BuildingPinIcon />
                      </div>
                      <div>
                        <span className="card-tag">Registered Corporate Office</span>
                        <h3 className="card-heading">{PROJECT_INFO.registeredOffice}</h3>
                        <p className="card-subtext">Vineet Khand-2, Gomti Nagar, Lucknow – 226010</p>
                      </div>
                    </div>
                  </TiltCard>
                </RevealOnScroll>

                {/* Telephone Numbers */}
                <RevealOnScroll animation="fade-up" delay={300}>
                  <TiltCard maxTilt={6} scale={1.01} className="contact-detail-tilt">
                    <div className="contact-detail-card">
                      <div className="card-icon-box">
                        <Phone size={22} className="text-gold" />
                      </div>
                      <div>
                        <span className="card-tag">Telephone Inquiries</span>
                        <div className="phone-links-group">
                          <a
                            href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
                            className="phone-link-main"
                          >
                            {PROJECT_INFO.tollFree} <span className="toll-badge">Toll Free</span>
                          </a>
                          <div className="direct-nums">
                            <a href="tel:9235742750">9235742750</a>
                            <span className="num-sep">/</span>
                            <a href="tel:9194706137">91947 06137</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </RevealOnScroll>

                {/* Official Email & Portal */}
                <RevealOnScroll animation="fade-up" delay={400}>
                  <TiltCard maxTilt={6} scale={1.01} className="contact-detail-tilt">
                    <div className="contact-detail-card">
                      <div className="card-icon-box">
                        <Mail size={22} className="text-gold" />
                      </div>
                      <div>
                        <span className="card-tag">Official Inquiries & Portal</span>
                        <a href={`mailto:${PROJECT_INFO.email}`} className="email-link-main">
                          {PROJECT_INFO.email}
                        </a>
                        <div className="portal-sub-link">
                          <Globe size={14} className="text-gold" />
                          <a href={`https://${PROJECT_INFO.website}`} target="_blank" rel="noopener noreferrer">
                            {PROJECT_INFO.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </RevealOnScroll>
              </div>
            </div>

            {/* Right Column: Direct Consultation Form Card */}
            <div className="contact-form-col">
              <div className="contact-form-wrapper architectural-grid">
                <div className="form-header-box">
                  <span className="gold-badge">Priority Access</span>
                  <h2 className="form-heading">Schedule a Consultation</h2>
                  <p className="form-subheading">
                    Please provide your contact details and our team will get in touch promptly.
                  </p>
                </div>
                <EnquiryForm defaultInterest="Retail" />
              </div>
            </div>
          </div>

          {/* Dual Box Row: Official Collection Account & Google Map Site Location (Same Size Side-by-Side) */}
          <div className="contact-bank-map-grid">
            <RevealOnScroll animation="fade-up" delay={100} className="h-full">
              {/* Left Box: Banking Collection Account Details */}
              <div className="contact-bank-collection-box">
                <div className="bank-header-line">
                  <Landmark size={20} className="text-gold" />
                  <div>
                    <span className="bank-pill">Official Collection Account</span>
                    <h4 className="bank-branch-title">{PROJECT_INFO.approvedBy.badge}</h4>
                  </div>
                </div>
                <p className="bank-note-text">{PROJECT_INFO.bankAccount.note}</p>
                
                <div className="bank-meta-rows">
                  <div className="b-row">
                    <span className="b-tag">Account Name:</span>
                    <span className="b-data">{PROJECT_INFO.bankAccount.name}</span>
                  </div>
                  <div className="b-row">
                    <span className="b-tag">Account No.:</span>
                    <span className="b-data font-mono">{PROJECT_INFO.bankAccount.accountNumber}</span>
                  </div>
                  <div className="b-row">
                    <span className="b-tag">Bank & Branch:</span>
                    <span className="b-data">{PROJECT_INFO.bankAccount.bank}, {PROJECT_INFO.bankAccount.branch}</span>
                  </div>
                  <div className="b-row">
                    <span className="b-tag">IFSC Code:</span>
                    <span className="b-data font-mono">{PROJECT_INFO.bankAccount.ifsc}</span>
                  </div>
                  <div className="b-row">
                    <span className="b-tag">Launch Date:</span>
                    <span className="b-data">{PROJECT_INFO.launchDate}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={200} className="h-full">
              {/* Right Box: Google Map Building Location (Same Size) */}
              <div className="contact-map-collection-box">
                <div className="bank-header-line">
                  <MapPin size={20} className="text-gold" />
                  <div>
                    <span className="bank-pill">Building Site Location</span>
                    <h4 className="bank-branch-title">{PROJECT_INFO.siteOffice}</h4>
                  </div>
                </div>
                <p className="bank-note-text">Main Kursi Road, Near Sector-J Extension, Jankipuram Scheme, Lucknow</p>
                
                <div className="contact-map-frame-wrapper">
                  <iframe
                    title="Y2R Heights Project Location Map"
                    src="https://maps.google.com/maps?q=CP-02%2C%20Main%20Kursi%20Road%2C%20Jankipuram%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="contact-map-iframe"
                  />
                </div>
                <div className="contact-map-footer">
                  <a
                    href="https://maps.google.com/?q=CP-02%2C%20Main%20Kursi%20Road%2C%20Jankipuram%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-directions-link"
                  >
                    <Navigation size={14} className="text-gold" />
                    <span>Get Google Maps Directions</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Location Map Visualizer Banner */}
      <section className="section-padding theme-section-white map-placeholder-section">
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Site Coordinates"
            title="Kursi Road • Jankipuram Scheme"
            subtitle="Strategically connected to Lucknow’s Northern commercial and residential sectors."
            align="center"
            theme="light"
          />

          <div className="map-visual-card architectural-grid-gold">
            <div className="map-inner-content">
              <div className="map-beacon-symbol">
                <MapPin size={32} className="text-gold animate-bounce" />
              </div>
              <h3 className="map-location-title">Y2R HEIGHTS SITE OFFICE</h3>
              <p className="map-address-text">{PROJECT_INFO.siteOffice}</p>
              <div className="map-actions-row">
                <a
                  href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
                  className="btn-primary"
                >
                  <Phone size={16} />
                  <span>Call {PROJECT_INFO.tollFree}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BuildingPinIcon() {
  return <MapPin size={22} className="text-gold" />;
}

