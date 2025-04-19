import { Navigate } from "react-router-dom";
import HotDishes from "../pages/menu/HotDishes";
import ColdDishes from "../pages/menu/ColdDishes";

export const OrderRoute = [
  {
    id: 1,
    element: <Navigate to="hot-dishes" />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 2,
    path: "hot-dishes",
    element: <HotDishes />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 3,
    path: "cold-dishes",
    element: <ColdDishes />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 3,
    path: "*",
    element: <Navigate to={"/order/hot-dishes"} replace/>,
    fallback: <h1>Loading...</h1>,
  },
];
