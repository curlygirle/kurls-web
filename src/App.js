import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

//login and sign up page details
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

//web application pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Hair from "./pages/Hair";
import Product from "./pages/Product";
import Styling from "./pages/Styling";
import Community from "./pages/Community";
import Footer from "./components/Footer";

//just for the questionnaire
import Questionnaire from "./pages/Hair Details/Questionnaire";

//error page
import Notfound from "./components/Notfound";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about us" element={<About />} />
        <Route path="/hair hub" element={<Hair />} />
        <Route path="/product hub" element={<Product />} />
        <Route path="/styling hub" element={<Styling />} />
        <Route path="/community hub" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
