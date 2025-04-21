import Login from "../pages/auth/Login";
import Calculation from "../pages/calculation/Calculation";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Settings from "../pages/settings/Settings";

export const AppRoute = {
  public: [
    {
      id: 1,
      path: "/login",
      element: <Login />,
      fallback: <h1>Loading...</h1>,
    },
  ],
  private: [
    {
      id: 1,
      path: "/order/*",
      element: <Home />,
      fallback: <h1>Loading...</h1>,
    },
    {
      id: 2,
      path: "/calculation",
      element: <Calculation />,
      fallback: <h1>Loading...</h1>,
    },
    {
      id: 3,
      path: "/dashboard",
      element: <Dashboard />,
      fallback: <h1>Loading...</h1>,
    },
    {
      id: 4,
      path: "/settings/*",
      element: <Settings />,
      fallback: <h1>Loading...</h1>,
    },
  ],
};
