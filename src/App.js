// src/App.js
import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Projects from "./pages/project/project"; // Import Projects page
import Contact from "./pages/contact/contact"; 
import Certifications from "./pages/certifications/certifications"; 

function App() {
  return (
    <div className="App">
      {/* Hero / Home Section */}
      <section id="home" className="section">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="project" className="section">
        <Projects />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <Certifications />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      
      
    </div>
  );
}

export default App;
