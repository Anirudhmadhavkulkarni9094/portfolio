import React, { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Default is dark mode

  // Function to toggle the theme
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
