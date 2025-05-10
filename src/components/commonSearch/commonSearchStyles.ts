import { ColorScheme } from "../../config/colorPalette";

export const commonSearchStyles = (color: ColorScheme) => {
  return {
    btn:{ margin: "10px 0px" },
    keys:{
        fontSize: "16px",
        fontWeight: "500",
    },
    itemsContainer:{
        width:"50%",
        marginBottom:"20px"
    },
    item: {
      padding: "5px",
      borderTop: "1px solid silver",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "30px",
    },
    image: { width: "100px", height: "80px" },
    closeText: {
      fontSize: "13px",
      fontWeight: "500",
    },
    container: {
      minHeight: "250px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    },
    searchIcon: {
      color: color.darkBrown,
      fontSize: "28px",
    },
    input: {
      width: "50%",
      "& .MuiInput-underline:before": {
        borderBottom: "1px solid #ab8e66",
      },
      "& .MuiInput-underline:hover:before": {
        borderBottom: "1px solid #ab8e66 !important",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "1px solid #ab8e66",
      },
    },
  };
};
