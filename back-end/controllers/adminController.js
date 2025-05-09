import * as adminService from '../services/adminService.js'
import { HttpStatus } from '../constants/STATUS.js'
export const loginAdmin = async (req, res) => {
    try {
        const {userName, email, password} = req.body
        const admin = await adminService.loginAdmin({userName, email, password})
        res.status(HttpStatus.OK).json(admin)
    } catch (error){
        if (error.message === 'Login failed. Please try again') {
            res.status(HttpStatus.BAD_REQUEST).json({ message: error.message })
        } else if (error.message === 'Admin not found') {
            res.status(HttpStatus.NOT_FOUND).json({ message: error.message })
        } else {
            console.error('Error logging in admin:', error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
        }
    }
}
export const registerAdmin = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        const newAdmin = await adminService.registerAdmin({ userName, email, password })
        res.status(HttpStatus.OK).json(newAdmin)
    } catch (error){
        if (error.message === 'Email already exists') {
            res.status(HttpStatus.BAD_REQUEST).json({ message: error.message })
        } else {
            console.error('Error creating admin:', error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
        }
    }
}

