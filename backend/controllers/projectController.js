const Project = require('../models/projectModel');

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// CREATE a new project
exports.createProject = async (req, res) => {
  const { title, description, liveLink, githubLink } = req.body;
  try {
    const newProject = new Project({ title, description, liveLink, githubLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: 'Invalid Data' });
  }
};

// UPDATE a project
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, liveLink, githubLink } = req.body;

  try {
    const updated = await Project.findByIdAndUpdate(
      id,
      { title, description, liveLink, githubLink },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update project' });
  }
};

// DELETE a project
exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
};
