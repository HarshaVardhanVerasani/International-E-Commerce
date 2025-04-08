const productDetailsStyles = {
  bodyCont: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  commonCont: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    width: { xs: "100%", md: "90%", lg: "85%" },
    justifyContent: { lg: "space-between" },
  },

  outerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  container: {
    position: "relative",
    width: { xs: "100%", sm: "90%", md: "80%", lg: "65%", xl: "68%" },
    backgroundColor: "#f5f5f5",
    alignSelf: "center",
    height: { xs: "480px", md: "700px", lg: "550px" },
  },

  rightCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    width: { xs: "90%", sm: "90%", md: "80%", lg: "auto" },
    alignSelf: "center",
    mt: { md: 4, lg: 0 },
  },

  gapCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },

  productName: {
    color: "#0f0f0f",
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "sans-serif",
  },

  commonStyle: {
    color: "#424242",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "sans-serif",
  },

  dropdownCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "5px",
  },

  colourText: {
    color: "#757575",
    fontSize: "13px",
    fontWeight: 500,
    fontFamily: "sans-serif",
    marginBottom: "5px",
  },

  heading: {
    color: "#424242",
    fontSize: "25px",
    fontWeight: 500,
    fontFamily: "sans-serif",
  },

  paragraph: {
    color: "#424242",
    fontSize: "15px",
    fontWeight: 500,
    fontFamily: "sans-serif",
    marginTop: "10px",
    lineHeight: "32px",
  },

  rightContTwo: {
    width: { xs: "90%", sm: "90%", md: "80%", lg: "52%" },
    alignSelf: "center",
  },

  iconButton: {
    border: "1px solid #d3d3d3",
    borderRadius: 0,
    padding: "12px",
    color: "#b0967e",
  },

  addToBagButton: {
    backgroundColor: "#2c4633",
    color: "white",
    textTransform: "none",
    fontSize: "16px",
    padding: "12px 16px",
    fontWeight: 500,
    flexGrow: 1,
    maxWidth: "353px",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#213726",
    },
  },
};

export default productDetailsStyles;
