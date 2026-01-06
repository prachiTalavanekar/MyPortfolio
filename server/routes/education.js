const express = require('express');
const router = express.Router();
const Education = require('../models/Education');
const auth = require('../middleware/auth');
const { validateEducation } = require('../middleware/validation');

// GET /api/education - Get all education records (public)
router.get('/', async (req, res) => {
    try {
        const { visible = 'true' } = req.query;

        let filter = {};
        if (visible === 'true') filter.isVisible = true;

        const education = await Education.find(filter)
            .sort({ startDate: -1 })
            .select('-__v');

        res.json({
            success: true,
            count: education.length,
            data: education
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching education records',
            error: error.message
        });
    }
});

// GET /api/education/:id - Get single education record (public)
router.get('/:id', async (req, res) => {
    try {
        const education = await Education.findById(req.params.id).select('-__v');

        if (!education) {
            return res.status(404).json({
                success: false,
                message: 'Education record not found'
            });
        }

        res.json({
            success: true,
            data: education
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching education record',
            error: error.message
        });
    }
});

// POST /api/education - Create new education record (admin only)
router.post('/', auth, validateEducation, async (req, res) => {
    try {
        const education = new Education(req.body);
        await education.save();

        res.status(201).json({
            success: true,
            message: 'Education record created successfully',
            data: education
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating education record',
            error: error.message
        });
    }
});

// PUT /api/education/:id - Update education record (admin only)
router.put('/:id', auth, validateEducation, async (req, res) => {
    try {
        const education = await Education.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!education) {
            return res.status(404).json({
                success: false,
                message: 'Education record not found'
            });
        }

        res.json({
            success: true,
            message: 'Education record updated successfully',
            data: education
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating education record',
            error: error.message
        });
    }
});

// DELETE /api/education/:id - Delete education record (admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const education = await Education.findByIdAndDelete(req.params.id);

        if (!education) {
            return res.status(404).json({
                success: false,
                message: 'Education record not found'
            });
        }

        res.json({
            success: true,
            message: 'Education record deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting education record',
            error: error.message
        });
    }
});

// PATCH /api/education/:id/visibility - Toggle education visibility (admin only)
router.patch('/:id/visibility', auth, async (req, res) => {
    try {
        const education = await Education.findById(req.params.id);

        if (!education) {
            return res.status(404).json({
                success: false,
                message: 'Education record not found'
            });
        }

        education.isVisible = !education.isVisible;
        await education.save();

        res.json({
            success: true,
            message: `Education record ${education.isVisible ? 'shown' : 'hidden'} successfully`,
            data: { isVisible: education.isVisible }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating education visibility',
            error: error.message
        });
    }
});

module.exports = router;