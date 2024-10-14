import React from "react";
import placeholder from "../../images/placeholder2.jpeg";
import "../../styles/ProductPages.css";

export default function ProductPage() {
  return (
    <section className="card-container">
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">shampoo</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">conditioner</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">curl cream</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">gel</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">mousse</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">detangling spray</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">comb</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">curl jelly</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">denman brush</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
      <section className="card">
        <img src={placeholder} alt="" className="card-img" />
        <section className="card-details">
          <h3 className="card-title">claw clip</h3>
          <section className="card-price">
            <section className="price">
              <del>R300</del> R200
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
