import React from "react";
import { useState } from "react";
import "../../styles/ScannerPage.css";

export default function ScannerPage() {
  const [input, setInput] = useState(""); //stores users search text or barcode
  const [productInfo, setProductInfo] = useState(null); //stores fetched product data
  const [loading, setLoading] = useState(false); //tracks if the app is currently fetching data
  const [error, setError] = useState(null); //tracks if there was an error fetching data

  //list of ingriedients that are not approved for curly girl method
  const nonCGApprovedIngredients = [
    {
      name: "sulfates",
      patterns: [
        /\bammonium lauryl sulfate\b/i,
        /\bsodium lauryl sulfate\b/i,
        /\bsodium laureth sulfate\b/i,
        /\bmyreth sulfate\b/i,
      ],
    },
    {
      name: "silicones",
      patterns: [
        /\bdimethicone\b/i,
        /\bcyclomethicone\b/i,
        /\bamodimethicone\b/i,
        /\btrimethicone\b/i,
        /\bdimethiconol\b/i,
        /\bsiloxane\b/i,
      ],
    },
    {
      name: "drying alcohols",
      patterns: [
        /\balcohol denat\b/i,
        /\bdenatured alcohol\b/i,
        /\bsd alcohol\b/i,
        /\bisopropyl alcohol\b/i,
        /\bethanol\b/i,
        /\bpropanol\b/i,
      ],
    },
    {
      name: "waxes and mineral oils",
      patterns: [
        /\bmineral oil\b/i,
        /\bparaffinum liquidum\b/i,
        /\bpetroleum\b/i,
        /\bparaffin\b/i,
        /\bpetrolatum\b/i,
      ],
    },
  ];

  //benificial ingriedients in curly girl method
  //specifically good alcohols in products for hair
  const goodAlcohols = [
    "cetyl alcohol",
    "stearyl alcohol",
    "cetearyl alcohol",
    "behenyl alcohol",
    "lauryl alcohol",
  ];

  //function that fetches api using barcode

  const fetchApiBarcode = async (barcode) => {
    const url = `https://big-product-data.p.rapidapi.com/gtin/${barcode}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "94532908f1mshb454526eb7c3dc3p1f54c6jsnddb1b98a52ed",
        "x-rapidapi-host": "big-product-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      const jsonResult = JSON.parse(result);
      return jsonResult;
    } catch (error) {
      throw error;
    }
  };

  //function that fetches api using name
  const fetchApiProduct = async (name) => {
    const url = `https://real-time-product-search.p.rapidapi.com/search?q=${encodeURIComponent(
      name
    )}&country=us&language=en`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "94532908f1mshb454526eb7c3dc3p1f54c6jsnddb1b98a52ed",
        "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("please input barcode or product name ");
      }

      const result = await response.json();
      if (result.data && result.data.length > 0) {
        return result.data[0];
      } else {
        throw new Error("product not found");
      }
    } catch (error) {
      throw error;
    }
  };

  const parseIngredients = (ingredientsString) => {
    if (!ingredientsString || typeof ingredientsString !== "string") {
      return [];
    }

    const ingredientsMatch = ingredientsString.match(/ingredients:?\s*(.*)/i);
    let ingredientsList;

    if (ingredientsMatch) {
      ingredientsList = ingredientsMatch[1];
    } else {
      ingredientsList = ingredientsString;
    }

    return ingredientsList
      .split(/[,;]/)
      .map((ingredient) => ingredient.trim())
      .filter(
        (ingredient) =>
          ingredient.length > 0 &&
          !ingredient.toLowerCase().includes("may contain") &&
          !ingredient.toLowerCase().includes("free") &&
          !ingredient.toLowerCase().includes("certified") &&
          !ingredient.toLowerCase().includes("enhanced") &&
          !ingredient.toLowerCase().includes("signature") &&
          !ingredient.toLowerCase().includes("carefully crafted")
      );
  };

  const isCGApproved = (ingredients) => {
    if (!ingredients || ingredients === 0) {
      return { approved: false, nonApprovedIngredients: [] };
    }

    const ingredientsText = ingredients.join(" ").toLowerCase();

    let foundNonApproved = [];

    nonCGApprovedIngredients.forEach((category) => {
      const foundInCategory = category.patterns.some((pattern) =>
        pattern.test(ingredientsText)
      );

      if (foundInCategory) {
        if (category.name === "drying alcohols") {
          const hasGoodAlcohol = goodAlcohols.some((good) =>
            ingredientsText.includes(good.toLowerCase())
          );

          if (!hasGoodAlcohol) {
            foundNonApproved.push(category.name);
          }
        } else {
          foundNonApproved.push(category.name);
        }
      }
    });

    return {
      approved: foundNonApproved.length === 0,
      nonApprovedIngredients: foundNonApproved,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let result;
      if (/^\d+$/.test(input)) {
        result = await fetchApiBarcode(input);
      } else {
        result = await fetchApiProduct(input);
      }
      setProductInfo(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderProductInfo = () => {
    if (!productInfo) return null;

    const properties = productInfo.properties || productInfo;

    // Add these console.log statements
    console.log("Full product info:", productInfo);

    const ingredientsString =
      properties.ingredients || properties.description || "";
    const ingredients = parseIngredients(ingredientsString);
    const cgStatus = isCGApproved(ingredients);

    //to get the first title in the array
    //realised that some brands have multiple titles as it is in different languages
    const productTitle = Array.isArray(properties.title)
      ? properties.title[0]
      : properties.title || properties.name || "product name not available";

    return (
      <section className="product-container">
        <h3 className="product-title">{productTitle}</h3>
        <p className="product-brand">
          Brand:{" "}
          {properties.brand || properties.manufacturer || "brand not available"}
        </p>

        <section className="ingredient-container">
          <h3 className="ingredient-title">Ingredients:</h3>
          <ul className="ingredient-list">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                {ingredient}
              </li>
            ))}
          </ul>

          <section
            className={`cg-container" ${
              cgStatus.approved ? "approved" : "not approved"
            }`}
          >
            <h3 className="cg-title"> curly girl method status:</h3>
            <section className="cg-content">
              {cgStatus.approved ? (
                <p className="cg-approved">
                  this product is curly girl method approved
                </p>
              ) : (
                <section className="cg-not">
                  <p>this product is not curly girl method approved</p>
                  <span className="problem-ingredients">
                    problematic ingriedients:
                    <ul className="problem-list">
                      {cgStatus.nonApprovedIngredients.map(
                        (ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        )
                      )}
                    </ul>
                  </span>
                </section>
              )}
            </section>
          </section>
        </section>
      </section>
    );
  };

  return (
    <section className="scanner-container">
      <h3 className="scanner-title">product scanner</h3>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter barcode number"
          className="search-input"
        />
        <button
          type="submit"
          disabled={loading}
          className={`search-button ${loading ? "loading" : ""}`}
        >
          {loading ? "searching..." : "search"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}

      {renderProductInfo()}
    </section>
  );
}
