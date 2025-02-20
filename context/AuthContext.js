"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await axios.post("https://pulsepost-1-backend.onrender.com/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (username, email, password) => {
    try {
      await axios.post("https://pulsepost-1-backend.onrender.com/api/auth/register", { username, email, password });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
