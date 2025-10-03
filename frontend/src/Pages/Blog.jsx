import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PagesStyle/Blog.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://ss-backend-7arm.onrender.com/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="blog-page">
      <h2 className="blog-page-title">Our Blogs</h2>
      <div className="blog-page-grid">
        {blogs.map(blog => (
          <div key={blog._id} className="blog-page-card">
            <img src={blog.image} alt={blog.title} className="blog-page-image" />
            <h3 className="blog-page-card-title">{blog.title}</h3>
            <p className="blog-page-card-description">{blog.description}</p>
            <Link to={`/blog/${blog._id}`} className="blog-page-readmore">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
