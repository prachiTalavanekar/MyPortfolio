import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaLaptopCode, FaSpinner } from 'react-icons/fa';
import useApi from '../hooks/useApi';
import { experienceAPI } from '../services/api';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const Experience = () => {
  const { data, loading, error } = useApi(() => experienceAPI.getAll({ visible: 'true' }));
  const experiences = data?.data || [];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-6">
            <FaBriefcase className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Professional<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Experience</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            My professional journey and hands-on experience in software development and technology
          </p>
        </motion.div>

        {loading && <div className="flex justify-center py-20"><FaSpinner className="animate-spin text-4xl text-secondary" /></div>}
        {error && <p className="text-center text-red-400 py-10">{error}</p>}
        {!loading && !error && experiences.length === 0 && (
          <p className="text-center text-text-muted py-10">No experience records added yet.</p>
        )}

        {!loading && !error && experiences.length > 0 && (
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp._id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-primary border border-secondary rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:border-accent"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-3">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-gradient-to-r from-secondary to-accent p-3 rounded-xl shrink-0">
                        <FaBriefcase className="text-2xl text-text" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-text mb-1 group-hover:text-accent transition-colors">{exp.title}</h2>
                        <h3 className="text-xl text-text mb-2">
                          {exp.companyWebsite ? (
                            <a href={exp.companyWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{exp.company}</a>
                          ) : exp.company}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-text-muted mb-3">
                          {exp.location && <div className="flex items-center"><FaMapMarkerAlt className="mr-2" /><span>{exp.location}</span></div>}
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-2" />
                            <span>{formatDate(exp.startDate)} – {exp.isCurrent ? 'Present' : formatDate(exp.endDate)}</span>
                          </div>
                        </div>
                        <span className="inline-block bg-gradient-to-r from-secondary to-accent text-text px-4 py-1.5 rounded-full text-sm font-medium">
                          {exp.employmentType}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-muted leading-relaxed mb-6">{exp.description}</p>

                    {exp.responsibilities?.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-text mb-3 flex items-center"><FaCode className="mr-2" />Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 shrink-0" />
                              <span className="text-text-muted text-sm">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.technologies?.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-text mb-3 flex items-center"><FaLaptopCode className="mr-2" />Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="bg-accent text-text px-3 py-1 rounded-lg text-sm border border-secondary">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {exp.achievements?.length > 0 && (
                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-semibold text-text mb-4">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 shrink-0" />
                            <span className="text-text-muted text-sm">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
