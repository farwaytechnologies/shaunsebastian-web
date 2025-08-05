const Blog = require('../models/blogModel');

// Get All Blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// Get Blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog detail' });
  }
};

// Create New Blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, content, image } = req.body;
    const newBlog = new Blog({ title, description, content, image });
    await newBlog.save();
    res.json(newBlog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

// Update Blog by ID
exports.updateBlog = async (req, res) => {
  try {
    const { title, description, content, image } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, content, image },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

// Delete Blog by ID
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};
