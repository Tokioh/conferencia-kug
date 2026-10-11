# Kotlin 101 (Edición 2026) — Keynote Presentation Deck

> **Keynote Inaugural del Kotlin User Group (KUG) & Club de IA Uleam**  
> *"Qué es, dónde estamos y hacia dónde vamos"* por **Kevin Alonso**.

Una presentación web interactiva de alto impacto diseñada con la estética oficial **KotlinConf & JetBrains 2026** (modo oscuro obsidiana, resplandores de neón, tarjetas glassmórficas, animaciones cinemáticas y controles completos para presentadores y clickers físicos).

---

## ✨ Características Principales

* 🎯 **Estética KotlinConf / JetBrains 2026**:
  * Paleta de colores obsidiana profunda (`#090211`, `#190C26`) con gradientes vibrantes (naranja `#FF7A00`, rojo `#FF2E4C`, magenta `#D900B6`, púrpura `#7F52FF`).
  * Cuadrícula técnica de 48px y resplandores ambientales radiales (`blur(40px)`).
  * Tipografía dual de alta fidelidad: **Inter** para títulos editoriales y **JetBrains Mono** para código y métricas.
* 🤖 **Mascota Kodee Integrada**:
  * Mascota vectorial SVG con 10 poses contextuales (`wave`, `idea`, `speed`, `safe`, `ai`, `celebrate`, `ponder`, etc.).
* 📊 **Gráficos y Visualizaciones Interactivas**:
  * Crecimiento de KMP, Backend y Desarrolladores (`GrowthBarChart`) con animación dinámica al seleccionar métricas.
  * Comparativas de rendimiento del compilador K2 vs K1 (`BenchmarkBar`).
  * Muro interactivo de marcas globales en producción (Meta, Google Docs iOS, Netflix, Duolingo, AWS, etc.).
* 🎮 **Soporte Completo para Presentadores & Controles Remotos (Clickers)**:
  * Compatible con clickers USB/Bluetooth estándar (`PageDown` / `PageUp`, flechas, barra espaciadora).
  * **Cajón de Notas del Orador** con guión completo y marcas directas `[👉 PULSA SIGUIENTE]`.
  * **Modo Pantalla Negra (Blackout)** para enfocar la atención en el orador.
  * **Vista General (Overview Modal)** con cuadrícula de miniaturas para saltar rápidamente a cualquier slide durante preguntas y respuestas.
  * **Selector de Transiciones Dinámicas**: *Cinemática 3D (Keynote)*, *Zoom & Profundidad (Apple Reveal)* o *Crossfade Sutil*.
  * Barra de progreso en degradado en la parte superior y fuegos artificiales de confeti en la diapositiva final.
* 📱 **Slide de Cierre & Networking**:
  * Tarjeta de presentación del orador con códigos QR dinámicos para unirse al grupo oficial de WhatsApp y conectar en redes sociales.

---

## ⌨️ Atajos de Teclado y Controles

| Tecla / Evento | Acción | Descripción |
| :--- | :--- | :--- |
| `→` / `Espacio` / `PageDown` / `↓` | **Siguiente** | Avanza sub-paso interactivo o siguiente diapositiva. |
| `←` / `PageUp` / `↑` | **Anterior** | Retrocede sub-paso o diapositiva anterior. |
| `N` | **Notas de Orador** | Abre/cierra el panel inferior con el guión del presentador. |
| `G` o `Escape` | **Vista General** | Despliega la cuadrícula con todas las diapositivas para navegación rápida. |
| `B` o `.` | **Blackout** | Pantalla negra para momentos de debate (cualquier tecla la restaura). |
| `T` | **Efecto de Transición** | Alterna entre Cinemática 3D, Zoom o Minimal Crossfade. |
| `F` | **Pantalla Completa** | Activa/desactiva el modo fullscreen del navegador. |

---

## 🛠️ Tecnologías Utilizadas

* **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vite.dev/)
* **Estilos**: Vanilla CSS con tokens modernos y glassmorphism
* **Iconos & Efectos**: [Lucide React](https://lucide.dev/), [canvas-confetti](https://www.npmjs.com/package/canvas-confetti), [qrcode.react](https://www.npmjs.com/package/qrcode.react)
* **Linter**: [Oxlint](https://oxc.rs/)

---

## 🚀 Instalación y Ejecución Local

Clona el repositorio e instala las dependencias:

```bash
# Clonar el repositorio
git clone https://github.com/Tokioh/conferencia-kug.git
cd conferencia-kug

# Instalar dependencias (con bun o npm)
bun install
# o: npm install

# Iniciar servidor de desarrollo
bun dev
# o: npm run dev
```

Abre en tu navegador: `http://localhost:5173`

Para compilar la versión optimizada para producción:

```bash
bun run build
# o: npm run build
```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Diseñado con pasión para la comunidad de desarrolladores y el **Kotlin User Group**.
