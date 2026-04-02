import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaStar, FaSpinner } from 'react-icons/fa';
import useApi from '../hooks/useApi';
import { skillsAPI } from '../services/api';

const ProgressBar = ({ level }) => (
  <div className="w-full bg-background rounded-full h-2 overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
  </div>
);

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { data, loading, error } = useApi(() => skillsAPI.getAll({ visible: 'true' }));

  const skills = data?.data || [];
  const grouped = data?.grouped || {};
  const categories = Object.keys(grouped);

  const filteredSkills = activeFilter === 'all' ? skills : skills.filter(s => s.category === activeFilter);

  // Group filtered skills by category for display
  const displayGroups = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-6">
            <FaCode className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Skills &<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Expertise</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {loading && <div className="flex justify-center py-20"><FaSpinner className="animate-spin text-4xl text-secondary" /></div>}
        {error && <p className="text-center text-red-400 py-10">{error}</p>}

        {!loading && !error && (
          <>
            {/* Filter buttons */}
            {categories.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                    activeFilter === 'all' ? 'bg-secondary text-text shadow-lg scale-105' : 'bg-primary text-text-muted hover:bg-secondary hover:text-text border border-secondary'
                  }`}
                >
                  <FaStar className="text-xs" /> All Skills
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                      activeFilter === cat ? 'bg-secondary text-text shadow-lg scale-105' : 'bg-primary text-text-muted hover:bg-secondary hover:text-text border border-secondary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}

            {skills.length === 0 && <p className="text-center text-text-muted py-10">No skills added yet.</p>}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {Object.entries(displayGroups).map(([category, catSkills], catIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    className="bg-primary rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-secondary hover:border-accent group"
                  >
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-text group-hover:text-accent transition-colors">{category}</h2>
                      <p className="text-sm text-text-muted">{catSkills.length} skill{catSkills.length !== 1 ? 's' : ''}</p>
                    </div>

                    <div className="space-y-5">
                      {catSkills.map((skill, i) => (
                        <div key={skill._id}>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-text font-semibold text-sm">{skill.name}</span>
                              {skill.isFeatured && <FaStar className="text-yellow-400 text-xs" />}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-text-muted">{skill.level}</span>
                              {skill.proficiency != null && (
                                <span className="text-sm font-bold text-accent">{skill.proficiency}%</span>
                              )}
                            </div>
                          </div>
                          {skill.proficiency != null && <ProgressBar level={skill.proficiency} />}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
