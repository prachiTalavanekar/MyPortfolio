import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedin, FaDownload, FaEye, FaUser, FaGraduationCap,
  FaBriefcase, FaCode, FaProjectDiagram, FaFileAlt, FaCertificate,
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaMapMarkerAlt as FaMap,
  FaStar, FaTools, FaServer, FaPalette, FaBrain, FaLightbulb, FaUsers,
  FaComments, FaRocket, FaHeart, FaDatabase, FaLinux, FaJs, FaNodeJs,
  FaJava, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaAward, FaExternalLinkAlt,
  FaLaptopCode, FaSpinner, FaCheckCircle, FaReact, FaProjectDiagram as FaProj
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiMysql, SiCplusplus } from 'react-icons/si';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { analyticsAPI } from '../services/api';

// Section divider with label
const SectionDivider = ({ id, label, icon: Icon }) => (
  <div id={id} className="relative flex items-center gap-4 py-6 px-4 sm:px-8">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40" />
    <div className="flex items-center gap-2 bg-primary border border-secondary px-5 py-2 rounded-full shadow-lg">
      <Icon className="text-accent text-lg" />
      <span className="text-text font-bold text-sm tracking-widest uppercase">{label}</span>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40" />
  </div>
);

// Scroll-reveal wrapper
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

// ── ABOUT SECTION ──────────────────────────────────────────────
const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">

      {/* ── Top: Photo + Info ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">

        {/* Photo with animated rings */}
        <Reveal>
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">

              {/* Spinning dashed ring - slow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'transparent',
                  border: '2px dashed rgba(71,19,150,0.6)',
                  borderRadius: '50%',
                }}
              />

              {/* Spinning dashed ring - reverse, faster */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{
                  inset: '10px',
                  border: '2px dashed rgba(71,19,150,0.35)',
                  borderRadius: '50%',
                }}
              />

              {/* Pulsing glow behind photo */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute rounded-full"
                style={{
                  inset: '20px',
                  background: 'radial-gradient(circle, rgba(71,19,150,0.5) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(8px)',
                }}
              />

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
                style={{ borderRadius: '50%' }}
              >
                <div
                  className="absolute w-3 h-3 bg-accent rounded-full shadow-lg"
                  style={{ top: '4px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 8px rgba(71,19,150,0.9)' }}
                />
              </motion.div>

              {/* Orbiting dot opposite */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{ inset: '10px' }}
              >
                <div
                  className="absolute w-2 h-2 bg-secondary rounded-full"
                  style={{ bottom: '4px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 6px rgba(71,19,150,0.8)' }}
                />
              </motion.div>

              {/* Actual photo */}
              <motion.div
                animate={{ boxShadow: ['0 0 20px rgba(71,19,150,0.4)', '0 0 40px rgba(71,19,150,0.7)', '0 0 20px rgba(71,19,150,0.4)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-secondary overflow-hidden z-10"
              >
                <img src="/prachi.png" alt="Prachi Talavanekar" className="w-full h-full object-cover object-top" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-secondary to-accent text-text text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-accent whitespace-nowrap"
              >
                Full-Stack Dev 🚀
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* Info cards */}
        <div className="space-y-5">
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Prachi</span>
            </h2>
            <p className="text-text-muted text-base leading-relaxed mt-3">
              Aspiring software developer focused on building strong fundamentals in web development and backend technologies.
              Passionate about creating efficient solutions and actively exploring <span className="text-accent font-semibold">AI/ML</span> to understand
              how intelligent systems can enhance modern applications.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* Education card */}
              <div className="bg-primary border border-secondary rounded-2xl p-5 hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-text text-sm" />
                  </div>
                  <span className="text-text font-semibold text-sm">Education</span>
                </div>
                <p className="text-text text-sm font-medium">BSc. Computer Science</p>
                <p className="text-text-muted text-xs mt-1">Mumbai University • 2023–2026</p>
              </div>

              {/* Experience card */}
              <div className="bg-primary border border-secondary rounded-2xl p-5 hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBriefcase className="text-text text-sm" />
                  </div>
                  <span className="text-text font-semibold text-sm">Experience</span>
                </div>
                <p className="text-text text-sm font-medium">Web Developer Intern</p>
                <p className="text-text-muted text-xs mt-1">Vyosim TechLab • 1+ Year</p>
              </div>

              {/* Location card */}
              <div className="bg-primary border border-secondary rounded-2xl p-5 hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-text text-sm" />
                  </div>
                  <span className="text-text font-semibold text-sm">Location</span>
                </div>
                <p className="text-text text-sm font-medium">Kudal, Maharashtra</p>
                <p className="text-text-muted text-xs mt-1">India 🇮🇳</p>
              </div>

              {/* AI/ML card */}
              <div className="bg-primary border border-secondary rounded-2xl p-5 hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBrain className="text-text text-sm" />
                  </div>
                  <span className="text-text font-semibold text-sm">Currently Learning</span>
                </div>
                <p className="text-text text-sm font-medium">AI / ML</p>
                <p className="text-text-muted text-xs mt-1">Scikit-learn • TensorFlow</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

// ── EDUCATION SECTION ──────────────────────────────────────────
const CardContent = ({ edu }) => (
  <>
    <div className="flex items-start gap-3 mb-3">
      <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        <FaGraduationCap className="text-text text-base" />
      </div>
      <div>
        <h3 className="text-base font-bold text-text group-hover:text-accent transition-colors leading-tight">{edu.degree}</h3>
        <p className="text-text-muted text-xs mt-0.5">{edu.institution}</p>
      </div>
    </div>
    <div className="flex flex-wrap items-center gap-2 mb-3">
      <span className="flex items-center gap-1 text-xs text-text-muted"><FaCalendarAlt className="text-accent text-xs" />{edu.duration}</span>
      <span className="text-secondary opacity-40">•</span>
      <span className="flex items-center gap-1 text-xs text-text-muted"><FaStar className="text-accent text-xs" />{edu.grade}</span>
      <span className="ml-auto bg-gradient-to-r from-secondary to-accent text-text px-2.5 py-0.5 rounded-full text-xs font-medium">{edu.status}</span>
    </div>
    <p className="text-text-muted text-xs leading-relaxed mb-3">{edu.description}</p>
    <ul className="space-y-1">
      {edu.achievements.map((a, j) => (
        <li key={j} className="flex items-start gap-2 text-xs text-text-muted">
          <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />{a}
        </li>
      ))}
    </ul>
  </>
);

const EducationSection = () => {
  const educationData = [
    {
      degree: 'BSc. Computer Science',
      institution: 'S.R.M. College, Kudal | Mumbai University',
      duration: '2023 – 2026',
      status: 'Currently Pursuing',
      grade: 'In Progress',
      description: 'Comprehensive study of computer science fundamentals including programming, data structures, algorithms, database management, and software engineering principles.',
      achievements: ['Active participation in coding competitions', 'Member of Computer Science Society', 'Completed multiple web development projects'],
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'K.H.S. College, Kudal | Maharashtra State Board',
      duration: '2022 – 2023',
      status: 'Completed',
      grade: '82.33%',
      description: 'Specialized in Science stream with focus on Computer Science, Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundation.',
      achievements: ['Excellence in Mathematics and Computer Science', 'Participated in science exhibitions', 'School topper in Computer Science'],
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'L.N.V.B. Bibavane',
      duration: '2020 – 2021',
      status: 'Completed',
      grade: '94.40%',
      description: 'Strong foundation in core subjects with excellent performance in Mathematics and Science.',
      achievements: ['School rank holder', 'Active in extracurricular activities', 'Mathematics Olympiad participant'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="relative">
        {/* Desktop: center vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary to-transparent opacity-50 hidden md:block" />
        {/* Mobile: left vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary to-transparent opacity-50 md:hidden" />

        <div className="space-y-8 sm:space-y-12">
          {educationData.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal key={i} delay={i * 0.15}>
                {/* Mobile layout: left dot + card */}
                <div className="md:hidden flex items-start gap-4 pl-2">
                  <div className="flex flex-col items-center flex-shrink-0 mt-5" style={{ width: '40px' }}>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-accent border-2 border-background z-10"
                      style={{ boxShadow: '0 0 8px rgba(71,19,150,0.9)' }} />
                  </div>
                  <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}
                    className="flex-1 bg-primary border border-secondary rounded-2xl p-4 shadow-xl hover:border-accent transition-all duration-300 group">
                    <CardContent edu={edu} />
                  </motion.div>
                </div>

                {/* Desktop layout: alternating */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-0">
                  {isLeft ? (
                    <motion.div whileHover={{ scale: 1.02, y: -3 }} transition={{ duration: 0.2 }}
                      className="bg-primary border border-secondary rounded-2xl p-6 shadow-xl hover:border-accent transition-all duration-300 group mr-6">
                      <CardContent edu={edu} />
                    </motion.div>
                  ) : <div />}

                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex-1 w-px bg-gradient-to-b from-transparent to-secondary opacity-50" />
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-secondary to-accent border-2 border-background flex-shrink-0 z-10"
                      style={{ boxShadow: '0 0 10px rgba(71,19,150,0.8)' }} />
                    <div className="flex-1 w-px bg-gradient-to-b from-secondary to-transparent opacity-50" />
                  </div>

                  {!isLeft ? (
                    <motion.div whileHover={{ scale: 1.02, y: -3 }} transition={{ duration: 0.2 }}
                      className="bg-primary border border-secondary rounded-2xl p-6 shadow-xl hover:border-accent transition-all duration-300 group ml-6">
                      <CardContent edu={edu} />
                    </motion.div>
                  ) : <div />}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ── EXPERIENCE SECTION ─────────────────────────────────────────
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Web Developer Intern', company: 'Vyosim TechLab', duration: 'June 2023 – June 2024', type: 'Internship',
      responsibilities: ['Contributed to front-end and back-end development of real-world web applications', 'Gained practical experience with the MERN stack and responsive UI design', 'Worked on data mapping and MySQL database management', 'Optimized database queries for dynamic web applications'],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    },
  ];
  const skills = ['Frontend Development', 'React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git & GitHub', 'REST APIs', 'Responsive Design', 'Python', 'Flask'];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {experiences.map((exp, i) => (
        <Reveal key={i} delay={0.1}>
          <div className="bg-primary border border-secondary rounded-2xl p-5 sm:p-8 shadow-xl hover:border-accent transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-r from-secondary to-accent p-3 rounded-xl flex-shrink-0">
                <FaBriefcase className="text-xl text-text" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">{exp.title}</h3>
                <p className="text-text-muted font-medium">{exp.company}</p>
                <div className="flex flex-wrap gap-3 mt-1 text-sm text-text-muted">
                  <span className="flex items-center gap-1"><FaCalendarAlt className="text-xs" />{exp.duration}</span>
                </div>
                <span className="inline-block mt-2 bg-gradient-to-r from-secondary to-accent text-text px-3 py-1 rounded-full text-xs font-medium">{exp.type}</span>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-text mb-3 flex items-center gap-2"><FaCode />Key Responsibilities</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((r, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text mb-3 flex items-center gap-2"><FaLaptopCode />Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((t, j) => (
                  <span key={j} className="bg-accent text-text px-3 py-1 rounded-lg text-xs border border-secondary">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
      <Reveal delay={0.2}>
        <div className="bg-primary border border-secondary rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-bold text-text mb-4 text-center">Professional Skills</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((s, i) => (
              <span key={i} className="bg-secondary text-text px-3 py-1.5 rounded-lg text-sm font-medium border border-accent">{s}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

// ── SKILLS SECTION ─────────────────────────────────────────────
const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillCategories = [
    { id: 'programming', title: 'Programming Languages', icon: FaCode, color: 'from-blue-500 to-purple-600', skills: [{ name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', level: 85 }, { name: 'Python', icon: FaPython, color: 'text-blue-400', level: 75 }, { name: 'C++', icon: SiCplusplus, color: 'text-blue-300', level: 70 }] },
    { id: 'frontend', title: 'Frontend', icon: FaPalette, color: 'from-pink-500 to-rose-600', skills: [{ name: 'React.js', icon: FaReact, color: 'text-cyan-400', level: 85 }, { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', level: 90 }, { name: 'HTML5', icon: FaHtml5, color: 'text-orange-400', level: 95 }, { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400', level: 90 }] },
    { id: 'backend', title: 'Backend', icon: FaServer, color: 'from-green-500 to-emerald-600', skills: [{ name: 'Node.js', icon: FaNodeJs, color: 'text-green-400', level: 80 }, { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', level: 75 }, { name: 'Flask', icon: FaPython, color: 'text-blue-300', level: 70 }] },
    { id: 'database', title: 'Database', icon: FaDatabase, color: 'from-indigo-500 to-blue-600', skills: [{ name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', level: 80 }, { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', level: 75 }] },
    { id: 'tools', title: 'Tools', icon: FaTools, color: 'from-orange-500 to-red-600', skills: [{ name: 'Git', icon: FaGitAlt, color: 'text-orange-400', level: 85 }, { name: 'GitHub', icon: FaGithub, color: 'text-gray-300', level: 85 }, { name: 'Postman', icon: SiPostman, color: 'text-orange-400', level: 80 }] },
    { id: 'aiml', title: 'AI/ML (Learning)', icon: FaBrain, color: 'from-purple-500 to-violet-600', skills: [{ name: 'Scikit-learn', icon: FaBrain, color: 'text-purple-400', level: 50 }, { name: 'NumPy/Pandas', icon: FaPython, color: 'text-blue-400', level: 60 }, { name: 'ML Algorithms', icon: FaBrain, color: 'text-pink-400', level: 45 }] },
  ];
  const filters = [{ id: 'all', name: 'All', icon: FaStar }, ...skillCategories.map(c => ({ id: c.id, name: c.title, icon: c.icon }))];
  const filtered = activeFilter === 'all' ? skillCategories : skillCategories.filter(c => c.id === activeFilter);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Reveal>
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {filters.map((f) => (
            <button key={f.id} onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeFilter === f.id ? 'bg-secondary text-text shadow-lg scale-105' : 'bg-primary text-text-muted hover:bg-secondary hover:text-text border border-secondary'}`}>
              <f.icon className="text-xs" />{f.name}
            </button>
          ))}
        </div>
      </Reveal>
      <AnimatePresence mode="wait">
        <motion.div key={activeFilter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((cat, ci) => (
            <Reveal key={cat.id} delay={ci * 0.08}>
              <div className="bg-primary rounded-2xl shadow-xl p-6 border border-secondary hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center`}>
                    <cat.icon className="text-white text-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name} onMouseEnter={() => setHoveredSkill(`${cat.id}-${si}`)} onMouseLeave={() => setHoveredSkill(null)}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <skill.icon className={`text-xl ${skill.color}`} />
                          <span className="text-text text-sm font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-xs font-bold text-accent">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                        <motion.div className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                          initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1.2, ease: 'easeOut' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ── PROJECTS SECTION ───────────────────────────────────────────
const ProjectsSection = () => {
  const projects = [
    { title: 'Belantara Beach Estate', icon: '🏖️' },
    { title: 'Vyosim Certificate Generator', icon: '📜' },
    { title: 'AI Disease Prediction System', icon: '🤖' },
    { title: 'WOWCreative', icon: '🎨' },
    { title: 'Ostaff', icon: '👥' },
    { title: 'Outnovate', icon: '🚀' },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03, y: -3 }} transition={{ duration: 0.2 }}
              className="bg-primary border border-secondary rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-accent transition-all duration-300 group shadow-lg">
              <span className="text-2xl">{p.icon}</span>
              <span className="text-text font-semibold text-sm group-hover:text-accent transition-colors">{p.title}</span>
            </motion.div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="flex justify-center">
          <Link to="/projects"
            className="flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-text px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 border border-secondary">
            <FaEye />View in Detail
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

// ── RESUME SECTION ─────────────────────────────────────────────
const ResumeSection = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <Reveal>
      <div className="bg-primary border border-secondary rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text mb-1">PRACHI PRAVIN TALAVANEKAR</h2>
          <p className="text-text-muted mb-4">Computer Science Undergraduate | Full-Stack Developer | AI/ML Enthusiast</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-text-muted">
            <span>📧 talavanekarprachi31@gmail.com</span>
            <span>📱 +91 94225 09340</span>
            <span>🌐 github.com/prachiTalavanekar</span>
          </div>
        </div>
        {[
          { title: 'SUMMARY', content: <p className="text-sm text-text-muted leading-relaxed">Computer Science undergraduate and Full-Stack Developer with 1+ year of internship experience at Vyosim TechLab. Skilled in MERN stack and Python, integrating APIs, and developing scalable backend systems. Currently exploring AI/ML to integrate intelligent solutions into web applications.</p> },
          { title: 'WORK EXPERIENCE', content: <div><div className="flex justify-between mb-1"><div><p className="font-semibold text-text">Web Developer Intern — Vyosim TechLab</p></div><span className="text-sm text-text-muted">June 2023 – June 2024</span></div><ul className="text-sm text-text-muted list-disc list-inside mt-1 space-y-1"><li>Contributed to front-end and back-end development of real-world web applications</li><li>Worked on data mapping and MySQL database management</li></ul></div> },
          { title: 'TECHNICAL SKILLS', content: <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"><div><span className="font-semibold text-text">Languages: </span><span className="text-text-muted">Python, C++, JavaScript</span></div><div><span className="font-semibold text-text">Frameworks: </span><span className="text-text-muted">React, Node.js, Express.js, Flask, Tailwind, Bootstrap</span></div><div><span className="font-semibold text-text">Database: </span><span className="text-text-muted">MySQL, MongoDB</span></div><div><span className="font-semibold text-text">AI/ML: </span><span className="text-text-muted">Scikit-learn, NumPy, Pandas, Matplotlib</span></div></div> },
          { title: 'EDUCATION', content: <div className="space-y-3 text-sm"><div className="flex justify-between"><div><p className="font-semibold text-text">BSc. Computer Science — S.R.M. College, Kudal</p><p className="text-text-muted">Mumbai University</p></div><span className="text-text-muted">2023–2026</span></div><div className="flex justify-between"><div><p className="font-semibold text-text">HSC — K.H.S. College, Kudal</p><p className="text-text-muted">82.33%</p></div><span className="text-text-muted">2022–2023</span></div><div className="flex justify-between"><div><p className="font-semibold text-text">SSC — L.N.V.B. Bibavane</p><p className="text-text-muted">94.40%</p></div><span className="text-text-muted">2020–2021</span></div></div> },
          { title: 'CERTIFICATIONS', content: <p className="text-sm text-text-muted">• Advanced React — Coursera (May 2025)</p> },
        ].map((sec, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-base font-bold text-text border-b-2 border-secondary pb-1 mb-3">{sec.title}</h3>
            {sec.content}
          </div>
        ))}
        <div className="text-center mt-6">
          <a href="/PRACHI PRAVIN TALAVANEKAR-resume.pdf" download="PRACHI PRAVIN TALAVANEKAR-resume.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-text px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 border border-secondary">
            <FaDownload />Download Full Resume
          </a>
        </div>
      </div>
    </Reveal>
  </div>
);

// ── CERTIFICATIONS SECTION ─────────────────────────────────────
const CertificationsSection = () => {
  const [current, setCurrent] = useState(0);

  const certs = [
    { title: 'Advanced React', provider: 'Coursera', date: 'May 2025', skills: ['React.js', 'Hooks', 'Context API', 'Performance'], url: '#' },
  ];

  const prev = () => setCurrent((c) => (c - 1 + certs.length) % certs.length);
  const next = () => setCurrent((c) => (c + 1) % certs.length);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="bg-primary rounded-2xl overflow-hidden border border-secondary hover:border-accent transition-all duration-300 group shadow-xl"
          >
            <div className="h-36 bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <FaCertificate className="text-6xl text-white opacity-50" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-text mb-1 group-hover:text-accent transition-colors">
                {certs[current].title}
              </h3>
              <p className="text-text-muted text-sm mb-4">
                {certs[current].provider} • {certs[current].date}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {certs[current].skills.map((s, j) => (
                  <span key={j} className="bg-secondary text-text px-3 py-1 rounded-lg text-xs border border-accent">{s}</span>
                ))}
              </div>
              <a href={certs[current].url} className="flex items-center gap-2 text-text-muted hover:text-text text-sm transition-colors">
                <FaExternalLinkAlt className="text-xs" />View Credential
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons — only show if more than 1 cert */}
        {certs.length > 1 && (
          <>
            <button onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-primary border border-secondary rounded-full flex items-center justify-center hover:border-accent hover:bg-secondary transition-all duration-300 shadow-lg z-10">
              <span className="text-text text-lg">‹</span>
            </button>
            <button onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-primary border border-secondary rounded-full flex items-center justify-center hover:border-accent hover:bg-secondary transition-all duration-300 shadow-lg z-10">
              <span className="text-text text-lg">›</span>
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {certs.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {certs.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent w-6' : 'bg-secondary opacity-50'}`} />
          ))}
        </div>
      )}

      {/* Count */}
      <p className="text-center text-text-muted text-xs mt-3">
        {current + 1} / {certs.length}
      </p>
    </div>
  );
};

// ── CONTACT SECTION ────────────────────────────────────────────
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { contactAPI } = await import('../services/api');
      await contactAPI.submit(formData);
    } catch (_) {}
    await new Promise(r => setTimeout(r, 800));
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <Reveal>
          <div className="space-y-6">
            {[{ icon: FaEnvelope, label: 'Email', value: 'talavanekarprachi31@gmail.com' }, { icon: FaPhone, label: 'Phone', value: '+91 94225 09340' }, { icon: FaMapMarkerAlt, label: 'Location', value: 'Kudal, Maharashtra, India' }].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-secondary text-text p-3 rounded-lg border border-secondary flex-shrink-0"><item.icon size={18} /></div>
                <div><p className="font-semibold text-text text-sm">{item.label}</p><p className="text-text-muted text-sm">{item.value}</p></div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/prachiTalavanekar" target="_blank" rel="noopener noreferrer" className="bg-primary text-text p-3 rounded-lg hover:bg-secondary transition-colors border border-secondary"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/prachi-talavanekar-124195312" target="_blank" rel="noopener noreferrer" className="bg-primary text-text p-3 rounded-lg hover:bg-secondary transition-colors border border-secondary"><FaLinkedin size={22} /></a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="bg-primary rounded-2xl p-6 border border-secondary shadow-xl">
            {submitStatus === 'success' && (
              <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-3 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" /><p className="text-green-400 text-sm">Message sent! I'll get back to you soon.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-1">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name"
                    className="w-full px-4 py-2.5 bg-background border border-secondary rounded-lg text-text text-sm focus:ring-2 focus:ring-secondary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                    className="w-full px-4 py-2.5 bg-background border border-secondary rounded-lg text-text text-sm focus:ring-2 focus:ring-secondary focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">Subject *</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What's this about?"
                  className="w-full px-4 py-2.5 bg-background border border-secondary rounded-lg text-text text-sm focus:ring-2 focus:ring-secondary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Your message..."
                  className="w-full px-4 py-2.5 bg-background border border-secondary rounded-lg text-text text-sm focus:ring-2 focus:ring-secondary focus:border-transparent resize-none" />
              </div>
              <button type="submit" disabled={isSubmitting}
                className="w-full bg-secondary text-text py-3 rounded-lg font-semibold hover:bg-accent transition-colors border border-secondary disabled:opacity-50 flex items-center justify-center gap-2 text-sm">
                {isSubmitting ? <><FaSpinner className="animate-spin" />Sending...</> : 'Send Message'}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

// ── MAIN HOME COMPONENT ────────────────────────────────────────
const Home = () => {
  useEffect(() => {
    const trackHit = async () => {
      try {
        await analyticsAPI.hit();
      } catch (error) {
        console.error('Error tracking hit:', error);
      }
    };
    trackHit();
  }, []);

  return (
    <div className="bg-background">
      {/* ── HERO (original, untouched) ── */}
      <div className="pt-16 min-h-screen bg-gradient-to-br from-background via-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-20">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute inset-0 blur-3xl opacity-20 sm:opacity-30 hidden sm:block">
                  <div className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">Prachi Pravin Talavanekar</div>
                </div>
                <h1 className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                  <div className="block md:inline-block">
                    <motion.span initial={{ opacity: 0, y: 30, rotateX: -45 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 1.0, delay: 0.2, type: 'spring', stiffness: 80 }}
                      className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 transition-all duration-1000 cursor-default font-extrabold" style={{ fontFamily: "'Poppins', sans-serif" }}>Prachi</motion.span>
                    <motion.span initial={{ opacity: 0, y: 30, rotateX: -45 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 1.0, delay: 0.4, type: 'spring', stiffness: 80 }}
                      className="inline-block ml-2 md:ml-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-green-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-1000 cursor-default font-extrabold" style={{ fontFamily: "'Poppins', sans-serif" }}>Pravin</motion.span>
                  </div>
                  <div className="block mt-1 md:mt-0 md:inline-block">
                    <motion.span initial={{ opacity: 0, y: 30, rotateX: -45 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 1.0, delay: 0.6, type: 'spring', stiffness: 80 }}
                      className="inline-block md:ml-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-1000 cursor-default font-extrabold" style={{ fontFamily: "'Poppins', sans-serif" }}>Talavanekar</motion.span>
                  </div>
                </h1>
                <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 1.0 }}
                  className="h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full mx-auto mt-3 sm:mt-4" style={{ maxWidth: '300px' }} />
                <div className="absolute inset-0 pointer-events-none hidden sm:block">
                  {[...Array(3)].map((_, i) => (
                    <motion.div key={i} className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                      initial={{ x: Math.random() * 400, y: Math.random() * 100, opacity: 0 }}
                      animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 3, delay: 1.2 + i * 0.4, repeat: Infinity, repeatDelay: 3 }} />
                  ))}
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text mb-6 sm:mb-8 px-2">Aspiring Software Developer | Frontend Developer | AI/ML Learner</h2>
              <p className="text-sm sm:text-base lg:text-lg text-text-muted max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
                I am an aspiring software developer with hands-on experience in frontend web development and a strong interest in artificial intelligence and machine learning. I enjoy building clean, responsive user interfaces and continuously learning new technologies to grow as a full-stack developer.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <a href="#projects" className="w-full sm:w-auto bg-secondary text-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2 border border-secondary text-sm sm:text-base">
                <FaEye />View Projects
              </a>
              <a href="/PRACHI PRAVIN TALAVANEKAR-resume.pdf" download="PRACHI PRAVIN TALAVANEKAR-resume.pdf"
                className="w-full sm:w-auto bg-transparent text-text border-2 border-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-secondary hover:text-text transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                <FaDownload />Download Resume
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-6 sm:space-x-8 mb-12 sm:mb-0">
              <a href="https://github.com/prachiTalavanekar" target="_blank" rel="noopener noreferrer" className="text-text hover:text-text-muted transition-colors p-2 rounded-lg hover:bg-secondary hover:bg-opacity-20"><FaGithub size={28} /></a>
              <a href="https://www.linkedin.com/in/prachi-talavanekar-124195312" target="_blank" rel="noopener noreferrer" className="text-text hover:text-text-muted transition-colors p-2 rounded-lg hover:bg-secondary hover:bg-opacity-20"><FaLinkedin size={28} /></a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 px-2">
            {[{ val: '5+', label: 'Projects Completed' }, { val: '3rd Year', label: 'Computer Science' }, { val: 'MERN', label: 'Stack Learning' }].map((s, i) => (
              <div key={i} className="text-center p-4 sm:p-6 bg-primary rounded-lg shadow-md border border-secondary">
                <h3 className="text-2xl sm:text-3xl font-bold text-text mb-1 sm:mb-2">{s.val}</h3>
                <p className="text-text-muted text-sm sm:text-base">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── SECTIONS BELOW HERO ── */}
      <SectionDivider id="about" label="About" icon={FaUser} />
      <AboutSection />

      <SectionDivider id="education" label="Education" icon={FaGraduationCap} />
      <EducationSection />

      <SectionDivider id="experience" label="Experience" icon={FaBriefcase} />
      <ExperienceSection />

      <SectionDivider id="skills" label="Skills" icon={FaCode} />
      <SkillsSection />

      <SectionDivider id="projects" label="Projects" icon={FaProjectDiagram} />
      <ProjectsSection />

      <SectionDivider id="certifications" label="Certifications" icon={FaCertificate} />
      <CertificationsSection />

      <SectionDivider id="contact" label="Contact" icon={FaEnvelope} />
      <ContactSection />

      {/* Footer spacing */}
      <div className="h-16" />
    </div>
  );
};

export default Home;
