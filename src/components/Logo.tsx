import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative">
      <span className="text-2xl font-bold">OPSVIO</span>
      <div className="absolute -bottom-1 left-0 w-3/5 h-1.5 bg-current"></div>
    </div>
  </div>
);