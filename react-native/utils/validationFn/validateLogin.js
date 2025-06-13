import { isValidEmail } from './validateEmail'
import { isValidPassword } from './validatePassword'
import { showToast } from '../toastMessage'
export const isValidateInfo = (userName, email, password) => {
  if (!userName || !email || !password) {
    showToast('error', 'Please fill in all fields')
    return false
  }
  if (!isValidEmail(email)) {
    showToast('error', 'Please enter a valid email address')
    return false
  }
  if (!isValidPassword(password)) {
      showToast(
        'error',
        'Password must be at least 6 characters long, 1 uppercase letter, 1 lowercase letter, and 1 number'
      )
      return false
    }
  
  return true
}
