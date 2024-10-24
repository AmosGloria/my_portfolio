import React from 'react';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <h3>Hello, I am</h3>
      <h1><div>Amos Gloria.</div></h1>
      <h3 style={{ color: '#FF8C00' }}>Full Stack Developer</h3>

      <div id="sidebar">
        <ul>
          <li>
            <a href="https://github.com/AmosGloria" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gloria-amos" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>

      <a href="CV.pdf" download="AmosGloria_CV.pdf">Download My CV</a>

      <div id="about-section">
        <a href="#about">About Me</a>
        <p>
          I am a full stack web developer continuously honing my skills as I delve deeper into both front-end and back-end technologies.
          I am passionate about staying up-to-date with the latest frameworks and tools to create responsive, user-friendly web applications
          that meet modern standards.
        </p>
        <p>
          With a commitment to learning and growth, I am excited to contribute to dynamic projects, collaborate with innovative teams,
          and make a meaningful impact in the tech world.
        </p>
      </div>

      <div className="skills-container">
        <div id="skills-box">
          <a href="#skills">Technical Skills</a>
          <ul>
            <li>Front-End: HTML5, CSS3, JavaScript.</li>
            <li>Back-End: Node.js, Express</li>
            <li>Databases: MySQL</li>
            <li>Version Control: Git, GitHub</li>
          </ul>
        </div>

        <div id="soft-skills">
          <h3 style={{ color: '#f8f9fa' }}>Soft Skills</h3>
          <ul>
            <li>Effective Communication</li>
            <li>Problem-Solving</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>

      <div className="centered-link">
        <a href="#projects">Projects</a>
      </div>

      <div id="projects-container">
        <div className="project-box">
          <h3>Expense Tracker App</h3>
          <p>
            A personal finance management tool developed using JavaScript, Node.js, and MySQL to help users efficiently track and manage expenses.
            The application allows users to add, view, edit, and delete expenses, providing a flexible interface for managing personal finances.
            The backend, powered by Node.js, ensures secure data storage and persistence through a MySQL database,
            allowing users to maintain a historical record of transactions.
          </p>
          <p className="tech-stack">JavaScript | Node.js | MySQL</p>
          <a href="https://github.com/AmosGloria/Expense_Tracker_App" target="_blank" rel="noreferrer" className="source-code">Source Code</a>
        </div>

        <div className="project-box">
          <h3>SupportSphere Donation Management System</h3>
          <p>
            A web-based system created to streamline the management of donations between users and communities.
            It allows administrators to oversee donation activities, community managers to track and manage items,
            and donors to contribute efficiently.
            The platform is designed with user-friendliness in mind, ensuring smooth interactions for all roles involved.
          </p>
          <p className="tech-stack">JavaScript | Node.js | MySQL</p>
          <a href="https://github.com/AmosGloria/SupportSphere-Donations-Management-System" target="_blank" rel="noreferrer" className="source-code">Source Code</a>
        </div>

        <div className="project-box">
          <h3>Portfolio Website</h3>
          <p>
            A responsive personal portfolio built to highlight my technical expertise, key projects, and professional journey in the tech industry.
            It showcases my skills in front-end and back-end development, version control, and responsive design.
            This portfolio reflects my commitment to creating high-quality, user-focused web applications while providing a detailed
            snapshot of my abilities and achievements.
          </p>
          <p className="tech-stack">HTML5 | CSS3 | JavaScript</p>
          <a href="" target="_blank" rel="noreferrer" className="source-code">Source Code</a>
        </div>
      </div>

      <section id="contact">
        <h2>Contact Me</h2>
        <ul>
          <li>
            <a href="mailto:amoskesegloria@gmail.com">
              <i className="fas fa-envelope"></i>
              <p>Email:</p>
              <p><span>amoskesegloria@gmail.com</span></p>
            </a>
          </li>
        </ul>
      </section>

      <form action="/submit-form" method="POST" id="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <a href="#experience">Experience</a>
      <ul>
        <li>Power Learn Academy @ Software Developer Intern</li>
      </ul>
    </div>
  );
};


export default App;
