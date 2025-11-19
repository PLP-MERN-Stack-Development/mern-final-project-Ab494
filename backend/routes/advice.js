import express from 'express';
import {
  getAdvices,
  getAdviceById,
  createAdvice,
  updateAdvice,
  deleteAdvice
} from '../controllers/adviceController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAdvices);
router.get('/:id', getAdviceById);
router.post('/', protect, authorize('admin'), createAdvice);
router.put('/:id', protect, authorize('admin'), updateAdvice);
router.delete('/:id', protect, authorize('admin'), deleteAdvice);

export default router;