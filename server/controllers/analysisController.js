const axios = require('axios');
const Prediction = require('../models/Prediction');

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:8000/predict';

exports.analyzeText = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'Text is required' });
    }

    // Call ML Service
    const response = await axios.post(ML_SERVICE_URL, { text });
    const { result, confidence } = response.data;

    // Save to DB
    const prediction = new Prediction({
      text,
      result,
      confidence
    });
    await prediction.save();

    res.json({ result, confidence, id: prediction._id });
  } catch (error) {
    console.error('Analysis error:', error.message);
    res.status(500).json({ error: 'Failed to analyze text. Ensure ML service is running.' });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await Prediction.find().sort({ createdAt: -1 }).limit(50);
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};
