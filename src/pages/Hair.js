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
                <h3>questionnaire</h3>
                <p>
                  The kurls questionnaire is an interactive tool designed to
                  help users better understand their hair by asking personalized
                  questions about hair type, routine, and preferences. Based on
                  the responses, it provides tailored hair care advice, product
                  recommendations, and routine suggestions that cater to
                  individual needs, ensuring a more effective and customized
                  hair care experience.
                </p>
              </section>
              <section className="hairhub-item">
                <h3>type guide</h3>
                <p>
                  The hair type guide offers a comprehensive breakdown of
                  various hair types and textures, helping users identify their
                  own through detailed explanations and visual representations.
                  It covers key characteristics such as curl pattern, density,
                  and porosity, providing a clear understanding of different
                  hair types to support users in tailoring their hair care
                  routines.
                </p>
              </section>
              <section className="hairhub-item">
                <h3>hair scanner</h3>
                <p>
                  The hair scanner is an AI-powered tool that analyses the
                  health and condition of your hair through a live scan. It
                  assesses various factors such as hair type, moisture levels,
                  split ends, and scalp health to deliver a detailed evaluation
                  of your hair's current state. Based on the results, it
                  provides personalized recommendations and treatments to help
                  maintain or enhance your hair's condition over time.
                </p>
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
