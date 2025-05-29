import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import AddUserScreen from '../screens/AddUserScreen';
import EditUserSensitiveInfoScreen from '../screens/EditUserSensitiveInfoScreen';
import UserWorkLogsScreen from '../screens/UserWorkLogsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName='UserList'>
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="AddUser" component={AddUserScreen} />
      <Stack.Screen name="EditSensitiveInfo" component={EditUserSensitiveInfoScreen} />
      <Stack.Screen name="UserWorkLogs" component={UserWorkLogsScreen} />
    </Stack.Navigator>
  );
}
