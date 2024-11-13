import React from "react";
import "../styles/Contact.css";
import { useState } from "react";

export default function Signup() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    help: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      name: "",
      surname: "",
      help: "",
      message: "",
    });

    //to hide message
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="form-container">
      {showSuccess && (
        <section className="success-mes">
          <h2>success</h2>
          <p>your message has been sent. we will get back to you soon!</p>
        </section>
      )}

      <section className="form-information">
        <h2>CONTACT US</h2>
        <form onSubmit={handleSubmit}>
          <section className="name-surname-container">
            <section className="form-content half-width">
              <label>name</label>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </section>
            <section className="form-content half-width">
              <label>surname</label>
              <input
                type="text"
                name="surname"
                placeholder="enter your surname"
                required
                value={formData.surname}
                onChange={handleChange}
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
              value={formData.help}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
            />
          </section>

          <button type="submit" className="btn-color">
            submit
          </button>
        </form>
      </section>
    </main>
  );
}
