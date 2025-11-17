import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    enum: ['user', 'mentor', 'moderator', 'admin'],
    default: 'user'
  },
  skills: [{
    type: String
  }],
  bio: {
    type: String,
    maxlength: 500
  },
  verified: {
    type: Boolean,
    default: false
  },
  region: {
    type: String,
    enum: ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania', 'Global'],
    default: 'Global'
  },
  avatar: {
    type: String,
    default: ''
  },
  interests: [{
    type: String
  }],
  languages: [{
    type: String,
    enum: ['English', 'French', 'Swahili', 'Arabic']
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('passwordHash')) return next();
  this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.passwordHash);
};

export default mongoose.model('User', userSchema);