import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-6"
          >
            <FaFileAlt className="text-3xl text-text" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            My
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {' '}Resume
            </span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Download or view my resume to learn more about my education, skills, and projects
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/PRACHI PRAVIN TALAVANEKAR-resume.pdf"
              download="PRACHI PRAVIN TALAVANEKAR-resume.pdf"
              className="bg-gradient-to-r from-secondary to-accent text-text px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border border-secondary"
            >
              <FaDownload />
              Download Resume
            </motion.a>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-text border-2 border-secondary px-8 py-4 rounded-xl font-semibold hover:bg-secondary hover:text-text transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaEye />
              View Online
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary border border-secondary rounded-2xl p-8 mb-12 shadow-xl"
        >
          <div className="bg-primary rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-secondary">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text mb-2">PRACHI PRAVIN TALAVANEKAR</h2>
              <p className="text-lg text-text mb-4">
                Computer Science Undergraduate | Full-Stack Developer | AI/ML Enthusiast
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
                <span>📧 talavanekarprachi31@gmail.com</span>
                <span>📱 +91 94225 09340</span>
                <span>🌐 github.com/prachiTalavanekar</span>
                <span>💼 linkedin.com/in/prachi-talavanekar</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Summary */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  SUMMARY
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Computer Science undergraduate and Full-Stack Developer with 1+ year of internship experience at Vyosim TechLab.
                  Skilled in building responsive web applications using MERN stack and Python, integrating APIs, and developing
                  scalable backend systems. Currently exploring Artificial Intelligence and Machine Learning to integrate intelligent
                  solutions into web applications. Strong problem-solving abilities with a passion for clean code and user-centric solutions.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  WORK EXPERIENCE
                </h3>
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-text">Web Developer Intern</h4>
                      <p className="text-text-muted">Vyosim TechLab</p>
                    </div>
                    <span className="text-sm text-text-muted">June 2023 – June 2024</span>
                  </div>
                  <ul className="text-sm text-text-muted list-disc list-inside mt-2">
                    <li>Worked as a Web Developer Intern contributing to front-end and back-end development of real-world web applications</li>
                    <li>Gained practical experience with the MERN stack and responsive UI design</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-text">Data Mapping & MySQL Database Intern</h4>
                      <p className="text-text-muted">Vyosim TechLab</p>
                    </div>
                    <span className="text-sm text-text-muted">Oct 2023</span>
                  </div>
                  <ul className="text-sm text-text-muted list-disc list-inside mt-2">
                    <li>Worked on data mapping and MySQL database management to support dynamic web applications</li>
                    <li>Gained hands-on experience in backend development and optimizing database queries</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  PROJECTS
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text">Belantara Beach Estate — Full-Stack Developer</h4>
                    <p className="text-sm text-text-muted mb-2">React.js, Node.js, Express.js, MySQL</p>
                    <ul className="text-sm text-text-muted list-disc list-inside">
                      <li>Built full-stack web application with REST API integration</li>
                      <li>Fetched and displayed dynamic backend data on the frontend</li>
                      <li>Improved website performance and overall user experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Vyosim Certificate Generator — Backend & Web Developer</h4>
                    <p className="text-sm text-text-muted mb-2">Python, Flask, HTML, CSS</p>
                    <ul className="text-sm text-text-muted list-disc list-inside">
                      <li>Developed an internal web application for automated certificate generation</li>
                      <li>Reduced manual processing and improved operational efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">AI-Based Disease Prediction & Doctor Appointment System</h4>
                    <p className="text-sm text-text-muted mb-2">MERN Stack, Machine Learning, AI Integration</p>
                    <ul className="text-sm text-text-muted list-disc list-inside">
                      <li>Full-stack MERN system integrated with AI/ML models for health prediction and diagnosis</li>
                      <li>Implemented machine learning algorithms for disease prediction based on symptoms</li>
                      <li>Doctor appointment scheduling system with user authentication and real-time updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Frontend Development Projects</h4>
                    <p className="text-sm text-text-muted mb-2">HTML, CSS, Bootstrap, JavaScript</p>
                    <ul className="text-sm text-text-muted list-disc list-inside">
                      <li>WOWCreative: Created responsive web pages and implemented modern UI layouts</li>
                      <li>Ostaff: Worked with JSON data integration and optimized website responsiveness</li>
                      <li>Outnovate: Redesigned web layouts and updated content to improve brand presentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  TECHNICAL SKILLS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-text mb-2">Languages:</p>
                    <p className="text-sm text-text-muted mb-4">Python (NumPy, Matplotlib, Pandas, Flask, Scikit-learn), C++, JavaScript</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Web Technologies:</p>
                    <p className="text-sm text-text-muted mb-4">HTML, CSS, JavaScript</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Frameworks:</p>
                    <p className="text-sm text-text-muted mb-4">React, Node.js, Express.js, Tailwind CSS, Bootstrap5</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Database & Tools:</p>
                    <p className="text-sm text-text-muted mb-4">MySQL, MongoDB, VS Code, Postman, Git, GitHub</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">AI/ML (Learning):</p>
                    <p className="text-sm text-text-muted mb-4">Machine Learning Algorithms, Data Analysis, Predictive Modeling</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Operating Systems:</p>
                    <p className="text-sm text-text-muted mb-4">Linux, Windows</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  EDUCATION
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-text">BSc. Computer Science</h4>
                      <p className="text-text-muted">S.R.M. College, Kudal | Mumbai University</p>
                    </div>
                    <span className="text-sm text-text-muted">2023 – 2026</span>
                  </div>
                  <p className="text-sm text-text-muted">Current CGPA: In Progress</p>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-text">Higher Secondary Education</h4>
                      <p className="text-text-muted">K.H.S. College, Kudal</p>
                    </div>
                    <span className="text-sm text-text-muted">2022 – 2023</span>
                  </div>
                  <p className="text-sm text-text-muted">Percentage: 82.33%</p>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-text">Secondary Education</h4>
                      <p className="text-text-muted">L.N.V.B. Bibavane</p>
                    </div>
                    <span className="text-sm text-text-muted">2020 – 2021</span>
                  </div>
                  <p className="text-sm text-text-muted">Percentage: 94.40%</p>
                </div>
              </div>

              {/* AI/ML Learning & Interests */}
              <div>
                <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                  AI/ML LEARNING & INTERESTS
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-text mb-2">Current Learning Focus:</h4>
                    <ul className="text-sm text-text-muted list-disc list-inside space-y-1">
                      <li>Machine Learning fundamentals and algorithms (Supervised & Unsupervised Learning)</li>
                      <li>Data preprocessing, feature engineering, and model evaluation techniques</li>
                      <li>Python libraries for ML: Scikit-learn, TensorFlow basics, and Keras</li>
                      <li>Statistical analysis and data visualization for predictive modeling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Areas of Interest:</h4>
                    <ul className="text-sm text-text-muted list-disc list-inside space-y-1">
                      <li>Healthcare AI applications and medical diagnosis systems</li>
                      <li>Natural Language Processing (NLP) for web applications</li>
                      <li>Computer Vision and image recognition technologies</li>
                      <li>Integration of AI/ML models with full-stack web development</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications & Soft Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                    CERTIFICATIONS
                  </h3>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li>• Advanced React - Coursera (May 2025)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-4 border-b-2 border-secondary pb-2">
                    SOFT SKILLS
                  </h3>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li>• Teamwork & Leadership</li>
                    <li>• Time Management</li>
                    <li>• Critical Thinking</li>
                    <li>• Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 border border-accent">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text mb-6">
                Interested in working together?
              </h2>
              <p className="text-text-muted mb-6 text-lg">
                Let's connect and discuss how I can contribute to your team!
              </p>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-accent text-text px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-block border border-secondary"
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;