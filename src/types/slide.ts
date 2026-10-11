import type { ReactNode } from 'react';

export type MetricType = 'kmp' | 'backend' | 'devs';

export interface SlideRenderProps {
  isOverlayActive?: boolean;
  slide5Metric?: MetricType;
  onSelectMetric?: (metric: MetricType) => void;
  isSlideActive?: boolean;
}

export interface SlideData {
  id: number;
  block: string;
  notes: string;
  content: ReactNode | ((props: SlideRenderProps) => ReactNode);
}
