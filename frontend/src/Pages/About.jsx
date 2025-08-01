import React, { useEffect, useState } from 'react';
import '../styles/PagesStyle/About.css';

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/about')
      .then(res => res.json())
      .then(data => setAboutData(data))
      .catch(err => console.error('Failed to fetch about data:', err));
  }, []);

  if (!aboutData) return <div className="about-page">Loading...</div>;

  return (
    <div className="about-page">
      <h2 className="about-title">About Me</h2>

      <section className="about-section">
        <h3 className="about-heading">{aboutData.name}</h3>
        <p className="about-subtitle">{aboutData.title}</p>
        <p className="about-email">📧 {aboutData.email}</p>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Personal Information</h3>
        <ul className="about-list">
          <li><strong>Date of Birth:</strong> {aboutData.dob}</li>
          <li><strong>Blood Group:</strong> {aboutData.bloodGroup}</li>
          <li><strong>Gender:</strong> {aboutData.gender}</li>
          <li><strong>Status:</strong> {aboutData.status}</li>
          <li><strong>Languages:</strong> {aboutData.languages.join(', ')}</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Core Skills</h3>
        <ul className="about-list">
          {aboutData.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Experience</h3>
        <ul className="about-list">
          {aboutData.experience.map((exp, idx) => (
            <li key={idx}>
              <strong>{exp.title} ({exp.year}):</strong> {exp.company}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Education</h3>
        <ul className="about-list">
          {aboutData.education.map((edu, idx) => (
            <li key={idx}>{edu}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Featured Projects</h3>
        <ul className="about-list">
          {aboutData.projects.map((proj, idx) => (
            <li key={idx}><strong>{proj.split(':')[0]}:</strong>{proj.split(':')[1]}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Achievements & Certifications</h3>
        <ul className="about-list">
          {aboutData.achievements.map((ach, idx) => (
            <li key={idx}>{ach}</li>
          ))}
          <li>
            <strong>Certifications:</strong> {aboutData.certifications.join(', ')}
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">About Me</h3>
        <p className="about-description">{aboutData.bio}</p>
      </section>
    </div>
  );
}

export default About;
