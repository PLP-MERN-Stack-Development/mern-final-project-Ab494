import express from 'express';
import {
  getPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner
} from '../controllers/partnerController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPartners);
router.get('/:id', getPartnerById);
router.post('/', protect, authorize('admin'), createPartner);
router.put('/:id', protect, authorize('admin'), updatePartner);
router.delete('/:id', protect, authorize('admin'), deletePartner);

export default router;