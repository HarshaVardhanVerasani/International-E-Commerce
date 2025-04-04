import { Box, Stack, TextField } from "@mui/material"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeWrapper";
import { commonInputFieldStyles } from "../commonInputFieldStyles";

interface IProps {
    label:string
}
const CommonInputField = (props:IProps) => {
     const { colors } = useContext(ThemeContext);
        const styles = commonInputFieldStyles(colors)

    return (
        <Stack gap={'10px'}>
            <Box component={'label'} sx={styles.label}>{props.label}</Box>
            <TextField
                id="outlined-basic"
                variant="outlined"
                sx={styles.input}
            />
        </Stack>
    )
}
export default CommonInputField