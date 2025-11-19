import express from 'express';
import {
  getTestimonials,
  getPendingTestimonials,
  getTestimonialById,
  createTestimonial,
  submitTestimonial,
  approveTestimonial,
  rejectTestimonial,
  updateTestimonial,
  deleteTestimonial
} from '../controllers/testimonialController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTestimonials);
router.get('/pending', protect, authorize('admin'), getPendingTestimonials);
router.get('/:id', getTestimonialById);
router.post('/submit', submitTestimonial); // Public submission
router.post('/', protect, authorize('admin'), createTestimonial);
router.put('/:id/approve', protect, authorize('admin'), approveTestimonial);
router.put('/:id/reject', protect, authorize('admin'), rejectTestimonial);
router.put('/:id', protect, authorize('admin'), updateTestimonial);
router.delete('/:id', protect, authorize('admin'), deleteTestimonial);

export default router;