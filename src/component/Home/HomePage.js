/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../contextConfig/ThemeContext';

function HomePage() {
    const skills = ["Web Developer", "Graphic Designer", "Software Engineer by Profession", "FIGMA Designer"];
    const [skill, setSkill] = useState(skills[0]);
    const { darkMode } = useContext(ThemeContext); 
    const indexRef = useRef(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setSkill(skills[indexRef.current]);
            indexRef.current = (indexRef.current + 1) % skills.length;
        }, 1000); 

        return () => clearInterval(interval); 
    }, [skills]);

    return (
        <div className={darkMode ? 'dark  font-mono' : 'font-mono'}>
            <div className={`flex flex-col items-center justify-center min-h-screen transition-all duration-500 ${darkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-black' : ''} p-6`}>
                <div className="max-w-lg">
                    <img src={require("../../media/home.png")} alt='homepage' className={`rounded-full shadow-xl w-56 border-4 transition-all duration-500 ${darkMode ? 'border-gray-700' : 'border-white'}`} />
                </div>
                <div className="text-center mt-10">
                    <h1 className={`text-4xl md:text-5xl font-bold transition-all duration-500 ${darkMode ? 'text-gray-100' : 'text-black'}`}>
                        Hello Everyone! I'm <span className={darkMode ? 'text-indigo-400' : 'text-indigo-500'}>Anirudh Kulkarni</span>
                    </h1>
                    <h3 className={`text-xl md:text-2xl mt-4 animate-pulse transition-all duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        I'm a <span className= {darkMode ? 'font-semibold text-indigo-300 text-3xl' : 'font-semibold text-3xl text-indigo-500'}>{skill}</span>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
