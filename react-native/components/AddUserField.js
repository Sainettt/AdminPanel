import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/mainStyles'

const AddUserField = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.containerAddUserField}>
      <Text style={styles.textAddUserField}>{label}</Text>
      <View style={styles.containerAddUserFieldInput}>
        <TextInput
          style={styles.inputAddUserField}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}
export default AddUserField
