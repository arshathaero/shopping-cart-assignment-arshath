import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "pages/home/home";
import Login from "pages/login/login";
import Register from "pages/register/register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default Router;
