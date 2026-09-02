import './ArchitecturalBg.css';

/**
 * ArchitecturalBg Component
 * 100% Unique, Non-Repeating Vector Architectural Artworks & Animations
 * Zero Background Text • Section & Topic-Specific • Both Light & Dark Themes
 */
export default function ArchitecturalBg({ variant = 'home_overview' }) {
  return (
    <div className={`arch-bg-wrapper arch-variant-${variant}`} aria-hidden="true">
      {/* Dynamic Moving Background Grid */}
      <div className={`arch-grid-canvas arch-grid-${variant}`} />

      {/* Ambient Scanning Horizon Laser */}
      <div className={`arch-laser-beam arch-laser-${variant}`} />

      {/* Pure Vector Architectural Graphics (Zero Text, 100% Custom SVG per Variant) */}
      <svg
        className="arch-vector-canvas"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="goldLinearA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#af7d09" stopOpacity="0.10" />
            <stop offset="50%" stopColor="#8a6104" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#af7d09" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="goldLinearB" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#af7d09" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#8a6104" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#af7d09" stopOpacity="0.10" />
          </linearGradient>

          <linearGradient id="beamHorizGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#af7d09" stopOpacity="0.0" />
            <stop offset="20%" stopColor="#8a6104" stopOpacity="0.12" />
            <stop offset="80%" stopColor="#8a6104" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#af7d09" stopOpacity="0.0" />
          </linearGradient>

          <radialGradient id="goldRadialGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8a6104" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#af7d09" stopOpacity="0.0" />
          </radialGradient>
        </defs>

        {/* -------------------------------------------------------------
            1. HOME: OVERVIEW (Tower Elevation & Vertical Axis Slabs)
            ------------------------------------------------------------- */}
        {variant === 'home_overview' && (
          <g className="art-home-overview">
            <g transform="translate(80, 70)" className="anim-tower-elevation">
              <line x1="80" y1="0" x2="80" y2="620" stroke="url(#beamHorizGrad)" strokeWidth="1.5" strokeDasharray="6 3" />
              <line x1="280" y1="0" x2="280" y2="620" stroke="url(#beamHorizGrad)" strokeWidth="1.5" strokeDasharray="6 3" />
              <line x1="480" y1="0" x2="480" y2="620" stroke="url(#beamHorizGrad)" strokeWidth="1.5" strokeDasharray="6 3" />
              {[30, 100, 170, 240, 320, 410, 500].map((y, idx) => (
                <g key={`ho-floor-${idx}`}>
                  <line x1="20" y1={y} x2="540" y2={y} stroke="url(#goldLinearA)" strokeWidth="1.6" />
                  <line x1="20" y1={y + 6} x2="540" y2={y + 6} stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" />
                  <line x1="80" y1={y} x2="180" y2={y + 70} stroke="rgba(175, 125, 9, 0.18)" strokeWidth="0.8" strokeDasharray="4 4" />
                  <line x1="180" y1={y} x2="80" y2={y + 70} stroke="rgba(175, 125, 9, 0.18)" strokeWidth="0.8" strokeDasharray="4 4" />
                  <line x1="280" y1={y} x2="380" y2={y + 70} stroke="rgba(175, 125, 9, 0.18)" strokeWidth="0.8" strokeDasharray="4 4" />
                  <line x1="380" y1={y} x2="280" y2={y + 70} stroke="rgba(175, 125, 9, 0.18)" strokeWidth="0.8" strokeDasharray="4 4" />
                </g>
              ))}
              <polygon points="280,-30 230,30 330,30" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
              <circle cx="280" cy="-30" r="4" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            </g>
            <g transform="translate(1260, 150)" className="anim-compass-rotate">
              <circle cx="0" cy="0" r="90" stroke="rgba(175, 125, 9, 0.2)" strokeWidth="1" strokeDasharray="4 3" />
              <circle cx="0" cy="0" r="65" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
              <line x1="-105" y1="0" x2="105" y2="0" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
              <line x1="0" y1="-105" x2="0" y2="105" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            2. HOME: HIGHLIGHTS (4-Quadrant Isometric Spatial Cube Cluster)
            ------------------------------------------------------------- */}
        {variant === 'home_highlights' && (
          <g className="art-home-highlights">
            <g transform="translate(720, 400)" className="anim-cube-cluster">
              {[
                { x: -320, y: -160, s: 70 },
                { x: 320, y: -160, s: 70 },
                { x: -320, y: 160, s: 70 },
                { x: 320, y: 160, s: 70 },
                { x: 0, y: 0, s: 95 }
              ].map((c, i) => (
                <g key={`cube-${i}`} transform={`translate(${c.x}, ${c.y})`}>
                  <polygon points={`0,-${c.s} ${c.s},-${c.s/2} 0,0 -${c.s},-${c.s/2}`} fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <polygon points={`0,0 ${c.s},-${c.s/2} ${c.s},${c.s/2} 0,${c.s}`} fill="none" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
                  <polygon points={`0,0 -${c.s},-${c.s/2} -${c.s},${c.s/2} 0,${c.s}`} fill="none" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1.2" />
                  <circle cx="0" cy="0" r="4" fill="var(--gold)" />
                </g>
              ))}
              <line x1="-320" y1="-160" x2="0" y2="0" stroke="url(#beamHorizGrad)" strokeWidth="1.5" strokeDasharray="5 3" />
              <line x1="320" y1="-160" x2="0" y2="0" stroke="url(#beamHorizGrad)" strokeWidth="1.5" strokeDasharray="5 3" />
              <line x1="-320" y1="160" x2="0" y2="0" stroke="url(#beamHorizGrad)" strokeWidth="1.5" strokeDasharray="5 3" />
              <line x1="320" y1="160" x2="0" y2="0" stroke="url(#beamHorizGrad)" strokeWidth="1.5" strokeDasharray="5 3" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            3. HOME: RETAIL SPOTLIGHT (Promenade Arcade Arches & Overhangs)
            ------------------------------------------------------------- */}
        {variant === 'home_retail' && (
          <g className="art-home-retail">
            <g transform="translate(160, 160)" className="anim-retail-arches">
              {[0, 240, 480, 720, 960].map((x, i) => (
                <g key={`arch-${i}`} transform={`translate(${x}, 0)`}>
                  <path d="M 10 380 L 10 120 A 70 70 0 0 1 150 120 L 150 380 Z" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <path d="M 25 365 L 25 130 A 55 55 0 0 1 135 130 L 135 365 Z" fill="none" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="4 2" />
                  <line x1="0" y1="90" x2="160" y2="90" stroke="url(#goldLinearB)" strokeWidth="2" />
                  <rect x="0" y="90" width="10" height="290" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
                  <rect x="150" y="90" width="10" height="290" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
                </g>
              ))}
              <line x1="-40" y1="40" x2="1160" y2="40" stroke="url(#beamHorizGrad)" strokeWidth="2" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            4. HOME: DUAL SPOTLIGHT (Offices Desk Matrix + Studio Suite Layout)
            ------------------------------------------------------------- */}
        {variant === 'home_dual_spotlight' && (
          <g className="art-home-dual">
            <g transform="translate(120, 140)" className="anim-dual-split">
              {/* Left Side: Corporate Modular Cubicle Matrix */}
              <g transform="translate(0, 0)">
                <rect x="0" y="0" width="540" height="500" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                {[100, 200, 300, 400].map((x, i) => (
                  <line key={`dm-v-${i}`} x1={x} y1="0" x2={x} y2="500" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="4 3" />
                ))}
                {[120, 240, 360].map((y, i) => (
                  <line key={`dm-h-${i}`} x1="0" y1={y} x2="540" y2={y} stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="4 3" />
                ))}
                <ellipse cx="270" cy="250" rx="70" ry="40" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
              </g>

              {/* Central Divider Beam */}
              <line x1="600" y1="-20" x2="600" y2="520" stroke="url(#beamHorizGrad)" strokeWidth="2.5" strokeDasharray="8 4" />

              {/* Right Side: Studio Suite Layout Blueprint */}
              <g transform="translate(660, 0)">
                <rect x="0" y="0" width="540" height="500" fill="none" stroke="url(#goldLinearB)" strokeWidth="1.8" />
                <line x1="220" y1="0" x2="220" y2="340" stroke="url(#goldLinearB)" strokeWidth="1.8" />
                <path d="M 220 340 A 50 50 0 0 0 270 390" fill="none" stroke="var(--gold)" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 0 500 L 0 550 Q 270 590 540 550 L 540 500" fill="none" stroke="url(#goldLinearB)" strokeWidth="1.8" />
              </g>
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            5. HOME: FOOD COURT (16-Axis Radiating Pergola Sunburst)
            ------------------------------------------------------------- */}
        {variant === 'home_foodcourt' && (
          <g className="art-home-foodcourt">
            <g transform="translate(720, 400)" className="anim-pergola-spin">
              <circle cx="0" cy="0" r="290" stroke="url(#goldLinearA)" strokeWidth="1.8" />
              <circle cx="0" cy="0" r="210" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1.2" strokeDasharray="6 4" />
              <circle cx="0" cy="0" r="140" stroke="url(#goldLinearA)" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="40" fill="none" stroke="var(--gold)" strokeWidth="2" />
              {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => (
                <line key={`hp-${i}`} x1="40" y1="0" x2="330" y2="0" transform={`rotate(${deg})`} stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="4 6" />
              ))}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <g key={`hpc-${i}`} transform={`rotate(${deg}) translate(210, 0)`}>
                  <circle cx="0" cy="0" r="16" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="4" fill="var(--gold)" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            6. HOME: AMENITIES (Dual Vertical High-Speed Elevator Shafts)
            ------------------------------------------------------------- */}
        {variant === 'home_amenities' && (
          <g className="art-home-amenities">
            <g transform="translate(180, 110)" className="anim-amenities-elevators">
              <g transform="translate(120, 20)">
                <rect x="0" y="0" width="80" height="520" fill="none" stroke="url(#goldLinearA)" strokeWidth="2" />
                <rect x="100" y="0" width="80" height="520" fill="none" stroke="url(#goldLinearA)" strokeWidth="2" />
                {[60, 130, 200, 270, 340, 410, 480].map((ly, i) => (
                  <g key={`ha-lvl-${i}`}>
                    <line x1="0" y1={ly} x2="80" y2={ly} stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
                    <line x1="100" y1={ly} x2="180" y2={ly} stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
                  </g>
                ))}
                <rect x="6" y="140" width="68" height="52" rx="3" fill="none" stroke="var(--gold)" strokeWidth="2" className="lift-car-motion-a" />
                <rect x="106" y="320" width="68" height="52" rx="3" fill="none" stroke="var(--gold)" strokeWidth="2" className="lift-car-motion-b" />
              </g>
              <g transform="translate(560, 160)" className="anim-hex-mesh">
                {[
                  [0, 0], [120, 0], [240, 0],
                  [60, 100], [180, 100], [300, 100],
                  [0, 200], [120, 200], [240, 200]
                ].map(([hx, hy], i) => (
                  <polygon key={`ha-hex-${i}`} points={`${hx},${hy-40} ${hx+35},${hy-20} ${hx+35},${hy+20} ${hx},${hy+40} ${hx-35},${hy+20} ${hx-35},${hy-20}`} fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1.2" />
                ))}
              </g>
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            7. HOME: PARKING (Dual Subterranean Basement Bay Vectors)
            ------------------------------------------------------------- */}
        {variant === 'home_parking' && (
          <g className="art-home-parking">
            <g transform="translate(180, 140)" className="anim-parking-bays">
              {/* Dual Basement Ramp Elevation */}
              <path d="M 0 100 L 300 240 L 900 240 L 1100 380" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.5" />
              <path d="M 0 130 L 290 265 L 890 265 L 1100 410" fill="none" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.5" strokeDasharray="6 3" />
              {/* Angled Parking Bays */}
              {[40, 110, 180, 250, 320, 390, 460, 530, 600, 670, 740, 810].map((bx, i) => (
                <g key={`bay-${i}`} transform={`translate(${bx + 100}, 240)`}>
                  <line x1="0" y1="0" x2="35" y2="-70" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
                  <circle cx="17" cy="-35" r="2.5" fill="var(--gold)" />
                </g>
              ))}
              {/* Lower Basement Level Parking Bays */}
              {[40, 110, 180, 250, 320, 390, 460, 530, 600, 670].map((bx, i) => (
                <g key={`lbay-${i}`} transform={`translate(${bx + 200}, 440)`}>
                  <line x1="0" y1="0" x2="35" y2="-60" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            8. HOME: FLOOR PLANS PREVIEW (2D CAD Blueprint & Door Arcs)
            ------------------------------------------------------------- */}
        {variant === 'home_floorplans' && (
          <g className="art-home-floorplans">
            <g transform="translate(140, 100)" className="anim-blueprint-draft">
              <rect x="0" y="0" width="1160" height="560" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.5" />
              <line x1="380" y1="0" x2="380" y2="560" stroke="url(#goldLinearA)" strokeWidth="2" />
              <line x1="760" y1="0" x2="760" y2="560" stroke="url(#goldLinearA)" strokeWidth="2" />
              <line x1="0" y1="280" x2="1160" y2="280" stroke="url(#goldLinearA)" strokeWidth="2" />
              <path d="M 380 120 A 70 70 0 0 1 450 190" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="4 2" />
              <path d="M 760 380 A 70 70 0 0 0 690 450" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="4 2" />
              {[[0, 0], [380, 0], [760, 0], [1160, 0], [0, 280], [380, 280], [760, 280], [1160, 280], [0, 560], [380, 560], [760, 560], [1160, 560]].map(([cx, cy], i) => (
                <g key={`hfp-col-${i}`} transform={`translate(${cx}, ${cy})`}>
                  <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="var(--gold)" strokeWidth="1" />
                  <line x1="8" y1="-8" x2="-8" y2="8" stroke="var(--gold)" strokeWidth="1" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            9. HOME: WHY Y2R (Ascending 5-Step Value Tiers)
            ------------------------------------------------------------- */}
        {variant === 'home_why' && (
          <g className="art-home-why">
            <g transform="translate(180, 160)" className="anim-why-tiers">
              {[
                { x: 60, y: 380, w: 180, h: 90 },
                { x: 250, y: 290, w: 180, h: 180 },
                { x: 440, y: 200, w: 180, h: 270 },
                { x: 630, y: 110, w: 180, h: 360 },
                { x: 820, y: 20, w: 180, h: 450 }
              ].map((step, i) => (
                <g key={`why-st-${i}`}>
                  <polygon points={`${step.x},${step.y} ${step.x+90},${step.y-45} ${step.x+180},${step.y} ${step.x+90},${step.y+45}`} fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <line x1={step.x} y1={step.y} x2={step.x} y2={step.y + step.h} stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
                  <line x1={step.x + 90} y1={step.y + 45} x2={step.x + 90} y2={step.y + step.h + 45} stroke="rgba(175, 125, 9, 0.45)" strokeWidth="1.5" />
                  <line x1={step.x + 180} y1={step.y} x2={step.x + 180} y2={step.y + step.h} stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
                </g>
              ))}
              <path d="M 150 425 L 340 335 L 530 245 L 720 155 L 910 65" fill="none" stroke="url(#beamHorizGrad)" strokeWidth="3" strokeDasharray="8 4" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            10. HOME: LOCATION (Arterials & Concentric Radar Waves)
            ------------------------------------------------------------- */}
        {variant === 'home_location' && (
          <g className="art-home-location">
            <g transform="translate(700, 400)" className="anim-home-radar">
              {[80, 160, 240, 340, 440].map((r, i) => (
                <circle key={`hl-rad-${i}`} cx="0" cy="0" r={r} fill="none" stroke={i % 2 === 0 ? "url(#goldLinearA)" : "rgba(175, 125, 9, 0.2)"} strokeWidth={i % 2 === 0 ? "1.6" : "1"} strokeDasharray={i % 2 === 1 ? "6 4" : "none"} />
              ))}
              <line x1="-540" y1="-200" x2="540" y2="200" stroke="url(#beamHorizGrad)" strokeWidth="2.5" />
              <line x1="-540" y1="240" x2="540" y2="-240" stroke="url(#beamHorizGrad)" strokeWidth="2" />
              <circle cx="0" cy="0" r="14" fill="url(#goldRadialGlow)" stroke="var(--gold)" strokeWidth="2" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            11. HOME: GALLERY (Viewport Perspective Frustum & Focus Brackets)
            ------------------------------------------------------------- */}
        {variant === 'home_gallery' && (
          <g className="art-home-gallery">
            <g transform="translate(180, 140)" className="anim-gallery-frustum">
              <polygon points="540,40 1000,460 80,460" fill="none" stroke="url(#goldLinearA)" strokeWidth="2" />
              <polygon points="540,120 860,420 220,420" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1.2" strokeDasharray="6 3" />
              <line x1="540" y1="40" x2="540" y2="460" stroke="url(#beamHorizGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
              {[[80, 460], [1000, 460], [540, 40]].map(([px, py], i) => (
                <g key={`hgal-node-${i}`} transform={`translate(${px}, ${py})`}>
                  <circle cx="0" cy="0" r="12" fill="none" stroke="var(--gold)" strokeWidth="1.4" />
                  <circle cx="0" cy="0" r="3" fill="var(--gold)" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            12. HOME: INVESTMENT (Golden Ratio Logarithmic Spiral Geometry)
            ------------------------------------------------------------- */}
        {variant === 'home_investment' && (
          <g className="art-home-investment">
            <g transform="translate(720, 380)" className="anim-golden-spiral">
              <path d="M 0 0 A 20 20 0 0 1 20 20 A 40 40 0 0 1 -20 60 A 80 80 0 0 1 -100 -20 A 160 160 0 0 1 60 -180 A 320 320 0 0 1 380 140" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.2" />
              <rect x="-100" y="-180" width="480" height="320" fill="none" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="6 4" />
              <rect x="-100" y="-20" width="160" height="160" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            13. HOME: ENQUIRY / CONSULTATION (Architect Drafting Protractor)
            ------------------------------------------------------------- */}
        {variant === 'home_enquiry' && (
          <g className="art-home-enquiry">
            <g transform="translate(180, 120)" className="anim-protractor-sweep">
              <path d="M 100 520 A 440 440 0 0 1 980 520" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.2" />
              <path d="M 220 520 A 320 320 0 0 1 860 520" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1.2" strokeDasharray="6 3" />
              <path d="M 340 520 A 200 200 0 0 1 740 520" fill="none" stroke="url(#goldLinearB)" strokeWidth="1.5" />
              <line x1="540" y1="80" x2="540" y2="520" stroke="url(#beamHorizGrad)" strokeWidth="1.8" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            14. PROJECT: HERO (Masterplan Zoning Map)
            ------------------------------------------------------------- */}
        {variant === 'project_hero' && (
          <g className="art-proj-hero">
            <g transform="translate(140, 100)" className="anim-proj-masterplan">
              <polygon points="120,40 1020,80 1140,500 60,460" fill="none" stroke="url(#goldLinearA)" strokeWidth="2" />
              <line x1="120" y1="40" x2="600" y2="480" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" strokeDasharray="6 3" />
              <line x1="1020" y1="80" x2="400" y2="470" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" strokeDasharray="6 3" />
              <circle cx="560" cy="270" r="80" fill="none" stroke="var(--gold)" strokeWidth="1.8" />
              <circle cx="560" cy="270" r="140" fill="none" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="4 4" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            15. PROJECT: VISION (Curtain-Wall Structural Glass Facade Grid)
            ------------------------------------------------------------- */}
        {variant === 'project_vision' && (
          <g className="art-proj-vision">
            <g transform="translate(180, 80)" className="anim-glass-curtain">
              {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080].map((x, i) => (
                <line key={`pv-v-${i}`} x1={x} y1="0" x2={x} y2="600" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1.2" />
              ))}
              {[0, 75, 150, 225, 300, 375, 450, 525, 600].map((y, i) => (
                <line key={`pv-h-${i}`} x1="0" y1={y} x2="1080" y2={y} stroke={i % 2 === 0 ? "url(#goldLinearA)" : "rgba(175, 125, 9, 0.2)"} strokeWidth={i % 2 === 0 ? "1.8" : "1"} />
              ))}
              <line x1="0" y1="0" x2="1080" y2="600" stroke="url(#beamHorizGrad)" strokeWidth="2" strokeDasharray="10 5" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            16. PROJECT: SPACES (7-Tier Vertical Isometric Slice Stack)
            ------------------------------------------------------------- */}
        {variant === 'project_spaces' && (
          <g className="art-proj-spaces">
            <g transform="translate(120, 120)" className="anim-tier-slices">
              {[
                { y: 440, w: 900, h: 40 },
                { y: 370, w: 840, h: 40 },
                { y: 300, w: 780, h: 40 },
                { y: 230, w: 720, h: 40 },
                { y: 160, w: 660, h: 40 },
                { y: 90, w: 600, h: 40 },
                { y: 20, w: 540, h: 40 }
              ].map((tier, i) => (
                <g key={`slice-${i}`} transform={`translate(${(1200 - tier.w) / 2}, ${tier.y})`}>
                  <polygon points={`0,20 ${tier.w/2},-15 ${tier.w},20 ${tier.w/2},55`} fill="none" stroke="url(#goldLinearA)" strokeWidth="1.6" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            17. PROJECT: AMENITIES (Smart Building Infrastructure Mesh)
            ------------------------------------------------------------- */}
        {variant === 'project_amenities' && (
          <g className="art-proj-amenities">
            <g transform="translate(160, 140)" className="anim-smart-mesh">
              {[
                [100, 100], [300, 80], [550, 120], [800, 90], [1050, 110],
                [200, 260], [450, 240], [700, 270], [950, 250],
                [120, 420], [350, 400], [600, 440], [850, 410], [1080, 430]
              ].map(([nx, ny], i) => (
                <g key={`mesh-node-${i}`} transform={`translate(${nx}, ${ny})`}>
                  <circle cx="0" cy="0" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="3" fill="var(--gold)" />
                </g>
              ))}
              <path d="M 100 100 L 300 80 L 450 240 L 200 260 Z" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
              <path d="M 300 80 L 550 120 L 700 270 L 450 240 Z" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
              <path d="M 550 120 L 800 90 L 950 250 L 700 270 Z" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
              <path d="M 200 260 L 450 240 L 350 400 L 120 420 Z" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
              <path d="M 450 240 L 700 270 L 600 440 L 350 400 Z" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            18. PROJECT: PARKING (Subsurface Retaining Walls & Gradient Vectors)
            ------------------------------------------------------------- */}
        {variant === 'project_parking' && (
          <g className="art-proj-parking">
            <g transform="translate(140, 160)" className="anim-subsurface-gradient">
              <rect x="0" y="0" width="1160" height="460" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.2" />
              <line x1="0" y1="230" x2="1160" y2="230" stroke="url(#goldLinearB)" strokeWidth="1.8" strokeDasharray="8 4" />
              {[60, 160, 260, 360, 460, 560, 660, 760, 860, 960, 1060].map((x, i) => (
                <g key={`pp-col-${i}`}>
                  <rect x={x} y="0" width="16" height="230" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
                  <rect x={x} y="230" width="16" height="230" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            19. PROJECT: WHY (Structural Load-Bearing Truss Lattice)
            ------------------------------------------------------------- */}
        {variant === 'project_why' && (
          <g className="art-proj-why">
            <g transform="translate(160, 180)" className="anim-truss-lattice">
              <line x1="0" y1="0" x2="1120" y2="0" stroke="url(#goldLinearA)" strokeWidth="3" />
              <line x1="0" y1="240" x2="1120" y2="240" stroke="url(#goldLinearA)" strokeWidth="3" />
              {[0, 160, 320, 480, 640, 800, 960, 1120].map((x, i) => (
                <line key={`truss-v-${i}`} x1={x} y1="0" x2={x} y2="240" stroke="rgba(175, 125, 9, 0.4)" strokeWidth="1.8" />
              ))}
              {[0, 160, 320, 480, 640, 800, 960].map((x, i) => (
                <line key={`truss-diag-${i}`} x1={x} y1={i % 2 === 0 ? "0" : "240"} x2={x + 160} y2={i % 2 === 0 ? "240" : "0"} stroke="url(#goldLinearB)" strokeWidth="1.6" />
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            20. SPACES: HERO (Interconnected Spatial Constellation)
            ------------------------------------------------------------- */}
        {variant === 'spaces_hero' && (
          <g className="art-spaces-hero">
            <g transform="translate(720, 400)" className="anim-spatial-constellation">
              <circle cx="0" cy="0" r="280" stroke="url(#goldLinearA)" strokeWidth="1.5" strokeDasharray="8 6" />
              <circle cx="0" cy="0" r="160" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1.2" />
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <g key={`sc-node-${i}`} transform={`rotate(${deg}) translate(280, 0)`}>
                  <circle cx="0" cy="0" r="22" fill="none" stroke="var(--gold)" strokeWidth="1.8" />
                  <circle cx="0" cy="0" r="6" fill="var(--gold)" />
                </g>
              ))}
              <circle cx="0" cy="0" r="30" fill="url(#goldRadialGlow)" stroke="var(--gold)" strokeWidth="2" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            21. SPACES: LIST (Perspective Stacking Floorplates)
            ------------------------------------------------------------- */}
        {variant === 'spaces_list' && (
          <g className="art-spaces-list">
            <g transform="translate(140, 100)" className="anim-perspective-stack">
              {[60, 160, 260, 360, 460].map((y, i) => (
                <g key={`sl-plate-${i}`} transform={`translate(0, ${y})`}>
                  <line x1="80" y1="0" x2="1080" y2="0" stroke="url(#goldLinearA)" strokeWidth="2" />
                  <line x1="120" y1="20" x2="1040" y2="20" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" strokeDasharray="5 3" />
                  <circle cx="80" cy="0" r="4" fill="var(--gold)" />
                  <circle cx="1080" cy="0" r="4" fill="var(--gold)" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            22. RETAIL: HERO (Grand Boutique Double-Height Portal)
            ------------------------------------------------------------- */}
        {variant === 'retail_hero' && (
          <g className="art-ret-hero">
            <g transform="translate(160, 80)" className="anim-grand-portal">
              <path d="M 120 600 L 120 180 A 440 440 0 0 1 1000 180 L 1000 600" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.8" />
              <path d="M 180 600 L 180 200 A 380 380 0 0 1 940 200 L 940 600" fill="none" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.5" strokeDasharray="8 4" />
              <line x1="60" y1="120" x2="1060" y2="120" stroke="url(#beamHorizGrad)" strokeWidth="2" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            23. RETAIL: SHOWCASE (Promenade Boulevard Storefront Bays)
            ------------------------------------------------------------- */}
        {variant === 'retail_showcase' && (
          <g className="art-ret-showcase">
            <g transform="translate(140, 120)" className="anim-promenade-boulevard">
              {[0, 300, 600, 900].map((x, i) => (
                <g key={`rsh-bay-${i}`} transform={`translate(${x}, 0)`}>
                  <rect x="0" y="40" width="260" height="420" rx="4" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <line x1="0" y1="140" x2="260" y2="140" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
                  <rect x="30" y="170" width="200" height="260" fill="none" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="4 2" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            24. RETAIL: FEATURES (Commercial Signage Colonnade)
            ------------------------------------------------------------- */}
        {variant === 'retail_features' && (
          <g className="art-ret-features">
            <g transform="translate(120, 160)" className="anim-colonnade-columns">
              {[0, 160, 320, 480, 640, 800, 960, 1120].map((cx, i) => (
                <g key={`col-p-${i}`} transform={`translate(${cx}, 0)`}>
                  <line x1="0" y1="0" x2="0" y2="400" stroke="url(#goldLinearA)" strokeWidth="2" />
                  <line x1="16" y1="0" x2="16" y2="400" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" />
                  <rect x="-10" y="-15" width="36" height="15" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                  <rect x="-10" y="400" width="36" height="15" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            25. OFFICES: HERO (Executive Glass Tower Elevation)
            ------------------------------------------------------------- */}
        {variant === 'offices_hero' && (
          <g className="art-off-hero">
            <g transform="translate(200, 60)" className="anim-exec-tower">
              <polygon points="520,20 840,120 840,640 200,640 200,120" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.2" />
              {[120, 200, 280, 360, 440, 520, 600].map((y, i) => (
                <line key={`oft-fl-${i}`} x1="200" y1={y} x2="840" y2={y} stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
              ))}
              <line x1="520" y1="20" x2="520" y2="640" stroke="url(#beamHorizGrad)" strokeWidth="1.8" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            26. OFFICES: NARRATIVE (Open Plan Corporate Workspace Blueprint)
            ------------------------------------------------------------- */}
        {variant === 'offices_narrative' && (
          <g className="art-off-narrative">
            <g transform="translate(160, 120)" className="anim-office-floorplate">
              <polygon points="560,40 1080,240 560,440 40,240" fill="none" stroke="url(#goldLinearA)" strokeWidth="2" />
              <polygon points="560,80 1000,240 560,400 120,240" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1.2" strokeDasharray="6 3" />
              <ellipse cx="560" cy="240" rx="90" ry="45" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            27. OFFICES: PILLARS (Acoustic Glass Partition Geometries)
            ------------------------------------------------------------- */}
        {variant === 'offices_pillars' && (
          <g className="art-off-pillars">
            <g transform="translate(140, 140)" className="anim-glass-partitions">
              {[0, 280, 560, 840].map((gx, i) => (
                <g key={`agp-${i}`} transform={`translate(${gx}, 0)`}>
                  <rect x="0" y="0" width="240" height="400" rx="4" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.6" />
                  <circle cx="120" cy="180" r="30" fill="none" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1" strokeDasharray="3 3" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            28. STUDIOS: HERO (High-Rise Residential Facade with Balconies)
            ------------------------------------------------------------- */}
        {variant === 'studios_hero' && (
          <g className="art-stu-hero">
            <g transform="translate(180, 80)" className="anim-res-facade">
              <rect x="140" y="0" width="760" height="600" fill="none" stroke="url(#goldLinearA)" strokeWidth="2" />
              {[80, 180, 280, 380, 480].map((y, i) => (
                <g key={`balc-${i}`}>
                  <rect x="80" y={y} width="880" height="40" rx="3" fill="none" stroke="url(#goldLinearB)" strokeWidth="1.8" />
                  <line x1="80" y1={y + 20} x2="960" y2={y + 20} stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1" strokeDasharray="6 3" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            29. STUDIOS: NARRATIVE (Complete Studio Suite Blueprint)
            ------------------------------------------------------------- */}
        {variant === 'studios_narrative' && (
          <g className="art-stu-narrative">
            <g transform="translate(180, 120)" className="anim-stu-suite">
              <rect x="0" y="0" width="1080" height="520" rx="4" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.2" />
              <line x1="420" y1="0" x2="420" y2="340" stroke="url(#goldLinearA)" strokeWidth="2" />
              <path d="M 420 340 A 60 60 0 0 0 480 400" fill="none" stroke="rgba(175, 125, 9, 0.45)" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 0 520 L 0 580 Q 540 640 1080 580 L 1080 520" fill="none" stroke="url(#goldLinearA)" strokeWidth="2" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            30. STUDIOS: FEATURES (Modern Urban Modular Cabinetry Lines)
            ------------------------------------------------------------- */}
        {variant === 'studios_features' && (
          <g className="art-stu-features">
            <g transform="translate(140, 140)" className="anim-modular-living">
              {[0, 380, 760].map((mx, i) => (
                <g key={`mod-${i}`} transform={`translate(${mx}, 0)`}>
                  <rect x="0" y="0" width="340" height="420" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <line x1="0" y1="140" x2="340" y2="140" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
                  <line x1="0" y1="280" x2="340" y2="280" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.2" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            31. FOOD COURT: HERO (Open-Air Dining Terrace Sail Canopies)
            ------------------------------------------------------------- */}
        {variant === 'foodcourt_hero' && (
          <g className="art-fc-hero">
            <g transform="translate(160, 100)" className="anim-sail-canopies">
              <path d="M 100 480 Q 540 80 980 480" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.5" />
              <path d="M 180 520 Q 540 160 900 520" fill="none" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.5" strokeDasharray="6 3" />
              <polygon points="540,60 300,340 780,340" fill="none" stroke="url(#goldLinearB)" strokeWidth="1.8" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            32. FOOD COURT: NARRATIVE (Culinary Ventilation & Station Arcs)
            ------------------------------------------------------------- */}
        {variant === 'foodcourt_narrative' && (
          <g className="art-fc-narrative">
            <g transform="translate(140, 120)" className="anim-fnb-stations">
              {[0, 360, 720].map((fx, i) => (
                <g key={`fnb-st-${i}`} transform={`translate(${fx}, 0)`}>
                  <path d="M 20 380 L 20 180 A 150 150 0 0 1 320 180 L 320 380" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <circle cx="170" cy="180" r="60" fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1.2" strokeDasharray="4 2" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            33. FOOD COURT: CATEGORIES (Dining Seating Radial Pods)
            ------------------------------------------------------------- */}
        {variant === 'foodcourt_categories' && (
          <g className="art-fc-categories">
            <g transform="translate(720, 380)" className="anim-cluster-orbital">
              {[120, 240, 340].map((r, i) => (
                <circle key={`fc-cr-${i}`} cx="0" cy="0" r={r} fill="none" stroke="rgba(175, 125, 9, 0.3)" strokeWidth="1.2" strokeDasharray="6 4" />
              ))}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <g key={`fcp-${i}`} transform={`rotate(${deg}) translate(240, 0)`}>
                  <circle cx="0" cy="0" r="14" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            34. FLOOR PLANS: HERO (Multi-Level Isometric Cutaway Datum)
            ------------------------------------------------------------- */}
        {variant === 'floorplans_hero' && (
          <g className="art-fp-hero">
            <g transform="translate(180, 100)" className="anim-fp-datum">
              {[0, 100, 200, 300, 400].map((y, i) => (
                <g key={`fp-dat-${i}`} transform={`translate(0, ${y})`}>
                  <line x1="0" y1="0" x2="1080" y2="0" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <polygon points={`0,0 -15,-8 -15,8`} fill="var(--gold)" />
                  <polygon points={`1080,0 1095,-8 1095,8`} fill="var(--gold)" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            35. FLOOR PLANS: GALLERY (High-Precision CAD Schematics & Hatches)
            ------------------------------------------------------------- */}
        {variant === 'floorplans_gallery' && (
          <g className="art-fp-gallery">
            <g transform="translate(140, 90)" className="anim-cad-hatch">
              <rect x="0" y="0" width="1160" height="560" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.5" />
              <rect x="14" y="14" width="1132" height="532" fill="none" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="360" y1="0" x2="360" y2="560" stroke="url(#goldLinearA)" strokeWidth="2" />
              <line x1="760" y1="0" x2="760" y2="560" stroke="url(#goldLinearA)" strokeWidth="2" />
              <line x1="0" y1="280" x2="1160" y2="280" stroke="url(#goldLinearA)" strokeWidth="2" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            36. LOCATION: HERO (City-Scale Expressway Vector Network)
            ------------------------------------------------------------- */}
        {variant === 'location_hero' && (
          <g className="art-loc-hero">
            <g transform="translate(140, 100)" className="anim-expressway-grid">
              <line x1="0" y1="60" x2="1160" y2="480" stroke="url(#goldLinearA)" strokeWidth="3" />
              <line x1="0" y1="480" x2="1160" y2="60" stroke="url(#goldLinearA)" strokeWidth="3" />
              <circle cx="580" cy="270" r="120" fill="none" stroke="url(#goldLinearB)" strokeWidth="2" strokeDasharray="8 4" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            37. LOCATION: RADAR (360-Degree GPS Radar Scan)
            ------------------------------------------------------------- */}
        {variant === 'location_radar' && (
          <g className="art-loc-radar">
            <g transform="translate(680, 400)" className="anim-radar-sweep">
              {[90, 180, 270, 360, 460].map((r, i) => (
                <circle key={`lr-r-${i}`} cx="0" cy="0" r={r} fill="none" stroke={i % 2 === 0 ? "url(#goldLinearA)" : "rgba(175, 125, 9, 0.2)"} strokeWidth={i % 2 === 0 ? "1.6" : "1"} strokeDasharray={i % 2 === 1 ? "6 4" : "none"} />
              ))}
              <line x1="-540" y1="0" x2="540" y2="0" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.5" strokeDasharray="8 4" />
              <line x1="0" y1="-460" x2="0" y2="460" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.5" strokeDasharray="8 4" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            38. LOCATION: CONNECTIVITY (Transit Corridor Radii)
            ------------------------------------------------------------- */}
        {variant === 'location_connectivity' && (
          <g className="art-loc-conn">
            <g transform="translate(180, 120)" className="anim-transit-corridors">
              {[0, 80, 160, 240, 320, 400].map((y, i) => (
                <g key={`tc-${i}`}>
                  <path d={`M 0 ${y} Q 540 ${y + (i % 2 === 0 ? 60 : -60)} 1080 ${y}`} fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <circle cx={200 + i * 140} cy={y} r="5" fill="var(--gold)" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            39. GALLERY: HERO (3D Viewpoint Frustum Geometry)
            ------------------------------------------------------------- */}
        {variant === 'gallery_hero' && (
          <g className="art-gal-hero">
            <g transform="translate(160, 100)" className="anim-gallery-frustum-hero">
              <polygon points="560,30 1080,480 40,480" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.2" />
              <line x1="560" y1="30" x2="560" y2="480" stroke="url(#beamHorizGrad)" strokeWidth="1.8" strokeDasharray="6 3" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            40. GALLERY: MAIN (Wall Display Panel Wireframes)
            ------------------------------------------------------------- */}
        {variant === 'gallery_main' && (
          <g className="art-gal-main">
            <g transform="translate(120, 120)" className="anim-display-panels">
              {[0, 380, 760].map((px, i) => (
                <g key={`dp-${i}`} transform={`translate(${px}, 0)`}>
                  <rect x="0" y="0" width="340" height="420" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" />
                  <rect x="20" y="20" width="300" height="380" fill="none" stroke="rgba(175, 125, 9, 0.25)" strokeWidth="1" strokeDasharray="4 2" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            41. INVESTMENT: HERO (Compounding Growth Curves)
            ------------------------------------------------------------- */}
        {variant === 'investment_hero' && (
          <g className="art-inv-hero">
            <g transform="translate(160, 140)" className="anim-growth-curve">
              <path d="M 40 480 Q 400 460 700 240 T 1100 40" fill="none" stroke="url(#goldLinearA)" strokeWidth="3" />
              <path d="M 40 480 L 1100 480" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.5" />
              <line x1="40" y1="40" x2="40" y2="480" stroke="rgba(175, 125, 9, 0.35)" strokeWidth="1.5" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            42. INVESTMENT: OVERVIEW (Catchment Valuation Circles)
            ------------------------------------------------------------- */}
        {variant === 'investment_overview' && (
          <g className="art-inv-overview">
            <g transform="translate(700, 380)" className="anim-catchment-circles">
              {[70, 150, 230, 320].map((r, i) => (
                <circle key={`ic-${i}`} cx="0" cy="0" r={r} fill="none" stroke="url(#goldLinearA)" strokeWidth="1.6" strokeDasharray={i % 2 === 1 ? "6 3" : "none"} />
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            43. INVESTMENT: PILLARS (Stability Pyramid Wireframe)
            ------------------------------------------------------------- */}
        {variant === 'investment_pillars' && (
          <g className="art-inv-pillars">
            <g transform="translate(180, 120)" className="anim-stability-pyramid">
              <polygon points="540,40 980,480 100,480" fill="none" stroke="url(#goldLinearA)" strokeWidth="2.5" />
              <line x1="210" y1="370" x2="870" y2="370" stroke="rgba(175, 125, 9, 0.4)" strokeWidth="1.5" />
              <line x1="320" y1="260" x2="760" y2="260" stroke="rgba(175, 125, 9, 0.4)" strokeWidth="1.5" />
              <line x1="430" y1="150" x2="650" y2="150" stroke="rgba(175, 125, 9, 0.4)" strokeWidth="1.5" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            44. CONTACT: HERO (Liaison Site Compass)
            ------------------------------------------------------------- */}
        {variant === 'contact_hero' && (
          <g className="art-con-hero">
            <g transform="translate(180, 100)" className="anim-contact-compass">
              <circle cx="540" cy="280" r="220" stroke="url(#goldLinearA)" strokeWidth="1.8" />
              <line x1="240" y1="280" x2="840" y2="280" stroke="url(#beamHorizGrad)" strokeWidth="2" />
              <line x1="540" y1="0" x2="540" y2="560" stroke="url(#beamHorizGrad)" strokeWidth="2" />
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            45. CONTACT: MAIN (Communication Node Schematics)
            ------------------------------------------------------------- */}
        {variant === 'contact_main' && (
          <g className="art-con-main">
            <g transform="translate(160, 120)" className="anim-comm-nodes">
              <rect x="0" y="0" width="1120" height="500" fill="none" stroke="url(#goldLinearA)" strokeWidth="1.8" strokeDasharray="8 4" />
              {[[0, 0], [1120, 0], [0, 500], [1120, 500], [560, 250]].map(([nx, ny], i) => (
                <g key={`cn-${i}`} transform={`translate(${nx}, ${ny})`}>
                  <circle cx="0" cy="0" r="16" fill="none" stroke="var(--gold)" strokeWidth="1.6" />
                  <circle cx="0" cy="0" r="4" fill="var(--gold)" />
                </g>
              ))}
            </g>
          </g>
        )}

        {/* -------------------------------------------------------------
            46. GLOBAL CTA BANNER (Radiating Seal & Focus Beacons)
            ------------------------------------------------------------- */}
        {variant === 'cta_banner' && (
          <g className="art-cta-banner">
            <g transform="translate(720, 360)" className="anim-cta-seal">
              <circle cx="0" cy="0" r="260" stroke="url(#goldLinearA)" strokeWidth="2" strokeDasharray="10 5" />
              <circle cx="0" cy="0" r="180" stroke="url(#goldLinearB)" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="100" stroke="rgba(175, 125, 9, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
