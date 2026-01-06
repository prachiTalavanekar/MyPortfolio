const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const { validateContact } = require('../middleware/validation');

// POST /api/contact - Submit contact form (public)
router.post('/', validateContact, async (req, res) => {
  try {
    const contactData = {
      ...req.body,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    };
    
    const contact = new Contact(contactData);
    await contact.save();
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        createdAt: contact.createdAt
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error sending message',
      error: error.message
    });
  }
});

// GET /api/contact - Get all contact messages (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const { 
      status, 
      priority, 
      page = 1, 
      limit = 10, 
      search,
      isSpam = 'false'
    } = req.query;
    
    let filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (isSpam === 'false') filter.isSpam = false;
    
    // Add search functionality
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ];
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('repliedBy', 'name email')
      .select('-__v');
    
    const total = await Contact.countDocuments(filter);
    
    res.json({
      success: true,
      count: contacts.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact messages',
      error: error.message
    });
  }
});

// GET /api/contact/stats - Get contact statistics (admin only)
router.get('/stats', auth, async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    
    const priorityStats = await Contact.aggregate([
      {
        $group: {
          _id: '$priority',
          count: { $sum: 1 }
        }
      }
    ]);
    
    const totalMessages = await Contact.countDocuments();
    const unreadMessages = await Contact.countDocuments({ status: 'new' });
    const spamMessages = await Contact.countDocuments({ isSpam: true });
    
    res.json({
      success: true,
      data: {
        total: totalMessages,
        unread: unreadMessages,
        spam: spamMessages,
        byStatus: stats,
        byPriority: priorityStats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact statistics',
      error: error.message
    });
  }
});

// GET /api/contact/:id - Get single contact message (admin only)
router.get('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
      .populate('repliedBy', 'name email')
      .select('-__v');
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    
    // Mark as read if it's new
    if (contact.status === 'new') {
      contact.status = 'read';
      await contact.save();
    }
    
    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact message',
      error: error.message
    });
  }
});

// PATCH /api/contact/:id/status - Update contact status (admin only)
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'read', 'replied', 'archived'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }
    
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    
    contact.status = status;
    
    if (status === 'replied') {
      contact.repliedAt = new Date();
      contact.repliedBy = req.user.userId;
    }
    
    await contact.save();
    
    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: { status: contact.status }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating contact status',
      error: error.message
    });
  }
});

// PATCH /api/contact/:id/priority - Update contact priority (admin only)
router.patch('/:id/priority', auth, async (req, res) => {
  try {
    const { priority } = req.body;
    
    if (!['low', 'medium', 'high', 'urgent'].includes(priority)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid priority value'
      });
    }
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { priority },
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Contact priority updated successfully',
      data: { priority: contact.priority }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating contact priority',
      error: error.message
    });
  }
});

// PATCH /api/contact/:id/spam - Mark/unmark as spam (admin only)
router.patch('/:id/spam', auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    
    contact.isSpam = !contact.isSpam;
    await contact.save();
    
    res.json({
      success: true,
      message: `Message ${contact.isSpam ? 'marked as spam' : 'unmarked as spam'} successfully`,
      data: { isSpam: contact.isSpam }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating spam status',
      error: error.message
    });
  }
});

// DELETE /api/contact/:id - Delete contact message (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Contact message deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting contact message',
      error: error.message
    });
  }
});

module.exports = router;