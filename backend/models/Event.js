import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  date: {
    type: Date,
    required: [true, 'Event date is required']
  },
  endDate: {
    type: Date
  },
  location: {
    type: {
      type: String,
      enum: ['online', 'physical', 'hybrid'],
      default: 'online'
    },
    address: String,
    city: String,
    country: String,
    link: String
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  capacity: {
    type: Number,
    default: 100
  },
  category: {
    type: String,
    enum: ['Workshop', 'Webinar', 'Conference', 'Training', 'Networking', 'Other'],
    required: true
  },
  image: String,
  tags: [String],
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  }
}, {
  timestamps: true
});

export default mongoose.model('Event', eventSchema);