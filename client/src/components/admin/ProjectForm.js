import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSave, FaTimes } from 'react-icons/fa';

const ProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    technologies: project?.technologies?.join(', ') || '',
    status: project?.status || 'In Progress',
    github: project?.github || '',
    demo: project?.demo || '',
    features: project?.features?.join('\n') || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      features: formData.features.split('\n').filter(feature => feature.trim())
    };
    onSave(projectData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-primary border border-secondary rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text">
            {project ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button
            onClick={onCancel}
            className="text-text-muted hover:text-text"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-text font-medium mb-2">Project Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label className="block text-text font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              placeholder="Brief description of the project"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text font-medium mb-2">Technologies</label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="React, Node.js, MongoDB (comma separated)"
              />
            </div>

            <div>
              <label className="block text-text font-medium mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
                <option value="Planning">Planning</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text font-medium mb-2">GitHub URL</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="https://github.com/username/project"
              />
            </div>

            <div>
              <label className="block text-text font-medium mb-2">Demo URL</label>
              <input
                type="url"
                name="demo"
                value={formData.demo}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="https://project-demo.vercel.app"
              />
            </div>
          </div>

          <div>
            <label className="block text-text font-medium mb-2">Key Features</label>
            <textarea
              name="features"
              value={formData.features}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              placeholder="Enter each feature on a new line"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-secondary text-text py-3 px-6 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2"
            >
              <FaSave />
              Save Project
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 border border-secondary text-text rounded-lg hover:bg-accent transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ProjectForm;