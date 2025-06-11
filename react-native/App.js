import React, {useEffect} from 'react'
import { View } from 'react-native'
import { useFonts } from 'expo-font'
import { AuthProvider } from './context/AuthContext'
import RootNavigator from './navigators/RootNavigator'
import { registerForPushNotificationsAsync } from './utils/notifications'
import Toast from 'react-native-toast-message'

/**
 * Main application component.
 */

export default function App() {

  useEffect(() => {
    registerForPushNotificationsAsync()
  }, [])

  const [fontsLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1 }}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
      <Toast />
    </View>
  )
}
