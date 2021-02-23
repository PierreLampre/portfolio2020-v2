import React from 'react'

const ChosenProject = ({ project }) => {

    let cardStyle = {
        color: project.css.text,
        background: project.css.bg
    }

    let btnStyle = {
        background: project.css.btnBG
    }

    return (
        <div className="chosen-project" style={cardStyle}>
            <div className="img-box">
                <img className="screenshot" src={project.img} alt="a view of the project I built" />
            </div>
            <h2 className="proj-name">{project.name}</h2>
            <div className="tech">
                Tech Used: {project.tech}
            </div>
            <div className="pkgs">
                Packages: {project.pkgs}
            </div>
            <div className="link-btn-box">
                <a className="link-btn" href={project.deployed} target="_blank" rel="noopener noreferrer"><button style={btnStyle}>Deployed</button></a>
                <a className="link-btn" href={project.repo} target="_blank" rel="noopener noreferrer"><button style={btnStyle}>Repo</button></a>
            </div>
            <div className="blurb">
                About: {project.blurb}
            </div>
        </div>
    )
}

export default ChosenProject;
