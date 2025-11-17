import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';
import { generalLimiter } from './middleware/rateLimiter.js';
import { 
  logError, 
  monitorPerformance, 
  healthCheck, 
  getErrorLogs, 
  getPerformanceMetrics 
} from './middleware/monitoring.js';
import { protect } from './middleware/auth.js';

// Route imports
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import resourceRoutes from './routes/resources.js';
import eventRoutes from './routes/events.js';
import mentorshipRoutes from './routes/mentorships.js';
import reportRoutes from './routes/reports.js';
import analyticsRoutes from './routes/analytics.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(mongoSanitize());
app.use(generalLimiter);

// Add performance monitoring
app.use(monitorPerformance);

// Enhanced health check with monitoring data
app.get('/api/health', healthCheck);

// Monitoring routes (Admin only)
app.get('/api/monitoring/errors', protect, getErrorLogs);
app.get('/api/monitoring/performance', protect, getPerformanceMetrics);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/mentorships', mentorshipRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/analytics', analyticsRoutes);

// Error handling middleware
app.use(logError);
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Monitoring endpoints available at /api/monitoring/*`);
});

// Export app for testing
export default app;
