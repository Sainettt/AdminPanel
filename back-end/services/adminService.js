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
    const {email, password} = data
    const admin = await Admin.getByEmail(email);
    //???
    if (admin.password !== password) {
        throw new Error('Invalid password');
    }
    //не забыть перед отправкой захегировать пароль
    return admin;
}