import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar, FaSpinner } from 'react-icons/fa';
import useApi from '../hooks/useApi';
import { educationAPI } from '../services/api';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const Education = () => {
  const { data, loading, error } = useApi(() => educationAPI.getAll({ visible: 'true' }));
  const educationData = data?.data || [];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-6">
            <FaGraduationCap className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Education &<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Learning</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            My academic journey and educational background in computer science and technology
          </p>
        </motion.div>

        {loading && <div className="flex justify-center py-20"><FaSpinner className="animate-spin text-4xl text-secondary" /></div>}
        {error && <p className="text-center text-red-400 py-10">{error}</p>}
        {!loading && !error && educationData.length === 0 && (
          <p className="text-center text-text-muted py-10">No education records added yet.</p>
        )}

        {!loading && !error && educationData.length > 0 && (
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-primary border border-secondary rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:border-accent"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-gradient-to-r from-secondary to-accent p-3 rounded-xl shrink-0">
                        <FaGraduationCap className="text-2xl text-text" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-text mb-1 group-hover:text-accent transition-colors">{edu.degree}</h2>
                        {edu.fieldOfStudy && <p className="text-text-muted text-sm mb-1">{edu.fieldOfStudy}</p>}
                        <h3 className="text-xl text-text mb-2">{edu.institution}</h3>
                        <div className="flex flex-wrap gap-4 text-text-muted mb-3">
                          {edu.location && <div className="flex items-center"><FaMapMarkerAlt className="mr-2" /><span>{edu.location}</span></div>}
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-2" />
                            <span>{formatDate(edu.startDate)} – {edu.isCurrent ? 'Present' : formatDate(edu.endDate)}</span>
                          </div>
                          {(edu.cgpa || edu.percentage) && (
                            <div className="flex items-center">
                              <FaStar className="mr-2" />
                              <span>{edu.cgpa ? `CGPA: ${edu.cgpa}` : `${edu.percentage}%`}</span>
                            </div>
                          )}
                        </div>
                        <span className="inline-block bg-gradient-to-r from-secondary to-accent text-text px-4 py-1.5 rounded-full text-sm font-medium">
                          {edu.isCurrent ? 'Currently Pursuing' : 'Completed'}
                        </span>
                      </div>
                    </div>

                    {edu.description && <p className="text-text-muted leading-relaxed mb-4">{edu.description}</p>}

                    {edu.subjects?.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-text mb-2 text-sm">Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((s, i) => (
                            <span key={i} className="bg-secondary/20 text-text px-2 py-1 rounded text-xs border border-secondary/30">{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {edu.achievements?.length > 0 && (
                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-semibold text-text mb-4">Achievements</h4>
                      <ul className="space-y-3">
                        {edu.achievements.map((a, i) => (
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

export default Education;
