import pool from '../db.js'

class User {
  constructor(id, userName, email, password) {
    this.id = id
    this.userName = userName
    this.email = email
    this.password = password
  }

  static async create({ userName, email, password }) {
    const result = await pool.query(
      'INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [userName, email, password]
    )

    const {
      id: userId,
      user_name,
      email: userEmail,
      password: userPassword,
    } = result.rows[0]

    return new User(userId, user_name, userEmail, userPassword)
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])

    if (result.rows.length === 0) {
      throw new Error('User not found')
    }

    const { id: userId, user_name, email, password } = result.rows[0]
    return new User(userId, user_name, email, password)
  }

  static async getAll() {
    const result = await pool.query('SELECT id, user_name, email FROM users')

    return result.rows.map(
      (user) => new User(user.id, user.user_name, user.email, null)
    )
  }

  static async edit(id, { userName, email, password }) {
    const result = await pool.query(
      'UPDATE users SET user_name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [userName, email, password, id]
    )

    if (result.rows.length === 0) {
      throw new Error('User not found')
    }

    const {
      id: userId,
      user_name,
      email: userEmail,
      password: userPassword,
    } = result.rows[0]

    return new User(userId, user_name, userEmail, userPassword)
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

  static async getPasswordById(id) {
    const result = await pool.query(
      'SELECT password FROM users WHERE id = $1',
      [id]
    )

    if (result.rows.length === 0) {
      throw new Error('User not found')
    }

    return result.rows[0].password
  }
}
export default User
