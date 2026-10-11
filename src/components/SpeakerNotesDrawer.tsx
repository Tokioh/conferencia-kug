import React from 'react';
import { X, Mic } from 'lucide-react';

interface SpeakerNotesDrawerProps {
  notes: string;
  isVisible: boolean;
  onClose: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({ notes, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <aside className="speaker-notes-drawer" id="notesDrawer">
      <h4>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Mic size={16} color="var(--kt-orange)" /> Guion Hablado / Notas de Orador (Presiona 'N' para ocultar)
        </span>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
          }}
          title="Cerrar notas"
        >
          <X size={16} />
        </button>
      </h4>
      <p id="notesContent">{notes}</p>
    </aside>
  );
};
