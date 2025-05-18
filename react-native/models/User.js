export default class User {
  constructor(id, userName, email, role, password) {
    this.id = id
    this.userName = userName
    this.email = email
    this.role = role
    this.password = password
  }
  getSummary() {
    return {
      id: this.id,
      userName: this.userName,
      role: this.role,
    }
  }
}
