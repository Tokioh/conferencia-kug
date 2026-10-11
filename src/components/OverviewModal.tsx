import React from 'react';
import type { SlideData } from '../types/slide';
import { X } from 'lucide-react';

interface OverviewModalProps {
  slides: SlideData[];
  currentIndex: number;
  isOpen: boolean;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export const OverviewModal: React.FC<OverviewModalProps> = ({
  slides,
  currentIndex,
  isOpen,
  onSelectSlide,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="overview-modal" onClick={onClose}>
      <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-white)' }}>
          Índice de Diapositivas ({slides.length})
        </h3>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <X size={18} /> Cerrar
        </button>
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`overview-card ${currentIndex === index ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onSelectSlide(index);
          }}
        >
          <h5>{String(index + 1).padStart(2, '0')}. {slide.block}</h5>
          <p>{slide.notes.slice(0, 110)}...</p>
        </div>
      ))}
    </div>
  );
};
