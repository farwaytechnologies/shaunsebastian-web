import React, { useEffect, useState } from 'react';
import '../Styles/PagesStyle/About.css';

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('https://shaunsebastian-web-pwzl.onrender.com/api/about')
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
          <li><strong>Date of Birth:</strong> {aboutData.personalInfo.dob}</li>
          <li><strong>Blood Group:</strong> {aboutData.personalInfo.bloodGroup}</li>
          <li><strong>Gender:</strong> {aboutData.personalInfo.gender}</li>
          <li><strong>Status:</strong> {aboutData.personalInfo.status}</li>
          <li><strong>Languages:</strong> {aboutData.personalInfo.languages.join(', ')}</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Core Skills</h3>
        <ul className="about-list">
          {aboutData.coreSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Experience</h3>
        <ul className="about-list">
          {aboutData.experience.map((exp, idx) => (
            <li key={idx}>
              <strong>{exp.role} at {exp.company} ({exp.year}):</strong> {exp.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Education</h3>
        <ul className="about-list">
          {aboutData.education.map((edu, idx) => (
            <li key={idx}>
              <strong>{edu.degree}</strong> at {edu.institution} ({edu.duration})
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Featured Projects</h3>
        <ul className="about-list">
          {aboutData.projects.map((proj, idx) => (
            <li key={idx}>
              <strong>{proj.name}:</strong> {proj.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Achievements</h3>
        <ul className="about-list">
          {aboutData.achievements.map((ach, idx) => (
            <li key={idx}>{ach}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">Certifications</h3>
        <ul className="about-list">
          {aboutData.certifications.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-heading">About Me</h3>
        <p className="about-description">{aboutData.aboutMe}</p>
      </section>
    </div>
  );
}

export default About;
