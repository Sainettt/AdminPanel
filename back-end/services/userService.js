import User from '../models/User.js';

export const createUser = async (data) => {
    try {
        const { userName, email, password } = data;
        const newUser = await User.create({ userName, email, password });
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}