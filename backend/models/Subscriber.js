import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(email) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'Please enter a valid email'
    }
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  optInConfirmed: {
    type: Boolean,
    default: false
  },
  confirmationToken: {
    type: String,
    default: null
  },
  confirmedAt: {
    type: Date,
    default: null
  },
  unsubscribedAt: {
    type: Date,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for active subscribers
subscriberSchema.index({ isActive: 1 });

export default mongoose.model('Subscriber', subscriberSchema);