import React, { useState, useContext } from 'react'
import {
  Keyboard,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native'
import AuthField from '../../components/AuthFields'
import { styles } from '../../styles/authStyles'
import AuthSubmitButton from '../../components/AuthSubmitButton'
import AuthAskText from '../../components/AuthAskText'
import { registerAdmin } from '../../src/api/adminApi'
import { saveToken } from '../../utils/tokenStorage'
import { AuthContext } from '../../context/AuthContext'
import { isValidateInfo } from '../../utils/validationFn/validateRegister'
import { showNotification } from '../../utils/notifications'
import { showToast } from '../../utils/toastMessage'

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useContext(AuthContext)

  const handleRegister = async () => {
    if (!isValidateInfo(userName, email, password, confirmPassword)) return

    try {
      setLoading(true)
      const { token } = await registerAdmin(userName, email, password)
      await saveToken(token)
      login()
      await showNotification(userName)
    } catch (error) {
      if (error.message === 'Email already exists') {
        showToast('error', 'Email already exists')
      } else {
        showToast(
          'error',
          'An unexpected error occurred. Please try again later.'
        )
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.authContainer}>
            <View style={{ marginTop: 160 }}>
              <AuthField
                label="user name"
                value={userName}
                onChangeText={setUserName}
              />
            </View>
            <AuthField label="email" value={email} onChangeText={setEmail} />
            <AuthField
              label="password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <AuthField
              label="confirm password"
              value={confirmPassword}
              onChangeText={setconfirmPassword}
              secureTextEntry={true}
            />
            <AuthSubmitButton onPress={handleRegister} text="Sign In" />
            <AuthAskText
              onPress={() => {
                navigation.navigate('Login')
              }}
              mainText="Already have an account?"
              buttonText="Log In"
            />
          </View>

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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
export default RegisterScreen
