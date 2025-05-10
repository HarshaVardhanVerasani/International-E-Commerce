import { ColorScheme } from "../../config/colorPalette";

export const TopBarStyles = (colors: ColorScheme,toggle:boolean) => ({
  mainContainer: {
    position: "relative",
    overflow: "hidden",
    height: "55px",
    backgroundColor: colors.lightGreen,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `4.5px solid ${colors.lightBrown}`,
    transition: "background-color 2s ease-in-out, opacity 2s ease-in-out",
    opacity: toggle ? 1 : 0.9,
  },
  contentContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    width: "100%",
    transition: "transform 2s ease-in-out, opacity 2s ease-in-out",
  },
  text:{
    padding: "10px 20px",
    color: "white",
    fontSize: {xs:'10px',sm:"12px"},
  },
  anchorText:{ color: "white", fontSize: {xs:'12px',sm:"14px"}}
});
