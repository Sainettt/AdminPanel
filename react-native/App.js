import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useFonts } from 'expo-font'
import { AuthProvider } from './context/AuthContext'
import RootNavigator from './navigators/RootNavigator'
import { registerForPushNotificationsAsync } from './utils/notifications'
import Toast from 'react-native-toast-message'
import LoadingView from './components/LoadingView'
import { showToast } from './utils/toastMessage'

export default function App() {
  const [loading, setLoading] = useState(false)

  const [fontsLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  })

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true)
        await registerForPushNotificationsAsync()
      } catch (error) {
        showToast('error', 'Failed to load fonts or register for notifications')
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
      <Toast />
      <LoadingView loading={loading} />
    </View>
  )
}
