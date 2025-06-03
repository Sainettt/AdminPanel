import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  
} from 'react-native'
import { styles } from '../styles/mainStyles'
import UserEdit from '../components/UserEdit'
import NavigatePanel from '../components/NavigatePanel'
import { getUserSensitiveInfo, editUserSensitiveInfo } from '../src/api/userApi'
import {isValidEmail } from '../utils/validateEmail'

const EditUserSensitiveInfoScreen = ({ navigation, route }) => {
  const [user, setUser] = useState({
    id: '',
    userName: '',
    email: '',
    role: '',
    password: '',
  })
  const { id } = route.params
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserSensitiveInfo(id)
        console.log(response)
        setUser({
          id: response.id || '',
          userName: response.userName || '',
          email: response.email || '',
          role: response.role || '',
          password: response.password || '',
        })
      } catch {
        throw new Error('Failed to get user')
      }
    }
    fetchUser()
  }, [])
  console.log(user)
  const handleSaveInfo = async (id, data) => {
    try {
      if (isValidEmail(data.email) === false) {
        alert('Invalid email format')
        return
      }
      const response = await editUserSensitiveInfo(id, data)
      navigation.navigate('UserList')
      return response
    } catch {
      alert('Failed to edit user')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.containerUserListScreen}>
        <View style={styles.containerNameScreen}>
          <Text style={styles.textNameScreen}>Edit</Text>
        </View>
        <View style={styles.containerEditUser}>
          <UserEdit
            text="user name"
            editText={user.userName}
            onChangeText={(newText) => setUser({ ...user, userName: newText })}
          />
          <UserEdit
            text="email"
            editText={user.email}
            onChangeText={(newText) => setUser({ ...user, email: newText })}
          />
          <UserEdit
            text="role"
            editText={user.role}
            onChangeText={(newText) => setUser({ ...user, role: newText })}
          />
          <UserEdit
            text="password"
            editText={user.password}
            onChangeText={(newText) => setUser({ ...user, password: newText })}
          />
          <TouchableOpacity
            onPress={() => {
              const { id, ...userData } = user
              handleSaveInfo(id, userData)
            }}
          >
            <View style={styles.containerSaveButton}>
              <Text style={styles.textSaveButton}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
        <NavigatePanel
          onPressList={() => {
            navigation.navigate('UserList')
          }}
          onPressAdd={() => {
            navigation.navigate('AddUser')
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
export default EditUserSensitiveInfoScreen
