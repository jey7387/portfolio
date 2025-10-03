import React, { useEffect, useRef, useState } from "react";
import { FaJava, FaHtml5, FaPython, FaReact, FaNodeJs, FaDatabase, FaGithub, FaCuttlefish } from "react-icons/fa";
import "./skills.css";

const Skill = () => {
  const skills = [
  { name: "Java", level: "90%", icon: <FaJava /> },
  { name: "HTML", level: "95%", icon: <FaHtml5 /> },
  { name: "Python", level: "70%", icon: <FaPython /> },
  { name: "MySQL", level: "85%", icon: <FaDatabase /> },
  { name: "React", level: "40%", icon: <FaReact /> },
  { name: "C", level: "80%", icon: <FaCuttlefish /> },
  { name: "Github", level: "80%", icon: <FaGithub /> },
  { name: "Node", level: "40%", icon: <FaNodeJs /> },
];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

useEffect(() => {
  const currentRef = sectionRef.current; // copy ref here
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);


  return (
    <div className="skills-section" ref={sectionRef}>
       <div className="skills-overlay">SKILLS</div> {/* background text layer */}

      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
  A showcase of my technical expertise and continuous learning journey.
</p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
         <div className="skill-info">
  <span>
    <span className="skill-icon">{skill.icon}</span>
    {skill.name}
  </span>
  <span>{skill.level}</span>
</div>

            <div className="bar">
              <div
                className={`progress ${visible ? "animate" : ""}`}
                style={{ width: visible ? skill.level : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
