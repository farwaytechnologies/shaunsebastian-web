import React, { useEffect, useState } from 'react';
import '../Styles/AdminStyle/AdminManageAbout.css';

function AdminManageAbout() {
  const [aboutData, setAboutData] = useState({
    name: '',
    title: '',
    email: '',
    personalInfo: {
      dob: '',
      bloodGroup: '',
      gender: '',
      status: '',
      languages: ''
    },
    coreSkills: '',
    experience: '',
    education: '',
    projects: '',
    achievements: '',
    certifications: '',
    aboutMe: ''
  });

  const fetchAboutData = () => {
    fetch('https://ss-backend-7arm.onrender.com/api/about')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setAboutData({
            ...data,
            personalInfo: {
              ...data.personalInfo,
              languages: data.personalInfo.languages.join(', ')
            },
            coreSkills: data.coreSkills.join(', '),
            experience: JSON.stringify(data.experience, null, 2),
            education: JSON.stringify(data.education, null, 2),
            projects: JSON.stringify(data.projects, null, 2),
            achievements: data.achievements.join(', '),
            certifications: data.certifications.join(', ')
          });
        }
      })
      .catch(err => console.error('Failed to fetch about data:', err));
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('personalInfo.')) {
      const key = name.split('.')[1];
      setAboutData(prev => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          [key]: value
        }
      }));
    } else {
      setAboutData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for API (convert string fields back to arrays/objects)
    const payload = {
      ...aboutData,
      personalInfo: {
        ...aboutData.personalInfo,
        languages: aboutData.personalInfo.languages.split(',').map(item => item.trim())
      },
      coreSkills: aboutData.coreSkills.split(',').map(item => item.trim()),
      achievements: aboutData.achievements.split(',').map(item => item.trim()),
      certifications: aboutData.certifications.split(',').map(item => item.trim()),
      experience: JSON.parse(aboutData.experience),
      education: JSON.parse(aboutData.education),
      projects: JSON.parse(aboutData.projects)
    };

    fetch('https://ss-backend-7arm.onrender.com/api/about', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        alert('About Info Updated Successfully');
        fetchAboutData();
      })
      .catch(err => console.error('Failed to update about data:', err));
  };

  return (
    <div className="admin-about-page">
      <h2 className="admin-about-title">Manage About Page</h2>
      <form className="admin-about-form" onSubmit={handleSubmit}>
        <div className="admin-form-group">
          <label>Name:</label>
          <input type="text" name="name" value={aboutData.name} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>Title:</label>
          <input type="text" name="title" value={aboutData.title} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>Email:</label>
          <input type="email" name="email" value={aboutData.email} onChange={handleChange} />
        </div>

        <h3>Personal Info</h3>
        <div className="admin-form-group">
          <label>Date of Birth:</label>
          <input type="text" name="personalInfo.dob" value={aboutData.personalInfo.dob} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>Blood Group:</label>
          <input type="text" name="personalInfo.bloodGroup" value={aboutData.personalInfo.bloodGroup} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>Gender:</label>
          <input type="text" name="personalInfo.gender" value={aboutData.personalInfo.gender} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>Status:</label>
          <input type="text" name="personalInfo.status" value={aboutData.personalInfo.status} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>Languages (comma separated):</label>
          <input type="text" name="personalInfo.languages" value={aboutData.personalInfo.languages} onChange={handleChange} />
        </div>

        <div className="admin-form-group">
          <label>Core Skills (comma separated):</label>
          <input type="text" name="coreSkills" value={aboutData.coreSkills} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>Experience (JSON Array):</label>
          <textarea name="experience" value={aboutData.experience} onChange={handleChange} rows="5"></textarea>
        </div>
        <div className="admin-form-group">
          <label>Education (JSON Array):</label>
          <textarea name="education" value={aboutData.education} onChange={handleChange} rows="5"></textarea>
        </div>
        <div className="admin-form-group">
          <label>Projects (JSON Array):</label>
          <textarea name="projects" value={aboutData.projects} onChange={handleChange} rows="5"></textarea>
        </div>
        <div className="admin-form-group">
          <label>Achievements (comma separated):</label>
          <input type="text" name="achievements" value={aboutData.achievements} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>Certifications (comma separated):</label>
          <input type="text" name="certifications" value={aboutData.certifications} onChange={handleChange} />
        </div>
        <div className="admin-form-group">
          <label>About Me:</label>
          <textarea name="aboutMe" value={aboutData.aboutMe} onChange={handleChange} rows="4"></textarea>
        </div>

        <button type="submit" className="admin-submit-btn">Save Changes</button>
      </form>
    </div>
  );
}

export default AdminManageAbout;
