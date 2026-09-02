import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="contact_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Official Advisory</span>
            <h1 className="page-hero-title">
              Visit <br />
              <span className="gold-gradient-text">Y2R Heights</span>
            </h1>
            <p className="page-hero-desc">
              Connect directly with our project consultants, arrange on-site inspections, or schedule an in-depth portfolio review.
            </p>
          </RevealOnScroll>
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

                {/* Official Email */}
                <RevealOnScroll animation="fade-up" delay={400}>
                  <TiltCard maxTilt={6} scale={1.01} className="contact-detail-tilt">
                    <div className="contact-detail-card">
                      <div className="card-icon-box">
                        <Mail size={22} className="text-gold" />
                      </div>
                      <div>
                        <span className="card-tag">Official Inquiries Email</span>
                        <a href={`mailto:${PROJECT_INFO.email}`} className="email-link-main">
                          {PROJECT_INFO.email}
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </RevealOnScroll>

                {/* RERA Badge Card */}
                <div className="rera-verified-card">
                  <ShieldCheck size={26} className="text-gold flex-shrink-0" />
                  <div>
                    <span className="rera-verified-title">UP RERA Registered Project</span>
                    <p className="rera-verified-num">{PROJECT_INFO.reraNumber}</p>
                  </div>
                </div>
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
        </div>
      </section>

      {/* Location Map Visualizer Banner */}
      <section className="section-padding bg-dark-surface map-placeholder-section">
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Site Coordinates"
            title="Kursi Road • Jankipuram Scheme"
            subtitle="Strategically connected to Lucknow’s Northern commercial and residential sectors."
            align="center"
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

