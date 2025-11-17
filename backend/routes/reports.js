import express from 'express';
import Report from '../models/Report.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Create report
router.post('/', protect, async (req, res) => {
  try {
    const report = await Report.create({
      ...req.body,
      reporter: req.user.id
    });
    res.status(201).json({ success: true, report });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all reports (admin only)
router.get('/', protect, authorize('admin', 'moderator'), async (req, res) => {
  try {
    const reports = await Report.find()
      .populate('reporter', 'name email')
      .sort({ createdAt: -1 });
    res.json({ success: true, reports });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update report status
router.patch('/:id', protect, authorize('admin', 'moderator'), async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { ...req.body, reviewedBy: req.user.id },
      { new: true }
    );
    res.json({ success: true, report });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;