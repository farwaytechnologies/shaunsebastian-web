const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  name: String,
  title: String,
  email: String,
  personalInfo: {
    dob: String,
    bloodGroup: String,
    gender: String,
    status: String,
    languages: [String]
  },
  coreSkills: [String],
  experience: [
    {
      role: String,
      company: String,
      year: String,
      description: String
    }
  ],
  education: [
    {
      degree: String,
      institution: String,
      duration: String
    }
  ],
  projects: [
    {
      name: String,
      description: String
    }
  ],
  achievements: [String],
  certifications: [String],
  aboutMe: String
});

module.exports = mongoose.model('About', aboutSchema);
