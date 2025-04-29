import React from 'react'
import {Button, View, Text} from 'react-native'
import {styles} from '../styles/styles'
const HomeScreen = () => {
    return (
       <View>
        <Text>HomeScreen</Text>
        <Button style={styles.btn} title="Login" onPress={() => navigation.navigate('Login')}/>
        <Button style={styles.btn} title="Register" onPress={() => navigation.navigate('Register')}/>
            {/* 
                1. кнопка Login - переходит на экран LoginScreen
                2. кнопка Register - переходит на экран RegisterScreen 
            */}
       </View>
    )
}
export default HomeScreen