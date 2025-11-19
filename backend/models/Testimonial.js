import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  story: {
    type: String,
    required: [true, 'Story is required'],
    maxlength: 2000
  },
  category: {
    type: String,
    enum: ['financial', 'mental health', 'body positivity', 'career advancement', 'general'],
    required: true
  },
  image: {
    type: String,
    default: null
  },
  anonymous: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Allow public submissions without user login
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'archived'],
    default: 'pending' // Default to pending for moderation
  }
}, {
  timestamps: true
});

// Index for search
testimonialSchema.index({ name: 'text', story: 'text' });

export default mongoose.model('Testimonial', testimonialSchema);