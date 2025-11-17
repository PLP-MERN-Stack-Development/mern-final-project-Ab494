import express from 'express';
import {
  getEvents,
  getEventById,
  createEvent,
  registerForEvent,
  unregisterFromEvent
} from '../controllers/eventController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', protect, authorize('mentor', 'admin'), createEvent);
router.post('/:id/register', protect, registerForEvent);
router.delete('/:id/register', protect, unregisterFromEvent);

export default router;