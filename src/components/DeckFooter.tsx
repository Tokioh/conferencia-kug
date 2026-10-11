import React from 'react';

interface DeckFooterProps {
  currentIndex: number;
  totalSlides: number;
}

export const DeckFooter: React.FC<DeckFooterProps> = ({ currentIndex, totalSlides }) => {
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalSlides).padStart(2, '0');

  return (
    <footer className="deck-footer">
      <div className="slide-pill" id="slideCounter">
        {currentFormatted} / {totalFormatted}
      </div>
      <div className="footer-right">
        <div className="kodee-mini" title="Kodee Mascot">
          <div className="kodee-mini-eye" />
        </div>
        <div className="jb-box" title="JetBrains ecosystem">
          <div className="jb-box-inner">
            <div className="jb-underscore" />
          </div>
        </div>
        <div className="official-text">
          Kotlin User Group
          <span>Inspired by KotlinConf &amp; JetBrains</span>
        </div>
      </div>
    </footer>
  );
};
