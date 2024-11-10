import shampoo1 from "../images/products/sulfate-free shampoo.jpg";
import shampoo2 from "../images/products/clarifying shampoo.jpg";
import conditioner1 from "../images/products/co-wash cleansing conditioner.jpg";
import conditioner2 from "../images/products/deep conditioner.png";
import conditioner3 from "../images/products/leave in conditioner.jpg";
import treatment1 from "../images/products/hair protein.png";
import treatment2 from "../images/products/hair mask.jpg";
import moisture1 from "../images/products/hair oil.jpg";
import moisture2 from "../images/products/hair butter.jpg";
import moisture3 from "../images/products/moisturising lotion.jpg";
import moisture4 from "../images/products/curl cream.jpg";
import moisture5 from "../images/products/hair gel.jpg";
import moisture6 from "../images/products/hair mousse.png";
import moisture7 from "../images/products/edge control.jpg";
import tool1 from "../images/products/wide toothed comb.jpg";
import tool2 from "../images/products/detangling brush.png";
import tool3 from "../images/products/hair mist.png";
import tool4 from "../images/products/satin bonnet.jpg";
import tool5 from "../images/products/satin pillowcase.jpg";
import tool6 from "../images/products/sectioning clips.jpg";

export const hairProducts = [
  // Cleansing Products
  {
    id: "c1",
    name: "Sulfate-free Shampoo",
    price: 189.99,
    onSale: true,
    salePrice: 149.99,
    category: "Cleansing Products",
    image: shampoo1,
  },
  {
    id: "c2",
    name: "Clarifying Shampoo",
    price: 165.99,
    onSale: false,
    category: "Cleansing Products",
    image: shampoo2,
  },
  {
    id: "c3",
    name: "Co-wash Cleansing Conditioner",
    price: 210.99,
    onSale: false,
    category: "Cleansing Products",
    image: conditioner1,
  },

  // Conditioning Products
  {
    id: "d1",
    name: "Deep Conditioner",
    price: 249.99,
    onSale: true,
    salePrice: 199.99,
    category: "Conditioning Products",
    image: conditioner2,
  },
  {
    id: "d2",
    name: "Leave-in Conditioner",
    price: 179.99,
    onSale: false,
    category: "Conditioning Products",
    image: conditioner3,
  },
  {
    id: "d3",
    name: "Protein Treatment",
    price: 299.99,
    onSale: true,
    salePrice: 249.99,
    category: "Conditioning Products",
    image: treatment1,
  },
  {
    id: "d4",
    name: "Hair Mask",
    price: 225.99,
    onSale: false,
    category: "Conditioning Products",
    image: treatment2,
  },

  // Moisturizing & Styling Products
  {
    id: "m1",
    name: "Multi-Oil Hair Blend",
    price: 289.99,
    onSale: true,
    salePrice: 229.99,
    category: "Moisturizing & Styling Products",
    image: moisture1,
  },
  {
    id: "m2",
    name: "Natural Hair Butter Blend",
    price: 199.99,
    onSale: false,
    category: "Moisturizing & Styling Products",
    image: moisture2,
  },
  {
    id: "m3",
    name: "Moisturizing Hair Lotion",
    price: 159.99,
    onSale: false,
    category: "Moisturizing & Styling Products",
    image: moisture3,
  },
  {
    id: "m4",
    name: "Curl Activator Cream",
    price: 179.99,
    onSale: true,
    salePrice: 149.99,
    category: "Moisturizing & Styling Products",
    image: moisture4,
  },
  {
    id: "m5",
    name: "Alcohol-free Styling Gel",
    price: 145.99,
    onSale: false,
    category: "Moisturizing & Styling Products",
    image: moisture5,
  },
  {
    id: "m6",
    name: "Volumizing Mousse",
    price: 169.99,
    onSale: true,
    salePrice: 139.99,
    category: "Moisturizing & Styling Products",
    image: moisture6,
  },
  {
    id: "m7",
    name: "Edge Control Gel",
    price: 129.99,
    onSale: false,
    category: "Moisturizing & Styling Products",
    image: moisture7,
  },

  // Tools & Accessories
  {
    id: "t1",
    name: "Professional Wide-tooth Comb",
    price: 89.99,
    onSale: false,
    category: "Tools & Accessories",
    image: tool1,
  },
  {
    id: "t2",
    name: "Detangling Brush",
    price: 159.99,
    onSale: true,
    salePrice: 129.99,
    category: "Tools & Accessories",
    image: tool2,
  },
  {
    id: "t3",
    name: "Mist Spray Bottle",
    price: 79.99,
    onSale: false,
    category: "Tools & Accessories",
    image: tool3,
  },
  {
    id: "t4",
    name: "Luxury Satin Bonnet",
    price: 199.99,
    onSale: true,
    salePrice: 169.99,
    category: "Tools & Accessories",
    image: tool4,
  },
  {
    id: "t5",
    name: "Silk Pillowcase",
    price: 299.99,
    onSale: false,
    category: "Tools & Accessories",
    image: tool5,
  },
  {
    id: "t6",
    name: "Sectioning Hair Clips Set",
    price: 119.99,
    onSale: true,
    salePrice: 99.99,
    category: "Tools & Accessories",
    image: tool6,
  },
];
