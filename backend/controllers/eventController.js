import Event from '../models/Event.js';

export const getEvents = async (req, res) => {
  try {
    const { category, status = 'upcoming', page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (category) query.category = category;
    if (status) query.status = status;

    const events = await Event.find(query)
      .populate('host', 'name avatar')
      .sort({ date: 1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Event.countDocuments(query);

    res.json({
      success: true,
      events,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('host', 'name avatar bio')
      .populate('attendees', 'name avatar');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ success: true, event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      host: req.user.id
    });

    res.status(201).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.attendees.includes(req.user.id)) {
      return res.status(400).json({ message: 'Already registered' });
    }

    if (event.attendees.length >= event.capacity) {
      return res.status(400).json({ message: 'Event is full' });
    }

    event.attendees.push(req.user.id);
    await event.save();

    res.json({ success: true, message: 'Successfully registered', event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const unregisterFromEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    event.attendees = event.attendees.filter(
      attendee => attendee.toString() !== req.user.id
    );
    await event.save();

    res.json({ success: true, message: 'Successfully unregistered', event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};