import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ExternalLink, Sparkles } from 'lucide-react';

const LinkedinIcon: React.FC<{ size?: number; color?: string }> = ({ size = 22, color = '#0A66C2' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number; color?: string }> = ({ size = 22, color = '#E1306C' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon: React.FC<{ size?: number; color?: string }> = ({ size = 22, color = '#25D366' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z" />
  </svg>
);

export const SpeakerClosingCard: React.FC = () => {
  const WHATSAPP_URL = 'https://chat.whatsapp.com/KdUtvDtJJvQ0VvD1CJWSOJ';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/kevinalonsodev/';
  const INSTAGRAM_URL = 'https://www.instagram.com/tokiohzdev/';

  return (
    <div className="closing-stage-container">
      <div className="closing-top-grid">
        
        {/* Tarjeta del Ponente: Kevin Alonso con foto de 200px */}
        <div className="speaker-profile-hero">
          <div className="speaker-profile-top">
            <div className="speaker-avatar-frame">
              <img
                src="/kevin-alonso.png"
                alt="Kevin Alonso"
                loading="eager"
              />
            </div>
            
            <div className="speaker-details">
              <span className="speaker-role-badge">
                <Sparkles size={16} />
                Keynote Speaker
              </span>
              <h3>Kevin Alonso</h3>
              <div className="speaker-institution">
                Líder del Club de IA Uleam
              </div>
            </div>
          </div>
        </div>

        {/* Trío de Canales y Códigos QR de Gran Escala (180px) */}
        <div className="qr-trio-grid">
          
          {/* Canal 1: WhatsApp (Club de IA Uleam) */}
          <div className="qr-channel-card whatsapp">
            <div>
              <span className="qr-channel-badge tag-green" style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.15)', border: '1px solid rgba(37, 211, 102, 0.35)' }}>
                Comunidad Oficial
              </span>
              <div className="qr-channel-title">
                <WhatsAppIcon size={22} color="#25D366" />
                <span>Chat Club de IA</span>
              </div>
              <div className="qr-channel-subtitle">
                Talleres, proyectos &amp; recursos
              </div>
            </div>

            <div className="qr-code-box-large">
              <QRCodeSVG
                value={WHATSAPP_URL}
                size={180}
                bgColor="#ffffff"
                fgColor="#090211"
                level="M"
              />
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-cta-btn whatsapp-btn"
            >
              Unirme al Chat <ExternalLink size={14} />
            </a>
          </div>

          {/* Canal 2: LinkedIn */}
          <div className="qr-channel-card linkedin">
            <div>
              <span className="qr-channel-badge tag-purple" style={{ color: '#38bdf8', background: 'rgba(10, 102, 194, 0.15)', border: '1px solid rgba(10, 102, 194, 0.35)' }}>
                Networking
              </span>
              <div className="qr-channel-title">
                <LinkedinIcon size={22} color="#0A66C2" />
                <span>LinkedIn</span>
              </div>
              <div className="qr-channel-subtitle">
                /in/kevinalonsodev
              </div>
            </div>

            <div className="qr-code-box-large">
              <QRCodeSVG
                value={LINKEDIN_URL}
                size={180}
                bgColor="#ffffff"
                fgColor="#0A66C2"
                level="M"
              />
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-cta-btn linkedin-btn"
            >
              Conectar <ExternalLink size={14} />
            </a>
          </div>

          {/* Canal 3: Instagram */}
          <div className="qr-channel-card instagram">
            <div>
              <span className="qr-channel-badge tag-red" style={{ color: '#f472b6', background: 'rgba(225, 48, 108, 0.15)', border: '1px solid rgba(225, 48, 108, 0.35)' }}>
                Comunidad
              </span>
              <div className="qr-channel-title">
                <InstagramIcon size={22} color="#E1306C" />
                <span>Instagram</span>
              </div>
              <div className="qr-channel-subtitle">
                @tokiohzdev
              </div>
            </div>

            <div className="qr-code-box-large">
              <QRCodeSVG
                value={INSTAGRAM_URL}
                size={180}
                bgColor="#ffffff"
                fgColor="#962fbf"
                level="M"
              />
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-cta-btn instagram-btn"
            >
              Seguir <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
