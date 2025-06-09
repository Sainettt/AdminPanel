import React, { createContext, useEffect, useState } from 'react'
import { deleteToken, getToken } from '../utils/tokenStorage'
import api from '../src/api/axiosInstance'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await getToken()
        if (token) login()
      } catch (error) {
        console.error('Error checking token:', error)
      }
      setLoading(false)
    }
    checkToken()
  }, [])

  const login = () => setIsLoggedIn(true)
  const logout = () => {
    setIsLoggedIn(false)
    deleteToken()
  }

  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          logout()
        }
        return Promise.reject(error)
      }
    )

    return () => {
      api.interceptors.response.eject(responseInterceptor)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
