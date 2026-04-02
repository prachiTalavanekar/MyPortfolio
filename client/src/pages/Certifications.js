import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import useApi from '../hooks/useApi';
import { certificationsAPI } from '../services/api';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

const Certifications = () => {
  const { data, loading, error } = useApi(() => certificationsAPI.getAll({ visible: 'true' }));
  const certifications = data?.data || [];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-6">
            <FaCertificate className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Certifications &<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Achievements</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Continuous learning through online courses, workshops, and academic achievements
          </p>
        </motion.div>

        {loading && <div className="flex justify-center py-20"><FaSpinner className="animate-spin text-4xl text-secondary" /></div>}
        {error && <p className="text-center text-red-400 py-10">{error}</p>}
        {!loading && !error && certifications.length === 0 && (
          <p className="text-center text-text-muted py-10">No certifications added yet.</p>
        )}

        {!loading && !error && certifications.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-secondary group hover:border-accent flex flex-col"
              >
                {/* Image / placeholder */}
                <div className="h-44 bg-secondary/20 flex items-center justify-center border-b border-secondary overflow-hidden">
                  {cert.certificateImage ? (
                    <img src={cert.certificateImage} alt={cert.title} className="w-full h-full object-cover" />
                  ) : (
                    <FaCertificate className="text-6xl text-secondary/40" />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors flex-1">{cert.title}</h3>
                    {cert.isVerified && (
                      <FaCheckCircle className="text-green-400 text-lg shrink-0 mt-1" title="Verified" />
                    )}
                  </div>

                  <div className="flex items-center text-text-muted mb-3 flex-wrap gap-1">
                    <FaCalendarAlt className="mr-1" />
                    <span className="font-semibold">{cert.provider}</span>
                    {cert.issueDate && <><span className="mx-1">•</span><span>{formatDate(cert.issueDate)}</span></>}
                    {cert.expiryDate && <><span className="mx-1">•</span><span className="text-xs">Expires {formatDate(cert.expiryDate)}</span></>}
                  </div>

                  {cert.category && (
                    <span className="inline-block mb-3 text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 w-fit">
                      {cert.category}
                    </span>
                  )}

                  {cert.description && (
                    <p className="text-text-muted mb-4 text-sm leading-relaxed flex-1">{cert.description}</p>
                  )}

                  {cert.skills?.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-text mb-2 text-sm">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="bg-secondary text-text px-2 py-1 rounded text-xs border border-accent">{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-text-muted hover:text-text transition-colors mt-auto">
                      <FaExternalLinkAlt /><span className="text-sm font-medium">View Credential</span>
                    </a>
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

export default Certifications;
