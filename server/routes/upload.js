const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

// POST /api/upload - Upload image as base64 (admin only)
router.post('/', auth, (req, res) => {
  try {
    const { data, mimeType, fileName } = req.body;

    if (!data || !mimeType) {
      return res.status(400).json({ success: false, message: 'Missing image data or mimeType' });
    }

    if (!ALLOWED_TYPES.includes(mimeType)) {
      return res.status(400).json({ success: false, message: 'Only JPEG, PNG, WebP and GIF images are allowed' });
    }

    // Estimate decoded size: base64 is ~4/3 of original
    const estimatedBytes = (data.length * 3) / 4;
    if (estimatedBytes > MAX_SIZE_BYTES) {
      return res.status(400).json({ success: false, message: 'Image must be under 5MB' });
    }

    const dataUrl = `data:${mimeType};base64,${data}`;

    res.json({ success: true, url: dataUrl, fileName });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Upload failed', error: error.message });
  }
});

module.exports = router;
