import { ColorScheme } from "../../config/colorPalette";

export const loginPageStyles = (color: ColorScheme) => {
  return {
        container: {
            width:{xs:"90%",sm:"62%",lg:"37.5%"},
            boxSizing: "border-box",
            background:color.white,
            borderRadius:"10px",
            padding:{xs:"30px",sm:'50px 60px'},
            marginBottom:"30px",
            gap:"20px",
            display:"flex",
            alignItems:"center"
        },
        title:{
          fontSize:"24px",
          fontWeight:300,
          margin:"0px",
          padding:"0px",
          fontFamily:"grotesk-light",
          color:"#32333a",
          width:"100%"
        },
        inputContainer:{
          display:"flex",
          flexDirection:"column",
          gap:"10px",
          width:"100%"
        },
        rememberContainer:{
          display:"flex",
          justifyContent:"start",
          alignItems:"center",
          marginLeft:"-10px",
          width:"100%"
        },
        label: {
          fontSize: "16px",
          color: color.gray
      },
      remember:{
        fontSize: "14px",
        color: color.gray,
      },
    
      link:{
        textAlign:"center",textDecoration:"1px solid underline",
        fontSize: "13px",
        color: color.gray,
        fontWeight:600
      },
   noAccount:{
        textAlign:"center",
        fontSize: "16px",
        color: color.gray,
        marginTop:"15px"
      }
  };
};