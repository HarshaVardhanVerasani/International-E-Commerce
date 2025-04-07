import { ColorScheme } from "../../config/colorPalette";

export const CommonCardComponentStyles = (colors: ColorScheme) => ({
  mainContainer: {
    width: 260,
    margin: "16px",
    overflow: "hidden",
    position: "relative",
    transition: "all 0.3s ease",
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconContainer: { position: "absolute", right: 5, top: 5 },
  icon: {
    color: colors.lightBrown,
  },
  imageContainer: { width: "100%", height: "200px" },
  textContainer:{ padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",lineHeight:10 },
titleText:{
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    WebkitLineClamp: 1,
    textOverflow: "ellipsis",
    fontSize: "14px",
    textAlign: "center",
},
descriptionText:{
    color: "text.secondary",
    marginBottom: "10px",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    WebkitLineClamp: 2,
    textOverflow: "ellipsis",
    fontSize: "14px",
    textAlign: "center",
  },
  priceText:{ marginBottom: "16px",fontSize: "14px", }
});
