const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');
const auth = require('../middleware/auth');

// GET /api/analytics/stats - Get analytics stats (admin only)
router.get('/stats', auth, async (req, res) => {
  try {
    let stats = await Analytics.findOne();
    if (!stats) {
      stats = await Analytics.create({ pageViews: 0 });
    }
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching analytics',
      error: error.message
    });
  }
});

// POST /api/analytics/hit - Increment page views (public)
router.post('/hit', async (req, res) => {
  try {
    let stats = await Analytics.findOne();
    if (!stats) {
      stats = await Analytics.create({ pageViews: 1 });
    } else {
      stats.pageViews += 1;
      stats.lastUpdated = Date.now();
      await stats.save();
    }
    
    res.json({
      success: true,
      data: { pageViews: stats.pageViews }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating analytics',
      error: error.message
    });
  }
});

module.exports = router;
