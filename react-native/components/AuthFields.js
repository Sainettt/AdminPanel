import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/authStyles'

const AuthField = ({ label, value, onChangeText, secureTextEntry = false }) => {
  return (
    <View style={styles.containerAuthField}>
      <Text style={styles.labelAuthProperty}>{label}</Text>
      <View style={styles.borderAuthField}>
        <TextInput
          style={styles.inputAuthField}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  )
}
export default AuthField