import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/AdminPage";
import PasswordPage from "../pages/PasswordPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/password" element={<PasswordPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default MainRoutes;
