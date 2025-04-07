import { useState } from "react";
import { Heart } from "lucide-react";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";

import { formatCurrency } from "../utils/currency";

interface Products {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[]; 
    brand:string
  }
interface IProps{
    product:Products
}

const ProductCard = ({ product }: IProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
  };
console.log(product.brand,'brand')
  return (
    <Card sx={{ position: "relative", overflow: "hidden", height:'300px'  }}>
    
      <Box sx={{ width: "100%", height: "200px" }}>
      <Box
          component="img"
          src={product.images[0]}
          alt={product.title}
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <IconButton 
        onClick={toggleFavorite} 
        sx={{
          position: "absolute", 
          top: 8, 
          right: 8, 
          backgroundColor: "rgba(255, 255, 255, 0.8)", 
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" }
        }}
      >
        <Heart 
          className={`h-5 w-5 ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"}`} 
        />
      </IconButton>
      <CardContent>
        <Typography color="textSecondary" textAlign="center" sx={{ textTransform: "uppercase", letterSpacing: 0.5, }}>
          {product.brand}
        </Typography>
        <Typography variant="h6" textAlign="center">
          {product.title}{product.brand}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {formatCurrency(product.price)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
