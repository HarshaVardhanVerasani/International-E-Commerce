import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { TopBarStyles } from "./TopBarStyles";
import { ThemeContext } from "../../context/ThemeWrapper";

const TopBar = () => {
  const [toggle, setToggle] = useState(false);
 const { colors, changeTheme } = useContext(ThemeContext);
  const style = TopBarStyles(colors,toggle);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={style.mainContainer}>
      <Box
        style={style.contentContainer}>
        {toggle ? (
          <Typography
            variant="body1"
            sx={style.text}>
            Get ahead on Easter gifting with our seasonal hampers –
            <Box component={"a"} href="https://www.harrods.com/en-gb/hampers/easter-hampers" sx={style.anchorText}>
              Shop Now
            </Box>
          </Typography>
        ) : (
          <Typography
            variant="body1"
            sx={style.text}>
            Have your home spring-ready with these new arrivals –
            <Box component={"a"} href="https://www.harrods.com/en-gb/hampers/easter-hampers" sx={style.anchorText}>
              Shop Now
            </Box>
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TopBar;
