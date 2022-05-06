import React from "react";
import { Route, Routes,useLocation } from "react-router-dom";

import Home from "pages/home/home";
import Login from "pages/login/login";
import Register from "pages/register/register";
import ProductList from 'pages/productList/productList'
import Cart from 'pages/cart/cart'
const Router = () => {


  const location = useLocation();
  let background = location.state && location.state.background;
  return (<><Routes location={background || location}>
    <Route path="/" element={<Home />}/> 
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/cart" element={<Cart />} />

    {/* <Route path="*" element={<PageNotFound />} /> */}
  </Routes>

  {background && (
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      )}
  </>
    
  );
};

export default Router;
