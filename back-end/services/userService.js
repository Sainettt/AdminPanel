
import User from '../models/User.js';

export const createUser = async (data) => {
    try {
        const { userName, email, password } = data;
        if (!userName || !email || !password) {
            throw new Error('All fields are required');
        }
        if (await User.isEmailExists(email)) {
            throw new Error('Email already exists');
        }

        const newUser = await User.create({ userName, email, password });
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

export const getUserById = async (id) => {
    try {
        const user = await User.getById(id);
        return user;
    } catch (error) {
        console.error('Error getting user by ID:', error);
        throw error;
    }
}
export const getAllUsers = async () => {
    try {
        const users = await User.getAll();
        return users;
    } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
    }
}
export const editUser = async (id, data) => {
    try {
        const editedUser = await User.edit(id, data);
        return editedUser;
    } catch (error) {
        console.error('Error editing user:', error);
        throw error;
    }
}
export const deleteUser = async (id) => {
    try {
        const deletedUser = await User.delete(id);
        return deletedUser;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}