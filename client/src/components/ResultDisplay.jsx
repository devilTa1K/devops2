import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

const ResultDisplay = ({ result }) => {
  const { result: classification, confidence } = result;
  const isReal = classification === 'REAL';
  const confidencePercent = (confidence * 100).toFixed(1);

  return (
    <div className="glass-panel result-card">
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Analysis Result</h2>
      
      <div className={`result-badge ${isReal ? 'real' : 'fake'}`}>
        {isReal ? <ShieldCheck size={28} /> : <AlertTriangle size={28} />}
        {classification} NEWS
      </div>

      <div style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', margin: '0 auto', fontSize: '0.9rem' }}>
          <span>Confidence Score</span>
          <span style={{ fontWeight: '800', color: isReal ? 'var(--real-color)' : 'var(--fake-color)' }}>
            {confidencePercent}%
          </span>
        </div>
        <div className="confidence-bar-container">
          <div 
            className={`confidence-bar ${isReal ? 'real' : 'fake'}`} 
            style={{ width: `${confidencePercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
