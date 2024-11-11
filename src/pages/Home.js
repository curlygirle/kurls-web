import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import ScrollToTop from "../functions/ScrollToTop";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 10000);

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
      <ScrollToTop />
    </section>
  );
}
