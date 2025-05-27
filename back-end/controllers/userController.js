import * as userService from '../services/userService.js'
import { HttpStatus } from '../constants/STATUS.js'

const { OK, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } = HttpStatus

export const createUser = async (req, res) => {
  try {
    const { userName, email, role, password } = req.body
    const newUser = await userService.createUser({ userName, email, role, password })
    res.status(OK).json(newUser)
  } catch (error) {
    if (error.message === 'Email already exists') {
      res.status(BAD_REQUEST).json({ message: error.message })
    } else {
      console.error('Error creating user:', error)
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' })
    }
  }
}
export const createUserWorkLogById = async (req, res) => {
  const { date, startTime, endTime, hours } = req.body
  const userId = req.params.id
  try {
    const newWorkLog = await userService.createUserWorkLogById(userId, {date, startTime, endTime, hours})
    res.status(OK).json(newWorkLog)
} catch (error) {
    if(error.message === 'All fields are required') {
      console.error('Error creating work log:', error)
      res.status(BAD_REQUEST).json({ message: error.message })
    } else {
      console.error('Error creating work log:', error)
      res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
  }
}
export const getUserWorkLogsById = async (req, res) => {
  try {
    const user = await userService.getUserWorkLogsById(req.params.id)
    res.status(OK).json(user)
  } catch (error) {
    console.error('Error getting work logs:', error)
    res.status(INTERNAL_SERVER_ERROR).json({message: 'Error getting work logs'})
  }
}
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    console.log(users)
    res.status(OK).json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
  }
}
export const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id)
    res.status(OK).json(user)
  } catch (error) {
    console.log('Error getting user:', error)
    res.status(INTERNAL_SERVER_ERROR).json({message : 'User not found'})
  }
}
export const editUser = async (req, res) => {
  try {
    const { userName, email, role, password } = req.body
    
    const editedUser = await userService.editUser(req.params.id, {
      userName,
      email,
      role,
      password,
    })
    
    res.status(OK).json(editedUser)
  } catch (error) {
    if (error.message === 'Password cannot be the same as the old password') {
      res.status(BAD_REQUEST).json({ message: error.message })
    } else if (error.message === 'User not found') {
      res.status(NOT_FOUND).json({ message: error.message })
    } else {
      console.error('Error editing user:', error)
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' })
    }
  }
}
export const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id)
    res.status(OK).json(user)
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(NOT_FOUND).json({ message: error.message })
    } else {
      console.error('Error deleting user:', error)
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' })
    }
  }
}
