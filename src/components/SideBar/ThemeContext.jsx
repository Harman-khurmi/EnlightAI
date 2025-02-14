import React, { createContext, useState, useContext } from "react";

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme state ("light" or "dark")
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy context consumption
export const useTheme = () => useContext(ThemeContext);
