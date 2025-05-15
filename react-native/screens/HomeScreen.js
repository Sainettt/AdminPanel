import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/authStyles'
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.textWelcome}>Welcome to Staff Hours</Text>

        <View style={styles.buttonLoginBorder}>
          <TouchableOpacity style={styles.authSubmitButtonClickableArea} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRegisterBorder}>
          <TouchableOpacity style={styles.authSubmitButtonClickableArea} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomInfo}>
        <Text style={styles.textBottomInfo}>Welcome to StaffHours app</Text>
      </View>
    </View>
  )
}
export default HomeScreen