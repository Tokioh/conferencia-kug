import type { SlideData, SlideRenderProps } from '../types/slide';
import { Kodee } from '../components/Kodee';
import { GrowthBarChart } from '../components/charts/GrowthBarChart';
import { BenchmarkBar } from '../components/charts/BenchmarkBar';
import { KotlinConfHeroGraphic } from '../components/KotlinConfHeroGraphic';
import { BrandLogosGrid } from '../components/BrandLogosGrid';
import { SpeakerClosingCard } from '../components/SpeakerClosingCard';

export const slidesData: SlideData[] = [
  // =========================================================================
  // BLOQUE 1: ¿QUÉ ES KOTLIN? (ORIGEN Y FILOSOFÍA)
  // =========================================================================

  // SLIDE 1: Portada
  {
    id: 1,
    block: 'Bloque 1 • Apertura',
    notes: '¡Hola a todos y bienvenidos a la inauguración oficial de nuestro Kotlin User Group! Mi nombre es Kevin Alonso, líder del Club de IA Uleam. Hoy no venimos a memorizar sintaxis ni a pelearnos con el compilador. Venimos a entender qué es realmente Kotlin en 2026, cómo pasó de ser una idea interna en JetBrains a mover infraestructuras multimillonarias, y hacia dónde se dirige el futuro del software con multiplataforma e Inteligencia Artificial.',
    content: (
      <div className="hero-cover-flex">
        <div style={{ maxWidth: '52%' }}>
          <span className="tag-pill tag-gold" style={{ width: 'fit-content', marginBottom: '18px' }}>
            Keynote Inaugural • Kotlin User Group
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
    ),
  },

  // SLIDE 2: La Génesis y Filosofía Pragmática
  {
    id: 2,
    block: 'Bloque 1 • Filosofía',
    notes: 'Para entender Kotlin hay que entender su génesis: ¿por qué crear otro lenguaje si ya existían Java, C++ o Python? JetBrains no creó Kotlin como un experimento de tesis universitaria. Lo creó porque sus propios ingenieros sufrían construyendo IntelliJ IDEA. Su filosofía fundacional es el Pragmatismo: resolver problemas reales del día a día, con seguridad estricta y sin obligar a nadie a tirar su código existente a la basura.',
    content: (
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
            <p>
              Prioriza la productividad del equipo y la resolución de problemas cotidianos sobre dogmas o pureza teórica de lenguajes.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box" style={{ color: '#10B981' }}>🛡️</div>
            <h3>2. Seguridad de Fábrica</h3>
            <p>
              El famoso <em>error del billón de dólares</em> (NullPointerException) queda erradicado en tiempo de compilación, no en producción.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box" style={{ color: '#D900B6' }}>🔄</div>
            <h3>3. 100% Interoperable</h3>
            <p>
              Adopción gradual sin fricción: puedes convivir con Java, Swift o JavaScript en el mismo proyecto sin reescribir nada.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box" style={{ color: '#7F52FF' }}>🛠️</div>
            <h3>4. Tool-First (Herramientas)</h3>
            <p>
              Diseñado por los creadores de los mejores IDEs del mundo; cada función nace pensada para que el editor te asista de forma inteligente.
            </p>
          </div>
        </div>
      </>
    ),
  },

  // SLIDE 3: Confianza Global (Marcas Reales en Producción)
  {
    id: 3,
    block: 'Bloque 1 • Respaldo Global',
    notes: 'Antes de hablar de la historia o la tecnología profunda, detengámonos en este punto crucial: ¿quién utiliza Kotlin hoy y en qué parte específica de sus productos? No estamos ante un lenguaje de nicho. Más del 95% de las 1.000 aplicaciones principales de Android están escritas en Kotlin. Meta es miembro Gold de la Kotlin Foundation y migró más de 10 millones de líneas en Instagram y Threads. Google utiliza Kotlin Multiplatform en la app oficial de Google Docs en iOS para renderizar documentos. Duolingo comparte el 100% de la lógica de sus lecciones en KMP para 40 millones de usuarios. AWS tiene un SDK oficial de Kotlin para sus más de 300 servicios cloud. Netflix impulsa su UI en Smart TVs y reproductor móvil. McDonald’s gestiona su carrito y menú global en 50 países con KMP. Sony maneja el ecualizador y Bluetooth de sus audífonos con KMP. BMW y Mercedes-Benz controlan la telemetría y llaves digitales de sus vehículos. Y gigantes como Philips, Forbes, Autodesk, Slack, DoorDash, Pinterest, Shopify, Uber, Airbnb y Trello lo usan en sus componentes más críticos. [👉 PULSA SIGUIENTE PARA REVELAR]: "¡Kotlin is Everywhere!": Desde el chip de tu teléfono hasta los servidores de la nube, la conclusión es contundente.',
    content: ({ isOverlayActive }: SlideRenderProps = {}) => (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div>
            <h2 className="slide-title">Confianza Global: ¿Quiénes Construyen con Kotlin Hoy?</h2>
            <p className="slide-subtitle" style={{ marginBottom: '6px' }}>
              Desde el móvil de 3.000 millones de personas hasta la nube: producción real en las empresas más exigentes
            </p>
          </div>
          <Kodee pose="love" size={75} />
        </div>

        <BrandLogosGrid isOverlayActive={isOverlayActive} />
      </>
    ),
  },

  // SLIDE 4: 15 Años de Evolución (Línea del Tiempo)
  {
    id: 4,
    block: 'Bloque 1 • Historia',
    notes: 'Miren esta línea de tiempo: en julio de 2026 Kotlin cumplió 15 años. Nació en 2011, en 2016 llegó la versión 1.0 prometiendo estabilidad hacia atrás. En 2017 Google sorprendió al mundo nombrándolo lenguaje oficial en Google I/O. Y en los últimos 3 años vimos la consolidación definitiva: Kotlin Multiplatform estable, el nuevo compilador K2 y la expansión hacia agentes de IA.',
    content: (
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
            <p className="timeline-step-desc">
              JetBrains presenta el Proyecto Kotlin en el JVM Summit. En 2012 se convierte en software de código abierto para todo el mundo.
            </p>
          </div>

          <div className="timeline-step-card">
            <div className="timeline-year-badge">2016</div>
            <div className="timeline-step-title">Kotlin 1.0 Estable</div>
            <p className="timeline-step-desc">
              Lanzamiento de la versión 1.0 con promesa de compatibilidad hacia atrás. Las primeras empresas inician migraciones graduales.
            </p>
          </div>

          <div className="timeline-step-card">
            <div className="timeline-year-badge">2017–19</div>
            <div className="timeline-step-title">La Era Android-First</div>
            <p className="timeline-step-desc">
              Google anuncia soporte oficial en Google I/O y luego lo declara el lenguaje preferido para desarrollo de aplicaciones móviles.
            </p>
          </div>

          <div className="timeline-step-card">
            <div className="timeline-year-badge">2023–24</div>
            <div className="timeline-step-title">KMP &amp; Compilador K2</div>
            <p className="timeline-step-desc">
              Kotlin Multiplatform alcanza estado Estable y K2 unifica el motor de compilación para servidores, móviles y web.
            </p>
          </div>

          <div className="timeline-step-card" style={{ borderColor: 'rgba(255, 122, 0, 0.6)' }}>
            <div className="timeline-year-badge" style={{ color: '#FF7A00' }}>2026</div>
            <div className="timeline-step-title">Ecosistema AI-Native</div>
            <p className="timeline-step-desc">
              Meta se une como Gold Member, Compose iOS se afianza y Kotlin lidera la construcción de agentes inteligentes con Koog.
            </p>
          </div>
        </div>
      </>
    ),
  },

  // =========================================================================
  // BLOQUE 2: ¿DÓNDE ESTAMOS HOY? (RADIOGRAFÍA 2026 Y ECOSISTEMA)
  // =========================================================================

  // SLIDE 5: El Fin del Mito (Métricas Reales)
  {
    id: 5,
    block: 'Bloque 2 • Radiografía 2026',
    notes: 'Levanten la mano los que alguna vez escucharon la frase: "Kotlin es solo para hacer apps de Android". Hoy enterramos ese mito con datos reales. [👉 Paso 1: KMP]: La adopción de Kotlin Multiplatform saltó del 4% al 31% en proyectos enterprise en producción. [👉 Pulsa SIGUIENTE para ver la gráfica de Backend]: El 62% de los ingenieros de Kotlin construyen activamente servicios Cloud, APIs y microservicios con Spring Boot y Ktor. [👉 Pulsa SIGUIENTE para ver la Comunidad]: La comunidad global ya supera los 3.2 millones de desarrolladores activos impulsados por la IA.',
    content: ({ slide5Metric = 'kmp', isSlideActive = true, onSelectMetric }: SlideRenderProps = {}) => (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div>
            <h2 className="slide-title">¿Creías que era solo para Android? El Fin del Mito</h2>
            <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
              Datos oficiales del ecosistema: crecimiento explosivo en multiplataforma, backend y comunidad global
            </p>
          </div>
          <Kodee pose="love" size={85} />
        </div>

        <div className="grid-2-balanced">
          <GrowthBarChart
            activeMetric={slide5Metric}
            isSlideActive={isSlideActive}
            onSelectMetric={onSelectMetric}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>
            <div
              className="card"
              style={{
                padding: '20px 24px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                border: slide5Metric === 'kmp' ? '1.5px solid #FF7A00' : '1px solid rgba(255, 255, 255, 0.1)',
                background: slide5Metric === 'kmp' ? 'rgba(255, 122, 0, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                boxShadow: slide5Metric === 'kmp' ? '0 0 24px rgba(255, 122, 0, 0.28)' : 'none',
                transform: slide5Metric === 'kmp' ? 'scale(1.02)' : 'scale(0.98)',
                opacity: slide5Metric === 'kmp' ? 1 : 0.65,
                cursor: 'pointer',
              }}
              onClick={() => onSelectMetric && onSelectMetric('kmp')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="tag-pill tag-orange" style={{ width: 'fit-content' }}>
                  Multiplatform (KMP)
                </span>
                <span style={{ fontSize: '0.8rem', color: '#FF7A00', fontWeight: 700 }}>4% ➔ 31%</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>📱 Multiplataforma Nativa</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.45', margin: 0 }}>
                Adopción empresarial masiva. Comparte el 100% de la lógica de negocio y arquitectura en Android, iOS, Desktop y Web sin puentes lentos.
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: '20px 24px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                border: slide5Metric === 'backend' ? '1.5px solid #D900B6' : '1px solid rgba(255, 255, 255, 0.1)',
                background: slide5Metric === 'backend' ? 'rgba(217, 0, 182, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                boxShadow: slide5Metric === 'backend' ? '0 0 24px rgba(217, 0, 182, 0.28)' : 'none',
                transform: slide5Metric === 'backend' ? 'scale(1.02)' : 'scale(0.98)',
                opacity: slide5Metric === 'backend' ? 1 : 0.65,
                cursor: 'pointer',
              }}
              onClick={() => onSelectMetric && onSelectMetric('backend')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="tag-pill tag-purple" style={{ width: 'fit-content' }}>
                  Backend &amp; Microservicios
                </span>
                <span style={{ fontSize: '0.8rem', color: '#D900B6', fontWeight: 700 }}>32% ➔ 62%</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>🌐 Infraestructura Cloud</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.45', margin: 0 }}>
                El <strong>62% de los ingenieros de Kotlin</strong> construyen servicios Backend y APIs de alto rendimiento con Spring Boot y Ktor sobre JVM y GraalVM.
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: '18px 24px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                border: slide5Metric === 'devs' ? '1.5px solid #7F52FF' : '1px solid rgba(255, 255, 255, 0.1)',
                background: slide5Metric === 'devs' ? 'rgba(127, 82, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                boxShadow: slide5Metric === 'devs' ? '0 0 24px rgba(127, 82, 255, 0.28)' : 'none',
                transform: slide5Metric === 'devs' ? 'scale(1.02)' : 'scale(0.98)',
                opacity: slide5Metric === 'devs' ? 1 : 0.65,
                cursor: 'pointer',
              }}
              onClick={() => onSelectMetric && onSelectMetric('devs')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="tag-pill tag-gold" style={{ width: 'fit-content' }}>
                  Comunidad Global
                </span>
                <span style={{ fontSize: '0.8rem', color: '#7F52FF', fontWeight: 700 }}>1.4M ➔ 3.2M</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>👥 Ecosistema en Expansión</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.4', margin: 0 }}>
                Superando los <strong>3.2 Millones de desarrolladores activos</strong> con el respaldo de Meta, Google, JetBrains y la Kotlin Foundation.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // SLIDE 6: Respaldo y Confianza Empresarial
  {
    id: 6,
    block: 'Bloque 2 • Respaldo Big Tech',
    notes: 'El software que usamos a diario corre en Kotlin. Meta se unió a la Kotlin Foundation como Gold Member junto a Google y JetBrains. AWS da soporte oficial en más de 300 servicios de nube. La app de Google Docs en iOS corre código compartido en Kotlin, y Duolingo atiende a más de 40 millones de usuarios con esta misma tecnología.',
    content: (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <h2 className="slide-title">Respaldo Institucional: Los Gigantes que Mueven el Mundo</h2>
            <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
              Gobernanza transparente con la Kotlin Foundation y despliegues masivos a escala global
            </p>
          </div>
          <Kodee pose="safe" size={80} />
        </div>

        <div className="bento-grid">
          <div className="card highlight-purple bento-tall">
            <span className="tag-pill tag-gold" style={{ width: 'fit-content', marginBottom: '14px' }}>
              Gobernanza Kotlin Foundation
            </span>
            <div className="big-stat" style={{ fontSize: '3.6rem', marginBottom: '6px' }}>Gold</div>
            <h3 style={{ fontSize: '1.35rem' }}>🏛️ Alianza de Titanes</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.55', marginTop: '8px' }}>
              La <strong>Kotlin Foundation</strong> garantiza que el lenguaje pertenezca a la comunidad abierta y nunca dependa del capricho de una sola compañía.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="tag-pill tag-gold">Meta (Gold Member)</span>
              <span className="tag-pill tag-green">Google</span>
              <span className="tag-pill tag-red">JetBrains</span>
              <span className="tag-pill tag-green">Block (Silver)</span>
            </div>
          </div>

          <div className="card highlight-orange">
            <h3>☁️ Nube e Infraestructura Corporativa</h3>
            <ul>
              <li><strong>Amazon Web Services (AWS):</strong> SDK nativo de Kotlin implementado en <strong>+300 servicios de nube</strong>.</li>
              <li><strong>Spring Boot:</strong> Más del <strong>27% de los desarrolladores de Spring</strong> eligen Kotlin para nuevos microservicios.</li>
            </ul>
          </div>

          <div className="card">
            <h3>📱 Millones de Usuarios Diarios</h3>
            <ul>
              <li><strong>Google Workspace:</strong> La aplicación oficial de <strong>Google Docs para iOS</strong> comparte lógica en Kotlin.</li>
              <li><strong>Duolingo, Netflix y McDonald's:</strong> Experiencias rápidas y sincronizadas sobre código común.</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  // SLIDE 7: La Revolución del Compilador K2
  {
    id: 7,
    block: 'Bloque 2 • Rendimiento K2',
    notes: '¿Qué es el compilador K2 en palabras sencillas? Es el corazón del lenguaje. Es la máquina que toma nuestras ideas y las convierte en aplicaciones ultrarrápidas. En Kotlin 2.x, JetBrains reescribió este motor por completo: las compilaciones son 40% más rápidas y el editor responde cuatro veces más rápido. Menos tiempo esperando a que termine la máquina significa más tiempo creando valor.',
    content: (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h2 className="slide-title">La Revolución K2: Eficiencia Extrema en el Desarrollo</h2>
            <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
              El nuevo motor que unifica la compilación para servidores, teléfonos, navegadores y chips nativos
            </p>
          </div>
          <Kodee pose="speed" size={80} style={{ marginTop: '-8px' }} />
        </div>

        <div className="grid-2-balanced">
          <BenchmarkBar />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
            <div className="card highlight-green" style={{ padding: '22px 26px' }}>
              <div className="big-stat" style={{ fontSize: '3.2rem', marginBottom: '4px' }}>-40%</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Compilaciones Mucho Más Ágiles</h3>
              <p style={{ fontSize: '0.94rem', lineHeight: '1.5' }}>
                K2 es el motor predeterminado de la era 2.x. Acelera los pipelines de integración continua y ahorra miles de horas de espera a los equipos.
              </p>
            </div>

            <div className="card highlight-purple" style={{ padding: '22px 26px' }}>
              <span className="tag-pill tag-green" style={{ width: 'fit-content', marginBottom: '8px' }}>
                Procesamiento Simbólico (KSP)
              </span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>⚡ Generación de Código 2x Rápida</h3>
              <p style={{ fontSize: '0.94rem', lineHeight: '1.5' }}>
                Adiós a los viejos puentes lentos de generación de código. Todo se resuelve de forma nativa y directa.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // SLIDE 8: Kotlin Multiplatform (KMP) Filosofía
  {
    id: 8,
    block: 'Bloque 2 • Multiplataforma',
    notes: 'Llegamos a uno de los temas estrella: Kotlin Multiplatform. ¿Por qué KMP es diferente de Flutter o React Native? Las soluciones híbridas tradicionales intentan dibujar una interfaz artificial sobre un lienzo. KMP tiene una filosofía mucho más madura: comparte lo difícil —la lógica de negocio, las reglas financieras, la conexión con servidores y la base de datos—, pero deja que la interfaz sea 100% nativa. Y si quieres compartir interfaz, Compose Multiplatform para iOS ya es estable con 96% de satisfacción en rendimiento.',
    content: (
      <>
        <h2 className="slide-title">Kotlin Multiplatform: Compartir Lógica sin Perder Identidad</h2>
        <div className="quote-banner">
          "No obligamos a los equipos a comprometer la experiencia de usuario; compartimos lo complejo y respetamos la identidad nativa de cada plataforma."
        </div>

        <div className="grid-2">
          <div className="card highlight-orange" style={{ justifyContent: 'space-between' }}>
            <div>
              <span className="tag-pill tag-green" style={{ width: 'fit-content', marginBottom: '10px' }}>
                Compose Multiplatform Estable
              </span>
              <div className="big-stat" style={{ fontSize: '3.8rem' }}>96%</div>
              <h3 style={{ fontSize: '1.3rem' }}>Cero Problemas de Rendimiento en iOS</h3>
              <p style={{ fontSize: '0.96rem', lineHeight: '1.55', marginTop: '6px' }}>
                Renderizado directo sobre <strong>Metal en iOS</strong>, físicas reales de desplazamiento táctil, selección de texto nativa y accesibilidad completa con <em>VoiceOver</em>.
              </p>
            </div>
            <div style={{ marginTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px', display: 'flex', gap: '8px' }}>
              <span className="tag-pill tag-gold">Android</span>
              <span className="tag-pill tag-red">iOS</span>
              <span className="tag-pill tag-green">Desktop</span>
              <span className="tag-pill tag-purple">Web (Wasm)</span>
            </div>
          </div>

          <div className="kmp-concept-box">
            <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>Arquitectura Inteligente KMP</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              Un único equipo de ingeniería construye el núcleo de la aplicación una sola vez:
            </p>

            <div className="kmp-core-bar">
              <div>
                <strong>Núcleo Compartido (Lógica de Negocio)</strong>
                <div style={{ fontSize: '0.8rem', opacity: 0.85 }}>Persistencia de Datos • Redes • Algoritmos • Validaciones</div>
              </div>
              <Kodee pose="safe" size={45} />
            </div>

            <div className="kmp-targets-row">
              <div className="kmp-target-badge">
                <span style={{ fontSize: '1.2rem' }}>🤖</span>
                <strong style={{ fontSize: '0.85rem' }}>Android</strong>
                <span style={{ fontSize: '0.72rem', color: '#10B981' }}>Jetpack Compose</span>
              </div>
              <div className="kmp-target-badge">
                <span style={{ fontSize: '1.2rem' }}>🍏</span>
                <strong style={{ fontSize: '0.85rem' }}>iOS</strong>
                <span style={{ fontSize: '0.72rem', color: '#38BDF8' }}>SwiftUI / Compose</span>
              </div>
              <div className="kmp-target-badge">
                <span style={{ fontSize: '1.2rem' }}>💻</span>
                <strong style={{ fontSize: '0.85rem' }}>Escritorio</strong>
                <span style={{ fontSize: '0.72rem', color: '#FF7A00' }}>macOS / Windows</span>
              </div>
              <div className="kmp-target-badge">
                <span style={{ fontSize: '1.2rem' }}>🌐</span>
                <strong style={{ fontSize: '0.85rem' }}>Web</strong>
                <span style={{ fontSize: '0.72rem', color: '#D900B6' }}>WebAssembly</span>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // =========================================================================
  // BLOQUE 3: ¿HACIA DÓNDE VAMOS? (EL FUTURO Y LA COMUNIDAD)
  // =========================================================================

  // SLIDE 9: La Nueva Frontera: Backend & IA Agéntica
  {
    id: 9,
    block: 'Bloque 3 • Nueva Frontera',
    notes: 'Miremos hacia el futuro: ¿en qué se está transformando Kotlin? En primer lugar, la revolución en la nube con Spring Boot 4 y alianzas con Azul JVM, aumentando el rendimiento de servidores entre 30% y 38%. Y en segundo lugar, la Inteligencia Artificial. JetBrains descontinuó proyectos secundarios para volcarse de lleno en IA y lanzó Koog: un framework oficial para orquestar y programar agentes de IA inteligentes con soporte para Model Context Protocol (MCP).',
    content: (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <h2 className="slide-title">La Nueva Frontera: Backend de Alto Vuelo e IA Agéntica</h2>
            <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
              Microservicios hiper-optimizados y orquestación de agentes inteligentes sin cambiar de lenguaje
            </p>
          </div>
          <Kodee pose="ai" size={85} style={{ marginTop: '-8px' }} />
        </div>

        <div className="grid-2">
          <div className="card highlight-orange" style={{ padding: '24px 28px', justifyContent: 'space-between' }}>
            <div>
              <span className="tag-pill tag-gold" style={{ width: 'fit-content', marginBottom: '10px' }}>
                Cloud-Native &amp; Servidores
              </span>
              <div className="big-stat" style={{ fontSize: '3.4rem', margin: '4px 0' }}>+38%</div>
              <h3 style={{ fontSize: '1.25rem' }}>Rendimiento en la JVM con Azul</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.55', marginTop: '6px' }}>
                La alianza estratégica entre <strong>JetBrains y Azul Systems</strong> optimiza la máquina virtual para procesar cargas masivas de transacciones en la nube, reduciendo drásticamente la factura de servidores en AWS y Google Cloud.
              </p>
            </div>
            <ul style={{ marginTop: '12px', fontSize: '0.92rem' }}>
              <li>Integración de primera clase con <strong>Spring Boot 4</strong>.</li>
              <li>Microservicios ultraligeros y asíncronos con <strong>Ktor 3.x</strong>.</li>
            </ul>
          </div>

          <div className="card highlight-purple" style={{ padding: '24px 28px', justifyContent: 'space-between' }}>
            <div>
              <span className="tag-pill tag-red" style={{ width: 'fit-content', marginBottom: '10px' }}>
                JetBrains AI-Native
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>🤖 Framework Koog: Agentes de IA</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.55' }}>
                JetBrains volcó toda su fuerza de ingeniería hacia las herramientas de Inteligencia Artificial. Con <strong>Koog</strong>, puedes crear y coordinar agentes autónomos con memoria persistente, grafos de decisión tipados y soporte nativo para <strong>Model Context Protocol (MCP)</strong>.
              </p>
            </div>
            <div style={{ background: 'rgba(9, 2, 17, 0.7)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(127, 82, 255, 0.35)', marginTop: '10px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>El Mismo Cerebro en Todas Partes:</strong>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                Tus agentes de IA pueden correr en servidores, ejecutarse dentro del dispositivo en Android o iOS, o compilarse a WebAssembly.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // SLIDE 10: El Roadmap Oficial (Hacia 2027)
  {
    id: 10,
    block: 'Bloque 3 • Roadmap Oficial',
    notes: '¿Qué viene en los próximos dos años? El Roadmap oficial de JetBrains tiene prioridades muy claras: WebAssembly pasa a estado Estable para correr aplicaciones web a velocidad casi nativa; Swift Export avanza a fase Beta; llega el depurador oficial de Kotlin dentro de Xcode; soporte de primera clase en Visual Studio Code mediante el protocolo LSP, y el ecosistema de ciencia de datos con Kotlin DataFrame.',
    content: (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <h2 className="slide-title">El Futuro: Roadmap Oficial de Kotlin Hacia 2027</h2>
            <p className="slide-subtitle" style={{ marginBottom: '8px' }}>
              Los 4 pilares de innovación activa financiados y respaldados por JetBrains y la comunidad
            </p>
          </div>
          <Kodee pose="celebrate" size={75} />
        </div>

        <div className="grid-2x2">
          <div className="card highlight-purple">
            <h3 style={{ fontSize: '1.2rem' }}>🌐 WebAssembly (Wasm) Estable</h3>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.45' }}>
              Consolidación de <strong>Kotlin/Wasm a estado Estable</strong> y estándar WASI, permitiendo correr aplicaciones completas en el navegador a velocidades casi idénticas al hardware nativo.
            </p>
          </div>

          <div className="card highlight-orange">
            <h3 style={{ fontSize: '1.2rem' }}>📱 Swift Export a Beta</h3>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.45' }}>
              Generación directa de paquetes Swift sin puentes intermedios, compatibilidad total con Swift 6.3 y aceleración de gráficos por GPU mediante <strong>Graphite en Skiko</strong>.
            </p>
          </div>

          <div className="card highlight-green">
            <h3 style={{ fontSize: '1.2rem' }}>🛠️ Tooling Universal (Xcode &amp; VS Code)</h3>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.45' }}>
              Depurador oficial integrado directamente en <strong>Xcode</strong>, soporte maduro para <strong>Visual Studio Code</strong> mediante el servidor de lenguaje oficial (LSP) y Gradle declarativo.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '1.2rem' }}>🗄️ Ciencia de Datos y Redes Modernas</h3>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.45' }}>
              Soporte nativo de protocolos <strong>HTTP/3 y gRPC en Ktor</strong>, evolución del ORM Exposed 2.0 y maduración de <strong>Kotlin DataFrame</strong> para análisis y manipulación de datos.
            </p>
          </div>
        </div>
      </>
    ),
  },

  // SLIDE 11: Honestidad Ingenieril: Criterio Real
  {
    id: 11,
    block: 'Bloque 3 • Criterio Ingenieril',
    notes: 'Como ingenieros y profesionales no venimos a vender humo ni a decir que una tecnología es mágica. Toda elección técnica tiene costos y compromisos. ¿Dónde están los retos reales hoy? Primero: Gradle multimódulo tiene una curva de aprendizaje que requiere estudio. Segundo: Si decides compartir la interfaz gráfica completa en iOS, Compose añade unos pocos megabytes al tamaño final. Y tercero: La mejor regla pragmática es empezar pequeño: no reescribas tu empresa mañana, comparte un solo módulo y evalúa los resultados.',
    content: (
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
                Aunque la configuración moderna en Kotlin 2.x es mucho más limpia, diseñar correctamente la separación de capas requiere estudio y disciplina de equipo.
              </p>
            </div>
            <span className="tag-pill tag-gold">Herramientas</span>
          </div>

          <div className="warn-item">
            <div>
              <strong>2. Interoperabilidad con Swift en transición hacia Beta</strong>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '2px' }}>
                Swift Export avanza rápidamente, pero para tener hoy la experiencia más transparente en producción la recomendación estándar sigue siendo incorporar <strong>SKIE</strong>.
              </p>
            </div>
            <span className="tag-pill tag-gold">iOS Interop</span>
          </div>

          <div className="warn-item">
            <div>
              <strong>3. Tamaño del binario al compartir interfaz gráfica completa</strong>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '2px' }}>
                Compartir solo la lógica y mantener la UI nativa en SwiftUI sigue siendo la estrategia más ligera; Compose en iOS añade algunos MB que deben evaluarse según el caso de uso.
              </p>
            </div>
            <span className="tag-pill tag-gold">Arquitectura</span>
          </div>

          <div className="warn-item">
            <div>
              <strong>4. La Regla de Oro: Adopción Gradual Inteligente</strong>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '2px' }}>
                Nunca intentes reescribir una aplicación completa desde cero. Empieza compartiendo un cliente de red, un modelo de datos o un algoritmo común.
              </p>
            </div>
            <span className="tag-pill tag-green">Buenas Prácticas</span>
          </div>
        </div>
      </>
    ),
  },

  // SLIDE 12: Cierre, Redes & Comunidad KUG
  {
    id: 12,
    block: 'Bloque 3 • Comunidad & Redes',
    notes: 'Para cerrar esta noche: ¡muchísimas gracias a todos por su tiempo y energía! Aquí tienen mis redes sociales directas en LinkedIn e Instagram para conectar, y muy especialmente el código QR del chat oficial de WhatsApp del Club de IA Uleam. Escanéenlo ahora mismo con sus teléfonos para sumarse a nuestros talleres, proyectos y futuros eventos. ¡Abrimos micrófono para preguntas y networking!',
    content: (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div>
            <h2 className="slide-title">Conectemos: Redes Profesionales &amp; Comunidad</h2>
            <p className="slide-subtitle" style={{ marginBottom: '4px' }}>
              Escanea los códigos QR para sumarte al chat del Club de IA Uleam y conectar en redes
            </p>
          </div>
          <span className="tag-pill tag-gold" style={{ fontSize: '0.85rem' }}>
            🎉 Comunidad ULEAM
          </span>
        </div>

        <SpeakerClosingCard />
      </>
    ),
  },
];
