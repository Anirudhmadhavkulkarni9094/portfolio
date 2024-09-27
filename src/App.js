import './App.css';
import Navbar from './component/Navbar';
import HomePage from './component/Home/HomePage';
import { ThemeProvider } from './contextConfig/ThemeContext';
import React from 'react' 
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import ContactForm from './component/ContactForm/ContactForm';
function App() {
  return (
    <React.Fragment>
    <ThemeProvider>
  <Navbar></Navbar>
  <HomePage></HomePage>
  <About></About>
  <Skills></Skills>
  <ContactForm></ContactForm>
    </ThemeProvider>

  
    </React.Fragment>
  );
}

export default App;
