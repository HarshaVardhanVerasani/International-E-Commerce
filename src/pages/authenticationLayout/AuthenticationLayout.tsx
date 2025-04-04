import { Box, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeWrapper";
import { authenticationPageStyles } from "./authenticationLayoutStyles";
import { logo } from "../../common/assets/images/imageFile";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { authenticationLayoutPageData } from "../../common/sampleData/sampleData";
const AuthenticationLayout = () => {
    const { pathname } = useLocation()
    const [isBtn, setIsBtn] = useState<boolean>(false)
    const navigate = useNavigate();
    const { colors } = useContext(ThemeContext);
    const styles = authenticationPageStyles(colors)
    const { cookies, securityAndPrivacyPolicy, termsAndConditions } = authenticationLayoutPageData;
    const handleBack = () => {
        navigate(-1)
    }
    const checkPath = (loc: string) => {
        if (loc === "/Register") {
            setIsBtn(true)
        }
        else {
            setIsBtn(false)
        }

    }
    useEffect(() => {
        checkPath(pathname)
    }, [pathname])
    return (
        <Box sx={styles.container}>
            <Box sx={styles.loginHeadContainer}>
                <Box sx={styles.logo} component={'img'} src={logo} />
            </Box>
            <Box sx={!isBtn ? styles.backContainer : styles.backContainer1} onClick={handleBack}>
                <ArrowBackIosIcon sx={styles.icon} />
                <Typography sx={styles.backBtn}>BACK</Typography>
            </Box>
            <Outlet />
            <Stack gap={"20px"}>
                <Typography sx={styles.cookies}>{cookies}</Typography>
                <Typography sx={styles.cookies}>{termsAndConditions}</Typography>
                <Typography sx={styles.cookies}>{securityAndPrivacyPolicy}</Typography>
            </Stack>
        </Box>
    )
};
export default AuthenticationLayout