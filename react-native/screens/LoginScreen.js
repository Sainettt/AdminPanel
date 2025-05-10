import React, {useState} from 'react'
import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native'
import { styles } from '../styles/authStyles'
import AuthField from '../components/AuthFields'
const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ ...styles.loginRegisterContainer, height: 430 }}>
          <View>
            <AuthField label="UserName" value={userName} onChangeText={setUserName} />
            <AuthField label="Email" value={email} onChangeText={setEmail} />
            <AuthField label="Password" value={password} onChangeText={setPassword} secureTextEntry={true}/>
            <AuthField label="Confirm Password" value={confirmPassword} onChangeText={setconfirmPassword} secureTextEntry={true}/>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  )
}
export default LoginScreen
