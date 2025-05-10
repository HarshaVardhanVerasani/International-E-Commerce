import { Box, Stack, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CommonButton from "../commonButton/CommonButton";
import { useNavigate } from "react-router-dom";
const styles = {
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F5F5F5",
        gap: "30px",
        boxSizing: "border-box",
        paddingTop:"40px",
    },
    registerContainer: {
        width: {xs:"80%",md:"37%"},
        minHeight: "200px",
        borderRadius: "10px",
        background: "#FFFFFF",
        boxSizing: "border-box",
        padding: {xs:"20px",sm:"50px 70px"},
        gap: "10px",
    },
    guestContainer: {
        width: {xs:"80%",md:"35%"},
        minHeight: "200px",
        borderRadius: "10px",
        background: "#FFFFFF",
        boxSizing: "border-box",
        padding: {xs:"20px",sm:"50px 70px"},
    },
    checkoutContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: {xs:"center",md:"start"},
        gap: "50px",
        flexDirection:{xs:"column-reverse",md:"row"},
    },
    title: {
        fontSize: "28px",
        fontWeight: "300",
        color: "black",
    },
    mainTittle: {
        fontSize: "28px",
        fontWeight: "300",
        color: "black",
        marginBottom: "10px",
    },
    subTittle: {
        fontSize: "14px",
        fontWeight: "300",
        color: "black",
    },
    text: {
        fontSize: "14px",
        fontWeight: "300",
        color: "black",
        display: "flex",
        gap: "5px",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    icon: {
        fontSize: "25px",
        fontWeight: "300",
        color: "black",
    },
    textContainer: {
        marginBottom: "20px"
    }
};
const CheckoutSelection = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/checkout/details")
    }
    const handleRegister = () => {
        navigate("/auth/register")
    }
    return (
        <Stack sx={styles.container}>
            <Typography sx={styles.title}>Start Checkout</Typography>
            <Box sx={styles.checkoutContainer}>
                <Stack sx={styles.registerContainer}>
                    <Typography sx={styles.mainTittle}>Registered Customers</Typography>
                    <Typography sx={styles.subTittle}>Sign in to enjoy a better checkout experience:</Typography>
                    <Stack sx={styles.textContainer}>
                        <Typography sx={styles.text}>
                            <DoneIcon sx={styles.icon} />
                            Earn points when you spend
                        </Typography>
                        <Typography sx={styles.text}>
                            <DoneIcon sx={styles.icon} />
                            Pay with points you’ve earned
                        </Typography>
                        <Typography sx={styles.text}>
                            <DoneIcon sx={styles.icon} />
                            Track your order in your account
                        </Typography>
                    </Stack>
                    <Box onClick = {handleRegister}>
                    <CommonButton bgColor="#304835" color="#FFFFFF" mainBgColor="#304835" title="Sign in" authButton={true} />
                    </Box>
                </Stack>
                <Stack sx={styles.guestContainer}>
                    <Typography sx={styles.mainTittle}>Guest Checkout</Typography>
                    <Box onClick={handleNavigate}>
                    <CommonButton bgColor="#304835" color="#FFFFFF" mainBgColor="#304835" title="New Customer" authButton={true} />
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};
export default CheckoutSelection;
