import DoneIcon from '@mui/icons-material/Done';
import { Box, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import { ChangeEvent, lazy, useContext, useState } from "react";
import { authenticationLayoutPageData } from "../../common/sampleData/sampleData";
import { ThemeContext } from "../../context/ThemeWrapper";
import { RegisterPageStyles } from "./RegisterPageStyles";
import CommonButton from '../../components/commonButton/CommonButton';
import { darkTheme } from '../../config/colorPalette';
const CommonInputField = lazy(() => import("./../../components/commonInputField/CommonInputField"))
interface UserDetails {
    name: string,
    lastName: string
    email: string;
    password: string;
    confirmPassword: string
}

interface RegisterFieldsData {
    id: number;
    name: keyof UserDetails;
    value: string;
    label: string;
}

const registerFieldsData: RegisterFieldsData[] = [
    { id: 1, name: "name", value: "", label: "First Name" },
    { id: 2, name: "lastName", value: "", label: "Last Name" },
    { id: 3, name: "email", value: "", label: "Email Address" },
    { id: 4, name: "password", value: "", label: "Password" },
    { id: 5, name: "confirmPassword", value: "", label: "Confirm Password" },
];
const Register = () => {
    const { colors } = useContext(ThemeContext);
    const styles = RegisterPageStyles(colors);
    const { communication, communicationDescription, register, joinHarrods, earnAndRedeem, benefitsAndDiscounts, tiers, rewards } = authenticationLayoutPageData;
    const [user, setUser] = useState<UserDetails>({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };
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
                    {registerFieldsData.map((field) => (
                        <CommonInputField
                            key={field.id}
                            label={field.label}
                            name={field.name}
                            value={user[field.name] || ""}
                            handleChange={handleChange}
                        />
                    ))}

                </Stack>
                <Stack gap={"15px"}>
                    <Typography sx={styles.communication}>{communication}</Typography>
                    <Typography sx={styles.communicationText}>{communicationDescription}</Typography>
                    <Stack>
                    Yes, contact me via email
                    </Stack>
                    <CommonButton bgColor={darkTheme.lightGreen} color='white' mainBgColor={darkTheme.lightGreen} title='Complete Registration' authButton={true}/>
                    <Typography sx={styles.communicationText}>{communicationDescription}</Typography>
                </Stack>
            </Stack>

        </Box>
    )
}
export default Register