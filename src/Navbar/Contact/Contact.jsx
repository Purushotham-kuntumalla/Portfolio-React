import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <footer className="footer-container">
      <h5>Contact Me</h5>
      <section className='section-container'>
      <div className="img-container">
        <img src="https://st2.depositphotos.com/1202020/7262/i/450/depositphotos_72629937-stock-photo-tearable-note-summer-job-talent.jpg" alt="" />
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      </section>
      
      <div className="footer-bottom">
        <p>© 2024 Purushotham Kuntumalla. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
