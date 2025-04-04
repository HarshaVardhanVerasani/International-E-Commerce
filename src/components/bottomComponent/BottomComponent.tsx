import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeWrapper";
import { BottomComponentStyles } from "./BottomComponentsStyles";
import CommonButton from "../commonButton/CommonButton";
import CarousalComponent from "../carousalComponent/CarousalComponent";
import BagsComponent from "../bags/BagsComponent";
import TrendingComponent from "../trending/TrendingComponent";
import MainComponent from "../../fasion/MainComponent";
import ShopNewComponent from "../shop_new/ShopNewComponent";

const BottomComponent = () => {
  const { colors, changeTheme } = useContext(ThemeContext);
  const style = BottomComponentStyles(colors);
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)) 
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>; 
  }
  console.log(products,'sadsadsada')
  const carousalProducts = products.slice(0, 10);
  const carousalTwoProducts = products.slice(10, 20);
  return (
    <Box
      sx={style.mainComponent}
    >
      <Box sx={style.contentContainer}>
        <Typography variant="h4" sx={style.heading}>Spring Awakening</Typography>
        <Typography variant="body1" sx={style.subText}>
          See in the season with lighter dresses for brighter days, care of Jacquemus, Stella McCartney, Sir. and more.
        </Typography>
        <CommonButton title="Shop Dresses" color={colors.darkBrown} bgColor={colors.darkBrown} />
      </Box>
      <CarousalComponent products={carousalProducts} isDescriptionHas isIconHas isPriceHas />
      <BagsComponent/>
      <TrendingComponent products={carousalTwoProducts} isBgActive isTitleHasUnderline />
      <ShopNewComponent/>
      <MainComponent products={carousalTwoProducts}/>
     
    </Box>
  );
};

export default BottomComponent;
