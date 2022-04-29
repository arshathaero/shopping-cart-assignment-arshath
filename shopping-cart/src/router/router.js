import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "pages/home/home";
import Login from "pages/login/login";
import Register from "pages/register/register";
import ProductList from 'pages/productList/productList'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />

      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default Router;
