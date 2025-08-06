const Book = require('../models/Book');

// @desc Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, description, coverImage } = req.body;

    const newBook = new Book({ title, author, description, coverImage });
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update a book
exports.updateBook = async (req, res) => {
  try {
    const { title, author, description, coverImage } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, description, coverImage },
      { new: true }
    );

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete a book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
