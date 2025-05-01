import pool from '../db.js'
class User {
  constructor(id, userName, email, password) {
    this.id = id
    this.userName = userName
    this.email = email
    this.password = password
  }
  static async create({ userName, email, password }) {
    try {
      const result = await pool.query(
        'INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [userName, email, password]
      )
      const {
        id,
        user_name,
        email: userEmail,
        password: userPassword,
      } = result.rows[0]

      return new User(id, user_name, userEmail, userPassword)
    } catch (error) {
      console.log('Error when creating a user:', error)
      throw error
    }
  }
  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])

      if (result.rows.length === 0) {
        throw new Error('User not found')
      }

      const { id: userId, user_name, email, password } = result.rows[0]
      return new User(userId, user_name, email, password)
    } catch (error) {
      console.log('Error when getting a user:', error)
      throw error
    }
  }
  static async getAll() {
    try {
      const result = await pool.query('SELECT id, user_name, email FROM users')
      return result.rows.map(
        (user) => new User(user.id, user.user_name, user.email)
      )
    } catch (error) {
      console.log('Error when getting all users:', error)
      throw error
    }
  }
  static async edit(id, { userName, email, password }) {
    {
      try {
        const result = await pool.query(
            'UPDATE users SET user_name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
            [userName, email, password, id]
        )
        if (result.rows.length === 0) {
          throw new Error('User not found')
        }
      } catch (error) {
        console.log('Error when editing a user:', error)
        throw error
      }
    }
  }
  static async delete(id) {
    try{
        await pool.query(
            'DELETE FROM users WHERE id = $1 RETURNING *',
            [id]
        )
        if (result.rows.length === 0) {
            throw new Error('User not found');
          }
    } catch (error){
        console.log('Error when deleting a user:', error)
        throw error
    }
}
}
export default User