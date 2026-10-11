import React from 'react';
import { ChevronLeft, ChevronRight, MessageSquareText, Maximize, Minimize, LayoutGrid, Sparkles } from 'lucide-react';
import { fireFullScreenConfetti } from '../utils/confetti';

interface InteractiveControlsProps {
  currentIndex: number;
  totalSlides: number;
  notesVisible: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleNotes: () => void;
  onToggleOverview: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  transitionMode: 'cinematic' | 'zoom' | 'minimal';
  onCycleTransition: () => void;
}

export const InteractiveControls: React.FC<InteractiveControlsProps> = ({
  currentIndex,
  totalSlides,
  notesVisible,
  onPrev,
  onNext,
  onToggleNotes,
  onToggleOverview,
  isFullscreen,
  onToggleFullscreen,
  transitionMode,
  onCycleTransition,
}) => {
  const triggerConfetti = () => {
    fireFullScreenConfetti();
  };

  const transitionLabels: Record<string, string> = {
    cinematic: 'Cinemática 3D',
    zoom: 'Zoom & Profundidad',
    minimal: 'Minimal Crossfade',
  };

  return (
    <div className="interactive-controls" role="toolbar" aria-label="Controles de presentación">
      <button
        className="ctrl-btn"
        onClick={onPrev}
        disabled={currentIndex === 0}
        title="Anterior (← o Flecha Arriba)"
        style={{ opacity: currentIndex === 0 ? 0.35 : 1 }}
      >
        <ChevronLeft size={18} />
      </button>

      <button
        className="ctrl-btn"
        onClick={onNext}
        disabled={currentIndex === totalSlides - 1}
        title="Siguiente (→ o Espacio)"
        style={{ opacity: currentIndex === totalSlides - 1 ? 0.35 : 1 }}
      >
        <ChevronRight size={18} />
      </button>

      <button
        className="ctrl-btn"
        onClick={onCycleTransition}
        title={`Cambiar Efecto de Transición: ${transitionLabels[transitionMode]} (Tecla T)`}
        style={{ color: 'var(--kt-orange)', fontWeight: 800, fontSize: '0.78rem' }}
      >
        🎬
      </button>

      <button
        className={`ctrl-btn ${notesVisible ? 'active' : ''}`}
        onClick={onToggleNotes}
        title="Notas de Orador (Tecla N)"
      >
        <MessageSquareText size={18} />
      </button>

      <button
        className="ctrl-btn"
        onClick={onToggleOverview}
        title="Vista General de Slides (Tecla G o Esc)"
      >
        <LayoutGrid size={18} />
      </button>

      <button
        className="ctrl-btn"
        onClick={onToggleFullscreen}
        title="Pantalla Completa (Tecla F)"
      >
        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
      </button>

      <button
        className="ctrl-btn"
        onClick={triggerConfetti}
        title="Celebrar / Confeti"
      >
        <Sparkles size={18} color="var(--kt-orange)" />
      </button>

      <div className="controls-hint">
        <b>←</b> <b>→</b> / <b>Espacio</b> • <b>N</b> Guion • <b>T</b> Transición • <b>F</b> Fullscreen
      </div>
    </div>
  );
};
