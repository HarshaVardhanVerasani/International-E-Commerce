import { ThemeProvider } from "@mui/material";
import { useContext } from "react";
import AppRoutes from "./common/routes/AppRoutes";
import { muiGlobalTheme } from "./config/colorPalette";
import { ThemeContext } from "./context/ThemeWrapper";
import LandingPage from "./pages/landing/LandingPage";

const App = () => {
  const { colors } = useContext(ThemeContext);
  const baseTheme = muiGlobalTheme(colors);

  return (
    <ThemeProvider theme={baseTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
