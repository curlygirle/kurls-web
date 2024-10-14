import React from "react";
import "../../styles/TypeGuide.css";

export default function TypeGuide() {
  const hairTypes = [
    { type: "straight", characteristics: "sleek, shiny, difficult to curl" },
    { type: "wavy", characteristics: "s-shaped waves, prone to frizz" },
    { type: "curly", characteristics: "defined curls, springy texture" },
    { type: "coily", characteristics: "tight coils, very fragile" },
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
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}
