import { SxProps } from "@mui/material";

export const carouselStyles = {
  outerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  } as SxProps,

  container: {
    position: "relative",
    width: { xs: "100%", md: "90%", lg: "85%" },
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    border: "3px solid red",
    height: { xs: "480px", md: "700px", lg: "550px" },
  } as SxProps,

  carouselContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    height: { xs: "400px", md: "700px", lg: "550px" },
    width: { xs: "100%", md: "65%" },
    overflow: "hidden",
    border: "3px solid orange",
  } as SxProps,

  favoriteIconStyles: {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 10,
    width: "30px",
    height: "30px",
    color: "rgb(140 113 82);",
  },

  track: {
    display: "flex",
    transition: "transform 0.5s ease",
    height: "100%",
    width: "100%",
    position: "relative",
  } as SxProps,

  mobileTrack: {
    display: "flex",
    transition: "transform 0.3s ease-out",
    height: "100%",
    width: "100%",
    touchAction: "pan-y",
  } as SxProps,

  itemWrapper: {
    flexShrink: 0,
    height: "100%",
    position: "relative",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    border: "3px solid violet",
  } as SxProps,

  mobileItemWrapper: {
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  } as SxProps,

  itemContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  } as SxProps,

  pagination: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
    zIndex: 100,
  } as SxProps,

  paginationDot: {
    width: "10px", // Bigger dots
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    cursor: "pointer",
    border: "1px solid #8b6f4d",
    "&.active": {
      backgroundColor: "#8b6f4d",
      // transform: "scale(1.5)", // Enlarged active dot
    },
  } as SxProps,

  pageIndicator: {
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "14px",
    // color: "#666",
    padding: "2px 15px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    zIndex: 5,
    color: "#757575",
  } as SxProps,

  pageIndicatorText: {
    color: "#8A7252",
    fontSize: "13px",
  },

  circleNavButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    backgroundColor: "white",
    width: "40px",
    height: "40px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
    },
  },

  newBtn: {
    left: "5%",
    zIndex: 10,
    backgroundColor: "transparent",
    width: "40px",
    height: "17px",
    textAlign: "center",
    borderRadius: "5px",
    color: "#757575",
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #757575",
    position: "absolute",
    bottom: "15px",
  },
};
