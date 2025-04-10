import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ThemeProviderWrapper from "./context/ThemeWrapper.tsx";
import "./index.css";
import { store } from "./redux/Store.ts";
import "./i18n";

import Language from "./components/language/Language.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
 <Language/>
      <ThemeProviderWrapper>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProviderWrapper>
    </BrowserRouter>
  </StrictMode>
);
