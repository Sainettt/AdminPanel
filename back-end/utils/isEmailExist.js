import pool from '../db.js'

export async function isEmailExist(email) {
  const result = await pool.query('SELECT 1 FROM users WHERE email = $1', [
    email,
  ])
  return result.rows.length > 0
}
