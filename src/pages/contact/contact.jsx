import React, { useState } from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xwvajaap", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (error) {
      setStatus("❌ Something went wrong");
    }
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
        <div className="contact-box">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <h3>ADDRESS</h3>
          <p>tenkasi district</p>
        </div>

        <div className="contact-box">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <h3>CONTACT NUMBER</h3>
          <p>+91 6380449713</p>
        </div>

        <div className="contact-box">
          <div className="contact-icon">
            <FaPaperPlane />
          </div>
          <h3>EMAIL ADDRESS</h3>
          <p>m.jeylaksh7337@gmail.com</p>
        </div>

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

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Send Me a Message</h2>

        <form onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>

          <input type="hidden" name="_subject" value="New Portfolio Message" />

          <button type="submit" className="btn-submit">Send Message</button>
        </form>

        {status && <p className="form-status">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;