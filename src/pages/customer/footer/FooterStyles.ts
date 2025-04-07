export const footerStyles = {
  root: {
    bgcolor: "#0A2E1A",
    color: "white",
    py: 6,
    px: 2,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    mb: 4,
  },
  logoText: {
    fontFamily: "'Playfair Display', serif",
    color: "#D4B88C",
  },
  sectionTitle: isMobile => ({
    mb: 2,
    fontWeight: "bold",
    fontSize: isMobile ? "0.9rem" : "1rem",
  }),
  linkText: isMobile => ({
    mb: 1,
    fontSize: isMobile ? "0.8rem" : "14px",
  }),
  linkStyle: {
    color: "#A9A9A9",
    textDecoration: "none",
  },
  moreLinkStyle: {
    color: "#A9A9A9",
    textDecoration: "none",
    fontSize: "12px",
  },
  divider: {
    my: 4,
    bgcolor: "rgba(255,255,255,0.1)",
  },
  paymentBox: {
    bgcolor: "white",
    borderRadius: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 15,
    m: 0.5,
  },
  socialContainer: isMobile => ({
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-end",
  }),
  socialTitle: {
    mb: 1,
  },
  iconButton: {
    color: "white",
  },
};
