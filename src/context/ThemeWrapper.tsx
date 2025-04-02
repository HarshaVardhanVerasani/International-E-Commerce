import { createContext, useEffect, useState } from "react";
import { ColorScheme, darkTheme, lightTheme } from "../config/colorPalette";

type ThemeContextType = {
  mode: "light" | "dark";
  colors: ColorScheme;
  changeTheme: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  colors: lightTheme,
  changeTheme: () => {},
});

type Mode = "light" | "dark";
const USER_DEVICE = window.matchMedia("(prefers-color-scheme: dark)");

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const isCurrentThemeDark = () => USER_DEVICE.matches;

  const [mode, setMode] = useState<Mode>(isCurrentThemeDark() ? "dark" : "light");

  const changeTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const handleThemeChanges = (event: MediaQueryListEvent) => {
    if (event.matches) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    USER_DEVICE.addEventListener("change", handleThemeChanges);
    return () => USER_DEVICE.removeEventListener("change", handleThemeChanges);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        changeTheme,
        colors: mode === "light" ? lightTheme : darkTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
