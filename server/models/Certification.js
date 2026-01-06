const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Certification title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  provider: {
    type: String,
    required: [true, 'Certification provider is required'],
    trim: true,
    maxlength: [100, 'Provider cannot exceed 100 characters']
  },
  issueDate: {
    type: Date,
    required: [true, 'Issue date is required']
  },
  expiryDate: {
    type: Date
  },
  credentialId: {
    type: String,
    trim: true,
    maxlength: [100, 'Credential ID cannot exceed 100 characters']
  },
  credentialUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Credential URL must be a valid URL'
    }
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  skills: [{
    type: String,
    trim: true,
    maxlength: [50, 'Skill cannot exceed 50 characters']
  }],
  topics: [{
    type: String,
    trim: true,
    maxlength: [100, 'Topic cannot exceed 100 characters']
  }],
  duration: {
    type: String,
    trim: true,
    maxlength: [50, 'Duration cannot exceed 50 characters']
  },
  certificateImage: {
    type: String,
    trim: true
  },
  providerLogo: {
    type: String,
    trim: true
  },
  grade: {
    type: String,
    trim: true,
    maxlength: [20, 'Grade cannot exceed 20 characters']
  },
  score: {
    type: Number,
    min: [0, 'Score cannot be negative']
  },
  maxScore: {
    type: Number,
    min: [0, 'Max score cannot be negative']
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isExpired: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: [
      'Programming',
      'Web Development',
      'Mobile Development',
      'Data Science',
      'Machine Learning',
      'Cloud Computing',
      'DevOps',
      'Cybersecurity',
      'Database',
      'Design',
      'Project Management',
      'Soft Skills',
      'Other'
    ],
    default: 'Other'
  },
  order: {
    type: Number,
    default: 0
  },
  isVisible: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Virtual to check if certification is expired
certificationSchema.virtual('expired').get(function() {
  if (!this.expiryDate) return false;
  return new Date() > this.expiryDate;
});

// Pre-save middleware to update isExpired field
certificationSchema.pre('save', function(next) {
  if (this.expiryDate) {
    this.isExpired = new Date() > this.expiryDate;
  }
  next();
});

// Index for better query performance
certificationSchema.index({ issueDate: -1 });
certificationSchema.index({ provider: 1 });
certificationSchema.index({ category: 1 });
certificationSchema.index({ isVisible: 1, isFeatured: 1 });
certificationSchema.index({ title: 'text', provider: 'text' }); // Text search index

module.exports = mongoose.model('Certification', certificationSchema);