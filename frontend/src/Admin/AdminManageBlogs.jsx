import React, { useEffect, useState } from 'react';
import '../Styles/AdminStyle/ManageBlogs.css';

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch('https://shaunsebastian-web-pwzl.onrender.com/api/blogs');
    const data = await res.json();
    setBlogs(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await fetch(`https://shaunsebastian-web-pwzl.onrender.com/api/blogs/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch('https://shaunsebastian-web-pwzl.onrender.com/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    setFormData({ title: '', description: '', content: '', image: '' });
    setIsEditing(false);
    setEditId(null);
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      image: blog.image
    });
    setIsEditing(true);
    setEditId(blog._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await fetch(`https://shaunsebastian-web-pwzl.onrender.com/api/blogs/${id}`, {
        method: 'DELETE'
      });
      fetchBlogs();
    }
  };

  return (
    <div className="manage-blogs-page">
      <h2>Manage Blogs</h2>

      <form className="manage-blogs-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? 'Update Blog' : 'Add Blog'}</button>
      </form>

      <div className="manage-blogs-list">
        {blogs.map(blog => (
          <div key={blog._id} className="manage-blogs-card">
            <img src={blog.image} alt={blog.title} />
            <div className="manage-blogs-info">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="manage-blogs-actions">
                <button onClick={() => handleEdit(blog)}>Edit</button>
                <button onClick={() => handleDelete(blog._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageBlogs;
