import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/authStyles'

const AuthAskText = ({ onPress, mainText, buttonText }) => {
  return (
    <View style={styles.containerAskText}>
      <Text style={styles.askText}>{mainText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.askTextButton}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default AuthAskText