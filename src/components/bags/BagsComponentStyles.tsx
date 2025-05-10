import { ColorScheme } from "../../config/colorPalette";

export const BagsComponentStyles = (colors: ColorScheme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center", 
    width: "100%",
    flexWrap: "wrap", 
    
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center", 
    flexWrap: "wrap",
    gap:4,marginTop:4
  },
  cardItem: {
    width: {xs:"280px",sm:"300px",md:"350px"}, 
    margin: "16px", 
    display: "flex",
    flexDirection: "column", 
    "&:hover": {
      cursor: "pointer",
    },
    justifyContent:'center',
    alignItems:'flex-start',
    gap:{xs:3,sm:4}
  },
  imageContainer: {
    width: "100%",
    height: {xs:"350px",sm:"400px",md:"450px"}, 
    overflow: "hidden", 
  },
  title: {
    fontSize: "20px",
   
    marginTop: "12px",
    textAlign: "center",
    color: colors.mediumBlack, 
  },
  description: {
    fontSize: "14px",
    textAlign: "center",
    color: colors.lightBlack,
    
  },
});
