export default function Home() {
  return (
    <>
      {/* 🧭 NAVBAR: Black bar at top, white links */}
      <nav className="nav-container">
        <div className="container">
          <div className="logo">Long</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li className="social-links">
              <a href="https://linkedin.com/in/sy-long-dinh-b7886b200/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                {/* LinkedIn SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                {/* GitHub SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.facebook.com/sy.long.75" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                {/* Facebook SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Blog">
                {/* Blog SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 🌟 HERO SECTION */}
      <section id="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p>Hi there!</p>
            <h1>I'm <span>Long,</span></h1>
            <h2></h2>
            <p className="hero-sub">
              a Teaching Assistant, Computer Science graduate, and MBA holder. <br /><br />
              Currently working at British University of Vietnam.
            </p>
            <a href="#projects" className="btn">Check out my Work</a>
          </div>
          <div className="hero-image">
            {/* Make sure to place your image at public/images/background.jpg */}
            <img src="/images/background.jpg" alt="Long Dinh" />
          </div>
        </div>
      </section>

      {/* 🌑 DARK SECTION: black background for contrast */}
      <main>
        <section className="dark-section"></section>
      </main>

      {/* 👤 ABOUT SECTION */}
      <section id="about" className="dark-section">
        <div className="container">
          <h2>(Almost) everything you need to know about me... </h2>
          <div className="about-content">
            <div className="about-text">
              <p>I've spent my academic life and even career in international schools, so I've always felt at home in diverse, global environments. English has been my primary working and academic language for years, and I thrive in settings where clarity, empathy, and communication matter.</p>
              <p>With a background in Computer Science and a Master's in Business, I'm currently a Teaching Assistant at the British University Vietnam, where I support students while actively strengthening my own technical and personal growth. My prior role as a Software Tester on a large-scale software project sharpened my analytical skills, quality assurance mindset, and collaborative approach. I thrive at the intersection of technology, education, and self-development — guiding others, connecting people and ideas, and finding purpose in meaningful work. Fluent in both English and Vietnamese, I thrive in diverse, international environments. I enjoy working in/with diverse teams and have led business-related events, organized hackathons, supported university Experience Days, contributed to student engagement and marketing campaigns, and facilitated workshops and student showcases.</p>
              <p>But outside of work, I'm all about people. I play football with a great passion, so much so that I founded a football team with long-time friends and mutuals from Hanoi's international school community. It's grown into a vibrant, well-known community hub among our circle. You might also find me journaling late at night, editing videos and sharing content, mentoring students, and constantly finding new ways to bridge people, ideas, and purpose.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>Education</h3>
                <div className="edu-subbox">
                  <strong>Kindergarten to Secondary:</strong><br />
                  Singapore International School (2008-2015)
                </div>
                <div className="edu-subbox">
                  <strong>Secondary to High School:</strong><br />
                  British Vietnamese International School (2016-2018)
                </div>
                <div className="edu-subbox">
                  <strong>BSc (Hons) Computer Science: Cyber Security</strong><br />
                  Staffordshire University
                </div>
                <div className="edu-subbox">
                  <strong>Master of Business Administration</strong><br />
                  Staffordshire University
                </div>
              </div>
              <div className="stat-item">
                <h3>Experience</h3>
                <ul className="stat-list">
                  <li>Software Tester - SITS Project (2022-2023)</li>
                  <li>Teaching Assistant - School of Computing and Innovative Technologies (2023-present)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💻 PROJECTS SECTION */}
      <section id="projects" className="light-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {/* Project Card 1 */}
            <article className="project-card">
              <div className="project-image">
                <img src="/images/project1.jpg" alt="Project 1" />
              </div>
              <div className="project-content">
                <h3>Project Name</h3>
                <p>Brief description of the project and its impact. What technologies were used and what problems did it solve?</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn">View Project</a>
                  <a href="#" className="btn btn-outline">Source Code</a>
                </div>
              </div>
            </article>
            {/* Project Card 2 */}
            <article className="project-card">
              <div className="project-image">
                <img src="/images/project2.jpg" alt="Project 2" />
              </div>
              <div className="project-content">
                <h3>Project Name</h3>
                <p>Brief description of the project and its impact. What technologies were used and what problems did it solve?</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Django</span>
                  <span>PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn">View Project</a>
                  <a href="#" className="btn btn-outline">Source Code</a>
                </div>
              </div>
            </article>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* 🛠️ SKILLS SECTION */}
      <section id="skills" className="dark-section">
        <div className="container">
          <h2>Skills & Expertise</h2>
          <div className="skills-content">
            <div className="skills-header">
              <a href="path/to/your/resume.pdf" target="_blank" className="resume-btn" rel="noopener noreferrer">
                {/* Resume SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                View Resume
              </a>
            </div>
            <div className="skills-category">
              <h3>Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">Python</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Java</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3>Web Technologies</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">HTML5</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CSS3</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3>Professional Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">Teaching & Mentoring</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Technical Communication</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Problem Solving</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📬 CONTACT SECTION */}
      <section id="contact" className="light-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              <div className="contact-details">
                <a href="mailto:your.email@example.com" className="contact-item">
                  <span className="icon">📧</span>
                  <span>your.email@example.com</span>
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="contact-item">
                  <span className="icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/yourusername" className="contact-item">
                  <span className="icon">📦</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* 🎯 FOOTER */}
      <footer className="dark-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Long</h3>
              <p>Building digital experiences with purpose</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="GitHub">📦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Long Dinh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 