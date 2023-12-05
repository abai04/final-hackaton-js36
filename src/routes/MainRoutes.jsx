import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CourierPage from "../pages/CourierPage";
import JopPage from "../pages/JopPage";
import AdminPage from "../pages/AdminPage";
import AddProductPage from "../pages/AddProductPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/job" element={<JopPage/>} />
        
        <Route path="/courier" element={<CourierPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/add" element={<AddProductPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
