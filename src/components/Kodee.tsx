import React from 'react';

export type KodeePose =
  | 'wave'
  | 'love'
  | 'drink'
  | 'speed'
  | 'safe'
  | 'idea'
  | 'ios'
  | 'ai'
  | 'ponder'
  | 'celebrate';

interface KodeeProps {
  pose?: KodeePose;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Kodee: React.FC<KodeeProps> = ({
  pose = 'wave',
  size = 140,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`kodee-character kodee-${pose} ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        filter: 'drop-shadow(0 8px 18px rgba(127, 82, 255, 0.35))',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="kodeePurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9065FF" />
            <stop offset="100%" stopColor="#6C35F7" />
          </linearGradient>
          <linearGradient id="kodeeGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="50%" stopColor="#FF2E4C" />
            <stop offset="100%" stopColor="#7F52FF" />
          </linearGradient>
        </defs>

        {/* --- POSES ESPECÍFICAS: ACCESORIOS Y EXTREMIDADES TRASERAS --- */}

        {/* Pose LOVE: Pierna trasera curvada corriendo */}
        {pose === 'love' && (
          <path
            d="M 85 140 C 70 150, 60 170, 68 180 C 72 186, 80 185, 84 176 C 88 168, 92 150, 100 142"
            fill="#6C35F7"
          />
        )}

        {/* Pose DRINK: Mesa sutil y pajita */}
        {pose === 'drink' && (
          <>
            <line x1="140" y1="130" x2="195" y2="130" stroke="#7F52FF" strokeWidth="3" opacity="0.6" />
            {/* Vaso */}
            <polygon points="36,120 54,120 48,150 40,150" fill="#0B0414" stroke="#7F52FF" strokeWidth="2.5" />
            {/* Pajita blanca con curva */}
            <path d="M 45 125 L 48 95 L 68 98" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        )}

        {/* Pose CELEBRATE: Gorrito de fiesta */}
        {pose === 'celebrate' && (
          <g transform="translate(100, 32) rotate(12)">
            <polygon points="0,-35 -16,10 16,10" fill="url(#kodeeGlowGrad)" />
            <circle cx="0" cy="-35" r="5" fill="#FFB067" />
            <circle cx="-5" cy="-8" r="3" fill="#FFFFFF" opacity="0.8" />
            <circle cx="4" cy="2" r="2.5" fill="#FFFFFF" opacity="0.8" />
          </g>
        )}

        {/* Pose AI: Antena holográfica futurista */}
        {pose === 'ai' && (
          <g transform="translate(100, 32)">
            <line x1="0" y1="0" x2="0" y2="-22" stroke="#FF7A00" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="0" cy="-24" r="6" fill="#FF7A00" />
            <circle cx="0" cy="-24" r="10" stroke="#FF2E4C" strokeWidth="1.5" opacity="0.6" />
          </g>
        )}

        {/* Pose SPEED: Estela de velocidad */}
        {pose === 'speed' && (
          <g stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" opacity="0.8">
            <line x1="15" y1="110" x2="45" y2="110" />
            <line x1="25" y1="130" x2="55" y2="130" />
            <line x1="10" y1="150" x2="40" y2="150" />
          </g>
        )}

        {/* --- CUERPO PRINCIPAL DE KODEE (Silueta violeta con orejas puntiagudas) --- */}
        <path
          d="M 62 48 
             C 72 38, 88 56, 100 58 
             C 112 56, 128 38, 138 48 
             C 148 58, 152 75, 150 100 
             C 148 128, 138 140, 100 140 
             C 62 140, 52 128, 50 100 
             C 48 75, 52 58, 62 48 Z"
          fill="url(#kodeePurpleGrad)"
        />

        {/* --- PANTALLA / VISOR NEGRO REDONDEADO --- */}
        <rect
          x="58"
          y="62"
          width="84"
          height="54"
          rx="14"
          fill="#090211"
          stroke="#2A163E"
          strokeWidth="2"
        />

        {/* --- OJOS Y EXPRESIONES EN LA PANTALLA --- */}
        {pose === 'drink' ? (
          /* Ojos cerrados disfrutando de la bebida ^^ */
          <g stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" fill="none">
            <path d="M 72 88 C 76 80, 86 80, 90 88" />
            <path d="M 110 88 C 114 80, 124 80, 128 88" />
          </g>
        ) : pose === 'safe' || pose === 'ponder' ? (
          /* Ojos inquisitivos / seguros (un ojo más grande o con brillo) */
          <>
            <circle cx="80" cy="88" r="12" fill="#FFFFFF" />
            <circle cx="82" cy="88" r="6" fill="#090211" />
            <circle cx="120" cy="88" r="12" fill="#FFFFFF" />
            <circle cx="122" cy="88" r="6" fill="#090211" />
            <path d="M 95 102 Q 100 107 105 102" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </>
        ) : (
          /* Ojos grandes y abiertos icónicos de Kodee */
          <>
            <circle cx="80" cy="88" r="13" fill="#FFFFFF" />
            <circle cx="82" cy="88" r="6.5" fill="#090211" />
            <circle cx="84" cy="85" r="2.5" fill="#FFFFFF" />

            <circle cx="120" cy="88" r="13" fill="#FFFFFF" />
            <circle cx="122" cy="88" r="6.5" fill="#090211" />
            <circle cx="124" cy="85" r="2.5" fill="#FFFFFF" />

            <path
              d="M 94 103 Q 100 109 106 103"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}

        {/* --- PIERNAS --- */}
        {pose !== 'love' && (
          <>
            {/* Pierna izquierda */}
            <path
              d="M 82 138 L 80 174 Q 80 182 70 182"
              stroke="#6C35F7"
              strokeWidth="13"
              strokeLinecap="round"
              fill="none"
            />
            {/* Pierna derecha */}
            <path
              d="M 118 138 L 120 174 Q 120 182 130 182"
              stroke="#6C35F7"
              strokeWidth="13"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}

        {/* Pierna de apoyo recta en pose LOVE */}
        {pose === 'love' && (
          <path
            d="M 115 138 L 118 178 Q 118 184 126 184"
            stroke="#6C35F7"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* --- BRAZOS PARA TODAS LAS POSES (AMBOS BRAZOS VISIBLES Y EXPRESIVOS) --- */}

        {/* 1. WAVE: Brazo izquierdo en reposo + Brazo derecho saludando */}
        {pose === 'wave' && (
          <>
            <path
              d="M 52 98 Q 38 115 42 132"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 98 Q 165 85 162 65"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}

        {/* 2. LOVE: Brazo izquierdo ondeando + Brazo derecho sosteniendo el corazón */}
        {pose === 'love' && (
          <>
            <path
              d="M 52 96 C 40 82, 34 62, 46 52 C 54 45, 64 54, 62 68"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <g transform="translate(130, 105)">
              <path
                d="M 10 10 Q 0 20 -15 10"
                stroke="#6C35F7"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 0 0 C -15 -18, -35 2, 0 32 C 35 2, 15 -18, 0 0 Z"
                fill="#FFFFFF"
                stroke="#090211"
                strokeWidth="3.5"
              />
            </g>
          </>
        )}

        {/* 3. DRINK: Brazo izquierdo con vaso + Brazo derecho apoyado */}
        {pose === 'drink' && (
          <>
            <path
              d="M 68 92 C 55 95, 38 105, 36 120 C 34 135, 48 142, 60 138"
              stroke="#6C35F7"
              strokeWidth="13"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 135 90 C 150 90, 168 98, 168 115 C 168 126, 158 130, 145 130"
              stroke="#6C35F7"
              strokeWidth="13"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}

        {/* 4. SPEED: Brazo izquierdo atrás + Brazo derecho adelante corriendo */}
        {pose === 'speed' && (
          <>
            <path
              d="M 52 98 Q 30 105 20 95"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 98 Q 165 105 175 90"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}

        {/* 5. SAFE: Brazo izquierdo en la cintura + Brazo derecho con escudo protector */}
        {pose === 'safe' && (
          <>
            <path
              d="M 52 98 Q 36 110 48 125"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 98 Q 162 100 152 110"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <g transform="translate(150, 95) scale(0.85)">
              <path
                d="M 0 -15 L 22 -5 L 22 18 C 22 34, 0 45, 0 45 C 0 45, -22 34, -22 18 L -22 -5 Z"
                fill="#10B981"
                stroke="#FFFFFF"
                strokeWidth="3"
              />
              <path
                d="M -8 15 L -2 22 L 10 8"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          </>
        )}

        {/* 6. IDEA: Brazo izquierdo en la cintura + Brazo derecho señalando la bombilla */}
        {pose === 'idea' && (
          <>
            <path
              d="M 52 98 Q 36 112 48 124"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 98 Q 160 85 152 70"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <g transform="translate(156, 55)">
              <circle cx="0" cy="0" r="12" fill="#F59E0B" />
              <line x1="0" y1="-16" x2="0" y2="-22" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <line x1="12" y1="-12" x2="16" y2="-16" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <line x1="-12" y1="-12" x2="-16" y2="-16" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            </g>
          </>
        )}

        {/* 7. IOS / SWIFT: Brazo izquierdo descansando + Brazo derecho sosteniendo insignia */}
        {pose === 'ios' && (
          <>
            <path
              d="M 52 98 Q 38 115 44 130"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 98 Q 162 105 155 118"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <g transform="translate(152, 105)">
              <circle cx="0" cy="0" r="17" fill="#FF2E4C" />
              <text x="0" y="6" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                
              </text>
            </g>
          </>
        )}

        {/* 8. AI: Ambos brazos alzados saludando en pose robot */}
        {pose === 'ai' && (
          <>
            <path
              d="M 52 98 Q 30 85 36 65"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 98 Q 170 85 164 65"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}

        {/* 9. PONDER: Brazo izquierdo cruzado + Brazo derecho tocando la barbilla */}
        {pose === 'ponder' && (
          <>
            <path
              d="M 52 98 Q 70 120 95 120"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 98 Q 130 115 110 110"
              stroke="#6C35F7"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}

        {/* 10. CELEBRATE: Ambos brazos arriba festejando alegremente \o/ */}
        {pose === 'celebrate' && (
          <>
            <path
              d="M 52 98 Q 28 80 32 55"
              stroke="#6C35F7"
              strokeWidth="13"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 98 Q 172 80 168 55"
              stroke="#6C35F7"
              strokeWidth="13"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}
      </svg>
    </div>
  );
};
