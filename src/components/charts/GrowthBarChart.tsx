import React, { useState, useEffect } from 'react';

export type MetricType = 'kmp' | 'backend' | 'devs';

interface DataPoint {
  year: string;
  value: number;
  label: string;
  formatted: string;
}

const DATASETS: Record<MetricType, { title: string; subtitle: string; unit: string; color: string; data: DataPoint[] }> = {
  kmp: {
    title: 'Adopción de Kotlin Multiplatform (KMP)',
    subtitle: 'Porcentaje de equipos y proyectos adoptando KMP en producción',
    unit: '%',
    color: '#FF7A00',
    data: [
      { year: '2020', value: 1, label: 'KMP Alpha', formatted: '1%' },
      { year: '2021', value: 2, label: 'Tech Preview', formatted: '2%' },
      { year: '2022', value: 4, label: 'KMP Beta', formatted: '4%' },
      { year: '2023', value: 8, label: 'KMP 1.0', formatted: '8%' },
      { year: '2024', value: 14, label: 'Ecosistema K2', formatted: '14%' },
      { year: '2025', value: 22, label: 'Compose iOS', formatted: '22%' },
      { year: '2026', value: 31, label: 'Estándar Ent.', formatted: '31%' },
    ],
  },
  backend: {
    title: 'Kotlin en Backend & Microservicios',
    subtitle: 'Porcentaje de desarrolladores de Kotlin creando servicios Cloud/JVM',
    unit: '%',
    color: '#D900B6',
    data: [
      { year: '2020', value: 19, label: 'Soporte Spring', formatted: '19%' },
      { year: '2021', value: 25, label: 'Cloud Adopción', formatted: '25%' },
      { year: '2022', value: 32, label: 'Ktor 1.6 + JVM', formatted: '32%' },
      { year: '2023', value: 40, label: 'Microservicios', formatted: '40%' },
      { year: '2024', value: 48, label: 'Ktor 2.x + Graal', formatted: '48%' },
      { year: '2025', value: 55, label: 'State of Dev', formatted: '55%' },
      { year: '2026', value: 62, label: 'Cloud Native', formatted: '62%' },
    ],
  },
  devs: {
    title: 'Comunidad Global de Desarrolladores',
    subtitle: 'Millones de desarrolladores activos programando en Kotlin',
    unit: 'M',
    color: '#7F52FF',
    data: [
      { year: '2020', value: 0.9, label: 'Consolidación', formatted: '0.9M' },
      { year: '2021', value: 1.1, label: '10 Años Kotlin', formatted: '1.1M' },
      { year: '2022', value: 1.4, label: 'Post-Android', formatted: '1.4M' },
      { year: '2023', value: 1.7, label: 'KMP Alpha/Beta', formatted: '1.7M' },
      { year: '2024', value: 2.1, label: 'Ecosistema K2', formatted: '2.1M' },
      { year: '2025', value: 2.6, label: 'Meta Gold Member', formatted: '2.6M' },
      { year: '2026', value: 3.2, label: 'AI & Multiplatform', formatted: '3.2M' },
    ],
  },
};

interface GrowthBarChartProps {
  activeMetric?: MetricType;
  onSelectMetric?: (metric: MetricType) => void;
  isSlideActive?: boolean;
}

export const GrowthBarChart: React.FC<GrowthBarChartProps> = ({
  activeMetric: propActiveMetric,
  onSelectMetric,
  isSlideActive = true,
}) => {
  const [internalMetric, setInternalMetric] = useState<MetricType>('kmp');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animated, setAnimated] = useState(false);

  const activeMetric = propActiveMetric || internalMetric;
  const currentSet = DATASETS[activeMetric];
  const maxValue = Math.max(...currentSet.data.map((d) => d.value)) * 1.15;

  const handleTabClick = (metric: MetricType) => {
    setInternalMetric(metric);
    if (onSelectMetric) onSelectMetric(metric);
  };

  // Only trigger the from-zero entrance when the slide mounts/becomes active
  // When switching between metrics, animated stays true so bars smoothly morph directly
  useEffect(() => {
    if (isSlideActive) {
      setAnimated(false);
      const timer = setTimeout(() => {
        setAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimated(false);
    }
  }, [isSlideActive]);

  return (
    <div className="dynamic-chart-card">
      <div className="chart-header">
        <div>
          <h4 className="chart-title">{currentSet.title}</h4>
          <p className="chart-subtitle">{currentSet.subtitle}</p>
        </div>

        {/* Metric Selector Tabs */}
        <div className="chart-tabs">
          <button
            className={`chart-tab-btn ${activeMetric === 'kmp' ? 'active' : ''}`}
            style={
              activeMetric === 'kmp'
                ? { background: '#FF7A00', color: '#fff', boxShadow: '0 0 14px rgba(255, 122, 0, 0.55)' }
                : {}
            }
            onClick={() => handleTabClick('kmp')}
          >
            Multiplataforma (KMP)
          </button>
          <button
            className={`chart-tab-btn ${activeMetric === 'backend' ? 'active' : ''}`}
            style={
              activeMetric === 'backend'
                ? { background: '#D900B6', color: '#fff', boxShadow: '0 0 14px rgba(217, 0, 182, 0.55)' }
                : {}
            }
            onClick={() => handleTabClick('backend')}
          >
            Backend (62%)
          </button>
          <button
            className={`chart-tab-btn ${activeMetric === 'devs' ? 'active' : ''}`}
            style={
              activeMetric === 'devs'
                ? { background: '#7F52FF', color: '#fff', boxShadow: '0 0 14px rgba(127, 82, 255, 0.55)' }
                : {}
            }
            onClick={() => handleTabClick('devs')}
          >
            Desarrolladores (3.2M)
          </button>
        </div>
      </div>

      {/* SVG Bar Chart */}
      <div className="chart-bars-container">
        {currentSet.data.map((item, index) => {
          const heightPercent = animated ? (item.value / maxValue) * 100 : 0;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={item.year}
              className="chart-bar-column"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="chart-bar-value"
                style={{
                  color: isHovered ? '#fff' : currentSet.color,
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateY(0)' : 'translateY(8px)',
                  transition: `opacity 0.45s ease ${index * 0.04}s, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.04}s, color 0.3s ease`,
                }}
              >
                {item.formatted}
              </div>

              <div className="chart-bar-track">
                <div
                  className="chart-bar-fill"
                  style={{
                    height: `${heightPercent}%`,
                    background: `linear-gradient(180deg, ${currentSet.color} 0%, rgba(127, 82, 255, 0.3) 100%)`,
                    boxShadow: isHovered ? `0 0 18px ${currentSet.color}` : 'none',
                    transitionDelay: `${index * 0.04}s`,
                  }}
                />
              </div>

              <div className="chart-bar-year">{item.year}</div>
              <div className="chart-bar-sublabel">{item.label}</div>
            </div>
          );
        })}
      </div>

      <div className="chart-footer-note">
        <span>Fuente:</span> JetBrains State of Developer Ecosystem &amp; Kotlin Foundation Industry Reports
      </div>
    </div>
  );
};
