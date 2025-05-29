import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/authStyles'
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogoName}>
        <Image source={require("../assets/images/stfHoursBlueLogo.svg")}/>
        <Text style={styles.textWelcome}>Staff Hours</Text>
      </View>

      <View style={styles.authContainer}>

        <View style={styles.buttonLoginBorder}>
          <TouchableOpacity style={styles.authSubmitButtonClickableArea} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRegisterBorder}>
          <TouchableOpacity style={styles.authSubmitButtonClickableArea} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnText}>Sign Up</Text>
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