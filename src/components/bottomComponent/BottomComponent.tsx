import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeWrapper";
import { BottomComponentStyles } from "./BottomComponentsStyles";
import CommonButton from "../commonButton/CommonButton";
import CarousalComponent from "../carousalComponent/CarousalComponent";
import BagsComponent from "../bags/BagsComponent";
import TrendingComponent from "../trending/TrendingComponent";
import MainComponent from "../../fasion/MainComponent";

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
      sx={{
        display: "flex",               
        justifyContent: "center",      
        alignItems: "center",          
                     
        backgroundColor: "white",     
        
        flexDirection:'column'             
      }}
    >
      <Box sx={{display:'flex',flexDirection:'column',gap:2 ,justifyContent: "center",  alignItems:'center',}}>
        <Typography variant="h4" sx={{ fontSize: {xs:'30px',sm:"40px"},color:'#0f0f0f' }}>Spring Awakening</Typography>
        <Typography variant="body1" sx={{ fontSize: "20px",width:'95%',textAlign:'center',color:'#424242' }}>
          See in the season with lighter dresses for brighter days, care of Jacquemus, Stella McCartney, Sir. and more.
        </Typography>
        <CommonButton title="Shop Dresses" color={colors.darkBrown} bgColor={colors.darkBrown} />
      </Box>
      <CarousalComponent products={carousalProducts} isDescriptionHas isIconHas isPriceHas />
      <BagsComponent/>
      <TrendingComponent products={carousalTwoProducts} isBgActive isTitleHasUnderline />
      <MainComponent products={carousalTwoProducts}/>
    </Box>
  );
};

export default BottomComponent;
