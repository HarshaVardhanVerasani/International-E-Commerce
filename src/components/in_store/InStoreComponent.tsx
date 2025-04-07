
import { useContext } from "react";
import { imageFive, imageFour } from "../../common/assets/images/imageFile";
import { ThemeContext } from "../../context/ThemeWrapper";

import { Box, Typography } from "@mui/material";
import CommonButton from "../commonButton/CommonButton";
import { InStoreComponentStyles } from "./InStoreComponentStyles";

const data = [
  {
    id: 1,
    title: "The New Harrods Collection",
    image: imageFour,
    description: "Cornish kitchenware, British-made totes, Scottish cashmere and more – visit the Lower Ground Floor and discover the stories behind our all-new collection.",
  },
  {
    id: 2,
    title: "Easter at Harrods",
    image: imageFive,
    description: "A trip to the Chocolate Hall isn’t the only thing on the agenda this Easter – there’s more than one way to enjoy spring in-store.",
  },
];

const InStoreComponent = () => {
  const { colors } = useContext(ThemeContext);
  const style = InStoreComponentStyles(colors);

  return (
   <Box sx={style.mainContainer}>
     <Box sx={style.cardContainer}>
        {data.map((item) => (
          <Box key={item.id} sx={style.cardItem}>
            <Box sx={style.imageContainer}>
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography sx={style.title}>{item.title}</Typography>
            <Typography sx={style.description}>{item.description}</Typography>
            {item.id===1? <CommonButton title="Shop Now" color={colors.darkBrown} bgColor={colors.darkBrown} mainBgColor=''/>: <CommonButton title="Find Out More" color={colors.darkBrown} bgColor={colors.darkBrown} mainBgColor=''/>}
          </Box>
        ))}
         
      </Box>
      <CommonButton title="Plan Your Visit" color={colors.darkBrown} bgColor={colors.darkBrown} authButton mainBgColor='#304835' />
   </Box>
     
  
  );
};




export default InStoreComponent
