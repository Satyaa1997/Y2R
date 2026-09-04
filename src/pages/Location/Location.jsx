import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  MapPin,
  Navigation,
  Route,
  Compass,
  Store,
  Briefcase,
  Landmark,
  Plane,
  GraduationCap,
  School,
  Atom,
  Trophy,
  Library,
  Crown,
  Hotel,
  UtensilsCrossed,
  Stethoscope,
  Hospital,
  HeartPulse,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCw,
  RotateCcw,
  RefreshCw,
  X
} from 'lucide-react';
import { PROJECT_INFO, VICINITY_LANDMARKS } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import location2Image from '../../assets/location2.jpg';
import locationVideo from '../../assets/locationvedio.mp4';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Location.css';

const CONNECTIVITY_ICONS = {
  "Kursi Road": MapPin,
  "Vikas Nagar": Store,
  "Sitapur Road": Route,
  "Outer Ring Road": Compass,
  "Indira Nagar": Briefcase,
  "Gomti Nagar": Landmark,
  "Shaheed Path": Plane
};

const EDUCATION_ICONS = {
  "City Montessori School (CMS)": School,
  "Science City": Atom,
  "IET Engineering College": GraduationCap,
  "Guru Gobind Singh Sports College": Trophy,
  "Integral University": Library
};

const HOSPITALITY_ICONS = {
  "Genesis Club": Crown,
  "Radisson Hotel": Hotel,
  "SS Grand": UtensilsCrossed
};

const HEALTHCARE_ICONS = {
  "Community Health Centre": Stethoscope,
  "Savitri Trust Care Hospital": Hospital
};

export default function Location({ onOpenEnquiry }) {
  const [isFullscreenMapOpen, setIsFullscreenMapOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleCloseModal = () => {
    setIsFullscreenMapOpen(false);
    setZoomLevel(1);
    setRotationAngle(0);
  };

  const handleOpenModal = () => {
    setZoomLevel(1);
    setRotationAngle(0);
    setIsFullscreenMapOpen(true);
  };

  // Keyboard shortcut & scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreenMapOpen) {
        handleCloseModal();
      }
    };
    if (isFullscreenMapOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreenMapOpen]);

  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setZoomLevel(prev => Math.min(Number((prev + 0.25).toFixed(2)), 3.5));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setZoomLevel(prev => Math.max(Number((prev - 0.25).toFixed(2)), 0.5));
  };

  const handleRotateCw = (e) => {
    e?.stopPropagation();
    setRotationAngle(prev => (prev + 90) % 360);
  };

  const handleRotateCcw = (e) => {
    e?.stopPropagation();
    setRotationAngle(prev => (prev - 90 + 360) % 360);
  };

  const handleReset = (e) => {
    e?.stopPropagation();
    setZoomLevel(1);
    setRotationAngle(0);
  };

  return (
    <div className="location-page-root">
      {/* 1. Page Hero (Clear Visible Background Video) */}
      <section className="page-hero-section location-hero-section theme-section-dark">
        {/* Background Video & Soft Overlay for Clear Visibility */}
        <div className="location-hero-video-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="location-hero-video"
          >
            <source src={locationVideo} type="video/mp4" />
          </video>
          <div className="location-hero-video-overlay" />
        </div>

        <div className="container-custom page-hero-content location-hero-content">
          <RevealOnScroll animation="fade-up">
            <h1 className="page-hero-title">
              Strategically Centered. <br />
              <span className="location-hero-subtext">Seamlessly Connected.</span>
            </h1>
            <p className="page-hero-desc">
              A location that keeps business closer to everything that matters — situated near Sector-J Extension, Jankipuram Extension Scheme, Lucknow.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Location Map Section (White Theme) */}
      <section className="section-padding theme-section-white location-map-section">
        <ArchitecturalBg variant="location_radar" />
        <div className="container-custom">
          <SectionHeading
            number="01"
            badge="Location & Connectivity"
            title="Strategic Arterial Routing Map"
            subtitle="Clear connectivity map showcasing Y2R Heights on Kursi Road with direct access to major Lucknow commercial nodes."
            align="center"
            theme="light"
          />

          <RevealOnScroll animation="zoom-in">
            <div 
              className="location-map-card-frame"
              onClick={handleOpenModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpenModal()}
              aria-label="Inspect map in fullscreen"
            >
              <img
                src={location2Image}
                alt="Y2R Heights Official Location & Connectivity Map"
                className="location-official-map-img"
              />
              <div className="location-map-hover-cue">
                <div className="cue-pill">
                  <Maximize2 size={15} />
                  <span>Click to Inspect Fullscreen & Rotate / Zoom</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Fullscreen Map Viewer Lightbox Modal */}
      {isFullscreenMapOpen && createPortal(
        <div 
          className="location-map-fullscreen-overlay" 
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen Location Map"
        >
          {/* Top Floating Info Bar */}
          <div className="map-modal-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="map-modal-title-wrap">
              <span className="map-modal-badge">
                <MapPin size={13} className="text-gold" />
                <span>Kursi Road, Lucknow</span>
              </span>
              <h3 className="map-modal-heading">Y2R Heights — Official Connectivity Map</h3>
            </div>
            <button 
              className="map-modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Close fullscreen map"
            >
              <X size={18} />
              <span>Close</span>
            </button>
          </div>

          {/* Floating Control Toolbar */}
          <div className="map-modal-toolbar" onClick={(e) => e.stopPropagation()}>
            <button 
              className="toolbar-btn"
              onClick={handleZoomIn}
              title="Zoom In (+)"
              aria-label="Zoom in"
            >
              <ZoomIn size={16} />
              <span>Zoom In</span>
            </button>

            <button 
              className="toolbar-btn"
              onClick={handleZoomOut}
              title="Zoom Out (-)"
              aria-label="Zoom out"
            >
              <ZoomOut size={16} />
              <span>Zoom Out</span>
            </button>

            <div className="toolbar-zoom-indicator">
              {Math.round(zoomLevel * 100)}%
            </div>

            <div className="toolbar-divider" />

            <button 
              className="toolbar-btn"
              onClick={handleRotateCcw}
              title="Rotate Left (-90°)"
              aria-label="Rotate Left"
            >
              <RotateCcw size={16} />
              <span>-90°</span>
            </button>

            <button 
              className="toolbar-btn"
              onClick={handleRotateCw}
              title="Rotate Right (+90°)"
              aria-label="Rotate Right"
            >
              <RotateCw size={16} />
              <span>+90°</span>
            </button>

            <div className="toolbar-divider" />

            <button 
              className="toolbar-btn reset-btn"
              onClick={handleReset}
              title="Reset View"
              aria-label="Reset zoom and rotation"
            >
              <RefreshCw size={15} />
              <span>Reset</span>
            </button>
          </div>

          {/* Interactive Map Viewport */}
          <div 
            className="map-modal-viewport"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="map-modal-transform-container"
              style={{
                transform: `rotate(${rotationAngle}deg) scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <img
                src={location2Image}
                alt="Y2R Heights Location Map Fullscreen"
                className="map-modal-image"
                draggable={false}
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Connectivity Table / Grid (Dark Theme) */}
      <section className="section-padding theme-section-dark connectivity-detail-section">
        <ArchitecturalBg variant="location_connectivity" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Catchment Corridors"
            title="Strategically Centered. Seamlessly Connected."
            subtitle="Situating your enterprise within minutes of Northern Lucknow’s key educational, healthcare, and arterial nodes."
            align="center"
            theme="dark"
          />

          {/* Categorized Vicinity Matrix */}
          <div className="vicinity-categories-grid">
            {/* 1. Highways & Connectivity */}
            <div className="vicinity-category-card">
              <div className="vicinity-cat-header">
                <div>
                  <span className="vicinity-cat-pill">Transit Corridors</span>
                  <h3 className="vicinity-cat-title">Highway & City Access</h3>
                </div>
                <div className="cat-header-icon-box">
                  <Navigation size={18} />
                </div>
              </div>
              <div className="vicinity-items-list">
                {VICINITY_LANDMARKS.connectivity.map((item, idx) => {
                  const ItemIcon = CONNECTIVITY_ICONS[item.name] || MapPin;
                  return (
                    <div key={idx} className="vicinity-row">
                      <div className="v-name-group">
                        <div className="v-icon-box">
                          <ItemIcon size={14} />
                        </div>
                        <span className="v-name">{item.name}</span>
                      </div>
                      <span className="v-time-pill">{item.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Schools & Universities */}
            <div className="vicinity-category-card">
              <div className="vicinity-cat-header">
                <div>
                  <span className="vicinity-cat-pill">Education & Research</span>
                  <h3 className="vicinity-cat-title">Schools & Universities</h3>
                </div>
                <div className="cat-header-icon-box">
                  <GraduationCap size={18} />
                </div>
              </div>
              <div className="vicinity-items-list">
                {VICINITY_LANDMARKS.education.map((item, idx) => {
                  const ItemIcon = EDUCATION_ICONS[item.name] || GraduationCap;
                  return (
                    <div key={idx} className="vicinity-row">
                      <div className="v-name-group">
                        <div className="v-icon-box">
                          <ItemIcon size={14} />
                        </div>
                        <span className="v-name">{item.name}</span>
                      </div>
                      <span className="v-time-pill">{item.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Hotels & Hospitality */}
            <div className="vicinity-category-card">
              <div className="vicinity-cat-header">
                <div>
                  <span className="vicinity-cat-pill">Hospitality & Lifestyle</span>
                  <h3 className="vicinity-cat-title">Hotels & Recreation</h3>
                </div>
                <div className="cat-header-icon-box">
                  <Hotel size={18} />
                </div>
              </div>
              <div className="vicinity-items-list">
                {VICINITY_LANDMARKS.hospitality.map((item, idx) => {
                  const ItemIcon = HOSPITALITY_ICONS[item.name] || Hotel;
                  return (
                    <div key={idx} className="vicinity-row">
                      <div className="v-name-group">
                        <div className="v-icon-box">
                          <ItemIcon size={14} />
                        </div>
                        <span className="v-name">{item.name}</span>
                      </div>
                      <span className="v-time-pill">{item.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Healthcare & Hospitals */}
            <div className="vicinity-category-card">
              <div className="vicinity-cat-header">
                <div>
                  <span className="vicinity-cat-pill">Medical Infrastructure</span>
                  <h3 className="vicinity-cat-title">Hospitals & Clinics</h3>
                </div>
                <div className="cat-header-icon-box">
                  <HeartPulse size={18} />
                </div>
              </div>
              <div className="vicinity-items-list">
                {VICINITY_LANDMARKS.healthcare.map((item, idx) => {
                  const ItemIcon = HEALTHCARE_ICONS[item.name] || Hospital;
                  return (
                    <div key={idx} className="vicinity-row">
                      <div className="v-name-group">
                        <div className="v-icon-box">
                          <ItemIcon size={14} />
                        </div>
                        <span className="v-name">{item.name}</span>
                      </div>
                      <span className="v-time-pill">{item.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="location-notes-box">
            <MapPin size={20} className="text-gold flex-shrink-0" />
            <div>
              <h4 className="notes-title">Site Sales & Location Address:</h4>
              <p className="notes-text">{PROJECT_INFO.siteOffice}</p>
              <span className="notes-sub">Engineering College Crossing, Near Sector-J Extension, Jankipuram Scheme, Kursi Road, Lucknow – 226021</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Visit The Site at Kursi Road"
        subtitle="Where Vision Meets Value."
        description="Schedule a guided site visit with our property specialists to experience the location advantage firsthand."
        onOpenEnquiry={() => onOpenEnquiry("Location / Site Visit")}
      />
    </div>
  );
}

