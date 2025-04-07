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
import { logo } from "../../../../common/assets/images/imageFile";
import { dataMap } from "../../../../common/sampleData/sampleData";
import CountrySelector from "../../../../components/countrySelector/CountrySelector";
import { ThemeContext } from "../../../../context/ThemeWrapper";
import { headerStyles } from "./headerStyles";
import TopBar from "../../../../components/topBar/TopBar";

type MenuKey = keyof typeof dataMap;


const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);
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

  const isDesktop = useMediaQuery("(min-width:1023px)");

  return (
    <>
      {isDesktop ? (
        <Box>
          <TopBar />
          <Box sx={styles.bannerImageStyles}>
            <Box sx={styles.bannerImageBox}>
              <CountrySelector />
              <Box sx={styles.signContainer}>
                <Typography sx={styles.signStyles}>Sign In</Typography>
                <Typography sx={styles.signStyle}>/</Typography>
                <Typography sx={styles.signStyles}>Register</Typography>
              </Box>
            </Box>
            <Box sx={styles.logoContainer}>
              <Box component="img" src={logo} sx={styles.logo} />
            </Box>
            <Box sx={styles.iconContainer}>
              <SearchIcon sx={styles.iconStyles} />
              <FavoriteBorderIcon sx={styles.iconStyles} />
              <ShoppingBagOutlinedIcon sx={styles.iconStyles} />
            </Box>
            <Box sx={styles.menuContainer}>
              {Object.keys(dataMap).map(item => (
                <Box key={item} onMouseEnter={() => handleMouseEnter(item as MenuKey)} onMouseLeave={handleMouseLeave}>
                  <Typography variant="body1" sx={styles.menuStyle}>
                    {item}
                  </Typography>
                  <Divider sx={styles.itemHr} />
                </Box>
              ))}
            </Box>
          </Box>
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
                  <FavoriteBorderIcon sx={styles.menuIcon} />
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
