import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons
import "./project.css";

const projects = [
  {
    title: "VenueEase – AI Powered Venue Reservation System",
    role: "Frontend Developer",
    tech: "React.js, Node.js, Flask (Python), PostgreSQL",
    description: "• Developed a responsive web interface for venue reservation with real-time availability checking.\n• Implemented user authentication, booking management, and API-based integration.\n• Integrated an AI-powered chatbot using the Gemini API for booking search, deletion, and natural language queries.",
    github: "https://github.com/jey7387/venueease"
  },
  {
    title: "Infantix Care+ – Digital Infant Care Management System",
    role: "Frontend Developer",
    tech: "React.js, Node.js, PostgreSQL, Machine Learning (Audio Analysis)",
    description: "• Developed a responsive web interface to manage infant care data including feeding, sleep, diapers, and medical records.\n• Implemented secure authentication and API-based data management for profile access and milestone tracking.\n• Applied machine learning audio analysis to classify baby crying patterns.",
    github: "https://github.com/jey7387/infantix-care"
  },
  {
    title: "AcadInsight – Smart Academic Analytics Dashboard",
    role: "Frontend Developer",
    tech: "React.js, Node.js, Express.js, PostgreSQL, Chart.js",
    description: "• Developed a responsive dashboard to visualize student academic performance using heatmap analytics.\n• Implemented secure authentication and role-based access control for students, faculty, and admins.\n• Built interactive data visualizations and progress tracking to identify skill gaps and performance trends.",
    github: "https://github.com/jey7387/acadinsight",
    live: "https://orchids-remix-of-smart-academic-ski.vercel.app/"
  },
  {
    title: "TaskHive – Intelligent To-Do Application",
    role: "Full Stack Developer",
    tech: "React.js, Node.js, Express, PostgreSQL",
    description: "• Built a full-stack To-Do List application with secure user authentication and personalized task management.\n• Developed a responsive UI with real-time updates using modern design patterns and efficient state management.\n• Designed a clean, scalable architecture with well-structured components and modular code, ensuring high performance, maintainability, and ease of future feature expansion.",
    github: "https://github.com/jey7387/project-todolist"
  },
  {
    title: "ElevateEd – Learning Management System",
    role: "UI/UX Designer",
    tech: "Figma",
    description: "• Designed low- and high-fidelity wireframes for a role-based LMS platform (Students, Teachers, Admins).\n• Mapped complete user journeys including course discovery, enrollment, content management, and administration.\n• Focused on intuitive navigation, accessibility standards, and scalable UI design by ensuring consistent design systems, clear information architecture, user-friendly interactions",
    figma: "https://www.figma.com/design/im4ldK15KpzD9fu0vH603X/ElevateEd?node-id=0-1&p=f"
  }
];

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <div className="overlay-text">PROJECTS</div>
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle">
        A collection of my recent projects showcasing skills and technologies.
      </p>
      <div className="project-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{proj.title}</h2>
            <div className="project-description">
              {proj.description.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            <p className="project-tech">
              <strong>Tech Stack:</strong> <span className="highlight">{proj.tech}</span>
            </p>
            <div className="project-links">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer" className="icon-link">
                  <FaGithub size={20} /> GitHub
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer" className="icon-link">
                  <FaExternalLinkAlt size={20} /> Live
                </a>
              )}
              {proj.figma && (
                <a href={proj.figma} target="_blank" rel="noreferrer" className="icon-link">
                  <FaExternalLinkAlt size={20} /> Figma
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
