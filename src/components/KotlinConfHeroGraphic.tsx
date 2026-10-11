import React from 'react';

interface KotlinConfHeroGraphicProps {
  topText?: string;
  middleText?: string;
  bottomText?: string;
  className?: string;
}

export const KotlinConfHeroGraphic: React.FC<KotlinConfHeroGraphicProps> = ({
  topText = 'Welcome',
  middleText = 'to Kotlin 101',
  bottomText = '2026',
  className = '',
}) => {
  return (
    <div className={`kc-hero-composition ${className}`}>
      <svg
        viewBox="0 0 680 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="kc-hero-svg"
      >
        <defs>
          {/* Degradado oficial KotlinConf */}
          <linearGradient id="kcHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D900B6" />
            <stop offset="50%" stopColor="#FF2E4C" />
            <stop offset="100%" stopColor="#FF7A00" />
          </linearGradient>

          <linearGradient id="kcPillGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF2E4C" />
            <stop offset="60%" stopColor="#D900B6" />
            <stop offset="100%" stopColor="#7F52FF" />
          </linearGradient>

          <linearGradient id="kcPillGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D900B6" />
            <stop offset="70%" stopColor="#7F52FF" />
            <stop offset="100%" stopColor="#FF2E4C" />
          </linearGradient>

          <linearGradient id="kcKodeeHeadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D900B6" />
            <stop offset="100%" stopColor="#FF2E4C" />
          </linearGradient>
        </defs>

        {/* --- 1. CABEZA / AVATAR KODEE TEARDROP CON PICO (ARRIBA A LA IZQUIERDA) --- */}
        <g transform="translate(15, 12)">
          {/* Círculo base con pico a la derecha */}
          <path
            d="M 50 10 
               A 45 45 0 1 0 50 100 
               L 105 55 Z"
            fill="url(#kcKodeeHeadGrad)"
          />
          {/* Ojo blanco grande */}
          <circle cx="58" cy="55" r="16" fill="#FFFFFF" />
          {/* Pupila negra mirando al frente */}
          <circle cx="64" cy="55" r="9" fill="#090211" />
        </g>

        {/* --- 2. PÍLDORA SUPERIOR: "Welcome" --- */}
        <g transform="translate(130, 14)">
          <rect
            x="0"
            y="0"
            width="280"
            height="85"
            rx="42.5"
            fill="#090211"
            stroke="url(#kcPillGrad1)"
            strokeWidth="3.5"
          />
          <text
            x="140"
            y="54"
            fill="#FFFFFF"
            fontFamily="'Inter', system-ui, sans-serif"
            fontSize="34"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="-0.02em"
          >
            {topText}
          </text>
        </g>

        {/* --- 3. CÍRCULO GEOMÉTRICO SUPERIOR DERECHO --- */}
        <circle
          cx="460"
          cy="56"
          r="42"
          fill="#090211"
          stroke="url(#kcHeartGrad)"
          strokeWidth="3.5"
        />

        {/* --- 4. PÍLDORA MEDIA: "to Kotlin 101" --- */}
        <g transform="translate(20, 106)">
          <rect
            x="0"
            y="0"
            width="360"
            height="85"
            rx="42.5"
            fill="#090211"
            stroke="url(#kcPillGrad2)"
            strokeWidth="3.5"
          />
          <text
            x="180"
            y="54"
            fill="#FFFFFF"
            fontFamily="'Inter', system-ui, sans-serif"
            fontSize="32"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="-0.02em"
          >
            {middleText}
          </text>
        </g>

        {/* --- 5. GRAN CORAZÓN GEOMÉTRICO (DERECHA) --- */}
        <g transform="translate(490, 190) scale(0.95)">
          <path
            d="M 0 -60 
               C -55 -130, -145 -40, 0 105 
               C 145 -40, 55 -130, 0 -60 Z"
            fill="#090211"
            stroke="url(#kcHeartGrad)"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
        </g>

        {/* --- 6. ELEMENTOS INFERIORES: SEMICÍRCULOS (D-SHAPES) & "2026" --- */}
        {/* Semicírculos verticales estilo Bauhaus */}
        <g transform="translate(68, 198)" stroke="url(#kcPillGrad2)" strokeWidth="3" fill="#090211">
          <path d="M 0 0 A 40 40 0 0 1 0 80 Z" />
          <path d="M 46 0 A 40 40 0 0 1 46 80 Z" />
        </g>

        {/* Barras verticales blancas */}
        <g transform="translate(136, 215)">
          <rect x="0" y="0" width="12" height="46" rx="6" fill="#FFFFFF" />
          <rect x="24" y="0" width="12" height="46" rx="6" fill="#FFFFFF" />
        </g>

        {/* Píldora inferior derecha: "2026" */}
        <g transform="translate(245, 198)">
          <path
            d="M 0 0 L 130 0 A 40 40 0 0 1 170 40 L 170 40 A 40 40 0 0 1 130 80 L 0 80 Z"
            fill="#090211"
            stroke="url(#kcPillGrad1)"
            strokeWidth="3.5"
          />
          <text
            x="85"
            y="53"
            fill="#FFFFFF"
            fontFamily="'Inter', system-ui, sans-serif"
            fontSize="34"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="-0.02em"
          >
            {bottomText}
          </text>
        </g>
      </svg>
    </div>
  );
};
