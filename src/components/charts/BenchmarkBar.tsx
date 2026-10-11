import React, { useState } from 'react';

interface BenchmarkItem {
  id: string;
  metric: string;
  beforeLabel: string;
  beforeVal: number;
  afterLabel: string;
  afterVal: number;
  unit: string;
  improvement: string;
  color: string;
  notes: string;
}

const BENCHMARKS: BenchmarkItem[] = [
  {
    id: 'build_time',
    metric: 'Tiempo de Compilación Completa (Clean Build)',
    beforeLabel: 'K1 (Legacy)',
    beforeVal: 100,
    afterLabel: 'K2 (Compilador 2026)',
    afterVal: 60,
    unit: 's',
    improvement: '-40% Más Rápido',
    color: '#10B981',
    notes: 'K2 unificó el frontend de compilación para JVM, Native, JS y WebAssembly.',
  },
  {
    id: 'ide_analysis',
    metric: 'Velocidad de Análisis de Código e Indexación IDE',
    beforeLabel: 'Kotlin 1.9',
    beforeVal: 21,
    afterLabel: 'Kotlin 2.x',
    afterVal: 100,
    unit: 'pts',
    improvement: '+376% Aceleración',
    color: '#FF7A00',
    notes: 'Resolución de tipos y navegación expect/actual en tiempo real sin congelar el IDE.',
  },
  {
    id: 'annotation_ksp',
    metric: 'Procesamiento de Anotaciones (Dagger / Room)',
    beforeLabel: 'KAPT (Java stub)',
    beforeVal: 100,
    afterLabel: 'KSP (Kotlin Symbol Processing)',
    afterVal: 48,
    unit: 's',
    improvement: 'Hasta 2x Más Rápido',
    color: '#D900B6',
    notes: 'KSP analiza el AST de Kotlin directamente sin generar stubs intermedios de Java.',
  },
  {
    id: 'cycle_time',
    metric: 'Ciclo de Entrega de Funcionalidad vs Java Tradicional',
    beforeLabel: 'Java Boilerplate',
    beforeVal: 100,
    afterLabel: 'Kotlin Idiomático',
    afterVal: 82,
    unit: '%',
    improvement: '18% Menor Tiempo',
    color: '#7F52FF',
    notes: 'Reducción de ceremonias sintácticas, data classes y null safety estricto en tiempo de compilación.',
  },
];

export const BenchmarkBar: React.FC = () => {
  const [selected, setSelected] = useState<string>(BENCHMARKS[0].id);
  const active = BENCHMARKS.find((b) => b.id === selected) || BENCHMARKS[0];

  return (
    <div className="benchmark-card">
      <div className="benchmark-tabs">
        {BENCHMARKS.map((b) => (
          <button
            key={b.id}
            className={`benchmark-tab ${selected === b.id ? 'active' : ''}`}
            onClick={() => setSelected(b.id)}
          >
            {b.improvement}
          </button>
        ))}
      </div>

      <div className="benchmark-content">
        <div className="benchmark-title-row">
          <h4 className="benchmark-title">{active.metric}</h4>
          <span className="tag-pill tag-green" style={{ fontSize: '0.82rem', fontWeight: 800 }}>
            {active.improvement}
          </span>
        </div>

        {/* Comparativa de barras */}
        <div className="benchmark-bars-group">
          {/* Antes */}
          <div className="benchmark-row">
            <span className="benchmark-row-label">{active.beforeLabel}</span>
            <div className="benchmark-track">
              <div
                className="benchmark-fill before"
                style={{ width: `${(active.beforeVal / Math.max(active.beforeVal, active.afterVal)) * 100}%` }}
              >
                <span>{active.beforeVal} {active.unit}</span>
              </div>
            </div>
          </div>

          {/* Después / Con Kotlin 2.x */}
          <div className="benchmark-row">
            <span className="benchmark-row-label highlight">{active.afterLabel}</span>
            <div className="benchmark-track">
              <div
                className="benchmark-fill after"
                style={{
                  width: `${(active.afterVal / Math.max(active.beforeVal, active.afterVal)) * 100}%`,
                  background: `linear-gradient(90deg, ${active.color}, #FF7A00)`,
                  boxShadow: `0 0 12px ${active.color}88`,
                }}
              >
                <span>{active.afterVal} {active.unit}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="benchmark-notes">💡 {active.notes}</p>
      </div>
    </div>
  );
};
