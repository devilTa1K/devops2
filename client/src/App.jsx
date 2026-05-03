import React, { useState, useEffect } from 'react';
import './index.css';
import AnalysisForm from './components/AnalysisForm';
import ResultDisplay from './components/ResultDisplay';
import HistoryList from './components/HistoryList';
import { analyzeText, getHistory } from './api';
import { Activity } from 'lucide-react';

function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const data = await getHistory();
      setHistory(data);
    } catch (error) {
      console.error("Failed to fetch history", error);
    }
  };

  const handleAnalyze = async (text) => {
    setLoading(true);
    setResult(null);
    try {
      const data = await analyzeText(text);
      setResult(data);
      // Refresh history
      fetchHistory();
    } catch (error) {
      console.error("Failed to analyze", error);
      alert("Analysis failed. Ensure backend services are running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1><Activity className="inline-block mr-2" size={40} /> TruthLens</h1>
        <p>AI-Powered Fake News Detection System</p>
      </header>

      <main>
        <AnalysisForm onAnalyze={handleAnalyze} loading={loading} />
        
        {result && <ResultDisplay result={result} />}

        <HistoryList history={history} />
      </main>
    </div>
  );
}

export default App;
