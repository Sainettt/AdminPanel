import express from 'express'
import userRouter from './routes/userRoutes.js'
import adminRouter from './routes/adminRoutes.js'

const app = express()

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

export default app
