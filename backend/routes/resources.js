import express from 'express';
import {
  getResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource
} from '../controllers/resourceController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getResources);
router.get('/:id', getResourceById);
router.post('/', protect, authorize('mentor', 'admin'), createResource);
router.put('/:id', protect, updateResource);
router.delete('/:id', protect, deleteResource);

export default router;