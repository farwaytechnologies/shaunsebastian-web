const Topic = require('../models/Topic');

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find().sort({ createdAt: -1 });
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.createTopic = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const newTopic = new Topic({ title, description, image });
    await newTopic.save();
    res.status(201).json(newTopic);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const updatedTopic = await Topic.findByIdAndUpdate(
      req.params.id,
      { title, description, image },
      { new: true }
    );
    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.deleteTopic = async (req, res) => {
  try {
    await Topic.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Topic Deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
