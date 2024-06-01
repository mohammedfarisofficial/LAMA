//button
const buttonBaseStyle = {
  padding: "10px 22px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  margin: ".5rem",
  fontSize: "14px",
};
const buttonVariants = {
  primary: {
    ...buttonBaseStyle,
    backgroundColor: "#7f23cf",
    color: "white",
  },
  secondary: {
    ...buttonBaseStyle,
    backgroundColor: "#6c757d",
    color: "white",
  },
  success: {
    ...buttonBaseStyle,
    backgroundColor: "#28a745",
    color: "white",
  },
  dark: {
    ...buttonBaseStyle,
    backgroundColor: "black",
    color: "white",
  },
  cancel: {
    ...buttonBaseStyle,
    backgroundColor: "transparent",
    color: "#dc3545",
  },
  action: {
    padding: "8px 18px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    margin: ".5rem",
    fontSize: "14px",
    backgroundColor: "#4a4a4a",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "400",
  },
};

// model
const modelVariants = {
  open: { opacity: 1, scale: 1, pointerEvents: "all" },
  closed: { opacity: 0, scale: 0.7, pointerEvents: "none" },
};
const bgVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0 },
};
//sidebar
const sidebarVariants = {
  open: { width: "20%" },
  closed: { width: "4%" },
};
const sidebarTextVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0, display: "none" },
};

// for framer motion
export { modelVariants, bgVariants, sidebarVariants, sidebarTextVariants };
// custom variants
export { buttonVariants, buttonBaseStyle };
