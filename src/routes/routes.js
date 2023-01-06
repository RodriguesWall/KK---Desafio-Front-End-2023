import ProductFeed from "../pages/ProductFeed";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Doc from "../pages/Doc";
import Product from "../pages/Product";

const AllRoutes = [
  { path: '/products', component: ProductFeed },
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/doc', component: Doc },
  { path: '/product/:id', component: Product }
];

export default AllRoutes;