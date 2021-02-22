import React from 'react'

const ProjectButton = ({ name, chooseAProject }) => {
    return (
        <button
            className="project-button"
            onClick={chooseAProject}
        >
            {name}
        </button>
    )
}

export default ProjectButton
