import { ColorScheme } from "../../config/colorPalette";

export const authenticationPageStyles = (color: ColorScheme) => {
  return {
    container: {
      width: "100%",
      minHeight: "100vh",
      boxSizing: "border-box",
      background: color.lightYellow,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      overflow: "scrollY",
      gap: "3vh",
     paddingBottom:"10vh"
    },
    loginHeadContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      height: "15vh",
      background: color.white,
      borderTop: `4px solid ${color.darkBrown}`,
    },
    logo: {
      width: "80px",
      height: "40px",
      boxSizing: "border-box",
      objectFit: "cover",
    },
    backContainer: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width:{xs:"90%",sm:"62%",lg:"38%"},
      color: color.darkBrown,
      gap:"5px"
    },
    backContainer1: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width:{xs:"90%",sm:"92%",lg:"92%"},
      color: color.darkBrown,
      gap:"5px"
    },
    backBtn: {
      fontSize: "11px",
      fontWeight: 600,
    },
    icon:{
        fontSize: "18px",
        fontWeight: 300,
    },
    cookies:{
        textAlign:"center",textDecoration:"1px solid underline",
        fontSize: "13px",
        color: color.label,
        fontWeight:600
      },
  };
};
