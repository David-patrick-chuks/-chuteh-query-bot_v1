"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var styles = {
  chatbot: {
    position: "fixed",
    zIndex: 1000
  },
  "bottom-left": {
    bottom: "20px",
    left: "20px"
  },
  "bottom-right": {
    bottom: "20px",
    right: "20px"
  },
  chatIcon: {
    cursor: "pointer",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#ff9800",
    // Brand color
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#fb8c00" // Darker shade on hover
    }
  },
  chatWindow: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    width: "350px",
    maxHeight: "450px",
    overflowY: "auto",
    position: "absolute",
    bottom: "70px",
    right: "0",
    margin: "0 auto",
    padding: "10px",
    fontFamily: "'Arial', sans-serif",
    animation: "fadeIn 0.3s"
  },
  chatHistory: {
    padding: "10px",
    fontSize: "15px",
    maxHeight: "350px",
    // Limit the height for better scrolling experience
    overflowY: "auto"
  },
  message: {
    user: {
      textAlign: "right",
      margin: "10px 0",
      padding: "8px 12px",
      backgroundColor: "#d0eaff",
      borderRadius: "15px",
      display: "inline-block",
      maxWidth: "80%",
      color: "#003366",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
    },
    bot: {
      textAlign: "left",
      margin: "10px 0",
      padding: "8px 12px",
      backgroundColor: "#e6ffe6",
      borderRadius: "15px",
      display: "inline-block",
      maxWidth: "80%",
      color: "#336600",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
    }
  },
  loadMoreContainer: {
    textAlign: "center",
    padding: "10px",
    fontWeight: "bold"
  },
  loadingSpinner: {
    border: "4px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    borderTop: "4px solid #3498db",
    width: "24px",
    height: "24px",
    animation: "spin 1s linear infinite",
    margin: "0 auto"
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "10px",
    fontWeight: "bold"
  },
  inputContainer: {
    display: "flex",
    marginTop: "10px",
    borderTop: "1px solid #ccc",
    paddingTop: "10px"
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginRight: "5px",
    fontSize: "14px",
    transition: "border-color 0.3s ease",
    "&:focus": {
      borderColor: "#ff9800",
      // Focus color
      outline: "none"
    }
  },
  sendButtonHover: {
    backgroundColor: "#fb8c00" // Darker shade on hover
  },
  sendButton: {
    backgroundColor: "#ff9800",
    // Brand color
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "10px 15px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s",
    "&:hover": {
      backgroundColor: "#fb8c00",
      // Darker shade on hover
      transform: "scale(1.05)" // Slightly enlarge on hover
    },
    "&:active": {
      transform: "scale(0.95)" // Slightly shrink on click
    }
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  }
};
var _default = exports["default"] = styles;