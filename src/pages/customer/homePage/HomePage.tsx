import { Box } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeWrapper";
import Footer from "../footer/Footer";
import { homePageStyles } from "./homePageStyles";
import Header from "./Header/Header";

const HomePage = () => {
  const { colors } = useContext(ThemeContext);
  const style = homePageStyles(colors);
  return (
    <Box sx={style.container}>
      <Header />
      <Footer />
    </Box>
  );
};

export default HomePage;
