import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CourierPage from "../pages/CourierPage";
import JopPage from "../pages/JopPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/job" element={<JopPage/>} />
        
        <Route path="/courier" element={<CourierPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
