import { hashPassword } from '../../utils/hashPassword'
import CryptoJS from 'crypto-js'

test('hashPassword returns SHA256 hex string', () => {
  const result = hashPassword('mypassword')
  const expected = CryptoJS.SHA256('mypassword').toString(CryptoJS.enc.Hex)
  expect(result).toBe(expected)
})
