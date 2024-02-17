import { Navigate } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial state

  const handleLogin = async (credentials) => {
    // Send login request to API with credentials
    console.log(credentials);
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (response) {
      console.log(credentials);
      setIsLoggedIn(true);
      console.log(setIsLoggedIn);
      // Store additional user data if needed
    } else {
      // Handle login error
      console.log("error in this phase");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(setIsLoggedIn);
    <Navigate to="/login" />
    // Clear any stored user data if needed
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};





