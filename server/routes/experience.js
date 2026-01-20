const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const auth = require('../middleware/auth');
const { validateExperience } = require('../middleware/validation');

// GET /api/experience - Get all experience records (public)
router.get('/', async (req, res) => {
    try {
        const { visible = 'true' } = req.query;

        let filter = {};
        if (visible === 'true') filter.isVisible = true;

        const experience = await Experience.find(filter)
            .sort({ startDate: -1 })
            .select('-__v');

        res.json({
            success: true,
            count: experience.length,
            data: experience
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching experience records',
            error: error.message
        });
    }
});

// GET /api/experience/:id - Get single experience record (public)
router.get('/:id', async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id).select('-__v');

        if (!experience) {
            return res.status(404).json({
                success: false,
                message: 'Experience record not found'
            });
        }

        res.json({
            success: true,
            data: experience
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching experience record',
            error: error.message
        });
    }
});

// POST /api/experience - Create new experience record (admin only)
router.post('/', auth, validateExperience, async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();

        res.status(201).json({
            success: true,
            message: 'Experience record created successfully',
            data: experience
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating experience record',
            error: error.message
        });
    }
});

// PUT /api/experience/:id - Update experience record (admin only)
router.put('/:id', auth, validateExperience, async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!experience) {
            return res.status(404).json({
                success: false,
                message: 'Experience record not found'
            });
        }

        res.json({
            success: true,
            message: 'Experience record updated successfully',
            data: experience
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating experience record',
            error: error.message
        });
    }
});

// DELETE /api/experience/:id - Delete experience record (admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);

        if (!experience) {
            return res.status(404).json({
                success: false,
                message: 'Experience record not found'
            });
        }

        res.json({
            success: true,
            message: 'Experience record deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting experience record',
            error: error.message
        });
    }
});

// PATCH /api/experience/:id/visibility - Toggle experience visibility (admin only)
router.patch('/:id/visibility', auth, async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);

        if (!experience) {
            return res.status(404).json({
                success: false,
                message: 'Experience record not found'
            });
        }

        experience.isVisible = !experience.isVisible;
        await experience.save();

        res.json({
            success: true,
            message: `Experience record ${experience.isVisible ? 'shown' : 'hidden'} successfully`,
            data: { isVisible: experience.isVisible }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating experience visibility',
            error: error.message
        });
    }
});

module.exports = router;