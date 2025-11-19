import express from 'express';
import {
  subscribe,
  unsubscribe,
  getSubscribers,
  getSubscriberById,
  deleteSubscriber
} from '../controllers/subscriberController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/subscribe', subscribe);
router.post('/unsubscribe', unsubscribe);

// Admin routes
router.get('/', protect, authorize('admin'), getSubscribers);
router.get('/:id', protect, authorize('admin'), getSubscriberById);
router.delete('/:id', protect, authorize('admin'), deleteSubscriber);

export default router;