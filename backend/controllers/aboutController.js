const About = require('../models/aboutModel');

exports.getAboutInfo = async (req, res) => {
  try {
    const data = await About.findOne(); // just one profile
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch about info' });
  }
};
exports.updateAboutInfo = async (req, res) => {
  try {
    const updated = await About.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update about info' });
  }
};
