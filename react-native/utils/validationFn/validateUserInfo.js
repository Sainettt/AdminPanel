import { isValidEmail } from './validateEmail'
import { isValidPassword } from './validatePassword'
import { showToast } from '../toastMessage'
export const isValidateInfo = (userName, email, password, role) => {
  if (!userName || !email || !password || !role) {
    showToast('error', 'Please fill in all fields')
    return false
  }
  if (!isValidEmail(email)) {
    showToast('error', 'Please enter a valid email address')
    return false
  }
  if (!isValidPassword(password)) {
    showToast('error', 'Password must be at least 6 characters long')
    return false
  }
  if (role === '') {
    showToast('error', 'Please select a role')
    return false
  }
  return true
}