import { useState } from 'react';
import { Compass } from 'lucide-react';
import TiltCard from '../TiltCard/TiltCard';
import y2rLogo from '../../assets/y2r.png';
import './Location3DMap.css';

export default function Location3DMap() {
  const [activeNode, setActiveNode] = useState(null);

  // Radial angles and distances for the architectural constellation
  const nodePositions = [
    { name: "Kursi Road", time: "0 Min", angle: 270, dist: 130, dir: "North" },
    { name: "Vikas Nagar", time: "2 Mins", angle: 330, dist: 165, dir: "North-East" },
    { name: "Sitapur Road", time: "5 Mins", angle: 215, dist: 185, dir: "North-West" },
    { name: "Outer Ring Road", time: "7 Mins", angle: 30, dist: 220, dir: "Outer Belt" },
    { name: "Indira Nagar", time: "10 Mins", angle: 90, dist: 245, dir: "East" },
    { name: "Gomti Nagar", time: "15 Mins", angle: 135, dist: 270, dir: "South-East" },
    { name: "Shaheed Path", time: "20 Mins", angle: 175, dist: 295, dir: "South Bypass" },
  ];

  return (
    <div className="location-3d-wrapper">
      <TiltCard maxTilt={8} scale={1.01} className="location-tilt-card">
        <div className="location-radar-canvas architectural-grid-gold">
          {/* Compass & Meta Badges */}
          <div className="radar-header-bar">
            <div className="radar-badge">
              <Compass size={14} className="text-gold animate-spin" />
              <span>Connectivity Matrix • Jankipuram Scheme</span>
            </div>
            <span className="radar-coords">26.94° N, 80.95° E • Kursi Road Corridor</span>
          </div>

          {/* SVG Orbit Lines & Laser Beams */}
          <div className="radar-orbit-system">
            <div className="orbit-circle orbit-1" />
            <div className="orbit-circle orbit-2" />
            <div className="orbit-circle orbit-3" />
            <div className="radar-sweep-beam" />

            {/* Central Landmark Hub */}
            <div className="radar-center-hub">
              <div className="center-pulse-ring-1" />
              <div className="center-pulse-ring-2" />
              <div className="center-core-marker">
                <img src={y2rLogo} alt="Y2R Heights" className="radar-core-logo" />
              </div>
              <div className="center-hub-label">
                <strong>Y2R HEIGHTS</strong>
                <small>Epicentre | Sector-J Ext.</small>
              </div>
            </div>

            {/* Destination Nodes */}
            {nodePositions.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * (node.dist * 0.95);
              const y = Math.sin(rad) * (node.dist * 0.95);
              const isSelected = activeNode === node.name;

              return (
                <div
                  key={node.name}
                  className={`radar-node ${isSelected ? 'node-selected' : ''}`}
                  style={{
                    transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 20px)`
                  }}
                  onMouseEnter={() => setActiveNode(node.name)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="node-laser-line" style={{ width: `${node.dist * 0.95}px`, transform: `rotate(${node.angle + 180}deg)` }} />
                  <div className="node-pin-dot">
                    <span className="dot-inner" />
                  </div>
                  <div className="node-card-tooltip">
                    <div className="node-tooltip-header">
                      <span className="node-name">{node.name}</span>
                      <span className="node-time-badge">{node.time}</span>
                    </div>
                    <span className="node-dir">{node.dir}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend Strip */}
          <div className="radar-footer-strip">
            <div className="footer-legend-item">
              <span className="legend-dot gold" />
              <span>Direct Arterial Links</span>
            </div>
            <div className="footer-legend-item">
              <span className="legend-dot white" />
              <span>Express Transit Corridors</span>
            </div>
            <span className="schematic-note">Architectural Spatial Transit Constellation</span>
          </div>

          {/* Corner Crosshairs */}
          <div className="radar-corner tl" />
          <div className="radar-corner tr" />
          <div className="radar-corner bl" />
          <div className="radar-corner br" />
        </div>
      </TiltCard>
    </div>
  );
}

