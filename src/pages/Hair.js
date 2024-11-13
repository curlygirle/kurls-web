import React, { useState } from "react";
import "../styles/Hair.css";
import Questionnaire from "./Hair Details/Questionnaire";
import AiScanner from "./Hair Details/AiScanner";
import TypeGuide from "./Hair Details/TypeGuide";
import ScrollToTop from "../functions/ScrollToTop";
import typeguide from "../images/hair hub/type.png";
import question from "../images/hair hub/questionnaire.png";
import scanner from "../images/hair hub/ai.png";

export default function Hair() {
  const [activeTab, setActiveTab] = useState("hair-hub");

  //an array of the various tabs
  const tabs = ["hair-hub", "questionnaire", "type-guide", "hair-scanner"];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "hair-hub":
        return (
          <section className="hairhub">
            <h3 className="title">hair hub</h3>
            <section className="hairhub-grid">
              <section className="hairhub-item">
                <h3>questionnaire</h3>
                <p>
                  An interactive tool that provides personalized hair care
                  advice and product recommendations based on your unique hair
                  profile and preferences.
                </p>
                <div className="image-container">
                  <img src={question} alt="" className="hub-image" />
                </div>
              </section>
              <section className="hairhub-item">
                <h3>type guide</h3>
                <p>
                  A visual guide to help you identify your hair type, texture,
                  and characteristics for better understanding and care of your
                  hair.
                </p>
                <div className="image-container">
                  <img src={typeguide} alt="" className="hub-image" />
                </div>
              </section>
              <section className="hairhub-item">
                <h3>hair scanner</h3>
                <p>
                  AI-powered tool that analyzes your hair's health and
                  condition, providing personalized care recommendations and
                  treatment suggestions.
                </p>
                <div className="image-container">
                  <img src={scanner} alt="" className="hub-image" />
                </div>
              </section>
            </section>
          </section>
        );
      case "questionnaire":
        return <Questionnaire />;
      case "type-guide":
        return <TypeGuide />;
      case "hair-scanner":
        return <AiScanner />;
      default:
        return null;
    }
  };

  return (
    <section className="hairhub-container">
      <section className="sidebar">
        <section className="sidebar-content">
          <nav className="sidebar-nav">
            {tabs.map((tab) => (
              <button
                key={tab}
                className="tab-btn"
                onClick={() => handleTabClick(tab)}
                aria-pressed={activeTab === tab}
              >
                {tab
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ))}
          </nav>
        </section>
      </section>
      <main className="main-content">
        <section className="content-area">{renderContent()}</section>
      </main>
      <ScrollToTop />
    </section>
  );
}
