export const validateDataUser = ({ userName, email, role, password }) => {
    if (!userName || !email || !role || !password) {
      throw new Error('All fields are required')
    }
  }