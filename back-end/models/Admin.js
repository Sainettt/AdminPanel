import pool from '../db.js'

class Admin {

    constructor(id, userName, email, password) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    static async create({ userName, email, password }) {
        const result = await pool.query(
            'INSERT INTO admins (user_name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [userName, email, password]
        );

        const {
            id: adminId,
            user_name,
            email: adminEmail,
            password: adminPassword,
        } = result.rows[0];

        return new Admin(adminId, user_name, adminEmail, adminPassword);
    }
    static async getByEmail(email){
        const result = await pool.query(
            'SELECT * FROM admins WHERE email = $1',
            [email]
        )
        if (result.rows.length === 0) {
            throw new Error('Admin not found')
          }
        const { id: adminId, user_name, email: adminEmail, password: adminPassword } = result.rows[0]
        return new Admin(adminId, user_name, adminEmail, adminPassword)
    }
}
export default Admin