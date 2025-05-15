import { hashPassword } from './hashPassword';
const prepareAdminData = (userName, email, password) => ({
  userName,
  email,
  password: hashPassword(password),
});
export default prepareAdminData;