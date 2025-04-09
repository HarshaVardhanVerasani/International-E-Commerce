import FavoriteIcon from "@mui/icons-material/Favorite";
import { Alert, Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CustomDropdown from "../../common/components/CustomDropdown/CustomDropdown";
import Carousel from "../../common/components/DetailsCarousel/DetailsCarousel";
import QuantityDropdown from "../../common/components/QuantityDropdown/QuantityDropdown";
import SizeDropdown from "../../common/components/SizeDropdown/SizeDropdown";
import AccordionDetails from "../../components/customAccordion/CustomAccordion";
import { addToCart } from "../../redux/cartReducer/CartSlice";
import Footer from "../customer/footer/Footer";
import productDetailsStyles from "./ProductDetailsStyles";

const product = {
  id: 1,
  brand: "CAMILLA",
  name: "Jardim Party Strappy Maxi Dress",
  price: 53.0,
  color: "Red",
  size: "M",
  image:
    "https://hrd-live.cdn.scayle.cloud/images/399a9dd2873113d63b7b476b01032f9d.jpg?brightness=1&width=2048&height=2731&quality=75&bg=ffffff",
  quantity: 1,
};

const ProductDetails = () => {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(addToCart(product));
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-4 right-4 z-50">
          <Alert severity="success" className="shadow-lg">
            Added to bag successfully!
          </Alert>
        </div>
      )}{" "}
      <Box sx={productDetailsStyles.bodyCont}>
        <Box sx={productDetailsStyles.commonCont}>
          <Box sx={productDetailsStyles.container}>
            <Carousel />
          </Box>
          <Box sx={productDetailsStyles.rightCont}>
            <Box sx={productDetailsStyles.gapCont}>
              <Typography sx={productDetailsStyles.productName}>{product.brand}</Typography>
              <Typography sx={productDetailsStyles.commonStyle}>{product.name}</Typography>
              <Typography sx={productDetailsStyles.commonStyle}>${product.price.toFixed(2)}</Typography>
            </Box>
            <Box sx={productDetailsStyles.dropdownCont}>
              <Typography sx={productDetailsStyles.colourText}>Colour</Typography>
              <CustomDropdown />
            </Box>

            <Box sx={productDetailsStyles.dropdownCont}>
              <Typography sx={productDetailsStyles.colourText}>Size</Typography>
              <SizeDropdown />
            </Box>

            <Box sx={productDetailsStyles.dropdownCont}>
              <Typography sx={productDetailsStyles.colourText}>Quantity</Typography>
              <QuantityDropdown />
            </Box>

            <Box display="flex" width="100%" gap={1}>
              <Button variant="contained" onClick={handleAddToBag} sx={productDetailsStyles.addToBagButton}>
                Add to bag
              </Button>
              <IconButton sx={productDetailsStyles.iconButton} aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box sx={productDetailsStyles.commonCont} mb={{ lg: 5 }} width={{ xs: "90%" }} alignSelf={"center"}>
          <Stack
            direction={"column"}
            spacing={1.5}
            justifyContent={"flex-start"}
            alignSelf={"center"}
            width={{ xs: "90%", lg: "41%" }}
            mt={10}>
            <Typography sx={productDetailsStyles.heading}>Oversized bow ties at the back add to this piece's innate glamour.</Typography>
            <Typography sx={productDetailsStyles.paragraph}>
              Camilla’s globe-trotting aesthetic comes to life through prints inspired by iconic landmarks. The Jardim Party pattern is the
              label’s latest creation, drawing from Portugal’s Palácio de Estoi – a richly ornamented building with a history rooted in
              18th-century French style.
            </Typography>
          </Stack>
          <Box sx={productDetailsStyles.rightContTwo} mt={{ xs: 5, lg: 10 }} mb={{ xs: 5, lg: 0 }}>
            <AccordionDetails />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDetails;
