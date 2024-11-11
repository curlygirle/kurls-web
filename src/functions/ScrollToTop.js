import React from "react";
import { useState, useEffect } from "react";
import "../styles/Scroll.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
  const [toTopButton, setToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setToTopButton(true);
      } else {
        setToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="">
      {toTopButton && (
        <button className="button" onClick={scrollUp}>
          <FontAwesomeIcon icon={faChevronUp} className="icon" />
        </button>
      )}
    </section>
  );
}
