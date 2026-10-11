import React from 'react';

interface BackgroundEffectsProps {
  isCoverSlide: boolean;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ isCoverSlide }) => {
  return (
    <div className={isCoverSlide ? 'cover-slide-active' : 'content-slide'}>
      {/* KotlinConf subtle geometric grid overlay */}
      <div className="bg-grid-pattern" />

      {/* Resplandores ambientales estilo KotlinConf 2026 */}
      <div className="ambient-glow-tl" />
      <div className="ambient-glow-bl" />
      <div className="ambient-glow-center" />

      {/* 
        ARTE OFICIAL KOTLINCONF 2026:
        El gran monograma geométrico en "K" de Kotlin, construido a base de 
        cápsulas arquitectónicas, arcos tangentes, cuadrantes y divisiones bauhaus.
      */}
      <svg
        className="kodee-wireframe"
        viewBox="0 0 700 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Degradado oficial KotlinConf 2026: Naranja -> Rojo -> Magenta -> Púrpura */}
          <linearGradient id="kotlinConf2026Grad" x1="0%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="30%" stopColor="#FF2E4C" />
            <stop offset="65%" stopColor="#D900B6" />
            <stop offset="100%" stopColor="#7F52FF" />
          </linearGradient>

          <filter id="kcStageGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2.5" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        <g
          stroke="url(#kotlinConf2026Grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#kcStageGlow)"
        >
          {/* ============================================================ */}
          {/* 1. ALA SUPERIOR IZQUIERDA (Triángulo y cuadrante en cuña) */}
          {/* ============================================================ */}
          {/* Contorno triangular superior */}
          <path d="M 80 120 L 220 120 L 80 260 Z" />
          {/* Cuadrante interno superior izquierdo */}
          <path d="M 80 120 A 140 140 0 0 1 220 260" strokeDasharray="none" />
          <path d="M 80 190 L 150 190" />
          <path d="M 150 120 L 150 190" />
          <path d="M 80 120 L 220 260" />

          {/* Semicírculo inferior de la cuña izquierda */}
          <path d="M 80 260 A 70 70 0 0 0 220 260" />
          <line x1="150" y1="260" x2="150" y2="330" />

          {/* ============================================================ */}
          {/* 2. COLUMNA CENTRAL Y ESPINA DORSAL DEL MONOGRAMA EN "K" */}
          {/* ============================================================ */}
          {/* Cápsula vertical central */}
          <rect x="220" y="120" width="140" height="520" rx="70" />
          
          {/* Sub-divisiones geométricas internas de la cápsula vertical */}
          <line x1="220" y1="260" x2="360" y2="260" />
          <line x1="220" y1="380" x2="360" y2="380" />
          <line x1="220" y1="500" x2="360" y2="500" />
          <line x1="290" y1="120" x2="290" y2="640" />

          {/* Arcos internos en la columna */}
          <path d="M 220 260 A 70 70 0 0 1 360 260" />
          <path d="M 220 380 A 70 70 0 0 0 360 380" />
          <path d="M 220 500 A 70 70 0 0 1 360 500" />

          {/* ============================================================ */}
          {/* 3. BRAZO DIAGONAL SUPERIOR DERECHO (Rama ascendente de la K) */}
          {/* ============================================================ */}
          {/* Cápsula inclinada superior hacia la derecha */}
          <path d="M 360 120 L 480 120 A 70 70 0 0 1 550 190 L 550 260 A 70 70 0 0 1 480 330 L 360 330" />
          <path d="M 360 190 L 550 190" />
          <path d="M 480 120 L 480 330" />
          <path d="M 360 120 A 140 140 0 0 1 500 260" />

          {/* Arco tangencial superior derecho */}
          <path d="M 500 120 A 50 50 0 0 1 550 170" />
          <line x1="480" y1="190" x2="550" y2="260" />

          {/* ============================================================ */}
          {/* 4. PIERNA DIAGONAL INFERIOR DERECHA (Gran arco de la K) */}
          {/* ============================================================ */}
          {/* Gran arco curvado inferior */}
          <path d="M 360 330 A 170 170 0 0 1 530 500 L 530 570 A 70 70 0 0 1 460 640 L 360 640" />
          
          {/* Divisiones internas de la pierna inferior */}
          <line x1="360" y1="500" x2="530" y2="500" />
          <line x1="460" y1="330" x2="460" y2="640" />
          <path d="M 360 500 A 70 70 0 0 1 500 640" />
          <path d="M 360 330 A 100 100 0 0 1 460 430" />
          <path d="M 460 500 A 70 70 0 0 1 530 570" />

          {/* Arco envolvente inferior de conexión */}
          <path d="M 220 500 A 140 140 0 0 0 80 640 L 220 640" />
          <line x1="150" y1="500" x2="150" y2="640" />
          <path d="M 80 640 A 70 70 0 0 1 220 640" />

        </g>
      </svg>
    </div>
  );
};
