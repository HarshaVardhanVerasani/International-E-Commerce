import { FavoriteBorder, Favorite as FavoriteIcon } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Product } from "../../utils/productsDataTypes";
import { lightTheme } from "../../config/colorPalette";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { removeFromFavorites, addToFavorites } from "../../redux/favoritesReducer/FavoritesSlice";

interface ProductCardProps {
  product: Product;

}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, brand, name, price, image, isNew ,color,size} = product;
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favoritesSlice.items);
  const isFavorited = favorites.some(item => item.id === Number(id));
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };
const toggleFavorite = () => {
    console.log("Toggling Favorite for ID:", id);
    if (isFavorited) {
      dispatch(removeFromFavorites(Number(id)));
    } else {
      dispatch(
        addToFavorites({
          id:Number(id),
          title:name,
          description:'',
          price,
          image,
          brand,
          name,
          color:'',
          size:'',
          isNew:isNew!,
        })
      );
    }
  };
  return (
    <Box sx={{ position: "relative", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          position: "relative",
          aspectRatio: "1",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "gray.100",
        }}>
        <img
          src={image}
          alt={name}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            transition: "transform 300ms",
          }}
        
        />
        {isNew && (
          <Box
            sx={{
              position: "absolute",
              top: 35,
              right: 2,
              backgroundColor: "white",
              paddingX: 1.5,
              paddingY: 1,
              fontSize: "0.55rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontWeight: 600,
              border:'1px solid ',
              borderRadius:1
            }}>
            New
          </Box>
        )}
        <IconButton
          onClick={toggleFavorite}
          sx={{
            position: "absolute",
            top: 2,
            right: 2,
           
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}>
              {isFavorited ? <FavoriteIcon sx={{ color: lightTheme.darkBrown }} /> : <FavoriteBorder sx={{color: lightTheme.lightBrown}} />}

        </IconButton>
      </Box>

      <Box sx={{ marginTop: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="body2" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>
          {brand}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 1 }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600, marginTop: 1 }}>
          {formatPrice(price)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
