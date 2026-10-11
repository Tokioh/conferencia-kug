import React, { useState } from 'react';

interface Segment {
  id: string;
  name: string;
  percentage: number;
  highlight: string;
  color: string;
  description: string;
}

const SEGMENTS: Segment[] = [
  {
    id: 'backend',
    name: 'Backend & Cloud Microservices',
    percentage: 53,
    highlight: '53% de devs Kotlin',
    color: '#FF7A00',
    description: '61% usa Spring Boot, 51% Ktor. 89% de empresas con 100+ devs tienen Kotlin en servidores.',
  },
  {
    id: 'kmp',
    name: 'Kotlin Multiplatform (iOS / Desktop)',
    percentage: 31,
    highlight: '31% adopción activa',
    color: '#D900B6',
    description: 'Google Docs, Duolingo (40M usuarios), McDonald\'s y Netflix compartiendo lógica y Compose.',
  },
  {
    id: 'android',
    name: 'Android First & Jetpack Compose',
    percentage: 95,
    highlight: '95%+ Top 1,000 Apps',
    color: '#10B981',
    description: 'El estándar oficial e indiscutible en Google Play. KSP y K2 reducen 40% el build.',
  },
  {
    id: 'ai_wasm',
    name: 'IA Agéntica & WebAssembly',
    percentage: 18,
    highlight: 'Ecosistema Emergente',
    color: '#7F52FF',
    description: 'Framework Koog de JetBrains con soporte MCP y Kotlin/Wasm corriendo nativo en browser.',
  },
];

export const EcosystemDonutChart: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<Segment>(SEGMENTS[0]);

  return (
    <div className="ecosystem-donut-container">
      <div className="donut-chips-list">
        {SEGMENTS.map((seg) => {
          const isSelected = selectedSegment.id === seg.id;
          return (
            <div
              key={seg.id}
              className={`donut-chip-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedSegment(seg)}
              style={{
                borderColor: isSelected ? seg.color : 'rgba(217, 0, 182, 0.25)',
              }}
            >
              <div className="donut-chip-header">
                <span className="donut-color-dot" style={{ background: seg.color }} />
                <span className="donut-chip-title">{seg.name}</span>
                <span className="donut-chip-badge" style={{ color: seg.color, background: `${seg.color}20` }}>
                  {seg.highlight}
                </span>
              </div>
              <div className="donut-bar-track">
                <div
                  className="donut-bar-fill"
                  style={{
                    width: `${Math.min(seg.percentage, 100)}%`,
                    background: seg.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="donut-detail-card" style={{ borderColor: selectedSegment.color }}>
        <div className="donut-detail-badge" style={{ background: `${selectedSegment.color}22`, color: selectedSegment.color }}>
          {selectedSegment.name}
        </div>
        <div className="donut-detail-stat" style={{ color: selectedSegment.color }}>
          {selectedSegment.highlight}
        </div>
        <p className="donut-detail-desc">{selectedSegment.description}</p>
        <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span className="tag-pill tag-green" style={{ fontSize: '0.74rem' }}>commonMain</span>
          <span className="tag-pill tag-gold" style={{ fontSize: '0.74rem' }}>klibs.io</span>
          <span className="tag-pill tag-red" style={{ fontSize: '0.74rem' }}>Ktor 3 + Room 2.7</span>
        </div>
      </div>
    </div>
  );
};
