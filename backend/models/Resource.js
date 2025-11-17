import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  summary: {
    type: String,
    required: [true, 'Summary is required'],
    maxlength: 300
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  category: {
    type: String,
    enum: ['Rights', 'Health', 'Leadership', 'Entrepreneurship', 'Education', 'Technology', 'Other'],
    required: true
  },
  tags: [{
    type: String
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  region: {
    type: String,
    enum: ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania', 'Global'],
    default: 'Global'
  },
  attachments: [{
    url: String,
    type: String,
    filename: String
  }],
  views: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  }
}, {
  timestamps: true
});

// Index for search
resourceSchema.index({ title: 'text', content: 'text', tags: 'text' });

export default mongoose.model('Resource', resourceSchema);