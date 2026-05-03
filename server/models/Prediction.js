const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    enum: ['REAL', 'FAKE'],
    required: true,
  },
  confidence: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Prediction', PredictionSchema);
