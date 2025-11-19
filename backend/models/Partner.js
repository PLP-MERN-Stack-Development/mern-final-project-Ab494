import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Partner name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Partner description is required'],
    maxlength: 500
  },
  logo: {
    type: String,
    default: null // URL to logo image
  },
  website: {
    type: String,
    required: [true, 'Partner website is required'],
    trim: true
  },
  category: {
    type: String,
    enum: ['ngo', 'corporate', 'government', 'local_organization', 'international'],
    required: true
  },
  region: {
    type: String,
    default: 'Global'
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, {
  timestamps: true
});

// Index for search
partnerSchema.index({ name: 'text', description: 'text' });

export default mongoose.model('Partner', partnerSchema);