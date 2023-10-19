import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
