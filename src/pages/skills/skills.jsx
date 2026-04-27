import React, { useEffect, useRef, useState } from "react";
import { FaJava, FaHtml5, FaPython, FaReact, FaNodeJs, FaDatabase, FaGithub, FaCuttlefish, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import LeetCode from "../../components/LeetCode/LeetCode";
import "./skills.css";

const Skill = () => {
  const [leetcodeStats, setLeetcodeStats] = useState({ easy: 0, medium: 0, hard: 0 });
  
  const skills = {
    programming: [
      { name: "Java", icon: <FaJava />, color: "#f89820" },
      { name: "JavaScript", icon: <FaReact />, color: "#f7df1e" },
      { name: "Python", icon: <FaPython />, color: "#3776ab" },
      { name: "C", icon: <FaCuttlefish />, color: "#00599c" },
    ],
    webDevelopment: [
      { name: "React.js", icon: <FaReact />, color: "#61dafb" },
      { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
      { name: "CSS", icon: <FaHtml5 />, color: "#1572b6" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    ],
    database: [
      { name: "MySQL", icon: <FaDatabase />, color: "#4479a1" },
      { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
    ],
    leetcode: [
      { name: "Easy", count: 150, color: "#4ade80" },
      { name: "Medium", count: 85, color: "#fbbf24" },
      { name: "Hard", count: 25, color: "#ef4444" },
      { name: "Total", count: 260, color: "#ffcc66" },
    ],
  };

  const sectionRef = useRef(null);

useEffect(() => {
  const currentRef = sectionRef.current; // copy ref here
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
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

      <h2 className="skills-title">Technical Expertise</h2>
      <p className="skills-subtitle">
        Professional skills and technologies I work with across different domains.
</p>

      <div className="skills-categories">
        <div className="skill-category">
          <h3 className="category-title">
            <FaJava /> Programming Languages
          </h3>
          <div className="skills-badges">
            {skills.programming.map((skill, index) => (
              <div key={index} className="skill-badge">
                <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="category-title">
            <FaReact /> Web Development
          </h3>
          <div className="skills-badges">
            {skills.webDevelopment.map((skill, index) => (
              <div key={index} className="skill-badge">
                <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="category-title">
            <FaDatabase /> Database & Tools
          </h3>
          <div className="skills-badges">
            {skills.database.map((skill, index) => (
              <div key={index} className="skill-badge">
                <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="category-title">
            <SiLeetcode /> LeetCode Stats
          </h3>
          <div className="leetcode-horizontal-layout">
            <div className="leetcode-left">
              <div className="leetcode-component-card">
                <LeetCode onStatsUpdate={setLeetcodeStats} />
              </div>
            </div>
            <div className="leetcode-right">
              <div className="leetcode-stats-vertical">
                <div className="leetcode-stat-badge small">
                  <span className="leetcode-stat-count easy">{leetcodeStats.easy}</span>
                  <span className="leetcode-stat-label">Easy</span>
                </div>
                <div className="leetcode-stat-badge small">
                  <span className="leetcode-stat-count medium">{leetcodeStats.medium}</span>
                  <span className="leetcode-stat-label">Medium</span>
                </div>
                <div className="leetcode-stat-badge small">
                  <span className="leetcode-stat-count hard">{leetcodeStats.hard}</span>
                  <span className="leetcode-stat-label">Hard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Skill;
