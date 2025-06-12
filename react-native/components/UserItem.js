import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/mainStyles'

const UserItem = ({ user, onShow, onEdit, onDelete }) => {
  const { userName, role } = user
  return (
    <View style={styles.containerUserComponent}>
      <View style={styles.wrapperName}>
        <Text style={styles.nameText}>{userName}</Text>
      </View>

      <View style={styles.wrapperRole}>
        <Text style={styles.roleText}>{role}</Text>
      </View>

      <View style={styles.containerUserFunctions}>
        <TouchableOpacity onPress={onShow}>
          <Image source={require('../assets/images/workLogsLogo.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit}>
          <Image
            source={require('../assets/images/editUserLogo.png')}
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Image source={require('../assets/images/deleteUserLogo.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default React.memo(UserItem)