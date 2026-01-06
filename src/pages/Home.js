import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDownload, FaEye } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-background via-primary to-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-6 sm:mb-8">
              {/* Background glow effect - hidden on mobile for performance */}
              <div className="absolute inset-0 blur-3xl opacity-20 sm:opacity-30 hidden sm:block">
                <div className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Prachi Pravin Talavanekar
                </div>
              </div>

              {/* Main name with gradient and effects - Responsive layout */}
              <h1 className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                {/* First line: Prachi Pravin (always together) */}
                <div className="block md:inline-block">
                  <motion.span
                    initial={{ opacity: 0, y: 30, rotateX: -45 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 1.0,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 80
                    }}
                    className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 transition-all duration-1000 cursor-default font-extrabold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Prachi
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 30, rotateX: -45 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 1.0,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 80
                    }}
                    className="inline-block ml-2 md:ml-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-green-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-1000 cursor-default font-extrabold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Pravin
                  </motion.span>
                </div>

                {/* Second line on mobile, same line on md+ : Talavanekar */}
                <div className="block mt-1 md:mt-0 md:inline-block">
                  <motion.span
                    initial={{ opacity: 0, y: 30, rotateX: -45 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 1.0,
                      delay: 0.6,
                      type: "spring",
                      stiffness: 80
                    }}
                    className="inline-block md:ml-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-1000 cursor-default font-extrabold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Talavanekar
                  </motion.span>
                </div>
              </h1>

              {/* Animated underline - Mobile responsive */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.0 }}
                className="h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full mx-auto mt-3 sm:mt-4"
                style={{ maxWidth: "300px" }}
              />

              {/* Floating particles effect - Reduced for mobile */}
              <div className="absolute inset-0 pointer-events-none hidden sm:block">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                    initial={{
                      x: Math.random() * 400,
                      y: Math.random() * 100,
                      opacity: 0
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: 1.2 + i * 0.4,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text mb-6 sm:mb-8 px-2">
              Aspiring Software Developer | Frontend Developer | AI/ML Learner
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-text-muted max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
              I am an aspiring software developer with hands-on experience in frontend web development and a strong interest in artificial intelligence and machine learning. I enjoy building clean, responsive user interfaces and continuously learning new technologies to grow as a full-stack developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto bg-secondary text-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2 border border-secondary text-sm sm:text-base"
            >
              <FaEye />
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto bg-transparent text-text border-2 border-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-secondary hover:text-text transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 sm:space-x-8 mb-12 sm:mb-0"
          >
            <a
              href="https://github.com/prachiTalavanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-text-muted transition-colors p-2 rounded-lg hover:bg-secondary hover:bg-opacity-20"
            >
              <FaGithub size={28} className="sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/prachi-talavanekar-124195312"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-text-muted transition-colors p-2 rounded-lg hover:bg-secondary hover:bg-opacity-20"
            >
              <FaLinkedin size={28} className="sm:w-8 sm:h-8" />
            </a>
          </motion.div>
        </div>

        {/* Quick Stats - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 px-2"
        >
          <div className="text-center p-4 sm:p-6 bg-primary rounded-lg shadow-md border border-secondary">
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-1 sm:mb-2">5+</h3>
            <p className="text-text-muted text-sm sm:text-base">Projects Completed</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-primary rounded-lg shadow-md border border-secondary">
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-1 sm:mb-2">3rd Year</h3>
            <p className="text-text-muted text-sm sm:text-base">Computer Science</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-primary rounded-lg shadow-md border border-secondary">
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-1 sm:mb-2">MERN</h3>
            <p className="text-text-muted text-sm sm:text-base">Stack Learning</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;