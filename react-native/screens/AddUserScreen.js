import React, { useState } from 'react'
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { styles } from '../styles/mainStyles'
import AddUserField from '../components/AddUserField'
import NavigatePanel from '../components/NavigatePanel'
import { createUser } from '../src/api/userApi'
import { isValidEmail } from '../utils/validateEmail'

const AddUserScreen = ({ navigation }) => {
  const [newUser, setNewUser] = useState({
    id: '',
    userName: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  })

  const handleAddUser = async () => {
    const { userName, email, role, password, confirmPassword } = newUser
    try {
      if (!userName || !email || !role || !password || !confirmPassword) {
        alert('Please fill in all fields')
        return
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match')
        return
      }
      if (isValidEmail(email) === false) {
        alert('Invalid email format')
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
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.containerUserListScreen}>
        <View style={styles.containerNameScreen}>
          <Text style={styles.textNameScreen}>Edit</Text>
        </View>
        <View style={styles.containerAddScreen}>
          <View style={{marginStart: 35}}>
          <AddUserField
            label="user name"
            value={newUser.userName}
            onChangeText={(text) => setNewUser({ ...newUser, userName: text })}
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
            onChangeText={(text) => setNewUser({ ...newUser, password: text })}
          />
          <AddUserField
            label="confirm password"
            value={newUser.confirmPassword}
            onChangeText={(text) => setNewUser({ ...newUser, confirmPassword: text })}
          />
          </View>
          <TouchableOpacity style={{marginTop: 35, alignSelf: 'center'}} onPress={handleAddUser}>
            <Image source={require('../assets/images/addUserButton.png')} />
          </TouchableOpacity>
        </View>
        <NavigatePanel
          onPressList={() => navigation.navigate('UserList')}
          onPressAdd={() => navigation.navigate('AddUser')}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
export default AddUserScreen
