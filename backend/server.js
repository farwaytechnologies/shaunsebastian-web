// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const aboutRoutes = require('./routes/aboutRoutes'); // <-- You missed this line

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/about', aboutRoutes); // <-- Register the route

app.get('/', (req, res) => {
  res.send('ShaunSeb Backend API is running...');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Internal Server Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});