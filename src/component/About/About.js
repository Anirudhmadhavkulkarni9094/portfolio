import React, { useContext } from 'react';
import { ThemeContext } from '../../contextConfig/ThemeContext';
import { motion } from 'framer-motion'; // Import Framer Motion

function About() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={darkMode ? 'bg-black font-mono' : 'bg-white font-mono'}>
            <div className="flex flex-col items-center justify-center min-h-screen p-6 transition-all duration-500">
                
                {/* Introduction Section */}
                <motion.div
                    className="max-w-2xl text-center"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={darkMode ? 'text-gray-100 text-2xl md:text-4xl font-bold mb-6' : 'text-gray-900 text-2xl md:text-4xl font-bold mb-6'}>
                        Hi, I'm <span className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>Anirudh Kulkarni</span>, 
                        a full-stack developer specializing in JavaScript, Java, and Python. I help businesses build scalable, efficient, and innovative software solutions.
                    </h1>
                </motion.div>

                {/* Current Work Section */}
                <motion.div
                    className="max-w-lg text-center mt-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className={darkMode ? 'text-gray-300 text-lg md:text-xl' : 'text-gray-700 text-lg md:text-xl'}>
                        I'm currently working at <span className={darkMode ? 'font-semibold text-green-400' : 'font-semibold text-green-600'}> Brillio </span> 
                        and serving an overseas client: <span className={darkMode ? 'font-semibold text-red-400' : 'font-semibold text-red-600'}>Realtor.com</span>.
                    </p>
                </motion.div>

                {/* Previous Work Section */}
                <motion.div
                    className="max-w-lg text-center mt-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className={darkMode ? 'text-gray-300 text-lg md:text-xl' : 'text-gray-700 text-lg md:text-xl'}>
                        I previously worked as a Product Engineer at <span className={darkMode ? 'font-semibold text-yellow-500' : 'font-semibold text-yellow-500'}>@MBB Labs </span> 
                        with expertise in the <span className={darkMode ? 'font-semibold text-indigo-400' : 'font-semibold text-indigo-600'}>Java ecosystem</span>.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
