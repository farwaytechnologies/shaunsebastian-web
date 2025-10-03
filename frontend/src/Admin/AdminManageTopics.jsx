import React, { useEffect, useState } from 'react';
import '../Styles/AdminStyle/ManageTopics.css';

function ManageTopics() {
  const [topics, setTopics] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', image: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const response = await fetch('https://ss-backend-7arm.onrender.com/api/topics');
      const data = await response.json();
      setTopics(data);
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      // Update Topic
      try {
        const response = await fetch(`https://ss-backend-7arm.onrender.com/api/topics/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          fetchTopics();
          resetForm();
        } else {
          console.error('Failed to update topic');
        }
      } catch (error) {
        console.error('Error updating topic:', error);
      }
    } else {
      // Add Topic
      try {
        const response = await fetch('https://ss-backend-7arm.onrender.com/api/topics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          fetchTopics();
          resetForm();
        } else {
          console.error('Failed to add topic');
        }
      } catch (error) {
        console.error('Error adding topic:', error);
      }
    }
  };

  const handleEdit = (topic) => {
    setFormData({ title: topic.title, description: topic.description, image: topic.image });
    setEditingId(topic._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this topic?')) {
      try {
        const response = await fetch(`https://ss-backend-7arm.onrender.com/api/topics/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          fetchTopics();
        } else {
          console.error('Failed to delete topic');
        }
      } catch (error) {
        console.error('Error deleting topic:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', image: '' });
    setEditingId(null);
  };

  return (
    <div className="manage-topics-page">
      <h2>Manage Topics</h2>
      <form className="topic-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Update Topic' : 'Add Topic'}</button>
        {editingId && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <div className="topics-list">
        {topics.map((topic) => (
          <div className="topic-item" key={topic._id}>
            <img src={topic.image} alt={topic.title} />
            <div className="topic-info">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
            <div className="topic-actions">
              <button onClick={() => handleEdit(topic)}>Edit</button>
              <button onClick={() => handleDelete(topic._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageTopics;
