import React from 'react';
import './ProjectCard.css'; 

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.image} alt={props.title} className="card-image" />
      
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        
        {/* New: Display the tags if they exist */}
        <div className="tags-container">
          {props.tags && props.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <a href={props.link} target="_blank" rel="noreferrer">
          <button className="btn">View Project</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;