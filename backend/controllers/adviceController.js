import Advice from '../models/Advice.js';

export const getAdvices = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query;

    const query = { status: 'published' };

    if (category) query.category = category;
    if (search) {
      query.$text = { $search: search };
    }

    const advices = await Advice.find(query)
      .populate('createdBy', 'name')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Advice.countDocuments(query);

    res.json({
      success: true,
      advices,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdviceById = async (req, res) => {
  try {
    const advice = await Advice.findById(req.params.id)
      .populate('createdBy', 'name');

    if (!advice) {
      return res.status(404).json({ message: 'Advice not found' });
    }

    res.json({ success: true, advice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAdvice = async (req, res) => {
  try {
    const advice = await Advice.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json({ success: true, advice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAdvice = async (req, res) => {
  try {
    const advice = await Advice.findById(req.params.id);

    if (!advice) {
      return res.status(404).json({ message: 'Advice not found' });
    }

    // Check authorization - only admin can update
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updatedAdvice = await Advice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({ success: true, advice: updatedAdvice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAdvice = async (req, res) => {
  try {
    const advice = await Advice.findById(req.params.id);

    if (!advice) {
      return res.status(404).json({ message: 'Advice not found' });
    }

    // Check authorization - only admin can delete
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await advice.deleteOne();
    res.json({ success: true, message: 'Advice deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};