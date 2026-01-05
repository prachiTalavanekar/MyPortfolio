import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Resume
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-8">
            Download or view my resume to learn more about my education, skills, and projects
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="bg-secondary text-text px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2 border border-secondary"
            >
              <FaDownload />
              Download Resume
            </a>
            <button className="bg-transparent text-text border-2 border-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-text transition-colors flex items-center justify-center gap-2">
              <FaEye />
              View Online
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary border border-secondary rounded-lg p-8 mb-12"
        >
          <div className="bg-primary rounded-lg shadow-md p-8 max-w-4xl mx-auto border border-secondary">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text mb-2">Your Name</h2>
              <p className="text-lg text-text mb-4">
                B.Sc. Computer Science Student | Aspiring Full-Stack Developer
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
                <span>📧 your.email@example.com</span>
                <span>📱 +91 XXXXX XXXXX</span>
                <span>🌐 github.com/yourusername</span>
                <span>💼 linkedin.com/in/yourprofile</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  EDUCATION
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-text">Bachelor of Science in Computer Science</h4>
                      <p className="text-text-muted">Mumbai University</p>
                    </div>
                    <span className="text-sm text-text-muted">2022 - 2025</span>
                  </div>
                  <p className="text-sm text-text-muted">Currently in 3rd Year | CGPA: X.X/10</p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  TECHNICAL SKILLS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-text mb-2">Programming Languages:</p>
                    <p className="text-sm text-text-muted mb-4">JavaScript, Java, Python, C++</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Frontend:</p>
                    <p className="text-sm text-text-muted mb-4">React.js, HTML5, CSS3, Tailwind CSS</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Backend:</p>
                    <p className="text-sm text-text-muted mb-4">Node.js, Express.js</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Database:</p>
                    <p className="text-sm text-text-muted mb-4">MongoDB, MySQL</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  PROJECTS
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text">Personal Portfolio Website</h4>
                    <p className="text-sm text-text-muted mb-2">React.js, Tailwind CSS, Framer Motion</p>
                    <ul className="text-sm text-text-muted list-disc list-inside">
                      <li>Responsive design with smooth animations</li>
                      <li>Contact form integration with EmailJS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Laundry Service System</h4>
                    <p className="text-sm text-text-muted mb-2">MERN Stack</p>
                    <ul className="text-sm text-text-muted list-disc list-inside">
                      <li>Full-stack web application with user authentication</li>
                      <li>Order tracking and admin dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  CERTIFICATIONS
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li>• Web Development Bootcamp - Udemy</li>
                  <li>• JavaScript Fundamentals - Coursera</li>
                  <li>• React.js Complete Guide - Udemy</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-text-muted mb-4">
            Interested in working together? Let's connect!
          </p>
          <a
            href="/contact"
            className="bg-secondary text-text px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors inline-block border border-secondary"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;