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
    if (!ingredientsString) return [];

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
    const ingredientsString =
      properties.ingredients || properties.description || "";
    const ingredients = parseIngredients(ingredientsString);
    const cgStatus = isCGApproved(ingredients);

    return (
      <section className="product-container">
        <h3 className="product-title">
          {properties.title || properties.name || "product name not available"}
        </h3>
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
          placeholder="enter barcode or product name"
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

// import React, { useState } from "react";

// const ProductScanner = () => {
//   const [input, setInput] = useState("");
//   const [productInfo, setProductInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Updated list of non-CG approved ingredients with more specific terms
//   const nonCGApprovedIngredients = [
//     {
//       name: "sulfates",
//       patterns: [
//         /\bammonium lauryl sulfate\b/i,
//         /\bsodium lauryl sulfate\b/i,
//         /\bsodium laureth sulfate\b/i,
//         /\bmyreth sulfate\b/i,
//       ],
//     },
//     {
//       name: "silicones",
//       patterns: [
//         /\bdimethicone\b/i,
//         /\bcyclomethicone\b/i,
//         /\bamodimethicone\b/i,
//         /\btrimethicone\b/i,
//         /\bdimethiconol\b/i,
//         /\bsiloxane\b/i,
//       ],
//     },
//     {
//       name: "drying alcohols",
//       patterns: [
//         /\balcohol denat\b/i,
//         /\bdenatured alcohol\b/i,
//         /\bsd alcohol\b/i,
//         /\bisopropyl alcohol\b/i,
//         /\bethanol\b/i,
//         /\bpropanol\b/i,
//       ],
//     },
//     {
//       name: "waxes and mineral oils",
//       patterns: [
//         /\bmineral oil\b/i,
//         /\bparaffinum liquidum\b/i,
//         /\bpetroleum\b/i,
//         /\bparaffin\b/i,
//         /\bpetrolatum\b/i,
//       ],
//     },
//   ];

//   // Good alcohols for hair
//   const goodAlcohols = [
//     "cetyl alcohol",
//     "stearyl alcohol",
//     "cetearyl alcohol",
//     "behenyl alcohol",
//     "lauryl alcohol",
//   ];

//   const fetchProductByBarcode = async (barcode) => {
//     const url = `https://big-product-data.p.rapidapi.com/gtin/${barcode}`;
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "94532908f1mshb454526eb7c3dc3p1f54c6jsnddb1b98a52ed",
//         "x-rapidapi-host": "big-product-data.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const result = await response.text();
//       try {
//         const jsonResult = JSON.parse(result);
//         return jsonResult;
//       } catch (parseError) {
//         throw new Error("Failed to parse product data");
//       }
//     } catch (error) {
//       throw error;
//     }
//   };

//   const fetchProductByName = async (name) => {
//     const url = `https://real-time-product-search.p.rapidapi.com/search?q=${encodeURIComponent(
//       name
//     )}&country=us&language=en`;
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "94532908f1mshb454526eb7c3dc3p1f54c6jsnddb1b98a52ed",
//         "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const result = await response.json();
//       if (result.data && result.data.length > 0) {
//         return result.data[0];
//       } else {
//         throw new Error("No products found");
//       }
//     } catch (error) {
//       throw error;
//     }
//   };

//   const parseIngredients = (ingredientsString) => {
//     if (!ingredientsString) return [];

//     // Find the actual ingredients list by looking for "Ingredients:" or similar patterns
//     const ingredientsMatch = ingredientsString.match(/ingredients:?\s*(.*)/i);
//     let ingredientsList;

//     if (ingredientsMatch) {
//       ingredientsList = ingredientsMatch[1];
//     } else {
//       // If no "Ingredients:" label is found, use the entire string
//       ingredientsList = ingredientsString;
//     }

//     // Clean up the ingredients list
//     return ingredientsList
//       .split(/[,;]/)
//       .map((ingredient) => ingredient.trim())
//       .filter(
//         (ingredient) =>
//           ingredient.length > 0 &&
//           !ingredient.toLowerCase().includes("may contain") &&
//           !ingredient.toLowerCase().includes("free") &&
//           !ingredient.toLowerCase().includes("certified") &&
//           !ingredient.toLowerCase().includes("enhanced") &&
//           !ingredient.toLowerCase().includes("signature") &&
//           !ingredient.toLowerCase().includes("carefully crafted")
//       );
//   };

//   const isCGApproved = (ingredients) => {
//     if (!ingredients || ingredients.length === 0) {
//       return { approved: false, nonApprovedIngredients: [] };
//     }

//     // Join ingredients with spaces to check for multi-word ingredients
//     const ingredientsText = ingredients.join(" ").toLowerCase();

//     let foundNonApproved = [];

//     // Check each category of non-CG ingredients
//     nonCGApprovedIngredients.forEach((category) => {
//       // Test each pattern in the category
//       const foundInCategory = category.patterns.some((pattern) =>
//         pattern.test(ingredientsText)
//       );

//       if (foundInCategory) {
//         // Don't include good alcohols if we're checking alcohol patterns
//         if (category.name === "drying alcohols") {
//           // Only add if it's not a good alcohol
//           const hasGoodAlcohol = goodAlcohols.some((good) =>
//             ingredientsText.includes(good.toLowerCase())
//           );
//           if (!hasGoodAlcohol) {
//             foundNonApproved.push(category.name);
//           }
//         } else {
//           foundNonApproved.push(category.name);
//         }
//       }
//     });

//     return {
//       approved: foundNonApproved.length === 0,
//       nonApprovedIngredients: foundNonApproved,
//     };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const trimmedInput = input.trim();

//     if (!trimmedInput) {
//       setError("Please enter a valid product name or barcode");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setProductInfo(null);

//     try {
//       let result;
//       if (/^\d+$/.test(trimmedInput)) {
//         result = await fetchProductByBarcode(trimmedInput);
//       } else {
//         result = await fetchProductByName(trimmedInput);
//       }
//       setProductInfo(result);
//     } catch (error) {
//       setError(error.message || "Failed to fetch product information");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderProductInfo = () => {
//     if (!productInfo) return null;

//     const commonStyles = {
//       marginTop: "20px",
//       border: "1px solid #ddd",
//       padding: "20px",
//       borderRadius: "8px",
//     };

//     // Extract ingredients and check CG approval
//     const properties = productInfo.properties || productInfo;
//     const ingredientsString =
//       properties.ingredients || properties.description || "";
//     const ingredients = parseIngredients(ingredientsString);
//     const cgStatus = isCGApproved(ingredients);

//     return (
//       <div style={commonStyles}>
//         <h2
//           style={{
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//             marginBottom: "1rem",
//           }}
//         >
//           {properties.title || properties.name || "Product Name Not Available"}
//         </h2>

//         <p style={{ marginBottom: "1rem" }}>
//           <strong>Brand:</strong>{" "}
//           {properties.brand || properties.manufacturer || "Brand not available"}
//         </p>

//         {ingredients.length > 0 && (
//           <div style={{ marginTop: "1rem" }}>
//             <h3
//               style={{
//                 fontSize: "1.2rem",
//                 fontWeight: "600",
//                 marginBottom: "0.5rem",
//               }}
//             >
//               Ingredients:
//             </h3>
//             <ul
//               style={{
//                 listStyle: "disc",
//                 paddingLeft: "1.5rem",
//                 marginBottom: "1rem",
//               }}
//             >
//               {ingredients.map((ingredient, index) => (
//                 <li key={index} style={{ marginBottom: "0.25rem" }}>
//                   {ingredient}
//                 </li>
//               ))}
//             </ul>

//             <div
//               style={{
//                 padding: "1rem",
//                 marginTop: "1rem",
//                 borderRadius: "0.5rem",
//                 backgroundColor: cgStatus.approved ? "#f0fff4" : "#fff5f5",
//                 border: `1px solid ${
//                   cgStatus.approved ? "#68d391" : "#fc8181"
//                 }`,
//               }}
//             >
//               <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
//                 Curly Girl Method Status:
//               </h4>
//               <p style={{ color: cgStatus.approved ? "#2f855a" : "#c53030" }}>
//                 {cgStatus.approved ? (
//                   "✅ This product is Curly Girl Method Approved!"
//                 ) : (
//                   <>
//                     ❌ This product is not Curly Girl Method Approved
//                     <br />
//                     <span
//                       style={{
//                         fontSize: "0.9rem",
//                         marginTop: "0.5rem",
//                         display: "block",
//                       }}
//                     >
//                       Problematic ingredients:
//                       <ul
//                         style={{
//                           listStyle: "disc",
//                           paddingLeft: "1.5rem",
//                           marginTop: "0.25rem",
//                         }}
//                       >
//                         {cgStatus.nonApprovedIngredients.map(
//                           (ingredient, index) => (
//                             <li key={index}>{ingredient}</li>
//                           )
//                         )}
//                       </ul>
//                     </span>
//                   </>
//                 )}
//               </p>
//             </div>
//           </div>
//         )}

//         {properties.image_url && (
//           <img
//             src={properties.image_url}
//             alt={properties.title || properties.name}
//             style={{ maxWidth: "200px", marginTop: "1rem" }}
//           />
//         )}
//       </div>
//     );
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
//       <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
//         Product Scanner
//       </h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter product name or barcode"
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             width: "100%",
//             padding: "10px 20px",
//             backgroundColor: loading ? "#ccc" : "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: loading ? "not-allowed" : "pointer",
//             transition: "background-color 0.2s",
//           }}
//         >
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </form>

//       {error && (
//         <p
//           style={{
//             color: "red",
//             marginTop: "10px",
//             padding: "10px",
//             backgroundColor: "#ffe6e6",
//             borderRadius: "4px",
//             textAlign: "center",
//           }}
//         >
//           {error}
//         </p>
//       )}

//       {renderProductInfo()}
//     </div>
//   );
// };

// export default ProductScanner;
