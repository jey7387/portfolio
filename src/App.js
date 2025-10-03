// src/App.js
import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Projects from "./pages/project/project"; // Import Projects page
import Contact from "./pages/contact/contact"; 


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

      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Future Sections */}
      {/* 
      <section id="blogs" className="section">
        <Blogs />
      </section>

      
      */}
    </div>
  );
}

export default App;
