import Testimonial from '../models/Testimonial.js';

export const getTestimonials = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query;

    const query = { status: 'approved' };

    if (category) query.category = category;
    if (search) {
      query.$text = { $search: search };
    }

    const testimonials = await Testimonial.find(query)
      .populate('createdBy', 'name')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Testimonial.countDocuments(query);

    res.json({
      success: true,
      testimonials,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPendingTestimonials = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const query = { status: 'pending' };

    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Testimonial.countDocuments(query);

    res.json({
      success: true,
      testimonials,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id)
      .populate('createdBy', 'name');

    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json({ success: true, testimonial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create({
      ...req.body,
      createdBy: req.user.id,
      status: 'approved', // Admin-created testimonials are auto-approved
    });

    res.status(201).json({ success: true, testimonial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const submitTestimonial = async (req, res) => {
  try {
    const { name, story, category, anonymous } = req.body;

    const testimonial = await Testimonial.create({
      name,
      story,
      category,
      anonymous: anonymous || false,
      status: 'pending', // Public submissions start as pending
    });

    res.status(201).json({
      success: true,
      message: 'Testimonial submitted successfully and is pending approval',
      testimonial
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const approveTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    // Check authorization
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    testimonial.status = 'approved';
    await testimonial.save();

    res.json({ success: true, testimonial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const rejectTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    // Check authorization
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    testimonial.status = 'rejected';
    await testimonial.save();

    res.json({ success: true, testimonial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    // Check authorization - only admin can update
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({ success: true, testimonial: updatedTestimonial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    // Check authorization - only admin can delete
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await testimonial.deleteOne();
    res.json({ success: true, message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};