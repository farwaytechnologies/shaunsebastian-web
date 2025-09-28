import React, { useEffect, useState } from 'react';
import '../Styles/AdminStyle/AdminManageProjects.css';

function AdminManageProjects() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    liveLink: '',
    githubLink: '',
  });
  const [editingId, setEditingId] = useState(null);

  const API_URL = 'http://localhost:8000/api/projects';

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        editingId ? `${API_URL}/${editingId}` : API_URL,
        {
          method: editingId ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        await fetchProjects();
        setFormData({ title: '', description: '', liveLink: '', githubLink: '' });
        setEditingId(null);
      }
    } catch (err) {
      console.error('Error submitting project:', err);
    }
  };

  // Handle edit
  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      liveLink: project.liveLink,
      githubLink: project.githubLink,
    });
    setEditingId(project._id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchProjects();
      }
    } catch (err) {
      console.error('Failed to delete project:', err);
    }
  };

  return (
    <div className="admin-projects-page">
      <h2>Manage Projects</h2>

      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Project Title"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Project Description"
          required
        />
        <input
          type="text"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          placeholder="Live Link"
        />
        <input
          type="text"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleChange}
          placeholder="GitHub Link"
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} Project</button>
      </form>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project._id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a>}
              {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>}
            </div>
            <div className="project-actions">
              <button onClick={() => handleEdit(project)}>Edit</button>
              <button onClick={() => handleDelete(project._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminManageProjects;
