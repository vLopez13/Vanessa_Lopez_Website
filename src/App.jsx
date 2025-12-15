// src/App.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import './App.css'; 

function App() {
  
  <div className="hero-buttons">
  {/* Resume Button */}
  <a 
    href="/Software-Engineer-Res-Vanessa-Lopez.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn"
  >
    📄 Vanessa Lopez Resume
  </a>

  {/* Github Button */}
  <a 
    href="https://github.com/vLopez13" 
    target="_blank" 
    rel="noreferrer" 
    className="btn"
  >
    💻 Github
  </a>

  {/* NEW: Contact Button */}
  <a 
    href="mailto:vanessalo13@yahoo.com" /* ⚠️ CHANGE THIS to your actual email */
    className="btn"
  >
    📧 Mail to Me
  </a>
</div>

  const myProjects = [
    {
      id: 1,
      title: "Products Book Agent", // <--- Your Project Name
      description: "A agentic solution to libraries using FastAPI", // <--- Short description
      image: "/images/tetris.png", // <--- Path to the image you just pasted
      tags: ["FastAPI", "Python", "Agents", "Postgresql"],
      link: "https://github.com/vLopez13/product-bookstore-agent" // <--- Your deployed link
    },
    {
      id: 2,
      title: "Insurance Claims App",
      description: "Helps process and review each medical procedure apporval or denial in minutes with AI and human interference.",
      image: "https://via.placeholder.com/300",
      tags: ["FastAPI", "Python", "Agents", "LLMS"],
      link: "https://github.com/yourusername/weather"
    },
    {
      id: 3,
      title: "Pomodoro Timer",
      description: "A classic Pomodoro Timer to help productivity and focus.",
      image: "https://via.placeholder.com/300",
      tags: ["Python", "API"],
      link: "https://github.com/yourusername/todo"
    },
    {
      id: 4, 
      title: "Salesforce Equipment Tracking App",
      description:"An app that allows you to track all health equipment in a hospital",
      image: "https://via.placeholder.com/300",
      tags: ["Salesforce", "Apex", "LWC"],
      link: "https:github.com/yourusername/equipment-tracker"
    },
    {
      id: 5, 
      title: "territory Tracking App",
      description:"An app that allows sales reps to track their territories and customers",
      image: "https://via.placeholder.com/300",
      tags: ["Salesforce", "Apex", "LWC"],
      link: "https:github.com/yourusername/territory-tracker"
    }
 ];

 return (
  <div className="portfolio-container">
    <header>
      <h1>My Creative Portfolio</h1>
      <p>Welcome to my work!</p>
    </header>

    <div className="project-grid">
      {/* THE MAGIC HAPPENS HERE */}
      {myProjects.map((project) => (
        <ProjectCard 
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  </div>
);
}

export default App;