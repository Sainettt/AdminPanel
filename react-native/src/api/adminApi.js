import api from './axiosInstance'
import { hashPassword } from '../../utils/hashPassword'
import prepareAdminData from '../../utils/prepareAdminData'

export const loginAdmin = async (userName, email, password) => {
  const hashedPassword = hashPassword(password)
  try {
    const response = await api.post(
      '/admin/login',
      prepareAdminData(userName, email, hashedPassword)
    )
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'Login failed. Please try again') {
      throw new Error(message)
    } else if (message === 'Admin not found') {
      throw new Error(message)
    } else if (error.message === '401') {
      throw new Error('Unauthorized. Please check your credentials')
    } else {
      console.error('Error logging in admin:', error)
      throw new Error('Login failed. Please try again')
    }
  }
}

export const registerAdmin = async (userName, email, password) => {
  const hashedPassword = hashPassword(password)
  try {
    const response = await api.post(
      '/admin/register',
      prepareAdminData(userName, email, hashedPassword)
    )
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'Email already exists') {
      throw new Error(message)
    } else {
      console.error('Error creating admin:', error)
      throw new Error('Registration failed. Please try again')
    }
  }
}
