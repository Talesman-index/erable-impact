import React from 'react';

export default function Logo({ size = 'normal', lightText = false, onClick }) {
  // Proportional scaling for a compact, tight-knit layout
  const scale = size === 'large' ? 1.4 : size === 'small' ? 0.75 : 1;

  // Colors matching user screenshot: White text on dark header, Dark Slate on light header
  const symbolStroke = lightText ? '#ffffff' : '#0f172a';
  const textColor = lightText ? '#ffffff' : '#0f172a';
  const badgeBg = '#dbfc49'; // Neon Lime Yellow pill badge
  const badgeTextColor = '#0f172a'; // Dark Navy text inside GES pill

  return (
    <div 
      onClick={onClick}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: `${8 * scale}px`, 
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        padding: '2px 0'
      }}
      className="erable-ges-official-logo"
    >
      {/* Exact 1:1 Vector SVG of the Starburst / Compass Star Emblem from screenshot */}
      <svg 
        width={42 * scale} 
        height={42 * scale} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, display: 'block' }}
      >
        <path 
          d="
            M 50,4 
            L 55,28 L 68,14 L 64,33 
            L 83,23 L 72,40 L 96,50 
            L 72,60 L 83,77 L 64,67 
            L 68,86 L 55,72 L 50,96 
            L 45,72 L 32,86 L 36,67 
            L 17,77 L 28,60 L 4,50 
            L 28,40 L 17,23 L 36,33 
            L 32,14 L 45,28 Z
          " 
          stroke={symbolStroke} 
          strokeWidth="5.5" 
          strokeLinejoin="miter"
          strokeLinecap="square"
          fill="none" 
        />
      </svg>

      {/* Typography: ERABLE + Neon Lime GES Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: `${6 * scale}px`, lineHeight: 1 }}>
        <span 
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 900, 
            fontSize: `${1.45 * scale}rem`, 
            letterSpacing: '0.04em',
            color: textColor,
            textTransform: 'uppercase'
          }}
        >
          ER<span style={{ display: 'inline-block', transform: 'scaleY(0.94)' }}>Λ</span>BLE
        </span>

        <span 
          style={{ 
            backgroundColor: badgeBg, 
            color: badgeTextColor, 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: `${0.95 * scale}rem`, 
            padding: `${4 * scale}px ${10 * scale}px`, 
            borderRadius: `${9 * scale}px`,
            letterSpacing: '0.05em',
            boxShadow: '0 2px 8px rgba(219, 252, 73, 0.3)',
            marginLeft: '2px'
          }}
        >
          GES
        </span>
      </div>
    </div>
  );
}
