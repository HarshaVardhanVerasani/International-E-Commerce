import { Box, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { checkoutIcon, logo } from "../../common/assets/images/imageFile";

const CheckoutLayout = () => {
  return (
    <Stack sx={{ width: "100%", height: "100vh", gap: "20px", boxSizing: "border-box",border:"1px solid red",overflow:"scrollY" }}>
      <Box sx={{ height: "14%", width: "100%", padding: "20px 20px",boxSizing:"border-box",display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid red"}}>
        <Typography>Secure Checkout</Typography>
        <Box sx={{width:"100px" , height:"100px"}}>
        <Box component={'img'} src={logo} sx={{width:"100%",height:"100%",objectFit:"contain"}}/>
        </Box>
        <Box component={'img'} src={checkoutIcon} sx={{width:"200px",height:"50px"}}/>
      </Box>
      <Outlet />
    </Stack>
  );
};
export default CheckoutLayout;
