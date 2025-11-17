import Mentorship from '../models/Mentorship.js';
import User from '../models/User.js';

export const getMentors = async (req, res) => {
  try {
    const { skills, region, page = 1, limit = 12 } = req.query;
    
    const query = { role: 'mentor', verified: true };
    
    if (skills) {
      query.skills = { $in: skills.split(',') };
    }
    if (region && region !== 'Global') {
      query.region = region;
    }

    const mentors = await User.find(query)
      .select('-passwordHash')
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await User.countDocuments(query);

    res.json({
      success: true,
      mentors,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const requestMentorship = async (req, res) => {
  try {
    const { mentorId, topics, message } = req.body;

    if (mentorId === req.user.id) {
      return res.status(400).json({ message: 'Cannot request mentorship from yourself' });
    }

    const existingRequest = await Mentorship.findOne({
      mentor: mentorId,
      mentee: req.user.id,
      status: { $in: ['pending', 'accepted', 'active'] }
    });

    if (existingRequest) {
      return res.status(400).json({ message: 'Mentorship request already exists' });
    }

    const mentorship = await Mentorship.create({
      mentor: mentorId,
      mentee: req.user.id,
      topics,
      message
    });

    res.status(201).json({ success: true, mentorship });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMentorshipRequests = async (req, res) => {
  try {
    const requests = await Mentorship.find({
      $or: [
        { mentor: req.user.id },
        { mentee: req.user.id }
      ]
    })
      .populate('mentor', 'name avatar skills')
      .populate('mentee', 'name avatar interests')
      .sort({ createdAt: -1 });

    res.json({ success: true, requests });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMentorshipStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const mentorship = await Mentorship.findById(req.params.id);

    if (!mentorship) {
      return res.status(404).json({ message: 'Mentorship not found' });
    }

    if (mentorship.mentor.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    mentorship.status = status;
    
    if (status === 'accepted') {
      mentorship.startDate = new Date();
    } else if (status === 'completed') {
      mentorship.endDate = new Date();
    }

    await mentorship.save();

    res.json({ success: true, mentorship });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};