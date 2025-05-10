import { ColorScheme } from "../../config/colorPalette";

export const BottomComponentStyles=(colors:ColorScheme)=>({
    mainComponent:{
        display: "flex",               
        justifyContent: "center",      
        alignItems: "center",                         
        backgroundColor: "white",     
        flexDirection:'column', 
        marginTop:4 
    },
    contentContainer:{display:'flex',flexDirection:'column',gap:5 ,justifyContent: "center",  alignItems:'center'},
    heading:{ fontSize: {xs:'30px',sm:"40px"},color:colors.mediumBlack,fontFamily:'miller-light' },
    subText:{ fontSize: "20px",width:'95%',textAlign:'center',color:colors.lightBlack },

})