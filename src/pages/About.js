import { motion } from 'framer-motion';

const About = () => {
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
            {/* <div className="bg-primary border border-secondary rounded-xl overflow-hidden shadow-xl max-w-sm mx-auto">
              <img
                src="/prachi.png"
                alt="Professional Photo"
                className="w-full h-auto object-contain"
              />
            </div> */}
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
                <p className="text-text-muted">Currently in 3rd Year | Expected Graduation: 2025</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">Technical Interests</h2>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Backend APIs',
                  'Database Management',
                  'Problem Solving',
                  'Software Architecture'
                ].map((interest, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-text-muted">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text mb-6">Soft Skills</h2>
              <ul className="space-y-3">
                {[
                  'Logical Thinking',
                  'Team Collaboration',
                  'Communication',
                  'Quick Learning',
                  'Attention to Detail'
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-text-muted">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;