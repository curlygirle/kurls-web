import React from "react";
import "../styles/About.css";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import ScrollToTop from "../functions/ScrollToTop";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  //for animated stats
  const [stats, setStats] = useState({ users: 0, products: 0, years: 0 });

  //effect to start counting up the stats (as an animation)
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users < 5000 ? prev.users + 50 : prev.users,
        products: prev.products < 200 ? prev.products + 2 : prev.products,
        years: prev.years < 1 ? prev.years + 1 : prev.years,
      }));
    }, 50);
    return () => clearInterval(interval);
  });

  const features = [
    {
      title: "personalized hair care",
      description:
        "get customized recommendations based on your unique hair type",
    },
    {
      title: "expert guidance",
      description:
        "access professional tips and tutorials for natural hair care",
    },
    {
      title: "community support",
      description: "connect with others on their natural hair journey",
    },
  ];

  return (
    <main className="about-container">
      {/* stats section */}
      <section className="stats-grid">
        <article className="stat-card">
          <FontAwesomeIcon icon={faUser} className="stat-icon" size="2x" />
          <h3 className="stat-number">{stats.users.toLocaleString()}+</h3>
          <p className="stat-label">happy customers</p>
        </article>

        <article className="stat-card">
          <FontAwesomeIcon icon={faHeart} className="stat-icon" size="2x" />
          <h3 className="stat-number">{stats.products}+</h3>
          <p className="stat-label">products reviewed</p>
        </article>

        <article className="stat-card">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="stat-icon"
            size="2x"
          />
          <h3 className="stat-number">{stats.years}</h3>
          <p className="stat-label">year of excellence</p>
        </article>
      </section>

      {/* information about company */}
      <section className="about-section">
        <header className="about-text">
          <h2 className="section-title">about us</h2>
          <p className="section-p">
            Welcome to Kurls, your go-to destination for all things natural hair
            care! We believe that every curl, coil, and wave deserve to be
            celebrated, nurtured, and embraced.
          </p>
          <p className="section-p">
            At Kurls, we understand that no two heads of hair are the same.
            That’s why our approach is all about customization and education.
          </p>
        </header>

        <figure className="about-image-container">
          <img src={about1} alt="hair" className="about-image" />
        </figure>

        {/* features section */}
        <section className="features-grid">
          {features.map((feature, index) => (
            <article key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </section>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <article className="founder-text">
          <h2 className="section-title">our founder</h2>
          <p className="section-p">
            I, Erin Harper, the visionary behind Kurls, am passionate about
            celebrating natural beauty and empowering people to embrace their
            unique hair textures.
          </p>
          <p className="section-p">
            As someone who has personally navigated the challenges of finding
            the right products and routines for natural hair, I understand the
            importance of a personalized, informed approach to hair care.
          </p>
        </article>
        <figure className="founder-image-container">
          <img src={about2} alt="erin harper" className="founder-image" />
        </figure>
      </section>

      <ScrollToTop />
    </main>
  );
}
