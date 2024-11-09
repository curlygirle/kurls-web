import React from "react";
import "../../styles/TypeGuide.css";
import straight from "../../images/straight.jpg";
import wavy from "../../images/wavy.jpg";
import curly from "../../images/curly.jpg";
import coily from "../../images/coily.jpg";

export default function TypeGuide() {
  const hairTypes = [
    {
      type: "straight",
      characteristics: "sleek, shiny, difficult to curl",
      image: straight,
    },
    {
      type: "wavy",
      characteristics: "s-shaped waves, prone to frizz",
      image: wavy,
    },
    {
      type: "curly",
      characteristics: "defined curls, springy texture",
      image: curly,
    },
    {
      type: "coily",
      characteristics: "tight coils, very fragile",
      image: coily,
    },
  ];

  return (
    <>
      <section className="type-container">
        <h2 className="type-header">hair type guide</h2>
        <section className="type-content">
          <section className="type-grid">
            {hairTypes.map((hairType, index) => (
              <section key={hairType.type} className="type-card">
                <h2 className="type-title">
                  type {index + 1}: {hairType.type}
                </h2>
                <p className="type-des">
                  characteristics: {hairType.characteristics}
                </p>
                <section className="type-image-container">
                  <img className="type-image" src={hairType.image} alt="" />
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}
