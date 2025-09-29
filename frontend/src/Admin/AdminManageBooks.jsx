import React, { useState, useEffect } from 'react';
import '../Styles/AdminStyle/ManageBooks.css';

function ManageBooks() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: '',
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch('https://shaunsebastian-web-pwzl.onrender.com/api/books');
    const data = await res.json();
    setBooks(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // Update Book
      await fetch(`http://localhost:8000/api/books/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } else {
      // Add New Book
      await fetch('http://localhost:8000/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    }
    setFormData({ title: '', author: '', description: '', coverImage: '' });
    setEditId(null);
    fetchBooks();
  };

  const handleEdit = (book) => {
    setFormData({
      title: book.title,
      author: book.author,
      description: book.description,
      coverImage: book.coverImage,
    });
    setEditId(book._id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/api/books/${id}`, {
      method: 'DELETE',
    });
    fetchBooks();
  };

  return (
    <div className="manage-books-page">
      <h2>Manage Books</h2>
      <form onSubmit={handleSubmit} className="book-form">
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
          name="author"
          placeholder="Author"
          value={formData.author}
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
          name="coverImage"
          placeholder="Cover Image URL"
          value={formData.coverImage}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Book</button>
      </form>

      <div className="books-list">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <img src={book.coverImage} alt={book.title} />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p>{book.description}</p>
              <div className="book-actions">
                <button onClick={() => handleEdit(book)}>Edit</button>
                <button onClick={() => handleDelete(book._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageBooks;
