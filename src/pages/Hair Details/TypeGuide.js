import React, { useState } from "react";
import "../../styles/TypeGuide.css";
import straight from "../../images/straight.jpg";
import wavy from "../../images/wavy.jpg";
import curly from "../../images/curly.jpg";
import coily from "../../images/coily.jpg";

export default function TypeGuide() {
  const [selectedType, setSelectedType] = useState(null);

  const hairTypes = [
    {
      type: "straight",
      characteristics: "sleek, shiny, difficult to curl",
      care: "• Prone to oiliness\n• Benefits from lightweight products\n• Wash frequently to prevent buildup",
      image: straight,
    },
    {
      type: "wavy",
      characteristics: "s-shaped waves, prone to frizz",
      care: "• Use anti-frizz products\n• Avoid heavy styling\n• Air dry when possible",
      image: wavy,
    },
    {
      type: "curly",
      characteristics: "defined curls, springy texture",
      care: "• Deep condition regularly\n• Use curl-enhancing products\n• Avoid heat styling",
      image: curly,
    },
    {
      type: "coily",
      characteristics: "tight coils, very fragile",
      care: "• Moisturize frequently\n• Protective styling\n• Weekly deep treatments",
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
              <section
                key={hairType.type}
                className="type-card"
                onMouseEnter={() => setSelectedType(hairType.type)}
                onMouseLeave={() => setSelectedType(null)}
              >
                <h2 className="type-title">
                  type {index + 1}: {hairType.type}
                </h2>
                <p className="type-des">{hairType.characteristics}</p>
                <section className="type-image-container">
                  <img className="type-image" src={hairType.image} alt="" />
                  <div
                    className={`type-care-overlay ${
                      selectedType === hairType.type ? "overlay-visible" : ""
                    }`}
                  >
                    <div className="care-content">
                      <h4 className="care-title">care tips:</h4>
                      <pre className="care-tips">{hairType.care}</pre>
                    </div>
                  </div>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}
