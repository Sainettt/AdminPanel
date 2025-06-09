import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserListScreen from '../screens/appScreens/UserListScreen'
import AddUserScreen from '../screens/appScreens/AddUserScreen'
import EditUserSensitiveInfoScreen from '../screens/appScreens/EditUserSensitiveInfoScreen'
import UserWorkLogsScreen from '../screens/appScreens/UserWorkLogsScreen'
import AddWorkLogScreen from '../screens/appScreens/AddWorkLogScreen'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="AddUser" component={AddUserScreen} />
      <Stack.Screen
        name="EditSensitiveInfo"
        component={EditUserSensitiveInfoScreen}
      />
      <Stack.Screen name="UserWorkLogs" component={UserWorkLogsScreen} />
      <Stack.Screen name="AddWorkLog" component={AddWorkLogScreen} />
    </Stack.Navigator>
  )
}
