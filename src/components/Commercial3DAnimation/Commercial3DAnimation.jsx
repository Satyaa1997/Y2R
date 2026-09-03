import { useRef, useEffect } from 'react';
import './Commercial3DAnimation.css';

export default function Commercial3DAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse interactive camera target
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouse.targetX = x * 0.5;
      mouse.targetY = y * 0.35;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Floating Gold Particles
    const particleCount = 70;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 600 - 50,
        z: Math.random() * 900 + 50,
        size: Math.random() * 2.5 + 1,
        speed: Math.random() * 0.6 + 0.3,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // 3D Point Projection Helper
    const project = (x, y, z, rotX, rotY, fov = 520) => {
      // Rotate around Y-axis
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      // Rotate around X-axis
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      const depth = z2 + 620;
      if (depth <= 10) return null;

      const scale = fov / depth;
      return {
        x: width / 2 + x1 * scale,
        y: height / 2 + y2 * scale,
        scale,
        depth
      };
    };

    // Helper: Draw 3D Line
    const draw3DLine = (p1, p2, strokeStyle, lineWidth = 1) => {
      if (!p1 || !p2) return;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    // Helper: Draw 3D Quad Face
    const draw3DQuad = (p1, p2, p3, p4, fillStyle, strokeStyle, lineWidth = 1) => {
      if (!p1 || !p2 || !p3 || !p4) return;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.closePath();
      if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
    };

    /**
     * Draw an Authentic Y2R Heights Building Landmark in 3D
     * Exactly matching the uploaded elevation:
     * - Lower Podium (Ground + Upper Ground Retail Showrooms with glass grid)
     * - Mid-Deck (Commercial / Banquet Floor with ribbon glass)
     * - Upper Studio Tower (5 Floors x 6 Protruding Balconies with glass railings)
     * - Rooftop Terrace (Planter Greenery & Top Parapet)
     * - Right-Side Vertical Lift Core with Glass Shaft & Gold Y2R Crest
     */
    const drawY2RBuilding = (bx, bz, bWidth, bHeight, bDepth, rotX, rotY, isMirrored = false) => {
      const baseY = 210;
      const mainW = bWidth * 0.76;
      const coreW = bWidth * 0.24;
      const totalH = bHeight;

      const mainLeftX = isMirrored ? bx - bWidth / 2 + coreW : bx - bWidth / 2;
      const coreLeftX = isMirrored ? bx - bWidth / 2 : bx + bWidth / 2 - coreW;

      const frontZ = bz - bDepth / 2;
      const backZ = bz + bDepth / 2;

      // ----------------------------------------------------
      // A. MAIN TOWER BASE & STRUCTURE
      // ----------------------------------------------------
      const mainCorners = {
        b0: project(mainLeftX, baseY, backZ, rotX, rotY),
        b1: project(mainLeftX + mainW, baseY, backZ, rotX, rotY),
        b2: project(mainLeftX + mainW, baseY, frontZ, rotX, rotY),
        b3: project(mainLeftX, baseY, frontZ, rotX, rotY),
        t0: project(mainLeftX, baseY - totalH, backZ, rotX, rotY),
        t1: project(mainLeftX + mainW, baseY - totalH, backZ, rotX, rotY),
        t2: project(mainLeftX + mainW, baseY - totalH, frontZ, rotX, rotY),
        t3: project(mainLeftX, baseY - totalH, frontZ, rotX, rotY),
      };

      // Main tower subtle golden façade tint
      draw3DQuad(mainCorners.b3, mainCorners.b2, mainCorners.t2, mainCorners.t3, 'rgba(175, 125, 9, 0.04)', 'rgba(175, 125, 9, 0.65)', 1.5);
      draw3DQuad(mainCorners.t0, mainCorners.t1, mainCorners.t2, mainCorners.t3, 'rgba(175, 125, 9, 0.1)', 'rgba(175, 125, 9, 0.8)', 1.5);

      // ----------------------------------------------------
      // B. RIGHT-SIDE VERTICAL LIFT & STAIRCASE CORE
      // ----------------------------------------------------
      const coreCorners = {
        b0: project(coreLeftX, baseY, backZ, rotX, rotY),
        b1: project(coreLeftX + coreW, baseY, backZ, rotX, rotY),
        b2: project(coreLeftX + coreW, baseY, frontZ, rotX, rotY),
        b3: project(coreLeftX, baseY, frontZ, rotX, rotY),
        t0: project(coreLeftX, baseY - totalH - 22, backZ, rotX, rotY), // slightly taller roof
        t1: project(coreLeftX + coreW, baseY - totalH - 22, backZ, rotX, rotY),
        t2: project(coreLeftX + coreW, baseY - totalH - 22, frontZ, rotX, rotY),
        t3: project(coreLeftX, baseY - totalH - 22, frontZ, rotX, rotY),
      };

      // Draw Vertical Core solid block
      draw3DQuad(coreCorners.b3, coreCorners.b2, coreCorners.t2, coreCorners.t3, 'rgba(175, 125, 9, 0.08)', 'rgba(175, 125, 9, 0.85)', 1.8);
      draw3DQuad(coreCorners.t0, coreCorners.t1, coreCorners.t2, coreCorners.t3, 'rgba(175, 125, 9, 0.14)', 'rgba(175, 125, 9, 0.9)', 1.8);

      // Vertical Elevator Glass Shaft Windows (on Core)
      const liftTopY = baseY - totalH * 0.95;
      const liftBottomY = baseY - totalH * 0.55;
      const liftW = coreW * 0.45;
      const liftX = coreLeftX + (coreW - liftW) / 2;

      for (let ly = liftBottomY; ly >= liftTopY; ly -= 16) {
        const lp1 = project(liftX, ly, frontZ - 1, rotX, rotY);
        const lp2 = project(liftX + liftW, ly, frontZ - 1, rotX, rotY);
        const lp3 = project(liftX + liftW, ly - 12, frontZ - 1, rotX, rotY);
        const lp4 = project(liftX, ly - 12, frontZ - 1, rotX, rotY);
        draw3DQuad(lp1, lp2, lp3, lp4, 'rgba(175, 125, 9, 0.18)', '#af7d09', 1.2);
      }

      // Y2R Gold Emblem Plaque on Core
      const emblemY = baseY - totalH * 0.35;
      const ep1 = project(coreLeftX + 6, emblemY + 18, frontZ - 2, rotX, rotY);
      const ep2 = project(coreLeftX + coreW - 6, emblemY + 18, frontZ - 2, rotX, rotY);
      const ep3 = project(coreLeftX + coreW - 6, emblemY - 18, frontZ - 2, rotX, rotY);
      const ep4 = project(coreLeftX + 6, emblemY - 18, frontZ - 2, rotX, rotY);
      draw3DQuad(ep1, ep2, ep3, ep4, 'rgba(175, 125, 9, 0.22)', '#af7d09', 1.5);

      // Emblem Center Star Dot
      const emblemCenter = project(coreLeftX + coreW / 2, emblemY, frontZ - 3, rotX, rotY);
      if (emblemCenter) {
        ctx.beginPath();
        ctx.arc(emblemCenter.x, emblemCenter.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#af7d09';
        ctx.fill();
      }

      // ----------------------------------------------------
      // C. LOWER PODIUM: RETAIL SHOWROOMS (G & UG FLOORS)
      // ----------------------------------------------------
      const podiumH = totalH * 0.28;
      const podiumTopY = baseY - podiumH;
      const retailBays = 6;
      const bayW = mainW / retailBays;

      // Horizontal Retail Divider Beams
      const rBeam1 = project(mainLeftX, baseY - podiumH * 0.5, frontZ, rotX, rotY);
      const rBeam2 = project(mainLeftX + mainW, baseY - podiumH * 0.5, frontZ, rotX, rotY);
      draw3DLine(rBeam1, rBeam2, '#af7d09', 1.5);

      const rTopBeam1 = project(mainLeftX, podiumTopY, frontZ, rotX, rotY);
      const rTopBeam2 = project(mainLeftX + mainW, podiumTopY, frontZ, rotX, rotY);
      draw3DLine(rTopBeam1, rTopBeam2, '#af7d09', 2);

      // Vertical Retail Glass Bay Mullions
      for (let b = 1; b < retailBays; b++) {
        const bxPos = mainLeftX + b * bayW;
        const vp1 = project(bxPos, baseY, frontZ, rotX, rotY);
        const vp2 = project(bxPos, podiumTopY, frontZ, rotX, rotY);
        draw3DLine(vp1, vp2, 'rgba(175, 125, 9, 0.5)', 1);

        // Retail Glass Bay Windows (Lower Ground & Upper Ground)
        const gw1 = project(bxPos - bayW + 3, baseY - 4, frontZ - 1, rotX, rotY);
        const gw2 = project(bxPos - 3, baseY - 4, frontZ - 1, rotX, rotY);
        const gw3 = project(bxPos - 3, baseY - podiumH * 0.48, frontZ - 1, rotX, rotY);
        const gw4 = project(bxPos - bayW + 3, baseY - podiumH * 0.48, frontZ - 1, rotX, rotY);
        draw3DQuad(gw1, gw2, gw3, gw4, 'rgba(175, 125, 9, 0.08)', 'rgba(175, 125, 9, 0.5)', 0.8);
      }

      // ----------------------------------------------------
      // D. MID-DECK: COMMERCIAL / BANQUET FLOOR WITH RIBBON GLASS
      // ----------------------------------------------------
      const midDeckH = totalH * 0.16;
      const midDeckTopY = podiumTopY - midDeckH;

      const mTopBeam1 = project(mainLeftX, midDeckTopY, frontZ, rotX, rotY);
      const mTopBeam2 = project(mainLeftX + mainW, midDeckTopY, frontZ, rotX, rotY);
      draw3DLine(mTopBeam1, mTopBeam2, '#af7d09', 2.2);

      // Ribbon glass horizontal louvres & ceiling grid lights
      for (let mg = 1; mg < 5; mg++) {
        const mgy = podiumTopY - (midDeckH / 5) * mg;
        const ml1 = project(mainLeftX, mgy, frontZ, rotX, rotY);
        const ml2 = project(mainLeftX + mainW, mgy, frontZ, rotX, rotY);
        draw3DLine(ml1, ml2, 'rgba(175, 125, 9, 0.35)', 0.8);
      }

      // Terrace Balcony Deck Separation with Planter nodes
      const terraceDeckY = midDeckTopY;
      for (let tp = 0; tp <= retailBays; tp++) {
        const tpx = mainLeftX + tp * bayW;
        const ptPoint = project(tpx, terraceDeckY - 4, frontZ - 2, rotX, rotY);
        if (ptPoint) {
          ctx.beginPath();
          ctx.arc(ptPoint.x, ptPoint.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#8a6104';
          ctx.fill();
        }
      }

      // ----------------------------------------------------
      // E. UPPER STUDIO TOWER: 5 FLOORS x 6 BALCONY SUITES
      // ----------------------------------------------------
      const studioTowerH = totalH * 0.5;
      const studioFloorCount = 5;
      const studioFloorH = studioTowerH / studioFloorCount;
      const balconyDepth = 14;

      for (let sf = 0; sf < studioFloorCount; sf++) {
        const floorBottomY = midDeckTopY - sf * studioFloorH;

        // Floor slab line
        const fl1 = project(mainLeftX, floorBottomY, frontZ, rotX, rotY);
        const fl2 = project(mainLeftX + mainW, floorBottomY, frontZ, rotX, rotY);
        draw3DLine(fl1, fl2, '#af7d09', 1.8);

        // 6 Protruding Balconies per Floor
        for (let sb = 0; sb < retailBays; sb++) {
          const balLeft = mainLeftX + sb * bayW + 4;
          const balRight = mainLeftX + (sb + 1) * bayW - 4;
          const balBottom = floorBottomY - 2;
          const balTop = balBottom - studioFloorH * 0.65;

          // 3D Protruding Balcony Box Corners
          const bp1 = project(balLeft, balBottom, frontZ - balconyDepth, rotX, rotY);
          const bp2 = project(balRight, balBottom, frontZ - balconyDepth, rotX, rotY);
          const bp3 = project(balRight, balTop, frontZ - balconyDepth, rotX, rotY);
          const bp4 = project(balLeft, balTop, frontZ - balconyDepth, rotX, rotY);

          // Balcony Wall/Back Window
          const bw1 = project(balLeft, balBottom, frontZ, rotX, rotY);
          const bw2 = project(balRight, balBottom, frontZ, rotX, rotY);
          const bw3 = project(balRight, balTop - 4, frontZ, rotX, rotY);
          const bw4 = project(balLeft, balTop - 4, frontZ, rotX, rotY);

          // Balcony Floor Plate
          draw3DQuad(bw1, bw2, bp2, bp1, 'rgba(175, 125, 9, 0.16)', '#af7d09', 1);

          // Balcony Glass Railing Front
          draw3DQuad(bp1, bp2, bp3, bp4, 'rgba(175, 125, 9, 0.1)', '#af7d09', 1.2);

          // Balcony Glass Window Behind
          draw3DQuad(bw1, bw2, bw3, bw4, 'rgba(175, 125, 9, 0.05)', 'rgba(175, 125, 9, 0.45)', 0.8);
        }
      }

      // ----------------------------------------------------
      // F. ROOFTOP TERRACE GARDEN & ARCHITECTURAL FRAME
      // ----------------------------------------------------
      const roofY = baseY - totalH;

      // Rooftop Planter Greenery Nodes along the top deck
      for (let rp = 0; rp <= retailBays * 2; rp++) {
        const rpx = mainLeftX + (rp * mainW) / (retailBays * 2);
        const rNode = project(rpx, roofY - 7, frontZ - 2, rotX, rotY);
        if (rNode) {
          ctx.beginPath();
          ctx.arc(rNode.x, rNode.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#af7d09';
          ctx.fill();
        }
      }

      // Rooftop Fluted Top Crown & Apex Beacon
      const apexP = project(mainLeftX + mainW / 2, roofY - 14, frontZ, rotX, rotY);
      if (apexP) {
        ctx.beginPath();
        ctx.arc(apexP.x, apexP.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#c48d0a';
        ctx.shadowColor = 'rgba(175, 125, 9, 0.6)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    let time = 0;
    let currentRotX = 0.22;
    let currentRotY = 0;

    const render = () => {
      time += 0.015;

      // Smooth camera interpolation
      currentRotX += (0.22 + mouse.y * 0.22 - currentRotX) * 0.05;
      currentRotY += (mouse.x * 0.3 - currentRotY) * 0.05;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 100% Pure White Background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // 1. Draw 3D Isometric Golden Wave Ground Grid across full width
      const gridSize = 16;
      const gridSpacing = 75;
      ctx.lineWidth = 1;

      for (let ix = -gridSize; ix <= gridSize; ix++) {
        ctx.beginPath();
        let started = false;
        for (let iz = 0; iz <= gridSize * 2; iz++) {
          const gx = ix * gridSpacing;
          const gz = iz * gridSpacing - 220;
          const wave = Math.sin(time * 1.5 + ix * 0.28 + iz * 0.28) * 8;
          const gy = 210 + wave;

          const p = project(gx, gy, gz, currentRotX, currentRotY);
          if (p) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          }
        }
        ctx.strokeStyle = `rgba(175, 125, 9, ${0.22 * Math.max(0, 1 - Math.abs(ix) / gridSize)})`;
        ctx.stroke();
      }

      for (let iz = 0; iz <= gridSize * 2; iz++) {
        ctx.beginPath();
        let started = false;
        for (let ix = -gridSize; ix <= gridSize; ix++) {
          const gx = ix * gridSpacing;
          const gz = iz * gridSpacing - 220;
          const wave = Math.sin(time * 1.5 + ix * 0.28 + iz * 0.28) * 8;
          const gy = 210 + wave;

          const p = project(gx, gy, gz, currentRotX, currentRotY);
          if (p) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          }
        }
        ctx.strokeStyle = `rgba(175, 125, 9, ${0.22 * Math.max(0, 1 - iz / (gridSize * 2))})`;
        ctx.stroke();
      }

      // 2. Draw 2 Authentic Y2R Heights Landmark Buildings (Responsive Multi-Screen Scaling)
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isBigScreen = width >= 1600;

      const buildingSpread = isMobile
        ? Math.min(width * 0.44, 240)
        : isTablet
          ? Math.min(width * 0.38, 380)
          : isBigScreen
            ? Math.min(width * 0.38, 620)
            : Math.min(width * 0.38, 540);

      const bWidth = isMobile
        ? Math.max(130, Math.min(width * 0.28, 190))
        : isTablet
          ? Math.min(width * 0.26, 260)
          : isBigScreen
            ? Math.min(width * 0.28, 380)
            : Math.min(width * 0.3, 340);

      const bHeight = bWidth * 1.32;
      const bDepth = isMobile ? 80 : 120;

      // Left Y2R Heights Landmark Tower
      drawY2RBuilding(-buildingSpread, 200, bWidth, bHeight, bDepth, currentRotX, currentRotY, false);

      // Right Y2R Heights Landmark Tower (Mirrored orientation for architectural symmetry)
      drawY2RBuilding(buildingSpread, 200, bWidth, bHeight, bDepth, currentRotX, currentRotY, true);

      // 3. Draw 3D Floating Gold Dust & Energy Particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -380) p.y = 280;

        const pulseSize = p.size + Math.sin(time * 3 + p.pulse) * 0.6;
        const pt = project(p.x, p.y, p.z, currentRotX, currentRotY);

        if (pt) {
          const alpha = Math.min(1, Math.max(0.15, (1100 - pt.depth) / 800));
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(0.7, pulseSize * pt.scale), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(175, 125, 9, ${alpha * 0.85})`;
          ctx.shadowColor = 'rgba(175, 125, 9, 0.4)';
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 4. Subtle Golden Connecting Horizon Laser Beam between the 2 Towers
      const sweepY = ((time * 45) % 500) - 220;
      const sp1 = project(-buildingSpread - bWidth / 2, sweepY, 200, currentRotX, currentRotY);
      const sp2 = project(buildingSpread + bWidth / 2, sweepY, 200, currentRotX, currentRotY);
      if (sp1 && sp2) {
        ctx.beginPath();
        ctx.moveTo(sp1.x, sp1.y);
        ctx.lineTo(sp2.x, sp2.y);
        ctx.strokeStyle = 'rgba(175, 125, 9, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="commercial-3d-canvas-container">
      <canvas ref={canvasRef} className="commercial-3d-canvas" />
    </div>
  );
}
