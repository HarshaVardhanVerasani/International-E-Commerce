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
import  { useState } from "react";
import CartPage from "../../../components/cartPage/CartPage";

interface ProductItem {
  id: number; 
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


const ProductImage = styled("img")(({ theme }) => ({
  width: "120px",
  height: "auto",
  objectFit: "contain",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

const ShoppingBag = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [products, setProducts] = useState<ProductItem[]>([
    {
      id: 1,
      brand: "BOTTEGA VENETA",
      name: "Aviator Sunglasses",
      color: "2600d1",
      colorCode: "2600d1",
      size: "OS",
      price: 465.0,
      quantity: 1,
      image:
        "https://hrd-live.cdn.scayle.cloud/images/4c98024e9217ede09d3dd27f7055e63c.jpg?brightness=1&width=2048&height=2731&quality=75&bg=ffffff",
    },
    {
      id: 2,
      brand: "Ray-Ban",
      name: "Round Sunglasses",
      color: "eb4034",
      colorCode: "eb4034",
      size: "M",
      price: 150.0,
      quantity: 1,
      image:
        "https://images.ray-ban.com/ja/japan/sunglasses/RB2132_145154_T63P3F_N5_NF.jpg",
    },
    {
      id: 3,
      brand: "GUCCI",
      name: "GG0061S Square Sunglasses",
      color: "black",
      colorCode: "000000",
      size: "OS",
      price: 350.0,
      quantity: 1,
      image:
        "https://www.gucci.com/us/en/ca/women/handbags/large-leather-shoulder-bag-p-529207HLH2G1000?gclid=EAIaIQobChMIvq6p79Ok9AIVqorICh1eGgnwEAAYASAAEgKBXvD_BwE&gclsrc=aw.ds",
    },
    {
      id: 4,
      brand: "Prada",
      name: "Prada PR 01OS Sunglasses",
      color: "blue",
      colorCode: "1AB2B5",
      size: "M",
      price: 250.0,
      quantity: 1,
      image:
        "https://www.prada.com/content/dam/prada/documents/Sunglasses_01/PR_01OS_72C_56_20200702_8.jpg",
    },
    {
      id: 5,
      brand: "Tom Ford",
      name: "Tom Ford FT0335 Sunglasses",
      color: "Dark Havana",
      colorCode: "Havana",
      size: "L",
      price: 420.0,
      quantity: 1,
      image:
        "https://assets.tomford.com/50be232d-61f9-4602-b4b8-b4f2fcaf2c60/main-image.jpg?impolicy=ABQmNSjbMcg5P0MB9c39LxLjI6BZXbBiUuw_xlG4w-4&quality=75&width=850",
    },
    {
      id: 6,
      brand: "Oakley",
      name: "Oakley OO9208 Radar EV Path Sunglasses",
      color: "Jet Black",
      colorCode: "BLACK",
      size: "M",
      price: 190.0,
      quantity: 1,
      image:
        "https://www.oakley.com/images/t_common/oo9208-15-1.jpg",
    },
    {
      id: 7,
      brand: "Maui Jim",
      name: "Maui Jim Ho'okipa Polarized Sunglasses",
      color: "Gloss Black",
      colorCode: "black",
      size: "OS",
      price: 230.0,
      quantity: 1,
      image:
        "https://www.mauijim.com/media/catalog/product/cache/8cc071dc433e5d95127643f07bc2d41f/1/2/121-02.jpg",
    },
    {
      id: 8,
      brand: "Warby Parker",
      name: "Durand Sunglasses",
      color: "Sandy",
      colorCode: "Sandy",
      size: "M",
      price: 145.0,
      quantity: 1,
      image:
        "https://d3w3uwn9fa9ecg.cloudfront.net/uploads/collections/collection/2019-02-06T145034Z-38c30dba54d44a2bba2ea064a2b99a30.jpg",
    },
    {
      id: 9,
      brand: "Ray-Ban",
      name: "RB3025 Aviator Sunglasses",
      color: "Gold/Green",
      colorCode: "G-15",
      size: "M",
      price: 180.0,
      quantity: 1,
      image:
        "https://www.ray-ban.com/usa/sunglasses/RB3025%20AVIATOR%20LARGE%20METAL-10142F.jpg",
    },
    {
      id: 10,
      brand: "Fendi",
      name: "Fendi Cat-Eye Sunglasses",
      color: "Dark Havana",
      colorCode: "HAVANA",
      size: "L",
      price: 550.0,
      quantity: 1,
      image:
        "https://www.fendi.com/us/images/jpg/74c1a07f92b20c2f7b5e64e573a8b317/Fendi_Sunglasses_1.jpg",
    },
  ]);

  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: products.reduce((total, product) => total + product.price * product.quantity, 0),
    delivery: 30.0,
    total: products.reduce((total, product) => total + product.price * product.quantity, 0) + 30.0,
  });

  const handleQuantityChange = (event: SelectChangeEvent<number>, productId: number) => {
    const newQuantity = event.target.value as number;
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);

    const newSubtotal = updatedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setOrderSummary({
      subtotal: newSubtotal,
      delivery: 30.0,
      total: newSubtotal + 30.0,
    });
  };

  const handleRemoveProduct = (productId: number) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);

    const newSubtotal = updatedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setOrderSummary({
      subtotal: newSubtotal,
      delivery: 30.0,
      total: newSubtotal + 30.0,
    });
  };
if(products.length===0){
  return <CartPage/>
}
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ mb: 4 }}>
        Shopping Bag
      </Typography>

      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 3 }}>
        <Box sx={{ flex: "1 1 58%" }}>
          {products.map((product) => (
            <Paper key={product.id} elevation={0} sx={{ p: 3, mb: 2, border: "1px solid #eee" }}>
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
                          onChange={(e) => handleQuantityChange(e, product.id)}
                          IconComponent={KeyboardArrowDownIcon}
                          size="small"
                          sx={{
                            minWidth: 80,
                            ".MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
                          }}
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <MenuItem key={num} value={num}>
                              {num}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", mt: isMobile ? 2 : 0 }}>
                    <Typography variant="subtitle1">US${product.price.toFixed(2)}</Typography>

                    <Box sx={{ display: "flex" }}>
                      <Stack direction={"row"} alignItems={"center"}>
                        <IconButton aria-label="add to favorites" size="small">
                          <FavoriteBorderIcon sx={{ fontSize: 15, color: "#8a7252" }} />
                        </IconButton>
                        <Typography sx={{ fontSize: 12, textDecoration: "underline", color: "#8a7252" }}>Add to Favourites</Typography>
                      </Stack>
                      <Stack direction={"row"} alignItems={"center"}>
                        <IconButton aria-label="remove" size="small" onClick={() => handleRemoveProduct(product.id)}>
                          <DeleteOutlineIcon sx={{ fontSize: 15, color: "#8a7252" }} />
                        </IconButton>
                        <Typography sx={{ fontSize: 12, textDecoration: "underline", color: "#8a7252" }}>Remove</Typography>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Order Summary Section */}
        <Box sx={{ flex: "1 1 42%" }}>
          <Paper elevation={0} sx={{ p: 3, border: "1px solid #eee" }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              ORDER SUMMARY
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
              <Typography variant="body1">{products.length} Item Subtotal</Typography>
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
              }}
            >
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
              }}
            >
              Continue Shopping
            </Button>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingBag;
