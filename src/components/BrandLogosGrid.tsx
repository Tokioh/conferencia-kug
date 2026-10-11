import React from 'react';

interface Brand {
  name: string;
  category: string;
  usage: string;
  color: string;
  logoSvg: React.ReactNode;
}

const BRANDS: Brand[] = [
  {
    name: 'Google',
    category: 'Big Tech • Android & KMP',
    usage: 'Lenguaje preferido en Android Studio y Google Docs (iOS KMP) para renderizado.',
    color: '#4285F4',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: 'Meta',
    category: 'Social • Gold Member',
    usage: 'Instagram y Threads (+10M líneas de código). Miembro Gold de la Kotlin Foundation.',
    color: '#0668E1',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#0668E1">
        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.86 8.13 6.84 9.44.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48 3.97-1.32 6.83-5.05 6.83-9.44 0-5.5-4.46-9.96-9.96-9.96z" />
      </svg>
    ),
  },
  {
    name: 'Amazon / AWS',
    category: 'Cloud • Infrastructure',
    usage: 'SDK de Kotlin oficial para +300 servicios AWS y backend logístico masivo.',
    color: '#FF9900',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#FF9900">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.8 0-5.4-.9-7.5-2.5-.2-.1-.1-.4.2-.3 2 1.3 4.5 2 7.3 2 1.8 0 3.8-.4 5.6-1.4.3-.2.5.1.3.4-1.6 1.1-3.7 1.8-5.9 1.8zm4.5-4.2c-.3 0-.6-.2-.7-.5-.4-1.2-1.1-2.1-2.1-2.8-.2-.1-.1-.4.1-.4 1.1.7 1.9 1.7 2.3 3 .1.4-.2.7-.6.7z" />
      </svg>
    ),
  },
  {
    name: 'Netflix',
    category: 'Streaming • TV & Mobile',
    usage: 'UI en Smart TVs y motor de reproducción de video nativo en Android.',
    color: '#E50914',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#E50914">
        <path d="M4 2v20l4.5-2V2H4zm8 0l-3.5 18 4.5-1.5L16.5 2H12zm4 0v17l4 2V2h-4z" />
      </svg>
    ),
  },
  {
    name: 'Duolingo',
    category: 'Educación • KMP Core',
    usage: '100% de la lógica compartida en KMP (lecciones, estado y sync para +40M usuarios).',
    color: '#58CC02',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#58CC02">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8.5" cy="10.5" r="2.5" fill="#fff" />
        <circle cx="15.5" cy="10.5" r="2.5" fill="#fff" />
        <circle cx="9" cy="10.5" r="1.2" fill="#000" />
        <circle cx="15" cy="10.5" r="1.2" fill="#000" />
        <path d="M10 15c0 1.1.9 2 2 2s2-.9 2-2" stroke="#FF9600" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "McDonald's",
    category: 'Retail • App Global',
    usage: 'KMP para carrito, cálculo de precios, menú y pedidos en más de 50 países.',
    color: '#FFBC0D',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#FFBC0D">
        <path d="M12 6.5C10.5 4 8.5 3 6.5 3 3.5 3 1.5 5.5 1.5 9v12h3V9c0-2.2 1.3-3.8 3-3.8s3 1.6 3 3.8v12h3V9c0-2.2 1.3-3.8 3-3.8s3 1.6 3 3.8v12h3V9c0-3.5-2-6-5-6-2 0-4 1-5.5 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Cash App / Block',
    category: 'Fintech • Silver Member',
    usage: '100% backend de pagos. Creadores de SQLDelight y Wire (librerías KMP de finanzas).',
    color: '#00D632',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#00D632">
        <rect x="2" y="2" width="20" height="20" rx="6" />
        <text x="12" y="16.5" fill="#000" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
          $
        </text>
      </svg>
    ),
  },
  {
    name: 'Sony',
    category: 'Hardware • Audio',
    usage: 'App Sony Headphones Connect con KMP para comunicación Bluetooth y ecualizador.',
    color: '#FFFFFF',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#FFFFFF">
        <text x="12" y="15" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1px" fontFamily="sans-serif">
          SONY
        </text>
        <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'BMW',
    category: 'Automotriz • Connected Car',
    usage: 'My BMW App con KMP para telemetría, carga de batería y control remoto.',
    color: '#0066B1',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#0066B1" strokeWidth="2" fill="#090211" />
        <path d="M12 2v20M2 12h20" stroke="#0066B1" strokeWidth="1.5" />
        <path d="M12 2a10 10 0 0 1 10 10H12V2z" fill="#0066B1" />
        <path d="M12 12H2a10 10 0 0 1 10-10v10z" fill="#FFFFFF" />
        <path d="M12 12v10A10 10 0 0 1 2 12h10z" fill="#0066B1" />
        <path d="M12 12h10a10 10 0 0 1-10 10V12z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Forbes',
    category: 'Medios • Editorial',
    usage: '80% de lógica compartida entre iOS y Android con KMP (noticias y suscripciones).',
    color: '#FFFFFF',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#FFFFFF">
        <text x="12" y="16" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle" fontStyle="italic" fontFamily="serif">
          F
        </text>
        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Autodesk',
    category: 'Ingeniería • PlanGrid',
    usage: 'KMP para motor de sincronización offline de planos gigantescos en PDF y CAD.',
    color: '#0696D7',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#0696D7">
        <path d="M4 4h5.5l6.5 10V4H20v16h-5.5L8 10v10H4V4z" />
      </svg>
    ),
  },
  {
    name: 'Philips',
    category: 'Salud • Smart Home',
    usage: 'Philips HealthSuite & Hue (KMP para control de dispositivos médicos y luces).',
    color: '#0B5ED7',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#0B5ED7">
        <rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="#0B5ED7" strokeWidth="2" />
        <path d="M7 10h10M7 14h6" stroke="#0B5ED7" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="14" r="1.5" fill="#0B5ED7" />
      </svg>
    ),
  },
  {
    name: 'Mercedes-Benz',
    category: 'Automotriz • Connected Car',
    usage: 'Mercedes me App (telemetría en tiempo real, climatización y llave digital).',
    color: '#00A0E2',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#FFFFFF" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="12" x2="12" y2="2" />
        <line x1="12" y1="12" x2="3.5" y2="17" />
        <line x1="12" y1="12" x2="20.5" y2="17" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    category: 'Enterprise • Messaging',
    usage: 'App Android (+1.2M líneas de código) y herramientas CLI internas de desarrollo.',
    color: '#ECB22E',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
        <path d="M5.04 13.52c0 .85-.69 1.54-1.54 1.54s-1.54-.69-1.54-1.54.69-1.54 1.54-1.54h1.54v1.54z" fill="#E01E5A" />
        <path d="M6.07 13.52c0-.85.69-1.54 1.54-1.54s1.54.69 1.54 1.54v3.85c0 .85-.69 1.54-1.54 1.54s-1.54-.69-1.54-1.54v-3.85z" fill="#E01E5A" />
        <path d="M10.48 5.04c-.85 0-1.54-.69-1.54-1.54s.69-1.54 1.54-1.54 1.54.69 1.54 1.54v1.54h-1.54z" fill="#36C5F0" />
        <path d="M10.48 6.07c.85 0 1.54.69 1.54 1.54s-.69 1.54-1.54 1.54H6.63c-.85 0-1.54-.69-1.54-1.54s.69-1.54 1.54-1.54h3.85z" fill="#36C5F0" />
        <path d="M18.96 10.48c0-.85.69-1.54 1.54-1.54s1.54.69 1.54 1.54-.69 1.54-1.54 1.54h-1.54v-1.54z" fill="#2EB67D" />
        <path d="M17.93 10.48c0 .85-.69 1.54-1.54 1.54s-1.54-.69-1.54-1.54V6.63c0-.85.69-1.54 1.54-1.54s1.54.69 1.54 1.54v3.85z" fill="#2EB67D" />
        <path d="M13.52 18.96c.85 0 1.54.69 1.54 1.54s-.69 1.54-1.54 1.54-1.54-.69-1.54-1.54v-1.54h1.54z" fill="#ECB22E" />
        <path d="M13.52 17.93c-.85 0-1.54-.69-1.54-1.54s.69-1.54 1.54-1.54h3.85c.85 0 1.54.69 1.54 1.54s-.69 1.54-1.54 1.54h-3.85z" fill="#ECB22E" />
      </svg>
    ),
  },
  {
    name: 'DoorDash',
    category: 'Logística • Delivery',
    usage: 'App de repartidores para rastreo GPS en tiempo real y despacho de pedidos.',
    color: '#FF3008',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#FF3008">
        <path d="M19.5 7.5H4.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm-3 5H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    category: 'Social • Descubrimiento',
    usage: 'App Android (+99% Kotlin desde 2016) y motor de recomendaciones en tiempo real.',
    color: '#BD081C',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#BD081C">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6.5c-3 0-5.5 2.2-5.5 5 0 1.8 1 3.2 2.5 3.8.3.1.5-.1.6-.3l.3-1c.1-.2 0-.4-.2-.5-.5-.6-.8-1.4-.8-2.2 0-2 1.6-3.6 3.6-3.6 1.8 0 3 1.2 3 2.8 0 1.9-1 3.4-2.2 3.4-.7 0-1.2-.6-1.1-1.3l.4-1.8c.2-.7-.2-1.3-.9-1.3-.7 0-1.3.8-1.3 1.8 0 .7.2 1.1.2 1.1l-1 4.2c-.3 1.2 0 2.7 0 2.8.1.1.2.1.3 0 .1-.2 1.5-1.9 2-2.5l.8-3.1c.4.7 1.4 1.3 2.5 1.3 3.3 0 5.5-3 5.5-6.5-.1-3.2-2.7-5.7-6.2-5.7z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    category: 'eCommerce • Point of Sale',
    usage: 'Shopify POS (Punto de Venta móvil) para lectura de tarjetas y cobros presenciales.',
    color: '#95BF47',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#95BF47">
        <path d="M15.4 3.6l-1.3-.4c-.1 0-.3 0-.3.1l-.8 2.2c-.3-.1-.6-.2-.9-.3L10.3 3c-.1-.1-.3-.2-.4-.1L5 5.5c-.2.1-.2.2-.2.4l3.1 15.3c0 .2.2.3.4.3h8.4c.2 0 .4-.1.4-.3l2.8-15.8c0-.2-.1-.4-.3-.5l-4.2-1.3zM12 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
      </svg>
    ),
  },
  {
    name: 'Uber',
    category: 'Movilidad • Logística',
    usage: 'Uber Driver App y microservicios backend de optimización de rutas.',
    color: '#FFFFFF',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#FFFFFF">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="5" fill="#000" />
        <line x1="12" y1="12" x2="17" y2="12" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Airbnb',
    category: 'Hospitalidad • Frameworks',
    usage: 'App Android y creadores de Mavericks (MvRx), marco de arquitectura reactiva.',
    color: '#FF5A5F',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#FF5A5F">
        <path d="M12 2C9.5 2 7.7 3.5 6.7 5.5 5.5 8 5.7 11.2 7.3 14.5c1.6 3.2 4.2 6.5 4.7 7.1.3.3.7.4 1 .4s.7-.1 1-.4c.5-.6 3.1-3.9 4.7-7.1 1.6-3.3 1.8-6.5.6-9C18.3 3.5 16.5 2 14 2h-2zm0 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
    ),
  },
  {
    name: 'Trello / Atlassian',
    category: 'Productividad • Sync',
    usage: 'App Android de Trello para tableros interactivos y sync en tiempo real.',
    color: '#0052CC',
    logoSvg: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#0052CC">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#0052CC" />
        <rect x="6" y="6" width="5" height="11" rx="1" fill="#FFF" />
        <rect x="13" y="6" width="5" height="7" rx="1" fill="#FFF" />
      </svg>
    ),
  },
];

interface BrandLogosGridProps {
  isOverlayActive?: boolean;
}

export const BrandLogosGrid: React.FC<BrandLogosGridProps> = ({ isOverlayActive }) => {
  return (
    <div className="brand-showcase-wrapper">
      <div className="brand-logos-grid-container" style={{ position: 'relative' }}>
        {BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="brand-logo-tile"
            style={{ '--brand-accent': brand.color } as React.CSSProperties}
          >
            <div
              className="brand-logo-icon-wrapper"
              style={{ boxShadow: `0 0 20px ${brand.color}33`, borderColor: `${brand.color}44` }}
            >
              {brand.logoSvg}
            </div>
            <div className="brand-logo-meta">
              <div className="brand-header-line">
                <span className="brand-name">{brand.name}</span>
                <span className="brand-category-badge">{brand.category}</span>
              </div>
              <p className="brand-usage-text">{brand.usage}</p>
            </div>
          </div>
        ))}

        {isOverlayActive && (
          <div className="brand-everywhere-overlay">
            <div className="everywhere-content-box">
              <div className="everywhere-tag-pill">
                <span className="everywhere-sparkle">⚡</span>
                <span>Impacto Global Imparable</span>
              </div>
              <h2 className="everywhere-title">Kotlin Is Everywhere!</h2>
              <p className="everywhere-desc">
                En tu bolsillo, en tu auto, en tu televisor y en los clusters de la nube:<br />
                <strong>el ecosistema digital moderno corre silenciosamente sobre Kotlin.</strong>
              </p>
              <div className="everywhere-next-hint">
                Presiona <strong>Siguiente →</strong> para conocer su historia
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="brand-trust-banner">
        <div className="trust-item">
          <span className="trust-indicator">🏆</span>
          <div>
            <strong>Kotlin Foundation:</strong> Impulsada por Google, JetBrains, Meta (Gold) y Block.
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-indicator">📱</span>
          <div>
            <strong>+95% Top 1.000 Apps:</strong> En Google Play están construidas con Kotlin.
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-indicator">🌍</span>
          <div>
            <strong>Miles de Millones:</strong> De usuarios finales interactúan a diario con código Kotlin.
          </div>
        </div>
      </div>
    </div>
  );
};
