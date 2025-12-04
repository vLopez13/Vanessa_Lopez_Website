// src/App.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import './App.css'; 

function App() {
  // This is your "Database" of projects
  const myProjects = [
    {
      id: 1,
      title: "Personal Blog",
      description: "A blog built with Next.js and Markdown.",
      image: "https://via.placeholder.com/300", // Replace with your image URL
      link: "https://github.com/yourusername/blog"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Fetches live weather data using an API.",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/yourusername/weather"
    },
    {
      id: 3,
      title: "To-Do List",
      description: "A classic React beginner project.",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/yourusername/todo"
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