import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { favoriteIcon } from "../../common/assets/images/imageFile";
import { ThemeContext } from "../../context/ThemeWrapper";
import { favoritePageStyles } from "./favoritePageStyles";

const FavoritePage = () => {
  const { colors } = useContext(ThemeContext);
  const styles = favoritePageStyles(colors);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/auth/LoginPage");
  };
  return (
    <Box sx={styles.container}>
      <Box component={"img"} src={favoriteIcon} alt="favorite-icon" sx={styles.icon}></Box>
      <Typography sx={styles.title}>You've not saved any favourite items yet!</Typography>
      <Typography sx={styles.description}>
        Let's change that. Tap the heart on your favourite products as you shop and they will all appear here.
      </Typography>
      <Button sx={styles.button} onClick={handleContinueShopping}>
        Continue Shopping
      </Button>
      <Typography sx={styles.signInText} onClick={handleSignIn}>
        Sign-in to show your favourited items Harrods
      </Typography>
    </Box>
  );
};

export default FavoritePage;
