import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CourierPage from "../pages/CourierPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/courier" element={<CourierPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
