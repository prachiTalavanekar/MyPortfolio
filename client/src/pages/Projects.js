import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram, FaSpinner } from 'react-icons/fa';
import useApi from '../hooks/useApi';
import { projectsAPI } from '../services/api';

const Projects = () => {
  const { data, loading, error } = useApi(() => projectsAPI.getAll({ visible: 'true' }));
  const projects = data?.data || [];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-6">
            <FaProjectDiagram className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            My<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Projects</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my learning journey and practical application of technologies
          </p>
        </motion.div>

        {/* States */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <FaSpinner className="animate-spin text-4xl text-secondary" />
          </div>
        )}
        {error && <p className="text-center text-red-400 py-10">{error}</p>}
        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-text-muted py-10">No projects added yet.</p>
        )}

        {/* Grid */}
        {!loading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-primary rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-secondary group hover:border-accent flex flex-col"
              >
                {/* Image */}
                <div className="h-48 bg-secondary/30 flex items-center justify-center border-b border-secondary overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <FaProjectDiagram className="text-5xl text-secondary/40" />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors flex-1">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="ml-2 text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 shrink-0">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="text-text-muted mb-4 text-sm leading-relaxed flex-1">{project.description}</p>

                  {project.technologies?.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-text mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-secondary text-text px-2 py-1 rounded text-xs border border-accent">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.features?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-text mb-2 text-sm">Key Features:</h4>
                      <ul className="text-sm text-text-muted space-y-1">
                        {project.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1 h-1 bg-secondary rounded-full mt-2 mr-2 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex space-x-4 mt-auto">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-text-muted hover:text-text transition-colors">
                        <FaGithub /><span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-text-muted hover:text-text transition-colors">
                        <FaExternalLinkAlt /><span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
