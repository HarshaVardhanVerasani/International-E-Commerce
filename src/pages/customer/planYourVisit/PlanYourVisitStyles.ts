import { ColorScheme } from "../../../config/colorPalette";

export const planYourVisitStyles = (color: ColorScheme) => {
  return {
    container: {
      height: "100dvh",
      bgcolor: color.white,
    },
    title: {
      color: color.white,
    },
    paragraph: { color: color.textGrey },
    linkButton: { color: color.darkBrown },
  };
};
