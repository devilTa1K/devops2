const express = require('express');
const router = express.Router();
const { analyzeText, getHistory } = require('../controllers/analysisController');

router.post('/analyze', analyzeText);
router.get('/history', getHistory);

module.exports = router;
