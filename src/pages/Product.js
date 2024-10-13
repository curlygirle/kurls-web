import React from "react";
import { useState } from "react";
import ProductPage from "./ProductPage";
import ScannerPage from "./ScannerPage";
import "../styles/Product.css";

export default function Product() {
  const [activeTab, setActiveTab] = useState("product");

  const handleTabClick = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <section className="tab">
      <section className="tab-container">
        <button
          className="tab-button"
          onClick={() => handleTabClick("product")}
          aria-pressed={activeTab === "product"}
        >
          product
        </button>
        <button
          className="tab-button"
          onClick={() => handleTabClick("scanner")}
          aria-pressed={activeTab === "scanner"}
        >
          scanner
        </button>
      </section>
      {activeTab === "product" ? <ProductPage /> : <ScannerPage />}
    </section>
  );
}
