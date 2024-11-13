import React from "react";
import "../styles/Styling.css";
import ScrollToTop from "../functions/ScrollToTop";
import style1 from "../images/style list/slicked.png";
import style2 from "../images/style list/natural.png";
import style3 from "../images/style list/protective.png";
import { useState } from "react";

//natural hairstyle images
import natural1 from "../images/style list/natural/1.png";
import natural2 from "../images/style list/natural/2.png";
import natural3 from "../images/style list/natural/3.png";
import natural4 from "../images/style list/natural/4.png";
import natural5 from "../images/style list/natural/5.png";
import natural6 from "../images/style list/natural/6.png";
import natural7 from "../images/style list/natural/7.png";

//protective hairstyle images
import protective1 from "../images/style list/protective/1.png";
import protective2 from "../images/style list/protective/2.png";
import protective3 from "../images/style list/protective/3.png";
import protective4 from "../images/style list/protective/4.png";
import protective5 from "../images/style list/protective/5.png";
import protective6 from "../images/style list/protective/6.png";
import protective7 from "../images/style list/protective/7.png";

//slicked hairstyle images
import slicked1 from "../images/style list/slicked/1.png";
import slicked2 from "../images/style list/slicked/2.png";
import slicked3 from "../images/style list/slicked/3.png";
import slicked4 from "../images/style list/slicked/4.png";
import slicked5 from "../images/style list/slicked/5.png";
import slicked6 from "../images/style list/slicked/6.png";
import slicked7 from "../images/style list/slicked/7.png";

export default function Styling() {
  const [selectedStyle, setSelectedStyle] = useState("natural");

  const handleStyleClick = (style) => {
    setSelectedStyle(style);
  };

  const getGridImages = () => {
    switch (selectedStyle) {
      case "slicked":
        return [
          slicked1,
          slicked2,
          slicked3,
          slicked4,
          slicked5,
          slicked6,
          slicked7,
        ];
      case "natural":
        return [
          natural1,
          natural2,
          natural3,
          natural4,
          natural5,
          natural6,
          natural7,
        ];
      case "protective":
        return [
          protective1,
          protective2,
          protective3,
          protective4,
          protective5,
          protective6,
          protective7,
        ];
      default:
        return [
          natural1,
          natural2,
          natural3,
          natural4,
          natural5,
          natural6,
          natural7,
        ];
    }
  };

  return (
    <section className="style">
      <section className="styling-heading">
        <h2>styling hair guide</h2>
        <main className="images">
          <section
            className={`image ${selectedStyle === "slicked" ? "active" : ""}`}
            onClick={() => handleStyleClick("slicked")}
          >
            <img src={style1} alt="" />
            <article className="caption">
              <p>slick looks</p>
            </article>
          </section>
          <section
            className={`image ${selectedStyle === "natural" ? "active" : ""}`}
            onClick={() => handleStyleClick("natural")}
          >
            <img src={style2} alt="" />
            <article className="caption">
              <p>natural looks</p>
            </article>
          </section>
          <section
            className={`image ${
              selectedStyle === "protective" ? "active" : ""
            }`}
            onClick={() => handleStyleClick("protective")}
          >
            <img src={style3} alt="" />
            <article className="caption">
              <p>protective looks</p>
            </article>
          </section>
        </main>
      </section>
      <section className="image-grid">
        <h2>explore more styles</h2>
        <main className="grid-images">
          {getGridImages().map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </main>
      </section>
      <ScrollToTop />
    </section>
  );
}
