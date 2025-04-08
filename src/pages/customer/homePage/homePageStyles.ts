import { ColorScheme } from "../../../config/colorPalette";

export const homePageStyles = (color: ColorScheme) => {
  return {
    container: {
      // height: "100dvh",
      bgcolor: color.white, 
    },
    title: {
      color: color.white,
    },
  };
};
