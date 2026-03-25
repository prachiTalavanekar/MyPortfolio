const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  pageViews: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Analytics', analyticsSchema);
