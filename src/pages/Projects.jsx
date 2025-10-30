import React from "react";
import ProjectCard from "./ProjectCard";

function Projects(){
    const projectList = [
        {title: "Todo App", description: "Web development project.", img: "/images/todo.png", link:"#"},
        {title: "Calculator", description: "Web development project.", img: "/images/calculator.png", link:"#"},
        {title: "Weather App", description: "Web development project.", img: "/images/weather.png", link:"#"},
        {title: "Portfolio Project", description: "Web development project.", img: "/images/portfolio.png", link:"#"},
    ]

    return(
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projectList.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </section>
    )
}

export default Projects;
