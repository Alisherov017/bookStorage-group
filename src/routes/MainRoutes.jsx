import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/AdminPage";
import PasswordPage from "../pages/PasswordPage";
import AddProduct from "../pages/AddProduct";
import EditPage from "../pages/EditPage";
import ProfilePage from "../pages/ProfilePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/password" element={<PasswordPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
};

export default MainRoutes;
