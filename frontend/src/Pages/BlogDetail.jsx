import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/PagesStyle/BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://shaunsebastian-web-pwzl.onrender.com/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <div className="blog-detail-loading">Loading...</div>;

  return (
    <div className="blog-detail-page">
      <h2 className="blog-detail-title">{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <p className="blog-detail-description">{blog.description}</p>
      <div className="blog-detail-content">{blog.content}</div>
    </div>
  );
}

export default BlogDetail;
