import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'
import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigator'

const RootNavigator = () => {
  const { isLoggedIn, loading } = useContext(AuthContext)

  if (loading) return null
  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  )
}
export default RootNavigator
