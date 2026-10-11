# Deck Engine & State Management Guide

This guide details how to implement the presentation engine that powers transitions, keyboard remote clickers, sub-slide interactive steps, speaker notes, and overview modals.

---

## 1. Core Deck State Structure

In `App.tsx`:

```tsx
import { useState, useEffect, useCallback } from 'react';
import { slidesData } from './data/slidesData';
import { fireFullScreenConfetti } from './utils/confetti';

export function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [notesVisible, setNotesVisible] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBlackout, setIsBlackout] = useState(false);
  const [transitionMode, setTransitionMode] = useState<'cinematic' | 'zoom' | 'minimal'>('cinematic');

  // Multi-step sub-slide states (e.g. Slide 3 reveal, Slide 5 metric tabs)
  const [slide3OverlayActive, setSlide3OverlayActive] = useState(false);
  const [slide5MetricStep, setSlide5MetricStep] = useState(0);
```

---

## 2. Remote Clicker & Sub-Step Navigation Handler

Conference presentations often require revealing an item or changing an active tab **before** advancing to the next slide.

```tsx
const goToNextSlide = useCallback(() => {
  // 1. Sub-step handler: Slide 3 overlay reveal
  if (currentSlideIndex === 2 && !slide3OverlayActive) {
    setSlide3OverlayActive(true);
    return;
  }
  if (currentSlideIndex === 2 && slide3OverlayActive) {
    setSlide3OverlayActive(false);
  }

  // 2. Sub-step handler: Slide 5 metric cycles (0 -> 1 -> 2)
  if (currentSlideIndex === 4 && slide5MetricStep < 2) {
    setSlide5MetricStep((prev) => prev + 1);
    return;
  }

  // 3. Regular slide progression
  setCurrentSlideIndex((prev) => {
    const next = Math.min(prev + 1, slidesData.length - 1);
    // Celebrate with confetti on the last slide!
    if (next === slidesData.length - 1 && prev !== next) {
      fireFullScreenConfetti();
    }
    return next;
  });
}, [currentSlideIndex, slide3OverlayActive, slide5MetricStep]);

const goToPrevSlide = useCallback(() => {
  if (currentSlideIndex === 2 && slide3OverlayActive) {
    setSlide3OverlayActive(false);
    return;
  }
  if (currentSlideIndex === 4 && slide5MetricStep > 0) {
    setSlide5MetricStep((prev) => prev - 1);
    return;
  }

  setCurrentSlideIndex((prev) => {
    const next = Math.max(prev - 1, 0);
    if (next === 4) setSlide5MetricStep(2); // Jump back to last sub-step
    return next;
  });
}, [currentSlideIndex, slide3OverlayActive, slide5MetricStep]);
```

---

## 3. Keyboard & Clicker Event Listener

```tsx
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // If black screen is active, any key or click wakes up the presentation
    if (isBlackout) {
      setIsBlackout(false);
      if (e.key === '.' || e.key.toLowerCase() === 'b' || e.key === 'Escape') return;
    }

    // Remote Clickers: PageDown, ArrowRight, ArrowDown, Space -> NEXT
    if (['ArrowRight', ' ', 'PageDown', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      goToNextSlide();
    }
    // Remote Clickers: PageUp, ArrowLeft, ArrowUp -> PREV
    else if (['ArrowLeft', 'PageUp', 'ArrowUp'].includes(e.key)) {
      e.preventDefault();
      goToPrevSlide();
    }
    // Presenter Shortcuts
    else if (e.key.toLowerCase() === 'n') {
      setNotesVisible((prev) => !prev);
    }
    else if (e.key.toLowerCase() === 'g' || e.key === 'Escape') {
      setOverviewOpen((prev) => !prev);
    }
    else if (e.key.toLowerCase() === 'f') {
      toggleFullscreen();
    }
    else if (e.key === '.' || e.key.toLowerCase() === 'b') {
      setIsBlackout((prev) => !prev);
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [goToNextSlide, goToPrevSlide, isBlackout, toggleFullscreen]);
```

---

## 4. Confetti Fireworks Integration

Install `canvas-confetti` and `@types/canvas-confetti`:

```ts
// utils/confetti.ts
import confetti from 'canvas-confetti';

export function fireFullScreenConfetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#FF7A00', '#FF2E4C', '#D900B6', '#7F52FF', '#10B981'],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}
```
