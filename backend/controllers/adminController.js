const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ email, name, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating admin', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
      message: 'Login successful',
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

exports.getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.adminId).select('-password');
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    res.status(200).json({ admin });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch profile', error: err.message });
  }
};
