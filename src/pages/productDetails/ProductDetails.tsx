import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomDropdown from "../../common/components/CustomDropdown/CustomDropdown";
import Carousel from "../../common/components/DetailsCarousel/DetailsCarousel";
import ImageModal from "../../common/components/ModalCarousel/ModalCarousel";
import QuantityDropdown from "../../common/components/QuantityDropdown/QuantityDropdown";
import SizeDropdown from "../../common/components/SizeDropdown/SizeDropdown";
import { detailsCarousel } from "../../common/sampleData/sampleData";
import AccordionDetails from "../../components/customAccordion/CustomAccordion";
import { fetchSingleProduct } from "../../redux/singleProductReducer/SingleProductReducer";
import { AppDispatch, RootState } from "../../redux/Store";
import Footer from "../customer/footer/Footer";
import productDetailsStyles from "./ProductDetailsStyles";

const ProductDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carouselImgId, setCarouselImgId] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { singleProductDetailsSuccess } = useSelector((state: RootState) => state.singleProductSlice);

  const handleModalOpen = (carouselImgId: number) => {
    setIsModalOpen(true);
    setCarouselImgId(carouselImgId);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(Number(id)));
  }, [dispatch, id]);

  return (
    <>
      <Box sx={productDetailsStyles.bodyCont}>
        <Box sx={productDetailsStyles.commonCont}>
          <Box sx={productDetailsStyles.container}>
            <Carousel handleModalOpen={handleModalOpen} handleModalClose={handleModalClose} />
          </Box>
          <Box sx={productDetailsStyles.rightCont}>
            <Box sx={productDetailsStyles.gapCont}>
              <Typography sx={productDetailsStyles.productName}>{singleProductDetailsSuccess?.title}</Typography>
              <Typography sx={productDetailsStyles.commonStyle}>{singleProductDetailsSuccess?.description}</Typography>
              <Typography sx={productDetailsStyles.commonStyle}>{singleProductDetailsSuccess?.price}</Typography>
            </Box>
            <Box sx={productDetailsStyles.dropdownCont}>
              <Typography sx={productDetailsStyles.colourText}>colour</Typography>
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
              <Button
                variant="contained"
                // onClick={onAddToBag}
                sx={productDetailsStyles.addToBagButton}>
                Add to bag
              </Button>
              <IconButton
                // onClick={handleToggleFavorite}
                sx={productDetailsStyles.iconButton}
                aria-label="add to favorites">
                {<FavoriteIcon />}
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
              18th-century French style. Crafted from lightweight linen, this halterneck top captures the essence of the palace's
              Versailles-inspired gardens, where florals intertwine with mosaic detailing.
            </Typography>
          </Stack>
          <Box sx={productDetailsStyles.rightContTwo} mt={{ xs: 5, lg: 10 }} mb={{ xs: 5, lg: 0 }}>
            <AccordionDetails />
          </Box>
        </Box>
      </Box>
      <Footer />
      {isModalOpen && <ImageModal images={detailsCarousel} open={isModalOpen} onClose={handleModalClose} initialIndex={carouselImgId} />}
    </>
  );
};

export default ProductDetails;
