import * as userService from '../services/userService.js'
import { HttpStatus } from '../constants/STATUS.js'

const { OK, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } = HttpStatus

export const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body
    const newUser = await userService.createUser({ userName, email, password })
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
export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id)
    res.status(OK).json(user)
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(NOT_FOUND).json({ message: error.message })
    } else {
      console.error('Error fetching user:', error)
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' })
    }
  }
}
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.status(OK).json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
  }
}
export const editUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body
    /* tut pizda */
    const editedUser = await userService.editUser(req.params.id, {
      userName,
      email,
      password,
    })
    /* tut pizda */
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
