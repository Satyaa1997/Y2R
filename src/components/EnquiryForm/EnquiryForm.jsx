import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import './EnquiryForm.css';

export default function EnquiryForm({
  defaultInterest = "Retail",
  onSuccessCallback = null,
  isModal = false
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: defaultInterest,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const interestOptions = [
    { value: 'Retail', label: 'Premium Retail Spaces' },
    { value: 'Office', label: 'Boutique Offices' },
    { value: 'Studio', label: 'Studio Apartments (3rd–7th Fl.)' },
    { value: 'Food Court', label: 'Food Court & F&B Units' },
    { value: 'Investment', label: 'Commercial Investment' },
    { value: 'Banquet', label: 'Banquet & Event Spaces' }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+() -]{7,16}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      if (onSuccessCallback) {
        onSuccessCallback(formData);
      }
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      interest: defaultInterest,
      message: ''
    });
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className={`enquiry-success-state ${isModal ? 'is-modal' : ''}`}>
        <div className="success-icon-wrap">
          <CheckCircle2 size={48} className="text-gold" />
        </div>
        <h3 className="success-title">Consultation Request Received</h3>
        <p className="success-message">
          Thank you, <strong>{formData.name}</strong>. Our project advisory team at Y2R Heights will contact you shortly regarding <strong>{formData.interest}</strong> spaces.
        </p>
        <div className="success-contact-reminder">
          <span>Direct Helpline: <strong>1800 890 8351</strong></span>
        </div>
        <button onClick={handleReset} className="btn-secondary mt-6">
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`enquiry-form-container ${isModal ? 'is-modal' : ''}`} noValidate>
      <div className="form-grid">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor={`name-${isModal ? 'modal' : 'page'}`} className="form-label">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id={`name-${isModal ? 'modal' : 'page'}`}
            type="text"
            name="name"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            disabled={status === 'submitting'}
          />
          {errors.name && <span className="field-error-msg">{errors.name}</span>}
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor={`phone-${isModal ? 'modal' : 'page'}`} className="form-label">
            Phone Number <span className="text-gold">*</span>
          </label>
          <input
            id={`phone-${isModal ? 'modal' : 'page'}`}
            type="tel"
            name="phone"
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${errors.phone ? 'input-error' : ''}`}
            disabled={status === 'submitting'}
          />
          {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor={`email-${isModal ? 'modal' : 'page'}`} className="form-label">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id={`email-${isModal ? 'modal' : 'page'}`}
            type="email"
            name="email"
            placeholder="e.g. rahul@business.com"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            disabled={status === 'submitting'}
          />
          {errors.email && <span className="field-error-msg">{errors.email}</span>}
        </div>

        {/* Interest Dropdown */}
        <div className="form-group">
          <label htmlFor={`interest-${isModal ? 'modal' : 'page'}`} className="form-label">
            Interested In <span className="text-gold">*</span>
          </label>
          <select
            id={`interest-${isModal ? 'modal' : 'page'}`}
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="form-select"
            disabled={status === 'submitting'}
          >
            {interestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div className="form-group full-width">
          <label htmlFor={`msg-${isModal ? 'modal' : 'page'}`} className="form-label">
            Message / Specific Requirements (Optional)
          </label>
          <textarea
            id={`msg-${isModal ? 'modal' : 'page'}`}
            name="message"
            rows={3}
            placeholder="Tell us your space size preference or requirements..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="form-footer">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary form-submit-btn w-full"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Securing Your Request...</span>
            </>
          ) : (
            <>
              <span>Schedule a Consultation</span>
              <Send size={16} />
            </>
          )}
        </button>

        <p className="form-disclaimer">
          Your information is confidential and will only be used by the official Y2R Heights advisory team.
        </p>
      </div>
    </form>
  );
}

