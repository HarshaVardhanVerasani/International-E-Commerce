import { ThemeProvider } from "@mui/material";
import { useContext } from "react";
import AppRoutes from "./common/routes/AppRoutes";
import { muiGlobalTheme } from "./config/colorPalette";
import { ThemeContext } from "./context/ThemeWrapper";

const App = () => {
  const { colors } = useContext(ThemeContext);
  const baseTheme = muiGlobalTheme(colors);

  return (
    <ThemeProvider theme={baseTheme}>
      <AppRoutes />  {/* No need to pass Layout here */}
    </ThemeProvider>
  );
};

export default App;
