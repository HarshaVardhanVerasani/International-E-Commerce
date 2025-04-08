const styles = {
  accordionContainer: {
    borderBottom: "1px solid #E0E0E0",
    py: 2,
  },
  accordionHeader: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    gap: 2,
    py: 1,
  },
  accordionTitle: {
    fontSize: "22px",
    color: "#333",
    fontWeight: 500,
  },
  accordionIcon: {
    color: "#9B815A",
    fontSize: 35,
  },
  accordionContent: {
    pt: 1,
    pb: 2,
  },
  bulletContainer: {
    display: "flex",
    alignItems: "flex-start",
    mb: 1.5,
  },
  bulletPoint: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    bgcolor: "#9B815A",
    mt: 1,
    mr: 2,
  },
  bulletText: {
    color: "#555",
  },
  productDetailsContainer: {
    fontFamily: "'Serif', serif",
    mt: 4,
    maxWidth: "1200px",
    mx: "auto",
    px: 2,
  },
  productLayout: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: { md: 8 },
    mb: 6,
  },
  productDescriptionColumn: {
    flex: 1,
    mb: { xs: 4, md: 0 },
  },
  productTitle: {
    fontSize: { xs: "28px", md: "36px" },
    fontWeight: 400,
    mb: 3,
    color: "#333",
    lineHeight: 1.3,
  },
  productDescription: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#555",
    mb: 4,
  },
  detailsColumn: {
    flex: 1,
  },
  bodyText: {
    color: "#555",
  },

  sectionTitle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#111",
    mt: 3,
    mb: 2,
  },
  countryName: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#333",
    mt: 2,
  },
  deliveryInfo: {
    fontSize: "16px",
    color: "#555",
    mt: 0.5,
  },
  divider: {
    mt: 1.5,
  },
  link: {
    color: "#9B815A",
    textDecoration: "underline",
    cursor: "pointer",
    fontWeight: 400,
    fontSize: "16px",
    mt: 1,
    display: "inline-block",
  },
  noteText: {
    fontSize: "14px",
    color: "#555",
    mt: 3,
    fontStyle: "italic",
  },
};

export default styles;
