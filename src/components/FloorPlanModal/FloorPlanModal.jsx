import { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import './FloorPlanModal.css';

export default function FloorPlanModal({ plan, onClose, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
  }, [plan, onClose]);

  if (!plan) return null;

  return (
    <div className="floor-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="floor-modal-dialog architectural-grid"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="floor-modal-close"
          aria-label="Close Blueprint Modal"
        >
          <X size={22} />
        </button>

        <div className="floor-modal-grid">
          {/* Blueprint Visual Preview */}
          <div className="floor-visual-col blueprint-grid">
            <div className="blueprint-stamp">ARCHITECTURAL SCHEMATIC • Y2R HEIGHTS</div>
            <img
              src={plan.blueprintUrl}
              alt={`${plan.floor} - ${plan.purpose}`}
              className="floor-blueprint-img"
            />
            <div className="blueprint-overlay-meta">
              <span className="blueprint-code">SPEC: {plan.id.toUpperCase()}-LUCKNOW</span>
              <span className="blueprint-scale">SCALE: ARCHITECTURAL FIT</span>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="floor-info-col">
            <div className="floor-badge-row">
              <span className="gold-badge">Level Blueprint</span>
              <span className="floor-id-tag">{plan.floor}</span>
            </div>

            <h2 className="floor-modal-title">{plan.purpose}</h2>
            <p className="floor-modal-desc">{plan.description}</p>

            <div className="floor-specs-section">
              <h4 className="specs-heading">Key Spatial Specifications</h4>
              <ul className="specs-list">
                {plan.highlights.map((item, idx) => (
                  <li key={idx} className="spec-item">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="floor-modal-footer">
              <button
                onClick={() => {
                  onClose();
                  if (onEnquire) onEnquire(plan.purpose);
                }}
                className="btn-primary w-full"
              >
                <span>Enquire For This Level</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Blueprint Framing Accents */}
        <div className="blueprint-corner tl" />
        <div className="blueprint-corner br" />
      </div>
    </div>
  );
}

