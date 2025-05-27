import React, { createContext, useEffect, useState } from 'react';
import { deleteToken, getToken } from '../utils/tokenStorage';
import api from '../src/api/axiosInstance'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    setLoading(true)
    const checkToken = async () => {
      const token = await getToken()
      if (token) login()
      setLoading(false)
    }
    checkToken()
  }, [])

  const login = () => setisLoggedIn(true);
  const logout = () => {
    setisLoggedIn(false);
    deleteToken();
  };
  useEffect(() => {
    api.setLogout(logout)
  }, [])

  if (loading) return null
  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};
