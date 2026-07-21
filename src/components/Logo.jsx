import React from 'react';

export default function Logo({ size = 'normal', lightText = false, onClick }) {
  // Proportional scaling for a compact, tight-knit layout
  const scale = size === 'large' ? 1.4 : size === 'small' ? 0.75 : 1;

  const symbolStroke = lightText ? '#ffffff' : '#0f172a';
  const textColor = lightText ? '#ffffff' : '#0f172a';
  const badgeBg = lightText ? '#dbfc49' : '#0f172a';
  const badgeTextColor = lightText ? '#0f172a' : '#ffffff';

  return (
    <div 
      onClick={onClick}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: `${6 * scale}px`, 
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        padding: '2px 0'
      }}
      className="erable-ges-official-logo"
    >
      {/* Pure 100% Transparent SVG Symbol (Zero background box) */}
      <svg 
        width={42 * scale} 
        height={44 * scale} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, display: 'block' }}
      >
        <path 
          d="M 50,6 L 56,22 L 67,15 L 61,31 L 76,27 L 68,42 L 94,49 L 68,58 L 82,75 L 58,67 L 54,95 L 46,95 L 42,67 L 18,75 L 32,58 L 6,49 L 32,42 L 24,27 L 39,31 L 33,15 L 44,22 Z" 
          stroke={symbolStroke} 
          strokeWidth="6" 
          strokeLinejoin="miter"
          strokeLinecap="square"
          fill="none" 
        />
      </svg>

      {/* Typography: ERABLE + GES Pill (Tightly spaced) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: `${5 * scale}px`, lineHeight: 1 }}>
        <span 
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 900, 
            fontSize: `${1.45 * scale}rem`, 
            letterSpacing: '0.03em',
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
            padding: `${3 * scale}px ${8 * scale}px`, 
            borderRadius: `${7 * scale}px`,
            letterSpacing: '0.04em',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            marginLeft: '2px'
          }}
        >
          GES
        </span>
      </div>
    </div>
  );
}
