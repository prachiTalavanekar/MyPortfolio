#!/usr/bin/env node

console.log('🔄 Starting Portfolio Backend Server...\n');

// Check Node.js version
const nodeVersion = process.version;
console.log(`📦 Node.js version: ${nodeVersion}`);

// Check if required files exist
const fs = require('fs');
const path = require('path');

const requiredFiles = [
  '.env',
  'server.js',
  'package.json'
];

console.log('🔍 Checking required files...');
requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file} - Found`);
  } else {
    console.log(`❌ ${file} - Missing`);
  }
});

// Check environment variables
console.log('\n🔧 Environment Configuration:');
require('dotenv').config();

const requiredEnvVars = [
  'MONGODB_URI',
  'JWT_SECRET',
  'PORT'
];

requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar];
  if (value) {
    console.log(`✅ ${envVar} - Set`);
  } else {
    console.log(`⚠️  ${envVar} - Not set (using default)`);
  }
});

// Test MongoDB connection
console.log('\n🗄️  Testing MongoDB connection...');
const mongoose = require('mongoose');

const testConnection = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
    console.log(`🔗 Connecting to: ${mongoURI.replace(/\/\/.*@/, '//***:***@')}`);
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // 5 second timeout
    });
    
    console.log('✅ MongoDB connection successful');
    await mongoose.connection.close();
    
    // Start the main server
    console.log('\n🚀 Starting main server...\n');
    require('./server.js');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.log('\n💡 Troubleshooting tips:');
    console.log('   1. Make sure MongoDB is running locally');
    console.log('   2. Check your MONGODB_URI in .env file');
    console.log('   3. If using MongoDB Atlas, check your connection string');
    console.log('   4. Verify network connectivity');
    
    console.log('\n🔄 Starting server without database connection...');
    require('./server.js');
  }
};

testConnection();