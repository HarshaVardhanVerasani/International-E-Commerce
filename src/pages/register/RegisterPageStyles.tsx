import { ColorScheme, fonts } from "../../config/colorPalette"

export const RegisterPageStyles = (color: ColorScheme) => {
  return {
    container: {
      width: "92%",
      color: color.black,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexDirection: { xs: "column", sm: "row" },
      boxSizing: "border-box",
    },
    rewardsContainer: {
      width: "30%",
      borderRadius: "10px",
      background: color.white,
      padding: "30px 60px",
      gap: "10px",
      boxSizing: "border-box"
    },
    registerContainer: {
      width: "60%",
      borderRadius: "10px",
      background: color.white,
      padding: "30px 60px",
      boxSizing: "border-box"
    },
    markContainer: {
      display: "flex", justifyContent: "flex-start", alignItems: "start", width: "100%", gap: "5px", fontFamily: fonts.primary,
      fontWeight: 300,
      fontSize: "12px",
      color: color.label
    },
    title: {
      fontFamily: fonts.primary,
      fontWeight: 300,
      fontSize: "28px",
      width: "90%",
      lineHeight: "30px"
    },
    subTittles: {
      fontFamily: fonts.primary,
      fontWeight: 300,
      fontSize: "16px",
      color: color.label,
    },
    dropDown: {
      width: "200px",
      "& .MuiOutlinedInput-root": {
        borderRadius: "0px", // Remove border radius
        "& fieldset": {
          border: "1px solid #9E9E9E !important",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important",   // Border color on hover
        },
        "&:hover fieldset": {
          border: "1px solid #9E9E9E !important",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important",   // Border color on hover
        },
        "&.Mui-focused fieldset": {
          border: "2px solid #AA8D65 !important",
        },
      },
    },
    communication: {
      fontFamily: fonts.primary,
      fontWeight: 300,
      fontSize: "28px",
    }
  }
}