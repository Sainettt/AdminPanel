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
    //???
    if (admin.password !== password || admin.userName !== userName) {
        throw new Error('Login failed. Please try again');
    }
    //не забыть перед отправкой захегировать пароль
    return admin;
}