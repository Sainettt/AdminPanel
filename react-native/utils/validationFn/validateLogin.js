import { isValidEmail } from './validateEmail'
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
  
  return true
}
