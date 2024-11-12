import React from "react";
import { Link } from "react-router-dom";
import "../styles/Notfound.css";
import placeholder from "../images/error image.png";

export default function Notfound() {
  return (
    <section className="error-container">
      <h1 className="header">PAGE NOT FOUND</h1>
      <img
        src={placeholder}
        alt="female washing her hair"
        className="error-image"
      />
      <p>sorry the page you were looking for does not exist</p>
      <button>
        {" "}
        <Link to="/" className="btn-color">
          back to home
        </Link>
      </button>
    </section>
  );
}
