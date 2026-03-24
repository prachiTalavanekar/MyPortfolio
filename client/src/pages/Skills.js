import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaJava, 
  FaPython, 
  FaGitAlt, 
  FaGithub,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaFilter,
  FaStar,
  FaCode,
  FaTools,
  FaServer,
  FaPalette,
  FaBrain
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiPostman,
  SiMysql,
  SiCplusplus
} from 'react-icons/si';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: FaCode,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', level: 85 },
        { name: 'Java', icon: FaJava, color: 'text-red-400', level: 80 },
        { name: 'Python', icon: FaPython, color: 'text-blue-400', level: 75 },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-300', level: 70 }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: FaPalette,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'React.js', icon: FaReact, color: 'text-cyan-400', level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', level: 90 },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-400', level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400', level: 90 }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: FaServer,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400', level: 80 },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', level: 75 }
      ]
    },
    {
      id: 'database',
      title: 'Database Management',
      icon: FaDatabase,
      color: 'from-indigo-500 to-blue-600',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', level: 80 },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', level: 75 }
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: FaTools,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-400', level: 85 },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-300', level: 85 },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-400', level: 80 }
      ]
    },
    {
      id: 'concepts',
      title: 'Core CS Concepts',
      icon: FaBrain,
      color: 'from-purple-500 to-violet-600',
      skills: [
        { name: 'Object-Oriented Programming', icon: FaDatabase, color: 'text-purple-400', level: 85 },
        { name: 'Database Management Systems', icon: FaDatabase, color: 'text-blue-400', level: 80 },
        { name: 'Operating Systems', icon: FaDatabase, color: 'text-green-400', level: 75 },
        { name: 'Computer Networks', icon: FaDatabase, color: 'text-red-400', level: 70 }
      ]
    }
  ];

  const filters = [
    { id: 'all', name: 'All Skills', icon: FaStar },
    { id: 'programming', name: 'Programming', icon: FaCode },
    { id: 'frontend', name: 'Frontend', icon: FaPalette },
    { id: 'backend', name: 'Backend', icon: FaServer },
    { id: 'database', name: 'Database', icon: FaDatabase },
    { id: 'tools', name: 'Tools', icon: FaTools },
    { id: 'concepts', name: 'Concepts', icon: FaBrain }
  ];

  const filteredCategories = activeFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(category => category.id === activeFilter);

  const ProgressBar = ({ level, animated = false }) => (
    <div className="w-full bg-background rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
        initial={{ width: 0 }}
        animate={{ width: animated ? `${level}%` : `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );

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
            <FaCode className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Skills & 
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {' '}Expertise
            </span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, proficiency levels, and experience 
            in various technologies and programming concepts.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-secondary text-text shadow-lg scale-105'
                  : 'bg-primary text-text-muted hover:bg-secondary hover:text-text border border-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <filter.icon className="text-sm" />
              <span className="text-sm">{filter.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group relative"
              >
                {/* Category Card */}
                <div className="bg-primary rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-secondary group-hover:border-accent">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                      <category.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                        {category.title}
                      </h2>
                      <p className="text-sm text-text-muted">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        onHoverStart={() => setHoveredSkill(`${category.id}-${skillIndex}`)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="relative"
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              className="relative"
                            >
                              <skill.icon className={`text-2xl ${skill.color}`} />
                            </motion.div>
                            <div>
                              <span className="text-text font-semibold text-sm">
                                {skill.name}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-bold text-accent">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <ProgressBar 
                          level={skill.level} 
                          animated={hoveredSkill === `${category.id}-${skillIndex}`}
                        />

                        {/* Hover Effect */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: hoveredSkill === `${category.id}-${skillIndex}` ? 1 : 0,
                            scale: hoveredSkill === `${category.id}-${skillIndex}` ? 1 : 0.8
                          }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                        >
                          <FaStar className="text-xs text-text" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>



        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 border border-accent">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text mb-6">
                Continuous Learning Journey
              </h2>
              <p className="text-text-muted leading-relaxed max-w-4xl mx-auto text-lg">
                As a passionate computer science student, I believe in continuous learning and growth. 
                My journey involves not just mastering current technologies, but also staying updated 
                with emerging trends and best practices in software development. Each project I work on 
                teaches me something new, and I'm always excited to take on challenges that push my boundaries.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 flex justify-center"
              >
                <div className="bg-accent text-text px-8 py-3 rounded-full font-semibold">
                  🚀 Always Learning, Always Growing
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;