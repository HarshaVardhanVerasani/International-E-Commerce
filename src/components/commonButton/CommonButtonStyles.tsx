import { lightTheme } from "../../config/colorPalette";

export const CommonButtonStyles=(color:string,bgColor:string
 ,authButton:boolean|undefined,mainBgColor:string)=>({
    buttonContainer:{
        border: `1px solid ${color}`,
        color: !authButton?color:lightTheme.white,
        backgroundColor:!authButton? !authButton ? "transparent":mainBgColor : mainBgColor,
        "&:hover": {
          backgroundColor: bgColor,
          color: lightTheme.white,
        },     
        textTransform: "none",
        width: {xs:"280px",sm:"300px"},
        height: "55px",
        fontSize: "16px",
        borderRadius: 0,      
      }
})