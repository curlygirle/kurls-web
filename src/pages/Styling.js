import React from "react";
import "../styles/Styling.css";
import placeholder2 from "../images/placeholder2.jpeg";

export default function Styling() {
  return (
    <section className="style">
      <section className="styling-heading">
        <h2>styling hair guide</h2>
        <main className="images">
          <section className="image">
            <img src={placeholder2} alt="" />
            <article className="caption">
              <p>slick looks</p>
            </article>
          </section>
          <section className="image">
            <img src={placeholder2} alt="" />
            <article className="caption">
              <p>natural looks</p>
            </article>
          </section>
          <section className="image">
            <img src={placeholder2} alt="" />
            <article className="caption">
              <p>protective looks</p>
            </article>
          </section>
        </main>
      </section>
      <section className="image-grid">
        <h2>explore more styles</h2>
        <main className="grid-images">
          <img src={placeholder2} alt="" />
          <img src={placeholder2} alt="" />
          <img src={placeholder2} alt="" />
          <img src={placeholder2} alt="" />
          <img src={placeholder2} alt="" />
          <img src={placeholder2} alt="" />
          <img src={placeholder2} alt="" />
        </main>
      </section>
    </section>
  );
}
