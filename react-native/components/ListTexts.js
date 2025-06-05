import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/mainStyles'

const ListTexts = ({firstValue, secondValue, thirdValue}) => {
  return (
    <View style={{ flexDirection: 'row', paddingTop: 30 }}>
      <Text style={{ ...styles.textsUserLists, marginStart: 0 }}>{firstValue}</Text>
      <Text style={styles.textsUserLists}>{secondValue}</Text>
      <Text style={styles.textsUserLists}>{thirdValue}</Text>
    </View>
  )
}
export default ListTexts