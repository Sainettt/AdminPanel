import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

/**
 * 
 * 
 * This file contains functions related to push notifications in a React Native application.
 * It includes the registration for push notifications and the setup of notification channels for Android.
 * The `showNotification` function is used to display a notification with a title and body.
 * 
 * Usage:
 * - Call `registerForPushNotificationsAsync()` to register the app for push notifications.
 * - Call `showNotification()` to display a notification.
 **/

export async function registerForPushNotificationsAsync() {

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  })

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Permission for notifications not granted!');
    return;
  }
}

  export async function showNotification(userName) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Success!',
      body: `You've been successfully authenticated, ${userName} 👏`,
    },
    trigger: {seconds: 1},
  });
}