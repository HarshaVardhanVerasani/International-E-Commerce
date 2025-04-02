import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeWrapper";
import { homePageStyles } from "./homePageStyles";

const HomePage = () => {
  const { colors, changeTheme } = useContext(ThemeContext);
  const style = homePageStyles(colors);

  return (
    <Box sx={style.container}>
      <Typography variant="h2" sx={style.title}>
        Home Page
      </Typography>
      <Button variant="contained" onClick={changeTheme}>
        change theme
      </Button>
    </Box>
  );
};

export default HomePage;
