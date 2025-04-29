import React from 'react';
import './App.css'; // Global styles

// Import Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Import Sections
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

function App() {
  

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
