import { useState, useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, Loader2, Phone, Mail, User } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import './BrochureModal.css';

export default function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

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

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+() -]{7,16}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'Y2R-Heights-Official-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      triggerDownload();
      setStatus('success');
    }, 900);
  };

  return (
    <div className="brochure-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="brochure-modal-dialog architectural-grid"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="brochure-modal-close"
          aria-label="Close brochure modal"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="brochure-success-state">
            <div className="brochure-success-icon-wrap">
              <CheckCircle2 size={46} className="text-gold" />
            </div>

            <h3 className="brochure-success-title">Brochure Download Initiated!</h3>
            <p className="brochure-success-desc">
              Thank you, <strong>{formData.name}</strong>. The official project brochure for <strong>Y2R Heights</strong> has been downloaded to your device.
            </p>

            <div className="brochure-redownload-box">
              <span>Didn&apos;t start automatically?</span>
              <button
                type="button"
                onClick={triggerDownload}
                className="brochure-redownload-link"
              >
                <Download size={14} />
                <span>Click here to re-download PDF</span>
              </button>
            </div>

            <div className="brochure-success-actions">
              <button
                type="button"
                onClick={onClose}
                className="btn-primary w-full"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="brochure-modal-header">
              <div className="brochure-modal-badge">
                <FileText size={14} className="text-gold" />
                <span>Official PDF Document</span>
              </div>
              <h2 className="brochure-modal-title">Download Project Brochure</h2>
              <p className="brochure-modal-subtitle">
                Fill in your details below to instantly download the master architectural brochure, floor plans, and investment overview for <strong>Y2R Heights</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="brochure-form" noValidate>
              {/* Full Name */}
              <div className="brochure-form-group">
                <label htmlFor="brochure-name" className="brochure-form-label">
                  <User size={13} className="text-gold" />
                  <span>Full Name</span>
                  <span className="required-star">*</span>
                </label>
                <input
                  id="brochure-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`brochure-input ${errors.name ? 'has-error' : ''}`}
                  disabled={status === 'submitting'}
                  required
                />
                {errors.name && <span className="brochure-error-msg">{errors.name}</span>}
              </div>

              {/* Phone Number */}
              <div className="brochure-form-group">
                <label htmlFor="brochure-phone" className="brochure-form-label">
                  <Phone size={13} className="text-gold" />
                  <span>Phone Number</span>
                  <span className="required-star">*</span>
                </label>
                <input
                  id="brochure-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`brochure-input ${errors.phone ? 'has-error' : ''}`}
                  disabled={status === 'submitting'}
                  required
                />
                {errors.phone && <span className="brochure-error-msg">{errors.phone}</span>}
              </div>

              {/* Email Address */}
              <div className="brochure-form-group">
                <label htmlFor="brochure-email" className="brochure-form-label">
                  <Mail size={13} className="text-gold" />
                  <span>Email Address</span>
                  <span className="required-star">*</span>
                </label>
                <input
                  id="brochure-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  className={`brochure-input ${errors.email ? 'has-error' : ''}`}
                  disabled={status === 'submitting'}
                  required
                />
                {errors.email && <span className="brochure-error-msg">{errors.email}</span>}
              </div>

              {/* Security & RERA Note */}
              <div className="brochure-privacy-note">
                <span>🔒 Your information is confidential. UP RERA: {PROJECT_INFO.reraNumber}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary brochure-submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Preparing Your PDF...</span>
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    <span>DOWNLOAD BROCHURE (PDF)</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}

        {/* Framing Accents */}
        <div className="brochure-corner-tl" />
        <div className="brochure-corner-br" />
      </div>
    </div>
  );
}
