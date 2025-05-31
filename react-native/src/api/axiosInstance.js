import axios from 'axios'
import { getToken, TOKEN_KEY } from '../../utils/tokenStorage'

let logout = null
const setLogout = (cb) => {
  logout = cb
}

const api = axios.create({
  baseURL: 'http://192.168.0.227:3000/api',
  timeout: 5000,
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
  (error) => {
    if (error.response?.status === 401) {
      logout?.()
    }
    return Promise.reject(error)
  }
)

export default { ...api, setLogout }