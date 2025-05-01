import {Pool} from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'sainet',
    port: 5000,
})
export default pool;