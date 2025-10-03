import React from "react";
import "./about.css";
import profilePic from "../../assets/profile.png"; // import your fixed image

const About = () => {
  return (
    <div className="about-page" id="about">
      <div className="about-container">
        {/* Left Side - Fixed Image */}
        <div className="about-left">
          <div className="about-img-box">
            <img src={profilePic} alt="Profile" className="about-img" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-right">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
           <h3> I'm Jeyalakshmi</h3>
           
            Artificial Intelligence and Data Science undergraduate with a strong
            passion for web development and UI/UX design. Enthusiastic about
            integrating generative AI technologies to enhance web applications
            and user experiences. Actively pursuing knowledge in prompt
            engineering and dedicated to strengthening problem-solving skills
            through data structures and algorithms practice. Motivated to apply
            technical expertise and creativity in building innovative,
            user-centric solutions.
          </p>

       
          <a href="/cv.pdf" download className="btn download-btn">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
