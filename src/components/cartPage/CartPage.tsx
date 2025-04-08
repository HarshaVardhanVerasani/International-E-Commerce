import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { favoriteIcon } from "../../common/assets/images/imageFile";
import { ThemeContext } from "../../context/ThemeWrapper";
import { cartPageStyles } from "./cartPageStyles";

const CartPage = () => {
  const { colors } = useContext(ThemeContext);
  const styles = cartPageStyles(colors);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };
  return (
    <Box sx={styles.container}>
      <Box component={"img"} src={favoriteIcon} alt="favorite-icon" sx={styles.icon}></Box>
      <Typography sx={styles.title}>Your shopping cart is empty.</Typography>
      <Typography sx={styles.signInText} onClick={handleContinueShopping}>
        {" "}
        Continue Shopping
      </Typography>
    </Box>
  );
};

export default CartPage;
