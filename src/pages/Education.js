import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Mumbai University',
      location: 'Kudal, Sindhudurg, Maharashtra',
      duration: '2023 - 2026',
      status: 'Currently Pursuing',
      cgpa: 'CGPA: None',
      description: 'Comprehensive study of computer science fundamentals including programming, data structures, algorithms, database management, and software engineering principles.',
      subjects: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering',
        'Web Development',
        'Artificial Intelligence'
      ],
      achievements: [
        'Consistent academic performance with 8.5+ CGPA',
        'Active participation in coding competitions',
        'Member of Computer Science Society',
        'Completed multiple web development projects'
      ]
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Maharashtra State Board of Secondary & Higher Secondary Education, Pune',
      location: 'Mumbai, Maharashtra',
      duration: '2022 - 2023',
      status: 'Completed',
      cgpa: 'Percentage: 85%',
      description: 'Specialized in Science stream with focus on Computer Science, Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundation.',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Computer Science'
      ],
      achievements: [
        'Scored 85% in HSC examinations',
        'Excellence in Mathematics and Computer Science',
        'Participated in science exhibitions',
        'School topper in Computer Science'
      ]
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'High School',
      location: 'Mumbai, Maharashtra',
      duration: '2018 - 2020',
      status: 'Completed',
      cgpa: 'Percentage: 88%',
      description: 'Strong foundation in core subjects with excellent performance in Mathematics and Science.',
      subjects: [
        'Mathematics',
        'Science',
        'English',
        'Hindi',
        'Social Studies'
      ],
      achievements: [
        'Scored 88% in SSC examinations',
        'School rank holder',
        'Active in extracurricular activities',
        'Mathematics Olympiad participant'
      ]
    }
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
            Education
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            My academic journey and educational background in computer science and technology
          </p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-primary border border-secondary rounded-xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-secondary p-3 rounded-lg">
                      <FaGraduationCap className="text-2xl text-text" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-text mb-2">
                        {edu.degree}
                      </h2>
                      <h3 className="text-xl text-text mb-2">
                        {edu.institution}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-text-muted mb-4">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <FaStar className="mr-2" />
                          <span>{edu.cgpa}</span>
                        </div>
                      </div>
                      <div className="inline-block bg-secondary text-text px-3 py-1 rounded-full text-sm font-medium">
                        {edu.status}
                      </div>
                    </div>
                  </div>

                  <p className="text-text-muted leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text mb-3">Key Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subIndex) => (
                        <span
                          key={subIndex}
                          className="bg-accent text-text px-3 py-1 rounded-lg text-sm border border-secondary"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>

                {/* Achievements */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-text mb-4">Achievements</h4>
                  <ul className="space-y-3">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-text-muted text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary border border-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-text mb-4">
              Continuous Learning
            </h2>
            <p className="text-text-muted leading-relaxed max-w-3xl mx-auto">
              Beyond formal education, I actively pursue online courses, certifications, and hands-on projects 
              to stay updated with the latest technologies and industry trends in software development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;