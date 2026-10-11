---
name: conference-deck
description: >-
  Develop interactive, high-impact web conference presentations and keynote decks with the modern KotlinConf / JetBrains aesthetic (dark obsidian background, vibrant neon gradients, glassmorphism, speaker notes drawer, overview grid modal, remote clicker controls, and interactive charts). Use when the user asks to create, redesign, or expand slides for conference presentations, pitch decks, technical talks, or interactive web slide decks.
---

# Conference Deck Skill: High-Impact Keynote Design System

This skill guides the creation of high-impact, developer-focused, conference-grade interactive presentation decks inspired by the modern **KotlinConf / JetBrains 2026** design system.

---

## 1. Visual DNA & Aesthetic Guidelines

All presentations built with this skill follow a distinctive high-tech keynote aesthetic:

* **Dark Obsidian Core**: Deep cosmic obsidian background (`#090211` / `#190C26`), avoiding flat grays or standard pure black.
* **Ambient Neon Glows**: Subtle blurred radial spots in the corners (`blur(40px)`) using orange (`#FF7A00`), red (`#FF2E4C`), magenta (`#D900B6`), and purple (`#7F52FF`).
* **Subtle Technical Grid**: Fixed 48px geometric wireframe grid (`rgba(127, 82, 255, 0.04)`) giving an engineering blueprint feel.
* **Glassmorphic Surface Cards**: Cards with `background: rgba(25, 12, 38, 0.72)`, `backdrop-filter: blur(12px)`, and delicate gradient borders (`rgba(217, 0, 182, 0.28)` to `#FF7A00`).
* **Editorial Typography**:
  * Headings & Body: **Inter** (weights 500, 600, 700, 800, 900) with tight tracking (`-0.02em`).
  * Code, Stats & Badges: **JetBrains Mono** for technical authenticity.
* **Pill Badges (`tag-pill`)**: High-contrast micro-labels for categorizing topics (`tag-gold`, `tag-orange`, `tag-purple`, `tag-green`, `tag-red`).
* **Mascot / Visual Anchor**: Expressive SVG mascot (e.g., Kodee) with contextual poses (`wave`, `idea`, `speed`, `safe`, `ai`, `celebrate`, `ponder`) positioned in the slide header or stage to keep the audience engaged.

---

## 2. Standard Deck Architecture

Every presentation deck must be structured as follows:

```text
src/
├── components/
│   ├── DeckHeader.tsx          # Gradient progress track, brand logo, block name
│   ├── DeckFooter.tsx          # Slide counter (01 / 12), conference metadata
│   ├── InteractiveControls.tsx # Floating bottom bar (nav, notes, overview, transitions, full-screen, confetti)
│   ├── SpeakerNotesDrawer.tsx  # Dockable presenter script with cues ([👉 PULSA SIGUIENTE])
│   ├── OverviewModal.tsx       # Grid gallery (press 'G' or 'Esc') for instant jump
│   ├── BackgroundEffects.tsx   # Ambient glows, grid pattern, SVG backdrop watermark
│   ├── Kodee.tsx               # Vector mascot with 10 poses
│   └── charts/                 # Interactive SVG/CSS charts (GrowthBarChart, BenchmarkBar, etc.)
├── data/
│   └── slidesData.tsx          # Array of SlideData objects (id, block, notes, content)
├── types/
│   └── slide.ts                # SlideData, SlideRenderProps, MetricType
├── utils/
│   └── confetti.ts             # canvas-confetti fireworks for celebration / end slide
└── index.css                   # Complete design system tokens and layout utilities
```

---

## 3. Keyboard & Remote Clicker Navigation Contract

A professional presentation deck must respond seamlessly to remote hardware clickers and presenter keyboard shortcuts:

| Key / Event | Action | Behavior |
| :--- | :--- | :--- |
| `ArrowRight`, `Space`, `PageDown`, `ArrowDown` | **Next** | Advances sub-step (if slide has internal state) or goes to next slide. Triggers confetti on final slide. |
| `ArrowLeft`, `PageUp`, `ArrowUp` | **Previous** | Steps back sub-step or returns to previous slide. |
| `B` or `.` | **Blackout** | Toggles pure black screen for keeping audience attention on the speaker. Any key wakes up. |
| `N` | **Speaker Notes** | Toggles the slide's speaker notes drawer. |
| `G` or `Escape` | **Overview Grid** | Opens visual grid modal of all slides. |
| `F` | **Fullscreen** | Toggles browser full-screen presentation mode. |
| `T` | **Transition Mode** | Cycles transition effects: *Cinemática 3D*, *Zoom & Profundidad*, or *Minimal Crossfade*. |

---

## 4. Canonical Slide Archetypes

When constructing slides, choose from these proven structural archetypes:

### Archetype 1: Hero Cover (`hero-cover-flex`)
* **Layout**: Split 2 columns (52% text / 48% hero graphic).
* **Elements**: Golden pill tag, huge headline (`hero-title`), subtitle, speaker name & role, and Bauhaus pill composition (`KotlinConfHeroGraphic`) with mascot waving.

### Archetype 2: 4-Pillar Grid (`pillar-grid-4`)
* **Layout**: 4 equal vertical cards (`pillar-card`).
* **Elements**: Emoji/icon in color box (`pillar-icon-box`), numbered title, concise explanation. Ideal for core principles, pillars, or foundational ideas.

### Archetype 3: Timeline Track (`timeline-track`)
* **Layout**: Horizontal progression of milestone cards (`timeline-step-card`).
* **Elements**: Top year badge (`timeline-year-badge`), milestone title, bullet description, highlighted current year with glowing border.

### Archetype 4: Bento Grid (`bento-grid`)
* **Layout**: 3-card asymmetric layout (1 tall featured card spanning 2 rows + 2 stacked cards).
* **Elements**: Giant statistic (`.big-stat` 3.6rem), company badges, bullet points. Ideal for enterprise adoption, governance, or ecosystem backing.

### Archetype 5: Interactive Metric Comparison (`grid-2-balanced`)
* **Layout**: Left column has dynamic interactive chart (`GrowthBarChart`), right column has selectable metric cards.
* **Interaction**: Pressing Next or clicking cards cycles through metrics (`kmp` ➔ `backend` ➔ `devs`), animating the chart bars and highlighting active cards.

### Archetype 6: Benchmark & Performance Split
* **Layout**: 2 balanced columns. Left column showcases benchmark comparison bars (e.g. Kotlin 1.9 vs Kotlin 2.0 with compile times); right column shows stat highlights (`-40%`).

### Archetype 7: Architecture / Concept Diagram
* **Layout**: Left column features key metric + platform targets (`Android`, `iOS`, `Desktop`, `Web Wasm`); right column shows multi-layered architecture stack (Shared Logic Core vs Native UI).

### Archetype 8: Engineering Honesty / Warn List (`warn-list`)
* **Layout**: Vertical stack of cards (`warn-item`) with gold/green category pills.
* **Purpose**: Transparent analysis of trade-offs, learning curves, and best practices.

### Archetype 9: Speaker Closing & Social Links (`SpeakerClosingCard`)
* **Layout**: 2 columns: speaker bio card + interactive QR codes (`qrcode.react`) for community groups (WhatsApp, Telegram, Discord) and social networks (LinkedIn, GitHub).

---

## 5. Step-by-Step Implementation Workflow

When asked to develop a presentation:

1. **Plan Storyline & Block Division**:
   * Break the talk into 3–4 coherent blocks (e.g. *Bloque 1: Origen y Filosofía*, *Bloque 2: Radiografía Actual*, *Bloque 3: Futuro y Retos*).
   * Define 10–15 slides maximum for optimal conference pacing (20–45 minutes).
2. **Setup Project Foundation**:
   * Ensure `Inter` and `JetBrains Mono` fonts are loaded in `index.html`.
   * Apply design tokens and root variables from [design-tokens.css](./references/design-tokens.css).
   * Setup viewport styling (`100vw`, `100vh`, `overflow: hidden`, fixed aspect layout).
3. **Build Slide Data (`slidesData.tsx`)**:
   * For each slide, write:
     * `id`: sequential number.
     * `block`: category name for header badge.
     * `notes`: comprehensive presenter script including timing and `[👉 PULSA SIGUIENTE]` cues.
     * `content`: responsive JSX using one of the 8 canonical archetypes.
4. **Integrate Deck Controls & Engine**:
   * Wire `DeckHeader` (progress bar & block tag).
   * Wire `DeckFooter` (slide numbering & branding).
   * Wire `InteractiveControls` (prev/next, notes, overview, transitions, fullscreen, confetti).
   * Wire keyboard listener handling clicker commands and sub-step progression.
5. **Verify & Polish**:
   * Verify readability on 16:9 projector resolutions (1920x1080).
   * Ensure smooth transitions without layout shifts.
   * Test keyboard navigation end-to-end.

---

## 6. References & Templates

* [Design System CSS Tokens & Styles](./references/design-tokens.css)
* [Slide Templates Catalog](./references/slide-templates.md)
* [Deck Engine & State Management Guide](./references/deck-engine-guide.md)
