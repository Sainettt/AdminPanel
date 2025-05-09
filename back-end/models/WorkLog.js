import pool from '../db.js'
import { calculateWorkHours } from '../utils/calculateWorkHours.js'
class WorkLog {
  constructor(id, userId, date, startTime, endTime, hours) {
    this.id = id
    this.userId = userId
    this.date = date
    this.startTime = startTime
    this.endTime = endTime
    this.hours = hours
  }

  static async create(userId, {date, startTime, endTime}) {
    const hoursWorked = calculateWorkHours(startTime, endTime)
    const result = await pool.query(
      'INSERT INTO work_logs (user_id, work_date, start_time, end_time, hours_worked) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, date, startTime, endTime, hoursWorked]
    )

    const { id, user_id, work_date, start_time, end_time, hours_worked} = result.rows[0]
    return new WorkLog(id, user_id, work_date, start_time, end_time, hours_worked)
  }

  static async getByUserId(userId) {
    const result = await pool.query(
      'SELECT * FROM work_logs WHERE user_id = $1 ORDER BY work_date DESC',
      [userId]
    )
  
    return result.rows.map(
      (log) => {
        const {
          id,
          user_id: userId,
          work_date: date,
          start_time: startTime,
          end_time: endTime,
          hours_worked: hoursWorked
        } = log
  
        return new WorkLog(id, userId, date, startTime, endTime, hoursWorked)
      }
    )
  }
}

export default WorkLog
