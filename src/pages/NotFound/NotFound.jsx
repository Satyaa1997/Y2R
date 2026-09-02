import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import TiltCard from '../../components/TiltCard/TiltCard';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-page-root architectural-grid">
      <div className="container-custom notfound-content">
        <TiltCard maxTilt={8} scale={1.02} className="notfound-tilt-card">
          <div className="notfound-card-inner">
            <span className="notfound-code">404</span>
            <div className="notfound-badge">
              <Compass size={14} className="text-gold" />
              <span>Location Not Found</span>
            </div>
            <h1 className="notfound-title">Unmapped Coordinates</h1>
            <p className="notfound-desc">
              The page or architectural schematic you are seeking does not exist or has been relocated within the Y2R Heights master plan.
            </p>
            <Link to="/" className="btn-primary notfound-btn">
              <ArrowLeft size={16} />
              <span>Return to Landmark Home</span>
            </Link>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}

