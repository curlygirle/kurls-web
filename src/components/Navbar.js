import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/kurls logo nb.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="kurls logo" />
        </NavLink>
      </div>
      <nav className="navbar-links">
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about us">about us</NavLink>
          </li>
          <li>
            <NavLink to="/hair hub">hair hub</NavLink>
          </li>
          <li>
            <NavLink to="/product hub">product hub</NavLink>
          </li>
          <li>
            <NavLink to="/styling hub">styling hub</NavLink>
          </li>
          <li>
            <NavLink to="/community hub">community hub</NavLink>
          </li>
          {/* <li>
            <NavLink to="/login">login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">signup</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact us</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
