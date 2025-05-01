import express from 'express'
import * as userController from '../controllers/userController.mjs'

const userRouter = express.Router()
userRouter.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

userRouter.route('/:id')
.get(userController.getUserById)
.post(userController.editUser)
.delete(userController.deleteUser)

export default userRouter

