import * as userService from '../services/userService.js'
import { HttpStatus } from '../constants/STATUS.js'

const { OK, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } = HttpStatus

export const createUser = async (req, res) => {
  try{
    const { userName, email, password } = req.body
    const newUser = await userService.createUser({ userName, email, password })
    res.status(OK).json(newUser)
  } catch (error){
    if (error.message === 'All fields are required') {
      res.status(BAD_REQUEST).json({ message: error.message })
    }
    else if (error.message === 'Email already exists') {
      res.status(BAD_REQUEST).json({ message: error.message })
    }
    else {
      console.error('Error creating user:', error)
      res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
  }
}
export const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id)
  res.status(OK).json(user)
}
export const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers()
  res.status(OK).json(users)
}
export const editUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        const editedUser = await userService.editUser(req.params.id, { userName, email, password })
        res.status(OK).json(editedUser)
    } catch(error){
      if (error.message === 'User not found') {
        res.status(NOT_FOUND).json({ message: error.message })
      } else {
        console.error('Error editing user:', error)
        res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
      }
    }
}
export const deleteUser = async (req, res) => {
    console.log('deleteUser')
}
