import React from "react";
import "../styles/Contact.css";

export default function Signup() {
  return (
    <main className="form-container">
      <section className="form-information">
        <h2>CONTACT US</h2>
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
            <label>how can we help?</label>
            <input
              type="text"
              name="help"
              placeholder="enter the topic"
              required
            />
          </section>
          <section className="form-content">
            <label>message</label>
            <textarea
              type="text"
              rows="5"
              name="message"
              placeholder="enter your message"
              required
            />
          </section>

          <button type="submit">submit</button>
        </form>
      </section>
    </main>
  );
}
