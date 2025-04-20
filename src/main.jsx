import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApiProvider>
      <App />
    </ApiProvider>
  </BrowserRouter>
);
