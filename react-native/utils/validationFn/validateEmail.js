export const isValidEmail = (email) => {
  return /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)
}