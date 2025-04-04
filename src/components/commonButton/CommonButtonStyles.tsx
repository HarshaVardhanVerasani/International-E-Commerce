export const CommonButtonStyles=(color:string,bgColor:string,authButton:boolean|undefined,mainBgColor:string)=>({
    buttonContainer:{
        border: `1px solid ${color}`,
        color: color,
        backgroundColor: !authButton ? "transparent" : mainBgColor,
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