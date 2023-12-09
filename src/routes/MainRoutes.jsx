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
import CartPage from "../pages/CartPage";
import Profile from "../components/UserAuth/Profile/Profile";

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
        <Route path="/profile" element={<Profile/>} />
        <Route path="/cart" element={<CartPage/>} /> 
      </Routes>
    </div>
  );
};

export default MainRoutes;
