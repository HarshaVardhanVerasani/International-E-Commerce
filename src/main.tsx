import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ThemeProviderWrapper from "./context/ThemeWrapper.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </BrowserRouter>
  </StrictMode>
);
