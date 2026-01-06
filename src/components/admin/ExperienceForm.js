import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSave, FaTimes } from 'react-icons/fa';

const ExperienceForm = ({ experience, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: experience?.title || '',
    company: experience?.company || '',
    location: experience?.location || '',
    duration: experience?.duration || '',
    type: experience?.type || 'Full-time',
    description: experience?.description || '',
    responsibilities: experience?.responsibilities?.join('\n') || '',
    technologies: experience?.technologies?.join(', ') || '',
    achievements: experience?.achievements?.join('\n') || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const experienceData = {
      ...formData,
      responsibilities: formData.responsibilities.split('\n').filter(item => item.trim()),
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
      achievements: formData.achievements.split('\n').filter(item => item.trim())
    };
    onSave(experienceData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-primary border border-secondary rounded-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text">
            {experience ? 'Edit Experience' : 'Add New Experience'}
          </h2>
          <button
            onClick={onCancel}
            className="text-text-muted hover:text-text"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text font-medium mb-2">Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Frontend Developer"
              />
            </div>

            <div>
              <label className="block text-text font-medium mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Tech Solutions Pvt Ltd"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-text font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Mumbai, Maharashtra"
              />
            </div>

            <div>
              <label className="block text-text font-medium mb-2">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="June 2024 - August 2024"
              />
            </div>

            <div>
              <label className="block text-text font-medium mb-2">Employment Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-text font-medium mb-2">Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              placeholder="Brief overview of your role and responsibilities"
            />
          </div>

          <div>
            <label className="block text-text font-medium mb-2">Key Responsibilities</label>
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              placeholder="Enter each responsibility on a new line"
            />
          </div>

          <div>
            <label className="block text-text font-medium mb-2">Technologies Used</label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
              placeholder="React.js, Node.js, MongoDB (comma separated)"
            />
          </div>

          <div>
            <label className="block text-text font-medium mb-2">Key Achievements</label>
            <textarea
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              placeholder="Enter each achievement on a new line"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-secondary text-text py-3 px-6 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2"
            >
              <FaSave />
              Save Experience
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

export default ExperienceForm;