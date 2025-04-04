import { Box, Stack, Typography, FormControl, Select, MenuItem } from "@mui/material"
import { lazy, useContext } from "react";
import { ThemeContext } from "../../context/ThemeWrapper";
import { RegisterPageStyles } from "./RegisterPageStyles";
import { authenticationLayoutPageData } from "../../common/sampleData/sampleData";
import DoneIcon from '@mui/icons-material/Done';
const CommonInputField = lazy(() => import("./../../components/commonInputField/CommonInputField"))
const Register = () => {
    const { colors } = useContext(ThemeContext);
    const styles = RegisterPageStyles(colors);
    const {communication,communicationDescription,register,joinHarrods,earnAndRedeem,earnAndRedeem,benefitsAndDiscounts,tiers,rewards} = authenticationLayoutPageData;
    return (
        <Box sx={styles.container}>
            <Stack sx={styles.rewardsContainer}>
                <Typography sx={styles.title}>{joinHarrods} {rewards}</Typography>
                <Box sx={styles.markContainer}>
                    <DoneIcon />
                    <Typography sx={styles.subTittles}>{earnAndRedeem}</Typography>
                </Box>
                <Box sx={styles.markContainer}>
                    <DoneIcon />
                    <Typography sx={styles.subTittles}>{benefitsAndDiscounts}</Typography>
                </Box>
                <Box sx={styles.markContainer}>
                    <DoneIcon />
                    <Typography sx={styles.subTittles}>{tiers}</Typography>
                </Box>
            </Stack>
            <Stack sx={styles.registerContainer} gap={'20px'}>
                <Typography>{register}</Typography>
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
                    <Typography sx={styles.communication}>{communication}</Typography>
                    <Typography>{communicationDescription}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}
export default Register