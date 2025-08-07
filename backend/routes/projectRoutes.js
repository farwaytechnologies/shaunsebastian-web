const express = require('express');
const router = express.Router();
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

// GET all projects
router.get('/', getProjects);

// POST a new project
router.post('/', createProject);

// PUT (update) a project
router.put('/:id', updateProject);

// DELETE a project
router.delete('/:id', deleteProject);

module.exports = router;
