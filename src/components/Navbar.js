import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-primary shadow-lg fixed w-full top-0 z-50 border-b border-secondary backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="text-secondary"
              >
                <FaCode size={24} />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 transition-all duration-500">
                CodeCraft
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${
                    location.pathname === item.path
                      ? 'text-text bg-secondary shadow-lg'
                      : 'text-text hover:text-text'
                  }`}
                >
                  {/* Hover background effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>
                  
                  {/* Sliding underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  
                  {/* Text with hover glow */}
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)] transition-all duration-300">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-secondary transition-colors duration-300 p-2 rounded-lg hover:bg-secondary hover:bg-opacity-20"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary border-t border-secondary backdrop-blur-md bg-opacity-95"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 group relative overflow-hidden ${
                    location.pathname === item.path
                      ? 'text-text bg-secondary shadow-lg'
                      : 'text-text hover:bg-secondary hover:bg-opacity-30'
                  }`}
                >
                  {/* Mobile hover effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_6px_rgba(147,51,234,0.4)] transition-all duration-300">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;