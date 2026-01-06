const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: [true, 'Degree is required'],
    trim: true,
    maxlength: [150, 'Degree cannot exceed 150 characters']
  },
  fieldOfStudy: {
    type: String,
    trim: true,
    maxlength: [100, 'Field of study cannot exceed 100 characters']
  },
  institution: {
    type: String,
    required: [true, 'Institution name is required'],
    trim: true,
    maxlength: [150, 'Institution name cannot exceed 150 characters']
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
  grade: {
    type: String,
    trim: true,
    maxlength: [50, 'Grade cannot exceed 50 characters']
  },
  cgpa: {
    type: Number,
    min: [0, 'CGPA cannot be negative'],
    max: [10, 'CGPA cannot exceed 10']
  },
  percentage: {
    type: Number,
    min: [0, 'Percentage cannot be negative'],
    max: [100, 'Percentage cannot exceed 100']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  subjects: [{
    type: String,
    trim: true,
    maxlength: [100, 'Subject name cannot exceed 100 characters']
  }],
  achievements: [{
    type: String,
    trim: true,
    maxlength: [300, 'Achievement cannot exceed 300 characters']
  }],
  activities: [{
    type: String,
    trim: true,
    maxlength: [200, 'Activity cannot exceed 200 characters']
  }],
  institutionWebsite: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Institution website must be a valid URL'
    }
  },
  institutionLogo: {
    type: String,
    trim: true
  },
  certificate: {
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
educationSchema.virtual('duration').get(function() {
  const start = this.startDate;
  const end = this.endDate || new Date();
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  
  if (startYear === endYear) {
    return `${startYear}`;
  }
  return `${startYear} - ${this.isCurrent ? 'Present' : endYear}`;
});

// Index for better query performance
educationSchema.index({ startDate: -1 });
educationSchema.index({ institution: 1 });
educationSchema.index({ isVisible: 1 });

module.exports = mongoose.model('Education', educationSchema);