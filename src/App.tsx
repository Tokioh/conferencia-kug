import { useState, useEffect, useCallback } from 'react';
import { slidesData } from './data/slidesData';
import type { MetricType } from './types/slide';
import { DeckHeader } from './components/DeckHeader';
import { DeckFooter } from './components/DeckFooter';
import { BackgroundEffects } from './components/BackgroundEffects';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { InteractiveControls } from './components/InteractiveControls';
import { OverviewModal } from './components/OverviewModal';
import { fireFullScreenConfetti } from './utils/confetti';
import { Sparkles } from 'lucide-react';

const METRICS: MetricType[] = ['kmp', 'backend', 'devs'];

export function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [notesVisible, setNotesVisible] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'forward' | 'backward'>('forward');
  const [transitionMode, setTransitionMode] = useState<'cinematic' | 'zoom' | 'minimal'>('cinematic');
  const [transitionToast, setTransitionToast] = useState<string | null>(null);
  const [slide3OverlayActive, setSlide3OverlayActive] = useState(false);
  const [slide5MetricStep, setSlide5MetricStep] = useState<number>(0);
  const [isBlackout, setIsBlackout] = useState(false);

  const currentSlide = slidesData[currentSlideIndex];
  const isCoverSlide = currentSlideIndex === 0;

  const goToNextSlide = useCallback(() => {
    // If on Slide 3 (index 2) and overlay is not yet active, activate overlay step first!
    if (currentSlideIndex === 2 && !slide3OverlayActive) {
      setSlide3OverlayActive(true);
      return;
    }

    if (currentSlideIndex === 2 && slide3OverlayActive) {
      setSlide3OverlayActive(false);
    }

    // If on Slide 5 (index 4) and we haven't shown all 3 metric charts yet, advance to next chart!
    if (currentSlideIndex === 4 && slide5MetricStep < 2) {
      setSlide5MetricStep((prev) => prev + 1);
      return;
    }

    setSlideDirection('forward');
    setCurrentSlideIndex((prev) => {
      const next = Math.min(prev + 1, slidesData.length - 1);
      if (next === slidesData.length - 1 && prev !== next) {
        fireFullScreenConfetti();
      }
      return next;
    });
  }, [currentSlideIndex, slide3OverlayActive, slide5MetricStep]);

  const goToPrevSlide = useCallback(() => {
    // If on Slide 3 with overlay active, hide overlay first to show brands again!
    if (currentSlideIndex === 2 && slide3OverlayActive) {
      setSlide3OverlayActive(false);
      return;
    }

    // If on Slide 5 (index 4) and we are past the first chart, go back to previous chart!
    if (currentSlideIndex === 4 && slide5MetricStep > 0) {
      setSlide5MetricStep((prev) => prev - 1);
      return;
    }

    setSlideDirection('backward');
    setCurrentSlideIndex((prev) => {
      const next = Math.max(prev - 1, 0);
      if (next === 4) {
        // If navigating backwards into Slide 5, show the last chart (devs)
        setSlide5MetricStep(2);
      }
      return next;
    });
  }, [currentSlideIndex, slide3OverlayActive, slide5MetricStep]);

  const toggleNotes = useCallback(() => {
    setNotesVisible((prev) => !prev);
  }, []);

  const toggleOverview = useCallback(() => {
    setOverviewOpen((prev) => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  const cycleTransitionMode = useCallback(() => {
    setTransitionMode((prev) => {
      let next: 'cinematic' | 'zoom' | 'minimal' = 'cinematic';
      let label = 'Cinemática 3D (Keynote)';
      if (prev === 'cinematic') {
        next = 'zoom';
        label = 'Zoom & Profundidad (Apple Reveal)';
      } else if (prev === 'zoom') {
        next = 'minimal';
        label = 'Crossfade Sutil (Minimalista)';
      } else {
        next = 'cinematic';
        label = 'Cinemática 3D (Keynote)';
      }
      setTransitionToast(label);
      return next;
    });
  }, []);

  useEffect(() => {
    if (transitionToast) {
      const timer = setTimeout(() => setTransitionToast(null), 2200);
      return () => clearTimeout(timer);
    }
  }, [transitionToast]);

  // Keyboard Navigation & Remote Presenter Clickers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If black screen is active, any key or click wakes up the presentation
      if (isBlackout) {
        setIsBlackout(false);
        if (e.key === '.' || e.key.toLowerCase() === 'b' || e.key === 'Escape') {
          return;
        }
      }

      // Remote Clickers: PageDown, ArrowRight, ArrowDown, Space -> NEXT
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToNextSlide();
      // Remote Clickers: PageUp, ArrowLeft, ArrowUp -> PREVIOUS
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPrevSlide();
      // Remote Clickers: "Black Screen" button (sends '.' or 'b')
      } else if (e.key === '.' || e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsBlackout((prev) => !prev);
      // Remote Clickers: "Play / Start Slideshow" button (sends F5)
      // Prevent browser reload and toggle Fullscreen instead!
      } else if (e.key === 'F5') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 't') {
        cycleTransitionMode();
      } else if (e.key.toLowerCase() === 'n') {
        toggleNotes();
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'g') {
        toggleOverview();
      } else if (e.key === 'Escape') {
        setOverviewOpen(false);
        setNotesVisible(false);
        setIsBlackout(false);
      } else if (e.key === 'Home') {
        setSlide3OverlayActive(false);
        setSlide5MetricStep(0);
        setSlideDirection('backward');
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        setSlide3OverlayActive(false);
        setSlide5MetricStep(0);
        setSlideDirection('forward');
        setCurrentSlideIndex(slidesData.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, cycleTransitionMode, toggleNotes, toggleFullscreen, toggleOverview, isBlackout]);

  // Touch Swipe for mobile/tablet presenters
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const diffX = startX - e.changedTouches[0].clientX;
      const diffY = startY - e.changedTouches[0].clientY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <>
      <BackgroundEffects isCoverSlide={isCoverSlide} />

      <DeckHeader
        currentBlock={currentSlide.block}
        currentIndex={currentSlideIndex}
        totalSlides={slidesData.length}
        onOpenOverview={toggleOverview}
      />

      <main
        className={`slides-wrapper transition-${transitionMode}`}
        data-direction={slideDirection}
      >
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          const isPast = index < currentSlideIndex;
          const status = isActive ? 'active' : isPast ? 'past' : 'future';

          return (
            <section
              key={slide.id}
              className={`slide ${status}`}
              data-block={slide.block}
              data-notes={slide.notes}
            >
              {typeof slide.content === 'function'
                ? slide.content({
                    isOverlayActive: index === 2 && slide3OverlayActive,
                    slide5Metric: METRICS[slide5MetricStep],
                    isSlideActive: isActive,
                    onSelectMetric: (metric) => {
                      const idx = METRICS.indexOf(metric);
                      if (idx !== -1) setSlide5MetricStep(idx);
                    },
                  })
                : slide.content}
            </section>
          );
        })}
      </main>

      {transitionToast && (
        <div className="transition-toast-notification">
          <Sparkles size={16} color="var(--kt-orange)" />
          <span>Efecto: {transitionToast}</span>
        </div>
      )}

      <SpeakerNotesDrawer
        notes={currentSlide.notes}
        isVisible={notesVisible}
        onClose={() => setNotesVisible(false)}
      />

      <InteractiveControls
        currentIndex={currentSlideIndex}
        totalSlides={slidesData.length}
        notesVisible={notesVisible}
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
        onToggleNotes={toggleNotes}
        onToggleOverview={toggleOverview}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        transitionMode={transitionMode}
        onCycleTransition={cycleTransitionMode}
      />

      <DeckFooter
        currentIndex={currentSlideIndex}
        totalSlides={slidesData.length}
      />

      <OverviewModal
        slides={slidesData}
        currentIndex={currentSlideIndex}
        isOpen={overviewOpen}
        onSelectSlide={(index) => {
          setSlide3OverlayActive(false);
          setSlide5MetricStep(0);
          setSlideDirection(index >= currentSlideIndex ? 'forward' : 'backward');
          setCurrentSlideIndex(index);
          setOverviewOpen(false);
        }}
        onClose={() => setOverviewOpen(false)}
      />
    </>
  );
}

export default App;
