import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

// Types
interface ProductItem {
  brand: string;
  name: string;
  color: string;
  colorCode: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummary {
  subtotal: number;
  delivery: number;
  total: number;
}

// Styled components
const ProductImage = styled("img")(({ theme }) => ({
  width: "120px",
  height: "auto",
  objectFit: "contain",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

const ShoppingBag: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [product, setProduct] = useState<ProductItem>({
    brand: "BOTTEGA VENETA",
    name: "Aviator Sunglasses",
    color: "2600d1",
    colorCode: "2600d1",
    size: "OS",
    price: 465.0,
    quantity: 1,
    image:
      "https://hrd-live.cdn.scayle.cloud/images/4c98024e9217ede09d3dd27f7055e63c.jpg?brightness=1&width=2048&height=2731&quality=75&bg=ffffff",
  });

  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: product.price,
    delivery: 30.0,
    total: product.price + 30.0,
  });

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    const newQuantity = event.target.value as number;
    setProduct(prev => ({ ...prev, quantity: newQuantity }));

    // Update order summary
    const newSubtotal = product.price * newQuantity;
    setOrderSummary({
      subtotal: newSubtotal,
      delivery: 30.0,
      total: newSubtotal + 30.0,
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ mb: 4 }}>
        Shopping Bag
      </Typography>

      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 3 }}>
        {/* Product List Section */}
        <Box sx={{ flex: "1 1 58%" }}>
          <Paper elevation={0} sx={{ p: 3, mb: 2, border: "1px solid #eee" }}>
            <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
              <ProductImage src={product.image} alt={product.name} />

              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ textTransform: "uppercase" }}>
                    {product.brand}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {product.name}
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2, mb: 2 }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Colour:
                      </Typography>
                      <Typography variant="body2">{product.colorCode}</Typography>
                    </Box>

                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Size:
                      </Typography>
                      <Typography variant="body2">{product.size}</Typography>
                    </Box>

                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Quantity
                      </Typography>
                      <Select
                        value={product.quantity}
                        onChange={handleQuantityChange}
                        IconComponent={KeyboardArrowDownIcon}
                        size="small"
                        sx={{
                          minWidth: 80,
                          ".MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
                        }}>
                        {[1, 2, 3, 4, 5].map(num => (
                          <MenuItem key={num} value={num}>
                            {num}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    mt: isMobile ? 2 : 0,
                  }}>
                  <Typography variant="subtitle1">US${product.price.toFixed(2)}</Typography>

                  <Box sx={{ display: "flex" }}>
                    <Stack direction={"row"} alignItems={"center"}>
                      <IconButton aria-label="add to favorites" size="small">
                        <FavoriteBorderIcon sx={{ fontSize: 15, color: "#8a7252" }} />
                      </IconButton>
                      <Typography sx={{ fontSize: 12, textDecoration: "underline", color: "#8a7252" }}>Add to Favourites</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"}>
                      <IconButton aria-label="remove" size="small">
                        <DeleteOutlineIcon sx={{ fontSize: 15, color: "#8a7252" }} />
                      </IconButton>
                      <Typography sx={{ fontSize: 12, textDecoration: "underline", color: "#8a7252" }}>Remove</Typography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Order Summary Section */}
        <Box sx={{ flex: "1 1 42%" }}>
          <Paper elevation={0} sx={{ p: 3, border: "1px solid #eee" }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              ORDER SUMMARY
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
              <Typography variant="body1">1 Item Subtotal</Typography>
              <Typography variant="body1">${orderSummary.subtotal.toFixed(2)}</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
              <Typography variant="body1">Delivery</Typography>
              <Typography variant="body1">${orderSummary.delivery.toFixed(2)}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Total
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                ${orderSummary.total.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              disableElevation
              sx={{
                my: 2,
                py: 1.5,
                bgcolor: "#2D4739",
                borderRadius: 0.3,
                "&:hover": {
                  bgcolor: "#203329",
                },
              }}>
              Secure Checkout Now
            </Button>

            <Typography variant="body2" align="center" sx={{ my: 2 }}>
              Rewards members, sign in now to redeem your Rewards points at checkout.
            </Typography>

            <Button
              variant="text"
              fullWidth
              sx={{
                color: "#8a7252",
                textTransform: "none",
                fontWeight: "bold",
                textDecoration: "underline",
              }}>
              Continue Shopping
            </Button>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingBag;
