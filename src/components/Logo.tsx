import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 60" 
    className={`h-8 ${className}`}
    fill="currentColor"
  >
    <text
      x="0"
      y="35"
      className="font-bold"
      style={{ 
        fontSize: '40px',
        fontWeight: 'bold',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      OPSVIO
    </text>
    {/* Simple bold underline that extends about 60% of the width */}
    <rect x="0" y="45" width="120" height="6" />
  </svg>
);