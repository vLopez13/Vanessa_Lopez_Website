import React from 'react';
import ProjectCard from './ProjectCard';
import './App.css'; 

function App() {
  const myProjects = [
    {
      id: 1,
      title: "Products Book Agent",
      description: "A agentic solution to libraries using FastAPI",
      image: "/images/tetris.png", 
      tags: ["FastAPI", "Python", "Agents", "Postgresql"],
      link: "https://github.com/vLopez13/product-bookstore-agent"
    },
    {
      id: 2,
      title: "Insurance Claims App",
      description: "Helps process and review each medical procedure approval or denial.",
      image: "https://via.placeholder.com/300",
      tags: ["FastAPI", "Python", "Agents", "LLMS"],
      link: "https://github.com/vLopez13/InsuranceClaims"
    },
    {
      id: 3,
      title: "Pomodoro Timer",
      description: "A classic Pomodoro Timer to help productivity and focus.",
      image: "/images/image_pomodoro_time.png",
      tags: ["Python", "API"],
      link: "https://github.com/vLopez13/pomodoro-coworker"
    },
    {
      id: 4, 
      title: "Salesforce Equipment Tracking",
      description:"An app that allows you to track all health equipment in a hospital",
      image: "https://via.placeholder.com/300",
      tags: ["Salesforce", "Apex", "LWC"],
      link: "https://github.com/vLopez13/salesforce-equipment"
    },
    {
      id: 5, 
      title: "Healthcare Conversationalist AI",
      description:"An app that allows you to interact and chat with healthcare data using AI",
      image: "images/healthcareapp.png",
      tags: ["Salesforce", "Apex", "LWC"],
      link: "https://github.com/vLopez13/conversationbot"
    }
  ];
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <h1>My Creative Portfolio</h1>
        <p className="bio">Welcome to my work! I am a Software Engineer specializing in Python, AI, and Salesforce.</p>
        
        <div className="hero-buttons">
          <a 
            href="/Software-Engineer-Res-Vanessa-Lopez.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            📄 Vanessa Lopez Resume
          </a>

          <a 
            href="https://github.com/vLopez13" 
            target="_blank" 
            rel="noreferrer" 
            className="btn"
          >
            💻 Github
          </a>

          <a 
            href="mailto:vanessalo13@yahoo.com" 
            className="btn"
          >
            📧 Mail to Me
          </a>
        </div>
      </header>

      <div className="project-grid">
        {myProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags} 
          />
        ))}
      </div>
    </div>
  );
}
export default App;