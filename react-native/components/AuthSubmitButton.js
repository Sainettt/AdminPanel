import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { styles } from '../styles/authStyles'

const AuthSubmitButton = ({ onPress, text }) => {
  return (
    <View style={styles.authSubmitButton}>
      <TouchableOpacity
        style={styles.authSubmitButtonClickableArea}
        onPress={() => onPress()}
      >
        <Text style={styles.btnAuthText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default AuthSubmitButton