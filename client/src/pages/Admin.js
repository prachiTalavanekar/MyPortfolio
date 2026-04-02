import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
  FaUser,
  FaSignOutAlt,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import { 
  projectsAPI, 
  experienceAPI, 
  educationAPI, 
  skillsAPI, 
  certificationsAPI,
  analyticsAPI,
  handleApiError 
} from '../services/api';

const Admin = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Data states
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [stats, setStats] = useState({ pageViews: 0 });

  const adminTabs = [
    { id: 'dashboard', name: 'Dashboard', icon: FaUser },
    { id: 'projects', name: 'Projects', icon: FaProjectDiagram },
    { id: 'experience', name: 'Experience', icon: FaBriefcase },
    { id: 'education', name: 'Education', icon: FaGraduationCap },
    { id: 'skills', name: 'Skills', icon: FaCogs },
    { id: 'certifications', name: 'Certifications', icon: FaCertificate },
    { id: 'resume', name: 'Resume', icon: FaFileAlt }
  ];

  // Fetch all data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [projRes, expRes, eduRes, skillRes, certRes, statsRes] = await Promise.all([
        projectsAPI.getAll({ visible: 'false' }),
        experienceAPI.getAll({ visible: 'false' }),
        educationAPI.getAll({ visible: 'false' }),
        skillsAPI.getAll({ visible: 'false' }),
        certificationsAPI.getAll({ visible: 'false' }),
        analyticsAPI.getStats()
      ]);

      setProjects(projRes.data.data || []);
      setExperiences(expRes.data.data || []);
      setEducation(eduRes.data.data || []);
      setSkills(skillRes.data.data || (skillRes.data.grouped ? Object.values(skillRes.data.grouped).flat() : []));
      setCertifications(certRes.data.data || []);
      setStats(statsRes.data.data || { pageViews: 0 });
    } catch (error) {
      console.error('Error fetching data:', error);
      showMsg('error', handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showMsg = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      await logout();
      navigate('/admin/login');
    }
  };

  const handleDelete = async (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type.slice(0, -1)}?`)) {
      setActionLoading(true);
      try {
        let api;
        switch(type) {
          case 'projects': api = projectsAPI; break;
          case 'experience': api = experienceAPI; break;
          case 'education': api = educationAPI; break;
          case 'skills': api = skillsAPI; break;
          case 'certifications': api = certificationsAPI; break;
          default: return;
        }

        await api.delete(id);
        const labels = { projects: 'Project', experience: 'Experience', education: 'Education', skills: 'Skill', certifications: 'Certification' };
        showMsg('success', `${labels[type] || type} deleted successfully`);
        
        // Update local state
        switch(type) {
          case 'projects': setProjects(projects.filter(p => p._id !== id)); break;
          case 'experience': setExperiences(experiences.filter(e => e._id !== id)); break;
          case 'education': setEducation(education.filter(e => e._id !== id)); break;
          case 'skills': setSkills(skills.filter(s => s._id !== id)); break;
          case 'certifications': setCertifications(certifications.filter(c => c._id !== id)); break;
          default: break;
        }
      } catch (error) {
        showMsg('error', handleApiError(error));
      } finally {
        setActionLoading(false);
      }
    }
  };

  const handleAdd = (type) => {
    setEditingId('new');
    setIsEditing(type);
  };

  const handleEdit = (type, id) => {
    setEditingId(id);
    setIsEditing(type);
  };

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard icon={FaProjectDiagram} count={projects.length} title="Total Projects" color="text-blue-400" delay={0} />
      <StatCard icon={FaBriefcase} count={experiences.length} title="Work Experience" color="text-green-400" delay={0.1} />
      <StatCard icon={FaCertificate} count={certifications.length} title="Certifications" color="text-purple-400" delay={0.2} />
      <StatCard icon={FaCogs} count={skills.length} title="Skills" color="text-yellow-400" delay={0.3} />
      <StatCard icon={FaGraduationCap} count={education.length} title="Education" color="text-pink-400" delay={0.4} />
      <StatCard icon={FaEye} count={stats.pageViews} title="Portfolio Views" color="text-red-400" delay={0.5} />
    </div>
  );

  const StatCard = ({ icon: Icon, count, title, color, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-primary/50 backdrop-blur-md border border-secondary/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-secondary/10 transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className={`text-3xl ${color}`} />
        <span className="text-3xl font-bold text-text">{count}</span>
      </div>
      <h3 className="text-text font-semibold">{title}</h3>
      <p className="text-text-muted text-sm">Overview</p>
    </motion.div>
  );

  const renderList = (type, items, title, icon, addText) => (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-primary/30 p-4 rounded-xl border border-secondary/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary/20 rounded-lg">
            {React.createElement(icon, { className: "text-xl text-secondary" })}
          </div>
          <h2 className="text-2xl font-bold text-text">{title}</h2>
        </div>
        <button
          onClick={() => handleAdd(type)}
          className="bg-secondary text-text px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-accent transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20"
        >
          <FaPlus /> {addText}
        </button>
      </div>

      <div className="grid gap-4">
        {items.length === 0 ? (
          <div className="text-center py-12 bg-primary/20 rounded-2xl border border-dashed border-secondary/30">
            <p className="text-text-muted">No items found. Click add to create new.</p>
          </div>
        ) : (
          items.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary/40 border border-secondary/30 rounded-xl p-5 hover:border-secondary/60 transition-colors group"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text group-hover:text-secondary transition-colors">
                    {item.title || item.name || item.degree}
                  </h3>
                  <p className="text-text-muted text-sm mt-1 line-clamp-2">
                    {item.description || item.company || item.institution || item.category}
                  </p>
                  {(item.technologies || item.skills) && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {(item.technologies || item.skills || []).slice(0, 5).map((t, i) => (
                        <span key={i} className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded-full border border-secondary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleEdit(type, item._id)}
                    className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(type, item._id)}
                    className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    if (loading) return (
      <div className="flex flex-col items-center justify-center h-64">
        <FaSpinner className="text-4xl text-secondary animate-spin mb-4" />
        <p className="text-text-muted animate-pulse">Loading dashboard data...</p>
      </div>
    );

    switch(activeTab) {
      case 'dashboard': return renderDashboard();
      case 'projects': return renderList('projects', projects, 'Projects', FaProjectDiagram, 'Add Project');
      case 'experience': return renderList('experience', experiences, 'Experience', FaBriefcase, 'Add Experience');
      case 'education': return renderList('education', education, 'Education', FaGraduationCap, 'Add Education');
      case 'skills': return renderList('skills', skills, 'Skills', FaCogs, 'Add Skill');
      case 'certifications': return renderList('certifications', certifications, 'Certifications', FaCertificate, 'Add Certification');
      case 'resume': return <div className="text-center py-20 bg-primary/20 rounded-2xl border border-dashed border-secondary/30 text-text-muted">Resume management coming soon...</div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-text font-inter selection:bg-secondary/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-primary/80 backdrop-blur-xl border-b border-secondary/20 z-50">
        <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20">
              <FaUser className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-text via-text to-secondary bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">
                Portfolio Management System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-xs font-medium">{user?.email || 'Admin'}</span>
              <span className="text-[10px] text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Live Mode
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-xl transition-all duration-300"
            >
              <FaSignOutAlt className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold text-sm">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto pt-24 px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <nav className="bg-primary/40 backdrop-blur-md border border-secondary/20 rounded-2xl p-3 space-y-1">
              {adminTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsEditing(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                    activeTab === tab.id
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                      : 'text-text-muted hover:text-text hover:bg-secondary/10'
                  }`}
                >
                  <tab.icon className={`text-lg ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'} transition-transform`} />
                  <span className="font-medium">{tab.name}</span>
                  {activeTab === tab.id && (
                    <motion.div layoutId="activeTab" className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </nav>
            
            <div className="mt-6 p-4 bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 rounded-2xl">
              <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Quick Stats</h4>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Your portfolio summary is updated automatically as you manage your content.
              </p>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="min-h-[600px]">
            <AnimatePresence mode="wait">
              {isEditing ? (
                <AdminForm 
                  type={isEditing} 
                  id={editingId} 
                  onClose={() => setIsEditing(false)} 
                  onSuccess={() => {
                    setIsEditing(false);
                    fetchData();
                  }}
                  showMsg={showMsg}
                />
              ) : (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderContent()}
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Notifications */}
      <AnimatePresence>
        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl shadow-2xl z-[100] flex items-center gap-3 border ${
              message.type === 'success' 
                ? 'bg-green-500/10 border-green-500/50 text-green-400' 
                : 'bg-red-500/10 border-red-500/50 text-red-400'
            }`}
          >
            {message.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
            <span className="font-medium">{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Form Component for CRUD
const AdminForm = ({ type, id, onClose, onSuccess, showMsg }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id !== 'new') {
      fetchItem();
    } else {
      // Set initial data for new items
      const initialData = {
        projects: { status: 'Planning', isVisible: true, technologies: [], features: [], tags: [] },
        experience: { employmentType: 'Full-time', isCurrent: false, isVisible: true, responsibilities: [], achievements: [], technologies: [], skills: [] },
        education: { isCurrent: false, isVisible: true, subjects: [], achievements: [], activities: [] },
        skills: { level: 'Intermediate', category: 'Frontend', proficiency: 50, isVisible: true, isFeatured: false },
        certifications: { category: 'Web Development', isVerified: false, isVisible: true, isFeatured: false, skills: [], topics: [] }
      };
      setFormData(initialData[type] || {});
    }
  }, [id, type]);

  const fetchItem = async () => {
    setLoading(true);
    try {
      let api;
      switch(type) {
        case 'projects': api = projectsAPI; break;
        case 'experience': api = experienceAPI; break;
        case 'education': api = educationAPI; break;
        case 'skills': api = skillsAPI; break;
        case 'certifications': api = certificationsAPI; break;
        default: return;
      }
      const res = await api.getById(id);
      const data = res.data.data;
      
      // Format dates for input fields
      if (data.startDate) data.startDate = data.startDate.split('T')[0];
      if (data.endDate) data.endDate = data.endDate.split('T')[0];
      if (data.issueDate) data.issueDate = data.issueDate.split('T')[0];
      if (data.expiryDate) data.expiryDate = data.expiryDate.split('T')[0];
      
      setFormData(data);
    } catch (error) {
      showMsg('error', 'Failed to fetch item details');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value
    }));
  };

  const handleArrayChange = (name, index, value) => {
    const newArray = [...(formData[name] || [])];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [name]: newArray }));
  };

  const addArrayItem = (name) => {
    setFormData(prev => ({ ...prev, [name]: [...(prev[name] || []), ''] }));
  };

  const removeArrayItem = (name, index) => {
    setFormData(prev => ({ ...prev, [name]: (prev[name] || []).filter((_, i) => i !== index) }));
  };

  const typeLabel = {
    projects: 'Project',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skill',
    certifications: 'Certification'
  }[type] || type;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let api;
      switch(type) {
        case 'projects': api = projectsAPI; break;
        case 'experience': api = experienceAPI; break;
        case 'education': api = educationAPI; break;
        case 'skills': api = skillsAPI; break;
        case 'certifications': api = certificationsAPI; break;
        default: return;
      }

      // Clean up array fields — remove empty strings before submitting
      const cleanedData = { ...formData };
      Object.keys(cleanedData).forEach(key => {
        if (Array.isArray(cleanedData[key])) {
          cleanedData[key] = cleanedData[key].filter(item => item && item.trim && item.trim() !== '');
        }
      });

      if (id === 'new') {
        await api.create(cleanedData);
        showMsg('success', `${typeLabel} created successfully`);
      } else {
        await api.update(id, cleanedData);
        showMsg('success', `${typeLabel} updated successfully`);
      }
      onSuccess();
    } catch (error) {
      showMsg('error', handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  const Input = ({ label, name, type = "text", ...props }) => (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-text-muted ml-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name] ?? ''}
        onChange={handleChange}
        className="w-full bg-background/50 border border-secondary/20 rounded-xl px-4 py-2.5 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-text-muted/30"
        {...props}
      />
    </div>
  );

  const Select = ({ label, name, options }) => (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-text-muted ml-1">{label}</label>
      <select
        name={name}
        value={formData[name] ?? ''}
        onChange={handleChange}
        className="w-full bg-background/50 border border-secondary/20 rounded-xl px-4 py-2.5 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all appearance-none"
      >
        {options.map(opt => (
          <option key={opt.value || opt} value={opt.value || opt}>{opt.label || opt}</option>
        ))}
      </select>
    </div>
  );

  const TextArea = ({ label, name, rows = 3 }) => (
    <div className="space-y-1.5 lg:col-span-2">
      <label className="text-sm font-semibold text-text-muted ml-1">{label}</label>
      <textarea
        name={name}
        value={formData[name] ?? ''}
        onChange={handleChange}
        rows={rows}
        className="w-full bg-background/50 border border-secondary/20 rounded-xl px-4 py-2.5 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
      />
    </div>
  );

  const ArrayInput = ({ label, name }) => (
    <div className="lg:col-span-2 space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-text-muted ml-1">{label}</label>
        <button 
          type="button" 
          onClick={() => addArrayItem(name)}
          className="text-xs bg-secondary/10 hover:bg-secondary/20 text-secondary px-2 py-1 rounded-lg transition-colors flex items-center gap-1"
        >
          <FaPlus /> Add
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {(formData[name] || []).map((item, index) => (
          <div key={index} className="relative group">
            <input
              value={item}
              onChange={(e) => handleArrayChange(name, index, e.target.value)}
              className="w-full bg-background/50 border border-secondary/20 rounded-xl px-4 py-2 focus:border-secondary outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => removeArrayItem(name, index)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const Checkbox = ({ label, name }) => (
    <div className="flex items-center gap-3 py-2">
      <input
        type="checkbox"
        name={name}
        checked={formData[name] || false}
        onChange={handleChange}
        className="w-5 h-5 accent-secondary"
      />
      <label className="text-sm font-semibold text-text">{label}</label>
    </div>
  );

  if (loading && id !== 'new') return <div className="flex justify-center p-20"><FaSpinner className="animate-spin text-3xl text-secondary" /></div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-primary/50 backdrop-blur-xl border border-secondary/30 rounded-3xl overflow-hidden shadow-2xl"
    >
      <div className="p-6 border-b border-secondary/20 flex justify-between items-center bg-secondary/5">
        <h2 className="text-xl font-bold flex items-center gap-3">
          <div className="p-2 bg-secondary/20 rounded-lg"><FaEdit className="text-secondary" /></div>
          {id === 'new' ? `Add New ${type.slice(0, -1)}` : `Edit ${type.slice(0, -1)}`}
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-red-500/10 text-red-400 rounded-full transition-colors"><FaTimes /></button>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {type === 'projects' && (
            <>
              <Input label="Title" name="title" required />
              <Select label="Status" name="status" options={['Planning', 'In Progress', 'Completed', 'On Hold']} />
              <TextArea label="Description" name="description" required />
              <TextArea label="Long Description" name="longDescription" />
              <Input label="GitHub URL" name="github" type="url" />
              <Input label="Demo URL" name="demo" type="url" />
              <Input label="Image URL" name="image" />
              <Input label="Start Date" name="startDate" type="date" />
              <Input label="End Date" name="endDate" type="date" />
              <Input label="Priority" name="priority" type="number" />
              <ArrayInput label="Technologies" name="technologies" />
              <ArrayInput label="Features" name="features" />
              <ArrayInput label="Tags" name="tags" />
              <Checkbox label="Is Visible" name="isVisible" />
            </>
          )}

          {type === 'experience' && (
            <>
              <Input label="Job Title" name="title" required />
              <Input label="Company" name="company" required />
              <Input label="Location" name="location" />
              <Select label="Employment Type" name="employmentType" options={['Full-time', 'Part-time', 'Internship', 'Freelance', 'Contract']} />
              <Input label="Start Date" name="startDate" type="date" required />
              <Input label="End Date" name="endDate" type="date" disabled={formData.isCurrent} />
              <Input label="Company Website" name="companyWebsite" type="url" />
              <Input label="Company Logo URL" name="companyLogo" />
              <TextArea label="Description" name="description" required />
              <ArrayInput label="Responsibilities" name="responsibilities" />
              <ArrayInput label="Achievements" name="achievements" />
              <ArrayInput label="Technologies" name="technologies" />
              <Checkbox label="Current Job" name="isCurrent" />
              <Checkbox label="Is Visible" name="isVisible" />
            </>
          )}

          {type === 'education' && (
            <>
              <Input label="Degree" name="degree" required />
              <Input label="Institution" name="institution" required />
              <Input label="Field of Study" name="fieldOfStudy" />
              <Input label="Location" name="location" />
              <Input label="Start Date" name="startDate" type="date" required />
              <Input label="End Date" name="endDate" type="date" disabled={formData.isCurrent} />
              <Input label="CGPA" name="cgpa" type="number" step="0.01" />
              <Input label="Percentage" name="percentage" type="number" />
              <TextArea label="Description" name="description" />
              <ArrayInput label="Subjects" name="subjects" />
              <ArrayInput label="Achievements" name="achievements" />
              <Checkbox label="Currently Pursuing" name="isCurrent" />
              <Checkbox label="Is Visible" name="isVisible" />
            </>
          )}

          {type === 'skills' && (
            <>
              <Input label="Skill Name" name="name" required />
              <Select label="Category" name="category" options={['Programming Languages', 'Frontend', 'Backend', 'Database', 'Tools & Technologies', 'Frameworks', 'Cloud Services', 'Mobile Development', 'DevOps', 'Design', 'Soft Skills', 'Other']} />
              <Select label="Level" name="level" options={['Beginner', 'Intermediate', 'Advanced', 'Expert']} />
              <Input label="Proficiency (%)" name="proficiency" type="number" min="0" max="100" />
              <Input label="Years of Experience" name="yearsOfExperience" type="number" />
              <Input label="Icon Class/URL" name="icon" />
              <Input label="Color (Hex)" name="color" placeholder="#ffffff" />
              <Checkbox label="Featured Skill" name="isFeatured" />
              <Checkbox label="Is Visible" name="isVisible" />
            </>
          )}

          {type === 'certifications' && (
            <>
              <Input label="Title" name="title" required />
              <Input label="Provider" name="provider" required />
              <Select label="Category" name="category" options={['Programming', 'Web Development', 'Mobile Development', 'Data Science', 'Machine Learning', 'Cloud Computing', 'DevOps', 'Cybersecurity', 'Database', 'Design', 'Project Management', 'Soft Skills', 'Other']} />
              <Input label="Issue Date" name="issueDate" type="date" required />
              <Input label="Expiry Date" name="expiryDate" type="date" />
              <Input label="Credential ID" name="credentialId" />
              <Input label="Credential URL" name="credentialUrl" type="url" />
              <Input label="Duration" name="duration" />
              <TextArea label="Description" name="description" />
              <ArrayInput label="Skills Learned" name="skills" />
              <Checkbox label="Verified" name="isVerified" />
              <Checkbox label="Is Visible" name="isVisible" />
            </>
          )}
        </div>
        
        <div className="flex justify-end gap-3 pt-6 border-t border-secondary/20">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-secondary/30 hover:bg-secondary/5 font-semibold transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-2.5 rounded-xl bg-secondary text-white font-bold flex items-center gap-2 hover:bg-accent transition-all shadow-lg shadow-secondary/30 disabled:opacity-50"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaSave />}
            {id === 'new' ? 'Create' : 'Save Changes'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Admin;