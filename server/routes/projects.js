const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');
const { validateProject } = require('../middleware/validation');

// GET /api/projects - Get all projects (public)
router.get('/', async (req, res) => {
  try {
    const { status, technology, visible = 'true' } = req.query;
    
    let filter = {};
    if (visible === 'true') filter.isVisible = true;
    if (status) filter.status = status;
    if (technology) filter.technologies = { $in: [technology] };
    
    const projects = await Project.find(filter)
      .sort({ priority: -1, createdAt: -1 })
      .select('-__v');
    
    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching projects',
      error: error.message
    });
  }
});

// GET /api/projects/:id - Get single project (public)
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).select('-__v');
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching project',
      error: error.message
    });
  }
});

// POST /api/projects - Create new project (admin only)
router.post('/', auth, validateProject, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating project',
      error: error.message
    });
  }
});

// PUT /api/projects/:id - Update project (admin only)
router.put('/:id', auth, validateProject, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating project',
      error: error.message
    });
  }
});

// DELETE /api/projects/:id - Delete project (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting project',
      error: error.message
    });
  }
});

// PATCH /api/projects/:id/visibility - Toggle project visibility (admin only)
router.patch('/:id/visibility', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    project.isVisible = !project.isVisible;
    await project.save();
    
    res.json({
      success: true,
      message: `Project ${project.isVisible ? 'shown' : 'hidden'} successfully`,
      data: { isVisible: project.isVisible }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating project visibility',
      error: error.message
    });
  }
});

module.exports = router;