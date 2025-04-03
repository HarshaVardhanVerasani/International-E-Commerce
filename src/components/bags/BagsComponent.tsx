import React, { useContext } from "react";
import { imageOne, imageTwo } from "../../common/assets/images/imageFile";
import { ThemeContext } from "../../context/ThemeWrapper";
import { BagsComponentStyles } from "./BagsComponentStyles";
import { Box, Typography } from "@mui/material";
import CommonButton from "../commonButton/CommonButton";

const data = [
  {
    id: 1,
    title: "The Bags to Know",
    image: imageOne,
    description: "Fresh arrivals and standout styles.",
  },
  {
    id: 2,
    title: "Just Landed",
    image: imageTwo,
    description: "The latest collections, all in one place.",
  },
];

const BagsComponent = () => {
  const { colors, changeTheme } = useContext(ThemeContext);
  const style = BagsComponentStyles(colors);

  return (
   
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
            {item.id===1? <CommonButton title="Shop Trending Bags" color={colors.darkBrown} bgColor={colors.darkBrown} />: <CommonButton title="Shop New In" color={colors.darkBrown} bgColor={colors.darkBrown} />}
          </Box>
        ))}
      </Box>
  
  );
};

export default BagsComponent;
