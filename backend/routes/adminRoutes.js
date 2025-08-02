const express = require('express');
const router = express.Router();
const { signup, login, getAdminProfile } = require('../controllers/adminController');
const protect = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getAdminProfile);

module.exports = router;
