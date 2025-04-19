import Login from "../pages/auth/Login";
import Calculation from "../pages/calculation/Calculation";
import Home from "../pages/home/Home";

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
      path: "/",
      element: <Home />,
      fallback: <h1>Loading...</h1>,
    },
    {
      id: 1,
      path: "/calculation",
      element: <Calculation />,
      fallback: <h1>Loading...</h1>,
    },
  ],
};
