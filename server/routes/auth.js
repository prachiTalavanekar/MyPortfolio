const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { validateLogin, validateRegister } = require('../middleware/validation');

// POST /api/auth/login - Admin login
router.post('/login', validateLogin, async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email, isActive: true });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // Check if account is locked
    if (user.isLocked) {
      return res.status(423).json({
        success: false,
        message: 'Account temporarily locked due to too many failed login attempts'
      });
    }
    
    // Check password
    const isMatch = await user.comparePassword(password);
    
    if (!isMatch) {
      await user.incLoginAttempts();
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // Reset login attempts on successful login
    await user.resetLoginAttempts();
    
    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Login error',
      error: error.message
    });
  }
});

// POST /api/auth/register - Register admin (protected - only existing admin can create new admin)
router.post('/register', auth, validateRegister, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }
    
    // Create new user
    const user = new User({
      name,
      email,
      password,
      role: 'admin'
    });
    
    await user.save();
    
    res.status(201).json({
      success: true,
      message: 'Admin user created successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Registration error',
      error: error.message
    });
  }
});

// GET /api/auth/me - Get current user info
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password -__v');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user info',
      error: error.message
    });
  }
});

// POST /api/auth/change-password - Change password
router.post('/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password and new password are required'
      });
    }
    
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long'
      });
    }
    
    const user = await User.findById(req.user.userId);
    
    // Verify current password
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }
    
    // Update password
    user.password = newPassword;
    await user.save();
    
    res.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error changing password',
      error: error.message
    });
  }
});

// POST /api/auth/logout - Logout (client-side token removal)
router.post('/logout', auth, (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
});

module.exports = router;