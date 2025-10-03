import React, { useRef } from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",      // 🔹 replace with your EmailJS Service ID
        "your_template_id",     // 🔹 replace with your EmailJS Template ID
        form.current,
        "your_public_key"       // 🔹 replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Something went wrong: " + error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <h1 className="contact-background">Contact</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>

      <div className="contact-container">
        {/* Address */}
        <div className="contact-box">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <h3>ADDRESS</h3>
          <p>tenkasi district</p>
        </div>

        {/* Contact Number */}
        <div className="contact-box">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <h3>CONTACT NUMBER</h3>
          <p>+91 6380449713</p>
        </div>

        {/* Email */}
        <div className="contact-box">
          <div className="contact-icon">
            <FaPaperPlane />
          </div>
          <h3>EMAIL ADDRESS</h3>
          <p>m.jeylaksh7337@gmail.com</p>
        </div>

        {/* LinkedIn */}
        <div className="contact-box">
          <div className="contact-icon">
            <FaLinkedin />
          </div>
          <h3>LINKEDIN</h3>
          <p>
            <a
              href="http://www.linkedin.com/in/jeya-lakshmi-5851522b9"
              target="_blank"
              rel="noreferrer"
            >
              http://www.linkedin.com/in/jeya-lakshmi-5851522b9
              
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2>Send Me a Message</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
