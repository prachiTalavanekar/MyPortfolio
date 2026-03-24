import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design.',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      features: [
        'Fully responsive design',
        'Smooth animations with Framer Motion',
        'Clean and modern UI',
        'Contact form integration'
      ],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.vercel.app',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Laundry Service System',
      description: 'A full-stack web application for managing laundry services with user authentication and order tracking.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
        'User registration and login',
        'Service booking system',
        'Order status tracking',
        'Admin dashboard for management'
      ],
      github: 'https://github.com/yourusername/laundry-system',
      demo: 'https://laundry-system.vercel.app',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Medical Chatbot Interface',
      description: 'A frontend-focused chatbot interface for medical consultations with API integration for responses.',
      technologies: ['React.js', 'Tailwind CSS', 'REST API', 'Axios'],
      features: [
        'Interactive chat interface',
        'Medical symptom checker',
        'API integration for responses',
        'Responsive design'
      ],
      github: 'https://github.com/yourusername/medical-chatbot',
      demo: 'https://medical-chatbot.vercel.app',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Tic Tac Toe with AI',
      description: 'Classic Tic Tac Toe game with AI opponent using Minimax algorithm for optimal gameplay.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Minimax Algorithm'],
      features: [
        'Player vs AI gameplay',
        'Minimax algorithm implementation',
        'Score tracking',
        'Responsive game board'
      ],
      github: 'https://github.com/yourusername/tic-tac-toe-ai',
      demo: 'https://tic-tac-toe-ai.vercel.app',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'College Management System',
      description: 'Academic project for managing student records, courses, and faculty information with comprehensive documentation.',
      technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
      features: [
        'Student record management',
        'Course enrollment system',
        'Faculty management',
        'Report generation'
      ],
      github: 'https://github.com/yourusername/college-management',
      demo: null,
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-6"
          >
            <FaProjectDiagram className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            My
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {' '}Projects
            </span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my learning journey and practical application of technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-primary rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-secondary group hover:border-accent"
            >
              <div className="h-48 bg-secondary flex items-center justify-center border-b border-secondary">
                <p className="text-text-muted">Project Screenshot</p>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-text mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-secondary text-text px-2 py-1 rounded text-xs border border-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-text mb-2">Key Features:</h4>
                  <ul className="text-sm text-text-muted space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1 h-1 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-text-muted hover:text-text transition-colors"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-text-muted hover:text-text transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 border border-accent">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text mb-6">
                More Projects Coming Soon
              </h2>
              <p className="text-text-muted leading-relaxed max-w-4xl mx-auto text-lg">
                I'm continuously working on new projects to expand my skills and explore different technologies. 
                Check back regularly or follow my GitHub for updates on my latest work.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 flex justify-center"
              >
                <div className="bg-accent text-text px-8 py-3 rounded-full font-semibold">
                  🚀 Building the Future
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;