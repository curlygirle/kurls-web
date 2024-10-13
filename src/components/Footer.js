import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/kurls logo nb.png";

export default function Footer() {
  return (
    <main className="footer-main">
      <section className="footer-container">
        <section className="footer-row">
          <section className="col">
            <img src={logo} alt="" />
            <p>
              Id nulla id ut mollit do et laborum dolore anim. Adipisicing
              voluptate nisi laborum quis officia. Fugiat excepteur magna irure
              aute nostrud ullamco. Ex laborum Lorem id nulla officia.
            </p>
          </section>
          <section className="col">
            <p>usefull links</p>
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
