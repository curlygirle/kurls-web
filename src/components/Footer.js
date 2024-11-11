import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main className="footer-main">
      <section className="footer-container">
        <section className="footer-row">
          <section className="col">
            <p>kurls</p>
            <p className="col-p">
              To empower and celebrate people with all types of natural hair. We
              believe every curl, coil, and wave deserves to be nurtured and
              embraced.
            </p>
          </section>
          <section className="col">
            <p>useful links</p>
            <ul className="links-list">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about us">about us</Link>
              </li>
              <li>
                <Link to="/contact">contact us</Link>
              </li>
            </ul>
          </section>
          <section className="col">
            <p>sign up for updates</p>
            <section className="input-container">
              <input type="email" placeholder="enter your email" />
              <button type="submit">subscribe</button>
            </section>
          </section>
        </section>
        <section className="row">
          <p className="col-sm">
            &copy; 2024 kurls | all rights reserved | terms and conditions |
            privacy policy{" "}
          </p>
        </section>
      </section>
    </main>
  );
}
