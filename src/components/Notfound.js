import React from "react";
import { Link } from "react-router-dom";
import "../styles/Notfound.css";
import placeholder from "../images/placeholder.jpeg";

export default function Notfound() {
  return (
    <section className="error-container">
      <h1>404 ERROR</h1>
      <img src={placeholder} alt="this is a placeholder" />
      <p>Page not found</p>
      <button>
        {" "}
        <Link to="/">home</Link>
      </button>
    </section>
  );
}
