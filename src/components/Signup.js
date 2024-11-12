import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

export default function Signup() {
  return (
    <main className="form-container">
      <section className="form-information">
        <h2>CREATE ACCOUNT</h2>
        <form>
          <section className="name-surname-container">
            <section className="form-content half-width">
              <label>name</label>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                required
              />
            </section>
            <section className="form-content half-width">
              <label>surname</label>
              <input
                type="text"
                name="surname"
                placeholder="enter your surname"
                required
              />
            </section>
          </section>
          <section className="form-content">
            <label>email</label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
            />
          </section>
          <section className="form-content">
            <label>password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </section>

          <button type="submit" className="btn-color">
            sign up
          </button>
        </form>
        <section className="form-text">
          <p>have an account? </p>
          <p className="form-link">
            <Link to="/login">log in</Link>
          </p>
        </section>
      </section>
    </main>
  );
}
