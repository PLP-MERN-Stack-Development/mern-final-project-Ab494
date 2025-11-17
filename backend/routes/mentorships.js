import express from 'express';
import {
  getMentors,
  requestMentorship,
  getMentorshipRequests,
  updateMentorshipStatus
} from '../controllers/mentorshipController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/mentors', getMentors);
router.post('/request', protect, requestMentorship);
router.get('/requests', protect, getMentorshipRequests);
router.patch('/:id/status', protect, updateMentorshipStatus);

export default router;