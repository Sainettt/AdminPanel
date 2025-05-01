import express from 'express'
import userRouter from './routes/userRoutes.mjs'
import adminRouter from './routes/adminRoutes.mjs'

const app = express()

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

export default app
