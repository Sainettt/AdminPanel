import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/mainStyles'

const UserListTexts = () => {
  return (
    <View style={{ flexDirection: 'row', paddingTop: 30 }}>
      <Text style={{ ...styles.textsUserLists, marginStart: 0 }}>name</Text>
      <Text style={styles.textsUserLists}>role</Text>
      <Text style={styles.textsUserLists}>options</Text>
    </View>
  )
}
export default UserListTexts