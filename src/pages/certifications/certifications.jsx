import React, { useState } from "react";
import "./certifications.css";
import codsoftCertificate from "../../assets/codsoft.jpeg";
import oracleCertificate from "../../assets/oracle.png";

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certifications = [
    {
      title: "Oracle Certified Professional  Java SE 17 Developer",
      date: "February 12, 2026",
      image: oracleCertificate,
      type: "oracle"
    },
    {
      title: "Codsoft - UI/UX Design Internship",
      date: "November 18, 2024",
      image: codsoftCertificate,
      type: "codsoft"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div style={{ padding: "20px" }}>
        <div className="certifications-heading-container">
          <h2 className="certifications-title">Certifications</h2>
          <span className="overlay-text">CERTIFICATIONS</span>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              className="certification-card" 
              key={index}
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="certification-header">
                <h3 className="certification-title">{cert.title}</h3>
              </div>
              
              <div className="certification-info">
                <p className="certification-date">{cert.date}</p>
              </div>

              <div className="view-certificate-btn">
                <span>View Certificate →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="certificate-modal" onClick={() => setSelectedCertificate(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedCertificate.title}</h3>
                <button className="close-btn" onClick={() => setSelectedCertificate(null)}>×</button>
              </div>
              <div className="certificate-viewer">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                  className="certificate-image"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
