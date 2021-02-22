import React from 'react'
import "./skills.css"

const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="section skills-listed">
                <div className="section best">
                    <h3>What I Know Best:</h3>
                    HTML, CSS, Javascript, React
                </div>
                <div className="section have-worked">
                    <h3>I have worked with:</h3>
                    Git, MySQL, MongoDB, Firebase, node.js, Express, Wordpress, jQuery, Bootstrap
                </div>
                <div className="section current">
                    <h3>Current Learning Focus:</h3>
                    React Router, Framer Motion, Sass
                </div>
                <div className="section a-little-more">
                    I'm not afraid of learning anything new. Three years ago I didn't know anything about web development. A year ago I'd never used React.  I am excited at the prospect of learning new skills and working on a team.
                </div>
            </div>
        </div>
    )
}

export default Skills
