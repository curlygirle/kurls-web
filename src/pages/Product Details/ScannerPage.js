import React from "react";

export default function ScannerPage() {}
// import React, { useState } from "react";

// const ProductScanner = () => {
//   const [input, setInput] = useState("");
//   const [productInfo, setProductInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchProductInfoByBarcode = async (barcode) => {
//     const url = `https://big-product-data.p.rapidapi.com/gtin/${barcode}`;
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "c23ed93f72mshf7fb2df1528703ap1e4c7cjsn3ece7010906f",
//         "x-rapidapi-host": "big-product-data.p.rapidapi.com",
//       },
//     };

//     const response = await fetch(url, options);
//     const result = await response.json();

//     if (result.error) {
//       throw new Error(result.error);
//     }

//     if (!result.properties) {
//       throw new Error("No product information found for this barcode");
//     }

//     return result;
//   };

//   const fetchProductInfoByKeyword = async (keyword) => {
//     const url = `https://sephora14.p.rapidapi.com/searchByKeyword?page=1&sortBy=NEW&keyword=${encodeURIComponent(
//       keyword
//     )}`;
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "c23ed93f72mshf7fb2df1528703ap1e4c7cjsn3ece7010906f",
//         "x-rapidapi-host": "sephora14.p.rapidapi.com",
//       },
//     };

//     const response = await fetch(url, options);
//     const result = await response.json();

//     if (!result.products || result.products.length === 0) {
//       throw new Error("No product information found for this keyword");
//     }

//     return result.products[0]; // Return the first product found
//   };

//   const fetchProductInfo = async (input) => {
//     setLoading(true);
//     setError("");
//     try {
//       let result;
//       if (/^\d+$/.test(input)) {
//         // If input is all digits, assume it's a barcode
//         result = await fetchProductInfoByBarcode(input);
//       } else {
//         // Otherwise, search by keyword
//         result = await fetchProductInfoByKeyword(input);
//       }
//       setProductInfo(result);
//     } catch (error) {
//       setError(error.message || "Failed to fetch product information");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       fetchProductInfo(input.trim());
//     } else {
//       setError("Please enter a valid product name or barcode");
//     }
//   };

//   const isGoodForHair = (ingredients) => {
//     if (!ingredients) return false;
//     const lowerIngredients = ingredients.toLowerCase();
//     return (
//       !lowerIngredients.includes("sulfate") &&
//       !lowerIngredients.includes("paraben")
//     );
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter product name or barcode"
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </form>

//       {error && <p>{error}</p>}

//       {productInfo && (
//         <div>
//           <h2>
//             {productInfo.properties?.title ||
//               productInfo.displayName ||
//               "Product Name Not Available"}
//           </h2>
//           <p>
//             <strong>Brand:</strong>{" "}
//             {productInfo.properties?.brand ||
//               productInfo.brandName ||
//               "Brand not available"}
//           </p>
//           <p>
//             <strong>Description:</strong>{" "}
//             {productInfo.properties?.description ||
//               productInfo.longDescription ||
//               "No description available"}
//           </p>
//           <p>
//             <strong>Ingredients:</strong>{" "}
//             {productInfo.properties?.description
//               ?.split("Ingredients:")[1]
//               ?.trim() ||
//               productInfo.ingredients ||
//               "Ingredients not available"}
//           </p>
//           <p>
//             <strong>Recommendation:</strong>{" "}
//             {isGoodForHair(
//               productInfo.properties?.description || productInfo.ingredients
//             )
//               ? "This product is good for your hair."
//               : "This product is not recommended for your hair."}
//           </p>
//           {productInfo.stores && productInfo.stores.length > 0 && (
//             <div>
//               <p>
//                 <strong>Price:</strong> ${productInfo.stores[0].price.price}
//               </p>
//               <img
//                 src={productInfo.stores[0].image}
//                 alt={productInfo.properties.title}
//               />
//             </div>
//           )}
//           {productInfo.heroImage && (
//             <div>
//               <p>
//                 <strong>Price:</strong> $
//                 {productInfo.currentSku?.listPrice || "Price not available"}
//               </p>
//               <img src={productInfo.heroImage} alt={productInfo.displayName} />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductScanner;
