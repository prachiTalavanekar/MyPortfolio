const mongoose = require('mongoose');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Skill = require('../models/Skill');
const Certification = require('../models/Certification');
require('dotenv').config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('✅ Connected to MongoDB for seeding');

    // Clear existing data
    await Promise.all([
      Project.deleteMany({}),
      Experience.deleteMany({}),
      Education.deleteMany({}),
      Skill.deleteMany({}),
      Certification.deleteMany({})
    ]);
    console.log('🗑️  Cleared existing data');

    // Seed Projects
    const projects = [
      {
        title: 'Personal Portfolio Website',
        description: 'A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design.',
        longDescription: 'This portfolio website showcases my skills, projects, and experience as a computer science student. Built with modern web technologies including React.js for the frontend and Node.js with Express for the backend. Features include a responsive design, smooth animations using Framer Motion, and a complete admin panel for content management.',
        technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB'],
        features: [
          'Responsive design that works on all devices',
          'Smooth animations and transitions',
          'Admin panel for content management',
          'Contact form with email integration',
          'Dark theme with modern UI'
        ],
        status: 'Completed',
        github: 'https://github.com/prachi/portfolio',
        demo: 'https://prachi-portfolio.vercel.app',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-03-20'),
        priority: 5,
        tags: ['React', 'Portfolio', 'Full-Stack']
      },
      {
        title: 'Laundry Service Management System',
        description: 'A full-stack web application for managing laundry services with user authentication and order tracking.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
        features: [
          'User registration and authentication',
          'Service booking system',
          'Order status tracking',
          'Admin dashboard for management',
          'Payment integration'
        ],
        status: 'Completed',
        github: 'https://github.com/prachi/laundry-system',
        demo: 'https://laundry-system.vercel.app',
        startDate: new Date('2023-09-01'),
        endDate: new Date('2023-11-30'),
        priority: 4,
        tags: ['MERN', 'Full-Stack', 'Business']
      }
    ];

    await Project.insertMany(projects);
    console.log('✅ Projects seeded');

    // Seed Experience
    const experiences = [
      {
        title: 'Frontend Developer Intern',
        company: 'Tech Solutions Pvt Ltd',
        location: 'Mumbai, Maharashtra',
        startDate: new Date('2024-06-01'),
        endDate: new Date('2024-08-31'),
        employmentType: 'Internship',
        description: 'Worked on developing responsive web applications using React.js and modern frontend technologies. Collaborated with senior developers to build user-friendly interfaces and optimize application performance.',
        responsibilities: [
          'Developed responsive web components using React.js and Tailwind CSS',
          'Implemented interactive user interfaces with smooth animations',
          'Collaborated with design team to convert Figma designs to code',
          'Optimized application performance and improved loading times',
          'Participated in code reviews and followed best practices'
        ],
        achievements: [
          'Successfully delivered 3 major web components',
          'Improved application loading speed by 25%',
          'Received positive feedback from senior developers',
          'Completed internship with excellent performance rating'
        ],
        technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git'],
        order: 1
      }
    ];

    await Experience.insertMany(experiences);
    console.log('✅ Experience seeded');

    // Seed Education
    const education = [
      {
        degree: 'Bachelor of Science in Computer Science',
        fieldOfStudy: 'Computer Science',
        institution: 'Mumbai University',
        location: 'Mumbai, Maharashtra',
        startDate: new Date('2022-06-01'),
        isCurrent: true,
        cgpa: 8.5,
        description: 'Comprehensive study of computer science fundamentals including programming, data structures, algorithms, database management, and software engineering principles.',
        subjects: [
          'Data Structures & Algorithms',
          'Object-Oriented Programming',
          'Database Management Systems',
          'Computer Networks',
          'Operating Systems',
          'Software Engineering',
          'Web Development',
          'Artificial Intelligence'
        ],
        achievements: [
          'Consistent academic performance with 8.5+ CGPA',
          'Active participation in coding competitions',
          'Member of Computer Science Society',
          'Completed multiple web development projects'
        ],
        order: 1
      }
    ];

    await Education.insertMany(education);
    console.log('✅ Education seeded');

    // Seed Skills
    const skills = [
      // Programming Languages
      { name: 'JavaScript', category: 'Programming Languages', level: 'Advanced', proficiency: 85, yearsOfExperience: 2, color: '#F7DF1E' },
      { name: 'Java', category: 'Programming Languages', level: 'Intermediate', proficiency: 75, yearsOfExperience: 1.5, color: '#ED8B00' },
      { name: 'Python', category: 'Programming Languages', level: 'Intermediate', proficiency: 70, yearsOfExperience: 1, color: '#3776AB' },
      { name: 'C++', category: 'Programming Languages', level: 'Intermediate', proficiency: 65, yearsOfExperience: 1, color: '#00599C' },
      
      // Frontend
      { name: 'React.js', category: 'Frontend', level: 'Advanced', proficiency: 90, yearsOfExperience: 2, color: '#61DAFB', isFeatured: true },
      { name: 'HTML5', category: 'Frontend', level: 'Advanced', proficiency: 95, yearsOfExperience: 3, color: '#E34F26' },
      { name: 'CSS3', category: 'Frontend', level: 'Advanced', proficiency: 90, yearsOfExperience: 3, color: '#1572B6' },
      { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced', proficiency: 85, yearsOfExperience: 1.5, color: '#06B6D4', isFeatured: true },
      
      // Backend
      { name: 'Node.js', category: 'Backend', level: 'Intermediate', proficiency: 75, yearsOfExperience: 1.5, color: '#339933' },
      { name: 'Express.js', category: 'Backend', level: 'Intermediate', proficiency: 70, yearsOfExperience: 1, color: '#000000' },
      
      // Database
      { name: 'MongoDB', category: 'Database', level: 'Intermediate', proficiency: 75, yearsOfExperience: 1, color: '#47A248' },
      { name: 'MySQL', category: 'Database', level: 'Intermediate', proficiency: 70, yearsOfExperience: 1, color: '#4479A1' },
      
      // Tools
      { name: 'Git', category: 'Tools & Technologies', level: 'Advanced', proficiency: 85, yearsOfExperience: 2, color: '#F05032' },
      { name: 'GitHub', category: 'Tools & Technologies', level: 'Advanced', proficiency: 85, yearsOfExperience: 2, color: '#181717' },
      { name: 'VS Code', category: 'Tools & Technologies', level: 'Advanced', proficiency: 90, yearsOfExperience: 3, color: '#007ACC' }
    ];

    await Skill.insertMany(skills);
    console.log('✅ Skills seeded');

    // Seed Certifications
    const certifications = [
      {
        title: 'The Complete Web Development Bootcamp',
        provider: 'Udemy',
        issueDate: new Date('2023-12-15'),
        description: 'Comprehensive course covering HTML, CSS, JavaScript, Node.js, React, and MongoDB',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
        duration: '65 hours',
        category: 'Web Development',
        credentialUrl: 'https://udemy.com/certificate/example',
        isVerified: true,
        isFeatured: true
      },
      {
        title: 'JavaScript Algorithms and Data Structures',
        provider: 'freeCodeCamp',
        issueDate: new Date('2023-11-20'),
        description: 'In-depth study of JavaScript fundamentals, ES6, and algorithmic thinking',
        skills: ['JavaScript', 'ES6+', 'Algorithms', 'Data Structures'],
        category: 'Programming',
        credentialUrl: 'https://freecodecamp.org/certification/example',
        isVerified: true
      }
    ];

    await Certification.insertMany(certifications);
    console.log('✅ Certifications seeded');

    console.log('🎉 Database seeded successfully!');
    
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
};

// Run seeding if called directly
if (require.main === module) {
  seedData();
}

module.exports = seedData;