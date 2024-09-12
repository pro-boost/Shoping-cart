import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Use BrowserRouter
import App from "./App"; // Import your App component directly

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Shoping-cart">
      <App /> {/* Now App handles all routes */}
    </BrowserRouter>
  </StrictMode>
);
