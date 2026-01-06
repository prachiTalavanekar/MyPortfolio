const Joi = require('joi');

// Project validation schema
const projectSchema = Joi.object({
  title: Joi.string().required().max(100).trim(),
  description: Joi.string().required().max(500).trim(),
  longDescription: Joi.string().max(2000).trim().allow(''),
  technologies: Joi.array().items(Joi.string().trim()),
  features: Joi.array().items(Joi.string().trim()),
  status: Joi.string().valid('Planning', 'In Progress', 'Completed', 'On Hold'),
  github: Joi.string().uri().allow(''),
  demo: Joi.string().uri().allow(''),
  image: Joi.string().allow(''),
  startDate: Joi.date(),
  endDate: Joi.date(),
  priority: Joi.number().integer().min(0),
  isVisible: Joi.boolean(),
  tags: Joi.array().items(Joi.string().trim())
});

// Experience validation schema
const experienceSchema = Joi.object({
  title: Joi.string().required().max(100).trim(),
  company: Joi.string().required().max(100).trim(),
  location: Joi.string().max(100).trim().allow(''),
  startDate: Joi.date().required(),
  endDate: Joi.date(),
  isCurrent: Joi.boolean(),
  employmentType: Joi.string().valid('Full-time', 'Part-time', 'Internship', 'Freelance', 'Contract').required(),
  description: Joi.string().required().max(1000).trim(),
  responsibilities: Joi.array().items(Joi.string().max(300).trim()),
  achievements: Joi.array().items(Joi.string().max(300).trim()),
  technologies: Joi.array().items(Joi.string().trim()),
  skills: Joi.array().items(Joi.string().trim()),
  companyWebsite: Joi.string().uri().allow(''),
  companyLogo: Joi.string().allow(''),
  order: Joi.number().integer(),
  isVisible: Joi.boolean()
});

// Education validation schema
const educationSchema = Joi.object({
  degree: Joi.string().required().max(150).trim(),
  fieldOfStudy: Joi.string().max(100).trim().allow(''),
  institution: Joi.string().required().max(150).trim(),
  location: Joi.string().max(100).trim().allow(''),
  startDate: Joi.date().required(),
  endDate: Joi.date(),
  isCurrent: Joi.boolean(),
  grade: Joi.string().max(50).trim().allow(''),
  cgpa: Joi.number().min(0).max(10),
  percentage: Joi.number().min(0).max(100),
  description: Joi.string().max(1000).trim().allow(''),
  subjects: Joi.array().items(Joi.string().max(100).trim()),
  achievements: Joi.array().items(Joi.string().max(300).trim()),
  activities: Joi.array().items(Joi.string().max(200).trim()),
  institutionWebsite: Joi.string().uri().allow(''),
  institutionLogo: Joi.string().allow(''),
  certificate: Joi.string().allow(''),
  order: Joi.number().integer(),
  isVisible: Joi.boolean()
});

// Skill validation schema
const skillSchema = Joi.object({
  name: Joi.string().required().max(100).trim(),
  category: Joi.string().valid(
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
  ).required(),
  level: Joi.string().valid('Beginner', 'Intermediate', 'Advanced', 'Expert').required(),
  proficiency: Joi.number().min(0).max(100),
  yearsOfExperience: Joi.number().min(0).max(50),
  description: Joi.string().max(500).trim().allow(''),
  certifications: Joi.array().items(Joi.string().trim()),
  icon: Joi.string().allow(''),
  color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow(''),
  order: Joi.number().integer(),
  isVisible: Joi.boolean(),
  isFeatured: Joi.boolean()
});

// Certification validation schema
const certificationSchema = Joi.object({
  title: Joi.string().required().max(200).trim(),
  provider: Joi.string().required().max(100).trim(),
  issueDate: Joi.date().required(),
  expiryDate: Joi.date(),
  credentialId: Joi.string().max(100).trim().allow(''),
  credentialUrl: Joi.string().uri().allow(''),
  description: Joi.string().max(1000).trim().allow(''),
  skills: Joi.array().items(Joi.string().max(50).trim()),
  topics: Joi.array().items(Joi.string().max(100).trim()),
  duration: Joi.string().max(50).trim().allow(''),
  certificateImage: Joi.string().allow(''),
  providerLogo: Joi.string().allow(''),
  grade: Joi.string().max(20).trim().allow(''),
  score: Joi.number().min(0),
  maxScore: Joi.number().min(0),
  isVerified: Joi.boolean(),
  category: Joi.string().valid(
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
  ),
  order: Joi.number().integer(),
  isVisible: Joi.boolean(),
  isFeatured: Joi.boolean()
});

// Contact validation schema
const contactSchema = Joi.object({
  name: Joi.string().required().max(100).trim(),
  email: Joi.string().email().required().trim(),
  subject: Joi.string().required().max(200).trim(),
  message: Joi.string().required().max(2000).trim(),
  phone: Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).allow(''),
  company: Joi.string().max(100).trim().allow('')
});

// Auth validation schemas
const loginSchema = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().required().min(6)
});

const registerSchema = Joi.object({
  name: Joi.string().required().max(100).trim(),
  email: Joi.string().email().required().trim(),
  password: Joi.string().required().min(6)
});

// Validation middleware functions
const validateProject = (req, res, next) => {
  const { error } = projectSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details[0].message
    });
  }
  next();
};

const validateExperience = (req, res, next) => {
  const { error } = experienceSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details[0].message
    });
  }
  next();
};

const validateEducation = (req, res, next) => {
  const { error } = educationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details[0].message
    });
  }
  next();
};

const validateSkill = (req, res, next) => {
  const { error } = skillSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details[0].message
    });
  }
  next();
};

const validateCertification = (req, res, next) => {
  const { error } = certificationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details[0].message
    });
  }
  next();
};

const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details[0].message
    });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details[0].message
    });
  }
  next();
};

const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details[0].message
    });
  }
  next();
};

module.exports = {
  validateProject,
  validateExperience,
  validateEducation,
  validateSkill,
  validateCertification,
  validateContact,
  validateLogin,
  validateRegister
};