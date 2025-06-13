import { isValidateInfo } from '../../utils/validationFn/validateUserInfo'
import { showToast } from '../../utils/toastMessage'
import { isValidEmail } from '../../utils/validationFn/validateEmail'
import { isValidPassword } from '../../utils/validationFn/validatePassword'

jest.mock('../../utils/toastMessage', () => ({
  showToast: jest.fn(),
}))

jest.mock('../../utils/validationFn/validateEmail', () => ({
  isValidEmail: jest.fn(),
}))

jest.mock('../../utils/validationFn/validatePassword', () => ({
  isValidPassword: jest.fn(),
}))

describe('isValidateInfo (user info)', () => {
  beforeEach(() => {
    showToast.mockClear()
    isValidEmail.mockClear()
    isValidPassword.mockClear()
  })

  it('returns false if any field is missing', () => {
    const result = isValidateInfo('', 'test@example.com', 'Pass123', 'admin')
    expect(result).toBe(false)
    expect(showToast).toHaveBeenCalledWith('error', 'Please fill in all fields')
  })

  it('returns false if role is empty string', () => {
    isValidEmail.mockReturnValue(true)
    isValidPassword.mockReturnValue(true)
    const result = isValidateInfo('User', 'test@example.com', 'Pass123', 'adm')
    expect(result).toBe(false)
    expect(showToast).toHaveBeenCalledWith('error', 'Please select a true role')
  })

  it('returns false for invalid email', () => {
    isValidEmail.mockReturnValue(false)
    const result = isValidateInfo('User', 'invalid-email', 'Pass123', 'admin')
    expect(result).toBe(false)
    expect(showToast).toHaveBeenCalledWith('error', 'Please enter a valid email address')
    expect(isValidEmail).toHaveBeenCalledWith('invalid-email')
  })

  it('returns false for invalid password', () => {
    isValidEmail.mockReturnValue(true)
    isValidPassword.mockReturnValue(false)
    const result = isValidateInfo('User', 'test@example.com', '123', 'admin')
    expect(result).toBe(false)
    expect(showToast).toHaveBeenCalledWith('error', 'Password must be at least 6 characters long')
    expect(isValidPassword).toHaveBeenCalledWith('123')
  })

  it('returns true for valid input', () => {
    isValidEmail.mockReturnValue(true)
    isValidPassword.mockReturnValue(true)
    const result = isValidateInfo('User', 'test@example.com', 'Pass123', 'admin')
    expect(result).toBe(true)
    expect(showToast).not.toHaveBeenCalled()
  })
})
