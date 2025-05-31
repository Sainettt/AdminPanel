import pool from '../db.js'

class User {
  constructor(id, userName, email, role, password) {
    this.id = id
    this.userName = userName
    this.email = email
    this.role = role
    this.password = password
  }

  static async create({ userName, email, role, password }) {
    const result = await pool.query(
      'INSERT INTO users (user_name, email, role, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [userName, email, role, password]
    )

    const {
      id: userId,
      user_name,
      email: userEmail,
      role: userRole,
      password: userPassword,
    } = result.rows[0]

    return new User(userId, user_name, userEmail, userRole, userPassword)
  }

  static async getAll() {
    const result = await pool.query(
      'SELECT id, user_name, email, role FROM users'
    )

    return result.rows.map(
      (user) => new User(user.id, user.user_name, user.email, user.role, null)
    )
  }

  static async getUser(id) {
    const result = await pool.query(
      'SELECT id, user_name, email, role, password FROM users WHERE id = $1',
      [id]
    )

    if (result.rows.length === 0) {
      throw new Error('User not found')
    }

    const { id: userId, user_name, email, role, password } = result.rows[0]
    return new User(userId, user_name, email, role, password)
  }

  static async edit(id, { userName, email, role, password }) {
    const result = await pool.query(
      'UPDATE users SET user_name = $1, email = $2, role = $3, password = $4 WHERE id = $5 RETURNING *',
      [userName, email, role, password, id]
    )

    if (result.rows.length === 0) {
      throw new Error('User not found')
    }

    const {
      id: userId,
      user_name,
      email: userEmail,
      role: userRole,
      password: userPassword,
    } = result.rows[0]

    return new User(userId, user_name, userEmail, userRole, userPassword)
  }

  static async delete(id) {
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    )

    if (result.rows.length === 0) {
      throw new Error('User not found')
    }

    const { id: userId, user_name, email, password } = result.rows[0]
    return new User(userId, user_name, email, password)
  }
}
export default User