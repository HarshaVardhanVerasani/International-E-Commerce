import { ColorScheme } from "../../../config/colorPalette";

export const accountDetailsStyles = (color: ColorScheme) => {
  return {
    container: {
      height: "100vh",
      bgcolor: color.white,
    },
    title: {
      color: color.white,
    },
    paragraph: { color: color.textGrey },
    linkButton: { color: color.darkBrown },
  };
};
