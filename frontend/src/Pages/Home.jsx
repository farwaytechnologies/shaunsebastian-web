import React from 'react';
import '../Styles/PagesStyle/Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-avatar">
            <span>SS</span>
          </div>
          <h1 className="hero-name">Shaun Sebastian</h1>
          <p className="hero-title">Full Stack Developer & Cyber Security Expert</p>
          <a href="mailto:mail@shaunsebastian.in" className="hero-email">
            mail@shaunsebastian.in
          </a>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Main Content Grid */}
      <div className="content-grid">

        {/* Personal Info Card */}
        <section className="card personal-card">
          <div className="card-header">
            <h2>Personal Information</h2>
          </div>
          <div className="card-content">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Date of Birth</span>
                <span className="info-value">01/06/1998</span>
              </div>
              <div className="info-item">
                <span className="info-label">Blood Group</span>
                <span className="info-value">A+</span>
              </div>
              <div className="info-item">
                <span className="info-label">Gender</span>
                <span className="info-value">Male</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value">Single</span>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Card */}
        <section className="card languages-card">
          <div className="card-header">
            <h2>Languages</h2>
          </div>
          <div className="card-content">
            <div className="language-tags">
              <span className="language-tag">English</span>
              <span className="language-tag">Malayalam</span>
            </div>
          </div>
        </section>

        {/* Skills Card */}
        <section className="card skills-card">
          <div className="card-header">
            <h2>Core Skills</h2>
          </div>
          <div className="card-content">
            <div className="skills-list">
              <div className="skill-item">Programming Languages & Tools</div>
              <div className="skill-item">Responsive Design</div>
              <div className="skill-item">Cross Browser Testing & Debugging</div>
              <div className="skill-item">Cross Functional Teams</div>
              <div className="skill-item">Agile Development</div>
            </div>
          </div>
        </section>

        {/* Experience Card */}
        <section className="card experience-card">
          <div className="card-header">
            <h2>Experience</h2>
          </div>
          <div className="card-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3>PHP Developer</h3>
                <span className="experience-year">2020</span>
              </div>
              <p className="experience-company">Logic Software Solutions, Kottayam</p>
              <p className="experience-type">Industrial Visit in PHP</p>
            </div>
            <div className="experience-item">
              <div className="experience-header">
                <h3>Graphic Designer</h3>
                <span className="experience-year">2023</span>
              </div>
              <p className="experience-company">Antz Media, Kochi</p>
              <p className="experience-type">Internship in Graphic Design</p>
            </div>
          </div>
        </section>

        {/* Education Card */}
        <section className="card education-card">
          <div className="card-header">
            <h2>Education</h2>
          </div>
          <div className="card-content">
            <div className="education-item">
              <h3>Bachelor of Arts – Animation and Graphic Design</h3>
              <p className="education-institution">Mahatma Gandhi University, Kerala</p>
              <span className="education-year">2022–2025</span>
            </div>
            <div className="education-item">
              <h3>Cyber Security Expert</h3>
              <p className="education-institution">Simplilearn (Online)</p>
              <span className="education-year">Graduated 2023</span>
            </div>
            <div className="education-item">
              <h3>Diploma in Computer Engineering</h3>
              <p className="education-institution">Government Polytechnic College, Kerala</p>
              <span className="education-year">2017–2020</span>
            </div>
          </div>
        </section>

        {/* Projects Card */}
        <section className="card projects-card">
          <div className="card-header">
            <h2>Featured Projects</h2>
          </div>
          <div className="card-content">
            <div className="project-item">
              <h3>Library Management System</h3>
              <p>A Java-based application developed using NetBeans for managing book records and user details with a user-friendly interface.</p>
              <span className="project-tag">Java</span>
            </div>
            <div className="project-item">
              <h3>PocketBook</h3>
              <p>A Java-based Android application using QR code scanning to download and manage a local book library.</p>
              <div className="project-tags">
                <span className="project-tag">Java</span>
                <span className="project-tag">Android</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Card */}
        <section className="card achievements-card">
          <div className="card-header">
            <h2>Achievements & Certifications</h2>
          </div>
          <div className="card-content">
            <div className="achievement-section">
              <h3>Achievements</h3>
              <div className="achievement-item">
                <span className="achievement-badge">🏆</span>
                <span>1st Place - Swastika '15 Inter College Techno Cultural Fest - Scien EX 2015</span>
              </div>
            </div>

            <div className="certification-section">
              <h3>Key Certifications</h3>
              <div className="cert-grid">
                <span className="cert-tag">Cyber Security Expert</span>
                <span className="cert-tag">CompTIA Security+</span>
                <span className="cert-tag">CEH (V12)</span>
                <span className="cert-tag">CISSP®</span>
                <span className="cert-tag">CompTIA Network+</span>
                <span className="cert-tag">CISM OSL</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Card */}
        <section className="card about-card">
          <div className="card-header">
            <h2>About Me</h2>
          </div>
          <div className="card-content">
            <p>
              Apart from being a computer engineer, I enjoy most of my time exploring technology.
              I follow sci-fi and fantasy genre movies and spend a large amount of my free time
              exploring the latest technology advancements in the programming world.
            </p>
          </div>
        </section>

        {/* Connect Card */}
        <section className="card connect-card">
          <div className="card-header">
            <h2>Let's Connect</h2>
          </div>
          <div className="card-content">
            <div className="connect-links">
              <a href="#" className="connect-link social">
                <span>Social Media</span>
              </a>
              <a href="#" className="connect-link github">
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
