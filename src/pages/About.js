import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaBrain, 
  FaProjectDiagram,
  FaLinux,
  FaLightbulb,
  FaUsers,
  FaComments,
  FaRocket,
  FaEye,
  FaHeart
} from 'react-icons/fa';

const About = () => {
  const technicalInterests = [
    { name: 'Web Development', icon: FaCode, color: 'text-blue-400' },
    { name: 'Backend APIs', icon: FaServer, color: 'text-green-400' },
    { name: 'Database Management', icon: FaDatabase, color: 'text-purple-400' },
    { name: 'Problem Solving', icon: FaBrain, color: 'text-pink-400' },
    { name: 'Software Architecture', icon: FaProjectDiagram, color: 'text-yellow-400' },
    { name: 'Linux Server Administration', icon: FaLinux, color: 'text-orange-400' }
  ];

  const softSkills = [
    { name: 'Logical Thinking', icon: FaLightbulb, color: 'text-yellow-400' },
    { name: 'Team Collaboration', icon: FaUsers, color: 'text-blue-400' },
    { name: 'Communication', icon: FaComments, color: 'text-green-400' },
    { name: 'Quick Learning', icon: FaRocket, color: 'text-red-400' },
    { name: 'Attention to Detail', icon: FaEye, color: 'text-purple-400' },
    { name: 'Passion for Technology', icon: FaHeart, color: 'text-pink-400' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            About Me
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Get to know more about my background, education, and aspirations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-primary border border-secondary rounded-xl overflow-hidden shadow-xl max-w-xs mx-auto">
              <img
                src="/prachi.png"
                alt="Professional Photo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-text mb-4">Education</h2>
              <div className="bg-primary border border-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-text-muted mb-2">Mumbai University</p>
                <p className="text-text-muted">Currently in 3rd Year | Expected Graduation: 2026</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text mb-4">Career Objective</h2>
              <p className="text-text-muted leading-relaxed">
                Aspiring software developer focused on building strong fundamentals in web development and backend technologies while continuously learning full-stack development. Passionate about creating efficient solutions and actively exploring Artificial Intelligence and Machine Learning to understand how intelligent systems can enhance modern applications.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          {/* Technical Interests Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Technical Interests
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalInterests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(71, 19, 150, 0.3)" 
                  }}
                  className="bg-primary border border-secondary rounded-xl p-6 text-center hover:border-accent transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-4">
                    <interest.icon 
                      className={`text-4xl ${interest.color} mx-auto group-hover:scale-110 transition-transform duration-300`} 
                    />
                  </div>
                  <h3 className="text-text font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                    {interest.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div>
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Soft Skills & Personal Qualities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(71, 19, 150, 0.3)" 
                  }}
                  className="bg-primary border border-secondary rounded-xl p-6 text-center hover:border-accent transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-4">
                    <skill.icon 
                      className={`text-4xl ${skill.color} mx-auto group-hover:scale-110 transition-transform duration-300`} 
                    />
                  </div>
                  <h3 className="text-text font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-primary border border-secondary rounded-xl p-8">
              <h2 className="text-2xl font-bold text-text mb-4">
                Always Learning, Always Growing
              </h2>
              <p className="text-text-muted leading-relaxed max-w-3xl mx-auto">
                I believe in continuous improvement and staying curious about new technologies. 
                My goal is to combine technical expertise with strong interpersonal skills to 
                create meaningful solutions that make a positive impact.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;