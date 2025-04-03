import { Box } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeWrapper";
import { homePageStyles } from "./homePageStyles";
import Header from "./Header/Header";

const HomePage = () => {
  const { colors } = useContext(ThemeContext);
  const style = homePageStyles(colors);

  return (
    <Box sx={style.container}>
      <Header />
    </Box>
  );
};

export default HomePage;
