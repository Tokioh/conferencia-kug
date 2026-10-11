# Canonical Slide Templates Catalog

This guide provides tested, copy-pasteable templates for the 8 core slide archetypes used in the Conference Deck design system.

---

## 1. Hero Cover Slide (Opening Keynote)

```tsx
import { KotlinConfHeroGraphic } from '../components/KotlinConfHeroGraphic';
import { Kodee } from '../components/Kodee';

export const SlideCover = (
  <div className="hero-cover-flex">
    <div style={{ maxWidth: '52%' }}>
      <span className="tag-pill tag-gold" style={{ width: 'fit-content', marginBottom: '18px' }}>
        Keynote Inaugural • Conferencia 2026
      </span>
      <h1 className="hero-title" style={{ maxWidth: '100%', marginBottom: '16px' }}>
        Kotlin 101 <span style={{ fontSize: '0.68em', color: 'var(--kt-orange)', fontWeight: 700 }}>(edición 2026)</span>:<br />
        Qué es, dónde estamos y hacia dónde vamos
      </h1>
      <p className="slide-subtitle" style={{ maxWidth: '96%', fontSize: '1.18rem', lineHeight: '1.5', marginBottom: '18px' }}>
        Un recorrido conceptual y estratégico: del móvil a la nube, multiplataforma nativa y la era de la IA agéntica.
      </p>
      <div className="hero-speaker-minimal">
        <span className="speaker-name">Kevin Alonso</span>
        <span className="speaker-divider">•</span>
        <span className="speaker-role">Líder del Club de IA Uleam</span>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <KotlinConfHeroGraphic
        topText="Welcome"
        middleText="to Kotlin 101"
        bottomText="2026"
      />
      <div style={{ position: 'absolute', right: '-15px', bottom: '-40px' }}>
        <Kodee pose="wave" size={130} />
      </div>
    </div>
  </div>
);
```

---

## 2. 4-Pillar Grid (Core Principles / Architecture)

```tsx
import { Kodee } from '../components/Kodee';

export const SlidePillars = (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <div>
        <h2 className="slide-title">¿Por Qué Nació Kotlin? Pragmatismo Sobre Pureza</h2>
        <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
          Un lenguaje nacido no en un laboratorio académico, sino en las trincheras de ingeniería de JetBrains
        </p>
      </div>
      <Kodee pose="idea" size={80} />
    </div>

    <div className="pillar-grid-4">
      <div className="pillar-card">
        <div className="pillar-icon-box" style={{ color: '#FF7A00' }}>⚡</div>
        <h3>1. Pragmatismo Real</h3>
        <p>Prioriza la productividad del equipo y la resolución de problemas cotidianos sobre dogmas teóricos.</p>
      </div>

      <div className="pillar-card">
        <div className="pillar-icon-box" style={{ color: '#10B981' }}>🛡️</div>
        <h3>2. Seguridad de Fábrica</h3>
        <p>El error del billón de dólares (NullPointer) queda erradicado en tiempo de compilación.</p>
      </div>

      <div className="pillar-card">
        <div className="pillar-icon-box" style={{ color: '#D900B6' }}>🔄</div>
        <h3>3. 100% Interoperable</h3>
        <p>Adopción gradual sin fricción: convive con Java, Swift o JavaScript sin reescribir nada.</p>
      </div>

      <div className="pillar-card">
        <div className="pillar-icon-box" style={{ color: '#7F52FF' }}>🛠️</div>
        <h3>4. Tool-First</h3>
        <p>Diseñado por los creadores de los mejores IDEs; cada función asiste al desarrollador.</p>
      </div>
    </div>
  </>
);
```

---

## 3. Timeline Evolution Track

```tsx
import { Kodee } from '../components/Kodee';

export const SlideTimeline = (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <div>
        <h2 className="slide-title">15 Años de Evolución: De Proyecto Interno a Estándar Global</h2>
        <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
          Un viaje de estabilidad, respaldo de la industria y evolución continua (2011 — 2026)
        </p>
      </div>
      <Kodee pose="speed" size={80} />
    </div>

    <div className="timeline-track">
      <div className="timeline-step-card">
        <div className="timeline-year-badge">2011</div>
        <div className="timeline-step-title">Génesis del Proyecto</div>
        <p className="timeline-step-desc">JetBrains presenta Kotlin en el JVM Summit. En 2012 pasa a open source.</p>
      </div>

      <div className="timeline-step-card">
        <div className="timeline-year-badge">2016</div>
        <div className="timeline-step-title">Kotlin 1.0 Estable</div>
        <p className="timeline-step-desc">Lanzamiento oficial con promesa de compatibilidad hacia atrás estricta.</p>
      </div>

      <div className="timeline-step-card">
        <div className="timeline-year-badge">2017–19</div>
        <div className="timeline-step-title">Android-First</div>
        <p className="timeline-step-desc">Google anuncia soporte oficial en Google I/O y lo declara preferido.</p>
      </div>

      <div className="timeline-step-card">
        <div className="timeline-year-badge">2023–24</div>
        <div className="timeline-step-title">KMP &amp; Compilador K2</div>
        <p className="timeline-step-desc">Kotlin Multiplatform alcanza estado Estable y K2 unifica el motor.</p>
      </div>

      <div className="timeline-step-card" style={{ borderColor: 'rgba(255, 122, 0, 0.6)' }}>
        <div className="timeline-year-badge" style={{ color: '#FF7A00' }}>2026</div>
        <div className="timeline-step-title">Ecosistema AI-Native</div>
        <p className="timeline-step-desc">Meta se une como Gold Member y llega la era de agentes con Koog.</p>
      </div>
    </div>
  </>
);
```

---

## 4. Bento Grid (Ecosystem & Enterprise Backing)

```tsx
import { Kodee } from '../components/Kodee';

export const SlideBento = (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <div>
        <h2 className="slide-title">Respaldo Institucional: Los Gigantes que Mueven el Mundo</h2>
        <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
          Gobernanza transparente con la Foundation y despliegues masivos a escala global
        </p>
      </div>
      <Kodee pose="safe" size={80} />
    </div>

    <div className="bento-grid">
      <div className="card highlight-purple bento-tall">
        <span className="tag-pill tag-gold" style={{ width: 'fit-content', marginBottom: '14px' }}>
          Gobernanza Foundation
        </span>
        <div className="big-stat" style={{ fontSize: '3.6rem', marginBottom: '6px' }}>Gold</div>
        <h3 style={{ fontSize: '1.35rem' }}>🏛️ Alianza de Titanes</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.55', marginTop: '8px' }}>
          Garantiza que el lenguaje pertenezca a la comunidad abierta y sea independiente.
        </p>
        <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span className="tag-pill tag-gold">Meta (Gold)</span>
          <span className="tag-pill tag-green">Google</span>
          <span className="tag-pill tag-red">JetBrains</span>
        </div>
      </div>

      <div className="card highlight-orange">
        <h3>☁️ Nube e Infraestructura Corporativa</h3>
        <ul>
          <li><strong>Amazon Web Services:</strong> SDK oficial en +300 servicios cloud.</li>
          <li><strong>Spring Boot:</strong> Más del 27% de nuevos microservicios en Kotlin.</li>
        </ul>
      </div>

      <div className="card">
        <h3>📱 Millones de Usuarios Diarios</h3>
        <ul>
          <li><strong>Google Workspace:</strong> Google Docs iOS comparte código en Kotlin.</li>
          <li><strong>Duolingo, Netflix y McDonald's:</strong> Experiencias ultrarrápidas y sincronizadas.</li>
        </ul>
      </div>
    </div>
  </>
);
```

---

## 5. Engineering Honesty & Trade-offs (Warn List)

```tsx
import { Kodee } from '../components/Kodee';

export const SlideTradeoffs = (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <div>
        <h2 className="slide-title">Honestidad Técnica: ¿Dónde Están los Retos en 2026?</h2>
        <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
          La diferencia entre "listo para producción" y "mágico" evaluada con criterio de ingeniería
        </p>
      </div>
      <Kodee pose="ponder" size={80} />
    </div>

    <div className="warn-list">
      <div className="warn-item">
        <div>
          <strong>1. Curva de aprendizaje en Gradle y arquitectura multimódulo</strong>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '2px' }}>
            Diseñar correctamente la separación de capas requiere estudio y disciplina de equipo.
          </p>
        </div>
        <span className="tag-pill tag-gold">Herramientas</span>
      </div>

      <div className="warn-item">
        <div>
          <strong>2. Interoperabilidad con Swift en transición hacia Beta</strong>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '2px' }}>
            Para tener hoy la experiencia más transparente en producción se recomienda incorporar SKIE.
          </p>
        </div>
        <span className="tag-pill tag-gold">iOS Interop</span>
      </div>

      <div className="warn-item">
        <div>
          <strong>3. La Regla de Oro: Adopción Gradual Inteligente</strong>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '2px' }}>
            Nunca reescribas una aplicación desde cero. Empieza compartiendo un modelo o cliente HTTP.
          </p>
        </div>
        <span className="tag-pill tag-green">Buenas Prácticas</span>
      </div>
    </div>
  </>
);
```

---

## 6. Closing Speaker & Community Card

```tsx
import { QRCodeSVG } from 'qrcode.react';
import { Linkedin, Instagram, MessageCircle, Github } from 'lucide-react';

export const SlideClosing = (
  <div className="speaker-card-container">
    <div className="card speaker-info-card">
      <div className="speaker-avatar-circle">KA</div>
      <h2>Kevin Alonso</h2>
      <span className="tag-pill tag-gold">Líder • Club de IA Uleam</span>
      <p>Investigación, desarrollo y divulgación de tecnologías de Inteligencia Artificial y Multiplataforma.</p>
      <div className="speaker-links">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="speaker-link-item">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="speaker-link-item">
          <Github size={18} /> GitHub
        </a>
      </div>
    </div>

    <div className="card qr-community-card">
      <h3 style={{ marginBottom: '12px' }}>Únete a la Comunidad Oficial</h3>
      <div className="qr-wrapper">
        <QRCodeSVG value="https://chat.whatsapp.com/sample" size={170} fgColor="#090211" />
      </div>
      <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        Escanea el QR para entrar al grupo de networking y recibir las grabaciones y código.
      </p>
    </div>
  </div>
);
```
