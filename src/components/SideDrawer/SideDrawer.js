import React from "react";
import { Link } from "react-router-dom"
import "./SideDrawer.css"

const SideDrawer = props => {

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/" onClick={props.bdclick}>Home</Link></li>
        <li><Link to="/projects" onClick={props.bdclick}>Projects</Link></li>
        <li><Link to="/skills" onClick={props.bdclick}>Skills</Link></li>
        <li><Link to="/contact" onClick={props.bdclick}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default SideDrawer;