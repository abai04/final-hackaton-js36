import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CourierPage from "../pages/CourierPage";
import JopPage from "../pages/JopPage";
import AdminPage from "../pages/AdminPage";
import AddProductPage from "../pages/AddProductPage";
import AboutUsPage from "../pages/AboutUsPage";
import EditProduct from "../components/products/EditProduct/EditProduct";
import CategoriesMenu from "../components/products/categories/CategoriesMenu";

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
        <Route path="/edit/:id" element={<EditProduct/>} />
        <Route path="/categories" element={<CategoriesMenu/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
