import api from './axiosInstance'

export const getAllUsers = async () => {
  try {
    const response = await api.get('/user')
    console.log(`Fetched users: `, response.data)
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
    console.log(`Fetched work logs: `, response.data)
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
    console.log(`Fetched user info: `, response.data)
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'User not found') {
      throw new Error('Failed getting user info')
    } else throw new Error('User not found')
  }
}
export const createUser = async (userData) => {
  try {
    const response = await api.post('/user', userData)
    console.log(`Created user: `, response.data)
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'User already exists') {
      throw new Error('User already exists')
    } else {
      throw new Error('Failed creating user')
    }
  }
}
export const editUserSensitiveInfo = async (userId, userData) => {
  try {
    const response = await api.put(`/user/${userId}`, userData)
    console.log(`Updated user: `, response.data)
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
    console.log(`Deleted user: `, response.data)
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'User not found') throw new Error('User not found')
    else throw new Error('Failed deleting user')
  }
}
export const getUserWorkLogs = async (userId) => {
  try {
    const response = await api.get(`/user/${userId}/worklogs`)
    console.log(`Fetched user work logs: `, response.data)
    return response.data
  } catch (error) {
    const message = error.response?.data?.message
    if (message === 'Error getting work logs') {
      throw new Error('Error getting work logs')
    } else {
      throw new Error('Failed to fetch user work logs')
    }
  }
}
export const createWorkLog = async (userId, workLogData) => {
  try {
    const response = await api.post(`/user/${userId}/worklogs`, workLogData)
    console.log(`Created work log: `, response.data)
    return response.data
  } catch {
    throw new Error('Failed to create work log')
  }
}
