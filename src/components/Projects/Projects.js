import React, { useState } from 'react'
import projectData from "./projects.json"
import ProjectButton from "./ProjectButton"
import ChosenProject from "./ChosenProject"
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import "./projects.css"

const Projects = () => {

    let { path, url } = useRouteMatch();
    const [project, setProject] = useState(null);

    function chooseAProject(name) {
        let chosen;
        for (let i = 0; i < projectData.length; i++) {
            if(name === projectData[i].name) {
                chosen = projectData[i]
            }
        }
        setProject(chosen)
    }

    let projectNames = projectData.map(proj => (

        <ProjectButton 
            key={proj.name} 
            name={proj.name} 
            chooseAProject={() => chooseAProject(proj.name)}
        />
        
    ));

    return (
        <div className="projects">
            <h1>Projects</h1>
                <div className="project-button-box">
                    {projectNames.map(btn=>btn)}
                </div>
        {project === null
        ?
        <p>Choose a project to view its details.</p>
        :
        <ChosenProject project={project} />
        }
        </div>
    )
}

export default Projects
