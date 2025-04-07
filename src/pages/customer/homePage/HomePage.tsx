import { Box } from "@mui/material";
import { useContext } from "react";
import DetailsCarousel from "../../../common/components/DetailsCarousel/DetailsCarousel";
import { ThemeContext } from "../../../context/ThemeWrapper";
import Footer from "../footer/Footer";
import Header from "./Header/Header";
import { homePageStyles } from "./homePageStyles";
import LandingPage from "../../landing/LandingPage";

const HomePage = () => {
  const { colors } = useContext(ThemeContext);
  const style = homePageStyles(colors);
  return (
    <Box sx={style.container}>
      <Header />
      <LandingPage/>
      <Footer />
      <DetailsCarousel />
    </Box>
  );
};

export default HomePage;
