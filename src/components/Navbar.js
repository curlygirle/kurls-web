import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/kurls logo nb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    document.body.style.overflow = !mobileMenu ? "hidden" : "auto"; //prevents user from scrolling when nav is opened in responsive view
  };

  const handleNavClick = (e) => {
    if (e.target.closest("a")) {
      setMobileMenu(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-icon">
          <FontAwesomeIcon
            icon={mobileMenu ? faXmark : faBars}
            className="menu-icon"
            onClick={toggleMenu}
          />
        </div>
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="kurls logo" />
          </NavLink>
        </div>
      </div>
      <nav
        className={`navbar-links ${mobileMenu ? "active" : ""}`}
        onClick={handleNavClick}
      >
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
