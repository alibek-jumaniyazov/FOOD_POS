import { Navigate } from "react-router-dom";
import HotDishesManage from "../pages/productsManag/HotDishesManage";
import ColdDishesManage from '../pages/productsManag/ColdDishesManage'

export const ProductsManagRoute = [
  {
    id: 1,
    element: <Navigate to="hot-dishes" />,
    fallback: <h1>Loading...</h1>,
  },

  {
    id: 2,
    path: "hot-dishes",
    element: <HotDishesManage />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 3,
    path: "cold-dishes",
    element: <ColdDishesManage />,
    fallback: <h1>Loading...</h1>,
  },

  {
    id: 4,
    path: "*",
    element: (
      <Navigate to={"/settings/products-management/hot-dishes"} replace />
    ),
    fallback: <h1>Loading...</h1>,
  },
];
