export const CommonButtonStyles=(color:string,bgColor:string)=>({
    buttonContainer:{
        border: `1px solid ${color}`,
        color: color,
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: bgColor,
          color: "#ffffff",
        },
       
        textTransform: "none",
        width: {xs:"280px",sm:"300px"},
        height: "55px",
        fontSize: "16px",
        borderRadius: 0, 
      
      }
})