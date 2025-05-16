import React, {useState} from 'react'
import { Keyboard, View, TouchableWithoutFeedback, KeyboardAvoidingView, Platform} from 'react-native'
import AuthField from '../components/AuthFields'
import { styles } from '../styles/authStyles'
import AuthSubmitButton from '../components/AuthSubmitButton'

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  
  const handleRegister = () => {
    
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
          <AuthSubmitButton />
        </View>
      </View>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  )
}
export default RegisterScreen
