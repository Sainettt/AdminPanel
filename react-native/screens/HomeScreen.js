import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/loginRegisterStyles'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginRegisterContainer}>
        <Text style={styles.textWelcome}>Welcome to Staff Hours</Text>

        <View style={styles.buttonLoginBorder}>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonRegisterBorder}>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.btn}>Register</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}
export default HomeScreen
