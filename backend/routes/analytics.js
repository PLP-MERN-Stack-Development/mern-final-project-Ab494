import express from 'express';
import { getAnalytics, getImpactStats } from '../controllers/analyticsController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, authorize('admin'), getAnalytics);
router.get('/impact', getImpactStats);

export default router;