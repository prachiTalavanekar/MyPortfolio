import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-text py-8 border-t border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-text-muted">
              © 2024 Portfolio. Built with React & Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-secondary transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;