const Contact = require("../models/Contact");

exports.submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, data: newContact });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
