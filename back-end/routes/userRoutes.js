import express from 'express'
import * as userController from '../controllers/userController.js'
import { authenticateToken } from '../utils/authenticateToken.js'

const userRouter = express.Router()

// userRouter.use(authenticateToken)
userRouter.route('/')

.get(userController.getAllUsers)
.post(userController.createUser)

userRouter.route('/:id')
.get(userController.getUser)
.put(userController.editUser)
.delete(userController.deleteUser)

userRouter.post('/:id/worklogs', userController.createUserWorkLogById)
userRouter.get('/:id/worklogs', userController.getUserWorkLogsById)

export default userRouter

