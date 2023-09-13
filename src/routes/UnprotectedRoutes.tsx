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
];
