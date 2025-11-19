import express from 'express';
import { getNews } from '../controllers/newsController.js';

const router = express.Router();

// GET /api/news - Fetch women's empowerment news
router.get('/', getNews);

export default router;