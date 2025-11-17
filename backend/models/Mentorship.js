import mongoose from 'mongoose';

const mentorshipSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mentee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  topics: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'active', 'completed', 'cancelled'],
    default: 'pending'
  },
  message: {
    type: String,
    maxlength: 500
  },
  startDate: Date,
  endDate: Date,
  sessions: [{
    date: Date,
    notes: String,
    duration: Number
  }]
}, {
  timestamps: true
});

export default mongoose.model('Mentorship', mentorshipSchema);