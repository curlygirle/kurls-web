import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import placeholder from "../images/placeholder.jpeg";
import placeholder2 from "../images/placeholder.jpeg";
import placeholder3 from "../images/placeholder.jpeg";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [placeholder, placeholder2, placeholder3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <section className="homepage">
      <section className="homepage-carousel">
        {images.map((image, index) => (
          <img
            key={index}
            className={`homepage-image ${
              index === currentIndex ? "active" : "inactive"
            }`}
            src={image}
            alt=""
          />
        ))}
      </section>

      <main className="homepage-content">
        <h1 className="homepage-text">welcome to kurls</h1>
        <button className="homepage-btn">
          <Link to="/login">get started</Link>
        </button>
      </main>
    </section>
  );
}
