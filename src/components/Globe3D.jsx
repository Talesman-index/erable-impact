import React, { useEffect, useRef } from 'react';

export default function Globe3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    const context = canvas.getContext('2d');
    const radius = width * 0.44;

    // Simplified continental polygon data
    const CONTINENTS = [
      // North America
      [[-168,65],[-168,72],[-140,70],[-120,75],[-85,82],[-60,82],[-55,60],[-50,47],[-65,44],[-75,35],[-80,25],[-90,15],[-80,8],[-77,8],[-82,14],[-98,16],[-105,20],[-115,30],[-125,48],[-140,60],[-168,65]],
      // South America
      [[-80,10],[-60,10],[-35,-5],[-38,-18],[-55,-30],[-65,-45],[-68,-55],[-75,-45],[-80,-20],[-80,10]],
      // Eurasia
      [[-10,36],[0,42],[15,38],[28,40],[40,41],[40,28],[55,25],[60,25],[70,20],[75,10],[80,10],[90,22],[100,5],[105,10],[110,20],[120,23],[125,40],[140,55],[170,65],[180,70],[170,78],[140,75],[100,78],[70,75],[30,71],[15,58],[5,62],[-5,58],[-10,50],[-10,36]],
      // Africa
      [[-17,35],[30,32],[33,28],[43,12],[51,11],[40,-10],[33,-34],[18,-34],[12,-5],[-5,5],[-17,20],[-17,35]],
      // Australia
      [[113,-22],[130,-12],[142,-11],[153,-28],[148,-38],[138,-35],[115,-35],[113,-22]],
      // Greenland
      [[-55,60],[-20,70],[-25,82],[-60,82],[-55,60]]
    ];

    function pointInPoly(pt, poly) {
      let x = pt[0], y = pt[1];
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        let xi = poly[i][0], yi = poly[i][1];
        let xj = poly[j][0], yj = poly[j][1];
        let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      return inside;
    }

    function isLand(lon, lat) {
      for (let c = 0; c < CONTINENTS.length; c++) {
        if (pointInPoly([lon, lat], CONTINENTS[c])) return true;
      }
      return false;
    }

    // Pre-generate matrix dots inside landmasses
    const matrixDots = [];
    for (let lat = -75; lat <= 75; lat += 2.4) {
      for (let lon = -180; lon <= 180; lon += 2.4) {
        if (isLand(lon, lat)) {
          matrixDots.push([lon, lat]);
        }
      }
    }

    function project(lon, lat, rotY, rotX) {
      const radLon = (lon * Math.PI) / 180;
      const radLat = (lat * Math.PI) / 180;
      const rY = (rotY * Math.PI) / 180;
      const rX = (rotX * Math.PI) / 180;

      let x = Math.cos(radLat) * Math.sin(radLon);
      let y = Math.sin(radLat);
      let z = Math.cos(radLat) * Math.cos(radLon);

      let x1 = x * Math.cos(rY) + z * Math.sin(rY);
      let z1 = -x * Math.sin(rY) + z * Math.cos(rY);

      let y2 = y * Math.cos(rX) - z1 * Math.sin(rX);
      let z2 = y * Math.sin(rX) + z1 * Math.cos(rX);

      return {
        x: width / 2 + x1 * radius,
        y: height / 2 - y2 * radius,
        visible: z2 > 0
      };
    }

    let animationFrameId;
    let start = null;

    function animate(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const rotY = elapsed * 0.018;
      const rotX = -20;

      context.clearRect(0, 0, width, height);

      // 1. Dark green sphere background
      context.beginPath();
      context.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
      context.fillStyle = "#03170d";
      context.fill();
      context.strokeStyle = "#0d3c24";
      context.lineWidth = 2;
      context.stroke();

      // 2. Graticules (Latitude & Longitude grid lines)
      context.strokeStyle = "rgba(70, 180, 40, 0.16)";
      context.lineWidth = 0.6;
      
      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 20) {
        context.beginPath();
        let first = true;
        for (let lon = -180; lon <= 180; lon += 5) {
          const p = project(lon, lat, rotY, rotX);
          if (p.visible) {
            if (first) { context.moveTo(p.x, p.y); first = false; }
            else { context.lineTo(p.x, p.y); }
          } else { first = true; }
        }
        context.stroke();
      }

      // Longitude lines
      for (let lon = -180; lon < 180; lon += 30) {
        context.beginPath();
        let first = true;
        for (let lat = -85; lat <= 85; lat += 5) {
          const p = project(lon, lat, rotY, rotX);
          if (p.visible) {
            if (first) { context.moveTo(p.x, p.y); first = false; }
            else { context.lineTo(p.x, p.y); }
          } else { first = true; }
        }
        context.stroke();
      }

      // 3. Draw Dotted Matrix Fill inside landmasses
      context.fillStyle = "rgba(130, 250, 50, 0.85)";
      for (let i = 0; i < matrixDots.length; i++) {
        const pt = matrixDots[i];
        const p = project(pt[0], pt[1], rotY, rotX);
        if (p.visible) {
          context.fillRect(p.x, p.y, 1.4, 1.4);
        }
      }

      // 4. Draw Continent Outlines
      context.strokeStyle = "#82fa32";
      context.lineWidth = 1.4;
      for (let c = 0; c < CONTINENTS.length; c++) {
        const poly = CONTINENTS[c];
        context.beginPath();
        let first = true;
        for (let i = 0; i < poly.length; i++) {
          const p = project(poly[i][0], poly[i][1], rotY, rotX);
          if (p.visible) {
            if (first) { context.moveTo(p.x, p.y); first = false; }
            else { context.lineTo(p.x, p.y); }
          } else { first = true; }
        }
        context.stroke();
      }

      // 5. Pulsing white location pin over MRC de L'Érable (-71.9, 46.3)
      const pin = project(-71.9, 46.3, rotY, rotX);
      if (pin.visible) {
        const pulse = 5 + Math.abs(Math.sin(elapsed * 0.004)) * 6;
        context.beginPath();
        context.arc(pin.x, pin.y, pulse, 0, 2 * Math.PI);
        context.strokeStyle = "rgba(255, 255, 255, 0.6)";
        context.lineWidth = 1.5;
        context.stroke();

        context.beginPath();
        context.arc(pin.x, pin.y, 4.5, 0, 2 * Math.PI);
        context.fillStyle = "#ffffff";
        context.shadowColor = "#ffffff";
        context.shadowBlur = 8;
        context.fill();
        context.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="impact-globe-wrapper">
      <canvas ref={canvasRef} id="globe-canvas" width={500} height={500} style={{ maxWidth: '100%', height: 'auto', touchAction: 'pan-y' }} />
    </div>
  );
}
