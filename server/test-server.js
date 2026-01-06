const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Test MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('✅ MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Test server running on port ${PORT}`);
  console.log(`🔗 Test URL: http://localhost:${PORT}/test`);
});