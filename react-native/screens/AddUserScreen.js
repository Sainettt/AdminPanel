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

const AddUserScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleAddUser = async () => {
    try {
      if (password !== confirmPassword) {
        alert('Passwords do not match')
        return
      }
      const response = await createUser({
        userName,
        email,
        role,
        password,
      })
      navigation.navigate('UserList')
      console.log('User created successfully:', response)
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
          <AddUserField
            label="user name"
            value={userName}
            onChangeText={setUserName}
          />
          <AddUserField label="email" value={email} onChangeText={setEmail} />
          <AddUserField label="role" value={role} onChangeText={setRole} />
          <AddUserField
            label="password"
            value={password}
            onChangeText={setPassword}
          />
          <AddUserField
            label="confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={handleAddUser}>
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
