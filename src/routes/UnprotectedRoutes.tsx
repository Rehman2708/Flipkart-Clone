import ProductGrid from "../pages/AllProducts/ProductGrid";
import Detailpage from "../pages/Detail/Detailpage";
import Home from "../pages/Home/Home";

export const UnprotectedRoutes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/details/:id",
    component: Detailpage,
    name: "Detail",
  },
  {
    path: "/allproducts/",
    component: ProductGrid,
    name: "ProductGrid",
  },
];
