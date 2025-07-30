import React from 'react';
import '../styles/PagesStyle/About.css';

function About() {
  return (
    <div className="about-page">
      <h2 className="about-title">About Me</h2>

      <section className="about-section">
        <h3 className="about-heading">Shaun Sebastian</h3>
        <p className="about-subtitle">Full Stack Developer & Cyber Security Expert</p>
        <p className="about-email">📧 shaunsebastian4@gmail.com</p>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Personal Information</h3>
        <ul className="about-list">
          <li><strong>Date of Birth:</strong> 01/06/1998</li>
          <li><strong>Blood Group:</strong> A+</li>
          <li><strong>Gender:</strong> Male</li>
          <li><strong>Status:</strong> Single</li>
          <li><strong>Languages:</strong> English, Malayalam</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Core Skills</h3>
        <ul className="about-list">
          <li>Programming Languages & Tools</li>
          <li>Responsive Design</li>
          <li>Cross Browser Testing & Debugging</li>
          <li>Cross Functional Teams</li>
          <li>Agile Development</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Experience</h3>
        <ul className="about-list">
          <li><strong>PHP Developer (2020):</strong> Logic Software Solutions, Kottayam – Industrial Visit in PHP</li>
          <li><strong>Graphic Designer (2023):</strong> Antz Media, Kochi – Internship in Graphic Design</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Education</h3>
        <ul className="about-list">
          <li><strong>Bachelor of Arts – Animation and Graphic Design</strong>, Mahatma Gandhi University, Kerala (2022–2025)</li>
          <li><strong>Cyber Security Expert</strong>, Simplilearn (Graduated 2023)</li>
          <li><strong>Diploma in Computer Engineering</strong>, Govt. Polytechnic College, Kerala (2017–2020)</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Featured Projects</h3>
        <ul className="about-list">
          <li><strong>Library Management System:</strong> Java application using NetBeans to manage books and users.</li>
          <li><strong>PocketBook:</strong> Android app with QR scanner to manage digital library. (Java, Android)</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Achievements & Certifications</h3>
        <ul className="about-list">
          <li>🏆 1st Place - Swastika '15 Inter College Techno Cultural Fest - Scien EX 2015</li>
          <li><strong>Certifications:</strong> Cyber Security Expert, CompTIA Security+, CEH (V12), CISSP®, CompTIA Network+, CISM OSL</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">About Me</h3>
        <p className="about-description">
          Apart from being a computer engineer, I enjoy most of my time exploring technology.
          I follow sci-fi and fantasy genre movies and spend a large amount of my free time exploring the latest
          technology advancements in the programming world.
        </p>
      </section>
    </div>
  );
}

export default About;
