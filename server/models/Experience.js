const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  location: {
    type: String,
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date
  },
  isCurrent: {
    type: Boolean,
    default: false
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship', 'Freelance', 'Contract'],
    required: [true, 'Employment type is required']
  },
  description: {
    type: String,
    required: [true, 'Job description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  responsibilities: [{
    type: String,
    trim: true,
    maxlength: [300, 'Each responsibility cannot exceed 300 characters']
  }],
  achievements: [{
    type: String,
    trim: true,
    maxlength: [300, 'Each achievement cannot exceed 300 characters']
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  skills: [{
    type: String,
    trim: true
  }],
  companyWebsite: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Company website must be a valid URL'
    }
  },
  companyLogo: {
    type: String,
    trim: true
  },
  order: {
    type: Number,
    default: 0
  },
  isVisible: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Virtual for duration calculation
experienceSchema.virtual('duration').get(function() {
  const start = this.startDate;
  const end = this.endDate || new Date();
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const months = Math.floor(diffDays / 30);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ${remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`.trim();
  }
  return `${months} month${months > 1 ? 's' : ''}`;
});

// Index for better query performance
experienceSchema.index({ startDate: -1 });
experienceSchema.index({ company: 1 });
experienceSchema.index({ isVisible: 1 });

module.exports = mongoose.model('Experience', experienceSchema);