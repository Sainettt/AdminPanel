import React, {useState, useContext} from 'react'
import { Keyboard, View, TouchableWithoutFeedback, KeyboardAvoidingView, Platform} from 'react-native'
import AuthField from '../components/AuthFields'
import { styles } from '../styles/authStyles'
import AuthSubmitButton from '../components/AuthSubmitButton'
import { registerAdmin } from '../src/api/adminApi'
import { saveToken } from '../utils/tokenStorage'
import { AuthContext } from '../context/AuthContext'
import { isValidEmail } from '../utils/validateEmail'

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const {login} = useContext(AuthContext)
  
  const handleRegister = async () => {
    if (!userName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return; 
    }
    
    try {

      const {token} = await registerAdmin(userName, email, password)
      await saveToken(token)
      login()

    } catch (error) {
      if (error.message === 'Email already exists') {
        alert('Email already exists')
      } else {
        alert('An unexpected error occurred. Please try again later.')
      }
    }
  }

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ ...styles.authContainer, height: 470, marginTop: 120 }}>
          <View>
            <View style={{ marginTop: 40 }}>
              <AuthField label="UserName" value={userName} onChangeText={setUserName}/>
            </View>            
            <AuthField label="Email" value={email} onChangeText={setEmail} />
            <AuthField label="Password" value={password} onChangeText={setPassword} secureTextEntry={true}/>
            <AuthField label="Confirm Password" value={confirmPassword} onChangeText={setconfirmPassword} secureTextEntry={true}/>
          </View>
          <AuthSubmitButton onPress={handleRegister}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  )
}
export default RegisterScreen