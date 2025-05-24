import User from '../models/User.js'
import WorkLog from '../models/WorkLog.js';
import { isEmailExist } from '../utils/isEmailExist.js';
import { validateData } from '../utils/validateData.js';


export const createUser = async (data) => {
  validateData(data)

  if (await isEmailExist(data.email)) {
    throw new Error('Email already exists')
  }

  return await User.create(data)
}
export const createUserWorkLogById = async (userId, data) => {
  const { date, startTime, endTime} = data
  if (!date || !startTime || !endTime) {
    throw new Error('All fields are required')
  }
  return await WorkLog.create(userId, data)
}

export const getUserWorkLogsById = async (id) => {
  const userWorkLogs = await WorkLog.getByUserId(id)
  
  return { userWorkLogs: userWorkLogs.map(log => ({
    userId: log.userId,
    date: log.date,
    startTime: log.startTime,
    endTime: log.endTime,
    hoursWorked: log.hoursWorked
  }))
}
}

export const getAllUsers = async () => {
  const users = await User.getAll()

  return {users : users.map(user => ({
    userId: user.id,
    userName: user.userName,
    role: user.role
  }))}
}
export const getUser = (id) => User.getUser(id)


export const editUser = async (id, data) => {
  const currentPassword = await User.getPasswordById(id)

  if (data.password === currentPassword) {
    throw new Error('Password cannot be the same as the old password')
  }

  const editedUser = await User.edit(id, data)

  return editedUser
}
export const deleteUser = (id) => User.delete(id)
