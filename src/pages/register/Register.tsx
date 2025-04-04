import DoneIcon from '@mui/icons-material/Done';
import { Box, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import { lazy, useContext } from "react";
import { authenticationLayoutPageData } from "../../common/sampleData/sampleData";
import { ThemeContext } from "../../context/ThemeWrapper";
import { RegisterPageStyles } from "./RegisterPageStyles";
const CommonInputField = lazy(() => import("./../../components/commonInputField/CommonInputField"))
const Register = () => {
    const { colors } = useContext(ThemeContext);
    const styles = RegisterPageStyles(colors);
    return (
        <Box sx={styles.container}>
            <Stack sx={styles.rewardsContainer}>
                <Typography sx={styles.title}>{authenticationLayoutPageData.joinHarrods} {authenticationLayoutPageData.rewards}</Typography>
                <Box sx={styles.markContainer}>
                    <DoneIcon />
                    <Typography sx={styles.subTittles}>{authenticationLayoutPageData.earnAndRedeem}</Typography>
                </Box>
                <Box sx={styles.markContainer}>
                    <DoneIcon />
                    <Typography sx={styles.subTittles}>{authenticationLayoutPageData.benefitsAndDiscounts}</Typography>
                </Box>
                <Box sx={styles.markContainer}>
                    <DoneIcon />
                    <Typography sx={styles.subTittles}>{authenticationLayoutPageData.tiers}</Typography>
                </Box>
            </Stack>
            <Stack sx={styles.registerContainer} gap={'20px'}>
                <Typography>{authenticationLayoutPageData.register}</Typography>
                <Stack gap={"10px"}>
                    <FormControl
                        sx={styles.dropDown}
                        size="small"
                    >
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={""}
                        >
                            <MenuItem value="">
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value={"DR"}>DR.</MenuItem>
                            <MenuItem value={"Miss"}>Miss.</MenuItem>
                            <MenuItem value={"Mr"}>Mr.</MenuItem>
                            <MenuItem value={"Mrs"}>Mrs.</MenuItem>
                        </Select>
                    </FormControl>
                    <CommonInputField label="First Name" />
                    <CommonInputField label="Last Name" />
                    <CommonInputField label="Email Address" />
                    <CommonInputField label="Password" />
                    <CommonInputField label="Confirm Password" />
                </Stack>
                <Stack>
                    <Typography sx={styles.communication}>{authenticationLayoutPageData.communication}</Typography>
                    <Typography>{authenticationLayoutPageData.communicationDescription}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}
export default Register