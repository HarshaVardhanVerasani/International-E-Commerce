export const SizeDropdownStyles = {
  container: {
    position: "relative",
    width: "180px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  dropdown: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    border: "1px solid #8a7a7a",
    borderRadius: "2px",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#333",
    height: "44px",
    width: "180px",
    boxSizing: "border-box",
  },
  dropdownText: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#424242",
  },
  arrow: (isOpen: boolean) => ({
    width: "7px",
    height: "7px",
    borderRight: "2px solid #8a7a7a",
    borderBottom: "2px solid #8a7a7a",
    transform: isOpen ? "rotate(-135deg)" : "rotate(45deg)",
    transition: "transform 0.3s",
    marginLeft: "5px",
    color: "#424242",
  }),
  optionsContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    maxHeight: "350px",
    overflowY: "auto",
    backgroundColor: "white",
    border: "1px solid #8a7a7a",
    borderTop: "none",
    zIndex: 10,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  option: (isSelected: boolean) => ({
    padding: "4px 15px",
    cursor: "pointer",
    backgroundColor: isSelected ? "#1976d2" : "transparent",
    color: isSelected ? "white" : "#333",
    "&:hover": {
      backgroundColor: isSelected ? "#1976d2" : "#f5f5f5",
    },
  }),
  optionText: {
    fontSize: "14px",
  },
};
