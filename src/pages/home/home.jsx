import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import backgroundImg from "../../assets/background1.jpg";
import "./home.css";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset animation state
    setAnimate(false);
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [key]); // Dependency on key forces re-run

  useEffect(() => {
    // Listen for navigation to trigger animation
    const handleNavigation = () => {
      const hash = window.location.hash;
      if (hash === '#home' || hash === '' || hash === '/') {
        // Increment key to force component remount and re-animate
        setKey(prev => prev + 1);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleNavigation);
    
    // Also check current hash on mount
    handleNavigation();

    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);
  return (
    <div
      key={key}
      className="home-page"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="home-container">
        {/* Left Side */}
        <div className="home-left">
          <p className={`greeting ${animate ? 'animate' : ''}`}>HELLO!</p>
          <h1 className={animate ? 'animate' : ''}>
            I'm <span className="highlight">JeyaLakshmi</span>
            <span className="normal-text">A Full Stack Developer</span>
          </h1>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://leetcode.com/u/mrnwHDTvOz/"
              target="_blank"
              rel="noreferrer"
              className="leetcode"
            >
              <SiLeetcode className="icon" />
            </a>
            <a
              href="https://github.com/jey7387"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeya-lakshmi-5851522b9"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              <FaLinkedin className="icon" />
            </a>
           
          </div>

          {/* Buttons */}
          <div className={`button-container ${animate ? 'animate' : ''}`}>
            <a href="#contact" className="btn hire-btn">
              Hire Me
            </a>
            <a href="#projects" className="btn works-btn">
              My Works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
