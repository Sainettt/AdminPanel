import React, {useState} from 'react'
import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native'
import { styles } from '../styles/authStyles'
import AuthField from '../components/AuthFields'
import AuthSubmitButton from '../components/AuthSubmitButton'
const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ ...styles.authContainer, height: 400, }}>
            <View>
              <View style={{ marginTop: 40 }}>
                <AuthField label="UserName" value={userName} onChangeText={setUserName}/>
              </View>
              <AuthField label="Email" value={email} onChangeText={setEmail} />
              <AuthField label="Password" value={password} onChangeText={setPassword} secureTextEntry={true}/>
            </View>
          <AuthSubmitButton />
        </View>
      </View>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  )
}
export default LoginScreen
