import express from 'express'
import userRouter from './routes/userRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'http://localhost:8081',
    credentials: true
}))
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' })
})

export default app
