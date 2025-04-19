import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";

export function RequireAuth() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (auth?.token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return isAuthenticated ? (
    <div className="flex justify-between items-start">
      <Sidebar />
      <main className="flex-1 bg-lightDark text-white p-6 min-h-screen">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
