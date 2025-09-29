import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../Styles/PagesStyle/Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://shaunsebastian-web-pwzl.onrender.com/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Something went wrong while loading projects.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-page">
      <h2 className="projects-title">My Projects</h2>

      {loading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon-link"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon-link"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
