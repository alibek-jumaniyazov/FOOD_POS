import { Navigate } from "react-router-dom";
import ProductManag from "../components/settings/SettingsComponents/ProductManag";
import YourRestaurant from "../components/settings/SettingsComponents/YourRestaurant";
import Appereance from "../components/settings/SettingsComponents/Appereance";

export const SettingsRoute = [
  {
    id: 1,
    element: <Navigate to="products-management" />,
    fallback: <h1>Loading...</h1>,
  },

  {
    id: 2,
    path: "appereance",
    element: <Appereance />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 3,
    path: "your-restaurant",
    element: <YourRestaurant />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 4,
    path: "/products-management/*",
    element: <ProductManag />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 5,
    path: "*",
    element: <Navigate to={"/settings/products-management"} replace/>,
    fallback: <h1>Loading...</h1>,
  },
];
