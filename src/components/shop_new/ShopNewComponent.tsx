import { Box, Typography, Link } from "@mui/material";
import { imageThree } from "../../common/assets/images/imageFile";
import { CommonCardComponentStyles } from "../commonCard/CommonCardComponentStyles";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeWrapper";
import { ShopNewComponentStyles } from "./ShopNewComponentStyles";


const ShopNewComponent = () => {
   const { colors } = useContext(ThemeContext);
    const styles = ShopNewComponentStyles(colors);
  return (
    <Box 
      sx={styles.mainContainer}
    >
 
      <Box 
        sx={styles.imageContainer}
      >
        <Box 
          component="img"
          src={imageThree}
          alt="shop"
          sx={styles.image}
        />
      </Box>
      <Box 
        sx={styles.contentContainer}
      >
        <Typography 
          sx={styles.mainHeading}
        >
          In with the New
        </Typography>
        <Typography 
          sx={styles.subText}
        >
          Invite the season in with new homewares for spring from Fornasetti, Loewe, Ginori 1735 and more.
        </Typography>
        <Link 
          href="/shop-new-in-home" 
          sx={styles.linkText}
        >
          Shop New-in Home
        </Link>
      </Box>
    </Box>
  );
};

export default ShopNewComponent;
