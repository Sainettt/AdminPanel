import api from './axiosInstance'

export const getAllUsers = async () => {
    try {
        const response = await api.get('/user')
        return response.data
    } catch (error) {
        const message = error.response?.data?.message
        if (message === 'Internal server error') {
            throw new Error('Internal server error')
        } else {
            throw new Error('Error fetching users')
        }
    }
}