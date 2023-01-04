import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductFeed from "../pages/ProductFeed";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const AllRoutes = [
  { path: '/product', component: ProductFeed },
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
];

export default AllRoutes;