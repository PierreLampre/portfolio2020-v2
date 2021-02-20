import React from "react";
import "./SideDrawerToggler.css"

const SideDrawerToggler = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default SideDrawerToggler;