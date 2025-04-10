import { ColorScheme } from "../../../../config/colorPalette";

export const headerStyles = (color: ColorScheme) => {
  return {
    hr: {
      borderColor: color.darkBeige,
      borderWidth: "2px",
      borderStyle: "solid",
    },
    bannerImageStyles: {
      backgroundSize: "cover",
      backgroundPosition: "center",

      boxShadow: "none",
      padding: { md: "0px 10px", lg: "0px 125px" },
    },
    mobileBannerImageStyles: {
      backgroundSize: "cover",
      backgroundPosition: "center",

      boxShadow: "none",
      backgroundRepeat: "no-repeat",
    },
    bannerImageBox: {
      display: "flex",
      justifyContent: "space-between",
      pt: 1,
    },
    signContainer: {
      display: "flex",
      gap: 0.5,
      pt: 1.5,
    },
    signStyles: {
      fontSize: "12px",
      cursor: "pointer",
    },
    signStyle: {
      color: color.white,
      fontSize: "13px",
    },
    menuStyle: {
      cursor: "pointer",
      textWrap: "nowrap",
      color: color.white,
      "&:hover": {
        color: color.darkBeige,
        "& + hr": {
          borderColor: color.darkBeige,
        },
      },
    },
    iconStyles: { cursor: "pointer" },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      mt: -5,
      cursor: "pointer",
    },
    logo: {
      height: "75px",
      width: "157px",
    },
    iconContainer: {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      gap: 3,
      mt:-3,
      mb:1
    },
    menuContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      pt: 1,
    },
    itemHr: {
      borderColor: "transparent",
      borderStyle: "solid",
      mt: 3,
    },
    drawerStyle: {
      position: "fixed",
      bottom: 0,
      left: 0,
      height: "57%",
      width: "100%",
      backgroundColor: color.white,
      boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
      padding: 2,
      transition: "opacity 0.3s ease-in-out",
      zIndex: 10,
    },
    drawerContainer: {
      padding: "0px 120px",
    },
    drawerTitle: {
      fontWeight: "bold",
      marginBottom: 1,
    },
    drawerCategory: { color: color.gray, marginBottom: 2, cursor: "pointer" },
    mainContainer: { position: "relative", width: 300 },
    subContainer: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      cursor: "pointer",
      pt: 0,
      p: 2,
      width: "100%",
    },
    dropdownContainer: { position: "absolute", top: 50, width: "100%", bgcolor: color.white, p: 2, zIndex: 10 },
    dropdownContent: {
      display: "flex",
      height: "30px",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: 1,
      mt: 4,
      mb: 4,
      p: 1,
    },
    listContainer: { maxHeight: "250px", overflowY: "auto" },
    menuIcon: { color: color.white, fontSize: 30, cursor: "pointer" },
    mobileToolbarStyles: { display: "flex", justifyContent: "space-between" },
    mobileIconContainer: { display: "flex", alignItems: "center" },
    mobileLogoStyles: { flexGrow: 1, display: "flex", justifyContent: "center" },
    mobileDrawerStyles: { width: "100vw", height: "100vh" },
    mobileDrawerContent: {
      backgroundColor: color.white,
      width: "100%",
      position: "fixed",
      zIndex: 1100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    mobileDrawerList: { mt: "100px", overflowY: "auto", height: "calc(100vh - 100px)", backgroundColor: color.white, p: 2 },
    closeIocnStyle: { color: color.darkBeige, pr: 4 },
  };
};
