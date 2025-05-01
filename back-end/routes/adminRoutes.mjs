import express from 'express'
import * as adminController from '../controllers/adminController.mjs'

const adminRouter = express.Router()
adminRouter
.post('/login', adminController.loginAdmin)
.post('/register', adminController.registerAdmin)

  export default adminRouter
