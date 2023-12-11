import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CourierPage from "../pages/CourierPage";
import JopPage from "../pages/JopPage";
import AdminPage from "../pages/AdminPage";
import AddProductPage from "../pages/AddProductPage";
import AboutUsPage from "../pages/AboutUsPage";
import SellerPage from "../pages/Courier/SellerPage";
import AfterSeller from "../pages/Courier/AfterSelle/AfterSeller";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/job" element={<JopPage />} />

        <Route path="/courier" element={<CourierPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />

        <Route path="/seller" element={<SellerPage />} />
        <Route path="/afterseller" element={<AfterSeller />} />

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
