import React from "react";

function ProjectCard({title, description, img, link}){
    return(
        <div className="project-card">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} className="btn">View Project</a>
        </div>
    )
}

export default ProjectCard;
