import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSave, FaTimes } from 'react-icons/fa';

const SkillForm = ({ skill, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: skill?.name || '',
    category: skill?.category || 'Programming',
    level: skill?.level || 'Beginner',
    description: skill?.description || '',
    yearsOfExperience: skill?.yearsOfExperience || ''
  });

  const categories = [
    'Programming Languages',
    'Frontend',
    'Backend',
    'Database',
    'Tools & Technologies',
    'Frameworks',
    'Cloud Services',
    'Mobile Development',
    'DevOps',
    'Design',
    'Soft Skills'
  ];

  const levels = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-primary border border-secondary rounded-xl p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text">
            {skill ? 'Edit Skill' : 'Add New Skill'}
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
            <label className="block text-text font-medium mb-2">Skill Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
              placeholder="React.js, Python, etc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text font-medium mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-text font-medium mb-2">Proficiency Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-text font-medium mb-2">Years of Experience</label>
            <input
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              min="0"
              step="0.5"
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent"
              placeholder="2.5"
            />
          </div>

          <div>
            <label className="block text-text font-medium mb-2">Description (Optional)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 bg-background border border-secondary rounded-lg text-text focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              placeholder="Brief description of your experience with this skill"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-secondary text-text py-3 px-6 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2"
            >
              <FaSave />
              Save Skill
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

export default SkillForm;