import React, { useState } from 'react'
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native'
import { styles } from '../../styles/mainStyles'
import AddUserField from '../../components/AddUserField'
import NavigatePanel from '../../components/NavigatePanel'
import { createUser } from '../../src/api/userApi'
import { isValidateInfo } from '../../utils/validationFn/validateUserInfo'
import { showToast } from '../../utils/toastMessage'

const AddUserScreen = ({ navigation }) => {
  const [newUser, setNewUser] = useState({
    id: '',
    userName: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)

  const handleAddUser = async () => {
    const { userName, email, role, password, confirmPassword } = newUser
    try {
      setLoading(true)

      if (!isValidateInfo(userName, email, password, role)) return
      
      if (password !== confirmPassword) {
        showToast('error', 'Passwords do not match')
        return
      }
      await createUser({
        userName,
        email,
        role,
        password,
      })
      navigation.navigate('UserList')
    } catch (error) {
      console.error('Error creating user:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.containerUserListScreen}>
          <View style={styles.containerNameScreen}>
            <Text style={styles.textNameScreen}>Add User</Text>
          </View>
          <View style={styles.containerAddScreen}>
            <View style={{ marginStart: 35 }}>
              <AddUserField
                label="user name"
                value={newUser.userName}
                onChangeText={(text) =>
                  setNewUser({ ...newUser, userName: text })
                }
              />
              <AddUserField
                label="email"
                value={newUser.email}
                onChangeText={(text) => setNewUser({ ...newUser, email: text })}
              />
              <AddUserField
                label="role"
                value={newUser.role}
                onChangeText={(text) => setNewUser({ ...newUser, role: text })}
              />
              <AddUserField
                label="password"
                value={newUser.password}
                onChangeText={(text) =>
                  setNewUser({ ...newUser, password: text })
                }
              />
              <AddUserField
                label="confirm password"
                value={newUser.confirmPassword}
                onChangeText={(text) =>
                  setNewUser({ ...newUser, confirmPassword: text })
                }
              />
            </View>
            <TouchableOpacity
              style={{ marginTop: 35, alignSelf: 'center' }}
              disabled={loading}
              onPress={handleAddUser}
            >
              <Image
                source={require('../../assets/images/addUserButton.png')}
              />
            </TouchableOpacity>
          </View>
          <NavigatePanel
            onPressList={() => navigation.navigate('UserList')}
            onPressAdd={() => navigation.navigate('AddUser')}
          />
        </View>
      </TouchableWithoutFeedback>
        {loading && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
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
export default AddUserScreen
