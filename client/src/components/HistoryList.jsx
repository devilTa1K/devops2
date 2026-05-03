import React from 'react';

const HistoryList = ({ history }) => {
  if (!history || history.length === 0) {
    return null;
  }

  return (
    <div className="glass-panel">
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '600' }}>Recent Predictions</h2>
      <div className="history-list">
        {history.map((item) => (
          <div key={item._id} className={`history-item ${item.result.toLowerCase()}`}>
            <div className="history-text">
              {item.text}
            </div>
            <div className="history-meta">
              <span className={item.result.toLowerCase()}>{item.result}</span>
              <span>{(item.confidence * 100).toFixed(0)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
