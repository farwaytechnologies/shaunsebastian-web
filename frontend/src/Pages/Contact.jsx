import React from 'react';
import '../styles/PagesStyle/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Email:</strong> shaunsebastian4@gmail.com</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Location:</strong> Kerala, India</p>
        </div>

        <form className="contact-form">
          <h3 className="form-title">Send a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
