import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  return (
    <main className="form-container">
      <section className="form-information">
        <h2>LOGIN</h2>
        <form>
          <section className="form-content">
            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              required
            />
          </section>
          <section className="form-content">
            <label>password</label>
            <input
              type="text"
              name="password"
              placeholder="password"
              required
            />
          </section>

          <button type="submit">login</button>
        </form>
        <section className="form-text">
          <p>don't have an account? </p>
          <p className="form-link">
            <Link to="/signup">create account</Link>
          </p>
        </section>
      </section>
    </main>
  );
}
