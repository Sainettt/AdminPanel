import { isValidEmail } from '../../utils/validationFn/validateEmail'
import { isValidPassword } from '../../utils/validationFn/validatePassword'

describe('isValidEmail', () => {
  it('returns true for valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
  })

  it('returns false for invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false)
    expect(isValidEmail('user@domain')).toBe(false)
    expect(isValidEmail('user@.com')).toBe(false)
  })
})

describe('isValidPassword', () => {
  it('returns true for valid password', () => {
    expect(isValidPassword('Pass123')).toBe(true)
    expect(isValidPassword('Aa123456')).toBe(true)
  })

  it('returns false for password without uppercase', () => {
    expect(isValidPassword('pass123')).toBe(false)
  })

  it('returns false for password without lowercase', () => {
    expect(isValidPassword('PASS123')).toBe(false)
  })

  it('returns false for password without number', () => {
    expect(isValidPassword('Password')).toBe(false)
  })

  it('returns false for password less than 6 characters', () => {
    expect(isValidPassword('Pa1')).toBe(false)
  })
})
