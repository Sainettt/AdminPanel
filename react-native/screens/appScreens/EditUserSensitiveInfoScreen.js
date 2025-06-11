import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native'
import { styles } from '../../styles/mainStyles'
import UserEdit from '../../components/UserEdit'
import NavigatePanel from '../../components/NavigatePanel'
import {
  getUserSensitiveInfo,
  editUserSensitiveInfo,
} from '../../src/api/userApi'
import { isValidateInfo } from '../../utils/validationFn/validateUserInfo'
import { showToast } from '../../utils/toastMessage'

const EditUserSensitiveInfoScreen = ({ navigation, route }) => {
  const [user, setUser] = useState({
    id: '',
    userName: '',
    email: '',
    role: '',
    password: '',
  })
  const { id } = route.params
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await getUserSensitiveInfo(id)
        setUser({
          id: response.id || '',
          userName: response.userName || '',
          email: response.email || '',
          role: response.role || '',
          password: response.password || '',
        })
      } catch {
        showToast('error', 'Failed to fetch user information')
        navigation.navigate('UserList')
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  const handleSaveInfo = async (id, data) => {
    const { userName, email, role, password } = data
    try {
      setLoading(true)
      if (!isValidateInfo(userName, email, password, role)) return
      const response = await editUserSensitiveInfo(id, data)
      navigation.navigate('UserList')
      return response
    } catch {
      showToast('error', 'Failed to edit user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{flex: 1}}>

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
            disabled={loading}
            onPress={async () => {
              const { id, ...userData } = user
              await handleSaveInfo(id, userData)
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
    {loading && (
      <View
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <ActivityIndicator size="large" color="#4E73DF" />
      </View>
    )}
  </View>
)
}
export default EditUserSensitiveInfoScreen
