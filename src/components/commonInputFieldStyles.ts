import { ColorScheme } from "../config/colorPalette";

export const commonInputFieldStyles = (color: ColorScheme) => {
  return {
    input: {
      width: "100%",
      backgroundColor: color.white,
      borderRadius: "0px !important",
      // "& .MuiFormHelperText-root": {
      //   fontSize: "1rem",
      //   color: "#F91E00",
      // },
      // "& .MuiFormLabel-root": {
      //   color: "#18161B",
      //   fontSize: "16px",
      //   fontWeight: "500",
      //   textTransform: "none",
      //   fontFamily: '"Montserrat Alternates", sans-serif',
      // },
      // "& label.Mui-focused": {
      //   textTransform: "none",
      //   color: "#18161B",
      //   transform: "translate(24px, -7px) scale(.8)",
      //   background: "#FFF",
      //   padding: "0px 10px 5px",
      //   display: "block",
      //   fontSize: "18px",
      //   fontWeight: "600",
      //   marginRight: "2px",
      // },

      "& .MuiOutlinedInput-root": {
        borderRadius: "0px !important",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important",
        "& fieldset": {
          borderRadius: "0px !important",
          border: "1px solid #9E9E9E  !important",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important",
        },
        "&:hover fieldset": {
          border: "1px solid #9E9E9E !important",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important", // Border color on hover
        },
        "&.Mui-focused fieldset": {
          border: "2px solid #AA8D65 !important", // Brown border on focus
        },
      },
      "& .MuiOutlinedInput-input": {
        padding: "10px !important", // Set padding to 5px
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important",
      },

      // "& .MuiOutlinedInput-input": {
      //   color: "#A9A9A9",
      //   fontFamily: "Poppins",
      //   fontSize: "18px",
      //   "&:hover": {
      //     outline: "none !important", // Removes outline on hover
      //     boxShadow: "none !important", // Ensures no unwanted styles
      //   },
      // },
    },
    label: {
      fontSize: "16px",
      color: "#32333a",
      width:"100%"
    },
  };
};
