import { ColorScheme } from "../../config/colorPalette";

export const ShopNewComponentStyles = (colors: ColorScheme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-around",
    alignItems: "center",
    gap: 2,
    width: "100%",
    marginTop: 4,
  },
  imageContainer: {
    width: { xs: "100%", sm: "48%" },
    height: "400px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  contentContainer: {
    width: { xs: "100%", sm: "45%" },
    paddingLeft: { sm: 3 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:{xs:'center',sm:'flex-start'},
    gap: 1,
  
  },
  mainHeading: {
    fontSize: { xs: "1rem", sm: "2.5rem" },
    color: colors.black,
    lineHeight: 1.2,
  },
  subText: {
    fontSize: { xs: ".8rem", sm: "1rem" },
    color: colors.lightBlack,
    marginBottom: 2,
  },
  linkText: {
    fontSize: { xs: ".8rem", sm: "1rem" },
    color: colors.darkBrown,
    textDecoration: "underline",
  },
});
