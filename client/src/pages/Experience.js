import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
    const experienceData = [
        {
            id: 1,
            title: 'Frontend Developer Intern',
            company: 'Tech Solutions Pvt Ltd',
            location: 'Mumbai, Maharashtra',
            duration: 'June 2024 - August 2024',
            type: 'Internship',
            description: 'Worked on developing responsive web applications using React.js and modern frontend technologies. Collaborated with senior developers to build user-friendly interfaces and optimize application performance.',
            responsibilities: [
                'Developed responsive web components using React.js and Tailwind CSS',
                'Implemented interactive user interfaces with smooth animations',
                'Collaborated with design team to convert Figma designs to code',
                'Optimized application performance and improved loading times',
                'Participated in code reviews and followed best practices',
                'Worked with REST APIs for data integration'
            ],
            technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'REST APIs'],
            achievements: [
                'Successfully delivered 3 major web components',
                'Improved application loading speed by 25%',
                'Received positive feedback from senior developers',
                'Completed internship with excellent performance rating'
            ]
        },
    ];

    const skills = [
        'Frontend Development',
        'React.js',
        'JavaScript',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Git & GitHub',
        'Responsive Design',
        'API Integration',
        'Problem Solving'
    ];

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
                        <FaBriefcase className="text-3xl text-text" />
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                        Professional
                        <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                            {' '}Experience
                        </span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        My professional journey and hands-on experience in software development and technology
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-primary border border-secondary rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:border-accent"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {/* Main Info */}
                                <div className="lg:col-span-3">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="bg-gradient-to-r from-secondary to-accent p-3 rounded-xl">
                                            <FaBriefcase className="text-2xl text-text" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                                                {exp.title}
                                            </h2>
                                            <h3 className="text-xl text-text mb-2">
                                                {exp.company}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-text-muted mb-4">
                                                <div className="flex items-center">
                                                    <FaMapMarkerAlt className="mr-2" />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <FaCalendarAlt className="mr-2" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                            </div>
                                            <div className="inline-block bg-gradient-to-r from-secondary to-accent text-text px-4 py-2 rounded-full text-sm font-medium">
                                                {exp.type}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-text-muted leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-text mb-3 flex items-center">
                                            <FaCode className="mr-2" />
                                            Key Responsibilities
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, respIndex) => (
                                                <li key={respIndex} className="flex items-start">
                                                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span className="text-text-muted text-sm">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-text mb-3 flex items-center">
                                            <FaLaptopCode className="mr-2" />
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-accent text-text px-3 py-1 rounded-lg text-sm border border-secondary"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="lg:col-span-1">
                                    <h4 className="text-lg font-semibold text-text mb-4">Key Achievements</h4>
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, achIndex) => (
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

                {/* Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16"
                >
                    <div className="bg-primary border border-secondary rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-text mb-6 text-center">
                            Professional Skills Gained
                        </h2>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {skills.map((skill, skillIndex) => (
                                <motion.span
                                    key={skillIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.9 + skillIndex * 0.1 }}
                                    className="bg-secondary text-text px-4 py-2 rounded-lg font-medium border border-accent"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-12"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 border border-accent">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-text mb-6">
                                Looking Forward
                            </h2>
                            <p className="text-text-muted leading-relaxed max-w-4xl mx-auto text-lg">
                                I'm actively seeking opportunities to further develop my skills in full-stack development,
                                contribute to meaningful projects, and grow as a software engineer in a collaborative environment.
                            </p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                                className="mt-8 flex justify-center"
                            >
                                <div className="bg-accent text-text px-8 py-3 rounded-full font-semibold">
                                    🚀 Ready for New Challenges
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;