import React, { useState } from "react";
import { hairProducts } from "../../components/ProductData";
import "../../styles/ProductPages.css";

export default function ProductPage() {
  //catergory filtering system
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(hairProducts.map((product) => product.category)),
  ];

  // filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? hairProducts
      : hairProducts.filter((product) => product.category === selectedCategory);

  return (
    <section className="page-wrapper">
      <section className="filter-container">
        {categories.map((category) => (
          <p
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`filter-button ${
              selectedCategory === category ? "filter-button-active" : ""
            }`}
          >
            {category}
          </p>
        ))}
      </section>
      <section className="card-container">
        {filteredProducts.map((product) => (
          <section key={product.id} className="card">
            <img src={product.image} alt={product.name} className="card-img" />
            <section className="card-details">
              <h3 className="card-title">{product.name}</h3>
              <section className="card-price">
                <section className="price">
                  {product.onSale ? (
                    <>
                      <del>R{product.price}</del> R{product.salePrice}
                    </>
                  ) : (
                    `R${product.price}`
                  )}
                </section>
              </section>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}
