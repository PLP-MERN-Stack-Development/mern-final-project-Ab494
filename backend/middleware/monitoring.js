import express from 'express';
import mongoose from 'mongoose';

// Simple error logging schema
const ErrorLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  level: { type: String, enum: ['error', 'warn', 'info'], required: true },
  message: { type: String, required: true },
  stack: { type: String },
  url: { type: String },
  method: { type: String },
  userAgent: { type: String },
  userId: { type: String },
  requestBody: { type: Object },
  statusCode: { type: Number },
  responseTime: { type: Number }
});

const ErrorLog = mongoose.model('ErrorLog', ErrorLogSchema);

// Performance monitoring schema
const PerformanceLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  endpoint: { type: String, required: true },
  method: { type: String, required: true },
  responseTime: { type: Number, required: true },
  statusCode: { type: Number },
  userId: { type: String },
  query: { type: Object }
});

const PerformanceLog = mongoose.model('PerformanceLog', PerformanceLogSchema);

// Error logging middleware
export const logError = async (error, req, res, next) => {
  try {
    await ErrorLog.create({
      level: 'error',
      message: error.message,
      stack: error.stack,
      url: req.originalUrl,
      method: req.method,
      userAgent: req.get('User-Agent'),
      userId: req.user?.id,
      requestBody: req.body,
      statusCode: res.statusCode
    });
  } catch (logError) {
    console.error('Failed to log error:', logError);
  }
  
  next(error);
};

// Performance monitoring middleware
export const monitorPerformance = async (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', async () => {
    try {
      await PerformanceLog.create({
        endpoint: req.route?.path || req.originalUrl,
        method: req.method,
        responseTime: Date.now() - start,
        statusCode: res.statusCode,
        userId: req.user?.id,
        query: req.query
      });
    } catch (perfError) {
      console.error('Failed to log performance:', perfError);
    }
  });
  
  next();
};

// Health check endpoint
export const healthCheck = async (req, res) => {
  try {
    // Check database connection
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    
    // Get recent error count (last 24 hours)
    const recentErrors = await ErrorLog.countDocuments({
      timestamp: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      level: 'error'
    });
    
    // Get average response time (last 100 requests)
    const recentPerformance = await PerformanceLog.find()
      .sort({ timestamp: -1 })
      .limit(100);
    
    const avgResponseTime = recentPerformance.length > 0 
      ? recentPerformance.reduce((sum, log) => sum + log.responseTime, 0) / recentPerformance.length
      : 0;
    
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: dbStatus,
        uptime: process.uptime()
      },
      metrics: {
        recentErrors: recentErrors,
        avgResponseTime: Math.round(avgResponseTime),
        activeConnections: mongoose.connection.client?.topology?.s?.serverDetails?.connections?.length || 0
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};

// Get error logs (Admin only)
export const getErrorLogs = async (req, res) => {
  try {
    const { level, limit = 50, page = 1 } = req.query;
    const skip = (page - 1) * limit;
    
    const query = level ? { level } : {};
    
    const logs = await ErrorLog.find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await ErrorLog.countDocuments(query);
    
    res.json({
      success: true,
      logs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get performance metrics (Admin only)
export const getPerformanceMetrics = async (req, res) => {
  try {
    const { period = '1h' } = req.query;
    
    let timeFilter = {};
    switch (period) {
      case '1h':
        timeFilter = { $gte: new Date(Date.now() - 60 * 60 * 1000) };
        break;
      case '24h':
        timeFilter = { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) };
        break;
      case '7d':
        timeFilter = { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) };
        break;
      default:
        timeFilter = { $gte: new Date(Date.now() - 60 * 60 * 1000) };
    }
    
    const metrics = await PerformanceLog.aggregate([
      { $match: { timestamp: timeFilter } },
      {
        $group: {
          _id: null,
          avgResponseTime: { $avg: '$responseTime' },
          maxResponseTime: { $max: '$responseTime' },
          minResponseTime: { $min: '$responseTime' },
          requestCount: { $sum: 1 },
          errorCount: {
            $sum: { $cond: [{ $gte: ['$statusCode', 400] }, 1, 0] }
          }
        }
      }
    ]);
    
    const endpointMetrics = await PerformanceLog.aggregate([
      { $match: { timestamp: timeFilter } },
      {
        $group: {
          _id: { endpoint: '$endpoint', method: '$method' },
          avgResponseTime: { $avg: '$responseTime' },
          requestCount: { $sum: 1 },
          errorCount: {
            $sum: { $cond: [{ $gte: ['$statusCode', 400] }, 1, 0] }
          }
        }
      },
      { $sort: { requestCount: -1 } },
      { $limit: 10 }
    ]);
    
    res.json({
      success: true,
      period,
      metrics: metrics[0] || {
        avgResponseTime: 0,
        maxResponseTime: 0,
        minResponseTime: 0,
        requestCount: 0,
        errorCount: 0
      },
      topEndpoints: endpointMetrics
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clean up old logs (Admin only - runs automatically)
export const cleanupOldLogs = async () => {
  try {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    
    const errorResult = await ErrorLog.deleteMany({ timestamp: { $lt: thirtyDaysAgo } });
    const performanceResult = await PerformanceLog.deleteMany({ timestamp: { $lt: thirtyDaysAgo } });
    
    console.log(`Cleaned up ${errorResult.deletedCount} error logs and ${performanceResult.deletedCount} performance logs`);
  } catch (error) {
    console.error('Failed to cleanup old logs:', error);
  }
};

// Set up automatic cleanup every 24 hours
setInterval(cleanupOldLogs, 24 * 60 * 60 * 1000);