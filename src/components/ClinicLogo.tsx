import React, { useState } from 'react';

interface ClinicLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showTopText?: boolean;
  showSideText?: boolean;
  variant?: 'gold' | 'light' | 'dark';
  className?: string;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  size = 'md',
  showTopText = false,
  showSideText = true,
  variant = 'gold',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  // Dimension calculations for logo image container
  const imgHeights = {
    xs: 'h-8 sm:h-9',
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-16',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-28',
  };

  const emblemSizes = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  const sideTextSizes = {
    xs: { top: 'text-[8px]', main: 'text-xs' },
    sm: { top: 'text-[9px]', main: 'text-sm' },
    md: { top: 'text-[11px]', main: 'text-lg' },
    lg: { top: 'text-xs', main: 'text-2xl' },
    xl: { top: 'text-sm', main: 'text-3xl' },
  };

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {/* Top Text "KLINIK PERGIGIAN" if requested */}
      {showTopText && (
        <span
          className={`uppercase font-serif font-extrabold tracking-[0.25em] text-[#B8860B] mb-1 text-center ${
            size === 'lg' || size === 'xl' ? 'text-sm sm:text-base' : 'text-[10px] sm:text-xs'
          }`}
        >
          KLINIK PERGIGIAN
        </span>
      )}

      {!imgError ? (
        /* Official PNG Logo Asset */
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Klinik Pergigian Alan Adlan Logo"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className={`${imgHeights[size]} w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105`}
          />
        </div>
      ) : (
        /* Fallback Vector SVG Medallion Logo */
        <div className="flex items-center gap-3">
          <div
            className={`relative shrink-0 rounded-full flex items-center justify-center p-0.5 shadow-md transition-transform duration-300 hover:scale-105 ${emblemSizes[size]}`}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5D061" />
                  <stop offset="35%" stopColor="#E5B23A" />
                  <stop offset="70%" stopColor="#B8860B" />
                  <stop offset="100%" stopColor="#966F03" />
                </linearGradient>

                <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C59B27" />
                  <stop offset="50%" stopColor="#A0780D" />
                  <stop offset="100%" stopColor="#755602" />
                </linearGradient>

                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
                </filter>
              </defs>

              <circle cx="100" cy="100" r="94" fill="url(#goldMetallic)" />
              <circle cx="100" cy="100" r="92" fill="none" stroke="#FFF" strokeWidth="1.5" strokeOpacity="0.4" />

              <path
                d="M 100,32
                   C 126,32 148,42 153,60
                   C 158,80 151,105 146,132
                   C 142,152 135,168 126,168
                   C 118,168 114,146 110,130
                   C 106,115 94,115 90,130
                   C 86,146 82,168 74,168
                   C 65,168 58,152 54,132
                   C 49,105 42,80 47,60
                   C 52,42 74,32 100,32 Z"
                fill="#FFFFFF"
                filter="url(#shadow)"
              />

              <g textAnchor="middle" fill="url(#goldText)" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="900">
                <text x="100" y="85" fontSize="33" letterSpacing="1">
                  ALAN
                </text>
                <text x="100" y="118" fontSize="33" letterSpacing="1">
                  ADLAN
                </text>
              </g>
            </svg>
          </div>

          {showSideText && (
            <div className="flex flex-col">
              <span
                className={`uppercase tracking-widest font-serif font-bold text-[#B8860B] leading-none ${
                  sideTextSizes[size].top
                }`}
              >
                KLINIK PERGIGIAN
              </span>
              <span
                className={`font-serif font-black tracking-wide leading-tight ${
                  sideTextSizes[size].main
                } ${variant === 'light' ? 'text-white' : 'text-slate-900'}`}
              >
                ALAN ADLAN
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

