import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'The Complete Web Development Bootcamp',
      provider: 'Udemy',
      date: 'December 2023',
      description: 'Comprehensive course covering HTML, CSS, JavaScript, Node.js, React, and MongoDB',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
      credentialUrl: 'https://udemy.com/certificate/example',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      provider: 'freeCodeCamp',
      date: 'November 2023',
      description: 'In-depth study of JavaScript fundamentals, ES6, and algorithmic thinking',
      skills: ['JavaScript', 'ES6+', 'Algorithms', 'Data Structures'],
      credentialUrl: 'https://freecodecamp.org/certification/example',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'React - The Complete Guide',
      provider: 'Udemy',
      date: 'October 2023',
      description: 'Comprehensive React.js course including hooks, context, and modern patterns',
      skills: ['React.js', 'Hooks', 'Context API', 'React Router'],
      credentialUrl: 'https://udemy.com/certificate/example',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Database Management Systems',
      provider: 'Coursera - University Course',
      date: 'September 2023',
      description: 'Academic course covering database design, SQL, and database administration',
      skills: ['SQL', 'Database Design', 'MySQL', 'Normalization'],
      credentialUrl: 'https://coursera.org/certificate/example',
      image: '/api/placeholder/300/200'
    }
  ];

  const achievements = [
    {
      title: 'College Technical Fest Participation',
      description: 'Participated in web development competition and secured 2nd position',
      date: 'March 2024'
    },
    {
      title: 'Hackathon Participation',
      description: 'Participated in 24-hour coding hackathon focusing on social impact solutions',
      date: 'February 2024'
    },
    {
      title: 'Technical Workshop Completion',
      description: 'Completed workshop on Modern Web Development Practices',
      date: 'January 2024'
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
            <FaCertificate className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Certifications &
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {' '}Achievements
            </span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Continuous learning through online courses, workshops, and academic achievements
          </p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Online Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-secondary group hover:border-accent"
              >
                <div className="h-48 bg-secondary flex items-center justify-center border-b border-secondary">
                  <FaCertificate className="text-6xl text-text" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center text-text-muted mb-3">
                    <FaCalendarAlt className="mr-2" />
                    <span className="font-semibold">{cert.provider}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-text-muted mb-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-text mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-secondary text-text px-2 py-1 rounded text-xs border border-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-text-muted hover:text-text transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm font-medium">View Credential</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Academic & Technical Achievements
          </h2>
          
          <div className="bg-primary rounded-2xl shadow-xl p-8 border border-secondary">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaAward className="text-xl text-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1 group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-text font-medium">
                      {achievement.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 border border-accent">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text mb-6">
                Continuous Learning
              </h2>
              <p className="text-text-muted leading-relaxed max-w-4xl mx-auto text-lg">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently pursuing additional certifications in advanced React patterns and backend development.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 flex justify-center"
              >
                <div className="bg-accent text-text px-8 py-3 rounded-full font-semibold">
                  🏆 Excellence Through Learning
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;