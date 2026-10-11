import React from 'react';

interface DeckHeaderProps {
  currentBlock: string;
  currentIndex: number;
  totalSlides: number;
  onOpenOverview: () => void;
}

export const DeckHeader: React.FC<DeckHeaderProps> = ({
  currentBlock,
  currentIndex,
  totalSlides,
  onOpenOverview,
}) => {
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <>
      <div className="top-deck-progress-track">
        <div
          className="top-deck-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <header className="deck-header">
        <div className="brand-lockup" onClick={onOpenOverview} title="Ver todas las diapositivas (Tecla G)">
          <div className="kodee-mini">
            <div className="kodee-mini-eye" />
          </div>
          <span>Kotlin User Group • 2026</span>
        </div>
        <div className="header-badges">
          <div className="block-badge" id="blockIndicator">
            {currentBlock}
          </div>
        </div>
      </header>
    </>
  );
};

