import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/PagesStyle/Projects.css';
import dummyData from '../data/projects.json'; // Import local JSON

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate API delay (optional)
    setTimeout(() => {
      setProjects(dummyData);
    }, 500); // 0.5s delay
  }, []);

  return (
    <div className="projects-page">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                <FaExternalLinkAlt /> Live
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
