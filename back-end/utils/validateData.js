export const validateData = ({ userName, email, password }) => {
    if (!userName || !email || !password) {
      throw new Error('All fields are required')
    }
  }