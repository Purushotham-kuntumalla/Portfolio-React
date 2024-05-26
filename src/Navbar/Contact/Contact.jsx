import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h5>Contact Me</h5>
        <div className="footer-links">
          <a href="mailto:kuntumallapurushotham2002@gmail.com" className="footer-link">
            <span className="material-symbols-outlined footer-icon">mail</span>
          </a>
          <a href="https://www.linkedin.com/in/purushotham-kuntumalla-441599254/" className="footer-link">
            <span className="material-symbols-outlined footer-icon">person_add</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Purushotham Kuntumalla. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
