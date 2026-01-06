const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true,
    maxlength: [100, 'Skill name cannot exceed 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Skill category is required'],
    enum: [
      'Programming Languages',
      'Frontend',
      'Backend',
      'Database',
      'Tools & Technologies',
      'Frameworks',
      'Cloud Services',
      'Mobile Development',
      'DevOps',
      'Design',
      'Soft Skills',
      'Other'
    ]
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    required: [true, 'Skill level is required']
  },
  proficiency: {
    type: Number,
    min: [0, 'Proficiency cannot be negative'],
    max: [100, 'Proficiency cannot exceed 100'],
    default: 50
  },
  yearsOfExperience: {
    type: Number,
    min: [0, 'Years of experience cannot be negative'],
    max: [50, 'Years of experience cannot exceed 50']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  certifications: [{
    type: String,
    trim: true
  }],
  icon: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v);
      },
      message: 'Color must be a valid hex color code'
    }
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

// Index for better query performance
skillSchema.index({ category: 1, level: 1 });
skillSchema.index({ isVisible: 1, isFeatured: 1 });
skillSchema.index({ name: 'text' }); // Text search index

module.exports = mongoose.model('Skill', skillSchema);