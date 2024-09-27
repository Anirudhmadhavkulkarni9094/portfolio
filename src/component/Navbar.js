import React, { useContext } from 'react';
import { ThemeContext } from '../contextConfig/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

function Navbar() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`flex justify-between p-5 shadow-md rounded items-center sticky w-full top-0 z-50 transition-all duration-500 ${!darkMode ? 'bg-gray-900 text-gray-200 border-gray-800' : 'bg-white text-gray-900 border-gray-300'}`}>
            <div className='font-mono text-xl'>
                <h1 className="hover:text-indigo-500 transition-all duration-300">Portfolio</h1>
            </div>

            <div className='flex gap-10 items-center'>
               
                <div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-500"
                    >
                        {darkMode ? (
                            <SunIcon className="w-6 h-6 text-yellow-300" />
                        ) : (
                            <MoonIcon className="w-6 h-6 text-gray-800" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
