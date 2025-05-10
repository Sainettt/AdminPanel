import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from 'expo-font';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import UserListScreen from './screens/UserListScreen';
import AddUserScreen from './screens/AddUserScreen';
import EditUserSensitiveInfoScreen from './screens/EditUserSensitiveInfoScreen';
import UserWorkLogsScreen from './screens/UserWorkLogsScreen';

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
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
        <Stack.Screen name="EditSensitiveInfo" component={EditUserSensitiveInfoScreen}/>
        <Stack.Screen name ="UserWorkLogs" component={UserWorkLogsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
