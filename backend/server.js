const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Importing Routes
const adminRoutes = require('./routes/adminRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const blogRoutes = require('./routes/blogRoutes');
const contactRoutes = require('./routes/contactRoutes');
const bookRoutes = require('./routes/bookRoutes');
const topicRoutes = require('./routes/topicRoutes');
const projectRoutes = require('./routes/projectRoutes'); // <-- Added Project Routes

// Initialize Express App
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/admin', adminRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/projects', projectRoutes); // <-- Register Projects API

// Health Check Route
app.get('/', (req, res) => {
  res.send('ShaunSeb Backend API is running...');
});

// 404 Route Not Found Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Internal Server Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
