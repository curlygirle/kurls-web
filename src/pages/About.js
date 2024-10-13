import React from "react";
import "../styles/About.css";
import placeholder from "../images/placeholder.jpeg";

export default function About() {
  return (
    <section>
      <main className="aboutus">
        <h2>about us</h2>
        <p cl>
          Nostrud enim pariatur culpa amet excepteur eiusmod nulla sint. Do eu
          cupidatat eu culpa minim veniam ex occaecat reprehenderit. Dolore eu
          id eiusmod amet officia amet ad culpa duis aliquip. Labore
          reprehenderit consectetur pariatur proident mollit incididunt velit
          pariatur occaecat.
        </p>
        <img src={placeholder} alt="" />
      </main>
      <main className="ourfounder">
        <h2>our founder</h2>
        <p>
          Nostrud enim pariatur culpa amet excepteur eiusmod nulla sint. Do eu
          cupidatat eu culpa minim veniam ex occaecat reprehenderit. Dolore eu
          id eiusmod amet officia amet ad culpa duis aliquip. Labore
          reprehenderit consectetur pariatur proident mollit incididunt velit
          pariatur occaecat.
        </p>
        <img src={placeholder} alt="" />
      </main>
    </section>
  );
}
