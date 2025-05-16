import React, { createContext, useState } from 'react';
import { deleteToken } from '../utils/tokenStorage';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = () => setisLoggedIn(true);
  const logout = () => {
    setisLoggedIn(false);
    deleteToken();
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
