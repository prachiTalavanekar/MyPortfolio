import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaSave, 
  FaTimes,
  FaProjectDiagram,
  FaBriefcase,
  FaCertificate,
  FaCogs,
  FaFileAlt,
  FaGraduationCap,
  FaEye,
  FaUser
} from 'react-icons/fa';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Sample data - in real app, this would come from a database
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      status: 'Completed',
      github: 'https://github.com/username/portfolio',
      demo: 'https://portfolio.vercel.app'
    }
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Pvt Ltd',
      duration: 'June 2024 - August 2024',
      location: 'Mumbai, Maharashtra',
      type: 'Internship',
      description: 'Worked on developing responsive web applications using React.js'
    }
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: 1,
      title: 'The Complete Web Development Bootcamp',
      provider: 'Udemy',
      date: 'December 2023',
      credentialUrl: 'https://udemy.com/certificate/example'
    }
  ]);

  const [skills, setSkills] = useState([
    { id: 1, name: 'React.js', category: 'Frontend', level: 'Intermediate' },
    { id: 2, name: 'JavaScript', category: 'Programming', level: 'Advanced' }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Mumbai University',
      duration: '2022 - 2025',
      cgpa: '8.5/10',
      status: 'Currently Pursuing'
    }
  ]);

  const adminTabs = [
    { id: 'dashboard', name: 'Dashboard', icon: FaUser },
    { id: 'projects', name: 'Projects', icon: FaProjectDiagram },
    { id: 'experience', name: 'Experience', icon: FaBriefcase },
    { id: 'education', name: 'Education', icon: FaGraduationCap },
    { id: 'skills', name: 'Skills', icon: FaCogs },
    { id: 'certifications', name: 'Certifications', icon: FaCertificate },
    { id: 'resume', name: 'Resume', icon: FaFileAlt }
  ];

  const handleAdd = (type) => {
    setIsEditing(true);
    setEditingId('new');
    // Logic to add new item based on type
  };

  const handleEdit = (type, id) => {
    setIsEditing(true);
    setEditingId(id);
    // Logic to edit item
  };

  const handleDelete = (type, id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      // Logic to delete item based on type
      switch(type) {
        case 'projects':
          setProjects(projects.filter(p => p.id !== id));
          break;
        case 'experience':
          setExperiences(experiences.filter(e => e.id !== id));
          break;
        case 'certifications':
          setCertifications(certifications.filter(c => c.id !== id));
          break;
        case 'skills':
          setSkills(skills.filter(s => s.id !== id));
          break;
        case 'education':
          setEducation(education.filter(e => e.id !== id));
          break;
        default:
          break;
      }
    }
  };

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary border border-secondary rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <FaProjectDiagram className="text-3xl text-blue-400" />
          <span className="text-2xl font-bold text-text">{projects.length}</span>
        </div>
        <h3 className="text-text font-semibold">Total Projects</h3>
        <p className="text-text-muted text-sm">Active portfolio projects</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-primary border border-secondary rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <FaBriefcase className="text-3xl text-green-400" />
          <span className="text-2xl font-bold text-text">{experiences.length}</span>
        </div>
        <h3 className="text-text font-semibold">Work Experience</h3>
        <p className="text-text-muted text-sm">Professional positions</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-primary border border-secondary rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <FaCertificate className="text-3xl text-purple-400" />
          <span className="text-2xl font-bold text-text">{certifications.length}</span>
        </div>
        <h3 className="text-text font-semibold">Certifications</h3>
        <p className="text-text-muted text-sm">Completed courses</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-primary border border-secondary rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <FaCogs className="text-3xl text-yellow-400" />
          <span className="text-2xl font-bold text-text">{skills.length}</span>
        </div>
        <h3 className="text-text font-semibold">Skills</h3>
        <p className="text-text-muted text-sm">Technical abilities</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-primary border border-secondary rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <FaGraduationCap className="text-3xl text-pink-400" />
          <span className="text-2xl font-bold text-text">{education.length}</span>
        </div>
        <h3 className="text-text font-semibold">Education</h3>
        <p className="text-text-muted text-sm">Academic qualifications</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-primary border border-secondary rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <FaEye className="text-3xl text-red-400" />
          <span className="text-2xl font-bold text-text">1.2k</span>
        </div>
        <h3 className="text-text font-semibold">Portfolio Views</h3>
        <p className="text-text-muted text-sm">This month</p>
      </motion.div>
    </div>
  );

  const renderProjects = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Manage Projects</h2>
        <button
          onClick={() => handleAdd('projects')}
          className="bg-secondary text-text px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-accent transition-colors"
        >
          <FaPlus /> Add Project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary border border-secondary rounded-xl p-6"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text mb-2">{project.title}</h3>
                <p className="text-text-muted mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-text px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm text-text-muted">
                  <span>Status: {project.status}</span>
                  {project.github && <a href={project.github} className="text-secondary hover:underline">GitHub</a>}
                  {project.demo && <a href={project.demo} className="text-secondary hover:underline">Demo</a>}
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit('projects', project.id)}
                  className="text-blue-400 hover:text-blue-300 p-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete('projects', project.id)}
                  className="text-red-400 hover:text-red-300 p-2"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderExperience = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Manage Experience</h2>
        <button
          onClick={() => handleAdd('experience')}
          className="bg-secondary text-text px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-accent transition-colors"
        >
          <FaPlus /> Add Experience
        </button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary border border-secondary rounded-xl p-6"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text mb-1">{exp.title}</h3>
                <h4 className="text-lg text-secondary mb-2">{exp.company}</h4>
                <div className="flex gap-4 text-sm text-text-muted mb-3">
                  <span>{exp.duration}</span>
                  <span>{exp.location}</span>
                  <span className="bg-accent px-2 py-1 rounded text-xs">{exp.type}</span>
                </div>
                <p className="text-text-muted">{exp.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit('experience', exp.id)}
                  className="text-blue-400 hover:text-blue-300 p-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete('experience', exp.id)}
                  className="text-red-400 hover:text-red-300 p-2"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'projects':
        return renderProjects();
      case 'experience':
        return renderExperience();
      case 'education':
        return <div className="text-text">Education management coming soon...</div>;
      case 'skills':
        return <div className="text-text">Skills management coming soon...</div>;
      case 'certifications':
        return <div className="text-text">Certifications management coming soon...</div>;
      case 'resume':
        return <div className="text-text">Resume management coming soon...</div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-text mb-2">Admin Panel</h1>
          <p className="text-text-muted">Manage your portfolio content</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-primary border border-secondary rounded-xl p-4">
              <nav className="space-y-2">
                {adminTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-secondary text-text'
                        : 'text-text-muted hover:text-text hover:bg-accent'
                    }`}
                  >
                    <tab.icon />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-primary border border-secondary rounded-xl p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;