import { Box } from "@mui/material";
import { lang } from "../../common/assets/images/imageFile";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
const styles = {
  imageContainer: {
    width: "30px",
    height: "30px",
    borderRadius: "100%",
    position: "fixed",
    top: "20%",
    left: "1%",
    zIndex: "1000",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "100%",
  },
};

const Language = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (lan: string) => {
    i18n.changeLanguage(lan);
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={styles.imageContainer} onClick={handleClick}>
        <Box sx={styles.image} component="img" src={lang} alt="language" />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <MenuItem onClick={() => handleChange("en")}>English</MenuItem>
        <MenuItem onClick={() => handleChange("fr")}>French</MenuItem>
        <MenuItem onClick={handleClose}>Spanish</MenuItem>
      </Menu>
    </>
  );
};

export default Language;
