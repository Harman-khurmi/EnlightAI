import React, { createContext, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Create our own auth context
const AuthContext = createContext();

// Create a provider component that wraps the Auth0 hook
export const AuthProvider = ({ children }) => {
  // Get values from the Auth0 hook
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  // You can also add extra logic here if needed

  return (
    <AuthContext.Provider
      value={{ loginWithRedirect, logout, user, isAuthenticated, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier consumption in components
export const useAuth = () => useContext(AuthContext);
