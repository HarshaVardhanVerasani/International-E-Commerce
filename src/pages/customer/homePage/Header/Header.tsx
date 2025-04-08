import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { bannerImg, logo } from "../../../../common/assets/images/imageFile";
import { dataMap } from "../../../../common/sampleData/sampleData";
import CountrySelector from "../../../../components/countrySelector/CountrySelector";
import TopBar from "../../../../components/topBar/TopBar";
import { ThemeContext } from "../../../../context/ThemeWrapper";
import { headerStyles } from "./headerStyles";

type MenuKey = keyof typeof dataMap;


const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation(); 

  const styles = headerStyles(colors);

  const [showContent, setShowContent] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<MenuKey | "">("");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  let closeTimeout: ReturnType<typeof setTimeout>;

  const handleMouseEnter = (item: MenuKey) => {
    clearTimeout(closeTimeout);
    setSelectedMenu(item);
    setShowContent(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setShowContent(false);
    }, 300);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const handleNavigate = (path: string) => {
    if (path === "LoginPage") {
      navigate(`auth/${path}`);
    }
    if (path === "Register") {
      navigate(`auth/${path}`);
    }
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  const isDesktop = useMediaQuery("(min-width:1023px)");

  return (
    <>
      {isDesktop ? (
        <Box>
          <TopBar />
          <Box
         // @ts-expect-error: TS2339: Property 'sx' does not exist on type 'IntrinsicAttributes & { children?: ReactNode; }'.
            sx={{
              ...styles.bannerImageStyles,
              backgroundImage: `url(${location.pathname === "/" && bannerImg})`,
              height: location.pathname === "/" && "100vh",
            }}>
            <Box sx={styles.bannerImageBox}>
              <CountrySelector />
              <Box sx={styles.signContainer}>
                <Typography
                  sx={{ ...styles.signStyles, color: location.pathname === "/" ? colors.white : colors.black }}
                  onClick={() => handleNavigate("LoginPage")}>
                  Sign In
                </Typography>
                <Typography sx={{ ...styles.signStyles, color: location.pathname === "/" ? colors.white : colors.black }}>/</Typography>
                <Typography
                  sx={{ ...styles.signStyles, color: location.pathname === "/" ? colors.white : colors.black }}
                  onClick={() => handleNavigate("Register")}>
                  Register
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.logoContainer}>
              <Box component="img" src={logo} sx={styles.logo} onClick={handleNavigateHome} />
            </Box>
            <Box sx={styles.iconContainer}>
              <SearchIcon sx={{ ...styles.iconStyles, color: location.pathname === "/" ? colors.white : colors.darkBeige }} />
              <FavoriteBorderIcon
                sx={{ ...styles.iconStyles, color: location.pathname === "/" ? colors.white : colors.darkBeige }}
                onClick={() => navigate("/favorite")}
              />
              <ShoppingBagOutlinedIcon
                sx={{ ...styles.iconStyles, color: location.pathname === "/" ? colors.white : colors.darkBeige }}
                onClick={() => navigate("/cart")}
              />
            </Box>
            <Box sx={styles.menuContainer}>
              {Object.keys(dataMap).map(item => (
                <Box key={item} onMouseEnter={() => handleMouseEnter(item as MenuKey)} onMouseLeave={handleMouseLeave}>
                  <Typography variant="body1" sx={{ ...styles.menuStyle, color: location.pathname === "/" ? colors.white : colors.black }}>
                    {item}
                  </Typography>
                  <Divider sx={styles.itemHr} />
                </Box>
              ))}
            </Box>
          </Box>
          <Divider sx={{ width: "100%", display: "" }} />
          {showContent && selectedMenu && dataMap[selectedMenu] && (
            <Box sx={styles.drawerStyle} onMouseEnter={() => clearTimeout(closeTimeout)} onMouseLeave={handleMouseLeave}>
              <Grid container spacing={4} sx={styles.drawerContainer}>
                {dataMap[selectedMenu].map((category, index) => (
                  // @ts-expect-error: Grid type mismatch in MUI, workaround applied
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Typography variant="h6" sx={styles.drawerTitle}>
                      {category.title}
                    </Typography>
                    {category.subNames.map((sub, idx) => (
                      <Typography key={idx} variant="body2" sx={styles.drawerCategory}>
                        {sub}
                      </Typography>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      ) : (
        <>
          <Divider sx={styles.hr} />
          <AppBar position="static" sx={styles.mobileBannerImageStyles}>
            <Toolbar sx={styles.mobileToolbarStyles}>
              <Box sx={styles.mobileIconContainer}>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon sx={styles.menuIcon} />
                </IconButton>
                <IconButton>
                  <SearchIcon sx={styles.menuIcon} />
                </IconButton>
              </Box>
              <Box sx={styles.mobileLogoStyles}>
                <img src={logo} alt="Logo" style={{ height: 80 }} />
              </Box>
              <Box sx={styles.mobileIconContainer}>
                <IconButton>
                  <FavoriteBorderIcon sx={styles.menuIcon} onClick={() => navigate("/favorite")} />
                </IconButton>
                <IconButton>
                  <ShoppingBagOutlinedIcon sx={styles.menuIcon} />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={styles.mobileDrawerStyles}>
            <Box sx={styles.mobileDrawerContent}>
              <Box sx={styles.mobileLogoStyles}>
                <img src={logo} alt="Logo" style={{ height: 80 }} />
              </Box>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon sx={styles.closeIocnStyle} />
              </IconButton>
            </Box>
            <Box sx={styles.mobileDrawerList}>
              <Typography variant="h6" mb={2}>
                Menu
              </Typography>
              <List>
                {Object.keys(dataMap).map((text, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;
