import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; 
import { FaInstagram } from "react-icons/fa";
import backgroundImg from "../../assets/background1.jpg"; 

import "./home.css";

const Home = () => {
  return (
    <div
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
          <p className="greeting">HELLO!</p>
          <h1>
            I'm a <span className="highlight">JeyaLakshmi</span>
            <span className="normal-text"> A Junior FullStack Developer</span>
          </h1>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://github.com/jey7387"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofilehttp://www.linkedin.com/in/jeya-lakshmi-5851522b9"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://leetcode.com/yourusernamehttps://leetcode.com/u/mrnwHDTvOz/"
              target="_blank"
              rel="noreferrer"
              className="leetcode"
            >
              <SiLeetcode className="icon" />
            </a>
            <a
  href="https://www.instagram.com/yourusernamehttps://www.instagram.com/resilient_jey?igsh=eGU0Ym1oMmo1N2Ny"
  target="_blank"
  rel="noreferrer"
  className="instagram"
>
  <FaInstagram className="icon" />
</a>
          </div>

          {/* Buttons */}
          <div className="buttons">
  <a href="#contact" className="btn hire-btn">HIRE ME</a>
  <a href="#project" className="btn works-btn">MY WORKS</a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
