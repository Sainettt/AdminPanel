import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { isEmailExist } from '../utils/isEmailExist.js';
import { validateData } from '../utils/validateData.js';

export const registerAdmin = async (data) => {
    const {email} = data
    validateData(data);

    if (await isEmailExist(email)) {
        throw new Error('Email already exists');
    }

    return await Admin.create(data);
}
export const loginAdmin = async (data) => {
    const {userName, email, password} = data
    const admin = await Admin.getByEmail(email);

    if (admin.password !== password || admin.userName !== userName) {
        throw new Error('Login failed. Please try again');
    }
    const token = jwt.sign({
        id: admin.id,
        email: admin.email,
        userName: admin.userName,
    },
     process.env.JWT_SECRET_KEY,
     {expiresIn: '1h'}
    )
    return {token, admin: {id: admin.id, userName: admin.userName, email: admin.email}}
}