import {  Box, Stack, Typography } from "@mui/material"
import { brown } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import { lazy, useContext } from "react"
import { ThemeContext } from "../../context/ThemeWrapper"
import { loginPageStyles } from "./loginPageStyles"
const CommonInputField = lazy(() => import("../../components/commonInputField/CommonInputField")) 
import { authenticationLayoutPageData } from "../../common/sampleData/sampleData"

const LoginPage = () => {
  const {colors} = useContext(ThemeContext)
  const styles = loginPageStyles(colors)
  const {signin,emailAddress,password,rememberMe,forgottenYourPassword,doNotHaveAccount,registerNow} = authenticationLayoutPageData
  return(
  <Stack sx={styles.container}>
    <Typography sx={styles.title}>{signin}</Typography>
    <Stack sx={styles.inputContainer}>
    <CommonInputField label={emailAddress}/>
    <CommonInputField label={password}/>
    </Stack>
    <Box sx={styles.rememberContainer}>
    <Checkbox
        {...label}
        sx={{
          color: brown[800],
          '&.Mui-checked': {
            color: brown[600],
          },
        }}
      />
      <Typography sx={styles.remember}>{rememberMe}</Typography>
    </Box>
    <Typography sx={styles.link}>{forgottenYourPassword}</Typography>
    <Typography sx={styles.noAccount}>{doNotHaveAccount}</Typography>
    <Typography sx={styles.link}>{registerNow}</Typography>
  </Stack>
  )
}
export default LoginPage