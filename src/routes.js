import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductFeed from "./pages/ProductFeed";

const AllRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductFeed />} />
        </Routes>
       </BrowserRouter>
   )
}

export default AllRoutes;