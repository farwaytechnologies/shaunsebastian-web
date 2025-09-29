import React, { useEffect, useState } from 'react';
import '../Styles/PagesStyle/Books.css';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch from API — For now using static data
    fetch('https://shaunsebastian-web-pwzl.onrender.com/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="books-page">
      <h2 className="books-page-title">Books Collection</h2>
      <div className="books-page-grid">
        {books.map(book => (
          <div key={book._id} className="books-page-card">
            <img src={book.coverImage} alt={book.title} className="books-page-image" />
            <div className="books-page-info">
              <h3 className="books-page-card-title">{book.title}</h3>
              <p className="books-page-author">by {book.author}</p>
              <p className="books-page-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
