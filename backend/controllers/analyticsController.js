import User from '../models/User.js';
import Resource from '../models/Resource.js';
import Event from '../models/Event.js';
import Mentorship from '../models/Mentorship.js';

export const getAnalytics = async (req, res) => {
  try {
    // User statistics
    const totalUsers = await User.countDocuments();
    const usersByRole = await User.aggregate([
      { $group: { _id: '$role', count: { $sum: 1 } } }
    ]);

    // Mentorship statistics
    const totalMentorships = await Mentorship.countDocuments();
    const completedMentorships = await Mentorship.countDocuments({ status: 'completed' });
    const activeMentorships = await Mentorship.countDocuments({ status: 'active' });

    // Resource statistics
    const totalResources = await Resource.countDocuments({ status: 'published' });
    const resourcesByCategory = await Resource.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    const topResources = await Resource.find({ status: 'published' })
      .sort({ views: -1 })
      .limit(5)
      .select('title views category');

    // Event statistics
    const totalEvents = await Event.countDocuments();
    const upcomingEvents = await Event.countDocuments({ status: 'upcoming' });
    const eventAttendance = await Event.aggregate([
      { $project: { attendeeCount: { $size: '$attendees' }, date: 1 } },
      { $sort: { date: -1 } },
      { $limit: 10 }
    ]);

    // User growth over time (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const userGrowth = await User.aggregate([
      { $match: { createdAt: { $gte: sixMonthsAgo } } },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    res.json({
      success: true,
      analytics: {
        users: {
          total: totalUsers,
          byRole: usersByRole,
          growth: userGrowth
        },
        mentorships: {
          total: totalMentorships,
          completed: completedMentorships,
          active: activeMentorships
        },
        resources: {
          total: totalResources,
          byCategory: resourcesByCategory,
          topViewed: topResources
        },
        events: {
          total: totalEvents,
          upcoming: upcomingEvents,
          attendance: eventAttendance
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getImpactStats = async (req, res) => {
  try {
    const stats = {
      totalUsers: await User.countDocuments(),
      totalMentorships: await Mentorship.countDocuments({ status: { $in: ['completed', 'active'] } }),
      totalResources: await Resource.countDocuments({ status: 'published' }),
      totalEvents: await Event.countDocuments({ status: { $in: ['completed', 'upcoming'] } }),
      resourceViews: await Resource.aggregate([
        { $group: { _id: null, total: { $sum: '$views' } } }
      ]),
      eventAttendees: await Event.aggregate([
        { $project: { attendeeCount: { $size: '$attendees' } } },
        { $group: { _id: null, total: { $sum: '$attendeeCount' } } }
      ])
    };

    res.json({ success: true, stats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};