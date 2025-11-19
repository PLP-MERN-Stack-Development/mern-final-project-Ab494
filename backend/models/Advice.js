import mongoose from 'mongoose';

const adviceSchema = new mongoose.Schema({
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
    enum: ['financial', 'mental health', 'body positivity', 'general support'],
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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
adviceSchema.index({ title: 'text', content: 'text' });

export default mongoose.model('Advice', adviceSchema);