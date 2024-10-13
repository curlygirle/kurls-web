import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import placeholder from "../images/placeholder.jpeg";

export default function Home() {
  return (
    <section className="homepage">
      <img className="homepage-image" src={placeholder} alt="" />
      <main className="homepage-content">
        <h1 className="homepage-text">welcome to kurls</h1>
        <button className="homepage-btn">
          <Link to="/login">get started</Link>
        </button>
      </main>
    </section>
  );
}
