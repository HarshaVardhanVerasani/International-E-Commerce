import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { favoriteIcon } from "../../common/assets/images/imageFile";
import { ThemeContext } from "../../context/ThemeWrapper";
import { RootState } from "../../redux/Store";
import { removeFromFavorites } from "../../redux/favoritesReducer/FavoritesSlice";
import FavoriteItem from "./FavoriteItem";
import { favoritePageStyles } from "./favoritePageStyles";

const FavoritesPage: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favoritesSlice);

  const removeFavorite = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

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
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {favorites.items.length !== 0 && (
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif mb-4">Favourites</h1>
          <p className="text-gray-600">
            Here you can see your favourited items, make edits to your selection and add to your shopping bag.
          </p>
        </div>
      )}

      {favorites.items.length === 0 ? (
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {favorites.items.map(item => (
            <FavoriteItem key={item.id} item={item} onRemove={() => removeFavorite(item.id)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
