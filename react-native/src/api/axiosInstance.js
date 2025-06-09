import axios from 'axios'
import { getToken, TOKEN_KEY } from '../../utils/tokenStorage'
import API_URL from '../../constans/API_URL'

const api = axios.create({
  baseURL: API_URL,
  timeout: 7000,
  headers: {
    'Content-Type': 'application/json',
  },
})
api.interceptors.request.use(
  async (config) => {
    const token = await getToken(TOKEN_KEY)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default api