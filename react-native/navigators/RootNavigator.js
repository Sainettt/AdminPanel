import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'
import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigator'

const RootNavigator = () => {
  const { isLoggedIn, loading } = useContext(AuthContext)
  console.log('isLoggedIn:', isLoggedIn)

  if (loading) return null
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}
export default RootNavigator
