import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ThemeProviderWrapper from "./context/ThemeWrapper.tsx";
import "./index.css";
import { store } from "./redux/Store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProviderWrapper>
    </BrowserRouter>
  </StrictMode>
);
