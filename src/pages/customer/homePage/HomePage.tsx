import { Box } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeWrapper";
import LandingPage from "../../landing/LandingPage";
import { homePageStyles } from "./homePageStyles";

const HomePage = () => {
  const { colors } = useContext(ThemeContext);
  const style = homePageStyles(colors);
  return (
    <Box sx={style.container}>
      <LandingPage />
    </Box>
  );
};

export default HomePage;
