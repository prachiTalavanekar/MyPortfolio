const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const initializeDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Connected to MongoDB');
    
    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (existingAdmin) {
      console.log('ℹ️  Admin user already exists');
      return;
    }
    
    // Create default admin user
    const adminUser = new User({
      name: 'Prachi Pravin Talavanekar',
      email: process.env.ADMIN_EMAIL || 'prachi@example.com',
      password: process.env.ADMIN_PASSWORD || 'admin123',
      role: 'admin'
    });
    
    await adminUser.save();
    console.log('✅ Default admin user created');
    console.log(`📧 Email: ${adminUser.email}`);
    console.log(`🔑 Password: ${process.env.ADMIN_PASSWORD || 'admin123'}`);
    
    // Create indexes for better performance
    await createIndexes();
    
    console.log('🎉 Database initialization completed successfully!');
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
};

const createIndexes = async () => {
  try {
    // Create text indexes for search functionality
    const Project = require('../models/Project');
    const Experience = require('../models/Experience');
    const Education = require('../models/Education');
    const Skill = require('../models/Skill');
    const Certification = require('../models/Certification');
    const Contact = require('../models/Contact');
    
    // Ensure indexes are created
    await Project.createIndexes();
    await Experience.createIndexes();
    await Education.createIndexes();
    await Skill.createIndexes();
    await Certification.createIndexes();
    await Contact.createIndexes();
    
    console.log('✅ Database indexes created');
  } catch (error) {
    console.error('❌ Error creating indexes:', error.message);
  }
};

// Run the initialization
if (require.main === module) {
  initializeDatabase();
}

module.exports = { initializeDatabase, createIndexes };