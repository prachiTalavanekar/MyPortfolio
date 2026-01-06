const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  longDescription: {
    type: String,
    trim: true,
    maxlength: [2000, 'Long description cannot exceed 2000 characters']
  },
  technologies: [{
    type: String,
    trim: true
  }],
  features: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['Planning', 'In Progress', 'Completed', 'On Hold'],
    default: 'In Progress'
  },
  github: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'GitHub URL must be a valid URL'
    }
  },
  demo: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Demo URL must be a valid URL'
    }
  },
  image: {
    type: String,
    trim: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  priority: {
    type: Number,
    default: 0
  },
  isVisible: {
    type: Boolean,
    default: true
  },
  tags: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ status: 1, priority: -1 });
projectSchema.index({ technologies: 1 });
projectSchema.index({ isVisible: 1 });

module.exports = mongoose.model('Project', projectSchema);