import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons
import "./project.css";

const projects = [
  {
    title: "Hall Booking Management System",
    description: "Responsive hall booking system with user authentication, booking management, and real-time confirmation.",
    tech: "React.js, Node.js, PostgreSQL, OpenAI API, LangChain",
    github: "https://github.com/ishwarya-18/Hall-Booking",
    deploy: "https://hallbooking.live"
  },
  {
    title: "E-learning Platform",
    description: "Responsive e-learning platform with separate interfaces for students, admin, and users.",
    tech: "React.js, CSS, JavaScript",
    github: "https://github.com/ishwarya-18/E-learning",
    deploy: "https://elearning.live"
  },
  {
    title: "Dynamic Personal Portfolio Website",
    description: "Dynamic portfolio with CMS integration for easy content management and updates.",
    tech: "React.js, Node.js, PostgreSQL, CMS (Sanity/Firebase)",
    github: "https://github.com/ishwarya-18/Portfolio",
    deploy: "https://portfolio.live"
  },
  {
    title: "To-Do List App",
    description: "Full-stack To-Do List with user-specific tasks and secure storage in PostgreSQL.",
    tech: "React.js, Node.js, Express, PostgreSQL",
    github: "https://github.com/ishwarya-18/TodoList",
    deploy: "https://todolist.live"
  }
];

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <div className="overlay-text">Project</div>
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle">
        A collection of my recent projects showcasing skills and technologies.
      </p>
      <div className="project-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{proj.title}</h2>
            <p className="project-description">{proj.description}</p>
            <p className="project-tech">
              <strong>Tech Stack:</strong> <span className="highlight">{proj.tech}</span>
            </p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noreferrer" className="icon-link">
                <FaGithub size={20} /> GitHub
              </a>
              <a href={proj.deploy} target="_blank" rel="noreferrer" className="icon-link">
                <FaExternalLinkAlt size={20} /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
