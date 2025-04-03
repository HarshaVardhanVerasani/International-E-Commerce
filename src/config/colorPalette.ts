import { createTheme } from "@mui/material";

export type ColorScheme = {
  black: string;
  white: string;
};

const lightTheme: ColorScheme = {
  black: "#000000",
  white: "#ffffff",
  darkBeige:"#ab8e66",
  gray:"#757575"
};

const darkTheme: ColorScheme = {
  black: "#ffffff",
  white: "#000000",
  darkBeige:"#ab8e66",
  gray:"#757575"

};

const fonts = {
  primary: "Poppins",
};

export const muiGlobalTheme = (colors: ColorScheme) =>
  createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 10,
              fontSize: 14,
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: 10,
                borderColor: colors.black,
              },
            },
            "& input:-webkit-autofill": {
              transition: "background-color 0s 600000s, color 0s 600000s !important",
            },
            "& input": {
              paddingBlock: 16,
              paddingInline: 18,
            },
            "& .MuiInputBase-root.MuiOutlinedInput-root:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                // borderColor: colors.grey,
                borderWidth: 2,
              },
            },
          },
        },
      },
    },
  });

export { darkTheme, fonts, lightTheme };
