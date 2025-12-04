// src/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css'; // We will create this next

// "props" acts like a bag of data passed from the parent
function ProjectCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" rel="noreferrer">
          <button>View Project</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;