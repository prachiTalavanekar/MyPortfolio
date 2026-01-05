import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDownload, FaEye } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-background via-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
              Prachi Pravin Talavanekar
            </h1>
            <h2 className="text-2xl md:text-3xl text-text mb-8">
              Aspiring Software Developer | Frontend Developer | AI/ML Learner
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
              I am an aspiring software developer with hands-on experience in frontend web development and a strong interest in artificial intelligence and machine learning. I enjoy building clean, responsive user interfaces and continuously learning new technologies to grow as a full-stack developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/projects"
              className="bg-secondary text-text px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center gap-2 border border-secondary"
            >
              <FaEye />
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="bg-transparent text-text border-2 border-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-text transition-colors flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-8"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-text-muted transition-colors"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-text-muted transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-primary rounded-lg shadow-md border border-secondary">
            <h3 className="text-3xl font-bold text-text mb-2">5+</h3>
            <p className="text-text-muted">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-primary rounded-lg shadow-md border border-secondary">
            <h3 className="text-3xl font-bold text-text mb-2">3rd Year</h3>
            <p className="text-text-muted">Computer Science</p>
          </div>
          <div className="text-center p-6 bg-primary rounded-lg shadow-md border border-secondary">
            <h3 className="text-3xl font-bold text-text mb-2">MERN</h3>
            <p className="text-text-muted">Stack Learning</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;