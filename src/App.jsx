import { Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AppRoute } from "./routes/AppRoutes";
import { RequireAuth } from "./require-auth/RequireAuth";

function App() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("isAuthenticated");
  const isLoginPage = window.location.pathname === "/login";

  useEffect(() => {
    if (isAuthenticated && isLoginPage) {
      navigate("/");
    }
  }, [isAuthenticated, isLoginPage, navigate]);


  return (
    <>
      <Routes>
        {!isAuthenticated ? (
          AppRoute.public.map(({ id, path, element, fallback }) => (
            <Route
              key={id}
              path={path}
              element={<Suspense fallback={fallback}>{element}</Suspense>}
            />
          ))
        ) : (
          <Route element={<RequireAuth />}>
            {AppRoute.private.map(({ id, path, element, fallback }) => (
              <Route
                key={id}
                path={path}
                element={<Suspense fallback={fallback}>{element}</Suspense>}
              />
            ))}
          </Route>
        )}
        {/*Agar page bo'lmasa */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/order" : "/login"} replace />}
        />
      </Routes>
    </>
  );
}

export default App;
