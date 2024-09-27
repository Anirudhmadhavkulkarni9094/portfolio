import React, { useContext } from 'react';
import { ThemeContext } from '../../contextConfig/ThemeContext';
import { motion } from 'framer-motion'; // Import Framer Motion

function Skills() {
    const { darkMode } = useContext(ThemeContext);

    const skills = [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "JavaScript", level: "90%" },
        { name: "Java Spring Boot", level: "80%" },
        { name: "Java Spring", level: "85%" },
        { name: "Python", level: "85%" },
        { name: "Python FastAPI", level: "80%" },
        { name: "Next.js", level: "75%" },
        { name: "React.js", level: "85%" },
        { name: "Node.js", level: "80%" },
        { name: "Express.js", level: "80%" },
        { name: "Figma", level: "70%" },
        { name: "MySQL", level: "80%" },
        { name: "MongoDB", level: "75%" },
        { name: "PostgreSQL", level: "75%" },
        { name: "Go", level: "20%" },
        { name: "Interest in Coding", level: "100%" }
    ];

    return (
        <div className={darkMode ? 'bg-black min-h-screen font-mono p-10' : 'bg-white font-mono p-10'}>
            <div className="max-w-4xl mx-auto">
                <h2 className={darkMode ? 'text-4xl font-bold text-gray-100 mb-10 text-center' : 'text-4xl font-bold text-gray-900 mb-10 text-center'}>
                    My Skills
                </h2>

                {/* Two-column Grid Layout for Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <div className="flex justify-between mb-2">
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.level}</span>
                            </div>
                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                                <motion.div
                                    className="bg-indigo-600 dark:bg-indigo-400 h-4 rounded-full"
                                    initial={{ width: '0%' }}
                                    whileInView={{ width: skill.level }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
