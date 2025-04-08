import { ColorScheme } from "../../config/colorPalette";

export const cartPageStyles = (color: ColorScheme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "50px",
      mt: 10,
    },
    title: {
      color: color.black,
      fontFamily: "miller-light",
      fontSize: "26px",
    },
    description: {
      color: color.black,
      fontFamily: "grotesk-regular",
      fontSize: "16px",
    },
    button: {
      color: color.white,
      fontFamily: "grotesk-regular",
      fontSize: "16px",
      backgroundColor: color.lightGreen,
      padding: "10px 100px",
      marginTop: "20px",
      cursor: "pointer",
      textTransform: "capitalize",
      borderRadius: "0px",
      "&:hover": {
        backgroundColor: color.black,
      },
    },
    signInText: {
      marginTop: "20px",
      color: color.darkBeige,
      cursor: "pointer",
      fontFamily: "grotesk-regular",
      fontSize: "16px",
      textDecoration: "underline",
    },
    icon: {
      width: "120px",
      height: "120px",
    },
  };
};
