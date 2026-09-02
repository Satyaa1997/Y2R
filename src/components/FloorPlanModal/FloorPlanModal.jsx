import { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Maximize2,
  Minimize2,
  Ruler,
  Layers,
  DoorOpen,
  Building,
  Phone,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import './FloorPlanModal.css';

export default function FloorPlanModal({ plan, onClose, onEnquire }) {
  const [activeView, setActiveView] = useState('map'); // 'map' | 'render'
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    if (plan) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [plan, isFullscreen, onClose]);

  if (!plan) return null;

  const currentImage = activeView === 'map' && plan.mapImage ? plan.mapImage : plan.blueprintUrl;

  return (
    <div className="floor-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`floor-modal-dialog ${isFullscreen ? 'modal-fullscreen-mode' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Luxury Header Bar */}
        <div className="floor-modal-header-bar">
          <div className="modal-header-left">
            <span className="modal-rera-tag">UP RERA: {PROJECT_INFO.reraNumber}</span>
            <span className="modal-level-title">{plan.floor}</span>
            <span className="modal-code-badge">{plan.code || `Y2R-${plan.id.toUpperCase()}`}</span>
          </div>

          <div className="modal-header-actions">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="modal-icon-btn"
              title={isFullscreen ? "Exit Fullscreen" : "Inspect in Fullscreen"}
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
            <button
              onClick={onClose}
              className="modal-icon-btn modal-close-btn"
              aria-label="Close Blueprint Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="floor-modal-body-grid">
          {/* Visual Blueprint / Map Column */}
          <div className="floor-visual-col">
            {/* View Switcher Tabs (CAD Map vs 3D Render) */}
            <div className="blueprint-view-switcher">
              <button
                type="button"
                onClick={() => setActiveView('map')}
                className={`view-switch-btn ${activeView === 'map' ? 'active' : ''}`}
              >
                <Layers size={14} />
                <span>Architectural Floor Map</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView('render')}
                className={`view-switch-btn ${activeView === 'render' ? 'active' : ''}`}
              >
                <Sparkles size={14} />
                <span>3D Spatial Preview</span>
              </button>
            </div>

            {/* Map Preview Container */}
            <div className="blueprint-map-frame">
              <img
                src={currentImage}
                alt={`${plan.floor} ${activeView === 'map' ? 'Architectural Map' : 'Render'}`}
                className="floor-blueprint-map-img"
              />

              <div className="blueprint-stamp-tag">
                {activeView === 'map' ? 'SANCTIONED CAD MAP • Y2R HEIGHTS' : '3D ARCHITECTURAL CONCEPT'}
              </div>

              <div className="blueprint-meta-strip">
                <span className="bp-meta-item">LEVEL: {plan.floor}</span>
                <span className="bp-meta-item">SCALE: 1:100 FIT</span>
                <span className="bp-meta-item">STATUS: APPROVED</span>
              </div>
            </div>

            <p className="blueprint-hint-text">
              * Click the Fullscreen icon in the top right corner to zoom into room dimensions, column placements, and spatial boundaries.
            </p>
          </div>

          {/* Details & Specs Column */}
          <div className="floor-details-col">
            <div className="floor-title-header">
              <div className="floor-badge-row">
                <span className="gold-badge">Spatial Blueprint</span>
                <span className="floor-zone-pill">{plan.zoning || plan.purpose}</span>
              </div>
              <h2 className="floor-purpose-heading">{plan.purpose}</h2>
              <p className="floor-detailed-desc">{plan.description}</p>
            </div>

            {/* 4-Box Technical Metrics Grid */}
            <div className="floor-metrics-grid">
              <div className="floor-metric-card">
                <div className="metric-card-icon">
                  <Ruler size={16} className="text-gold" />
                </div>
                <div className="metric-card-text">
                  <span className="metric-label">Clear Height</span>
                  <span className="metric-val">{plan.slabHeight || "14 Ft Slab Height"}</span>
                </div>
              </div>

              <div className="floor-metric-card">
                <div className="metric-card-icon">
                  <Building size={16} className="text-gold" />
                </div>
                <div className="metric-card-text">
                  <span className="metric-label">Zoning Format</span>
                  <span className="metric-val">{plan.unitType || "Commercial Space"}</span>
                </div>
              </div>

              <div className="floor-metric-card">
                <div className="metric-card-icon">
                  <DoorOpen size={16} className="text-gold" />
                </div>
                <div className="metric-card-text">
                  <span className="metric-label">Vertical Ingress</span>
                  <span className="metric-val">{plan.ingress || "Dual High-Speed Lifts"}</span>
                </div>
              </div>

              <div className="floor-metric-card">
                <div className="metric-card-icon">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div className="metric-card-text">
                  <span className="metric-label">Location Frontage</span>
                  <span className="metric-val">Main Kursi Road</span>
                </div>
              </div>
            </div>

            {/* Key Inclusions / Highlights */}
            <div className="floor-specs-section">
              <h4 className="specs-section-title">Architectural Features & Inclusions</h4>
              <div className="specs-items-list">
                {plan.highlights.map((item, idx) => (
                  <div key={idx} className="spec-item-row">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="floor-modal-actions-box">
              <button
                onClick={() => {
                  onClose();
                  if (onEnquire) onEnquire(`${plan.floor} - ${plan.purpose}`);
                }}
                className="btn-primary modal-action-btn"
              >
                <span>Request Detailed Drawings & Price</span>
                <ArrowUpRight size={16} />
              </button>

              <a
                href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
                className="btn-secondary modal-phone-btn"
              >
                <Phone size={15} className="text-gold" />
                <span>Call {PROJECT_INFO.tollFree}</span>
              </a>
            </div>

            <div className="floor-modal-footnote">
              <ShieldCheck size={14} className="text-gold" />
              <span>Sanctioned Architectural Plan • Lucknow Development Corridor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

