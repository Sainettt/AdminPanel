import User from '../models/User.js'

const validateUserData = ({ userName, email, password }) => {
  if (!userName || !email || !password) {
    throw new Error('All fields are required')
  }
}

export const createUser = async (data) => {
  validateUserData(data)

  if (await User.isEmailExists(data.email)) {
    throw new Error('Email already exists')
  }

  return await User.create(data)
}

export const getUserById = (id) => User.getById(id)

export const getAllUsers = () => User.getAll()

export const editUser = async (id, data) => {
  const currentPassword = await User.getPasswordById(id)

  if (data.password === currentPassword) {
    throw new Error('Password cannot be the same as the old password')
  }

  const editedUser = await User.edit(id, data)

  return editedUser
}
export const deleteUser = (id) => User.delete(id)
