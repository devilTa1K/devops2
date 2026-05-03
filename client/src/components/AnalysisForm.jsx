import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const AnalysisForm = ({ onAnalyze, loading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAnalyze(text);
    }
  };

  return (
    <div className="glass-panel">
      <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>Analyze News Content</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          placeholder="Paste news article content or a controversial claim here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn" disabled={loading || !text.trim()}>
          {loading ? (
            <>
              <Loader2 className="spinner" size={20} /> Analyzing...
            </>
          ) : (
            <>
              <Send size={20} /> Detect Truth
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AnalysisForm;
