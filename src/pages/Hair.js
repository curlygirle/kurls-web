import React, { useState } from "react";
import "../styles/Hair.css";
import Questionnaire from "./Hair Details/Questionnaire";
import AiScanner from "./Hair Details/AiScanner";
import TypeGuide from "./Hair Details/TypeGuide";

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
                <h3>questionnaire:</h3>
                <p>results</p>
              </section>
              <section className="hairhub-item">
                <h3>type guide:</h3>
                <p>your hair type is</p>
              </section>
              <section className="hairhub-item">
                <h3>hair scanner:</h3>
                <p>ai hair scanner</p>
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
    </section>
  );
}
