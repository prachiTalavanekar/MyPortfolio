const express = require('express');
const router = express.Router();
const Certification = require('../models/Certification');
const auth = require('../middleware/auth');
const { validateCertification } = require('../middleware/validation');

// GET /api/certifications - Get all certifications (public)
router.get('/', async (req, res) => {
  try {
    const { provider, category, visible = 'true', featured, expired } = req.query;
    
    let filter = {};
    if (visible === 'true') filter.isVisible = true;
    if (provider) filter.provider = provider;
    if (category) filter.category = category;
    if (featured === 'true') filter.isFeatured = true;
    if (expired === 'false') filter.isExpired = false;
    
    const certifications = await Certification.find(filter)
      .sort({ issueDate: -1 })
      .select('-__v');
    
    res.json({
      success: true,
      count: certifications.length,
      data: certifications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching certifications',
      error: error.message
    });
  }
});

// GET /api/certifications/providers - Get all certification providers (public)
router.get('/providers', async (req, res) => {
  try {
    const providers = await Certification.distinct('provider', { isVisible: true });
    
    res.json({
      success: true,
      data: providers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching certification providers',
      error: error.message
    });
  }
});

// GET /api/certifications/categories - Get all certification categories (public)
router.get('/categories', async (req, res) => {
  try {
    const categories = await Certification.distinct('category', { isVisible: true });
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching certification categories',
      error: error.message
    });
  }
});

// GET /api/certifications/:id - Get single certification (public)
router.get('/:id', async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id).select('-__v');
    
    if (!certification) {
      return res.status(404).json({
        success: false,
        message: 'Certification not found'
      });
    }
    
    res.json({
      success: true,
      data: certification
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching certification',
      error: error.message
    });
  }
});

// POST /api/certifications - Create new certification (admin only)
router.post('/', auth, validateCertification, async (req, res) => {
  try {
    const certification = new Certification(req.body);
    await certification.save();
    
    res.status(201).json({
      success: true,
      message: 'Certification created successfully',
      data: certification
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating certification',
      error: error.message
    });
  }
});

// PUT /api/certifications/:id - Update certification (admin only)
router.put('/:id', auth, validateCertification, async (req, res) => {
  try {
    const certification = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!certification) {
      return res.status(404).json({
        success: false,
        message: 'Certification not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Certification updated successfully',
      data: certification
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating certification',
      error: error.message
    });
  }
});

// DELETE /api/certifications/:id - Delete certification (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    
    if (!certification) {
      return res.status(404).json({
        success: false,
        message: 'Certification not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Certification deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting certification',
      error: error.message
    });
  }
});

// PATCH /api/certifications/:id/verify - Toggle certification verification (admin only)
router.patch('/:id/verify', auth, async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id);
    
    if (!certification) {
      return res.status(404).json({
        success: false,
        message: 'Certification not found'
      });
    }
    
    certification.isVerified = !certification.isVerified;
    await certification.save();
    
    res.json({
      success: true,
      message: `Certification ${certification.isVerified ? 'verified' : 'unverified'} successfully`,
      data: { isVerified: certification.isVerified }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating certification verification',
      error: error.message
    });
  }
});

// GET /api/certifications/search/:query - Search certifications (public)
router.get('/search/:query', async (req, res) => {
  try {
    const { query } = req.params;
    
    const certifications = await Certification.find({
      $and: [
        { isVisible: true },
        {
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { provider: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { skills: { $in: [new RegExp(query, 'i')] } }
          ]
        }
      ]
    }).select('-__v');
    
    res.json({
      success: true,
      count: certifications.length,
      data: certifications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error searching certifications',
      error: error.message
    });
  }
});

module.exports = router;