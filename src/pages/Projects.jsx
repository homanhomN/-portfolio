import React from "react";
import ProjectCard from "./ProjectCard";

function Projects(){
    const projectList = [
        {title: "Portfolio", description: "Web development project.", link:"https://portfolio-ten-theta-31.vercel.app/"},
        {title: "Busines", description: "Web development project.", link:"https://business-chi-cyan.vercel.app/"},
        {title: "Blog website", description: "Web development project.", link:"https://blog-website-ochre-chi.vercel.app/"},
        {title: "School website", description: "Web development project.", img: "/images/portfolio.png", link:"https://aziz-rho.vercel.app/"},
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
