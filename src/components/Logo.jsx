import React from 'react';

export default function Logo({ size = 'normal', lightText = false, onClick }) {
  // Proportional scaling for a compact, ultra-clean typography layout
  const scale = size === 'large' ? 1.4 : size === 'small' ? 0.75 : 1;

  const textColor = lightText ? '#ffffff' : '#0f172a';
  const badgeBg = '#dbfc49'; // Neon Lime Yellow pill badge
  const badgeTextColor = '#0f172a'; // Dark Navy text inside GES pill

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
      {/* Pure Typography ONLY: ERABLE + Neon Lime GES Pill (Zero symbol) */}
      <span 
        style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 900, 
          fontSize: `${1.45 * scale}rem`, 
          letterSpacing: '0.04em',
          color: textColor,
          textTransform: 'uppercase',
          lineHeight: 1
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
          lineHeight: 1
        }}
      >
        GES
      </span>
    </div>
  );
}
