import api from './axiosInstance'

export const getAllUsers = async () => {
  try {
    const response = await api.get('/user')
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'Internal server error') {
      throw new Error('Internal server error')
    } else {
      throw new Error('Error fetching users')
    }
  }
}
export const showUserWorkLogs = async (userId) => {
  try {
    const response = await api.get(`/user/${userId}/worklogs`)
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'Error getting work logs') {
      throw new Error('Error getting work logs')
    } else throw new Error('Failed to fetch user work logs')
  }
}
export const getUserSensitiveInfo = async (userId) => {
  try {
    const response = await api.get(`/user/${userId}`)
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'User not found') {
      throw new Error('Failed getting user info')
    } else throw new Error('User not found')
  }
}
export const editUserSensitiveInfo = async (userId, userData) => {
  try {
    const response = await api.put(`/user/${userId}`, userData)
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'Password cannot be the same as the old password')
      throw new Error('Password cannot be the same as the old password')
    else throw new Error('Failed editing user')
  }
}
export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`/user/${userId}`)
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'User not found') throw new Error('User not found')
    else throw new Error('Failed deleting user')
  }
}
