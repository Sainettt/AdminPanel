import express from 'express'
import * as userController from '../controllers/userController.js'


const userRouter = express.Router()
userRouter.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

userRouter.route('/:id')
.put(userController.editUser)
.delete(userController.deleteUser)

userRouter.post('/:id/worklogs', userController.createUserWorkLogById)
userRouter.get('/:id/worklogs', userController.getUserWorkLogsById)

export default userRouter

