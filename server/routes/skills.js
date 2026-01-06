const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const auth = require('../middleware/auth');
const { validateSkill } = require('../middleware/validation');

// GET /api/skills - Get all skills (public)
router.get('/', async (req, res) => {
  try {
    const { category, level, visible = 'true', featured } = req.query;
    
    let filter = {};
    if (visible === 'true') filter.isVisible = true;
    if (category) filter.category = category;
    if (level) filter.level = level;
    if (featured === 'true') filter.isFeatured = true;
    
    const skills = await Skill.find(filter)
      .sort({ category: 1, order: 1, name: 1 })
      .select('-__v');
    
    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});
    
    res.json({
      success: true,
      count: skills.length,
      data: skills,
      grouped: groupedSkills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching skills',
      error: error.message
    });
  }
});

// GET /api/skills/categories - Get all skill categories (public)
router.get('/categories', async (req, res) => {
  try {
    const categories = await Skill.distinct('category', { isVisible: true });
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching skill categories',
      error: error.message
    });
  }
});

// GET /api/skills/:id - Get single skill (public)
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id)
      .populate('projects', 'title description')
      .select('-__v');
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }
    
    res.json({
      success: true,
      data: skill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching skill',
      error: error.message
    });
  }
});

// POST /api/skills - Create new skill (admin only)
router.post('/', auth, validateSkill, async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    
    res.status(201).json({
      success: true,
      message: 'Skill created successfully',
      data: skill
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating skill',
      error: error.message
    });
  }
});

// PUT /api/skills/:id - Update skill (admin only)
router.put('/:id', auth, validateSkill, async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Skill updated successfully',
      data: skill
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating skill',
      error: error.message
    });
  }
});

// DELETE /api/skills/:id - Delete skill (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Skill deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting skill',
      error: error.message
    });
  }
});

// PATCH /api/skills/:id/featured - Toggle skill featured status (admin only)
router.patch('/:id/featured', auth, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }
    
    skill.isFeatured = !skill.isFeatured;
    await skill.save();
    
    res.json({
      success: true,
      message: `Skill ${skill.isFeatured ? 'featured' : 'unfeatured'} successfully`,
      data: { isFeatured: skill.isFeatured }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating skill featured status',
      error: error.message
    });
  }
});

// GET /api/skills/search/:query - Search skills (public)
router.get('/search/:query', async (req, res) => {
  try {
    const { query } = req.params;
    
    const skills = await Skill.find({
      $and: [
        { isVisible: true },
        {
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { category: { $regex: query, $options: 'i' } }
          ]
        }
      ]
    }).select('-__v');
    
    res.json({
      success: true,
      count: skills.length,
      data: skills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error searching skills',
      error: error.message
    });
  }
});

module.exports = router;