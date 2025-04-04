import { ColorScheme } from "../../config/colorPalette";

export const loginPageStyles = (color: ColorScheme) => {
  return {
        container: {
            width:{xs:"90%",sm:"62%",lg:"38%"},
            boxSizing: "border-box",
            background:color.white,
            borderRadius:"10px",
            padding:{xs:"30px",sm:'50px 60px'},
            marginBottom:"30px",
            gap:"20px"
        },
        title:{
          fontSize:"24px",
          fontWeight:300,
          margin:"0px",
          padding:"0px",
          fontFamily:"grotesk-light",
          color:"#32333a",
        },
        inputContainer:{
          display:"flex",
          flexDirection:"column",
          gap:"10px"
        },
        rememberContainer:{
          display:"flex",
          justifyContent:"start",
          alignItems:"center",
          marginLeft:"-10px"
        },
        label: {
          fontSize: "16px",
          color: color.label
      },
      remember:{
        fontSize: "14px",
        color: color.label,
        fontWeight:"500"
      },
      link:{
        textAlign:"center",textDecoration:"1px solid underline",
        fontSize: "13px",
        color: color.label,
        fontWeight:600
      },
   noAccount:{
        textAlign:"center",
        fontSize: "16px",
        color: color.label,
        marginTop:"15px"
      }
  };
};