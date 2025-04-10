import { Box, Stack, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { ChangeEvent, lazy, useContext, useState } from "react";

import { ThemeContext } from "../../context/ThemeWrapper";
import { loginPageStyles } from "./loginPageStyles";
import { authenticationLayoutPageData } from "../../common/sampleData/sampleData";
import { useTranslation } from 'react-i18next';
import CommonButton from "../../components/commonButton/CommonButton";
import { useNavigate } from "react-router-dom";
const CommonInputField = lazy(() => import("../../components/commonInputField/CommonInputField"));

interface UserDetails {
  email: string;
  password: string;
}

interface LoginFieldsData {
  id: number;
  name: keyof UserDetails;
  value: string;
  label: string;
}

const loginFieldsData: LoginFieldsData[] = [
  {
    id: 1,
    name: "email",
    value: "",
    label: "Email Address",
  },
  {
    id: 2,
    name: "password",
    value: "",
    label: "Password",
  },
];
const LoginPage = () => {
  const { colors } = useContext(ThemeContext);
  const styles = loginPageStyles(colors);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [user, setUser] = useState<UserDetails>({ email: "", password: "" });
  const [remember, setRemember] = useState(false);

  const { rememberMe, forgottenYourPassword, doNotHaveAccount, registerNow } = authenticationLayoutPageData;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    localStorage.setItem("userDetails", JSON.stringify(user))
    navigate("/");
    setUser({ email: "", password: "" })
  }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRemember(event.target.checked);
  };
  const handleRegister = () => {
    navigate("/auth/Register")
  }

  return (
    <Stack sx={styles.container}>


      <Typography sx={styles.title}>{t("signin")}</Typography>

      <Stack sx={styles.inputContainer}>
        {loginFieldsData.map(({ id, name, label }) => (
          <CommonInputField key={id} label={label} name={name} value={user[name]} handleChange={handleChange} />
        ))}
      </Stack>

      <Box sx={styles.rememberContainer}>
        <Checkbox
          checked={remember}
          onChange={handleCheckboxChange}
          sx={{
            color: brown[800],
            "&.Mui-checked": {
              color: brown[600],
            },
          }}
        />
        <Typography sx={styles.remember}>{rememberMe}</Typography>
      </Box>

      <CommonButton bgColor="black" color="White" title="Sign in" authButton mainBgColor="#304835" handleSubmit={handleSubmit} />

      <Typography sx={styles.link}>{forgottenYourPassword}</Typography>
      <Typography sx={styles.noAccount}>{doNotHaveAccount}</Typography>
      <Typography sx={styles.link} onClick={handleRegister}>{registerNow}</Typography>
    </Stack>
  );
};

export default LoginPage;
