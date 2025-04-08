import { Box, Stack, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { ThemeContext } from "../../context/ThemeWrapper";
import { commonInputFieldStyles } from "../commonInputFieldStyles";

interface IProps {
  label: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}
const CommonInputField = (props: IProps) => {
  const { colors } = useContext(ThemeContext);
  const styles = commonInputFieldStyles(colors);
  const { handleChange, label, name, value } = props;

  return (
    <Stack gap={"10px"} width={"100%"}>
      <Box component={"label"} sx={styles.label}>
        {label}
      </Box>
      <TextField id="outlined-basic" variant="outlined" sx={styles.input} onChange={handleChange} name={name} value={value} />
    </Stack>
  );
};
export default CommonInputField;
