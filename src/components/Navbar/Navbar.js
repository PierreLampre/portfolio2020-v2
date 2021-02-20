import React from 'react'
import "./Navbar.css"
import SideDrawerToggler from "../SideDrawer/SideDrawerToggler"
import { Link } from "react-router-dom"

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar-grid">
      <div className="burger">
        <SideDrawerToggler click={props.drawerClickHandler} />
      </div>
      <Link to="/">
        <h1 className="logo">JUSTIN LAMPE</h1>
      </Link>
      <div className="listItemContainer">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;