import Partner from '../models/Partner.js';

export const getPartners = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 20 } = req.query;

    const query = { status: 'active' };

    if (category) query.category = category;
    if (search) {
      query.$text = { $search: search };
    }

    const partners = await Partner.find(query)
      .sort({ featured: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Partner.countDocuments(query);

    res.json({
      success: true,
      partners,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    res.json({ success: true, partner });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPartner = async (req, res) => {
  try {
    const partner = await Partner.create(req.body);

    res.status(201).json({ success: true, partner });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    // Check authorization - only admin can update
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({ success: true, partner: updatedPartner });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    // Check authorization - only admin can delete
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await partner.deleteOne();
    res.json({ success: true, message: 'Partner deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};