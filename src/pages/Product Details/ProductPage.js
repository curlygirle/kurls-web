import React from "react";
import { hairProducts } from "../../components/ProductData";
import "../../styles/ProductPages.css";

export default function ProductPage() {
  return (
    <section className="page-wrapper">
      <section className="card-container">
        {hairProducts.map((product) => (
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
