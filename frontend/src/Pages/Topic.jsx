import React, { useEffect, useState } from 'react';
import '../Styles/PagesStyle/Topic.css';

function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const response = await fetch('https://shaunsebastian-web-pwzl.onrender.com/api/topics');
      if (!response.ok) {
        throw new Error('Failed to fetch topics');
      }
      const data = await response.json();
      setTopics(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="topic-page">
      <h2 className="topic-heading">Our Topics</h2>
      <div className="topic-grid">
        {topics.map((topic) => (
          <div className="topic-card" key={topic._id}>
            <img src={topic.image} alt={topic.title} className="topic-image" />
            <h3 className="topic-title">{topic.title}</h3>
            <p className="topic-description">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topic;
