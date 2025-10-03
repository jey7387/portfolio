import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // at least 60% visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">JEYALAKSHMI</div>
      <ul className="nav-links">
        <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
        <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
     
        <li><a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a></li>
        <li><a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
        <li><a href="#blog" className={activeSection === "blog" ? "active" : ""}>My Blog</a></li>
        <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
