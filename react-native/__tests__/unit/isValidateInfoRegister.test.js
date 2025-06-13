import { isValidateInfo } from '../../utils/validationFn/validateRegister'
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


describe('isValidateInfo (register) isolated', () => {
  beforeEach(() => {
    showToast.mockClear()
    isValidEmail.mockClear()
    isValidPassword.mockClear()
  })

  it('returns false if fields are missing', () => {
    const result = isValidateInfo('', 'test@example.com', 'Pass123', 'Pass123')
    expect(result).toBe(false)
    expect(showToast).toHaveBeenCalledWith('error', 'Please fill in all fields')
  })

  it('returns false for invalid email', () => {
    isValidEmail.mockReturnValue(false)
    const result = isValidateInfo('User', 'invalid-email', 'Pass123', 'Pass123')
    expect(result).toBe(false)
    expect(showToast).toHaveBeenCalledWith('error', 'Please enter a valid email address')
    expect(isValidEmail).toHaveBeenCalledWith('invalid-email')
  })

  it('returns false for invalid password', () => {
    isValidEmail.mockReturnValue(true)
    isValidPassword.mockReturnValue(false)
    const result = isValidateInfo('User', 'test@example.com', '123', '123')
    expect(result).toBe(false)
    expect(showToast).toHaveBeenCalledWith(
      'error',
      'Password must be at least 6 characters long, 1 uppercase letter, 1 lowercase letter, and 1 number'
    )
    expect(isValidPassword).toHaveBeenCalledWith('123')
  })

  it('returns false for password mismatch', () => {
    isValidEmail.mockReturnValue(true)
    isValidPassword.mockReturnValue(true)
    const result = isValidateInfo('User', 'test@example.com', 'Pass123', 'Other123')
    expect(result).toBe(false)
    expect(showToast).toHaveBeenCalledWith('error', 'Passwords do not match')
  })

  it('returns true for valid input', () => {
    isValidEmail.mockReturnValue(true)
    isValidPassword.mockReturnValue(true)
    const result = isValidateInfo('User', 'test@example.com', 'Pass123', 'Pass123')
    expect(result).toBe(true)
    expect(showToast).not.toHaveBeenCalled()
  })
})
