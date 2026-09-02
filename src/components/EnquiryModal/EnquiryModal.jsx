import { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import EnquiryForm from '../EnquiryForm/EnquiryForm';
import './EnquiryModal.css';

export default function EnquiryModal({ isOpen, onClose, initialInterest = "Retail" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="enquiry-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="enquiry-modal-dialog architectural-grid"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="enquiry-modal-close"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="enquiry-modal-header">
          <div className="modal-badge">
            <Sparkles size={13} className="text-gold" />
            <span>Priority Advisory</span>
          </div>
          <h2 className="modal-title">Experience Y2R Heights</h2>
          <p className="modal-subtitle">
            Connect directly with our commercial leasing & property consultants.
          </p>
        </div>

        <div className="enquiry-modal-body">
          <EnquiryForm
            defaultInterest={initialInterest}
            onSuccessCallback={() => {}}
            isModal={true}
          />
        </div>

        {/* Architectural Framing Accents */}
        <div className="modal-corner-tl" />
        <div className="modal-corner-br" />
      </div>
    </div>
  );
}

