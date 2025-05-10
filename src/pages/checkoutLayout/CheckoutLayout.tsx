import { Box, Stack, Typography } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { checkoutIcon, logo } from "../../common/assets/images/imageFile";
const styles = {
    text: {
        fontSize: "13px",
        fontWeight: "300px",
    },
    customer: {
        fontSize: "14px",
        fontWeight: "600px",
        marginBottom: "14px"
    },
    link: {
        textDecoration: "underline",
        fontSize: "14px",
        fontWeight: "300px",
        color: "#8a7252",
        marginLeft: "5px",
        cursor:"pointer"
    },
    container: { width: "100%", boxSizing: "border-box", overflow: "scrollY" },
    navbar: {
        height: "15vh",
        width: "100%",
        padding: "20px 20px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    main: { width: "100px", height: "100px" },
    image: { width: "100%", height: "100%", objectFit: "contain" },
    iconContainer: { width: "70px", height: "70px" },
};
const CheckoutLayout = () => {
    const path = useLocation();
    const isValidPath = path.pathname.split("/").includes('details');

    return (
        <Stack sx={styles.container}>
            <Box sx={styles.navbar}>
                <Typography>Secure Checkout</Typography>
                <Box sx={styles.main}>
                    <Box component={"img"} src={logo} sx={styles.image} />
                </Box>
                <Box sx={styles.iconContainer}>
                    <Box component={"img"} src={checkoutIcon} sx={styles.image} />
                </Box>
            </Box>
            <Outlet />
            <Stack
                sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: isValidPath ? "#FFFFFF" :"#F5F5F5", padding: "30px 0px", gap: "10px" }}>
                <Box sx={styles.main}>
                    <Box component={"img"} src={logo} sx={styles.image} />
                </Box>
                <Typography sx={styles.customer}>CUSTOMER SERVICE TEAM</Typography>
                <Typography sx={styles.text}>
                    Phone:
                    <Box component={"span"} sx={styles.link}>
                        +44 (0)20 7730 1234
                    </Box>
                </Typography>
                <Typography sx={styles.text}>
                    Email:{" "}
                    <Box component={"span"} sx={styles.link}>
                        customer.service@harrods.com
                    </Box>
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px" }}>
                    <Typography sx={styles.link}>Delivery & Returns</Typography>
                    <Typography sx={styles.link}>Terms & Conditions</Typography>
                </Box>
            </Stack>
        </Stack>
    );
};
export default CheckoutLayout;
