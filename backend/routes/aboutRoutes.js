const express = require('express');
const router = express.Router();
const { getAboutInfo, updateAboutInfo } = require('../controllers/aboutController');

router.get('/', getAboutInfo);
router.put('/', updateAboutInfo); // Add PUT route for editing

module.exports = router;
