import React from 'react';
import { motion } from 'framer-motion';
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
  FaCss3Alt
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
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
        { name: 'Java', icon: FaJava, color: 'text-red-400' },
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-300' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-400' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-300' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-400' }
      ]
    },
    {
      title: 'Core CS Subjects',
      skills: [
        { name: 'OOPS', icon: FaDatabase, color: 'text-purple-400' },
        { name: 'DBMS', icon: FaDatabase, color: 'text-blue-400' },
        { name: 'Operating Systems', icon: FaDatabase, color: 'text-green-400' },
        { name: 'Computer Networks', icon: FaDatabase, color: 'text-red-400' }
      ]
    }
  ];

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
            Skills & Technologies
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Technologies I'm learning and working with as I build my foundation in software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-primary rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-secondary"
            >
              <h2 className="text-xl font-bold text-text mb-6 text-center">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <skill.icon className={`text-2xl ${skill.color}`} />
                    <span className="text-text font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary border border-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-text mb-4">
              Learning Journey
            </h2>
            <p className="text-text-muted leading-relaxed max-w-3xl mx-auto">
              As a computer science student, I'm continuously expanding my skill set. 
              Currently focusing on strengthening my MERN stack knowledge while building 
              practical projects to apply theoretical concepts learned in university.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;