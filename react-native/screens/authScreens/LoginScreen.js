import React, { useState, useContext } from 'react'
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native'
import { styles } from '../../styles/authStyles'
import AuthField from '../../components/AuthFields'
import AuthSubmitButton from '../../components/AuthSubmitButton'
import AuthAskText from '../../components/AuthAskText'
import { loginAdmin } from '../../src/api/adminApi'
import { saveToken } from '../../utils/tokenStorage'
import { AuthContext } from '../../context/AuthContext'
import { showNotification } from '../../utils/notifications'
import { isValidateInfo } from '../../utils/validationFn/validateLogin'
import { showToast } from '../../utils/toastMessage'

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { logout, login } = useContext(AuthContext)

  const handleLogin = async () => {
    if (!isValidateInfo(userName, email, password)) return

    try {
      setLoading(true)
      const { token } = await loginAdmin(userName, email, password)
      await saveToken(token)
      login()
      await showNotification(userName)
    } catch (error) {
      if (error.message === 'Unauthorized. Please check your credentials') {
        logout()
        showToast('error', 'Unauthorized. Please check your credentials')
      } else if (error.message === 'Login failed. Please try again') {
        showToast('error', 'Login failed. Please try again')
      } else if (error.message === 'Admin not found') {
        showToast('error', 'Admin not found')
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

            <AuthSubmitButton onPress={handleLogin} text="Sign In" loading={loading} />
            <AuthAskText
              onPress={() => {
                navigation.navigate('Register')
              }}
              mainText="Don`t have an account?"
              buttonText="Sign Up"
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
export default LoginScreen
