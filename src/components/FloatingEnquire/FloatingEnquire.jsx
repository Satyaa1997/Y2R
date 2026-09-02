import { useState, useEffect } from 'react';
import { MessageSquareText, Phone } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import './FloatingEnquire.css';

export default function FloatingEnquire({ onOpenEnquiry }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`floating-enquire-wrap ${isVisible ? 'is-visible' : ''}`}>
      {/* Direct Call Quick Bubble */}
      <a
        href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
        className="floating-call-btn"
        aria-label="Call Toll Free"
        title="Call Toll Free: 1800 890 8351"
      >
        <Phone size={18} />
      </a>

      {/* Main Enquiry Trigger */}
      <button
        onClick={onOpenEnquiry}
        className="floating-enquire-btn"
        aria-label="Quick Enquiry"
      >
        <span className="floating-pulse-ring" />
        <MessageSquareText size={18} className="floating-icon" />
        <span className="floating-text">ENQUIRE NOW</span>
      </button>
    </div>
  );
}

