import React from 'react';
import {useFonts} from 'expo-font';
import {AuthProvider} from './context/AuthContext';
import RootNavigator from './navigators/RootNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
  'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'Poppins-SemiBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
})
  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
