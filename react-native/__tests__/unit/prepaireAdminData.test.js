import prepareAdminData from '../../utils/prepareAdminData'
import { hashPassword } from '../../utils/hashPassword'

jest.mock('../../utils/hashPassword', () => ({
  hashPassword: jest.fn(() => 'mockedHash'),
}))

test('prepareAdminData returns correct object', () => {
  const result = prepareAdminData('admin', 'admin@example.com', 'pass123')
  expect(result).toEqual({
    userName: 'admin',
    email: 'admin@example.com',
    password: 'mockedHash',
  })
  expect(hashPassword).toHaveBeenCalledWith('pass123')
})
