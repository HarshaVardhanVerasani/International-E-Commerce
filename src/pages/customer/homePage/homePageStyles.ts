import { ColorScheme } from "../../../config/colorPalette";

export const homePageStyles = (color: ColorScheme) => {
  return {
    container: {
      height: "100dvh",
      bgcolor: color.black,
    },
    title: {
      color: color.white,
    },
  };
};
