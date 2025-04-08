import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Product } from "../../utils/productsDataTypes";

interface ProductCardProps {
  product: Product;
  onFavoriteToggle: (productId: string) => void;
  isFavorite: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onFavoriteToggle, isFavorite }) => {
  const { id, brand, name, price, image, isNew } = product;

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
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
            objectFit: "cover",
            width: "100%",
            height: "100%",
            transition: "transform 300ms",
          }}
        
        />
        {isNew && (
          <Box
            sx={{
              position: "absolute",
              top: 2,
              left: 2,
              backgroundColor: "white",
              paddingX: 2,
              paddingY: 1,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontWeight: 600,
            }}>
            New
          </Box>
        )}
        <IconButton
          onClick={e => {
            e.preventDefault();
            onFavoriteToggle(String(id));
          }}
          sx={{
            position: "absolute",
            top: 2,
            right: 2,
            backgroundColor: "white",
            borderRadius: "50%",
            padding: 1,
            boxShadow: 1,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}>
          <FavoriteIcon
            sx={{
              color: isFavorite ? "red.500" : "text.secondary",
              transition: "color 200ms",
            }}
          />
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
